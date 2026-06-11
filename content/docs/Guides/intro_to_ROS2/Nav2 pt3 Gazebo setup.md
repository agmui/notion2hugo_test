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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=99b01d702d272c68c9bdd24dede148b3b5de9a28f462016ea58b3d1273a3e006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=394d15ad0a0fe5fca8d94bfad4e2f048bb914e8abddc0893148ad6085e3a31be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=1c6d0f36936db32b368eb483a27d50f00c06fcaec2fa1feac851f49a16c54912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=aba8603193f5ce571bcdf4d5c01cfb73e49f31580cf13b0f368cfde475ac7e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI73ZCZB%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIG%2Bmi2PoHv0pxs5DeqPKbpyo2KEIbvRfh%2Bd1Fm6x8ENDAiEAiz84DphoZu8UlkPvUbGgzcskQwCJFSMKu7eCQrk%2FomoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeFa9ABvn4ruNZtVircA%2BFNBnUKIUIxdk9o3FBsU%2FxyRtlkCQRvV%2FpykJVeqMaqw%2BGM1wfbgRP50yvR9xUPJuMHp5gwkYYFEtPQ12s%2Bg9Li6BKMnXJIOm2cD2XxgrZL01GeVCyQLmFJ%2BIiGV9v9uydFOv36vVSa%2F1Aby8IF%2Bw5oGE4UpHptHDDZMjMow6Jq6QNrrbrmZ76pL8J4FpB%2BEGcaVL57rDYz5f2g5PLhAzqmbgrg%2FyUBJl%2FglNBtRskMw%2FpbJBQrnDmWmNQUMaU%2BwRfxs6rZTRV1ttvOSsE7ipS8dn7N78%2FluMjxXLSWId835kinwY5uUJbUiejX28DRxgq%2F%2BGPK5FqyRDVJmA2XPDzI7MmcOudaL6zd5ErtGE%2BzWAIjCq81VHfzYdHVsRWo2KMqho6qeo%2Fnsr8wTou0wjeKt9FOgIRTM0NJJlnES7dYlFvTrqgUHzUrJc5nOvjiwU4WNcDIQCdcd%2BoMY7qZkXCZs1VpLLHa66%2FD40pLLMH3TMmKUP%2B713IfAJ6YPas8zBYQL6i5sW71icuIWvB0PgY88kVBdph5ytya%2FY73nk2ZAEhxYn4sMqXIaYj0ElfW2IM5hpRuIwZPA%2Flewqcdk%2BU%2F0vn25I3iK7EHHmkh%2FTC3K2Jf2AUE5PTRyjddMJinqNEGOqUBscKPwYkwQYgu9V%2B%2FOwBTqytz6tIKwjfmm6AyIjCtjiJbYFJ0SRpFMZ8VdD%2BKtmxmM0k5e0T0EMWV%2FC05IcTkPlpw8yuelgvoraqJ1wvnrlkWh0JLEjUOaJBNk0okZVfkBWzS62gKb9GZgY35YB9CNiWmwZDIh1ST3HZlYyjqwlgMo3UAUcJCabQpGHLWZBnlnuZP11%2BeqRwRda7sWG83WsvL5rB9&X-Amz-Signature=40b193d0154b8a58471ce8378a209e72435d10ff0b32a52553c6ea97a8ec2a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=5eb47f6edd045ade2fb1ac39e5a0a5a9237c5124e192e7197b80ea0869669a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=c023ab58ed85d48170fedfda662cf287e06dd4572f765599f7e6401902e1fdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=ed022fe3e7d32cde1dd47bc9e4601a92eb9691b8879170ba38455458c818db74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=56b60b1c3c6a975a9bef6a903d5ced691dc993f6a80ce832c9e1d9b2b9d3e81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=f3a006075783c94206063fb69c6fbbf77b016023400c067df5d106e9138f4c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SMRKQD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHSsaUr5fXyV8Wu807sVQUDSU1qfHmDV6QpN%2F1J5%2BGpiAiEArPvQnm4mTMm8vJQpTumwkGhx5u29jRhckvdyomBy3qgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNvDYJBBHxtpLWxVircA0qQc7UDbTiLaQr3VeNwMq7GIXnsRrwKg1qIIR25bp%2B2K2661ciL9Ht%2Fk0xmYszB6nzOqEd1iAt4JU%2F25%2FejAGS6A5tAtLghFMxJgRskV31Helzyj8rgs46mIyshzTtjbRHGHVaUlYJSyWU9yr0kdDLLXgSy%2B9Md%2F8hFojubDuSxwToUiHpud%2ByBt2nF8CADxHtU3Jd7DB2bsHGE1guBJTZbskIQ7ZdPMYn8VTX2sxCEBoxWhk2pI6i9w9zw8cWTEEqG8zhTEIuFO7fwmkqV%2BXRcIUzqwZQoswke0b0dEWK6%2F%2FKc3NeXdMmhdIJzPV1bRQCX9L9iKV2oIbDBUO795UZrhZtibw24b2T4ji1eX4gvsKkHa0nqQbC8%2BGiVHnS8k5tRe06nPhnvMKa4iAkSiAOuger4bsxFuqPUyLlaSstXLmsICaREDD8UWeh0FXvLXJk5%2Bp2iRHNCe5oZBlHtjSm4N2s8q77MACZIjb42KxjsIJXTXkNryUJxCQiEJ1gf2WeD9gKzjDXpuxsFiOmqAqq%2Bcc1URMnRQOcrJinocHK%2B3%2BZ1V%2FAMn3MvPKLMUr1IY69FEw3ZHz9vtUazNgc4eNYccsagP46Nb8fxagrqj%2BvDz83NWKRV%2BpuwXbP8MKWmqNEGOqUBWEpCYlubCDMX66IiAVcIb7ceKbHLBLd6545OpNBEp7b9tJUKCKBISAsq6b4KGiPY8rVOYgUkQw66%2FNBu7sOkmZKBiErr5r%2FZJWbzTQNV4uBDQG4AUfJ1bk22%2Fzh8Pt2NAqFX4fZFUjAX5vhT2QAqGSZpIk%2F2ZF%2FYDm0fymtrA%2F9u6B893LVkspArPrQ34HCMUM8fXd8UfdzU5eI3vXBMDjoWYNoO&X-Amz-Signature=3140c0ad1ab4455dbb5c18ac0673921441c84ec21a69fe7d24ff0bed96914149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


