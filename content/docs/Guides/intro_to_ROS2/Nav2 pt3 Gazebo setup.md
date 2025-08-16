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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=7be8cb5e13376dc8f90ddf8ec125f0cfe74c24edd4d86e080ffa99b5ed299c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=eb8a18c43a27d8163b746fced364dc625b8d4a4c3af8eead15afd6722e9d46fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=5e60c08cea3fd4a07e18e91e6f3029e59d6eeafb5baff3895111627ce28d8dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=bfda7bf52260e8b04de14f75adf5c1075537faa51c1fe12642d776c72dd28ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW7ALXH6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICDHGiUuW8eEyToQ1InfzLPf7C80EPr9lbTme5ryGhuOAiB0thKO7mbBkthhNWX1ZC6J9tnGiECdMf3bnsEueyTS8ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMnzPdDw8NSY9ETSSAKtwD0dJBgEvQHjL44uUTOhcRtIQuL2u02D5bNYemGxsA4%2FuSi2ReUHakSbzoF7VfnS8UO5w4yaY7lqD3k12jCg0T27CUaigX8whzM4Cs%2BolHlD7x1ERauXXh1pbf%2FZUOAUpAU7GQVcZAtuWjpaUsOmCoJv2WnH7INJiVF%2FM6B5weVOtvm9bLp73E1DQF7cM%2F66kaHI8tfc6tYtYIG1pMPqSf5maplwoyAMMwar0A1DJNebwMNHJp8TMp1n7AXmjo0SXeuxYHuSHPzk%2BlLIp45zDjTrMYMhUoI6tD%2FFz0FQDmZP7HnP6gohNwOIQr53OQYRtpScMT5r5BKxSiLYi7CTe%2BXB4SMbEdVGv9FW5bdt1z8Nj4mXUOoTiIwGNefUQNPdJWvT5Uft14NAyQP0QUO3L62Y5QFilBCJiISeHU6ckRAzdKSCKn24GKnv5CuOz%2BQjqerbuwC%2F%2B7B79g8KyXSS3Lhb7rL7s5X%2FFjYmfPTTnrXIPk4wm301igfma4w6w7pJyQBJPtH4Auxl4OJy32ujYa4YnbSQNfrUWe4A8nKWImoDw9vSleHdeQ3HEunu9JmbY4PcegW5livQ8hN947h6UrJjeeErpxuE7fDaXMVwUYfKIrAODNrK3lyom7uSQwkviAxQY6pgGqIVnPmLEKUBcv25DwWMHBREZtO9W8DFDvyHaeEpV0y%2FkGidS6b3VZsOwAqf%2Bd3nEakHaZI3cSgH1QQyk4rCV6Ab3O%2Bz9%2BHydl7xidYZF8Z5iEB6uBwx4NCYmzciObszk5Fps8R9Tzb31Dgphx2IHw2L4QcvWv1nNSrw7RqarScEIPY%2Bz7Caapmt4fJBY5bU%2FAANwafChB6eAxk9wCVFFumd0SENbS&X-Amz-Signature=7cd083ee5539a38cd09b6fc469829237f34726d8d549f09c54d4264cca396dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=99eac27e7cb65c5ed6ab257d1586049c46033084f244fd8345057cd158f03a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=28b14f7e427efbb3c50ad969edc7aadb249ddcfb0a5de5d20ab9719e58d35f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=707d22a5afb152c8b9c350effc1d7f2a0fd730ab7105489fe020e05d534e3fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=60cb42be9794f804d9382fa1d1936fa91492a4b1765820d53eb1a19a9c1acdeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=798391e4142e520e0651d6392743d6da79914dbdf53c58b614134dfe0d771d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=c42477b51817ebba252c5674351deae6d27969ade5ae672d6c5ee4ea589e17c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
