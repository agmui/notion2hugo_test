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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=624a4f972903db5355a707535bd4827936873065a1d7f32ef3a70eae7396fe55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=4830d1ac425cbca2d56551462a1671f6bceb90df29b4b08840da8a7d353c1924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=3222b3dd1064f8e39aa73f142e81d4a0221410ddd92ec03f16ea7e2c6b92c60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=fbce2d0ae5797b4138c0b622a6249b2b0860bd780009c88328b7c04e9d0b7a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YTQDWL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkiBymEEn%2BXukSH6DkVs64x10AXwD2BuWNuRTvsXdWRAiEAt83030hKFXuuymJS99YU8gMYyl0LmvvcTjxabvJwaqoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIKZ7NnrJRZimwAbsCrcAzevzy2uqX8QzP%2FpSFU1GZdSrW9YBbTvdXLKPajbTpI3rVvrjO5CS051VxzhgI3y%2Frde5OPtJO8aqmMf7WIFB4wLrRbfokfOyqwcUhsq7Oj63y%2BujiJWRCrt4W2BBohda1WK395sTFbu0By2HGA2MVQHs%2FeKFRRPSLR%2FbDt1nxZEY50aGGtA60SYMhPLn1Z4xAixYwjiQOet%2Fw7yeDKiPWIDa%2FtqNw%2FU7Iw31EkMi6Z%2F1b%2FYMyKUui4V1EYzDn0USzxrAegmOf7SVUWc8ZHLSPW8TLwFSqu7ZDr1pxWhweVze6a9bKOSagvJHWsVuGuXU7uGWazyp1A4kF2039U1GgPj1ZBQOV9ZDOUPhsWF9omErCxIVkWvsYp7hIrvzm%2FXeeS4Zc0VuqVtZ6yBkLo7%2B4ywBqkmTlVhdNU1HyBdICk5WlC6G3x4qoTidWHCvXS7VFLdDxzcl3EdEQ4%2BQV8z9k4GYTvDB6%2FaE72QrNpomhFKGQgwCkkEpZNXO8AmCnUtulEQOUD9zKMHUunSUDMOJOT4OSxwhbuBdzcPFhklai14BdeTICxQ0Se51dLpHqrDBucsRjFO265BjOzFDRtKYBm%2B%2FPcYECaO5EUQovukcWWNa7BxZB0Sc%2FNphjAGMNHSvcQGOqUBLLEE1cRRJCQKkVe6TMeqkzdoDCq1MULE5ZB%2FuQrZk25UhMxd7rw2JZZDYbjNvMDCUT8ODjPUeUfvOQ%2Fwn5035BA8jDja%2FcDSAkEQMQZ8YI4D3ypTkvxPu%2BVoSoveXO9VedvDlzoof9fdB1O3648fTn5AxULV2apbkr84iNylS%2BNKk6DpYKa0f9JTYheZywf7CgScGw7cH0regF2dwkJSx6acfxIs&X-Amz-Signature=684b5760d2b4e33d7992e49f5f8af19a846d86c785d85b478c3cb32b8d9541c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=ab317058e8f95b96da966877e774d34d804ad51d3dbe84b8a2227f9b8d18afeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=c6b8ea3597f06b55fee259655540b33d2b1caebeab2c316b2f5d9e0e1e6fd3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=3e7353c6b9ebc0981f26402738f438862f2ed1c61af7813e44571079ef37613a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=422bcb089f6b8a6cb85c23b2315d96a46cf76697af0c5a582ee7795092e5007b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=4d84b902c90e23abb3f6ad3073f3ff963f9fd43ba6712765a5fa5d33ab79f736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCPJNWQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyAAIqF7rrVG8FutZtFqvBrjVZGmKD6btvCLmzJFoOQIhANapIBDN2qTR61ZO9gcn%2BVht%2BJ3F69UFx%2FsVc0FCzbB4Kv8DCC8QABoMNjM3NDIzMTgzODA1IgwE0V5GeshB07rzGHAq3AO1Yzg5Zfq%2BeDa1I3l6r689GzDoB4snPjQtO8PpScqd84XkoAnHN%2FeSFSv7Qy7eExTTL%2B%2Fjyr8jJ5nlTTkjcZoVeWumbQeA4BnzVV7C%2FFYj%2FgcWHYK5t9nsc3rOrMSHw5JlMINQcRdXQ%2B3aOC2GaFmIbyOldRmVdX1fbOX4JRCmLZkUfiqUm3QCnzY4VTul9FuFtsIZebAtBzAEj2uA6ako71mcCbB6FoahqcrmZ4IjK601yizxhdZRPMoQ6%2B2KVNBjEwJf9O6es%2FyolD6Cz4qpEXUDHqCgTdiHY5HKOY5LZslSvK2NjgVzjqHkoPpjF1R8MOc9ZbxXPBb8ibpO3cjfYW7NhDNAVtJwpA%2Bcs%2B4qyC%2FI8%2BCvZCEzRZB2edbSllyYSr9wYIBQtWm68EukNPYK2D5N37%2BWQCeQTVyXVr8I%2Ftl1ytzeh3x3mJI5qOWh9p7ZQhFTr3LTn6dES64Nv5kvaYZKu%2BrB8afw5yNMVPf44eSQ2ArQkajuZG7oJ377cWpc74K50k%2Fjnw1aG4344ps6EEmLotXA%2BOHm5cccj3gZZX6kmHyeKsbLFhw53mpf3mw%2FcWYqgT4lknth2iFAMBhK3emzrcoiEW9fj%2BD9Q7SyxtYQsbzoOw7fTvm60TCP0r3EBjqkAeNRnvZFX7jO8ForG96FWmNd3f5UWZLFb9R%2FniSIT9itILpHlMsfMsJmXQvJ7%2FSiKt8iJO0NSIj8DbJwGs1ZHtdCkUPASngXTkXxO1lk0AFPLn8drCEY5lNwjK3chpwGXSNVKzxG5Kw8vd6QVEXSab14uf5L7FoWk7z7pwS%2Fk0drYYJsCeFyBXq9C1ZVXY3bh0WK44PjO65uXrzKmzX0rLk%2FU8CH&X-Amz-Signature=2b5e630399a64bb1d6f3d62bb06336cb2efa0d17d19553a37162067af622f4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
