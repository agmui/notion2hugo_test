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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=53031fd0bba3756af86d32294b4830f567d1dc5c9166ad61279183f22a3ff140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=5139e41667ab7a7bcd68202b387abb31d9d82cb465e0c1e10c8040a58fb4a9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=404daec390e911f9f4c29a1fa74263e9108d13e1a3365104b72b095531626fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=dc6d78164b5c86a9252ef109584785646c8698d53c47a262e39f095b47e9852e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTVXJ6E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN52YRlqgzf9KIIjEKpoLUu1h8PR%2BAjeE46oRz4NTZMAiAvge%2BdRdcPWeBKos3MSdtD35Ma8o6gfUwYRek2gUv8OSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8k44N0pzgJawRqx6KtwDdgbmqW8G9PE45GIPJHZ7LN5PXgcBDnwd0Yg169V7bPfvpqBKkk%2BIdz60b8rxsE%2B19kjndYHSn2DMWPdiJuWgQGGSh66gvg3l02YoREHlDFDiy5SC2Tub4%2BCInPPHzcPd4jpVdmmnTMJFbIL0oSg7NYvkDoeV0q%2Bq2fkQDwkcGOv0dIj1wI7f5DindyWaa5m2LzFB8h%2F65QLTnzghWeXLwQ71rbAjHTkfLMO4f0ilNiintJhLiq5VOIR9zpZ3%2F60UjGweCX7KFdrWGtz35o8Lvw6oBLvo9EM%2BDwoDKbj%2B9Tj%2FELAZvlkBMK%2FWqXIu9xVplN8fE4%2BXDJ5ANB0Bre0XdF0KuDjG8fY0minboJzAzbDZQ7eMXG9YvCQEvGkNyjtEQgNx8izzhQJX%2F3gDPQe0XwLeMDnCsuHgPJYMpX8tgRDMtYlsmU8ehPyd%2BqV1ueIdKeqXnc5WCbFY0GTdbUYsRKukzBgzJHhpTpIJbjlqaN%2FZ6pElD0%2FBT3nQJJ02yre9Cu021M4v3%2BSoAS9wVwdjKVsuXQqs%2Ftmx48jqit6VwVLaNlColBRlBBl2FpgoRqzaYg%2FVGHxC5CO98DRkNZHS31sT9ModZG%2BX%2FdfzHYujvyMWh2RKz8o1EmMiFA8ww7%2FixAY6pgHcdsvFIj5H5rM4K2i0vpXUgT%2FeBtXkaYHTocrIwIaSuLIxAnsdMCKhVvLPMlNKBO31mTWGJ49cEZHdeQoeHOvJbb53IrQsOn46YJYYJMrls1CIa%2F5LEBP%2F8eArMSSu%2BLbFnkjzIxEnboFFy2%2B38g1HhpRX2xVbIdjAAx2oB1gKgRrQaxq2RxK47er6MUU9GV4e5Y%2BbPYGwpXhzTkUEpAKZZ2%2BJnZ3H&X-Amz-Signature=61b5623376d0263be9d460483c3e0e215f6933aac88583f4b88e5910a1341665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=2fc438662fec5dacd81c1694175c9dc9c42e98f9548c8c8ffee592e5beff06df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=72751d24ffbcab5df0f7ca99c422004f1482ac5ca70567c1152d7bfe3abe68ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=9c89699eba18865c497a2600254adac64b429e0aa09b615b204923772204fe46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=5ab84a2524512bf393d3eba4cd01892dbaec4e46582d44aad497903a072eac41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=0301e143e0f54db2ac07defc151aaf04d04d55639ac2cfed68cbdb516f0ab34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTHOKLV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPk7%2FUwJNJyrm1FgrYbyQR8wjCDy2y6L96r4zKDozplAIhAPd6IdeZ2bxjC3H9YkMGHueevQP0wR19QbRVZMNL11r3KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaxS%2BtVkQJSrguFh8q3APv4clhuRkdov3gdsMh53A%2FaOPICqLIBuQN8GJrhGqujWTju%2FDoYyL9QXHv7kwuOuuLpiFy1oT3px7NdnFwGK9VuMnbbBdlYqGaBHj8kWHh3TIXvc5fNxEXtiwXXRYmvvPxZ%2Fl0dgvJaT7C4oabq1cefAjZeroFRaTHJBEdDC4Uu9BUcq7V7KYbOlIiNECI1B7CJAyl%2FhME9%2B3RX1i010%2Bo0yXdnE9cuTBG%2FtXrVOFLo3Goz4PMURfM%2FR7erOMKVPGMSJZtEEnyVUDObqwDVWgIwClZINQ74xNsgJ9%2FQ9%2Fb%2BnF2HZyU3fOy4e4MDnlnHMNyvJLhoDNzyHT08xAMz5swQSsWKX54cXUN0PdY%2FhmVH49NbDm2OjEDD%2BiJfZe%2BbthSrAop8K1fGsRq3fKybTaltX4cWo2GwIEaU1sU1W1M4VK98VrGpi%2Bntsllp5AgG01Fm8gvJNQEDaIkDq9ht%2Fw1sIdsM6an2rU16hmdhP%2FYGqq6y8oktUQ66n1MmZNA1A08LvjL4Nf8d%2FjXzvmSiM56R9J4tm3d7WXX7RyGdKBe57jsL%2FE7V9KmWe34tFQssVfFlrDVx9Q5wkOKkq0b6riOaFFv7mNYhk18D1x%2Bu%2FMK5SDzIXNve0Wq6Ta7GDDzvuLEBjqkAeQlkBosi5Y71jcc2EZ4Pjg9CA%2B1t%2FboxPOwhFcW%2FkyxNAidYAP9jLgKWxFZHO37rL5155U%2B4XCeAETbVPDdiflU8BigwMCQ1X8xD79CV9ZlGt1KsYb6IoBntsOTo1GVtM92oWVpbHVQoOvhsbODH7%2FNtZOSWwgAtPr2GCfMoKNn8%2FS3E8UqdT9oNhSqz9xy3vq%2BcHNoRL3gmAbXySx7jQbrhlfj&X-Amz-Signature=d4e497f86c4f9b2c1cf8197011949683b21144ffbb8946b4463fb4012e753ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
