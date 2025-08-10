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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=829a3b4f8eb2168414f8e87e1fb749fc36f5c8ce6bba3dc9d9b73290ac5d6c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=9d0fe5e27d42cf3052c1b23366695ee561689c8f6ba5f29ecfd9aef2c26f43bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=9a7feb4a8ca3b5ec3947fd8f8c12417c9230e3d20f38bf3eb8c752542342b695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=56aba9e281c5e26d6dd6d7572034dd2a75f3292b58bab523ba77c2b0b10d0bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ZR3RJY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXg4AL3JfcRH2PlfgUDispnmNtXlVSP8%2BZRK3zZPO45QIhAKtuuNEchT1Ql7swXyjpAtUItg%2FSdj8ya9AGVUqw7YXkKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRRWWTTb5fI0ma7%2FQq3AMkTejC%2Fac%2FBvIGeG1nl5YmwAUT4tHe4sasN%2FXJSjBn%2BqS44NSqF8XEB5iywzSRbb1UJVRhvfTF8x6I6a0SVvhr0mrpiET5jDBwDaa4fdvFaTRro19uhe7x7%2FiUDng7zdt1aCRp6SqwAEQj4Hddr21UrLD8LMQ1HZE6Ft9UGNtjT2EIABttVzpvHBn5eHKRK5gJQfzBlWb61ssoGRkn5Xt8XHhmqMEkfZf8I1g2T%2FJ1LHKoadnUhlZIW%2FZG65tEE0SlIlWynrqA7cEMoTQAzeMbDltzpMLOtgDT%2F4B747LySqw9PXvtNYU6yLo8Pm%2F9ZjP5zwx6D8vKGAqQ9rLtr%2BeqaTYhtLqw3qTDsn4argCYG9VK%2FBBB6fmFUF3KPKhk5jr9ahNqYVwPxba%2FyAy2%2BfOy0KXpTrnx71qNd%2FX0bwkNCj7GLVMRqH7jTvPrYUFq1eO7ffFORoMZMaIURpvzShtvVDnQrQOzDgM4a015lpZyBR5kto2lZizOIWoXGGqqNLElI6aSFWWoqstr7PYqC%2FSOyMICH2R5S3EvqvmdxMmrVeERYpGy4Qm6eWUPy%2Bd3HKZxPWvfhOPdlN3hcO6fgJ1EbTZLcAPwKIceUh4e1bl0RTK7vPlknEEP4WqtDjDqst%2FEBjqkAY27CX2cAf1aHkD0slugwBcRxJNISfjOXCZ27%2BU3bLdYncb1xafqFP9ZXS0QnZVu6EID1tX3gJcgTsU8bjQByRkF92fBb0GaSrPs9OfIgd5LEvTUVWGjZttOSMdYH61NjfowoFlAr76jefujRfuvwZ8aM%2BQ9J2U6fzu5BrWZ0MdWVUZ38YC73RwPFQjqCVL3DrMKdA3SZf5PQIk15uUOQVHMFdTW&X-Amz-Signature=f511171c118f3c158b7d0bdf306085f4198b3be52b2ebe561a1416d2e382e9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=cf18bf0321d814b89e0a4e9f3ec206aa89641deefba76db11e57565fae23cc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=3e22a95ee02075816034d0232d4554e61c3df53c5232a297ac7f2d360ac42391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=af389bd2fc061f78f37afedd94e804e8a1fbddbe4e43066db41fb126209144c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=793982f8f12b3e63bbbde18096c0fa24487d43ab4e303635bc7b5cdc711d5663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=95b9ca01407cd02ac5f2b649946f53a687c48912dd500775b944353f7a69ccfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSJCH2M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4dhhKoH0%2BMi5lebmj7Q4jeftw9QKYVC0p2IfU1HF6QwIhAPqzFz2WafsCUPIeeFABXkxWVnqT83EllHFCmpSw13vmKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbJA%2B3tq7g4NNssq3AP6f4FTdaGacQH2cBSj03lxca797UwshvOjMyME2HjqCTvSVDc14R%2Fwyf0dTIEHx9XcO9R2c2apkdf3gnAtOTk9ZQFeEeYhORzhy2%2BcNmJ%2Fmucff8%2FCqKjxuhm9P%2FvobzNU%2FZ5nJ392jiBDZngS3%2BG3f52gjgU4rcb3tQfiPab8%2B6%2B2NYu%2FyB%2FXlhkunQ5pZXDDn5aOCfb24%2FHv7Q7CsqY3XZTDf2snyxC%2BB7%2FJxvvv%2B0Pzu54%2Fkt1F%2BNzvlfYwXOuZIyIfbmmKQgWwoMUVD4cv97XsqwcaobunVkHxBA9KaAxeYFyC982eQq%2BdPTdGLTwZ%2BMw2D6GDzzvaRY4cG6bu6Rmh3ru1t9%2FZ%2FRZ5MpOsMt2gJ3zRjNFxio2MHpFYFDF4RHcxFxaARi0FRkXTEWmUWQ%2BH87bhCAoB59t1iR5Gkfpr3SITZV2TQlog%2Fwta11dy7LnPLb4u%2FDL0%2F7LVEuXNq%2FQQaikuXtKE5hUQ7vdjbjcp7JU0FajYJTIhMNbuHn%2FW1FcUOXBcjakZQVtgsOFQUGrRONv3X5NHVqWSm9QvfveGwfy%2BemKedZkXEgPZ05AB0y4kmRJAP%2BAgxc%2Fpw8UN6GYIzww5VQoimNn2I6KZw5%2B1sis1LqNgKoRaHjCWs9%2FEBjqkAXsTLUBocxOj03j%2BtzW%2FxNVIfelHtppazgNx3MXrRsk7ALyXG7C3hu88StGp5N94i9seQXGcwneIZfeR2d5OllXtLy0a6ZJqGIydE%2Bh5N8ajSZUmhMssyTbAhNjpU9TU4Z6GfTHBTTwtOTqVKB3ADy8X3Hk%2FZ%2FS5VSCuuYkOx4MbfXKL4459lQKPDzab68C6i4XV5fhZU0UQbSES0C66lBYAF4P4&X-Amz-Signature=0c9f75f944cdd424786df8c8aac6923c0adb0bd9cc425d404d9172e534d61632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
