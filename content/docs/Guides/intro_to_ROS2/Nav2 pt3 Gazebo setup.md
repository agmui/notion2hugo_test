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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=50c714529ec834280cee7a5ae4b3771e062964e455cf346321149768f2b9fed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=1d112ca7a6e7914d2467cfd23147e91c9ce4bfd7bb9ae98e2701dcb1eaeedd0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=f351a9418699343fb28d4523eb76b9eb9bdac464fdef40f699598bd04b112c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=949092451193610ef418a747f0026f5348fa1803ce1e3f7606c33e472210344f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KC24IU%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFi9W%2BU1y7DGaUJm5G3bWPtkImGl4sHbeqzing%2BB2nldAiEA1eVGJ7gglnaGTriPjgtKObKgYUoxcV2i%2FXU2bwxkH%2BAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTVHqKeXWT3CfZ8circA%2BPw0G8ihM%2BkCFXrSA4Z3bmmyoRtlZwdkr7gxd3hFXnb%2Fb6vhmcLywODskG1YbfsUce0KGe7ehYXrs5d3FkIV28c1ktx0QdxCVsZAPlaK9CurnjB%2BaVTjxg8KZdQVOT8PjWpCT8k4vIxmQo%2BC2P%2BZNTDmJvNtobOcK7X0maLh%2BExvDW0m8hxfYkzWxZHXTzouRWLiQIKw5eRUfTcicGURgRzTgf0o0e7m9je%2BlPkXwH0lAEsR%2FQheuX7v%2FxMwjWeFRZ3TSzpA8XMEUKNgqwIelapKEl3%2BaZav30hHE6Y8MPibKROs8hIQOpjoDPv%2BOrjXDWuyz4eqH5zPwci4yftomNAqfATN%2FE4gLxLNLOePtZb1stHFsu4EoQea4bi5zEZYmFHb9R2jbjdERenm4nuYbWX%2B0mXAMUJAQNYSlkVanj1HoPWmZhjV8nsi6Bq1%2BOg8xbdo7U2RC%2FoXgiAMqOWbJkXLKsg0zr9ceYriZQCPtjotjr%2BbRNh0GAjSaOcS0oOLZdeD6tCUsxzv5GnStpywNvOHnw%2B7oCzHzhmUMDiKlYa%2FkMUs7JESRhg5NZsuYl6n5KjZ2DtQmemrrKIVaC%2FCVsNhTMqRRZ%2Bsbjw1cacaYzmWnj9EGPmL7qNEADfMMDE8sUGOqUBMODWIac%2FwmHwzS8AikwkgabM5tcpC66f6ddcOBgYpxB3XWv79GQbkgmbqhjg2d3z%2FW0ldd%2Btqiw9TJhFAudWQjOwoEwKs7ZlMDs%2BBZuYmriOFXMVE1fYXN%2BsgzH4nxNbU3rLvXTRBz9zFD25HqvXzq7bnh4WfN7gWwsoIX2cr7jk1%2FkExp0v0cxX5YmS%2BIck68We5VaeQIruTrO%2BFb846cVXOWBs&X-Amz-Signature=3c4ad1f0539552c6e2bd4c3e5846a6c4520ec415f609b747d796f01cf45c451b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=0f8f4567ea854883e2a77504f7eb254194596836a90bf81fa44d3547f067715e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=3817d511a24fda02936997fc5f1a2a48a38966ce3191e15086410e626194373f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=54d6d07e692310f97a70454aecd92e6a5e8d0b49c6b662a66a86c305d301fb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=64c39efa8b2740cc805d5250f575c3325cdb1a66e1fbf54f3c31eeb204017911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=02679a7a22947521d6d8019c923ce159732631937b80c73d24ac1df9531d450a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOR6VGW%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtFWaEpiK2PkCAFfARQzrmgX7eMdbVLJw9YvNCVk%2BeEQIhAI6QOYnQz4kaLOYqDquz0Or4A1953P0u%2Bmt29QoVllObKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa4rsh1TouETjKRkcq3AMc2CAwQeZMCKvk%2Baw4dE4Mbq%2By3aTDjC9UBpRHnTYs4ij4p1%2BlH%2FdvABVE5dua0zAUBcm2X0IpaGbkeGu5vGPdkFXLaOQBzQoIeZTdDUkyeMN3YpuSzdPOXqXML9ABETOY2dDYG%2FskFTPUAJChO82Vzd2fi%2BmPaKT1medBpjhW%2BXfkqjOiWIfmiS7xWm9mNrfPHH5iBbH5xTC8%2BAy2QH6rIdUZJoMhGbKOtpy122AIUaH5L2ptutSIsjSh7LLCiyt6%2Fn6KyvZI1GOeiMT3m44bEMHefpJivDH9xY%2B4VGm6O%2FryPFSTfXzNxo8s8psub5OW6Jebrzwp5SnlQ2NOnkpkuM5N%2F6lcErvWkk%2FC%2FfzV%2BQtdLB%2FdrSlrruHodb6jsqVf3Cxrvo3zB%2FG5XmBRGLml5O5CFLS3fomxwyap0nF0jNY64Fi3hT4CSnoLjojBDTOJxwKVKdHAt1Yh9dne1zPYZZNyn4gg5LPD3X1NVpix0dGg7kIGiilws8pwQlyK9gt%2Bb5GlpsRqKNJQELYCg3okP9L6I71w77%2BIDEZE6YU2wvRfSbEkmKmfCZ4%2BTxqxmbhIyNNxqIh7ytA314Z6nv%2FWYgoNdnEX9Z8Cj1FYKjjdS1tlz3Uo8BG0JGhgQTDpw%2FLFBjqkAR2ZLmmvyHUkjS0sojsEFXhj7TTlXgiH4FmsxMeXBgdA9FYH87QpBrBND%2FvgzuMsVsj4IqlAj%2BB%2FIcZNZAYOljZSmvk36v4MuCpDZ91xvqY2cWJQ2GcULc006kNQrL8cCMhTmOEsajHBlpAhJjHo2UxqC%2Bx5mL1knqqrSIhYPjJnMvnQoZMxUCoszBHYFZLimrzaryUNHcWEc2s%2BRJfWFpxqS%2BPg&X-Amz-Signature=8a52637ee0bd419851ac36a591050381cedaa3600b6ad60738edb71573fe4a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


