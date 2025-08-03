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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=0da4266e68c00296f8ce4782db2b279b4b0c2c3777adfb23c807bed713273a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=039444aa174cd3daca3f880269a1f4b32c333d0701692fdbe6138ec6587ac66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=8cb01e9879d30cfde14d9e88c505905e41aef891c83fb9d889973642b2b679e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=cdc360af21575bb05f2586260b1a6c590ed39c027ad90d3091cd037d76308452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCS3IIH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdARsx8liGgxSIgl8a3Bk%2FPBqtbORdz5OxDF4RWhnHggIhAIi5Sd1l5qWz79Pc%2BraZbBrq3cuKO3fSrd3SUITBWKDTKv8DCCQQABoMNjM3NDIzMTgzODA1IgzcbLKf9I2kpLM%2FEtYq3AO5Ke450DS0RJ%2FDIj5oKZM8FKVqCX3dDSw%2F5za5gsW4MRRdNu%2F%2BSLi3QNTrFV6yo3Ri1FsTkQsm40WWWY2O%2F%2BXteUajYRzJZhBmmeWZDkCavIMUd09xs6yhDvQHwl%2B3h9ouLg0MH%2BugFyAno77%2BIMnqsxZTbWFypdHixGRGmaBCQTCYX8lj4UhrSxxbGTKBtotjV3xrKp5z1CQYOJbAHPluiaEZKvE54rgvMpA9w%2FeRCZrd3BZA4X5QtdGnhSuMZ%2BsdSLV%2FZPtOaZqMynYc1duAxXmI2ZdOQzQR%2F8bO3Ib7wZyxGbMfRX6qigyl5Bf6Dw7OQdR0tHuMkAOynFCpm%2BL5hyasRQbh6oO7K5c6G%2Fcv3XYihoi7ayWGXrTyb18zt5Bm%2Bwz0PeyYKAHM490yTYXLu2mrNMFfZTvYoLirp2e6B1saiUREXOn0u2hOcwH%2FBwlKMjn66V1f%2BDoFeYR7EzfSc4Cz2t0EAH8jLTTerPBZAsYK9SG66uEPJ7uediRu0SA0dkecYDX5vvqvOq635p6xOMDTNsmESbNNgK8aUFO0mT6Ebq94dTaETnbyLhAnHpI9mZL0Riw27ILriDQuI2a%2F%2FY2eAGdCUDveiYAm8bq1qoxmp%2FetKphptiixnDCmobvEBjqkAbyi0AYYCi4UoaiyN0uyy5LpoZfdF%2BZnKgKip42Cd0QX0MLKy%2F0tZtWpd8k9cPDe9DpM2PgZpnAvKS4%2BRTk6tjuEgpGfRPktDcPFCSSeXSjogBMdVJfWdv2LqAOT4Oge7ewfNeio0BDo008DemClo2%2FZ5ZkWx9tCWQYSXWd%2FsU9orVuejXWv1Z3gl%2B82IAwznmCvBO19PYwS76Jf%2B627Vqf9XFPL&X-Amz-Signature=c7bf7c4d485d5c4a1d54044550e5695ac67fe6268b11d387e42b98522d75534b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=5a9abab28665b293239d8501516789c89515253c0a8942310068fcc78f9fb84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=466cde60574aaeb400aa8f67309d3ab353ef41b94d2595d346b2aa6886614177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=eee794980fe865062e9df2f66aab8422695abddff1a8f1fcda977d9f867ed844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=d190d25b9c9f44637dbd08d5003f4cdd002bdc93ac252fab57bf9dca0f027e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=e7f89b444fbc4d83c215cd43a6a97b2af21e895086e7177bfc128e786e23b714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBH65NZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEO3UMJdOtdJ6kEzzpaRgYFJnf5ghqR1ReE719B2LOswAiB0liPiO%2F7GaOb7yNUBjUPNsX5cbqy%2Fl%2F5h%2FCJ%2BH1ytXyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSA7KLmB4oECGvUasKtwDkKU2%2Bo2H1GkZj14V175RwwL%2FJkRjkYvPmIEdrRu51rG2LOiGK7YDJt5bosS%2FXPZlFMfarYA5BoCRjjwdsiMnkA6s7W%2FZTNXE25%2BtHXFCUcOypcRWoIGT0Ct855SPbxmOoqTraDR3kw7AIqSvzgR2Nw%2B2y244r9gI%2BIfDVOS4f5tiF9U1YIPbr6RtFdu5yfXMQvZm1IXfUx1%2F2zDT8lNSG6ZC%2FHVo6Kycs2usHNYMY9XqVLy8f1e2QRMlDqgad5yCyy2loKzgRt2oSoUy4rIuboUEvyfuxpzBPe0kpdNg%2BoY5GDthFjYFsPWiaTLUxNriR2AZ%2BB2Lp0f1lzewdg5nNCqssUl90bxZgvSHTjwgIPYywD1Z36RHW4qZiq2m8Z40KwY18m5H7bwrTUHAE8O6%2BSdTSy%2B6ELJew2BDLUngw%2FwtzISSkdkF4SLcNRMKR%2BvWyN1VdoKL2ZG9ad8tA5nsYlKAEORPSGcaw3%2FIzBwW3UP1ieMzF8%2F5NyWJXT7SEHlAE5GuoP8DYec6%2F7Vcg1Qb7PBL3HLqV2PFf4R4M57g70T0eqJ0a2deGoO4UUfhEbQWXLHQz%2F%2Bxaz0rjkJM4yRTaKmFAld9qsGt2uPvwWZ2zM85THUCh789JMrF%2BmEwnqK7xAY6pgF7V%2FJgYJhWxKjPUBm4HuMXtMJ8%2BHsZIMoooXCe8B9g6dPY9WSFtfG4FIRh8Vzb6%2BmPRbAVCXOSX6GEfygQ9g5Xpc42cCaQHhVofSfQgf41rSBNvdtASwQ%2BNk52SEfBRm8%2FzSnzdPUSEbLVETlvDpQKZnmY1Gj6wWPbVJxC8Y1zQUugxxM25l%2FX3ge6DMkiC6YDZaxyWWOaZ%2FOodkdG%2FQ15A%2B8TQEKx&X-Amz-Signature=f326022c2827e45791621f062039e3f35481837d5249d0265894b4ee149a7074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
