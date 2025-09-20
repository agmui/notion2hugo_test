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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=5778faace16adeae88440071c5bd504028ebcaafb8e87b2605a8095fc06f27e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}


#### Outputs:

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

#### Params:

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=8f7353f970ee389d84ef08c3bdffc01ded2c2280f811eef071ebe488e5211c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=2425b3e6953dcc85823f323b362b1f8fa5d802e36c4d0704c3a3a9298662f562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=5c496ce68fdbd00afafb2879eedb2d8871ee34ff885782eb3fbbb4dbe8d217fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "17-21"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLSZVNG%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDYIQ8w7h07OeuoAqY7AdX4F7vQubtxbDJ0wqX0MVd3NQIhAKCWM1tLd8KqkX6Z2pcjgOndphAjr5dvVemXc6h3iEKAKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNbqjF4hnxIc4DQsEq3AMALD0BcPYNj5%2FAsmY8rO78decb2TCwzWbm4WOBUiotr5hbm2GyUQX1VtTkDw44liMcS5qrlVMMw%2FpOhvnPEt7q06kKJoa1udWeS7hBci3n3mnaa4eT2dwpOFP8ROiJd5hXykLE8%2FuiaSF%2FuVauo7dtkaHZKE3fsjwgBzQtBhwck3gVtUjgv9jAmg14Uy2uDLiycTr67J0AIwynJ3BUg%2FUnSM%2Fj7F0Cb8Wc4daPiTz%2BWg3zKr9szS1eELmibJaYYCq0hec8jvBa%2BpzowIaGd4c6cBTjt4Cr8TgfZQGMbMR7fGxdQqHxhXNs1d6zmTOpfTIFtLxj9ZRWTPbqqfA7kFc6sRpZpl%2BNpxuwI3pUiESMFzks%2Feae9ZGkD%2F16Woe1Gj2qVzgLJKEfH1HsAtJHideafbMYSEkvf2xeZ%2FbT6BEvOniG3HlhyMBaMGdEk0V%2BlYjmIFqJxgi6mELq8tyKBj0lucMzlfQrohC6EzwFMM1LTEkZwXdwwnCbAOD2woVUZzyEbFIXlKE%2F8XDVx0ecyd2NfXROHfVX14XAidD67DGAUd4wFGEyP2ykoINMRU4XfLlIxogugG%2FtvHIIOYNkN5ZKdnFpg8yCU1Fw3%2F6T8uGn%2BP47%2F1goaEBIBOa4iDDM%2F7fGBjqkAR50hkP0Ary8FQPUXaJL4TKY%2F6QvYP%2Be8G%2BrCoV%2FV5zTV5kFU%2BzTMgVfWaDbWgdwIuGvYnZb76QfBa1%2B%2B42w%2BIetRl%2Fd3GAXrdNgC60VqtcP50x0qQqdOtc4Otjfppkw8ArMjQYd67FlWCt0rXzCteBHivRK52tO0lOO15raOWhdMRk8%2BCrsQz9n6G%2Fva6Z3W%2Bw8ePc2B%2Bkzso2RvQlhiYMvBJ9M&X-Amz-Signature=0ca3a09f46816bf22d0a1224c18c4621e0833e9fd9b779f4f091630a415d1c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=64bad64f435b717817d3659fb183463e8e792eb9272bfd4e4fb30e322f4838a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=0c8fc6fec90eab7fa33d08f8916d1b7462fadf9e9d2b648dcee807785d243d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=71bdceb6592fc21d3043baa1394f4301e8589f0d47b1b7442ce1f2f08999698d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=85eac324238840c055734dbc45e11a04e93d0b6b18b809b1a08ae07e9ae4c787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python "5-5","6-6"
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

```python "5-5"
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

```python "3-3","5-5","10-13"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=d8e556fbf753d0959246f9872ae5a2a4e1c7537d09e93452900dbd17c27b7f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ4TS6T7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHj35Bexq3wkP9qv38N0ZkflAAOxw24HHJXVr%2FWev%2BxgAiBDyODeHLDV9hZwxKPaqxyd%2Fbvk5grkVYGedRYzZpJgTCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxmhlS15W3Svd7Ex5KtwDq2Lf%2BzMSQU63qWIgsWrnb65p5NMOfrExaCNhFE7tzkOdRgKOsKESqU7yIf3EK4TxFqCv7srQg5I2HnPi%2BlLxsJhxWdMCNV7EEoeyvTR9V2dj2h8NP8x%2FaLql3j%2BXvtHs7LOM5mwLpKrSK%2FXpiDl%2B6t5wOAHtm%2Fz9ggjsfFgWu2lCs8YHnMh18gJIMdekOumbvm88F5UrgSAQZuKAhF1b1%2FNtRFsNTk%2FvJweiY7lAfAcx%2BaTZHy9U2D7cYwpbfrRSslqX4xN3hihD0MJR9sZAIfDSGdsf1v2ZI7VV1GuqNAlXUJyn6IaAJ9kSe3qMcFXdvyi%2FBCaC69BW9qaCsBUQ0IaWkUgs7qZilfBGWfln7QTnMUVdAvXChxJkAgJMVyB0X6LN1A%2BCd%2FP8WsbvpYPM4adITqM7QPI4NPP48%2FxnM%2Fdka2TwQnr3CfEqCcOfVU4oMVfoWRAExt2%2B8kFw57cjU9xN1TEJN1KGY7r6cOW8CX7gJUSCfdPe%2BJzkD9kPp9tJUgVTSOkvo4z4wu9j06bvVWESrnsUfbaFdTFB%2BaPQz36e1r4k51tBp3HMqzrTJuxiQpaSWeKps9MewHwdeTQ%2F%2FZ2mgnq2fWUtaXkxsismJhMCwppjc9Xe71%2B%2BBmIwzP%2B3xgY6pgGbzaVeRod4C215mgNwMRk%2BBWwOkOsmjzgYXREdkCbJLk8otzR2YZKzdxb3k6Bdd5ocFqzM0nnntLoF3OZS0rMVWiw25VoIHactbZoD1HagCQGviX3a%2BazMUFj2GA5DjwoG07kneG4NxF1SXi7FMjKvpC%2BqDBtBJiVAsuBXkUlTjQuL8g2tUSmi328KpprPXtD9rIsHHlja2pIz2FCMJCiL6w%2FZct6b&X-Amz-Signature=6731b0d758f6a90e88e03365ed7d2b69adb024c2c5eba09957ba36fee5dbfa59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


