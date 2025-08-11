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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=df8e5e8075b247ade89069d91217bfd26918108367d95aeddafa9a265ec999bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=3e0a05a1c233d965f62a65c50998590b311e0a50234c23006c57dce4eaae2eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=8344c51e327a779a708082f00478ebccdeca8deb25bfb9a757b64da989126bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=3fbd305f4bdfcc2d681d7149944ffb1a4ad9a86f69a0ff8b26eaef5cb7839f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67CI2FZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4uuRIQ5lkwZ8dRQnkB%2BsxmEHALYsMzC160gZMpy9wuAiAOlrMDizmdFrjmCD7rX%2Bdh9iQUqapzFSiLS9hnhF8LqSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm1CJiCwaQr3DjMUUKtwDMsyas8XiNq3uzq8iA9H8JG0o%2BP8waSriHlKX%2Benm1D%2BAHck6T3vTDJIbnO8tsZjo6vUvLn3DOppEMU6jZzLjQuoAS9GT92trPa%2FB11tUPqsmJKxIiTFLJBGH%2FCewkLokaNZ01JyP6Cl49q5kg1K22%2BUA3%2BPAY1Hnjj0hZrJLi2SJoTaM%2FKBoq%2BNcEUhoU6%2Be0TgFwWlIzJM5Rr1%2BZE4BBuIvKb1FjOIi2XNO5YfHmkBFlXDkTG5%2Bhx5%2BgiyO7bPFn6z3skJ9hCcRTdUNUp0HH3bMQRhIcQ9yLCYx26kbHA6dq4sCk2Cc8RiieMy%2B3Hx6Oo72FM1uIFOi94PJZQj%2BDsbWq8Ik1hQC5VVYC2qkDQ8KnDkcid9i%2FfK%2FZAJ5rAwinxz44FdMOsCif8HuZW2Z%2FKK58f%2BddZIkX%2FOaynlhLj9fn8BYQPoMnrLupoYuMb%2B252q0A%2BFQLnt2gCTUuPIKvfJnpYkv2dFhyFpfBR4FFKXjYoW95fc5k8TkpF%2B%2BuHrV1tdvh9LY0t7H6u5YrhQ1W1PJ2gY1F8lw6f10uRN02Vgk4uCuESFo4hyn18cX66joFp3BJpm1j28mH4YJ7dJ0S2d2j%2BZRnhwxZLdToCcVuTKXuNlmKnHU5G6UqBAwz9zkxAY6pgGHUs5GEb6%2BrG8jwJfurIG60SqukODPCvrGdiUg38QPRED3mCDBzHdzy6DrF8bpx631cSCd7Pu6I9N7iDUtqH1eZEWHraa1KHfTawuxhkuX611XhEjVcxBjpEsZ5n%2BUzWCVdQ71J58nmBHR7S%2F48Camv4FnqfNOKYZpPiZD%2F0Zv7jAOLr480Sxoy9PkwXYcz7N3BFepACM0quDp%2Fdk03Foyc%2B52lB23&X-Amz-Signature=99125d68b03ef058d281a961e475adb4edff89487ba36ab23a503d5ae14f2f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=9475406b3bfc9c0ef30481199289bfd5af813951748966e1d12d59bf3da20bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=1b54cfabfcda6c0fd58ad5d621b68e2794711e91cd555c771272cbc3c35d566f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=0f3a6704c9a0af98390e75fb11c4c1d1b7a0daeb2fc092f2203428de4b7d5714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=f39ee2f647c1a9c4ebbd14e8a3e9a218c103911a4c8fbd2325203b8782df2c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=5f23cc8e6cd99b233c0cbffd4ab2607ce17299a1e4fac319896642ee259b86f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHAIWPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVYll20fiiTOzrYfg4iY5shlAdh0btD0P0QJBF5Pv9AIgG9kRJP7130gpya7dJ1N%2Bh7lX9Kk9HdEzR%2Fxs133NHN4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqkWTR7fe4G3j5opircA4D%2Bvst2hW7xY6PDK5EV695MZ9VSO%2BIhBVACNfRX9JDdYewnfO3pwLIxD0sZMcDfqn04LC9QoBRYi7uTQFZzUsIrCjNE1MX2XDdjadn%2FznwXN%2FVBqI77nUkgzWsSyuDnX4EAJnE9L5JJu%2FNu1CuY14ayPnyQEtWIec3gr9RpgBRjGxivTt%2Fx2AgurdrPkFTbSvhmeyhU1rKUWrDNvr0bS%2Bkor6%2Fo9EtCHSZlnpKCwk2%2Bpk7csbWYjznn3RDi5jfezOKl3wugr95JJBRGPEIBpi8%2B1eKZUIyh6b4EHAfu98Fjaa0XB5Jdf30X9MCnBlrWT0d2Qj49f6Vewsc5i7ZzTZjNhslmZ%2BraawEWpU6orXX%2FqPdQ3MBYZI025gx8iS%2B0zd6hjaWwZWfaOlEJBOlO%2FSP0RLfnnpPJLVPM65qMpjK%2FMwpAskVgRJWZgqJJW9ig1oZ%2FtsAUpkN1fDbMK5QzBt7WcjVRUylCc2emj4mJXlsI3A4TIPJxFlQ8bxQ9Zxu8y%2F7OAuarqwqgaCNXzP0u2QgsvZ58vqXJTov5vhGC4OZqSAYAVvVApZ%2FdO7cfSeUUlMUCMH9WCxn8zWvbEiNoKEAVWSXI%2FhLCigNZu5b3sq60bhHVelVplvrmauncMJ3Y5MQGOqUBRNjqKrrs%2B%2B%2ByvKD4dOvcZVzwCrWqRx8OIf9SEwKUSasRDHvShESNGR%2Fz0d2%2BYfb1ZHFfNwPmjpbcYtpRI5RYWURLpi9mkn86YryIW0C9IhZ7jVsjPGpx%2BpcHZnXlUqIBgGRNgPKot7fTy%2FsxhRFCYAoD%2Fj%2BwS9nUX2fvB%2FBk8uS4%2FJg4MoFjX0BjgPdz%2FbtZ8qj7Ddk%2BXQ%2FipooWEF6ZskMLvmEr&X-Amz-Signature=7910e04709331e175c413bc477f752e6954064af99e11407c7c8c22350722766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
