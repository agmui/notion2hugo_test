---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=8d3e14baa9259c6d64d81a492e73a537d7e4ad270c1eb7807e1fbb1fd841c002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=2c8fd6ad9e2ebc2ff2779fac8601d3be2813eea465da40d639b7f520e2163014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=9708f1e98d38051ffd4a58afaf166a5607cbe67cbe0f8a0ad847db9600e4bb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=950d6d96b3b6124107f8b21c03f13212e7be57087836fb2bb036dedf46539703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=2eadf83f3ca8cce603325c124fb6028f035163e02ecb8ca547c11d755f6c0fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=e433daecdefdd5149b1befc2e73e8eb6b61220078454ff9e02636c5b11aef059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=e5d5f749cedb24d81f570c4f1daf4ac1a59f1bf89de032cfdb882ef5ff4e010a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=e0219f2b4b06850d545388d7b92e696afa841635a6a453ca45563acd6c4697e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=e4096bb906018ff55ab5a1b1d80b7c1f68d16dab06b77ad0690538350801016e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5ZCOTO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2IAYm2RibyN92VERy0AvjEDeJ3V5FB4X1sAUmEQV4gAiAyyURq2XQl%2BMFBaFYdjF8BwNTsQs8NO1rqPV9TdHt4CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnteQbWk3gA31s8MKtwDXCIK6QW5%2FoDZJFOr6WSYmw6tL9tfWDnbsD987a3rmmMpA71oHoU5OuW%2BFukJdOxnCYduUVP6sbmkyviUs%2F0UvNWHlU4rzO7f%2BulrvcYvsDs1FIqSvD%2BWrpepE%2Fumpudy2zpDKUpzJmOiAy7013CuzCnbvH0%2Bmg47I2rXDJHHinu%2BzxA4ayc6z63%2Bs5DQA5RQeg%2Bo1%2Brue1M3EJBk87c76GnBsQzvVl6medAc8mM4SFhWBoOS6S1UA8kUlgwDDfuQKtUvHWDYgw9Lb%2FSQGAD0FlOIib%2FVX4IvbDHHtTrcbmzzGRKrl966Bxrx9GdNSYHIshydvrCS8IzIToQxdDJU9%2F7gjVql5H3Nfw8ps%2FK1IaogJUXkMkOGoQNarLODlKr8kvnw41UEbE3sjqgTonDGWblGld3zH8VC3UrLhfgHmRzN1tSD8y457NYjcje8zXmLg62giFZWfZzMcWCm6smslXrxUGpmnhVlRREr%2BGVPAbcdY1d%2FBiRC5ZN1que6guF89uxOkl7LUPbjtoiZRPQhF4tXjfd4nXx1JcO6yKZetMx7b%2B0hrVD96Ew5XVwlPLD6tHRs06GX0NVA%2FomAkt3ooI4hoVX%2FrKu7Sb2XR%2Bd3DO%2BhNvDm0SBIozGXOPAwprCzxAY6pgH1NWyPv4XYXSNzedNOnbfnCNWTVx3qiQ1enIuqpdTvVqajtCz8OLohUY%2FV9ff45TLQa%2FNszyYKl4UZf5svFfBI6i4iIAIF5klO8CMwUX3R8z8l6B%2BtnhzKTgR75uIz0Cwv21wU8YN14cSbu94G4nqhIFmXgpUJdKsWkMEVFTz%2BYy%2FZ%2BaA3eVWZSW0QBzNKzzN7SiTkK1ICL7sY6S3p36uw9p%2FHtqW2&X-Amz-Signature=b87480122948039e429b32b4d5a3776cf373473e2657949100298d32c20a345b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
