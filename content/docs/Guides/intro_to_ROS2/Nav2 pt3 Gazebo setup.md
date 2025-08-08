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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=456bf198111b90044b678fecb24f5e59126fbc73fe45736371e565c5e0c458ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=526e2b492a2df1795359991e5f3d0712b6014adef13f319ef083bd9336f5f62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=b0ca1631f8c7aa52745683722783ca7c29696049abd2bee92fb9b001ea5f9d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=c2b2411bc7deb7cea8750544f6c7be0821a8237ec373cd4b2c877b79cf2f319e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MWPYDM6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCvaobB%2B5GATOx21rAQvo0mg8rwNFdwVz5XBjg3M164pwIhAM3FWc3Ms8B5thvvGYHt01jRW%2BtxolnyLHePpKTVX37wKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVwfRv6TRYgaDP%2FCcq3AP2Imbs7zj9YIi1Ztannp5WoDOhpmUQZx6xxIZ9rs%2F%2BOCVUg3CGmXH1%2BQDVia2ABhjbxzxjsYdg3o3uWeY4%2B%2B4pMTBZDuW1kC7CEjpnP%2FA2uF%2B5ih7RsoH%2FbrnLLAb1b2%2FRijjK%2FlYkF0UCt%2FOZcFZ4zr5o1QrhmFgZIFrSVdj9hgi4S98RE47F6ZEYHFyh6JnOEQZ%2BQzf2ObAtQaZ7n2PImRfxhHF2NvkIdX4FeQbigkm2w0hIU0eU6d2LdfQdkg9yW94664Ep2qG9ff79EfBh%2BeroN7FxO2G4fLe1KiVgcPmzHdhoHppbCsY%2FV5x%2Bhov1UjzRJ7nXgx7p608dEDomCSyBTjxX6ZPx94HGr6mJzbKnFnP%2BQ66pyPc9xiw7OqiAcXX4d%2F3Beo8QcGf6XcnWr86ZrqmQ6KTfXWbQa6XX%2FYnA8AZXyjEld6umxQbefrh30ysy1RggdLErSIJvB3X%2BTErJ9R6jif4T3w%2BVtGvs9RLv3kkRgFTLo%2FzNu9pTk2Uwm%2BT9LPIBpZFhapOgLp52mAkcrwLoTtFAbM6%2BlwrrnrPraENBFduah%2B0y3lAR314OZYc4Ec%2Fw90Ro%2F3nuEtUWXJQSuVX9lXfY%2BkRLpBx8vRuyLAzcJwCQtZXUMjDO29fEBjqkAZG5z3BoI013bT9FoQ%2B2rRf4%2BxWE%2B1PZlT3Ok0qYTsbP5CnoxZJVYnhU1jJUHsm7OhZ9TVgtimorI3by3xUzslxULe%2B7HiD8a9%2FOE6sI03iAlYidjbSq66J6b3X6M8gjKGnXoyKFnATfuwv%2FpfQVmkufq%2F1zB9%2B0Zbvwwzeeq7iNS%2B8aAiT8mLu5AVI4tuCh%2FmE4vUjwxvGpjl1SkcRdvs6Wx9G7&X-Amz-Signature=9eb3a7d943b69c493b1339ce4037b8013c648d3727726a717f1b3beabdf61f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=913fe04588a57b7b85e6abff8fb2dd47298fce2ac3b69d58ab7deb4ac854bb18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=74edcc20ef9204b2a5e7d001c88ce40110b42f1266f62f0f67c5ea1042d776e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=18ed1d11b30a8e9c691a61ea649808cd94bef7c17a6f3ed9b40411a85e8aa8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=066637e0d1792afc0c8c0d0df32205e06933554549c0048ee1d100debf502eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=44f9edbee1af957deb85e6e879e120143e19b7c8efa9d7e0bd330444d0f9538f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4SXQDOK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDs5JoX1KR4jIX79NZCaj7Q40rZ3GNENAqD6loBbx%2FjjwIgT20tdN1zhA4P5mzCDtLFesuRRhzHVwFPsACRd0%2FfceAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uFwA6fwj7%2FmGMpyrcA0UBKjEfCVctyVosrRQuEq7tv9Pb%2Br572XQCKMuq%2BGASfCo6kQ68lCGiG5yIbIIwyvHW0s92O7qdILigquajRXrogEPu0ahQvhuaZKSDbi9JRKlLcrnIENOMhZkq4tAeFmviKu0MbdvEr6mm9gpNjMFCFCFpsOWh0Qw83dhkR0jgO8Rkk2C1n%2BSNdGxK7X9eDLjr9WCFd13H%2F%2BsMuutdARNjrV6unsi0XDcjHEnYsD8l5dLTIjB2XtytzJJ4hCs5CtUmlXp9zWVsnlfGp0d47zwkSOutc9Ngf1r9AuRvJ3tK%2Fdyp%2BvarKH9s7P6LKdKH5GL0skrWSN%2Focm5oUySN8e1Fszua5dWKvdrBp%2BnBIJJhMZ4mwLFp7mfrqN59tkfRtx8qYUIb7bPKGh58WD8gsX0QLYaFLi%2BU9WHqQhEGpHT7XOBlK6lqSnb8w2iVxpS72yfLLj9%2FSeZnD%2BL%2BKbQ1TQtbfrrXmO5l%2BosgG74vgzsfos4VQgzkxsVsyVmvClziHrmRNiXhvOhSORuROv3ygvggVx%2Bfzwv8dD7vkVoq%2FO7npn0phGaRNjIXMaXF7NrlVKbg4xWYUFaSeyNat3pgiqEFScKVKvJsbF7c63hndZ08eh4rTr4dP6kcIut4MOTb18QGOqUByiUjlenY9kbMzIXdJla4vDEJw8gbVwRmtYKGjrJu9o%2BwOo9ArE%2Bg33dgBX7vN76NOtS3wQBiFieDxrcJ7xCdekZwroFo0DSMTOCkY916Tousul%2BShdmg%2FQEv9DLPlwqlcveFHi3yn0EFd4R20P%2FOFTor08HqJ4y7V6lnX4b%2B1hvusbF4UsBRvAGdtTBs%2BbWpdFjDnhrwMkT1CvwhHQoyiJky%2B1Ik&X-Amz-Signature=f6ba124b030f5af977f2fbe22d9d5a56fbbc9a30b912ae4fccb817325c12f374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
