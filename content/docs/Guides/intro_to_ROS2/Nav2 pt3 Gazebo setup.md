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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=8a8b3ac13df49860507a8dab4f459a12e62602e15b06fda62eeaebb735475560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=39189b071e659eee486636c46f29fa0be1f57c09747f831564e4553e3763b0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=e502461a29ac8b1633f64d96a97a53fe9194e22ef90d34922621d9ac08431d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=a0324016f33737d3f1e18e07680150b2ceae9dee00ee68c0eb730fa8e2f3a444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GCXNFWS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQWia2d1LoD68nuW2aVQixBw4ly1bz1YkV20X1i%2B8zbwIgf8dtQ35iDuYRSgV0PdidE1eEgUDgl%2BHniLsquUdzjFAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIo%2BFuGyYugCZpCNircAxdeL4bUssxLmDDmrhJZTAx0zG%2FMADL4JmHO8MDTpW5RROXojbgnr4SqNl%2BK4hytNRdIsnvvx5o22xzVQI0wZuZViGRmfYKUXJmzMeGCnZMEI3rXbGqafV7jAj%2BtZZ9ayOBHAQj75qDsW4Yt0dy3x0YJus2IZg%2FXMZeRFeE9FiMTJVD7nWEh%2FzndRGBhSK07NNoDZjRvjgTllNAzYC2Cc%2BardnXuS4vVZ3ljI6TqPuFJVlueLlByB2ISOtT0sF%2F1lYc3wlN19molyQi%2B4cAcUVn%2FNFgncMiKdHhiXQJXc42wzuGPR4mBVJWvTFY%2Fvca1%2BDDQu5%2FKOkyx9pIW0F986BcPgMDQR9W4Iu6Tj6UBDyhjxnEdhn1bYe8SInXV59o57J6BfGISAbVaHsOJjxT1UXLmWXaO7nGpNSJ99LOxUVfai%2BjZu4D6T7YpLe2%2BGu4HGWWqfGM%2FTUu4Qhik0rNQNrPgHvuDiw%2FEyzxQvhrJRuzC%2Fbp8dNCeclkunLDJWJF%2BBSuotic1dkd7w8O1KFoRyZ%2FmM7JuyEXWKTs8DXlueM%2B5Oj5wzfWvRxm7kDPuJqTYcDqLb8bcYljCd9%2B8FG%2BqfwjOsO1B060CVJIqtuMvDWtJOLuxOK4mN7ZFS36BMNm648QGOqUB0Q17WoDxjt1CPkDTpN%2B341SWil7G2FdJJglLknrwwSwj3GjWNr63Md80KPNAnWmxLR4Oue7O4vzsPymNPP3tqafqZ7Ynmx3ALaWVrFppKQDCa0nnkJZw14jKAdUM9GtNV%2FU%2Fd8mSLOaqQ2wM%2FG67fq2o8RugCgGmRVe%2BcnXZkm%2FttYmenEzoJSrIak5qA9COTyiGnRhLVi1LE0BPxk70gsZNksTq&X-Amz-Signature=97570231f61cfc70e97237742d3ed27f6e20f562718355ef196d7d15de0559e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=1f63343151a627d41623b78466e552e4c2ee0e3a93e90a3141a0a77f95dfd107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=c64d07381ac84d36d4f3f25c498e7673515f8bfd2127a0f3a627dbd9ae49eb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=ddc5d26595017d781dd007f6be122db35b46bf96925e51412339be97be29bda5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=3b69160683ab1edf38c7b4417b0884cc5502a1fa5d59917f1fcadd9533d032c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=e65470d1d7421650df4009446318a7f6e54b18f325d33f8f75ec44269f9f41c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AJIG4Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvscSd1n8w70%2BKS%2BFLhbgabyQcL67qpC5x5%2BtgyZUscQIhAOh79JZwP3%2Fo1S0IguHMdtvPAz4ihCfYSecI8MdYgT7FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqvekUclAlB%2B%2BLWyQq3AOhMBqKqtBuCg9Qi3YB%2BNiBzEfBf5vUR%2Frqj0J73iwGtXfvQeWKZdM8i0cWe%2Foxeu3Libqnb8scKYYxahVBtW6C4nMwh%2FIeEISAepeSse2xFfLDw4Be3Rh7UsvN9GpZvtNoemqG0hGy4YRX6tQq4m4vqHtySaK70k5GkwwyDV4N1ho4ifhejbjewCC%2FX%2BOrF3VHZRJWWb%2Fv5aVHv6uMaHu5w%2FiqGcbQIj%2BQhhACwtI5hMi32DNe7h0uHyGYHFDZnMygdXkYrZiO6PZWJ9SUdmLJSK66pIEsfj72qQ94PacQVr53OcjsXCxKH%2BA4QU%2FStIwBqGSyxw8wFhUjQw8bM94%2FH9DonJ9OYd1QeRwkio2hfoz%2FFs%2BRXioYmw2EdQcSD40VZKPyefiuSC3b0LbBvI8iqCXKkomq%2BRebxo3RGsl8VZKzYC1Gxnz%2FkbyJgKuBRrtZ3bfYxNUinS03LFTtmjw9hDV6Hf3MqSR0Q1ZWEjk2nimjeVyDhvoDPP9S4CCl0yja500IIax4CPZIdaDawOojV7mpNuSIGnvVV7Yad03yOCPzizCmo6rcrEYyAfTz89nnnzdAmWJjJbAeBCR0RnMdHMLidwjr8SXnBxWyEBe9diZ7MjQp0WMdSfBliTCLu%2BPEBjqkAbgd2yEKz8R1a%2FzVpo7m5Nlk89hCHR3uHfW3bly5fBGp62K8aKPdChkJFQ00dp5g5MVzDl8Z7oFtejdCXdtAqVfIEGsa6oDC3bMK9rCFh%2BQLoZ4tTLkqR8NfdJsji98NTWxIBSulasAgSv8eA6bLpFnmdOzIHIdokfkQvLmDetDdlKFQYbDh591rHpDktLq%2Bd6s2k2mB%2FPpOv7Xp8SlO8bclswL8&X-Amz-Signature=fdf732b1c5bad2299fbfb9bc66325396639624fe14b4f8d0e5e3c550aa7b25ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
