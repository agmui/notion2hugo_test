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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=e812fff7dafb6ee8e3bf4f0be9a5f83d76ffeb883a76ad43ba5471d901347936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=35ec25f640c85b97f91707df9db4edf27acd6c597e4869dd422d27298164c0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=555c9e929f412be3b2b47224dbf7edf8f3955eb900b4c22c3ae1dfd80885cb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=5b95871705ceca15d3fefcb30d80373241ea6ad6e3b4358da69817d72b3f038b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXZZJAN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGlIj1OBnvJiR9L672RkH3WqLktyCfw3%2BTKKsS4%2FwmSAiEAh1H99n64aULsCLIcPBCureg7YSpslVTu3stIruzDOxwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLPcDauM8hOjqSFYqCrcA6vYP90rMNtdcRDpV3jekN0894ejv6zGsEmjVmqhsczd28IZpQn1pD8KI4DEaSPn5PIy%2BhdudB24j7Ljdx3QWPPFXYSw6EDU6gr%2FzCsVeCcKDyN8oGe%2FQ6NGCWQsYkV%2BWplNHfyVDkJT6mIR%2BRGHKBg3mf9qtbcjQerQK6f%2FK9RA1XTk6vt0KUFnhqxY6nBn37imLeTt0kkuCshEYOQE8Q0iszAU371Ae37iW2Y%2F2B31BF1TpWfULctx6BeGJjdbOI8Z%2B5wn1rcC5mE4eGo3SvZUCC9rcOrYCkwEkygSuyZ4ClUDBeQvC7lE8l0kGk1NrrnRcBCF4Yale5rgEc7S8eF%2FCcNfQvZuztyWBn1rAxYg49gXXbixVvVv%2F9zXWoSmNj3WkLE7fl6cy9t1jOy1KkgYg8kgIrLyR4lC%2FWMIH6l6yGmf%2FoFt7wDP8OKjouhglabYFiGp5vbNLYbWLdVvjabLeVoP5pzh62hAwqTYEQ%2B1xft%2FqZ%2F5pocoJWJkLxe7NW4Fia%2BGO7fPXAX1c2WL%2Bsll8isJezzTXXphEOSQSzjYaEv4ofyx%2B%2By%2BXxQL05JOJxvzZ9AAbhG5GYUug44VlIx54PN0N%2FGOL%2BnNV3HkAy0FfoVdNKmPIQTDaU6jMILwtsQGOqUBDptwl6sDk%2FvNLaMzjRuiETu31Y22k8Wjdd%2BqMhuWv9%2Frt8CTXOsu8ZXGPGgnXow9ZphwzyVJJq%2BVirqaLGxbSjqWnMC97BnOBf4X%2BGwKhkg%2FTarLfuIQ03qg6lOrH8K0C7sVATzSigWN%2F%2FPo063Bzod2PjigKm3VTGSEuxIsTWIuWTX7vALedGDwLbH98lMDfBn9i3np8B4C2BUKGj1F5lCYTJdN&X-Amz-Signature=fa63e68b920cf0a134acae0cf4c02bc67e5ca983e7db600f24c19e66ff481454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=fd2afa9bc2f297ae81c5826af0d81debe242a2cb184d191b9df0fe3eb358ef19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=2d4436dd1d36f863f240feaf35de936861bce614f47c62bf3b1516d11f7d96d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=d2a599edaff1e02aeab0c98ede08a3ebf7629d1877886486107e05e0f442bb6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=26af0e7f737df2cfa027aef92dbdf3419961ff62ab350d2c97f90a58be5795f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=b9e08147c2a778c9a786490e3366243a6bc421a6e230f0ce4fc3eebcac73d3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKW27TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfKub3pHiNZBiZWVjC5WCp%2Fx7rqjeT6o8Rfry7wqGD8AiBT0IAZ5DXTPzodTToIzLMSOMJNJYjJR%2BzcN735UkvP0Cr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFEbTnm%2BmJ5DAU9klKtwDnLbuWbJ0GeY24Xk5ANkgrhz%2BRzreCQWK9vWnuKbUMfJcsS%2Bz7Xr7th4p2c%2B5Nm1%2BOWJFMmztn6bmWOeuMnedLiaP0CNixYK9xxZqnoXdak7BnsOQF%2F%2F5kgf2IqVZSnQ%2ByrPLmlNfWESTQ7V6ljWQW3dMGndwBZbP3Qlbt0FuDSrnZ7pcAPBh%2B2vCS1GwCVMkBDP18tSyVDGyoZMQ1%2Bw9YYKNbn%2BNpKeEh0hkoLlwINDL54OW8CKwmHbnz8eKFuo%2BwqZBi6JtEhLXi3GY9Kr11CTEXRNEfeN4G39OX9uqxAZUGKB%2BTmGmy9tBBRTY68aO%2Bva7Z8msdTJEQV2U29Sm4Y8xpjK%2FQ2P0aUKLU79uTNDpzeisjZcSUljTgV39nA0dB%2BfhKRLzcJ2PmDGuPEA4GmKut%2B%2FUdONIEMIMfA9xDoQJqHbysJSgT%2Fp5xDIsr%2Fm7S1iGijqyfDihYbvMMSDZ2QyMoVcThmmD2N6xlPeVJw384IQdawb97XZ0vOvwqXsR87Al%2Ba%2B7s4O1VKuErKtWCLz35wQu3qcIbZlLL1Ye2gBqKVYO8z%2FpS11ws3kmdy8%2FI0WiTw4ZOf8uALSfMwpmiZQojnjP%2FWQqecFLxkzcTmS8BpP0KhjbroPciQwwxO%2B2xAY6pgHmppOYfdWD2I9O4I7nNkxxg6dO4DJFc82%2F0Rs0rKQSFBLKePJ7Kw0fxH9M72VbvTS7DNVU4umCBwGme2MJmzl7tfhwWvC%2Bxdek%2B%2Bxo4cAzPUBGnzkeSiuFr9YdX4ATgO1nbbAU3XCDkqzsP08TuXdRvYBvPvjYxHaLobrTaxhKI%2B7dKYT4Iy%2FIcW0f5b%2F1arWjn5JbPsNCdcgt02SDUWd46ICUPtQh&X-Amz-Signature=8157b2881280d5e1c872bb0fb82ecf91456fc4f9486cdbddeeb3453709ad4c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
