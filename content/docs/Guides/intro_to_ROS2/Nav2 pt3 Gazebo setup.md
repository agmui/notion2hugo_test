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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=bbe49b3544ad7977f0d2edfead398ca88aa32cd3d369cf996bc57464e6437069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=2ae4eac34b6db21d238d2c1b2b98b29f6b63c2e456a8626bb4dc08b72b0a73bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=c3cf14b380aa21f28eaa0ca06cac89dad1f5a525ddaaeed3c4ed6ac0c34108e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=ce32702f6ccb86b45eb1c9bdaf5f7b3419a5654463608e9a0fe613c21ac73b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKJITJM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSaHlZeR7QOAXzWasTaDof6G10FK8Pat%2B%2FiUf0zZSpjAiEAyV67HfdPbeRWKNqLkKeDR3BcRsxnFk6nkPI8Yzf6kNIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfzs8p7Ua611855aCrcAyN7vMhtN%2BOexf%2FtPR5%2Fc8G0OtxG3mEewSU%2FiMJxthLDof%2F4vWOBli92icZiVlYtjOQv28oHqPNkpBbeA%2BzQKB38WZkNRZvqC4%2BEgAL2g7SbUyJx8c7tryf0w6NK26JuNEUKOh3iwjTg1R7jWpiRjTZRZEg6PJ1mDpLUZiBT4H6mYCJR4sHEbFTqJu%2BM1rKoywin9dgRkgFvdu6DTCkRklV42rMM2OiAbwTAFM%2BXgKbzcDhrwrgwdDF5xt%2FtK7pTiNOhjNnJ2bLmgxx4%2FfC5paxJSZ8eW0XEsxF4jvJxa5kzGhrBTBh1W78YjJRVo0TLdKFo1ggQPnBcTR2I5HmAGuHDZWHG0BaPZdWJE%2BINUBOB%2FBuwefQ8Z4RCA9d1UDCHldXC9hERLImo9Gzd2KsacMHLoXUlxv6%2BKf1whJ531IK4F35zor5NAQzwCNkZXWQA8YPTJ8gRs42oLLGq9vNViqi6WTUJ0hnJPRBpRvOOaHbUhVlimAjvE8pFUeZzWYybAwrx1Lx%2FlEHJ6gYKaHbLmAVPWtkENttfkMTquYMFzFK2pWQwqbeQK8d4%2FgsWBj4zWm57O0JPMxUAY5vtUk8AK3PEANfl8cJjrprrHDA94%2FIAy0QeLfFOovFbFHjuMKH35cQGOqUBQK0XCqwVEsvLA2hd05GIqbKCNKrSVrRrnS06jfa8KqJya9cWCB4QdHV1amr0CjZUPvvBlvkisO9ZCJWdMbNF9yH7Ar%2Bq5vOMqMFEcPwuFtLAUE7Gtj8SrYk1x5yVz658QSV5kPqYF%2FA9R1xIo4k9OVhfF%2B6BH22kQWA%2BQI4KEJNH%2FesEUcVI1HAuAkXUERdkU9jS%2FBFk8sEQK92jyzgk%2Fb9imItp&X-Amz-Signature=5a6a26d2328d10a3ca4640a4b939fc00f2811a005e4298787ff45929fa8b403a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=bad43fd4af2c469066671e5514ea06b6329ca0d1df280bc8813dd85ca7a40aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=22e1a1acedf3f545aad06982876eaea0ce8c906097c9186dd5b0523669b655f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=a62ac6f1e809d39d630110ab7a8bf2ab0fbf8207e26111fffdfd0b8f3f1ba28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=cc4d40972421fb7cde2667d07774f792fe3444401588c8a01fd52e51027b4f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=4f9ee704519cae89fd8d80b5b904c498522af28891f172ad3cc9b2cccf25329a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJY6MZH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLNXVtRVFtz7220PFh%2FcR6csfTbiATZjfpf%2BY16IXuQIgEXAc76Fgaq4ql0d0g0KujBvQkqyhRnfhpiY%2BfjESkzUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaScLuhqx0YIU%2BXySrcA1grzeexprKxMe68k1O%2Fnz7Y3iuPhqJHMN56XN0IN6shADrxhXMtuWTTEYAbUYKhUeYd9IC1WOShFH%2B3GXnumk0QVlPfuGpKcUXEL92a84L9wCJjo6mkeMEGqyvqt2ZvIA4JDLqZoVNL8Kp1XgsV3tEQHriSTaIq2W9qFk8ICVVQjarK%2BbdBFFmkAq%2BuNhLDUPQS3kwDz7WVf%2B2oqw8PepEjZMoLSN3sIXG5i6QoeLkRtsJFXuHONsNmJNShPihq1c7uYv5oWo14fV1oRgnDRRw3VFUpymp2zkVmGiRd3L8ZMdpCzHxJS2J%2FLd95RUvapB6%2BEBY5ZMVa9ZPfWzwjtSGTWU8sKnyeD%2FEqevwTGRoQ0hfvH8OdHJR1CwF4k7Jx6sdE%2FZX1yKY1oXMYvOJCwGakqjy4tqI0X0qlBWB6bsdSM%2B4pDnq8ojFDr3VE%2B3U593BIwSTOkdfBgPc%2BVfcEULQMoGzvFkb%2B7ihRI5rAdVeH8GsScBP2etIVQX5ookbJ6ZonhcP5cZ9anzyN9a8zw1O24yJmwDF7eDNdiZfU7PzHySMjuj2gYzY1ECZn6qpfA%2B2unKMKIF1s7pdfupKPYrA7Ji02KlThhXlo4%2FhgNLwmdbdery3xnj%2B3UJa4MPH35cQGOqUBDbmYj9fQxyUZokon2D9gS2Hjf9Qxq2zWZABzQk25tGRGvkgrMMBScQC8u5xbpvowNXYFzChXecS2Q027tLOLMxaTlTs1zStZCSsBnH4loR0TBMdrjbmPzz5N9aNEw5qkHG6b%2FDYzuI0rz0kB%2BIZBeaIsxSVCXDKzPXLMlHY9qoG%2FmmgA0uAQf5yNK4tAZli9N7Uz7wdZ1PeQ7%2FLmAaz1mcMpf92P&X-Amz-Signature=49e3e3a51c64a85b9980cf7179e556b660c5f1be45c4b8b05edea88467d9e104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
