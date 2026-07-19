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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=a4d3e07ab4e96a829788a1a00a4aa9b91a8997851032f8d735c2222fd1efcf7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=e1adb733cca0d9d5207e41009366794aa0cdde6cb8e8cf6e1416dae9eaf63bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=5b8df37967d5dfd9a813b74e7b7ed6a59af04aefde5401a166a2c0f576739f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=a9a9712793b8f32b1fa9c2339dab1a3ff58ea038560019af6f559a690afb11b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBKHK4Z%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2f5%2FBizkc7n44r0%2Bh7jk00HSNYoLX%2BczN4KNVOVU3ywIgBVmb8%2BVvEzf1uDd8qa8KrqZN7o1mzHJ%2Fa4%2BnkQ8PsUwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyVWrD4NgTj%2B4Uz%2BCrcAxa9c4Rp8id8GAWx772CWyzXs7UMjKAwBeGQEHmxNfOdckN%2BkhKR0UkILTusgubSWOEQl0AUfiyE4oSGJpGYVX7WpbkJNHm4yxwmB5crXGRm23uqQBYXdJ7y%2BQqyA2mUh8bW9eBw6OX8n%2F%2BbPXCmwEG8qHxjdUkXQsFQw5Mdbr3dOUS06Oh%2BhCfDG%2B5PX0YXa7XorO%2FTYpqWnlILS77wpn6QDyDrqqbAznIgdXrx3M%2FFyOYoxf49Pai9%2B%2Bb%2F%2Fk4q34gpcKHbfOEqveISNQWm%2FUw9dWhPi2Oye4OIqqSZzcnGU7%2F3gd9gPjHVsoP0vcaRjWR6hTBMdJnqN36kLdr3EgiF7y9BFVs3p3mSbQU9JcEnGNQyq5tDqE5JwLI8kT2kCHR168jQhslDnv0t5s2h6fGWeSSSp%2BKYcYXvgGDyo3TTDLJkFnyft5XKNlj3C3rzKCL6PPBqtr%2F0GbBThDJQHp8obXNlVdJIM8A%2FshaR5Y%2B4GAvZqfiH5saQ4CoCietL1ZWYouYhJXmQGMYzXq3E5E0V4WVAqNWFbFhgJJh7Y5zNW6TaXznimcHlyNNqHlaY0%2FhNK6vyh81GDzERAEGz45JtdOlVAH8azr%2Fii%2BEvAUQDqTQDIXOG8ZY0Cw0%2BMIHX8NIGOqUB2AjkCSx823xSVyph6qLAU0tyXRBcFAiO0PmaY0Y30dhAKbBWusP1O77MjhX4igVDrqX4l7LV5T%2FKJMWYXd%2BgpVJGKFOdTHd%2F%2FDEcOoexwSzxy0myNTDZ6GA6wy1e75eXV6Hd2eqlU8yFMK7Ms4KyAp90ezGYKhG%2BuHsrRdLFUaSkIEPqsIF1vJGmg74%2Fl1E5VQM%2FXNCfDFbsw61xP0szevAO4n0B&X-Amz-Signature=e08bf64a883964f7581809362a7616fcce8e184613be499fbcf3500a99f1fedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=6911b55dcf7ccb01c22d0736d73813712c28ae49c642f61915cbded1ee85f73a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=20c1fa7700fc6a2c010610cd3d1d788fc3a427b8db44e89a34faffa7c8249760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=4d1f4396d2b1e7b9b188381d6e56e4fa7a6773cd481fb5bb1d723635a4647216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=fdfd41b483646a6363bce2b65c5fc189551f47e8a1a24f0897ea7c29b29509e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=1cc48ba7b59dfc729d4136a2a7128c2da703ab8bcb3707950357af828df9ea51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONT7CFQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPpAePvoctlgMuXWVSqKlKyvDQQsBmarTJQFI9qVYjAiA2JefXxIxB5wnlWoGsIBnSUu9JQRGnz6NGz4WNRJ2XZCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq%2FquIhm3UD43yipKtwDjepTpnYQag%2BgYjvqGvi13SwWgrCaOW%2BL3%2F0bsENVvuW5SvCaZe4VdUO0RnmoVBUOT9nw0mNd9uAlNyctB%2FIO3rsGPV7nAlV1yN5rNPSAUidzKSKum2L7%2Fu16zPAc1IWTfd9Tp2aWfREPMKOZINoP8AOqtJSsxn%2B2Wz27XV57QKF5BZlWq1o2SGfTvs07dtpzybk9N6NcqoBwPO%2BvV%2Bx65Cw6sceOQa2zsFKeylwMaayAyXSe85B%2B9EOXIrVOGJdcZKN%2BJ1kVWQs1cMQGGskELHEmtyKBc%2BRO3grhqu7CTdj58KiVMgr%2BUeo55%2F2muVtx8MIkttJaFSc%2BijzbWUofI3nGVeznqZKe4ALq6pUEeYHn9Kxvf585NIH%2FWZXBwgi9cW1I6c9mKxcPO80nWX1jbWG8v0ZgyG3Hy9wE%2FEK7CWpDBt71hF9ciD6caAPCr29Gu6lE6IvBqngqMKJbs2nJd%2BLow6zh7dcN1n5HpJPTZEZL%2BDX95k3Y7bzygklb6O15hhHYiwO7OFAQn0zIDPO0IXwelAyL3r4W5H8KTm5g7l0OgtyvmVybMgn8iK9Yei6YylND2cP3yFr4chLUmZVR8qtx0PU1aLQkulUbvZOov4ViD%2Bd1pJjTDAO3hS8wlNbw0gY6pgEMSnbv1FUR105RD118Sc79iOCA70aWaz2HkqHjFZHUu2ptiHuWZQQ%2FmEkCuMoTEFBnnYiPoYI7OnHXTm0831jZH4I9VEtWvQDDux8luYlCkY4z0dirf5p24YtESHcKpYh5yBbReLoTh3256xFwSiBcZwYO2Aw7eMTHSq423j0iOUpgyhbutvowuXTuQzQTJP2d1svTGMdml3BTWsz6BusgQrAFmd4y&X-Amz-Signature=b6e45968b5f5987beb792c69a8fe5a54a9ce5392bbe35a0848f10028bbb2cbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


