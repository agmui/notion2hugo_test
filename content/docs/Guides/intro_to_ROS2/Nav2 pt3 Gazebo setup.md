---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T10:08:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T10:08:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 153
toc: false
icon: ""
---

Gazebo is a simulation software suite. It can simulate many kinds of sensors such as Lidar, Depth sense cameras, IMU, and more.

Here is the official [link to their website](https://gazebosim.org/home) if you want to learn more

We are going to set up Gazebo simulation for our project

## Install

```bash
sudo apt install ros-$ROS2_DISTRO-ros-gz
```

### New nodes

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=971de374092a8010b8c647919bef0edeaa42a2be618c5fd14c8b7ff50b667135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

{{< /table >}}

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=ebd12e55c28d6bc2076a15171495f0ff916ceed2e8e9ad043fd7b810f7d18058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=af86dbd13092b92b78bab63c3ce43ba9e77645441c4c350f6fb0573c34c1b787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=dd011112743ee77a17dd16e3b18c8ea80cb8778f10968f74cab542201b20897f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

paste this inside `bridge_config.yaml`. 

This file just describes what topics to _bridge_ between ROS and Gazebo

```yaml
---
- ros_topic_name: "/clock"
  gz_topic_name: "/clock"
  ros_type_name: "rosgraph_msgs/msg/Clock"
  gz_type_name: "gz.msgs.Clock"
  direction: GZ_TO_ROS

# Topic published by DiffDrive plugin
- ros_topic_name: "/odom"
  gz_topic_name: "/odom"
  ros_type_name: "nav_msgs/msg/Odometry"
  gz_type_name: "gz.msgs.Odometry"
  direction: GZ_TO_ROS

# Topic published by JointStatePublisher plugin
- ros_topic_name: "/joint_states"
  gz_topic_name: "/joint_states"
  ros_type_name: "sensor_msgs/msg/JointState"
  gz_type_name: "gz.msgs.Model"
  direction: GZ_TO_ROS

# Topic subscribed to by DiffDrive plugin
- ros_topic_name: "/cmd_vel"
  gz_topic_name: "/cmd_vel"
  ros_type_name: "geometry_msgs/msg/TwistStamped"
  gz_type_name: "gz.msgs.Twist"
  direction: ROS_TO_GZ

- ros_topic_name: "/tf"
  gz_topic_name: "/tf"
  ros_type_name: "tf2_msgs/msg/TFMessage"
  gz_type_name: "gz.msgs.Pose_V"
  direction: GZ_TO_ROS
```

## Updating `urdf`

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `mbot_description.urdf` **right before the** **`</robot>`** **tag**.

This plugin does emulates most of what `my_node` did.

```xml

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>1.0</max_linear_acceleration>

      <!-- input -->
      <topic>/cmd_vel</topic>

      <!-- output -->
      <odom_topic>/odom</odom_topic>
      <tf_topic>/tf</tf_topic>

      <frame_id>odom</frame_id>
      <child_frame_id>base_link</child_frame_id>
    </plugin>

    <plugin
      filename="gz-sim-joint-state-publisher-system"
      name="gz::sim::systems::JointStatePublisher">
      <topic>joint_states</topic>
    </plugin>
  </gazebo>
```

We also need to simulate friction on the wheels or else the robot will not be able to move in the sim.

Add the friction tag in the wheel macro we made: 

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>

        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623G2OQPQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDshYARfCIsx%2BR1pROmg4JfU31mNioiWCcZ%2BRtdrc9WHAiEAybEtCCnZWP3%2FX0tSwstHnetRcJWqRIXjUnaDzNZpbxoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEanvFeBaMtqK0tyhSrcA3quvI14x5o7dD1Fk343MmPfW5yLlSMdkcDpsU0qB6AsmB2Q%2BjUzcju1sehO30TZ1umveXgGuqirD971ERJz%2B9O7EjzjPmycECTLfErZsQOfZNYGu83Xu5jC2bluj465MvfgODq%2F%2FOXuM2D0%2BBRhdqVhX6KmiikzlwyhKJdJk93JUxbmHn44KCKKWO6vyi7wW3aH9WpWKFYl09MwuhDNnoqJMNyjexizLhGchz%2FBJZRfEzHcHTzrReO7TdyHizLejWX0YQeAscbEMwcVtzQN3M1p3XqL5UxNAX2PL7uE0qqTnuLH388aVcxH9TU8Azaw9pUs2NFITLCeKXqRkjMZzs2VfoJ48lEwjQwKGUX5y122qr2LWSS3wFCmdPmXBRHWy%2FGPi%2FF857GCYTwUBDKw3RtS7cVNN%2BQUa5u%2Bivt9HdN6YKZNVV28tpOBja01p5aADifLoNrw8PyTCcIgtEHlAzS4IMEGAaAh0KyoQA%2BgdSHOo5Kv%2BFSX8ALg5U%2BZrPdYDLsOH303U7GhIdujK2vxy2iCJH2%2BypfdCzP4wvr9YdlzzAMG99tmuswDQn8sRKqxRKHq65MKINi4BlhHvFYtDinyGzFtHz9xtRKPExPEv65q%2BGEeKVrA4AQm6MvKMKaegsUGOqUB8o7aTPYEE4%2BGzrMkw7%2BkdIrD9zPKeQyu6qvKfNXIWIIymsuIdC62xujjEOC9xSZdhiYZo%2FGSYPTKMn96qwYTxAu5us8lJYSCKUOhMBSvIHpv%2B9dNulnzpqV135wWQWn%2BkR0awDJnS98JHsg1wAF1cQt07FEfNYSoKlG5qO9goSY9Yy%2FTbYXp6bvxFjflZRixe8mkEEPk9KNelzqj3PUvwxLXC%2F9C&X-Amz-Signature=9a6330c67caf35a27b3eb53d8f28596f058ab0a4c175baa73956508ea0b357c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=40d2afe3dc6288aad7ca6945d871e764ef164395ac532910e53fb25d834748c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=b2a01021712ee73c0f0d1b95fe65b97ec2a5e1906fb17be09e411f90c0963394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=d7759f9375641c2d51d391a7e79fe24b47d4c4ef9ba374a7c80c96b2d9d64fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=51f04c503e015f4c074e97825d9a47cd471e51ae5fe29fa7a9aee2b059da1c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    
    robot_state_publisher_node = Node(
    ...
```

We also must add the `use_sim_time` parameter to `robot_state_publisher` because we are using a simulator 

```python
    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])},
        {'use_sim_time': LaunchConfiguration('use_sim_time')}]
    )
```

Here are the nodes required to start Gazebo

```python
    gz_server = GzServer(
        world_sdf_file=world_path,
        container_name='ros_gz_container',
        create_own_container='True',
        use_composition='True',
    )
    ros_gz_bridge = RosGzBridge(
        bridge_name='ros_gz_bridge',
        config_file=bridge_config_path,
        container_name='ros_gz_container',
        create_own_container='False',
        use_composition='True',
    )
    ros_gz_sim_share = get_package_share_directory('ros_gz_sim')
    gz_spawn_model_launch_source = os.path.join(ros_gz_sim_share, "launch", "gz_spawn_model.launch.py")
    spawn_entity = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(gz_spawn_model_launch_source),
        launch_arguments={
            'world': 'my_world',
            'topic': '/robot_description',
            'entity_name': 'mbot',
            'z': '0.65',
        }.items(),
    )
```

At the bottem remember to comment out `my_node` and swap it out for the Gazebo nodes

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
        
        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
    ])
```

Remember to build because we added `bridge_config.yaml` and `my_world.sdf` to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

{{% alert context="warning" %}}

# Always use `use_sim_time:=True` flag when using Gazebo

{{% /alert %}}

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=6ee0a7680790404f0d3ce0a17bd6815b70b542cdaca5187172861757b7bb60f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKO2SCA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtkKDnjH6VUsgOOwqkbfkr2kXhjob2MSuhCmL8whLHygIhAMNYlWeCBKGQk8lgIzNEaMTMVVyvk5ciishuDB2efKGNKv8DCHcQABoMNjM3NDIzMTgzODA1Igyx5C7y8qRQL1tT%2Fiwq3APuRQyoiaZnrPo0%2BJw3TnYCsmM%2BtwiF%2FgJv6CML%2Febrq8Jjh8tL5Gb5WKbBWEacSaB5Tmt4Y6cpSxR%2BLrUpnT1rh%2ByKe2cbywb4IViTpaHWrt27Hjh0lo1ljSeJZxo%2BKJJWzjBsz28X6CXkJjrs1YlujsdIwAEzFINOlVYxmPSZT2X8WNJMzB6WvDgSU9azsK9OZQXYjzlZpqyapJdp%2FJwepUqzyw5qH7394tCw6neE11J0s3JA0PjwZN3qZbFoYi5%2Fp%2F0UrT5sOZDvdLaJOCmD8sPO3xt3SrIadFaAV1nrEaA71Zc8Np%2F6Mgr8Xl7QKCUV2zMwtdxF1nNFniMcwkSS5Qc00FZ72HkqUqfr%2FDtnraWMa4BtrM%2BTY2H6i9gM%2FbQWSoJL8PrnhiliSYcwpUXR%2FppoCLgTA0MopMxVFjLs20sbN2eCIqAiaZnsLLj7BZBfMtJ0jCWRqzHB1sALE%2BdDL6ajxHp2OQR7pIBeTz%2Bej7rU%2Bs%2BCbJODbfs9YtTsS9q2fV99ZVWGcCMx8XEIHMJU7%2F2NMc2HUDGx3zIYKSefj00dS5RclG9TyjbbNlzdEVQvCIKtqzNSNHUlzf466Nk7gzfkceEETqOHK7%2FgjA6sy4v9Nho1LiPWaWRZ9TDMk4LFBjqkAbFM3S356Y0FRxVT9nOLxQRfUHrEHI%2FEhft3PVEshQe8wr0GjmAkZj9wIL%2BMK%2FY90OujEiUJxcZ4WzBZ1J2DyTXBp5nKvEP3dm6OsDBlv%2Feh9X08PXRsL%2BuSNif0s4FMwmV8sgJoag1UZ3nglDYaZvCvmHpn1nMkg6OEAYd7yrNZ2GHgdtX0%2BHD%2BF7RIh2ZjTazTfb2eJ6kd9IumqBpYxyMtwkDZ&X-Amz-Signature=1f096e940ceba939eb193e0f51788f5f4f206855f86b461c347167adc7942797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
