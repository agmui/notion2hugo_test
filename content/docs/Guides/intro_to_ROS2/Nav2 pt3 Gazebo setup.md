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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=aed322b595fa5df11a354a7430c8cdac7ae15eb38323c6cdaa9771665b3321d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=1793b8c3afe543876447be320ddb77d037e9ebcc9b5bf848286e61dcdd387e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=4264e88de64c0f4f3237e3261961a94ca51ee52ee730a60868bd973c732ef077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=bc7895102cae0898d219ad3290a8baf6639a1b7da6d48b7f786073dfd0998335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAW6LNFC%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHLosIrZ%2BfW8mpq%2BATUvky3pJBrN4oC1tmSS7uaztmvNAiEAuj10aQTP2EbfPu6Y9R4TbI5JbvH4YmRbHLu5kM2UUSwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG0sPxg6av%2FuysHuSrcA9yHDOpU4a3owOE9LMMhEyRCjPMbM3QjQN0W3V5V4i2kLfqcNUC9ya4oKihJ%2Fhn%2B5IH%2BKE1vxQyV%2FAMQV9B2rvYzlYa3JBL6YT3Rru7mGfFpDU1VOz%2FmDcrJWGPLroS6ijdb68dLfeEZAs7e%2B8DL5uR9hTiI%2BEZ%2FOXSoWWjMqZrj6pGILP8FhcjNl0olB6su9OALTVAFbfMu5R6Q5gZBag86ze6N2E2kGEo%2F%2B%2F2qFdZcW6fWcSu7nxd9DYq67QetTKx5wQda2%2BgaJydq0ECnL9h9m3JvR7qc5kR9DHSGVraJHN17v1dtlEv320qtSHuUN9560L1ObUAAAjbFxEn4LN9PkC9H0lu80NFeKIBm1PpN7vjF1riaJ2UDhIUxgk26kkslFQik8US%2BbW3rMYztf50Kc0eh5xwsTTs5siqxf24q6Y19bZyfEnq3SIE9X4tlxEbwRhDYDJfDPK822M1rkLiX%2BSzX8SnsE0nzPtz6nd4fm5KDhBeD6QN%2F%2F6r98jXjLjZoqs55G9r1zSa0jo35fOyTPgVQQKXOXSScL3WdkmHuSfBZoDom63bX8RYarJneDgnRkWDz8PbTNDQbDSvEc6TFIYYcCOlJ4395HHGUuXVRkAsWU7c6kHNMuQ9RMPr8i8sGOqUBN3eTHPlxI71xDp0oukE0NzUbBDd6UizIGvvdvmYWbU6WDBYTYJSbEC%2FqneuGOBP3HqotfQprcNRfSIu2w4KlLCn%2FO3YzeMJWELEy3RZDJ45EzeAO5N9dtwechcuDVz72s2WcY7o8ABWl0jgPPIktt1Il0B4%2BYB2XKJ%2Fup%2FwbjoRlLwhQ6zxIEmvHYLS5tuOMOVSDdWBXpLlGrqR7odjkVq6HoF3S&X-Amz-Signature=39adacdb042fc2cccdf90569b98c94fae87b51130cbb26ba2268313eab4935e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=fab07ad1a1c2816a3c6cfec6ff30b3860aa12d9685a474996247c33f7c731768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=0158dabd59dd0fa70fdbcf319adc5e3f008f71f414312f63b3a27446951a776c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=42a71981dd698a1b304edceead006da5859a5314b28b52405f8f275a64e0ed1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=2d969d277e36cb228b65a87d2a46736fd505d36cd58c95a97502298c5d1d78e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=ae1a0c35bf8dcc7aec8911232f6ba0406b91d602764bb4ad3a6ea92d419050b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZIIB7OX%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCxHEFuGyZSoMyo2roTQGvL9ohQiG1miwKiOPuqIUcTNgIhAKirvaMQf3e0oi7JBgKg8Z60DJnRD7lqR0twEg0wyJVCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeTCtf5gINL9NV44q3APPUeZHlSzJEUqmj7GQVVHTgR%2Bjap%2FSUwHa80dGhSLBJT5HXHf%2BsggqWjCsC3p%2F7ZHt36LId%2Fs41cMmIoZuLXyDAs9%2Fj%2FXYawMTtY9ycdO9AgojCSIrURTa8g5HyIauOvdkGsh%2BpL9BgDj%2FEsGtie3XY8uoH9d1Qu8FZbfSPujQGXxH6N%2FXRFueE%2Fma%2FJPa6jDHpm2MQ3SmDnXlUalRHBIEPIfppITJ0H2Q7%2BDOL4z1K%2BOeKu3llDsxdbFHrWGZadB7KR0oTkxE73%2Fr%2BJHJ2RSP8rigbrh%2F2Plev6iyrKLfk3X4uQesF2eads3D8Sb6u4ZqjoUA%2BYFEzqRrsbDu1wDzobk8EpBEtlD6tvBRZfyAky3dVMBmh4nVL79%2BhTO%2FLpn1FHloyJKfA%2FKh04dCEXoLx9xvM87KM8FVV8vlN9r5qwI%2Bj8F9Xl9jdDN6f%2FIgMF2Q7cGk18LT9h%2F5yPAJGMoSzoTNwXBIGwPZ5fiJ%2FO5iXpzFD9eklRNbhEE0L0eM5xYP4%2BPKuu5tbnKEjfCTJdMO8R1ny0%2F%2BeYCJRgd%2Fw6NkPu31KHmhSNKPIO3of%2BGuhx4XpHDVACR9iCQj9z6hTBzaSZa%2BpXG3jNNmZvUT%2FZEEXkXeahIrGN3w9oE3%2BDCVg4zLBjqkAV70rq%2FdNCnGc0moSap5nEU3h2ZR1zv86znhGdYyMfPf9Q16enS%2Bt21QlVPgL1JfQxKLc8I3uMBgdptHRwa3LNdLQACaYtyaOGaJsL%2FBr%2FWfSlRbWCXxfhezIwva1NiwpwUCBZua8sh9Nt1U8YxRJOv1MxiLue2oqtfB16SHH47Rzdpf0XmdnATxEnrodPhoEWS4SZWhYdl2TU8S1j6Hrd5E4t8p&X-Amz-Signature=1e58353875caa3a66fbe2f87e881e7f0c4205e583a8f1c15701de810f4977021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


