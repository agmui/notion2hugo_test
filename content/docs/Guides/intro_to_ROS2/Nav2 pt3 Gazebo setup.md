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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=74100608806e99dabc78b978b7435b897910c2fb2fbaf61112776e1e2754c0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=8fbdff895f5ec3c6a9ac53dab9adac2f82ac60378485936ba1637307f09ba7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=3fc049e362ba12e6c8eb83228cce4bfefbca8a34aab02407ababa86afc2fcbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=eb921351678dea37e77003d7f0cc801bb5b6421cd36cff4c984edd0ee1cae2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756ZDR2U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC48c%2B3unt9%2FxuiRq%2FvBPAAC52Ic3w1iJXdwPMmQ8IzmwIgRSjlihasPwI6h%2BpOF%2FjVQO3tT3DCq4YE7VeQugZEeJYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDA%2FVfpfr%2FZ7duvw8sircA5NoUIb0S1p5D%2F4DyeIiH5loFjTXzy8aIVPt5MccRidwULvzHVP2nci6txXjef4zts1v7bYF%2Bqf0UHp0bAahVN0fOOkqSQ3mvMB9QcPW%2BBd1qaDaQh%2BnJiMYhHFvmIRIAhknKjhIwk7RAoYKR5W2MMG3N%2Fo%2Fbltupkj9rWjj%2BGuD9DauhG0KIlinrp5bkkUz3MAVaVo6aedNZV2TZ4CFvlIwpVXsKpRfpkCDIZK3wPurhbcQaH9reCG%2FsEuKN53Aia3%2FN8P8yy4L1cesVnx%2F5%2FZ8uMOinqR7SlOa24z95V5z%2BrO%2FelCfe7d2wZcOGlaTYGE%2Bz9spR%2B47%2BThjw3Hukxo%2BlE%2BlMUKOXRcXW1oYvbXeGQ34I0mxWfNtmKu8HQJGyCbm2LCJvegCxJqrploprLMUCK%2FL2jAS%2FAOzacqc7nexWX2U1ftmznsQuDaTBatnHIUZ2zraCR8RDQV5Fw2VfgnOyQV7ez7zNFncdAKDPUUlZ9fa0iHI%2FPqccbS8SiqtqUmDkrfHkRu3LMG2Y9jeXinbTc6sTTcqOXGX1dBjsTW1wb276eFJjFxgM3EVRgmcQctZoTLnJknTGKtWqPIitutEjDdU69zggDDsl4VGWZWw3H%2Fbl99OsyrjHZBWMNOUuMQGOqUBBpbN%2FUyksa6I7e6WLpcthUfyiIAx7ZhYhjRI2PpbuPZXiZ18hbDzN8RB3%2BjYvx9lr1tce4yRAOp%2FJ4L7cWzhZhAeF0ieWeLsVSs9AzKC6%2FDapBmSsJiaPS85Ho0zel2hDfXtPtijezcvsKWaFKgOxtFW8BbF6I6tGkUaUmNMFUfd%2BKdl6Xn9TSw2FkCnwCqBaZp%2BZv9Ezj5RuTmJK01D%2F%2FMRtcL%2F&X-Amz-Signature=34461bc4feb72fffc42f70e176a2a92aae3d0ffea61bad6f74145dbba98f1264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=35b96e6e67010e8391e8ec405858e4738cf06d62b40723347a6b4d896da64d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=7ad925ec1ef702a51e15e41462be68316adba0e56d7ae180a81f9c5aa24275ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=cd9fc69cd4594e0c68fce0c7c1faf078b475ad41a46e87a0be2b066570973597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=e3cc1121f8e9c7af7ad82e91383c7df065cd2ad4859a2cf6cbb37fd1bfc43185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=347672e1fa8d2f7f7b1302687ec7c27eef281cafacbdba01fea7869065494d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFSI664%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTnN6KEO1BSUxpY6eXgcMYHrSATYPtiefQ9jfPnoGEvQIhALrhdm8e0SUwHxklEa2WtdjX1eXiP6uI9vfAVGYN%2FRZ5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgygTaDcxR1h72xRw3gq3AOZzUnDGRNaZHeqkL4J6TATd%2F3GqUi19vmZ%2FXxr3lxm%2F1qIEl3n%2Fi%2B26oPmVv%2Fkh5JOs2Y71rgzo0WLyGj2Sz%2FR2ODo0l0GT%2FAGRyA%2Bkv6L8ztLpMc0CE86lV8NbLp67HY%2BpyqDeiqSWc1kCZQWYIJp%2FJmDk1gqGGZikppHjMIaarcNM6LiJl5aKfvOfnKRP9l%2FOGGYEVwJAhZe4UYedkW2ZGE9AfWEXeo7%2BLoqEZlz8%2BRML9Rp4U6fb%2FvVSn9q605JxXWKtvNKw7dp3qdyTXuTN6V9QFdAtBB4P81jTKVpBLpJjdWmu8T5Osvq%2FpF%2BMoGUUSUx3Y%2F0Pi8%2BgpusV5DUPSc40rKdcSoJ1Xk8%2Fs7Pl9jIoHo4GA9Xj2Xib7p04i8Xnn5ccTGLPNyw5H9Pf3fOw9OD6NZ05g6gRwO9axpOzmaJwAPSfG3f3jegFfDu2YugfxXuvMDGmgrL%2FBdiEfuO6AAKXilucZAocpOJhuhRqIiLvx6rSU8e2UPVczwk0vJvxlT0q7%2BZN0DuKoD8JVqSTfwp6LWJL3yTtKWwz1u8L6RHUnF60jkmY4vX6o0%2BDAh0jdRglzaoMdP8mjedN7UPtQmquzHS69WAyXagvYkuzwpgGxkfoGi4GEChTjCZlbjEBjqkAaCwOGCHOGwr%2B4%2F1%2BQxz2HCt3X4UCNF7nMTTT%2F592aZLOIIXZzwdLu3GLtbDi318tpSCDYNOb00%2FBPkMP5ykZaS08FEkzIkt1TfboEw3cGqJfDv6JUowBI9qr9hSyQDt8RBKnXP1PKFrwEjQv8IPEtgaV55x4aPNPzXqWx45wuZ2rkapjNrSBgAVQLLC1m61TfO6eej28BU0z1p8xwks995nWnJO&X-Amz-Signature=f160746ccad9b8e6f0fca51b20db7a207b60f76a85e5663fbe48a0bd38075a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
