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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=62ffe45d06d59b3b954b58a711610ba5bacfd427c0542a02ae757b7d10d53d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=9b374c9971572df6291fd4ef8115af58487af29aadd40257a25658721dd4fd1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=ab8765c92ce84fe923f0367d6faed124b81e6296edf62ddf056381a2ed549f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=474b2ba7e4b521012e1340371e928736de4c707baf85887a21c67a6ea17894c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7RQNXC2%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGRDbxnkB%2BzOl%2FNtRmWFT0cEFIdT1NKHp%2BTtI6PJE2rBAiAe4QXont0%2F8JpOPA0XeFmk3Sosej5VRg7wesx%2BNXHVJCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZT6Cq4IobVe4VdnVKtwDDbuy2HdCPFe2362hq%2FhiXmYvXqzNO1ypmSWQ24gD1iBsWsuTScj79sbgM7IGwKxgrF%2BBwAZH8b55iurHmG%2FrgbsUDLb1jMg5OSYXTKoH4ILmIP0C3mG3F5%2BbuF207gHlpM5muu1RwNbgf%2FmTA2XYjtjFhRwagTsH5op0peQo30UkqzR55EBRuTedJdkQSkkIgELHLfRQYWwgksOiKabocXIF47T4%2Fj3f5s1kekiE806eVccvNlMKO%2Bt%2BiZTiEi%2FoRMshSUhg0%2BKqO8U5zkTEb1Z%2BT4gbaAr03LzK6to%2FxuYPIXJ0o1vbtBgykIeFTu4U2ejT0qXSkfTqC6nwBWEeUEnPujhGZiceJG%2Fbkfoa8wgMOAuWKBt3h4tAYrFOlU5kmoeOFhmQFOJr%2FyPptib4egl2V6joOtEdGglf1qig0%2FSKXNcdVzAHkpv2BZYbGxO%2BPPr9EMvmk8L4t5wiVjl8oBESWXeDni20weEp5ISNiQbGzxAcAIpj4P0H2paVXtHnabwOXfyY%2FlS6xEQZCNb8BZyf8WfmNFmmgCGIOJCBcU9NwmYzciJEPpj2cOiT1r1nHM9K6sUE5%2FKwV5CPT5pm6hVcAYLL4tQKblmQ3H%2BDUz6G2wEWzV3Xs53HNDcw8u7s0QY6pgGHGA3T%2B5x1YX0uRD89W26a3t654tNI5st6dE3N8kseNEXE6BKYDgbH0m9EIXp%2F1n%2BuY48Ld3SrmyM7I9ZbyGeBz9JMaOJflrPEdtbPltH4VZBszblQ3x0B%2Bti7rM%2B7pwew%2FD%2F2sEbhCfOm4bHo2Laq%2FElGwcE4HHYOrvJp4%2FEtpV8KHRq5bTVXfGBaP0OJqno58EA%2BD66%2FhRBYhymdxjBaC50v5gpJ&X-Amz-Signature=5e73717ccedf73edd8aaa10d2099054f8fe4fee158ad6dc08f3aba3d66d2542a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=b619b17e1ee51cb5f61f32784ba4edfcac0315f605a7d6fa04f2a9aa27106143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=34374256ea8939fcfd94adb68d0ded1b0ca7ded0c08c74ba896c7ced0e51d18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=e54495fd1ab9bec6e2b96086298553fbb353db24e6d750126c0eeb14a668bdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=d0b53ac788a29e9127e3b4bf477a1338975646e1c4b1903c2be8256d8fab63e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=33156c790ce607927511ac23368fd09f613e7cecaae4f04938559f0a9a873bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVXZPHK%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCpO3uFC6MC3kEEpH9bsH4sgyqroYs9k5iP%2BVtpz7aNIQIgLk5LKpsCoyOdNbfEA%2FKA0YfvYegTc46Zf3O3kZrsAGgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE1cavMhbI4NDAf%2B3yrcA6KFu2YhzTq70ol5Gba0B2ZRhi8qPotsmhEIjCCGz0B851xmzITeoKkj8OIrcAfeylpLB6nd9QwdcYa3aDgUM948apXo%2Bv80%2BzJbI9Qutxwm9caUe0vKVzjQ9bCmu3L6rR%2FOarwBTgarahgFuiwke6JRUlubH9Ozo1Y7rvgIr1jAVIQLiDOWVcvVWmo1NkQ%2BqTNTTGLmLKyBbFVrnG9IT47HQNoJksQg0aTMF3Ur%2Fv9qwYcgIFA9Ufv3o6cvdS9SyMznA4v5t9R7JmkDGdeHO0XRMz8GDFz8DIYDyPk9GSs%2Fu%2FL6MczuuX2XCLMp3nqcaBlrD13aaGYHWtBkwTIIO98MY8dKbfmIqL%2FfBtb%2BznM0uGA63tZV4UB2SjNOHKxOKzq8815NIH2z%2FyT%2FMuY8F%2BhxkypWh7Fv1whZLO7drFRAPxoBFJi38EL6vB8Lq5laJ3OYzvMh6lwo5uPw5sta5l1TsYyYDSNv5Nr97mNeYcvno6LbyNh6mKuvKvSD3QRNcnjIcTc8CmDLYsFRlqmc3eIiLJDMm62RV%2FehqhFvJBI47CkJSloO7hbREMFI9Cj85vFwukdJMFhsgYM%2BQVUAM6iwdyqyx%2BrOS9gy%2BH70B8icR3CC8L8OtBxSINBjMKDy7NEGOqUBZUQ8rS%2FXrS40IaMREUb%2FGiNL8BruDOYkysJYkjARHN5DzboEX%2BxWZCRmOUuF7aZ4ZDbQbEUk9mYTKbOFkIlvLJcIHK1Ts1Y9VYcRSV10CmnzNi%2FBzyvRUnP3gNDaROGZyiwGcnyy6tDumf9%2FyPY4nB38O2w%2BmKxyzpON%2Fy170QTpQgnPhLOuF1cQkq1xbYkj7seA%2Flo1co%2Fu0G16U%2BD3Y1J6Wm5q&X-Amz-Signature=bb57de86b7d3bb1f34d97f2b499e90f1d51d66e46879a53c23ec699c6a2c5596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


