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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=fa584f37356d86b5f44c22cb1939db2e601b5f253d211920b48e6dce572d406b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=672ec6584de27afd0e8a9cdb9f22d673b1d9592637117717aabdd0e1908f8352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=58bc7cda18c461a8c2b652d144a05e6c8abd0c8dee804cd3929f6597f5e89c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=d433e08b8a78ad2947250c12cd318e7f24dc9e00dbe48e5040333552a94d077e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MHQIR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9WCFYtsi%2FSds0e6IGrfYT9RACLsvOQIhY0BwVBq8ixAIhAOwooSlrhXIP1N35IEF3HGUPi7oSLeDOcvuDTKTpgDOKKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjJIDF2Is2r2wmamYq3AOuMFnJvpJbvg5JlRu9FFO0gCC3dSzLB4JQxSWll8tf%2Fr%2FXzTp09V9KZ%2B1%2B75WnkfBBshKY%2FtJwDkrDuJbeRtaeVhN9lEeOmSreuQ0FNvgADEcX5GdP1bx2PZIAr0WP2%2BDr%2B949gDRTiKnmmBMoiiilDYtIZHgao9VZrcIgr9lATAfgDWOBu9EYHbUAQcgRO6rmiV6VaJJIKcqhtImOhh7ULQytEs7RDQ6F0Cdo8Bz4XML%2F%2BVKQxHHhx5VQj3CFx94OpH%2B0qbDJNm1I3K5uQiI%2Fjil9k3edNU1swejzjOBKlHtUNmgDDeM%2FChmx1ou7RjLpqrGQ0uBWHtDkO61AdC1RAIYBh%2FUYeiB3e6In0cwQPOZjYvIPdmpbRF3n1dJXdx%2FUSa9JzHZUX1j9w0AWeTWQwumq9QeWmttaE0abvr2zf4QAgIE8s2oPkQazeIVxhuCtJtg%2BNy2HvjqyY1H9V2BSjHWoJhc3xhahayM8xxSYAWWxc8r0rjv9WqO6wwNcvA%2BqukYIIazQPWzS9jMdsrYTrwKVZZdQ63aKeygf05x2%2B9To5S9omsUG86m30uRheT02THrRPwnIcP%2FnBfRIf6j2tKmQxzZ8B58jgUn6piiBwm8rVhA6g8i3raqRzDCv%2FtLJBjqkARv6qMDAhTcBW6%2BrsAlXsKpmNCc%2BxeHL91CLK%2BW3%2B2dP1urrT8p6u8iWaKcLyq3pUDRslvZEZSHY1vzgVo95prdjkhXJWwK29%2B1ZyN8ZOcgJ0y98F%2FwzF50FZKk7Wc6bTE0RFq035siotBvD9UYcfIvkO%2Fvdr%2F8NUP678rieSRFn%2FFD1ErU8cGRWe65k9hryCPlrtffZKcNm4pjnUmJJs7evqh2R&X-Amz-Signature=a9da64a275bae6b04f8e7671a928b21d9f2b47dd0e698239605109832b70ee47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=b0a4d3e2a70c9a57afad247c43b4ae035884166deff12e7b6b22dd9cab18309c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=e1e1cee77d56dd476916f179e2d7889ab9cbb14339745a9efaf0293cd7bb447d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=f107d3ba9db77d6b607010a3d865e57c610e0e1ed33521690e6b4edf46bf308d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=f74c83f17f6aecec32758f1dfafea9e8b6e9ea48228b2da00e5c687042d67bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=b0b00fa9419242abf60ab7abc9693ce42e2932c892c5295a232252a45450f074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDCAVSX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKQDbnEzS42%2FPC6OHe3vK4Y6AcdziPB0hwm58yqSf3QIhAKbRXa%2BN8bieZBtkUyYUj2Bbk%2B0F%2BK9u2UTgjg7mTvTgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzIw3G7UtFfM68xA8q3APmn6JMEiIRRmp00A30%2FTYz7wfrJPb1WIiCCCKf4Rgt1J4xwnDYke9fq6ZSqkYep39ZvT7qEK8JY3uIdIAL4NK31tx8blt9bGW6uAHwGtC1gd6oRDpx32wi9OIIk6D62Q0vGCTWEaaMDh66%2Buqo%2FnYSO17PKxH5JG%2FvE040zxIp9oFmqGvVhW8d3YIbLw7hzeM9xSNEasNxpjqmGeAxB3fRN6S9jz7pzXHtxwcAEAgpdojIADOANT%2BBsorcwnE%2F80S4bL5gTygKiXeTqj%2F%2BlmwAch%2FibOqY%2Bc00SY6fA3xz23FrJRh8xy74o8%2BSm9yA4zA3gvDxCc%2FqCSNnm8BAJo%2FCEen1SJotr2MaCLetNYXMncg8r%2B35hwiTVTG4ERjp7AtzSx7gaDSULVO0%2FhJvju0%2Bp0Fv07QNBxCYpUKtlkylzVHEq0QWRpQadmfjdrYUz9i0RtoZCtdzNnvu1%2BQ6u0VZNwwOSplo8RWuqJNbvUPV4of1nNBIuHf0i5g3%2FPXcLZ01BKu4vcyfYwFxeOBtBbcIJy9C02G5Ktr2ogJ9oH%2B6rW5J1h3%2BqB59LmEVJm7SeoQiiwcj%2BiZOJOIdaxtzwgqy9dlL62ODDY5BqUS2XoPsmyXTg9138jRSmZGRLDCv%2FtLJBjqkAX%2BH6cJuWJIHrvv2rBj7XJ9xvEgqNLcBoPeNLbxKgoZoqqeHpqsFxYAAhXViKGI70R%2BP1y8dkX7csQggnz17AS4vsW17Pcoe8Yd3a0z4qCEUftTgIFSNGEBhYlG4kvvZBECzHcJabGAhFKU4Ov7TRc%2Fj3W0XM%2FoXqZcnvVpsXDn2ULApolIqIsX4T%2FiEi%2B2cp%2FQZtFl5Z%2BlZol7IlPkhmz6RB%2F%2FQ&X-Amz-Signature=7cfc96429ccbaffefe51ce3e525300715338e4062bbc44bbb03bc9f9004d9bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


