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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=5c5e7cff680f7e80c68e8df8c9ded2d60f1bc7fce8919fc9d63d093fd1e79a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=59d01a806dbc177244cb08b1be1e95f36c97e78b6d9bef871c8748744d59f5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=8293a1f0285f7f2c3cce9cc106926d6a541b49dfc25b87b90bb350b78d5cbdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=cf3da0c111c1b2017c0381d7c831392878d24b5483db325a060ea9ef14d9b695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ4C4TPI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2FMUss4FDGk2K7Lb%2Fee6MEjlMyRsuRV2ThxgJkHitegIgV108%2B3uEKXcDva4l0SkORLXpvGgOA7px%2FTt5qlHzq5gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa6ph%2F9xi5PE9oUSircA70GwQqDdO531RTuJxui39ENNHFiRG00Q8lcCH069jM%2BMYv9wWk3mjFFKmOTd%2BtdefiNDPeH4ByAr9WGlHchKBUt0CLwwwZ3gRVCRHU%2BaNpARWpVQv%2BQ494w2YdBDOKQIaAJ%2BzMByw9BS3WRaFVr6jC8gg0ejt0l2xfYi2AGl09obZT9cpcJ6wADu2V4qnvGBGNfW8wk4unkB59rtx4hxT6FZM1LErsziyAGEHVT4SmLgz%2FW40OeddGpXuK9u34S1eH6ExHvRdhwixShLX8jfqXGrvurrWnPEH9F%2Fgt7zuF%2FbK7rqxMkwbX3GLMaH6UVYKaf4Mx2cVDoR0yVQ6viSoVGG%2Fs0SpUgMIs%2FWqV7q6Pm%2BzAPCq4cAZ3SPjPxVrA88FtKSih56BSmK%2BL6G9fMn2WYq7Z9M2JvMR9xrBWiJO9r0mKuJDQuXI0dYA7s8bIUjYVigIqjBuItMAkhKrHvza%2Bk2ScPpfVjEryY9ZqSH1nG5wS3j%2Bb1oLtA5xQNIcswQon%2BO3jk%2BFFJhhHf6yylDnCSH89RiDtCkJhasnCJmW5jja9J7Vrkrb%2FL1L%2FCdib0%2BLsKKzX0jc4JqCuZt9s6ybCJ08WNCsCUzOWgjeM2hJm%2FkJXsKHKt5RFpRlxDMP7x58QGOqUB%2BrwL91f%2FIkRvcU9XxoCNEwSSDODqBDM9jKjbTz1rvX7rsZSRZrnrDzge3ep1pvfVz7rUPVTHoljEu4nim2xISi68u7CLNAgTc1jitNSgtxdM6ISRB71hNbwEAaBzI7wUtImP0LQyZwey4qI3pcbh%2FpNAz1p9No9OITeGBocs%2B5zx9GIi%2FbVq1X6M%2BQsRCWejokUghxDqZBtUHSdLg5kVXvfWR0Um&X-Amz-Signature=080763fa66e96554123680bf422cb88cbc69fd9bf11d4fed31575fc6a5424a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=8e898f09407727e86cf6f4ecd62349ffa187a1fbfce8c625b1a00a676e071e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=6b846ad95c0f0f534fb06712d6d6a4b92104c573ee0d3610a5d6602ba9271f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=02ace651b6fa798446d541ba9d121cf88d4f03f6430ab8a868c37b4590b04662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=76e79216af9c726dd646dff47e9f9df9eb299e63342bd4a42d7ae3acbaa3aa63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=ee3c76f7051d2bb93636d0814b7f23c09a89244f60fb643fc0a25bb3c48a05bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZAXXYS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo9Kku%2FdjTbI7WNULFkvzjBpQdVbsQFj8tmP2blnOUewIgXPAAB01NjW%2FW10hbWjag8DpEFeVYESZWsQhF4CYuqhYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHwAs0fRfIrbRyZsyrcA7n1MMHGpZS9VtB9kZWEkdGzfJc5ri23onXmgZZaBPT8fTgnXeMuQiMzJtsmXxr1wGS6Ywgf8MxluiXebXgn8wNYB9tTihtPa1l%2FN1gSCXDjtHrEHkbc2WjWHl5Gwi5JjOs29nw42O7iSt11Wb%2FDHk4hzJHgEU%2B5maVbg3bGuDd2%2FKRuD2qUHe8fBahF5NdaM5m6PqBY02I1WvDwrksR%2Ba%2F44EPla0yd63cXoz6GaNCC0WOExkYBo4cqWG50UvDYu7l9gu2fTAJ%2F3BBMi7z7OmbnuP0dcjzRopO80jR5hwC2KkyuXRAiI81pbhbiimUc5WmzSogSRZIM0dGbVVZG0SheCKLrQA%2BXhXlWHpvFwei9gzBf2nwJl79ERShBb8B80My29K4%2BxfJNC9xR%2BdFB0%2BaXyRiZ9YSR8hKtSMqA3IvLZnnA3e3kvagjta%2FV9zGksQgo7W3%2BwgOURWWaUUf8Pn3zBR%2Bw7gjTV86X2bbV9rEpqFQtaXhfnRib2u64ZBORs3r9H2jqWEl7zWv2VqMko2r0p3Tvpp5MDLWxV8DxlcvX2dl%2Fg%2BqYD%2F9VgwoUehQxPwczRnrZUCMx%2B%2FzV4eZparD0CfJoNn1LICq7MeWTPaemfiHkIDD9sF9cpqp8MOPy58QGOqUBXVmzlUzEF28IZiiSH01PMiRaTWsV0EMtpI%2FVbBIy4UsepBQgLIJBJP%2F2MbkfWTmBHGSxFEYJs%2FpfqRSfW%2F69fABg0jjTjkQx6fZigNCc3gun2bJpbVUL5lqEIdTdO4M2BahUNG%2Bew01d%2F57GxF2v66ifdk5PPV1Ixzpys7BsIw%2FAOWE1OypyXG60ckNnco%2BKhVCn2ipLjf%2F0ALEvLH0amg1hUa0T&X-Amz-Signature=976f37ee95b1e253e258caed1f5d66e24393597451d5bf3cb3e725cb635302ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
