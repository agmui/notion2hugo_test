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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=28b26d9cf9290a6586ea9046ec97164cf6d3ec6364fda3fe786a3db2f34d9732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=7b3d9fc809a1341aab91f4fc099ae74c3cb1145be98fb146bf4738a5a49816da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=1dfc067b8b351a9df5578ecef24ff74c779d3010a3e4f846228384d4124f9768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=a62ce452bc4c312b8a2ee45959f6c53fe180fe8f8cd127ff4ac463276c050654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZASNEEPI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmHGjs2kRD183cTCI04QBUp3dp65uc4SS8BRdTpDjxdAiBBQIoDRfhilmHWO%2B8vbog6yLXA2FvyDPFnVDk4p%2BZNkSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMe%2BR5ukcDMV8XG6GKtwD2DnYD69%2BCsXNiVB6PO1qaytutWyhCWaS9%2FpxeKhp1KpZKm2kmueb9SNpTVy6NvTpzxXL6uKl44Ej0KAUeDJ82PMiXM0SN2wB%2FmKWfkrtzJm%2F2quOkARC%2Fjj3xOoBupLW6PYLw2CVDmVil6SHgeP%2BjMj3%2BJzG%2F%2BowI0bhKjQ3RLJGgxT%2F8U7gIfzh1by9KlEZHuGsSQ0eYddqs0ayOA%2BRN%2Fst41CQAEQs5YzkEizlSqWWqNCdkE4YqMS81UHVJn%2Bng%2FUQY4iXjgS%2BkWkDnPoBRcUVtdA2IAyFocfNgZTdRvkYnkWi9FgbT6o5q7emMMLbQ7HvbYhAocpLE4o93reP%2F%2FVTslDk%2FLcqSkjfJFBojXD8QV45Da4qB2xwlMENOl0EE1KM8YqGJ3HGWPYELz6Fl0KNtgL0WKtGqIbWOXw85UF95XPjBykrdWL4gQ9RmGq6BIcpFKFr5WQqjUHByKiZLfVazhMJ0pJE96vxy0tEC4OZ4UXBHe5QYDuocdLxiDgB%2FUpydLs4Y4GOSKRsrmu2GS53iVxXwB5XwN8W4F7iiVHDwTXtohfm0gVN1JB6wQ4P0KCCxH%2Fxt%2F7%2F86TD3kqTAwZNj6djarqIqziQB8F80hF%2FOAXT4UAgSgStUkkwwvnmxAY6pgF2SvvKlGDigo0HiNCU1Crtfj2ooWlFSCqTU3A727UtUS2LbSe21hvPMkHf6sChmBUF5UgiCZ08YYsEZe6m%2FIkctAFb28ZXDdbIu0RMkI%2FZEWH1YzoAoDpf4opXWT8X%2FNjk0hnnrdLnqOe%2BWMGGHSMJGfGZrT2geMyprG1y5Is4hl%2B%2Fk2k096IzPHNDKMeHfHDGZoQEFKlsU89sjpKovVwO%2B%2FVQoF90&X-Amz-Signature=e9300c0f214ca6f2277a8717129b544974456c00a0a5cfd703350385b5e1c448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=57edf88c9956ce18aa9337fc3370d8a0dcef78c99860f2c434986ed7feea6f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=3d657c86c3dfa14a8be5744ca286ed837baa028186753c60a798cbc41c8d50e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=799ca06f4ac5005130417c2df3cdfbcac2b09c56d365d33adf0743fc8172452d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=a2b3f338d24043ebcb77cf738f3be1a096d726c55eaec667e1e9c83e9d080158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=f6d2dcd228f54b63073ed755d91738523b27ff605eb647894ac1c899c77f8421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXBEMXA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMMoFHP1ou4aFe2t1p2HVK1c4oRY9XItZsQ9opHlqSRQIgIVkI1bg70u9uOESIxQVG%2FwvzU1HUm3Fow0m1fWGCDbMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBo8tg7A5FBWQ%2FhjCrcA73r0k9eKGTDxQa4wsgD9BU2%2Bq9g935fCFYo6KwHbUf1ACr%2FsDr6krU7Hbf7O2yOmyzSN2%2BH3E0afZgaZNWmUDJ%2B0ThwJz1oT%2BpJ2OOBDzRykov4G3A76I7VO%2FV2KeMg8Ec9FhjgCoMsKn472kEHo%2FVGlmd4Gb4%2BAHZRH3jyYuznRZP04gMasWHqwzewyiixnpqN7ErO%2BT3uvJcDSYhhXvrOf1YaNDOJk%2B4XaLjyruUVLg2%2Bvx2sXNLGVzuwpt1teTCsTWdp1KeJkGQusnbRTZ3PpLmMnCdqrmO0GB9s9iPyAjnCfINnzDODtsXpxx49fusi2UKzvtrUoZzD%2Bn2N9xmXuumWftr03onQLf0oBJP%2BOBG2jPg4F%2BB9E%2BrfaLBSGNRo4523aWfUacV1mdJh5DfTm%2BiuuFyv5P9PdZZOGdsZ3bh7vpF%2FzaBqDE40TOowoe6nJpCqmyBW%2BveGaGT7Y2u90cJ%2Fh6mxAu7FjfvwfgAE26Xy0JaF1kR2UgTcU9p7nq8Bbosc25HtEVyxrFMkMV1aVHIjd%2BL6QTrPbwFgIbAxxcFZqGXz7pvCebfAeyWn0U07VQIwBd8pmZrbEoaq7XvkV%2FPejpNwjbxORcKZG3sMKMyX9hD%2FdHRzxEoAMOr45sQGOqUBO92pOnE9KcmFBwYeEwSPnNVRKDHkJ8JJLJwUX0%2BpY0l0KIYIhRJo8Q4g7IaP6lY2TWMZUsxLf7JpKYDQnKQhR324lfYu3e2S%2B0JfSDt94YzuRXxgI7%2BQZWezqdGxYj8i0oljMXZMFfnaIjdK%2FvmDiJludFbXDrA%2B7rQ6Lpf5ywkyWXgT9hCgSS%2F9z2smiW1uBl0npRCpzLEXcFA8ng6y7wJXD6g8&X-Amz-Signature=3dce4d11992b195b3678b2a6b4b55f3a8a9c7aceea3a129c24ef5bdb675653bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
