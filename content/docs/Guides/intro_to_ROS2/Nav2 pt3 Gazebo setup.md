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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=0cf3fe925182cdbd2f25b8b402d09f4bfb253df0cdbebd853960e2f2bac54d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=e419e9d63c069eb19863be2469a006cb6d24df6b52032f60425d50ab3769116d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=37b0b6597b58c89826ea8d3620013407bad64d592113f44dad1ffc89aaf23669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=d4fbe2a6d59b5e53d449fd10479627873f69d8b5e9232c4afce162acbd209a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHHVZLQ%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC46i28M7HpOGV1WpApDOHmzQJbWuvugXI2LLmlTXBaMgIgCVJLGDF7sfSiBDvXDtuhKQDIKLGIDBf0MhUGeOqtpkQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHyrU97HWlV54hh%2FtCrcA6WaDNUKwq%2BasdLFMw%2F33DNRuKfAqsphqph7fE4W7DOsVn6gO0921tBcgDSIDh87BXO9DfiPaZ%2B%2FSGdC4q5oHkJmxaR0aGt8soKdDc5NSJhUj0UFI1TT0X5HQD6Mb4ZahFd%2FQRcAeaZK2cNBDBJzR3rjMZYJE%2FW1Yw%2Fb%2BTe6k3glWPC4BrP2CmIxyAQ8E3kkpMlVOGKbYJqZmvMBcTak5gnSbcFERR8Y8jR6ppNDf%2BldjPLwlveu7D%2BcmfIcBumCRyc1zWNJ4OAwxasTVHIPkEkuZYYMBWJ8pPvzTvjMOXn8kKCjXykK4YPVqYZgzB78FEVwitqobUajMJSdB%2FvCYM7%2F9YyT9X0SkYrIkU9Unf24K2unOas9wm%2BGc3AOpBS5yaOsba4tcsKCJhWF%2BhU6mjwv6rV2MB7y07DgCfjFkOb02rE1w6Th8%2B8iBG6OwU3IgZnqElGKUZIRQhQA0Kotu%2FdPk0XGnkRW%2BYP8zRT5ExcOBEmmaptaiO%2F5FVFRWH4BqMmRDwek9sXDujFbgk5cVocfIpEEw7SfcJUzGBOnzeWKWQhPtRp6fRTWM2tZzrfKDB7Z1%2F%2FpvyZ%2F5oDNlrM4BtOfxWQot10CywufMK3hA%2FvAXwoPnCvlDjJ9YAVsMIzv1csGOqUBSfcn%2FIMSi6s%2BK6TDc6i4dEPKFfzNoovoGZQBKy%2FZQwylLqIWfEHH13VaNsr5qg54gmme6zZ%2Fje9rLZ5Gb2oJPq9bBLMlhemYs6Dl6SNsGTkdaMEGXB0OEOcfEnb4KZiXP%2FcjgGIGX1isx67wyup0kbqwYhE5Bj6M3miJfOEM%2F4Wi0kE5PCv%2FeXRxNhy%2Bog60Ts9yRApjw1qXA%2FsSP7hiExCO7FTN&X-Amz-Signature=3888f1d02554f1dc7a359bd479793bfac5bf9b8c51b1fc0c7d6ceaeaf748eed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=7de107ae257350fe8045bdb6e93c00a237d81f10a5e2bbce5331e848b6f69d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=c156fcdfcfcb9dcf196949060fbb084194eedcceb0a999e2b7275f9268224665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=f6b4b07c3a4d7b00de213cf5207394f4216970f3d6d1fcae678b318500890f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=c374cdf2e2376b973bef1944b9a348beb41eb561aa76f648425d2c58b776b543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=30be0c1af5f071f0113283add8358ec2513027a3836784c06395bfd7488ba02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOO6ENS%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPuFhH9oW21FgjYW5EUKi9TGmLdEdA5wFE6zaQgc0AAgIgHx86S6lCVEXD9Lq2g8RBpSWSv31nDktCgz%2BN744TfVEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK9%2F7S6%2FCiUwZeIvuyrcA567q4I7Jc51WAC11sNUY9YblviSZxKgJzKLaTJC4AkEopiHSw1wiB0yt%2Fh1xKk5HagH%2BUzhHtO5TokNW7MJg%2B2s9EUPzcQSfM67i3xOamKg3vL9f9e1f9niMZzkKPAQjmSZtuoZ%2FXO93k6KntcLR9slTiNNOt%2BV6aCgXqGXY8UmBprXDspa2Zu59BR2TJX%2FGJVfbUUUp%2FzCCV%2FX%2F0FPgMYwVebCmEqerUzM567Kf8LfpUkIryWZL%2FJ9E1EoldVOsolPkw7ZZSX25dcha6%2FQ%2FfYUhm4tmq3AWGnnC2UVlZwWzH3RYz1FMmmBauRvZ%2BeoInWjqxOe6OlGeLP2DxGsH3Kpu8EY%2Fc6U5oDR2NEOzqp2ReyEPivl6sF5Cp0%2F%2BqsgYxYedkXRPvU%2FLxjUtBsWrO2VIL0cye%2F2lhw34ANM1%2BaPADFgJUU0th10YqSbr5Dk%2BPMkAjFDoKJiqmO9U4%2FLX3YO%2F6Zlgj1cEwpdTC6%2FoWYuW7U43XqIq8RLXbLuuojYSvs5IAQfR9DJYrRY3NAhudq%2FwH3hm5qgIhdjINZh5z0ieVrhkkXVo%2FkFkk6e99VRzsduRCC60aBSCDbRk79Z%2BVRGvS7vOqnOmqMkg445SwjZYgMBYK08EDt5zLoaMKfv1csGOqUBBBnoTZ5T3dPwzfqkJhtYsCvmA2e2d2JVHxlMtD7CrQY5BbrsCARSancVU5AnJngTWo1Is8Xqn0m1rA22nwnS4F27c%2FvAMLXytv1tTG3RYXCOr7gEhuvfeINO9HyLyrI649Xr4cNLMt%2BiPppPdABcG0%2FRStan032xlI9moed3sNX21C4k5gxVJqqjwrqKKwGlXleroG0yESRSe8AyYxwwEBziTxl5&X-Amz-Signature=0747d6ee0987e0e46956b8c3394e5eec927a14ee23048e32d47a52ebf79ac8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


