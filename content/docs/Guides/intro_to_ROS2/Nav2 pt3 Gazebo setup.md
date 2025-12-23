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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=48384816f6b15d9a6dd8e479a2ddc6b71a97f4ebf1800144d1bd847c639534f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=83d11b957bd2d36f115dd5ff43d06fb0da1b2bc10d7f630921650ced0d438a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=993bd0e3faa07f8f1fb55b062d73bc6e3bb74689152a10d48394aac5ecf19d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=e4b7cf8f63bf37e42496aaac46f172643a65ed66ebbf691a21561fa3a834588a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665TOXB45%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCkryMTk5laqGs3EkTgGeAJi%2F%2FeyuYjjl2%2BNZReCcceNwIhAIegKxLsHf3rGMvzZ8VhzQ7LlDwv49F4ANJ5lRdTXmomKv8DCAMQABoMNjM3NDIzMTgzODA1Igxw%2BQ9BktqS795aKNUq3AP%2BnxaSjU70Ciy12mWLf1PV6kbqcHbQv28VjDPLcUBlOZVGDT63B1olGOe4lt8npHBJqlNYx6unCsS%2FXBdGfqj9ULI2Yk58RrrdzAULCkoHq4xjlwb1pYxgreHZFu%2FZGcmScMZd9C8hVz1gyi8SGnP4P0FSjR5q2IMmW27eIuwOSDgPN5TH9VMNnEirBbUeAnKUXIyK1XIETClHyjBZUnCnrGOrG7Gs4LOOgxKGsSHkZrrbfL5VtXD6IAZvCFgUrUo2lSsQDN8wRNNSfSa%2BMRMydvayGNmsmyfuhYvTDeyLEXNkv6icA8omIr9gJXDvuzddGNJMIOkJ42wMSzK7Cm2DGYL8XNGqhlKKrve2kaV6Eda2Xw4%2BXSsyNEfvNExNdlx2koJijNIiPyng0iS3mcAdt5RMF7N%2B3dl02x056R0oNbqmMG0se%2Fy8LOsub67IHilandPTtcKwa7ePrQ7FBO48naYupS%2BT%2Fg9RymztT6%2BmWINfXebauO6lAHkir0elVxzuYESA%2Fzbzxi09BD60rc7QMT3ee0%2B7fMMgpcGY1rObnGg6kvitooR4ZOPI6RObA3bR5XSBr%2F%2B1I7uhTIUkilBVOak6YOj4i3SYoVhqtJNPpAkK7%2BgH7JjdmWFMFTCs4KfKBjqkAYVXzQkh0iSo8p1PmfOjksInmLAajDBPHXKyRGYP61L1TiXIdaLTX3AamK9L1aZBfDMAIUCVQMMv3iY%2Fe9Ojys4AA68d%2BAEHuWW5UL38cRkKYTSDC8Thgp%2Fn7kfuDaO0mwdDbQjHMVGSHVr0YUKgqRzKZvACPMOYgSISR01ckDTufjILHYSuUYCL%2FgVzvwoXR82xQZJy18KZGPbp1a9Nym%2B0O70z&X-Amz-Signature=c86d9d4446822b4c6f9c66e3965a78c8fda3a2f3e1a99b796aa5c2f0f042bd8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=8fe39b3586ddf151c46e93ef5f730de3aef06d21683385f90a8089d435fe3e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=e69b92b18f8dbc33cefe51b23ba7f154b5d47869db162f7fe85a9107a58859e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=c4a0077ae89b62428f77ed304698058090adc79fe91fdb903d8a01c94deb0d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=1d8c1b5e7b76dfcc8bc6cd4cb0a2cf12c589c856c76bffc73c74fc20363348f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=8483ff304cc6dc2f988250d3043773a5c02259f4be30a92b7475517440dbab1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPNQOVBV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGfRrVs9dZtriiFp1T8CmFpnOVifxKo%2FVVhi1%2FPH4lO%2BAiA9fl6AwmHaGqDx07F4nt%2FQOBpG%2FSTCXf9DWdoPDTQz2Sr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMEKcu7piKVhy4SSiIKtwDkOAk1cMHNg3FMMCtF7vgzhWFxO3ZVAigMjcDsZrdOJrd1PPVkJlLwl5mCiyr9QWBWdGLiIDGON1Fhuy%2FPDAwKSxBYFzJNDTsMMJnbnbgrFeLC3cOKtY3Lygml6IGadrLx8Wt5tDSde96ZJMgWrHCc7xrF2dot2vryqOkTQk2L9cCbmYXHyrfpL9ZYe0fEy9ZBd74uZ1lNhDsKyHzQ0%2FTdCfGuREVa3W7ju%2FwiM1np2G38lk6KY5ReAcvB4i0WTIoZQdIQIIuVb0%2F9iiAp5b8ALsHbvmYeMoNwLtXmni7sYEuoNAm88Tye3ESRb5k83Jhq9lzMu92yiT%2Bd2x6WBgqqERb8%2BXQHk7IF06bkpWEhZRMGyCtRCbchwh9Kq56e1628i7voQU3fhzFpx7j2zkYQb2izJY4pfbCH1sQFXwcOva6jcoMy8RB2aZLtNEviu2N6L8ahKyJPR5JaOdLLnTrlpmi5jmTbDHTsjz7PrKgoFCKmz0JMLhJW7BxgWbfQWf8e0tKmYe3K%2BlZYS42IwdDE4PiwmFJ5dI7P5vGvrCQsJKVUP9FOeYNYnsaguItCV3NFDgB6JspamwyyHXmdYrhRUv6PB5%2Fo83ABrx5%2BIvIS3VQkyAZ3ey4M2Ws8qEwp%2BCnygY6pgFtfbV%2BDJBgFYGqnrdfF%2FeRyvab5uEswlPTJXhmWxOalQJ8%2F3iNn6y5X0q2zRcnkLdxNcAnlnvdiBQ1W7rzzip3Wy2pE%2F9kKIU9Y0Ulvg6H4H7At3kXMlYX8EBnnipfoiT%2FXtl%2FIQ4d8FGbY39AsG6Ky6roNzYipmK9Yy0sQ26pZ0GfMxC05YgpLFZoad0ZIBxR1zs3Iqt9sxjkffZ3mcEEE%2Fd3ZOm9&X-Amz-Signature=46429e521f0f9f1e5a980c1562a4b6cd2572d9ca32d97700c6ca79fab4d58ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


