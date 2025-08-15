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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=43402d726e366f30c2495ff1947242b5bdad713e13d5896f1742556385f8f5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=19fd72587381e699cb2a72da6f54df3c04c173fd190e4910bdc57acc40f20643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=b43582850c22b63b6a21a7762d030e3ef4a3821405ee5791fe0ed7de731346b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=68974e03bbe0a9203ea61c99669b85a1eacbc3d207a4f123fc13226cda2ba4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGTUOKL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDRU8lp%2FZ9dMjw7DEqGe5GLpzU1JlPpT2VXhoEJ4YWrVwIhALYeSx5zr0Sl3luOwOjPEGnD31LhBT8PCass9%2FbrDZnaKv8DCGEQABoMNjM3NDIzMTgzODA1Igxx635EvzIqeKyo0PEq3AO25zgGSmFHvlDxZaw4cQWJ5414RNzSn6OT1Pc2%2FLbHKJ9XelN%2FAzvTNnV8ejDDgnWQEUBDJ%2BSTfIEekPqqSGzXNZMgEJvnlLh%2FI3kKFMExHIKzRsKPW8G8GThg01iBwFYMGu4bmfz%2F1etdMX6Okfi8OVWTZqYYjBayaEcPADxzo%2BThMB9Ku5hV7n2kMR4dsv5BjtDDEmvVWPbd1bc2Tn7WUUzsciTBBVMfBLFUkgTwiYEcpG2qTTXH3v3zjj%2FNUP3yRdb9xwPuoF3OyglkFAb57RTept1ex4bvivX9hd6MeOBZkA%2F4goGaHJizclpoybUt%2F9lndKR9SVD%2F0YDRGK7w2ceCXm3nfyT9CSmJ06oYcEEnhuQ%2BAvFUygLanBQR4eFzCQaetiO4KcQe3wTOb65hIQw0ZuehZIOzkTtnbiPHdW2wdmQq69OnGrPUYjMwLTURLu8Q%2BnIAF640edzAWxy5XbSJt%2BxOIvyg%2FngExbcQBmGPSFBWLVZgaIEuFNF46ArSKnuZ1o8v%2Bf2la9jBHU0mf6pywfwjKC8%2FnRhSkmxnC1x0Hh%2BYpsiuRbB79n1kP5Drh7%2FqfkU9uMtKKP%2B51X6PzyAr16SgYyTaW%2Fp8%2BE910wspJYUD98rJba2w4TDqtP3EBjqkAc43yliJflC9sVe8JWrffV1RreA4Ch5TPy4NV332iTkOAeUZUuEa49p5ssLrrrq19%2F%2FK8PmCzKm7y00%2FPSCy72lhxBHW5Ds5cwXHJ84F4cIakOue%2FBHcHtOGOYBbNxfeVYUGsKglfCxgZveTEJ2fLN70qkfAXlcojeTl9orJ173tEF4kqeJoBzlq8lh7D1YQOORMUd96O3PtZX1GNkPAEkijEd0V&X-Amz-Signature=8fc479f6df837b25efcdfb071981c54bc7e6690b86ce04d47c20bdcf3b4c524f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=d100a13aeea33da8fcc338827e29ad12dc6cb27ace0070b73c601ee8c98637a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=bb778db77597b558af8083f64ab9e79652a7f30ae2f8e12f6cdc2ef333bcc7d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=2a9dfd7ea7a57a0458a4a142733ef95477d69ded171a02260d2803d4d834538c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=3ff85845b77fb912a4b7c80a4c5cf1d470345594bc03977d59fac2518293ea69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=cff77b176256b920e6e2075dffdef303138dbaacc6b2b9c11a0e100f391afcb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PAAURS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDk2P9mKe81kmYNeOgg9rLI6M4a%2FtiHDPHbmA8BO2LB1AiBLpew%2BZmb3qVIR%2Bw5wQ24WOEvu9B3OqrGSpWKNSNLKrSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMCDf01g9iS5d77Rp3KtwDiNJdNrsznOxq1UF2xmbfmKgRJ7REiasX3wGv0n4AQ6YnOj6edyv05ogycI7CoMWRS05t7Yn%2FwrhtXP9ZJks6YyofbOBP4PoQWKwp6xDpbkKLasV9WF5O2qaniLd%2FG7Z3hCfcFPCE5cAtNAkQB%2FZwN7kL9GdPkw5x5cjPjE%2BedMJzcF8DBCaHyxwIb1gdhyjg02Q7SkydluynqfUOjixXmmF%2BqnmazmXCSMYp14S4ZoaU%2FpLTD%2BWeIPQ3J%2BnsxiL14zKEcBGSqIyKtWhGUEn8ieP4y3xdgNL1NIPsDgBtKdHD%2F7P6WsRUPmd4SRMzCF2vMBbRO1UzJxMjbM4OMK69clXyOPEnB%2FiZfrkjkKOnva2zBF25IVt9mOFsOiBXYEEw4qMyTefnHWvfLShuhfuJCjFX9cqiqIM9eE1wqJj6kperkcexJosXMwLyPhRez7Kh0t7xMrgOQuQ2hP00Tiu2n6IxNn9yVxE%2BjVZaREDq9H92f3VEXqET0VIAqcxlpTqKGB%2F4tUi9anL5yb80%2FQhpG04Em4tYFL31eqtBF4rbn4HGzuh8OtP2HuA%2FlLglnSxAPy%2Fe00aBh9g%2FshCEgeRkJXCFrt5xLiCt2uhpZncHFzlW1lcCHtLrBCe%2BEVowhLX9xAY6pgGXUxp5mhtbdwK%2BbKO0%2FfOMwANwvppHEbr%2FwGuhG6VHCFA%2Bsu5AstZtxTFgACZSlNit3vCR8WGzHzdLbcxSse0jZYvDQ3lIKlEqgK3HDim7i07pQOfPsRwygvX4bLqvsPmlxXo247rdL1Jz6r3IYTBEaZEjyCVelsM5C8er%2Bd4w5xlDXX9a%2FqHIJ%2B1ilzHjeJduaMWoeOIOBuAVkKswNBvtDF1Vc4Oc&X-Amz-Signature=5c0020df1c39be0708d07f61f003cb71fe9d14290239fd378d6238063c6aa4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
