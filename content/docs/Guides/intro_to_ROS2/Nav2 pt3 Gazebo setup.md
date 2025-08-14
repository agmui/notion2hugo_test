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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=43b5e99930762e02ee3ecb6292b06b561f0993083e5b7a2dd61234dc2f1c6250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=f95bc0c635eec5a5c4aa4a2846abcef7bfee84cf2b9780c243674b778899348a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=ff65c15f679281afbdd88625c2e9a86f647276526cf6eaa05d15599cf56fefd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=8f23c429122b1d78c502541206fc270aeaa145eb88b8cb6d413a72d44216afa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUNWXOCI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX9rGmgwqm%2BN%2FkQ7jp12MaZi8S8xj2AoUc9E0gLEWdtAiBBx2hYqLkQ7uBT4ysYamwnM%2BB9PbGWQV0WAvFJNz66Gir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHqsCLo9S8%2Ffm0p3VKtwDBdPYqIEl7iB2qd%2Ff1M6T4alEVPM2UXU4X2uUmtA34mtElvFkT9hL3u%2FhOctYnMIuYbdYa06qkEB0I%2F8qBRd2HwTIsGFrPvZvEt8eGoJ4MVGowv9M%2BTWEkF%2FHJ%2B5UbsR6jTktjqAPmer3iVS03WDHu%2BQEHDqA3ttydrd%2BASCSOVu%2BnKHTT%2Bfhmv4x9QsUN%2B7wQKYMeN%2F%2ByPdvAijcEsPMzSJEcGf3IDKEgteYN%2Fg0zIeZh2uYByNZiwauZXk4atQLraLbGAJtibzVk%2Bzx2oBdTBlshNtK7qj12w247BDca9UBoJLJCUJ%2Fq4GhU7JYW2RofxT98YxdmGOZWSeb7NlZT0yp0eus8Z2ZaN%2BbxxU80XhB3IhRdoYon8taoyumKauSF6UfDwoYrftbf2f18XWQBRnExItqnuevzNZO4p%2BhfgYobC3N9%2BySyl3r%2FdXDxRBi1xkIuxlXI%2FJEbhkcreHfKcrUS05wf62eimahMgQF3uZqvHu9Kx3CyRIn2vzhxiI0I3vFsQO3cEeqvzLOcaDnthVd0czFEnoUpiapexzeI0p%2FI356JJ3JNMSMvi3N9Gv1xjaZOcSxpV7WEzbeSyCHg4WyGHZ%2B67%2BAYJcVu44yk4h4bHlS32HpPB0zxvowxoz1xAY6pgG%2BG09%2FUI41Ji92ysQ2d4ELJvAyWOKAjq3ftPZeBMppHoEGajUnHSf9OJY4DOQiR4jnlDH6knNR%2FrBJSQUH%2BbzsTSYnI2jGGTMX5bskl52QrQ%2BQsTFaqR7TLAGPA6zMx2mGNm69g393nOHQuhrJ4A0insoia5Fzh7lWGqDv1DsX1g0nSk7u%2Fm2IHhULyUIp5ltT3nXxYNfGW1IqaFoCBiS6TZnQyfU9&X-Amz-Signature=564bda3f28926192d77558698f1ddb74f59ae3d4062ec26c2006b9bfb08208b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=9eb648394a44c3702501ae4e0190115b3df882d49a24d8715f2365ba55d0887d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=9237402f5a2d56c4029cce889e80bd4e41ba650a82d77f8be74ff0d0a776219a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=bef502e4c5b57f31bfd8d86253f3ff7f0c31538282788db651e29b5ff5297bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=105d1448b5eca64c6f6a4e5dedcfc804255149ba5c7c16eee37ae9973cbb4ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=2eaf1de489f520911356b15e86aff2fcafa91cc7eb466c3af9f1d8f465627bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466563CZCQA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmMxc6WLreClfBpmC7SKV9Nvt4YdyCYRm9TBdySdhnHAiBDzdpkhN%2F6YRWuvaST7%2B91xXW63ANNxCWeGYwxrAgXyCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMQRHeTQyvV5%2BXWaFLKtwDNy8HxEf3F72IBL9kIGxzOYSIwtPTq76Q60YBYkQAYAJMw1l%2B%2BoDgEbHwjJspqnURosVZjcfwCPUfs75apWt%2Fu79fnQKTxSze6j6UBmF2%2FCivcdIQrj53oo%2FtY5vKfpSMgjT6MH1tajcUyGHJ8MNlFxL09LvW%2F%2BDLgZYpyTw%2FlxJpshEjhjVPZxedv1AiRGSnXu%2FBr74WwdDk8XApIQSBWpEKg%2B%2FDin%2BvIp%2BBmS6RQ9LIjPpr%2BdPXmpLNR64KH7zLW6k6ZioZKkiMiPXGyxFaBI6fUZ8ijScDdqC%2Fq8l1iFtFel%2FKbsrX1BGZy80fpoPD8ILkr2G0W9%2BZylGfo%2BYG1uDGKeSdU6459s4saHdSI0FGA6vfPeUUnJksx9MsNtOoMgoSCP8Lnti%2BQ8kIduUEFZzywmKGUmxpo%2FIehuvhyCOQaN6cjmsaEqiZSs0EqmMzLQoNcW348W1VMthyo%2F6hmtubddpHeo3Y1g6toK%2FSxseEc3N%2FLgIM%2F9ZM6gzWjSd5Rrfao4jj9cLjptNQmaBdqsULKE9Szv46Vzl3IO9f7OMM4HT4BDVSx2bMxFJPoyfn3wOY8R9aouqAyNyuz2L%2B3XGYziRgHSxAoO%2F2MzvG5zbyeEvu4z3RAQ7JI8swqIv1xAY6pgGMF%2FhMrlq1g2nJI29uZCCrNKInZgNYN7ocAZjiq564QXrFMsmWYB0hPsoy3D9eMmZPDo7zzKMpmu532w6tJg%2B5CH8aPnO%2BEiv%2BJbGbjK%2F803%2F6DHGt%2F4FvCb2mpNlLrNimh9gDd3a%2FDm0h3l3xYXa6CuFqyl%2B75tWwkVVG7BWVQhDMWX8hJymV2uXreVSKW3HcJiebybyx6iPX492YaqtChwIJxjfr&X-Amz-Signature=cbccdae08250712ed1bbb82981475864fc8ff3484857ecd892c798b82d49cf7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
