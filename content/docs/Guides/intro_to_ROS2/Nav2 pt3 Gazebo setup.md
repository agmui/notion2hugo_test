---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-24T23:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-24T23:10:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNZR2UQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDwSGUXZCX5OknJ0yM%2BqjKC4TPx5ufbAbzNDc5ozxlo%2BgIhAKkkS4SWyZZDlo1NmhntLj2ts%2F8QVqpyNKnUnLRgGAPTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcvdXdHvJ%2FbP%2FrMU0q3ANCoqkp5uP4faNM%2BdH%2B6Pe0esO8zYozh4lqEH0LB%2BCfIJofQjiXmeu6%2F6cS5IA4jygT0QjZ5toaRfrhzLJ1cqOxUcYCbv%2BwTNpeSGhqdXmkTmmQ5B0nzypWlwHdLwQZKx37a45p6p%2BWWNPxIZ3i8zqckgV0NhJ%2FT2A57v%2FhMzqLstXnr4MkEr4dklf1dgfGWvWUy1XxG1agtQcxed58GbF%2F6VkuGIhLzzJoC8WcnzqLbaGqEczr%2BNnHlrSNhoH8JryVxVZhUVo4dV2YSkRhJAfJ2McZH01TSVwkoHvCAe84WukPYd4PbVHHqVb%2BFk9O0Zjm7aaTVSTYGjKpWn2D2nbVVuW3V9bSA6jqZSaO2F%2FR8MwTAU8YDRIYPZFtpEQE3qpBDBRj%2Fux8s8%2FbJ8a%2FZPPEHDSIvhWBr50BlxMyaScZKxWxytKHOjUTtndJix0eyyZWA7xc5qXR7IvgSjyfe0tM3B4zPjgNflfZwqfvBkvpVDnWCx0rKuCbBbD212zE3GZpQvlT2aH0m7aQfOcSs98FnCuJ1Uunxc40SGeH7JPWU5zJ30rPUWh4GUEpoxHaM%2BM0vBs1a%2BvgD%2FPVNDr1bKBI2l5BvDkavtIQfi4nEJZgusycKdoxR5iTftFktDDY0Z7EBjqkAdiLGrmxxfKf%2FNqhGcWnj%2FfMENe3daAUO3U%2FA%2FEk3CcY2LGJkcqzQ4M0919txKp2YI7h5jv45E24rInCTA3woDgZ9HrEqaA3uk4YOpYmGwCRMqy17MFqNMSz5YMLJeAeCc%2Bf78Ax87mKVK21pTHAY5FwG0knM%2Fk09qyBtxkU%2BWESmeiUae6jcMh2ux0sUMJ51GrE6jttOr5zipSt2UqdpY4TypT9&X-Amz-Signature=28e147d29831684c94e73b326e7593edb2fd182dfb8b1e8532c98a8df90b4753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNZR2UQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDwSGUXZCX5OknJ0yM%2BqjKC4TPx5ufbAbzNDc5ozxlo%2BgIhAKkkS4SWyZZDlo1NmhntLj2ts%2F8QVqpyNKnUnLRgGAPTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcvdXdHvJ%2FbP%2FrMU0q3ANCoqkp5uP4faNM%2BdH%2B6Pe0esO8zYozh4lqEH0LB%2BCfIJofQjiXmeu6%2F6cS5IA4jygT0QjZ5toaRfrhzLJ1cqOxUcYCbv%2BwTNpeSGhqdXmkTmmQ5B0nzypWlwHdLwQZKx37a45p6p%2BWWNPxIZ3i8zqckgV0NhJ%2FT2A57v%2FhMzqLstXnr4MkEr4dklf1dgfGWvWUy1XxG1agtQcxed58GbF%2F6VkuGIhLzzJoC8WcnzqLbaGqEczr%2BNnHlrSNhoH8JryVxVZhUVo4dV2YSkRhJAfJ2McZH01TSVwkoHvCAe84WukPYd4PbVHHqVb%2BFk9O0Zjm7aaTVSTYGjKpWn2D2nbVVuW3V9bSA6jqZSaO2F%2FR8MwTAU8YDRIYPZFtpEQE3qpBDBRj%2Fux8s8%2FbJ8a%2FZPPEHDSIvhWBr50BlxMyaScZKxWxytKHOjUTtndJix0eyyZWA7xc5qXR7IvgSjyfe0tM3B4zPjgNflfZwqfvBkvpVDnWCx0rKuCbBbD212zE3GZpQvlT2aH0m7aQfOcSs98FnCuJ1Uunxc40SGeH7JPWU5zJ30rPUWh4GUEpoxHaM%2BM0vBs1a%2BvgD%2FPVNDr1bKBI2l5BvDkavtIQfi4nEJZgusycKdoxR5iTftFktDDY0Z7EBjqkAdiLGrmxxfKf%2FNqhGcWnj%2FfMENe3daAUO3U%2FA%2FEk3CcY2LGJkcqzQ4M0919txKp2YI7h5jv45E24rInCTA3woDgZ9HrEqaA3uk4YOpYmGwCRMqy17MFqNMSz5YMLJeAeCc%2Bf78Ax87mKVK21pTHAY5FwG0knM%2Fk09qyBtxkU%2BWESmeiUae6jcMh2ux0sUMJ51GrE6jttOr5zipSt2UqdpY4TypT9&X-Amz-Signature=4324723e33173ea31b2935ea0e43b8d3fc0c96f836e3a20d7bba73b75fca388e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNZR2UQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDwSGUXZCX5OknJ0yM%2BqjKC4TPx5ufbAbzNDc5ozxlo%2BgIhAKkkS4SWyZZDlo1NmhntLj2ts%2F8QVqpyNKnUnLRgGAPTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcvdXdHvJ%2FbP%2FrMU0q3ANCoqkp5uP4faNM%2BdH%2B6Pe0esO8zYozh4lqEH0LB%2BCfIJofQjiXmeu6%2F6cS5IA4jygT0QjZ5toaRfrhzLJ1cqOxUcYCbv%2BwTNpeSGhqdXmkTmmQ5B0nzypWlwHdLwQZKx37a45p6p%2BWWNPxIZ3i8zqckgV0NhJ%2FT2A57v%2FhMzqLstXnr4MkEr4dklf1dgfGWvWUy1XxG1agtQcxed58GbF%2F6VkuGIhLzzJoC8WcnzqLbaGqEczr%2BNnHlrSNhoH8JryVxVZhUVo4dV2YSkRhJAfJ2McZH01TSVwkoHvCAe84WukPYd4PbVHHqVb%2BFk9O0Zjm7aaTVSTYGjKpWn2D2nbVVuW3V9bSA6jqZSaO2F%2FR8MwTAU8YDRIYPZFtpEQE3qpBDBRj%2Fux8s8%2FbJ8a%2FZPPEHDSIvhWBr50BlxMyaScZKxWxytKHOjUTtndJix0eyyZWA7xc5qXR7IvgSjyfe0tM3B4zPjgNflfZwqfvBkvpVDnWCx0rKuCbBbD212zE3GZpQvlT2aH0m7aQfOcSs98FnCuJ1Uunxc40SGeH7JPWU5zJ30rPUWh4GUEpoxHaM%2BM0vBs1a%2BvgD%2FPVNDr1bKBI2l5BvDkavtIQfi4nEJZgusycKdoxR5iTftFktDDY0Z7EBjqkAdiLGrmxxfKf%2FNqhGcWnj%2FfMENe3daAUO3U%2FA%2FEk3CcY2LGJkcqzQ4M0919txKp2YI7h5jv45E24rInCTA3woDgZ9HrEqaA3uk4YOpYmGwCRMqy17MFqNMSz5YMLJeAeCc%2Bf78Ax87mKVK21pTHAY5FwG0knM%2Fk09qyBtxkU%2BWESmeiUae6jcMh2ux0sUMJ51GrE6jttOr5zipSt2UqdpY4TypT9&X-Amz-Signature=97efebfd9b5a4f267d56862dbdc251511f6b368e0ce8900f2df7d5b723a93223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

Thus all Gazebo topics must go though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNZR2UQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDwSGUXZCX5OknJ0yM%2BqjKC4TPx5ufbAbzNDc5ozxlo%2BgIhAKkkS4SWyZZDlo1NmhntLj2ts%2F8QVqpyNKnUnLRgGAPTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcvdXdHvJ%2FbP%2FrMU0q3ANCoqkp5uP4faNM%2BdH%2B6Pe0esO8zYozh4lqEH0LB%2BCfIJofQjiXmeu6%2F6cS5IA4jygT0QjZ5toaRfrhzLJ1cqOxUcYCbv%2BwTNpeSGhqdXmkTmmQ5B0nzypWlwHdLwQZKx37a45p6p%2BWWNPxIZ3i8zqckgV0NhJ%2FT2A57v%2FhMzqLstXnr4MkEr4dklf1dgfGWvWUy1XxG1agtQcxed58GbF%2F6VkuGIhLzzJoC8WcnzqLbaGqEczr%2BNnHlrSNhoH8JryVxVZhUVo4dV2YSkRhJAfJ2McZH01TSVwkoHvCAe84WukPYd4PbVHHqVb%2BFk9O0Zjm7aaTVSTYGjKpWn2D2nbVVuW3V9bSA6jqZSaO2F%2FR8MwTAU8YDRIYPZFtpEQE3qpBDBRj%2Fux8s8%2FbJ8a%2FZPPEHDSIvhWBr50BlxMyaScZKxWxytKHOjUTtndJix0eyyZWA7xc5qXR7IvgSjyfe0tM3B4zPjgNflfZwqfvBkvpVDnWCx0rKuCbBbD212zE3GZpQvlT2aH0m7aQfOcSs98FnCuJ1Uunxc40SGeH7JPWU5zJ30rPUWh4GUEpoxHaM%2BM0vBs1a%2BvgD%2FPVNDr1bKBI2l5BvDkavtIQfi4nEJZgusycKdoxR5iTftFktDDY0Z7EBjqkAdiLGrmxxfKf%2FNqhGcWnj%2FfMENe3daAUO3U%2FA%2FEk3CcY2LGJkcqzQ4M0919txKp2YI7h5jv45E24rInCTA3woDgZ9HrEqaA3uk4YOpYmGwCRMqy17MFqNMSz5YMLJeAeCc%2Bf78Ax87mKVK21pTHAY5FwG0knM%2Fk09qyBtxkU%2BWESmeiUae6jcMh2ux0sUMJ51GrE6jttOr5zipSt2UqdpY4TypT9&X-Amz-Signature=91e35cbf004f6910fdcfb5d6a8ec66da0fac302764636bf6362038225f3bcdb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

past this inside `bridge_config.yaml`. 

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

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `urdf` right before the `</robot>` tag.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNZR2UQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDwSGUXZCX5OknJ0yM%2BqjKC4TPx5ufbAbzNDc5ozxlo%2BgIhAKkkS4SWyZZDlo1NmhntLj2ts%2F8QVqpyNKnUnLRgGAPTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcvdXdHvJ%2FbP%2FrMU0q3ANCoqkp5uP4faNM%2BdH%2B6Pe0esO8zYozh4lqEH0LB%2BCfIJofQjiXmeu6%2F6cS5IA4jygT0QjZ5toaRfrhzLJ1cqOxUcYCbv%2BwTNpeSGhqdXmkTmmQ5B0nzypWlwHdLwQZKx37a45p6p%2BWWNPxIZ3i8zqckgV0NhJ%2FT2A57v%2FhMzqLstXnr4MkEr4dklf1dgfGWvWUy1XxG1agtQcxed58GbF%2F6VkuGIhLzzJoC8WcnzqLbaGqEczr%2BNnHlrSNhoH8JryVxVZhUVo4dV2YSkRhJAfJ2McZH01TSVwkoHvCAe84WukPYd4PbVHHqVb%2BFk9O0Zjm7aaTVSTYGjKpWn2D2nbVVuW3V9bSA6jqZSaO2F%2FR8MwTAU8YDRIYPZFtpEQE3qpBDBRj%2Fux8s8%2FbJ8a%2FZPPEHDSIvhWBr50BlxMyaScZKxWxytKHOjUTtndJix0eyyZWA7xc5qXR7IvgSjyfe0tM3B4zPjgNflfZwqfvBkvpVDnWCx0rKuCbBbD212zE3GZpQvlT2aH0m7aQfOcSs98FnCuJ1Uunxc40SGeH7JPWU5zJ30rPUWh4GUEpoxHaM%2BM0vBs1a%2BvgD%2FPVNDr1bKBI2l5BvDkavtIQfi4nEJZgusycKdoxR5iTftFktDDY0Z7EBjqkAdiLGrmxxfKf%2FNqhGcWnj%2FfMENe3daAUO3U%2FA%2FEk3CcY2LGJkcqzQ4M0919txKp2YI7h5jv45E24rInCTA3woDgZ9HrEqaA3uk4YOpYmGwCRMqy17MFqNMSz5YMLJeAeCc%2Bf78Ax87mKVK21pTHAY5FwG0knM%2Fk09qyBtxkU%2BWESmeiUae6jcMh2ux0sUMJ51GrE6jttOr5zipSt2UqdpY4TypT9&X-Amz-Signature=5c4ae875db58ce3fe387a254785b178224f217ed119883f6fd5731db5baf1413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNZR2UQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDwSGUXZCX5OknJ0yM%2BqjKC4TPx5ufbAbzNDc5ozxlo%2BgIhAKkkS4SWyZZDlo1NmhntLj2ts%2F8QVqpyNKnUnLRgGAPTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcvdXdHvJ%2FbP%2FrMU0q3ANCoqkp5uP4faNM%2BdH%2B6Pe0esO8zYozh4lqEH0LB%2BCfIJofQjiXmeu6%2F6cS5IA4jygT0QjZ5toaRfrhzLJ1cqOxUcYCbv%2BwTNpeSGhqdXmkTmmQ5B0nzypWlwHdLwQZKx37a45p6p%2BWWNPxIZ3i8zqckgV0NhJ%2FT2A57v%2FhMzqLstXnr4MkEr4dklf1dgfGWvWUy1XxG1agtQcxed58GbF%2F6VkuGIhLzzJoC8WcnzqLbaGqEczr%2BNnHlrSNhoH8JryVxVZhUVo4dV2YSkRhJAfJ2McZH01TSVwkoHvCAe84WukPYd4PbVHHqVb%2BFk9O0Zjm7aaTVSTYGjKpWn2D2nbVVuW3V9bSA6jqZSaO2F%2FR8MwTAU8YDRIYPZFtpEQE3qpBDBRj%2Fux8s8%2FbJ8a%2FZPPEHDSIvhWBr50BlxMyaScZKxWxytKHOjUTtndJix0eyyZWA7xc5qXR7IvgSjyfe0tM3B4zPjgNflfZwqfvBkvpVDnWCx0rKuCbBbD212zE3GZpQvlT2aH0m7aQfOcSs98FnCuJ1Uunxc40SGeH7JPWU5zJ30rPUWh4GUEpoxHaM%2BM0vBs1a%2BvgD%2FPVNDr1bKBI2l5BvDkavtIQfi4nEJZgusycKdoxR5iTftFktDDY0Z7EBjqkAdiLGrmxxfKf%2FNqhGcWnj%2FfMENe3daAUO3U%2FA%2FEk3CcY2LGJkcqzQ4M0919txKp2YI7h5jv45E24rInCTA3woDgZ9HrEqaA3uk4YOpYmGwCRMqy17MFqNMSz5YMLJeAeCc%2Bf78Ax87mKVK21pTHAY5FwG0knM%2Fk09qyBtxkU%2BWESmeiUae6jcMh2ux0sUMJ51GrE6jttOr5zipSt2UqdpY4TypT9&X-Amz-Signature=f6ac058ca4826b5d861519b846ded9bf19ff2d3f0c1f50078cd3997c73198bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: idk add robomaster arena

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

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

Remember to build because we added new files to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

**Result:**

TODO: add img

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

TODO: add telop twist keyboard

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MNZR2UQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDwSGUXZCX5OknJ0yM%2BqjKC4TPx5ufbAbzNDc5ozxlo%2BgIhAKkkS4SWyZZDlo1NmhntLj2ts%2F8QVqpyNKnUnLRgGAPTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcvdXdHvJ%2FbP%2FrMU0q3ANCoqkp5uP4faNM%2BdH%2B6Pe0esO8zYozh4lqEH0LB%2BCfIJofQjiXmeu6%2F6cS5IA4jygT0QjZ5toaRfrhzLJ1cqOxUcYCbv%2BwTNpeSGhqdXmkTmmQ5B0nzypWlwHdLwQZKx37a45p6p%2BWWNPxIZ3i8zqckgV0NhJ%2FT2A57v%2FhMzqLstXnr4MkEr4dklf1dgfGWvWUy1XxG1agtQcxed58GbF%2F6VkuGIhLzzJoC8WcnzqLbaGqEczr%2BNnHlrSNhoH8JryVxVZhUVo4dV2YSkRhJAfJ2McZH01TSVwkoHvCAe84WukPYd4PbVHHqVb%2BFk9O0Zjm7aaTVSTYGjKpWn2D2nbVVuW3V9bSA6jqZSaO2F%2FR8MwTAU8YDRIYPZFtpEQE3qpBDBRj%2Fux8s8%2FbJ8a%2FZPPEHDSIvhWBr50BlxMyaScZKxWxytKHOjUTtndJix0eyyZWA7xc5qXR7IvgSjyfe0tM3B4zPjgNflfZwqfvBkvpVDnWCx0rKuCbBbD212zE3GZpQvlT2aH0m7aQfOcSs98FnCuJ1Uunxc40SGeH7JPWU5zJ30rPUWh4GUEpoxHaM%2BM0vBs1a%2BvgD%2FPVNDr1bKBI2l5BvDkavtIQfi4nEJZgusycKdoxR5iTftFktDDY0Z7EBjqkAdiLGrmxxfKf%2FNqhGcWnj%2FfMENe3daAUO3U%2FA%2FEk3CcY2LGJkcqzQ4M0919txKp2YI7h5jv45E24rInCTA3woDgZ9HrEqaA3uk4YOpYmGwCRMqy17MFqNMSz5YMLJeAeCc%2Bf78Ax87mKVK21pTHAY5FwG0knM%2Fk09qyBtxkU%2BWESmeiUae6jcMh2ux0sUMJ51GrE6jttOr5zipSt2UqdpY4TypT9&X-Amz-Signature=80ce589a18ee378338d4067ce76ab5f7d1e22a3550a34e25754ecdf082a64c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
