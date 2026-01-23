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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=9ba81651b05ae43ee32300fc38646a5aa7ea42762d63cd8f58e7d6341eab7c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=7df763b979c9b6816aa194b66c7ff7e5db143d7772cbeee5ca59f20e99c0f2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=ab38a782945380ea2bfb7a03dcc28779b91a91c95145ce368e79abf88e8a9abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=08055a0772cc4785431393bce35c0632885e0da06e0e7d24c33beac8991f9b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646SJ6QL5%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIHLSCYsM4Il2P3jtpxSuMc18uZ1q67IYtDsJoqq4gYqjAiEA9cRVhYcCLocot4GZ%2FGuYt668pPlniR70jdC8tYrCx70qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsxAQI89WzRSrw8%2FSrcAx8c2yTzh6iITtcCw%2BsPp%2BjqP597xjzdL7wmqNJVLeGEo0TkxgGGzURHsDlRKiy65RU3yZrBlKXG%2FrlKCxXTnyB%2BLQmPcwr4cawHG2Le%2FQKP9gQ3s57dYeh5yiIa1PgJjqyGVlJOZ60Qn2RopPKBg5Avbj%2BKrs54w9VPm6DdaJIzTolCch8qQwpuVoZzjAY2Rqp4BGyIg4uJsok7phd0rivpY1lMy%2BC0hFjjRAFeqUw2V%2Fyd8rSAkU%2BhBqsbjYH6H6u%2FJD6K%2BQZAXOOgh%2BF5Qd6wqGIoclc2x9lLxp0NdKicvPUDJ14IIDi3hpwMuyKgONhJDufc5yK0RZ7LNt32V71TXp9SbqTc7uJz6k5h%2FW6PnxPDxMYxDam8H%2FnIMP0xsktRSGm7w0Kai1IoRxUGdjCSdKq%2BXM1IEFMSWfkXN0NwpVkGB%2FvAa9j0QvPjDa3B%2FSOwruzBm4xrziJ0NnAosDWnT%2FQi7xOAxUPfJfBSzNDoLX7AoiEXVtIHH1FQSgzBRRD0cKxBkwWHZj1F5QOLHRrY%2FnwV6UVTbQksyZbjtujS%2FwDFdfvRvlM7tuMsCSaMpohu2pEfl6PeG6OtRuQiOZ05qZnYM9N33CLVu4AGq4Nf3sxKx0JkVByQxYfWMPyKy8sGOqUBIpU11U2wkqRQUPoHy1iB4wluwyRs2kOIIFRpoA2fONDr%2FVULnP7Y%2FrWzSWGG7408opjbPY7ACeJ%2FaKLAiw6sXmeZ1mMAKGPOL91IpX2iAaBlHwOphGsnY5DynbzgVFHlJiJpFOT9AuJ5J03UcPf3leLM9V%2FxQlic7vLFCJH7T%2BxHqaX6V9IR4dnlkJcpKWk0aUr74lqLkmgHtc%2Br0kZvol3h2O8%2F&X-Amz-Signature=6d73b5377a0fdac768aa384fb03245a3c86a5559e183ed8ebe4bf24ff61588a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=9e0f7f4803509ac3f8ddf406d24dfedd69219b975516811ec41cbb965baa1bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=f733c2999b323bbcc206a5a2f23a65a4f39ba4b75a74651d5dee5f67c0d4a76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=0ea812b579bddbaabe23e6e0fd19faf1dc2b9360e4569b0d4bccaaf81876cb8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=7208029644ac8243443aeb09271050576134d3067fb17df211fe570366946cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=349e45576ac2c113de73986724505c4bee8d228129c905bc7b2d6c6087e222bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON7EKTH%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC7I4P6%2BY%2BqmtFqAH%2BXSggkN94ktc6LlydD5A0Pj6L8qwIhAJuD%2F%2FExwhbZo5%2ByBiUl55RFhYYxnW0CJAxZCA3xKc9MKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2FpuGKurToPJH33oq3APGYSU53oBNNVqNZZCuj1vF3Ca%2FeLWEwUP%2Fwg0ENw2IqUgk1fGdt2ISh6Dp%2BSkq5HbGtuezvAIfvLsuOK0r6TbrKupaikpQH7bDOhtGNJ4hy4zAKE%2Fuc1wKYKmk10xYnFUR9OuGbt7wsD8fZxziObDrRTkMiMvpKm%2FX6kNsbFHbQ8HkOpmZGLQOry%2FSpKmiX5JMWn81V%2B2UrbQWP9DvxwhwBTscVK7XT%2FUYswo%2BkTDBy3KlnAZWwOvy9CYTwzsJFLoghWsozRlZMSxcGITfslT0RfkzZjSmN16lCloBg6NAMNZwQMySmPwXNySOoOOA1EtJx2BwTExMrqWSQtXyFtqpYv%2FqA24KSAN8pJixdjUr%2F2dh2xMNLHgaXuZ7DEB8pHUp2an7IE1RdherGmIWUvMp2j6EmQMxOfGYhYCC09TWMFU13VSqDOsUeji6fSYJ9yonAAibAkKJUUxVd4MifR8qgvrDDJZA1iJvURT0RQgm15ydg11BuFTtAObRDnF6IxcSJjBu%2BZjljDTHsHGvFRQQdL9eH%2Bb5WWANoRerAEtosOi6w2a8tPbXcYmnt1c2IHIUZ8U4S6MYg0sp8q2deD9oHMhEZ4zLDkOyevW2IsnZaFXXg5WOjbaon3kgIjDhisvLBjqkAVbUPHpFmXisVrfP%2Fq5c8NWVznUv%2Bn8GJ8YXJZCKfRCosFbBFtXKVtQ7QDRbFtz%2Fe7WYISjhCMKc6pQloSRCYjpoHkUSb5D6e%2F%2BQgtxN45OdsJ31w9Yc6Vxo9yE7g44kjv%2FuEjmtFyCW8ajncSBBxvETOxh8gU4BKGU5C08BELo0fVKVT0VXAy8TEbp9J%2BN58Zc2jtAuBxRXvAgXAMxx3d%2FGveOR&X-Amz-Signature=eb334eccf6ed3edc00d130c6194eae21db78d8a55388482b07e1108d6f7f3266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


