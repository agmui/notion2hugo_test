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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PZL7EEC%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdWEKEDL7F4Ty74OfSm9U3hZA0dQHwJDfivf6wRJXomAiEAuBkE9dEqbeYklN5etejAGJ4Cqdh3FKTX0lSzWXr%2Fo4kqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEK2ng3QPrs5RWb3yrcAyjn2u%2F%2FpwvRcd2Udhk6a6YxzNqZrg0ICwcUpvJ2Bqr6fR%2FAMPTCqMiMsSBGHCcBPZYEEJ0MBD3GjzNFi6nhl%2B3IzS%2B5v1ZvYOLoQ3W9qwVT9Gsyeve7B1JHOuUbwgfmOc68akCQOcWqpTIa0umqshaF3Is9s2vt3xz5zG1kX8gfW7ZsLaNycC6lIpkixh9FFoHmEa0S5g8jTeIF5Sjvl33Z3A7Qm7pYZ3O2OkfMYn42FuawnkJXtaCeNEfOn7JeUIk3m4TE3DMMwC%2BAK8b%2FcMZLKUDKez3lMDVc0IZ7luBw6KvLX7ztfRQv5jbkOSs392XqHcT01w1Gl9%2FuuLN040VFbIwduHBtu8hj8k8YN0rtQsVUsjP8GYZbtfYbhPiT3rlm62fRivfCxav%2BtZ0dyMJ8x%2FPiA9ctiMf8XfGH%2BrYHjd7rUWNzfB73iqYSB1sT7zHpye1609DS5wsseDnUm332CXjLqAh7sK%2FhEahT3vkjKcIwIrjp35rMzdz%2BPxIDPKvZwnaCrSipcIeWbNC99JXWtzLlxHWNM%2BJgszG4DnKNpTLAIU5%2BKYCaBtlH7HsuFupkQAbtw2lnHhoSDje5HtPVDL%2FOFMTEkaj58Tqyfty0HcKigMGbwDXLYSbUMP2XsNMGOqUBWFLS%2F0jNPMXsJ6yDWlaWIIIpkDBEZTa8O8RDcn7J9b7ttESQ0%2BBq6rolu3rTNX4XHOQMxUaXC%2FQ9bUjNPCBXWZQWlB%2FTscw%2BHd3qpY6Y%2BytqZj3i24DKt8BeAXMTPm79a7k%2F6XEK7jdY3%2FARvaJiYXpSFEFa0GRgrXlx%2BtiYOFnWPwHX6uSlCTzoXNtrORQ8ckFWL3pJc2mmQvf%2FMp0ypt9ek1gS&X-Amz-Signature=276cdf47a1b8c9062639e1c703c80878b52e9df515e9132bb29d0c790b05ca40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=22f7c02171b49e693440626b2ffda5b69d6d974cbfaf98f2016d71c0396bfc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=8dbede63163d218c5d777e2d30fa146ce4b2c7e70a70499c3d1d1e7bbae4ce0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=219247c3b9aedeb405d613b7074c6145942cf8778ce5acc0fc7212066bb550db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=eaaf4998913b2fc98c096b101d334a110c044d7763f582c632581ff03233474f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=e38bb4f2314559465ba44b82a2ef510caf1a50ff978f4ac2f39b031a57119bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=fc6e97c5a89cabdcf9cb8944157014d543c7c07d351586a076ef51ad4be560d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=ce72bd6fa842020729198dd4459b9356b4300e6f6708712a39dde9d3bbe6a988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=d4027b9d8240fe61bca5c143f208e467880ed0d8b81957a4348f3f9fc6106427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=0ad8196351d2caa05e94f95acf9de407470757d6518e9bd6d6a148934f20efd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUEPE6B%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnQt1YU4GqUh4YVUPayuWBa8JGJt96vuOupyHMqApoAIhANJVMV7XSoIzLuvQoZq71GOtwwlqu6gzoO0fCmGjjzLcKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFLU5oJZLYTOvb2okq3AONZLHJjP09gc2wO4osbfhk1VIdV6NwoVsYzLrTG72dP2c4mZr9o5LssFdIwCaOy2FjgBjnBA2xlYNMm34ZZGIKL5w4w5NbJnp3WpSYn2svQhsbf%2BCOePpJw9toMjdKoYytdPhbFPaRF4mErF59Dr1MK8MLONQTjMduBHhq6NUhXcuWVU%2FTD5R37FfClPPgfWY5Rya7AEpnPMywaD1JD8M1w6qMcShDMJtFdcV%2BVX94HTxZkz5SeXMn2b1w80xX0mr0JG5o%2BPRafIB9PechGeq4OtRbk0bNkISijWajTC37v%2FaVUNT7NbyD5bup6DhSR8Nu1on86L0mua%2FgzS0TVCdjMuOSN7EyaCAFztkctaZeQab7FPsnuON8DcaySXAsqhvoZvGjLDsF2zNpyU28AIBokFY7pzuJJTn7XmfSshToG2gFSJWB7l8WbsDmdOJ2IlqHFyqDoYuRJd887Rnw2eG0TYiE2Bz0a%2Ffvn5tvUHihMHE5cvSnoVbuYxi2Jj%2BVAtsPtyxHNjgrfVMBkz8d%2F4SfY9w1vJZXthXhpDBlzMvmGnM5LCW05Mb3lFCwX0Qt5vj9dbTqA7Vexh8Mp3BdJcPmsTVQ%2BKulTnVv6D3ZlP5D2Rluwgzf%2F%2BkgxmiIkDCAlLDTBjqkAVfWnvGG16zigMTUqp%2BoGbmFXervLvOeMWEdxGVvaesQwahLyX%2FiunsbEbk4neqzB1f0OHXKFwEl0Oyh%2FnH%2FxCecT7rcXPJrSn7qdPwlXO0IBduUGnauJPVfFS0yp3nkOW8VM6pUzEmaQDj93L3q%2Fu6szgXhVT25e73Jr%2BteoARVDJ4h5rte6hq2IaI1u4hHfOBn5yQIUhDGfqLBYcFjZmfGzB9b&X-Amz-Signature=eaaf4998913b2fc98c096b101d334a110c044d7763f582c632581ff03233474f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
