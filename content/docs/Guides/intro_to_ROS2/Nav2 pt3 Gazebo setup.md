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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=5ca2e43eaf55253c0e25beada28ef486d69116e16783d89db8c44289dc27d13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=f8125d37104cfc85bd162507c6907222358a9035dd4c8d41b6fe8b57fec1d8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=8635f7189ea1d86fe72044ff7429bca37ebce07f5f6fab53914b23979f358d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=bf6f2c64b8128bc8da558356ff9803c2d592829350d7332ae7a40d5091ebd46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VBMSWR%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt0XwiZIewooVzSlM%2FUe4p%2BnoqPuIKQr9Gh9Ru2rsysQIhANaPXLCXnLOauL83nBx%2FHQ%2FEG1%2BuBKBZvXDU6I6Q2D%2FGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzXO8DK92TkRU13NYq3ANNqllCprc8kFCz78mq6vHHc0qBPxy0Fj%2FCzK8ds6q175p7QRT4nK2VFluI%2FZXV587Fxb9WLqd%2FAGR%2FgmIYplDdGt3ExqYi1PqkUpsxozJq5l%2FX5%2BchN2g%2FNsr%2F6%2BccjOTRT2BKShE0s0tNoEEetp10zeZWQq%2FY3%2BFSAKbTp8U8NQ91XKHik5HkGTOQuVFfBFn%2BttTD8JAVYkjtr1MatUulqiJ9vNiae%2Fa1h%2F%2FlpySuXYtTQXQZtjkEty3WEmfOvPrzpVSaO%2BeFd9XKlFYkSYx3COwRY7nTDHhkZHWE7Q60qhaVl65DTnQa%2FNyrERxV8KKb8GQb2%2FogYk29fdzTA1kKTp0McAV3XfN6cttdwTGX2BZURlK4ZJA95UrfWE8VS%2BpN6wrw5M9eBrepq1C5yjSBbotdcFiGfiTDFv4XSavcG%2BQkYJBxhJEsX6wolJc6NbPelOWU3qr6YA3Stk39C9vwtAVORaRAP1DeIccXltuSRBWcL1yLoUe%2BhvfoL5erZApVVjiU%2BC1XPt1lgvBWYlVSoHtRMBotOelHphjaJSuiPZpb97UT7BsaEHzL7tCBD%2FqGQ9d0OlrstMDvjPMOsgqGaXki16yGsXaXLGKQ%2FRsSfGFkh1%2B9LAzJcIkkQjD59IzOBjqkAbm7tnESdXEJjLw%2B3vaBOL1%2BW6vjhHwJX8GIpsaB9nqgq592Pupn3JT8cw6bv7oJgYTYjelsjS0WCiprvs%2BC4l50lc6HPgJI%2FaZURJ8NRbsrhJXmJDeinaAX%2B3xAmPeV5ZHxPXDCa9GwdDUmC99eX%2BJItF8xsxoobLUQIPCIsp1PXJGKgG5GkRPAmd24hgesvzDypcYx%2FWRfJWFwjSL%2ByIRTxwym&X-Amz-Signature=b4de555a682489d0ea282c0aaeb3770bf85b3971d9ed54b876f2d730c03da0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=f217df7d727381dce9bba4db6a644360d46717b967583ce945f3ceca3e6d4164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=a418cd1733e94115584976dc07f999df850bfc6006edf1f46a9a73a89d77da8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=83758b70d6684b2da73298a830f1715ece23ca5e19aedc09e02697632b4e076a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=9968ba61a6363f5dc13e210ac4e2b5a862b77ebbe19cbf7a6750cee0da6525b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=979bc5adf8642f2e03f7b771f7cbb853d87e85ffce740b858bdcdcad234ec07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNCAK3TX%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXNAnyRd8JCXCRSWNPYL5%2Fj1bfl9fPHPSrqAo6C2xkQIgKagXexbma%2BvW%2FYONQ%2BAgX5tUrhOybpwao3l1wlCe52EqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEeBFvwbc8nTNE6IyrcA5KBsTtYc%2Bk5WTyalHqF%2Fw3Laq5QnB3WHDM5odHsdo9olF0ldXp67BhXbcLhGRZbTXhwUJGHqi%2B6a8UBODehHPG1tSIwoVxpLROJXaVjQ3TBWuRym%2FLY3GPuTKC1Hx6kdbd2Y%2BBMK%2F%2FLDEKYbCl26I6ZeFCo%2BEvifz%2FTFzdpjBmdjZCpI3VzN5fP9%2FKzcJmfOvW6rCoOKELb6RnnuoadLoKCtFZxh2k4LXXugEu9TYJBm6sr3D2tB0kh51%2B4EyODwFB3F1SMztdcC17JNNxclN%2BQFQi9EdiNAUFcVuPqDGXxH4jONXYBtGn58bMNWXQImXsy6dbiWLOFnia4dgwLzncGpQnbulRhxrjxXiBpKAL9Oj83BQVANnhJHGdVUGMFtZRQSYLnV00mIUPkcRKKk0HqySJR6EiA%2Fd4MzEtIPrGOKWnSJC%2Fq6TJc8vwMprtmru1eZmA8oODr%2FwJTMZ34nOgZqQIsSzr7e0%2FojcORDuEQOGOvD8o0Pmkrr2lWJwyeWHhqv50bD5qpl7kvUYTPACizfj7BMa2gOEwArpvbnDAlumcbcoDd6jYxN5rAP507adKDwuaFpeRFeHi052BcdGB%2Bf0rRmkwRoy0wjQGIFt1iHECURz1tZ5r%2FlzdpMIP0jM4GOqUBhbV8KgRFiQfAodEznC1uJo%2FplTkwXua6knuRdj%2FPvjKQKD05xgEDLUD9qREg8Sf79p85SoV0yYjLwLXMwvNRX3zkF4ilYegPnjV6r%2FnO9VBjIkaqk6YM64GpFWUF8fEbbAq%2BsHbvio5BSgN4HlEH5KYQu7dGWQvUXsaNY%2FkQ6C6RDbmqIvZ0D54vqwY792f3A2GoTuy8%2B0I0vjGxS8NlIZU5U2pQ&X-Amz-Signature=51eef176994111b35c09b08877b1f4b19ef887301919b21755eb775aa2f31db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


