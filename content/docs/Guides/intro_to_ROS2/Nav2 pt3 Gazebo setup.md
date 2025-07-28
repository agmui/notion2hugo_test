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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2D2OD3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDWnD7ePKYOtsCwYZXYsy9YzeHXKYfz%2FakKVY67tshDSgIhAJfXVq2c0XLgr3s5DClPTOpZed9PSy09SEsJAFy%2BU1oiKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvF5MNynGOo3VfCUq3AMmMjmQAQY%2BfGZpSiubOPauPqj733yT6wESA%2BFRr0blr0pF5%2B0PZD3MVefsz%2F0CODLQ4AOqCxB2ENiwkLye3c9W%2B%2B2vbVIFMB%2BZeaPqajs2ezI2Aqz2LyoHgLOcXL1%2BVwoX5IG1uaF7V8QbpMzjX8DDgHucV3GYMHSW2O%2FaJq0j64xa5736zruGuPyEJCeN7XZR3PqeLH6J1Ysy40GYzQP5%2FmwEmi13ZKO3OBwa%2BhXhFmO7ArejJD4%2F%2FrWbXXMfVMX%2Fx3JRK02wwoK3x8UUk92vrDYIeExE95EhtU1cPPJQNLRzU%2By8n%2Few3cjk8%2BvNfp4Enn26NhKsqXObmqBIdJBEgSX3aRE3PCBhObhMK8bAJEybv4sAwLnwpA1heJym8CxBb%2FUNsoXGO0TPtYPZZGbVDvlyY7h4cf%2BwPDaDyXQYfwC4EyEwnFe2QLPAyY1yJVAWEEZsTiz65L3SZ33P9K2iCYhL7xDhfGyx%2F3KuQp6dMkSFSfgLaXCzD7mZHjm%2B%2BYde88wuQxkV9M7SA51%2BSdhW89U0lKRoPQWS9Ts5eCRDF7k%2FyTpZH4QpMz2iwI4CcZVS3OXgtm23mIi89IDwviyVCy1XnNEPHURdff8%2F25gZQXDenetf10GWdfN3NTDIjpzEBjqkAVl92AubhQvmOFv8nQAydL0CvDNSR8DtLNi1QgaKdsfuyFt6qa8RcFedlbQtyo8t%2BMSE7tRiF1m0WC5KjUUd35I0m6I2KtoKoA27gSx8kGfKLDESr168WtEJAIzS2MRUyVSjc1lXL6S75iqWErEaHM6B%2BXm%2BDakdOnT2gMRjZ6NE1NLT9oh3NriYzr9y0rfAbzmadpJV%2BqxXl%2F0UKy4oBsbGy0CZ&X-Amz-Signature=699d826493698ec92b64489814ebaec67236f1ac857bc2807905effec7cd585e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2D2OD3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDWnD7ePKYOtsCwYZXYsy9YzeHXKYfz%2FakKVY67tshDSgIhAJfXVq2c0XLgr3s5DClPTOpZed9PSy09SEsJAFy%2BU1oiKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvF5MNynGOo3VfCUq3AMmMjmQAQY%2BfGZpSiubOPauPqj733yT6wESA%2BFRr0blr0pF5%2B0PZD3MVefsz%2F0CODLQ4AOqCxB2ENiwkLye3c9W%2B%2B2vbVIFMB%2BZeaPqajs2ezI2Aqz2LyoHgLOcXL1%2BVwoX5IG1uaF7V8QbpMzjX8DDgHucV3GYMHSW2O%2FaJq0j64xa5736zruGuPyEJCeN7XZR3PqeLH6J1Ysy40GYzQP5%2FmwEmi13ZKO3OBwa%2BhXhFmO7ArejJD4%2F%2FrWbXXMfVMX%2Fx3JRK02wwoK3x8UUk92vrDYIeExE95EhtU1cPPJQNLRzU%2By8n%2Few3cjk8%2BvNfp4Enn26NhKsqXObmqBIdJBEgSX3aRE3PCBhObhMK8bAJEybv4sAwLnwpA1heJym8CxBb%2FUNsoXGO0TPtYPZZGbVDvlyY7h4cf%2BwPDaDyXQYfwC4EyEwnFe2QLPAyY1yJVAWEEZsTiz65L3SZ33P9K2iCYhL7xDhfGyx%2F3KuQp6dMkSFSfgLaXCzD7mZHjm%2B%2BYde88wuQxkV9M7SA51%2BSdhW89U0lKRoPQWS9Ts5eCRDF7k%2FyTpZH4QpMz2iwI4CcZVS3OXgtm23mIi89IDwviyVCy1XnNEPHURdff8%2F25gZQXDenetf10GWdfN3NTDIjpzEBjqkAVl92AubhQvmOFv8nQAydL0CvDNSR8DtLNi1QgaKdsfuyFt6qa8RcFedlbQtyo8t%2BMSE7tRiF1m0WC5KjUUd35I0m6I2KtoKoA27gSx8kGfKLDESr168WtEJAIzS2MRUyVSjc1lXL6S75iqWErEaHM6B%2BXm%2BDakdOnT2gMRjZ6NE1NLT9oh3NriYzr9y0rfAbzmadpJV%2BqxXl%2F0UKy4oBsbGy0CZ&X-Amz-Signature=57470050160f6f632e940c853ce4b9b00c5133f9e940397f94fb795b319ebed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2D2OD3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDWnD7ePKYOtsCwYZXYsy9YzeHXKYfz%2FakKVY67tshDSgIhAJfXVq2c0XLgr3s5DClPTOpZed9PSy09SEsJAFy%2BU1oiKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvF5MNynGOo3VfCUq3AMmMjmQAQY%2BfGZpSiubOPauPqj733yT6wESA%2BFRr0blr0pF5%2B0PZD3MVefsz%2F0CODLQ4AOqCxB2ENiwkLye3c9W%2B%2B2vbVIFMB%2BZeaPqajs2ezI2Aqz2LyoHgLOcXL1%2BVwoX5IG1uaF7V8QbpMzjX8DDgHucV3GYMHSW2O%2FaJq0j64xa5736zruGuPyEJCeN7XZR3PqeLH6J1Ysy40GYzQP5%2FmwEmi13ZKO3OBwa%2BhXhFmO7ArejJD4%2F%2FrWbXXMfVMX%2Fx3JRK02wwoK3x8UUk92vrDYIeExE95EhtU1cPPJQNLRzU%2By8n%2Few3cjk8%2BvNfp4Enn26NhKsqXObmqBIdJBEgSX3aRE3PCBhObhMK8bAJEybv4sAwLnwpA1heJym8CxBb%2FUNsoXGO0TPtYPZZGbVDvlyY7h4cf%2BwPDaDyXQYfwC4EyEwnFe2QLPAyY1yJVAWEEZsTiz65L3SZ33P9K2iCYhL7xDhfGyx%2F3KuQp6dMkSFSfgLaXCzD7mZHjm%2B%2BYde88wuQxkV9M7SA51%2BSdhW89U0lKRoPQWS9Ts5eCRDF7k%2FyTpZH4QpMz2iwI4CcZVS3OXgtm23mIi89IDwviyVCy1XnNEPHURdff8%2F25gZQXDenetf10GWdfN3NTDIjpzEBjqkAVl92AubhQvmOFv8nQAydL0CvDNSR8DtLNi1QgaKdsfuyFt6qa8RcFedlbQtyo8t%2BMSE7tRiF1m0WC5KjUUd35I0m6I2KtoKoA27gSx8kGfKLDESr168WtEJAIzS2MRUyVSjc1lXL6S75iqWErEaHM6B%2BXm%2BDakdOnT2gMRjZ6NE1NLT9oh3NriYzr9y0rfAbzmadpJV%2BqxXl%2F0UKy4oBsbGy0CZ&X-Amz-Signature=0a2cf14419e318d540bc5e13a2bbd312adf6cb8a0e320bfe5ad74d73f6cd23e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

Thus all Gazebo topics must go though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2D2OD3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDWnD7ePKYOtsCwYZXYsy9YzeHXKYfz%2FakKVY67tshDSgIhAJfXVq2c0XLgr3s5DClPTOpZed9PSy09SEsJAFy%2BU1oiKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvF5MNynGOo3VfCUq3AMmMjmQAQY%2BfGZpSiubOPauPqj733yT6wESA%2BFRr0blr0pF5%2B0PZD3MVefsz%2F0CODLQ4AOqCxB2ENiwkLye3c9W%2B%2B2vbVIFMB%2BZeaPqajs2ezI2Aqz2LyoHgLOcXL1%2BVwoX5IG1uaF7V8QbpMzjX8DDgHucV3GYMHSW2O%2FaJq0j64xa5736zruGuPyEJCeN7XZR3PqeLH6J1Ysy40GYzQP5%2FmwEmi13ZKO3OBwa%2BhXhFmO7ArejJD4%2F%2FrWbXXMfVMX%2Fx3JRK02wwoK3x8UUk92vrDYIeExE95EhtU1cPPJQNLRzU%2By8n%2Few3cjk8%2BvNfp4Enn26NhKsqXObmqBIdJBEgSX3aRE3PCBhObhMK8bAJEybv4sAwLnwpA1heJym8CxBb%2FUNsoXGO0TPtYPZZGbVDvlyY7h4cf%2BwPDaDyXQYfwC4EyEwnFe2QLPAyY1yJVAWEEZsTiz65L3SZ33P9K2iCYhL7xDhfGyx%2F3KuQp6dMkSFSfgLaXCzD7mZHjm%2B%2BYde88wuQxkV9M7SA51%2BSdhW89U0lKRoPQWS9Ts5eCRDF7k%2FyTpZH4QpMz2iwI4CcZVS3OXgtm23mIi89IDwviyVCy1XnNEPHURdff8%2F25gZQXDenetf10GWdfN3NTDIjpzEBjqkAVl92AubhQvmOFv8nQAydL0CvDNSR8DtLNi1QgaKdsfuyFt6qa8RcFedlbQtyo8t%2BMSE7tRiF1m0WC5KjUUd35I0m6I2KtoKoA27gSx8kGfKLDESr168WtEJAIzS2MRUyVSjc1lXL6S75iqWErEaHM6B%2BXm%2BDakdOnT2gMRjZ6NE1NLT9oh3NriYzr9y0rfAbzmadpJV%2BqxXl%2F0UKy4oBsbGy0CZ&X-Amz-Signature=f73f91e82b5dd86204ec9e188645c0b72cf0b411b798c19c0bc4b43f7a2ab101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2D2OD3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDWnD7ePKYOtsCwYZXYsy9YzeHXKYfz%2FakKVY67tshDSgIhAJfXVq2c0XLgr3s5DClPTOpZed9PSy09SEsJAFy%2BU1oiKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvF5MNynGOo3VfCUq3AMmMjmQAQY%2BfGZpSiubOPauPqj733yT6wESA%2BFRr0blr0pF5%2B0PZD3MVefsz%2F0CODLQ4AOqCxB2ENiwkLye3c9W%2B%2B2vbVIFMB%2BZeaPqajs2ezI2Aqz2LyoHgLOcXL1%2BVwoX5IG1uaF7V8QbpMzjX8DDgHucV3GYMHSW2O%2FaJq0j64xa5736zruGuPyEJCeN7XZR3PqeLH6J1Ysy40GYzQP5%2FmwEmi13ZKO3OBwa%2BhXhFmO7ArejJD4%2F%2FrWbXXMfVMX%2Fx3JRK02wwoK3x8UUk92vrDYIeExE95EhtU1cPPJQNLRzU%2By8n%2Few3cjk8%2BvNfp4Enn26NhKsqXObmqBIdJBEgSX3aRE3PCBhObhMK8bAJEybv4sAwLnwpA1heJym8CxBb%2FUNsoXGO0TPtYPZZGbVDvlyY7h4cf%2BwPDaDyXQYfwC4EyEwnFe2QLPAyY1yJVAWEEZsTiz65L3SZ33P9K2iCYhL7xDhfGyx%2F3KuQp6dMkSFSfgLaXCzD7mZHjm%2B%2BYde88wuQxkV9M7SA51%2BSdhW89U0lKRoPQWS9Ts5eCRDF7k%2FyTpZH4QpMz2iwI4CcZVS3OXgtm23mIi89IDwviyVCy1XnNEPHURdff8%2F25gZQXDenetf10GWdfN3NTDIjpzEBjqkAVl92AubhQvmOFv8nQAydL0CvDNSR8DtLNi1QgaKdsfuyFt6qa8RcFedlbQtyo8t%2BMSE7tRiF1m0WC5KjUUd35I0m6I2KtoKoA27gSx8kGfKLDESr168WtEJAIzS2MRUyVSjc1lXL6S75iqWErEaHM6B%2BXm%2BDakdOnT2gMRjZ6NE1NLT9oh3NriYzr9y0rfAbzmadpJV%2BqxXl%2F0UKy4oBsbGy0CZ&X-Amz-Signature=9099ca1ccf522ee31fae12fad004ff3e2ae90d0b0d7a014d9a3cfa5b62f56184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2D2OD3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDWnD7ePKYOtsCwYZXYsy9YzeHXKYfz%2FakKVY67tshDSgIhAJfXVq2c0XLgr3s5DClPTOpZed9PSy09SEsJAFy%2BU1oiKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvF5MNynGOo3VfCUq3AMmMjmQAQY%2BfGZpSiubOPauPqj733yT6wESA%2BFRr0blr0pF5%2B0PZD3MVefsz%2F0CODLQ4AOqCxB2ENiwkLye3c9W%2B%2B2vbVIFMB%2BZeaPqajs2ezI2Aqz2LyoHgLOcXL1%2BVwoX5IG1uaF7V8QbpMzjX8DDgHucV3GYMHSW2O%2FaJq0j64xa5736zruGuPyEJCeN7XZR3PqeLH6J1Ysy40GYzQP5%2FmwEmi13ZKO3OBwa%2BhXhFmO7ArejJD4%2F%2FrWbXXMfVMX%2Fx3JRK02wwoK3x8UUk92vrDYIeExE95EhtU1cPPJQNLRzU%2By8n%2Few3cjk8%2BvNfp4Enn26NhKsqXObmqBIdJBEgSX3aRE3PCBhObhMK8bAJEybv4sAwLnwpA1heJym8CxBb%2FUNsoXGO0TPtYPZZGbVDvlyY7h4cf%2BwPDaDyXQYfwC4EyEwnFe2QLPAyY1yJVAWEEZsTiz65L3SZ33P9K2iCYhL7xDhfGyx%2F3KuQp6dMkSFSfgLaXCzD7mZHjm%2B%2BYde88wuQxkV9M7SA51%2BSdhW89U0lKRoPQWS9Ts5eCRDF7k%2FyTpZH4QpMz2iwI4CcZVS3OXgtm23mIi89IDwviyVCy1XnNEPHURdff8%2F25gZQXDenetf10GWdfN3NTDIjpzEBjqkAVl92AubhQvmOFv8nQAydL0CvDNSR8DtLNi1QgaKdsfuyFt6qa8RcFedlbQtyo8t%2BMSE7tRiF1m0WC5KjUUd35I0m6I2KtoKoA27gSx8kGfKLDESr168WtEJAIzS2MRUyVSjc1lXL6S75iqWErEaHM6B%2BXm%2BDakdOnT2gMRjZ6NE1NLT9oh3NriYzr9y0rfAbzmadpJV%2BqxXl%2F0UKy4oBsbGy0CZ&X-Amz-Signature=16b0da1cf15d74cd6c5b41038d04f87bebb082faefae7aa6402d0015c9b270bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2D2OD3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDWnD7ePKYOtsCwYZXYsy9YzeHXKYfz%2FakKVY67tshDSgIhAJfXVq2c0XLgr3s5DClPTOpZed9PSy09SEsJAFy%2BU1oiKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKvF5MNynGOo3VfCUq3AMmMjmQAQY%2BfGZpSiubOPauPqj733yT6wESA%2BFRr0blr0pF5%2B0PZD3MVefsz%2F0CODLQ4AOqCxB2ENiwkLye3c9W%2B%2B2vbVIFMB%2BZeaPqajs2ezI2Aqz2LyoHgLOcXL1%2BVwoX5IG1uaF7V8QbpMzjX8DDgHucV3GYMHSW2O%2FaJq0j64xa5736zruGuPyEJCeN7XZR3PqeLH6J1Ysy40GYzQP5%2FmwEmi13ZKO3OBwa%2BhXhFmO7ArejJD4%2F%2FrWbXXMfVMX%2Fx3JRK02wwoK3x8UUk92vrDYIeExE95EhtU1cPPJQNLRzU%2By8n%2Few3cjk8%2BvNfp4Enn26NhKsqXObmqBIdJBEgSX3aRE3PCBhObhMK8bAJEybv4sAwLnwpA1heJym8CxBb%2FUNsoXGO0TPtYPZZGbVDvlyY7h4cf%2BwPDaDyXQYfwC4EyEwnFe2QLPAyY1yJVAWEEZsTiz65L3SZ33P9K2iCYhL7xDhfGyx%2F3KuQp6dMkSFSfgLaXCzD7mZHjm%2B%2BYde88wuQxkV9M7SA51%2BSdhW89U0lKRoPQWS9Ts5eCRDF7k%2FyTpZH4QpMz2iwI4CcZVS3OXgtm23mIi89IDwviyVCy1XnNEPHURdff8%2F25gZQXDenetf10GWdfN3NTDIjpzEBjqkAVl92AubhQvmOFv8nQAydL0CvDNSR8DtLNi1QgaKdsfuyFt6qa8RcFedlbQtyo8t%2BMSE7tRiF1m0WC5KjUUd35I0m6I2KtoKoA27gSx8kGfKLDESr168WtEJAIzS2MRUyVSjc1lXL6S75iqWErEaHM6B%2BXm%2BDakdOnT2gMRjZ6NE1NLT9oh3NriYzr9y0rfAbzmadpJV%2BqxXl%2F0UKy4oBsbGy0CZ&X-Amz-Signature=4af03a4ef8edfc6e8a564cdb99c3d48e395691c6502dbbe22e9538b7c2124fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
