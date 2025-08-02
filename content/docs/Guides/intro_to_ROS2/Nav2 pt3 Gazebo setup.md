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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=6ca305fbb45a5d1346c32ed5f9bc227b031b10de03a75f62bd37a1d72022b16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=df5da0facb0bc3679e25daef719cb507a3a3e656e78b755e204586a6c862c667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=ae581df343b01df82ec4fa6eaaed5c29002c51eabcf34a711e0ad77518721000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=b6b5c7e89ec825d7e075ace220cb4095422c00cb3788b9c97f2935e1989e9427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6HXQ3IJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgZqPJ2DYz%2BHeW%2BusMPiHYs5QtpFyN4D14Wk%2Bdap5qqAiBhJfjIwvvxIhDpNBSAtYxEN%2FPw4gPQGrJZ63Y39NB6Pyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMTbhO86UhIDQobCUWKtwDqURKbGR8BhcTJXaQeoyAEz1IzJ06H7Z4Bf8Fy2QWdVkvoSkrWi8%2FmAa0oALEYeeMiKRcXvtV93bgOq2WA%2Fxv%2BHvdvVYPHA9Ev5K9pTE1DIzEpl173kDb2829psQkjEmEqbeJmwFrE8zVP0qxYUpKNdoA7mgjJXfMK88Ooj8p54Z3732TZHPJ5f9Z8Ssh9CKNm20J9x0qgj55ugx8OxHPGIPWSPBRzhzUmc3HM%2BM6j99vR4EcNCfqci1clGmwH07qIMKs3GzvxQfIA7RghTySn6mTgMY2P9yYWfh%2BVLsKW9HMXOPhhoMKGFWyk6vkxkM%2FuBotoJ%2B%2BBilSKkjxItUflerxG3G2LqavbD6BkjsA4NCloXwVanWV%2FFQGUiuPYZdO4s8JzOujLMS8SpNqm67fDyqjus1fTayBkFZZCkrYs%2FCbbr1jrCuT6IkidxwBwcHEr%2F53%2FUoDIUHnBOgbBMpg6ckYtt8i3E09TdtqyrHDUvKBeVW9Qcem%2BLPgW%2BXf3yTbkoLsnmQwCnBD56HycZgLl2Kp5mo6zuErc%2FdxLVkjZgYWS0aKormL%2BJdhE%2BEgQ1ULSkTiFvfNnY4M7hw0XPtWtAJ2FhH2yUtvXQuFB5UMcBd%2BvwytQWADUXm2kH8whMS5xAY6pgFAIxiWoEfdzdCsTxeWGIK2UfciGakuu0n8t0HL3rzYu6dLukn4TS7Gs%2Bm4oP%2BiuF5evX6QhbfzXcnjmavUn%2F77eQPrz5%2FlN5r9o57tIvXnLrYTArLH7avY5iVLKQar3BTotaod%2FPHZ%2BDfU1fMRqC0H6hEjh8omMUYANkWIZ5Q7mMrga6VS9XpRZHxJJxeSiihFN8%2BmVau26xmv4GsqMqDWP%2BVrRSpc&X-Amz-Signature=fd15582d82137a00f40f5a7b32c060ccf968a43951c2c49d51c73387e81386b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=d4ef68f5e3cf23f795428ae9c3502ee95ff23a102033bd216761decad88ad9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=41c538680aaa1f7fc1948976b20b7ccabe1cea2ee0a9d819ad4b400804d283d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=2b270ae12247248f52eee83822f7f33811c6f30598ae3fdf8d19fee51aa03463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=13507821f2150304626b48d3cb35420dfc7b2eb934ee583b5d96796273edba6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=c36f6e970ea43c78668ad821155a98472a16828035a9fd092730be46639d1e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWEECP46%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9MZJm7SUPXp6G1WL0Yt2%2F9wJcnHarzRZTwbwc7DZsCgIgQMbepe77XuXIUIYJoqZz3381sfKmLaITiF1qT1l8FzAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNxa35Rp0qEjhZgc8CrcA5EzECz7JMTM1oVE4iMv%2BdC9FvQUnJCcHv9cOWSukZ%2BJCuUBNsSIGAiFUZed6WDI2sUGDwAXx0ndLq7%2FXZYjo0Fwmh0yEVH9vB4VxYvjmmYyvExn6Qi3buTLxiF5O2Gnu3OJWmQz3hRvtiL%2FFNIdrSqcM0NyT8uv0A7KogoSmvVlYV0xjQzXh9P0qgANm8ZkBfRBcVltf98uZshUT7UpOfc2i6JbsSAH0qIaoIG7m%2BJUuU3Kuy0VZympYv%2F%2Bz1JVvZPzfvkQYoiMKETY73vvcgtH7g66a8MLIjudbTLDeg9k1WorhUaWHt1NIhN3ajzL5UdtoZGcvvFvt%2FAbhyJtOS5KqLNa%2BstzUi%2BDywjZhk8xrg4d4TzBzEKW%2BnGYEPli%2FTyDFs9IFDI7OzEAFA4IQ9rFWqYh2dX01pAAMynyUj7KqIQipgLV4Hm4OonlozFuSj7%2FuLMIszPV2ApaNXhw6y0UY%2B3bW1j0vhnvsfSVtV0vxiJf8yBlpw7Ey7uKsBLWy5HvvRabS9kdYUD%2BhPDDFP9WpN7KAmJWMZ6BnFq4%2FkOftv%2BdJSKSpTp3OtRR%2ByLS597Usi11giQloHT4RQTDGmUZPvaPRJP%2BOWWw63P2ScAU4Pca%2B1Emo3%2BPJkItMODDucQGOqUB6Cn%2BGsIXkZjZ81xkiccFq8i0C5JjnmAHucLrSILdUMP8SsngMDxeoOboV58d5ik2OwjLfiIgbkjhLpirujHBzPTPqv%2FbTPE9U0WOqWoNwZP3cTJvrEDKUmQ4F9rJEQNxtHwOYwG1Ge%2F99FpRZaAtKe0qA00tOvfiQMFnyDMvT7QGwFz5vSwAS2Y3Y63%2B4V0hl%2B0lAnAXYWu8%2BT%2FlvyIDY3CiO%2FAI&X-Amz-Signature=e31025ed4fb12c8cd8299eee7bd2c95a1a37f1cf0a36f3d49aca1b85c3e7ed7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
