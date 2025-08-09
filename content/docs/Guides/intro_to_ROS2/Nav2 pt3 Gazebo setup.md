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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=b0e38df1073564732d0e2595d0b098ef04845c8b23e3f11a0b3f7e702241723a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=3c9edbddcadd64a65bea445958043cbb206719865da6718449869f9b9caba1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=6c7ef47b0fb91afd2a6147ae6e7eebd4e0d58d994ce3f24b80a775fe763a7252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=2c0da798a8e7cc2a3093b6753012fddb7b323f399c78635ed1397d3ad6d686db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UGSSS6V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHzVQoqXwQ2UggFKlHR4FXYbSr8zrSZ6DXMqO3IYEF%2BZAiB0OcNnwbN2Acpo%2FXDBTTNCBiEoERJkGrM6eb11bTp%2BpiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNtMsRQPM6v6ggeMKtwD5y7Z2si4XTF6SGoSUAehZtgPz6B6atr38%2BQT4aQt9RJpYevsf2tdr%2FOX6QGJQUQR914rMHNlbFDZAnzRZXvn27bfhdUwj%2BTafqm%2BGSv6xChb6eJuH%2B5RaOsO68sEH69wiDR%2FXnYbWjQWMIym4ayGNLXLxzfJ0KlY4cWuqUmIJJFnWX6uudo8CPE0bCT2wrrNtkZojgHXkem1%2BqJNPKV4tDZJtb2kuM53r2KdvUikmUfUZ0gs5V2hG9%2BOhKmLQaTmlbh3kuYUAlCzLJmEZIBM5Jz%2BpdKnUGtC274xVtgxTSBh%2Bh3bntk59e%2Bd4IuQDzCbxsDlwvLL%2BSP7OhNJZ33PhVg821xuq0C5j2WUxgQGgSRr0EkwKrhBTUjudUY2k9XBrJLYqxAM0d61nLo0Ac7KgFCX5skDDiENgex%2F6RAzjpZ9%2FMwKtFrZ18WQqM2ic10xyGROdiC9nWFZlyiKMUPFN1mZZqX4Xtuy8UQIe1%2BF%2B%2Fz%2Bxx%2BO4wJgNZs%2BSlw04yn0W3yQDl%2BgslCR3mwmb%2Fzkn2fiVk5GJkkywAIKcY4HSGWlEJ3Yt7PIIPhZ9Rwg9P9cjwR%2BR2Me91Bx%2FsemC9FwvKwWb8Tc2I8mpuF0aduO905%2FXRYTwj1mMypp8ekwssTbxAY6pgGvnGAQ1u%2BKWq4dAt7%2Fc3xopDmqLwOjiKOYfOmIze%2FwSy2iPKrnrClrMz7sZR5LBkpuDeEwhwon4D6%2F7qhwY%2FGR4rtBBz3UxN412fdE%2Bm5nZSAjUuT96uZvYPYClTQyq1zcuodZAMtpxg7V4ssM7blhsItHn4QKYD1QeRVutEv2QeN6cLQwLDdDCnKiBsvkvzNxeDy%2FtwgF8gsnwf1yqv7uEQOKniM7&X-Amz-Signature=8c434f9f3a0d9209e9e7c4f9accce32255aeb1ec94076190252f990b2c566a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=972e7d4b8cdb1b6ecbe694e09b86ee950177f7d4ca24139149c15c9da98fc1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=de02a4c746f6f96ffdcdcb8a3e9fc00ab601218440f2b23634cfb42cdea3a4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=65c293360fea1a856bf4c8b6efb3e5bf5d9f506c9c81f8f3544623bb73d9abd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=5b60c73f8bfcae61217b7d3e1cc937b8039c0c1d84bae9791409f82b9f01226f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=453e5bd00a06a4128c2a3dbfd401596704e88a3802a60f6dff89c1bf6ab05ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UO7W4US%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHwbY%2F14mI0nr7Aw8Wc%2BNV6HXb4KWxZmzVmQTbUkfRWXAiEA47pEk4r5E5p1fWXo3JzE3cjWcLNE4raae4eH2kzeAw8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfaU0NciwQcCgRScCrcA%2Bwu6JsL2GMrTEphsgcYfmhqIv5JeMumHF%2Bs91Gc%2FIu9m5Vp2sVwah0Esp38ruIK63uYEyLEFyGvPPoeB%2FjpHFknl6exLvIJ%2BuVgvAGlJK5fdDnAzs6Cs11CrJlQ4r9IGIwf9naW1HbhMniljaQcMBamzj%2BTo5pCNDYv3cB3qEZExjxsh54w7o7YAzbOPm8Jd09Cah51%2FOV%2BCNem6QgrtCPNl1Tzhsy30pYzPq%2BQ17jBdjIuK%2F%2FV5iNR25SUqasM9DkzohG42E6JFjHxN5yGfdjkARWtC4l7YtpPmErDH4GYyYHPyOQrQ%2F4d2LYDUj4rZI5LlrdnmCQcWJulzcWfHkdbok0ajLGLqozmd4WONWnp%2FlcA%2BR4YUtHtoNNwb9OoTOPlsmbOkD%2FP5CRQ%2F7QwbYTI6e8WuKwR3pYbh%2BKHSYOFmOnCs7cy%2FNri840vlxMBQiXZEe2Njvl1tz1D5oKl2y%2FB3w60G%2FzAAPHgOTaOno5TELUUzAG%2BjOlJmcSptVU62BrQ%2BruWWGpri%2B3uJ19aGtCkUw96xez3GungJUzhSMA8N%2FSfgVZTRJvrnSn4qBfVTf8dGdRFzKbiSMiI4WhE%2B9Jh2a4iKouVCIy8d%2FOoZYn1Qp4m7tjCVY75scNrMMjE28QGOqUBmd9trK4G2BVyyw3O73LShd8Ri2a2sqZ8FrliN%2BcCKtnQJt%2FR7XokwUy8fEWq4iI1FoV49F0f%2FIluUORJoV0HDWpjI7EU2CBRP4nmWjWgaveoDrSLSVnEM2CkhkPJbWPshwa3NMKX3b9aXtc9dOYgv8O1ehHw7Zc3QzryDeK62YV5aH3cvXHdCKp84FOLztI4JpGd5z4G%2FQCzr%2Bc2lR%2B7rMOgIL18&X-Amz-Signature=e84ad0ff48118c5d553152d2f2e0519129a8711d73c20b9b08a322412a55ea37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
