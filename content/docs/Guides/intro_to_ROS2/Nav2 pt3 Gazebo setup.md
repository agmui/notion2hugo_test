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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=4c60712e6b66580bbc4a37fea7eeb976a3012d480b7556a94bced1b78cde5b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=e2e8e108a39f8d670648ac61a4f8acda61b357714051a536af17dd242b77e7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=0687a63e09f6783bc95385a7a1859fdb779ef8f3898e94e691a86f195b1b8c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=595374c9aa555152adb363cdca851bc9ef830fc2ea7c9d717e6189c8bf37b5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDK56WF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDig72azp17KmGwe%2B2WCTusgQ%2BFlaj3Y3qgBp8jZbG1RAIhAJu%2BM8PFwOGvpjhbl3inUAyw00LimiEUOkIBh4iTQDdMKv8DCCoQABoMNjM3NDIzMTgzODA1Igx%2FN6MAhlJd9LBkJPIq3ANoFju5V4oOrUpOTxqvH5mmoC25L2ponndbmTFeFpSXIjd9stFSe44eSUI2tQd24DzeCVR5biKMVpgZUd%2FcUAPwEztQY%2Fv6Xp%2B4s%2FwOwMWaUL73bURSqVR1Ev5r5QoIkcNzR1PW0DJNf1Cq4K2YAtMy6%2B%2Bb%2FEjd83EleQT56BOOxrYdcPkAFgZKW4VcQPwOqu9M%2B1IH9bd5FLQaDanbNDGLHCItcdpHNJr79GUMeXtXlZlKPBL3nqxXSfVuu2f3eP9H0jQv3Ny0WvlxDfwLLuKqi19bDjKtLguZhcTfeolX3Y6%2B%2Bq1NFpfeEAxqMRAx2QM7EB4LNaKzAqtcb9tBM1a4MXM332BitJtROjs7ltTHFMsfoGR5BITFTlqP0dgce9m9ZyxL2edTBle4N8mk0RN0voocoJYtHxUNQtW4cYgik0A9qAPinI2SEdQDZNFgkifbZURwK3%2FxNkngqNaHkavIu94XrX3JNY6RmqqSYm%2BpHdIVSvB2mmqpoq4dV2zN4ARsa6KCDyEmLCg3zmAMXDjFWXt8XC9I1VsLyU1pD0GjqZrQ2fA8BmIa4Za%2BoO4SwuyDxPqtkvKn2R3NDXbtza2hyaqSwXxF4OVyuBkXGDOjE9XbqB6GnEA%2FVnjIoDC4yLzEBjqkAWhQr84eKM6VXxDfIeq17XhOVVGHoPImfq7tBDmymsfqK%2FcDsUMqE0Q1uMTEjeadr6MNKCWp8b%2B9NY30N6bSKQBKXO%2FydMJOLM2yfucb1JzAy%2BgEDVERT7cxVbrPvOlodn%2F201%2BkOJXXHrFi1%2F6cr4NA1MEZLr%2FPO44Rgs%2FBLqpltzY35%2BvJS6%2BZL9ivmpWJirqnmLBhWdq3VU0sHL9LJjk%2BgPU5&X-Amz-Signature=2723f68a6989d8c25b08915e1e1f4bb255cb83e1fa1874eafa16403e8dec2c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=56f8c1ac1e1cc5741e71290fe824baca43de80589038e98a3a25b30b1881a49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=9c99e2100c53dbbcf266e02925db36690c35df231c2bd39dc1b606d98975628d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=a47dfc5f75da50a0cb405f9b33cdec24311e1800108946d1476791417c75cf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=2e09d9d4eb56ca6c4959f49d50cbab6863923878dbf15b722235e49194fa9640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=be56fd55bf6c46acdb55c7ba4793fac7bd8bb2d840ad8bfcb07d257a2c6cb438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYFLN44P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqTwWoAtbP03C%2B3Mj05NBy9FqjhMueFqzzVO8Z1JsZHAiEAlzzJtT8eLeiU67GHMPk7iJBYuPKuHytfRm4ZZzJh7QQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDZ8wniZtBhdqd2smircA2Zu%2FP4f%2BBQJBEDcx6WcTmGPmYzBD0ZHNHBvD%2BSe1RAXDJlXF6UqjaYJGs6GRmDl38j0SzqCrJj25HE9xSnSuJ7ic8T7f120z6J969iUACqsgDR3tBS8ePNRecNeI5FeNWtJurmEV2nNC2q%2BQ%2FA%2BTLDxNL1%2BXiNLzgg2f2speWxdKYFVSNyN9Xh7epXBHiMhtd%2BZ33vPNVLWQN2DeP%2FRrzuTVCQpvLy4X8UccRfcx7oJOwI%2Fs%2FWiitz43AusKQEvuX7oU1wN2qXFGOAajAVFRzcGMzB1%2F1tEmGcplvUixktjMy7Yby4HiNun7Q%2FWm5I%2B%2FfYtjf%2BEaODedNN9oobQeQ05SkX9j77nUH2hzcR7CDSrDhfIcr%2F1%2BR6ERLKedis2zC8DaVLkqwjzRWH%2FQcYSax9sizgMtcfzaoDx%2B6KBiIKM7eedv0yxpa3qdlfqQhymjPAJBhjZIszsNfjSgo2sLZGNPGJsbYcVLBwQz8bN81xSiA%2Bik2Tehq3i2EBCY60rc%2Bhmry5JaM51z5ljyWcXxy9XSphdL3jnl39YIdoqLchLaCGmL3yE%2FL8g%2BGiU7bdOq%2Bc5Dlci9Cyu92VNp%2B%2B0AtoGR48tR0ma9yTDiuUY0jSCC84qBd8bBIMOPEcDMLfIvMQGOqUBXZxHaOnxqysX7UjE9zepWDGOXxX3CogeqEKoia6K4IZltsc2UPE5wxtzVqRQDdChDRuudDiCpMrezxbRdONN7ZTeYlek3f7o0G1sFhZN9AmfZzA6n07c8s8th7dlE9DzzbjKqp6pRLLU04Qq83nsgNRXLmEUtnYSUj8y6cGwq026W9YxpyTFVTf2iBs5I8YMd2uSrXw1ICsSW1wb3zUZAFerTpjt&X-Amz-Signature=f48f7900374fb763d5f21b324d9b445bc54ae421717ddec5cd681617b9df97aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
