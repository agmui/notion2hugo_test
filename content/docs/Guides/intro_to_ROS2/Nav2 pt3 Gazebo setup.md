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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=737e9605fcb8226a02e4cd311fb83a32fe8318f7dedb1380d7d7e7b7dea0d02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}


#### Outputs:

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

#### Params:

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=5a57890159ce6bbc5574e36dd255ad7e3e56948128252363ee2d0d40d105229b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=bd9a3ec2dd5d13e3ca3e0aada76b7b8110721458d62236e4e35bec4737f884d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=a16d0a40128e073d1f23ee9252b2a5be0888b2be4ac06959428ea2caefb776f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "17-21"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BDCWD2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCZAzL7rH%2BlWCFRB2c11buyq5G3lqbFT%2BNdjsRVpPiA5gIgU1prQ91KMSjm%2BOgSCDUlukpPgpwMJ19VzTZmytCyU9Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPw2pqOapoFOzIljlircA2Es7xgQOhEagAEUSIZMDkazh0SB9usDgr2frA5yOgx3BRyJDZWFmIzJLaRO3O6WcKxOuDXKeBsZ4o85DP2PBsJM5jsNS0twcUYjek46O9Tfdg0sUAMRe2VsggLiN%2FZ60tpuZTRrwoCIGKR%2FURleBmgnjl%2Bi7wLW74DcdiLqFMus%2BH7db1%2BLN17Dz282R5v5mfvdi3RYpYZgzEL2r0Gtu0VOENRmfghM30jLv8bGdXVfuuj9J3elUcIcF30%2F2AnzxzbJB53P52DCEoJ%2BwIZ5k1epBHqhid%2BCgSBXDRVU0mJTxl8xgXLnOhRrtdgaVAo0215W0q9EsdFm7AoDZSpzXHuWsgguxm%2FrU%2FkbyIgHrNzVfzGDBclwglkWOeePkaIPHH7FlkxunjY9EAOZXj5hgojor3I8kd%2F3Tu2hi9Hx05WPyDTH15g1cW2cIEcLN%2BKTFZlUACgHyjstYuFrcpN%2FakpD%2FYPgfOFgMq%2BflH9Vob%2FUVjZJIlolxVH40YdcV7MkZpfQXmzGdyUdphwL8aQBDbrgWg1InwjpTvufvp7eLA9J40bYXWl5IuJc8ttqjJ8BXzMjTR9Jv5iZojmoyglwgD3%2FeuLkrB8io0tSq7UMGFErdVwAs7KAX18fw%2FlJMLeWgsUGOqUBHqC9pxxDsFLciKBc2r5BrW12m9OxgxbWVQ9GuyXQFPt3tvL44n%2FrJlrFRwp7osrShexBMq5m1xvOJNX6lnhgzE8v%2FHL6TGA3FFvv4oH4Xxyg6xDWvTwr8OxmzB0YLcvZz0s9Rm%2BT7HrcugXmwN%2BVcTahSsNQkEZSxdHtpEAJcyaIkpnpPYds1mtIGajwb%2B97Rrh%2B%2Fi3lJOAnWLQwj7aXO2nb4Nff&X-Amz-Signature=e7e9619e0e457b17ff7f9ca9b9a3bf4761417d2a299ae7fd4cda3e37e71826ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=d33e310e6bd6a53565ce91fe98ed83aa4e5c8c5e12a6b924c8e3e036ff108391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=83cacc2be794fcd233a30bf787dd600328740ba6bf409977002f603980a014aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=79c3c4cb7385653b176ffebd72335d8efa0d8faed3b97a81bab68e07d2ac4d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=c0882af83419cb0e3840fd31aeb2bec0a376dee85be91265895d84ad5b6de31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python "5-5","6-6"
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

```python "5-5"
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

```python "3-3","5-5","10-13"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=417823b82a3834396ab3404afa3cc46357d8543e265c4b2720e4d4c1c8161fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KP6TSAF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2zMNMnnFPpNeOFJCj6R30cUlSbB3DGjlqiNbh16XsuAIhAMmOzSNvDWXqONkhUDQ%2FMbMYYbqjDDxPWliomYmin3JHKv8DCHcQABoMNjM3NDIzMTgzODA1Igwc6c94xqYkTZSFge4q3AMdHEmdNvKMvsaWw%2F%2FWhrPVBJfyihh4oIV9%2BSwzofCNkJiYut2FVBEMVszl590BNl%2FK2pT1%2FraH0YO2U6pA0faT%2BkJNTh%2FXTvAeJKkb%2F8gJKrt9s52kZwcEgj4B8tzxifWb%2F%2FZjkWxlFu0v7nzlB10bbYP3udFKAN13AeUFC6TnXoHP0Ex0RombsliaFg%2F%2BeU1OunzdhJ%2FOqiZY9DcHtLm10CMS9Pyrv2wluNHMIIEpsEYcdJbIZ%2BvRoyQdOHYuukiZDcN3I77Cj6iKqe6851T5%2Byw1w%2FnbAiyC9uUimQHcr%2FLpJ9UQy9JGcOpJfHjUWHc0%2BpT%2FHgHHu%2BFxkG6ThW6UwCscVdbE18f25t%2BFhaukmoVdaNQ98ohg%2FS4Z89s8aCghz4NrfW%2BDt4twF5%2Fko5oiHVeqkkwo%2FP2vsLhf6J6DXPCeiCKAlUuJ9k%2BNxnzNBMMLG5BI5EcdRtkY1kLBdlgdX%2FQywfPQnWfEPHZ5%2B6XEZx5jb2srbZzqnLsPNq5RfSDT0tbGbCblTz%2FMNcc0zQa%2B1TvxYe2p1LySZnwtBoLrZ2HoYMbba83Dcjc6kXdYRUBCxFxpOK%2FWRunZdA42XZ%2FspFeQ3Eveo6tsI%2B7n%2BjCMMwndm6mdhNaDR18V8DCmnoLFBjqkAZc%2BsvY60eviBwPQ4BXPdi%2FrfWQNp1XLWAt76VNp%2FmURufkaBA5shvWBZ%2F1qL6d5wQIbbxWhiBl%2B0N5aEdH3almbKx21LpA3RjlnSJQ84gMRQCMlYBvoKhco3x6P9y0OoxEKTqvWSnJxn%2FczABWL60AH1xOm6xlOx%2F9mycYvXa5l%2Fes3WUvYREUo6UVZPU0RfdPjLia%2BGM9t6mr5ulwHKnbQwyR%2B&X-Amz-Signature=dbeddc6e635b6677da4e2e669fcd131674b9ee5255d2951d25d4ae5e503956b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


