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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=a73772786bf3b399322e7a8f78afc0a93b6b0b4beb56dae094259bc0c351733b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=8f98444d2c24f7f6dabbc3e7f7fe472ccccb6b72fc233813b8d4488d5d4324a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=e027b707974fa7cb11cd03b0bc3ac817f1e846001f84b4c57157468330419551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=cd858921c7ea6c3812d8c45543c120c14138e105cf74dcb996fecbb42618e4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD64YJ7O%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEbLQA6giBdnEr7NjUVbb462IykjE6rvvVw%2FTQGrsdJHAiAWN9kW06DqnRLIKF5lg%2BqI%2BG6QU3vf2Fk8I4d6xd4gdCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSJ%2FqUVpBZH3eI2LdKtwDdOuhJ%2BdJt4k0bRF8fJlkbFqIORWZAZLLfhpIj0eQN4nAifrDtGcXP7yq1%2FcFN05LaeumKqibQjQa5xYqojv2I7XrmTaA6FkpYXZvTvgj4YxtqjcXjFzkK3pt636ti6T%2BKuaIZNxYW8et3SUlQOCcBquDKUlfNnVOURwhFhfKooS%2Ftf0igj8U8heM6bjicaFqG5JRxeMrTLaX54%2BhCeY6N41rUTy0DrsLq7FEq0GmhIQ%2FalqScGKLQUM%2F%2BarFDanopPKtyl15pjD2Jr452Dnh9WXDwxMj75WqWMb%2BWlNVFKpAxN604bAf4%2Bp5Vb7gZZWOjErabENNCaZYIoBrI6oLmQEuCtsORM5rJII0MLYdWPWD%2FgQlpCver%2FrjCr%2BMxIOOR1aJrzw3Rfkho6ey8G9a6mcjpiHde78OEYs2xX6uKDUCAd%2FcLawMeHicCzUSpzsM3zGaa99IR6wxawHqki0%2B43PgqhE%2BTTFQujwXJ90d1%2FSoCOHV1%2FKm3GSZJc%2Fb1A%2B3S4NHGiOfWtJqkAFIo01iXzKsxTrVpBVY7YOnpg5qzEvZJ8bjk4Si0pmkyHl7NMgY%2FTC8hpIJJzjxiqpuO3nhuDaOWLr8DTpuRV9jr6S%2FS2SIRP1XKx4WdUlPoI8wodimxwY6pgE8hPQjKCzfXRlEv62eS24zJ3eHbnjLUbP9m6Sahed4Rc0qnEOI6h9KHn4sUGGphXHCgy7rRDpvAD15ndD7m1tGmKIr5LNGOKScLNy1r50NoEtI0kY97zCw0R0PKadej91S7OYXkqHTZymoBBr8ecdaWI9Q1WL4eE%2FzTijU8VAkT8RlkdHjqjK4N%2FkriNMEN7V1u4K1apowBuEzBB%2FDMrhkbaPCeDHi&X-Amz-Signature=f6cb4343d228ba566f0d5a663fcaa0eb5e879191f8478e47d46a07ad4e74e013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=7fbd3565108c7233f34335c2aca72a5cb03efcbb8e2e3c4d9a7f1af2da76def1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=edb13066a7eb2fdd59c9cdc8510ae728db881a3490f5385f9d457a5583804577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=77028679d3f435e211df9653b35e9d5bc74c1244916c9b9ee05ced72cca53b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=48c1afb0fe3a85ed564e5de717565fee322a4476fd7a1fa94dbdb86b9f622b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=ba569d7875158a44691055cfd34057a10bd950a1dd3c875f2b8372da71b69e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCACWZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFGozGWVDfWu5Pc7cIQI7Ab5c1jl5xoQbffpQr7rItwwAiA8GrG7G3cgWdDJV8QNvasLFk%2FZIz2uwFtbsPPyvas8yCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80t%2BgLrUrUA%2F81c7KtwDOWa3lIWjh0UHa%2Fr0Da6Jsu7N%2FAWTYgCPJlqE9XXn4sMjayak5d14gdyu0EkIDcah11aeZUq%2BE0RV7GEV%2BAcKhUNGgf8S43TIHEdAh%2F6EIlWRahGp3c1p9JUEYKDP%2Fd0D5oYJJyHmysYsByWhrGhPeIKe4FfgC5TjvccCJJl2dc6wIK%2B7DiIf4UQEvGjrIr83r%2FRf%2FhIyxXf11EfA8SIvYKxKaXCaeK3wByTFLLMiijCBcfyGIsOUzDq4WhfSGw60HcESy%2B2SY5Cim1fLeytgpvA5R4Om7rmwf7zLmwWxXa9RXp5b7nP9qxaWC4r0a%2BubEcOyD6x4D%2FpAGZyO59A3GFFRMrNLuw6vlxvfuqXX5vOpZwpmFf1IoD960w07tFzhpQ6DznxpJNJJcgO%2BxqK33CgJbg9%2FIR7%2FqcnEWL50qDlrGJMG22%2BiV6yVaQlcmgw8P1NeiWVI18EFkDYLBlGri5BDAMGrJOq9X48IKzyUxixSzRhK8rXXhkYdKJXKAdP7VGt6G%2FU0mQIw1BnkjrWVIAjbV1ZxW%2FCSRRGpQ%2FxBNrSjSVod7HcdjcnntaLYoi3BN0ETFtILlSoY1Rxb3X8eCMyAIb%2B9Y%2BwLQsBKLmF6pLMrBChqwP5WSo4nc5MwotimxwY6pgG3aabfpv%2FwraXZTmbdOB1C%2BSEmlp4D%2BLzmO7FZfC1qyTDLQzHixWsRuds6PkpXxs2zCxrwDTwskwoTFNNBvJnBReg8%2FpLzmjvQ%2FQtmlz8GCa5yAv%2Fgnor3XS2RMp7qoZjWsqDnQ0o3HVZYIXlfuvq%2B2sY4NGJ70CDOe0ibsaqPciSSitluHqF%2FuE%2Fk%2BMn9eksTmnv5qJKmfR6skuaozdSamwjbi7kx&X-Amz-Signature=7857a06ccd43667c3cbc349c6604b632e72aa0cd6003e06ba77c5eb85d129f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


