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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=28472a0ef9d66f25be591b3dc353f3248116fd37b970a062f097c1a5cfa67702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=45cd4b14669c181006870c88683fcb42a3ddf2483dc0bc61aaadd3776ced967e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=d84d8087ee8e22b8365eb7bfb9a24dc688695724cfc11894b9c9d1bcff0c628e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=d67ac85e4710cc5d68928c641c043e3941fe912ce9ca4606f8df6db79e8e0e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KHVOORZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB3YCBpmbn6RXMSA9FBIr7QEVM2JR0k9B8GEOe%2FwDQFwIgPg47B37qQPdqKWc%2BKYaL90hEsG2VA4ZMu7XyLDmLF%2BcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLVFy24JeMEKfIVISrcA%2Ft%2BCF%2BQ%2Bfz8467SOqfWMXsw122MVvCM%2FZLDWAGxKkTht45ayfC6ae%2BzOs9YmI2URIQ77TekIWi8GjgDNWsnNSNzQmbAfegfCPiqcWKAnkGscEPbFMt4ejsAOfzOPCTijLJ35JqfAExrZaEcuwvtETMArGpodPdC%2BAU72UkpKCGd%2FxUUwfjiL8HP87hAo3%2F9hwaIsNO%2F4Ps33pBSm1vstThfLYw6JD0K9vvCrY0ZRrYBpzX6oy3YH0lTTaSeXQY5C9RNl6%2BGD%2F9zQ4RC5ns1zNbJxY%2BzSagkqnX%2FZY11pL9Puzk0SF53UfPI2%2BbkcqvuoA9xpmlVYTUBm47uvizUxuSqrW20WE4F8cOgI%2BRixTOyibPBbUkXndDGejqTb6FKkH4ClC%2B98XuOZnvdppkD8EfsGui%2FMcIbAfIIrajQJFpZ8JifwHGp10yjUYjLilZIhWkFTbyW7%2FFeg4lm8di%2BEAZ1h8uk%2B3VPptk%2BDRQHnOWZSiSajY7YxcrWGDh7lsw3Xd5S57tSpRHEWRpfxXF%2BySgUDIGxNHbUDc9tU%2B0K%2FhSPhqEakX%2FpIHrJRkeP6DO9J%2BSybRGlte0fQ8A4mf1Q8QGaobaPbp3n%2FRSbaKA5p8GwstyFHBFMi76WulUnMJSF3sQGOqUB06i01pA2UTzRLQpOBV3lkCC5aRAEW5%2FF36t97Yr7%2BVHTtZBoeg07edZwkZC%2BUfVGPnLO40TmJLOACXFTL%2FW47ZYqJx2Q7jdBfazyVMf5w9pMGw3pzstPgNPThNkQHYA6ZobuPiHYipkvHx1Hma3m53gRChdXatw6nzdKXhbmMbFDJ9ul4uPbuc9iSyntSP4WDbHdtprmA7MXPt670qbcCzJDw2xu&X-Amz-Signature=e17c0e0fc3114996b264f626d145537dacca7ca10be31f4cfc53aca481afc75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=6708558a66e117f4a36a93a828829530e3ee7cec48b6ae67a992cb5697dc0f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=b553f0d387d19ee3f9eda4bc2714507df28b97e15e5c38014f2fb57ce4b1da56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=15a232f5b4676d263094643d0224783db27d08a6d3339d3fdc4707fd642677d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=8d8cf43990da614fd43150e3771cda09af53545dc87b53c246244246c9864f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=0130b0fc83d8ef5b4f1f1ede0f85ae54f7a7ac809de703b396dd8b2f1ae939f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBTE3RA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA%2FtNM8q5%2B5eC5R2V2VOV8CxBJ9PHxKR2zN%2BfatFSPQIgeerxA7m1Laoq7ZlT2Y9zFUstRytpsCzrlYTK3stgM6cqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbqLgPkuw80ruKHbircA4cVTOTFNArLXFHv6pzepZMt82UW4%2BoofsPxKscTX%2ByTpS0jEeDUeIRzh7DP8jRG2x7nuKGaVm0TDVTWQG%2B4aEEz3VgV8QAvAoeQV0JtKQCHM4rnPi3BDN%2FKnXza442KhDXY4GfPCatPzGAI9gwHWg4nxRHfMaUQNxaKwv91cGOXqioOEGpckACH3SYvIsL3123dxOz%2FN6%2FDm5A6QMBjjaShca32axIAwrNpU%2FRKmSYFftwCm9qhG%2FsNWvF%2BVcwg3a2Xov5mEd3zNHlZD3%2BJLfUpzjnrx0%2BEgBKVprLl26Y6jgyBIQEB5ogPa2pZogv%2FgdmD76MEXFp%2Fh3dV1a2SnczndIwZVnKcV511Eu0EenRHanksNuR07ReTnMPBWARTzWn%2BG5fVn%2F13l2BNzhtAa3AkdW7Tgo7j%2BWk8dTwfbt4%2B47M3fL95ascn3%2FPeHk5wwrRSog7%2FZJRD92pmkn8%2B4HuevPKge9pWfQuiT1I28onOdeZr3TUZvxg%2BVVgXHjxmKF2YuxAYBqLPLSZmnEhj7Lk0cprhDUPkAYiXmScN4IpMsTS3qnQ7TRh%2F6ozRxUsrLMsSf6DvgoTtUKDIj5yHXSTdaIbGr8CQv8Wi8DvNwzlWvEj8DcwrHtjOHi0JMI%2BL3sQGOqUBrD6Lycj2tRQADMkw1URMxMwkYBtlEohPcUJ8zkAW8yYURuUu60MLisItuCkdREJPH2yKQo4t1NauYkyHPjydBPviyIRbJO25NWbHzs4SdlIN7KBwTtW0qeFqpwdLXQPdEs7rdI9DHwlKQnm8stML2lIn7bpF60Gt7GU7VEiDkTRQFfteC3xnVQf%2BThF4REUohgwKDmFbPLyPj7fckl8xphKhRDKd&X-Amz-Signature=5ffeea47ae89cab3e5dd50c56558454ff1f21eea435c8a42f6a8f7a34874b709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
