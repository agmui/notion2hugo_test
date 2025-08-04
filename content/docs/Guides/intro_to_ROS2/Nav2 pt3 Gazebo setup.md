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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=464cf30940d9b99fdbc808c561de746b251b5185b25eafbc636fecb6a4d760d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=44b5abf9201cb35772dedac2681324d95faa7f588f19e9c6f44c028d239f07dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=00513c8cf33284bfcb5e12ca96182ed0b61ceef084c0dea10517d2117a423a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=22d06cba6606d65050641c933785ac7142533634b2a33ecda33607b08b18f836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHCGW2X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDmzeOxGXoyGVUvgssmOVi3VyuDJxhP5OhZ%2BfiSV8CsNAiAIq4aiePO3T48XNkfbRc9HRM5gYUwe%2FIWhd5NnnLcluSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMVmahQLv2ytcVX%2B4wKtwDsK4XHy9TEY%2Fh%2BH7Sq04xSFNuiBVNrKu3HyHQsGzCqf9S7NklUKPlJ8hTLbgnsgHDICq1TNXTVZMMeacfxfcSJ%2B0tZ%2FCC%2B6lfUc8EJ3JmO4LJT51O1VNc4RGjgKR4WZZeGJttSEJ%2Bl2Pz5xR1D9SPt2OqqfN5OyV4IcbeuzYN08SfVJG1bQ7lUNvUNB%2Ft8ts17gnbNm4Kn6FwM1Qg5%2BmIhVeW0xx8eWpVGPMzZ8csNfSJqfkEk1zZWRO4hgfRLMXZkv70G9hQsuU%2F3eSBvvOKoM7Q3okhVgQpllbQwfvndOkw5ezsc3JBaDjFbMDWFUCDXdKMlYxIiRITdvG2PKezN0AnXnzoGZJ3KMGNNMGfHb1iwNM1RbFKrY%2BWqwt8t7JI2y2FCbapsQXk7iM4d1J8gccslYlybhlw3X59iU%2FMU1z5ZeGjNAp9tq9qM%2FDiQ3jx1jw6XLzXMEYMo%2F66%2FPCHcIRADG6yG9FTEpRC5GU1CiEnbqyqjbs5is%2BBxo9Gw%2FXCliGzgxT7Kqm9S2Fwn9buhf7Sbyz%2BIBFulf9RqZkysfxYTJgAU5o0qkI9IjQUQI5hM%2BvcUz%2FrFlGTihbDAn86nMtPKDxrLoknREL8XpY4fqxp%2FowGOD3e6G%2BxRQMwmM%2FDxAY6pgFwc3yyLbiN1M8Gha9C8lDtraKpO%2BZ7hiqDVVuAU1KjRvJdBJV6hAgQ43KmHlOxnWzivKDQtjd3Yx14p0YASwU0LLF1LIS3HnN5SkxpwYzy7%2BKHveooWs5wArp4Aj8eX4kGxO%2BTxkkRyqrLMLgwD4GTZBxYgj%2F2F22ZTxRrSP2N1L6AWroUOZ2qexHbT47Gu5oWTUDzKU6zEs2lJfqlF6bd5EbcvDa5&X-Amz-Signature=e9ba9aae5952ad84227d10d39032108f071e4ae74125ff612fec0762774bbc07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=f6b420851bf635f0ea17a6c0f21027539ccf47a74f4599a08e5698bc10c756f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=67e037d68ba3ea81b13e977646945526775add87f1af7049f20d99ae1de7cf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=5800253434598c5d3f703e749c64d2597a97baf07a6beee41cd0a684cbbe7358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=9579a2b64821a66a9d2f3571f2e3b8de060d3ddf6955238b748a40271002eee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=bce5d2b50434628100d0249360ab05d36b2eeea34dbbd2cae2f84549553916f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNNDMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFxUM%2F5KgykVGgpWgpjYmsEe38nlPjCoFezBsftGMgVXAiEAkpJaWX5ypAQjiCGsOoyssxch8aTbTwZatQ60uxvOUH8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL7gpqFBxkKXVwIAYCrcA5tx55zJ1g3568q9lBSefiO6osX49XKn8CzNBH8a7HxYHMl7GnZzhHXvx0Br6PQF3lzzCpKHQQhTrgXnK8E8VxfT7mQ%2FTRThw9RO859XB9hIWSbQa2a3z0kQLSwfhWIRkMmT2gjxlhcLGSPuiMEVCMwtF30wptAwKVfXvft4dvl2VVTlFo5kv2VGtx1P3gUiRfvaku%2Bhm7exEUkICZiKfRMoZfP%2BbgGatFPmo84bypzS1DyTffAznf4KBWKIjLbvFVcRVBEKKM%2FOXDfk4Fwq%2FRkps22sZSLSLROrka39kqBA65%2FR3c%2B0E%2BAs6TPhKit8f%2BCaMzxKyOkO8qtNBkP56BYwr3saJbO6HueafYs7pAPufkEz%2Bkjl3kYtleO1pLGKwHUcTv3R7nK8qVkIkU47kEbS4ubtECVcYo7MBw6jNLqYMrYL2H5X%2F3zdWJ1ECzmGShLLr1lrmJ%2BQGbeYRg%2BegxrvXiL16vpoy6oBiU1wKC6uhmz3gaXsbnjOtGVv7Hk3YzvOglvjQWbsBXiTtavy6S1Cj1L4kAZaLjO7VtVHicVH3hWLogMzs0%2Fy6jRdsspAo1BcJL5DUD2poNjkqR29iY3di29gn5g9z%2FD86g1c%2BTGEK4mzZVkFRLkrBOfUMMXOw8QGOqUB9PTCKyDyr2vkaywoW2cyBWgoyBLQZjGBzvkoe%2FsqCA6Wzl9Ey4OdmMrsfm%2BAa%2BBnnKdrSlUNqicvdLkL9%2FvNoCQ4QWPjGCfoKhb%2FO2qqzSvsogpm6jXhblJdULDkchpzWLom1TubJ%2FQ9m%2BnwXQDHJ1qptPtcIyF%2BNY%2BRVxzJCTYxSYubWQmQwMgWQq01z462v80ti3qcAATbP4lJh2p%2B1GcB7g8c&X-Amz-Signature=7b8131d53577b1b9b1aa4b5dbae69903f482705389daed599d6bbb25775d9d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
