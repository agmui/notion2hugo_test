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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=887efaa7a53f4dbc5b87ec45ab9e551ca52bb9ea41bfc022f2b8cfbd1bc12361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=a5666b6ef03022388386594d60ec06c0f06d05c7aafbd895741db62c9310a648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=60219c095c8b93b3abe6968ab4164284c781ca0ee4c3f6870d764fca7dad891d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=d02c442322ed2d84c856c6101859b471d66098f3d27520e0f48974c22615e613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGIG6S2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB3h2S8G5uOCAcl4TqKo9qMP8ZnCLUGeAP610YQ05D3xAiBMREB1DQgizdynEJgxYmJnsEAamCogwCXbJ%2Fta0N2p7SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWdGmfrL%2FOP%2FpPSk9KtwDFAq8pn3oRYUMXz41iH238vsWAAkEJbHdcSlx9X74%2B9SNiyZthX4SaIN8BNi5Z4plWZHrTlMccKoQjrha%2FJBWbcGiipZRiSGz68JVr1lTAM998DbU3LsJe5gnTeHutlPxtFjmIzTVwLTjQ5EVe9CGFG%2Bo1qgpoWF73b22ymt%2Bx5j43TEfjMqkrZmoHCFXUs4h65tjxVwe%2B0uxxYW%2F5T%2F2O2FPzAmartFqLsygL0i9rD8ZCYEaEfakxAgW5bi9o5%2BJyjm%2FA7O3D%2Bfx6yFu9FtkzozUuR9C%2FmZBRYfL9LeGWAK1R%2FvhavNqHP4lLOo7UNqhSEMia%2FD7rEBRpR%2B%2BPDYzzcHAwXKQSxMSmxrRl1%2FcUIYjGY7OedSnjlYQ%2FvmtmrDkv%2BSZXtlbMlFbEX5TBh5nL%2Byb%2BweuJwj9dFFrLolFk3cW8z8Bj25B0uS8HLRi7OjJff%2Ba4Yndgt3m%2FtsWmzMlvLFgT51kWfm9%2FZQEmaWxWQFZYmtGSpquwX%2FDit48X8TLYGxtd0KZey1lvhSQNAviSq0ROIpDG6EZAFghTEKrNiUxt6BlyMHGk0fb7KKh6K%2BXpw1kQYoUkms1JuXdX2t0sqYbZlQCoTTSkCaU9XVwq0UKqiZNnmT9WilOlpIw14HYxAY6pgEH43PkapRmg4WpC1BWD72e8HtO8BEY8976odTGKlDdmMFQFzRNMY46dFJTHpDapwG6Az1UYqJhmAJv04YqWQgYBww3ZAFv5g8FeS9oMBjlbsRsGwiIxPKGwm0y7bP5I6cotb9bjYhTK2lBhM7QdpNs1x77BN3kFqBnBnqhBlLdf8xKXlkHZOzRifAyRU248hWJv7twQf95cDyRfZGejJW26X9KcMNM&X-Amz-Signature=8e7a4e32572fc7e0f6f114a93f582eeafdf64781b30f48a6fb21c467cfb16fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=ed4e8a1976d053753b9900407c4495ce5a5325c7a1a50336ccd480971244bb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=af09e1036243c142294661848548ae442729ec85fce993e064dbc6b29a02c27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=ae80ddbdde263d937cc86116e7cdcfc0e145dca746bb206de8dd895972db9e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=5c123804255f6c5971ce62c81106e1a6be37f048b44f5e08fa78c3ab6395ec7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=4217f2ae91e425caf9a4d8cecd3e1af63571f3faf9f94a3502c1dcada3cafb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBBZSQX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDurIWdA9oYmwkz9AndmmQOCQSO6X2OM6fLDmPd9Q5EOAIhAPQLD54uIO0bFgGAHRMmmjAJ5HwDxsWEszLTmTkRAh1bKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydjp5%2FizJ8HCf3PEQq3ANFuwKSM5udVkLw4RBtvt%2BwsyqTeEjmwSQBCSOpi2eIzVRa3VBUED5MN1aHOX6H20AyPlwMgiONgqwik%2BRBmWMyt4n2wolCkC%2BbfltulJUg3UqT8ldCGpT5cJvt264CuB8BeRDE9BEcDiVz7kofbdX8N6UdcXpoDD%2FDUyIONym082ShfUZV%2BGGdYFmpKyA8siKWl43U6oHdLklYU%2BNPAI2qdgSmpvxXZdEoRJDtWnOrFb8ZSS2tZYcSY8A3VkIAdYC5a4MN5GszMj3E%2FcLmW0iOZUI5Lj8n9m6zX%2FTRzbUVq6tCOv5%2BSoXfpk2MnZXhRaZakJPTUrXZFXyJDJM2Z%2FsBHVSEazMcEMUxPVoqKtRL8tOFUhK%2BNNC4A%2BqVeYxOdzaTw%2Bh8Vu6V6VchI1ZqwxhplO2TPQ%2FEPnK9i6Tc%2F2HJXNroF7xziVSVPYhMp%2BOkGE3PmKAAYIGmV5HccFFRr%2FQfVXpKTUEe4cQhQ583eJBQIIePVOQbM3Afyg2%2BYc2uD0L1mhozCaJ2%2BeFGDs8Y%2FrzjaxXG14aGA4YbX%2FFSfNIjJBSea6%2FT2WzcfzZfzSyXaKMRkezcAupYazIIIeVk8pnSnORuQrB2%2BDYm%2B%2Bb%2FGC52ys1nb4c%2Fz%2FnM3sZXrjC9gtjEBjqkAeRy02tOXMaWtEN7yDL6lBb8eXc1ImBqZ7Ko1d0GTvMnhZrAde36PnGqlG%2BwPkALY5ajFj%2BBHSb4TN5WqE%2FdizgusmJ83AibeqVXEBe3GARzRi7Af%2Bsb%2Fum2tA8rebLQj0eAwFpNLrR9PF4msXAcCfmGNqQJF2QepL4ecy6i%2FmDu9pyWiL1ibDSnmR8uB6YwyeotoEZfsRQ32%2F0%2FWWt0K3o7WlNn&X-Amz-Signature=4e7bf2e594a8454e9579d488d54877ff4d53f28c5743f823fd64dcee46c56755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
