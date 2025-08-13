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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=13559b91209cd58eccfa403b6f9309af3f16def6acbbbf234c08e0ea0323941b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=794fc2b58b17cdf7d92714c7c9cdeaec0c424a916b082f01c84e23dbda32a834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=3e3b4733fec68d238513e14161f3063b11e80b87ff1d5b666820b35b67f06007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=de68546a4a852f184a1879634d20f21308c1b18c31f85cf407d5d12a7d4fb6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVRWIA67%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQ3au8AzMoJpcyf9q9BFgBPWUgoyPWGgHKiosUH95pBAiEA%2FE%2B6f3lnLp9W4JPKRTBu8ICpBZSyXuEIpGrZeQD6vQkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGRR3CWHwCss9UZsRSrcA5ITdt5QluSMBL5vNwlmsQ0RzF1Wmf2BRarHEEfrWYMzqV0sG0QhY%2BwsgUZXoh7j6dOn2Y96imrnKx85yksmc2UO7qNOp%2FL4b8%2BS4j74pFJ7BGHhB8OcmIJo4NuxLBHr%2F5c7miIlkaZyPEV8KVvwwN3XlSGJ375V%2F0pO7i91T41M6XWUcl6u3LmfSwQGPi4nxEJueuiruRHeLG4uG6Ce96XfdaVGCt2XicWlX7GjfRNBW4NJMWenGS90KROSDv5k5o6LROGEUvUKQ6%2FZTDqChbPP0KkVFkmOPzSYRmBaox79zz1eCliidhQ%2BuxzLdu5r7%2FBWfxFTqUgA%2Bs7mX4bxa%2FO9rzvjOwaccDdzjytqmEhiyM%2FCOVB%2Fei7YMSbAFeTn%2F9ehVtW08iN1CJBndU4qPqnXJof7SG0MtMk0I6kUC7%2ByqNrWg%2B7eBruPqm%2BQyPeixyhNwluNRDqH3L%2B4JZcNUshseMjtkH90nXw84EIYm5hAWzhEO78D2HS0jLXpGf9pW04Er0pryYepsPvu1d0QQOz6jmdgp4aX3R2LTRrt%2BX16JYfBR6G%2BN%2Fr2ctl5YsGRyqYr2w7ggD%2FKx8XbjSZCZKvqX8tvkTYCa5LG0gMfmj%2BWKu1xoOZIwmiCB1W9MM6g88QGOqUBpubMQtYALlKZoTYmKyLyWMhmsG%2BKr4gLO9GdiZQNVKM6o6UXhazM%2Fvw17jrq2%2FXFr8YAgs71vUWotXxAT8PXL46umy7pmJm%2FBpw3s6l2WCh5Wn%2BX5gtZuwm7iJ2FKUyzuxXxmFYVOFvTUaKtUE3Bvk2RB3qBuq2pn5h4ROOMSfPywPs4PiKze2YcB2Z2ceORYKDY59tlRQTIPumTGi9M%2FkfOa%2F%2BP&X-Amz-Signature=a2664ca1a1fa6b0e504ae472df92b50e38b390263972ca181fff26aa0d78fc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=4b4933d1cea6b303d9d95b7a51ac7cd3ccb68365f52f71d800d824a7705903f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=928963952e2a09dbb81b0dc0f40c07afe1a11749c5275f640d14500b5bb8b961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=b8a7bead7b84dfc2e2d4c8c853eb715f0fb80ce148dcd80c6b0740b357724ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=2abba002c62a65e03fc0035bdb42dc9a6325036fe590a61f72556d941e27bbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=87121478e3440f8bd46e46cd1f302723680235f05b260fe4c5a453628b162f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVLX477%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp9knSbIIdBUd6zwg37XLy5aYUXaWM4Cdx1yh5VLl3lAiEAxgP%2BM3HkR6rrg4FN%2BZZpoVocfhXrEIpsYe7tFoT8xCAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDY20MJi6zJ3cMPDbyrcAyn9K3ewuJN0jh%2FS9CuvDlPpWaVKdeEuQB0kmyWBP484wCRt3r8yxLFT%2BhqZ0GtBqVVwZ45RPRMwx00FuX0UqFtxWQ%2BUAEMF1iafFL%2BN5chKog%2BU8C3FbPKg0eTy6Ckzop3f45kBAfaZMBdhTmBJhXN24I8gAUiFjJ0LiMe3ad7MkB9yu5Z8kBvQkb4mqNdUcA8gpwNHiU5%2B4DXeaUMT%2BNhpuvEQ5XtxYsa%2B5q9bYFz7bXzRxCwJOKv6V0W2XOmSlSJrkmR766Ap6vlAuTELTUFngNGnYUImW3LDGcm5isz44%2FfdngcVjKQW%2BkfPvlU%2Fgra04lrx3mdHfbkzRj1FLXxatDlJ%2FBGJcT9BR8UHLXW5jmHaxXFKyn7csE9ia4T1t49eus1CwQ4ugUOhfgBe%2BQTs924w3qW%2ByJZGpMEmtdwSKBRLAN8uWX1RYRWdaDv1nVccmU4iJHtddxJd18T6u6bITiD5qww9M3V%2B7sZ50LuMu0rlTFVE9SDPt%2FNoINbNy5zZz291aGp42BJGNkOuTzuy7705nXbXBaig7%2F4NkW3MpZXbbjg6gDHHZt0TtdTpJpHBgOJthtoVE3R7IPHYZxb1qsG%2Fc1Rl%2FUEngr5UUDzy2PLelvOM9rOMdTyRMMGg88QGOqUBWPpOcoRig0IF60cZoAYVJaRs4FEqv%2BSOBW%2BGJWpcoeD0Yl6xEPt5mfwYWWZ6wTAxADZUANzZT2ONjDD6GByQz0x3%2FhajRomOkLnbk6axY9T%2Fb0jpwqNtTF6WTMUluECUuSMpRpDclLtirhd03MOJBmWUytusVkIsSBAYWGIa%2BRHRfuxq0kO%2F7dMT4mRbNSA7vI2QKi5dnQ4T36RQTOX285As2ZpU&X-Amz-Signature=28a78d31d26f723c5ea274d84b9a71389c9414e0f099ac25e13a2d3bbb7c7793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
