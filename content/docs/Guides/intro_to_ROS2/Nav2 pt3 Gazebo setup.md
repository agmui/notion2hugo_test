---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T01:01:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T01:01:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=c5acec51191a6fc3cca6153f12fe4077ce85a6bbf042ed8272866b46716e94b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=5166145031e6efc522d9d8f07eabb723e2c0a9ead20cfa443bd699e3ea682f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=c31b72e818457bd951ceec6df3d429036cabe702d7f7767b46fd194dbe8543d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=50dacb217f863b756c03c98e337a7a2471d970e79d4aff578b8b84a6f52cd11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: test `fdir`

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
          ~~<fdir1>1 0 0</fdir1>~~
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCI6U7LO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv%2Fq1gZTSGL4gWsTKQKrukKin%2FgeE9cqGakgMXKapzuAiEAqysaC3X95nSlbY3H6kte5%2BuUt%2BKSe3ebV45C1pGiE%2BIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXCq2rBtRxNxD1sIircA2aejcuIH%2FQNh%2B53aHe5rUwi1e%2FhGloceIXORjtolYq8s6I66cNDfuDaYZlMkI6BBC7Ik2fMfKnOJRWMRSobjNNm4mkpoo6aIZauD54VjrFf0L7zjVNGHbR6J%2FlGUW8RND3ehZQBjQDZsS3KqyzALewFnSqoNWv8FiW5MQhdQ1WQkmSIerHVSg%2FxsYdGkEFZ%2FjWtrS6oDb5BKj0Xf1opKkAF6Fp2VMi%2FCWEuQ6k7jPROYf0GrXG5a3e5wRSHc9e56SZ4IgcKqeJ9tS0fuds9UJKT2Jkg5hYQ6FvEdHYyVZRIrbnOcYvou%2BuDO1IRk%2FMd5fj3dUwkJsHNGUrAV4SteISaZXcwF0AMv5POlhWPJQ%2F0t2xSHHX1s2pQ8sAZIRj9czzG6gKJPD7ISG9k3nkdHdF8t3KevFfVhTck4b7GXiLYRF9eEEBQmpkA8tTRZ5ijdRJbdYjVYu8xkmmlILP0dAk5KFQlYYynHpiXTbBUzecv4kFSr3cKfi2R1kkDgwSfqw90FOkF7wWJrSolcdqrZndComUpHr474xmRFRoxIptFnfg4XzkrNzJo%2B%2BBYZ4BXVYSXpPopScavKsQLB7GnwHuBTsTFb32tN2T60DAf2na1znfsNwRMtf7Q02OYMPv2tcQGOqUBqQYSze5IXN2Dovb6IxE8ZNQKXgeNijEBjn9zNT%2F1rocNYq%2Bde%2BZLRPZGNYxCuJmVS67ft5HaYWFc1yW5rI3miYmdPaLD3TXsLHNB2y4PXjY4UJHvz9YowGeBl6aZVqwNn5CygOjevwUMhEh7Ch4hY3f0G3wONd93EGpDyBiRjQKFiy7KXl53mp4d3D%2FPBaHFrm7TgzjUgNmt%2B%2Fu51xj0Szj1Cq0%2F&X-Amz-Signature=06887a8aa6ae9ac6145bda534b89987366a8d09ac32cad04cdd01f1541ed94b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=b8f9c4ffbc0df9160a9d0b110d2479bb28bb45167931710567172c2547ec03eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=697c90054ff8145f4778c7983643007a7a3726c0be91684ae6b604a72606aa13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=e20c27ab0601cb295e57ace2b1ff053f0c457563423b21b0be297be1742c6329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=fdc408c83302e071823f48c2c8733af6567f7c186b0b08058ae14aada0e9ba2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=ca54b8f3d251a633eb648af802b6629958eb5834be208b393925096ceee4df0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWNYCQRQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiQX1yrqb6TK1VFd1Ad5YFTl%2B492QQPXChpNBWKvsawIgC9dO8M0mNQfRVbiz2hflwpwxLjQvmq5Ew%2F2vQM3q5M4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8S3Wwr20pPM23%2FdircA49prxPoWMcjULXIozO9em6yBzo0UAUzI%2BO%2BnX4p3fZ9WEwhhybXUJp3OcSSsRuJmBB5FRkFxc43%2BekFs6%2FqpJJLf4IsI0QkrZ42LfBvFPGOTCHgI1lG2HzVKv4G%2B9knTmE5%2BUHQZ0cIb4a6NdCxku0KkBn6uiG2qauZVG%2FUFni7OsJ9MdJTwE%2FGtY3x8STwPoD9jjuMg2nIHhPk4ytiY%2BYOiJR5oh8JwSnUJUFGeZQAPfvwoUDJuDBmoYW8wtagX0w1SoM4OAFIj8lIs3hWqzw1AZK40tw28Y1yBWZkfNGB347A7%2FOW9Buh0O2QLXzhgsM%2Fdji3qq58CQkgO5%2Bqlv%2Bt8twmr10Kvf8x6vK6uyxWK6h%2B7NWG7FZFOh1NYxeH%2BxqfKybu%2FqpY%2B3A7nMZ9BeMV4%2FJaitLGeGJeepP%2BqnNrrv2iypHPID%2BRe4Xs%2F6fEMF6%2FKBZjpYvm8HundI0F4o333xcaYzefXjWPZaBkrozB2iySI7wLKMcmdREsyZ2POQWMlVW8417hxcDnPOjxO%2FhUIrPUwL6KaxpqN74k6ga7PpuGMTAefUiqCl730wY6dlJW43d1ZQoU08ydFt%2FX04jmBTFmxAl9m1EQgpSjVTwWmmOxtnzUlzwCrcJjMMH3tcQGOqUBuTUoPwwD0sFb%2BBkOAYGg3ZV%2BjL06Ffn8MlxctY%2BXDXlBB3v66zaRShTxCeHWFAIYfBb09YxOAG2dfDh2i6LbgLQKlWK1KoyJ4DIA5smXHCOmGgQsxWkwQopIvVzN08ofrgyMu4B5k3PUrQTMcMWMIbSx2FDhOpuAEcYRibYYaJfu1QpVv5Gc3CCSGWpbYqRY1707mx7pJtZPsLr3Hs%2FwRTu8VfAn&X-Amz-Signature=1142a08425ae7344c98abc8b6bc3169a2e768f723e417a136c028871c532381a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
