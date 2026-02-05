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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=ce6ed2af3652ecce4f4aa06d6b674bc29a0b9134aa0456c7153a08ed6202b888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}


#### Outputs:

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

#### Params:

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=39d7f417c653e0fc723b7d5ba6092eb93bedf7c7b5b031c837faaa2d818fd969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=8fc30d7de17a968c97b7b706fe560e78fd21b6f7eb563aeb5bcb3cbee5313311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=8d09ac6eb6841038b01a2e02877143be10edcb6da74f9d9b87a0703036d23e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "17-21"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C2WJEP4%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEgei8aALOdGy6iEi7GBlsMhU%2BcM0%2FxkMk0S9En%2BHMWHAiEAmffhSvAVguaJSZ4I4sp%2BP%2FgaHuPqXKBGUylDOk6yOQwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJYlcdAJkkFMoDRowCrcAxSS4RZ5nyw6D%2BzkOsVcemvFsgyrXoe4PK551I6KLl4cDN7z%2FA93AkvC8Xee3TYcDkFupvqaMPQEh3ZvlExlIfKUMzQqY3Se3qC%2F12fjF2ZYmruqJRkDWjuYG8FGlyQS2QkrEaTSP6%2Fxs67acfnCNy9OHKB4StRQfIeYKAAD3ScjiZ6aqth65jKMIj5WV81HUy6cLiTWcL1YWHAQoWE7B%2BlHWvB60bo8nxB6zSQKHNmKOYnaBCzd8y6zSeRlrw1JOz4BTGnswE3BLEihuSVK1kUDjWYKZjU6tp3rLDrW0vbS1sfRIrTo5Ce%2Bml%2F4eOygUZUqDSFCL0kAB5nSNByNF3J5HFgTxZvRCtdb0gk7Vl1RbeGZfZo0bJPPTe1dxB7ZlovllhtcYXkOtip%2BEe2n1kA6CHzS3ShY9f74fUXmNwEdM3kXfQhc%2FtF7LJxZAtV3TzorYgAWwwcjb9qHQYm3yfK7un3xRvjMDU33GOeRIBH3IbnNu8tfsJ5pKBIlf3lPCpqRDXHG4PO44KjrA1G8L1BU1hdQ5cgtAjijWlzcc2DixnzqzM1uPQ%2ByDCw6WpO6XFvy0kBaIvgqtweqsCNNFAwepRP8zBEK4cdWdU7rUX7UYiLEXWPfJYASRbteMPLOj8wGOqUB2OuMfxzCef4Ej8KCcx8zyCLr3C7xVznjljId2VMqwpKaFc1GpI%2F7BTilsSVIC4nV41FsWSTeE1ml0HWYwx0KEHVdWiIrjrD84c705A%2FyRVU4ShWf8%2Fq%2FOEppBABXkUxSRlc8XsTpVdfae2lAy5%2B9DteBn6aeWydWS1fBT3lU3ViSIpj0lKmcGQUs7vESZxl0tWaTBvOw26fhT1MWWFDlVOtij0ze&X-Amz-Signature=139fa426ef98a656636f6b2c7f3aceba5816c2d5f5f9d48d1a592eb6156c756c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=f8bc3987a09296e923ca1cec4b5d9bc4e9c23c924bb7c6ccb0dabd2953704f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=e5d459eb9c36f75dd4688986595852827148f526e0a0e229bb29c596ba0c5b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=4a9390a246eeda5d04d1856b1145e419f0777d7b1698bc16f5d5b1bb051622c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=8173c959c277bed023ef79f3b32dbb3a27186b78e3596cfefc4ddc47af24fd6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python "5-5","6-6"
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

```python "5-5"
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

```python "3-3","5-5","10-13"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=c54bdcc3788f2dc4d06de3ad3685b8bcf1f08cb0828a5388711f4d6dec1b6c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARYDSMO%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCijweqEy7OBk%2Fo6f%2FxX5T5FnD6yOEp9ip80lOd0qMFOAIhAO%2FA8KIKbwxHdoJZVW3ZE38BoTtDX5q989BHMbcuiI66Kv8DCCIQABoMNjM3NDIzMTgzODA1IgztKFqy3RU9w%2BYxNecq3AOwycrHqUKv4rgmHHJa%2F%2FrsvOT%2BjX0WeNRk%2B3bhkcsfEIEppUMjLK7%2FYNY7bIxSey5eXr8ILqdBbJMPk1nOz1FmHQXXQV7WMdKGRkX3TLgU%2Fet%2FJch7I4RXQnnsgiAPIZHYyEVNnmMmoF71GOp4BwwmQhqx1%2B3RasXOJkZwHhv%2FoKRKQSvBhU3DTKq2QOmizrdpDcnloimG9EJ8tOrNy9iZIiBRJLlfSwHn%2FwpYc58wKrKnsfznBQfe5XY%2BpWopZa5ARysO%2FxE2XlLE0XlbReXXBbgsI8EiJbhxMipc4z%2FrJgTC%2Fd5BWW5BV7ZagQ8WJXIu22gsSpcx4CNnj2QdYizbs5hgRC%2FXQOnUFtR23Hl4cblkF6IEenTfaRNAIO906voH46dtE0zFwGsYOzLzKwAUhU2srIKhmqQ1hF7YoVrRANI%2Fymid%2BG3G3%2B73SnlA5Yt6Mm0ZmbT3BN8s95Tk65qm%2FV4C%2FO6FXxvLtINAeKzMpeSRsCBM4%2Fya%2BQHU5jmUaQMiJ4xGs0%2Fm0z01o00eTY6sRPUVItnXMNXJ8CA7NVmZcUqyLPwPybLFxqvsGERVIx6fJvJZ4rsgqB3X4SGhfoWXrt2bGvmlQQzMA9ExhhJ1MQulIDo5Hrw1AdUZrjCoz4%2FMBjqkAefu2RriQ5AwvP%2BMMeQXTVqHKWllaaBEnxSoSHRhzRYHtagWo2xqbMGSDprHomhbkgF2Mv0nFBFMzXHRlZ8evl0lKkq%2BjPB17e1n%2Bb3lv9dYJAcWuQHn3s4ldQD9tBQrCg4BBOs%2BOmjW7jkSJLVQ%2FRo9f8f64%2BUtl91hq5kTNWVCxjrvtYSYd4x7A%2BzkMExcP39Ng%2BGoVfGKnUHzpcgMzchYAwZ%2F&X-Amz-Signature=673f2e89c33e5a251bc1ff3b2f924646bcd4d603fbc7515db7dbd22ab4ae011c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


