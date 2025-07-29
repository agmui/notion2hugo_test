---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-29T01:05:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-29T01:05:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=d2af2035b05c26fe342f317a73d0f64e657b6c8fc041b4341e8b70dbc02fab93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=4dd5d9eb42dabaa6e6e6aa4b1c8126f1fcd2ad7db6503e8d3d17ec0d1c4d10dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=7d7212b7e043e381f3b7ab4b3314b946d30b1d8b2e2245db63bb4e5588e1fb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=e6d9ccea6fab2f81ebb27ce64351f43b8b3b4e89eb264cd5f82904672edbc12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=e8014cf67dba035900cf1b15e4bef25bd07e5d8f3cfc8d66a8a58f121bdab647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=e155fdea27cb2e65e94b720845518f82e1bbdd76e75f00462235b177462ce436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=68c6b2594508d700b85c70ddb81ac67011a97b4642e8614d94efca0361e5e8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=c52b795f2d7628d6b74936a69f01f653296c55ddd330dadf28fb23fb1ad8ab53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=b7642776d3901fe1767d79406003b17e8ad3155fb77ab559311c57cd68af76ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPQ2HB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC3zLo56WejebMK2Zm20vs%2BRYF%2FsTYMPg0ss0b7fn5imAiAUm5cCXSy1%2BN35uiUYV6446lQkzfjXi2h2vCj78EhgbSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZsDwY4EW4PN5QyJKtwD6PPQDoFnei1WWQ%2BlyK0aL8bJswByLE9%2BkP4zlq1elTMyCotFl9h7iiZTjNiuz7TB4Qk%2BpFyPnHjK8PZHvIEx0a%2BHurokq618jfjMZz3P%2BACNYmYcRQGWhyNKVunvd5Lr%2FO8IqAh5Vr6Ut99ku1BBAzFym6kwhjPTmeCSs7OKvRaOjfaDDpSYD0kgZLSWSieisPLY1EM0ctP1aFsgpUGstzjSpJ9FM9ezo2RupBkbGAzAnhSIu4wrJ%2FbGx6Rx0A7WgcZ0sfOoq4WcBanc2Frs44fVOHQ4vynemwkOGvz9CjmJ015Fjiot5mvu2zUfrSzpHkUavcaRTpQa7INgmIDQpLVVc62uk3pNTABwrIsNwui%2BgA9msnuu1XkxzPaIYiBiGwGfy%2BRwQ%2F9m5G9EcFrVKFfzyJFxtlwgVJYCMqmSJfF%2BpuS4WxsiZTkeGGT1c49JKCTDjspeV6N84PE1i4O9ur4rBxg0TQFOLqRQNYeFqnVs6xIB6LlwVBiP4k3lBoHneE9TL7zoVP0e1cAZcIYdEO8Yzvo6wHVNnLtraMIEjlDH2EEcQujlrQPBCoGblifO7gqHVBSylASeiEgdGpGPKlpNTKejNtvgp7ujLeG%2BlwgRfGTfT%2BiA4cbjCrEwg8yjxAY6pgHJzxrsap%2B4XJ8XSCoaYOYa6LX6%2FTSTEwhhMDD6gsVZSFrElm7Ig9oiGqAvfXaJm6s%2BO9PckU2AwQode0J10AHULT6Kl%2Bub2YwxUE%2FBZlAdq%2FFQ7fzcwQgNq%2FGl2TyK%2FTXH1z6yYgTbiDZ%2BRVMAzfMOrSleUj3ot611GW18sFYkd4bKuqmvXVHEp1pt12gyuRo6Z1rI6dEwDAfCwezIKt1Gr6wuFoc0&X-Amz-Signature=82dafb8275ebc4ac1b3064e8172511da9d907bddaa8e4ce7ae4fa841f9160fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
