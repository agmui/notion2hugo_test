---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-29T00:39:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-29T00:39:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMP2OTR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCNv6sfbryydFKACS1ZAgd7%2Bemdomo9Kwpw61gjhJD0YQIhAMsUnzkapb6iKu5lK8qs8pTGVpjbdHUgiRIAgqSyPIw%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeoYOAGzC8dhDS1LYq3AOxVT%2BdFw8nlT3%2FhMBI%2FMqFHg6NzD%2B4lC%2FMrqk9Ev7hYhCfsrzebUW%2F1XKWfDDO1HQ06vSuKP9ChrtG14a1C6MThvuSOaK8%2FoX8LUr5PuDCycHfN1ToEZd7Oj3O2qOI0exqaFDi8yAgG4hNTncWbqpqiQswN8%2BSGSf2imI%2BMMoM2OO0fo5C7cRAHOH81lJILCK8OcFxmoQWnMfDKS%2FXhFBbtrFvAiE1sZxtlXK5gSuyFaMiRym7EIXntJHQqwrc2CAyC1Yzf3ub1DLZbiKRGvd%2F2NqWtBmEXjpf6phM%2BQQ9x2F5kCN2dCr7%2BzOYcVlVv%2FEbUtsZHP6ut42G9Xr2RGx%2Fb1H5nU3wlGcTyNIDpUL6weuFrpnHbvrAR1eGyoLcVlm65OIYSMD%2BxU5zKXqQ5qLN4yD7s35TTwNC85zQ6EelJJToDlIM%2BSjnIqOKTlsiboOpu69kpOrVF%2FTE8PdgZDEfxLuF%2B3TFIXsR%2BuRqFolqJS0zDHVWS%2FPTt6G%2FZ6KZHBQz%2BmoS3qlgVd1MFnZPf9oQF8ZH5aoA%2FF4SjLDpduV2dnU8TmPRTu48SIlsLpx37bKVSG1VF1MHX366aTDFU30Ka9fvlBOaQJ53meISOfPngdP2TvbKu%2B3XjBJGAjDVnqDEBjqkAcGUCl%2FTHK1qi%2FQQfLZoiVjP4lA0hF6dR%2BaOGVuNluJiB%2F91KLxNi4EhshCfukSXfcyfI6vR1PjVxNsYmoz5DHLsB0U7YZYjGlrf99q4ACcEKR1PwSx2s8o2%2BE%2FTLdvWn61G%2BrORoEXRwVItxv0NDHVY32v7hGbq6lZTgaug04KJxjiCIjDK1bibQbwQWLMZ21L57L0G99dj6qXk4Bw26OTuQKy7&X-Amz-Signature=ae6a07e0fe78e52ef2fbd44226f52d5e2cf7c3200ff5a0506e34448eadc0560f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMP2OTR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCNv6sfbryydFKACS1ZAgd7%2Bemdomo9Kwpw61gjhJD0YQIhAMsUnzkapb6iKu5lK8qs8pTGVpjbdHUgiRIAgqSyPIw%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeoYOAGzC8dhDS1LYq3AOxVT%2BdFw8nlT3%2FhMBI%2FMqFHg6NzD%2B4lC%2FMrqk9Ev7hYhCfsrzebUW%2F1XKWfDDO1HQ06vSuKP9ChrtG14a1C6MThvuSOaK8%2FoX8LUr5PuDCycHfN1ToEZd7Oj3O2qOI0exqaFDi8yAgG4hNTncWbqpqiQswN8%2BSGSf2imI%2BMMoM2OO0fo5C7cRAHOH81lJILCK8OcFxmoQWnMfDKS%2FXhFBbtrFvAiE1sZxtlXK5gSuyFaMiRym7EIXntJHQqwrc2CAyC1Yzf3ub1DLZbiKRGvd%2F2NqWtBmEXjpf6phM%2BQQ9x2F5kCN2dCr7%2BzOYcVlVv%2FEbUtsZHP6ut42G9Xr2RGx%2Fb1H5nU3wlGcTyNIDpUL6weuFrpnHbvrAR1eGyoLcVlm65OIYSMD%2BxU5zKXqQ5qLN4yD7s35TTwNC85zQ6EelJJToDlIM%2BSjnIqOKTlsiboOpu69kpOrVF%2FTE8PdgZDEfxLuF%2B3TFIXsR%2BuRqFolqJS0zDHVWS%2FPTt6G%2FZ6KZHBQz%2BmoS3qlgVd1MFnZPf9oQF8ZH5aoA%2FF4SjLDpduV2dnU8TmPRTu48SIlsLpx37bKVSG1VF1MHX366aTDFU30Ka9fvlBOaQJ53meISOfPngdP2TvbKu%2B3XjBJGAjDVnqDEBjqkAcGUCl%2FTHK1qi%2FQQfLZoiVjP4lA0hF6dR%2BaOGVuNluJiB%2F91KLxNi4EhshCfukSXfcyfI6vR1PjVxNsYmoz5DHLsB0U7YZYjGlrf99q4ACcEKR1PwSx2s8o2%2BE%2FTLdvWn61G%2BrORoEXRwVItxv0NDHVY32v7hGbq6lZTgaug04KJxjiCIjDK1bibQbwQWLMZ21L57L0G99dj6qXk4Bw26OTuQKy7&X-Amz-Signature=50d80f6d057c85c833900071114ee5a87a1492721ed0143c3247e8685f506d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMP2OTR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCNv6sfbryydFKACS1ZAgd7%2Bemdomo9Kwpw61gjhJD0YQIhAMsUnzkapb6iKu5lK8qs8pTGVpjbdHUgiRIAgqSyPIw%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeoYOAGzC8dhDS1LYq3AOxVT%2BdFw8nlT3%2FhMBI%2FMqFHg6NzD%2B4lC%2FMrqk9Ev7hYhCfsrzebUW%2F1XKWfDDO1HQ06vSuKP9ChrtG14a1C6MThvuSOaK8%2FoX8LUr5PuDCycHfN1ToEZd7Oj3O2qOI0exqaFDi8yAgG4hNTncWbqpqiQswN8%2BSGSf2imI%2BMMoM2OO0fo5C7cRAHOH81lJILCK8OcFxmoQWnMfDKS%2FXhFBbtrFvAiE1sZxtlXK5gSuyFaMiRym7EIXntJHQqwrc2CAyC1Yzf3ub1DLZbiKRGvd%2F2NqWtBmEXjpf6phM%2BQQ9x2F5kCN2dCr7%2BzOYcVlVv%2FEbUtsZHP6ut42G9Xr2RGx%2Fb1H5nU3wlGcTyNIDpUL6weuFrpnHbvrAR1eGyoLcVlm65OIYSMD%2BxU5zKXqQ5qLN4yD7s35TTwNC85zQ6EelJJToDlIM%2BSjnIqOKTlsiboOpu69kpOrVF%2FTE8PdgZDEfxLuF%2B3TFIXsR%2BuRqFolqJS0zDHVWS%2FPTt6G%2FZ6KZHBQz%2BmoS3qlgVd1MFnZPf9oQF8ZH5aoA%2FF4SjLDpduV2dnU8TmPRTu48SIlsLpx37bKVSG1VF1MHX366aTDFU30Ka9fvlBOaQJ53meISOfPngdP2TvbKu%2B3XjBJGAjDVnqDEBjqkAcGUCl%2FTHK1qi%2FQQfLZoiVjP4lA0hF6dR%2BaOGVuNluJiB%2F91KLxNi4EhshCfukSXfcyfI6vR1PjVxNsYmoz5DHLsB0U7YZYjGlrf99q4ACcEKR1PwSx2s8o2%2BE%2FTLdvWn61G%2BrORoEXRwVItxv0NDHVY32v7hGbq6lZTgaug04KJxjiCIjDK1bibQbwQWLMZ21L57L0G99dj6qXk4Bw26OTuQKy7&X-Amz-Signature=f2dceff4d4af701e93bcf4d4964ca2cc6c5efc1bac928b1bfeede7f057c02309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMP2OTR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCNv6sfbryydFKACS1ZAgd7%2Bemdomo9Kwpw61gjhJD0YQIhAMsUnzkapb6iKu5lK8qs8pTGVpjbdHUgiRIAgqSyPIw%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeoYOAGzC8dhDS1LYq3AOxVT%2BdFw8nlT3%2FhMBI%2FMqFHg6NzD%2B4lC%2FMrqk9Ev7hYhCfsrzebUW%2F1XKWfDDO1HQ06vSuKP9ChrtG14a1C6MThvuSOaK8%2FoX8LUr5PuDCycHfN1ToEZd7Oj3O2qOI0exqaFDi8yAgG4hNTncWbqpqiQswN8%2BSGSf2imI%2BMMoM2OO0fo5C7cRAHOH81lJILCK8OcFxmoQWnMfDKS%2FXhFBbtrFvAiE1sZxtlXK5gSuyFaMiRym7EIXntJHQqwrc2CAyC1Yzf3ub1DLZbiKRGvd%2F2NqWtBmEXjpf6phM%2BQQ9x2F5kCN2dCr7%2BzOYcVlVv%2FEbUtsZHP6ut42G9Xr2RGx%2Fb1H5nU3wlGcTyNIDpUL6weuFrpnHbvrAR1eGyoLcVlm65OIYSMD%2BxU5zKXqQ5qLN4yD7s35TTwNC85zQ6EelJJToDlIM%2BSjnIqOKTlsiboOpu69kpOrVF%2FTE8PdgZDEfxLuF%2B3TFIXsR%2BuRqFolqJS0zDHVWS%2FPTt6G%2FZ6KZHBQz%2BmoS3qlgVd1MFnZPf9oQF8ZH5aoA%2FF4SjLDpduV2dnU8TmPRTu48SIlsLpx37bKVSG1VF1MHX366aTDFU30Ka9fvlBOaQJ53meISOfPngdP2TvbKu%2B3XjBJGAjDVnqDEBjqkAcGUCl%2FTHK1qi%2FQQfLZoiVjP4lA0hF6dR%2BaOGVuNluJiB%2F91KLxNi4EhshCfukSXfcyfI6vR1PjVxNsYmoz5DHLsB0U7YZYjGlrf99q4ACcEKR1PwSx2s8o2%2BE%2FTLdvWn61G%2BrORoEXRwVItxv0NDHVY32v7hGbq6lZTgaug04KJxjiCIjDK1bibQbwQWLMZ21L57L0G99dj6qXk4Bw26OTuQKy7&X-Amz-Signature=7536319627912831c190a3085fd104912fc36b47f767534a1df9c7a444c957c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```bash

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>0.1</max_linear_acceleration>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMP2OTR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCNv6sfbryydFKACS1ZAgd7%2Bemdomo9Kwpw61gjhJD0YQIhAMsUnzkapb6iKu5lK8qs8pTGVpjbdHUgiRIAgqSyPIw%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeoYOAGzC8dhDS1LYq3AOxVT%2BdFw8nlT3%2FhMBI%2FMqFHg6NzD%2B4lC%2FMrqk9Ev7hYhCfsrzebUW%2F1XKWfDDO1HQ06vSuKP9ChrtG14a1C6MThvuSOaK8%2FoX8LUr5PuDCycHfN1ToEZd7Oj3O2qOI0exqaFDi8yAgG4hNTncWbqpqiQswN8%2BSGSf2imI%2BMMoM2OO0fo5C7cRAHOH81lJILCK8OcFxmoQWnMfDKS%2FXhFBbtrFvAiE1sZxtlXK5gSuyFaMiRym7EIXntJHQqwrc2CAyC1Yzf3ub1DLZbiKRGvd%2F2NqWtBmEXjpf6phM%2BQQ9x2F5kCN2dCr7%2BzOYcVlVv%2FEbUtsZHP6ut42G9Xr2RGx%2Fb1H5nU3wlGcTyNIDpUL6weuFrpnHbvrAR1eGyoLcVlm65OIYSMD%2BxU5zKXqQ5qLN4yD7s35TTwNC85zQ6EelJJToDlIM%2BSjnIqOKTlsiboOpu69kpOrVF%2FTE8PdgZDEfxLuF%2B3TFIXsR%2BuRqFolqJS0zDHVWS%2FPTt6G%2FZ6KZHBQz%2BmoS3qlgVd1MFnZPf9oQF8ZH5aoA%2FF4SjLDpduV2dnU8TmPRTu48SIlsLpx37bKVSG1VF1MHX366aTDFU30Ka9fvlBOaQJ53meISOfPngdP2TvbKu%2B3XjBJGAjDVnqDEBjqkAcGUCl%2FTHK1qi%2FQQfLZoiVjP4lA0hF6dR%2BaOGVuNluJiB%2F91KLxNi4EhshCfukSXfcyfI6vR1PjVxNsYmoz5DHLsB0U7YZYjGlrf99q4ACcEKR1PwSx2s8o2%2BE%2FTLdvWn61G%2BrORoEXRwVItxv0NDHVY32v7hGbq6lZTgaug04KJxjiCIjDK1bibQbwQWLMZ21L57L0G99dj6qXk4Bw26OTuQKy7&X-Amz-Signature=d41126ee1d5e7d1234ee5defb7a05d2b83f36953e90971facb455ac5c2ff206f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMP2OTR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCNv6sfbryydFKACS1ZAgd7%2Bemdomo9Kwpw61gjhJD0YQIhAMsUnzkapb6iKu5lK8qs8pTGVpjbdHUgiRIAgqSyPIw%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeoYOAGzC8dhDS1LYq3AOxVT%2BdFw8nlT3%2FhMBI%2FMqFHg6NzD%2B4lC%2FMrqk9Ev7hYhCfsrzebUW%2F1XKWfDDO1HQ06vSuKP9ChrtG14a1C6MThvuSOaK8%2FoX8LUr5PuDCycHfN1ToEZd7Oj3O2qOI0exqaFDi8yAgG4hNTncWbqpqiQswN8%2BSGSf2imI%2BMMoM2OO0fo5C7cRAHOH81lJILCK8OcFxmoQWnMfDKS%2FXhFBbtrFvAiE1sZxtlXK5gSuyFaMiRym7EIXntJHQqwrc2CAyC1Yzf3ub1DLZbiKRGvd%2F2NqWtBmEXjpf6phM%2BQQ9x2F5kCN2dCr7%2BzOYcVlVv%2FEbUtsZHP6ut42G9Xr2RGx%2Fb1H5nU3wlGcTyNIDpUL6weuFrpnHbvrAR1eGyoLcVlm65OIYSMD%2BxU5zKXqQ5qLN4yD7s35TTwNC85zQ6EelJJToDlIM%2BSjnIqOKTlsiboOpu69kpOrVF%2FTE8PdgZDEfxLuF%2B3TFIXsR%2BuRqFolqJS0zDHVWS%2FPTt6G%2FZ6KZHBQz%2BmoS3qlgVd1MFnZPf9oQF8ZH5aoA%2FF4SjLDpduV2dnU8TmPRTu48SIlsLpx37bKVSG1VF1MHX366aTDFU30Ka9fvlBOaQJ53meISOfPngdP2TvbKu%2B3XjBJGAjDVnqDEBjqkAcGUCl%2FTHK1qi%2FQQfLZoiVjP4lA0hF6dR%2BaOGVuNluJiB%2F91KLxNi4EhshCfukSXfcyfI6vR1PjVxNsYmoz5DHLsB0U7YZYjGlrf99q4ACcEKR1PwSx2s8o2%2BE%2FTLdvWn61G%2BrORoEXRwVItxv0NDHVY32v7hGbq6lZTgaug04KJxjiCIjDK1bibQbwQWLMZ21L57L0G99dj6qXk4Bw26OTuQKy7&X-Amz-Signature=b1e5a9e55acba3152d3138923bcab2430539c09941b7a6ae16daf75a956a31be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: idk add robomaster arena

> If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

## Updating launch file

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
        DeclareLaunchArgument(name='use_sim_time', default_value='True', description='Flag to enable use_sim_time'),
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMP2OTR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCNv6sfbryydFKACS1ZAgd7%2Bemdomo9Kwpw61gjhJD0YQIhAMsUnzkapb6iKu5lK8qs8pTGVpjbdHUgiRIAgqSyPIw%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeoYOAGzC8dhDS1LYq3AOxVT%2BdFw8nlT3%2FhMBI%2FMqFHg6NzD%2B4lC%2FMrqk9Ev7hYhCfsrzebUW%2F1XKWfDDO1HQ06vSuKP9ChrtG14a1C6MThvuSOaK8%2FoX8LUr5PuDCycHfN1ToEZd7Oj3O2qOI0exqaFDi8yAgG4hNTncWbqpqiQswN8%2BSGSf2imI%2BMMoM2OO0fo5C7cRAHOH81lJILCK8OcFxmoQWnMfDKS%2FXhFBbtrFvAiE1sZxtlXK5gSuyFaMiRym7EIXntJHQqwrc2CAyC1Yzf3ub1DLZbiKRGvd%2F2NqWtBmEXjpf6phM%2BQQ9x2F5kCN2dCr7%2BzOYcVlVv%2FEbUtsZHP6ut42G9Xr2RGx%2Fb1H5nU3wlGcTyNIDpUL6weuFrpnHbvrAR1eGyoLcVlm65OIYSMD%2BxU5zKXqQ5qLN4yD7s35TTwNC85zQ6EelJJToDlIM%2BSjnIqOKTlsiboOpu69kpOrVF%2FTE8PdgZDEfxLuF%2B3TFIXsR%2BuRqFolqJS0zDHVWS%2FPTt6G%2FZ6KZHBQz%2BmoS3qlgVd1MFnZPf9oQF8ZH5aoA%2FF4SjLDpduV2dnU8TmPRTu48SIlsLpx37bKVSG1VF1MHX366aTDFU30Ka9fvlBOaQJ53meISOfPngdP2TvbKu%2B3XjBJGAjDVnqDEBjqkAcGUCl%2FTHK1qi%2FQQfLZoiVjP4lA0hF6dR%2BaOGVuNluJiB%2F91KLxNi4EhshCfukSXfcyfI6vR1PjVxNsYmoz5DHLsB0U7YZYjGlrf99q4ACcEKR1PwSx2s8o2%2BE%2FTLdvWn61G%2BrORoEXRwVItxv0NDHVY32v7hGbq6lZTgaug04KJxjiCIjDK1bibQbwQWLMZ21L57L0G99dj6qXk4Bw26OTuQKy7&X-Amz-Signature=95df886fcd3c01aabf319c1601590f951342cac135a0b2385c1c8d1a5dfeb584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

TODO: add telop twist keyboard

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMP2OTR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCNv6sfbryydFKACS1ZAgd7%2Bemdomo9Kwpw61gjhJD0YQIhAMsUnzkapb6iKu5lK8qs8pTGVpjbdHUgiRIAgqSyPIw%2FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeoYOAGzC8dhDS1LYq3AOxVT%2BdFw8nlT3%2FhMBI%2FMqFHg6NzD%2B4lC%2FMrqk9Ev7hYhCfsrzebUW%2F1XKWfDDO1HQ06vSuKP9ChrtG14a1C6MThvuSOaK8%2FoX8LUr5PuDCycHfN1ToEZd7Oj3O2qOI0exqaFDi8yAgG4hNTncWbqpqiQswN8%2BSGSf2imI%2BMMoM2OO0fo5C7cRAHOH81lJILCK8OcFxmoQWnMfDKS%2FXhFBbtrFvAiE1sZxtlXK5gSuyFaMiRym7EIXntJHQqwrc2CAyC1Yzf3ub1DLZbiKRGvd%2F2NqWtBmEXjpf6phM%2BQQ9x2F5kCN2dCr7%2BzOYcVlVv%2FEbUtsZHP6ut42G9Xr2RGx%2Fb1H5nU3wlGcTyNIDpUL6weuFrpnHbvrAR1eGyoLcVlm65OIYSMD%2BxU5zKXqQ5qLN4yD7s35TTwNC85zQ6EelJJToDlIM%2BSjnIqOKTlsiboOpu69kpOrVF%2FTE8PdgZDEfxLuF%2B3TFIXsR%2BuRqFolqJS0zDHVWS%2FPTt6G%2FZ6KZHBQz%2BmoS3qlgVd1MFnZPf9oQF8ZH5aoA%2FF4SjLDpduV2dnU8TmPRTu48SIlsLpx37bKVSG1VF1MHX366aTDFU30Ka9fvlBOaQJ53meISOfPngdP2TvbKu%2B3XjBJGAjDVnqDEBjqkAcGUCl%2FTHK1qi%2FQQfLZoiVjP4lA0hF6dR%2BaOGVuNluJiB%2F91KLxNi4EhshCfukSXfcyfI6vR1PjVxNsYmoz5DHLsB0U7YZYjGlrf99q4ACcEKR1PwSx2s8o2%2BE%2FTLdvWn61G%2BrORoEXRwVItxv0NDHVY32v7hGbq6lZTgaug04KJxjiCIjDK1bibQbwQWLMZ21L57L0G99dj6qXk4Bw26OTuQKy7&X-Amz-Signature=29fa3b4bfb13bfd45c1efcb4ce9733d02bb1202e576235b8c0458815cf8aacdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
