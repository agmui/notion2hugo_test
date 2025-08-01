---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-30T06:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-30T06:24:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=37833edd244b072c0abfc32f4f864af7d618bfa7f83af46cce5fe59529297947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=b1b9c726c9f1024b150401a3e705e30a25092f905ed6d263e4a71236c3ed89ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=6d4829d88c7e1da8b000352003e8025563753305a61df737fc62013b6d97bf31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=2be3f9596849d8b99e41727565b9ec10e4ef97e93c50dddff4d885ce902d4306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=d832c1bb3e56becad0c1882c2037883faeda28f87495653084531169250cd85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=8720145529ff81c1e62b9013c9d81be0019ec80bdcae0ce579f384b1b4795632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=3ec771dc7a0c995e4977162e9a14e9dd190be2242126da45d230674cfd4ada14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=209b495f4fa4703fa1ee3cb45e38c8d6e81383321b8d8d1cf4abeacb386a1bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=3d28b085f0e984e2212dfcce569896464a36ae0dd9e27df8c1f1849a64faaf29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DSNNS5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKOvVFb2i0CV8ZEwPVMHnWTzwKP%2Fhf670FNoIo4MmGAIhAML4TWQ4jbYHeV2qFsJ2KucdceOxJ6Ircoz4e%2FqKoegHKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGaYNxwU1ipJUSB5gq3AMPZSqgTUjcAFJtUcdH15EgJd%2B9ZNvIZ95LDM%2B%2BLOuNPVzKg1ClReEM9qArdq0wG6ES1NU%2F5lkjp2UjAFYS%2FA3vkaOjVT55yk2CD1wQ2TdN8Ne%2B2%2BTTnFV5Cpk8XJZOYQliDInRYw8JU9nQLTEfF5tUvLEo%2FycwSxpteT%2FSfX10pxa44cswe7nrWuQdcxn4IiA26jLnvykSHvboqMpMavjU%2FfNVmUBfeANFvVEDBpG3dFGU8wTzT1OLm8D6M0SQXWviW%2FwOzm9j8AeYc%2FoDZ%2FHJFbTOYEdlnuDbh4fiHT2yEk8vkBVWhSMBClsKH0AYm33Q9y5CRWJgvMB8vUccih9%2Bm6tD3LbqZp0XWB5%2B9qIDPX1dTXFMUTd17MKmbegQ7F3plPL0OYEsUJgfbRI7Umms2GhDN1vJPpCAfFYd8apDDjrM%2BM7c7FNot847DtcTa6KmrK2QJfWxfUikdOUP90ql0fOj%2F2n6fiB%2Fes3iHU1U6X51xVSpxq5ZgBMC48kuItDoLMI0OtpRahD3K0wedmXD%2FJ5PwB1lM5Oo3YmvOjzOwWxqukTHppiuU8Ivs03fruWIQWbGRt3rYzcqAYawr0z2llFC2YZH6G5UWZuvuzRCSBKVHIDKgMdnqVqf1jDG7q%2FEBjqkAScg8nrqxGsmk6DG7qd%2BlH4HXqcl0kY8%2FmwZbd07BJtMWxv3Nb1qxuPPy6a5Chwzv7P11XJ8oQ%2FgFU4WUoba1rQ0xeh%2FduUBXdOzc4qwYMjYq5s%2BcdBojfcDbxvfW%2BwvEfNlu62YqXlMcZXWIQwjOsAy9MMbCVgbBDSvFl3HMuLoYRpnxMyWsgH6mWfVyaXKiKoV9q51s0t5RSzKRWEZNDz7g1aD&X-Amz-Signature=7c63002826392e3a0bf5b98b2890119894d05a59b4beff869540387ec19bf6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
