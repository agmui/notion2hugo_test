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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=151fa9222d62672407a65c6e13cf5545839330c9618349b92e1c7f2cb8a01d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=d18b3df3d305c0d0d0ad778db71b488ec98eb67565ed07027c692e6a94930c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=7cd5251d44cf57635078852a233eef393be7043f5fe21d4dc5c4db076d0fd313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=1c5ebdcc5cb1d3ac40846c703b04b2b6b71674b6879c7444aabc5812c83bd84c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRH5KJCX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEHfWbdX5C90ztymYA75BPtvrjSGNrSwCL5ZEi26GsuAiBg3c8nyCfOcnRC%2F%2FXcJOC0bCEBHoM0tdcBRm7oeFvfhCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6VvchTkA%2FMneI%2BFNKtwD3MogpkAv8ekzPgal7NZ4Sp7O3jVUyIern644pmczsQK8J4E9HYf3XalX6NeCsGuC2WHpt87kIrM32KtiN9ZoTHjh2Qlm84sWXNFxJ%2BQ8TKjGBu1rJW9b%2FhUPljF53sEi6%2BwrZWrJTLg8Jbw5%2B%2FDvo1SngjssoQoPY3oQONqJ7zAw13NA6eP6KPOxZ5k0zhyYOJsBc5nwjhqynHrXzfl2lRkVc6L3FDFU6s0aB3yVbFfCjqYZTfW9Ojb2SsCkzlVVZofo4R7hzDBUW%2BPhFeCl3l3xgxWFCD09meXH8hs4QThGsdX77xirGYGWl%2BmlSDRf%2B1EKbDuZxjKmbpp7huHSxbkTDmz3IyB3uci%2BvoQWahaQNk9GvYiOEhUpKuD3flDCbXoYw7Ic%2F%2BsB7pVVU%2B4%2FsIAsld9rT%2FFx056QyS6dXIM13DO2vlm7jJPuF30ho3ZwCO13jdt9okFer5NHk7dICkM%2BbrDqEdf1sneU6sqV7KRkJuWlx6JRJU8cgM625MMz%2Bbl52MnVjB3GGVT1xV9QG2nME3GsgyP%2FY9VBQS2XLhNeXKBd%2FpTMs8a%2Bl9zYKydLgODNAUmKqz5so0EIb6QtYtmJnVADSI6Vi7aslscB%2FlErHGM5sp6PvF5l0Pgw4b7ixAY6pgFlmoO4AcZpVOM0lEoSaA4Y87RUT63M9JVF%2B%2B1YW6%2BhrMc%2FXd3ZW8qM3WEsyly2iNJk6osmp32VWdGYKqH0C1DZ%2FmBDqXzhlLYFpglXTCkC7mEQ%2FXiyYP%2FktPj8xToH6p9qioxkj70W%2Br3uJyGKB5xxCsmIjbin%2FA0uAtnyGh8VUOlCG9sv1Q%2Bvu8KVpuCA7caHTiposva2E0GhoulrSPuZatzBficG&X-Amz-Signature=63eb9cd76ff2bffa4e839e3d966fa866e8e641c69f440037e524c1df7f166bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=47c2b286d90b49108b0eb93bb0576d96a6a0df0b09ad9b29a735c2e8cfc6ecd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=8429bde51542193a4d0a17ccc47624524c968bbb3abf0e5d03a71eca7c7c551b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=8f2d18c6bbd0ac6fff006037bef452eae6532529309faf7d2c4e4d76146ddfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=e2a3805b9148766e821c92cb1885a3c0e00e4be4c30f03db317d5b39a0c6c805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=cb26e448f39993c030b389670b5548234dbaadfae15dbb4575f3ba244ad02d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQ5JHGE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmZXI3Ml20%2FVwzXjkYm46vVp9rFieXhsi2MvzrF%2BIZCAiB01ZbyPe7iGOTpv9N388Y0yQX377JOJnn5PaW5qFU8fSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxEo17lknt%2BmMlmaHKtwDfDKNfYFMTv4xCzcUBTgrLGyNV6Tesg%2FeW76gmIi6mfUFgVs5uhhqcizxvry4oT2OZbBtTqtMCtQYifgEBxqmWDrU8KGRpFt3qJIOZNITrM%2FEifUAr7E8N96VHT%2BStUGrtGYyVgnVLE2j82cFajzQMjYsLKBMxdRvfd3PMrlQ8kblehFDQKRlEPjidCBgTGUirCAQ7IysV719OEYGifn%2FhkarG4P6jpNxNmu5bqLWtY0TaISVpnx5f%2BZMTvTHNvYO4EIL2yxGBXuEAGtsDqCwRGWlBjjoLM98pAKrt6LeVqp2aM9LGuiMmCp4ERyUAVIXrIoBruRWA2FwbxATmFTkcnIWI3sbW04XOUhCSbdiH%2Fa2KRScAZIE2UEAwi3jJ7xIQRQXhUSR69O6gRJZhQc%2FXSOpbW4AZDMkTbAxowywY5V4c2ejyO5eniNmRW0llLp8xDQ2xYj%2FwN6wYRcXt0rA5ecrfsrwzhka2kxz0Oc4WWbsvgrlbOvfklplP5CcTVUG56lMRYAk%2F74tdCcffPc10BI%2Btl55uUhKpm9RVoYlNpx4kEaN9ccc0UHFx74%2BARDi%2BLjTLeUCQr%2BdLDstGxFVrDTEEgzZPlPYCD7d1PS4TvHRCW2kVTXuuiQQN0ow477ixAY6pgEOSd4LHA%2FAhVPbBLtoSMMwK64NwlBgr%2Fz03327mJ%2BCbdjZLLe8SMnGqVmHEX8uuZ4YXU7AsRQX3f59l8u%2Fdo4O%2FCGCnf4HVE3Q7%2FwZv4mw%2BWX%2BUCElnzMSETRvDYisQJsmQAdIt6TMR8mk2mEE4JJQbfkyCaFU3xP64MCEMcLhtY26yEWsA2uMvqaTrU4K7KFir3HGd5wUUiRXWgaK7xUfB0ZK%2BCai&X-Amz-Signature=2090a42f916de95254bcc55909e67a8ad6cb4603848be7a4b05ba82f12efa45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
