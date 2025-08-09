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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=8b6a9bf2371a4e14896a5d0ffa7fb6bd33b065c7a828d398f3af57c63a5279f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=2d5e025bacd014611cc5e5647f4e08d95a1e4ba7d6f734d45ef40d788eebe0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=3f838b17c8d656f6d02fdedb5976ed5704ca299be6ec86ce75f8d8b9a7c2143e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=0d45b772a49c7bb32ee7d62a22daeeda68816e6720db3f77fd0b592670f7366b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZWRFSY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGzcM7vZ0F9E04S3DUIroz2cKz%2Be0U4YSmCTQir7rlGnAiAXrXOvbUq2xWPv2daJaTms92nqe%2Bu0z9rkYem%2BAOuf2SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcDHnoPqzGOmkCrl9KtwDWuSo0mBzw8%2BneA2cP%2B442aGVbggG1mxMQeLsF4ZV03cqbrIRPKbv5n3db1BOkSfr2gOFtgNIBrT71JDUsitNI7UYCJ1PZR56rvEQjGVXYhZV4DW2B3zQPHC%2FeEUpXFiLIQ2%2FNi4gpH72sIRw%2BkY6tiCUiyySePSa9Z6byh70MBFRW%2FXJV%2FqJ4CRG9TCuUkIl1mVelpYOpiVtJxa5zJLRxJxjGIfHxRYfl9JycBFjeTXFljTuCpwQvW42pLgGmFJu79oafKkzLJaVyBX30rlPM0ORXmsvdVnTWtgPhaHedxcycbMcjZ6a6mWc8oNK85y4R1Zec8J3Oei0%2BHlcCpeD9uofCeT52sGgsWUfiGKp8RLy7kbLvcmDC1QGQxsVylFpuVf02tUr6tmUaec%2BhcpIF8MaD0TRD7TV5Yk1%2BMGirVtgzBcejAnryBNRhqZcCPbZin4flfyW79m3CpwYvmY%2BEPLUKPdyZnoaXWVMFSYQkXihbuuwTrHVEyBqFAaHOTInh92K8pHN8rfVRDoMnOuPgWx4dlOtks3fyTTQjRSYDpewsMDuExpvNwpokJ05baDcqKgvqnYzvcnpojYs3lEK3FjurdWjBNbl0BVkhtf0%2FJK93w2h8V%2B3C41FJKswz8TbxAY6pgG4p6j8ywBL3BlFq6tkQHiXIuz3N7RpgZOzyqiX2h1Te9qDl8uPfQPHDoCS%2ByIcFR%2BVnQI6YCUGerT2TZDyDRfX1ghIa%2FntOOoGJ4dpT5B%2F%2FPYeMUMc5V2%2FUwApH%2Fjrmwd61NLQcCkdAfpwc1IdKM77DMbKDEDQZkQfstd14GAaM6PqAAioVwwgHG3h3cqUw4slEyX8lRT%2BmlrMbebKetpAx9ryV3pu&X-Amz-Signature=8a652a3ac603048861ccebc7e2624d6b1f0b4580ef3afa4ef659515f5e8e1661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=5a48e8c1539f0c31cb262db226dde312c6664a13e16fea37bf92b2395c51a2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=066ba9733c10eb341c2d65141c8ca46c5568d81030dea556b935cb05fd766481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=8fc50e15c1f0ae02434092983d14e7807bef271da5e12addf5152c53339c7d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=4ab73a91cf35144c093cf51f3c14f4b2c84501672ba787ca23e5aea41f09856b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=0275c57370f4744ee7ec1e171cd0990a63cd135821a34ae8c9852c1380715ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=043dab2408e064de6a30bb353adf36cca3fa9a90662ac23d8c68609bdceea335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
