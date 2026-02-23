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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=f53f3c01a6bf5f846db19e5b68a2c22d95d90f02f8e58d4d27b5037a87dd21e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=e486e7c391688ba3f9d54d2386cb9fe4cddad66bd58be21a2090b7a04e42f6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=96cb3a352a3ade0fab1cdfdbd3370f7b326647b9a3e9c88ca399c4ac50cdce68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=6ab19ce3be45cf0e58bd16e07d80c597446ccf94725de955f19c37b019b4924e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3ZCPEP%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCe2zOMkgxJQMjElIQj%2BLyUGu884QfvR8C1AI6oqPjCQQIgFlHKQZpimE0vrM%2Bn3O8fTe3%2BBs7qdVf1hP%2BkqfJ2H8IqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJieRBRfhIGhCSPyRircA0zmUHJIlramdRy9AO6czZRvQCSVXxYb1h6JagfQOjpJuBQCKcp2z0RZ1m%2BLyNpXtu%2BMWMl%2FOxE%2FEPOTgDIJmm4cwC5HXD2X7wnVkjfZPPgdyySk1YF33U3u1ld2I%2BN0ET9qBsCNnXmCjkdlx1WngeF9aa81RzVdStrSnMadj2pUukuhF6VC65RlhDIvIBUWrfXGw8XI3h6vp3PmmL3F8YLIP3IoVTkcMsVcMppnvToP54anL8ekU5p%2FPc%2BNmGMstnDj08Idou%2BYhSHYpC4h4l0sSU%2FfxRret%2BvBjzb5PGhzhwQSFv7UT67SUhQufsGBoDrCiCYUD6dUqDZ2yZiz2wgE8UrrRvhsxAFNlM0j%2FWEzTQOn4AOVsYFCOfiqm548G%2Fa9yl3INH8tHTrnCwD47OGy6JAMngfoTbJdxg0gZY5JFMVOxyV3xkNJbG7Tnm3Iy9NYCYgw%2Bv2dBYYdmzTM51trhBRHTZW11Aqh%2FUMx9r4o4Z0ZTMjv946b3DpjNIWpOPUJEeuU%2FBUGR98RtaxMA3rP07y3z5EBDjqO8eIEZ%2BBYYjTyndE%2Fqt3%2BaUfEwfKJOUZknkCs0DlozE5lz6ospAQ5gHO1aS7S0MmV1nu8hnfJUpMqXEfGH4nWWJaoMOfs7swGOqUBFHgXjlmZyMsmF76GkANP1XvCXXMcMTHPM78%2BQEvpxWPQtpP3q1WLpEROcwkOSDtzrerYJGZFIk6pxNRt7jPduRTj1MnNZaalSISEDKyz2CqCqbNBHyLaw51Yq0YCt6jmYQIvuNg2PcF30CgzLjDwXws1s%2F79vRXKIdCl6OeXjN35DCIctbIYTXplBTxLH3G6cMJqCLBHYh3G%2FESIBHPM7gY7tUKi&X-Amz-Signature=d3a6b38291e346006e933b3816155907e90e10acc5ce521ad5befb8f159cd98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=9f73158c262fd64011c218fe9304a0fa43ebcf899a93dd241b20352259ead1e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=b6438f54d85d745b7146a48732f1166ebb7198bc02b2f83ef168a384eb6062a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=8a59fd4a4101dcf97ddddd799cffbc437d7468dcc9c7e1828060a0da4e7c90ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=55c9c314b20eb4ddb9ff100a1d1487dcb0517b2028c8885d31417d6097c49f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=e9781e84da2e099ad49d12ecb29336dfe968e5313759e8b9a14f295466f53f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2K3ASB%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC90rLVvkwGvOG6EQzAAyEkCtjx5qdgDTA4ly2b7a%2FVIQIhAIfdj4%2FjOUSyNX7hoor4c8pLXo0enI5sHTL1GEne6u9hKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnyBH5Mkvln2TiY9Qq3AP8hOVfacIY1Ih5ZT8b0zlPDbUZIdpgJoh5NNbApBzuhQq5PRFdEIiGtlId7qtZu6e3kuwRacnI2LwoLJ6NauN%2FYIfBaPuPZlZiU5yDHcKcYGv6LPJp%2BAbgSAB7jZhM4ui8vuzJFqW0RAhNwchIiPpPy7oOybw5cGwgan32Q%2FMrcvNngXM2%2F%2FmzrFiHnrvWJej4SIjkxYMhy1K5248yR8NZbw4fiD%2BRLZka6pwLJp6V7nZEImkCRBrseoLrl26bgeOaoHQE%2FMOr%2BHzX7fI%2FBFpvwtweBFkorbz5mlHqN2jFxBx2GjVBwZcQlK9nwd7jeVp8i%2B5M01qAoRy9dCpcFV%2FOSMj8144ZSX4yxdslcIxD%2BfidDl0Y42AhhPEJrwQ%2FTUKJuG4am%2BjPgahhFONV%2FhRjtjbtf1KhRMc0b6HlakRDW91GjzZBC6%2FMOfdQD1O9XpaRfC49CJAAqPGFkNNTz4FdBUb%2Fv4MUe4c1JKptJuoKwie78kuzZeBIuAHMXxqmIDC2v3znxFqtX7SS5Y9wslFR%2F19RKELin%2Fp5C1QY70pHqzK8kf1pSEvPaKqlT8KJluzpvC2Owo57Or50CGn585QosjLf6VM%2FdApQmfWCcp%2BFbQD4s6g2O%2FVCs8Qq1DCX7O7MBjqkASQnplfKDg%2B9HJIb%2BYpgYPYTLQmgBkHaR%2BIKYrwH2ypxDR%2Fg0OzqlTy4xpM3dEm9c%2B5n%2FAbS4P3wOJibDh6MHQDbXyzHLjWsvlIe9cilIdYW%2FxWFvUahTt70Y%2F5CyrVPJ61uIT%2F0x3RHy%2FAWo8sYMCNUPj4gy9%2F%2FNVjo4%2F8I%2B4UWCD%2BlqN0bMAjHqsYSmY4zjhCE4uKybMii8r%2BYCvlwHZTShA%2BV&X-Amz-Signature=8589f9c2db431ed173f7deccb376333f2bb44f15683932b9d8958d3b8478a0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


