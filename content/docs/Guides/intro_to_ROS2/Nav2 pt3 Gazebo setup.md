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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=3d10fd4f99ba5615d5db6dcf7ee7ab6d054ceb8fcfbe45d115a8cd119c8a7d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=6b6267bea8458b62a3e94d379551000710af9efe1dafe181ddd99c07cc5c714f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=8875edd3a680a9d054cb487b26dc751fb0aecbcb2fc9f66f5c33ac1f59869ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=f7b2d6e0bed5c5de114d6520d5b485ff7de012085682b1db4e05f3611fed9fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNRE7NW%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIAjgWbfmpYCmYY9UZm8kTK7xvVd0sCzY2kplfxxxkbJ9AiEA2%2BxxP1DGSdckgla4WrpV%2FWSHklpBkxhgamFeNQ70OMkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUUjAIWXMxWWomhLyrcA1axUEtIGaVsDep7wbG3P08O9qoJSJUVS9rXhKdurK%2Fb9yR7TbWsnx5LSDK4neMsucm16LOdBe7W8Nl1Qh54j1q79hGIdXNFLsdOUbKtFAc3xTA%2BwP4Z%2BwhCsQFucDRLpH8pk0E4hTSwmKNYU6SK20ypZh5ee%2BqV691Dmqggq3XQ4TEUyyCeQ4ELvMRgB%2BiMqT9AB9iuv4rCx4SrGef36CRKs7Te6m8sak7sVRX6d7XKE9U4FU4gyNq9E1Z4fqnnDfx4lAkbWMmoHN6mm96Iez2Y1EZVKPVdQ7lvhFDLGMlzckAzzH7bSx7ZerEkjsWDgJ4l2xfKhvZMIX7lDwpDvuaajl4wQND988AByCQEKSurkG%2BLMToLVlZiK%2FQRK1MHcKKVNqbP2tw3y%2BaKuA7Qqr3enz7tDvouhRGQnOFYzWVR2p5hqmAUvBdCm6xQJL4dn%2FBTceT1vDu1o%2Frtynty%2FqnQE8EqeK5E3lwLn4g4YWpMISZiGJdFk%2BxSaI0zigRaklPbDeJlNIaUebU7octfEmIYktr0GRaYEwz8MA1wuThN6D5yoAOE7xgVTcHq9lnTTm8DzVZoAUlzG98Y4y9CvkgBj8fAW61oOP8DTrWJLHngBioLP7A4JzqSKxvuMP%2FwosYGOqUBFhzGPZz8fLovizpPxwzcm0wAXps1eVpt7XBhdFbAuGEovPQm88V3T8GX0LhRgARWAl7tOyunQ4X7SMh8ETGpY74Nbyegw1Pn2hfDTu2Hg45KzNEwS54UiNUYAzzIbF8oOUXwuoOhN2%2B%2FUCqEzU7%2BjqvASr3wVm9sSqFDqZFOXZCsuzDVc7p%2BM%2Ft6gbzB%2FR5u26wcNVQdhDQRywbvEUBpgiuTgZl3&X-Amz-Signature=1339c617d95a980c557beca60a6b9af92cbf677996e565345a203841af5c75c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=0c9558b2b413bf1586d27fbae15980982a5418693db6fe44529a7b4181b38f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=e8c7f4e28e8ac3146bfe21f37e228e7a8a3f0e12e0f5d155585318f198b9c0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=b028fe595e8a98e761bde9f490aa6ea65401e627607f7e82cafa34365c0ea35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=be81bfb81f3edd73269013b475c19e8d2c6b51d9f586f34b111f66d63b9e2e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=426e4dda679b3196530fea86665bd1f8decf4229fbe4bb1e6905447c16491e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SICIO3%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCtDrN7Bl8jQYIiTLdQQTXRyV7kmD8AAch%2FqSgC3D8gyQIgIYMe4NUFGxUeS4xdsmH7S%2FM1qZQraJh6O4RZGlEOiAYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNHD43M%2Bu1sTXIozCrcA4eOnrWSFHA2UAe3pfgxkGJiZNDPCjr2u%2B3jqtphQxTYZDNg4Kli1F%2Bh10qtGvHh%2BGezJ51e8Xx%2Fbk%2BsM9fmAE51cB8scRLv%2FcSSnw3mxgRW%2B2MTs1b2rDCuqqaDINbvWNTIIM8kp7knHUmZoIB0BDY4xfm6PxGGVYANB%2FxljL31w6oXqdt%2Fq17L1ViwMZLeDNScRLI3obxgFMHwplBMkt9dxg%2Fdci8TAYoj3wl3aSKW1zQSuyvLnl4ECGgTZh%2FdcjRNxCGY%2F5IGPpKpTd%2BVVLxV9WdAFdKU78IBIbS9B6jekuBXBK%2FnEDdTfCSqgraZGbrHkCv%2FE%2FNSkNcxoTVb%2FwvgBFPsvGMV4yX6xPpI%2FL3tluHuSXIO2WOFHtaU5WNRkugV5iDTTbVVrUc611eRcd1mKhpHXcuqX2Sz6%2BEgxTyyg4gqutyBk%2F%2F4%2Bp1NBTKfrPP96cXF7U9QxIJ%2FoNPlDXJYmIsypGmZgQUcoXxWb64soIlnn0v95oxbKRL4kEHfLlxWeue6GrM5JScLCDbjrxnfJzTG8%2FEf%2B3QkwzvTUIP1Lau5zyXl96uwnqsxxdwTgNdXMTqxa1hXYnWr%2B%2Fqj55rAQM4esx%2FyCJ2CUBvajLnnzYdr%2FD3J16f6r8RRMNTwosYGOqUBvz0%2FhK%2BJmt%2FKFIYWm8bOHhU1Ve31vW8g%2B%2BRHO3WrBgQ4NsydRYuofV6yR7INL8Ody8B1z487ZvzxjUvLleMVMkkjE%2FI2wPLVsp4%2FZNuvrQrh3YsOIfmvWJNuOg%2BY4%2FORxKDA3MZFSWh8AqoRFkHHoSaak9mc9SkkxoqS1iqepAjFledyUyKMIV6QALBQ0pV4%2FVh6kdNmEBGSNMxLjT9cwbtSdmXN&X-Amz-Signature=d1c7d3192e2b21ce3d9a2e5664250b7a7e91fb3fefa0855778b79cdd041e3165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


