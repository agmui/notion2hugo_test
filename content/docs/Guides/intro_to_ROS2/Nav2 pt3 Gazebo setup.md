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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=936a1003ce2fae977564f484042393d19f67b70609a1f4818e24670653337c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=8c4acefd1b3a5f201f3a7d5f255027128a7b925669487fcff83e5f71564fb88f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=4a506b10e267b7eb291c2c230adebe24a764ebf2647b30b444d292be09277511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=13802e728629111492229739e4d443da6b78271f038667c01225061dd2af7296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2QMFBWG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACfnahVR8s82xKroeMyORu5fI3tirT%2Bt6VsEczZt71UAiEA8opaPn5E4W2g%2Bnp1wIMhc3mjYRGdfTQs%2FoEFZiLm5fEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAR%2BmxwNZN56u8DbASrcA1WqWVK4BLTlH2iEZy2%2BCFcB4E%2Fkf%2Bd%2BVafAgJEs3xGXbA7SSBvSRzsVkHySM4PP8dwIMndPy%2BHFkFt11AjHUkRX53ZXJa2P1Yznn9SKtuGJU982s3JGvIYxq7H233ThDd%2BbVnA%2Fzab6sv9q3eL6eUydc%2BJUHowavFPBrEZYCWA6FCKSkWjIqWYkXfp8ICIKLH2M9lM%2FOI9qZPIffG5tl2hPRtUsd3Nkh3Xgl%2BSkSjvKktHYNMd6cM%2BWHpoiO4d2nUpnqkSUK7p0lJKlPmyb3uyCwtbu05%2BYSJSaQ5spBTmhSPddGwIyHNyQqcZQnNW61fuPmUH3aqGE7LpfDaKPX6M6whGo%2FM4G4%2BXgpv8Aj2T7x5km90g50LcW8E4n63VSrQjD5wDT072T3SAYWIiTYRzvm7ghmB1efwIoKBbFpoBV%2BmI%2F0pARW4nmWX2SsrtdflabBmaEoiPIeCJ2D0hBl%2Fjq%2Bh66mDU6gG9DPTcHeYnJiZqCpGg7yVcJo8sCTlljGMpgTNz9tmJLiXEOMlTgbJ5TfdesumSpFYZ3zmhLhyXrVhJNrRSwCo1ozWQQ0Nzz3Smp%2Foo0YDeTZc0d4Cw6%2FQwSCZVgnFHRu5JAX4dWJhT9DMpqFtiEGmJOE46lMOyqvsQGOqUBrGelhosLQl4KQ1i%2Bpz2p18MPg%2FKn4aNzdugyEhzKYqspEWtpmyf9CJRDKIcxVwkoz20TpFSMa%2F4ZqiqkePm0%2FYAZaljjNfAbOlQP4CnCXZopB8YTJ5W%2FjUgBKIfk1VeKSgYdY3AhcN8ubfzpRxGJJDjvIafY%2BbH8tlVP1EFm6reEwsDAiCz2PPqoXec17MzwZKxeBpUBsKjZ90yrOLYynT%2BGwlKm&X-Amz-Signature=b18415605e3133de1ad8c2f18395059f5da2a136c70702c5abf05bfb715fb9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=b7fa73952e140da6f53969701cc2dd5cdee11d56e4d96019af2ae5be974b47e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=a73a1f3e8627ea1d0a3cd364168d06db876fc61ee7a7567cb0d0fed59ac92595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=60ca325b32ba68e2f360f264a12ffd5e43c01167437d412f169d805f946dc674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=4ed2863a3d0fd6a45865b7927e53d9c27eb5b6a500bdbd1aa496dcc1519874d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=a8937543d1eef4f567adf3845eb507ff4bf3349d0fef3c48702f0a62e503e7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DRUII4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2VLn6FE0F5DuvBhB4Rgy16BYEErnw7x1yw1aNlqocWAiB2TkJDToiabvCPTUKJMvNbG6yqRLzNF3ihrWPL45WUFCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMAXmdNvB6MmCNEkOFKtwD4YptkmpupBOG7Kkf0Iqc9%2Bz1TU8CUjG9ZMSsNiHRdmj5TDtn1d5XGHk01EEsQbo0wW%2F8wMK%2FueLMxsYV5rod1tnO1HMh8A41l0L9bpv6fSdcrLc9zpC2NtmHBOCwjR8yFU9U5E5VgADLIpbG7ztEllVpVeqyXAtftLTAtFJbabdX3QR1TBovGR%2FI2HYP67nGF9ON9nGvN46YaDkgUI4199mhe5Ec6Xn65SBhuCeIHZzy0Dw%2BQqIDThjgfUtSZia2AFHf2JZ%2BtOI6NQjZngBQ8y34u0Q5xPq4326YW1c2f5un3vHNxct7T4pgGAt%2FZIBT30vP7jFnxMTkFm%2FE%2FaNcrcpj1377TRd4ITdxcnhI9y9Tco97i9bViHTVysWbv0aBncV6aYws%2FehpRaph%2BH7x56P9JUswNvWQLk6yKaEIopnNNt6SwtCDLprOj92dRjV8NrEjyVejqagAJ9FRGKOZ16%2FbAHGlsamcmF3oUiKpj5U3Yv1X2hgiS6i8EXwlunBSlIAonXzXD6tYpv7c%2Fdpikxc4SKJm98121z9fJozykqIg00pbPjymSV26LEn1mt8cE1rz0dLR35Afdd3VBs61RKoaxgc1W2qozNmBO4KMbu%2Bbyh5A8%2BncUJNd7SIwwau%2BxAY6pgFwodfedqqBY1MJjqXZyhptPJs%2FCPuZEgTnDpQ3JZWb3FtxSKwkiGo0Om3%2FqO4ppjHx9NwzUOSYOgkJiVNZqisuIsad1Ot1lTnaj0uLQchX5fLY3iJuDmSBH2KONke3T9nWxptE1Dx01vuywNQ2MH%2BT3GjdLDjitltHxNUO4r3fVf2ukFnR8%2BOapc1F8NFtdnYYD1NQ5XSB3t2uOx7ka7Prg%2BAVlYJQ&X-Amz-Signature=5ae934eb7fdfa15536482dc5f322481a32971d94ab48d684ef316a83533a5962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
