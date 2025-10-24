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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=71970ed1b05c65dd90db50def18839f343356a5a0b5eb96849c373522184339e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=a312255da5e7f4916459c1cfd0bef13341bb9f77e3b8503c11b06dda1ce5accc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=7ec16b9d13db62b14b151583a3c46c4ad118989948f49cb4d3cef672e45151fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=26bd2ecc750371cb2540479136e619d2666c549c0b390566d8377c397522c804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GZNDJN%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBjzlm4K%2BVbe9xPjwMnPgBzsve7JZjZLBa7GgjIMD%2FLAiEA%2BsHFWUg%2F%2B%2B7QeHT23uhovdFUWGDp9Eol2tq0Xy7WGjsq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJKwilbFRrOrS32mgCrcA%2F4qyOlqhjvpanURfgy6FwqhwU8Z4xgzSpS5gNFru%2FFqFQ1JUMRENQXt5bX%2B6UemiWwLBERR8enlPuTrrP4mA1XNiZyi7MojbPC66wkFKXtBLGGX1FxY8m%2BfoxPtrZUl3ngh1FMSbQhiOi5hdVzDs%2BE%2B0%2FlQ09cMM74pduo3LT76TKedS%2Bg7W1LGFEt6%2F%2FeLx8kITTABru46GDdMnXMszuoOkyXJJFivIut87BZL4H6zjkEIajeo%2BoZ3E%2Bu1BqSHqyG3CBz3JKoWeWhsjzXVLhOoG6Tq7biEWA1ZwRrZ7H1L1sE2ayItTzC25xVS8XWgcba%2BEyxzDmSa%2FdIH67%2B%2FGrWclgHt7MadgG4jyUKGeU5LYJxwLNolppEkuc4EoOPlJ%2BP%2Bj5TXgRvpwa66QNzYsf0UISSgczuOh7rVR%2F7MlvSMApzL%2BlncUjzlsB4VCl%2Bv4TE2%2FLNevwLMkFVYeAboz8SlWazsBokkLu09x53cv74SvsW%2BVazJ1Kk6VTL8JDr9gZKBxP1fPxe92RNAXP9Tdvc104zccFxdab46mPUWsGt0bXbx997e9RJ7MvZEvpflog%2BP37nLRRxgdlVutcQrd2gfgMhYqhpNq8Oo5fTVz9G7LBw%2FttFf1pn%2Bol95MMWf68cGOqUBRxMnjOm1SHT%2F0N0%2FQPVmCbMv1fhN7WkcHDldxuVv%2FwjuSH3yq4FvxQJQq6GVYQM6ZihNEHVbLb1dx3MRqqmP6myZAbk%2FKboOJNLHV2ywmjjwIxhxcY4ZhmHl0TKDwkAT3BejJp2tWkZhJd68YGTHgfuHDbMtZJEXHOaWbmiGuANK7shuCaGTFI2LKmCNKvKGNB%2B%2Fws9%2B7D22rs94OsV8eS8vg5AY&X-Amz-Signature=e5c1a10939bd2820d799d417473d13945288da6fed7f5fdef6a94a567e62eaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=9ceca93311b9d0d9100dded2d1402f924d96e16665443d2d1991c9cddc77a874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=f9611b1b2b10548e5b11b37613cc1568800397fc1fc94c7fff56cb0e75bc6779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=6771f29c79126ff4472fd97f5b1995e7f764031131fd2ca69221fce7c4fb5f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=95a7cd4958618ebdb6d38c015c6162595026daba28e6b9d3418a663fdddecd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=cb13cf19d3bea42386614f1fe6f475b7470c8d982cde9048171702708737739e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG47ZZA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDenkcU1%2BpsRLzWiSty7xXuzTtqcscfZY6g6C8Z8FTuPAiAEAfOk7K7cR7xvgkQGYI%2BCiNNc7iyD7EtSGtf6NXwV2Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMWZy0GW99TWOEBUBqKtwD9elJ21IX5GEt4XaNHjii6dGMzbzkGg0ra%2FmmmoewmtxPbvalqm78JVwiKbxuF8juHvR%2BhzW%2FpEJxKAVJvsGB%2BkAtqfeyPfBRO3kEBHm2AJHmgDRPYnV4rVjgsutPKOiX70y0dUrlfdDcFJctv4U%2B3VLk6XPREPvNqBoVqf9rA8ww4KKdJhQms3H0BNG9%2B1d6U4do89pL%2BCvOJTQVqkjVDmlQJUpjdFCY1g6A9CyQKXN0%2F3xUURqnxN%2FG%2BjuSB9aQBX0wPo2csDkWpVoAMyZPL2C9BH0X4ezBgJqwuhdMcWcDyCUMWAka2PwZu9kEFM5ezDhoNXBDgHh5oswGv37WqT%2FYF%2F%2BM%2Fqt76qlnZDhoPT00wANn4ENK0SNMM4e%2FkUXAjJXSbNEoZ%2FpYBp3vt0PFfY0eINGcNdA6RwtBW1GJ%2F6SRGHVCTAyBnf%2FIwq44%2BN2Jbr7Is5HsOd31xj0Sy%2Fw8ZYYVhoqV2TaeR2ktkexliW4ZlO6XHe%2BJQQSRbqfZMSeb9jKpJkOUxQr8%2BbmmMgQxpTdREAOXorsBsuSZDdUKFfr6yf7I5wx0QVJje%2Beun3QyJzfhlChs2FJfhL7OfTqqAGYbd4UGAn%2Bag686DVu3jMO1JOpymcHNdBVonN8wnZ7rxwY6pgH2tiJr6qoM8MOH8C4%2Bu%2BzCTOBLlRNL2NO9BZWFA6UhY1IS4ia2Yg%2Bv4%2BTlvYNnu2KPEqf5CSLAlfdne1n4ANV5Jd3nR7v3bLmZ6QgafSHCmL6s3Hf7A184jesy3R8l7tI%2F%2FhnU0T7FYw8CcAQubA%2FyVnNLAS7un%2B9GiJncVo5CGhjf2c4zLJjeBDY75CLpwgGxlBScKujq7kCjDnEulXCvuwicJ3Dl&X-Amz-Signature=afbddf352287d253ac54a0aefcac49acd95e1db42ac619d562687fde3ef73374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


