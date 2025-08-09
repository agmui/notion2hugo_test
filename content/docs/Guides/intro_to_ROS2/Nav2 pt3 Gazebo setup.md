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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=df3ac14e0522ebe0d10b2cf1cd7625ee9593b06f577a627f7d0d882c1454d9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=97f40874189e14cb16065c514c94aebe8e33781a63a324cfe2d1dffc6d4c6bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=864aa05814b9ef35aeea548392782a1a908ec62f850085cbb12da14c62a67f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=f2496acf01d83eb12cd23290dfae3deb501ddd33e0e90b9065444cf31159e3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQS4XQJJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEXpxFU1%2Bt2KcRY4Key2rW18vil8L8a2mrIHKQzxRhEAiEA4TkaxMLclWaXiDxevPpzOQqCpJXsz84fmUp3M67futAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtRQrbTWtLBEL95%2BCrcA8LYgef8J8P%2FGCWyTrIwF0bGZmoW9Dhv7E0Caop7HfNBwIY7pUNI4D9QMGZDDnEb3JmN%2B9TY5eq3TqQoOdFfj8kW01WVpVAFdga1EVwCeiOP9%2BdXlgjPvzJ%2FhbD5jXzgXjI2QDD%2F8V8wL2bxAsdFAQMOegiGkxfQZw8iqfQGX7inBzpdGsOf1aJ%2B%2FSRb9F5GkUM%2BCQy8C1ti%2Bo870owwlFoFkWMiMWzUxXg47K77OrAM71EeLTv4KuvKmOhweeeH0dZUFMhZT2wV8CLdvPC3HWVoB4VWiiqNHfhNuok7GxIaCSGmGdeP89KfyoKleXBTPxhRgH7zIw13rifK%2B5pvTClf8FD50Bsdbq7tvEYD%2BgE%2BY8RpeEGxQxDgSrt1R0IwO8IR8e8OiPXj4nk87a9heTTUbyNnZF0jpcYqXWglaP1GOYYa%2BkG3upYhrRjv9EcKroJX57qkI1lyaMOKTuncGYdl%2B32e3%2BBk4AabshimKrJpjHzheFxWxM5vqMwRmeTukqNsVovERxh7LuYTbwyIvKAQ7OxHPv40dupccY8E0r0%2BXxSEKBgICelUueRVkWmlSZAAPFkj3Rhi6cpn40NU6DG%2B59rrXCNX6DUqT7Y%2BBtrXKMzdfig3Z5BMpzvEMPWK38QGOqUB1CZvmSKmbkvEQzdSw4n1Q%2F1SZ%2FNyZ8O1gyJ3vsYf9tJKX8mq6LbX6guXBeI9qIshtM%2BE5UN%2BgxPDs3u5UE6lXvm6LmNSZxloVH%2BHwKLKWfh9pVGZsGChAdfJ2WlBOPSYXyHiouCi26dZ1S6wrLyz2ppSC5x0S59NN2fdVOzccQswsWMvE2dQyJMIbh7LU3TLL%2BvQA4s1fsOOFxN8%2B16vDBNz%2B7l%2B&X-Amz-Signature=48a6a5dc5b97de6f53b8fa7bd4da63a42e592a4bd127b2bc0f677410f8ea56ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=02f3ea087d4e63b562222657bf5544a4a4ee84dfd13e282d39025060a5919760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=fc9ccc3cabccd2cf73e36574adc7df188ef9b176c73aaa7268227c8e17df9ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=5e61b101f3c893a1da39f6b0d70d5c7a8ae79370033b87ceb5aae83dd36dabfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=653f9982a53dc8e8cc37042ee955d525547e6de525df96ef19aebc588940bd0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=b7874aceb4aadb90251072e76d2b7e251a7ef1c6c968f9635a65b1cbcae3fadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWDA3L3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtPjY7VveNrs0NuqbKvTi5yzs8qvl3SmDxOPx81osKEAiBqZa9a3WDq785pQNoA0%2FHPyFtgB9%2F%2FFmPG2EVRD3kO3CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BiaZzu8Lea92AQhBKtwDAUq24Em6Kv6wfmvqwSxUUtJLTa7vD%2BCQ%2BjpiEz3%2Fa32js2uaKfIc%2FQyfvhCrMQbtcGy3G%2F%2FrTcaR%2FOvx6PV%2FJ9XCSLe1CIzaZCipBePr0aNpgQ3k5weysauPtm3w02Wdc0AhtQCV%2Fa8pTMpHPkVIkIa8ggiDqXamMbPkQKvaJ0GbC6DhWPAZMT8m4WB21yCiG6W%2B0aKqhgMEbumF8I%2FoavurURY%2B2z1jzAEhKqfhynpGikKI6FxMlnXGAIqjFceykYCSYymWwnsWoZ7zZIebAWJIF0nCXug2DnO5rGz5ct73Ec1CcE8SB%2BRxf%2BJaCzSyVVIoGriI7RpATvjblMHCAsAKAFAm53lJmmnXLFnShHB5v%2BbIJZBa%2FBuyghY0DXo6ALDzPrun7rjjBXYMycou33S%2B1T2xpWAVIlbBSbWb2rNG0CDRiaUbQvD9w6B9EAh2e3%2FA7xUuGui5WyvV%2FoHOXxW%2Ba6X3n3QiMl7AOzqtoSvikSX5FCwj5BdPbZ7rP7ZV2oLSsWyL6qrG%2FDZf5zp%2BDO0ah5Ak%2FmopXK7xRPwkUP2vcZNIlb3XhDuUJczc1uejYuOTalpqromu8jhXGFiplOi2L8bWE47cM5fNb1wbFGsc790QW4O613Jb5F0wwovfxAY6pgHbd8iRqD810rJS6xwE%2Fz3YCaUHI%2BcI3EfEQp4EGwGzYC0mKpZ8mgII0VysGardOOW8xe6ri%2FygCnWQGviU0OVJGsMi%2FU5YtnucbNrbL9ltSnj5cwsQnDcrrmMt8k4kWM1aM5ZFBDq5moDb%2BpLM%2B9pH8PV9JICiJ0gPxToCHihMgs2GC%2Bw%2FXPeyZGt1HkDRHHoBnaCvcxxIpQL5q%2BnooQ%2FdXHPJjdos&X-Amz-Signature=1414d4ecf17d48c0b48a5a18e7cede0c71725cb7e16b28b207274dca5b88a17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
