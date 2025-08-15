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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWVG3L2D%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDFuPrZYwJkBhi%2BS29fw79%2BJ1nN9WMzHypNF3QfaCFzkAiEAwlSG%2BjNVmX08xsdndgQygxl5oQNdw3JfyAJKHzzFbmYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjCqMAwB7iVGSYnZircA9fEySdrcD1EPe%2Bl4VQ93df0Vpu%2Bg0tD9uHbgRwXIUeOcm2XOCscZRsucBTH8OvEjguBcrIAP72c6163Fqd754JeDOcP5k5G%2BbS0YgTMrbTE9ZVMuNXnJ8ZH1k15m1yJuEhq1R4NV7ieB6Y1Sr7XoMZHz4ELlSwW7ecWUK%2FyqYJ0pOeZDjBHvWS6RUYhKMzL60lS93q6CFjMzuIXaPR4eFskhDFbyB7H%2BzTgs4lbkqQNFxKSig5XKBv%2B3dJ3Vr%2BO%2FW5UDGRJe69D%2BrlMhB%2FIAJ9esrqx%2Bf4HmAmoo%2B75WSPu1BVhHnk8bJftkX6BpiAiPGPfdlSCMPEat7rnwPCYC8wkeRrNdvWk4H4eUWAF81Y%2B53%2Fwpy48DPePhliwxzIbvdW%2F8nRwvcPgh5nyPZkMcFMSx5r58V3x8bBtz0uaIFq6tDsgIsSOzrtipRM0wxQ8R5XtOt6ksAtMTR5LvlbBsoEoYT1evCqJleAzVJSNkIcKIwGAdQ1RxzsgZdC5Wd1XQoYzIRfnBtjGOeG5PKRr1mfuIRKELEHwBEKRCY2Ycoa%2BD3Odtos7uQAjsXfUxwKPPVyIs2eYHfBpk13AbtxCgqHaeOXNdjD4J%2Fs%2B0ix6ggmb%2Bog6yzm7Gz5DmTatMOai%2BsQGOqUBd6%2F7CcCz5lGSxT7VcGjVo692uIC1Nc2uH%2FxmjaDicEbpzPijYziWlf7mXD7Ho9nDT%2FQBC6p6jnYN0RFV10LRKddxSjiq82hvI8Cj3xpSxReUmk4Mrvhb%2BGxKjiP7lo5oVnOU8N9hbgVz5hVQJfzCvWeHmzBP5QvQyK1FtY%2BCK8%2FRnJMuYvZ%2Fy%2FZaPhV2pK8UcuKPHa0Hs62v091VyQ17%2BC9Zk4qL&X-Amz-Signature=98edf5024db6342b21a518a793409274259111670add5a8601a29c35368c5e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=53a9bb89ec65a71bca34c90d1ea8710c9405e588e18903eb40c6a6a88d5bda59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=22bc26dcf8a4cb11b40663823dcc15d0ade438e27cefbcacbe62dcd9171b3214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=414f7d716157c621b3c55fac765bbf58ccd3e0260775f1db49e1740a13cec59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=e8278364a909d99d1c04925bb0c0ea9d5e509b8cd773a4829d43d741160d8cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=54fd1b519c5db03168eb828220b6f0ad2b5165e9a4526b8c0a807cf14f5737d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=650eadc0c0a73699355f8f6e452bc928320181861126f7862e19638c849b85ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=8f1b1f70c9ee3c3d5d11b10b426f90f3d8e70b5ec8657cb9d5d68623f6e824f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=cec25102185dc647c77db8306ea89634373be1b7402cd66c46aa5589d7f9f71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=5e9bfcb61a4e8a15fbe6a029e46e634a6c393a0c052d3ea2a8945461c4ff7d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YVA2FQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDSW0uitvjpPDsI2UGkIFxaLboUYQfCLJjMzBpRpi2L5QIgDLjb2nzqlwb6ElTO6zlWgthWdWe59Ru0bl1XeYDRLK4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP5XejlBHuFsXjzQXyrcAzn5tfzy0L8DKP%2Bs%2Bgc%2FYCjyc%2FyfoWRs4OdVnklQILCdg%2BZJYYxJLN2EdksnMSYok7rmNoDmCZ%2FZC3Ph7TFgRwkTptoDOgOPSDpBuP5oxkBaHUI5LrvQKuSm9mlNtY%2B6TTXi2A4TgY7dLLHOa1M%2BzrgEKgn1TBhcOfa9HKnZ2%2Byi8l0VV%2FbzwyKuz4wdMeewmdM29R0luifXW40Qejj382o9va%2F8s788msitVSkIIwTMpmCH2byyVsfBVf9MM9sQUwQdH3Ylc1RQOCPOE%2FmVP6L0sxjt%2FHDE1Eqx04zp4Y0eRR8MS4%2Ba3n0JEgkWZ5GH2GN6uDXinsDlfaHjtg1kTiF8sUqsWed3GLrA0Q56KVhKLu8apKiTBFEWh3pjGZqywtNXL8RY5XiYX7RHMFQ79rKJBLxBCb9d52XYQcwJzcb0YsKrqekUbkoDzEVJZZokntGwLVuBQ8H0up9pCOHn2qtb47KUcN44GcQMjHxFzEfoBP%2FrLiG%2B9yJrGFKb7Q3HyUxiqltPUNOQvhvP87awjPQegqqeWvdNZxzfkU0ScpUpHAKDBKlqrxCZhEr33LgOd1FakFz0Y5fS1N55w0QxTT5rZllRRkD1SfJ%2F9TNQjgWKGDhbOnDPqeyx2oEaMJej%2BsQGOqUBo7y6Q5LF7V5V4yDlRNpfJ8y4UwslFRfB3OKe61W13ewIkxb0DaJDpqi%2F1WBD3WPvGghBc4LMMhibYNElCN%2Frj5WbZ7CMrxDZrdZ16VL%2FEYn7jnDunnvHyGxXEmp%2FHGUfC7%2B%2FE2q9cDD4Gqqr5QPpiFprctdtfY2HRKJ4wpkiHpvLkWzbt9YNbY668gelDuPUUPl%2B5Y5kF%2Bkf5o4eTJQfIC6N8NzG&X-Amz-Signature=e8278364a909d99d1c04925bb0c0ea9d5e509b8cd773a4829d43d741160d8cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
