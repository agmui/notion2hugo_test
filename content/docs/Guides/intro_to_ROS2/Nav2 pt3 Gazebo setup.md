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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=2ce3d4c7eb010d645bc6c419e13d45accc2b3f404a910ff7ae671aa99c7f5571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=1a131c708e25e85aad541264555bd1735f6b473236ee02074612a53f17bf820a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=4c3c69af58d051a688d30bb2e58b8e70d0cdb56b5806a6ed1618b79515e53035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=317c811c21f73b1fda0835b370f3397e2ecad8eaff6d40dcbbb7305b7680b306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ABZ7DU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDG1%2BqLcHxdVnNpR2kbvSpTaeJjy0qh6D9tv2%2F0qOi6DAiEA5KRh10m1pqee2fakoNTN2H2k6gPIBGt69LSDOp60faYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKTiviAyl6Hl1UHDkircAxVt0xQjcdFu2xV%2BCM2Inmkd0b1n9NyN7LwY8%2Fb09Dzqw242JSJRwIk30mJJr7lTYGynrNkILUrSr%2FwWnoHCkRBBhkNY74a2RREGiXtLWrVzJQZtZPIKNoCz0ayExQAiLUxG2nfQnOo7lC%2BVOZW5aa080AKDHExl%2FZwX7X%2FIFdExyi5vwOrVCGTE02dgTcI%2BLyRsf8mPkYi6q1UUG5%2FLivbyBmU3GQEXYaQj45gDiqb4Y1Uqb4Cj9nuIqMlGP%2FC%2FTio2pZmaIgtnyH7EloLnVok94NFZ9d7t0oU%2FIkQGHD83Rc6vU9BTTfW5xuxOq4waHNZJq%2Bw55RFdU09N3MGwZPcqVwZYN0QlRegrB6y4kMfsvIire9aToOLjtG3iJzuS32O3n86mg4Rgo3uzMGVHpSAcMrvD2rOOptLiRE%2BPBo9DkM1E4JjkPTdtsfeeqQ6j9%2B5mz6cKAjbjUQPQ6gDHNnxHjogVX8izLQabZVnZW3UbEwapE%2F8rM7bsDscl%2B7iPkvlUIaeEMlh1Ye2n8QYr%2B4t3fNJvlS9r1QT8MBtYZtZnm0qHXd%2BgncmRcKRslSFsOg%2FpdL9NL96cT3iTSXAbAseV2nOv20wioC4R8LobdmalYLXvPRisV1x0Z994MPO3%2FMQGOqUBvipLwFvVYLYWu5kQ%2B%2BuCeirH%2BOqloYBQloOwjZkGTC%2FVt6C7ZFwin%2FlyE7mKjmm7YfDMKZir%2Fi16rsHmyWWU6p4XCAnxYMFFwbOiFoUdFFF4gXP2tFhnzFI%2FOSf29WyPBxyH8cEV7kV%2BEuOEjd34GSTTpI3JdYQIZK9MLYAPTEy9uLbFtoqLkEsbWRtp4YcCfx5cqrUXCw8OxFprMyJiDfdueHNe&X-Amz-Signature=043e6f67f75a4f4b400733f33b429e2ce6ef06429cb3e41e1eb7dee0b60d6c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=92e0f0468f5204a4b1e0740652cc5e5914cd4da6dfc101d510c256561332ca8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=4b99bdd1344eaf74da4645b04c50060613b04ae86f564efed00f195c7c1f09cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=21fb6c2a704d626e96191802c5b49dd5a00db811c24724334f09fb7d4256bb1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=e28a4326142d640b1e4dd1128e5fa69861675394e9c61946a4a71f673d39f9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=fc5f932b2c398a3e1e9ddf1d0aedf9f981bc22bde1434540796cb25f410154de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP7RMWT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC89wiY9FXFLV0dqFfpZGVBvBYsLfWFf1PzNtPnhNJWhwIgZJxAgn%2BUmQaKUsf7y3huqSQnfWUS2W3CVctIcQgJf4Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDG2GnhNy0zxc5nsPIyrcAwC35nYD2k0alxRD1%2BIYl7egGpedAs7iV%2Fr9X%2FeD4UtYIV0dkWEkCSM0bOIrmB7g9mKC9H%2Bk5xP8ssj6QU1DjfEY0AoNptKNL%2FJ9%2B9mzYrre5fZ3ks2Ja%2FwmXglYkcWCqQMnWQIaTu7oKjKmaIznJvjj3u5QOTZQbnSQmAsCHbryrNo1K6XX4X1obgzaMmtAVmeb3FFCJWKWR6ndehJEdYv%2BEMX4gFOKB%2F59m2e8Zao8KdmOjQS0K%2FfGSFz0touaYRJ8IdBqDcq1fxLrsI6UfQAUkK5GDsVsAodY1bcSBzoSYDGnEjiF2mWBo%2BLKGFzFJJdwhH4v2AL7c6d8NwsBwCmr2eAfwHkzj3gtYzZr9NT0qy1NKkbTYLi%2BBRxA7fAAZk1qbS%2Fx0EfpxAA3N5k4Yu7LHmMfYZggp7FEE2bzWV5Z%2Fyx7d3KDbqovS%2BgQFRyAiA23SCalKvElwFLkhmwjgteVsruVfytYqbJLBozF3G8qQR2RhH%2BHn2xlXzB%2B9ZntqxLZdI6GtOK16XqoS4kRNAjQSJ%2F87rrC30Hq7uGjnYyHXixO9wqq4kRWK9r67VTGB5sOnnSrtWmUUNqka%2F1vxK%2B9b0GX9WnrmmaLsDId2r%2FCrZLzWjQWcKPmdgg4MKa3%2FMQGOqUBDSwWkakvPXVnSvSD9zNf4p8sm5ZvKa0RNsSGDH5TN9jIWlgJYFflq0LEKug5AbNscV7C7fwCh7XGf7bjBPSZucZkAhahlVDsmLRJ6Xx9R%2BoKSKqO%2F0%2FctGY3hNlpI8DIVtofc1jymhFr78xraqoJZAeshc%2F9Of5xwj%2BxWSXuZSB4T6u%2BfDxLdVI%2BCfqzLsVXeESMTCO6MgkryD5TaCWZ%2FThI6Dp0&X-Amz-Signature=eb98f36ec4aafa13d919c75ac0163b202cf39817f15435ef4f85115d327e6472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
