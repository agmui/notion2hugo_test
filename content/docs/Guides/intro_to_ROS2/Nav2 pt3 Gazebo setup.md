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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=75c35484d8f6331d6783d1d5ec59a6ac32409d7e8f973798065eb1ffebb2b06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=dc17d334fb4f507be67f58e64bd2562927c8d626b8ad3d35c839dfc699bc0880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=49419c69edd93b54bfdc50449c14813d1fa40eae24cb57583fae3aedb4e44755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=54c79c58dd2b8de75562c01f54ef395325a86d102da8f4386c36cea7a36a54c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63KBLAY%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDXEIzWcXuJlWh2MvlsWrNKlzcQaxKGk9CEIHIOsiFPIAiEAg02%2B%2FkFpf56lLLpXEurz6sbl7TET%2FfyRRuk1Jp9xjosq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDGTRcQD7OWbqAJ5muyrcA%2FIYfreEyETbiRDyUbKrX3DmLmENV6YGuLUHk7qr45mpyXGD48dHKHTfkHxcxWCm7sA9QWCYwx14q%2FdNIm7nxAB4NPjsa7UIbvWQr2J3QFZwrWlSWtiwA1tO1ZuT2FRymzSfD8cMAjGmLjfhA4qIlABpE95PMdHds7%2FyMFKXKISmSwoYEzvVq%2F%2FdqazBtfn9Lwm3mWwEIiAZGNhV%2Bz7f%2FbS8g8QEyj5yA53sp5gCHKGfchjXVZ%2FqZx2GrO2GXUnDSpP7UDGcyb2beTsOX7VrDse6bQYzC2sUzgXMopby4b%2BMngQq9DLoYlzqeKSgwZOy9JdKK4DyrlkzFnbuggjbHe8ykOnSRLnBa6LPqjOg6448%2BO0hsnqAnXdIc026G8wXLcQUv3oAcbAaxomU%2FGxW%2BF2yy%2FYIZUXiRITp%2BOaTRNfOETpKrAieLzAmlkcwJr1M6z7j1GXDlHF7OA7%2Bb8RCeuribWicvhBfvtwKn6%2FOhvtaiMO2UVF1xNwMu3y0MPeiW3qitFccYhwFopOpNpSO4j1zZ%2B0GvSN0ioN9Gt7pbkk7HaT%2Bu5SQ%2FIu827%2Bo9lInzq%2F6W242FeBxUbakZIXR3tblMTPoWPLlVPZ6x6oDrfH%2BwtvWH6QoM0%2BY8e2jMM25nNIGOqUBJ58gTRfhvHZBQBjnthNqNvAY0Md%2FDEficbOUPbc9GRyWD5SMFor%2FZLs9b1Xx%2BNZCoVpVCBpT9ZtmaCdhImiS0YTjMjeU2y7Qb2tlXUTeWfz%2FQFt4REVMPW%2FjHUt02wJh1u646hcZB5FLX3vwnxvb3uzEZP4IamGNog3pQZNkPsbvHrGckzYj%2FcDcffFuQObIYho7lVFLF5T%2FmUO2SypNsgenxGe9&X-Amz-Signature=1956a5aa6b1aa7ea0995348dd1ad41bc6364f98af5635e4a62ad0514a24309b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=b0e5d368ee77c78ac7e219aaa09cc770c1001baa1540a99421567eed6c856280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=925e86b6e5ff40af0d485f6f1f4db2f8ebe8e1512b549fd413da29a7bfa65c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=34d0eb18be461fbfbf1219c6bf8fc401a42b7af80246f8318370801c1296c409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=1fdef01f85306f750ad8f821b77cf99661bb5ac5e7909217148bf05a87ec4974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=d85f0c7623ea9e39c862e2f83e1a3cbacab7a5db3062960eb107473bbb7a3c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PI7HL2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBeszXfAQw%2FPN2QoY0YTmHPHxWuihAXYt3GXna%2BHB8bnAiAVYyDlJJv3ZAsNpwk9NoobP%2FvNdJrxvj%2BH6x1qQZ4OGCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMVs7X6%2B%2BWl3Kc%2BkftKtwDEYpDUuf2hHpVZVDSgSpEkgNN22plrEL12EXFPStEJpZ5%2FrwrV9OB66RPL6IhJRhAhqeWR6%2FFyzSTsdtRokYo3MEuGttHIT5v7%2FLrzDNpwsTMzkk1i%2BRpjeDYt48tjSlfehMujkb6DAuTjeZsLwxpoxR%2FhRbfLFbYMU4cia%2BV%2BiiKpBGMLKpfD3ErfxoMffAYyzHk%2BgqTe%2Br3b90z0M2SrxRZPv%2BgSumUGpBBjPMBl4lhxivKEkQQIpdPdrvp7NvTuwBR1ZD2GZzxxwstTBA1Nj8mDDUdA0tSQKAxcKEArx4QEUnJGc3%2BZAHuTiCeAmJvOy4vNs3%2FIeTtuF1ziYmSPC82R1xkjUjudsPlg%2FWigQbvH4a2VrX3zWc0PrSB%2FeYxd5iIykIJRikmFuYbvhYoYzVNmqfcjI8cwDuUk4Un6vkiAemDaCdmykg%2BKE3SY%2FhvoBWqwPRqVOLLuLaL5RiftCbpIUgqRtNtquz0Lb65WmH8KdclIERqFB%2FgUThwodtvdRuzlQdr6rbDM4pZeBy5%2FQBLNDwtN%2BtVq6LYW04m%2FSbh1oI06qJsOnVDG7Eat4xu2slEjlGxThviDFbWRC9K47xd8L3r1qfcZDeORP%2FyLVNQnt2fK4Iy5JmhBAYw4Lmc0gY6pgG8HyVzsR5G0j31euVw7ZbaiVsrlVUT98OSK1d4PWMik0%2FN5yXZVT6Q5EVi7%2B2vW7B4hZn%2BGC47BMiLaDFbWTkkEXM4duuhbj0fRwQTUfMfzA%2FisA%2FF7tRbyY0Q6kWfSW7h9%2BvxNiaYMR1c9DzHM%2FYb7H7sGDt4aujabgFVFzT1nx%2FTUfveSv44mQ9XyYGBEw3aJwrZhyXk0r3zTlcoOJJWQoNYudIB&X-Amz-Signature=12498e1afc245b2bfa2c31e9a2cd100f857d6cd816e2d73e9026106d8f60b3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


