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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=3afc5c91a1b2fd5bfff91490e9c4ca81610989fe5234be158e2be5af679c3208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=f06bf75769062ff5effb7d29c3e9c72bfc1872de6ef75d27112d8a0d7809f9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=044815136fdda6be0d83249c6eb26598029bd066e26ebaddd9f398d2ecb56020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=5885398b8e15fa07be30272f956f421b11d9f26225737461847df8651a2c87ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCL7WUQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCID0UYFmloOOeIZhIbsqov2bLvMc%2BSutyaXHJ47mRNea%2BAiEA%2BJ%2BJtV%2Bo2hkHvmmFbuLdNO390WlnHpiKFlK0b%2BlbUlwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAaHIPSTkUBFLqm8cSrcA6YytsfVqeye38wAaNFZdAplAYfzPbPZPNIPWJTI2r73avbcnwxRUPYW429bCDb09lv1K17cIPzas%2Bnsdc6wsY4UqftHXhf8Vk%2FPF8vMwj60koaS5AaO4G%2Fe%2BfSGC4g%2F0%2FMn7UZsyyjYtQvnCR4gUgLpSy%2FOc1zYhGg1BtmlYLClsAiURgefs6ANXbT6UFFmQDOcgukevnGPa%2BsHuOXZS%2Fda%2FnTkc7XFq0GIGTjUmhRimK%2BVH5GIZY3CASpWy5qqmSghJSCMbnn14yDH8GAOD7mMaXsa%2B6j3ljkE5nbJtFx6iAyfgWQfhgogZdynjD7rCmPbAjqaJodg%2FISzlCZBYpKMXMWpCaDoMbOPQAJhwhjPnJcghsrL3ZrGF5nPU09jIRRneS8wqJAGVTXJKmlyCUqFl5KqMufyY4qZc%2Bu8rSFLEslmDBcs08S33sJMJ7nq2RysrEF0PBCs%2BtYU9c9LEYizvOTdyq%2BiwgydwZiFBhZZgx9n5%2F%2FqBY3QdOngo7pdMsFg8eRr46FCm5hBCfEHlOp6JLG3yZjmYk7W797gDGts%2FcfMZl9M1CeVwGqEw5%2FC69wW9vYJrfsl0Eb3%2Fjt9PB2dxCtFCcQl7J1mQ%2F0eOedrAiUWhbUUkqDwI9JgMJPOw8QGOqUBA6R9TpfFjJiBlb%2FiHaAjQlgK5fAcadDZlV1DjnfscQ4zuGtCLeGqs4K9S4H1lAdFDptWWu4vE3leOPBSjg6NQqQd%2FAZFtSA%2F4nzfN0Q45bKV1NM9xdm7UfdGRQv1jMS8LgTDGdUPjA84uMiz9w1QFQdwhj8cEtasSollag8OhSGr8FDThF9c3P7emduStwXp8kowGkbBbjpNzsmJxXjKEcQ%2FlHNo&X-Amz-Signature=57475760e8b1725b135b908f16fc0c143e1775853fac57ac805f0ac69001d209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=136dafc21fe8b0dced8c209633d4a28d12db96a0db769442ef6eec90f70b8c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=ade6a2c8e50d891cb9ca5ed525950da55dea3f446fca868f5894f1d71922ec3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=6fbdacedd262cdc0c6ce4eadcd50d12e7803938104c4cc78e74553eb64e0513c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=2385e11e9b97f4486fdc6d8180b59d926a29d7fb260337aa754d9d5ecff8529d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=e2db9af3f4a62b9d06f5ea4d0658fccde1be338e77e6f1b9ae83358845374b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236PQZFH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCdyDoXpO8lqdfDpyrJCAV27w13OWBg%2FwxohFufYsGrPwIhALc0oZ%2FWHDjAHExjW1Lo1zOBA1zTP%2F0Lhq%2B5YEu8LXeEKv8DCEoQABoMNjM3NDIzMTgzODA1IgyDpcyo3c1QcQ%2Fs4gwq3APsyuz6Z%2Fv4D3GBD5hOAPv1Vd0jggLWxbmKSmVRJaxXeZGuMm5%2BDD3B0Nd5l7IxtzMBzo2d5rpneKboc9LUfmp9tQVp0ONx0l0XsB8iY4%2FVQ77MIUIOCnz43C9LeMIrEzfnFhZzHmzVb2LX6tRqrSCimW64xRikaZspXd5K1Q0zZd52hv0%2Fy0S472pvsucv1xlWIwBhDG6dqhdZISnc5BFqgjRB3pD09bNytxfy%2B27YEBImF4MylxPi6QorpAizE%2BWJDbi3yipNto3CR7aWSy0OinXFuI9eAgvC8kchX%2FUVDPx0x%2BswogUU%2BDRlX9XnZ74IPUDVOy00SWgn3M5HMeRuZeStLTJvhovbF21NfCTxnRzT8%2B%2BtGe2QfK%2Fzl21%2F5aAmjuyW400mUSqekqdTODT4MFpQAgnBPOTYYsM1CqgznWZtYcbGNZt%2FRrv4I%2Be%2FuoeG7ndbTkZQmVRZ33DazZAICDu7oRCbJyRP5UVbGujGGVrNcd3Pi1DOCzM%2F%2FB2%2FNjDno%2Bgg2nnkA5pgEtDQWGD68R%2BXBsC3KOcH0I9KT0van4xaTL6wzGJN9JCVbTJrEL7mi8UrWFZZjx86IF8cWNaSK6EWSR2JJ6xKSxejK%2Bfb3QpJKnAS54AqZ58dBjCfzsPEBjqkAUqNNQt6EyqgnDPqfBhWnWNa4t2%2F%2FEBwzDfd4sZyU4llk9e46QwLCSu%2FNIrzLVOxEFZ3itowcsEJtGphkLrf%2Bwhn9L5bg75Jg5Xj520o3ZjhhXiuF7mbWBvV90sD8jPY32WVStY6AqCmKtvBuISLiCN%2FHlAdkH3%2B0EP9HnHJJzcJCD3nVjaqueCigzqaDBaMh874f9OkmGj7vJ1C4ODnmSglSe%2BY&X-Amz-Signature=704f1a57a21d0b21c2dc675b53b8388558cb850308f6529e6d41174370d4f5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
