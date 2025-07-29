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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=90c950d2cfd658784dd1cba5ecd476a5e8fd3b7893d14ca72b38322e1105df38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=0ba46ca68a686e200ebad0d60b658b43365409da47dfc6859cd03d0aa4a31e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=44c5ab0a1c27114e76893edfe02df7e684adcdc7aff1f5720878cfedbe1d1dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=d928fe088a89a65e533316c9232bb2fc86672ccf0878b30631aa117c1b9c5080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=819e0c4afc2f1ed656c2a9d26ee899159185d7c4426167fe412c0b1abb2d0493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=7c2016d79de06e48e6ffdb551fb36d10888c793d0699b7652cdf9f396f71af65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=e7efb6c5ce8a64821678488d08efcaac5576265c16dcd4b96f1f1b7b12b8dd02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=69e5c198d4dee47fa35257dd1e16c92fdafbbabd953ae454c7ccb24cc166aaa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=e61620e49976daade9cd51176d69bf04daafb1b05924e890bbc91648c1c73789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=772346c5c4cb29526ac292f911e3d340cc41e1c4fc5420498a8132a7014e7bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
