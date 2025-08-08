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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=18b2a43ef6f1f06697751d9620ca51be02387e2fb39a2dcc48b349c4f65dbf59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=6e715c030b58eff6681742c925390b534393414ed6f9003d3e0090c3bc9a935d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=edd3daff76d9586db308109bb1af5bd42ce933a1508d8928402b570cf30dd423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=4dd363917727d54e4dcc9310be21913cddcca35d8e88cecd24574c203a0757ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI4722MA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCKnVKB2LzL9rzIb8ELG4P1iKW9X13ffaQvEDdtfK7nlgIgaCev%2BECbAb59xO7oWNAdRaEwfZzayJtJep11PRcXSuQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAilc9z5GEsdxeGo9CrcAySTM5i7PJ2ERrGztqk%2FJf94h6rS0QYeC7oRqLbeXFV8QPrmmbsmWCtAlwIuucPDd2KZuFP9j72vAP5bBDKBl6GsmtJJueqMEpY7sEm7whD%2FveRF%2B43dTfrM%2FgKiHgxHaasZxJdyEvPaJHuBRC8x1MM6%2FJKqy3IRnK%2FKFiKsyAVVJycTxmbLDYGLLfYaYcL6U4piK2%2BBICbBv4Xk0FwkYOwlgzqb1wSBou%2BXwxwts9kLgepp%2BroIjKzkOcmfenBxBcpBWGKorE49CQqjZBt8pAqco%2BAfCF%2FcpLXtRWl23D0j4nZBYxrjZ5VIHEpEML%2B%2Fq%2FKPWpN5aQQWXa08RzoyQXaWVlA0jvyZFgUDXJ4SBUVaiVUq5mL1CKF7MVBQ%2F5tF%2FZ%2FjJwNcqjNmBPi0wIDXR%2B7MxddoCWc72uaC1sXp0RhqJ%2FP4Q%2BakDEgEHC8szM9t52Yp8SwxlPhoVrYgv8ntICKP3bxH1PK%2BKp3W1UDxbCPVenX7i%2B0Ow135xbBwPsN2AIY%2FqK6b6%2BybdQUJRlQGHYjxav2ndzb7IOQZ0GD6ns32iaFB%2BTyeykHCjDd9B5V4e3Tm1OQ1bbM1Z%2F1WiEtUtYom9A5VqnAlMu5Sa8dQQ%2FSXhP%2FrniP18CaLImqcMOXT1cQGOqUBinUyIb5qiDh86vBPm8C40xPRk0Ohy540Xzu2%2F%2BQpFb%2Fj6m9NW70H8gtkA%2FxtlIrclHC8yaOPEQWMbZCfxv%2FgPLK5P4bmZooibcrsePx%2B1L%2F2BVwoedC448TqrrHWn%2F6W5ZHIgvcROy0tmw%2FSNsCVDRYvlhQJ%2FSQJkNDwbs0ZUnHQojFr1i873RFhu261TE%2Frp%2BDHUYRofp0jccK3yvmwRUXkDf%2BV&X-Amz-Signature=ce24c1597e0238486c90ac67cf1275aaa40015ecfe84adaf41773c296a666117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=78b20e393a2068a74b5ad67d3c1bd0cc2e4bdeaae0e2486c9b00824545445d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=8e655a674cfefd30a71bf55d2b22a0096f761d436c3b69708c4e4eea1f517c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=92ca2ce557dc3c6c919acca56b97529cfb8caff7efb58dfb576b20254625a3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=97e847cc3e3c88bc154e04b99c1f28133dc3bf510e770786a83a27951eb1d64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=b6a8017e69fa545f124b3cb8163b1d065807a0d901ec9fe251781830283cac39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5SOCV4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICBukZHfG3cyfvQyVPWfUgxBm5JfjIWP5Lbux261UbuGAiEA8IFuqdXVGW6JBbk%2B3DJLoBuMxbrqvb6FmfmZ%2FyFnC2sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5WnAya3lJJi%2Fn%2BLircAwttfEszQUAWgogGoWHo81cvE%2BuMru3BqTRwV8STJ1TAzm2vMDwLDsuUDV653nJOBoGvN6PFBbF7Tfgx8MlTTufnrr5bq7N6o3d2JLNSuC6OykRecXbVDE%2F%2B4r1ZISSwUBgzBF1dRMsUXnUp%2F9NvFGfV8TRf3mYgGC%2BjVOtXgTa7E0KrQBc1NznIOME3XJQwG9l7dkCFKbpO5bF%2BvKWSC%2F9iu50MQQFYl7rdIiakmd7dMnSug1GafWrRetRlmpa9A%2BZkmkY6XMp82hs4WSmvQugyZGGTB75520k%2BS%2BnfWoCsQaWDb6LHntSqer%2BpkVqsOOB9F0lSWxfZ%2Frk%2BNHYfRLXwzJ1SDJkhdhLPEDHBAfl4sxemS2XxbuHYgNblqv%2BQpV2KE7onRXMYwlHpZ1udmcFmL75TJZP97%2FMHXOBba4664QwDPUkQLcygmKEmyI38Bkt8Q7fMHjz9%2Bi2aPeL4IvC9a33PziTjhnAGSt2CVL8hIms4HdnQOp6zZT9e%2Bam3Z8AN2tfUa5r5yU84wh4TY03LPH5FAC%2Fdcx0Hn7sLV2PWYeIwp5ykQqezs2fG3nzq4eMU%2FnTkcFRcHHLAoH38nl%2Fka7UOvMtr%2BImsB7qQEYGoIgCM%2Fz9y2bAgbVe5MO3S1cQGOqUBsylN5xcQ2jcIc%2B5jMwvtJMk4%2BG5Vasl5eU7vJO0qWUAbub0c5sl9CwL%2B0oxeKmRzRL%2BZeBJdRbbJu0gvaA%2FMejvp4Aah4Ch3gMwtvAME6OLoNt0BCywaXD4LJ2FPYkAH7I6gW0bCl3vEfmtTzH2Yx1WG3%2Fqy%2BNvbUPJ%2FPi4lO3Tin8NJ3SVYWX4ZihHdgo%2BppQcatWkDLitInXZeORUsnH5FAVFf&X-Amz-Signature=d98bbc3d49a49541b98bdceaab913787ba23d02af50e7093de9e90caa2348109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
