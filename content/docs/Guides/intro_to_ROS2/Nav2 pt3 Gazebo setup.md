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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=b7fd46537fb473837e35b39063b704f3bb1368c02faf9bdf74831a6cac990d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=555911e949b6fc8dc7e8e87fa4670ab99ef5a50b31894c834bc4e4b5a3e663a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=ae2a0ad84ad22165713ec9c0ad2a5906d00c83392a017f2243009f1b5118bb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=590d46653bbf00ebbd790ce30495c8bbef849647c92817204adc138fc6f00132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSBYCTU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCAIYUZXti76JeMrtfRwQfe4fCoO1FT8qKxOfzD1OiGRwIhAPw8fcb7OHn4zxQeaKjHFcTw4%2BvYTv4bcLpIf%2Bdm6z%2BHKv8DCHcQABoMNjM3NDIzMTgzODA1Igx6grUCy0OWIfoyJe4q3ANrJc145jgqqiyRU7csRQPp7zq0Y03OyG3W7kE3GXOE3dI1oRA5ldUl7TiMvDceRdfye3B4GifSKjj%2Fz6FQPvLEbXd%2FE669HCqQ1xa4xR0VtQm3j1KxugHISsO5sbDUF%2FSkcDdFHhn5sMWvHky0Od8wgyNyK4n1OI5lpL5VMKg7YrKAVfiZgXJMi2a%2Bd%2FGFKS97qwgcCi%2Bz0LCOWsnOkGBviXzSWGT2jdUmD6uyWt%2FLBVDBobkt%2B5ApU4VtiSlhlsenJTfqtvQlcTOpw0Scjd0AAAJ2g%2Fn1idtPIa5njVdI%2FiXlV7essKtzyweo4vFJ4qs5KaiUs%2BI0u2B%2FsxhwjvVRwfZ34PwgXrcjx49VWebzZBee2jxryCAkfaHFVl5stmiLI%2BiAh8ECKFp4%2Bzlq8t3UTjgq%2FH5GEtjFeGmxXxR8Y2Tc7QLLb4IW%2FPK7oWX8EsGlhTbwcBhz0KFahpjdFgPgs%2Bqhs7XhCXwWOh2oKy%2FqHREXJ7plhoz%2F50t5%2BkoC69LrjOQNaqJuo1tme8g2SK781UbhrOa86mmHSSUyI%2BjVzJBBi8hELHKu7ToLi0WHWKysHoYqVs55NGyPJpKc1pSmKgLO6hKzoqaTkevLvVe7uizdlU0Fa3ywZxWt4jC3rs3EBjqkARGk%2F1VluPq%2Fv563KwBSAOFiFzu2yc19g%2FXap67HTxNSyHfQgnhLpPc7XDOW%2FZ%2FjKnDy2hTYJ%2Bd8gSBu0lvfs9M5IYxFamjVxLB5ao7Oc1L6dg9%2F1WBkcgFelvaOTgSiHD6ideYDwc8YtfrdU0hO9RljR71HdFI44FQZhKopYxgtNkF1Njq4li1MYCIDXSC415WN2vFHIURjMTlHfpgVqBqZEfaz&X-Amz-Signature=075f34819f608c5145ca679715ac61b0fc83525dfc04628e472b59e7d8147867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=cfbce7bbf1ab7981f165aae5c64c21d495c646ad9b5784f8dde51e7579fc14c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=021bb70ca07c49e95f238625215139bd380a6a10940810c33edb0d903e0430be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=fd59de36b62feceb576a18e1ffdd63f4441b2292eec8f6b58431f7502b57fa58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=8fd85082497cc165546858b84441aec2b62bcffca9034e10642420d1fdf9f06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=7e70bcf4c808e8c5a65268125a29fea8cc747cd616c74a2f4b8731ae987b9419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBKQMMM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICBC7yb8Sc6ygCZGyW3foK6fy1nNigHVIigIV%2BSaIk8%2FAiAHclocNN2hD%2BdImWfDghN4x2aBfpqzNlhLdy%2FtzhkIkCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMeCYDrUXxPjZDk%2BujKtwDdqUiyUTveRRlTld%2B5kvnno8H5hMOjjKNkn45PgOo%2BI9r%2BhPiZM%2BFEgvI8RmRWXdLDqW8qtB9uZs4y%2BCaIU8q64J1SWPnxBfBeC44AC1pZsuhC9EVJx9sFpEaUy1lhe1VV2jOQNNbVfR2X0VIXzieq6vNaGOrwvcQqlR0HC7qmuXKoiGK32vMMQ2l1DPWZd16xts98udPAY2UW7hDKQdetsASZCv2kOEODZgjKDwmO8DAzMUAqovUJDaBgRWlHZsTzMyjymu1J%2F6AHbcMDqIyiPUFn%2F0izHYyaBKbxQUlx%2Bf0qPAgoQbnxCkZYTrgIWiIJ8eWCmiY6jPWJWvYvujjHyH3FuPsWIgqKacnYI%2Bg0cb3Wc0nKXfMUbiiTl1j574i6qrBGARSUR%2BSWbkdV2gUbOuEUdzNgSf7qgBN8Pj8K1qmdOKH46JrsNPFdFhzXVT6IW2x8rLGPNRENOwhhZ6V6OlRTWMvHaTxyVD54r4czMpJoL%2FcEy04jeRSiWAGPW61XHmC8IueV5C%2Bswqv5j3kJTJL9l9a44jJwwRLBGBMDiSpFQtembZSwQ9%2FCGqiJVOd6TYRmK7QwKcJUImAGzz4zIlMhht3q8EyyiNtIqtFwbq2x7VrJIISuKzqxSMwyK7NxAY6pgFPvlZ%2B8KFQxfUYjdVGSiJL%2BB8ojcgfQN03oLH3LzcD5vigItLGZHH5lub%2BX3bVoX%2BFdh8t8VaI1BftOuj6YDigegwPZ8ckasxF28dMPT9lVXJE2EQ3pS5D%2BiJm1tPZNwWR%2FdzpPefBFvrMiaQ6hsMaq6rvn4ETv27dLhq9n0OW4WcYzR%2FY%2FGzgQ1H1EtOjJtSNMLHxrYDc%2Bo1L%2FyqbnS2MnPEH8KPx&X-Amz-Signature=570669783496beed5519ce67dd1fa5a27ff6b508583f1a4c0108d53cc2e4cef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
