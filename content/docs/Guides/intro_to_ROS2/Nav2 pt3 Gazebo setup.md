---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T01:01:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T01:01:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=815ebb70c53f470aee739fad5b4b2a89940957a793f37df6720a3912e90c5344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=162d556d3a80749f5d1c34a3de3c20a14577859d5f9fdf1d984eeea1840701a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=256f783767d9d34c82abecfe3f0d2569b21912d483d94cc0714b091ff918b0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=9a031ee0a4fcd3d7c68e306f12831ec8c46b2b9148c4bc407e8029601e74b525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: test `fdir`

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
          ~~<fdir1>1 0 0</fdir1>~~
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADXUAUH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwTt7lX%2B5yMKfYLGLe56k9FkyZV4yJ%2BVcuYjA6yLTi8AiAM04q9wCcbO%2BlDHUbuJ21TAP6Cz6zBB0L7gbojAw9msCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwbbbLROnZd%2BN3%2BIsKtwDJXwHUI5QcbfHdtheFBvulsjozRZ2HpbS837mkhRHPpxfgBIcddOFvkiIfulmVfhAUVMZ78DIe5%2BjYtYyRyVFK3hKS6wI4iB0NJH%2BqnEVrSVUsbR6hW3jmWhB4QHlKFU8eo82yFTeoHELxnCoq7JAl9FsYBO%2FISxbWXwgD8iy3qv0JvGh0OQvKA5z%2BYNXJWzPHkStfyzjPeGWag9yCfDhiLDqXcPn0udCmAQT%2F%2B2%2FZnx0lcI0A5dbLDt9J50Rsw4c0vxVwJVUJlWZEjMSmMtPb3i0jOdIyd3i%2FQi1657df9M4HVhvTUpPNb4unmTLgCp0Y%2FaWfLRQRxmQkqdX8vgTGfazgJ2jwFZT2N23L6M1LdmzGCygt6gpd5dQEZNtHtDkhxOJ8oyVP8bfw3brVuXhKa1Wjn2TLODHWBcPFLwTlx2iw7rqK31YUdDAELcz0kKMm%2FLnmYcBjKWQ1p7Mhl6Nusa8JGyUBlRHjB6JzCcFGriq8kxxB%2BynLcWJ2RrVNy8XBmjs7xbnTbvYd%2FizGPqWmvphtfe2AQv%2B7JMlEOpUKRUvf4QfhVL7%2Finyyg03YCLlFI6MWfw9%2Fqx4q6umwEFSXDDOuSKIEQ6NicmYEu9b3U6mo0Bqx6yQd1x2Tqsw0Zy2xAY6pgGj6ga3I2FA950YA5iqrvyAB%2FzDFLYjWXSXiHoktabAhpaXXWvpG1EAJEjhZIXDxfEYcOGhAjhl6Vpblwd%2BE98Wo9a4auimh36YfmJAjBdSOCSWRiifnXgo3I5q83cAY9CJM6UeG7EZH2lYsSJuZDTio6AZVyzQ9FlK%2BBQ9pbo4o4EGmawfnd1UeQM7CVRT3Gl91dYlc63CCrnhlZdLLr8cwgFM9ACM&X-Amz-Signature=8525cd83b8205264d6d6c95cfb8552149fe67b5ce58859d617b38e1e3b1f5d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=64072d3564eb9e559669df510f5c2a795e827ea977b2d46344ab34b5a3eab37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=20d9478528c561659bb1c23bb0a86f76ba10deebb7e0bd9534cab3ce9ced4e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=7adf9062ab3f00a353cab70c82885ff7ee42ef94e95ae7ef8460c98dd7b76a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=bda1dff74181e13e15632d09b48861ffc8347b206227d40fc71fb367b537da56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=8462ab63ec8465660a8340778d40d7cfb5518de1f071e99d21255162a4b44ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZKQAPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtVldvLCKvuVRYZVAA%2B9Eh8s4oFpcFa3OAsWm2scQRgIhAIZ6qCAnUaDVbRoLUIBuD9XWc7aolM%2B9oPFT36GPrl46KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZ%2FBDgXZMzaFlarsq3AOegfnrwbgx7%2FqZhkD4eDdRW%2F%2FBofCDjWqsuIak83%2BCKLt4rHZnwpVevSXlKapHjiU0WuBxqrpoAkvTJSkY9FR5Fdgrs7q%2F8sUT2jcLfrO8CxkqmSpGmeOpsLca93nbL6ZLllkQfQYF0ehN8JgfAdEXupXQ1n8oXeRpl0n%2BEBafHGHBI1lrli2CU7IF2DQnROBC2%2Bfv9P5%2BvxZsRpxBHRGmwexuzRSC1T7SOrLvq092ExiIzvAUD663j5%2Fr6WEI8SsFqFPP%2BbUiG63atydgn5r%2Bizt6B%2FkrQThPuKmDK5tZoaQoTm6ieluC1CSLydmh%2BByXKuD%2FiTNP0jzgVx3zWCgVF6BFqHkBsa67APyYbEYcHEleKrd9of3baVr34YEzcvsJEpIos8dbxvhJkXg6nwa9ODdOtnSdxoc1psfk4VXgBkweAYLrfrCziVi0InicaiCtf9%2FKBxuagjtkgd%2FdmQTCCOXsiN0ULZe6SI%2FcECgzbmP3diQ1DqWADas8%2B7VZ2Io3iKI4mz4AGkmNgWCMjZk0WJIYzfSYkg8PntOrU4xvkoKRIOzlMkFK0VEiPsx8%2F2k4a5%2BXBN4LihqVa8QqoDQDZ5sdn8MPCKM5ofovJmwiDPvD2Nb6TOIN2PYwCDCmnLbEBjqkAfJeH4k4nvGKktDS6MGMq8zX0CLcoVqHX0CJDM63jh%2F88M%2FEVkgVMkYAxht7K2fWuCoYUPKNNHoTOoB%2BxWHWPLOF0c%2FQx%2Bnuo1NG1suVGKyLCrHmDl7pLPIrS9qYx%2FoFSmXpzKxnYbcgGa5oPFtMNa3XWawCT2vAjD6cJqMyK8loIRkhq%2BdpSy1l8wcy7xqjki1vRKRVE3TCsmgLI4qoCTHugiHF&X-Amz-Signature=7c883be87e6960f29082e011e364d93983cd2cd1d979017d6ce810f3557d6f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
