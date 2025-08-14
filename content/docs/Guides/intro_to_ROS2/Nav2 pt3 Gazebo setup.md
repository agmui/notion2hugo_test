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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=d3eefb6161d9781d873111c2575f416667941394f9419569ec50ed930bdc6728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=79ba94be43ec195170572759cad7b0d754b9b3e5be42c5aca23268048bf39180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=66abc7d852075117f51cabb4f402312a83845c2fcf7e9706147a8d41d1557ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=714203d31484ef2c20934914644fbaf3bacfde1d935cede32d8752deb17a712b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWMOBFI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCID83MYvXt5bvoXMddzdnTkwKHxhikyoAOHrCVO0IkJ1OAiEAguLPCxThVksZF82JiJlHLbCVWKhAFXWPhAH0kQ9jlnwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDD5f1YumzfSg4O70wCrcA6rM79dQ9SM216CwdkBFJlX9jgN5xEq4hLtWwCR0M5zfGn80q1tAn0LFYYg7YQoT4fiQevkukrB8u4DKmM7d7%2F%2FcSPKVOOYIeQniWLjatFnBaXtMoLdrvzIT5fxe0JRVJ4ghKFmpABOFeft20ojEDGB%2BOC2VlBSKBHWwwE6Rsn2ZrQsC49D1T76HKJOElZLFd3yzg4%2B7icSHcgnW7zLEy1s8Rl8FPesAdkjvuAN4BbyNreqD8spy26f%2FtbplJ1qI9czJX3OSx%2Fr8V6zY913orcHPB19oGLs0h02%2FwHgEFTr5pP2iwMKo6KknKZi%2FRSt6CQRrVACcWo%2F8uYAUzFT5N01b7mEd4Y444fQln4l0HBsVkjFitU%2FfjhY%2FWCmAvb8wFOThdwebpT6vc6nyKTHlZqd7ekRhd6iuX4GuUihy5KuUhAk9z8Ba0OCV7%2BqrDtNw5pdcfFewHyyybjs9yz6ysOU%2BkCEbUmbZBQyxPsjSVdkaxYCzfwpaMf0eENeTp3aiTUb2SWghkGCEy0eIXDU7l9yteQE5SBjP7%2Bp%2F2NC8ZHCgyB49Brapn7rDW2s5AnxZokTZJsEe9i5vlZ4VrzmCJQFof9ZPv3c1HM0RdXGjM4zn4VxURYXoaZw1TEv2MILD%2BMQGOqUBYoWaf%2B%2Bio7JI2J5aPQZTKTJUZ3rkptYjGZK1EHlpe3JcWKHJ8B8YLS36E9EKyDTYTdJTQ4b9s1afxmaaJR3ecnqzMWZPAFF02m8g3Y%2BEDDnbzoUJ3prmXyQ4ArX1Oz1Bmu8GMr1YQv%2FFI%2FhgU7aj0q%2B2l%2BF%2B2YiU7sS6Lgu7fOebvQ2z%2Fy1PiM9P85YVYybIeeeNUA7zNcj9pSUGyDinAWap8wF5&X-Amz-Signature=28b3f60139ce135936e319496747a29e3d0937946b27cf8102bbf768891e772f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=4be0d398dabd450b6324f79b797661932a1cab240cc4f9619a809b16b5d7f2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=6f9a25552114806254047f6d6fc2285d0e6ad20b45d89b7554fb6216a77145a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=3786e906d6a84f7df61610965fbc2dc4930e0a48bd913d5ddefe92591a979326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=2c7143fdde0fd73e7f05b47aaab89dec75fe018763de1815347a4adbd817db39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=7281adf4704ee70976ca4ee5e0cff1296bce0e4e6fe98bde685a1d49dd06997f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULBE2OB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEV6wAhuy5AxjKPqmmUwQRXKXxJ1A4vlIwXP3vLHzK0lAiAwExkh68WmLGiB0y%2BgBmUXOgZnNMugQBVjYDuGvY9BQSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5zaEAScR8kkp3%2FMRKtwDeJXmoDvTIJcpGBO%2Fxsp68TGiEmlcdO8IePTWDU0uOvRJHOoetxsKH0LgVcq8JhFDEmdBmwussmjvlP4KDSN%2F91Oi8MXdwXPSUHdtCvEcuMiEqF%2BfQCfyz7Q6QGs8AisxVFvMFEL6LtiYQpx5vJtkEi%2F6DezVevbJoh6lcZzOI2CFErWm6%2BxwjhKxi2wJsGKSq0sEa6Wpm%2B4toWmDc0f%2B87LVBX2E3PDFnPxCcGfD6KrPscutUmK5Nx%2B2AoVOUiEdGteciILlZ%2Fqk7F2S4BB7tE1Q9iA3jgUIMEXGRW0Nc7xuUw58S2VvhGBmq9C8%2BQprD845NMdGqvk8HQqNXvdzNJxvrGmFENMCuCmXvIhLWvxCrIPe9y6IakOHDsxZOgzXyIp8m8MRe7LBn85RVADTWuiIlj6JwYRreRVsvuKoYqfX2ZHCnTIk3DuZoLMQXeIniD%2F3pyHcCt84yiWSpy6%2FuxDm9JlKGTX6x2Us8tN%2Bs56i0Y%2B0L8URlbms5cm7zFXdRGR2R3Nqg2%2BYph7O7RQ1enQWC7oC96I6q8aaISUefxH9y3S9k8VX%2FPdIBS80nyiCX%2FGW5ldFbvup%2FJnARJct7gSzO5ZyJ38lBghmM81tkUZLK5QPQYbdhkMNc%2Fow5ML4xAY6pgFmGMWN2czRrKLoAWPx%2FXxMtDD5peU9jRXlc4F0RDKRGlqrWbTdy8dz4IIYOGO0Qgli1IiNaX9l95MYQsKwJFPHs5S%2FSZdd8yZBw2sUsIKlhgjDFDjUGEM3y2zfTrtHJ%2FipK0t%2FYE2gnsdvsbBxtGOJzoZ%2FNuouoFpl37UDeH%2Bsci6KfWmeia2PdjYuwCFohTbAUpE1uH6JmVHSr6DB1PfNoukJ8VMY&X-Amz-Signature=93b0a90e4e9e4dd1be959f84bd3d27e279c35ab4c7db73a7197f6cf9d018f0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
