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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=c54d3bbb119b0d503d4d023e90ad8e03054f7f292e2a80dee73bbfaf9588ba45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=51ea97875d842db3c30421e19f2b3eb3ead64c341f954c4a0fc47afd8f6899cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=a9a6996460e35917cc85a7185cdc180639a4cd0142aca04193b1e1d50c184a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=45e97e8a906da0beb4562589409d5c1c412d447f85d10628f99475c4f6300e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNWCPPH%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDslumcL7dBbMMS8i86dvgCAvx8EryTMcbLJJ0hbJthhAiBiJicegPCvotPP5IX3ykBjJH8rmjoHNJJdvA8pIJBOxyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMDaCywCRDbFqm8TS5KtwD1NvWIhMr7vLFRloF%2FtHZIrURgC5NEl3toNJlqClrXCC0WporIg%2BFWzD%2BPhV5GcGqUxGR9M75WOxymSfmitRdpFVwcRGqkUYI7T7J%2BI7v1eszKX6%2FUmRABcK7rAuQpgoPV2LNIL6yCUh6a6WIVsE3G0WzHMZfnSOZzji2M45%2B9aYZJLaXO7glO34c%2Byhm9sHZXptiTpT1fKHW0PNN1HF%2FuPBdbzmiNtfyoLZh4rLiFvE%2FfGNYlKwwNn3TDhvQnVJJ5CCOaPS56gCgGJfgFtUUqJgaFhsVT9CePpFIVSGbrLWI6Euw3SxpW1nIlMx0%2Fq%2BLMGNHWCiSB09IwXvaEwvgbLnTC95bFHvY5gPoTmtUcOBONXgDnWD8wYKRIqeHcewyDaQ1PJnhoEpqIa8cj8dexWbkzbabiMIVVzxaj1%2BmAWGLLvy9M%2BYvQFhurXOlczLg%2FlB%2BvZV2Tp3Izn2KiTBclooiISFfgCbzDyJu%2BzTFJrTbvLGp8KkbB8Xcn3resn0RpDcqOicjHsRCqUTIr2LOOLuxKu1CCoUh3n53d1e%2F6bzDYjMjVGMybU%2BcvbFA8uwdoWD4Fklo7YN0nl%2BQ7DjVIdSuP8%2FscOlvu%2BRnYjvySYXcxhVJ3IItNuhBn20wicuCygY6pgEXsFYwWsBVqFgafEA0werOxoD8JyqB0QPOzoZkn4i6%2B%2B8n5CCLbwhFiQzyeMzyvnj%2FgOQCk7IQTY5arTe5CxiJPn21ysjXcsOuohXgFdC4bp%2BQVe1yoDC9%2FsDfhNoZyK2jInFO50NZFau8Frs4QHiJK0%2BbiJvHMSyryffGoM%2BawiCQaJBJNZ4rF9N7G37byNQDx99dvvCX7RuIghd61owvE50tCSjB&X-Amz-Signature=206fb49b6f6722c4d827e858c57b54a7c0cc3792b71a6036b3c16af4417f06c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=5ea270976da7b54ca2c5814899df024b160635ec367ed4247771df4dacd9fc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=e474e27f632d15d7366fd316f871334be55aba5d43e18ee0f324f72fd2d931ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=5b175baebf04a798baa6c60af1ed28f95c93d42dcf6c62fa38105c04b8711635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=66428394ff30e288498876d19f66f252f1dd85747a4610023d5ae286542062df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=e1e7fa53873d91bf459822ec7141440556f68d5a70e9b3d7b9324a92d5ecf107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UNN3DQ3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqjf3fxhuRgBJP1AoOr%2FfU6y2rY%2BUnhusTb7mAbK5aVAiEA608yrFtXjY%2Bze%2FsZJKM8m9ZQNFoO5U8vq5tq1vR0yUgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGwt2BFsrC7qXeXQnSrcA4%2Fvile0GPzZCgg99QueKR5MIhTwAC4eWfowIH5RM2ZeKurk3gmgEBkuk9jV8J8Ql04qse0yAn%2FlFnaL8yUqMxLQ6ckvJMFiGPgFKnn9BGOdY8DOq8UwFFyz0wELDCaoMp1Z5AkP9AEC5zEIgey5Jil9ARSgalcEwPLwdot2wwC5rUOBBinEV9FyVcN4BNZmEAr3ffDTa%2BgIb2nneMeIseZbtVlKCzCu2sRIhMvuP1%2Fup1hCBRLQ6M0GhwHAu5GHXUqd3dhao3zxGMbRXmAasrVolYPS%2BclowVLC3nMeGEjO1X9%2Bj7hZIxFTRJuJHd7z3MiiCao1HPS2j%2FjX9RhNPEASuNfEea9GtGpZ6ZYRpqH9EO4oR%2F72OSZ0YdJlZPZB2iJVGjF7L%2FNG7%2BvaRRxIaFQ5WSZ5oM6HF1OBufG8b%2Bc3PcYEatRazeSTwiTIX9crl9F24cghn3MGZYY6Fpj7xTnLWIi3%2F2itIv%2B6nR8P5FgL8kHbIjMn8vA9oMwBKIPV4i4h1xajuizykuQHzsfNpq1zC0PoYt5LRlG8SMo3adfQqMuwyD4wirgqPJ5U1JVtcxVm261fDLbjj3PBOPRKnvQPne6eVDrk666wewfnZSZPSYGS2W4jH5jTyqzmMMLKgsoGOqUB2%2FlX7rVHYklk2KbT7Xw4ElxyA7OTWCGKBsSZdV4TIBVACrwwTouO0xQqbousN%2FVjgGVAD%2F7nU5TqfyjxiKR4FOWRPeF50iDDjoNQYxch2ODFUNcD8d3bnNQP99tb1z0Unw0aVT801norBs2pouU%2BiKCNI%2B16CJQGCuQ2XztxRUKUO%2FfxfgHkROJH1%2Bu78Kr7IYrZTWR1mShmsptSmyABPEJrnRim&X-Amz-Signature=17c1af13b33aeab302945e184031e4f14509c2e22bc39415c7c28773d38a2fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


