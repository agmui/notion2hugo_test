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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=d8e3d1cc0185c4c3ad18a6efba81f33424a9718f8add3ca41daa78d2a4500a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=0e8542e0a5d1b5503929af48d7e631c4f747f8af9e3209154c4156894a55816e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=981abe59b404e39b5d2796407dacc88f4c485106f1786a77625cf0d41273b028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=2c4a4380af7ba2d3c7eb66768178def5604f4a95522f86690fd6d36f5073f53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZ3FZLV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDLLTPnjjKPm3W7WaYxAocZS0HaYDqItDetBUlciO3YBwIgXTfW0QHqqAJxytNUr%2BLQ%2BCi%2BkhcA7EpP%2BEG6UBJqolcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEDXJBZR%2FH1Sj%2Bs76ircA25IKMS28BFAVrrG3rHWPC7l%2FSKwH%2FULh6pnYBxBsX2TZXJ6977hwvcs4xHkx0fG3JE3f2qLGWBzbKfbT6a2Exg9dNsdkfo32g0aJ4mciuyp9ao%2Fg2UidnsBvat0Zz331cErGCV4ELuc%2FC0aqkVJF%2FvHqNRipjdqtOCNRuNhaF6cg7xLRJFZntbTJDkHIFgoES8nOEiJ4IphGHCNgSDsum0JuuQOG3yvOzGDg8tXuwGlv1FUKAq%2FFNSEBgbEhdGDVNAIZrCxliSkCcSnxppIlwlBeQc8znUAAN8krp1yiscPZeSCvMQGrUmh4rlj7jaWKP8CboROjwqDNVRXXQGR5wkF1Me3WsmOlgKR%2F0weTcDFfIFfRvvcDyqThH9Ur9R%2F8KSqx18y1Pm7JbPkZ%2F7ABSXxhgTym5Y97rcEj0bCq2OFNNpr8HQD0YPW%2BPLdyLfAmxU8zKtYYK4xYLGL7k%2BDuQFqKeO6Ws5k91a3wWcs33%2ByVK%2B7D7mcRW5KoAMEt0U1A7bNnmu2piVUKFkB0TmibbS7r%2BvFOIWlFzq7hXBUIhLdtxed0QiQFhSOHd%2F2SVPaDKMuruwyuQJVIQfe6JtmTt8urgtJ0Yfa8GiOo5sa8SUjrYohTTYo1%2Bhpfe94MM%2FhycQGOqUBfvSZvfTexRANa%2FwkzzU5%2F8GpCbAIOG%2FoSPBqdbHFUNU1J9MbDyzqv8PDmHcZ3SnkrtNc9px8s3tAXnPBIufiSZugxKmbrqCSvLosB7zHwGOHm%2BkFh54bt7D3sL%2BeBYqPSUpNGHavayKPKXrgQlOAvktIquS3fBZlgPIi0Fs7PtIS1DU2u%2BkndGfEHDST2CgI%2Bst8YnBlCuRtn4euvdf1McgjXXIN&X-Amz-Signature=6e54df23611cd1a445b11664ff8ab1dbe39fb3b16bdcee2ede3e9cd6fa0f9d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=a1fcb32ef103568652f4780c9a1fa85ebb0306fa7dfbba9a7b42cf61d840cc9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=992f2f35c3bebfba315ad74285a59aacccd17872721c8921ce21e78fcae13334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=0f45832750c469a94df93fa3b2eb968ac4cd2054bdf9bf5b9dbfcde259d8bfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=1bb5357e937ccbefe567f5248fe819ff2709927d0e56e63edef28327c54ad244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=e9d91c483326dca6e22e0dccfb766214ec6e8cdcb8a36629f1552c459ce339d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6HG75I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC8TmJmACSPac13ye%2B8eNKo%2FOQ85nAa4qJ04fIdGAy3swIgEHFHo9xqGyW4S5Y64b1QZSjJcCry6fflhnMUydVYCREq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNPYeusKv9fqLms7SrcA56uGVMpZUpb9jdAt3mh0NXEe4YPdRl%2FewqVV0Yc59S1DsCYApdH4L%2BPGdPT%2BkpMxtjOnhbgFoCH4SV9XQ4lVJ9LtaiTbxEcQn6juiNTk9drkEc0dQiIcjjPwdac7xpk50GOaMJc2VpIuzV6unw0gwtBe9%2BFsUvH%2BjZ2UnNyUFh2QnCCgeiK19XxZdBdEZVVU9tPyHzxtWtfuvhk%2BM1T1WMNkLosaVLxtSGWmDJfNnT9XtJNdgGsLOabXIkgPV6479Qf0afS%2BsIT3boWpUjT9nF8UpSPPpA03h1z0GxPyA5Q77F9U2tFgyVbeKsV7fv%2B0IHmNMZOjXdilJwr6NNylsxYbcAX%2F2p7QrCsBKhLrniCAOcB89v87guuMPvKzr8TMmUoYs9nVl%2BOKCIptgrzbYaplIvLnLBeV98Q1OOe6p2XPuqkqUUqEyl8fCU4Pff%2BJdEx6NAfkFb2l8rO2Rg%2BSo33GQTtZkgF1JR6f4BTqA1tifmcdue92jqHbUgPm0hYSTaQ06TCMFAK1bxCjX6D2VoJZ64xDT0a%2Bqndv60665DPGW7p09k%2FTQVjgs%2F6YsDvdft4VwpzMKVIj5RJRvH8Lt6znnEeGTd8OUfkkMWMCcuVTBsHG2L20lajJY2WMITiycQGOqUBcF4IEzsCqjYjm8SRgbx5eJVPx7qt8J1zEYN92caloQXTZJc%2BffmndkphnmJmrWpahZmuLOgIl1QMwHUlp4O7c6C5Qzt%2FkcIjXG04iFU41lyaAwjGUVd7QfS0NHO1cwMrxwJWW%2BtC1yG%2F475wd0R1nr9NIx%2BaTw16PwpzdDiew%2FMhNs3Z46xCjA0z%2BL6kEekvGGCG1oAJvNAJj8U2KxKE0%2BB5Fd9%2F&X-Amz-Signature=b659142dfba93fe3b63ef5c04f64a6646e42b1960f418f0cf75be1c6016e383c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
