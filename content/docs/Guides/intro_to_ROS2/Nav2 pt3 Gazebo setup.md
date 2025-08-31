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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=eb0cb5624870b4f3e3178f352d4bd9770bbe3601cb78cabcda2ab431cf7ba1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=a57ed67da9ecc0dc1a82944d5c8f5f819d6e9696c5789eb8cb872b468c00f99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=ea9fe3483b9fe5b308ac90ec6d54c18e50a46879186998c0ba071e54a812cffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=09f22b6513c81d052c5c2c3c11c7b3331b1119c23308bacb7ee5a4b67ffff6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WBTH3N%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7crNeHiIr2IV0rpce03OspscCfZrnPOymaJwLJd1JvAiEA7%2BG5FCY8p37JColAjjQQf8sayBNImR7svPNCt7PfnVYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUkfsvleNfh8he21SrcAztqdTLSrqyhTcHwK4ZiGsCRVZVAQXSk4mqrQX8DBvkgIwXRRK6yKfPa8VzybWlEyBDTtdPuy%2BzdaxyBZpthbGwT%2BgiTMNWs3CjbSvlG%2FbZ1zrHbOeSeXTcTgTElz8MOp11uiGJm0millxvNV9P%2Blcr91PZPXmtvSXXdTUNGOhP0cPRL6WcSkf70dBT96vlu8r5gn3qUXgO3lp%2F2OyT79rfs9aq2XDdszxOPkpNwMT7wG7PzLBtAfzYcJTDo2QQ0bLNOseHJjpYiH0UZ3%2FM507PTe2MBohlICnyzr6CcGZeQI7Wa0QsoqLthAX5lxqWtD8fe0GRwSvz8tX0O8voJKfJmGiulRPT91F2zCydIk1mK%2FFecFOd5dRv4Hd0ICyI0nPb%2B38XFibD%2Bw29PBCvjoqtDnv7l3yOilhZAnV24SBGwlNt4Z6BtNPCWMrqfnHm86dldGgx%2BnsnOhhxoD%2FFJvczJcHWT%2BL5LZPFVrfXrUfgBNkIY6P3XDuIbaNEQHxY2yrQceBWBgy8qfQjKHPCVEYIOOUScbXHaGP5jHubpmEW1DPt8Czip9eS8KzoU6DkBhXs9qLEBpxwK2fLT8%2FvKgT92hUjs6o7Bsr%2F59bHPPFXY5YP66c7cax121kFeMKCfzsUGOqUBrIuN%2FoS6hA1F1Qp3MD7P9U8iAfAroy%2BCoXbbMSgNjvgFLO8ryUc7pdYceSkr0PY5RuhkgQd%2FydkNi5LxyXe5FCZY9sDONu8Vm8f8r%2FU%2BVnufP7pHoa9Me0LbiqIg%2BrTzptV1faYDSVIgy42c9q%2BD2zB2nq20uPiH0Kdf0wbvx5cxk5ZfEB4vPfnrSZEejoUTXuLqtUSZjQO9RZ%2BeQlFU9YsHjXSx&X-Amz-Signature=911e6bd6ed5f4002101aafea3eb7470559023d868407bd24d6b50dffa554bc0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=3c95c17c78f7a67664b27e8774e38de27e95bb6e015c2f8952ba113f54481a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=703a6320d6ab74f455b3f3ef22c284c25fdf5e1e3a0b6dad53636e4742f2256c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=1ec4a95d87440588934f3a6c03234bf2c0d112af83433cb9290e6b48dcdcaf4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=59c105985a886e6a053b5bb587d1f1190de57dfeab1fa3b7d8abbe786bf6fb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=156361fb052f35dbf6f6a3706caa03d2c712eb4b39046f617870e839a2af7b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGX6IQ7R%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy67D%2BgU35cZHJrCMLIZaFW3wPMu5ZhcllZU3tCiOSUAiBPBqmF6KWxfPUTeXnYo4qgdXUeixwaiU9tVgMmE8wRUCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9iy4uMc5zjWo5ZHKtwDH8jvHu12oFRtSjiB%2B%2FaAKOaQrT7skKO1Dk1u7PF%2BYjDaXN1cZs9PwYTb8yWx4mgK5YUWgH3ZBnkKIwmHp87Y9kaFBB55dGbaM0noLe3H8QHVKsBvPHdoUU031VIqJBov4Iz4iNElh%2FDQa37HY%2FUYq4i1JPHsrXKrVRoKkJcW9Sbc3jRH9CEL1CFumdMy%2FZlJsC5zfzb6ySoNdKehVRfLOf3Sn%2FDFJ3zCbNFos0qXajrrOJKg6buPQpzxQRztX%2FsvkG4As34652acLmZ73RNeQo8I9dZsWjbiTsx0QZpBRHvpcfchLPgKsZ1r%2BGa408BvYSEnQp5fYN78P9FcSHZRiX64aobUvFW6LZwOYWBJK%2FAU%2BHJduLgD3a9fviNtE4tMhp3dk4zqJWlxcvY9K3Cu0WeGvfbxH87aNss07Pk3q%2BG7ThaNWt5MrHBdr8N3RzzHo%2F83FY7JEfuRVMFsKwpgQJ5XawdIOKF%2B0%2FCr3Lu%2FHdAl4vPpyxXvx4cr4qf8NRVjvt8gkQd3%2Bp5c3x8PTDceTEmjZEuyqMrohe7vEcbhVO%2B7q9Pml77BDI0112J4duZtEEunVJX4tsa5%2Bfd366ejxzJlhSYuAefUzpIvFLBvxwCoW%2FTcTut5r9k3zrMwz57OxQY6pgEqRoHqO3sJpzdFBKOUFdoxL7sQb8X9zOafGWk8kKvPSXMsAYizk4%2FUUTSWkWurhzvlo3y0fBJZxDIFPk1S287l0pDeO9NS1dECeUL88%2BAQ%2B7L%2Fb9M6k4WiXtq7taV6wZRlJgoYEBBEvVot0laE76o4rvKdDyGlvghfRm2l1xN%2FCTlIVYUI%2Fe8nmQMNarjFoukpNyT6YAPzL5U%2Bp%2Fop49KFAOvS7Cab&X-Amz-Signature=19356ec888660044262a069eb58998f283928f8b05fa750b7e3b2d4c1d650c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


