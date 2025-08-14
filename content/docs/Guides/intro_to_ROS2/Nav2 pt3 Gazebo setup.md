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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=058125463e1460733e8563b979ef8a199e08f4a788a19678d1b70aeb7f98bdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=c241747ee5cbe5928c43f7e93f151a4450abf24164973f4ff53207939a0719ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=06904f969898c91730b75e38a72bb48eb3ea5243e22182d8ba6be8fe7c0b9a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=39915cd5da06dd6d300408510ee2f55bffadc2ec97b02af6b5724655d794f04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTD56KG7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC22t828mX1o%2Bn3t%2FXE6TqaItntkxZoAlvQVoY74O0oywIhAJ6MMy2NEHpdFBmqwZKhEy0paOAAlSYGUGdnMzdT2ebdKv8DCEAQABoMNjM3NDIzMTgzODA1Igx8dj3MguSMsceGbl0q3ANFdJn5KA9yUfa%2FIivsfqN6aDB64BfuisjfsvSAASV%2Bco5A1J30sHBS61zK2E8t7MS%2F7PIcIypoXYeVGEh1azPt1ey5lKWsbzPZW7hsE30RggvE0OQ5ripYqfHiaH4Gst7QB%2FwEBDSCP7wpYcuQwNGwAAPgtUWaVgioa20tpnIp3zeNjGkd6e2yfyVNpFqcQHpTWeI%2FCXlxSZeQQfeejph3Kkk%2FsYUh7mTw5b7ejVZxBgGv%2BWFlIKnR7jOxjXpNC1iqCGtfeI4O7SDUZPaY%2BNDjgnCVeafYnVtUHsd3DZQnusxIwGF02AXyzX7GBI4BxPE52%2Fb36zlZ0tjttfc38tNfzCWKYn6kZ8IRwHxQgDwWntejsGbAtjIg4TQqJua9KZp6lYI7e%2BzzhuAW10RLFqdw%2FRuwindwE4ZUR3THOx2VClnG8KDS0vxvow9aRIq42J%2BBrO7%2BzVVXMtMjg23kr3BTaNvhswHNrkgAyl3pfdVGBOwoy7upbkKq4P9zW3q0SdntVE6av%2BpUurNcEIwIKEALpYFvmGGkKilnGFwDFbuPTim0rNe9V7okDqA2UwIviCK712lOfUFM2ZZNtzUcmUvIW%2F9yyo19ZHhDBEGxW%2FUc2kJSQndEuSecGMFtKzCkifbEBjqkAU59H05h%2Bc89hSVKWa6nhCXg32ToxnFalpPJeLCxroRZ5MHkQouTEsRO57tawC6pXvQG%2BoNf88a99ZLA4mhXC741UOenHTHc2D85tdPvn6TFqg37jeXfNONGZQWOwrt7B%2FaLgcjYWSOV%2Fqb4RGtUdFZ%2FarON5p%2BXjmqYusu5nL2vV6H09DsjKd1iEZ0rb%2FU%2Fvkl2U9KFiSKS2i1As7k3xpTb7SL6&X-Amz-Signature=fae11b138311bb959d4ca08e28018c05f8ec2c5305e0d6f9964a2282d10d1bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=5e721d996ae496ba3eb497be6815aea49d942c2b49990857b9a4139466ccabcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=8ea01637e8f275514eb14ac7b38733101e5113afbde161dead07c37087eb6a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=8f010f8491b994def99e519e2281a48bd96150980c0a25e3d88dab9a2243156d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=f822536c7acc615d9554685d6e91a4bfa91f724fd91cda5aff98737bb97b0116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=151e08769850f309e3f43fa15d3c20db9e3a6b15af925e192d9a7164c8eac4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6FOA7W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIhB%2BPcdYjE1mEuUa94yV6uv%2BDpYzVkkn3Ef2jFtOEAAiBUzpmphNxhUtgukkjIOwy%2FiNpeb1jLUKi247CxxkmAnSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0AeV9Y3RuiB4evnxKtwDDPBEfTs6WiKCY%2BVWXYPv9IKiKEDB9z9z8su8EEoaLTHBTkKaxyqI%2Bn4yxMDQkHIu68bZXObR%2Bk01svO672DzEzK8mdXqSHyxMCxbgyWhKuGFPvxzqbw1qcNI1RqFrkQzvSNKs%2Fq6tEy9xyaOlfWy451nYxLagqEibyBJE8wD3%2BuF3MMAJar%2BIvezhG77tPNrv6XV1JUhykyd8osLVgkPNwagtVeFSI11O2igYwG%2BRHjwDWJpgsqCO8aFDWROp3riK8lrDZkztNeumO52TGvnx%2FQR2vi5uI6ofKQ7HYFhmtavPwas%2F8mIguqOALG4xxUNLwLMeFaKleK1PGOEA803c%2FcT6D7i5vNfz3Te16%2F9by7L9l35ZyrtZfNGJSa68TjQs86cFw4Ura%2F1nq5Xj4G%2Fq32x7Os76tbG6MsVajnuSVHCS9aGsDIQcHA48e8uhauYQf5kHobOyf7zynf7sGz%2FrhHWmbampklWcN1vRFcaEawgx8h99ce0nMuCtsbsHoNhA58LZPKepqt9MjSoHaJkGok2VFt%2BJrZiKAlxOlNAe5PQpYCR9SpSizQfT1qJMGysX2NzVLgrK4Ee7CSqr5zFxb7ejfN%2FAiuFK9DCxg23PXn1MMg2Xsyp8gdD2tow9on2xAY6pgHl9F7n%2BRrdq3yqAsqaF%2BcmCmmr8fxxfK%2FPgAPi9Ybn4USVM47FkMQB0%2FniSm1YxK8wScWxrxrhAIMAtua8qyFH0X4FHcX0xTRlrzk%2F0xDTyRWH1gAThAeGJHNX4OakV1d8HJRaWA3VxA0gRWSs6UscjlcRzxjUgZsmxvDSLear3eHeQcKHTptgYsNOsdqcLrcMeMYCOBFKhoGE5ebZBspgcvACTjiE&X-Amz-Signature=cbfa16aca62d3497ef09b8f7a4d38d737d0cbc4c2e604f00fe432f1086578d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
