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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=cae07c7bc75f9b35cc8802a2cf5ae93cdee9c4fa933cb4e8106d652f8b6f5bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=0ea0a10f467944e88ba0c80651c352776b870c3be8ddacf72830f5c005620b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=f12d81ae49a0b057617a951291f5e7da230ca459b5f955884f8bd74f737fe873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=e7630f55526f490bb3c752583245abd69193115ab4d53f102e99899bc431adb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UERRZ76%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrq3OOqKD4sfp%2FRthOJH85J9MkBqZudCxsFooy%2FkajnAiBjSIxJjloAuzVy8RQRTv2hR6KNHUjWFv9jhwttKtkz5SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY30n5aVsUAaQmFATKtwDarnbLTb1Fkj2Jrpn%2Ff%2B9XA3cDmGjltHxL86tXw8OlAIJhXOvf4kk07EHKlV6a%2BnLdfT4xH%2BLM5jae5Z8yylMO9wxgw62LXXhCMvfCUAqD05JIv0%2BucnsTCD0ySU7pqlL5gXDms6B3VRu8MRH5ZyQRksvvfNeKi0nu1%2FSzRXrfRWvKfei5B3Q2kJIOxHur0A4DTyIuHWOP0eQR1SjzjbufogIzOYc2hswWu04PYzl9imDqMflmTVnecpVNjacH8sK7pOLTQRaCNULfTutrNAFyixveGZlMORIDFdrKRanILdPxTRDBVHyIyYG8G1Pv%2BQk6%2FsN5v9ZHcLaPUMNEH4tkEv6orDZkLozJo8YJzhv%2BvN3e%2BJG8rd4SI%2B%2FFJcMwFbiuT1%2FNNvCCpBttc2qeS55VlXZ%2Bvpaikv9ts5t4kVXb%2F7GCCil2YY2535Wouti4AIvTJIYgxc9S2JbYjOvwZHTkeKTu%2BODTZYNFML%2BsHTinmFZMIx6d9mjKDZPqfvInOVePNFu3gR6QSyHW4xvgsxplQnO8qjDnMpGVVivxhhodOc7RkCOTPB0hYxiM4GMEQJC9MRv2Et1nzutMzpZ6fUUbE4iyZ6Fp8rRPtOEcTRjnBfxWTntSZhyYHdvaTAwvpy2xAY6pgGIIUZRJBhzifkhbNu5sxBvAEl3nwLdOluMLiYb8VGenYC5rCE%2F0CfH9kIUJuE%2F5GixQXsX3IS9KDvGZpzuRldPDDI3Lp0TcKF4Z9M2ijkULHa131Q%2B6EReTWmvb0%2By4%2BhO64loSLDB6g5bePyNoP7%2Fl%2B06ypGIcp6IwwfERPurg9VOW8M3bffpqY822Z8QG0hTWogWxq6E5zBmG7lqFXqMkMYVf2yk&X-Amz-Signature=6d6a55cc82680f31459018f2a7a92f6fd7ee2e60d01323a49a3eb73ba724f33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=53a9aafb1cd01c8be374a11f7fd96fa772b3f19e71e63ba587d0a2ef99a86594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=e188bfcc857e92e31785c9f47f819013d635e33d0981dfcf452281073c1dcd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=8de3ce3efbc45a37f7d8092e5a1f932db8731a584bb0d4d32c4a10553a2ce238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=a8a9434758adfc2e1efa96309b301ed360b5b6dedb25d08a4b6afca5defe62b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=84cbab4b6c85ffdc703eee6bf46e2133224b41e2747f75701ce9bfc7bccba1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLH5VR6C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgPQvxwj4LuHTVOEczBpvGK3ynOvBx0JetmKnZznx8MAiEAsj8VEdYIBKrd%2FXpbbtZxvcmSczn5toz2zdrKK6RngngqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyeeO9oZeGNopMB2CrcA5d92og53tl%2BumXJz3W3azKgHSOZ9%2Fn8bJPxahV6Rfd6Bo6TEkZM3G9e8wGJ4hFU75Y65%2BmrWd2AALxFfBoayeIWPo5w5XncJfXgmYJJRL3AkEQCoVxwoqEIVmquCZgQu7VAFP5k%2BLa7Rl3mCO3J0B%2B8iNZh0HYB57txavOUmMWifAYh95Q3zAr5qNpV8xi9nu%2FuTMxD%2FCJ8B4aQrxKDOnowRfYJ%2BSKOlazSiXeBVX6P5JMFW9MAEFc5sfXkk6ijdAkT809T23qKbEGn3tGlpdHb5i2m88nEFEH5%2Fyu2sUd7C9duCnp2wrY9V2snKK9iPt6UAopLqSADve0R0Gb1APu82rZckTqRZMlbvMixOeSX9GE3Zc5ip8vl%2BzBZ42KEto6Jzblrz5d9qVFWTR1YGImHxYABAr28aUqAdW9TDiYgoQRyGvsR5nkqC1lqakB%2B9URAUqTUtXMzIcI7kWTLRrH82ds%2FhuEA0EC7rOXBBqqhh9A2Bfwdgft9kFOifFUPJcVMR8dXxebZQ2yA8mxgmVsrpbHRh96Ilmtnz6JtVXSyi6zl9mWPBQ3JbH1A4Cw82wWxGsu8CHth34N02Sg42zTVYJ9hhogWzOFUAqLMTiIr9qDiMu7XnkRhwL%2B3MK2dtsQGOqUBoJbw4ASFSH5wh1Kl9EEFg62XUJM0c4x1j8xnInI8wsX4ANI8s9DPDS99ySOR5znIGKIUCIofnHJPptxEUaAOdxu4p7EXQa9q7vXngigDU4dOziRR4SBMJAwbHivDMmCG0niFTkhCbuGO7TLkPLgA%2Bsa9KHMFOtPoPetqa2bNELYaSARBDGLuKyqZ4fH4vplBHtOhfK5VEhrh%2F055XQAtEqn94hD0&X-Amz-Signature=c2e7806093877c225a9c9410e90a94c8e0c78bde4b16ba7a592d6171fa91c1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
