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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=b1d6657b4f0ae45d7160f4e2e8462f0e65dac914f9d568586bf6607a688bfbf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=a7d8341ea5dc33efa7673f8e56bf43998d42ac050ed15754a62a91a6cdb3c6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=eaef56665ce1c3de7c2c9acb236bc063d52a1647b359cf82f132265f1a3128f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=d456bedf446584cce740297f54afc207c499dd93e90c048f02017379934edce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=7366cb6b62546545360f8b4e08acfa12c5709062cfa0e24eff3216d5dd74db4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=3a7b177703e9e05fedbacd7dd38e2a5f6e9db03ed9b958ce829515d0e2bc71e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=917809785db7db212ecdfa5de5f84fc848e01ae41492fca023300be1900dbcde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=0f019607dfe25dcc3bfa34d6c7ee416eccf84ded0c287e7df96c532b30469705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=154fb5cad1c536c6bae85410c2ac55d92c62297d4c5f59a579dc937e09c10009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETGD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAccxhLYHcYcgruBw7rgqvU3f5NXV3IqyDUCsBbYVmLmAiAbDrcaFU27No90ST05MEcJmpPRDHJUrqm196GEAYkp5CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8E5OeJhRzLXK9HUKtwDN6wcG3EjHmRAHs9xnnbVPM4FCYXhWXPr%2B%2B9%2BbzKw24c%2FLq64JbZXpxfOB9S5%2FKYlbKe0krJw9JeKLPKyrm1fQem9%2BrBzLQp7JvRDA0JlRHRklNEra4T6yXXcOJcZvnTFbSFfqdx2nC7gVoZYZCVd2f%2FmN0GeL1tM0rGJU77WvTF5k%2F%2F%2FLPqLnFxid3VQ6%2BWx9KcEmmjx5iezOPAoBpc5y4NrRwCLNzYmnY38bFIyh%2BPsdObWHRfhqo5jgDdhtPazzuAfkCT9e5Tr%2FeHyOq8ebSaQ40%2Fo%2F8VFCuftxslFvnXFqgppAokb2USeqdOP2R%2FrO4S7Ry%2FfqmPpFGDNBk%2F2%2BATXIl%2BKMakSsENONKXqPRmYdMaxjFB93FdcAPOQTUyiXWKdE7SK7AODb6V%2FspZ3RgjERXZnBYNvZRVMwz2ZnXACZ3DMF5xF4%2B7QIR5OGymI7gYOGCmlpC6iw8N%2B7o%2FKUvSizPVh03dLL%2Bv7k050uATDSnf0BSIzh50qci40qN%2BVxNrQ3abPOlB5qro9UbBFJvh8g5I95jq0bB3YVlDyNvf7B1EU5CUclOFPGUSmJCgCt1NOqBW1U63TQQChqG5FCcxYTT%2BI46xcfrlmfng%2Bmq35VP%2BpwVVsJlETouMwzLGixAY6pgFUJt%2B6eSipsud1XbPY29qgJlL0CdRSrzW11g6JdvWAF%2Fm76rVNzL%2Ft89Xbysqm2V5kdCUvUA7AE5dYURgc8FqdP2MoZhw221t2COySejCxtKCAKXB8I2BXA3RwTkyN49dNFezkijebxtBWasAdFpf4YBvvZ5cMqcuQyaEFPjZsMTztWrDf8mS%2FwQ2Lme1NtYLSKusHjV%2B%2FpgptcaPVeNQ7a0mjES%2Bp&X-Amz-Signature=3a8fda6012ee30653aef940f4fba1aa69905490b0a4531620c16696cae74cc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
