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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=634095e656e1cf5fbc6f1983341e2d3dc61d793529d119002b23f919347d0896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=3cbaaa5c659974b18a48b2f156134cda3060574c7b2894e35599395235dbac0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=31af634e44c434224a932d5d5efc597d4d7d15370d880557daac0889c8e64819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=9ad7cb41fcc0c27fa6b4948d8eb61ef1b1f1bb52279edd897bd5ad9d28428ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IDPBZFZ%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7oboQbWh8f8BwqvbcDBWGLsOLWv4RzhRJsx6XqfD%2BTQIhAJXj2Qp7wla2LunuzSdBbncNzCcEZk6zhXk0mhL5TNE5KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJbGyuA4%2Bzd4oqMuEq3APqbrNS3noJ9KbzqXV%2B4KgmYJFOkRBGFnDpDJQPvp8EJ8GPITooc4zlTE1hFnUsNH40MwSquCU9ZG%2FDalAMD0QUFSPYuSu6mglo5JHOnwMpcp820K4ZeRAFy%2F9LN%2FIrEMtCq0m9ypoGLcnKx%2FdVU0WpSp0jHTTqQZN4vfBrImViXfcouXh%2BsED3eB1QXqx1GqzpX9y68mbGwoVyuA8w35abnOi6obX4N%2FIMtZ2midy0hwOA7bYvN%2BhjSl4HnFhaB6RX9SjwhgPPf5VEqcnntfrX9RdN9xHacFKgHPxJIQtCFa%2FMUrgUb7JmITmqkKRan7CL%2F20XoT1Yzvv6RWOMjucUyI9%2FxMWgy9LQTblWsY6K13B9b0dMsPIFHftZrUQOta73DDefNJPZXt%2FE9ndC7kj3hARLKHRtaeDJLdChpwN6aqGtUm2oLVwa6fdOXwONNPbMaFNQtZd5c1vUGL9uLVuEnPBavf4tGlhvHZ6T8owUacuVkIXzVm3TQEe5%2BzKzTavsRtPf0xvVMIWwwmwniYdKstQT6OIq2VzUk9Wxcy1teGluta%2FXpnq4j%2B51YQ2teL11neRqnZqAcZvc%2F4a6%2BTBuZtDXarY2Khb8Gseq3xXKP28%2B%2BP838YVm%2BosNqzCOlozHBjqkAa6FnY%2Bk%2FIcOKkzhcm6vCbGEb4HcKPRtBBmOwXcBDOeFJmU16x%2BiGpe3Y2e%2B%2FS6QxLPdhwZoZYveCLHJdNcOLmdbgyrbcgbDsnFWkQKeWYLuH%2Bcl8Z2LoD%2FJgdWCR7d%2BI%2BVukUIGsBy85vxGAaY2VH8dZhibFtHEGht97hsBREBJ2nqIQoLfQySyQEmQgkhmpe9R%2BhL84qwoQPjSG6c%2BMqFtJi2j&X-Amz-Signature=5bc5917cf6e339f60177a790a53647769e7a322770b6ba869510762d342d59d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=e1963ada7106562a0d01b3c7d47e6119b0bd860599d538cb50db9cbdf511cf1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=37b680d607ffd241752c4b9b819969ec1a9d01f97cd769983c2ca00dd191817b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=0bfbbffe57a551462891207fc6ff172ac9f56ea90fbd1ae6f778c40f000b9e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=d150298320489bf246d010d18943f7064b4d31a531b4b439cbcc0c0f8ace6ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=1ed07421d8d78e011f77c3d03064d478850c51e37363574758fc5eed61939571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKLAZYC%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCByVQomvWyaaw8RQE8rCkQnJkhqCzdEDYUXYeb0g6H9QIgbUIuhJOETehV7C9cRqFViuqQkb4y2HMQZcAqO14upiUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlnHk5%2B3VV8HxXUWSrcA1cFIDHNVTKsIXcPsSACDkTTYjM%2B61oMAZj7QYcxvIyubMbp3clBIuB7OaqVfb3M%2FpDZEjjNwfSEJtYWo1xMITvfFY21R%2FmxkKkxvQ86E27g70QycIEeK4KMq13RPu%2BGC%2FCNReQJ3q1q94R4rectN97jUtykc0Spxzt4XehRugNHug4sHfD8sJRcVZOFklmly4JYUB6cD1F32eTKARbR90cTQjbRFzveCsVzlmkSBAne%2B%2Bubz93D9%2FTek54bioDspY%2By37dFj6sCN9YEXsLZt0wcNvzmGlhcvHBMpNQRjXWUJFotgffVBODXVJoIIDLwG55RtbkP8CkXOo2zPfoDbAoeioPrX2I0YaMy851NyRpxRXIqW0MpuIEbAYNc6AbDNfAQ4JeGs6xWekiI%2FUcSQSw1ml8C%2FAYRjyTP50S1JxcjSTTraK18G8NWHX49HjYwr2zZVE9j62sxIg24DEzEjMZxp2vubo4K9XinncCmOoikYFtVQMU%2FaJksWfstPCG9oO35PRLRoIromMmzgXTWlCvpcn%2FZRtIdeLQdpmXlN7QwBrmEeQq%2FUdBHqceC6vlkXELcA3EeQuuuhJMbp5S%2FXrjea914jHpq%2FHz3xqlMnguk3Hk6HlyQ0yTPOxq9MIKWjMcGOqUBObdgsubmispxEsnA0JBBCt%2FF9PkaeIYY5bnPcOHbuvc9dtBW57x%2B7JSV2VCuLZd1I7jC7%2FvI3xBCjYZY5kKcJlLxdcD2loEAXjZEzHjrL7GZTVLx6tkgGY%2FS5XPrjie2lhiVRjf6SwXtSDRcz7%2BmgufjMzfAc0qN6e3vPq7A2pLhbtOgwwItAPoYhcIBv7oUUix1WVAkrzzeMkOtxq2N%2F2XA%2Fs5g&X-Amz-Signature=9280582b170168846c1f350d34ae8009af889c5fe30f10e7be693c31d09f12f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


