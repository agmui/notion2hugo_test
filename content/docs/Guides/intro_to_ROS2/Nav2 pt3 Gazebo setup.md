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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=cfc050d3a589d7b1a216779a7a4dc13c8cd0d23603935051499ef353bf9ed3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=a1aa54bcfe3818b3c8a3fb421b181d3667eb94dd4065c5d3ee72c533abf3d8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=64eaf0e61d6ca38c049f1faa8c97bfde1f44df958b4cb4cef27ffd7bb0d5c07b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=8b23b0c149c342d2cc4d6cf86ebe32d2808d952954eefb402b831e86de3ff7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPI5MBB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGFq6ituBX8fPfVGqMFrMRlbgcAwYdFeIxoh6hNbgnhIAiEAp6LCixDxbHVj4F6vupx8tGSyWgBT49HNg%2FWWtHeaD14qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYyVK659DV1bK4N0SrcAxzKfgutXnskYmP%2BpcUu3H%2FQotpmiLK5bj1Ew7HFc9vnEMmTbdbgzoQBFYvOOXnE8PgdXENaGP%2FOzTer%2BHcLNLkQ4SRE6gJjGNLURQ%2B%2FTzSAevuqtaEGEjToyCaRx90UtLkLqQ0VMCWB%2BE0vBoDbpXvfgIs6XTIyoEQuHXltb2FjnQRkuiiFTR1dq72q58l5lWN2oAwk%2FBWuVBNcuoDITfCCBkN9RbKLXq8v3XdaOhAM8PSs1sPa%2Bd3PkAI9ptzYCoaKaxlYaxi%2FmL9ZP0skI9%2F9%2FNAvp5AA0efWZj4PB%2FdAraa0782QGLWrYk4NsdmZ9pspkr6YJJiSY9aPfikT2l%2BCIZ1%2BWTdeusmAl1fTlRgDgCJSUMDWFlADrQIedifArqhl1vN7jXoUKRJ1RQDGpaRHwIr%2F74gBz7qdrVRIzVuXI5xOIQvyrpfo1SOX7Vz52yxGji7BnYFS6Yn%2Bzxgfw%2FDm8tSoaAo9msiUOubRnY4flWXK06n6yAJ8yURFEC7g%2BWzgi44M2%2B4rhgsi4MT86oVQ%2F52j3E0054VcMKfxkU6wt1BO2o%2FELw9MJx3XtqPFN7Uq2ZzFhtOxtPZ%2Bj5xUnpuethCtXPqmyUUr8zTQgG5GTSC8RZM%2FDZb1KxUrMIPt1sQGOqUBm63wwpcA7gOGeSSjqVlrVj9qUIPn1vp9vRPoRGMGZ9Mnq5IEwqnfqz4agxATOs64L7TPXWLACkL3F%2FlS%2BO6F3Z30N2y4RYGytt1T%2BCr6AmQVGP4WSDpOiVyY%2BHE3O7r990MEQfovrEJd5o1fa2K6KxJJZTmhrTxtjk680KnBG5UqhRrI%2BpifXVZOIVZVB00u8QWvb1JnNWnwGXaH%2FwUlDvBBccpV&X-Amz-Signature=a4fda6c59da8ba5f7281030ee328f0d46cc56b008001ffd3058aa2025f2098a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=5a3437beb56f6df05fecee6705d6326fb3034dbcfe88f87bbcf7fdb85ebf2e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=df78c7be1a7594ee3be8e32dbee0586d960ab50b39f84f44c7c51d37f788ca42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=9a0c5674b16bb440f300b8f0e1dedfb86b10e5b0e25360aa6a3a6a66772e55ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=4bfdc8bbd8332733f5895eed1b0c0c9a14006a5d3c80419854d6311b23fc61eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=f57e3df89ac2604cb7a447ae66c81148b51b7a34d3d36ef4c4461727ee3a297e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PW3JN4R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCyFoGNhjVSYL2lx8FRt4ZaPLJ7tKQR7dFlk02w9c2gjQIgUdcXc4IDL5%2BPe06h%2BZxB0uLSewXLaEqI8HS8qSCXoSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8uGeZ6mncN04iRGSrcA9hyMU7ljOQwNM6S%2FPtVH5m5HYowSrhtaWcrtilVyT9SUKL2jQthRpplYLx5Yh7KsDJ10OqoGFggL8MQh6JUT18NRE25NvnLatrPDscTCtWnxLYSBt7NMafDIV1UsGRELKF0853T9MBC0vvj5zxDkULx8FNcIZbF%2BTWlod8dCHfZMq0Wn0w2tKfJl7%2BuT0qn8N9%2FGrE9tB%2BAG8NYGMJlzcFdzXnBiGTMcNz6TIF%2FPavMlsDwYX8uaECcNVD%2BLYF6RHBVT3WXkrCZh7paTaoE8aOZlnOP2BTWwNQq1cyL8Va6rzA4GQb6kky9alXFXpdlyVS95ax8rWYZGMupSYAxo%2Fol7UPS6ssl5nxYcdvY%2FfcmfaZp0j%2Fk07NoYyOaExDKdRFX1hkiaKaE6Sq4tHzol7u1VDww0N%2Bdem8dZ67OzXVTDrBJc0oIDoD783gDt1i0ez7Ue8UYwR5p0olYYuyaThEZItIFCtydANTC455FYuG5HsRjicGuV6XkutrQOF6f9G%2B%2FtjfJpXYioyyl2QaWnFZciVs9zYA8bH%2FDd3RQfqBCfFM7PeUKqcvQ0nLUmTfY2FLT2pZnvXlMc4nee8qPpHQnC%2FcVAm%2F%2FRw4f7LD2Ws5DnmoiqHIBN8SV5R15MK3s1sQGOqUBS1cwqlBSugClvv5SoMxtQ%2F%2B5g9DqfzOXvat999kN%2FmdB3QVYBJxYDjliB3nudSRk9obp0OSSkG40w5af9I87FPmqS1l153s8nhQgPGOjk%2B5bn8xG7WAH0Tvu4nCcHi9912toBS%2FtL4PHPloD5kHh%2BB4TdOdwxov9wlccbUM3rhZwRXrC05tv8SXHvXkgNrmETh%2Fw3spkbamIJXngP1yKxN1%2BHisS&X-Amz-Signature=d7d0782e24f88a63ea4f63c183abb0c48ffd7f51e70205b9402291e7f5ea34b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
