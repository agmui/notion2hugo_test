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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=13eba60cd7d70549f7e9819ed83e5c5421f60b2c169514f68d6c5b5d93d93d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=42bd507966134768c9961624213d6bff4d81c5bf7bd0509f49138811597a5ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=be10da73780c725dbf3f239789627a83cb33efdf0194dccf0d2c6f5fbfc7bf4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=008feaefefc0a800713fe0f1eeab2c6527ffa588aa095a06687e4257fc637508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=d679543d3187996fb724999b0eb144510ca5ddf9135cc3901f123d0fd6a2595b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=0d06c0dd54a3d540e9d828e9d6ca45d85c822abf976475db35b3ee3c2b5d83a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=fb88f46196aac2d1d58bacece53e5f0f8936fff1a51fea05b34053df1e4122ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=91350e25f5030417b0952c0d1d89cfecab32c007cee516d26b77bac265751f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=63aa7bb1cd88bbe270b6431ad14758ddba3e38e698a423e6c1a6229176f74cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QH56BT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsp0Om%2B2zXyutqXWwPKeqRbk3Q1C2Bq6Ii%2BBJ1GoIfcgIhAMUzM7oVlgx%2BEKRcTG%2FMCyG4afhu52UJLBKbTe6kytrBKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw77NRToz6nRsNlI0gq3ANskkpuvmwInNyRScqaDgPZ89KTlf2d3PbRdfp%2BXVPtjyWm9eBNOYGRNw4SmoEvi%2BVAmQ9goUK%2Buc11yRDfxaxFmDt6WJ%2FztKsqIJXN7A8xs3mO7eMyzna4NxEjc%2FV9q9KhEfWOtIH06T1H5bWD6jMZBoTPJslKvNgFQ2OZe0RGY3XjGaYFe0TNgcrd2Pha%2BRhAmeOFsmWiCFD8dZIGOrLFJO3NXgG0E6kp8ZBuxXphK90TPgFF%2B2XAhMJOTP6gT32aOpf8kA97u8c0zHk3UU884bmaepg7mIm8hCgC7eREX0C%2BBOEMwmxUpJ9Zu8NsxEeZafLl6PFPGEtBFYq8sNlagQREpfOP2uTShGOzD0JoO8hvI2xLL46do6ezE%2B9lF0z9J8iTHhwSVTgSPDycsMFEBpIr85o5v0%2BPmSO22RD%2FDQrYWyR%2FNznzabB%2FqUgbx1FwqxOlBIUwYQF3fL91Gf4dONAEJt3R8T%2FReIhKEO2UJS2fLsMmVSVgT%2Bk%2Bcx%2B2aRu%2BuxeulZnPnAdbW%2FAfqieIEo6Yb0%2FGW9rIeE5zl9LjN46%2FDCHd68n%2FVk3%2BjkL8hEqs5LZF0xiEj1KPR7%2BCnWNIDbeHdYBjkwTTLJjRQmjmYiHIXYXgmaPw%2FaWY%2FjCJ3K7EBjqkAQqzjeNegOid27ZYyFc4GiJ3m5yS2BQpPymnPsWOn2MuqRdgtXEFeJ7WV90N3hv%2BfSb%2F0HMt0CLE0YO9jlFFRRg%2Fm6SZsd1GooV1f6nrBToqOvSQs%2FWir9to%2BzzD7Y%2Fjh9NJSQhbQlSHt5mFRbnuXnw1wt73YqH2BIINxOkwbnFjQstzWSIZoG8ESvUnGV1hZ86Bhp2UADaxzf94VXP%2BrE%2BOw537&X-Amz-Signature=d88248704adc7e8e852d66e952f6b7813bfa39117ea2fee4f00e13ee479d8963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
