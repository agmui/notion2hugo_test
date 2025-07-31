---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-30T06:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-30T06:24:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=1f4a362b75df3fc21f032f1af3a8f2e66ec6205d5cf4ef6b58933c6f04c0da63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=75faedaffdd41e21155272580f535ae1054b5ee329df2819f4f94b4258606e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=b77f32aa495a40c074740e899ac77e25480db2c3cd89bb67c60fef3185779d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=2f461b9531eabee6f7c65d4389a4a0d1aedcc4ff88ed220cb5231fe667534183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=1ef928ae267f5a6ea04d329c4da03a339ab9e803133d5d3aa757222e0dc42a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=219da0ec4614a0ff7dd48be10118a369051888a399b18efe29bc1e36093b5bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=14d09ee7cebc29275b5fce647e8aae1df1b323ccb28d9ff433a5ae5dc1e9e498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=5414a41bf0fe8c508699902270494f7abd0716bc8b56598aaa55551219e542fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=c28ef44ec728a6536e183cb0c7ebb03d3e5cd4ac753047be4ca80f896a72c2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NCQADB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD6x%2BDMq6qjqk0fVM3mB6WoL%2F2C02%2FlXvQ3BR8pW3EYAiEAt37crFQrqonQXXkxgpcE9IXj6TMBuNRADZ8JSr3dJ4wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpVLU09WYbmmnq45yrcAzNOTNrbur5iKNflc8YdQ4qrEIlxiytCAb1tATitu13TSir86Wd28gTsNAmsidYMra6%2BfmeAM9FJWJiE0DrnzR9p%2FXxMUgwgX%2BgTXBWsbMrAI%2BZtC2FQUjoHu1xusVXgHsifXB%2FKkIZmg6UZazOXSSIub2A%2BtuICU2Ebb1SAsLE5dKUWGZUPwHN7VMQkIz336l3om3QzoCVTlhx9xuZ5Q0eQ2fmFDWkmHRQeaBA%2BC8KMLRXtSydzaLattgm%2FBq5yb1RnVyc1qtFl6rTlxRHfEVveFyKt%2BeLjdOD5EFL57WGfHa%2FIIlrcOpVkuT0iZ4eW0rf4PDaSPzXnuj%2BgJhnz1ykQMKcr2gH84eBNtT7iKrzVoCy7vPgy54n3MVCTTYvOlBvHNuBW84CSGVaono9%2Bv39qs%2BHR1O0IfJ1dbZ1tT6sHOJe78TIg%2B6s9s5Qs%2B3%2B4Zr%2BvPUKR9tMg1wjd1B3xqBTWIf2ihCS0BEBglJ042lpzvYmYNrQH2FDjGRbGoY%2F0Psk4Zi%2BaGh3IrN5J2Z7jKR3bOxd%2Fb%2F%2FsLmzCfBxvAsuiQr%2FF485Cos9jOHgCHFEgu1ab4oGNTazLR7fG%2FALzOielgA7nuey%2B3ZjTPIPtA%2BI1HIMkrSNTRaT%2F%2BFUpMOnMr8QGOqUBwe9IhmKTul51g1nSBoh3dSSo2x7gyend3IA5gM5nfuDG%2Bu56yhBhzVOIinOW35MjSSnqAS7aepyiE3zQOhtJobObtBQXxSDeOJRaBcQAfHyct5LHKcOqVQRunbdIUtj%2FHrdTQ2eISaNIHvmqEGfRba2O8jqHQG8DkIrTI2vyrNk95zvwEdJUuPp%2F0D6aJwF3SVu7JkcuyrDGEQwyeZWKnkNwCjgP&X-Amz-Signature=014644a7cdcf3c90fa2d28547780dfe6d7164a32dc25fd56279698388ec973df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
