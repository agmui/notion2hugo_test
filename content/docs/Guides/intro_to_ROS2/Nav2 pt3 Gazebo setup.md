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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=53d2519d708e041a2256cfada5854d6229cd2eef47b209bb29b3d1b6122e70ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=0bcc6a3de1528b892a1bd8d3301f126f409a7a7a2e27e7bf396fb5cc4d0d48e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=de5c695b8f7c47bae60806a938590741ce85718d3cb67c678383946c025b7645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=e257a5ed90f6c9335d2c7daf13c55532b5ca1d5fe88f3447618ee9682c4a81ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQOK3IJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDXJzr6dpwZavxW8Joao%2B%2FGwXdYVexkjP25a3Jq28GMFQIhAPz7RU1SyIMqfQC7jg1h3BW%2FUMi1rsDIytUpzpM9jcKHKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWb53Bs2vDIgFTYsq3AMvpYuwuq7f6wb5ju8dhSsdnnw3rKbnYP%2Be40WISvU2hwG2vDSq1OuoRVTPZR3morRxSuh9vBjAbVeYKw%2ByPGE9XcTCkjvYXKWnff1ALaSNHlrVe40MMiobwymtIvIUAEsTjX0D2VaTBi6UGpNHdGP1sssFVZu6MOmiUVsfh1keb4zABxB7aG1Oe%2F%2FKRX9Pk9ZdmEUDJ0%2Fd1o7keNXhaw%2BKDXwA49l%2B7JdutslwZsb7Fk9YlJ8PzhpQF3EKKI8c1AtJ1M0g%2ByFyrh%2FvFt0Pl5PB6FbBwRX6oRk1RHV5a99%2F6GAe2ck43YDwnIR%2BruIy6mun92fmHYyPEs8vT1x3ScBI7X23Eb9Xx%2FPyFD7Bnwbku6wCfNPYXNi4ZrEsEA1d9K1gTWaLdplAKOtAlQ4GaWTE6rKfcbYPPsRkb%2BvBQRg6%2Fiyi%2FFnWvinTF2nJAPkZOJFbYqIA%2FuXZ0DdhQqUH0lgGOsShsyw6MPjXJg8HUbPuQC8MAS6mVEOWhgpymhhrOlNbV1vhmD7I5X%2F43mYmLN%2BZAf9WlcB4XjcU60P11m63k%2Bz0iTLMgJxhtxafsAEISjA1DELhe8ee5bA6Prwz%2Fr1bGc6yOKEYql0uxx%2FEqtNvSVpPbSqsMplSCj0MIDD1k9TEBjqkAcIYXFfpVjLuQijpceae6rPmwQlDrWskHLgs%2BYmQRhOjiywqO9g%2FzbEz7d%2BNziCCG1m28L%2FRFXU1ehPakOF50czUxYIE%2FGXdyxOjkhtmzm9NlOpmJuMsGAM8FdcNfYxQEB1eLGH5Yt%2FYwNER%2B6DxLpG3g0NpNs9VnVQiFa2z0pCjg%2FzAgBEOgz0kxan3te9Uc4DVzNP7A%2B6ov2oKJbt7%2F3oGna58&X-Amz-Signature=5b58bc6c1277e278fef19ac00efd9556244218610326fa7fce6d3a1916fe98e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=d436f11c7aacf2e1436404854568bfe811b06de0f6b1a593396c454efa116d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=c6f6571cd55beb3d8079a72ceb4043b25172a4b9c96e7a956194a3e6dade797f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=241abe93a37b711ecfbe2d026ba53790406d2513a67e449f3ab0f0b2d83327ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=9a41aef8e85e29773d7d57772e3237ddc883b5cd917cf7088d2784642684cff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=48e7a49814b134799d1b967b119118f9d15bfddc5b60e2b1ec2a36d7b698ef4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHPEXVL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDLYsd3ZoYUQQ2%2F8vA3ZV8%2B6VyjmEr6fWlYPY6VHF2FPAIhAOBc7zB3sS3q8%2BasY1f34Y%2BYUJi2MTgXW4ILzc15mvmXKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9xn%2BxOPtxgKjSf3kq3AOb7TCREC1Flmxeshm6xM0RbkY14vUgW8dGQiitC1rJE3za%2Fhx7iO86i5y1ZeIoSOqgBIMyUvFSMThjV8ak3CSaiiPq60cTrgGTwu1YShC9ZpexMjaejc9l7xvMe8oWoTUVaLOxidek8%2B5W8H5wKERXwFpt0JvfQ7oSisxOhEoh6kNYV2yFlQuofBqdlrjd0vsecIcU0fD3ZAsk3CE6ZElSe%2FJZlsiFILrueUi6rSMnxuKwV4qCc4lAE1jg7c4V28H0SRrcY%2Fb8V6PoeS0ZJNskmVzGSE9ADaRk15%2BJCSUzlqqKzNl%2FyCtuFDJIbpuJR%2BvGR4LAm9HzpPBqyGg9XGwZ7czSX%2BAVskV9fD%2BdbINQY2Ct1a5Orj%2FFjT16uSujXCSfBPAtkxLbGnXECOXwwnfj64uEHGQQd9sr%2FnwyQ5bo9E2gwyMsQ6c%2FDiifMPmRlCPsboviI%2BfVg3j5JGV4s1ca48vH1AHZLO3loEwJWEh2wTCWudjQJjcqmgZSiivVx0Q0vA5CKjZ%2FgjEPNpUP3KBKj5wgOjzKFRytvZ2z2UsFCU%2FPLtBL5m%2Fs8rBH6%2Bl1w9xOsSHtlpSEVP4feHq%2FjIO3pJdcJnu06IVAsk5zSY9A1w9QolwaA6Wg1OGOgjDRlNTEBjqkAXpqxoEbS%2FAbUdEmz%2BewY6YjLAJTVIRGu%2B5Jy0%2BOMZMBIRKBkPUdVNVEdwzHgvC2g%2Bahe7IvI%2BpgDyHIkJH8z9kJVUhIhfwT4dSidQFsYQF2LrKKZCmqyvEhLorjVweppUw4fDAMeHmuJhzKbbYxsUReDl70k1CSvfgLT7roAl5IcqyOPeepBiiQVruwgouqe1KqNi8QHtdLNEaEP4Tx2BXv97OX&X-Amz-Signature=c14c5ba8448e1dd0ee273b40dc6e6a87efa4888737bdf72532f1d9a4f0ade116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
