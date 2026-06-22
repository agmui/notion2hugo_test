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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=1d3335223d89a57454ffef26702e6bdad675f204495c8e6d5f0ea23218de82b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=4b3995dcbbf83bb20d58d81fd6a10e56ff577a47df0191567728e8b6c252c12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=cf4b8256bf53559f0cdedc7a35f7b31fe3086f8e47af4a20705fea42539e629f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=26e7e25fc7cfb5aa1b79f92d5c747c563e5890a9cae036b73992739a87145c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNWWLM6%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICT%2FbMYivq8RF6%2BG99meJQWU6ippv%2FWkmScGQv4K2%2Ft0AiEA0eWYcJOCz8pkqjV%2FQUD06Ei8FkIxGe14nzgGsN79ngsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBapIhwFb7sEkepfyrcA4e3hBk6xHX8D3clfj4oeg9bnkA4f3a588NSA9FW3eYlxF%2BkyLjFSI2JLxIyFc1uUr1VKRYIbeYcGDPxyT4j7eWc%2Fy2P719%2ByRdTvse%2FWldEoVghEIoKDpoogsi6Secu4YcEulHWwgzULUP%2Fd0QJhGWdBjiZg%2B7Pzwe5RpFU0DhqAUlpG6fBmWX09mQssAbj2%2F3njayDBY9GvHP17GzGdcuypzyOgDAY9WekTXpq9ClPE96s0NfvWbgOj%2F3u69gXDS5ccRJR%2FfuOIqViGmriLI3FaUyBI269Pz7z3sCGIDAE0vRlyLE3dNhOUEYdPlepT6rxegMmhrn356bic10rCkkNbz8yXqPITqroqjBHoCAdalycJ7FDAIWx24YOivdeJvk1K1uwMNiKNo1djnQP2aVD8TbrJrENoNfnrXq0j78rsYTurBXXnnBF%2B%2BfiDPtkTJiVVn109u%2B5bc98Fl32wQzRAYo%2BbWkrYX63czPYMb8FGUuQFGznSZqCkNS0J%2Bhp%2B0RBBlXi1ZJF1YUEKaVXg5CIny2%2Fb2z0Y9pkUOa5aCAEkqjKV8PIvdeoN0LiGBETCOVy5A6JB6rwyTD226yCAQ9b5nmLt%2FeSspcCMXaa8zALdaDBFal8Nttx2iZjMKbZ4tEGOqUBawwFOJJ5OdwEeZtdCHrwMz0pTBH5giLFafI9%2Bj2%2BEI6SFQUG1ZV5JVs0uwyGKW8tvS1eqd36kWYDw0gi2m%2Bw4cmiB5JAld6O%2BzZCwOqvdJ2vJVtMFHYsDDFCEEdPyw7GRbGHBpEdoiBzQaraGcBB6OO4%2BM%2BdYCFsQFKfEN%2B5Tcr8x0TX2Fx6IPdJOVPDBSA045u2KFbCPVVLHNJULenYgdiEIYrv&X-Amz-Signature=7db1d8d7f67f847f118a5e3b130a9f476967cb8cdb2d333c42ebbc35cdceb45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=f94999cf185bbce1e1d849f8d793557a2abe50ce5b0736b3c936b3fd6f232178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=a638631ba34e924c41122d0582c9a34bcdc99d2260a25094f1784770916d752e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=65c006d6d5cd69d34a4a40f603e56021cecf54fc4fe1d665fd4f53d6bed98dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=d88ccc9f1c0ceb62c3be4aff9d0006c4781aac217293c9698eb29e3f65ac3103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=6e06f224c017970fa145fb284e70f937c0398b7fb9ff7fd438e4ecb0d7b103e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52AAAIO%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICF7iEx7giV%2BNAd0VySuxtibYwJg1kUjymzgSoJLMV8yAiEAwaDZd%2FvuYUT4FTrWS4cDR%2FP9USLi7MPNNSMbawu2n1kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5mTYQY9mqw6xy4SrcA59Z7vuYdqyhxh%2FUXr624VpDl7wpXATLBwIpo7gWmfIcFPiOCn01PIJjdiHtd77BFpDGGZEPXDayNyPcqQf74cLiBPzyXeUUB7OvNarIjozEtKOJrC9uTfjDIr7nymzxhQ2XqJKMP4%2BvGWQhG3dI9XWNwShzxteePWSClY2XcCc9LjIHtkj7ztnDCuA%2BZ6iaFADXdasd5IuUpMoiHgFrHIGhBuw2iuZF5qS68t6Nb6EuCHI5f8aMFXFp9ZxZG2LtVYXk70AyVFAWzAsirT2YBIwvZHRrSLRRMzOlKgxVtyaBLa3eI091uzT9ECkQulsFYhOH7QJOAnG7uuUG6F9IMMwXmp51vvfHDrf7nPntjRQ1bYZML5G%2F3tFKuYqA7EkW8gzKyR4qRWr2%2BkEn22g0WDidGoXgYwhMzE20LhDloUi%2BxiHnkypMDHjaKZNbtNEVHCpgTJrKVuRg%2FSL%2FWPwiFwDStWGDGvSaOWeSkRBCN7Zt8cXUPdPp0h4cmSS4LUJIs9uoLVK%2FwyMhd6L9WuRJ6gA1BNjev%2BulMxspzN7Kn9dtUeV9GsCRYRARoLVQICNfTaONOe0bs6LxpcXcnLQaICcHG3VnLamrkq9yMPR9VTEVtPnVToPeYU0tot41MJ7Z4tEGOqUBaFfgxZh0zFKtT9EBrQ5hqpRt0WOVCMlwy8fuqznD7p5Ol%2FEvl%2BLrDZ4t2XLJZ7N%2BspA%2FCInQCuYRHrrRhvRGpz4PI%2FuE2%2FvgHAC8lqUSy3F%2FSaTz7KQCnWOo%2BpUSzIUXQ%2FQQhybfa3T9j3u5LH%2F2Z%2FcWamriR6qgzB%2Bnj9kmsMu9XLbeyXcqaeV6d513h7wkofxMuZJV1h7r1gZhRDjMiWC94V4M&X-Amz-Signature=b5b68e6e755fc6f7f50b8949ebb836f71d0bba068ceb27d17a31c09b7d0ae2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


