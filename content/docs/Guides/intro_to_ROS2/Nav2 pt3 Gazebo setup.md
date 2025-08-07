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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=748e9b7160f3fb424d100482ce52c8abbfd0824440291ebbd980db0a65fdefaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=6dd737d1fc43646e846e8de8eda82f7728a81293c54e1b16caf94d217a56e433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=2777ccd5e37a71b50c8ec3b1dee103bd61aa4cd43b4219dfcdbbb4966f2a54f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=b94ef42bbc27059b70d15e3ef083c7d10887814cfa26d0ece7209337f491baff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ7IKR5L%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCExePyhaZuaek5tbXH%2BLTjwb02aVFf17ZMjWfmeWNBUgIhAK1b%2BDukTi9ZoZAXFCnvVCdJDEAUOidBcfN21TwL7s1oKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzludKxh9WWnkk3uXwq3AMtVeZXvOR3PRpPIq0G1uN%2Bvoz0%2BkGD1QLt46zCblMY0P9UWhY3wf%2BaJYrq0zopl7VeA%2FbCuUFbyGWVez954g9HkGpp%2BLnHJ6DalD%2BSDRvI8NCMuixVypyXwIwEM1XvmBJrVU1%2FbymYpNFFKwbTzQP4I0bPkgm2ttr4alRMGGYLi2shKRAuAUU6yUbHnyp4wymSlr9DEnOdMflSzuRtZ3QA9uqGFIasEeCA1nsYDnIJHSeCVyQLCOPVQZKSrjwa45nt%2FNTu32waMnAbAlnay7nF%2Bo4%2BI2S9WtRP0i1A3c0bVRFnZ4NqzXTXR57nUwQTvALYLFIp16WfsDVzH7lFlWkreaPaRsW%2BPl5D1UELkWZWAISdgOmCz6OeA%2FC64vGPnDOwVLgE6VVegPgIbqgPduGTYkdrLNyraNto6fSO5zN65OlSZ6YaX3UjnEPABSUwgXKzWY%2BN8JZW%2Fob5Iyq483zGuoaJXH7cAcApiOAeQkPp%2BILSoZuluBeheVpzDpsmbKG%2BmnHeUcn2x50i0013u6%2BNiYfIZawoZ%2FblXqsKksaiXSitaG%2BzfkzhJrnVi5M9YJ30GISiVnRKU2GZX5bWk4uySJrleSBX6q4xPYq%2FtAPIkQCFga%2B4cNc0lTAAvTDEtdHEBjqkAUhX%2Fm7AJpmWJ95opcdLUW4SGcKXFpIVNDkKQ%2FT8U4X43102PEGYsH0Bmt6vhozt5WU2SRRuyq5S9Y73BqMxuA3bQ5FOkWoytIfs9v9SN5amhyMMurzbK2JCP0oMNKOMFDZMTZE7mmYfLWhWM4uQZroD8wynQY6f6kovDnk71K1hqEHmiVU1uAnRGbkZF1Q3017o9qfp4LQ64MY2cRzyxBN53vpm&X-Amz-Signature=33a768f880e09525b123b5bc5f511e0acf20257ed2465c7701d0224b3166655c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=5a0861ef95cb6f7cb0ae032e42a3128d43d3b68ddabb74ba187a1b772f2c387d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=27db17f1014dcc089b43e396b0512e125853e85888a19a84a6ce50d7df7258c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=bdf16898a59ac4e2ff57ba893d41dc9aebb25576b183843d1da9afea359ae9ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=586014f23f0af8d47e85797ce2421b9a4334f43ee801090034532b591d2f591c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=5cf06f78a7fe7054acdd0b1d2cc81bdf0aeff73f08c9e1401197f2c5c36636fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O6GC2UE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBlo5Uby8RZvpX6%2FU9HyqaO5cLDzWhU52Xt90pP3rguCAiB2%2FIlYXJMtxDfo%2BQeq4H2lhsErtzwisuQ6mvIUzGTR5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FUZ0CuXGHMCDGA7KtwDzDqYnQNfGhrlaSOaP3MsYX9%2Fqd661%2BQjV9TYvf%2BuZDM1Rwf8eswN2rI4APYarCm%2FJ7AhtEZ7JQKNk7ZWwBBF0grZvz4jZ%2FK%2BKk5iZxfUnHvlyvbBeOfIB16xaHfGgwDu9ukDqT%2BZGvlaHB6ZlUwg6MKKFiCJmnB3nsk8HA5fH6X6LlGYcRdEjponE58CMKB7PpPlXJnbMBLgyuXvJltt7uneHA2jXRbEQON8KQXMTtHOgWTHKPylYNY0%2FNFneFU4IZOx1oYmpF7M9P%2FVRhNshZRSAutW8Fz8DFGK2Nc0yXB2%2FmBg84faEh1PqcUJxmZhf3J27HoMfM1tbDivLvXh5tMPsnRcKpPIn918hHZARhKh4AuupvT37APxndpcNNnismRC8I3ZcR9%2BVl1l%2B2PodnRLWStmeWOAxCc4y3npNgPO1gQO25AdgT6oQZvuuqlCHp6GmfkteCKZsLPPAA9q%2BItEGc9%2BrwjPgWjTE%2FHqhHpr18EVfLcnUVqGvIJG84InNCUPW0njZ8a636rg4za1Vim2wy49P1HmTrWBnIsfUNgJg%2F8jkzKRMZ2f9z43%2FZPEVXz68IdtYPAaQpZl71u8dtXrpxg3jers%2BznrQVyxPs0iERgYhuCdDG26YnEwjbzRxAY6pgHqzJVADmUvbMuYf0IsaQcEIDnkRSyllNV7mKIMH4xDEVYq6DmDVmnQbvl1gB%2FFEk%2BM%2BCrGIYRznOeXw3V9KrVxmcVIQnb0mtzYdw2xl3HubXA2zzJsjKNCzTSGD%2BV%2BZeaCFWawjR3EqsEC9r%2FxQYTnOPM6Z5iEMRHqZs61RrsyFyr8eA3IMUVIysEjZhprOz6a%2FRffbB5zSL%2BjrDT62MB8bXSHAsP8&X-Amz-Signature=0b3d0b854db661eb25c19b4be871645209f6103bb3442ef8657569469b6a0253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
