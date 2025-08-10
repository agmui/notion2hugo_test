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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=ac4ca8504b3c7f589e5ee9faf7632d9be58ed4c456668674ddb9c401373a5c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=c6d40a4bb97cda443948d00f9bccfac7e0e153f29b56ccf6ca183792ce8d45c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=c50d7507fe8c33139f7133e66e6a7773840b3d2e6c9704ca26769795e9411479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=a429bf594008bcb54a91729e857e2c86687fdaca210aae87d863bf11c04267c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRCYY4GP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDae7vHOIHkNhuOoEUgEYm83FcR1Q2999JmNMzdIzFEDAIhAJirhswyq6cVXqnXnAKLZCWSjyBfgL9b6G1l975BMmiaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzufCb1ycy3bY9oDj0q3AOWzmVaU15S0%2FCELf%2F6Jkc1TgR3ZJjMVKitcGikTKdJQtFjwXB9jIRxRnqR%2F0ckO5eRWqYWA1veGbWR1Czmn5zk73P3qLmvTmKJNf9slf%2B%2FF0lHbnMDQQSc7WHS5zH7H3eISpCIy96Xp7MHkRm4gi1otOBIIcIvtbpkE7ZbCiBirqGrg9MqjU2lsaH2TtaMK24bUBF%2B%2BmJA%2Bpi1j0tejUClIkuFWyUk9aSt3n1SxVyy3gFGnx7Gti1trOKEZIiBQSpA3FzJPKYwIj4FMYqNYMWaen9ayjvNH2Qm4kfI5UnX%2FeZ6Dt5CoQubQEIeJB9PPeG%2BD%2FveXpWEGricVHyQ1Gg102vBrdkeItQ%2BQk06WYebjthp%2BAIT4V3i4XRz810TRhLtYZD%2BZ7M7TZ8kDrIGzkObBtBZmDvpUf9trfXDGVhr4v2ZYn%2FGSYpVqsmzDnx1ZR6l9kOPnb9gOP4gAlqbbL1J6mAvpR6MWiiukLtHTG3Bey1YzIBqLkUX8b6UmZCSsYurTovejgY2DusTQOc8Gvt6O%2Fm799nagr%2FU01JhJEMiN303gR6g4dr1jvRTTpXQ9dELPJGkBKGv2k6By0rRsUAlAVnB%2FWXfqtTqQ6dcpPIahjwcVK2P2crN7dVneTC%2F0eDEBjqkAUsTBdiIb4dxo7zfpXAyf87AxEDYksqFWTxG%2BSzmy4Lz07AqJ14YVE0AzLDb2oWabqLr%2Fl7R5jy5NGmzxhzwlUzmB2TPBwUJNYJO4vLj%2FuNS27pYnWJXJ%2BxoZZgoLntVoMtSDe489v%2BBkDJ9Ca16ZHjpEIHRc0AZOWv9lnpeLPfL4AdT2OvBpqkhe1MOA1BJWdALmAyyfqasgrfcSA7bfdSiwP6y&X-Amz-Signature=7226b7944542336995d3332e422cd99ae12ea12741b95be77dea309d316264dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=b36476954d8b33e3a1f8f531f78a9ee6e070f18e5cbcbc01fd9d7d78f0c89853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=264eff1922b3d643752f174a23ea41d6196656fb6ade7ac4ef8a234a36f58769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=e73b43a54e4afe6a3224717519868d478014b3937eda5d9e8d1a73491a12f71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=f809e4a256ff7d930c9ca51ebd54f242616186c311e2635410793dc9895505f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=714fbd7da109196a303a9b9d26186fff52ce6a9e64243c87bca13412a831897b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LB2B2J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDekrrMSF18cjjGOsDKF9IghwB2qOKdHjoQ0SSbJAfi1AiBcyujolf2xZ6iU%2BuvGZSeQggEviSiT%2BxMYSMnBnLTRqyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMan%2BajDhIPJT0YCmCKtwDjuufQ6hIwsdhynyj3fXMOnAcUIS2k3mEphIIyV5qVhGuWeTp%2FU%2F77bs%2Bf1s2SkadNVs5GiQ2AducCq1gH3K30LExIIFzgZB6LeW2cAyQi6e5HAhh%2BqW%2BpCLj0zyqCY0EBCkZlk70AhjWyEsPrt0ZEUvU1HPsC3NUrCaLfNEd1uwcukfgk%2F8TWgsv03JFU9Yga8uQ2REspbI9LVhGNAxAlGS%2BKBban%2B29jnp50URydtJJz0BHWTt56W1nNaUoueR2hKBp%2BgxAj6W3CTSREbyYQ9yExaULlXjAER4SGfzWBOr32IVlvMJ9UqqllRgMNSOfcOuds6UEyrOw2BLRLl06izB0juZoHtHYZHImKHfL1fBOyBElymFWZ%2Be4srG3mibsB9luVQLxkEoRArluwZB9NJlx8ZgmGfI28gyzbW2YGqqvafzIHk%2FNq5NwbZGDKAb8M8t7lJtb%2BniBRuiG3e6xJkQYtTbHOZD84UdWpPLewWptPjfDO2h7ka9NSwwDAQ15SP2Oh1BLAJuSQQr4mctkc%2Ba4s2LvC74IjjRK5NtJ7LIGC4lWFsnf87zbWSAxyaU%2BYNagzE40gorAxAhCWq9dgS%2BH3eDTa2h%2FPfJ%2Fm8jfoYDOPjTnPjA%2FU6T0b94w%2BtDgxAY6pgFutrLXVoXaK%2BuTzHmH41H40OjP71egL0WJsIVVgGvO%2FKqR8f8AGpYFbejNPwqdC%2B6G%2Fg%2FJWvAsBp%2F%2FRB0PUtIsUkjLOXzlFBNqFPU3pHGweObQlUPdVEs0yS336pe%2FgkIxHnZPezcva8rLWDCY5iuw7IaRGDZTDF7QQHinqVZsWR7ErFVYliY7QCm6A4cgkZPLW7Yn5ui8MJ7MVzbn%2BgZKlvANyA6c&X-Amz-Signature=f1c516ce565fe910a2d2d250914d3182651c82f0a6ba049f2a3d5f566b28d393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
