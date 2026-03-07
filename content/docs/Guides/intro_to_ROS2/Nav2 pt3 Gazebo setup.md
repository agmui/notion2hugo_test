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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=7a4e5731ebe6e97b51d81d3fbae35a7bd79313b8d240a64618843bc05a5a93cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=9e18c3db068114f6db143e8e8615a03279a35d22ac8cc12afd06b4e013f85296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=b23b9fcea70b8c8e7bf6754d4dde0a8e6ca60be93496438101e70a0d4fc90c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=6526f1372d5794b73ea6fef5d8a232a4fcf1c21970ec89d156c8608fea5e30c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D2FENO%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFztKprDuBNZi4D9MiEpV3oYLFVS9TYpd35RfkKCotMoAiAp%2BT6F5nv8zNhM1LksSIuubrvKdq5HY8H%2F0N9%2FkRdcECqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbqKb9QYgyDX09OP6KtwDjmo6t4W14JAsIdahZ1Hze3P6KYPcWKzi1AShGEJViEZlwtl75Ax144IQRzeGkthVmQ0GuJif3da%2Bn%2BbULs%2BtV2rJc1SCg3oHMrVqiG1W6WmgJq8uz1erqaboI5vts%2Bbz4MZmtair8bF6Fluyx7PJEHEK4Ux6eNk%2FJ8bj9fHOl7MuPqvDrJYeLbES3Jq4om2S9qYAFQ9IcWQuDXNVW7IU65m48bSQqvBjtMJiRWKdqgAKbUY1Flet%2BX%2FTdSj8QSBuoP0PWAVr7XlSAIRiB0V7X45%2Fi5ib7nRGz567T1HDtpMbiEVQ0CfkmRcj3auoqdTil2zAMNxb31w3wfeqcp7XeV6w9LuJVg1mUMSfBgPCBO3khR%2FgZGiRh63qeZLI3smfUZr9hBKpojhXz3ygXDom5M4Ufo%2F8HKzL3%2BZCkHq2LgkXm%2Fhmza2uwjAzL46L3cgBftNn7yLvhBgZ1Z4IEa%2FFIfKzWcpkLbLUZMbfLmYTbeoWRitHVcIlq3AfCWYxPNpd2G83%2F4Ewa3pRWhBMCpR2j90piUqIA484O9xv%2BtXsLB14ulqgruhpIDJgv%2FQWaLVgaZar8Dadt4r2%2BSAnRyvQWHQ3x00rY2RmF1cvhmxAPlQZ71BRQ1eNqsfdi%2Fww%2BOitzQY6pgFraAGqvXvFWG0lL%2BB%2Bz6c%2BVjfNrQUyMJzY129HrHw6uSElBDNcPI7A0QRkD6LjkK2leUhT%2BhvF353%2FO4FAwtF4REXjr4MphiP%2Fy7pjHSB9kEQe9YbVpvMxooCeQaYzbSHGBSJxGXA9%2BvlJOjwylhrkWqVkZwDJ2T8F1fVQ5B2O8k8ULEBVVrh%2B5Dm7MjYYY%2B%2BF%2FTLi8CnuqkegikXwBSWVaG3R66y2&X-Amz-Signature=70fa714fce020d8c04a78b6eae11ea4e820bc6a1e9890b30e3aa94d56000db70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=a8df14d26e331defcd94f70b916d97ab2a080dcc86bc72e396afbe1885fd2209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=0d3f5bd9ad8276933d26e83f0db50c158971b870d8710d1132e02c3a5d80da99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=8ce25d8856573d56b9752fe21bff034136e6a0b09d1365c68af22b40c24600d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=60065e6549fa673bb43006082df1824f3364b37d43a3bfc5012acb2dc17b17ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=bdf1923714da6cae01b69fdc5b3084c71ea565aa574997233cb516ba6a5faf9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IB46DUC%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDuMi%2Fb%2FIHZeyiMfX7mLJjB2dUJQaMh6jUPShyV8%2FYE%2BAIhAIw8zUCPnVwfGDicdXU9S1KYQsuyzqZTnrT7SccaA3gwKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYyOP4hYUtxcHn3Qq3ANjwsEhAU5Pn6DE5IWf4QnmdgGn9itSJULvfm3SM6gU2p%2BO49rc7XDiVzHQ7KN%2B88KDCs%2BHApD4waH1Ufw3FaxFM9GXkQcJhupowp2aNs9LoosomDATqotSqIrnBxSMa5lLLyd6gpUUfUmYBHxoAo5s47pxzfcedZKItGbDHypTdibks2M5kxgEqlNw0yMqPpzzd6XR2CSZDc4i8YlwQtUHaIsiecRVIEGyCWKMnGPbdjx5vJJrWYd4GlE0XWqyMzjtrkTKdQQ%2BHRuimugetAtGrGMBzZD4X9rAL9u%2FYTCjENLow3nk3yw0F2UZ42NOR0BJ9unKXOZ16bsiN4jGvnJOJ0B6%2B7vHQc9BhSeGbTlw%2FR4EDaS9zMwqsT66sZ%2BktfevSrtWbQlvS43Mb%2Fvg5l%2FIh9HOTfoe7dCpRwojxQFPrWWcr%2F4gqd6bikToYn4%2FOloXiDUp528rRQhIxHxfb5yvI%2B2crFQPvIucW4k00bqzMq%2FDp3wkMx1uW6HQttUdr31%2F2HIs3Vx%2BtkIum1sbCHk2maIXUc4JrvLg2%2F3roSZ%2FDZQy8%2BEnNXWNskvmUNYyj6jqPlj020hHIIyiV6rrv8PMy%2BmS7cAYFx%2BILFvSGEGfc6EQS3Zdw91jSQpo%2BjDI6K3NBjqkAavAFlhRcXjURv7bFpHW5Omte31FL0WKNxUTLybZ2LbDSXBwSBiXMg3kX1qS%2B1HMqraLOG6at7e%2FJYDvE0uE3EDyXo%2Bi54l2envn%2Bro7WgpwNp2PqqnQFr90IhD5wXCN8N6YjrO6nMSN7PEsQqelJerjFZqaIXjxZ94wlHx13X%2BvOd258WIHGMqUKmp4ZVeHy5hGBRQiQMyio9ADu8K%2B1QzSegbS&X-Amz-Signature=0942435ab015aa07f82fbdc794799d72c44f81c1d1f09b17b8b4c785516d7ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


