---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-30T06:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-30T06:24:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=030c94269c3f206a5ad56c1f46182d636dfe5bbbf23e5ce091f8e4ff92405300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=7382c8614da2c93440559bb2352eac20ec995e00609e03339dd162aa2b6aa532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=67de141ce415280f4a87a87d18273e4279fb5623903bc9fdd4a9295a7604e530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=5b3407ab29dd5b91abd6f977bd744c89b472dbe9cd7d8a34ad8b3295421477b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=1776f9d084b1dd6be22e21484339b9200942f4b30102a59af3db39334da6a374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=3b945b7592521fe07c39e1d803a926d6b02b832a91c438f3862f010e525e3a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=abe5abc7eef20f02da7ba7cfc4257bc430f30569a17cf940bc35a7e5ed52dd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=ab0692d71cc06a6b8c038b89577996bc466c2aff6ac748d2283a7915ff060a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=8d30c6f329ee221c1120e1a59ab8a6ced5016349b39932cb3e5951821d1c63af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBGGDT7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa3mx73OOs2f2pkzBRO3Ilv66tPxFVDhw9D3Gh5TvdQgIgOcfsZLqOgCRiHO4qBmJhnJ%2FYZ84evZP5c%2FVMrq8QLR0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgVI67kbaiW%2Fev1ayrcA7dEYbF%2FHZF2IQ1Q3JEV1P4izLK4MsfdFgusMGpjM1%2BRryo7I5oFRXrSZB%2B2y5qqJQYtYSzjlvdiGnPifX06QO89IAGQHi7hahOmpQ4ftbtih35R7EDBnDXWwpl7l89Y%2B%2B9A6caAs9WKZNffXrUAnHHW0FNDPzq42neIcEtDVvLrIAGjez7Ijmd3VYbWJo%2FsRmpS03mjuaxk1E%2BsxMOq00kW3ONd9nkNLVzFuDgoRMeUUNx%2F3zyNie9cwEAPuNYeZlXedx6XkvFLUXPS6%2BYG36iEh9q1pf4alKgVwAHrdKcJl0u5iVCyH4OobST53t8vY97jZFfQ%2F6jI1wnB%2FmCVuDAVHUVuZlSg8rDt8IHFg%2Fr9Rz2LgHWvxV%2BjmsdOvhYpP2Zl4d4KGx5qCgemQEBtiKKALNbKMJJaefK8DhuFFDYKt2fX9sNBFSBVVKbU5OWPdZRhYnsH8KLvfTYsS8rqxIvmqbAHQ7E4gy%2F5bKn0ZyRF0a0rHAEbkzMFR1lIWh15ZBbTrwdtOHszIQ6Nygkuvz5elpwBogeFQ7nKtT%2FWCDetu%2F8A8J1D%2FakANx1JgxQS%2BQJQ49QSZ6sn3VRXclhjfOi0CYqt1ZqacUl0UvlZi1oLJ0hyEPg8vZ%2FFVObgMLfttMQGOqUB2nld8xg2aHTrbbSSedup%2F0bd5mFuH67kKg1bsnwQfv6umvmcyFwobcQBQXPQBbrAJbqq1AFsIQGx8dnBRZkNmbqf%2Bh3h%2Bwb43U%2BPyqv1pF9CXQZ1gDeDMJ3p1on5w%2Byk3HBahtGVR5vfV0hy4sPnq7HEdasb5mdhk9b%2BI5%2BquxX3XgcqqQMHwbThjYuFOuwYYONkQB7Y%2FQaJ81zZhcBI4s5Bl0Zj&X-Amz-Signature=edba68765a81ccc419da49b2f4598e377ae37e2032117970cbaa5d3132db0f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
