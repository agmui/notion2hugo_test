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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=01976666e1b9799dac02bd49a28b5de14e25d266f78484ed8f1f853bd194d1d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=3839386414ec62ff7c842a3484d085b5c3373ee90d05b8f3ce1c694dae71d144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=b939f68842d6536a5a36ad2737c7cd083270fbf8e15ce16f541ee18e70b53953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=cfacbb337f4224f48f29eef1fecf2c7152bf162db215a9cb028546d50f78482e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFJWCAX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAD%2FV7RpF0oKx135WCL8fHV9C2tjGb7RgzdNICzRF0vgAiEA77r%2FFIvxbNZOjcINfB4K4CF7Ss9QRgc4GPvBWqXqaAEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj7lfvHR%2Bd5KmQ16yrcA1aD8MEv6K6maBQVQkoVTMiFyw9EHXsQHfQ9nt7lnbJb6yOITR%2FRu9ueEbQUMiu7wmu8%2FUo2k9KocFQlzUj9WMvo2Vrx4J5VIBZ%2FQR%2FbCGHkIOs%2F%2BxbambyUKiGv2MaGrb8SAQ2%2B5OCQV1H561Aves7Hq%2Ffd3ace0uQXb%2BxUDwd7mYtXwgIsCJuWSJJkbjbqMpbuiFgaOe%2BHgAM6rSG2a4R%2FlL7FRfsDxVY7DyDNBApHcxetIFXOzFRDJ7rWd6CHn8lR0NvuTBH1ftT%2FC1%2Fz%2B1MI2%2Bb8ORFjYcFrWrEsCnhPDMWx3Za0KfqoRuy9uqX1LtDwpjHKpPlBUoXEcwJLjkCbV8LkXl8%2FSK7q5FlBSddGtdrGbGxFmhLbrn5Vt4qLPfgIQ8UF2G7xEkGjX2wGNZvTSU4jJvYJbzfUBP3T2jXCbbCQtug8mvMvfep0SGn3VzGoFVfVto9BBI4YDBSW9VItzLPubGYD6kDIuHwSlUMj1kYTmfbvCHhqrCI%2FozQEVvgSHDckXJiuI1ouBqebRl8EgPuuDXeHpVVIZCAbdL5Hue%2FwxOMJv1jwALfGQXWk8RCwu9mUJf7ouS9btROb0xOjp5VutiO8XQtBdhTXzn0yxlp1K7vFkBF9uC4sMMm%2FmNEGOqUB4pt337M8OGXL4YVh4puHDrZbzhZTCmYaw3t%2FrDAh5MIA0KiBpkrfuvJqDnq6vsotAf3wTO%2Bb29yRr%2FcElEaIto0zYewdYtNwb2trCpTdplQf2EG8%2BBcGZq42%2BZPiZ%2Fme%2B5x7Lb8xPkbr8ckmsASitr0%2F3tFTo64R7QipvLa75kE%2FvVLHEjVUosztrHg%2BM%2BH57sdyC8%2F4rcBmFbgpt%2BnNvf95G3RW&X-Amz-Signature=7518204c03e863d392155c74923cc3787d6396546174702976b7dcc0aa136610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=ce91ff0b17bda012c740ac9d894e8ff2366f2fec377e68cae675e326262fae3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=ca56fba5cb49846034f14b88790f9b5e36db41d0b8efa03dd87c05e8c2bdd302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=a2cd3691d3bf0c95678ac8d20357d0d6230bdc6176a3dbebcb8b98e9df34e002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=8a17a676ab64083cb97c258cd1d10157a84971b1f443e636fe39ac029b801c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=bdcb4c7b6573a54c1d558b15eccc953a055ed1cb6cce5d93180695cc1c3ac1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJFHBKW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2FLQz3QonHmpS1cTAImnqrMg1LkOkzd0K%2BNBZXDb6TgIgTxRzt4uQaLTGlbcito9OYtYQe6kwh3Es5gUCqw1wBsoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByOyl0t5bnt7JUXXircAxP%2F0puD7qvalDXvyGHWwn1q9DwxgXvgy4tSojHlSnyB46mZjNUBp7xxOj15zFl7JI8dWU8lACjXfzpcCDGwC3xinvvPcLgL%2FtHQkgRwp0GTbMel6wkTXJ1q0C41rO7P8FYAppekJl2bOW3ksSF97dnCPP50l5wWOSYdTYgzAw1PchsW9cQoXigKGtplQJlKFTbwJP08c0bzkvjHFrbMnfpzETVMjUqcnqeqIJuhh1UpIm2xI6Z9kmsQq%2BW0xV8A4tnZray5m36P9jXtcA74OeGJTPZrf2tfwTER04Yrb1JY%2FEGIhKoqkZsxlF9pyECQ4T8XgEA2cvxbeSVamU3kqjtMleo%2FM24yU2JQMlMypFTYU%2FgGW42zYzqRh85BWL5fvUk1MNPQbk%2BKho55ITgwyBxylsBpiJSnhO%2FwwdIV877pcNCZupc1wFgLcqbzMJ9bhkm%2BBc%2FMYAta3nxBGUtUKIqfUIFu06ayTLzdo4eZGB9BRE0H1uyIDOEjl2khj3YobHGCPW1nztNo6qbhn2wHmgwrZjwoMssiU0sXzj2ga63T5w0rkvRwut9%2B15swLEA4pdvQ2golfqlQwupvRT7Rk7ZUXy4wWNZmdRFFahodrl3WKOsTrwRrM8CFaSZQMLnAmNEGOqUBlifV5Cq%2F41whK2Jir0syCkKDLQP5R1NTe0ARYdouFHeqZUXnYZqS6ymuZBz4BK5vRMmGF%2BQJcuTZ%2BFcRRSgnxwl7GFXv1UrRX69I8Gaov22S%2ByGrH5M5Z4Y6%2BP9RFo0q2fddVHy5NfU0I6FqgKrZN74OiiH3N%2BuT6QlkxgZ1Lml24T8NwY3a2OPrmodiOEjWI7EjbfWNgf%2BZkXgrw8VDSLrnHFHS&X-Amz-Signature=2395cd985bcc31e10185adb27641cbb3c3a8365bee2ab595da41fcf5cbe7aae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


