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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=2f9a2c680c63e177d743a3a141824db2251fa39a4f92bde8247b27d79f1c405e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=f6159141e2ca01a34b054a3ade2f0c5bfb17c1ae466049cc2f45b75c73732805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=b04c75e920728a877cefa0c53b9d559be34d417a2f7bcf9a570e55d9e5caf373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=0d5093cc8407eb481965ab99eb2a69e77000df0ee021e3fa20feca0722104470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BN4T66%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcRSpoc62k%2FhYSo9EfDYQocYpBrCrQ3JE7dz6x%2FA9OgAiEAtmYRoc6Kue2PprIWwnWYEdvvrRyb%2ByxRoX08e1Xo9%2BAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFNkMD5YHlBoomDqICrcA9i8E%2BExId5l9CnZXX9zwyWjvCJRGsxV0rFd6s0CZqYGY1zS%2BS%2F3GqsGgA7Ox0gsJg44aGjEzqOzElDpDEMDzo8UjvL31tydA2JVfJM8pLJo7FRnMKWt9Hnmxs9nOKEDktVqEunBx6pF8X%2FEqg0XmLW1R%2FgiDgXPTbOZEylRZqh4zdkKlcR0xA0oTemHdIyEV2UqV51sRcROe9GAC0NJZJmmSYCJlS%2BIYl5rBC3Qn%2BcTvnCs2eDcCUoXTcCxnAxT8X9NhsZBaMPjE2SNynsjlH%2BovlpGu%2FO3WifQ7KlErW163vcoRYlg53Xvd4N1g1bOph20wjJd%2FWsJRCokCU7GFOm7%2FPNxdHe2ePNCz5ZLmdq%2B3DBSKxhuLAQf46yWOhQBDwvIBE%2BIDRhN%2Boqq192VNtqJHEZ93gw%2Fn2J7QMFFKyJGxPIfhWYb0jGpxGqDcFLgmDn9TrG4EES0wWFv%2BW8Yfxn%2FQYOChriJRWx98kasyZdFOZs%2B%2FzEh9TgDn0dXPrQOSBa%2F2DKLide%2BXSa%2FolOXeZqzYl%2FcNn1NuVKS3oXffBeWYHxSMPHuQcL3736kCDqyoQ%2FubABZYgD7aAFqWIzKdXdsRBz8tOIwmVCTu0GhJsB3thenhkXzm7BrA5rDMPDQ8MQGOqUBwEltdZBzr19owF%2BkvQt3CWuyQ3FfTiGvI1eP2F544O7SMCVzaFpLaCyPp8eMLr9ofbtXCX3lp8%2F67Op3daeo56c2r2s%2BCW%2F7T%2BPbW0UkNi9x6HOkG0MmxOuNmxYVzJU%2F3LevfYzlPAvVAboUUccFcHTttW7tTg6i7Ye258%2FV4Bikc3uxEHIGKPHjBFWfwHvTtyaD1Ltado31Fg10OX9YPTsHannV&X-Amz-Signature=315e5e05249bf8be61eb6b82bdb695f20bd6761cecd707c6f9e51b969408e088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=da35b60912f6b5fc0d3b65c45b7e5d8928f21262e1555006c5082284c2b0f3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=0aec40d08483277d6b7673d1cc2b4ece0ccc9cc6dd187aeb68371967d5f22b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=171f1a571ec1da34f34fdd1564d4e74a4db611f9cbd5d56f13e66db7f186ac30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=d65440b9dca9a47513ec3d93cc41babc826031db6e0dbbb38ec1e2bca8440c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=e2df112cec551acf4c75e23538ddaf5711b4fb0a82cd099b5707bc1ff12a8125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSXIC33%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKf8wYzpD7Tv6roD%2Fd6btmvFsmQULU6VRIfP577NahwIhAOpn7ha84XiozcIlDwOMVQqjBabvAHrMyzaRFvXWuZkJKv8DCCcQABoMNjM3NDIzMTgzODA1IgyF9nd42ffjhwMM3F8q3AMVumnihJF5IrIaHL3i%2B0o9h5UMKfGEJ8uMr%2Fkg9h2S4ZzfAzQtUaRvKOffJONjWq7Jc%2BVHGgLnSGJxJ7ntuXXcJlH8g22gHpZfbYNYEvI1m8mAMxZ%2BPYY0ZE48Xv9j34mZzDw8bXWivixkDq6pCb20e6VJp4dKo0FryzeDv4JMNhOqL%2B9gWISc0rtIVFQ1Etqo8t12Rp6kawCS7bpQdZYhAghtm7jR4RQHleLLPBkMlKG09KnvA0B6%2BUTRs%2FAqvTqnav6mCWBUEATgYt70zzIZw%2FSCBj%2BhRXkfPrW%2FrPS6DkzwbxXv3SH%2Bn9nfwqqFqkkm24g5oWRvjH6Fygs5L887lter%2FFRl4IYahnNZ%2BmICmTIN0mxFidzn58Jtp%2FkbE3q8HsvPNvpE7WQG2HRfFBW7kdyU27dmMvnjQWVev%2Bb0AfNk3OvqN7VcBYZZKn7znVubCu3bQDluCe1Qzv47f4C81kNiPVFbyjCRofdduYFdsBsXJHj1%2BtXMlNE%2FVoPp2AfyHQX6kTVZxp6O%2BaWyMPQY9HwWzZV3tsEyg8%2Fjh4QfgtvfMKYEEPfxdZKljcQxosVqKvLws5qyE1dlHIxlMPakYPhYxX80JQCokbAIBAnvt5ChN4AUokzrF%2FZArzDK0fDEBjqkAVeyCD4aC64GH%2B8UYG0xbtYNSH6Ac9wYXVuBZ%2FOVpAp4l5DZ8gopkcq8YeKGkPfkuc2BgZ%2FBcL3i9v4N0AG2bJvXDRjpM4O%2FlQVCNo2slWih%2FU%2BURFsqNqeGAqN0ygNcvH%2BIq8uV9G2tCzm95FCxSvFqTRY0f41Nw8nb2Qb6qV5wLXwJYWFmMzviMKrRHNyxmow6hdFdTZqRo8m4eOzNVny6BoEy&X-Amz-Signature=b87a78e6d86c5e672d84f6c163afab9ba1c43cd2b3d0aa6082dd06d987dd5332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
