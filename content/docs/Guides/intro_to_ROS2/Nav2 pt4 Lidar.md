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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UREWTRQV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDUD2Z%2BPOPw28VAMORZSwtiW1fYe6m%2FuDSqcCgbVifTgwIgSpYKl0XAB60jLEYZmtkPxxL%2BeyNecorg%2BzVn1iMRXcgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI%2BY8b4aOrV7oAZvMSrcAwpDX2uByNfpuhksNHi5UWnXRWryiekEReB%2BhsCvTJGenWzdb17AZdxdryhljLSea1FaxoqMBHEq5J8Y7T6NaUf9mrzuWormii7Kd04%2FwMI9nsGC1cBRQMM4ZmgVZlWMAnCKu%2BIy%2BfrPl09q%2B%2BR2JrAa9LAoeafX9Wi2JqC7Tj5Grwp%2BcbkxIrDGLpJXVp6mVi9rc%2BUHVv9vYXeH1hAqGMHcBHNvwo%2B4Y0Hw2vuPwdoozgZShGNS1yjQ7pIZ%2B9%2Br3acXfajMWwnj1GvEVT2aq7bfUQjv7hpORpAdTJQMIUehGkSNm1YqHxwojGxb%2FjpAQWdET7ZEG%2FphHpZ1PabOU6N0gFGOF3Kdo2Shc442jgxglxeQXRIyC66y8tq4HITLmpXPYamdspZeRIaZ8%2FiLO5gUwdmD%2FNtkDyOYnAE4%2Fzo4ptVbeiiSYHvMZm%2FjP5x42WQO84Ew7zIY8l%2BLUHDDElIiCqlIJx8OrGPdf2TfK5vtelsTqIFBsOgxahf77CJe6SQ8hr1AC5VgzaG%2BXCjwBnC63tNlCiskJvtZnogChGuEiAXu6kglpagFOW2rmd%2B7xN2b7LL%2B6dU%2FEHFvTJR7S4RJ6QMT5Mpi%2FWM%2BUax96TXVn83GjMKYVaNnHqhGMIz4gMUGOqUBDDXBTyITiZ49%2BAxyMGCGjjq0rsyf5YeP%2BtmwMViG%2BkdSJ9aTOdHvD8Rw5fbfR3l1iASPjcMq7fRYXPrwafZSsW89EMw%2BxlEHIICyRxTKj8sv4sSQtorDLXU5QI1qVvfxvyBNqcnSV3jUfaOeTmNQrxSXBN0dgGfsfsDh1NK2nNl4OhZN2HJ%2BcruxfINJQhPRfVFK%2BtGxJGdWBTdEG2vE7c9Bmwk%2B&X-Amz-Signature=5a2b57a48ba95c97022a151a7f92a982441e5e94ca7368aa0fd6fbb387fa55a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=6b7449465f7ae02814c01edb69e0f4e43828f238d4eccd6ea193bc71380792de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=977c87f4a3d3409b01a4a93bba671e8635a8499dadaf41fec3e95fc3c779481a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=6cb7d4f3c11d41c8bae3727b963e5a6652edfc9a9d0b685a4db307c454ce6a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=114bd45b1493ec8fb7ec07c712ad8c5409ff58f9ecf4618d532f177e56d6e5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=afe19a5ffaaf00fa38b4e1c9bda6f336536c25a95f6e6878cc6ff9562f2cab56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=0f6ad5c9d0a441a12afb0140b67536a6a71544b34e39b22a15e584c0b0891d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=c926daa81e088edd4497731a91a944a6da10880485a37e17e0aae985bd8c7412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=0dca12d43c3ce109c90679801e346eabe31fc8cb2ecc9458cf47a083b482dfd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=3399037fae310fd264d5dfc0e5cfa6c13a012c1f9947c1fa4ec70501afccf311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=114bd45b1493ec8fb7ec07c712ad8c5409ff58f9ecf4618d532f177e56d6e5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
