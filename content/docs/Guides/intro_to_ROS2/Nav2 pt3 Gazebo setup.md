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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=c9c48620be2b999672e66e7cafc839d94eadd98efdbd2702b9a0fbbb73552787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=e3c41ee5a9ead273ecc17640305656644e57b3baa84aaa0aaa880a2f259cac2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=222d038a4022a8201921a003151e292406cfdab029caea104f3703efba1e7c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=0230ea6c3375820ebcf5918a5311074f0f3339ec3d46728a517c8794c19c7a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5X3ZTFV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLuDYkcuurQPWgYfMtRWd4zxQ5aviNYqsPxrheGLvHvAiEAzeNVGPV7lormG6OUABDzjMOw6xU4HWuY56U%2F1%2FBuemcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGFOOKWJ7k4ikzjcCrcA9cdPC7lmDX1BymdHW56d4GyGhRbwapFF9OLm08fXhIcCFbfCNd5TfslPHS3WYIhXna%2FM%2BjaHBc1qtvaG3Idqw3MHt%2BjXtZN7odtOcxR8iCx21fg91fmcDo%2BT5hwlw3Dw%2BX24CHT3XtvnrBvbIxthIlg%2BoTlUoxHvQzeRdvchtaCuh%2BR36MZsBSORZr67BCCnepuSWQl4CzqJ1amkLE7jrZ%2BAi%2FqASG2GR%2FY%2FDxgqLvYiGnmGAJOUM39Yf5YLe07FgmhpUtOnkA5ZaXjTP4y7YgtUjc5kr6cncPwKpnoc4f1LKuUsrE%2BfpwZE1X1Ldm1d2UgzUV%2FFeaflbMIMwbUvNtRbf0NnWSVMVRObENRQc%2FvKnpBeOmxyzKGU8RYarESBMvuX71axtJrP5z22Bb04RBgSd5BbsIUfcG32rsG7%2BmyjZi47sPfcuHGmLOsugEG9gQO%2F2cvHKbgYaWHyn%2F2ljYPHJftS7GaubG%2BkjHdu1wAI7K09urs1fpmz3y6zxfnFO49gvgAIO4gPqZA%2FLMcvQEEerZhrLv18xsokRw6xQUcTe9nVc1ECQiU0CdNVNaLASqLYJaXvs%2F%2FwEkpIsZj5LP1wXiHlR%2F4dKF3VN4taUdTZR7lpxRsbWQD2Df%2FMOynlsUGOqUB8B8BmQHZ7c6aR6ATXHjrab3r%2B%2FxI1JKK4%2B5T%2BTkJhpRZ2PWcXCerUfFgxksmQpzPiI%2F4%2FPKNMoFATF%2FLalfm8YXvwTcFz59iseuf2%2BQUrFbRWhOOG33ex5Em68NC65y%2BP6Im42HHkjhc48XHshOLr4JxeVTEILxeOWknXlshARgA3QVq9JpfPJbZH%2BKufXGiICz7dY%2FqymZK2vyXvlbooutYYPfd&X-Amz-Signature=1d355df4f8dc24e8716b2e448240fd10f1834b46c6ed4611ec27f39228077dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=a2bdcf5d2b02febc63a0e3fd8c8c64a5f804a5c4a18195b8a4df30292f47bcd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=8dbeff57228aaaa7f93fd341f0694adb58e0cbca244709bfcc43e3b6b7c6e241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=9aed0ee0c2779e559671733cb15aad50e9df59d80cd95e1c8ea05fee20a29edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=3583bd66b07f6ed90d39c74a7442696bd09da66b54fcc15827a1a04a113e23d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=520e5e13663267f9e8272a504166789f385551cb4bf0a8204869529730d8da79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQKIKPH%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rrBtE28qTfJ4ng%2FFs0FetI1py%2F3MIoF5WD92hfFFjAIhAKPrZPICC%2FjL3WoLguS9P2QpNKknGWyGcf4VWb%2FEMmsgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH%2FL3pXqYObsSw8lQq3ANM61QHcK6tsH1osimA4R9EAFW5qnYum9gDtWHvuuev8kequ1RKZPCxIhCctGmmx7QqWiTOWlnvoBqFYfnoN89eRcdw6Lrh7L%2FkDIEYlZOeDu7R5dnF%2FKma%2Bezz1NdRamedsirfrwNJx%2B7pAPatXAuZ85vyfZ%2BoaOMpENc43%2BAUECJEy0B9Zct7N1o6xdLBxOsKapYXBsOU1gUheHHkpIk7DzQa2sLDfzCfAO6Xgntu3dnu9PedWSzKX9okACXWk2SwrUzHSNt8SrBXCFSOKNS7IcisGR%2B3FEZ6VQfuz8u2LJDIVakDNKtjurwU9pTxnPX7a8ViUiuDyagtYSPGuA7eRGsH3huicXSHKdflAegSdVeO5JXU24VUs5s1wS09vlyOEt2%2Bsk29M4cdJpBKLx4tf02Jaivj%2BPxmnO%2FjwvklgU7ddsjLglAogDxiEa1N095%2BHJ5ytVdIJL6pgPcn%2FmDyJTObG1U14qRGeRz6L4hihM7CH0w7UX8mnrb%2BrIhXMQAf2wwiubUmuNoDi5nWnOv%2BkVMf4LrkJ2cnV7ARcivZIqAbpc06TnWLPj2DN5ol5fXmnnxnKZ3kPusExi6Ej4YqSEd6fCgCxxmDv4odc4vIrWwpBezPXJTcmzde7TCOp5bFBjqkAY0dSt%2Fj4Dmb3xt2L3zvSbS3x0ASU5QNSj3pV5emFttylpW%2FflROKupXSIq1PZH84WKuAO1LBuWpAzaQkNjv94P%2FhuQ%2Fd9n1ksJWg3ktduLwclFOWeHJwfMcZ%2FX1X6Eed2bEVcoTlvrS3249%2FAE28W7PLRNYYFY06efUwnD64SPhO2fKD2Bd1FZjdmXWQIgIj7AGvi3%2F9cWiNy9t%2Fbd3qLDBfR1s&X-Amz-Signature=74f8aa614f43888e7231190e9ff01801b3567679f82c4aab011a59b343234efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


