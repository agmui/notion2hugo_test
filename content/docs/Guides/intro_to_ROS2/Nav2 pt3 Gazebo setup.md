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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=10b7565c29ec889f180ecd394531a9ac091860ebdc8830eac891cfd2a9a0fdc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=2ecfb69606345ec3425bec28d465776e646334cfeecb0bd8aff39e21a6dcdcbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=14d9766b0283005792ee3e2ac68ab02b285ec92f0d0d7157bb63d817834bd6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=a859b6901ccf879f51f7ac4c22d79f9834167251709d773166bbbfa5d7826c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZ3WLCL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDX9NN%2BLV9FNgeWka6KF26ritpMghrgvT5UQZUQRCMVrgIgA%2Fnmc2EFhyxZzgOhiEQnrQUCWBfhVwWc7ra4KRR6JAYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDD4c7mDcLSMoW9%2FafCrcAwGliJX7QYk514GPRxFGKrloNpw%2F20S7xvYXK2%2B%2BaCI0EYIHzH6SXXncTqHmlrQEOT6%2Fq9CLtyq7WZildpjXZVsxZQ8HUft4QG8ePZhugxlURjdR9rnbD%2BhkmEPT%2F66DDXwgfePq%2FHiaLy%2FqUln3DjRSghG2dXHNYATVI89UNu%2FMswp6tEGArFRZqIot90duFE28NhOxnXHlmoYEPwUZQaIVS1xm21oKEtI%2BiVtdjG0R1i2q7tNsKmnxMFR0NhQHThLcI4foAueHkPlYC%2BpLJVqVmT0uco3kRZEsUGqP3WjD6tW12rHgaSCXHIP9R8GWQFw%2B9NxmoSUSB2FcgN229szeMR0RXBU5pujNt0wyN98prfqx%2BqgStNF7su%2BWb8XsAqD6DWme22gktXcHLsTeAiNXgW2yFbnQIzL4t7OQbXEZfiTQkn5p70dyh1%2BUPrix5tepR%2FUT70gIYYRgTpsbV5nqmCujeO72ohDnkREIwileJlLlwQoD2faDxIa%2FySxD7CCVSS%2FQoc5QTxwWGk7UceSpwjj%2FsVrrhVk4V1thQBcK4fVfYB%2BTUApPvkhhRAxBqeBwbgiQ2xUp1YcmSIWWSQZOD0GOvA839tuta4EDkqepwFZaHweDHteQo2W8MO%2Fwy8QGOqUB3Z5JjFi5SnqJ3x0H6bXqjyYqmaDbaHx7SZQF32VoBSubR%2FZQhwe6ZBT1MRTwxcWFA2D3uqbWXygAq7b0%2Br4EL306xuyvU4Hl6zG7kXw6%2FffvZmugIlCTuiEdTXOpdCl996q5uLMUnslA66R%2FOXSpLn5Y6tctC5kYsWnt1VROAlUBZlI4HTiBdlXMoy0oYgJ6U4bv%2FnAx%2BCCSIK5tHBxYbRdAS2g5&X-Amz-Signature=c3977690d9d687dfaa2662e677d2bec18f5be23f394af469d39e733ef760bfe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=547275e73f8be4add031bb829ae7d07f11f3b7ae0e0ed3f374ff00ab81a2e718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=f596790ac7c28ab0bdb018f5de639dd54de6c20b843dfe95d16c39cc84207b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=87884b05f30fbbf30ac2959d5f3adb8e1dca503ed50eeb0d8291cacd3ab277c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=acf978b65cdf3f4a027cf1f9d73959d69db11c43922ddcd54941ebcf029f4d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=7d272cbd93e7610ff973a63e93078b3e8a5043f98d972c64e884c82c5d9de846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFX3KPB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDYzZ5kwHMM%2FLiadIibHWwHhjQIWpgWHdq0Kg9y6tg8nAIgLsdKrvunhXm8yHmPeCbKtRIfjoh02m5PoW7bgYHxkmcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfjNZL8IqFkSICBaSrcA%2FBseQr3QwbEK3OSzOva%2FYVzvkq4KAGGv1L2lTOooua4Y3sG%2FKtaz0zouocY694EJvdBZRvJWgTKWdgaKodlA%2BXd%2Fzv7Vw%2F5i8a03WhQC1jSVHWcG1as31lk4Xjm64Odj%2Fke8UFi3jKH3GRvTsoJYD9XTUbdugLIkI8PTTX8Cano5k3Gqih06ZH5UQHV4D855hb0BH21Rw%2FPzb4tsDCUrwmDeLeyvAFl6xBwE2MijgNvOeEUe1pQ4HL%2FcoiqbCFlZ4d7%2FIROjdF4G2LA4DNQcqgyZc%2FeX5fWCQuHV172GB3OXGIQI8xeE5L%2Fem0zPFkjwrufs%2FxRvaVPXS4QwCjtP8PZeQeI3n2%2FRGOoiE%2BHszXXypuT72SwWxdFd53JpWNJv3l8l8c5Uy09XkmHqO1Un8T8A0PV%2B9lv%2B4jDc4G88mFiHcBv3ZuefRzFNpMlA1B%2BOCbTD9wi3YENd2jRcyaUL%2FV3u6DjL5y5ExSH7IH3Q%2FNkN0nNtQqI2W6Qpia%2FzqThCQ1l1mRF2ctJxPd%2BqQ5meMDtdMPavQkABbD6oy6ADloBvJZjnUu%2B%2F9k6miKn%2BasE54Sh98CM%2F1NG3BAT%2F%2FX4H%2Bv2pP%2F6wYuscy%2B8hbKedy%2BQJShT1Eu1vGwWGMt0MOHvy8QGOqUB9B7VCikzN6K%2BD9z1%2Bu3PDVS%2Fqp4FgVQoSM8XSxOeQD0oSRJ%2FkIPFV%2FcExLNZ2mabQHlcs0dFrhrfJ7Wc1Qo4AjN9zGGTiICSGYrS47t6p7YKlwvx1e2kPZg52oFcbh%2F2nbfX2w7C1Rqd3YFbI2tiZlA1v6Pmii%2BFI2c6B2baJRs2xhY%2F4uP1EJMEz8jqCLpMT4dwbReyOcs583aecvN%2Fuw%2FTkVI9&X-Amz-Signature=a0ff91b3f6e9331eb27d92a5c296e017563cfb5b45956689c409ad1f5e3ab6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
