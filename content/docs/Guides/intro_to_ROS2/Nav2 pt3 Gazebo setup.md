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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=aa20adf0eec1152c591e7d93c65fd510981bf74c3fd268868bce29bc24d8bf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=34f02061c3569861f949d50b59cd5b0ccbbc9a38556a2739b4af8ff631494974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=e72f71ce8c17aab8c18f299da4f7ba63d29bb0134639e3162dd80c2653535b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=d6e115c2d1b3fbfd782f550dd6f3caa60f67e7ed840f710dbb725d623c881e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSWDZOM%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeip9GCDLeWp80bB5p6vFQeaGInKkXzKbPgINSVQsIDQIhALHXyxT4bAw7KgvCNLOo3Sq20jqqV96hC66Gi%2B1WPUwYKv8DCHcQABoMNjM3NDIzMTgzODA1IgwKBcNdIIuCpmREn%2Fgq3ANFYQ0lySiEA2SAQy8hJxrnxIhgzNNidATSs8D%2BAPhLFy8Gq3gxLHEYCh%2FHPWjPfN5WRmed1NdHJRqFNo0YDb60Pn0ynVzN%2FK5E%2B1FKrvz6YJoHZKtPjbyXGLRKJ8dEuHBgmOb8BLjov9GYBQ7alEcR5rgG2SS9rDU%2F%2FXvMrdWiT3LpSL6zD2YjYnFYuAyTib2fYH%2BjrgPdH2tygSdjFu%2Fr4LZKHYOBVsJoXl7sQy6LiPTafOzVDDcqrnN%2BQiKzizL6UgyYiZ%2Fp93lh22f0vZBcfPs6EhH71nOkYnqlSG7Gj6euTadJr40DGPV3n8LOWEM%2FX4EeTwovqT6bj3GKYt5IptKz4PTqO%2FWwVGAaxqf77cMmNBtTA%2FT0ceO%2F%2BvNMs5XbgaJs3uXKs1pigZZcB5Pl7GKyQFVKhV2Hntffk6MeVSVnoJ4JRTRsdZnUu5JZrr7F24fW28hs%2FG5oAu3FiLP1kOi18a8MREAOOV3GwqUYpakl2anSc%2BWrBMgQC2nAjyLrTB%2Bufre9vXY4%2FfzF1eYsAg7rTUUTfiEN%2F1frns5mgNnfS%2FJB4MoDeEtc2LCAZ2sVTdt%2Fh0xrAm8y9J0o2fRJAdigYCQYCZUzxP1B%2F9V0oE0opW0Vb26LU6HzFTCw1t7TBjqkAdEhIxU5W7lgKy68f8xh5UFze17VbpAS0PRvNRdBF9GPteWiGLOa8ln%2BQZd1DGU5tu6DMUUvBbUbjSohN0H3PQqvmLYTVztePrigHq5DHnyAHYpoYB8726eMdqG%2FbNF9hqVgqAjSZhq2YInc8kUB5RBiSBMH2sv6eodQpteNfZMqQHKdpRQ2gI4CW%2B5exJdQNCPJHj36bbVp3x5h4pH0xUL%2BLhnJ&X-Amz-Signature=3697306ecdad2bbf906a08251b262d73b8d78eaae017b2b99b7223e0c439685c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=c95421861ddf66b1c4441133bd717b0ba2e85be58aa5fff2332d6b148c4e757c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=f83c3897c951bf15eb824da71c235d283f53aecc2aee42ab56fdd5eee0b32891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=3aeddaa7fe164ec38dcd49c7f4974191c01da854aed41afc18b275499bd77b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=86e2ac9018d8f9fa8eb655409ed1f8b7e304387eff1785d3404ba98e705e1b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=3c962da3d1552d5c573b029513f30ea9e1fbdf2fa49cf28ed32f89a24c06b887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWPX42B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaM53%2FcoRig6TSTSnJEcN%2BQw9jV8xodQ0jd0OcN%2FNA7AiAyDGw71DxrpChAZcRFEXI9hM7jYygFBlj%2BqEVgqAJBBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM5tc8oamx5f%2FaGeZIKtwDRpLuChiopfCHQn1%2B2esDCpa4xE%2FppbNu0qB%2BQayZDH2JPLrkLfUrp8iQHSqzcqnvO3JRCGyB0DIF8b7nn0eQXLRivAxJnAPOrNyYOCCTLLNPnMsUE8bkad%2FwNNoMNknLrv%2Box4i3oqk33SwxUcb4GtClGd42soSlkwcF3EUyh0wWBLjp5binAQ1EDNsLJwtVPXk0hTf92faSPIScOKVVh9cx3IdATL92UvZVMmg8uSAm9TkabDsroeshl0HFEQNDMy1B0UdzuHMNWedy3DWBPTYeHX9lmTkYi5wJQdwsbXNOfW9YNZGlNoFKu97qQy2BUdHY6Ha8RC0gQaTGV3W42AKZ%2BJL%2BMtKLlC5osyL%2Bb6apdkOzENbU1XtOySIZK9n44ZTI%2BzY1XKxKxydp0WkG0im2MYyjggkjEjylNm6H0VlCEBAnD%2FOTtikEuMmAk43fhVbvQynWa1jdD9ahWGQLpp5yX3pT95i8ENb53JR44Y2fs6fDQvIU7iG%2BnonrIOVG%2ByHBR7TwYR5NK4Yn48AvahcI7fogqedLGNshvuRtO1%2F%2F0G%2FsPL%2BJ5i3xPkdeKXxtmEJYbfjcP94w0fhl6cRekS6lgtqo0ke5wbb6jmY7Tabzx4CY%2BZ1zdovj5V8wm9Pe0wY6pgHI9olEpnPvX5I0bIcNmG5Yw9pG6SgHFB26X%2FoAPU2et%2Bj%2FN6I0Ojzc0eLfmFwpjNj%2B8EIq%2Fr6mFp6HAAfbziZ%2F%2BifInn9SiylrCVNTfW%2FUgqEZvZzf4hQxu9XXh%2Fh8HLXPGaoakqdvrI%2BCEU7ZxYPNIeW6Wc5S8k6QhfLl07LelBlWp2TnzXaCaXyM4nhUbN%2BlLpzN%2FcIJTuE5qrYZ10Xb7yXYeK6Z&X-Amz-Signature=18bc1a14019ca7eddbda032feb9c1f565e64f234d800ebb075abae7e4e81974d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


