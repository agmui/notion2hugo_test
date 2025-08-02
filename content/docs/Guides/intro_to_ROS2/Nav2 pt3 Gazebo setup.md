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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=b211a263b5c634fa568a3639269dedd9cb4c9c035ecdbbe2c7e41ebb03977e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=f70b34eb2d653c24709b4d4336d43f6a4a451574cce264bba3a09db5b7d34ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=a61e61319111130788d8bfc98206053c224de449fc6544a0c029c400ea1837bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=e5459fee035ae5fca841c3b1b8b64dd5faf3c65a8e49366297a60a1f66aac418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZYQK5D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdPUwUW5%2BWEuplgqIs0%2BJUQJSisY7qq9fGzXpAhRXWeAiEA3QLP4gxHCYHuR0nR96DxqMa%2Fgox4Yt2655MBf9feTckq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLhoDjI2AnOiPoy7PSrcAyVgOQ8UZEDw9FojbRqqBRPA1hJ7NsNc4%2BXpacXt3MOS06HX0qxJpVjxr0Gl09xsmVcOkJ2vSqhK59ASc6c8koD5a45dKqMu%2B9loRDKDq9GshNPriwgxRIJvM5%2FdmeNc006QepC2bnQjB0kwMNu5OOJwJId7%2FzokSZlicOz0SwrzioVITO%2BA9kPi%2BewkUdJGfV1WHZWBoOEI8fHGRyUhDzCMps0oyrE0x8CXaAh4Ay9FrZjgLdCk9bIMz4wlDMOE%2Bf8dNwA%2FgWO7cy8W2wrG0oty4yMLfb4ejhryidu7jwjkBsZb2y66n3yjEOG2aneqdxwxQfOkYa06y7NHFDN4l7szQu5tfzMV%2FYape39ED0qq8KV1qHQuKeeA2FBh%2FwXU1KyMvbFlBqxw1Qcv0HUIw7LnK%2F9%2Br8n16bUpVKZPcYUpau9CD87QLcRWQ8w8Bp1FmxzL059kkVAgYuf%2B%2Ft2%2B5uFNQJinfRaj3RLVYUTjBI0roHo1FvT33nXkr9d%2FJPHlzlKyL3BaRiKP8jDJyEVZafPykHBrMhv2tM%2BYCNt7dsJ3nINdLziyIXI0BnUiXX0oX4DZ5QGZ0rAF3L1xhoY68L1byWo8jrHHHu%2FrPoIYk3ZWf%2F5V6%2B0dAuOwYs3XMMiAusQGOqUBLK5XkHe2TB3%2B7aGbgncoqsmUkCVfb81dgTMNJtohSgJVruv2PET8VZgodTv9OC3IcjyfnhPt2DaKvBwKl1%2F6EGw93VlWlcWUVFSlHOIG62I7x0txu0bN8Y0s6IZoUocpZvfUTN%2FYC4x3LSmycj7rnGrcsO8moc8nUcGRvFkg6Pu3N17IkrZ8%2F%2FZY7mx5agXbLEIkNQIm8A5AWOhyu2DWgYeR5GLk&X-Amz-Signature=d30523b0d8f799e7773f66cf87f908305c09bd6a81f45baef61775b12020bfd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=19683aeb3f820b7690d7840942f3da6b70d679c425d83a3468b5e177fa6bf13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=0897b583c7e4c66c99d447b1e890cc72b0e9b51ff102b79066c906e5c779324e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=8fef59cb2f2551635242d62a83d68b844ee5c070cc023e2b06e10425ccaf6cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=9a267e7552b2d4b70bff75c6eec8eb2acd63e6fb5da2fbe89d1d16619b423689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=cab7f4c98960714862da7242f5ce16dc21f04f8c467f6ebda5c83fda1f357ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KPSDUO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6bR2%2FwTGMKwStOyBCYBImBTRP2cdBzq%2FqztiAInzDzAIgWbOFLqXBj06pN2ptKr5K%2BosUrGRsy9YxMzUcghYZSR8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGvhOd0Oggj%2Bal2e0ircAwhqrTeMkI9JOS%2BiiIPmBHdZmXgPyMvlOjFnYprJNu%2FxcSrTgUP%2Bj4fWVrQ7CZeUK3P0b3XYJRrOyayMfN6WEy3zmCfU80JI4bj0bUxfbgzw90s6%2BL%2FPPE6Fk1VIdA8AGLMNTOG%2BalA8R%2FNsTRpVCPDUDPBVfPujAnCu4TkvUz4nYc74b2zqAgzB8t%2BtBZw5eXSenrNtJUK2AsBX6mCkorcU9MBN1dA1EeK29SIfXL5ptSX5%2FPSTOO0DbpvnatT1t%2FU1YBjffynVKwZfIIa9M0utpX6cJ0PbQ7yk3NH31a1d07%2F15VUcj1bXRtMTVF7qThh%2BTV%2FD4GYA9BBQJFKJ46Jw1rB1AhcshmPdTDOEshaXp7AlUcz7%2BfzLjZmBPuJzBf1GY2pNTXECj%2FQ2h0ivcaj%2FwgrBpF%2FfwIOcGXmrSubIX%2Bwy6bcdtnNt0QWyvOJX5bC7PEoD%2FXe7PWYdu9OdsUcqaW9oqDZHN%2Fvqs3yfmR1GgtS4kQ7eG3IObEuRaG3Yo%2B4a%2Bua7DD7%2BTV786NGATUn%2FWB0ZbC2xfMSKzFnuFYZGsP1hNmVT%2BNpZMdFl32G%2Fottze%2BTFDl6tKqWuyraCdRMU%2B3flOQNbBZ5K0vg3U5aDtC%2FO6%2B06kt88gY4HMKiAusQGOqUBWPP9hzAJVV7qTrA5PvyHTeBP0BOSnqqZP1%2BqGxKpm1jHWGGrabqXEISHBHJjiQGEL5CZFij2d9BLO2q8fJ5eRWpl5uTQ5oYFl7rzQZfAdWEJPpAPAzpY%2BuJ93en6vr1fkoqQ%2F75pHvvLW%2Baf8csqD026rcLxdjKwzRAMboFw8yrQBUSmAfAofW7c5dSQ0w3kVmTIAuc%2ByQnedt%2Fuzp0JWKQGd89T&X-Amz-Signature=a5ab0b2561586b7eeefaa2253ced72a97f8880b8011e3df60dbce7ae9867ee6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
