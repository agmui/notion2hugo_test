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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=3f1b28d45d1e12d72c3cec1ecddbcd72ba874a8bd9d88a12bc874b723cc6eb51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=7c39d5b0c4e0cc90bf4051bff852410a6bf118c2f2b2518ec9f92b3dcc205e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=cd0207ef2373d0947cc3fcd4ac77fef7eadcc7934c892af2551866c11efa05ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=5460ff361a523113162ce9c319ed088482220b9b2b57dd70fa213fe02ef849bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBTXRDQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCTxAH2TT%2BLhyyzsyeiGzUWxWFDzX7Tp6ufX04VLRG1FAIgXX6pIn8zdR4FcoqRF1DkpdmV838qY7cYH%2FhZK5OWCekq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAFLVQgq0FUtK7N5GSrcA4bprwEqeS7jF%2FVcwTTByB6NhLWhYjICeIcdcCpqkZOkxvc%2F%2FtQg%2BCU0Nl7cuQSIOerh2p7rDl0GOcDS054EnQsfQrFvNzMFyekMKKkzlwGicP2yL3MVS1dt%2Bbcq1qchSlkzdzoA2hhm9UN0kZQ2UT%2BghmhenPhk3BX%2FHGEiVC%2FIODbOcJq9UNPhbM25x0HAtOAOWy8jBvu77sAJThUYwqHoX9cW%2Bi4kdyIo%2BPJ2nmpPefAff4LxjiEkI6yFOmEn1gj4hhe7rQDuupxZvjYa%2B6973gCMrogmvO7qtAR4yG%2BrWbwE0GhCaelcO0CydLTmci7NOEqB3wlXEBNgTHRKlI%2BOM%2B%2BYq322spYDdg5sv%2BOxucCUfghwJdXOvkqT1YL9Zhc6DCImab0rxqE6WCHxjdVqXz7segfqZpxWdVEokvYtrmX74%2BzL7UgErxpkArTOxc5mqicgpq5ZBP947OaDMBS83Hyug6TSdb%2ByZ67SVZ0G3Dir5oGeumPk%2B6VoKh%2B%2FWW300v%2FKlo%2BUBUH4GVwScswFZybe2bA4ldLPJ5k2eTovNc56ZLovIxrq0VU3EVIDeXnZKPuNKcCQFIXW9H3kR6%2BKnv6eAGfoo4oLRDDDMdiby2wc1ZqOWFWCn19XMLXa%2FcQGOqUBMYFTZddYpEV2BWtXyx%2BKv8cU2XbZjWJz6hqTYIhLhOF30R%2FUzzRXTYx97EB7xYlt%2FBJE1UjKwbIfMWtAh%2B886D33edvPRKAtugKcL1XzgKgRI0%2BPPIp%2BYMQTmL8HGmTyxfi5pPqqbRRR0b%2BudlFE9xFyjsnPoolWa7AVSgKcI0RNGeL6CZnfjRj057kcCHmqYP3gelxR2YMMCdgkk7gaR1XMwYtq&X-Amz-Signature=072f9f278f702afeb0a0ca04d8e995104a478de97f2863f2902ae3e58b3b17a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=acea6f2b5279b0795ed5d2d3d5c8bc83f76c8bb9d9f74ed3962e1c8403aa4c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=4b81acb52fbfbfd666ab96da58ed22aaebe859fb4274e42bae40d905cf3450eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=2bc128ab4f0602591f2f4c5b0f2b563963c736e686a8ab703b02de9ebb1d7277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=cfd185ef4fc7cbe9534088bb743686afd58c50e4816ee6236a4bc8c81d24888b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=1ca10284f5ac01e25d94ae384aec110ed9d34e621cf7098139110d06ec8ad2b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MU3EHO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4nQj%2BgOouB%2BDi1VXJ%2FFp9xoy7e9e1rFVLupaAHTI1CgIgLR10zI%2FfA09kBeodpavwHz%2F8UG8U1NBRInI%2F3IJ6AqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF%2BxPjxHc%2BalWtRFRCrcA2uKM3LkoTC63FwNHSi1RVsrhmJApv%2BvHXMdzFdlV%2BXUlCEQtVBsuLyL4Y6dKUQ5FbPAYsHZROceYeKn9fX6VyP6pbQEVRwaU1%2FN26uMwBwonO33ZaHtRF84WtuQTRwXvnkhFWU2ycpRAdmUSPcoJKWu2nAhGBOsV69lp2VSlVnoner3C%2FwqdMU7OkC19qchI8CoAYArGwJqvhuIsq562jstHtnKIH3weSGzFC7%2FqgAp0VcS%2FEeYSnxXRsN2U369oBz%2BLVYhKKANjNz9sIxqGgoE%2BMVCe3tyJEC16w7fdSc6QvODc4%2BXjkvvNPszy7XZcmn4aC7Jh2iNLEGOAgeB9Ky2iFzUM91qyfYq5lSvw5kaaLEY1%2FdxlxL7g3gjr8ykhUQBRZMYdkCi3MEjtr%2B3RDQZD40lZdquv0Hi2D4Z8tYUyzFgjBI2Hhfgbr2rOnbt2ErZ%2B2P7I8PywS%2BdPiIWRSnRPXWSyR4iccjCZWUnClunhPKS2Y%2BUpPrHfIFwrs8w5mipIzUeyW9dTqzWwvZIwG7SnIJiDw9Ng%2FU%2B7PV6%2BCrSx9%2Bd2ex9Edf7xvX6N3q2f3hgXJmtxrzFbwj3C6j%2BU%2FKCU%2FsGBvMq%2BflYveUUM7%2BNu%2BqkV6ubZG73p61mMMra%2FcQGOqUB5phRZFkkrW79MXpbM9UXb57KOmpIqBMy4YXJlfr%2BGVVGzUtktTzPSvBwfGf9hTxrCxIXtUYcwEuShfanqTaPYyhVnee%2BG5Ns9i%2BGrJ%2FDSWYag2EHtAj8E71MuZ%2BGaNdg1qoRmxHj2Jije778W4KfbkjNM2IwvJGVhYxbSr6SULHHHttpcA9jC6rnty9J%2Bp6i3C9If98wkWQmiUt22QnJOKd8fI6H&X-Amz-Signature=e0a53ab866f380ebc46d7ed1bf9aacbaacbaa280f39552fb054bc05da73667b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
