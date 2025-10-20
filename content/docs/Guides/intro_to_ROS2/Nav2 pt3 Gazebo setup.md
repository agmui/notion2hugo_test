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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=2696a8b333e743e736e358e40ef89048928123279d6fb4d1a37fac43001e2e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=338c6024320b8ec42b9e53d234dca1be98086b58135ca7f4c9edcdeb31b3e703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=7c40fdf7fc3edf38b9a87fd8ff0047cf578faeb6aca30506e0aeeed13f778a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=e349d22ba8e86f8eeaa88251c1ee23d3cda991a65c920913b87be68e19e39fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILHZRRD%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHkHIEIfQWp7KArenIXPMtCOBdd3NN%2Fw8H2WNtma22KLAiEAt3mWPtHao1bDzYPPjZ0HHe0CxCXemtdPuLOmBBLdIE0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZUEEYg8oZRNMvHqircAyfMPOrcDsFf6fJBZ8lmwqlobd%2FxCawH7otrqY0Bm8Xm2b4BigqcStvkNGQzlVSn5arFRpveu0M%2F6bqBDpGmm6v%2BGsX3QYjSTNTq8dvzBFwlnyVrgIoaWjgNeYiI0iiQDmcy0IGeTvrDFOrZskAVytaVUvHnTIocx0%2FwcEHk6JJyi%2F2ixXGO3DBfbfNw%2F16c2wMCMRl%2Fccglq7fIMWTypz8XUEAn44fD60Unt9YwnYvN3UD9dxg1ks7%2BhqRYrv%2F1tozSglkQFNBSs5xODLCDdpw0Ow76VMyDt6DnGJwa8Qws9zpODxnpyfoPxJR%2B%2FZiLisq6ZVCJIF1rmiovlaRxoHRm8bdIXVI%2Bx8xSVMIFsTNO1MkIeJKgQvI%2BqN%2FA2CdNelFYBOJxBzicorXLeor7VV7%2FjBTtOkhSecaoYMw1Ais3PxDC2MkNr4bayl3gNI2k%2FCD%2B2HDEGZdyzMNJgFsYIfLd59Nx%2BZ7n0KTDExWgHc7paehlYCburlMQEFETSIQugiHe8EolHMinbND6CLIel6U%2Bn12U0e7df71m45LZShEUm7UrCZmdyCAXKQ72wnRVoZZrz9BGlAe44ljC7CSkOgniDgBs6THNZXTQz%2FbFTODkD%2FwcsBkZQoPvHRSxMJKI1scGOqUBF0pgvSOM7YuCIKWoJqHEvF7lMIOevb8yGtpF%2FNNzZZ87gyP7tMSA3ym7FHNOpXz8E0%2Bub%2B9bTY%2BBxbe5iiq%2FZlyIMFY1a9AHmM1rz8ut3cmpcjkio0Qtoi2Z9aThiKKlnN2ce58j3sckMvc%2BU499A%2FiHWnWv5%2F14qaHo504fSD0rBtsgpbdJCucwn0ZvaCbRK0NMe44cT3bVQyY3rb3Ipfgsy539&X-Amz-Signature=6f4ce350a8886bae47445ec2e093534d772c1524ac6a42d9b71abfd186e14995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=b1d505f7cab9186a423e10e968b108c47f94073f67cf2f376a3e21ce575b9fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=364944e486ce093fa0dba27316ea3e34567b354b2fc284c3d1c8c6664460db75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=1431bf37e065697f45e76e4bd86cdd78f8bb04a5eb9f82d4ce4ef9ae8cfa652e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=6806274cd884b88fa630606cd659f3a7592c286c3e06bdf79bbd787f44dd73f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=31e9dc9f4b27274d77ff678f4e80bd303811bf47ab5d304ec626a93f5ac569f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECPX5G6%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDsssT3U5oA9oJtE0ZjTO6P485FPm1XNlrMT5j%2B87ZKOAiEAo5Dji8RIZWGSeUbHqgHRzADSLL1XaK%2BFAWpISFvY3%2FQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUgLdjmJQtPL8LDwSrcA6ZrAQcOsamtm1X3UmSJPSvJa3iT8dPWncTrhOvk4e8ZZuYZ7Y%2FUFfFTL2o8xaSHFWnYK7pGedYCby4apU%2Ft7Xdxj%2FViXMgbeu%2F8JmMNpd3davHqDkbw5CutPfnpDHf0FLonf%2FbMkU2TC0cwBTtr8MWjzWLGX9TA14e3HcBi2%2B46vgkprWdpkBK3RjM%2FYhwFEajNMPDVocQnc%2FYv37BGs3S4LCOmkpW2tPYPESmSrwDgemsoTMRz2Uz6Ie%2FPec5rKKRafW%2BqEbtFiY38lsLNBgPsGWrlXMHsqVlwq1MgBg0zGMvRjT6anId4U9EkLwGnMnz%2B3RL3fJoXIGVp9AQbw1L0p8G0%2BM50BqvL0u68GXdbJEPbl7xeXsAonxvO9sgDQ98Fe%2BvCGws4PyArINz7xeChIkl87z1TStqBo1IKZJMfdDauPiaQAwtgiqhcw2y49fysYoJnuxAVTSRn2Vbx9qSKCWWENnmRYZHh56m%2FrcaQs2eEgNdv88nPDbCLweoLlSV9hvAhSyL8OAsa2Mt%2B8yKVXuBOqsW5BtPfBWR1lzDH8qg78DWeOVK%2FvJVR9QuEFCuRPTyrCDZyKBJ7EHffdys5DiHu1CRxtzITz990ygPmTrFQSUbO4MMJMSKbMIaM1scGOqUBvKTrnenbZB8JfA6EVKyMTmcH8y1okgYelOyFja5DzaYVsUrASSKIrO62nsUL7DZSn9D102TsPL71Ym4bUG%2B7ZrKVy1KR6glz%2BsKQsz6g4PcvhVLn06PLyF62j3rX5osWK6bxiKhdiVVJwnLVuSDi1X%2Bze%2F5PHfB0vpBX75J952l3FZAUd%2BjAvq8iCw6%2B%2FdY4vYYGgRjLGu%2FbosKt0u%2BPqhlsbhqd&X-Amz-Signature=1fb63fbfb1c9ef0799d2bce1bb98e9834af1dfb39c4b6fbdcc456ca2a78177d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


