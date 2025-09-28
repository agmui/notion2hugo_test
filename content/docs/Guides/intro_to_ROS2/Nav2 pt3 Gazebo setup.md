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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=a659e88a9293df2d11c4c5b799bf79601926d3398a241fc096ecec352ee962bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=6967dd7c8b15c20494d3f0b14ece03e49166b08f9e9f41cceb4f7ded196caaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=61f8de42b04dcf9081223572584137032adc5c52190f30cc5b85f33041a4f92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=6da84daba3a71f6c7cab6a6b741e2983f62176726f7b2953726be114b874ec5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6ALF3W%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCehMsEhjNdezTy1RtWlw0sugeZd8CLXN0suLxMr3WlLgIgENSAC5MpM0hXr0ZwaDMZZlyAjX1EtOGrmYZxTA7y4iEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfkBiD4hAnpNP15LSrcAysKG2ZFFEXQyFiBhtMIL77LhFjtDbR23LfYMWKBx9sJRfPjHPvaG2f5K65yUUUWiqmwgW8gZ2BQseR0oq7opc3hVUcwSnTdul8SjkVK1COxMkel8Ng3pbAhLQgG9E7vVyW1ANwU8AoBgQ8eT6yT0Zb4AD1ABBNfleOm578mpsXo5PmqZ6HWf0WMhulm8kjHSFDmTuJwappYZHa%2BTdcZ69gCFS2cqUi440L%2B7rFgQJcSGh8Ty9fnT2W207Za%2FgTNA6etokr4Zrnox9ZW%2B%2B%2F4rZDJhQ%2FfCzxoIBRZLCExLpyUmqNINkW%2FGTHMlRwN7rL9DP6OqC5oEhoOLdU9FalssNxwXEt0bO9wS4loBoKfLlwVmU2g1G%2Fze2X7WPGelBPZLidKlBu%2BPUmBPuCT2haZnL2Ot%2B6ZYwr%2B4gsEldH4FDAP96zHIhDpptGiaGjoexj0dKOU5o5syp1a2Wclh5d%2FuFL3eBZx2BCKbdMauGgHKbDmrYD1hnxcXNeZTEm3sTuIsCbMGyfgR8h3tqqIU8S1XBzRUXd7%2Flk5ljrvRbLhD8zZGnS3djjjxuECXIETPvjjLX7DYU2ZnFnp%2FmjhOChcPsINWaII0PYXNu3MV0kyHpg%2FfPgPMKIsbM936RTWMIK%2F4cYGOqUBlOE4SnDa4HDY8%2F%2FXhOkytLqdzNxCZvU9CFuwPV4Z8%2FZzGX5xPZ9WnP1gMPPW00TFjGFL2%2FB48FHQfHJ6lr1wMXW9gICJ%2FsxB2EIaz9j7xL7ixixh7Cpnv43R1HKNnFPBAbvAeJj%2Fehn2oKnFNnOFsAXnbUqN1cQL0NuppS%2BrR0ZHekwIx2J%2FT6D%2BtCUmR88bZlRyPfUJuXZ42xR%2FxFCj6%2B1%2B8VHe&X-Amz-Signature=b2f185d82a4a74da7c4d8a485a6334dee385153a590d9875888c54db2a3f235a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=ea19c8a888171a158c93fec8e571ef468ce9c722d8bcca0d5b6b4af5d6d6c9cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=73d2d9339ad19262176ec6b5732ee5a32feaa4c6d42282a9407b89a62dfd471a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=bfa6cbab5352157cb9d33a222e99fb1c30be5304fe8128dcc54a5444b7faa7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=dc954637d0e3ee53732e10ced050f2a39a0d0dcfcf56ec92b1e04177f9ac94f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=5536e0b244af6365d0ebca2137c363085f72b86941c1be4cb04f3bff82225ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHT4ASC%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAD2N2Ejr38nWtBindtIlsNlORQzuNGEI0R%2FkAzgF0oQAiEAtqh3x9Izm1yn3M2el276SUzmK0XtNwSNbhCOeMbVDRYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7ktMXnuknhiWS73yrcAwKjYQoBcdvnCReJHtsEiDroxPRXlRZWc5zV9376gOjN91JNicFx07DHJMgLW9otf6hZtWKj4w0tdH9tO7wAm%2Bzsv7r1cqvfognDzlPeLe1XZX1mdUUmyfLDuImeMa90QnAZW56L5snxZtqofI7YweD8v0prThrUqkZFRZG3WoIl4NnZL1%2F9heAHC5IYcqlWxvxYPrx9Uix9hqr5ufNgnMgA2oEvRbyS%2BGzRo5RDVh5jQBWcfCY1KX4cUk%2FsF%2FQiQKuu4dqvajo5ET%2BOAQRj1ctumufX8p3nc9mIJctGkC2%2FTkBRijPtOWl4V73n4GWaEIg8D4EWWuW7bGd1J8eLUezJG5ai92SpH0sNBKLdI1SidB%2BoXR%2FzyX4qh5MKghZP397fpL5gqXQalS3amtJNZVldXxuWjVZSu6w%2BsdBUzADDdv0m3mHF6oKUbBTM3s5mfYVEodQBIlp7%2FtrUIl50wfF8NkS3nPUqIgJMUKw8p%2F6woDmV%2FYp3iwxQ5fiEMExNo9A6OOIgOHyUn6cbO0JdBy4L0a8oYoicYBNU55HWND2KPeYoqLdSdtXtFaOGOhvTVGlTK1ce0Mf%2FhWLiT3GwSumvuxIZ7DeGCWmQL%2FBvRXw7vo9ttokrUo0kAXWCMJa%2F4cYGOqUBnjHSY3oeeZgbGcyhEkchG8qrG2TO5DQCUwWd8ZpVp%2FXv9WLDnDUIoYvEmbl%2BhMtuV23y5d0dd%2B62koBO8xLYanQZ3n6bCJzssDvkgaAK2XY%2B8ZPjaVsRlkiR3LvIyK5%2BOxFyiZDc3Q07IeWcKcrLPbXtpLLz7lyFOwhDVaT60CK3rEBldbJiiDMrxrEde0K2FmS4mVllO3IGnXBeH30uQFdZ9nKH&X-Amz-Signature=686e82bae67f9f3bbb93e50a2a40d492f43bf43677de321f2c08b9346ef6ae43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


