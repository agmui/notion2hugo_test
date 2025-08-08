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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=05307b1eb3ae44f1e782fc6b814603582fa626b0029b97b06a5e764e4a53d983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=f3fc1776dc28298b1672fbfdddbebe290bae43dd79bf559801d476e0e729ab73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=2c0d24479696b55051fe624f04b15444f034038552e922df7e081126fe9cc920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=76375aa1bfb7d68b5f252cd632d38530d4d0eade0c03484a0d08aa155f72f4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6C5SMV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBIH7ItVJ7rvuDlQiyqhPvj2u0ejb7sTCvv%2FCHMz5fkAiAc3sCTerD2F084p5Q7ZHUKl%2FNYFOFn2p%2BljbRYijiZPCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4QssGgYinR5WPlHJKtwDSMwQ5rroOmqDZgXeluP59wn3hmoNEginrUaqq7ID0abX6kmvwcB3OaaC84pzW6L3bAt9mjsHK7LiwVdoEbEmYxAlkuAM8UAeIS5p4aRXvVDDhFnuUURtTdKjqRJ%2BSOetmOUMdzGqcqdjmghg3dxDp2lQ1OOmK88z22VbGniDeORe3cuW%2FzZ7myj40uO%2BSVm59dNL0G%2BHXicjb%2BDicQ9KqOV0mqutKOowymvbSU3rHX1xhN2TOuCuXAcw9iZ2Hv%2BUPnYdG6WkaLPS4nyHq1Lz138OG9Wwj3z3kn7ZqRIeVN6Q4fs7OMyyFVmkjW2fzkkVsIct%2FZaRCyQ2UfNj7oDCiIoYEnMk1HSFEm9CGiPt3aNTXOcB9E7fj0wCrnA7NAefvSAiqX%2F%2FRJvG9lkmqlPSSyI2ENrzbVq2kMJSntd69%2Bp3uh9%2Fr4Z%2FHKFKlMvZ3U03mZNf2sR2Eq5X2hTcUljefxnTY3TTRw75Pl6AR6hgQYEX1zmCnOSDHkLh1ux53ZU5S4ZISmlcMVE49tuHbi8i4bfzD3km%2BlsmM4Fd7zl0MDfXokl3eY3F51X2yGp8nxMBOdPJZ4jmhfogds6OtcveGoCtim3sRU3l3yOH9AbIPFtdl3%2F1FbaiCXqfPhMwoJLZxAY6pgEw48kV0GN3GWcDa41WbMx9cZnKF6I90O13PJcrLzha7r69gjg6tvxYoJ7ItB4Cjal3DhJqTWjJPRWSgFFXcUjiLJpM02UBgFvSQeaSvubQOi7DIl1yzl6%2BiuXri0dZs3QBzn8wG51GLc%2BE%2FssrPFWblSNhJ4557Ey%2B9jrtZ4UePTxJY2ZzL37gn1DYpDXgkZ4WWiDM%2FRu6EDzQcbXCg%2FBQNAS%2BqRi2&X-Amz-Signature=1dae5e7399b5d0a2389b1e07a707d8ad70003783e9d560be39bb9922335ed99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=ee53331db0f536d5a808de0c8904051665e2b601691d059ec0e9fa516e6f6867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=f343d15618adb05766f8f6f9712d6e0088231432771a8ab98dcf964948820ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=a7b09c58213f1c9b84efe3c84d4483750c411403594cfd6bf11fafb8aa34ba1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=d377c3baa4121153dadc9956f79880de46843f5bfbc20adb195797d547e6a346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=a0632bb9de95d98617c682a0e71052b430f7864d13b8c2dde82f3d3d687d1200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4L7NMJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCGetfgFiTSS%2B%2BhRbYsmSdsgMLp5VbYDKGEZy%2BrjpUdbQIhAKOJC9BVPvj46uISmDhjU1ZM9q0gr0hf5GcRYLmyP0rSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw34Vv3s7vF6xhAt%2Foq3ANpmkMUkNXp0SeEg54yEvtRDhiiL41qBNn0GGKnOiADBbNmahAC3uGmQ8BFu1LHN2nxeBZSHFSpnghMBeIZIwYPoqlrIVgXCbYqxcaGC4Kv%2FJoABAfofeGQSu6hO%2FDup0oQ%2BGXS%2FLQL3%2FeUuZQPFB5VvO5CmWoLIKnAZZFyev92zdMiqbTsLaMesOw8CLrTa5kwZ%2FIXOXzzpNJM8gvrwUEpQIz5hPNt2kq6BoUsDYgmPUmbjXj8yetvyVMBvpiZupr5rmlz9bhQSLN87GNn8yGkBnpRScv%2FaQKW6mqqupew7VYts0yFugu701NNAKy7ijG%2F3BNjybCOUYbWe3XLnISztSIhdhEz7mKrd%2FeMEi9XFuRDStAGhtscId2YmIp03gWKeMNjuiZY1NIHATTDWwQhU2cFgbYn9q1r0f9vGN%2FMZ6GN7C6FPjs%2BTCT4nj9v6iO6ulkbFCT0CGGlzH9bgQ63C9JStaKzDekimtka5Xf%2BR43yu7mEtMu2SD5ktwD0cQqUUAd3uy%2BKI5QsIk7RFlXDkqz5HXmcd6CI3JBLjjtAgjMk4ZSdBVYFPDCcb9xqmhVfChbl3npH1QwiNs9pugu7MemF8Nv%2Bw7%2BFoTQK7DvHLGt20tt%2F9hXWopmKtTDFktnEBjqkAdP%2FzIR8PsnxJ4fQ8MgVN32tnmvXICsesblwq%2FQCU48Bzrx2Tr%2B6YKClg77mBHNztfXf04WhGseLK1FDjx0DOKBgSY%2FnIys3vH0TVfvUm3OeONUqJ8tl25Y5zABBUl3QVXZn921pNIXXxYR%2B1fONBpQamRTm5%2BjnMQiG9%2BHY34aN9wG2sxsxcx8N8U9%2F7HNLMW7Bes%2BTo6cgPwJN2v6d9XUZkhRc&X-Amz-Signature=69c0a5ae4cd6d37b28bcb69f39cdab0ca026051431912b462837a81ba7760a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
