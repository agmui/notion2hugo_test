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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=d26e3858fa3ee9434aa0766c51e26bcbd50539cd0c0ad1943b5bfa460f2722cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=c3b8cb1d5534ebdd566ffb1726338855d809291463adbefa34881f6c94746157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=111327ec49ab13f7281ffe879c67cc19fab5ab857f15bfa7885597bb4ca064dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=c40b0a0b13adc22aabde0af47cbad5737289cbcfb61e3ef2818f1d7565f31bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXTQF6L%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3vOllS89%2FjdikwBa5WIt8y2sWKLg21Crsev7X9ya8OAiBwiMz1h%2FLycI7gBnutAV%2FAwPN%2FWxKtQWNRivZNPZoIpCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTjv9HSrf5%2BXLsxQKtwDUycOhKFIklZdphNZrcG3DCQYiKRP2FP1PUfAUkBdOqJSrG2AB7I5RqTDzmc8m8kCAd%2Bgaz6%2BJMjBwEAB9ccvFhY6YwQ0YAgVgCm3IJFmvkD4balkL31IeJlY2DCi8DeVrJPn%2FsprIiOUG%2BtXDkGUy5iHteyWouNqFQo1IVI39Q77a9%2BUB%2B6NxzllKyGV3iGDWvzSsLIETTzAjtl2HBOfVH6zvGvxOsoqtcb3BxWkjsCqn0t1yEqk81GqdIAH9ItvszGG7oRTI3Dugiek9SXUfox2wl65%2BTDoSfORoUnCuCAniKpYbf2g74OgOqMucnAV9CM6Dt5Qfq%2FdrMj%2BaE8HvcAJ5qmrqcGO%2F%2FRRNIgxMUufRk4sJZ8fb0Z0amBnChzcCRlqtiCTH4wTJCN7htSgBwZVFPxg3MLaxAwsyfty8ftiEaVRVoS2rEGa212NMbK2hmwi5%2Bul%2Fo7IJ8TH0eypsNEpA1Pk%2BX%2Bgyxs9etspeZ%2BKvB1iPMCXlZ62yYzHazO6HePKzEF72dZv%2FBVXADXCjyfKy%2BY%2Fpvqhse6blpsCjHa9O7mekP02cvBmYfofbHQU1mB%2BEFX%2BVjk%2BXgTWCWIGonG2fMZJ6N8T83%2BZgR1OH6yptIcJd971Xrqmaj0wora10wY6pgEpii0iyMqb9yY0e7xavHTdjN9I087iOIiBBScO0A5ifVgJwAKFV8Lwys6CgIHQvsHWbkqyS91KNfR%2FpfYevBy4JYPV8EfukBD7yug8KJWuBG6SW1oBx4QcKT2DEqtdg5488n4uluYbGSogEGZtpvcvHrANysc3%2BPMhmbFV5r8bHc6cLFKOraPAlFV3qYjBq2pfoq1CxnAFa2%2By8r7eT%2BdOmhcKxymg&X-Amz-Signature=0b0dc9fe9a4738105b1b428a2e3867388586e2c0d13c06120d64cd91f1151628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=0c5c0d9541506b458c4216ce9e6d4116848c88d173faeb7ab595b3f98416f015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=43564d033d26d373ad265debe7b0d8acefe4c7e489ff57ea15a63daea5bd52fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=c304c7332fefa2fe3e37b0f6ded55ec10bcf9e0bddce635b5f8619a44d5ad149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=23eeef1fce9cb4fb9ee3a504ec7a68ecb25dacff25f58804089ca62aece5d5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=d9b290837109486732abc11397f0d819cd3010060fe83ef32273bbd1ce259cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLY4DGE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrBDKX8lK1%2Badfy6U52BTXU2qMJgSPOcY81khtWj6UsQIgQyX7Gi5INaWLVlHatVIUaJfObfZzLz9Qm9Md2ddqOJYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGOyfE2DWsIDlrf%2BCrcA00b%2Bd3hVeZItOp%2F39GGBsbLlvJfiog%2BjzW76IVCCpGGB8l%2Fr2n9ACzJgxVhwxKKG%2BDdmsI7chHgFupBaonfh7w801S%2BbfOnMJkw8uSvWDL2tSDMFciINj0nMoTdymdG0CQ4RSVzOxvx8ahm%2F4tuS1B%2FcYFQYmcHQuTOTCp6UPMmV0fKk%2FgASP26OqeBr7%2BJVtaTYu9kNIkQ4C8fplBLpLCR5%2BgNIim%2FEjOKNHr1BfkOY533A53jmtzTSH5CoH5iloIJUmITGGK1TI1ZFxI3ZTx4f2ppdhgKJTKOG%2FHqUDSL5QzmwcUgY1QNhvHXnBnAqoXp8DjReFYLudqn4QSB%2FZRuvIk1m7dp6rGIRjCUG2DUlTy7Sy3jyGVo9SRHjjVxlpvLHyvsOoHANP0Ai%2BI018p6QO7ZEsomGTcqsmVFGpU%2FIsbCuT52TBZABIZPif88KBQNo4RPcoyM%2FtCELGiCeX84qsE%2FxCPbPkO0LEdJp70y43T9SL0GYg7iVAJcvKE9eKuenayE9LIK4%2FeoMOKMDY9UbIcblFOc88uhL9YTgKqt%2BpQYmdShq7fBKMwAfolJoSqykHV9D0bnLpVmyQtpZX0WM%2F5D%2FsM0zHayGpl7l%2FWp7RsCVkHFlM8SQpF0MNa2tdMGOqUBq8ILESNswoXe8vs5MFI5fD0klMJEIaATL3dshpvzahfCouc2Eh35osRMQxZ%2BhB8zucJ4OiA18Jbk5SfgUJfHVIbDt2j1py9lg21lvw7AD%2FruVIyT4RgGnFZ%2BTOu3qqAnG4IEy1zDDOmchXPf6ZUjevKwmOANgFgMXTwouanSONp4Lppp3Ys4Nr%2BdiYdx0MPRk53ddsk5DFS9%2BwbShC65Tu2dUTEv&X-Amz-Signature=468a5291884ec6fb1eceb952f291a406d2361b8726685cb93f8eb243b4c78e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


