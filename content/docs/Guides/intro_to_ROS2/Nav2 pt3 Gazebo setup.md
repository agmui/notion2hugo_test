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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=9564bbb94f40f229df94ef1cfe419dd2661865f5976cdc2bc0a3cd13799dcc71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=e60374a5e585786621e6fc8bbb95c003a681f8bfb473799d0a10fbf40881058f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=6b4cb1648d2461edccd9b41615f2b2997c3d13070aba2f142f65f022b5407147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=480c0517d6d550fee720bc59f5a9da4bb16acffcaaefa607050e6f2a56e7aef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VPAP3B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEvZ9TsOgGTh9pMUUspng0zbPUTxXjY7xf0r51FaH3C6AiEAkr2vXAoxcG%2F7QW1zh5wDnqNxMJL%2B9EDRDoeLVS8W6EUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPMmrThvKo5i1ggaircA1Z%2BjpKVAkqoBWs60eWl7eWRNLJ6gVAYOnJhAUmCe8wD%2FmmLcMD4rRt1IhsG4N%2FO45O5U6ddRW1nxwizb2joZI1n2EJY62CskeS38RcFEZTyYiPIcGQs%2FOgB6Ja7XAw0N2TNKDs8475xABbz%2FkyAP33dpUrKN202%2FS%2B2mA9Wea58eroZD3QRRFzWSTyCLkc7p8aXYH3oz2ZIJWCzyf5LsJ32%2BcwmqTTCzz0x05BRw6JRyIapv3C1WtMIL5n7l%2FXKxb9VCrubXtwcGnKd%2FqPCsBF3hU4u19tALqjOoZ8J672eU2HwV0wBV1jOoj8K%2Bp%2FOvMoxR9UXy29iJFyc1GWYDraQ1uf97k4NZeLXJo%2FZDyp8Vq5wPZa15OZNrBexJ0CfTkvaO01FV2sZprY3eBcNaCq%2FxC%2BXzLub51HRKxES8%2F3KpRCD1%2BknfT7QhMG0cau8aJkjbbDbhOSptarZLctcqUziaSel8Fx82e9tzJODjYhpeVnV2ACemVjiUsHQZpQ4oQdhu19ss90vn8mA8rTpTSMl3lAiNuur5kXsLWhrq8%2BYVhk0DM9owt2mBznow3ZKgaRdWOXYOEpMRgmqZGKWURwkwNaaKwkrCIZBtUOPEX0Pd3UQ8N9p57RcllYVMPC318QGOqUBjdH4xsxi5MylldeqRMNk7M5uXIXKbzyQi1WpbguOkJijMPPIzZY%2Bw26UgfPDdBVxAwzF6M96jbyiE%2BxQVFmxNGzjYJChe4MIoj%2BinNfT7UI9u%2FNkCpUbKB2zIcmRh2A2axDXEPvLQjdQfc%2FGmI%2Frz9WTHZTq0apML%2BKzOVT0PYz6cVWxMj%2BhW0Z%2BOukBhUsrVwt7FYvvbhdSwiZ8zmnPACNwCB99&X-Amz-Signature=6b58e8b49b83ccb08a0dac4512c915ee994fd5c819d63b48c2a568703d6f9a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=e8f99681357270a05634a23b00d73c60ae7eaf60c23f40d724984e372eeec002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=b153fc50211b130fb9adbb1ae3144b332b625e7c5a5e0b1c9fe4c0fd98c12537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=a1da4aa195e32911ed8d37bd1c3e979bffc653048bde0eb754fce99cf9dc5ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=fb475ace44e64991d7fc8271b8e9eb54fd050636d7a62d03e085651c36144f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=46a33b372494a14864dc63fc5d47aa0f1930b0f096a3a6722989a8d25c9b529c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KNKXTG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC8aWPxgqkaDcSyaiaubv%2FIWDWdwVfDmAzYG2G5RuJQbgIhAL04OS3LHXI400%2FzKJfTrYMZM4RIhchYRPrWYMjGIQ3QKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxczze9EhjDu0ODynkq3ANbHvFelGKsE2pwGynSHZInPa8GSBg6yhlcRYeUON4hjCjA32MaTi7k0sfAsaMKavJyfW20fojGBZe6ZjCQKl%2BPZS9ItpKq2NqAyylbam5Ar%2B8i6B0TfathtOds81mq2TAgrZTZIR%2FZ9TDfyDQFdsXNE%2FHP9r9GFeBx7xaoAGjBpvA%2BgIfArMcRB5olXOww3j6nf%2BWpNy2ZvzXsdwxhn2JzRzqRSoUZjf90nLMauG6pCFq5ObOc%2F9PUu6TT6ifJmMUh21Tlv%2Bwfb8Q45s%2Bh7POpSl2LuTwV6Gh4y5Sie%2FF6plnNFmfOTL3L85QQUWsZEwmmI6lF0QT2Mz3cx6MotCt%2BxzbJla50gmVHizpoH9e7%2Fxc9uj9Jj9VUkrygIOOGYviybMHfeexwYSuU1t%2FWzB6uOsjSc7hpVe7uw9sWACYuSpTijsexo891QOW%2BJQmr7HEWeWj0F2oxZdW4sJ8xbkv6y5hRh%2FGP%2Bhd43Q%2FO%2FvzIpG55gnLrH1IFEZHHg9NnKrL4Ez4rA8sA%2BUVpBqAe2%2FFbb2megOyB5Ure8S%2FIuXVK1RuYAiOrTiBqHALvEsGHaFovqEbfiogWjgSZzmN8RlWxTKzNN%2FkfwkfT3AO9Gaokq%2BqTvvWMOy6wfuzVbzDvt9fEBjqkAVyZu7hS5qBu9uTT34St0CAaTJOfWGZt1HV5vm76sFS0mYu0h%2FHaHCDvnqKeJlbdKKtufNcb09xoc6oKS2%2F2JUp3tU1hrHdjB0%2BBwnOsAD3NicRu3NlVA0yE4cdNUbj4IGa9kXLCWLT92vKaqbQEHRwrACb976rHO430q2qqQSoQFTKQF5lbKkfMDXt1LkU8zxmnAhLEJ6RWP9%2BTmCZta7pVjjB3&X-Amz-Signature=028340f2489f1a446d88fe9f0105b0b5a279a9291f7a2f64717075973d06ca56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
