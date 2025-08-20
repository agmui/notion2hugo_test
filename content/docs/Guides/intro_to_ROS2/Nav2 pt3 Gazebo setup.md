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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=333d3c60685af96ee3ee179a481513267fc4c614e260708a742c6b3400e7d2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=2538dfcca4bb59f8550a2a64acac53a27f42b0a8cbd65fad1a6a8ae12e5c2b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=695df7b96f31834526e246eec3b65853de6d8e5f58d0a44b97f474727e8f1e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=8709134974d41287119a96a23c1291fd667e94c587a48401a52c2329a5839a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZNQANN%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlR3z9J0paJ4%2B%2BVOV5ubRXbeJiWt0rl7IwJtGjMZqIWAiA6r6eQEbaKuhm6olHEdlusFT4XrUA0kjA5Iwy78M6H%2ByqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ie1TJMx%2BmEPcrLgKtwDIQ7Dan4DqyDKee6JZmO5ac5w52EcyBlcdAnfMFkfauMuOgUgu8liI5pWnGoksbzRuoiYWRfuoImVsM6pFfIsuHOVqzrv9whXmdzHpDrMMGOWNgovdU2jb1XgoTmUnYY9SBzpL797Ga0KKqI7KNyZAqX3ew3sZOPDl075U6%2FWsQiThV5uHJuIHxZJpSfowTPFNrty3a2ABvw147UF5jZzyxMmjk3WNU2ozMVlevktLO81iah3I2JdOcYgMpa8usBcjP9IUipGiZ%2Brx4mLT3Vl0O%2FVfnstjut%2By8OgZ%2BRGSdYOqXLJdZfl6ZPMXh32htP%2F1rObwZF4VBfRIRcixFObW8zZnQd8FVRPmJc1snLj0FVpPfOnxduzyBnr4Uq1PyqFMFfu%2FwrZaw%2FsN4fzRr%2B5RKenwJVj%2BmjbtJRpj%2B3Hj5TdYb4NQIwep2nx1mbV2nYkL1%2FKdzkIqdr20DOpC7qHSVK3DJTvz3Q8ifwQeAkf5ZAtmZwpEZc2ddArwMkj%2FklThQIXbJXs88wMecfIsQ0SqvY1avBrTimq%2Fih8ET89URR%2Bv%2BlUnB2c0vxN%2BCOFiPE6Xr0ebjPNO8woqkM6HEdXiGR93qtwWOMmjUUIXzKsYpayrK%2B73hMkOU6CWPww1feVxQY6pgHycDY5b%2Fw61PeuFe5xDS03KN7KU1Ujp%2FcYiY9K99H4JIxyoxHtyDIdmsT4nYtJgyroVp2exfjTSjFbxU7o4PLUWOJeIjigyJikpkB2LJJwcfGhq45x5On95La2rInVJd33TGWuArLUZwAVIJMCr%2B%2FxUoF4ZtrGmKTa7EVt56F1J9t8R1Y9VOc92CZjrnVThvnpV2avrCboVs8BTijZ7SmxD5q4H1y6&X-Amz-Signature=d6becac3476a8826218ffbf7c6969239acd6477095ec732b3aca02ad2f5b359a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=dc2e16e740813b9e126d52f6c3b0c97ad7889f3f189f0989296f5936cba4017e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=6650be3c27e5302246f83708b541dd6149593d1f02e3bcb35c20e27714635cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=fd0e774569999d68dcf5f0e27dea1df4a04315cf71dac45aeded26913ab8f59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=d4a5d305a14e774571191e7746a1442e0fe0addeb9fec2dbc0bec9828bd87d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=e8154a8dbb40e93b576be6814e6f063478753f9481340ef194520e72795a13fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIU63K7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyM%2BzBkuw53kraVksjcfYjiRHdgDmiGYB478jpRWfYqQIhANapEOnCTn5Zd4f7Hth7J115WIWLYwB8UjUucQULCLm%2FKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn2NEshRGcHEv9otcq3AOYG549shypDGtU2gXDtaXSOmVr%2Fq87NSca7aIo8TW8tqPahjO61AhKoQkApiAq%2B%2Fpvqdc%2BZcjJJPVI7Vc7j2TMtNzEq5eFu9AAhG%2FOzIqxK6idmZscO7u2jOinXNSRdtp2sIjiAFGONZ%2Bxrv1Efhld5P6jhIeg4thbQzGlk6ZohuqhipZM4TJufCAxJfAGGDc9%2Fxt%2Bqv5yqlbhN%2BleWuETXxAbe2Ur47jxz2KGwLShg8y%2BC7V8e6LIS6kVbEo34e88Psn3tvmm81JUgCqsWXjjStoD7STZKqh53Nl5fjlG2i37kj0shOoTx9x3Srvw7BhkmqPeV164MVrPL8wm7sOB7%2BNareBtZXwAA2kGlpE0N3%2FLmoCCUTEqVxOi5JcQJyWS2r1tyVpAjteCdlidlPV0v9CD5I11I5%2FSE2567UbVFUMkbK0HEiH4YR4Djrjn3KXrrpHOsnZTDJLe3Zrlt9j0GnR3uOBdOOoVoca%2FTUl2%2B%2FPNz1pxfTKcYrSwYDbA8pVBNgw99vZP%2Bt91cj2ARt3SYhWc1TntVWLhklQYo%2F6f0iGBnKK6F4ttQsBydKYkJrnSXb9EByhA%2Bmb6aYYKSvac7CiFWWGptnSYpaoaeFwaVqsqfK8aiV%2BlJv2VHjDB95XFBjqkAWpkqGqntMGjoMqvlwmPWWx1pHC8%2B7eOiajoUYNIZ6NmFcaUIN6V4w%2FMopSIhVdaE1vvMXNNzj%2BfkXtppb7Cp1fJKhtg1XDRAYxHWbAiwn6kkKmJlXTjp83J%2BcqcPGeDb%2B3EEephXmtdCdKmRlC70ZYR8cPMHte%2FC68WAjA6LU3brZxEAWFnIWtkAA7MErxu04MsXNwlztxdnNZGThHEHzzy%2FoLR&X-Amz-Signature=3d2ed07ddce98240cdf480a3d30524c5732f73cb9817d4dbc3ed56208b711226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


