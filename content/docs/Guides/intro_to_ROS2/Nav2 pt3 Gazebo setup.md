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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=333228f02de4c120900859f015856074576b7bfd0c9c509efa03b0816178bee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=7de0591f155cdee2337239db94d0408fb5c20cebe4eda46f7d82dd63e860a03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=b668d520787c730aa065f0e2e4592f05492586306adb0c51ef12b9a9dc83ac7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=d02e576a41132c2e34adc9f6ea25bdbad051d46e7e7cee0edec6737abf2075e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINEER73%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCZm4bjI%2F0HMDLH2kV1hLy3Ul%2BvO0noREio83CXSDQhgIhAP5FC2gDNBjRQdtXqMN7a2gpkWnH75dI5RINUUPezAKeKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSfcp3O60oW4Vd5%2FQq3AO9NKNz2JcgVqfbv1XQZjinvurppotbiELsD2xgM05hDMJ53Od4S9T6p78wTw2E3HjSqam0Go3P4el9Od9qeORuO4zLSFIsmt3hu1CtM1BAZb9rZ6XwM2Sdl7t%2BJEcjTyGN6IJyKAla6a2Rq0FS%2FX3j2ry1je9ZrFJ1YFGpHL9bAAsODMwEtKktCpAcRjVcTDtHpRvioqVyJz4DO4mR7qEjlWj93ZjkkPuoBehCbKu0m3UbJkpdGXeuGHVHy030nhIMMsmJ3WQIMswEkhquxinGY3A%2Bti8v7NbGY2Rk74Sp5QHZ905bUzO%2BSz6W6KE5zZtPCQ%2Fi4z2Wdxf13SNEIhq7u9S7eWaEkeqCzqGCzJYDzpvl8e0KXQdcfgybrLXESBz37Ljv3uD%2Bc7lpsTFAKGaCBApHB3LggEYlUtYEVl%2F7bHC0NlRl7O8Ae9%2FODW%2FxuUxNwrcXH4%2BnO%2Bb3pwBpOknnXO0Hnz5Ivg5xsZXPHIkGXa5j272Yxo7JNAXSzrUYbg%2FlsEvNswAmwhpzln7e3SVqHJtEVVF50B9fbW%2Fktu2pUfmv56mY2OZSrq9JA5c6CcZjEtjoSSK01vEjeID8BQ2eCo54PGeqztdLPGuTrIN9McGe4zbyOf%2BOXU5LNjCfwqPUBjqkATNk5S0ilVJHcO2cMY%2B92c69QzutG8vWvPyWqb8hY%2Fx89qITxXPBBN%2F6btN2hxNu3Sc4hK7AFl%2BLpfncQmdmEYdIJyZevxqIntz%2BHiZt1F55ESK9fZvrAlYcflEoAlN42GG1ppoYgQE7MmoZBmUXJQM3N%2Blfbwz7TgXdxfu1GX0olZBvq%2BWoue8tCzsTVgHMGskSPib6wlMc8PXnfMWZbpyvPPQ%2B&X-Amz-Signature=9505dd8148a1a44c0f7134ffabae0caf5b761eccfbc0315b7fba2fe8d25f9d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=dabe82e28768d076df88ac08156332c7a48eae54c433a121ac0e8c6e29a80c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=64dcf46e0b2fa2764da17d3ec97be913c996654276425652f132f8f3a1a9a444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=4b81f49a82fcc891a0a0983ea6f1f0a9dfd989fd6e4f7c97d613fb7007cf51ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=9218669cb80b01f60e4d1c2210f2644a3ca1d130e780ee50d40bae09b166c68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=002726f0d6ed98785f2d8587e817c0b8f113251298e4425dc6220eaa42741c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCJUU4T%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ3GApLMohyvX8OkQw2DXuq8No1mAuGHzTK9wgjD%2FkKAiA%2F278EPK6%2FTf2mebYKB5mWmtW0LsH45wKojCRwXrocpSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZbjP3Rq%2BLMPLMjuKtwD2cO2rm3r2ML%2F2VVNQ215HyTxDIs8poASeds0GVIMlGN%2FIx%2FoUY1wIrAU4n8TzNYcs9dpPikO8qSzGW1GyCou2Zc6POFtlnhFQIYZYfP2KPGypA8jZNgihF00dOrZsSupp7y4JOC%2FEqK%2FeDxqYe8A94bzlEeAWyjzXojNxPcwsHbLdx%2B7FuYlefikXP0l8rccko803mmS%2FV5mK9ILWUCOp2dLRlJlyzIKsKAAPam9rgBb5lDyMgM6Zf6pPWY1uyq7E%2FTyDMvLnygPV5Xb6XTm8yOAOnESKx2LzJVvE5xsKSS2zyaxdYKsAHFJrQpEVnMMO%2FnnHJJknL4WlDZ81z9rn%2FSxqye6IxDDhCSL%2BGW905PheMw%2F5Q3yojhus%2FVifPm4NPyUhn2Qm3O8bF8qM8fDTvx54SUWQFVrvBX%2BZVzDSeeSc6eyUuIV21gVOtP%2FY%2Fd0YwChkX%2BqU3r6VXdBJtHfnjkA1gtjOYmPvLZU5XboefgwjLtJ%2FllUhQL%2FSAJeLRMvATgaOCuG0DtT7WKSpuoz7nnTpgk50HHDaWG1YfF8sqA89g%2BWPX%2FZEw6DpRRzoa8QiUkSne41A54ZSe08sa92GEWqsX0T46uFueGA1PPMYO57R3nKnIEgbVEVxOYww8Kj1AY6pgHBq0yeTfwN35FCosUQPkzE9lJptCl%2FkWvfEt31AWhUxOQdAIj4AT4jdBTRED6p6V5jV7zhnr2p13%2BsjFciAt1I3i%2FNZ1Zzc5yxq4Yb7%2BQn3mQUdDjmyjJXujH%2BfAUMRbZ7lL5C6N4sLH4XnJntITqap4NREOqRZtg6TVi1V6KYka0duOF3WSwUD7qNIjW1PCF1xXUdrJSSffhlY4b2TwUVT4bhv7%2Bf&X-Amz-Signature=a8afe9a4f23cc21e144e1046e2cb44f8cf71e344fb5e2eca8cd87476dbf0e8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


