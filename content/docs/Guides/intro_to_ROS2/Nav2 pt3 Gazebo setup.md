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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=deb9dab419880fc5e6761d68b323c59633980a47a076e85c7f362aa839579027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=7d6624ca1d6001893b83d149ae56f094a9024368721850d1810e5e3eb0f96462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=a85777a78f13de44557629679c5bb83860d2ecc518fcee8000300d158119a0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=cc37f8e5e3fad9358d2ee3c17ac81cae4ee5c15541da85bd482997cf4a472e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5Q6S52%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGeOJnjlKZymEtV4fy3dzkTU0gnnkIgU8RLUCnR4yJMRAiALs7h%2BADfoZWw9wC5WhoHR6BWZBhVts3I4PnbAN01u4iqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMybwnoV6U%2BfKUs4L3KtwDESXPolicJ3UwtijOGhPNjqgZUGD7MOIVuqxOJ4Pca3VwnfttBWmrLXbPlMnO5HLzCt6tNaz3DdzYzr78mS%2BDZ4mdbQWIAu2tOW52Mel9UG1NyqGE%2BTmhKb4q5fZhp%2BBVGj56QXTKeqKCBrg4yBlMFtK8J0bc02rm109nR9XPzO3SZFUuGjHxYVdxGPy2E%2FRvse14aOwGwPDWh16uvO0QwIxZ3qpQVPWaF3fdoTrPAaVI9eduxvgWkYqC03%2FVm%2F2JGtT7NPw3GftIx9cP7dvTG0f6R%2FviRrwWxG%2BhlKIXZtoPh6aW46c9yvKdfR7NiL2xCe8B9qB%2BR9VIhj08E9s0xtGsHLD%2FmVr%2Ffm7eB6DeA%2B9ob7ccy6ABJcNOXzU8StWYaoQVQZGdBApYLdeyLAIriHt9Or0Ea%2FHGgDA4ZmsT%2BWatt8dEOx1e9j3uxqZvKVXPiX9aZLoBgOk3l34cPmxt5ZdV0XQj4q6ix3VM2ChbQRbgacrdDTV47hHEFKqeXeVZ%2Fd6UeTTZu%2F%2FOHvKvNxs2Uh1SA2sul8z5q9V1f0t1ExRY1HCAGkL1KOkEThxhyV%2FlIsFND%2BUBk0w%2FR%2B4o54hu7LebKxHuq08NlGJNV9gSWl3M5tOjKN6jhWNVV3kwmcO60wY6pgEA0ggfdtSM5ggDNoF937x28QwgABTgDGLdgaPsYsGb3WLIP%2B0VU0TTvrlGlI37ldbnyl8djikkWLee5ks%2FUbYfj6hbHWgCjBP0SjBVsuM04b2tzOXlPnXgBRvtC6CLVxioD5l1ibHBKtjSwobJH%2BXqGRzPR0rJzPLl%2BJFsutpT77EFs6unVCRQTBWv1XIvacc6HrYpz79uQJfxCeDigpdwEckex6ce&X-Amz-Signature=a28a823841a1cd266420b66dc7302a27e81ed062c82e761e414a44ebd0abdc16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=db010723bca263cd488ecc7d2614b09fadb4dcc38e2f17c745f30c6f7121168a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=a924ecd81f481444ddea6b9d124b88b853e2be1e6e5cc69f0f912b14fcdf07ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=71916c23a494bbef597a2c2bee1ad3b468d041aadb0d10922c0347bacd6f9956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=a8bf306ee80925749dd70c208b8cbaab831ecbd485dd6a019d59ae8775a47cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=3b01ceb50e4b3a921c870caa9e26c22ce6223721645d8c229c578e5972a96f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TL6FA3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5JC8%2Fd0CSk%2Fld8sFJTecKYeIGfGvGAiTtiAyVsrAl7QIhAPPkWLmfeuBd4WbGErHAY4yUkzgv%2B4WbERNscRi3NmP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlZ9Y7vkSg3Z5wSlEq3AP%2BznnNOKdcAQMUVGL7Iz5x2PRFdFv46Z0EKXzBuzfwx5rppef77HK%2F7ARiD5NfgDV3j%2F6CZ%2BfcORZFNuvIX341wFLXw509D%2FWACd00fIfR7aUN%2Bf6OqRA67ELlavsrpjj2dTcR1QSpC9EUb15LFzm3pp%2BMwlptrAqbd1ygzqavxIMVPGhlSE5AC4%2BYMeV3TkVFzk4OyLX%2F8NU8QAVHSvrF0V9bWUKvGeuejeBeRDUucVKfkAUp5%2BRrdh%2FhctOU1PwiR5WVHvbRHidFfWlWZHoyxqOa0lwkkuME40mzF2AFB5li11W38e%2BdHDXTbkO4ybHjbf7LH1jwSDltpjCme66a0Ay%2BFrwtvvm3BqgKulPoRXh96bZkYYoAENk6UcMsp%2FfXiQfrSB%2Bju6Gchf9C4BoQEBXfiuqjBiTfpk1jK7s2L%2FN%2Fz3UVcIacYJyY7eiPoXRc7CvF6hG3vubWzRjwB8Cw9%2Fbu1X%2B0LzcL4o8F0xBGoTOwPuEcIh4B0FLqGbwAAHWymXnTGHQX6HWyAV730z2PKkB3I4ksZyzyrOpuNICzIqyM0yQnmfFD9J1q%2BRew%2BX6sQB%2F0Ng%2B5u1IE0pwNkZXFCI9kNDWlmHK%2Fg9jKRsFISs%2Fo5BcraY9%2F5nr5FjClwbrTBjqkAdx3g7HtO762FLqzhi9U7gmqKQ5G5yqSdRWyeb%2FwDcLUXS3A9JrQbo%2BT%2Fc87lAFyoeETGhNRGk%2F6A%2FqeUcN%2BlgPX5BAUEwxs7kYg21DISa%2FVh83AcwiIMiAYmHjudBUOcYErZMtTH6kXjz2OTueqhjpGGi9zaMPGnt5Su57zPb8kkHxp9X0VdsYg7mlOdADjrprtToL14vi2TzsDQknw9mqsh5Sh&X-Amz-Signature=a1d59a43ed96fb7a2ee3b1ff155cb192fc92d5ef8e3227e556fb1e3a7158d388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


