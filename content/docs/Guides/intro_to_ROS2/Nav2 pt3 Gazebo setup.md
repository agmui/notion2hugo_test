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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=e3272103a6f57a47c9f863493f4b67c7d0aa17bb11580dd5e8f265c1007641a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=0f69b66c90f5c4f1411f7b2752add5921029f901354b2c615f6c6c633481c1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=98a18376705ec43b45ada3d40c474cf5e14581abb920bc881a7d46b92f40ea1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=726d4ce9a5950c48d806a547812872f2e8603e89b404bbe4ad52d4405daa1b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYWC7M4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5jThx7zE8bIF3UURAjmv%2BvyhITh4oVrPOuUzKxIGakQIgHZzMdtmVoWVefB5Vy0axb61YoFQg%2F8WipYbeLlgwlHwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDpW615Smlw49hul8SrcA718z%2Ft9RGS9MmX%2F%2B7XIJorIJYdeVaxNtWNfQxGw0aD9q0EQkgFweoCgSZKYl9XyyJWsiE46t9KeA8XmJ46SXKqM6yHNtEOzxGGMrxWopWtv4V52P8POqGwm8rVOtjTrGRsYjLQ0VJ5AfOkdhQUjkE1JdKsP1nDgzPUZop35MMf3NUvSnETuppdMjFJIGeFBAxTjJvbHttzHPoxCe9PCu24g%2F8tLnlpqGo3CIfklNrtyhD0U44EWjJRj0qFBrtAUzvGNVvvVsEQx84A5TAZ3a%2FB11I1N5UNe2Xl2sZ%2FmjLFKKAnBg8G6fik871ClNkoS6gon0CbomyS7RBs09lO2LTwQd6%2B%2B8H6vXqwXnChKN%2FSTFo%2Fnsc95bM3%2FXl4lq1BXLkoYrsOFQeeQJO6HaYpDLNGBX%2Fi1S6da15mqsvwUaS2xyQQoqr3R%2Fm%2FjHxt%2B3deyoyr3eWLk4c%2FRkCasLj8LOFZtxZppRNenAK1j9dC2NmuGyQ6rwnLFlLPnPtuKLuetAZZzk40%2Bm1l1QNZxUk0suTGO9GnGK48Unn6efX%2BxIgmUkNoZyWH4CDvfza6hb3mBHkJXZfXYZXSdT6w54O6lWcsjWc9vrEC%2BKbu7FYOris%2BcAcWg%2FDCJE65uLiPsMNrZvsQGOqUBjm4uoEQ%2Bnm%2BLJTi%2FXbeP7n0PNg5SNhqCt%2Btg98zTZG71tvCThYxkNEkvcr9p2ch0ujdio%2Fe4WJQ5xqTM0zUshqoyK%2F4q0M01hLiviOjm0zgKKpWpvITnaCQUUdoQ7v53bE6XJQPV9xALKK%2Bu28IvRDQ%2Fs4vBSBsiLhLBi8yu2d1rneTbD6GUWROSkQbxXtA5ELIdzdmH6Om7tm47i1pH%2FmUJwpp3&X-Amz-Signature=45a68565832f77c7db83de37f9927a867f24a95e4364c672fde6c6f42313352f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=bef1d450f277b265068957b93a3b7e9747e1436163ea9bee70d331d7b9882a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=7a673e76f39a8bd0197ac5e0bdaa9bf432a560bc89dea63fb15af1e0574661ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=ffedd0f78baa208e0b8c0452cf67dde416ffd8ba152a8a33932f022297146dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=0f55960b51ad9a71b6e36533cfff9392342be9c564293a53af9e0d9ad9eb7dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=d436cb2f5e60411b852fb2fa85c6cfe73269d98041a998aee6be2dc82a63d3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=23c3d60a24c81a952b3a1eef0dd41a156be66b38aabf0367b562a6c92c27adf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
