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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=675f0d874f780201e0f6badc111757fa8f1bd5fde31c6fe3ab6aa81c369a76b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=9cf38b7620ff29c0b3b566f03b98fd02829c8b9ff7ca540a5e7cecc80c0a6828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=8e4095a62ab3eaf2a642060e7c13e910c8b4b916832f9dae92b318e8d0feb7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=8438382436ddc742defbd396c4a17a2ccd31e01d7cd7476ed13ec38f29ba295b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDY2IXY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDmWypV23T3yiA488oxgwdhHhUfDY4wdf36l69P2fVmUgIhANVLQ2aqfAQeo0XYlIC5maebM7ZaVwcorL5v22mZ6A9yKv8DCFMQABoMNjM3NDIzMTgzODA1IgwMN6GXUc%2BotQmc%2FTsq3AP5SWbG5id2m5ZL%2FWhW5mxaandgyQoAKD75mOrZ29o7gbzYO6oPwRRkjyyIWf9rI3PgoLF0cqQT7Dep31sZaxyjN64Y2%2Fctc%2BHWAkOyoE9qVmCBQZlsAo%2FYZVttxJ3J5C%2F8dWm4GnNNNDdiFWuHJSL0W5szJrZuqoQTJ%2Br1C3lD6UANhpJIdrVhYH5Y2GiSWSeTxsrQKgO0lzH96gCqzLARoYH0QzrA%2FZQ9mZ4CEPdRLZCESoFl5RLttyG31r2DN6AmaeCujcRmyaYBvN5rMr2moqdtHUA8IKFxQ1Y5WODxSwLk3bSP%2Fq7Vtzu64kXkwy0Ugc35gilMWxPcF0Ndb0VoK3eu4gMPJI9GF4l%2BVJyizW%2BoT690DJ85t27MsVDizFhBgKqYF66asSIj2A406sGwjsZkl3sOoRg3nKyn8lgYYSr49iSeyg2PiCiCo7tR%2FxSwiq7Bt8R4byD5x951Sh1tH6p7EZdlXqP8ADtooN%2FEJX0OcfQWPW9kVf427vxjOJoL5ZkJHoaykQcpEEyjcCrM9sEfHzn322f%2FE4OazvOemCB0l7lzL%2FoPvomc1Tv0LnfJC5MxIjtkY9Y0xjt7cNosCmlDRspJ%2BC0SgGIK3vFl3XP1BsO6l%2BGZqGMWdDCWo%2FrEBjqkAacxNPmMLNQJYSojiWit49cQtcwTqI%2F3bXxpnzDG3mhDXT90qsjuLio8unOIquJ6NMVZvZ5fIFRsnp9TL6b1mVEfTe6Satk%2B9r6aOybwuDtSpvTofyZZLnHmN8apdNEZdXjfWgW85mjBC7rsuz3Dw15Cr0jL9sCjS7VQTSIGRVl2JKxEkgSMGqRf7B%2FabD0ZKyIHuwzFKDY1JUE3ojfHUR9a9OQg&X-Amz-Signature=8549a0de17e22e0f522db1a0da03ddbec9b361c16cdcb252426d521b88e0753f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=d08de3eb321042a52a5e51874bf6347883dc0d62a74a2047472f4dd79fdcb417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=d5700e87975dc327e3ef6953cadcc3bea0fdd5ba0c83fd4baf13db74498d4a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=1fcf6a9a6dc3930e9f2d0344fde0888da1d678ff2fab212dd181fd07a3021bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=0cff8ad946500fb8f42f1980ce56a499e9aedb96a24d90320546bb6cb95fea46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=cae9ef940cb94b3d4c6a14ca169d111b896f36e26863b2491b125d82a9c4ade4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6CG44X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICN%2BTqpx0%2BX9fJNnAFm6rJutJSm1j7uWhro%2FCPnSWUH5AiEA%2BOH%2F0Mw3e%2FHWBrqiPtkdczdmPvac0hDx4XUfH9tbQdQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMUZ2nTR3HhAX03BaircAx0FewX7Jsc00YrGp5wOkt9DG%2BzJ%2B%2Bmg6szFHamgcMfOIz66AKZis2BXqVFeAr4zejv27576Rt24dk%2Fu3Q5hol6%2Fio69tvMmGWixGWrxbYR%2FKV6tBAOaY%2B1xl2JOIePuVBhaka4rD7HT1oSZqeQAgbN%2BmWg2WYZQZwgjZmsInCYRSMpETBNv%2FjKKtRd%2BVaGHX1z%2Fs8VVeV7m5n8W1HiLs6A%2FKe8ygIigUzkQY8jJyDL0DGOF14s%2FRckKbs9hj9elHBfohSh8%2BxMx%2FVQc%2Bbab30hDtA80EXEbc6bwFpYD0RquuW6VoBn7iygb%2BU99wBi%2Bx7obZJDJ0W0d4YU%2FVKovyd0DHeIK23Nw9tDnisro5lBN3pr3HgaYJy%2FnxT3jcSIYDk2leGkYEkpXPiJnlkqLXh1XkYJqE8cW7wKnTmh9fpMb6xhMHw0zyhTPoXKqf8ymgxjwJZvEK8JXt%2FLQYh4FlSQGCLDVoB5IKZtomwDVbAbLh5%2FU6K6ttwjKjLsiGhenZRG7dYN7yVwMeSg%2FhefIx2SYqXeIKw%2Bfxo%2BYDNgD%2BZdBwj30SVXzHLoeQ7%2B572vThx%2BHhaI9P8TOB%2BjTrloM4ixjjoA5nwQi13Ru5gsjVjpH68xirvB51cJA4Ge2MNyj%2BsQGOqUB4UhlHpLMzXjMEdig8AdTSLViiwLLhCmSsJT8j2VAmizrWcrysBFcwYFHH5srAH%2B25ARYeHLhXb127nijCeu0%2FDBF5cPfZ3eamMqwXSJVc9T%2FMixkVJ3%2FXcIBaryR9XeFeutqUJD0I0yS28p6fvaxnnk%2BASttAz5VY%2FcXKf%2Bg4kreeiI6cTn2CEW3tZkdpOanU8sRSZkHblRAE%2BxBjQY9IPQiujYx&X-Amz-Signature=cad933fb167e24fc95d19a36d4dced482fef207d94c7030964f26441fe0d51ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
