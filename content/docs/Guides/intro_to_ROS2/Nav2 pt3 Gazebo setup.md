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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=83fcb0d1ad81570d586548a00be95ddf4b0b244089aa9a1ccfc099f528c628dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=b0485d7c291a7221d36686175b38f2c3203f6c4ca7ce7a5525e2913ec1d02681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=c7b291991a3adb8ed348471411acaf3a92af4b20ef7e63575b871c474db9161f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=b191e248a3c06b2389adcf6d79f0e1d21fe6b670f87683f3ceb7346cea811823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRPHZIU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJXJyxQZfOdXR%2BNRYuqVOsVkeTQnHOgVpz3i79QRKJyAIhAM5KToWNaB0LETcVCKdoeuByB1fMP%2FscU%2BP%2FHTJfdCdTKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyugxZlpXppLy99ulAq3AOfhnVVaHQF%2B%2Bp8WY3XA%2Bwh9U9%2Fove8P7Vau37%2FIRvbQ12qz6jkqj0XKPBY1303pCLZF0HJ2RV0pgKsT9xvVmt1AV47QOtwlo5wa50dAhUF4FmBAdH88BtLsELlfIaMG3D2b7H4vNC%2FrExWGri9FcOicCNxBLPFFSAClErLDla%2Bb2ync%2B848cO%2BWbdrkByx%2BYtQBSV85PopUIhqVSjVjzOv%2FoplcGtIpMLcqLnObDOyMC1iNtfJzeGxJ%2FWKDxqUaMIqJD3%2FFekdCBe6FByffSEn6ZBM3tpfEZ8THiNTy9%2FsgtjocatB%2BgamJ4Bn1%2BOf85UqCa7QgIuy7g7%2BmSEJWQbp6%2Fa%2BaCYQmULxbCdC30EhnitQE8uVALUf5Pdx5slxSHNfo3TYAcqDBCDCMBRRPzQIgTDAdZu4to%2BnkGhm%2FA%2BygxCodZK2aF044R5zxe5A1GkvGfDY%2BU3ASUQzzOqbbGg3460zy1ym2HirMeAPPbanPTSiuNdatuES6N8I7NBzpMOmbwDrvY%2Bf05fz%2FJy577H1mlLDnegfaVdPKZORZTRYKa%2BjDuC9MoRvd2t0JAKNzom%2FPfPZVq810N1bRV61GDmVDUXQhrxmvtsqEzmBbLH03Quj9JJrEDd7y7eQiTD9q%2BbEBjqkATJ2%2FFHg%2BKhSWy0JFGbIizLUTz2TM%2Fq6Sie%2FexbnBbJyFVrH1GbPKXBUL%2FkLhguVdy%2BpV5aVRUL6foSg0Bz0vx5Tsr%2FCm3whiTlHJWhhuuhxLDlk1Ql1JmNwapS8CMLp1HxHULyCJY3WT2dSyMjiWx1%2B7ob%2Bz%2FHLAh%2F4sT1pAHflkOeF%2Bm0Ea8gZe49Knb1E%2BkXWHGkbhNgKji0z5AtH3shrlYX8&X-Amz-Signature=0dc12bd2a3ae9b0e144e65713ba7fe98c8db7acd604957ba95bf54b83b31b65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=388115b9d41234d333ba19efd747d2ecba91102fb4e1817c8f6b9aade8e00351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=b38f4748790dd0d819b85ce29cbd5b4a4443b58ebbf3d8640bc4b141d5407a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=43b0d0ac3604fbe94e527c802a7a3e78fbb54c5babf58e18affa479ee327af80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=4f270278fcb76c22db12a6594bb7cc8e2b4ef00c81344083103ad8ffc101dc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=e29f4c630320e2440670e9ff8e6617a70886332cb0a89dd4af45287985a898f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TTZ2F4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlDs21wMj9jox0lmK5zdSTEvuM04qQq0854N4sEoJGlAiEA4%2BAruvWgW17ufuWHPqNlqUnwiyTcXo7egCZV3AvMdIAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYORfVv1ooY%2Bv5PsCrcA2qI7AMH7F0EgiQiyWGwmzn0SZSzJxtMqGUFv7hbx6SBzO77hGMr8rYDGqKJsH90HiRILOpHXRg8r%2FuGeZEX4oP1N2lV%2FMSb4s8BkJRnemOu64UpCwAhsrqrVpzpi%2BIqWUHKpbBiLCjWFquSE60tAT0A2p0AwolUkNSPx1d4Yvtfct2MdFbiJCEYulLX3%2FVrVM9q04yImsZ5%2Fyx3Psnk%2BpEA5mw1FsSGoY0URXmAFXpXyCy4j4Y5i6T7ST3LYs931aNK8qiLZa%2F5mDs11d00UHcysERF0nmEkn5uC723eAc5TTc%2BzDkNsQP7E%2FECmnkS0rEj1dK9ChVaj9Ugwz%2FZIVq%2BtiSZ6FIEHxpMThlzJVHi3yK8V8qdVTBg4ln4nXii6Z9I72Zvk2UoYHJpZIzWgdoPD4a3TB5V09Ux8%2F0kCnTsJdwKBc0t%2B%2Bl1lXesYER6%2BsbYtoS6YLyeCUfjr2Sd%2BopszIjBU9gW%2BFrCF6WBvNn1onbMEGw1UNMb%2BeZX3FLp7vOVvA3f0pBNwX56VewvfUlMlf5jaEjxacxZXx0k18J23VI7LDBOhJc2sDoE83kYDh5KcD2tj7pw%2FIExzOhr7JLFd6pnrsBlpR7kHVGkoWDt%2Bh0ZnY50oPH7T4J3MMur5sQGOqUBItlee5ADIoqrnuU7sbHGyDefyZqmyNdoG4bgbH3R4xc1z1J3%2B7tAs%2F2%2BYRb6XwdiV6YoWvBAnNGmBGZpCc78v7i9wgzqrmiiagINPY2ZaHJ4Z8L6U%2F4vm8DtvoTaw%2FptOL7aJ5SBW3majYCj1T8bU5mcj6mkuglWEFyOWDk%2FttsxIEc%2BvncbEe96jwmKzsy2Y%2Bu9%2FSdhqF5fYeQqRuTtzLoKNb7G&X-Amz-Signature=a3a3f182da7d504d85909b8288de62096d776fe10c5ee36ae4af847760cd3a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
