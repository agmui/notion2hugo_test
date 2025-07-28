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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUVM2L7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCsB%2BQhYXLMYsLv7DXg9pyFxhZfYfbGcJN0XiKwrz%2F5GAIgOMCwi0SGRr1OCl77JnfAxlkEceXRB1DzsEa92FnjhTsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW6FOmYiPcg93Ag3ircAzokLrEkf9dlSIBRLA3tekDbPwFyId6QW44WpZ4mo2ooC58JwiGEIaLGJWNwh75vtH5ITbUFr0vkqOVKkz2WCHJrpGJSmKWGaJeWSdQKIA7bHk1KOoQv6sg%2BSG7Y2r7brnoa%2Fe4wxUG01rgPqTBLGfmNdeyREGIxaqwVVNmchNeEcbWXvK5hJqNNpbHRIDRiuVzcbVtId1m2ysX7mQS4VnTbvoImvQelmepN7k0pM9h8WskpkoB%2BJAId0%2FAfRXr3xD7r5L5tuQ%2Fx08odDPEkGoGAZA%2Fk%2BSMq4ERa6vBQKTBVeWjqmS7go0MhKbdfIyfhUvrF6yCEUHPpyY7GArLPTm64AtELZmNp6IWgugT2%2BWdVq8WA8JxOCEMIytBnmfzHOapbWoUpad06Iwb3MVsTnM%2F1wEdh4OhK7tSMlwpd8fIYA633E2rwFbzB43BL7%2Ft9g0BqS%2BUqzmtQJtpT2%2BjnBxO5MQKmsqLJdqkjLxwDfYQIYfouI9FuGpWKnNZq4NB63jxhvwV1%2BgO0fTVPfodb3dSG4I0%2FSm1h%2FvORhJPt%2FrNGXKgTxiOsPtQh6UT03MLhTOizQe69k36C4THwge%2BRM6Y73MnRhKPOM7kQyWMNWlSOqJI5DYdsuHDWBy5yMO6onsQGOqUB1ZlCVHTFeHwAcHXEYXSFm41m4IArhwFWNFO6ISk8wdmZkaaahHvtoxRFLKa7xzj5m8UN5No3aisxUGx9FDfrq8UFmUwEcCt7%2FOpMUS5ZqTyG3U1I6HVXJy7VUxjC4hU3dWTIFKXfR6FNXE84HaNVYyd68YH3g%2Bwta2zVQgjL5CmawtyYTrsXluyvA4CU1%2FZTQuVS%2F8mYeaVY1ndE9yKm1eh6ZP3c&X-Amz-Signature=28a7ac155d5d095fba32b62df7c46d9404fe95cb4530beabea4ceb164cc7457e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUVM2L7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCsB%2BQhYXLMYsLv7DXg9pyFxhZfYfbGcJN0XiKwrz%2F5GAIgOMCwi0SGRr1OCl77JnfAxlkEceXRB1DzsEa92FnjhTsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW6FOmYiPcg93Ag3ircAzokLrEkf9dlSIBRLA3tekDbPwFyId6QW44WpZ4mo2ooC58JwiGEIaLGJWNwh75vtH5ITbUFr0vkqOVKkz2WCHJrpGJSmKWGaJeWSdQKIA7bHk1KOoQv6sg%2BSG7Y2r7brnoa%2Fe4wxUG01rgPqTBLGfmNdeyREGIxaqwVVNmchNeEcbWXvK5hJqNNpbHRIDRiuVzcbVtId1m2ysX7mQS4VnTbvoImvQelmepN7k0pM9h8WskpkoB%2BJAId0%2FAfRXr3xD7r5L5tuQ%2Fx08odDPEkGoGAZA%2Fk%2BSMq4ERa6vBQKTBVeWjqmS7go0MhKbdfIyfhUvrF6yCEUHPpyY7GArLPTm64AtELZmNp6IWgugT2%2BWdVq8WA8JxOCEMIytBnmfzHOapbWoUpad06Iwb3MVsTnM%2F1wEdh4OhK7tSMlwpd8fIYA633E2rwFbzB43BL7%2Ft9g0BqS%2BUqzmtQJtpT2%2BjnBxO5MQKmsqLJdqkjLxwDfYQIYfouI9FuGpWKnNZq4NB63jxhvwV1%2BgO0fTVPfodb3dSG4I0%2FSm1h%2FvORhJPt%2FrNGXKgTxiOsPtQh6UT03MLhTOizQe69k36C4THwge%2BRM6Y73MnRhKPOM7kQyWMNWlSOqJI5DYdsuHDWBy5yMO6onsQGOqUB1ZlCVHTFeHwAcHXEYXSFm41m4IArhwFWNFO6ISk8wdmZkaaahHvtoxRFLKa7xzj5m8UN5No3aisxUGx9FDfrq8UFmUwEcCt7%2FOpMUS5ZqTyG3U1I6HVXJy7VUxjC4hU3dWTIFKXfR6FNXE84HaNVYyd68YH3g%2Bwta2zVQgjL5CmawtyYTrsXluyvA4CU1%2FZTQuVS%2F8mYeaVY1ndE9yKm1eh6ZP3c&X-Amz-Signature=b75ce5e65102ffe3c5cc7ae4bbd3389a45804359011ecfa6c86e2cf29c5a4919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUVM2L7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCsB%2BQhYXLMYsLv7DXg9pyFxhZfYfbGcJN0XiKwrz%2F5GAIgOMCwi0SGRr1OCl77JnfAxlkEceXRB1DzsEa92FnjhTsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW6FOmYiPcg93Ag3ircAzokLrEkf9dlSIBRLA3tekDbPwFyId6QW44WpZ4mo2ooC58JwiGEIaLGJWNwh75vtH5ITbUFr0vkqOVKkz2WCHJrpGJSmKWGaJeWSdQKIA7bHk1KOoQv6sg%2BSG7Y2r7brnoa%2Fe4wxUG01rgPqTBLGfmNdeyREGIxaqwVVNmchNeEcbWXvK5hJqNNpbHRIDRiuVzcbVtId1m2ysX7mQS4VnTbvoImvQelmepN7k0pM9h8WskpkoB%2BJAId0%2FAfRXr3xD7r5L5tuQ%2Fx08odDPEkGoGAZA%2Fk%2BSMq4ERa6vBQKTBVeWjqmS7go0MhKbdfIyfhUvrF6yCEUHPpyY7GArLPTm64AtELZmNp6IWgugT2%2BWdVq8WA8JxOCEMIytBnmfzHOapbWoUpad06Iwb3MVsTnM%2F1wEdh4OhK7tSMlwpd8fIYA633E2rwFbzB43BL7%2Ft9g0BqS%2BUqzmtQJtpT2%2BjnBxO5MQKmsqLJdqkjLxwDfYQIYfouI9FuGpWKnNZq4NB63jxhvwV1%2BgO0fTVPfodb3dSG4I0%2FSm1h%2FvORhJPt%2FrNGXKgTxiOsPtQh6UT03MLhTOizQe69k36C4THwge%2BRM6Y73MnRhKPOM7kQyWMNWlSOqJI5DYdsuHDWBy5yMO6onsQGOqUB1ZlCVHTFeHwAcHXEYXSFm41m4IArhwFWNFO6ISk8wdmZkaaahHvtoxRFLKa7xzj5m8UN5No3aisxUGx9FDfrq8UFmUwEcCt7%2FOpMUS5ZqTyG3U1I6HVXJy7VUxjC4hU3dWTIFKXfR6FNXE84HaNVYyd68YH3g%2Bwta2zVQgjL5CmawtyYTrsXluyvA4CU1%2FZTQuVS%2F8mYeaVY1ndE9yKm1eh6ZP3c&X-Amz-Signature=1152a41099969f156f41fec941f6397e0fd519558950db4735e833e334449fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

Thus all Gazebo topics must go though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUVM2L7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCsB%2BQhYXLMYsLv7DXg9pyFxhZfYfbGcJN0XiKwrz%2F5GAIgOMCwi0SGRr1OCl77JnfAxlkEceXRB1DzsEa92FnjhTsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW6FOmYiPcg93Ag3ircAzokLrEkf9dlSIBRLA3tekDbPwFyId6QW44WpZ4mo2ooC58JwiGEIaLGJWNwh75vtH5ITbUFr0vkqOVKkz2WCHJrpGJSmKWGaJeWSdQKIA7bHk1KOoQv6sg%2BSG7Y2r7brnoa%2Fe4wxUG01rgPqTBLGfmNdeyREGIxaqwVVNmchNeEcbWXvK5hJqNNpbHRIDRiuVzcbVtId1m2ysX7mQS4VnTbvoImvQelmepN7k0pM9h8WskpkoB%2BJAId0%2FAfRXr3xD7r5L5tuQ%2Fx08odDPEkGoGAZA%2Fk%2BSMq4ERa6vBQKTBVeWjqmS7go0MhKbdfIyfhUvrF6yCEUHPpyY7GArLPTm64AtELZmNp6IWgugT2%2BWdVq8WA8JxOCEMIytBnmfzHOapbWoUpad06Iwb3MVsTnM%2F1wEdh4OhK7tSMlwpd8fIYA633E2rwFbzB43BL7%2Ft9g0BqS%2BUqzmtQJtpT2%2BjnBxO5MQKmsqLJdqkjLxwDfYQIYfouI9FuGpWKnNZq4NB63jxhvwV1%2BgO0fTVPfodb3dSG4I0%2FSm1h%2FvORhJPt%2FrNGXKgTxiOsPtQh6UT03MLhTOizQe69k36C4THwge%2BRM6Y73MnRhKPOM7kQyWMNWlSOqJI5DYdsuHDWBy5yMO6onsQGOqUB1ZlCVHTFeHwAcHXEYXSFm41m4IArhwFWNFO6ISk8wdmZkaaahHvtoxRFLKa7xzj5m8UN5No3aisxUGx9FDfrq8UFmUwEcCt7%2FOpMUS5ZqTyG3U1I6HVXJy7VUxjC4hU3dWTIFKXfR6FNXE84HaNVYyd68YH3g%2Bwta2zVQgjL5CmawtyYTrsXluyvA4CU1%2FZTQuVS%2F8mYeaVY1ndE9yKm1eh6ZP3c&X-Amz-Signature=f2851d12e70f4aacd7d78f7d816b11efe3766d6aab1966401c9df9aa2bc65074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUVM2L7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCsB%2BQhYXLMYsLv7DXg9pyFxhZfYfbGcJN0XiKwrz%2F5GAIgOMCwi0SGRr1OCl77JnfAxlkEceXRB1DzsEa92FnjhTsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW6FOmYiPcg93Ag3ircAzokLrEkf9dlSIBRLA3tekDbPwFyId6QW44WpZ4mo2ooC58JwiGEIaLGJWNwh75vtH5ITbUFr0vkqOVKkz2WCHJrpGJSmKWGaJeWSdQKIA7bHk1KOoQv6sg%2BSG7Y2r7brnoa%2Fe4wxUG01rgPqTBLGfmNdeyREGIxaqwVVNmchNeEcbWXvK5hJqNNpbHRIDRiuVzcbVtId1m2ysX7mQS4VnTbvoImvQelmepN7k0pM9h8WskpkoB%2BJAId0%2FAfRXr3xD7r5L5tuQ%2Fx08odDPEkGoGAZA%2Fk%2BSMq4ERa6vBQKTBVeWjqmS7go0MhKbdfIyfhUvrF6yCEUHPpyY7GArLPTm64AtELZmNp6IWgugT2%2BWdVq8WA8JxOCEMIytBnmfzHOapbWoUpad06Iwb3MVsTnM%2F1wEdh4OhK7tSMlwpd8fIYA633E2rwFbzB43BL7%2Ft9g0BqS%2BUqzmtQJtpT2%2BjnBxO5MQKmsqLJdqkjLxwDfYQIYfouI9FuGpWKnNZq4NB63jxhvwV1%2BgO0fTVPfodb3dSG4I0%2FSm1h%2FvORhJPt%2FrNGXKgTxiOsPtQh6UT03MLhTOizQe69k36C4THwge%2BRM6Y73MnRhKPOM7kQyWMNWlSOqJI5DYdsuHDWBy5yMO6onsQGOqUB1ZlCVHTFeHwAcHXEYXSFm41m4IArhwFWNFO6ISk8wdmZkaaahHvtoxRFLKa7xzj5m8UN5No3aisxUGx9FDfrq8UFmUwEcCt7%2FOpMUS5ZqTyG3U1I6HVXJy7VUxjC4hU3dWTIFKXfR6FNXE84HaNVYyd68YH3g%2Bwta2zVQgjL5CmawtyYTrsXluyvA4CU1%2FZTQuVS%2F8mYeaVY1ndE9yKm1eh6ZP3c&X-Amz-Signature=0aca8b8ca9c87ca3e2561e089096403b8d4fed13174d2ca8c3139582e90d94a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUVM2L7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCsB%2BQhYXLMYsLv7DXg9pyFxhZfYfbGcJN0XiKwrz%2F5GAIgOMCwi0SGRr1OCl77JnfAxlkEceXRB1DzsEa92FnjhTsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW6FOmYiPcg93Ag3ircAzokLrEkf9dlSIBRLA3tekDbPwFyId6QW44WpZ4mo2ooC58JwiGEIaLGJWNwh75vtH5ITbUFr0vkqOVKkz2WCHJrpGJSmKWGaJeWSdQKIA7bHk1KOoQv6sg%2BSG7Y2r7brnoa%2Fe4wxUG01rgPqTBLGfmNdeyREGIxaqwVVNmchNeEcbWXvK5hJqNNpbHRIDRiuVzcbVtId1m2ysX7mQS4VnTbvoImvQelmepN7k0pM9h8WskpkoB%2BJAId0%2FAfRXr3xD7r5L5tuQ%2Fx08odDPEkGoGAZA%2Fk%2BSMq4ERa6vBQKTBVeWjqmS7go0MhKbdfIyfhUvrF6yCEUHPpyY7GArLPTm64AtELZmNp6IWgugT2%2BWdVq8WA8JxOCEMIytBnmfzHOapbWoUpad06Iwb3MVsTnM%2F1wEdh4OhK7tSMlwpd8fIYA633E2rwFbzB43BL7%2Ft9g0BqS%2BUqzmtQJtpT2%2BjnBxO5MQKmsqLJdqkjLxwDfYQIYfouI9FuGpWKnNZq4NB63jxhvwV1%2BgO0fTVPfodb3dSG4I0%2FSm1h%2FvORhJPt%2FrNGXKgTxiOsPtQh6UT03MLhTOizQe69k36C4THwge%2BRM6Y73MnRhKPOM7kQyWMNWlSOqJI5DYdsuHDWBy5yMO6onsQGOqUB1ZlCVHTFeHwAcHXEYXSFm41m4IArhwFWNFO6ISk8wdmZkaaahHvtoxRFLKa7xzj5m8UN5No3aisxUGx9FDfrq8UFmUwEcCt7%2FOpMUS5ZqTyG3U1I6HVXJy7VUxjC4hU3dWTIFKXfR6FNXE84HaNVYyd68YH3g%2Bwta2zVQgjL5CmawtyYTrsXluyvA4CU1%2FZTQuVS%2F8mYeaVY1ndE9yKm1eh6ZP3c&X-Amz-Signature=c6e2eae98cf973916bca743fc8d90e584fa69442780cd581be7d11fb992f22ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUVM2L7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCsB%2BQhYXLMYsLv7DXg9pyFxhZfYfbGcJN0XiKwrz%2F5GAIgOMCwi0SGRr1OCl77JnfAxlkEceXRB1DzsEa92FnjhTsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLW6FOmYiPcg93Ag3ircAzokLrEkf9dlSIBRLA3tekDbPwFyId6QW44WpZ4mo2ooC58JwiGEIaLGJWNwh75vtH5ITbUFr0vkqOVKkz2WCHJrpGJSmKWGaJeWSdQKIA7bHk1KOoQv6sg%2BSG7Y2r7brnoa%2Fe4wxUG01rgPqTBLGfmNdeyREGIxaqwVVNmchNeEcbWXvK5hJqNNpbHRIDRiuVzcbVtId1m2ysX7mQS4VnTbvoImvQelmepN7k0pM9h8WskpkoB%2BJAId0%2FAfRXr3xD7r5L5tuQ%2Fx08odDPEkGoGAZA%2Fk%2BSMq4ERa6vBQKTBVeWjqmS7go0MhKbdfIyfhUvrF6yCEUHPpyY7GArLPTm64AtELZmNp6IWgugT2%2BWdVq8WA8JxOCEMIytBnmfzHOapbWoUpad06Iwb3MVsTnM%2F1wEdh4OhK7tSMlwpd8fIYA633E2rwFbzB43BL7%2Ft9g0BqS%2BUqzmtQJtpT2%2BjnBxO5MQKmsqLJdqkjLxwDfYQIYfouI9FuGpWKnNZq4NB63jxhvwV1%2BgO0fTVPfodb3dSG4I0%2FSm1h%2FvORhJPt%2FrNGXKgTxiOsPtQh6UT03MLhTOizQe69k36C4THwge%2BRM6Y73MnRhKPOM7kQyWMNWlSOqJI5DYdsuHDWBy5yMO6onsQGOqUB1ZlCVHTFeHwAcHXEYXSFm41m4IArhwFWNFO6ISk8wdmZkaaahHvtoxRFLKa7xzj5m8UN5No3aisxUGx9FDfrq8UFmUwEcCt7%2FOpMUS5ZqTyG3U1I6HVXJy7VUxjC4hU3dWTIFKXfR6FNXE84HaNVYyd68YH3g%2Bwta2zVQgjL5CmawtyYTrsXluyvA4CU1%2FZTQuVS%2F8mYeaVY1ndE9yKm1eh6ZP3c&X-Amz-Signature=02e63f8b63f952e9392dbc2c85569657b5bf06ce79077804b0ca30127e5303a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
