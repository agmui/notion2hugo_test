---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=a4e801b12dc508bdcbc1cfe61710b03e6d339365a1dac2a8ee14f27f7da84d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=4a7d95407ef6524db3773039d24d3c359635c1e34926a6672bc8e426d2033108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=a8ec81ff96a36846c0aba75586f03ff70422eba35039bb54c5f016f2b0bf108a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=cdd7ca802b966198969e49c09c1ac4a065379a358c10cc56e1460c78e5c9fe25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=5098d0009ceed368ec3f7c0bf9f263506db6a1bbb8129d477777f11e9ffad999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=00276da9edf00bf5f1cdc56091e0bcf492f2de1efc07bcd28259b694d1a3fdda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=dead479c97c65efd4653e57ad3d916ebf3b8913f6641a2b4ae5b4f855a4c5c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=bcdd44b5f23ca2fb0bf1c9f692a08733aa14bda87a6225e241deb4143923d300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=92359c5d59c4738af92264c53e3db382839dec0df483616b7ed0bb32d3987f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=204e66e41b2ed0732c708e3bcd0fcb1a59f7177bec92f3bbad904fd851b24af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJEGLZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY9PWASObyo5PZjpmJpSYzEDUBCwiBM3CGyEU8J7SLywIhAK48l%2BpbYnhiPSrvNrXymAufsBsL4dD0xru6tkGF9xzvKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLH2W44mHIwNBUimYq3AM6dOqkvBeGSjU8Et8gUzJNTwouRN9RZMdS0AwDk5huHaANOkKRUNN2Js79vg0wpT2O0ZYiDlxeMoqXsTVYqmtMQKKbrrBD062QNycOR%2FRASbqGyGQRqAkZ%2FG2g91ApvESpDMb%2FypLyhbXVlw6VOScfvCCEXh%2BXI4f9H%2FgmhGXQ3Rb2k8Ama4YM90K4bDrlogqZKo31Yg4JiyuLSt8BvLZUFg97Jk0vjage2mOTQLnMNDOqgIDhkufNzF1CidpefM7S06yRfgcMpL%2BTro2jh91EI%2BJNEOh%2Fot3vC2uEPdG9sLrx1QkRF%2FmlF9J5Mx%2FI2AJexqpuZkbKzFgsgLCnFC7IOT%2Fyy74tTKhHoukNi4%2Bk%2BzLgIF3SON5y6Die5wyCe2%2BwhaUALJtRBACsSmpFSi9OyqQYonJKpSGjyWreTyrgXX43FBsiT%2B5O%2BLe3BvMX6uAyFI6NH07SxjOi%2BHXyoO8RFJ6m0KnylD1DWMGHt52GxrEoRgksLblaOjgArxZ3fbelvKzA1dqPA1l%2BavtZKEpCHP75T%2FVGaBHwzHmWjZ3nZcnIKdNitROviZOw4%2BGXmbOA%2Fc%2BnUOBvw1AwWKGwjo76N3NuT36xTCROpBWP1WvSOzTiaJUZXG4BbYJRhzDjuuPEBjqkAdVYDrduXJkX8SWo1Ha4imSE01A%2ByYCx68c1L117BJvYGu66Vc1xpFe5KDHLisdaWV6OTFtAvS4qfEO2vhradNhZAJPuFoKJG4%2BH6TBuWFTmK8p8nZ3qeGl8XCNUvboCHziHGzfQ8DOA58y0zZ8oXHB%2F4VX4hhE2VxXN8jh9%2Bplcm0VayDAJhRmCSJL4F5uAZXI%2BK0RvwLpuCWNc55Dq0%2FcUntGg&X-Amz-Signature=d0de782e587bf9d47137b4ef29bb74509c6c35700bcaef136c5441971c816a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
