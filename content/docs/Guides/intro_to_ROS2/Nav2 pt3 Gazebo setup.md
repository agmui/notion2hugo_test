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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=1135d9dbcd0d4d8b58d5521709551b4ef0f9ac2e876447b90d50513f22be08d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=c22f455c175672a58d0ddfd4ab74abdd32d7471fefb5f7e9a05a7aa05d93cbb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=6c4bbe18d1b73aff693a6f061c6171dbba70cccff63e56e032f30ea2f8b68720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=92434bdd2d053cf2df2836944452130d85d299efeaeea6f79e03a3a6a9bb2eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K4F5U2O%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBI%2BdwAP%2BanTEsdTyne%2FfFy8yRGreAEUiLz3licRNcw5AiBucMiVYrt4jHAcn%2Fx7lkkrSn5hx%2BSxeIiaTCsUQUl1uiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKrgwllWVhe9inGgKtwDGLefKTiboS1VW6XHMY9iyFVFjPJ64ZQV0jTlGiAnkJrxkkSkld4JKDdJL7B5AUTG%2BRn%2BoZwA6eRp3zKeF8zdhhVkS0j%2FUsSgS6B8qHsw6LSvvHmvGce%2F2UShFBNNqEh2wgIOxOJB2M8177ZRA3Ae9%2FvjvCF4EP2H5eWCpS4CGYiaMNtZj5vtwreBLQmZTwilN0VbCSIMoMa%2BC5T7vYYl1aeceRH6byTaIAzk0O5mXIqvI9rtA0qLgXwy1vHX0kgMmu299zWaDiG8N5MJRxxZYEmfLbti8UJGcpm8kM4yPQelsWc9G0o4ivrA8UudTOGhY0uXQNdbq1nlX57bFSb52ulc%2BMwHOpLE2T7qfm2%2FfNqQZ1OYi%2BHzFfhAz6Ba5pevcfPHfEqPppr1mFRAgCTKYjDOpmZz29U4tPTP9W%2FxrO%2Fvf0zL79Ia%2FprwmM3ZMb2O%2FzTxPWzEmJrHBrhJmqmG%2FX3wOvrwVLtV%2BtUW3R1DW97F3TJoPi69UI6SRAYL1AuLATV3iOJfykZotUqwDQCFuJ9hDnrmVk6y5S7Ow2%2B5N5VaoFfENv%2FnyI1um14NxCsphJyBy1Bzgnl3Doy%2Bhhrpy6Gbgsgz27GEPMDVAuNPP67%2FSlQz3bSl4YhNxCgwnejezAY6pgHvpdXxHBCeoIT3c%2BppVPkixGx1gBmR%2FVFubyRgoqllFDAX9VzdFa7JpycL8QcyUHaKlhVgHIwdOIKCU9q6kTYkTA0uEf360t%2FEHbYqFGpMEFtCdLj67nTzTN2l2j8CS14f6gI5qMrRKpMjNfetRmpH8Oq5z3DxBvjMiSsnjG6AZSxGEMhD%2BZr6%2Bslld9dSotNw43Vu8LuDi0nnzGFJSMk1BJFasywV&X-Amz-Signature=ea03c60d086667e2a0073665851efbbd4713b77234ff1fa1b258a7eb46af25c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=d259779cc47f1ad2fe50b53df9d1e74c84ace2f8f79ea02202d142d85acbcd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=e252692b1662dcbb0415910a35917d588b827943280fabad98f41cbbaf75e7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=35403bb8bffcebf09ec922a0593ead50d94acf927ab1a832d97560f8044e96bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=c262920b52147f87139b3cc9ef065e070a7c1835ab5b63e56a275674eac3c615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=982a24ce54b0ee0e99de4e4c677baf0a653063db0a2fa7d0ef64b17f0858b124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KM4T4B%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcyAHnW%2BjFoegTTMCtDWtBPSZoVbBhKScMXuR8JT6YigIhAMeBzxf71iMM%2BpH%2B8gkJIEeSNNQJVrJGJD16oZOUcA5qKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRm7mGnHvs6udaVMsq3AMmD7U%2FtQ0Hmu1YAJiABpdPA3%2B4VJKS0NSFR1ru%2BU0%2BR5ttiJgIVDdhdJMqwjGSjajFM7m20SONF%2BzMUGRM6WtqKUQ2aJLU9NeBSWuA9OuIxHF6yi7%2Fi68lbeUGqpOaEGgf09aqNaAC8PLXj5tlLZIM%2BtqgWoNqKK6AwpNVsaQSpBK3ANlsTyecpeTbSO8uYLa%2FKyOFd%2FjwTlemCXkHjKM%2Fzkwckohr95Ihvc98eZLC6rqrtwdqXS80CfWvKL1g6IwYsJ4Jj1rFWCW7aDqyvdzwoNOPpZ7N3P%2BGVslMk3GB36qZQ%2B3cWX8g3uW90fy4YYe%2FzuZ%2BtUnawOat5toRdvuNAQBCvhz%2BQjIMI%2BHZn6aJ3iuSWYQDwuBP864jsBAIbIz%2F8i1srtmyX%2FlQZ0Ui8wqEC0RAkwTt%2FCDu3UivextmjTb33UeCbTOyZKqPXiQPvLoUEholkq%2FbR9a%2FGI%2F7o7lPobpmALwV%2FUM2NaM2cg%2BQ4Q5zvSiDt%2BUlrxQ8panKNfPlGeIPQ6GPDBDtu84lrVooknXKpzVvjvfUfgAbofkjSdIDgH8hFSqw0f7g68Zb1E3yrpQx6DfA1T%2B6qCyXPMpp5nsClRkfa6eOZ6Z%2B1TYmvdx7Tb6wh1QNE3qNoTDq597MBjqkATAqMWmsr8tMWPvQPQuI5zKInri3qufzwbIBwboP9wZH9Bn5HZgt0NbR62qNgBRlxUVdR05JbImkNGF3QqBPAw%2FKDYHODCOE2%2BlFQP1GePxcMwpPSrx%2BZmPhF2nhFCg3Ig8gAWHAIcH%2B6K7QTy4%2BeYRX%2BdCEAjAUspf8ddfGShOm%2FonylEvoBrCEDSilvuyJZ3zx5b5D%2BfqLUdt13MjCDcJTs6vR&X-Amz-Signature=6978d17c9a47165af6ea305a2c1a533f4198d8096ae60af4a321ab6a340a9058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


