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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=5ab1f55dbd89e9cd647b5bac793a6619d1b90f58291bc8ef83195723204da2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=d20e8bf3af530ce787f3f918ce02d4e7e18544ba65fb00b28b38905f58ae312b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=27dd128dd0f67446cfbff62fec25fa096726f4cfb7f46aaa1fee15cd7a52ebe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=48e28058c435986d2c140c697f5e34d0d04a6fca4632f7d6890a9d8b73ad56fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BVUUTF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Fcacp6pUvj9ie3Qws64cdL0Ymc%2FYwL98%2FpGL%2Bkf%2B%2F1AiEA4kK9kfp%2BJLkHAGKRxpaL6yZ9WPPfdpMaZ%2B7CrolBwl8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvQtnNa8QfKCbY61ircA7fIsL29SIRAEGWjW1LP5875zS%2FGSky9ACJ2VSTNj4P0aTT6FYj2dGowrAqRX5MSf2uQYoHzCMprfOv6PVvhO9eORV8tuATgtbaX%2BovDJw28mHZpRRTWmzMoGdZvW%2FKpxpafRifRLIfXBBKbnsTkv99AmYjsa2Ox5K2J6Tv%2Bgwfpz7c9QAhENNeBd3gu32jtKjUYfXz9F%2BAS9iPD3nAqPbYvOSr1p3sstMtWhZrkFUp0C0DGraMNWfb914oyi5FSlNYfzqSIGqlg09OAke5yjnhx%2FC%2BgPxdmNdUNkOJBeQSOh3bOD7Fs0AgsVSUpLYZey6DBH5ITiJ5xuEaOkphLvnn0g8FtbC6HwStMMEGSFU95VReMd4vT2k3xWq1IEiW5jrNjqEHcHb0ckwnS7mkf9DWPzCDV4InDbrze6PzqPLLDQYJxGNErs97k0VxFzVkvexwa0et3yNYISmDkO%2F9elX3yGgNRnn5kow1hoXwBYadtqMcC8a7ag3tKkEQW1ZjffLfUufVWT4ocq7eJiyWUQeJ27tiqVqzXmZdRqvM1LDSaeKvGPUTgfTAp9P%2FTNM2KdG8Pq7dkBsKoQ2%2Fyq%2BJYNMRz31OB73Ep%2FRjC4BRV23Iw6Zlm1mm4EHw1Tk7WMPr04MQGOqUBLHgQuQs3eV0mGtb6SoBHYNmiHuQqoj1AZyRi8tsxbFJRbXnKv9c9nU8aau2F4xpnJdlFg7QDkAlp8a27KJMH2A1pR%2B5jwNZ6HXF%2BSSqhJf9m2fur1LP8bxfYwyTFVcv3%2FCbFFLGICQ9jPHaoDRr%2Bs0VVixBpnDLFS5fUSwewU2i0x%2FO67RotJrE5Ifa11pbSHIDJc2SYzmcSE0D7RJqBXz1ZnAHA&X-Amz-Signature=bc1fa2b62587f21ad5aefbcf1e7413eb2dba2dc2925e414431cb66cca7c076c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=a7c936a56e3b425ea630cf357656fc0dbc8274b7396762195f0e41cdd77e2fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=dcfc9bf9ddb6b62daf4f4e17f6da7c8b8cd3f456f7b9e9d07ec0d72406c00eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=be33d0219e68373bbe4280bacc14a7a9448dd4017643abc734f00008c707a724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=27e98532f65a0a3fdf98cc8937a2f66b06fa859ca7914a718fcc75dd6cf2b608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=d28ec65e2f6a8088ee2b2a9b82d2552df340145e3464ecff65fb7255076b28d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGQE3JS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdpfigePfwXTdpQu2h3KeG%2BvFUg8d5QN9%2BbJ0lJZDMkAiAC2JsWI2nqy6oCIWdEhCXk%2FMv6exrFtNr8AvLPfovuaCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlwpCE8R4VynEr%2B6hKtwD%2B1H8hxqZNR7VCYVGirdTPPwTxST6UwmghLPCbkIx7OHKeSSLK2LDy4Kp8vTrSpDewiggGr3W9yTH3oz45ca6%2FQ2lgfmYtqddNbYMJJGmZKpVRpHmXhTEyzo2%2FjskoAXQNyBAnGWf8n1qVAguBishgy%2BC%2FM3XKmC9ghCvCdAniVGKFftdaRobjUuNcpiePu595XKBt60rZ7XT8JFKGo7fg%2BqEYnCE%2BBt98TZDObZ0C9sauXKQVPEXz1SqEtqLA1MyAWKG07kTIdkBg5DJ09sR%2FRdOnl6I6cRo93pFby91UKjQJ83RLNhdLuAxkVgLxrUds%2FajqBFTmc3anl07eq8oqyJnobZFdFLqDybMh2lws9ALEr%2BZy7GdgiLwHnN6%2FeIsWarDc6uI5QuqByXE28ZVCtH5n83VVM4qQCw%2F635O%2BVgezDzFNwpEOMccpkNaqtPbJSk4BtA77x6m5uq%2FciBAwowFomV%2BnGnccHwzAQXZYXd%2B%2FFZTdTGsFAxC9HOmGKDLu7vS9I6PAtjQIZ2QRP6MVEUA0hL%2FHn1LyGBwQuZjtBtpvozjxSjofTW7WrCU41bGpplBOA50oipj7mKt0rNjQQv3%2B6OseUC3dq86M%2BDbZTTVUGCgMUHGXvHBuQEw5vXgxAY6pgFtaq%2BOwKiecVRcT2r6%2FH5mZqh3md0NkTjw8Zc7sWVK5VWg%2Fck8uT0lHS3tLQr3q3FndK5tqOwBl3aJrLnrWxG0DzLjLGiTKHJNB1mpwrujLRipckjEkv0rZmvlwGrwB833q%2B5h0%2F1Xk6tSlpA%2F4POaVL8fZQ32ghG98z7LevOkCIbe5OZyXf56byp3yBR5HEK53iiEZ0AsqlkD%2Fr0q8bHMsiiYLoIm&X-Amz-Signature=fbedf80be7a224b5bd5de6bf550d00ece6253d26333a685f40f20b2b6bdc92d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
