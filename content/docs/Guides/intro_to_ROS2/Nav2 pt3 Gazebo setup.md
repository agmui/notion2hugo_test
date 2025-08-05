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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=0ec5e79b9f324d44f363330ad85f3b617b7d9b5fc4f4d0d3c140c982d0f41271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=41e66e11948bdcdc9476dff7d5dd60565607bb3afa151b7dfb9db646b81261cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=62748b6d2f4604f28e6d3bda613e8b2c4d6048b118652bab35534c31eeff09fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=f683a80f2dd12d6a8e1ef6de4450e0e8d23bd3043c69bbd82a08db9d80e168b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFUTTIG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCHBpeQlv3Z%2FGeUZTZPPxdWwAh%2BHJsoTw1U%2BnsSLefaIgIhAI76BTjueG02vw7vrZeOMSpLkWUioQ4N6JYDFasZZCbCKv8DCFgQABoMNjM3NDIzMTgzODA1Igyg0K1R46MLoNwWAHgq3AMHTFiue5sWDfx%2FxufQyT%2FmYQkKmgTGI05TjXPdcyrkDlowPashRMeN4NTa%2BTr8ALibHFGFr4zd0V0Sue0hSPLlxHloHiE3L0w2P9Je1sPURAjdYiWAHq5ixfAu413Jna%2FBTlG3ssTl9DgWho8Fy%2FZfhXOyKc14DQtp2WUbSLlBTSTTpFce1YxhPuG37atgw%2BCqSAhu9rh1C60e9nU38e5JAUvxnwsXjsfd9f1LBvGbJhhKTn9RB27MjojsbkIrh5WdKr0wzamyBo9jIhO3idasj02GYxqZ35MKWoyIdiTxiMy06ZzovzmPSHGUzCPc%2FMl7prIhvxUQXzcLqQApWprikDwgRaqW4%2F9UFCf0CICeM8Lh3pg9aUOI93yjJeCbJkvVCBNUDog51fec4%2F07158Jeqf5Uhzxh9pfN%2BrcbWwJpOFMg7VvqtG%2FZv2z%2BEA8c%2BQO1RX%2ByFIiqhVRxdFpW5qvVpQaDTKaX0Kr1yG7nEEfn4YYhJKxONjkMbyzuOXqAhBpGea0WLAUZWnWZ%2BcztcKzREAAksvzh4Pybd%2BaPUXJ0nPSoe1UIRirBsTIzdzprIY97OHKUrPctVNmbaKQXzi6%2FZTnvLkRD7r1tGjQDsP1CygLJEr1t3GCVUjVBDDm2sbEBjqkAZwEnQku9gso82ubVW3xhBxYNzJ0usl8zhTR21At%2BlNecb38dEP8UP4mvXO3qT633%2B4mbtc%2F45DTvUWBt4twh0%2Fnk3h7a94er0hOH0F9HMudck65epgk3bOFiaoexMvll8sMb9A%2FdeD75Q4kntV8Vew8xv3pgWOux9qcsX6cXvLPSTcGFrJe2cOmw6VCmQ2nv4DRbOjil9RmuvyOt5q5KRNNzbCy&X-Amz-Signature=2a72edecbcc15e471dd4419d7e0a532a180dce66f449afe7b3937affcb2c77d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=bb512bb1fa0c4a3685cf3dc8181cccb27b9c0b240e70fa74533c8ce52c72d507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=13e5b3336cc1a8afadb2b8ffd4d843ab3ecbbd859a0b9a0d83d5d238ca7b246b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=198c4cda47f07dc25912b971f95a2a2bc6a39db368e2146d7a6646d7a11ef3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=4497f8b51517043b9ff95af00b13c3fe90736a3f96eeb9d49ec3b81e2f7f9d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=9ce7b5dc66bfe41f8f22da35d4b758277ebe357eda584a87ff278bee8ad4e45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=9e22c395f3ba21a1459160f318bc601a712e58458bc0924d5a2db59c76412f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
