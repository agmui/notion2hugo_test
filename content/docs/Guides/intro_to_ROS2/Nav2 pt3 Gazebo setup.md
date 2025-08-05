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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=2fc76e1fe737608d3d01d3570b678afa41c6b4a26eefcd270217fc6c3169c58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=bd2e3b76706c04f5fa29016fdba2c826fa1e3fa6c3c1baf11f8e8ca9bbc2ea3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=a8f7644b8b186256adce1bb016a38c96e7e42c1ce3d37c5a70de32e70f594958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=01a1cdf2efaccaa6d0e1a192333d60a784c11252bde57fafc14355e114d59de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLYBKT2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDtBMkk67pmMyBH8bapUrlB9AJKQcP8ZQZNePNON6kbZAIhAJGOBGXQpUjf%2BUqd3sm46iN7jNPmpZk8awHGq9me3WJTKv8DCFMQABoMNjM3NDIzMTgzODA1IgwRSYV7uy8VNfbf0tUq3ANNtM0MAEFqwUYm%2BjQyCCiExl%2FNEPIgxJOjrhT0NloQTDZH8q4mGpW0Nu%2FLIDGxFPInYnZral5dEcJrPVKiOPBLOe3cFmIH%2BVAtMfDWEuAuIG6cuuZpYljMl%2F81ROqDyRgCycC1s2%2BAXLjLhPpFhC06GjDjDT99JNj9o6uc0nH8ed%2F7OtQAT%2Fs8vscLgNButlU7qz68dsPZ%2BOEgU%2BJnkUDly47g9bMss7ZMGAphMGvw5MfUiGrNZycwlj3D1ylJiSkCjnBTmKNCQDqOiJktornTARsFrbpZnc63%2BWw%2FzBaXVSHXLfa%2BwbT5pTEOpWBx98Cnbu12cisvxyuy39bDwZ%2B5YBrm9hOyKBKnA1iRRMkAVc2K5gzmQN7Sr2V6e86DHk1ikxSPAZpF61L7LcVA%2FU%2Bvsepdk5BWfbDETiOvD2mavX3FyoTOPvg5Es9SoJqNejYmmRJ3mI6x%2B%2FwN3wD4UQ5LSvqShN6ZWD4zFhY03bxbK8Wk0lWS1vFeAdFJHE4lzlJvYVqeYZcpR5civm41HcAHqmYhD3O0LFp6U%2BUOD6LIdAmvMk75578hDbabMZwDo9%2FYp%2Be%2Fe29%2BGGswncqLlcDNXo5paLDD%2FB3FJrilptfamYmeE8kbIxU9GRB%2FQTCK1sXEBjqkAZChHpjREefHee4EhwFVtmMjyP5c%2FWKmIeqZkohtMrtmSojesC42YW2jrMpvQmTgaFs51zRxRTIYGbirTFSY%2FrEqdAyG3gGByxEiWQeh9y%2FEx33geEsAZl%2Fb49JgpTVG1AY%2ByxgvsoiDcmfE3YLKjeJPT5qLIx0PqtfNATFeujB4qK2XYBDBtwIhHkETHYYNOTtjBGvx6ICxjeRv6e9DO0iu%2FAqx&X-Amz-Signature=1a47adc961d6b625016bad41f057204610bc04d7f76fbe2d811364bf352b18c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=906dd811c58952119a054f61f23ceb8bb7cf05392250c6f8d2019a8c0d2cdfa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=94a014546bd377f26757e51bea78287bb3d481ee639282e93ceb4bd5d5a0589f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=f22567bb67117de6690219f073a8720acc4a4c75b60748b67bf6ef8ba3ebfcf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=b637ac34aeeb4376342ccb5b8e817de8bd6f9ca4e1247fb48856c672538ab9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=bf52cabfbe94671af38f45f18d6d23d65197b4fe7bf9ff6b55588c56c655e650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657EZAPU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH0fRQsfnixRISuTLS8zZBU1FAf7yVhBXDR0Msfp7VgwAiALD94cMFfnm%2BI%2BbvsZ8wnnYQaZZQOvrCQAVLaSuwVw7Sr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM%2FHu%2FPgZ0PxRWL5%2F3KtwD4zIKj%2F5x4aLXrR89Ik0zPmtt3b55%2Fz6IfqTMCbZ%2Fa2W499PnKkhQcOVpeEKVljghyoigqn3g8AiA8uOdiTsZsYKk4GMkdqmZJW6CHV19hnF7TEDld%2Fweg5dIDFnflEExD3iwBdnEk%2BBHXKECpWMO7xZN3GDg7cxe3hpCU1oMlazloh5R%2FL2EqlI7ROUnGpw4BiEytKMfbxaWfk3B7mqwrnnlW2exsQKVqCmCcLdtZcv8ga%2BRyCmDcslD93SOhpw7GH3VMeXx7VlYMuT9zVKe%2FQ4XMPjgjaC4A623l6%2F95s%2BJNzmN7%2FTOtR6ODQdqV5tj3zcXQGsWBVrp%2BclQVluQWBA8WvQsE138dNJHh7QoTgRLDL0WF3YD0kY%2FjWbGyOIAzvrTEs4hW9WCrIX7CT3rjdA0L%2FTJIOdj7HLZmIunQtVFbB5v2YLmpPi%2FtSxJJS8kaLf%2Bbe70PClfgmgzxEVJnH3oUE1GoWRZWzfSBHg2n%2BeoDi7nuyKoHs7ZPQGXp71HOLp7IVcgoVaJgmnApozSLNDcDrHVCOK2AWFZh95ZPp4xUr7WiJSjFDRp5wZ%2FcyC%2BizBk2LaJXU2ETEcrCtYhdGDxp98imiN%2Fe5ehiSy%2B5XVzm7taCBHubfRW6U8wgfTExAY6pgERjbcuHWmsG1FOCtS9KCayHlZke7KL0JHOpC4PyUBKY50edsUQVd61UHCpoGHHUkkzyIGcOAOKNq%2BbuTUUfLM4vuJf4I53ALIHPOVz7XJF5jQ5GAfNg0Yt%2B%2Bc3cjopJvRY6Te43fi3qnbXyhT756%2BBVPYLyJ8VkHDbiz4BlhsgsbrlEsFh9S0AxR0lXxTeDmHghsSPeHC1gYLfO7au7UywObKF0M6I&X-Amz-Signature=7a7b073e4899b85b7ddae9d4f36a767117aea16244d2e3158414b2420f6520e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
