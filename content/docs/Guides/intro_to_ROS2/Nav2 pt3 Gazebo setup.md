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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=e84c3c049b35cb21736d7b95b41b03ebda76a24c174941374ec4b1f81a81d541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=bae72766472ba74f4856ba2e3e2c51d7a39787b505164edd7277b26029c5a8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=5b3e5e712ef51974c4518e74eeb2d1ab927627aa0ba1a9b1d683eb88bc37583d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=7fe4b471ec453ac8ec6382c5fa2c387c20403fb66ef468cdb1bac3bcd67f8ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FGGYVM4%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICyCBu5ti3GEneKuc5rXdskGbKlqNnGY8muNqSOPn2mXAiBXRo21HVe1BwncNySA0HHH04xYIn9x9XQiz%2B8z1xCTzyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdfPzUHILrfJCOXHrKtwDjwbQevsBQgBzTE5HisgizWzQmfDGgTSgwDTnfSixBW%2F19dSCs2rKzg%2Bh6PqEtniT3w0SKk80Ou9ziiP2V5pkxAshEa4f%2BYJL1Njut8vokBlZzcLyzzhP86Bb2ucix8FLlyBqKN4eK4ihiQED0UsQaWYA0lMp8LOLoX1KUNgQHM%2F%2F7a%2F1hxVl3CHVVvepCIsOAX%2F3OqiU2xjR%2Fq24XcMhq7hA5a5hlregsZ5VrhnIiWDs%2F7NbAnYVY3ojnLyj%2BmzvEknO0TfUjjQ2pgLijDhI9HrU2itj8rbsLc5Z99krPC2D7xjL6fqbLzL3e7LezoNzdtElc4ob63fihr3Fv1nmAF%2FVPvk7T2uaifV50I3fEbrZN%2Bj4owQNqO717ga0L%2BcfrmKpuOHfqpISi%2B0ClIc5xfD7oTwLKWAb9VhsauCmawEF8TwoyECiVzsHpG2f8%2BqIrA5nIepZLs1PEgWBv5iH9TUUq%2B8AITTlpRbRf0CKThAAQLfxMi9VLFlUQVjJVLOTR8EDr2IhZDfFhWdWs6XagHkl4G%2BQIjH5OskmQbIUXA4rSZwNx9FuDj%2FxLRaYUTS4%2Fj6akFS2MTYEbHbXV8o89ZETksHEZxBdFtj7oqzz8KEprz7g18gbJdx6KoUw8qXp0AY6pgGPxrJEYuE396CjQ4AOWYGRJBqPYGQC0rCAk2n80rIDpYR9v7YeU4%2Fp6edLsv8T1DRyuaPMPWsBvnq%2FMB%2FYxar0x9psmHVB0QYKeANEzCwJzqD6E8qqRL6LmebkhW9YBct5DIZYPiHAytOMgxSwglbhsQWLbKLJZ2iPtoEC3E4bWwztcivJALN7D6uvER6btO2%2FxIngf10CGxnVQqfJHoW%2B6szOHeVj&X-Amz-Signature=12d6fd2b5215937dc2b1e4ca8e1432a48f2782ae827681287bf936796013a025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=247f4eeb47e9a728a5b63d69510367fc1273817be1596ed089fec3f2bcd6b790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=eca76fd838a5ddd573d7404243391e15788c343f4098b6043dd2fe8becb4d8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=b54ff841c44f51e7a62c0966aa21ac730657877746c5f7e8d9d044479aced20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=1e2b0761617ac8ddd6e7b0c646aa7e2b12cd1850b965ab7b4d32c6f988fcae1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=68a7e75632a41bd4ad0d6520f6bffaaf77505a327c31a0c47bd9f6877e8f689b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHFBDMM%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEDLZpkg6fnZQtU75wxtZtsyFf0kA1HuLu29FcEm%2FxteAiAnt9NDahvXu140pg%2B0%2FuyScy1W4NCZTH6VtHodLyfkBSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdkEtCDIh5y%2FoLVHKtwDcgFb2cNmj362Tyw7O4PNlJDocqI06xAQEUEw5RM1pj4yFgTS7s%2BJwt1hlinZoaaaksajEB8Uyj6gG2XMfoZo1hR8gfyNfhk7zoYr1zP%2FkxdSMzmA92CN7G1EGVo9hgBLvibZ3vwE4ZDITouxcyKN1acQes%2FNrPSJMrIkxW0Giar28YAn5DT2IrPITNTm%2FTDyWKN6VhT9L5I2CnLsTsqhVeEQtICI5LRMLyROq%2Fi%2BRWZEMO27dy6MENCrvBmGmvwVseOUcSXYBcRj3C7b4rbpN76cshB0hM5ZSQnAHppff88V5svjq1931fYRcOPo0ZYnfyOVEMFcBIThwNMS1WJVUULe7slRIBtcJQKEjigei1I6ObCtVYBXi6DnZX0p%2Fs5Ulf2KbLB1NzYnBa062n30mzYUl5NoOp8RsEgs8jHwDMHW5SLNGAa6jHBQoAXFEpZON%2FJeFyLj4P1onmw3qOYw007O2s4uU5t7cOuPV0beCmwdtVfOT7qG1rgx31JSDqePFV7mGxEj56oZ%2Ff%2Fzlx8m2M0aLPU1pUlsQwV%2BNryQ4k%2FVgF5sRDTnMqYzaSlpa%2Fol%2FihJ1KD8rrRTZCIaHA62jpK5240dk38xfbhdK%2BjkMjjkOC31N0BAYmgViggwzKbp0AY6pgEBV%2FjkHTV%2F7aKgH5IpE0o2z%2BuCqM7IGBGAtIoVfRryCHDBjVTGkHoFT4WiyO8MGJ79b4YQdqTyHxlsY9vJ96BY6CkmsubYh1I24SnkAaOUOWTkpfD4fVVNK5GdXzlyuPCNW0aCPgyEGpfYQHwnsbg8wwCnP4NP2uZGCnYbYobiAG8rM10jrsnnKhGzWBUdku%2BDCLt1smk6Fou1YHXhDjN399lrMW4S&X-Amz-Signature=65d5e4fe2fe542c3c0585ce4a2220c31eed697285619362ec17a92abe57b3852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


