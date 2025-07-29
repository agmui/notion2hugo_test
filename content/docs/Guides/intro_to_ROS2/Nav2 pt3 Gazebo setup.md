---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-29T01:05:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-29T01:05:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=4dc0a73f20d5c9abea23b7f25f5b12248eb590846c5ca52a48558c1130e5e3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=92234bfc181f2ea3d28f894c6085efe0febfe9ad8c171e637c188aa7795a697a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=e2ade39f1b25a1d9b9a9f945629880be11c7da81e90be6ddde5e44966d28f62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=1f5ac9173118fe97e0543b0e2c3ccc678a12dc754a3369249459022a3f71ebf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```bash

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>0.1</max_linear_acceleration>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=5af26d7cd80db51625a1f329c7b31507f3cffd5880f1b926bdbaec02c9150131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=46e21299e9b5187bf7f4ef34868f66207d85d7b5bf758c0b236dcb61ad459dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=4a27d818440f042d6973c9b6a6d534fc4af8d09c0b709d8b40a7c3a3afec35ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=2eaf4d09e2a79a81795445d47ffa9b2eef81a2a23e3f8074889b2f5f054d8d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Updating launch file

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
        DeclareLaunchArgument(name='use_sim_time', default_value='True', description='Flag to enable use_sim_time'),
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=a62d517d681ddd8d0733b8abceea0de1f6a31e8a3a5d236a8d065323d1cf4b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDMYPXH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCPd%2FjQBjhyzadFWCTgH2Kdi6FhXnd64N7aQ4pKv88sOQIgYUZBQlalE6%2F6N6qqwWpNtdI9dQAn5ImzRQ4WPGgEbogqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOCHNT4wtKzvwt8fircA0l0de1AxskK2JUKAzfR6jtJUEXE4XFCMDOZRS5xoMiEteyyN9LRVCaApTXCDFOulnAY%2Ft6%2F6y3RlGE7%2Bdy1kPL3CkxBPc7dkyXPpi8%2F4g9Zevt5MLn%2F5gVlzgprD1asUZ7FMGxsVlnXxGnVVLLMrtZM%2FzMjMtmeaGLUubRRfLcVuzagEyGyf9l9LbDxx7Y%2FNVosO%2BuQfEbuP8tfnfODDUA%2FS98LNY%2F%2FN%2BzzssmqnJM7rddhMFtQulxGNlvTC9wEyt0xBVzOAX7BZM8bqwvuPvMFDjMre1RI0%2BlYJbOI%2BWHMPmYZdhKrllJiocu0SCc%2FpkhCgVKvtAxzbwxmq3upI5n4EamAKr5H5Ukr%2F%2FG2UQQh%2FaYPRcsSWhTRJY2ixRUkFayvjrMG%2FukVmGq%2BJPK8FAQS5CuIshuw4mtfdrkbkppnEIHQnBF%2BC56CLmsL1EH9gOf5eG9lj62XlndUPYjnqAmrFlo0miW6Krzs1Xccstvs3G8HeYpTx%2F%2FckgLuV8e9uImGHG4P%2FZJHPhwuqJIiT9DZ4VtF71LoANg3U0tzoSs2qw12ki0dQKDUJsRcJ1UyvWIYuZms44JbZshIbOxDEnHZismTg7ikg9sOR67r3N6inV8XCn7m0pTv34rrMKyZo8QGOqUBQXgiTHbPANIH%2FYNLG5Wm5XdAnpsNMAjLAkZ5f%2BVusTVdkiXU8xD%2F0fbwf2jp0%2FhD8iDT3qSA2nSToPibUumQaf%2B8Qy1yZE26%2FMw566qAy1duWhhgZJWxS4Kyo0GtmCdznBEb6FUlXA1ncGSTWcIX1ejq6FIssLxir0%2FFb6zJMmcBW4E5O0xFfJrrXWcnQraaGknLYFFDC%2BmxrGWVukFVtH5qOXcS&X-Amz-Signature=cb47b72039719f476306408b0ea4da4ac883745d0b737ad10249e7621dd0b4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
