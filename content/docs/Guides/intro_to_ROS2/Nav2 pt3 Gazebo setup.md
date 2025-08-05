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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=1635b06781148910b6954918272116acadba4cd8793eb19731d19ce16b27cb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=72dbf7f3ca67985c8ee0d1e214326d807386569fa36ed8bafb35fa1bb1b4c7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=0301783958ea862192094f55c3d3441d18c5df422d5c4beea8cb6b7b3c842298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=591dd8af42375c0213090e7510610463c577230e43eca3668e6ce77027772101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IE2CRC7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCTHr99V0a6THee5Vt6CsqQ84e1UHcRB0OzhCuTd8MBSwIgAmNlSzylc5yYRMCfAiPZrDFgWQnok1Y2hsz7nzb9B%2B8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDM6vz0q47bzRY488VyrcA8BdB31IgXh1drAhFPaDlDgImX0ZG6bbVjWk9hpiY3tJM%2FHI%2BgzMGbFhwaPLySvv3xgc4s58gbsfxo28ZT5o99Yw9%2FKcTvxXxLz%2B6AWviN7PZDYwxTN3M3ksVLIFoxSwfXZfIODdtvHU3q4ggX9symQiVMQcW42mSRx%2F8qkYOW2bTJ8wrDnaAd9WnhFHXL0UeaExEKdU177iNqDAbPKylP2qkKiSZhi7AZiN6ZmhNJxyo6bq81ovdsLi3xKxvwgRYV1lhTFGI7f6s96LMzXxPDA2SgL4Cfz7nlaRGyV4lSk29JNtA0hnFagjt8Kbk833B05hh0ygNgmhBKbqtikKPNtdzbcrNKlVtxfm9GXWPKYdPzEHY4%2BLv%2FD2WTzKeeRgmz%2Bu0NyS%2F305Kw3a5OkC4I0UCmr3CX4TIICIMWhfA9pK09op3BEiuIshkPo1NZCI9Hk3%2BtcMCxNFtPISoF3Xn8TnC%2FnXjCoXnRSCdoMG6r4juqRccBZfpOFGMuVN%2BnnaIQwnnBugP8ImC4HzC4e9%2BDZiDpdURHe%2B3%2Fu6%2Bp0yI4SfOls%2BXnHaOCRu7z5b%2B%2B7Hf%2BOTVmWMPAjwhs%2FEY6tMnQj7KBHmqUHfavcVP05%2FukcwQQ2A7dmemBVF8c3tMMmFyMQGOqUBbkhE92ha71y%2F91kxtduspaleO3IOpI5LSZ0%2B5Uzqgfxeger3xkyZFLLwG0DOrR5%2B7r4EY8yK%2B7XqBeMdwFUZasCron5bFwQNPt7oKDxqRXYXDiklKzE00UquibrK9%2Bvzc6Juk%2Fin8JzpiDT4MrYwAljJ8AgVymDGIaIfnl00e%2Fls2vWiDYA9TqEU7tDi5f%2BiBKsf6%2BnPhW%2FcCPvE7dIbl75QIW4C&X-Amz-Signature=ee182b0eb15f7770a2330e9bd1fe3582af5265348544a30d220625eb5ee59b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=93cd3c8696a8e36472c19e47b1f548e0ac17cf9adab384bb97f9b7fe6f7885c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=7438239ceb30493a76a225df9442c0c0030c430117a15e15a5861cecf5b458e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=752cc752894f098f2fa1217be4f790e4757cb2d3f150fe02a8dfa690b7ffcede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=51016d5b826dec38583d1c7a311a8647f088d9b5b469ae8076780d8d31f69704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=0606c22f9973c1e89c3c2e1064ebfe978b4265f77f4603d9f5952ec8a15f7ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWDFKR4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDB7wGBOhg3BwxIziyu9sLkh73a4Py%2BNkuztKhF07OegQIhAM9spXHMPVMNCNG0boePq0JESoBmJ6UPfSCUZaqtyDmkKv8DCF4QABoMNjM3NDIzMTgzODA1IgwkOumha66ZOxtHVdQq3AMQksLdZfzmEpWuqeVgD1UhmWPcKRhJQAo%2FOLQTsuJDIZwi2WJzqE16EIXhX0%2BIxucne0hmWx0gG0cnRwGy2ecy2Dp%2B5jmdYYsrV%2FqOoJxQ%2Bx9Q8McuUnHzdQK4DzjOK67iX8xyz3NHKfimYDWG0kvUVPFgy1vaV9zRMYORjZ9%2FICq5OB8o6t0zuP2V%2BGT1GvoLaFnFzDgERQ9trm5SOwW%2B0Wbi%2B%2BVuCpzTOy1uw3zT5j9ga5f4RswatoyX1wy4MRUYcTJFp4GbSaUh29zit3PmiohD9pPodOqQTMMioqO8nMEDeYEKKzsoI6jSgkBwvlYGr55Qq1Hz8iADuNvw9IfvyJl8Lr3B7A2iYqWOl7XyY9KZZq%2B0%2BGw8LCIsXIzKLpZSa1b42yv%2Fg3o1h6EjfY0Zti0w5VauMoczDKo1q5y2iPU35HifDNaSoOOStgr9gE6OCTbaOnrmPFjSmDxXZipy4iCoe%2FEw3qtXq5BpHve7zOoW%2BiSaNdpvV9NmHxKqnbvN7NEtr8z99oLTGa1%2FKowFLmcAalzfd7FZN%2BmjL3fxWzTOCD4DFcL5uZ9nnwN8LkPIUryBX5Hur6yoO2SCaAg7C5YSFfD4qpOMBEyedfOR4RQtL3dl3LVeULxYhzDhhMjEBjqkAa5hMqZnyE1pfzXjGPKJbgpNIQDIFArWGqAgZNovWeyxV8T8WqLG3nzxSSjaKOuEbq%2F1GKIKuhPQfAplk5ZbF%2FZwt7jZAEEYuB44wcHrSLDFSSmRD2BoZ2R%2BSyW7h7RvHGxFcO6OeOjCMlUcks5SWh0M3rS1CnOfNLQ1MjAbJ4mTIJhorPTzZSH7gB3VLjvqp5CD8X1AIDUo%2BIjq44LxNQeGvvsH&X-Amz-Signature=db7042d8db4d7916151b1608cf7aa98fc455ffa2da798dc6730e57fb01a61d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
