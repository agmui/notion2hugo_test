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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=14f2debe904eebd4bc7b0eadcc9ced24ee31ccf7dcf421c933f17000d4ba1d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=5154076231e5145ec6596ea6361645e8f139831f69e319897d5f3ec58b8f5821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=ff134e58be77a5cf50671f3c9f54f924d52319616006954794328a7176a7ccb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=c602e72725c80cd2d080f460177a4a51866900e375f0709639a58e0da6fdf36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYNBTXX%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDTd%2BFNNmHzh3dOiJL2ssJK6Oybxyww14rQdbtEZdkLFAIhANiHFGW8o6hkpeb7fJqQ3Zm%2FtwWjTJE7wuJ%2BP5IwR4j3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJs7GRvAtBqePel8gq3APxtuDbyLKjImb7AhDgW8anOu7gL1qQYmIQRZllo9tGW1bK8U9H%2FK4V6sihBJBU47OsSDOwMQBbs4O244fHs644rBDaM5idQYMqn%2Ftopxe69skzm5mHH0o5B5KKWDQvkC1t016kGbf%2BQVNPsfp5CpKGp74T%2BV1d0xE6oQpwW2FojYYmimB%2B2Kf98CEwkdofojHj8dNaPgjbzZt%2BsKzTdjRLMbKbiUEx7n2R4i7hWcWYUCwDs%2BYYY2SgNrKE8uvPNRI6aduzuGSyNS1OMsn7A9MhDXKk5bb5BGeoOu%2FuwtRE9UdJgnoPGBaHYmKN4fgwG36DJ%2BNPcncgJgPgXlKF9XBV2qy355C6xa3XWs55LauO1zxnLoVE6GdSjvYSRNCAGrNhfglZfR9beB65q8xUqkxdTkWmFOAQXNSK5p7UPnjaMSINkZahzJ%2Fe6lKG%2FQR7Z5xNzbmEGWaHuJZo2OUSUF2dEhhXtS6%2F9HXDFTtZqSSW6m%2BJaIjIZq5TWTTa%2B7yU2yrOi5c6gw7RwVyApBapvR%2Bf2Hlg9ZnRUxKzXXiuQYhozQfTKcywTUNkwiQYNLXUaMZXUUtPhrO0DeA8uL6LHelkBJkj%2Bz8x8qeo3bPECAxerNybJH%2BZC0QuvkZJMTCJ64nFBjqkAchnMiy776D9Xm%2Bt3kR96o%2F%2FUsEdkC0VLLnSDN3tZkFD69oJBcLFfHZVM7Oj00sOBADxr122PdZ1RpH5frLOcTUqSt1jqF5sJ1fkTOODdp3%2F4wn7ayJv6boaVgkiK3ELca0TlBY85r1Loxdq7maLCYgA4z04zYE%2Bq1xN7e3fC2LIKXX5OF7pnmKdOYfwI4OGosHHmzzLzLLXsMchgz1pwrRh1sls&X-Amz-Signature=8a23c2085d661325939376768670b9ca9616bf4e20f25542136b748d42a249fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=7940a0fe169db1a9ffbe51904ee64a2395e8a8ce5bbe5686bb6ca3b25681f298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=e70f8df1ed189cfd19d0927483abf35ea69abc17ec3fbc8c01624d9776313536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=71a203e2d729b0db9030e81c255c5544f7d867a3b421fc2997fbc03e4bd2a513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=d2ecf70d2571cac756a263b019a60eccdc91544fbb58d1e43b7d3cb21bd4a0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=f273b567995c0a873c40cfba136d03cb47b365fbac84de02fea56d3bc8aa6e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGWY7DO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCPJLGgDE%2BGCpd%2B9ctRbtd5Ei4%2BQ7YAI8WQN1wQ4uM9kwIhALH23p9uMOd6btohH88BktrzteQhpyI52J4nRxTS85uwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLYC46iZEK%2FB4Bqagq3APJL%2F0nEuMcTRZY%2BPuI1HctfWbo9Zg8kViNAVZGSf85am1fWSjhSODLFcYE4D6UNYS2xLHwIIswshSYDTRT9n5BmHtZO1yC0h5j2F66sNQRYu7Ys7dKrK7rJ%2BWedcxstgE7FhQR%2F8T6Ioia1MPtXAn4WrUwtN3KmZQ078XfYyobR6s4DfwnDNUBpbWXkaXZvmG7v3PXv3kQfWw%2F0zJ%2FO9AsTAhomKyhX%2FFJUbCRmNLrxtJ3mTF1zDPX5Nc9GtsU1V682NKd1%2BbCbxKQgjNUHRtPSo3xQIWPiA8OSSmxIdEWN5Mb3%2FyPJjxrGbwCZlkd04KX%2BxQnA7KHkLOIqeakVZ1S4lukpP6YXwC8rE%2BvhRkP72P1UZww2cwIyvhwf3va9TJfvSYekVr5whftIo7wusom2IbaGshDQtljk7CqNxBWZJfOGf%2FA6GoJf0jlU1KzInRlNkIKXdZZrqVdg%2F3QvBqESzW3Y6V7j1pXNlPSw2KEXrWdFzCWtqnwYZS1zM1kLXkrKVOvZK4%2BllfFp1A5sEQn6oxMWgaF7R8ScB1d3sPwwV%2Bj5Tvbx5Tm6jNcM5y%2FLCJaTIjMYK6CnmeXGmkJOXrte1F5M3qtT1wbQpqnqbDRpK8LWPtYi96mCoQBhDCJ64nFBjqkAdASMs6M6KK0r0ZRNu4a%2FZRfwm8kZDFv31qAD4yXDFxJOh9rBAXQeKrrmgMvFH%2B6v85UGDLit7v0B43Zv%2Bkz4%2BvWYVRcrQv3OmnDtJMzToYQNmhtKvHp14odoWhzLJkhYVY2%2B1GvC2qoNo6PvtrK2xdKs5%2FoQ7epuu9q45q76ap2NT9fwsp5j2GAnJZV17R1P0I0uzfs22DADQILvtaG6fNcqWeP&X-Amz-Signature=ce64132432620094a5be0c74682f02cb642a8b9e3d715a70d23c49c3233b65a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


