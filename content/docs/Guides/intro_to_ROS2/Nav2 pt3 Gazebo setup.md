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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=1340c5744df0504a36aea6c1873b989f8785cedb116bc3078e04ffd0127593ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=ddaa53b0881f33c506a36953d73b34a23bfce1c268d9548da714b2e8bfbbf36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=d3fae7f296007b64a3082f7e089119ea0f641c6873e05c24ab218ce524f49ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=384158b668ad380c3cc8c3f720a208ffab5a0d2085d4853dc34d8128d66dd424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZIFTMBR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPFHIwWkxyPQcgMg1hJ1ybBwfS0VXp7LGW8lJK2yQtPAiBgOeMBl6fVWoJ7F4tjFbN4wJQ%2FhiWsrbdxyoZcMgzhFSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMy1iC3iiqcGqBjekRKtwD4Zav0w96HwM47piAQepOSphweosqDKqp9l0QtdqLUko%2BFxqWsm681QqV7zHEfps7N%2BLq0AbbF0YcZYAClNPwD%2BncVsD4q7vmsQof3jVS3zEef7ZezTioRMGHZjaELdsEb8ldw0xHJPw5U%2FPCB99aEpkOpXLjDpqz62ajPP3pc2oXPl4ToCyQEEDHArRuqFh2scyRs8FzmvT7fBnyVJNtYCizX6aH5kluxU4vZ3blWa7dJZ39W6%2BhTCuag7K6yIbvO1B7gfeYzCCBl0cFYMY0Oxm%2F10sb84m%2FSATl%2FZEOU9dzTJXAelA5pu%2B%2Bmv1HzT1Jcm3lr30DWS3SByBF6VRPhKvXHYpHKTXqFQkXOY62UTkdoRtVempSVjTfexJWA3NgxPKlh8BnXWHyCiEJpR6wnEfOzorG1XDMuqfqQQWpLytQRfHgaOwPRCz%2FCFm9X8t4gmFnHmNbQMPlWU%2BUzCVfIsfUriFsGdyJ6cOzwlglW8ejdwTAbO7fR31iKNgNDx3kL3rTeP1tz%2B2TYD%2BE31Z7IScICSYcEly0j%2F9HS207U1A5Dr38SnlfcCJ2yOD%2BQRP4M9TT7H%2FIVWY%2FrvkjsOFEQMS0aYvfM2%2FzX4KBtzaJuXzgpNkgPieTcfOh160w8J27xAY6pgEGJ4uI3ZQ35f15yWd685JbMvhtL7enptP1OcvW2K%2FBkBUXrDqEksheJtuB7lL%2FzSb7iYlr5H2luynOwobOOd0KGHd7mslD52YjoW1mVDrfMS%2FotjToUM5W63tLKqmX%2BCUZjCvZX3DRPTIZzGzkKIzEe1SDLIcFt%2BTkTvroHRd8iLbVHgWtDVu9zxbfXA4Q8hiD3AYqrzN9vZ3Lekvi1Hs%2Bb2aZ67Gl&X-Amz-Signature=8225b902f9cec90545f6e2a180885972d5eb5dcd1197a716a641a059c2087d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=2eee0b3dd4f2499a19bba9e2241ddd29ccca24d7471e0551b3689b711fec0b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=ec3ea6d3c873a539f2e25f02655a0a84bb3169483ecd23cd8662c1d219d4b6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=11bfab15d3eeb4a851d0edf1fed75eaced284ea9b960aa805607bb565c14cc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=c6285dd881059d5bb014c758d9ab50c6f4344e7c0503b989fefea13cf9602b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=c21c8de6ad213d735531e8ad4b2a7b9adbeaddf343ac4940eaadae09b636b6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RJWF7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY0v76%2Fvq3RElN48tndL%2FtoP0NomFBhQ3HaRc9sz%2FW%2BwIgUolyogu4xFD9atXeBOLQklz6XvQRl7%2BsWjSZUCUOxocq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqEHdjjFBD6kyOQBSrcA3VHXkBxxM8nUYFL5db7fTco6NZMYKebT6OhpS6YnzyJBpeWLHsXvPBSHoiq6T3FXlNdHnLB%2B%2BUpml0T8M%2Baq8Y3XPgbyg9P2kg%2BegEKfJZCEw1L5PWp9QZ5nQ4Zy5pT5g0%2BuhkV9N9N3w6c5Wfyh1Qb%2BR7IDqNw7FDwvMycMyMZ8JYBHZxNJS3ohyDDSLujhtcGEZXQ0%2ByGyQvj%2Bso7oUx75SsP1MJeWcA0bQ4YAEN6Cqr0NuLzVegTx0vwBmZ4wEWI6%2FhxLfggSnZDWJVXNxT9%2F5CjB1Bj%2FNvlQDuXkAKcUvFs40JGW9ibaxIjHvNBYMD7NcjUpTZl%2Bn0mQ0vBgEnwSR8wzdvplLE%2BbGQNgJMJLawKDeGpM06sG0UihXSJqoqDv4%2F%2FMdgxpmcJiUo9oRcGiGWji%2BA2oLhBLyNvX3FO2WzSn0Xe0GZoJzM69I15z9SThEVse%2FWmJoc5OUl3Tmh9fbFYHkJrpMCljHq9MV0yZGsSnxZ9rGKDQaDJ4JwLM1uOVc3CjLM2URuVHV6DwWZZ6jLG%2BxU9TrYJqq6VoAWIu1HlinZKXxLFZAng4qjYUxSd46HWndzmj072Ez9eFGS%2BUq%2FU3QXtQXlVovHupVXBsBrEK1YaVFTIhC0DMIecu8QGOqUBxTZ7j9bH35c4f27aOtEHtdKt5rEWmUetr59GI%2Fc0Vc2FAOqCT%2ByWCby%2BQwvHcRUkQ5aZ9dUNxbRS2BBD8Es8tdiAlNxkIKwUBuBFxB40k5JiC7XRnf2nz%2FHHqQhFj3O9Cff%2BEPi9OhCGOPiWnpmWItuMyQv46ClH15Vi2g3J2SyCz2Fi6atJ86SIZoAqLPMtqWaddH7U0EDH5FKI1t5lFX%2FUQU0m&X-Amz-Signature=a91efa9ff92b0ac86c40187f917536e6ac2d153cbedc09c9c93ca86067aeb7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
