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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=f6c9f4b04191e29001f70366fb9fb70c499c2c6ade56e71f16c31b1d32c9e80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=37f9b03b41c507ed957d1e7b82d0ae7842eeaed0688c439ac6ee0fe7e8236d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=184c1d6ddb2625d5f02e994b923ca82296e15d0c6587726a12208e6a07317389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=c9b35de8ff66510aa241ea8e2aaa15a1ea2857df93d414a123054a40289ac610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTH4UCX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEKRK6UQjDKJgUlUZ3kNxiSbACHRkvG0BGVWZ75jdWYkAiAy02fhgoXgV0MuKGDNwXhPbk5IerIPuGQtarAd4MJ9Jyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMqKUC6twwYEtLQQ2mKtwD%2BoHB%2B0941wwV2k3rBVIuHz81R0jfPWdnvwZ8MP9bZEFPPmKxBfrUgwOC6rxeRlqwPA7ZyMaJH9CNikiVH9ncLnq%2FOCdxACwQIa9yc0Ztk6vL06YuATWBUpyYQ%2BuZwLXcDaRzprhKBzbP%2FM%2BjlaDsOpIRGwxugMlwJ%2FRxweETnoPLbAT%2BSTxifHjLm68dq5zrP3VmqFsI76n1KmocGtuvMIWmGkXTAvDGeuk1zcJL1by1solsM1QRkGZ1xDyWHp%2BizYMdeqLoezb9u5CkXXKQFtkRtv4Weq4JGjcQkB3SCslD8ar4cfOJoInkMjh57mORwqws3vHz0iRghsvAxYVwhdO2gkjZ1MwHI2bprc9RLHObKLj3HDk79l%2F6fmLmXfQOpY%2FzdCentA2MmbM7wJYXsHYxqOx98LzBJ3gnv4CT7tm2Cz4%2FY9otiRKw%2BO1lN5SETyTruwpEPyzbwx7B%2BDnuT08wHbfQ1huhrALVqeycDmj%2Bh8ZkmeUjDxFML7Rw0zzsW0%2FQaBhjohSFn4aNFEKSWnbApe4%2Fdsvg5HHhSvCFmVc20x4hX1DUJMRq5B4B487AGUyXsZDG%2BsJWhmftgCMc%2FPUQpcCKITBHqf5mqhe%2FQX0fP%2BJxeqlbbQeCtlwwncvLxAY6pgGBbCIprgTF3hQuVwfTeU53ZvU6R0KCBXrRXPXypUR0ecH%2BoxdALss%2BtQMrm4ShUVgiuyPgZ86em6UJXcphD6Ef3yCBQi2tWKE4QAXSNdB4pIyhJXhIeSCN%2BAce1%2FkjkdSCmpVNA6fJHot1vLE%2BnyHCZ%2FQ6B8xTKMavIj0E9ZpsyhekBXJQ439di7elNRCJYNiLgTTp13vHYohOZbkuG%2FBlCfRK8Hrt&X-Amz-Signature=816f727192210908cb74efe6831a0d375d62b8e64361df397fa019b5ee02614f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=3c8c076ddebf62e65c492def6b45784c550010ba81a57afdc10ab2b9b3e4fd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=97ef6d16d616ad1283d20c292686f0f9cdc0c214269c4350da2c18a8cfcf9b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=0137b21c9e758d55690ab84d5a634842035a377d0e0bcc314fb3ba4152ea5eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=aa21014fd3d2af6c5dbe00feceb2f8a465788c029e4b306e9906534dc58b8441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=fd3d625da83c518a67107161b7e2cd300ee049233942fa8236bfac323c09d62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZLSJX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDP%2BbTEbSZd1tJq10OLKrw3Yh6kTC2QzQDe8yAEoVJKhgIgZjvS7lHQAPnl0I6kRz%2Bf%2B4zvGw8kEb9UzyDzAIJ5k1Mq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOsGeGsv2WwmlEtniircAw%2BLgIUqYKE9kW%2BYInVKfTghJ8N8RTJ5bYQqVewOfuESFrmYPJ4fU494HPifeT0qSFZ%2BGpWb4NnDl275tGGpz%2BX5jInKTSSU2CMYUjuCaeAXeLwXzkZOrWSi95C7kqkX%2FjcQitgRqv5Wnvx6v%2BX%2BNTkW5QaUHOGd9zMNFpp690BiqRHw6tQfKmn8OuuQZjlgDH7pOudB63qlMytAd8%2FiXlOj4QVzlhvZDCAHowZyDekrjUs6P3m3C4%2Bs1pAxwvMsbKcpHrJAWfLJw2Bx5DLFj4uwFbj%2Fu15lDZDed5xd3%2B6idoO4qVhOx30yKwzEixei4SqroQl2%2BitNc1YN5N4i5AYwulbELPHV2mTmudZPaxIwMr5g8EKwkObeBqrKeSiB%2FouvbFz2gxyXowrC4RVkdF2RQq8fWDlJMQU%2FwSKyZCHx9nn8rvXTzSHRIjnrl4nNyj5mtiggyomj27K0F%2BKjnLgJeQ%2By9qGF5GfUYsAaraifhhufCd0hSL52goWVDSkbRq4TEqjdw%2FUTCSJAEhRCCN221p7VNugknuB4M%2BRwRz2NmCRF4h86cyKVjJN3Be4MAo6YoamTbtRpB7m1surlykXlPon%2Bjsy2PfQtnLVgQjn%2BEhSa%2FhWKW3p3Lvy4MIrLy8QGOqUBeCWuaGbRsj9%2BecZOzcXfLB5FhyMo5UMt6eHnPpqmunbXr5PAegR2AWdur6EUYoFr9kE4KNqxfuiYJFlxQ4AYLKZ7fo3bx8nK6n8KkayqWbcLmO3MOaWXDAZWgsC2vXMVeEjtVELPFlVaKTM3ljwWXim05H1S4zTXX0XmA%2FZahqRJsdOtpcNdPvwQK%2BWxocxcbR1wWwMEdSPiwEJcaynemRCHd6UY&X-Amz-Signature=cfe4a9b329e2fdf4a6fb01aa0e9a1c26293cdc0b8d459787f0ddc3180783a263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
