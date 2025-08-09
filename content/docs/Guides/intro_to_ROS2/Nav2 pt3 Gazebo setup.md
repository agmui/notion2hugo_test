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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=750e4520a693d0c1b606eb60c98eeaff9231e9bd80f4087cceef4974d7400af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=4359f61d7017d955030c7d4dd2c0effaf0f4523a879ade97a07f3575528eb99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=20f88c1e9f75ba2be347235c6b84d46fae09e64b24468414eb280948a7052170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=e17639ce4df3360de272f7e0599834fb93bc6b222fb92355903f28538086c6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXX2EIKA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCxYc136I5DzLzS5anOGbt%2BUECNu8wZsyZcauK1GB60FQIhAIlCl8dFbQzITioN%2FA0pZ6%2F12%2FIXgmlYEl5ADL76h0O0KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyk2m7TVIH3TBY33skq3ANrP0hAwCIUZKzRPBtPyJDvP1xe%2FpY4y9gQhc%2BVQmnyKsUxNarL8Cz9QSeyJeN6kzhI9aWs81QXpcktLfY04gGvXfOrLg8YMo8PgZN2iUzhVfnEleM7mF4%2F6f2Lm2YpcOWYYoGoqhLzonq5006ClevuXb6mtj7XNubl63F%2BnvElPbxAoaXC5e8HyLFxcBS8B5ZMk2gTELoy7VzMY8eaKjnJ9vQBJxlgUSY29FQFyMzS4kKf7DFF0Tkibjuvc6P8cWA45Lk9Ys4HfWQU%2BbxSsZnv2XKfwEqluNS6i2S9%2FKVz0DMkwNlhF%2BAZDScvKHtMGBa%2F3MOagqoGN6C12%2F%2FYfQIK6qyTSh5seVb7wqjizVqyvsJ%2FbUKlfZrw21ia6ZkQs3dhIiW%2BAX2zwmZ3hzRemfDzRrSEucswLNjPqJXA3jP3we%2BgnFGLA%2FGj8ZHXG83nZF5QU00rvWIK6ix8Y90b2urImuUnKefgfEbo8yzHU6hnSJtsumLpT0zqHADFEfbJxjtfx5oHS2uPNFH46riMOEuCQ4H3sjX2KrJ7KbDI%2BTIxhBc2TMjln2%2Fpvpw5NTHoycRsMoS5ku2YaPjEhDsv8PIZVPyySSRqBAvXiaSIb1ni7%2Fc%2Fr5QGmgr5QOxpjDDGq9rEBjqkAUQEMd0R6lvj358joeq6NtlZ1zaDDfD%2FTfoW8g4P9h%2BPEevU8iYWChXFaSBnk0aNqhGsLeT9JkSmlZ5w8oyCCueAfUlPYTcDa5FkGfqJj90d2MaXcLNYcaH806%2F2s9sL1KZVwzNmuKk7R5d%2FlteMF6nXDIsjAA3Xob0dlCwKDku8oh9dovbqCUmrpISdBZ4n3SLddiGWdcfnnkkjq5P67IgaCxDq&X-Amz-Signature=89197c8413951b96ff1ae0547211155dead107dd817590ce05e75bda2c69f229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=fe59ed95f2c500cb74438752ab91db511205ed0873b598ca0a7b2f711accc162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=fbd6883dcca6070ce84572355681d8ca2fa9fc3f5edbffc5b5814f123ab0e91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=d8a8336ead8c28cd66e77d694842113d4514a7f5d829ae96fdc8b1687fa5c06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=464040d31fef20fbc526fe891c45708be5f87bcabb7d4ab19a31ff3d192f5ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=dff6c6176618104aab423f01ef7867b1ee4c3c07062bc69c4f9604cba6241508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBK6GFU3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGHjmbbo%2Bw4QNP9vTcO2HsRJGqwBUfiZyU%2F%2FUkMOaWJqAiBs4KGVYHzhPj157iPfO%2FIAyWHN5hcnZxhqrd2%2BJeCmASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN83tAcK0JXUw6UEbKtwD9k5N3emTd3hKsAeQPrGA6QpiqmH4CkzuGsE2i7iKcUX%2BWHajtztcCAvku%2FJiKlNb3SQjYz%2BX52zTe6LJaXmOGUfK%2Bcxp5Bs2NZw0W8d9LTTWq54exGaHMAG4j88Dy1r7EZlcQ6ruvE9eKVhjGLUnrtAGqh4xMgBUr3B%2Fc6t6tJ9rELJcfmYK6qArCvS866iB8%2F5bsgE2ekg7o1dtB1NjNiCjgGtghZHPpNGa9IBOJmiIBrPO3w8BSC9HGc%2BDkoyiLVhqxPHQO0TEZGUQT6MxmwZz1XPnU72If3L23sIz4fe1t6w1mVNI530vXGfM58tTD9u0TxnoBFO81fjfh%2BxXSD0Kj0pLXjRuWvUQVY3Pp8y4fKjj1%2FXiMDjwKAOJEr9YbZcTReMDClZDjv%2BedMolwHXMqJZ7Zvumbgsd8jRfllIW6Dc%2FZGxEgMJbuGy%2FZMvi%2BvAuIU9sGwEsTT%2BBkqdp8zEGlj7XAD7Z%2Fybgias3oLvFEaDFudPUyN44rNajIZCt8wYqwG6jmJ8kQ2%2FFq2hm%2FVBGOt74c%2BgtaLmM%2F3BoHMg9gY40Hbx5kksHMpXuVI222WDRQlzr1wCTWp11G7laeYDVcH%2FkMl8L6M7lT5z1Axc1Gdc%2Bh8UGsSn9NrswiqvaxAY6pgG7yIWOpsmvNeQuzoYZs3ogKsvr2z1KGcMzohm5OrdAx05g%2FXwwA0lT%2FbTFgHxujG0fSY23MDJWlrodOI5CjtjQL7dNkPzKebcnYi7TAdD%2F%2BY8vGyM6HXZZlJ9uKIujM1lmGj0KKoYgiry85vkA3cMt65puIt8r7c4kJ%2FIgfq%2FN%2FGmyS%2BlW3Mv2lhWVBY8bP3Z8XDDw21YyfVk10TZPARoS9Q9EIUvF&X-Amz-Signature=82465e2308ba0d1e647ebd36baf853fcd3ec45a66ef92746cee38a68edc85492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
