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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=67e4b7099df1d10d95f472b9aade6a4df6fe63dfbfbd514b96463975b6036f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=2188c454ddc4c0f595aae607fea533a4a0b8558109a7481120ea199bbadbe701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=5018cc1b3b586817f5a451f5ee6a8bbceeaee40f63a6b4b9b41f061f733756c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=00ef17499ff8388ab288d9b72502f5bbca60622dde84bca076b8b7a0ec8bc00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMIUELUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGznIzDdJfyqAZZMPR4fLJBcQfi6PwFsnz1pyDI2nimAAiB8THUWe9mGezXSfFWucWUxLhPgHa6qw4oPYOJYYZgH1Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxBoh71D8E9PlWEtYKtwDRHUmiTYZom2BZ9hP0ZqXwYkMufsDahqHpaDgkLOE6JLsj1eA%2FL8wLkcATRyAVb5gVYfukr9nRJXISqA1fFMgSUZwk7adPukpl%2FfgWOYfssMOHFK9rxqaJjKlK%2FlzJdGtPfruaiYRv4OH1fwv%2BdZM%2FJCuxNZyRYfPeqlHnmqUXUbgLSgNHB2borJlrJ9TaZr73fh%2FLmW9LaM7fzmmNFv5Zyx9M7VjoVYgQ%2BCkummiXZOsGXaeLO4l46zAMJmGxXn1yNL2Iwh4SE96fgZFW5LzLwx0fuxCQ4Z7zQX7vPhheCItCeIU0EJLqrhePGB1evLRO%2BhfdVpKKjOqwOLzFVZmYzbUM6wSBQBEnDcxINfK1c12oDp6HH60lbU8UdbmZZ1vtC7aKsi0phHI6T8gFd1CKPMRXPG5f3ug11X5yDGy%2FECejN%2FalQ6OSjXrHKye3aj2aX6XheCrhHdnu9cyCvfKG4cG82dHPll%2FE0ZATdFSuPHiC0sPFSEehELPgB8GJFaAA4z4hASgtWITwT%2Bv0Ag0SAQz6DrsUfQAgLItADZASdtj6soJb7FzKXjUP6JvkYoT2iiRF7DUcwdzh4p87BExE789AW6%2BRvwpVSRoqAIYklwGoEhd2dD8TXOWrGgwge%2F7xAY6pgFHi%2BS9PULj5cRVlSocod%2BnL5WGnA4IH%2FMAKfvvR1ziL75hS09JMJZoqXn8dPD3c8oZb7MvC9pvN65YbEq50IJ3Y6%2BWQHsnmEAqBheks9EIPwIiCQbg90VXVPJe2R47vjTt3NQO%2Fkugh%2BpvepjLl44TN0wcMp62it6vR39SDJjH10V2twblvhlvQOeUqI0LJLh5JOQUbHNJ0LfNam4gvb3gimCHMaeX&X-Amz-Signature=605db22584caf2e82adba2b1fdfabd6979e18327d2f9ecb77df385a9f8c0eb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=4309e121c60abda4536bf14cdc4a8aef477fec33c555c63dc6fd668cdb556530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=3e0b213cc734a420072e4bd6a9257fe469238212b5694fb7b243130dc4d63c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=a7ae3c25ee4e0204d6423cadd27f560d308331ee3d964634bcbb08f2bdceb029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=a264b753b260e470345c0ec90b858fced9aa13a4161ca3b52cb691582ec7793d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=f9e9e6256501dbd31a8a87cf65b09400978dfe861fbc6c4cf67c304ed5e2c627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICK5HUZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzjtyEkPJYfhfJL92C6PofCEcqZ8wEHURbJQx4wSGBeAiEAi7cQRbc4Nj2yWJdZgBQaMUXM90HBPcTOFYWS2T%2FciGYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F6eR4qC7VY8wXQoircA3HPe3hnTmgsZzN25OKHj69JjRO78%2Fek4jqzNCMl8m3qRKI8NxuoYmEx8mZDT0z6oRJcvNtUf1a0GPU12Wi4P6gjt0r6JhVb%2FEk5Qoc%2Fke0%2FS5X3vqTY9sJDgNwFDCCkuvuL1a0Riq%2BRBGmKAZIEOreygsd88XhFb1vZPQIMw9V%2Bbhi0x4TkquR%2BTlPPJhzwFWI2T010G6HPKyhOmaVyn2LpPrCdWSinKVCH%2BqlsNB5dBxEr5nG6P4wUQvgzsglbxxCHS3dOUjjt3rukRj2tHWJB%2FQq%2FsTLNvSBHjHzhFyuZQJf0x3OGt6Y6cR3wZM%2FIGpsfSPSah0492MjP34kGonM9sAyCdWv8hwMzzl0Xw6AjuF%2F%2FEDwpuyQqOFKHofTQEIUg1zvCcZzGd54sW66BloZdciO8mQBn5XPIMChqfrjOHKgC6b9YxOtp471A6AiSOC3GSqPdyzd67AyxMwCJo9AEpHNSRxCDOid1cOLNwj6n%2B3%2FsqRHNaVSl4iqGDHXo1xmqxqzV%2Bue3F5TT0opy5IbkXmD23ooQtz5smZr3eiyq967bIMeMsfB%2B8IGt1sVeuXSpcgsx%2Fd20oHKu62hrj9d6BGgd8LaflQ%2BK8Ehuct36sCXRbdKdzsYtXEpuMJDu%2B8QGOqUBwndRsTPtmP7tsqSLpuOMsD9ALcFzDqzZdlNqhoPb1o2t7qN2UHsIySNJ0qstoL1kSWBXBrZoW8J9y%2FQE%2BbX%2F%2BNOQTF33YW9Th1H0tfxBrZ72cFVZmN9JsqmHnz1lSUQAdrpDtIfJLh9gP29ajHCKxzHwgRcP6p5zRSpnD%2B8LRF%2FrF0FYdV0XFP6wlNwLlsOSSfxTwWyeuf1MJj8Mu9WY0w2JuX53&X-Amz-Signature=ee292d010f904ed0530d80c8770a45669db445991558e465c982f94a96a433a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
