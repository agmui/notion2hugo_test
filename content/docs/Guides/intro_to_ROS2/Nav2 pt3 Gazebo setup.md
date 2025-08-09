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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=9f5d6cab7dec38673fac13f08a85d44defa07ec8e7f8f7649fd5fc89f178dc53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=dd8dff59e90facd1fd40ad30a55bf3629dc491e7b2bb269fb335ee77597f10d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=12e2f5aad5722368801c212fae88e5d42bf10c82262411bfffe4c5421400daec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=f5a6790d030f315bbf459597d547baa802fd96fd202df75ab79ef1f2de967cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKEZZ53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbnCxVZSZZyd6urnFJ1DbOYPGVKiAFed%2FIlvPUIDeBKgIhAO4JDETueIfVu%2FKTS8lgGm7XcI4cQHxL6g41o2U1A0XWKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgoTtiWd8ySjj5SWoq3ANyVrn3i49nIM2T56M5HL24exGRhzF6wwVjQ4kvFNUCZyDWuwhzo3RIknjkA53CQ6YPWf8iSoQXUk47zD3gQy%2Fs2ZjNIbPG9ObUuqB8K8Qd9k9LYo5s5Bl%2BkDyZrgm0AkKg6DkhDECEICUncYKPea3rJ9%2F8jHK%2FYtRYVlk4i0dF3ZMOltWUSV5YDrlmrgHXwmJprT7E5NGJ8hh0X2fNNZqw4B%2FsU1TV%2FUzmi7GL48GXCBqX%2FDQuEFVLFTetX3e3TJ%2FwbPTxIFXMy%2Fd1oAlH0OIpihUl9yBqK5IZNCnvnWKeXx9AXGzVwbDLZ2xAZHKUeOf57o0xfPdaBZbiK7QZymsk82l5mp%2FOJvwf60kRdWd2nwJFr2Cn6ldXfr7N24%2BQAdSboZjYpEWvJewAdzg%2BZzeGVFt%2FX8qckiyX8eaYnFK6NbmngxP0L47Ve4NkvN0zNiR2MN0YlCmKpPnLs2Ka%2FkgyeyXFQyrLB6JJmcaLnwz%2BGLKMWykPhCrBPdMkDompDxJ1U%2Fa8GNkjT1P%2FsuXWybUOLGmDM%2FW%2Funv%2BlYqETstr4YExLnlpPDCM3E5vqJdggFO7YzZ%2BUuqm9ZlfakYNMC80dJdykuinINAdswRPE3KI%2FpA3m5ZoFDQpB6wTQTCUw97EBjqkAQ1l783P%2BnxE6iiYgnZA9P9NM0ZQ6kJXynLDlIbOgyqCyMVWK2NOHsSb0YswgzMLKjcuhP3QnFrHk7kkTcuRPGH%2BZWwBkiBOAeLYKUxRpOkAx9QHshVsLByxP6379Q9jM20uWbeD9IKggdMAIK6v8fwsFmf1aVjIi0SdKLB0Jn%2Fev8sozNl6kabD06L9GnG3mn0xundg%2FEQI2uXhmzL%2FRRcZtxmN&X-Amz-Signature=238920953fbc688542b01e60c1e57fb909e6e79b112759570868a9f94b38b96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=95debd878a53e2370f5f146a4e9f3b1340642b2b1ab9013ebf9994cdad7104f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=1c62acc1d0c2cc4eb4b43b466fbdf911836f23f5f02cd05c022c8fa1c97c3de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=fe417c08d7b004355ef0fae8160a304f19aa6947990bed96ce13ee9aecdfd502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=8a96be7c66b1b442dda3c27368af65cb12b16e3129cc21e30a6e87dec4b372b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=ea9db4a7b1e6bedbc6b5ed98a1e62636878d12b8a29b1c8c8a3cc1e36781908c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI6R6OU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmr%2FJxk9fgNwGe8FybnlXk%2FBo4m9BFLjInCA4cRSE4hAiEA1ArDKjBKTNAu1cFMMSQ%2B9OUfp1ApLNG%2BafuU%2FI21ixMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1xlTM7znQKIsguhCrcA56J2DkBpHQdP%2B5no%2BxDR%2FmSYxIeosX1aece1FpBNvjlTfqW2UANf0Ef6WQD6YPKBH1Y1O0YNe5CYumgSI43f9nqmO7vrpY81itpLCbAH1oBYiA2kX5D2zEqLoiTj5X8a6eIHKm6VU%2FT2msRbEFH%2FU8YsPKbsJpQ0PBwIeJturU9GwJeEmh1MrlQxHqHiE36MQP1Zu8ar2%2BiVq40PXDmXMtrbDmRPVC0NzEF5V2TXtLvw5g8BMvySvC0YcwoCPrG99t1Q7M%2FavwSkHRcQX4gdoD4H44MPeftkixeJs1xcfk4ROOh711GVqknfnqX5NenTIuGmPTB0wtm2rHjhdoFyQ%2Byxrkk8l%2FEoIkIMCFDT%2Fi4wN6d36V0aucUheWlqxnkEwbJzApT3Y0dmzOXHAnQxZErbfSFA%2FbSMFRXRMetj%2BFPb6yvgxFPCx2LRqBnJMit1me%2FqZ5jhty2MrT2vXHNPfCzPWWopUYo%2FZzqra6ilZhq7Lc5GWUfcMnXfIdYNx6UaKCV%2B85HORPeNOBeZytYO5RxsrIE1x3GxdBrWscnnI0FCm7TBS0Y0PR%2FMxWJuIiKeWFCDx22vi2ZuKac8GEivRX9XPemjYKuH%2FSKKR8rnVu2TRAzch5mZexK%2ByhnMJrC3sQGOqUB8qA8HphzXMyVh97V2aaJSGLvtlbwjuAy%2FXuH3gq9XIiBn9mcjNvA%2F9JS%2BLLBJ5Tba0gH5sBmJ%2FqkNDmIpEDzy2L3ZkViNPnpzWopc0oL1E5nGJNdXl3npETfDEfB2smnYeFJC%2Bg2UmG0z7FeX9k3zml6x2P%2BMzl7izZOBZfUDMwbGNSI3ZS7MTjGzDa1PC0CbNH6D9d6Rw%2FT%2FJ7%2BSXbfY4eL%2Bd0b&X-Amz-Signature=ed4743aee2b697db6902e1f85d866d7e68d2906d78cc111c9ceab8936d62a2f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
