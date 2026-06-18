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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=db60752d0c1b798d7fe6de09a4a3d02549871e4776747e365dacd6a482829676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=43167c34f36bd9ccf66bdfd719df5030185ef27d96beee81892fcc7f69136f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=7bd8df4f0be45af0345e0c2887dde490e244c5671974c39c25cf98c9350dc72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=df443827410aaa24f98231066126e784d078fa82b97f1fbae91e8418413ed90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPLJCKG%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQcefPfF7mF8zk127gDcbSK11DCynfuYNgWDZt0aw9wAiAavzRHSKJ4cUAK%2F%2BXy5RhjWvY6iHc3bDBrecatWbw8vCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4x7AYTEMCPT8ZCnwKtwDFNTjSW0QyTEd9srPingudmRFZ46gcjJRYZdaV3u6uOh1LNVrIImp0PxTuwQeZfxb2XyHXliGKCt3EVyuGz0kCVY3lxNNl92M%2BGs1CiLxq16kkboTg2zokicuBJB%2FmGLQmZ2ZhExz9kAiCC19UlYXA5TsxcmrGfl6wd1%2FtcTiEOClyHQVMZNdy0i80PgztNYafwMG9VFZwvqYGfTM6U9bIjtRF%2FDZh2rwzzH%2B8uRqEkL8dg5Mon95vBFIicIRCNBBYNkXQ50k%2Fmz%2BL0PfI3ABu72GFPAgQZHDAv4X4OFVQzc%2BXWnRlKVXPxpq5vRttsUkkAhp93DHs08NMhiwSVvG%2BngrB8ff2KNL6ZrHQxmmjVnXXxGDmpUSQpdsaLDSFpA%2FDlvX%2BAfcFf8O%2B%2F5TC5SUbV%2BQ9a2t5%2B3Y%2F92rz9hlvd3mnKXDlMoT4RivOyaUcgxiB7khvP7wsLp6i18HKjoOiL65qw5r3xFbmgWFBDpJ7JwLGbx9LXBkqbIIwlfnm6fOh61cxdMa7wFCV%2FnCOF7KRRBbuiaI7K%2BnFCSkWfkMQH%2BKaPSq9ToD57d8eSRQopGlkMXV%2F9bIdRF%2FYu79Zo7rDNO2phrHQ%2Byz760IdZwDdroiDH9oyJT%2Bs7EMlxswj7DN0QY6pgE6dt3rqovuJ49uk7QnTNcqDzs31ea2m3dXnOTCvkksjkba%2FSDcepL5tEBya9OK%2BWPVHY0Zeg9xXRVKcQNWvYqtELC1Im0dk%2BUQlLFLnUHuM%2FdK%2Bgc9%2F1CMfxo7OhoGV3WuEgEUXnu5QMa%2FE7P9Uh2qUZ35mpr%2BLBWgmJk4uBfif%2BjqCtzGGTVusmomiIRnNeP2ghKkosQWs9qhWzFb2pxteKf0WiV%2F&X-Amz-Signature=08cb6db6a302cfca2f6b49402c35da6c4bf3071bf605e6aa9880c54b21a75757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=e556b25788770d3dfff6694499cc0afc313986338fddde2ef98471ecf703ba46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=e44841bef053dddd6d96ccc65687175105f0f542d04b5c4579df76b02a920e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=939b6b9893166df31db47f9451af793226bd3f85027c4efef29b6e1dbb5c6aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=dfa1a17108cf3380d413d263565626a53761c65b4338608d866006d97b8e2c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=102149ebca50ab12e786a3abded97c3cc90aef1552eb247409dc156dd2896cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBKXU7H%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDac511j2NinWMDucAhuyFHlNQiPxSGxJ6Fm3wDZtTVGAIhAPDBIkYT0BYDMT96DLuyNm7JAntu%2BIcaUyQQcRn5c5SpKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlai14mqz6iAiVKtEq3AMIa26Her9nc0bGsXtvACUaFPJdpWk6qUdyOgKPHU9NHe5UTs1BGNlWKuTEOCZ9JNbTCTiVlExAkmi55xcaKV0XF3MKPm0vHgz0grYHnLW0r2o3hN2ymSB0E%2F5qCs6s%2B5B0plLviQ5zoY4lrDoNo5uvjpSZdY0W11MRglNwkpL8enMKieANmJ2f7ZHwT46XvYotbn2IHSDTMpKF8HVjnUBU7FoaXu50TYRgSicBz5HVIR8CVUAUE41ZiI8X02CtrY%2Bhq%2FfZLr9FICgdBWWiFqMRlCeSQ07NjevrsRm%2Fz7sbVn3OELwUxfPGm7UK03QHUsfX7rAHlve%2FgLctE5NZD%2BaooMlN7Lz50CPPLIMQ%2BugW58OcSCXwCMDqI3Mr84IbSO9uQVqD%2B%2FrNTwz8HQPjzuDkMmfEdTXRIBF7MJ6vvKr8fAPwFDP2rYFwRd7agbXciBRAA7UnORNAwIujgro40L18n%2FZYS8X%2BVYUs1QcoD9Yu%2FrD7Km4%2BOF%2F0LHEDzirWinuj6MDvvmMuuTOU4pUrXnSJkSgqn10e2YVSqcjkSUYetOS5%2B7%2BdShhxCYY3J%2FIxU9FTqZq3hUFUBY7MwvJaP%2F41021UOhrB%2BHH2epbZjZyGI%2BDnruxz85qI73tLuzCiss3RBjqkAURxbYjRud7urTBgU0pRcewiwLq76nCaMuFMYLc5gKVsf%2BNEQ5i6KYp1lppiaAcLhW1WgeIsuXIptQOCz7r12%2Ffv%2BotUgvYVaGdDEg3khsIZRy6YRog8gk7J1CFM42SuMGOLB8sF%2F4nldRkSSwVqr5OFAuq0e3%2Bb9YkDbqKA9OMS1y3zj%2BkDmu%2Fb223SWhyIT7m1ErtPWY0VbSoC02zZQrJgHhmC&X-Amz-Signature=c49b725fdb1790be1a57aaaccb6a92451458dd9a89e827e7ee2f76388150c4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


