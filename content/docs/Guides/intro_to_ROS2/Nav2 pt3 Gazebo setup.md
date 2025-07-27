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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4XSSVZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBKzOOrVlUxZWxTpF1layTZunqHp8vLPbJA8U7SHgE%2FgIhAKz7m2DL9qtKYru38RDN37ClsMf3v2TXxFvs0cmJwb0iKv8DCG0QABoMNjM3NDIzMTgzODA1Igy3Cjeh9cXMOsyTQwgq3AM2H0HrvMGQReJYiCv3WQrgmh5W36lFFOsLrE3IU2AkokC92tPW5angP%2Bz0NRwjfSSeExvpi9jl8kF2coluXgZdMofh65%2FqKe%2BjBPK%2BbuZTaVBDikujxco8vga93XkurgJtk3x45sRyVj%2FTr%2B2TJNN2tQ%2BSFFm%2BtxZKxMYttBnLrSy2hca4J4pyg9NJy1yesG8YeJLNHbKpRZHQJz36wrHbkwBc%2BJbVDl8HawESOKqurYvZ%2Bf6rDwW5M48ZDJWem3lliGVnSlziJ07UhRNmacu6w9Dv%2BO2l9LTcbeLI%2F2vsWY9Vnm1SHecnhvdmLiol6B09CTE%2Bg3Du2xwQKXES2u6VIg3SLNUzjJOaNtgH9YSLSIRX%2FMlYYobB9Q7AUIJOHEMdMPHVGkLygEc0WINNV%2BnfGutwFBH89nlKDWD2Oxx2Zh030T5c8lXiYaRygDQW7Ryav9EpMoA7LDliZQC2ZqhfnaW5xnOgOXO3hfWhfiK6vHyV5jsx%2Bz85K45ZAowaVBKu5aNJtv%2BP2L9XrADzat7dSkSWaS7Cp8wQNg4BQHn%2BYsvCwjP7%2FVxJ4not995DzJJcbIRLg9x0%2FKGCrpTX%2Fz%2FNMAMwLs6lcK3EgEhTrsW1iFWlKK60TdOdFtqcMDDQu5bEBjqkAdHGgLQllW3dyD9Pmlwd4yRAbrfNidd7eVP96WP8GbFfJAyNQWO%2B8I5B2MHY3wIAN0YMXOyew9Gkl1ejskS1aMGn8M1HcOu1NuKZRdBzL%2BdPmZtd%2FhQQL%2BvVO3K0J6zUKOecwwrTLhxz%2Bd0%2Fr8EV0XGmt3x71NC%2BTDYeAXEE0BN6IzyjHxU5vb0vu0FI5jGAyv20jKEm84O3xwWfYzpojEDF63j%2B&X-Amz-Signature=23e8739ca6807f33bee609d750b98b33c86ebf7d0b6696f8290a5aa824bfb5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4XSSVZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBKzOOrVlUxZWxTpF1layTZunqHp8vLPbJA8U7SHgE%2FgIhAKz7m2DL9qtKYru38RDN37ClsMf3v2TXxFvs0cmJwb0iKv8DCG0QABoMNjM3NDIzMTgzODA1Igy3Cjeh9cXMOsyTQwgq3AM2H0HrvMGQReJYiCv3WQrgmh5W36lFFOsLrE3IU2AkokC92tPW5angP%2Bz0NRwjfSSeExvpi9jl8kF2coluXgZdMofh65%2FqKe%2BjBPK%2BbuZTaVBDikujxco8vga93XkurgJtk3x45sRyVj%2FTr%2B2TJNN2tQ%2BSFFm%2BtxZKxMYttBnLrSy2hca4J4pyg9NJy1yesG8YeJLNHbKpRZHQJz36wrHbkwBc%2BJbVDl8HawESOKqurYvZ%2Bf6rDwW5M48ZDJWem3lliGVnSlziJ07UhRNmacu6w9Dv%2BO2l9LTcbeLI%2F2vsWY9Vnm1SHecnhvdmLiol6B09CTE%2Bg3Du2xwQKXES2u6VIg3SLNUzjJOaNtgH9YSLSIRX%2FMlYYobB9Q7AUIJOHEMdMPHVGkLygEc0WINNV%2BnfGutwFBH89nlKDWD2Oxx2Zh030T5c8lXiYaRygDQW7Ryav9EpMoA7LDliZQC2ZqhfnaW5xnOgOXO3hfWhfiK6vHyV5jsx%2Bz85K45ZAowaVBKu5aNJtv%2BP2L9XrADzat7dSkSWaS7Cp8wQNg4BQHn%2BYsvCwjP7%2FVxJ4not995DzJJcbIRLg9x0%2FKGCrpTX%2Fz%2FNMAMwLs6lcK3EgEhTrsW1iFWlKK60TdOdFtqcMDDQu5bEBjqkAdHGgLQllW3dyD9Pmlwd4yRAbrfNidd7eVP96WP8GbFfJAyNQWO%2B8I5B2MHY3wIAN0YMXOyew9Gkl1ejskS1aMGn8M1HcOu1NuKZRdBzL%2BdPmZtd%2FhQQL%2BvVO3K0J6zUKOecwwrTLhxz%2Bd0%2Fr8EV0XGmt3x71NC%2BTDYeAXEE0BN6IzyjHxU5vb0vu0FI5jGAyv20jKEm84O3xwWfYzpojEDF63j%2B&X-Amz-Signature=9c1bc609bd43ed210778789a4900e52ac188d8ffd0395831d79147f59cbfec8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4XSSVZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBKzOOrVlUxZWxTpF1layTZunqHp8vLPbJA8U7SHgE%2FgIhAKz7m2DL9qtKYru38RDN37ClsMf3v2TXxFvs0cmJwb0iKv8DCG0QABoMNjM3NDIzMTgzODA1Igy3Cjeh9cXMOsyTQwgq3AM2H0HrvMGQReJYiCv3WQrgmh5W36lFFOsLrE3IU2AkokC92tPW5angP%2Bz0NRwjfSSeExvpi9jl8kF2coluXgZdMofh65%2FqKe%2BjBPK%2BbuZTaVBDikujxco8vga93XkurgJtk3x45sRyVj%2FTr%2B2TJNN2tQ%2BSFFm%2BtxZKxMYttBnLrSy2hca4J4pyg9NJy1yesG8YeJLNHbKpRZHQJz36wrHbkwBc%2BJbVDl8HawESOKqurYvZ%2Bf6rDwW5M48ZDJWem3lliGVnSlziJ07UhRNmacu6w9Dv%2BO2l9LTcbeLI%2F2vsWY9Vnm1SHecnhvdmLiol6B09CTE%2Bg3Du2xwQKXES2u6VIg3SLNUzjJOaNtgH9YSLSIRX%2FMlYYobB9Q7AUIJOHEMdMPHVGkLygEc0WINNV%2BnfGutwFBH89nlKDWD2Oxx2Zh030T5c8lXiYaRygDQW7Ryav9EpMoA7LDliZQC2ZqhfnaW5xnOgOXO3hfWhfiK6vHyV5jsx%2Bz85K45ZAowaVBKu5aNJtv%2BP2L9XrADzat7dSkSWaS7Cp8wQNg4BQHn%2BYsvCwjP7%2FVxJ4not995DzJJcbIRLg9x0%2FKGCrpTX%2Fz%2FNMAMwLs6lcK3EgEhTrsW1iFWlKK60TdOdFtqcMDDQu5bEBjqkAdHGgLQllW3dyD9Pmlwd4yRAbrfNidd7eVP96WP8GbFfJAyNQWO%2B8I5B2MHY3wIAN0YMXOyew9Gkl1ejskS1aMGn8M1HcOu1NuKZRdBzL%2BdPmZtd%2FhQQL%2BvVO3K0J6zUKOecwwrTLhxz%2Bd0%2Fr8EV0XGmt3x71NC%2BTDYeAXEE0BN6IzyjHxU5vb0vu0FI5jGAyv20jKEm84O3xwWfYzpojEDF63j%2B&X-Amz-Signature=cd4d464a5726ddb9c5047236c174b615e2261e41f90e2973c26513c16cb1581a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

Thus all Gazebo topics must go though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4XSSVZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBKzOOrVlUxZWxTpF1layTZunqHp8vLPbJA8U7SHgE%2FgIhAKz7m2DL9qtKYru38RDN37ClsMf3v2TXxFvs0cmJwb0iKv8DCG0QABoMNjM3NDIzMTgzODA1Igy3Cjeh9cXMOsyTQwgq3AM2H0HrvMGQReJYiCv3WQrgmh5W36lFFOsLrE3IU2AkokC92tPW5angP%2Bz0NRwjfSSeExvpi9jl8kF2coluXgZdMofh65%2FqKe%2BjBPK%2BbuZTaVBDikujxco8vga93XkurgJtk3x45sRyVj%2FTr%2B2TJNN2tQ%2BSFFm%2BtxZKxMYttBnLrSy2hca4J4pyg9NJy1yesG8YeJLNHbKpRZHQJz36wrHbkwBc%2BJbVDl8HawESOKqurYvZ%2Bf6rDwW5M48ZDJWem3lliGVnSlziJ07UhRNmacu6w9Dv%2BO2l9LTcbeLI%2F2vsWY9Vnm1SHecnhvdmLiol6B09CTE%2Bg3Du2xwQKXES2u6VIg3SLNUzjJOaNtgH9YSLSIRX%2FMlYYobB9Q7AUIJOHEMdMPHVGkLygEc0WINNV%2BnfGutwFBH89nlKDWD2Oxx2Zh030T5c8lXiYaRygDQW7Ryav9EpMoA7LDliZQC2ZqhfnaW5xnOgOXO3hfWhfiK6vHyV5jsx%2Bz85K45ZAowaVBKu5aNJtv%2BP2L9XrADzat7dSkSWaS7Cp8wQNg4BQHn%2BYsvCwjP7%2FVxJ4not995DzJJcbIRLg9x0%2FKGCrpTX%2Fz%2FNMAMwLs6lcK3EgEhTrsW1iFWlKK60TdOdFtqcMDDQu5bEBjqkAdHGgLQllW3dyD9Pmlwd4yRAbrfNidd7eVP96WP8GbFfJAyNQWO%2B8I5B2MHY3wIAN0YMXOyew9Gkl1ejskS1aMGn8M1HcOu1NuKZRdBzL%2BdPmZtd%2FhQQL%2BvVO3K0J6zUKOecwwrTLhxz%2Bd0%2Fr8EV0XGmt3x71NC%2BTDYeAXEE0BN6IzyjHxU5vb0vu0FI5jGAyv20jKEm84O3xwWfYzpojEDF63j%2B&X-Amz-Signature=4435d6c7876d2d95e6548df96963df94c8c4eb0c2495118435efd0e6b7a6f613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4XSSVZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBKzOOrVlUxZWxTpF1layTZunqHp8vLPbJA8U7SHgE%2FgIhAKz7m2DL9qtKYru38RDN37ClsMf3v2TXxFvs0cmJwb0iKv8DCG0QABoMNjM3NDIzMTgzODA1Igy3Cjeh9cXMOsyTQwgq3AM2H0HrvMGQReJYiCv3WQrgmh5W36lFFOsLrE3IU2AkokC92tPW5angP%2Bz0NRwjfSSeExvpi9jl8kF2coluXgZdMofh65%2FqKe%2BjBPK%2BbuZTaVBDikujxco8vga93XkurgJtk3x45sRyVj%2FTr%2B2TJNN2tQ%2BSFFm%2BtxZKxMYttBnLrSy2hca4J4pyg9NJy1yesG8YeJLNHbKpRZHQJz36wrHbkwBc%2BJbVDl8HawESOKqurYvZ%2Bf6rDwW5M48ZDJWem3lliGVnSlziJ07UhRNmacu6w9Dv%2BO2l9LTcbeLI%2F2vsWY9Vnm1SHecnhvdmLiol6B09CTE%2Bg3Du2xwQKXES2u6VIg3SLNUzjJOaNtgH9YSLSIRX%2FMlYYobB9Q7AUIJOHEMdMPHVGkLygEc0WINNV%2BnfGutwFBH89nlKDWD2Oxx2Zh030T5c8lXiYaRygDQW7Ryav9EpMoA7LDliZQC2ZqhfnaW5xnOgOXO3hfWhfiK6vHyV5jsx%2Bz85K45ZAowaVBKu5aNJtv%2BP2L9XrADzat7dSkSWaS7Cp8wQNg4BQHn%2BYsvCwjP7%2FVxJ4not995DzJJcbIRLg9x0%2FKGCrpTX%2Fz%2FNMAMwLs6lcK3EgEhTrsW1iFWlKK60TdOdFtqcMDDQu5bEBjqkAdHGgLQllW3dyD9Pmlwd4yRAbrfNidd7eVP96WP8GbFfJAyNQWO%2B8I5B2MHY3wIAN0YMXOyew9Gkl1ejskS1aMGn8M1HcOu1NuKZRdBzL%2BdPmZtd%2FhQQL%2BvVO3K0J6zUKOecwwrTLhxz%2Bd0%2Fr8EV0XGmt3x71NC%2BTDYeAXEE0BN6IzyjHxU5vb0vu0FI5jGAyv20jKEm84O3xwWfYzpojEDF63j%2B&X-Amz-Signature=0270f90fc01c375df59f34bbc85518c5dffa37fe26e598a7a409ba92776f403c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4XSSVZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBKzOOrVlUxZWxTpF1layTZunqHp8vLPbJA8U7SHgE%2FgIhAKz7m2DL9qtKYru38RDN37ClsMf3v2TXxFvs0cmJwb0iKv8DCG0QABoMNjM3NDIzMTgzODA1Igy3Cjeh9cXMOsyTQwgq3AM2H0HrvMGQReJYiCv3WQrgmh5W36lFFOsLrE3IU2AkokC92tPW5angP%2Bz0NRwjfSSeExvpi9jl8kF2coluXgZdMofh65%2FqKe%2BjBPK%2BbuZTaVBDikujxco8vga93XkurgJtk3x45sRyVj%2FTr%2B2TJNN2tQ%2BSFFm%2BtxZKxMYttBnLrSy2hca4J4pyg9NJy1yesG8YeJLNHbKpRZHQJz36wrHbkwBc%2BJbVDl8HawESOKqurYvZ%2Bf6rDwW5M48ZDJWem3lliGVnSlziJ07UhRNmacu6w9Dv%2BO2l9LTcbeLI%2F2vsWY9Vnm1SHecnhvdmLiol6B09CTE%2Bg3Du2xwQKXES2u6VIg3SLNUzjJOaNtgH9YSLSIRX%2FMlYYobB9Q7AUIJOHEMdMPHVGkLygEc0WINNV%2BnfGutwFBH89nlKDWD2Oxx2Zh030T5c8lXiYaRygDQW7Ryav9EpMoA7LDliZQC2ZqhfnaW5xnOgOXO3hfWhfiK6vHyV5jsx%2Bz85K45ZAowaVBKu5aNJtv%2BP2L9XrADzat7dSkSWaS7Cp8wQNg4BQHn%2BYsvCwjP7%2FVxJ4not995DzJJcbIRLg9x0%2FKGCrpTX%2Fz%2FNMAMwLs6lcK3EgEhTrsW1iFWlKK60TdOdFtqcMDDQu5bEBjqkAdHGgLQllW3dyD9Pmlwd4yRAbrfNidd7eVP96WP8GbFfJAyNQWO%2B8I5B2MHY3wIAN0YMXOyew9Gkl1ejskS1aMGn8M1HcOu1NuKZRdBzL%2BdPmZtd%2FhQQL%2BvVO3K0J6zUKOecwwrTLhxz%2Bd0%2Fr8EV0XGmt3x71NC%2BTDYeAXEE0BN6IzyjHxU5vb0vu0FI5jGAyv20jKEm84O3xwWfYzpojEDF63j%2B&X-Amz-Signature=314b21173e24f292beb4ae9283710f6d45c8a259e7bf1c823bb4d5ae4ba32e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4XSSVZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBKzOOrVlUxZWxTpF1layTZunqHp8vLPbJA8U7SHgE%2FgIhAKz7m2DL9qtKYru38RDN37ClsMf3v2TXxFvs0cmJwb0iKv8DCG0QABoMNjM3NDIzMTgzODA1Igy3Cjeh9cXMOsyTQwgq3AM2H0HrvMGQReJYiCv3WQrgmh5W36lFFOsLrE3IU2AkokC92tPW5angP%2Bz0NRwjfSSeExvpi9jl8kF2coluXgZdMofh65%2FqKe%2BjBPK%2BbuZTaVBDikujxco8vga93XkurgJtk3x45sRyVj%2FTr%2B2TJNN2tQ%2BSFFm%2BtxZKxMYttBnLrSy2hca4J4pyg9NJy1yesG8YeJLNHbKpRZHQJz36wrHbkwBc%2BJbVDl8HawESOKqurYvZ%2Bf6rDwW5M48ZDJWem3lliGVnSlziJ07UhRNmacu6w9Dv%2BO2l9LTcbeLI%2F2vsWY9Vnm1SHecnhvdmLiol6B09CTE%2Bg3Du2xwQKXES2u6VIg3SLNUzjJOaNtgH9YSLSIRX%2FMlYYobB9Q7AUIJOHEMdMPHVGkLygEc0WINNV%2BnfGutwFBH89nlKDWD2Oxx2Zh030T5c8lXiYaRygDQW7Ryav9EpMoA7LDliZQC2ZqhfnaW5xnOgOXO3hfWhfiK6vHyV5jsx%2Bz85K45ZAowaVBKu5aNJtv%2BP2L9XrADzat7dSkSWaS7Cp8wQNg4BQHn%2BYsvCwjP7%2FVxJ4not995DzJJcbIRLg9x0%2FKGCrpTX%2Fz%2FNMAMwLs6lcK3EgEhTrsW1iFWlKK60TdOdFtqcMDDQu5bEBjqkAdHGgLQllW3dyD9Pmlwd4yRAbrfNidd7eVP96WP8GbFfJAyNQWO%2B8I5B2MHY3wIAN0YMXOyew9Gkl1ejskS1aMGn8M1HcOu1NuKZRdBzL%2BdPmZtd%2FhQQL%2BvVO3K0J6zUKOecwwrTLhxz%2Bd0%2Fr8EV0XGmt3x71NC%2BTDYeAXEE0BN6IzyjHxU5vb0vu0FI5jGAyv20jKEm84O3xwWfYzpojEDF63j%2B&X-Amz-Signature=312d5ce6be6d46e264e2e92989b64a22f287fd311d912c10ba36e0b62d5528cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
