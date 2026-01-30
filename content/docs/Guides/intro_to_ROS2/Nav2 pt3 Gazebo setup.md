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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=045b6749bb61753fa0af3f1f6e0e1ecbe3f73b33dae5a17e9d43dd233ee4b266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=9894492e137049522a55ecb9c80468b2f3253475c34ee928022d3b45324409ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=07abf61fcf9f176439a9038e743694fb2c7a9a2f7d8c81592f7e05fef27cf275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=4c8d477cf8f837d6de810bae82c96ecbe7752cba3fddd947259a8aa1d8225f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QUWKAU%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxLMHDw%2BMGO0a3dOt%2Fw7PxP8lOYiEIOn97BWkSkbcoHAIgU%2BlcWeK2n70gwDRWAYncAvEXQM139a3Ha1weAbQ%2Bim8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyG12t4UcDvwzOxLyrcA%2BQ2ItZAk4AmaW8ji0VsYc0KhAPSWM0ESt5EyYnQ3YUdpS0%2BS6zQHwcydgjWGYihTP35%2F6cG4YPxXnpT6aekAsgHkOyJuV0WQJUCcSWe6v8lNZjLvfc19G8unAoyIGUi%2BG2DhhXhsR0jI3niAl%2Fmr%2B%2FTfTRnNnVIKEXdXN7dFjPP9CUeh9hLEs4MpI2E8hnU8xh1cEAAG1%2FUfiL7%2F7z2BOFplPXF4PuwF%2BFolW55hq3SWx1PaZkR3P23brOeQlmdskMvVSulj%2FDlv%2BBjGHEvx879RXGgpmG2TcdOJEuEnhGpqnZqJ5X9KaHQxokMhCGm5cKO83hQGTAd7DRk7WgSykVdu91x5f8ZYVsDWZcapBEylSaYGlA6XMvggqKqMg%2BDBvLbMd%2F%2B0BiVG4s4chNcWBG11JHQBFQTRtfKCoh6gBjzMcwEXYpiXvXgkLUXsduUWMLP2oOGQVgLtgMDWqALwhXKai9tE7bn4T5PDfWqp5C6Nm91oLKkY9wBLNCECU3B5F0H%2Bg5gfIJYnMJcIbLsbwFUUKT6%2Fte5A50agGN83od7xl1ItoUmky4o8GGyFyKqViavjrHw%2FILOckbwkO22IPjStHjnPabv%2F9TT3VX%2B5F0PyvBy7OMrpMUbWrJgMP%2BB8MsGOqUB7Z64Vow28qF0l3Px7wqF3eEmlC9yd5h7M0%2Bor%2FcekMJewtB0DntlU6mP%2BPtAKr87aBbvxxwpeugMHzjtZ7QWgxpX371MOf5MdPvVYLYh%2BRi7MzKekhj9N3Y9AgXI%2Fj8FbF750JULXUCp5l1B4fzn4uGDbBACLv3dvw8Zv7A9WKLOFrooBrm09aZ4oOlAY1vBmor984y%2FXOEhT8AsTFoV3S88TdCd&X-Amz-Signature=59c9b11063bd6e46ea4ae7348741b249d6fd53c72b2eca448789181f312bba05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=9520603ae71be28ea102fafb6a5980ce38343c662c0f9472057790dec14eaa8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=6248dcb1980d9522fde872442a3c241eb978b660335d16529cff9d93f44db74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=3d1af2da74f30fb5b22637f8f561c3b158e205a08d602c7ea5ba84e5e275be96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=d07ac6cf4e68fa8cdbf6d07d8d90d3b2e4ec26af138eaf075352decbe2ea1039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=f320863ba44974a20eedabcb4a0a98288c93d91ee5193988a891defe4e1a4270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5J2FZXR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDle%2F3OjdaayE4J%2BGRZKL2HLkqUFRlAq8GEJsm9pQktqAiEA0KkfiWTJuhW%2Ff2Abk0whfhKCap%2FK02FkTTOM97h5XLUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg38JGltOK%2ByrAeSrcAwasif3mAWOcG9ZPQ3Fo%2FSL%2BSia5NpHEDXERvqiVBKu3oOrM3GBGoP6ao7SXh2NcyyV2H3fpLVmzNLjGI9Y3WOk99Z3GIe%2Flx9HAG0MgBzP2v91STFemild3At2l3t0mokzDX4OGBSbSQ5gDBjPIPQxOC2fy3xbwsblgqD8ugCo4v4kNipUYhK8C2JGflYMTi9RaI5Cqvlz4%2BdXqXk40QbWC1WZGI%2B2irLtcgPsolfOKU9wCOZfJtoagNN0U1zLUgGfw3%2Bk4bcnCropUC1dKlcGKmV99zcG3ElOqmlet3Gwq%2FLVh7OzFC70qH0O5xJrD9w7zVTp%2FBnE73oIBJ2pW7K1EHWCy8vm844v6mCfd%2BmeSzdl17i2diVx3Yuz2vChiFe6h0J5pxrJ7%2FNJ%2B8DYdLryoOyD0IAxsOW%2BOnz28Ea6uMTDPIaBQA%2FOyzqxkR3NQpxzPfZ74wchS7FFxNd4K3lZ8rc2vSlbVeZ9%2Bm3XDIG%2FwPD%2FD1FNXP6%2BNFGBHitu8QFbRtSvu6gK3HLG91HC0GYKzSbpRTDnK8kBBAXF5%2BTpHQfuOZ4u4PiLISLtCNbKjChYn9VKlYganj2f7Vx52gdQ%2BmfT5xhIn3%2FXrNqDJfVPSya5J5AoHTJTksCGUMMWC8MsGOqUBkcBzQ2UF45vyrgo%2BZBxNREz0RYaBwlIwxRNfdfqCaksiOku3%2Fl2IQox18OfIFXDFpby81x0m6piiwgcn4xGiRC8VXiHS%2FxR16uRYuR836Q92AUBWFfRPglrWvC%2BfhMjb2c96i%2FfhP6GyGODP%2BdLajpYZO65OR6sw%2F2xkpfckqMbYWxNWxkbsQ%2FFoU4uTTOEHwxG%2F%2FRbSkfpwCR%2B%2BTbGznaFPi1YS&X-Amz-Signature=f794280d192fafc8a80055245f96c7a7dd33b11c6510e951e2af3ca81e1a63d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


