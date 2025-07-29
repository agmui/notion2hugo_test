---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-29T16:54:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-29T16:54:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=ea2654bf0c7f90047b80410c22cfff81a5b5a00ff11f80d7e536a303bfa991f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=047881d6874f747e5ee219c41ed7479dff968fde1f0243dddc108d188fc97a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=e0825c7db807e2a58d82f53fde936d6f057ecccc95c922557ad4fbf5a1a22a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=97ccaf4fcaf3a41df0d82aa1d8a85552be0bc88e72668ebdada109001ef61f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=b88edef29a065f4359792b28506f5380dab1221b1d622e8e3a64c476febc777d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=ff18dd32929ba987ad40a668f09d99c4efa4e309967bdb55be1e41a9c7ae3018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=e0b4e84510a4598b98dede028ad63b87a1347da487dddda64b1b0cb4db95b610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=18516b9cc46d47879bb2de95f80399ce576dfceaef7ebfb8d543999a8473c192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=d6bbcedc433fae214d8bd7a97a715860f8a0b432521bc6d29eaff11f8a954868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEY7RKN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESdlDM8cqvlH3hVnya34yjCVgxRcgHvyzBF7SSTFXhgIhAITm0FqOQ3DcTI9wxHDfRU9jNRBwIK%2Frl%2FBUxS%2BQL%2Bt8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8SQ6JVft4lRhE8K4q3AOG0Lt1Hz4RdVsh42Az2DwtAPQ9RHsuJLXPRorK264OLEmNqUkQ4uxZt3W7SLrUsQi6z9bDdhY9Qks4v528QMruHP8mnT7fn2WG9%2B4eTs7mHqgfQUIbWj1IuCBHOx08mxmt8tXwHBQAefuWXdtgfmz0eFIfj1bm8AaWdUljHTJLL3BRbXYMHurgkbYxe7%2FRDtulYE9If1LYdr9gewKn8qUtdpEROmIyQGgdriroVu96ha2AAcJP06YCNWeXZguE49FGYr11s0hjSJz165nJMzsYDnsRiD08ilI6Wq0LCL%2F6WAP3ssv%2FhZRKM2cuutx77Wn828ZchhsFPIH6barQplmdkzb7kXwVk804mRQPe1xJ55bmS4iAmmyu6%2Fyg4jus%2BFEGFUJaNsOMA1zaIOr%2F42HohYiGq9NSzwWad%2F1tFI%2FV8FFX%2F56jBuJ1SXcZz0LswDuxRJ9WE1rAJ8Q1uTks6hSp06iGjhAsBaG0Jc3A3LG1CsQ0wPZr3XajDnO0OUH8DW2%2Fg%2F%2FWZaI8ymRPY3ZSTO6xja07KtNIvPCcC%2FTf%2FmRCgeYzgwH5u%2FApVgiP%2F7C7ktsCZ0%2BwLB7TrVt9iKERc7yWyee4MperV6TGUoQgzB%2BEw0pRIPygGHxEIF7XejCRiqXEBjqkATsI60zG5r7oX%2F55E4SR5iSWX2cGJ0TQuAuqmXnhTZYAd6rNUmw5BDflSc089mtKavQI46UhL%2BmbZlvs0Ivr06OCOKe5xGUGoByjWdQbm3SAQJRT%2BUMMqkHv8lDP%2FETnRmJDmS8cl9v%2BdfzGIQ0rio6xYB96cC%2FBZVLC7%2F9TG9ea3Ueaz5KpLQHfmVXxJQigrDgqamKaIy%2BoKu9qauadwtV7jwkZ&X-Amz-Signature=43364c648e0c3d24009afb2f007a0179810420b16daac8d6056c538c4a656430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
