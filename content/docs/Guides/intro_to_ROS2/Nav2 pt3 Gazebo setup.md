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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=f1c3c2c6dd4f9a6e91e3463218039957bef2d7c44d12d58a61cd170f6f92706c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=378e8cec7a5d141b6894afe431d19bd1c28d551793456c5625435f365ae1c73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=72f841d4a24f43b2c1a2ed2d0c4560869d18aa0aeed3239b2ed8ef0c49d5f5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=06142cbc4ef2026975c3b670cd0424832d17f004f09eee43b8a2c397d03d4d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=d62af7003e1938de4b82075968c190483e7d393ac52e4f8ff02028e150a8d865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=e3a62bdf8738dc6d0ada81b2af41f34d580bc1ac7639d100d1c9b2a66b8c1187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=84eb4e07d2411c44dcd9fe3d57603c25dda1e08ad2f0f0e1ee0cd8f2f1f7f0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=2f3547177b619a9dad2d357503cee6a6320fb307a990e02068d374fc7eb1d05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=279b1c6a9b1a2b38c70b1292cdae829424af1d5a067f1086c4c7d209c3841715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE44WPT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIhKVR74cvX9yB60GShjFJTliih%2BbCyzx8SwQc1nZbAIgdl4cglrQEDLwI%2BSsRg%2FmpbdzsVBFudpYlPEWI3dWAsgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1jcjAZH17DyiZXCircA137M3v0vAph%2FIujW8JpA0UHTM%2Bm3XQ654nrYqOSi5ILJx80ZkIzyMAm7RZlIKPTR8JGl7f4j31hCI%2Fvc%2FcDjWvtU20DnVdMi%2BozE0QWveaPPyKEESo5m9rc1MQlgffuX7V%2BGKiUkUVpWXobxHSpCCgoG9DQdI8hTJV1e0W6r3poJY3awLq4M0gdpUlFy8rgH5AdOmgQceh1WOsKItWadwRuOhXP%2F26CyOkQ5nzOrOdAJ0ncJ7y4kAx1ufp7dDA9%2BT%2BRNEWvBKctZ7IEIkvvIuSRXJdBQWYkS%2BnhIiHwxHIDP3yg58N%2BemhNWmQmdIr7yAKT6grHBM0oqWbm0K17kA7tO1ywTXtFg6kzsDDV8VPQzZVFP8YdKx1tT298Xu18LDVSR%2BAUXBOS5kKXWkyI5tE9EiFqNSetx5NbcHptC45cLkEIKC82LbgSOzgpAxpCBeUdNqBxKSC5Bu9Pyaoq4pJeKXXIaevTwbvue11TNsCcv1UA%2Bu5Kmlef%2FgP8I%2BculwOABwEPYpZ2jlbbLkegKK4Dg3j7iPzlVmtxjVFkPZ26Sl1odYQhtV8n%2BLunofYuzxLX3a4c5heZXrXam55czSu0SPK%2F2xaH6cCNqZ8NnFf2v0Tfk0ferSaYr6TZMLyiqsQGOqUB9taoV%2BtnFVOxV2rBCVcnTxeOWs%2FUqd6mfRXvOuhdG1vNl3X9gOPqXSEPiiAYv1HmWZHVNBgHds2IowSxPeX4%2F%2B5C9k%2BhST%2Fvv%2Fm5T81Oa2gq9beSl%2Bgwuh%2F347YsdcRC8hOsSFkK8cEMjdkgiRk2FdSsTphSnQoLIPsBLHaR9Ka4Pvr4eVJsLq0frz%2B12p0O9QnHI8b3qK%2BCh43a29Nj2PyJkQXC&X-Amz-Signature=7401692540bc44a2ed31d41232d0b84753b5b16798c4b1eb50c6a85689fe22e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
