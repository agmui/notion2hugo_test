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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=dc5c66885512f012829102579a94587e73a6b025588b12842b806d21c0959260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=6e1bfcfc0bd809ab888078570a34c8fea76dae03af6375e7af950a0f103c7a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=e8e95379b01a4f82f537c822f64abb73e4cf44e6fa094873facc2caf85bfe084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=9cd60cd95b069aa6a0948d1653575e2a1ebe1f20e912510eb53256f0958a9dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3JJ6JU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC39BFIlB8l7PxKwx7p%2BI7sVsYwJ0fENUVFfXbsZgt4kgIgDjkmWNtXV6aaR94oklLSHsQ5NFkIgMI5K5oAww7ujDQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvFTzLWJphE5jx9bCrcA81gS%2Bqtnn6QRL3wweOHWhpJVOwBSyyJSYY%2BHAZtUv5HJtxshwySjMSjX2JJ81tPzekjp8jo1WBoOZx8jzJO92y2XuXkgP95yYc9MFKF99KGfiveAg%2FuRIWd4js9kt4qXcyFQtVwmr1JsO2azf6gpsWEeBALanCKHU3tBiFB%2Bb95EJTdLm8iKRS5p6Xgb%2BLV0C5dkvIM9AR7MDY%2BG6NyIyy9gYgHvj1cjRdCusMDfCAyh%2FsWXHWDHrqLUSWhju8BbT9A%2Fl0DJEnUx6Dh1hFFyBG0tGRIul4G%2FbU2bQqPIqUM4jFjqY60yibRw%2B1Zjvfqe%2B%2F9UUt1LvScWNVlpABBILIuUsX%2BjJhf0wiIk%2Fw6fKq%2BlNkvsy5MdF4cDqVOiGUf29Sp8TtgwW3HAUMAlJNTDFUXQXlwo7PbaN86AkH6nRS2Ctrtynxm%2Fq5EPwcAdLyYBTKDb8UAqbd38QrQYzKnwtqsnWl6AdcuBamW2sjbeR%2Bhsgb9kgu6RsqKS3iBSpZKLS6TPFwE2KB4ss875YyHoxuiBx20%2FfqTsu2O5QSPxFns1FrUX3iRh%2FYrwhLeYCdbCm3g%2Bl%2Fcc5IPNOFr0yhAv2GrP6RbHYclT7OLfcE3rxjehzqywnMhY8B6totJMIzg2cQGOqUBE2cU7ws2XuYN1i7BUhnGxbg%2FP5amAU7VZGenbCxqLqwqexU4s3w7RylZylY6%2BVSj1eRHfxbqELxocOPa4Oh4MOEPIGJwumrS%2BrMhJalAK%2BWPzyUX4lC2fgHiCAi9XJst2deGLSroIPe1%2BdvEvTZeI1DM63lUlRMY7hrKU1EIOddOewZuN8M44oh%2F%2BE06SD5URj1VqG07CLs%2FIzHTQkfsgUgyl61n&X-Amz-Signature=356b018fd96f1939761502a81d0d02cd439611f7a98f3e0914f69d1ecbe387ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=a66a5cc915684a4408edb2fe6c9510cd1724776d93b44bf26c674dc4c435cc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=2641c5144a773414f7b748b9c1c3e66cb8b1ac229f045ee13d91c9b02447d38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=396f2d7686e08aa89380655d0b2b010df55c6e820fd4f23a8ac34949fea026e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=7d151807c1a83573eabf8bb941acf9746d752057a8eb3b32b49a7d74e0903a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=b1af4aa5a5a54c5a9485defdba378af184cb5060d2dcfacf35ff9db9c2f313a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PUSKTA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIB0Hh5FC1kjSinjoUIPbsPi0ZFhW0kRE%2Bgi%2FQz5nqx1cAiEAxpggUYDKoShDB9oPOkkrPueUcHkQWxTrfkUO1cLX1AAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMItMYPx8wrLjGZlDircA1V9cSTR5xeBtqjtiGS%2FbQD9TJwcOSbd3ncPmGuJGuczkLtIcS5xIb%2FsLnvuv49AGqLXwIEtAelnnA7oCmu5GMtasArCxFXu8gq2eVfUgCwTMrVNqKnhOTEcFo9lOfuKCh57jbQd0MPlwrVrZgak0qFaZpP097SZHa4qgQ3ElCu4HaepRQr9Ye%2BXqMzb0XXnohUkzvzd8Q5CWhsaYtIt6%2Bu%2FlmVJUnjAherYVFFzPxC%2BvOAnL0I2xYi710ndcrQpcSWRhwjKhaGIqhDMFgkRBPMiDs4wcPAR0Fz7rEtXN2cTQLTz%2FcUU7TkMzVe0Coys%2FqT6ZgoIX8xx7vFpxGQJojxxlCHr18gxzk5Ggp6IgSyAde8aeca9HUWLoM%2FJe29bqEtuhiR%2BaFQChj7GSTFNsvzaN4sRJ0iC9MHUXox46hge%2F772TJsq%2F0k95uqPs79MYWOtIo6moMwGSO5gtyZLtUZLh4UoJs4699qIpmWyPT9L%2Bo4THdNfjzh6aHsz027n7vQArEBDyawG8JYgtOFhtprOu6eX3Is1Fn%2B6H1H08CR0q589fwRR63zSAPcp8wjs1c8pBjYSUiyXtPjzLYCzUidQ6vg5BFv2%2F7Gq9yUiqkfr%2FHW9B6kIw2ej2N7WMLXf2cQGOqUBuEb21qPb%2FDAgLv7c2Sb2vS73x0Eqe210hsUekiJfApj5td6wcCIgi5Fh0VXRBNQxyDst6QdT1csWEcwItlpeL51eWEvX4KwBmwNtDJxw40trIztrwV7YyJdPeyaNYjoKmFCPMiCnBxUAgdgtJ%2BTxAyg04YA6ySxQXYC%2FinGBwM%2BGAKcVIEophvyncIrBHZqmjm9BjQsgcx2Fk8wuv%2FP3CUj0xz1k&X-Amz-Signature=73e6fee6f63a11fa8cb1bc7719b4529bb3886a06b2bd85d03ae99822a83c8b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
