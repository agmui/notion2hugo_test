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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=6bf5f6276cd44fcc0e40abff6c3e0a15be5a373815c32820a88a8b7c30d34ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=dc4f5c79ed94b9dff1a707184b2f69fe2bfd302ea8c3640a151391cfc91598e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=cfeffaea33308338ca94d59654b952fbc4260075d0718f99972ac0ee9b1f8b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=7e8f54f29e558f6187f5f95322abae94ada385ad13755eac1708ed29b7a09509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573DJD3S%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDhHVXv0LP5pKDPEVBCzBmuSTEswj%2FtxDxhyjlyJWXLpAiEArkD2G6P6ItsQ9lxETbG%2FogYPIkgSni%2FKfjp8YPgbr14qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCq2owQR%2FGkXVXjNGircA25gIN4qNwrLjcjiQdNzXh4eysxzE4swGwaiGgWSDBTrWRgUAnoCiFUGdgbzlRDtsEnLvjmi3ijHxUy05lQ%2BSEozg%2FEodpiB%2B%2BRJc%2Bua%2Bw8fiBW%2Flwi%2Fo3LjYW4Fgyy%2Fsj962%2F3%2BTnotLaSPwCmFpjnvQoChicRQMM%2FozncTDXAyw2nq6FMjczTusL70Y9e5MF7CxNTI%2Buq%2BuwesxJqcuMx%2BYE%2FHajOD5GbbiRP%2FRGZnLspevWlxO5QJoY71LNxDzairQ9pUon3PcoKwYdB3%2BsL9TTliqiKaoaqH6slgHl3QdjQNQ5c5avvaTws5nnA%2BiQhAv%2F0EXWyLm%2Bdci0ZllCNrvi8kIQejs%2By%2BoxoPAMBrivkzBfaMNUfDNeWvnHowJ0e1mdckBLxZZSgB10thRMHvU4KbSeRcypeGlMNheinVjxu2JCaAE5eKUBnCeE9do56J8hSxLkIih9z7rrX2KmmtX%2F0C83xFPidpZWDae2Dj16wphtY8OiOWTxdeHuIs8T5GRmz8UxmDKwVY0AIYSCdoS46fFY4YrpDAundpFvkLbu%2FkmmCVfb0m4rt%2BNAvzLzy5d2cQZRgdYi8AFoaz2Iwe0BxOVD1LHJlrRav0TvAoF8q%2F7TJwPZ5uKhZsMOr61cQGOqUBZ1tH6VrRe0O0KPRJdIPP874pZ8CM9JU6%2BCBfNUfocZw7cdzdOEbRTr4YVszcBHPupw%2FA%2FcUhHzrB48AUmfnPkqnMCduG5UinvdlPN%2FlsHnRVzT%2FDB6zIEATd%2BHy1nGbyFyumUFx0BDGbGnFkpRKQJc9AOryZYawOHYiW2gSQ%2F6KJYSXUb2zel7lmm%2BkYm5jakPSFLNeOIvMPNOQPHkgBRgSkgpW7&X-Amz-Signature=5c72a85dc443f494ab889308aa23cc895cd22c1864b285a29627fcd68800808b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=1dff33adf2220a344737122e3b20c03bebaddeae26a689dfcd5eb73ebba588af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=0e39e49f55f4167a3df22af9cb462c2d63b187d28f032cba13996a6be1e39609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=b21592d0955b74e2d1c0dc500faa915fa513d20948ea51d74870c0cce88c6c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=9193aad3c74da48d2c2e8c7506ba0580a7f36521d5ee92b162e5084af008563b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=4dd36ba65fb9a2a0d74aa7a4efe72a058f9110086fe8805a6cdd2a94984cb5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T632TDCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDIYkRjuy9jTV26lQZIotgoMnMCqLLn0YbDlBRR9z4%2FegIgYUO8mp8HqftCX%2FNzhd2uTZzaZ08qdHUmoBzwJ5vskkQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbyxqxf%2BzH5cgj1pCrcA9Wwof0g4z9sADFbcs1uPykG%2FKaTDt0J7h4qqkYC%2B0JlFKDl8o9%2B%2Frmj74JcQy0nT3M%2FBBxjfkSjW5RCVIjmqa%2FzfzegGHkSZH5xQNczHKvcK5guYduOApy2mITxUvdydUqoJ78Ayk3GBqtcM5fnghrjNrJLtBAuhLDr3%2FKEuEmO5XDEu4xW%2FxCp0cbDrx0yLflE2tkzDWi2ggiqz8Uup5GJpN325yRHagkZXdZV9%2BlSq5IDvBgoNMJHXga%2FCOuphqoAj%2BFPms3TtuZImLJzOnCikUCZfrlN0i%2B07c87SlDATVwGiFvs5zpXuaH%2B%2BkhknxIIYPNYM3E0Ztqd4cNXrPKX0UY%2BN1GtV%2F3rIy0fslB4EMBNXjjQeVAA%2FgB4i8zXANtmZXYGwv5QkX1YOMbfckEo0EPQZiN2zfAQdPk75%2BmuHaeXHmkbdhySxX73AF9ZButdIY1QT7fpQdKp0hH5Nd7iUjFaNvOWWjNCaxQt1nnVaPK0SaJynktuSvXpsCL5vJmtZdNGWfnZ%2B1tD6Ak%2FhyNZwUo%2BzFO7tIMMQ6qW9cumFcHB0ELOQwRbXTzFVkqQOS0kaqJoCYkRJxZ63gvipskBYK%2BBCOVjX5MG%2Bl9bJgO%2FL%2FsbiCWgtIbg3dE6MJX61cQGOqUBbXhtVvGOzN5jcVj1i1LiyBcSa17bS3oE9oi4SI9iyY5apVEdJy2Mntq4ABW6dHJxBfGISRVS5a1F8fGrb3ib3WKnc8UExyhiluz%2FPA0Uwr6Ryy85jl2GTa5SLGONnw%2BN1EfxLMcJ%2FlyExg2m7t4c%2BoT%2FufRuGpzQKu0lpAEaem9Q1yqwcWVpmZoZWQ1ZBpsIx1GIo5ZmjMvl0Kf21IZNZRabQ5nU&X-Amz-Signature=fe30a7e7d3f7e979c69e8fc952e1de395caa726ad31bf00ac72c6516f79ac25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
