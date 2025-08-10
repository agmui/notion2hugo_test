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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=11e506c1fb6d11cb10ddc99b5afb12a39fdd1e5caab08b8865f86e1c83bc8de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=840a45c24b0ebfb01c4a08ad94f343491ea9f814780ee07093c82dcc5b4aaaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=96cbdc0c54e8ba59896cddddccdca2d478d90cbaf1157f4f97ebb39c96236b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=b313ec8e58824f45a9d6b29343945569c931394fd19a9328cb05944c2def50f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSR6O4P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXQ1f8sMAWmbPBVZgxzq%2FkyfgL%2BUF8yQ6kIHKTJX%2BpJQIhAMBWdha3OFAmFw6d3sypIYfkb9RcISsmQEhdoVrtsxP2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygceqzXwlsAV3viMMq3AMLZIgVZzTmfyFBDSiIbKOAzn7esD7EzfqGWZ5a8kMcquaSslZ1M3x1pYXn3SH4KVLavY5QpOuOpgiOsNwzfOitizO0dD1MTRhmUHUEx2UJzgk4KWFhMfK9O4fcpymrFucZZnT3hjik6S8hj8M%2BKeV0yfWkyYGMNP%2BgbI44Ihcpc2ig%2Fi6UAAwgn%2F9fs9YYKyQBsmG9G6K63qJCVz1nWpCX7vxrfMzdAARbUmf1Ai%2FqQGrcb%2B2YX9ds1d60I2IhJ9SthYqKiVbH8iyWGFRDFUR3ngNagyPOaxikvsK4tVPI0xR257CNlqiCQFWUA4wa203scZjhBbscohsHWSfd3bV7qCQE2kk1ahICp1QIi8fLNKHcY4JejV1CrqGQwVuz%2FqYB3xAU5evWnRbTzB%2FD18CJBA0kDbW3QFXbhoevHgGP8SCy0sMxnBhQCSxzYVCQhurUh9s4ehOw0Lnmjw0K1jtKlIdgqOQGqoUuZ303tdMs7ubKlM9Z4dMvuwI98HbaSN%2FD2qGirETxm%2FrjID5uZbqGadB7Wiuj0yK7lPZpsM%2FoKXxwJBfx0Ak4f3CWS%2BQyNZZPfGBWDsYQ3I%2BwMMzv8I%2BKouC0uuCank9twt1Vsc922dVgN3BdleyWVZbusTCt0eDEBjqkAcrmlMAsm1yuB3flmkDrP7ePhP4uiCAsW%2FBE6RHrfExdW%2FZoNUcnW4BC94iRj34qyBDtjPXKuuBCkQkRZ%2Buo%2F5SBFE2%2FslI1et1SLQ6lb4mNkuCOxxxiN9T6oYOOseRtSg7hAQQb643FbAZoV8B0uEnltVXfhKy7DqfBz46jw%2FSz7XEGbekQMmWtV6ePf5lYathL2%2FOrAjJNEmj4egxA2NUWWmNz&X-Amz-Signature=75aa4692a92683eed995ed8cc638f6248fe2d8e191695404447dd559f775bdf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=13f6c2a28f8e23c4f555671455c20550159ac225b1228fd66b6506fbccb99710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=1089e53a1fa5d5fc064b692ff2735b2f16213a646ce7836183e6b6711305f26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=d74fb85bde551e5889e2ca64c3a5b8e3db909b27f132219e1161c4d5becf5179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=855d87ad4fdd0a0720cba2b1e46897d7cdc865f8c44a73273fc6b9b4e04b5f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=84906a590bbdd81ea3683594e2bdbf80a1ca33ebc0eee84533b3be88015bbc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IDNMGZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1HYk5NbFxQhCB4ZiGmqr2Mxmd6f0PKmxBKv0E0sjsgIhAN%2FPtYmNdzfGaEvjo9PzIuv4NxUyXhLChX3nTq0GJ6ATKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl67NK4azAgdYAjjEq3APRiWV97x5cV%2FYTuqLQVHrKhLyTTHn2t%2BJDkejc8SpNwDYs%2Bfz5PajFCl0Nra9oYoAFTZ582N9I0k52P%2F5%2F5z9DLcMfDoOQg9UQ4DeuYMbBcUtFRXDDcoF%2B6CDcYN%2FUuaSxpcxu%2BDJqfBRar97Q6yEG0mnW1quO0F%2BAm%2FWA7ldmkyh6sEXbg%2BBrZ7u%2B37YvWQnms%2BtoRIUGBZwXoZSkAACtLJRxhN9%2BOUt6ENFYIHkNqUYZ74FoWljvfGCnIaP10aNsg2ygy2a56UILa3zNXTDSUgEhUJKi6K3G1hqMW8s%2BpEZSHdXqY7JkNnRF9fExOsU1BeET8Y6bYqHwdTvZmvZUAeV5DmJmP2AUUcq43NW7FsegqaYHqEFNeKakPj%2Fo1s0X5KAVEehXuDCyg42UTbWKO8A%2BbGzu9t7Lsmp7ZuzGJAPGc7Yaopxg18tLYYko3rNeHBsgfGJbTI91PMCN3n5M8W8ltMEebHCN1fHm7HZAfGGBi8UudaVi%2FV7qVoca6q6kQN9WbPgBz3g1cWc5XJ%2Bpra7HallzNMuS7puxjiMUT8rmKGznmb148hzZnsuEnRSLSUQ2Fxvwm6h3DWamNn%2BXr0LcvRwDu%2BwvqQn4Y5VPV5TFRYAdhC7UcttlJDD20ODEBjqkAXtL5jxiBHkNViBuuxZzN0yzTebJGLj4sjk2F1ShZ%2F0CdfiSwxnxDsR0MjvWfR7eD2W4wpLyPko617CpEJ%2F472rrmY39%2Frxqq1O6TnTa%2FkCBV1x7MvaqX9y5two6QvezvxTsHdFD%2FUAdaTZmfQDIJwfDrAjhbrpRKjfjoiny4ILQ9XRzUawpGvCggtZzqrHHZ2wibp0S%2FC7GJzUFM74gzn0A7c9B&X-Amz-Signature=af806e6c493db2626d700c9db15a5b376fbe54e550f61b230894b1831c6db7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
