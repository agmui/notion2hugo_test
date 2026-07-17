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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=c1d905ec14e030605b7cc537111c7dc2bcc26291b1da67cbbc181efc28fd517e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=5c50048bc920f307a21e1f01f9239803a03ee7b34bb034c7d75039d8f47a1ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=da5018c1e8f5cea366216ed2df240b6a833d1e6a4a2bc3a0f856b2a7e3228a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=afbe7990c326fde6897e1c56d3c2298918da641f1345e28d3a507b2251eb742f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y727YKOS%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrpyjJYbSxr8YMEkFBBc2AvMNIOr2GqHZwT%2BtG25l1rwIhAKdBvicpRiCT8rDl5lqYC0ASmvAJQdtJ0r5T62FZAFWzKv8DCFQQABoMNjM3NDIzMTgzODA1IgxTxsKCA63cZlNpszUq3AOLYUiOd%2BkTXlZIvXc87Yy6yJkCwuJWrJQQ0PHuNFKFknJ8DbdtT9sYGnMr0i1DB2f7GLZA6T6i48dTFTKQfLz0wxvumX2RhQUppYNzEhw7O626sPmSbc4mD0P9XfiRTGPkdpTjyca9XQ58pDWL7GoXxvNsYs2qnw4%2F782Og9Hfw51uAMqH0S5JLRP0o3WD%2FAcWY7VqpQiV9MPkG8FYrlRXNnghmgiLWqE6WAVSRBnKwqzlbuyW%2FLAKiSIlIIItJYJMlUkZsXNfABfcxJL9Cui9qg0qnfqEQ522dSQRhToK8oLDQqByrSDuxJMrpQa6%2BO1NzlDWKVPpbnYrwz44YRatch0adbrUP13O88hGr3KkVnHU5TmeQfVdzIlYSairrTnQv7%2FHha22stZCvRfe5WxmbchLoevvP8mwpC6wWxwo8oJcSUYicbIyIB8rrfJ6Qb5drtwTef8VdBB%2FxwuFXW%2FUsm2F%2FJz1yvzI2thWJoDaTDK13ItskZ3ory4vutJeJ8s6gMD5dSWknUo2gygUXfTlme3VoXNCkD4C0OHK3kbhabGR8GuCcGygD09VCA%2F0rN%2FT%2BNsDtSl127C6e%2FRh6pkIrPvj9OTnVcnPTc%2FmC86RQ1tOAGzLjpSCAoO%2FLDDvpubSBjqkAfFyq%2BpdIusKW%2BM3we0SOxiyP25xL2UCs9oq6DBZsFn38PBOcFBSQTF00f3W69IVhzL4Q2VNN9DkGtX%2FFVxQDOnpM2eyhyD5VBRyWhrP0xra724VWe%2Fomfvv72Pxkl0a6MsiCsa6Fn6Zo832ZilEPDUFnx3R%2B7ptHs4%2FySnand7gtu3h9UkYa0xsWKdelsay4a0TDQQQDH8t6PX57syLh3btLn1x&X-Amz-Signature=4f2baa181907f19b37ce24334d791a55743755ea9a5ecc3708c1942fd956633e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=19f8fe5dbbd5dee1cc3c7d6e0351129b15ff7bc7cb26fbbf970212d63408c543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=4e26490421a1e8a1681094a1b0307353d8ac4342da7df58a6422a0b36ffef0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=375891348fab6bf9df64a739ce61be709c34f8d46b66eac67851d970cd017d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=beaef79e4d2d0e8f0dfc634b8cbf35d1991efb69a1b0ab713f1f097604c1fdd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=658f552fe44a564feea7b1a60bca655ce5c8a69d081b7b19f985697159d7d14d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633UPJURG%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo5MM%2BXGul180rw5Z7Qku%2FuKfVh0xCxAxhwUshNrYv9AiAnVlJCP5MogIkWQtw1xKwAOsTrWrd3afe7ZG0GLN3wYir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMR51dllNsHo7ICrzaKtwDuRUk0Ob5K8k0TR8Tn8UXS38w%2Fdcb7Unbpi5Ne5tDpmHdw0tDnbcv2hHNuGzNa1Xjx5NIXKbTRqdU%2BGXianj89lde0HZ1uphIAMKP1oZI8ifalD28a%2B5boYxBSQOxzi6L7rz88QKFCO3EyDGVxZzTWR%2FvqTYMsWCibQ7yxiQSn0hEm5YgV9jQ9LTmdG6027zDuKhZjlrH9kqEm7Pj68IjxjXxGBRfFVobSE1SbA1DwcCrS35yz721s%2FULjqOxM7VdfbZ8IUQzJiTBdwMoj7153aOAnO5MBqMj6gH6pV4tvt%2Fx%2FutqwBuQhpP5Eo9vZ86w7%2BP5nZEFgorfM0wRZMeEJ0HEYOHJrwHS2K3skiZdGR3gNX6J29eFpyT1FGnwbE04fN0P%2Bg9MLh%2Bz7ySem7NF9dO43OgbwTMvS0OTL02LNfxdbOa9sY77pO9lo9aS4juCqojXMXJz32yV0EICMHVC0zoC%2FvEOXuQKq%2BifvZoSGuOPnO%2FMLc5Reb8orO0Q%2Fx7m5Vrbu0rJPdwXE175IJVe0%2FPqD6PWk0edVDvveHaRv5rAE%2B5hS5BoGqegt3g3kr6fBvWeseP5%2BN6eVEKF0UcCNm1T1LT1XukS9ktsGBz29PmEB80j8U%2BjVflfpvYwzabm0gY6pgGoteufgrnlMxet0%2B%2FG8CmNLBRJ5HLsC9azvoYhLtzYiTH4l2%2B895%2B4ZT%2FsZuIZo3PMdSHKUrdJC5WjlG5xyE4tOdGEuAvBDwCzc0kwnnljs5y7fBlsUGqCqwfRe6dyR9%2BtPoEMIlb8%2FhoYD8z53POSgg1UtCdYXKkgWBT8xQVF1qc34XZucD2sRuxxjSE4sakWyBpTLsu7DGKInyVR6O%2FqkL10%2Bu2f&X-Amz-Signature=4c4114c40d20d7db29a1a0a9e6ca95b477699904f33bd689d8c2d4498dab3f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


