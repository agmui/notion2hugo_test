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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=c46b1514cea1ca078b35075809d5322c4c14a17a3551e5c658104d5a93798c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=27ca974dd82d6659c2b7d595ab08d39c7fae2456c2594cfa157fff2910d03d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=aff913fac1312c93723a5ac56583f20160d41114babbaa5a7c9bfad2f574b7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=7cbf59c2b948f06be5ea30f13209f7d9a4d9dae737da46eaa9645399b3612871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQF6U7QC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnnj1ooyteCMX9zEuLgSC51lJu42SSHwSDJJmfRTe8RwIhAInK4UxPGN6o%2B60mvcooK0Udun9mSpwrItAkkUtg1G%2BPKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd3dyG%2FSUtDuoPbNYq3AP1G%2BbNNfue3FWQsrlKxV%2BQ%2FVpKRBGSKwaJUd9lJmm3KaLC0T83iie00FJz0Aizesyryw5syCR0%2BBat%2BnLlmDxFt1wRCZKutIJ59zHDao5PpZ%2BrGn0jOlMcw%2Bm5m0pF7%2BuYpbzSWEySF3JJbsiB98Azw4x2I0rJcdO5MdFtaUCX7OMRP%2BbGCDhoHHeswphgPXeOmv7t96wHbIJjEuSTUd%2BLtQwli4phxnOp%2BfVSZByCI3aa2aN3F4wOd71et2tUQ7KWzaM%2FGmVLGGEhjm9We63lGyVpfFO9%2BcfKt7eWb5mcL3rR9VKfWripC5Jp7DBbuZMGMQIVAvhw7XpDfvrH%2F1eYkTg4jTiW%2F7MmyDBZVZg%2FKep6JOi9qYkUhltLlqK3EK9P0bQ%2FS9lG298rXOohrDTkrW%2FKcoIZDPd9J3LbtxoO8p4yVjr477sDK4cDW%2FhOnkgO9l8ANx0U%2FT1%2B%2BkhFYalPjE0qYjRzqD4hIcVBA%2FHEmVpzkJrXE2bQMJ4MDq%2BED7OzgVPN5LY%2BghJ0f7%2FbfqrU5r7Ab0Uu6LtDMzu4SsojV95B58zuKYczNFr53vU0TnMFNIgw3g0cjkP6GDmQxmM54U7%2FJrrZzpHbSrvYf8KNAU9UOXLHxvwJ6SW9cDDFuuPEBjqkAeozwbJBW9P9SVZ%2BlAS2JfwKRVfynAlNe%2FSA1jk5eHRvbfneYsz2KZxSPWsZEA4luue5AE7ct2BwUin%2BohVCSjcBkYmq0LMr9vh1xua7Hp2%2FsfE%2BG2TO%2FzkvEsu4O%2BlB%2BXnSk7xOQ%2F%2B0ICf0Tc97cKX56mEzyPapu%2BPuImIRJ9PWODXLhpUxxfiBBHs%2BqBI4XqoY9YgqF4odWbBsedWBiuVITo%2FF&X-Amz-Signature=492682a14a4a220732c5074931a8e0e012984c77d64447c906b9a95eea8a0e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=21c1e5c447007772721f7650fc5a9e9562f1d35ab753e2a94765569e605335a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=c83cc14d8fd3afe6a2830731e3648303814f371ab0d1ff90facc6dafa27adb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=a38b8752fc0cc43893e7c03aac80577e316381de780c765a2f78e9d6710e0142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=7dce2f14195431699fa07e837ad704d0d4afb287044494f278de63c239876f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=25d35d602b7c2fbbae7493e5ef93fd4ac9ad482173d6fbfe7ccf6714e750f1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=50e2964f72c83912e95f6e4322df7966ee973e5f7ab7ff43f6c7f5ef1906f080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
