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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=aabefc8848cccc861784e72a1c899a9cc4767a300128091bfdafbb1e16098074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=0f9a0da6d6aa36831692caefac078e10ae4ece5cc73c9b4025ab5e95d6596b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=22c48c9fc8b00833a315419d27cdbf97c83225bd67b8ecc2cb36f3b908283a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=3c891b6df11c88fa93b950c29604642096aab55c57ee5b73ac6592a4cd9816d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XURVC4FF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdju%2Bk%2FffDLR%2BllNm4%2F5hYRHAZ7t6FSsax2%2BnGzfS%2BrgIhANMKQ6zJKTlHqCmS1NdatQch2UTdwrRnv%2F%2B7NRW24URkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwShviWkhBOAtII%2Fbkq3APizEHToGg3azJMsNM2tVjtBpr42luEpQ9ZfM%2BMkuh5vYKOMTMASW%2FKMg%2F0nOtoNeN1rjuBSOpX%2BPoBpJ03Ze%2B7vc5utRKE1EB5pT6oRvQK93bfAWIrlw0fzCTxNXIhu0tc%2FsvDH5cygIHWg3nw6bWO1xaGjyKYPshB5KpeBCNx%2FmQeNZbjeaAdFc2U4ehnLCOBw8n4bwsR09wkysPmvcqcYnp52iGyH4JYU5h1vI99nh2YtyCfOV9jLDDVIvWqDbWQ%2FynTZAx%2BqbPom%2BttDztm3FhWjAPegS2MtkJjFAk3XnfzPIKSPMeDeyfUR7spVpWjX0JQ0Yn6hXs6wVlRcGZO2VChdyEku34ATw8dqEkhLvRwW%2FJ0Mg25Y8AFeNe3AZjHLtcdqPhQ4TR0e5PBIAV%2F4nkK7Y0SfnJNi8sn4l2uyZPZdfuPESviTI6P7rBdAJu0XbAI0NcJzoD9%2Brtce3fDvKE84ikcOYTkI%2BA9woEXvyehhQKA5qs3Z%2FLNS6BarpeVWERlqHr05iBaxNRcno51nMHzPS%2BQGoC4VIOm9rNY90cEPZIR%2BUoPubRLveWl9dWspl0vfSaeBCb1F86DsKyF%2Fho2HhVysaSM06jjEdS1v%2F7JI029ajTzMRGSfDC3uMHSBjqkAZUJx6pH8ktP4vdKXwgU6ObUV1PLhyb%2FB6%2FMFSk0qkmX5Xntu4zC6uRZMR%2B56GS1Zf5WkxBa3KLdfqo5H9Vm6u%2BaitW0NkpNj3dAMauHihsR6G7QOWmZl8XWDk4WSCdmV0K3%2ByMWt9I4ct8B%2F%2Bzbr5JHi%2F7NyTF37joaSWrqp3cRJT7phTpcbCjcln%2BP4fhTkW0DShvFue29sl7fjno9Ae4bSozp&X-Amz-Signature=2a54f974f56c47c3b2aca27a78c88b38afee16212ed849111a774d99b235164e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=db92de3c69a8ff1c63eeca5a488d7ee9a7fbffa142d7643ce994d5a479e165a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=6997d1c2659d566cc4a9aab5ed57821fb30b1ec627ed7b7bf7973bdd668b58ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=765cea54fbe77db59ed0b2c7bd61255b412346ae8f65fae552fa76f6baa7b79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=de6aa88dae45163d7295114008c0e40ea09c86621851efe6751dd52f2030c981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=83055b34bff73643a9fbaa818be60c2dc7b2c1945e99f4480001e630edf5f560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q23OZA6%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfpobbAH%2BEUHDIeg7wYrg3sGPkEHtLxbcyjSTUymVcAIhAMr3MOv4j8yhEo6PhhJGUkuYvy7v%2FVbWAD5zC6A4hbJmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAQEaLPMnBoMdFpX4q3APADtWayPQ9h3o92DttYc07HkEyJuLY7G9fo%2FmY%2F6jIHnJqpOd0CcaLA3TH6x2sNs9inv475AS4nHe8IS%2Bkq4WqlQgOiWzYHF4QKJtscWBRgM%2FUNmXiJEkV6PkCjFxmAIE64v%2Bmy1ztoqiybq3H5RBNQSuVM5VYtjTBTvxBkVzgh%2BcSTwgZkPHBq5%2BkIp9Z0pUNdMvTBghGLlxkKUhhrj1VAik%2FavKje7T7ZVaADY2mzacQ0iUQZ7PNniAmomc4kcE6WXI4k%2FHIHeCJRDS9GfLYyzoEjIOl58o6rXTEWBOwBd1wwoqNmVsE%2BbmTGq0M7Ea%2FBmhya1lkjzwHlPKOOgCIzIn9CVHKSzBtwC4UAn0Dk5ehTm0C4eYN0QcC5YIW4ZiQol6n278Lje%2F%2Fvl0X%2FGMNZ6dH%2B8G9Kc6%2BjAP0RuDldmOsBIkETmnYLqlaytCqZnYthZRxtG0%2BVEUmqQLrSm%2F6%2FIfVrvAdIu1JYM2OLpFSmNDMWi1Esqchay0jcAuzBupaBVgfRwu0C2yBLxPCP0nwIOwQsFW0Lk5jNMSQvITPyxaxIHK0cZEBaOmHrkw560%2FGGpQ50BKGWb8tEX1bVG0jBM4nbefscIAT42AyI7cowPkdUSaHtnFsl%2Bww7TDetcHSBjqkAcJK%2B%2FUozwPwxGXBl9kI1AnrRkwVlNQ4Pk085dhK6cM22yyJ9jlxPuwrbDAiPtWk6qxdta931w9y6fcNP4Vh%2BZynA1Z%2FB9qOhZgZoayPuiSifKxvZ9oDvbnIpRFkGt9kHDz9h4wB6r8NBTNHB0g2EBNexDm7kzjylYk7nU0RX4%2BZqXnxUGCq7hwyVxwt2MJERJg1T%2BZsNNoKOZF7je89tO3t8Uiv&X-Amz-Signature=8df9db4cc5b9bef94d1592ce75429e2c9b1b5f0d75abe29c94e7d989a45fa068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


