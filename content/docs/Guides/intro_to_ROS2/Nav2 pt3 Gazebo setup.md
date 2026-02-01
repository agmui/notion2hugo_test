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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=c4cd42ade5f1caec3c32842f593e4b95ab42eba6c42b78fa5f93d85ffb35b860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=0d2381dc70f4db26fec41dd24ade40c4bbf50381549e15ddf23cf0da43f06688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=fb1f958aff58336a4931f952932511a178f9eb5c08e19389ed66053c298e795c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=02fe8a0f4df389a25fdb27463f3c7d3798cb58647de0f26c2cae27467cb733d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRFUMF6Q%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXiDPf2f%2BxpXCtcueom12dejfd0ncOX6Zr7yiDLdC50AiEAnG61kRjEmuIZJ%2BsdwN76ItUCxaMfFbP4EqrhaKh4%2F%2FcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAzKiwPlWIzlLFCoCrcA1lJDVfIOUIo6Hgt3pV83kmB47eR450U6%2BfvRE64BrCaXxbp2KKSgHDqNPlJwNnZAeD2xRiUYN6kIiV0e4ofJ5lRnqvmvdeqiAxzQA4VB%2FKprVJsOw%2FQFBy5MGJFYP1GJJbzvUwuf1xxxKh3tG445N7Ns6a1gJhbv3NH4U%2F0r3DEjoh8RXcD9GbGe3SlVZ9Nb1KsGfdrjCFI%2FTNt%2FTKcQ4GMhuBSxJdVf7GQZC8YNwjrN5oLwBy1dAqAG6MdZqxCsWatazMfVywPuB44LkwksarfU3Ui2%2BtZ80vjBw9y6XzZH7j5mKrxktlcrHk7cU5gd0aXnrqtbKPoKoBpV0%2FbNwFGMvdPKkg5AWrnf4pmvCn2d7bJgi9xI5QIGbwekBhlwaf%2F1tFWGmVKybNtX%2FiPBZhPEJfuVAVmRi%2Bpf6k6IPpGhob1le1ytDiTklmU%2FJdAHprRRRMtgUKXCotMnWccbm2R2FBn4NgiHYoQ5aux%2BB1UHMUXBrhdFWjI83C4IAi2cbEkv0cNZNAOgejtCO0X1jt5oagaadO3ruIk5GQWOyZRvFCtmUxkmymOOrOCvUgGQWppjMgshzx9SmtWnAUbCkLlAh8RQh9spXAIn7cP6OHBOkq9qpf5NAAsvReYMIny%2BcsGOqUBZikJinwD49E0dHRaHISTcXwIaGgrPBmfh1DS%2Ba3P%2B3nezDfNtVMESjS%2FEwBsUTBrc8JbiCLCTW1rr%2FE%2FbkQECAJ2CbELzWAtBXhZOMuO3wnJxSwddIcQXA1c4qCCiJeeezqLo0%2F%2FHoi5v%2FRTvZ9%2Flx0G%2FxJ2O%2FTFSnvK0H3%2Bre8fNyWun8OFNPu6p5DGmegucwPq9VSPIg4pQETBqCccM9RtM572&X-Amz-Signature=cbfdd3cae111c1d1b84268b2d40102b05808388393ad05355c5a2ab155730d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=a4406d0c328bdf918bef6602c32c6acdd49cd24c9738d0012b6819a4d1aae796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=b84603120f62a34f601ce95285b55757ab83ba06b2fb6ee4f6eb2c6d9d5531f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=2dc76f1c1032e2ac532912221cc71cf265cc9c37656a36ae8a58318923be4abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=435eb25f0f5f75905cb61616f68a6cb361d469a72b74bc2f794a07d46544ae44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=59112f7ff4d1d18d336d34fc0737af3c81ea3f3d0cb84be38694ba234598472e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23LWU2T%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz1yEw%2FJzX9AKBT1h3ULh9asWNSa4uGPxMagng9Unn%2FwIhAPc0jUhfU7rD3LZU%2BAj93EoxGn79sFDzp0TnZH76FYGtKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZZ269j44oHC1MRF8q3AM9YeFjI%2Bt8eBylveUviOoxZuF0L481KcVkurXdBDcQvmYs12JLbZ1pU7rAQIksM%2FK5k5jVOYxiOF9dpXz7T5cDUN04qP%2F65E%2FRVbQaTbvgR%2F2YlXpzutG5egs4GwF9A6Ne%2FeSDbYxOt9RUnnMqGngrcnL5CHaw5Rn%2FnRD09BaY6UI3QLQSMJ%2FFpPNTQxA8MkiSj%2Fc0wO1d1ebxsE19TE8WfNCdPyIho%2FFvbLvIEZfz9kBPH4%2BSgwQN5yUdmiC6%2BmBS%2BvJ5baoZ2nmQ0e8DQQRgEM3U3ozaUlKF%2FOW0%2BPIjBvK2%2FBzh%2BYuPuC64v1Ewr5B5CkC60kVJnpNtqFjek52ZhZsL%2Fl6TsmWHZQpv1j%2BvtQX4ELRW7ysx4B7ii9%2FF5R3%2FUw1QE64HP1TtX%2FGKfs%2FkUTMsVnSf4R0WMR4RW9rUQde8KEltmFD4w2%2BjT24Z7v1oOc5xC9cNXWhVbnN7rCuhzKejOST07Z1sYQQYi1hDHwKSqLOJas6SoC8pbnNEp7c8Apou5hi2D9L5e8V2cAJk%2FK%2FezfR5fVW63EapyxrKlF0GqfSJjsHmKQTnm%2BX%2BsGu8LKcHAxXzPEBPiIt3A93ru%2B5j6aG0Ypahu%2BaHlk247msmLZmmAB%2FA5v9eHjDD8vnLBjqkASvcFJ0ffgrmkdU1tTxULP2C55J%2FnX06Gr86%2FI2Skem45ugJP8e%2Bk915Lruo5Hc7z7yHkCXjocyVdEyN%2BipZGli%2B9rGMIrtdpYP0gt0d4DNQGO39YiAnptIGc%2FhAg5YKmd6R5%2FX36KYxTeemHmrP%2FHSV5Ubq0WNrsl0QlS8srf%2F2St71QetgM63WctIWCLye%2FtLeBCN%2BZ8Ekao24MPOn7UYvB6ha&X-Amz-Signature=ce3d9b7c416b1ec886dc9bfeb6d76c007b07c6a78743702124279b4598117526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


