---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-24T10:26:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-24T10:26:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJNNNET%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFkjvEgRIMTKgPXRffLc%2FtAOaMssP4gIBjZ7jUdG61zFAiB1UbzQuAsfh3fer0HvKNAFJE5VjLw9x3MTvelL7lF2iyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMC7nda8LGRM6ICP1KKtwDjNb12uTTVTM4394%2BQUTmDkeiRSm4JCxXhtKt%2BipudHZlmEb%2BcpQPJIst0q66I7LVrLYr4Euy%2Bwy5OvuLysmiBdJJgJJrX3oQtapD2Jfa2frm6YDhPE7wxR%2BNVKG%2BBkKZuQ0SB6EnD0yE%2BvxDDwfLFISTtn1ldoYj13pkHoF7fWIoHilcMDbcKSQZb1znvHGx40IazPtlSnp84FMEd3fpiJ04KixllRLzZdc2yXcUpmaqmgBIrGjWfUQasOMjoAVYIFAnQu2G%2B%2FpgOYBBuiMhXck%2Fli8i7clzb%2FldE7LSa%2BMjxRBrFK7tyw%2B%2Bo7X0T7%2FdZXEvuRQgeSAFbAKwQQ7mXHjcNlykb0Vmso7E%2Bvxt3dStEgWlY4YmS3T73kZWdC4z9xk3mGJRINIdi9b8ce1v2CKTaMnSVvFOGtVebi4msku8m7Ct4aaIdNrFE5wH2wFKU0QBQuXik0IyyTFpkIC2U%2FbLiGkbwzV0%2F4kkb3bhEHyaXRg2yKagSPnF2SVNrtYc03gMiiFgNXQuw0qdKszESWXtN68ri9%2FfmfkppiOqyXAqZDlLKes17wYwMQcGeLWwOX5IJQdZy1W9IvQHVlmjIuepFVch8no8QpkRNWYnZzz92IqmP4oxkYoVo3ow6I2IxAY6pgEOb2Wqk9i4SQCbBJapk81C6xKLhwbMxxslnRc2YuzHmGx9YZ4zNIwwyrJzKJBwZTVzJl7kE6hiLb8E1%2FVlCssmvoVoCXh%2BDCc2o3XAufbqL6mCJwfELSt0ysJA5AJiu46tSqnKfnwCnEFo0kKdK9k1ua5ePG%2BM0dsDYOAWdHsngQUo9ZVuqVohiH0JEjK1A%2FjSJwwvFcVLjbJfUzwzC7uJdDjMbtea&X-Amz-Signature=cc3a300c659faee7aafdd27d3f942d67812e6f3960fd7887d5366e063629021e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJNNNET%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFkjvEgRIMTKgPXRffLc%2FtAOaMssP4gIBjZ7jUdG61zFAiB1UbzQuAsfh3fer0HvKNAFJE5VjLw9x3MTvelL7lF2iyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMC7nda8LGRM6ICP1KKtwDjNb12uTTVTM4394%2BQUTmDkeiRSm4JCxXhtKt%2BipudHZlmEb%2BcpQPJIst0q66I7LVrLYr4Euy%2Bwy5OvuLysmiBdJJgJJrX3oQtapD2Jfa2frm6YDhPE7wxR%2BNVKG%2BBkKZuQ0SB6EnD0yE%2BvxDDwfLFISTtn1ldoYj13pkHoF7fWIoHilcMDbcKSQZb1znvHGx40IazPtlSnp84FMEd3fpiJ04KixllRLzZdc2yXcUpmaqmgBIrGjWfUQasOMjoAVYIFAnQu2G%2B%2FpgOYBBuiMhXck%2Fli8i7clzb%2FldE7LSa%2BMjxRBrFK7tyw%2B%2Bo7X0T7%2FdZXEvuRQgeSAFbAKwQQ7mXHjcNlykb0Vmso7E%2Bvxt3dStEgWlY4YmS3T73kZWdC4z9xk3mGJRINIdi9b8ce1v2CKTaMnSVvFOGtVebi4msku8m7Ct4aaIdNrFE5wH2wFKU0QBQuXik0IyyTFpkIC2U%2FbLiGkbwzV0%2F4kkb3bhEHyaXRg2yKagSPnF2SVNrtYc03gMiiFgNXQuw0qdKszESWXtN68ri9%2FfmfkppiOqyXAqZDlLKes17wYwMQcGeLWwOX5IJQdZy1W9IvQHVlmjIuepFVch8no8QpkRNWYnZzz92IqmP4oxkYoVo3ow6I2IxAY6pgEOb2Wqk9i4SQCbBJapk81C6xKLhwbMxxslnRc2YuzHmGx9YZ4zNIwwyrJzKJBwZTVzJl7kE6hiLb8E1%2FVlCssmvoVoCXh%2BDCc2o3XAufbqL6mCJwfELSt0ysJA5AJiu46tSqnKfnwCnEFo0kKdK9k1ua5ePG%2BM0dsDYOAWdHsngQUo9ZVuqVohiH0JEjK1A%2FjSJwwvFcVLjbJfUzwzC7uJdDjMbtea&X-Amz-Signature=b050309b820cd3c6c5fdde7e056325222bff337c5c3a7b820e9096bc5e6758a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJNNNET%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFkjvEgRIMTKgPXRffLc%2FtAOaMssP4gIBjZ7jUdG61zFAiB1UbzQuAsfh3fer0HvKNAFJE5VjLw9x3MTvelL7lF2iyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMC7nda8LGRM6ICP1KKtwDjNb12uTTVTM4394%2BQUTmDkeiRSm4JCxXhtKt%2BipudHZlmEb%2BcpQPJIst0q66I7LVrLYr4Euy%2Bwy5OvuLysmiBdJJgJJrX3oQtapD2Jfa2frm6YDhPE7wxR%2BNVKG%2BBkKZuQ0SB6EnD0yE%2BvxDDwfLFISTtn1ldoYj13pkHoF7fWIoHilcMDbcKSQZb1znvHGx40IazPtlSnp84FMEd3fpiJ04KixllRLzZdc2yXcUpmaqmgBIrGjWfUQasOMjoAVYIFAnQu2G%2B%2FpgOYBBuiMhXck%2Fli8i7clzb%2FldE7LSa%2BMjxRBrFK7tyw%2B%2Bo7X0T7%2FdZXEvuRQgeSAFbAKwQQ7mXHjcNlykb0Vmso7E%2Bvxt3dStEgWlY4YmS3T73kZWdC4z9xk3mGJRINIdi9b8ce1v2CKTaMnSVvFOGtVebi4msku8m7Ct4aaIdNrFE5wH2wFKU0QBQuXik0IyyTFpkIC2U%2FbLiGkbwzV0%2F4kkb3bhEHyaXRg2yKagSPnF2SVNrtYc03gMiiFgNXQuw0qdKszESWXtN68ri9%2FfmfkppiOqyXAqZDlLKes17wYwMQcGeLWwOX5IJQdZy1W9IvQHVlmjIuepFVch8no8QpkRNWYnZzz92IqmP4oxkYoVo3ow6I2IxAY6pgEOb2Wqk9i4SQCbBJapk81C6xKLhwbMxxslnRc2YuzHmGx9YZ4zNIwwyrJzKJBwZTVzJl7kE6hiLb8E1%2FVlCssmvoVoCXh%2BDCc2o3XAufbqL6mCJwfELSt0ysJA5AJiu46tSqnKfnwCnEFo0kKdK9k1ua5ePG%2BM0dsDYOAWdHsngQUo9ZVuqVohiH0JEjK1A%2FjSJwwvFcVLjbJfUzwzC7uJdDjMbtea&X-Amz-Signature=94582dd6b986cccdb264df318ce887ebd6e32d0ebed1f02db8d68618fef57f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

Thus all Gazebo topics must go though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJNNNET%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFkjvEgRIMTKgPXRffLc%2FtAOaMssP4gIBjZ7jUdG61zFAiB1UbzQuAsfh3fer0HvKNAFJE5VjLw9x3MTvelL7lF2iyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMC7nda8LGRM6ICP1KKtwDjNb12uTTVTM4394%2BQUTmDkeiRSm4JCxXhtKt%2BipudHZlmEb%2BcpQPJIst0q66I7LVrLYr4Euy%2Bwy5OvuLysmiBdJJgJJrX3oQtapD2Jfa2frm6YDhPE7wxR%2BNVKG%2BBkKZuQ0SB6EnD0yE%2BvxDDwfLFISTtn1ldoYj13pkHoF7fWIoHilcMDbcKSQZb1znvHGx40IazPtlSnp84FMEd3fpiJ04KixllRLzZdc2yXcUpmaqmgBIrGjWfUQasOMjoAVYIFAnQu2G%2B%2FpgOYBBuiMhXck%2Fli8i7clzb%2FldE7LSa%2BMjxRBrFK7tyw%2B%2Bo7X0T7%2FdZXEvuRQgeSAFbAKwQQ7mXHjcNlykb0Vmso7E%2Bvxt3dStEgWlY4YmS3T73kZWdC4z9xk3mGJRINIdi9b8ce1v2CKTaMnSVvFOGtVebi4msku8m7Ct4aaIdNrFE5wH2wFKU0QBQuXik0IyyTFpkIC2U%2FbLiGkbwzV0%2F4kkb3bhEHyaXRg2yKagSPnF2SVNrtYc03gMiiFgNXQuw0qdKszESWXtN68ri9%2FfmfkppiOqyXAqZDlLKes17wYwMQcGeLWwOX5IJQdZy1W9IvQHVlmjIuepFVch8no8QpkRNWYnZzz92IqmP4oxkYoVo3ow6I2IxAY6pgEOb2Wqk9i4SQCbBJapk81C6xKLhwbMxxslnRc2YuzHmGx9YZ4zNIwwyrJzKJBwZTVzJl7kE6hiLb8E1%2FVlCssmvoVoCXh%2BDCc2o3XAufbqL6mCJwfELSt0ysJA5AJiu46tSqnKfnwCnEFo0kKdK9k1ua5ePG%2BM0dsDYOAWdHsngQUo9ZVuqVohiH0JEjK1A%2FjSJwwvFcVLjbJfUzwzC7uJdDjMbtea&X-Amz-Signature=085cbb9383d967b5d9edddd66cf517c6e436e88cd14b2ac5fd4784fb4c70ed80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJNNNET%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFkjvEgRIMTKgPXRffLc%2FtAOaMssP4gIBjZ7jUdG61zFAiB1UbzQuAsfh3fer0HvKNAFJE5VjLw9x3MTvelL7lF2iyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMC7nda8LGRM6ICP1KKtwDjNb12uTTVTM4394%2BQUTmDkeiRSm4JCxXhtKt%2BipudHZlmEb%2BcpQPJIst0q66I7LVrLYr4Euy%2Bwy5OvuLysmiBdJJgJJrX3oQtapD2Jfa2frm6YDhPE7wxR%2BNVKG%2BBkKZuQ0SB6EnD0yE%2BvxDDwfLFISTtn1ldoYj13pkHoF7fWIoHilcMDbcKSQZb1znvHGx40IazPtlSnp84FMEd3fpiJ04KixllRLzZdc2yXcUpmaqmgBIrGjWfUQasOMjoAVYIFAnQu2G%2B%2FpgOYBBuiMhXck%2Fli8i7clzb%2FldE7LSa%2BMjxRBrFK7tyw%2B%2Bo7X0T7%2FdZXEvuRQgeSAFbAKwQQ7mXHjcNlykb0Vmso7E%2Bvxt3dStEgWlY4YmS3T73kZWdC4z9xk3mGJRINIdi9b8ce1v2CKTaMnSVvFOGtVebi4msku8m7Ct4aaIdNrFE5wH2wFKU0QBQuXik0IyyTFpkIC2U%2FbLiGkbwzV0%2F4kkb3bhEHyaXRg2yKagSPnF2SVNrtYc03gMiiFgNXQuw0qdKszESWXtN68ri9%2FfmfkppiOqyXAqZDlLKes17wYwMQcGeLWwOX5IJQdZy1W9IvQHVlmjIuepFVch8no8QpkRNWYnZzz92IqmP4oxkYoVo3ow6I2IxAY6pgEOb2Wqk9i4SQCbBJapk81C6xKLhwbMxxslnRc2YuzHmGx9YZ4zNIwwyrJzKJBwZTVzJl7kE6hiLb8E1%2FVlCssmvoVoCXh%2BDCc2o3XAufbqL6mCJwfELSt0ysJA5AJiu46tSqnKfnwCnEFo0kKdK9k1ua5ePG%2BM0dsDYOAWdHsngQUo9ZVuqVohiH0JEjK1A%2FjSJwwvFcVLjbJfUzwzC7uJdDjMbtea&X-Amz-Signature=a03d1e333c7e64194720be8f970bb3798c1f3b479127a46d74e7f51bcc9a1bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJNNNET%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFkjvEgRIMTKgPXRffLc%2FtAOaMssP4gIBjZ7jUdG61zFAiB1UbzQuAsfh3fer0HvKNAFJE5VjLw9x3MTvelL7lF2iyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMC7nda8LGRM6ICP1KKtwDjNb12uTTVTM4394%2BQUTmDkeiRSm4JCxXhtKt%2BipudHZlmEb%2BcpQPJIst0q66I7LVrLYr4Euy%2Bwy5OvuLysmiBdJJgJJrX3oQtapD2Jfa2frm6YDhPE7wxR%2BNVKG%2BBkKZuQ0SB6EnD0yE%2BvxDDwfLFISTtn1ldoYj13pkHoF7fWIoHilcMDbcKSQZb1znvHGx40IazPtlSnp84FMEd3fpiJ04KixllRLzZdc2yXcUpmaqmgBIrGjWfUQasOMjoAVYIFAnQu2G%2B%2FpgOYBBuiMhXck%2Fli8i7clzb%2FldE7LSa%2BMjxRBrFK7tyw%2B%2Bo7X0T7%2FdZXEvuRQgeSAFbAKwQQ7mXHjcNlykb0Vmso7E%2Bvxt3dStEgWlY4YmS3T73kZWdC4z9xk3mGJRINIdi9b8ce1v2CKTaMnSVvFOGtVebi4msku8m7Ct4aaIdNrFE5wH2wFKU0QBQuXik0IyyTFpkIC2U%2FbLiGkbwzV0%2F4kkb3bhEHyaXRg2yKagSPnF2SVNrtYc03gMiiFgNXQuw0qdKszESWXtN68ri9%2FfmfkppiOqyXAqZDlLKes17wYwMQcGeLWwOX5IJQdZy1W9IvQHVlmjIuepFVch8no8QpkRNWYnZzz92IqmP4oxkYoVo3ow6I2IxAY6pgEOb2Wqk9i4SQCbBJapk81C6xKLhwbMxxslnRc2YuzHmGx9YZ4zNIwwyrJzKJBwZTVzJl7kE6hiLb8E1%2FVlCssmvoVoCXh%2BDCc2o3XAufbqL6mCJwfELSt0ysJA5AJiu46tSqnKfnwCnEFo0kKdK9k1ua5ePG%2BM0dsDYOAWdHsngQUo9ZVuqVohiH0JEjK1A%2FjSJwwvFcVLjbJfUzwzC7uJdDjMbtea&X-Amz-Signature=04130ea48a9d08099c3d79d5090f54f7a9a432f2fd93fcabcb9589818c12068a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJNNNET%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFkjvEgRIMTKgPXRffLc%2FtAOaMssP4gIBjZ7jUdG61zFAiB1UbzQuAsfh3fer0HvKNAFJE5VjLw9x3MTvelL7lF2iyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMC7nda8LGRM6ICP1KKtwDjNb12uTTVTM4394%2BQUTmDkeiRSm4JCxXhtKt%2BipudHZlmEb%2BcpQPJIst0q66I7LVrLYr4Euy%2Bwy5OvuLysmiBdJJgJJrX3oQtapD2Jfa2frm6YDhPE7wxR%2BNVKG%2BBkKZuQ0SB6EnD0yE%2BvxDDwfLFISTtn1ldoYj13pkHoF7fWIoHilcMDbcKSQZb1znvHGx40IazPtlSnp84FMEd3fpiJ04KixllRLzZdc2yXcUpmaqmgBIrGjWfUQasOMjoAVYIFAnQu2G%2B%2FpgOYBBuiMhXck%2Fli8i7clzb%2FldE7LSa%2BMjxRBrFK7tyw%2B%2Bo7X0T7%2FdZXEvuRQgeSAFbAKwQQ7mXHjcNlykb0Vmso7E%2Bvxt3dStEgWlY4YmS3T73kZWdC4z9xk3mGJRINIdi9b8ce1v2CKTaMnSVvFOGtVebi4msku8m7Ct4aaIdNrFE5wH2wFKU0QBQuXik0IyyTFpkIC2U%2FbLiGkbwzV0%2F4kkb3bhEHyaXRg2yKagSPnF2SVNrtYc03gMiiFgNXQuw0qdKszESWXtN68ri9%2FfmfkppiOqyXAqZDlLKes17wYwMQcGeLWwOX5IJQdZy1W9IvQHVlmjIuepFVch8no8QpkRNWYnZzz92IqmP4oxkYoVo3ow6I2IxAY6pgEOb2Wqk9i4SQCbBJapk81C6xKLhwbMxxslnRc2YuzHmGx9YZ4zNIwwyrJzKJBwZTVzJl7kE6hiLb8E1%2FVlCssmvoVoCXh%2BDCc2o3XAufbqL6mCJwfELSt0ysJA5AJiu46tSqnKfnwCnEFo0kKdK9k1ua5ePG%2BM0dsDYOAWdHsngQUo9ZVuqVohiH0JEjK1A%2FjSJwwvFcVLjbJfUzwzC7uJdDjMbtea&X-Amz-Signature=89497bb798f319ddcbd13bdf7875dc4245cde9adcb49f7b4559ac2669ad7a373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
