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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=078b9ab9772acb65ef033cfff59c376f3681af5fe70eac9cfef04ea5f24e47fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=7eea2484078303af4948203d3887db7000e16efaa73a717ce2ded9786476bdfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=6c5d8f4f9b8a344602e55cd14ca0e60bb3c66c9e53fcb3edea3c44dc3e18bfed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=5f0848c43a15a274af029d3f0fbc7157f454a1baf7aae001864cc1ce9fee49d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JR553ZR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIA46T33hoTeAYIk5VXMxmz8h6hVug8vZ%2FHCZRs0Qki00AiEAyR5VjSq6pjeWjQHJomm3nlXCK8lj667vVPAMLvbeFLsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUE2Kd29maTBRHWeircA6Y4aTp2V5sqUfLV4kcjT0iyAzyCJUOJf0bk1i%2BN4A3yr%2BeRziNRS4TjzLCvItKmhW7Lp9RtzB7A0A6h94TYLcvxnuIfXfVYHJ9NaDszug2ieQ%2BzzzM%2BCI8KBm%2FgM3%2BWlVX%2BYbkFspRd7AGVbJO%2FsGfit%2Blo5x%2F3%2FlqbB0Qq65%2BhDtektBWIEwpWeCHAIkTK7%2BodSRmnhos9zRXP7NlTGYewgAk6Y03Pjg0p0mGxQD1N4VosOs9eYfVWgqLBc6SFXOhWISXgFvN9USD1FoTuEU35FVbNbTqQv%2B7kGovsnCBqqaYohriYYYb%2FsEeKESzDzupkZT58NE9DUa6TU6KBXxKy7mp1xq7flAO%2FQDqMRppg9dlbsFvTmcqcbSoQQSlvl8FN470dFLHjLngH9dZOPdlZSV0qwq398KfA0oXIFqTtT7Gy3veJg%2Bsyo4i05GFaXumc0HF3ehdDda4KyGHYBpjNifg3G6WSiDmblI7XiSoVkzTMTpreBC199zaZema%2BFNIogw1BV5ZMFeue95l31WTm1aJtxGxDmeo68WBp%2BCUqxDX%2Fna7n0BYY5XhKQdqHVGf38LfL4kOqV9Ib76Wqt8rO%2FbkvRvylQIPNqMzl3%2BviRRjY%2FikC97VCVTDdMMKg18oGOqUBvcDZXqqMmnBlZV%2B95XB%2FPSCBUpxBN3HvlarsZTuB1A6%2BBMTr5P4kinGTabEy2jaXU%2BBWX6CZeuLOSibyK%2BB8n2wAxZ7aTPbr%2FVpLg2cIorag9iAVGK1V%2FK0r1rlPEL1qHFqGQ4jmfyrcgNF5P0AtpvaWsHc2K%2B5Tqkuk6L2ww8hTb2LgGyrKy6E0Zo7beoqM3kVnjN%2FfA13wmuUo7J7NiFfmTU2Q&X-Amz-Signature=d07221eb6ca5ac09a0b6792fe24622a3039e13a5d2c08713df0124bf3826f0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=219169d0cfab63d2a38022e1d5a0c19067dea304b186ab407e28b1951947c379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=4f255f7a15a93a7bca46888682b303efaf7b21bd712ba1b7a9dab5b428d1c470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=b32940f0be1c487e57fc6d0b6ad9873d9a42f174684d629476dda59f6cf63d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=cedf749b70cdb4b214efa081f6cbf28bb8988559756339ca4f6fafc7e10c6271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=b1925effac0b3d8b98a6d3dd08ba8d41f39149c2f37e77b39e514640c7115219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZR2NPG%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCjY6Nh6qGd6THYj1twl79lL9ATbrFmzhHloHqad7KOWwIhAJV8WVRABrPdS4dr8KJEdsPKhWOL83XKox0TKYyocxUbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyiwjwg%2FtfcBbWKQ%2B0q3AM4XtNwD3FokTUhyGuzEwHfNJ4U9tmKIl5N9T47fLP1ib3ytCFDlQfQu8buzR%2FfuX6cMPieIFs7YpOo7nhKHE1B20wxQfjRmxOcay%2Bzg%2FQPWyvmC05Ma%2FRMEvw6M8VQqXWGze0goTqqU8gV7CZpGOda%2FSYG05fL5V3zJeoPvkJsGFMf%2BqKAF4Lrfy3%2BVUaf7UR1nAF5tQsSxmV38MWuCI5UdpCjD9P8zBEmgWv8IdwpJLRhhecoao%2BO3OIWP6aejC7DZ9o7vNTevgnqUDyoKf79VxealSFVfx7VnMtM95HiLC2TSykxlvAuiKSu%2FfNPhjpzSqcxuJunNdekIlwswSTQ6JZ1lZLHvahwfWurIQMn6Wo%2BaW3s5sl%2B6%2FyhKFHGi3M0Mu135t6VFHy%2FsquL6gw77oooLHBBgNtBUCFXi2eaGuq%2Fqab8FlwouCev1jBii%2BeG0SfYWO1JaMqPEfsBynsdDMgiJSBqQw%2B0Sb6qK3NjwklcmFoSmEtEPxZIirZe4d7MksTI%2FHACZ8kkUH4HyF4Gnxnh%2BmnX9064%2Fa9XsS9hccqW0%2FSn8zAQjmqNgyiEQ7HNUpDii%2FWPH2vQaEmXb1tAMYdaltgY34FJzyzUz2fmGj5YN8lTi9uXMCgh5TC9ptfKBjqkAQohbeHw%2FgQcwyxz7%2FiJZgVk67HLJ3%2BjGXgloc2BNCTJxIY0oViu38QVqUCWH7D73KMgLD3Xn%2FsQ5WPFXKieIvHBwiB3yDTCrdMWFDoZvyriffr3xf59QuLu4BOQ1N79uGjKIE4Ws4WPFxSKGiwHsOG8%2FOIciOf%2B03vJKtJxVOt7f55Y1Jf2bcwW%2BzYcMMp0CmshasZ8xpHLO8zNUxR2%2BLmhMYaz&X-Amz-Signature=acb13ff012392531fa9c738c68c822718e4d144bfb6f129bdb507055d3c24b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


