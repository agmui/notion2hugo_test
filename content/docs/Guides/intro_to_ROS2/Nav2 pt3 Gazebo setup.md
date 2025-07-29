---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-29T01:05:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-29T01:05:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=8e8e2c28414317ccb07f97a95225a4d12a3ebab6764e17946a71a2c47c9de78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=8b0b2c971f279daa44e321faa8b19e9088a64e5f65cf77d842d7aa24e853b7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=8c32f53ee9a2055ed66c789a9c03a36e0a7c985d51c489fc9f5c7ee05ca86b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=95bf348f7b913b08835cf2ab4998d01775ccad0feb445d050b5e37b12742bd64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```bash

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>0.1</max_linear_acceleration>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=80475936a46179b77bf8e8fc8820421a8dc1f932c720f9f12072383a6eb6c504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=bc6249c6105fb2c9233f96a0b9fd01efdd93776523da6d0d90ec15e96238f4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=231d675f99112b946eb402531e65d631b93dbf42322f469137ae061a6b5e1845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=76438f1981d9f197c89f197a3dcdaccd7fadc7d3b90d4620d75b9ca339852881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Updating launch file

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
        DeclareLaunchArgument(name='use_sim_time', default_value='True', description='Flag to enable use_sim_time'),
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=21679f86ea9568c2da4d70956314359f406d8725ce3cb6cbb4a9c43face61f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=c2933254a01fb32fd92b350f241a476e05b8eb8bbb9d1d1c56b9e36b67dedcab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
