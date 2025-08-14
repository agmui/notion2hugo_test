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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=6321181da1beb1446d885f442c9c120275d7eb364e19b9eec5bc3bbbe4318910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=662025b7c57eecbbdcd51b8ceb7dac9753c4c190a49870aa13fcdf23259f002f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=5fab44bda492c717668d16f01903f36e65007597ae090d32e900d69cc427c37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=5bbf8fb6d0d7a1979f36baf1391770302a911a952a8aa2cadd1b3d9b22be4aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUHG3MI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErHV%2BunYf5dJjl83LPl5GEWXCqsJKPd%2F68Mmwhb4dGbAiEAjljco5hwrIyB17hBH92gN0vqA%2B4npqRXWkVzPyoxbHgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDN3JmMo5hlLAWr6eESrcAxTIkryqn%2F9ejGZ8Hck4WzPrGagTxivxpn0yCiiykmwmNhMBRtMRVcKAHanR7nFxnae5UnbtsvoskIWkIzRj2dLbVmtTvKesdOp0JqnnjeQgOqknUjn9dUA4jsmAudb0IG70%2B7YLzmi7s5XC0AK03oCAVrNDqNqLKawZnpqw1mAk8UB6R33gYOXgMP5PUTiBLDP5x1zaJ0HLMsscm0tLWaV0u%2FZI4l9m82pm9djHqov%2FtS4ObnSoBKbgvrZimWHD%2BnSubEdX%2B%2BQd7FmZk%2FYOp4KmmipbG1uvlpTOCqiA6pffimycpMrRSxNyJvcVH8Ud5RUn%2FzVzoNOO3QQWI9fD0vJDBaSLm6rb5EsN3uN2AQyzOayj9NlRlOBnpkI7QUYyCAq7u45NL8jX6XxKjfV8l0gxOnfUggJDp%2FLut6lLD7l6%2FHv4Vg2BNMqUIy7igq9jfjgb01v5VVjtOqqJopk3f9uBTaHUid9N1GLMxHF8VESoiPTsAellC6f4vMxhOn52%2FW1tsD7EdrNuzvSH7D9x12gyvUUGMZFz7NMo56PTT7CfdZtOz3FXJiDu1IokRHxkCYfHo2Z5D95A%2FiKmwlzlbbYZZggfCfkYH5R5VViLLRyrjJpKWJ3BUnxi1OVpMMe69cQGOqUBQFDBE1TC1pTmk9d304gjz5CXyLPj0JX2ybgf8JJVwiiFbvkOx9Opzq9QrcnRMXokANxBUj4CnE3juUsFjs68RjuHjjxM9z0fY9vkgxQgd8tszinQG9508crQOPOfP660fw34O33%2ByD2cjKGb9sKNiGLnC5pNR2nufiQjsxda6nPzjUF%2FO6tJqYpbKIvgWnZV%2B3d%2FdWDmmOXgnDaBkV0F4WKuPwAR&X-Amz-Signature=45ae786474e80b85fb3d16e86bc1dec4d1f05f45d225ca4ede57d2e4fb00e69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=1e55505cede1edb662b6ef34e2d4702b3047367ed2b900d7737f33904f3bf53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=f21732ad06a3cf726334a9fad0bc165b995790b1ec6ccb24a734cd7ba1d044a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=ef7c85f2239012d79cc866dc4d6adb5bbcb8e093f2c0a10cfb18643bb3dd468b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=0f95ca34c1fa683fde58e15b36f8c78e0e874249eec725f65b1d4695f216711b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=0b2a8f5efc5b4b2ece9df91e8cf4b0978e9f94edff2727827aac23a677ef21ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCSKKA7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPe1p3I8xkIVjVxLHH59H498MSQ2rM9O6fxTPLFsuk0AiBruoOchtma0uewjkZPS3TilRl5cwosR43%2Bd5N6EA5VFir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMB0RmX0mNWj0jrpndKtwDpWhS4OOv8xXcpBM5ICu8q%2BxHg18TnnsSE4j%2FSVigCwhJ2aXr7V73LPf1uId4YMhCepDeKEBosPhP2HFEkADm8feoz2zd1Qmo7GvchgLAhtBgPOsqUEZoe%2FS6E28vqgcYHoCuTig0wBkHunEv8AkObi6sRdi4ANByreA5yw8%2FzNgbLgmaq6WKyZbV1y54Fpmezx5iNQAM3C1JV4P9umoUMZTf4bGVVlcKJdIfl0XC140Sk1lAQfPORHv4xJoGgrzCbkG1F0SZMBvsWUlXIgOTFcpPn7BY4GgmpnpqKS1eqqA1aaSYTEG1ytk08KQdSy8xRNA0GPSDctjXntq15%2Bat699T3a1jADqyfs5FiJ5Wq81H50zLRi3Auv9AfQ7R1Z0B38Z%2Fy0gn068no5JtpQFELhfQTZfEn9wOWp9cziCmuMgiTadT%2BV3dCkIlqe%2F1qpNBF68qQ5RXFDSa6sT9qclzx%2BG4Iw%2BmbZ956f3oUXtdRB%2BZ6Y0u5Koy9h1GMlrESP6hjozo1OzTVz1ix7aXFVSw8dyB4kpd%2BptQ5nHRtY03nT%2Bd3lRjBZjyhfxEORnRPRs6qLyaJO%2Bflj84Tx5H1knfj6PGUrFOWwZsZw21oG9l30sW5rCh2UMHoAT0vjgwibr1xAY6pgFp8FRf%2B2nMqcY9KQEyOnVESUKYYOzHBxRLOQGfnYz5Rg3gFkAX1Mt6FfFDij0QgitbiJneT%2BLraJeDNj9ZNtncNVZlgnsf3TDjHHeI1%2FfO9acVafwSLbGgPizc5BE9pTsxeJjOZ3AQgst%2BcXn1xfevja%2FvbNJ%2BYrvhFEzpkiVJLnLOIeyoEftvAUKCgVlX48zjrrPCG0xnMRZvLFHV9QZe0Yc66hGN&X-Amz-Signature=18d7f417a1c32cfb124b4e19ba7fc16e5b9cfbf66d8183ca19ad84ba8506ebc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
