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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=f52e85ec766d63b97ab330a75edb8b8c3aff0cfc3995f3431393a906539ab14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=b5e843ab2b411b72d73e8bf8d0f6f500670895d786447bf2b323c66220223958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=72da8a48519652c7bc0deec01fae71773bbffbbeb4474ce3146eb57257033c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=7f1387555ca9c7792c0a1d96b795533566a386b326d452efc47eebdaebe72128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642A26AKS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS91Os6j4FsTtvaTAP3m90d4U533F1MP41AkwspEzhaAiEAtzhiGBlgGtvNg2e6IEccE5nllhcZD2dUWYU%2F1xqOefgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJotnWw2u%2B7OCpIc4ircA8ZfcH79cQWXDZENtDcxh%2FzgnOWHvajg2Sa%2BXleflOai4MV9626i1V3wabyriswCMuovnBMVcPpbAD34ITwB8mHEysvkFmDK4b5E8q7ll%2BYfzwDSqnHiWdWgcuU%2BMRJVKcZ1dHlRxq0oFNlgW3KruR9tcGhIh1UA4PfFjOh6Og8J5Oqd7L40roRtGVs1ZVgFvG%2B6tGsJEDgYETObcSj8X2cZKPN712Cvrw%2BFSe4c2lpYr6FEmTygWB28JQz4sA6jPPbNG5eEapWRY%2Bo%2BIpYHSor10CQjraY8Nanhl%2F%2FBnPFZRRc64Ydd6ARx3i7AoO7HnbciijskyC60xW2k2%2F35QjoWroS6saq79OVg65R1z%2Bw%2FLY8VgaIHaTsOEcLt9MlPZOWH1sa1yAT7IYj0Oc%2FPF7tZzizvjae%2Bf%2Bfw%2B0BRLIOGQ2xIw3Y0F9wMonLSYItmjc1duNml1JbQhr6dhKoEmm23WYABWd3WlASGfDh4yGhPcLsL54FcNxStcLsa%2FELY22%2B3GloHglTgT2kGHU5tJQN7NMfwM6%2BBTT8%2BuW7OxsxwIjl%2Fsfkstbc2%2BUhhT3up%2By2lNmkWTIkvYt1woA5crc5oIhFwxlnWVJKe7aXtJKqpTk3TW%2BAR3%2BhGf9G%2BMMOeucQGOqUBoa5U7QMaoj3qIg28KGRvYUtvSfpW80JipvDCVJJgZmIQ2ZjxbHq8cmT2ZaS2jQkNlJM2s%2F0j9iEK9GYa1jCYvxVxVyABISBYEQm7seJhdQKhueWe6D4sfoH%2F2pTZe9xfYyiu74dJvdwRMvpygaoKMOxCP3v96uFXF2cz296LZNM4QTCmkW74Xu05a5%2F29YZk9MY%2FqTrP2LNnMsovL1cQ9CL8AGFx&X-Amz-Signature=1ba83d3bbd74456b714bfea3991cadbed2844b8a3aa03b95c97f9b70790b14ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=63ea146974aea4560658884b280ac3d17856078deacd210e3357414382ee9a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=48b45ca306fa22176a9ca2deae22dc767c37cba4ba793edc2819b64c5c1ac99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=da7740779a1ef6be8be0f0fdf330f136b4cb43176937e22f9c4cb1e9a472d433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=9cbae447b7b767d29c65010f00cff8f4b357449880bc89c1ebb26f84719f061a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=5d3d51bc4e9c845f96fd3e48bad0934fe568a585574f1764730ec63e01574c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUVD5ZP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyML3vSuIUyofdsx3wkjSUieB6LRZI1pwmb%2FGHOnzACAIhAKdjCLGzKgz7FJMr0Z3GX25Gjf%2BwXtJ3a6iPzJlj8GAjKv8DCBsQABoMNjM3NDIzMTgzODA1Igx95MM653nSccvfhZUq3ANUHpWFXssuA%2FHcShjW6n7pchNjx%2B%2Bz1jhtkkaVNw%2Fbjfyi4y1eOeq9Cvy3R1q2UiuLlK0905yZ3pVdeCFaLiHFtHO0tjhWfv86WRUiKGdihygyEUfR8YDilsVwZIfFAhLVZFBXgwkiQm4N7cSOrwUcf8Obisf9aumc8NiBHpgTF8YDUryp3dOgwWIuiZyRuOmxKnhwaXWcAhtCxdP1jIcE8iqTL0Sz4UmaChp69gNx5TG2cQcVvTVXouLEjMrIM%2F4Ti0ONU3KpT7n%2FKWAja%2BguBGB%2FMCEjXuP2R4ZBcH9WLI1MKZWEMYKK%2FEqFzM16tVJ1eQUXvkYTe9Juc%2FgD%2FINrDNRA7b4Fvkd2taLmLHnq4DAXNGzlauKoLFzAB4iMMFhrhWbLZAQJG74EaedkW2G9Vzt1z1InBX3KcxbkC7A9ePK28g6Oo7%2FzqNNvQBQraX8WVv9BwD7W85jE639FDoEOuo8kcUER%2FDkpyQBvRA4ug5zcRbaj27LRT5TjGJhpmYqqiogSrGSHmchGRwu6Di8EQGBQzWFv0yneOLadn%2F76S8XtGapkQxZVkESC6RVduHpGldlIM5hvDyaM3rivHOHP6C9wJrlvwo%2F5EPcbyvPbrIFsYgWmSpWMSbPHJzDinbnEBjqkAeB6eiV06hFxstpBl4V1tBxK3iBFT%2FVTJ9wWuG2lqbRZmhS7JMhW47r0iZkCRcZ2SNq6o6sNMuD2ZPjnvli0uytDJ5pE1XBMQiF%2FOXhHwsAbIGi%2BjUWW08FCaOi915bngHDEog5xeCXTivBV63oP%2FlZBUTCz310amwFSYA55yHfbji3gTOLVAuEYHBLI7ei9P7h1GlrPfCb52gVoWi4XyWK9X0le&X-Amz-Signature=b87825d6d9d5f0643d4a11a3fa2e625f1153ad4144bd7a74085616238b88d6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
