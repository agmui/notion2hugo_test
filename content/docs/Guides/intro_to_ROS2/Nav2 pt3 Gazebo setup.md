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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=257b06c692e7145e84f40be677d656b1b882ea2f87e88ba8cb698fa58ddfffdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=34741f87507acc1998156d8875aca4c9e54c35031fc4cc49fef1af6e74111295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=f072ed0f8efe36311384760d1737333dcf609fdc015dce426b031019ab6f6f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=52e869180fb46e3a5959b3828d592d8e24a644b1f2f7829382bc3195a4b735a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BW737BR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICugd04IKCHQRkywJmuT4f4xO7f9JzSu4oa5LoamafbFAiAWGGYFN%2FlXxtsj4WMxnuox5szwG03kCvic4OrMQ4%2B9vCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wW7xMvtk4%2FvDvP0KtwDrwXT9BokaN5ZwUyh9fPORr%2BMDf5v7TjQMtr4KHBG3DfyE6j00rdQ%2BTFCve3Fl03Gj0lzt83bSTZos0SNV7OM2ofO%2FkjhIzEbiUxRfOq4EbRMrU9ZeXqHXM7vuf4huuy5QsrLBMGrJuM%2BcPQpJ5dnRfXgWqYtP8rK3JVgMkSpiU5Kz9JrA4Fm%2BAF0GtnuOHv306Ps%2BJI3My9RRA4RW0ouTbfE9blmMbtbTmzIbH52ijoKyuQVaNJgFzcKu84VLVeLJ092hml8kVChHY6yzwYLNiaHnvec1Yv7Z%2FXlH%2BdTSKKuepAMRrvveHIRHiCTxPBqyrhDtIdvnTy8wgB2PgsnNPbDCOoSHVGpPeflNdEghlTG%2Fd2V71GccAyilZYqnTckcioEnslH6L2sTwciBYj%2FZT%2F0%2BPFjuL0TtrGxovavW9phQB9m603bqjYX9Za0%2Fp4QiQnypPJN%2F7AYfrDs7SHaGr83l%2FIc7pLn%2FRYb63gRCjiKq0AJh2G2HnBBrPCrHJtKIxH%2Fr7L9KaUePz4GDWtJXEV%2Bhhow0pgM8CidxpCD9zoLR7DkQfO9lX0BZwnv4qpq7wnwpk%2FN3l3B4AlNYk0cuNtSm0KwoGlUS1pbsF7OmzElIP1t0sAHdItSSjowj8jQxAY6pgG2cPi8xvdMk8XKPwi9hghXBFjN%2FBQ%2FChZI9DUast7Xd4vFhCw1KA9gLazDdiXPuoTvD3fLIJI%2BX8l4oZkhGNHs12RL%2FrcpsYbJ84GJJepoLmcFIOuUKk83FqDIPOHsD%2FdEduAUw6tEg69oB74cZUFo2nYGvU3KXjsgeDRWkuf0GVG9PA3%2FWqIjMo1GJcX8Jg%2FaqpI%2FQSvOclYmmvyLcZYsJwSpN%2BXx&X-Amz-Signature=a2417579a8354bce41056643088813ed115e06c788bfeca31743034b20c6a12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=b0acb31843ba4377a7071f402b2fd4888833a2e2082667822963288e32000a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=84fefbbb406d0fc3b1b174d086002b7a501f4e00393e2ee5520cbfdb80291763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=7b79e441f939271d19a151d95f9149a579d1351f343e1fadfa0fe0d9019ab2da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=de9a2477139d8535f322f3ce57fbfda452f1a5d5348d78acbeaa67e5603e5990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=69cba5ecbece0abd48a6f434a35b0dc4244604e946008e92b3e0f8b4c239a432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUPKNRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIAJh%2Bo4CVW5aYo2R4rzH%2FvKGkWhm7UY6ldXf%2F7yPuon7AiApcwIRFGmdIIi234gAz5yLFczh4KL8ycw7Is1L8OoCuCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYmZAO2JJeJ7n3XIKtwD%2FvLRO8RinSnuVcrkhW87e4ZnZU5YblJyHmE%2F6in%2FxnsKPYMysx5rqmXGT2YQNPsJ%2FKTAc3yS2FlOu1pAIrS4%2B8xXDjpsqey5WVPm92%2BPpeIle7p68Jwmcen%2F3uhkZEoyxCNf9dVZVn32efrDP%2FlurLfv9Z479eO0%2BMVVnnwM0rhyGJy2X9HHGZmbKLfzCCXMaYlVrA%2BPi6V6CZvOtGmbkRtDYSqFwqscOvX2TPyvDqe%2FMSKo5xLobcZIalndord9u783vAa4SVGeXLK8ggqzJovzsje6thQgsDPXSS6RMiWHUaIiK9dA189vDVlGvLRx0lt2WhHtXqcFoMFFtJp4dgEQhS7oVVLn1%2FC5Pie396O2rsaOxl9UhJs40nV1j6%2ByKnN8pCduT9TYbVMAioQhdC5nLxty6yjcjzC47Hszmq9ixnTAxy0w4vt%2BrQcE6D8m31pPqK5tyxhEQCiacxzpucIa6EtQYrPC4HJyAeVLNkuVr72RzaKyEuBxC3hQe3BgAnd7XU5EkwZDrXWBdF2sdxfbq1AnTjM58DTbWF0ZiWeTPr5CIAKBMjnSbHRFMkrluGaQ6UfzmyHostmcuzfVS0UrN3zoG2AXnskBffv%2F5k8h%2FiRDtNAENjH2h6owxcjQxAY6pgE5C7HRDrb6eFqjom7GlqQUVuJyw84ho5Sj5uz24mk5M57thbHhYJE10UWdG1owYVj2q%2BqTLFqeW3Ed2KKk3%2FhU8nSW%2F26WINOQVtH7XdDTARtfOPue5EsJf1JtbD3jO0DjWMZfJaOOpLdkXspZVzdg4MACdxX6cXpG0e%2Bu9IzuUBEILzGIDm7pZEJ3CQ%2FPhVNoB8gOpTWQqYBFho5y611cI0jIGHqr&X-Amz-Signature=a4921ac54f4ade6610a5a79fb1ac3baa692cca097ae2e755671569e6da230ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
