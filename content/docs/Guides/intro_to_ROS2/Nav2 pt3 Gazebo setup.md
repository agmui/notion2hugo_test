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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=f71646c25d411f1c0c41a528c47f816e43214f56ee323ed970c9017fa4de1acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=d7c3d2e08e27bc4b198991a862eeb144b5fa11ca6b2e9beaca6189f459fb28a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=518dcd6c49f24db7ef53f980a96d21d11f1227b3a0ae7892a941c9c912259b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=26ca51b7a3c3b5933fc06b097235b97096859028af229717ed53c7a1377ba676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRUQ7JAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrkE2qiXc%2Fh6dLWsncKjZfamwFPsf9OvdDmOC6UEQSsAIgFTrKU%2FE7DXtnQ040y9aDpsoa6nC%2BrWK7MIAiPBEUIC8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJtWVHZbKN2S%2BclrkyrcA1fix%2B7RZ3BJoF%2FrENsEpRRwOgm431R2O2w9HYf1LySc%2FhQcUJKqb3E5g85PUpwRNbzAwgTWG3INT%2BDJ36cFbvAPXIe%2B1PhZ8TkJ1YgAWq%2BKUs1OQnH8%2F9DCc0g6fPW3dgFZYhzwUs0N9sjh1K1ABalzMXxma2lC9uTyny1XKEcyhJ1%2BgS7c3bLSizSYux0dVfA%2F6ChTUkGs72SsfDNcMs2BnpfK0PftiSJzRHaV6qJkkyDOUz%2Fu2LR6QAOd%2BxKSdvzrt4z3Y%2F%2B1lhKORmQIsGeJgsPXQ%2FbSVYhRj%2BOxAICaOsIJBMrFsZxl%2BM7uUpmG83CLLChIqGWZYtBfCbNcNyq9S04Hs6yjCqHCJdMlqULsFOquxDH3VtXNa%2FKhKXQAi5XHucrLV4UuL00CNyijjuyl3vWBVM%2FQeZiRp6SGC2obfj7%2F0HAp5FHQSAk2HRea%2FZ2v38c7NHO8FlflbTm3l3UTScWgMyA3S2%2BLBt%2B%2BifqVAO7nMKdbsO8k7zUtTywqernsjamqH9H5NPRfjeptTcjU%2B0LXcJdgxOJZ4gP2pe227DXfX1AXp%2FKKHRNOscVn2CmMTG%2B3lvxCVzX5QtAcj%2FXj4Jkj3hfofk%2BqTe5WN0KUuUy7vasIfj25KzShMImH8MQGOqUBqbw8LHtIlQliceBSzF%2FQ1p1S1lpsEIFW9zyxPXrPdfvnOcMcm8v86A%2Bc%2Bi0uKLgR17uShxRZQQLporEmiCSSbCe2OuNfavBhU6JR5shr8swqtnh6Juc686KElpxjjBxRE0ZxNWW3IZ3Stz8aloJzoKqGCFynGRqAD9Rl8ne33qxzh8wpwJWiWJ6k2TXrPN1LT3VwkC%2BCb%2BJ0%2BFA2%2FJU8UX2sXvyq&X-Amz-Signature=62b5cc912b5c475299e71e06ac33d88c5a1df30d52a3941b951aa92be930e2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=8fdd677ba5c50ec7cb69e097927b51a2bec6752fe439935d7c1c13748ce9b05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=3b412510abca46dc5d3292fe6e6e589a1c94816488a504baa0c84a5e52f35752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=467980d3ae8733c69404c6ef2f7e7efabc595b4777eeed466127390147252726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=e28d44c40f16c81d0dd1ff1d32385f8feba9b4180aa20a7e93ec31897cf9123a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=a154b0508139a7845f34b12b73e3e8b7b1ea8a71fca6176aa030efb4a2537247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEPMZN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZF5Fw9qcdYygzveZH2U8ncC3igQN2rfKwFUXn8TPSQIhAMf%2Bg8evr4iTBvAdC50JQ3ejWamlRnL6ECLq8DKXKeQ7Kv8DCCQQABoMNjM3NDIzMTgzODA1Igw8t5N%2Fs5Qz6WItcXEq3AMxL2d884MuxIQuatglYFQhSwTeZXXAp1fm81PFBN4%2B4T6%2FAOfVSHdnMpI0LcvwbrRxraX7oMFhI4JU5bSJ5oMAgVJ9WjzbdmIsqiisAAM1gdIA91tRRCitu26xWuEgcT9yENvTUFveDDKFyQWc7CY3DXYZGXGrJzy11oKSp8NBQwDVxobXhacqv32RnEyejD2Wlg1YkVTeOvD0xRJWC734Pw7gzgbzqZkT9btfICYy3d%2BBSX0ndzgmrZbcgk3k7lvS5NrtVxviiZ1ueffZTzDMW2LcxFLsrDwXc6NCNHKBgvLHHPIAQctkZTKph7lITm9AEv8wzLz2rYs%2By%2BU9tYMIN5ET9%2By9kjS2Rh0622OsDsw4FuF8moQsNNymJc%2F3lD6HlVm2xhjfYB3xW1LKAk05TIrQfkb0yRO%2FLmc3NiZpRdDLwHaaYjg9bM2U58iH1%2Bo2kkKo6emY902dNU1U0gX3qIkJf9y0olYZ7uL2xFG86ZFw38WQtHlGW%2BwAhAcmYQT6aKdQcIRnLyGwTZGAulef6znqNOCdjbs0Dms0P9Fbtx%2Bn5pLjm3plmEx2oGcauuCt12DeD5ebc%2FceZHf2SveeTzMhQn1yrr9sM9t3rsSHmQxpGjF%2BkY%2BWh0cPODCrh%2FDEBjqkAeSlbMciizcqvOGEGpfsXk7bGBejV0%2FTuY4gDm%2FjaInTQAOCyh2GFtZ7wTaGeaUuD1tpupH%2BT%2FGzUONjcBrBeJAyZQ0Ms1%2BS6cHqBAV3wrc%2BfmhZtXfZViqhIRUcm1HkcnPoyA7FButLS538tJPR%2F2HSdTQeMY%2BP3KVgOhvw5ACiwMC1GPoXsJgaP%2Foja6KADHHlA4ClrZBtsHYCmqer3MNi84cK&X-Amz-Signature=fd3657044cf3228f2989d04ea43fe1d336a5d664480a3ec5300bbe6e038bca06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
