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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=3f82b351539ecd0ef46320483e9759bbf63a5d562db631d381d9058e133ed3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=22a396b9b98e5fcf00ee18c3bc2425e0a0f0f811b1d17ca4492c8b5ef20cf596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=1ecf683013fd88138e56a5254106a5bd6439ceb8aa59099340e10828564c5f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=c649a3a51a251078dbb7a91978c58ba92d1baa5b815cd7b6b8b3febbe30156e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H2KMFIM%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGzNyLVnWa3pe%2B%2B40n5ihIpQdBfoJqZ7pTtTGLZx9jPWAiEA4rSjY3eF1hu1mhthqRY5douJ3zlhzZ77LvlGTVZMLL8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD2mLXTzZQlmPIA9pircA%2BeTVO7ynQnY4X3EyvjO4AaCKlr5ARsIUOk464MjLUaUdzzluhaeSaJvYWAQqGckN%2BSQY15yGRpvF5qlj2UwW1oDcUPgW7ocUX2UWsckZ4EUQxiL6qHvzRWyXWW%2BhjLjvkmC8ilQ5UAg%2FVPyasFp9Tq2KmEVk6M%2BbrU44gw85eW67UiPXSB7R3VD5g5QN%2FnMXnRY1DRxlJe%2BC7sIEKICJqd9gbVsZ0Sf7W%2Bc4Qg5t0bUgfASDetM8LOKHEe4JlPGFX3DWzo4lwJMw2Z9G71x%2Br%2BLcnPQjDFzb7zwK%2F%2Fgvp2Iy9X%2FWcElDCO6jid8fPVc%2F07nTzE4dvSn3PyEzoWNGttCvcJJjvazxFUkspvpvtI%2FAtdzD7FWaKTpcsx6qfW83q5cmBUtWa9YuPvDWEAkQ10hWt6n4hrjzlZzkQCQe0iH0SrMCIG7uNZ1ehg7SwZxamf6gATms%2B3XwCjjW%2FTqWE2lt3Bj%2FmrIDsHSnWTBHCJAFLQlhp7Rf1ZlBVfslqODIsFNVVszo%2F%2Bi6YCOJj23xfTR2mppOL4hGHSRrff5w1KLO6YhKznm3ixWCECle8TEYt7s2lCWYhxhoHhh%2B6PnL83LfiDQNM8On6AsuFnjQ%2Fekl7V422yKn9BZ5GogMN6wickGOqUBi2q1JrgZEPBlgWClyb1QtYVTGy54Cdn5boV4Xrz%2F%2FyeprMD%2BqXIB9N3sjKY0m9B1UJDHZKYtWo%2BhwcYzX%2BZtEuzEithhWE273MOSQFSFVxjgoTtWArdykm4eCk2vmt%2BJFOa1977c3o9nUw3Nn7XIeeZNCIZkR8ez9D7dXUwcJjnTWYgo75gVFY4TRggP6yJis5Fo9c3Xsq1e%2FSNUg89eqwmsn1Nk&X-Amz-Signature=33989e10544d9b688d096482138691d2a2769119f12a6bac0695a1f03d571217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=057cd707c95d631a7c9e8d037625624e7639d5ec30352ffb48dc8836d1ab8b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=04f909471a655002c099ebb8258b07fb278ad592f3ddacad50656e85d751398f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=f3a44d515af7e3286c0d1deb38e93f108803d046dea95d076b490dc60d71025d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=c446ffd6103cfeb08f353623d613dce8a48c6616f4a16ef6e1d051c19e646fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=11515bc0f7d95eb9482d2d5386c0e3daa2c30a4f45b111fb43977a7d50199d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LZ7QKY%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAO4NpbHFXfoZ5xEvE62tkxRyKbagTsf0yh40sjcDaXuAiBCm2GsPaT9kTb%2B8Pp3h5NcikmDhRCA1Kp5Kx6bN71HMir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM9M1%2Bf0hI39elnouOKtwDiTrqxTI5wvpd2WDFZACpQW40TgVZlTIytlLREt6QWK%2Fq4JRyX6s3T1Yl649%2BO9TiRAxyLTYI7j1zi5LP3DUTGJYmg%2Bo9D0GMGkoRkoh0wJ8wCX5y4Ssn5aEc%2BiY8iIU8TIKOKDGY3A%2F7DPj26c7yqp8HmcZfQQZ3F5pk9vcG%2BWqRlrPfndZXxTjxQVxoTlWhe5lgCZjkX649%2FqwT83YWWBHNtRlHi%2F3p0Zzx3XoxZ1jA5jOQj2SVcTjoNUrTohPfY7PJV%2ByaNEZeUMMIl0E8q9xa5zm1wPjJsXxfEZWEcFp4Kzbk9sbKSh4glaSB%2FYMGsn6MF2HO5gUGCKdVXhteL3i%2Bf4PaxIUpNbsXVOorKaHAFVJGf4AjUnJtCd%2FeecxlFZ1KJDWqmyGlpvlD2E8MCdN2UlqdMbIJF573IRbhzj1vDdc1%2B02SqXrT8TIAVSuq87jNYYl1iN0WOI104OG%2FbNvsfVPqHiJ6rPXT%2Bw%2Bnh9l3HNUJf8HWENSfpL2B1UYS0P75G%2BeUYC4CCH0J3CeprAc43UE7g52fweb2AJ7mDqB4T5G5eLBTjWihphxNge2SWhrDFOjwW2CSQjTU5MOtBSGAmfCMEDDId%2BCIF3bR0d3TMnkeWdIle8IJAjswhbGJyQY6pgHptCkoARfJQ2nYnr%2Bd%2FFJPmamQRNXqibKTXs6j6uWwYKycifTf4vphuiVOUPMBNv2NFMmAOZXEfj%2BMyKBX7rqzuAnwAlckDKt%2B8%2FA5bF3LnVThPOMbfHddrk4jOimDiqOH%2BwDVYOYDRq%2FtSKpGyn8YnRH7xaPLuBfxXHYqhMG2U8IQcnUdF9ZIt9VfllQnUUgVs7O4JyAZ%2Fe6M3Ze%2FKp8N%2BKnYApXX&X-Amz-Signature=32fdb5f95a5274c9bde7440d12d932b91eab37b910914b0e45e16564b0238348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


