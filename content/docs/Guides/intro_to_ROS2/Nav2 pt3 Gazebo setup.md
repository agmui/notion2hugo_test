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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=77d3eda751cc8dde14c2c402d51696a65259a547adac47f69ba790acaa1e8e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=1a987310d8f5ee56886ce30cdd30399cd5a6055965e11611e402e193d37478ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=c4ccde537ad8efc99c2794ccfefaf3f99840f91944e951583903593e013ab0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=7530672b7c32beac359a0ae84643c650efd3d88745ed3446e33edbf5ccc5e6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPSGOBX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICiv1keX4QKJMmtOvBNKTuB7KeXbaUvLi0HeQMjBoDxpAiAgQeIagwfBNriCZvRKJg7kszV2S%2BrE0VnbOXjvIkncMir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMX4RJ7Svj5ZjULATiKtwDDqvRO9bRSG0MmqzOasirIDg8VqHxHX%2F4majmMtDGAhsFyVfBuyBoLdyzoEO%2FZlUHh2WfBL0ZLcJgYDBcHS7XoNKqQ9EXU%2Fmw%2FVc4hALN9loezfqAOTbOLZuP0pOrDz8RoNxdDLx63QodWL7WUB9JA4YhkdEt%2FNVwB%2FCdSGQEsviWG5MsTozwlq%2FEFslI%2Bv4J5MzOWNismGB3XldEJpXaGEI98GXE%2FsUXa%2FknUuzvKqhLCKiVL99SZ5QNwJzFci4jKmsdvJAJginHFOMbs39f4lCrASB1sJaerzrbtDvl%2BuRL4p6fmmULzOf2AwnUNEc4pXZCaSDXUlwk4AuQQAtE36Lrmo7%2BTr%2BDyiyoTqUteKDCvEiVwQlVxWhAQMHGaHKMQD5SxENgag5NLkcDszmmpCDvjKtlOPofVc88VAiz4cCxK7xJ8GLKOkhBfXwjIc2YeDVFamlHs0mM0V2Ne8Z03BOyBigFeH4MPF6JMtADE6vQeJmId8xykB49YHDC1wdbgailXzhwaap5fJ%2BGulAy0kKHgrUZEVtl8O9LxYlXZLSXGNpFL%2Fqit5NwyPHDbuLRRMZZEh8WNb7KKhjeYYl%2BK4N80gBZ5jnYH0gK36L8ITtefZmzXiDdZpclmQQwg4uAxQY6pgHfmpe2%2Bdl%2FaOMr2YtNZXNy0yxCl7QoqlOtWUYDFqhN%2BCfIU8DekHX%2FlKFyzd7JPjsS0Uqbn6h2ppTy9dfDuP%2F%2Bp%2BBPDzrWaTMGwxJ%2BfCtYF3S9VrS0APjHxPfbW5SbrfYYYdhL1ycNJ2MOQ60wa6CREmRAEjH%2FRyGSGtsEw%2FNWQSB7B4Gd9mPknnxQPOP8vQvk0jjqAAtV%2F3YtmTSUSp1QIanvs%2BcH&X-Amz-Signature=5495c4d1812a5559d595b7d8e550a1f318bd7ad326f2a9d9c91faf7238c79742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=76086ef4b47f1d530079b3e47765830c4c48c4687ab8c961cd912c8bc8100dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=5f3055733657bff2d5ef14b6354c58ea63338ea863e846d524e2f059b46d0497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=4ba32b9184c5faa6633a125bb0a880b9ada513cafcff102ca3ec3643ea6c8693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=83e125d3a0be09822f64db3fe100a3a5d919f9722b9f970f29c7fb44c0760729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=4e508dddaaa96e91c21e9c669dadcf1a23aa45e144b923edcce42c3c7978d017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7SKD2E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFuKZoh3wzvSI7gM0cjm5gnWSYcYomjn1edrPJVSSgndAiEAm7GWS4MSsGQv5INWYfAoCGprq3qb%2FxkzyRLGqI7AQagq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDXayNLFEYj6NPe4iSrcA8X34NiAOSJUMAm8Idwk%2Bgpm7xqo6gruXI1l9rqdFwIHwJe2gB2rSwwQ%2F7GW7qkuZp%2Fd98nm%2Fgxk6R5a2SSUyAPVeTNgkZz%2Fsgrm80ysb%2BxwcgkwgP8jgv2SJDX%2BKCTwFnzUz8qwO%2FjuxwVjJbmb9RzCcSvU5maFgSjnFTxXIF0Ht2GHlLSPg10Fu5Q5uCmFyTxWWtMzQwIZkN8doU7tX3vplQkoDvpRO23Ep%2B7vkZjI%2F1Q1zLCNrwdvnQUor5yruEqJxsMYNA%2Bz%2ByOPNYEnqPrLlsz7T%2FSaZRqoNGvR3Msg0xF7MmkOWjFlTVhTrxIOnM7p0fq3Z2Eeu9zcTXxDhQsZEQ4yr9zQL5PXEH3Pv3Esr50IdNZyf7s1CG7eD7vzQd%2BSmAMrpDq5l5%2FsydsEdVGR%2Btz95oCZ9Bt%2BAkdwe78VY9P2EVli5U2MUllbBq4OJfybeBxKn7JNDRZkGtypO%2Fy48N6kdI%2F7BJdga4HyQTJNg7rkjtL7cA9JzMSbcZeliiSg9KAAeqgqygnIKd%2FPhc%2BoIpsg44bjJLE2hVaAB%2Frf5BmE0ajp39fwH5ShRUaw3yLpdblj8k9Eea7mxUneRaSWUOtZ0Yr0jMp7CX%2BHpULoX7NpkxtdEsHgA1d3MMzj%2F8QGOqUBsflpIN8xiEXLxDAYVFrO8gSA%2B6xg2qHnhnbgr%2B6G0weHdL3dySTUYYQon6pYqGtRtBCbtguY4THh0ss8WFnmQTi3hLlH74%2FesAVQhc5aePON4xOp7pVexfUxsuAqCeQelWTe2APCQcRNsY1iuaXD%2F7KuDTfyDe4CJQSp4J%2BvVMr5b62BYNr2XybLJ9PwM9HnQMNIVgwTgnnOE1rOuzYIdqPLneEq&X-Amz-Signature=c95cbc44e4365a4d45015c46f5cc03d02f66f205cdd4da34934a4cdaed6c9fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
