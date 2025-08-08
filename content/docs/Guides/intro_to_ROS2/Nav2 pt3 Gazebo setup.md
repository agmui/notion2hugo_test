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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=90b3c39f27572f6f7849b4ee9df56884f9c694edb4e00a91a4eadebd866dbb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=7c261d6c9ff1f5cdee2a6b8040ad976261f8f8956d836da2e5f9235e2ad3acfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=4dfe8d4fb24056bc8313f1c65ed8b138db215eccafad546d8e0dd50756626097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=ed26173e51d9dc953e699ad6dbfcdcba6f44860857f1f7c71526147d72a90686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKTDQ2T%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDB0T1RrEYXL5A%2FT1oX%2Frh483Wot1Dax8UURTN3CwpjHQIgZU%2FIcLq0kQ8gwmeCaCHVagrPJuneY836wYtt7%2BGu3A4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKziEWZFIaoVmZh2CrcA4L6Isheins1UDH%2FlASKeUZFWyCtddAOze%2F96Apjyuk%2F9j3I5KEc4AVpr8pW9KP5rkwyT1cjNR4Th9Q%2Bm9tzall1knOwK%2BmYQGMXU4DJVdHr35da1fdoZ8%2Fh9s8cfgD5TtWqPglFvrTYhNe%2BQKClNG4yBifGOV6VjIt22f3VlXI0RW2nbHSuGrGRIDhIegRJ4ZcJd4gir8aSHU%2Bz4%2B7p%2B59%2BK6zGAvMkm0ELQMIegiSvybjR8CPAqea9QeFFMm8LReBQSlB%2BST801NVFNT249bQKLz94qk%2B%2B5ofzm9L2HMP8rhgFXrG5KtJ%2F4acTONo12iofU8lmO7PqBsfBt9dExauzVm%2F2PziHTFebcxct73EJQJmkBMX8AhrAczQ9zwyMy7Ye1aBF3c%2FQqSQ%2FSLbJE65%2Bgdmnqs0GFqtrX3amg4KEz6tkPHXMLqWXVCl8g8kxCs7nJkRDiBBnDzm0vQSephFn%2BQB99R8pPg%2FWyS50lo9Df0JUEPlCjlWylVKm3y%2Fj6db0fdqnR1L0XmZtzpNnSI%2BzR1%2FC%2FOowK0yhgS%2FAak2fP442y4%2B5egcMXQju2pr0qLz%2BvkxSqBlFTGPBGLdseLwu7YxJ2D4chk8z5G3GKqEj9xGbPI8ZqTX063uJMN%2B62cQGOqUBgiKm8cMmKVwxNPPWcJikLM8t4kgwu4gJjBpupDuvSvJmuu5Xcb%2FgbBsyEW0GuJ5JKmPSGF6%2BOzVVjLZWOXbohSSfNOfRYyZV6yjW8dgVEi9SD22hEBe4p981HEb1tMcY1q4s2Wi6ZF8AoBlm%2Fsl9WXnbvqavXSvPcdlI%2BsLP%2B9X1fODCku9L%2F%2BWpdDO2k8U54hwnqCSFkpNK3xd281FBx74gDOud&X-Amz-Signature=89a60c4c7010143f49412ffc379ce9aac72130693b5e824d745c5649e30afefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=1c9450366e749acb875aba704140fc1e98e4753d61d8a2cfe83d341d774a3a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=11db18ab525261f7b8e25350732b067cbb51be15ae2358a2dd5618184f7ed10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=7c2e3e5f0a656d96ce0deb20a2e98c7d1db3c2fd9c2a12f4a1d3c346a80c6648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=e58444c48472d690877e382a1c55458b8401dc9acb6d710c3e46cf93d0f1b69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=913e80181513a0be8e090a7e9ebf37d3ba67220d95ddb8df467e501c6521c849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIGPT4F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICb%2BQc6Ren9MwOLn4X1P6pzNEK%2FGzUW5Veb%2FbKaURf9lAiA8JdpLhaTIiAWY8hO7qFRlwWbkyS6zPji4zDOan7iU5CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbxDFfeOaVUGxS7XjKtwDI%2FUPo3t%2Br11sLs%2FVCVHtx2MHRex%2FwyfWcO%2FX8XUUJvEfM%2BIIaXQUs63ngQK%2FuACxr2%2F%2B4gtSVC8WQaI4Jm%2FS%2FnyU1cFAuoOjaNotOtTltlcKuD9SxQSs2h38nOen1oIBtLViNXNBDqjkd%2FYuemcIP%2FUv%2FbUgP%2F3wXOuYHhloy1TcssRWu123nZM8HDS1jM3bAFX14TqkfXHAdMuI7Fao6RaLTQMeyMRNkndf%2F7kx1aC5Gu86BwykM2gFGW%2B3pS6HEyvklVGySQles8DoBB3ckf3%2FcEXAgIsKf5aI2PLmOgXnDYn0fVLol%2BUL%2FgxhJOikFXM49b1LqBOYu%2FRpff0miE9kNAzgwlyRO4xVXFME9XGY3zwOJTg6WJDhHSJPQdPBwb7VPbqtPsvBvLNG7VTrjgIrO531DRUGh23uaCc8yqyX4g46yFG8tK54ylv5d%2B43jN6l8DL%2Fp6sSiReCmf7mzMYG5MjJsQ9iZt%2FtR0DWPbsX2xdAZqrdtHRMqgXzXVy1IYLvgfgkIn2IqGCkdmlSg9EmBZ8RhdcFtmOCUWG7tL5PvZ7FLPJUUJk5G6bVGmh12xXiZ2q%2FJch2lFu7uev7cohMkywCJmAuBw3uB71OJuEah%2FdJ%2Bab2h9kVKgswlbvZxAY6pgGybJak%2FU8ECJ8CCJo8swgFI8sYLY%2FSgKnX31BhpDOmghwuJNvIus9F5TdI9vDjVPMA1Qux8bE1NOELlDd76T0J2Amy3yV0pKhKnvt163ExWQar3oW9DvF9pHWYrnClFHLiZGByRTxr%2Fp%2BMCRrPKAeC9ndLi%2BkWeIUv4DWpm5qDfmEUQkp5ibsO1MGkWCyFDofuLRybORJiA8WJHA9E0O8naQNZoq4Q&X-Amz-Signature=9c0973157fab42939ccecc813d0725434ee0685ed7a212e428423734ea03555e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
