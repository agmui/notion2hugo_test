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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=f0382cd5085ef9fb9236deda5796db4e510e7bd3b5e8269982b37564af285a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=0a3cfd4b847ca101e2db16b1725db6abde992104c6cf4843c17555dfca962070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=b67cbed5c97818969aa7c1fe8481ec7bd1bd76d86ffcc82e2efedcf930800ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=b901e7b6fa132fcf24890481547edfb6516dd8df651490f6248ba719d6c6b8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJDCY4S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGdK8vvnWXtW%2FZyNohDIcpjHAv8%2FgslWd55CmgP66x4MAiEAoc4TyXrH2AQfi2jEh4fTu8%2FEkZeFfCxai%2FJ0TsXezMMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKKYh9fWBHA6Q0o5UyrcA4Jt0OJo23gT4E22RC%2FNW8b7kfY6uN43PX3RtapsL3WS6ETWeoU%2FGUWFaLUgykMLI8MHA8kBT1eOBoXpGJdB7Rz27rof%2FbXIwnp2R4EXPDYLackMU8GLWaL%2B4rH%2B4FvHxIJYltn%2FTw2MkmFErvyCkPtPCbrh7yd%2Bwvc%2F%2FJpugCeFgnRW%2FAmIkTMjx1flNBnaiwhgF7jinYTf2Lkao4xkmuWUoNTMIt2H%2FTNplqxRDBjfMym6BAdXQE9hZB1nBc5rr%2BL0ye1BFuEnJbj74viYOQYiK3A1lvSJRLrDOUKWxnx0R4MYHMldbWNOHH6KNvliYorzjEuFAmnVJKlOOsuM1OlZZXFSJhnAt5SgrGumCcXVU4H2raRjsafOpwjXPIfz0Eo3BVYIF5kSIX3yoTvl2Ovq8DTsJ2%2B74%2FuChVySur2%2FRkaI104of0fpzI3C4upnUQcUlQaMtVqBkZjcTgEHtOjiQfi6qvxqX5Co43nqo5iNsBAr%2FXsO7uzFyFo0BpqFT%2F4heQqYO%2FrqBBX2WDJGRVE%2BDFdfL3kQp1NoIqU%2BgzaQTt7d84XkoOjL3w823NQiqT%2F5PZsLhMr%2BNjnncrL3DvAhydAueDW6kWwPsqCRnMi9RxHqnfVpDWqwqzloMM33gMUGOqUBo2bfSMYDBZx%2Bj0TnScmaC7quw%2F%2FR%2FBTrx8l378%2FcNaqGH3aeOs3W2MwZ%2F9bWC2CFrp91cW0fIt71WmZ8e65tBXqQhrDHFMRDIBoja0g8%2FkG%2FIozvogVt3BbB3HOpjBeZ%2BBwtqddBYZw5lgAr55%2B1Z5HCztYQtZlJ94Xfp8%2FrsuJNEprwSMeNkkZx9NJLgbHj9eWYbcsxqx8bTe8WEGW35QTAOw9h&X-Amz-Signature=a85bcf102e0c8b7e05e8d7a476f123306ea0e0f5f201d4153e0ae10da2984679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=82734a68f2c9329cf54719e3f91321f091ab6dfc3fcc3185625b0e4a5ea06a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=82aae1989c4cf86468e600434629448e0106446847351832e10b1781ffb74206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=d9461e380c24733ce7d113c44d13d2c0ba5f9162da7f5b6425d65d4c8b71b43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=5183eb0c9a162fb8bd5fae53d6c9c9854fe63daa35bc2ec96b47959aa4b3978d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=118f79395ab3ac328edab3e95705e8cd4e8051158c33404a7b2aafea55e1605c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAX7D55E%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA65chs%2BphlpRA6InxwmznfbuZgEtD8g%2BcruUuZwpT%2BKAiAFSibgVDKsPqtciiHgKoS3Q1%2FIqwIoGAUEuy%2B1lqr2lir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoEwpatwGJrwbPyN%2FKtwDv0cmVqbjLOUp4kBQ7f4kduVHjUFa4DSGAe%2BXijPlk9wElDGfYR9s%2BgIPClENk7StqQ40iKVLYdduUa5cXcn%2Fb8WB2zoxtjl5ig3iYsTmMEKD2VaGO2SDKuT5jDun%2F%2BCl97BDt1zriaD31trBi7bP4Gmui4xcGmidpXj9hlMMDG4DIslaXUFsDR9bkvQ8guR27QI7R%2BZ3txWOPG3Hv7%2FVSSp0mcEmpLEqNhasc4uMVaP86dw5FIoCWGTSC4GtrGEvo1Q9tOdF09aXfQ4Tbu%2BzCNtWAkS2hV0L2wHAjv%2FXwSrs0lA%2Fw1wfq2Kxvo0T5iKxjXK%2Fj9GlyQ8ziNHBkSS8qL5LnepeKGzA7dpWv%2BkGZFUoL0YpzJIpVX6aE3XxHrLGrhZACbZJBwX6yb%2BGnd9s4NmKmZZsRUyRY2X03LXl%2BO7pR7RcnE%2BoVtoS9Vkj4BoO2dfpaMQ9YTAbd%2F2KxvkC69qM0f1%2B3QdBugLIarlhNi0qAup5QHI99OpXeFktXMXGd8KrZsarq3FEr9OcvZynybR1TcTc3Qll0EQ3NdpVfH3t6kej5NVd1RpF8Ji1fgTt7v%2FO8dyRJuJqSVIVqo1r45u8756aOBjlh4BJORASTheueD6whwOZZ2oT00swx%2FeAxQY6pgF97EAXO%2FDF%2F9xZLrcB1rXvVsiJB%2B1cyDs%2FyHY5UqS9kqy1qKB6k8ac8bSUmuRLhc2SRqllTOmI2PNyAbScvtjT4ZXCFsKGEBS9IwITJy8uoy57%2FwPBLxYTvFJe3u%2FA%2F5YesDO%2FwPD66kjq5AbxVBesTd3C8LzMWscZI1QM5cZ255cjk%2BG66NL5acsnUKCsW8A72P30N1Saqasvl%2Bv92XJBHmeQaMsf&X-Amz-Signature=00a9fb947477c86cdec74aca85028728df1e469b397b7e0210ffceadbbdd0e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
