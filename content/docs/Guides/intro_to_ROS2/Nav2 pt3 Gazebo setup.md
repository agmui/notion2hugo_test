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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=b108e315acd62cde523ea295c6e7833487ae4e0856868fe46781ef01cfcc3dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=a49fdc26173a160dfd441c42148a6693f154f955431115d06a8e0f7aed079c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=4a7b705b7837792fb1047a916349f86a69143f01e7df43eaff74a1e46dbf6883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=2f519c8b363895f6d32b8cb0f78604983dbf5e0f5b6e56d6bef9d2129d1ba2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAO3FEPO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtQLQD8Jhef5n7Ek7cX%2FaPeDjJYFzFG%2FyeCeNK2HeBnwIgfwanfOwKF2vhAPq%2BY10rCKKRfhRJGDQh8PofvKTWjHEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMR%2BojQUSLKh2CEG1SrcA%2F3MEQdxXQB%2BiQZYcTnk7W7IAanRegg8i%2Bx5fbdCpGkE0rInV54v%2B88sHXHj8C0d46aJMkcaTwzZr5CBzncEeYuZ8NI13zY5KLS3BHlWmfqj8NubA17bZOawlynHCEg72ADfZeUemafpHxl6E6Z%2F7wTbe64jLMzL%2F%2BpqSYNFa17jSNLVYVEgat62k416b0IKNW%2FJ9Y6MBudXJ7v0w%2FNwv417p82QbfoeFDsWl2NWxWBBZopVkfl4tSgXyvsLESc3wqEFd8rXXunsh4LsaW7c87iNqIr%2BtRxRlesSCd2OjWjPyvHxsNQxL%2FThupDAp1%2BQ72s5bJ%2B7nfRt6QfxLNaYbc1%2BoddrKfdP0WmX%2F2bdmUZW8UZUE8crxnspCswWBrGlAFVBFT9TIsRUdqaq9OyPTN6R1%2FNEBhOhkjKoCqstd7aCk81kYO2qtf4trvKbNq2VjHbkPr9UgpQ%2B9wxpyFgoEBgrZtSHXIp8vwumnX88oJiDgYjBI4phitV7Iy%2BSaJUjNgUDoezXuIXJBQ7%2B2gfMIb4ujh4nbIglSMI4EQ8q3eucnE8jvdyONPFeKJwsoUjGvfea6rGqV2pRekFE1VBI8ybo%2FNFTN%2BGZn5pLNRIaIUVGsgWfGIyFEE8OpsVYMOGAusQGOqUBkaME4AZoTERgpA44uxDpTInpISl7GuOPN1iGwtAt6byA15N7c4nMtSltSe4%2B2u8LLzwKStVvCfXmsH%2FmNrtVqGzqy9lbl4%2BZue6RjEFkOc9DGJuK7XbJ2JuxkqoRnF1cNfD414NixgFzoQ8hsB1mC4U9CeosIFph8uDpbKtiAFPHxLbb0n7Gn1Y5oUoN%2FF52vTMqgKMOtCKp7sYYb7E6x3tKjEyV&X-Amz-Signature=7656972a09ad7921fcce3a45012326e5930ce1919cc28d4eeba464f8509a30ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=c8c964590117df8f40820c50d104618a5c5254764be0ae033468ac5e1c7a9dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=89d309e5c32f5bfab1fedbb1e08f5e8f41ec9f31bff898d1541b09021d4eadc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=85029e6668f190d489bfbca3502befc260ae8bcecac3273d144a02841a80ff27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=92116dc710faab271d31fd7f2197be6d567ecdf93fb8ef412082acff25e62948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=6991d608fb1018ae4291056c8c9902e2b01c14e9e9b334335ef6004eb6c3a04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPCY7PO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7yqJfqlC2Tadms9tsWmK8KcSx7Jz0R8V0OwD%2B3spmcAiEApKWiTlpFvCNck4ryBRy3egVDHrbx2RVsFB0h0bke5mcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOEUzVlcshOSAf5pzCrcA18LuQv54LL5CqlC6TAFH0YYeRl9fefaUZ%2FS98oyJ%2Fm4LQTKdiSZA3HoCudr8eHIlXtD6ObT6Y5cTVi6eTvAj66gO1teK3OJc6FN4etmzobXCjw9pS5z8Mokwek4Nh6gAvX2Xve8%2FFv3KpqWm%2BQSSEfFdsfS5e8k8WmN%2BPmZuA5RdSSYFDN0TaUjxjUb3yrdJjpsKBz1LpyzlLU8RdjhULbMInLsMjHlIB7x89KhRZRnDSdvUA2o3dT%2Fp%2BQaBQva%2BW0LA54JK4En0J%2B0ZX%2FMqMPy7fh%2B60YHCaMShYBY3MKzq9eEpowJNp%2BL%2Fa%2FgNQkKSA2d%2BUEkDEVuYfUyhJrHwNP5gHX8qcG9JqSmTCnx6ZR4ZtNiEp82C2kdOiyBBQlxGifBLThS1FY5RxMOpmD6CT8mX7ctuRuAH19wZALlgC0q9bFyOe0okiKN%2B4a9UBRVZYbCHn82NU%2F%2FlHn82ZGkfxnlu2pMuQzVpxKWdwh8rfaMTDkA7jfUF3qFCGzxaytOlskM6UeGIEm6SSw70MZ3Tt9aEU6t6v0SsA3SzaPrtC5GIkKZr%2F4692Jr2PlVzlcfNFJnBbgy9vNhMttgKeOo3CKFSF5XgUoXLwT9NR1Xln4aZmKMFg4bleCu4CUKMNmAusQGOqUBR7mYHs7xubuUc3wwWEAZy11C%2FH2WwOuIqxCh%2Fa2P%2FSTYRMEBNaC9jw2QW079F31DtIT7ppIEB%2FlIut0GY75yH8wQGQvoIjCKtRGcY46XYK%2B5icP%2FnWRoI3%2FhQQgbZ%2Fp6gQXQZ0Gx22vq%2Bn4W3fGScrKXQvrCWJm8Bepv0ZFG8uV%2FvTXn85JTP5IJRYZAQw8pIDVTacrkbQCjyQml3UvRIOPNXcRX&X-Amz-Signature=7fe57c9cfb820510329f1b4bd03de24efc3a472729c98da87e48c216566c71bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
