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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=3433e9bba137530e589ab5aa14ec2994a58c56ab5decfb6cdcc59af6a7fa7321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}


#### Outputs:

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

#### Params:

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=929a1c5abdf7ea3060c6708df847df10f114454f07d31c5581c6d35ac398c1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=b8c3ca6c060692550b55bf44e64e0e67976c50685cead40cca6aad8115587651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=bf3849a0c34a8535785aa81b39c35f5e10d6eceb857f39c8e8bcd0cd2c5ede7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "17-21"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQA4OYY%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCa1udkoJBfzKeEcWyC2fz4EzoUSbTV8CtdbEFn7zTw7gIhAI18kUit4FdeSkuD%2F8V4o8j01G4ikMJL0XgasgyvN0fUKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw9BMNYBZu%2FC5VTsIq3AMqKUatweF8A0WvSTzNmU8IHCeLQ927PeFGBPk04d50uIAWcJN%2FkXdvrna6dqeOZkdiDYUoDeV2H9VbzfSXypzg%2FTCG2ZZGBArf3PLbTonGmJOP2UuwP73htbEakaOJoU0q80YlPmnMmJya43vEWV9vFZ4PPwzIc%2FDFxL1tcKKNT1nJDBueoEM%2B48%2FQf6wZmqlRW9dPRSSWlHImMqOKeLJkZ3Pn%2FNzixuwQFr3E7%2BbPds3MghTsW5GzfcsqyrpkPtIelXJdKK6WWJ74QY8uM1CzcDPhxKfzmIlRFBbgvXv4cSwOX5xhazCdwLxPOVxun9W1y677b%2Bl6LblAXre%2FJL7%2BvGHxTrrH1f417a4nXshk2rh6PkMMTDpETSfGMmhEVXD9nrPvfjdBrpgTkasYwz8VWipvhpOmIWDx5q02nfcWdM6gEAGjl7WUn3CyBamPLPTcdfMjlEML0Yql3qKeYdU0VU5tS78UHQZ0ld2zuhF18DPZzHjG04OjTZ2aQLpspov85Eyq%2BvuQ8A7kE1ois33CtwFOyx5%2BsiX4CPdUV7QmZ5MblIC3XV0Rmm%2FqG6hu990C5v8emkijm8EmDn3kHvWMB8n1OVXnk5QwfUZQZJ%2FmicsJqOy6J4OI63DFfjCS9orIBjqkAffmxXDzkpAIiLfCmXyZEUEkwTB7ztuve01erwsGbaD8xr0zIEwkfZQgxQNEz%2FrhC%2BrgNMSRy9A3Pw71PR1F0rYzc0olA9c6sUKfuEgRjRAgn3spS1e4vwUP1Xboxk0w%2FqPt2gcSAevdFryvZtVFuPcB1Jtb2NzTBstNDMjqG99O1f1YwM1zl4l1s2FI%2FGN6mjemBrshIhPRWspYkQBPGsJ2Ylrx&X-Amz-Signature=2e05ab5863d4aa11341bfe7a9df7aaf3afcb77009ba2104202b512d749e3dc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=48b9f5556b704dbcdee761d85476642000c6c3c9d1251f17751ae6a3baed5db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=6bf883001f97179c61611e27db4baba7c121b35aa261d0aba4b8dcdaf641236d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=69956971453f9f19c3b4ebfd57b0b959e1e0b2264ca6b87d351a657db2351367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=ea08f9de47b8b4e62d778ec842449329098ddd82d0f76ddc5dd994626072a1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python "5-5","6-6"
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

```python "5-5"
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

```python "3-3","5-5","10-13"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=dbf3c3168d798ebb56c893c56f628ef181af016997280f5a878851b7001656ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHGGRYV%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAhfCDo81MiIc9np1hnVNh076ZCbX1gYzyGNBgtceiq%2BAiBkdPZTgmRpfKx6nu6xBIw8WrZxpWjBuOWytaOIt9Iu8CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc1FNJKpt5ZTO2kb7KtwDd0fTbJ5RJosRvmCd2JpsK1BlKcllUUtELFtGzn%2F2M5PhnMSHS5r%2BUtB8fzHy0nuUl6ZtScbUiUW87AYSHx83rn2LtJ%2FV6ULY5Oj3t%2BwX5K2wA02fRxV7aP2muhwiUgCwzNjPXstPcHR6BGHR7WzwTt0ayP4fgFB%2B%2BpT%2FUCqjmT2MN3ipP1D1bQFfrYfbaPFzIZeBzq9m8AxS9QMuW9JgzBU7sLT6B8vJ03T%2B%2F6E4WHYJeuaizbbrjbsCH%2BKVd6wCAoOqPX94LzN1GhbE5vSsxKWvCC%2Fi201wMMDEWyphuCyU%2B1EPVOsga8qdq%2BqyoA94esybfh2X1qVmMEDKISfqHFP%2F99lw6xGRBpLawFpy5s%2B5G9b0nRCgb2xjeWmANtX95%2BAV4lisF%2FhdjBSdGc25QmYcT86y77Xag6LXJh46hTHYr0vvukzUq4thZTCsJRdPQwxVJ0kIo1R%2BOH07QT8VJFGU%2B82ZLVYwVlvLTOQVAZ%2BxrGrT697s3hqNoAEOlTh6QCAX7vi4yhjkw%2Bivaerr4KNa94VwW%2BHBFEqmX7KhroZjfe9mB2L%2BTCQTvibrWQNjxtjdrZj%2FHwUQsjDQSEiucq97kIII%2BZwss0GOLD1bwf7lMR8WKUmHEoUX5ywwpfaKyAY6pgHRQM6xuKHY%2BAlJcQefGUc5jzivpu2k9C7Bdpl6JQkk008z6jkGrNeijQDBsVW1zau1QaRxKJ7VpRURDPRoFp1cFUqExmPIQqng8tfbiOhE2j27Dyk1V7qSNdOqCa1Vw%2FtpY9NLfYIxWPnRoTxZg1RT%2F8J1HlVol5iaOkU4KQoLAgRsaxaogsJSxeZXWOGDZjvYUk0EQLPLHn54d3J8517s7uXTVAV2&X-Amz-Signature=741022a70eea95a60cdaca2e9355ea348527f753249f83fd6d7ce3ebcc3fabeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


