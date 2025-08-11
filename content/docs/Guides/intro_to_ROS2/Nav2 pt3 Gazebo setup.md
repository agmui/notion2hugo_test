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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=bf0dc6e6ab6cf8b9f0dc377532c9225b3ad12c4dd42d7e1076d51656149a8e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=5a7dc1026bf9f1eefcb84c0c35bbc433aaab953903a2cf3eaec7d187ed583719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=36d0e0a6e1f1d44fc98512456298c1b6b6b9fcefa222bbab1139886f08c8cd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=9b8bf3593504f37cd4296d56093292ed106a8c70fab9c24cc070b9b4100eb477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOTBFGDN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQPntJOYD%2FC9BaRyVYDIqV0AKeKWAFtYj2qJbNw8DVfAiEAmKaqhnmVKpo65g%2BkaUIjDKwC09Il5qQd1v7DE7ZRNiYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQZO9pDOXjnGxZnTircA3KkZ2wV7Q5IZENSB5Hurmr1nyd%2BBj5y8I%2F6PJlJuIXmmMd6Gz7RMsNUYq0%2FmXc%2FrjQ%2BndKW3FKO5Rqi4Ov0%2FEWw6%2FkFzT3vpF3bhimfrtgY%2FsGaQDgr6vAsmaUucZvWCbvgkCKweIkNQijn3Gl6Bu1WLIoFgHKjvbeV4JPFA8kyVKSkH6zP0fnDuFjB9c2ZsAKUR7U30zH6T27JW%2FJGDVcISF9KPcYJv1yD%2FnBCOVD8WAy4u8yaIe5aou7cZXbi3wLlVGnKfl%2FLEcqVYxTqvEByFsjoUpvjwud4OsIptlBFNZhdpnBg5xkd%2BzH6%2FCXWVzzxy%2Fr9paTjeL5xYIT%2FC6TpFxIdGJKNtx%2Fjm2Uzb91V370fP1GVLuBPxPERmXo3aFFNIER1yL4Zuc7HrF9SnHIeqgDim5NMw1eeHmn8PrY4JwBB8871RGB5LX%2BKnk7VAjchqz1UMcYV%2FX8Elgv%2BGZDzduoPXvtYXKdU95MHNyF1gbbAkjWPxjqatyvZL6JGFeuu39yJxtbioib%2FRJHsq0mKn2Gpq2XNqbCLYkFGQGk3jcHqtR6C%2B86FXBCe%2BD71GcHrkUz3GNyIMH9nQm7j9qQodtFbIT1d74KVOWPOCE8CR8XpqToSYILhhyPqMP3R5sQGOqUBkP6CQQXIjobCclLB%2FDfwEgBRdMJXDGh6l%2BvlpFcpHZgg%2FttIpLlTBvMYQYrBlKOW7x5vh%2FErD%2Fkk%2B0l7ERYEFMrs%2B9CmMkGhWPoqRloqXIVBMYERXEHnvwrUKUjeLQSkJDBSSd7XDbBXQU7TENe%2B5VZ4QQAvOX9jqrTRithyAu7Cx6Xmn59LY%2BB0uW%2BxdSsqgaP%2BmBQTOVLzh0Dy6cgCHz2BnPx5&X-Amz-Signature=f635a291fdeaba72ddafeda475106b1b73488277e30ba33bdbeea7bd14586775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=b445b9ccde40fd6f1399bdc82af66c0062129b4958fa3b184536766a18627738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=faf6bfbcdd466f5ed9d9e7b74ce6dd0fc674e57c2980c37ed225fb0a1448256a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=0dbb752e6c0e25097dcc57e44465efa2fb11555a6a90cce7a1f07a1b73b3e062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=0827d46b080b5c7be6f91caba1d70c66a373908e3697d0a22debd7ad0e050ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=f1c7dbcb81828955da77d5210c7ae62cbf78c41b5fa4b32c5f1909b5a6890034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQ7JZWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx0P%2B6KdGv6tVdXKBnGVtERld2n0%2BakYldCOOocOTzbAiEAgNhKibm9MhnwHIZgBYTfD%2B1a6QFnoQVih66%2BCz1jKroqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJl%2BET%2F4XK%2BK7rC0yrcA%2BI6b3jCPO7%2BZzr4EfMmikcrBlPLUC25Rihtqo7YL3VXUDK2h2%2BTCJ59CWztY8H1P14%2B1QTsYENjgb3LNCJOjSS1mA3kf6%2FXkM16UJ6tTuQ%2BmgMMQS4iuT%2FNHxkicA7wtXYDuc2oaOt6MfSGeKpY7DQ1S3pvbnIBxixyqK6ppFgeJqfRCnW4RRZKPGDvDTf%2FODSf86FTBZjSslYZlG0KxjGuw2yApaY6Mw%2Fml%2BZy5ap%2BuU6TIyWsqlr0SftIx%2BWeQwyqgLy6ra6NQVsSZ9Fyj2RFnPNYBWshQ5JiSIAXkwfOZ3Flf4BdNRPFk7sYnEO5G4LzhnJVfI%2BJ99RvWeMFIew%2BycuEf7ApfCetLs6EVEnjfpAGUPZj6jNUgGcEEdwOIevOB1IHRABsKO2Kz9UeHakZJSJZuY3qjCIUKoZkIJs%2BxN51i4qjRMrETRbMyNDpquAx%2FRltqiPSMiLXXkVtIEVf8RcuHZM1hr5GiEWlA7WHqLc79nxg4BWtBbqUhGu15RRyQl4PNh1iOIxDnRQJnSocn0qgmi7tRfZsUqPdhAGVC8bAhzvLQ2X%2Bn0To%2BSzaTWyP4rbw0G4rj6CeZ11GDXnwfzEC5J3AjzYXZDry7yzfUn828XpQuBgVJaqZMO7S5sQGOqUBv%2FumKnZCqFHSzQlvvHCVjtJlAcXsHBEaqFYVd8%2B%2F00KvVdWdwL6aoSDx%2FArzVPAIXQ18BVGoE31s%2FW%2BIVDHnXBAFHVVke74buw7j%2BETFHqP4vaeZiTZuHxmTiwBHLkYYJryK%2FpP2JSuVcMBVJRUQhqx8J3NJQ6M7t4Bgx6qAXfWRbFDQt39LhwLQOGg3SXUYvETQv1ztbefM7SL8mzpnbTaF9lUw&X-Amz-Signature=832e9a52ca8db76046fca16fd7416332c89303b7ea159350ba27ca9aca31a4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
