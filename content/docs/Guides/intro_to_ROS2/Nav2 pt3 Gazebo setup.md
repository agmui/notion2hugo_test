---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-24T23:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-24T23:10:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKWKOGT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAJ3hqF3J28FHJw28422HE6Udo2d1wXS%2F1f5b47SfrmFAiEA9kOvNjZnEhb1sT1J6g8qeJF7o5n2typ7ZxYWndc0diEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFK2aXOoTyHZLB6ZACrcA3AKKhjaUMsf9yIUENJsTRENJcvcQTm1whQSKoizs4YPWXy4EBVF6xluccP506gyvOvJTfYA8YEU4K77zVlmwW87iI98kMuJinzB%2B7MEXleUbvxY8ksp%2BcqrDdfQl3q8YWtcj9ZifMDY23KfX6EF05Z6nGR4hHrnJSR4LGGvDhIMb24ncSMPKb6zhFhVjG0RQul1LDCCuCyZ4cq9aeMFR27A4Qtyt36fMAUDXT5LL5LkwUa2EuFFnf%2B4sOzrq%2Bgxfw8MsJzwCTN8VouPmv3wSLI%2FzSZkHmPhpr%2BNlthOafSs%2ByOiEsb3F3m0QEXrf1p2UPA5EirOEDDwe6sB4EvaYBv7H4WyF5UFrrguv0U%2FWX7isdHOBcGY0eoA2IBAZzbjGyDxKknLOANn5k%2FAxYEM1B%2BshK6Wv9QldcpPLo0BppID7h7iNcrVwXGlPJAD4OopsaX3I%2FE9x88X1IbYtiMA62vbOGrWeOVvLM0i2hJPmC6XTK%2FN4Twg9Bs7Bfos2FUaOEwS5pnD%2BLKm%2BRuyfPjrZrmGRO73km6fwkEVvraDE3r0KEyA7r4Zu4zYK1KRf9Q3X%2Bn4DmDhUpltGjPeg21PDZLy0ewk5xMmpA7M1eX%2F7CkVqa18Li%2FhaLeWEP43MIWrksQGOqUBz0YIxN%2FQn8QP8jrMpkhWtMrh3iyQXfiK5J%2BtTn5RqMXXl1WkAoJmYXKlz9taWEdjoW2FUImtA7kCb2gF29%2FujB1Io57KCagfTAGhkXW%2F%2BgcqT878xcddDkk%2FhksZvd91FkJJze4PVLjQ7q25cMAlmVAM7q0Ya7ZINxo7POkWn5aSOCORQxmJZfr38Dof3upjnPrhn9bG2F7DyN3WECd%2Ba135rcNq&X-Amz-Signature=0b6d0a2ffa80499d0ba0bea5b5f31afb6e1dfdd3a86cde0cbe2c5e6a5d5a2c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKWKOGT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAJ3hqF3J28FHJw28422HE6Udo2d1wXS%2F1f5b47SfrmFAiEA9kOvNjZnEhb1sT1J6g8qeJF7o5n2typ7ZxYWndc0diEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFK2aXOoTyHZLB6ZACrcA3AKKhjaUMsf9yIUENJsTRENJcvcQTm1whQSKoizs4YPWXy4EBVF6xluccP506gyvOvJTfYA8YEU4K77zVlmwW87iI98kMuJinzB%2B7MEXleUbvxY8ksp%2BcqrDdfQl3q8YWtcj9ZifMDY23KfX6EF05Z6nGR4hHrnJSR4LGGvDhIMb24ncSMPKb6zhFhVjG0RQul1LDCCuCyZ4cq9aeMFR27A4Qtyt36fMAUDXT5LL5LkwUa2EuFFnf%2B4sOzrq%2Bgxfw8MsJzwCTN8VouPmv3wSLI%2FzSZkHmPhpr%2BNlthOafSs%2ByOiEsb3F3m0QEXrf1p2UPA5EirOEDDwe6sB4EvaYBv7H4WyF5UFrrguv0U%2FWX7isdHOBcGY0eoA2IBAZzbjGyDxKknLOANn5k%2FAxYEM1B%2BshK6Wv9QldcpPLo0BppID7h7iNcrVwXGlPJAD4OopsaX3I%2FE9x88X1IbYtiMA62vbOGrWeOVvLM0i2hJPmC6XTK%2FN4Twg9Bs7Bfos2FUaOEwS5pnD%2BLKm%2BRuyfPjrZrmGRO73km6fwkEVvraDE3r0KEyA7r4Zu4zYK1KRf9Q3X%2Bn4DmDhUpltGjPeg21PDZLy0ewk5xMmpA7M1eX%2F7CkVqa18Li%2FhaLeWEP43MIWrksQGOqUBz0YIxN%2FQn8QP8jrMpkhWtMrh3iyQXfiK5J%2BtTn5RqMXXl1WkAoJmYXKlz9taWEdjoW2FUImtA7kCb2gF29%2FujB1Io57KCagfTAGhkXW%2F%2BgcqT878xcddDkk%2FhksZvd91FkJJze4PVLjQ7q25cMAlmVAM7q0Ya7ZINxo7POkWn5aSOCORQxmJZfr38Dof3upjnPrhn9bG2F7DyN3WECd%2Ba135rcNq&X-Amz-Signature=6ae39f7f63f6a882db5e5cbf2481b9b1f18b78b88ed885b12fd8ac2b02a6396e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKWKOGT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAJ3hqF3J28FHJw28422HE6Udo2d1wXS%2F1f5b47SfrmFAiEA9kOvNjZnEhb1sT1J6g8qeJF7o5n2typ7ZxYWndc0diEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFK2aXOoTyHZLB6ZACrcA3AKKhjaUMsf9yIUENJsTRENJcvcQTm1whQSKoizs4YPWXy4EBVF6xluccP506gyvOvJTfYA8YEU4K77zVlmwW87iI98kMuJinzB%2B7MEXleUbvxY8ksp%2BcqrDdfQl3q8YWtcj9ZifMDY23KfX6EF05Z6nGR4hHrnJSR4LGGvDhIMb24ncSMPKb6zhFhVjG0RQul1LDCCuCyZ4cq9aeMFR27A4Qtyt36fMAUDXT5LL5LkwUa2EuFFnf%2B4sOzrq%2Bgxfw8MsJzwCTN8VouPmv3wSLI%2FzSZkHmPhpr%2BNlthOafSs%2ByOiEsb3F3m0QEXrf1p2UPA5EirOEDDwe6sB4EvaYBv7H4WyF5UFrrguv0U%2FWX7isdHOBcGY0eoA2IBAZzbjGyDxKknLOANn5k%2FAxYEM1B%2BshK6Wv9QldcpPLo0BppID7h7iNcrVwXGlPJAD4OopsaX3I%2FE9x88X1IbYtiMA62vbOGrWeOVvLM0i2hJPmC6XTK%2FN4Twg9Bs7Bfos2FUaOEwS5pnD%2BLKm%2BRuyfPjrZrmGRO73km6fwkEVvraDE3r0KEyA7r4Zu4zYK1KRf9Q3X%2Bn4DmDhUpltGjPeg21PDZLy0ewk5xMmpA7M1eX%2F7CkVqa18Li%2FhaLeWEP43MIWrksQGOqUBz0YIxN%2FQn8QP8jrMpkhWtMrh3iyQXfiK5J%2BtTn5RqMXXl1WkAoJmYXKlz9taWEdjoW2FUImtA7kCb2gF29%2FujB1Io57KCagfTAGhkXW%2F%2BgcqT878xcddDkk%2FhksZvd91FkJJze4PVLjQ7q25cMAlmVAM7q0Ya7ZINxo7POkWn5aSOCORQxmJZfr38Dof3upjnPrhn9bG2F7DyN3WECd%2Ba135rcNq&X-Amz-Signature=5854493a0e0e212c706268190cbf06172579e73cb77407551fdea2bcad724274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

Thus all Gazebo topics must go though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKWKOGT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAJ3hqF3J28FHJw28422HE6Udo2d1wXS%2F1f5b47SfrmFAiEA9kOvNjZnEhb1sT1J6g8qeJF7o5n2typ7ZxYWndc0diEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFK2aXOoTyHZLB6ZACrcA3AKKhjaUMsf9yIUENJsTRENJcvcQTm1whQSKoizs4YPWXy4EBVF6xluccP506gyvOvJTfYA8YEU4K77zVlmwW87iI98kMuJinzB%2B7MEXleUbvxY8ksp%2BcqrDdfQl3q8YWtcj9ZifMDY23KfX6EF05Z6nGR4hHrnJSR4LGGvDhIMb24ncSMPKb6zhFhVjG0RQul1LDCCuCyZ4cq9aeMFR27A4Qtyt36fMAUDXT5LL5LkwUa2EuFFnf%2B4sOzrq%2Bgxfw8MsJzwCTN8VouPmv3wSLI%2FzSZkHmPhpr%2BNlthOafSs%2ByOiEsb3F3m0QEXrf1p2UPA5EirOEDDwe6sB4EvaYBv7H4WyF5UFrrguv0U%2FWX7isdHOBcGY0eoA2IBAZzbjGyDxKknLOANn5k%2FAxYEM1B%2BshK6Wv9QldcpPLo0BppID7h7iNcrVwXGlPJAD4OopsaX3I%2FE9x88X1IbYtiMA62vbOGrWeOVvLM0i2hJPmC6XTK%2FN4Twg9Bs7Bfos2FUaOEwS5pnD%2BLKm%2BRuyfPjrZrmGRO73km6fwkEVvraDE3r0KEyA7r4Zu4zYK1KRf9Q3X%2Bn4DmDhUpltGjPeg21PDZLy0ewk5xMmpA7M1eX%2F7CkVqa18Li%2FhaLeWEP43MIWrksQGOqUBz0YIxN%2FQn8QP8jrMpkhWtMrh3iyQXfiK5J%2BtTn5RqMXXl1WkAoJmYXKlz9taWEdjoW2FUImtA7kCb2gF29%2FujB1Io57KCagfTAGhkXW%2F%2BgcqT878xcddDkk%2FhksZvd91FkJJze4PVLjQ7q25cMAlmVAM7q0Ya7ZINxo7POkWn5aSOCORQxmJZfr38Dof3upjnPrhn9bG2F7DyN3WECd%2Ba135rcNq&X-Amz-Signature=53d487c6614f0eb563cb703911ab89d51c9135f382963a384b04ee2bda604227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

past this inside `bridge_config.yaml`. 

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

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `urdf` right before the `</robot>` tag.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKWKOGT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAJ3hqF3J28FHJw28422HE6Udo2d1wXS%2F1f5b47SfrmFAiEA9kOvNjZnEhb1sT1J6g8qeJF7o5n2typ7ZxYWndc0diEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFK2aXOoTyHZLB6ZACrcA3AKKhjaUMsf9yIUENJsTRENJcvcQTm1whQSKoizs4YPWXy4EBVF6xluccP506gyvOvJTfYA8YEU4K77zVlmwW87iI98kMuJinzB%2B7MEXleUbvxY8ksp%2BcqrDdfQl3q8YWtcj9ZifMDY23KfX6EF05Z6nGR4hHrnJSR4LGGvDhIMb24ncSMPKb6zhFhVjG0RQul1LDCCuCyZ4cq9aeMFR27A4Qtyt36fMAUDXT5LL5LkwUa2EuFFnf%2B4sOzrq%2Bgxfw8MsJzwCTN8VouPmv3wSLI%2FzSZkHmPhpr%2BNlthOafSs%2ByOiEsb3F3m0QEXrf1p2UPA5EirOEDDwe6sB4EvaYBv7H4WyF5UFrrguv0U%2FWX7isdHOBcGY0eoA2IBAZzbjGyDxKknLOANn5k%2FAxYEM1B%2BshK6Wv9QldcpPLo0BppID7h7iNcrVwXGlPJAD4OopsaX3I%2FE9x88X1IbYtiMA62vbOGrWeOVvLM0i2hJPmC6XTK%2FN4Twg9Bs7Bfos2FUaOEwS5pnD%2BLKm%2BRuyfPjrZrmGRO73km6fwkEVvraDE3r0KEyA7r4Zu4zYK1KRf9Q3X%2Bn4DmDhUpltGjPeg21PDZLy0ewk5xMmpA7M1eX%2F7CkVqa18Li%2FhaLeWEP43MIWrksQGOqUBz0YIxN%2FQn8QP8jrMpkhWtMrh3iyQXfiK5J%2BtTn5RqMXXl1WkAoJmYXKlz9taWEdjoW2FUImtA7kCb2gF29%2FujB1Io57KCagfTAGhkXW%2F%2BgcqT878xcddDkk%2FhksZvd91FkJJze4PVLjQ7q25cMAlmVAM7q0Ya7ZINxo7POkWn5aSOCORQxmJZfr38Dof3upjnPrhn9bG2F7DyN3WECd%2Ba135rcNq&X-Amz-Signature=4bea321df45d551808a46a5bebce1692eb0a82d73f2ae94383da0d6aad3cc3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKWKOGT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAJ3hqF3J28FHJw28422HE6Udo2d1wXS%2F1f5b47SfrmFAiEA9kOvNjZnEhb1sT1J6g8qeJF7o5n2typ7ZxYWndc0diEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFK2aXOoTyHZLB6ZACrcA3AKKhjaUMsf9yIUENJsTRENJcvcQTm1whQSKoizs4YPWXy4EBVF6xluccP506gyvOvJTfYA8YEU4K77zVlmwW87iI98kMuJinzB%2B7MEXleUbvxY8ksp%2BcqrDdfQl3q8YWtcj9ZifMDY23KfX6EF05Z6nGR4hHrnJSR4LGGvDhIMb24ncSMPKb6zhFhVjG0RQul1LDCCuCyZ4cq9aeMFR27A4Qtyt36fMAUDXT5LL5LkwUa2EuFFnf%2B4sOzrq%2Bgxfw8MsJzwCTN8VouPmv3wSLI%2FzSZkHmPhpr%2BNlthOafSs%2ByOiEsb3F3m0QEXrf1p2UPA5EirOEDDwe6sB4EvaYBv7H4WyF5UFrrguv0U%2FWX7isdHOBcGY0eoA2IBAZzbjGyDxKknLOANn5k%2FAxYEM1B%2BshK6Wv9QldcpPLo0BppID7h7iNcrVwXGlPJAD4OopsaX3I%2FE9x88X1IbYtiMA62vbOGrWeOVvLM0i2hJPmC6XTK%2FN4Twg9Bs7Bfos2FUaOEwS5pnD%2BLKm%2BRuyfPjrZrmGRO73km6fwkEVvraDE3r0KEyA7r4Zu4zYK1KRf9Q3X%2Bn4DmDhUpltGjPeg21PDZLy0ewk5xMmpA7M1eX%2F7CkVqa18Li%2FhaLeWEP43MIWrksQGOqUBz0YIxN%2FQn8QP8jrMpkhWtMrh3iyQXfiK5J%2BtTn5RqMXXl1WkAoJmYXKlz9taWEdjoW2FUImtA7kCb2gF29%2FujB1Io57KCagfTAGhkXW%2F%2BgcqT878xcddDkk%2FhksZvd91FkJJze4PVLjQ7q25cMAlmVAM7q0Ya7ZINxo7POkWn5aSOCORQxmJZfr38Dof3upjnPrhn9bG2F7DyN3WECd%2Ba135rcNq&X-Amz-Signature=b626804958a11312db5534d1a1befa3048608be1656978f08a8440046fd6b485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: idk add robomaster arena

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

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

Remember to build because we added new files to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

**Result:**

TODO: add img

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

TODO: add telop twist keyboard

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKWKOGT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAJ3hqF3J28FHJw28422HE6Udo2d1wXS%2F1f5b47SfrmFAiEA9kOvNjZnEhb1sT1J6g8qeJF7o5n2typ7ZxYWndc0diEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFK2aXOoTyHZLB6ZACrcA3AKKhjaUMsf9yIUENJsTRENJcvcQTm1whQSKoizs4YPWXy4EBVF6xluccP506gyvOvJTfYA8YEU4K77zVlmwW87iI98kMuJinzB%2B7MEXleUbvxY8ksp%2BcqrDdfQl3q8YWtcj9ZifMDY23KfX6EF05Z6nGR4hHrnJSR4LGGvDhIMb24ncSMPKb6zhFhVjG0RQul1LDCCuCyZ4cq9aeMFR27A4Qtyt36fMAUDXT5LL5LkwUa2EuFFnf%2B4sOzrq%2Bgxfw8MsJzwCTN8VouPmv3wSLI%2FzSZkHmPhpr%2BNlthOafSs%2ByOiEsb3F3m0QEXrf1p2UPA5EirOEDDwe6sB4EvaYBv7H4WyF5UFrrguv0U%2FWX7isdHOBcGY0eoA2IBAZzbjGyDxKknLOANn5k%2FAxYEM1B%2BshK6Wv9QldcpPLo0BppID7h7iNcrVwXGlPJAD4OopsaX3I%2FE9x88X1IbYtiMA62vbOGrWeOVvLM0i2hJPmC6XTK%2FN4Twg9Bs7Bfos2FUaOEwS5pnD%2BLKm%2BRuyfPjrZrmGRO73km6fwkEVvraDE3r0KEyA7r4Zu4zYK1KRf9Q3X%2Bn4DmDhUpltGjPeg21PDZLy0ewk5xMmpA7M1eX%2F7CkVqa18Li%2FhaLeWEP43MIWrksQGOqUBz0YIxN%2FQn8QP8jrMpkhWtMrh3iyQXfiK5J%2BtTn5RqMXXl1WkAoJmYXKlz9taWEdjoW2FUImtA7kCb2gF29%2FujB1Io57KCagfTAGhkXW%2F%2BgcqT878xcddDkk%2FhksZvd91FkJJze4PVLjQ7q25cMAlmVAM7q0Ya7ZINxo7POkWn5aSOCORQxmJZfr38Dof3upjnPrhn9bG2F7DyN3WECd%2Ba135rcNq&X-Amz-Signature=551a9144ad33ce0064eec8175c57ef5fb88fa7cd10c6c6fbfcd09f4bba9c887e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
