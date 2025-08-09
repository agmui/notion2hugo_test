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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=cf61508ff05964efae9697a0bb19c4ca9a6bd62f3b51b9c81f9f6b1fb9aed379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=790cb9108d7beab511c839aba48ca3ba34e4379ca961698b8e3f46d466ee4fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=048670d5f2d6c50d1f6c2e370297263252520c1b42e34a0783e90346ff3527ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=1d99f1e08dc795d9e20a228bc27bb94c6f5c85f204d8b3790e63881adf62804d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7JB66X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC46h6nuMWJxlOFoDzXaMkoRRfwXz4Jk1DO9DiWbmP06AiAx5hIeWHlNlnk31lOyWhBwnVsoKGxzIvlJYNjX1h%2FlFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuaF1BthNaHhCR7v%2BKtwDFVmxe7dIjL%2B%2FNR3N9xO2af3NnRvz7WDQb9L4sDpTiM2tYpqT96t2bG6DvuIx1DH2IwVLv7Eq8HW3LIqLYVm9bTykhJmKSd4ZLlTFgS%2FjVX9UP1%2BsEsORSwGOQbpvxYp3HUCpDeDvNqLRh9GNJUN7VP%2BRoAY42UOFziMVINe3s8LoRIWdCqelfNVKcZcJISSf3KbSHuBuIm3Ffjii%2BxXQavxTCucHIPaGXnfejRVbtEV%2BGANQEGT8stFMCJE%2BCOi2UOqSPWxhO%2BeKgKtd0qaU2xnZs2upy1DNIctY0P30FzgUAkO9fGwBActfR0S1OoC8p2RMrGCplie1rdRcZzbS0joX71Ota5gt28duxTR097LmbKjxBGtVHOXNZwNXshFBLHF7o%2BuU8HJog8hAIj%2BGAg49Qfp%2FXmqgKJgeOgNZn7y1W6R7JFHby2jQym2E9hBh3WsqYeGOmpAtPOJ%2FyBjMOHjuVSiGzVngnfZGSAmKs84IDq%2BuzW%2FApIw%2FbY7U9Bk%2BSBzzIEJ57mOz4%2Bo%2BzluByr%2BlN%2Fp%2FKQ%2BxBbjsklmVCmxz%2F%2FXL6RSoFf%2B2kjlNE08FvcxqRJjRlSIZcnTajvjuq48C5c1U26VjUVoL%2FX%2FBmGPMJvevBDBklXWBh%2Fow7%2BrcxAY6pgHDN1%2Be5G6lktFCh4GBbtKs8dEj5%2FwBsEp5ablJqcSr2wDoVd9HHO%2B4G3hsSiO8RY6KV9V8SA9AzYMhfET5VcN9JgVxQNCjeAUgt73Bf39Gj%2F0YWGf2pTcBkchGqEEFgIDnI6TxNly7580lfFAMXq3FCSzN1SxB4EvUJ9i6we1WnXXbsuw0Symoq%2BCASiNgsrKGsPKdFB83PZgns5X2PCtkbICDGIZx&X-Amz-Signature=4c7a48c2abedb45f72e130b958a0f1c6294da386d78948679de74b851ce12272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=fefef134594644beacbacc9dff88eea33649e7d7fdba957b107713fdde121bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=3666006316b6a3b59fd49206d5a9266f8f7f446db0b09faedab8780efd21cf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=759be10d619201d075c5c4db4c204e92e877fc0dc440110b1396a69ecde4905c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=908aa1bb855b1596e83f027927a207e55f71879e037d579419487b6c3be3be9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=17cca0c973873aea4d288e891882f45291a5e208aa3ff121dbf573eed9d871b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBHS66ZU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHawTCUovXdI3cCqjuUD3Yd5buq%2FVn%2FEvuiIz3K8dgLyAiEAr2K1gAeuS8yWS%2BqZsLtOICiCZHHDXyYNLy9rplV2omUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb7IVDfVH4lDGa1UCrcAwlPn9ONslxQopTRZPvAJqQIR%2Fh5n%2FQFXfcON6lZGJbYvNwof%2BQEhiXeuENi8YVet%2FgcDkja7y72fGr16I0xIoL5bjIhy4GgGVjsodTAWe%2FiCwc4rT2qKdck7ENRTKRDIqG5qwYqDHDowdvUbQNPCsRv0eFCDKnpxUVkjlcTaZXrkE35EyGD3gDXrqKrSyma%2BvLWhdOWmfypMfA5PRbgmgxGYagWxuSLBPcXR3ieSMgmVL0Z4cRAfdnLCBlAnhAj0l55XpotIVooveY%2BZU8JvdIPnMZ0PxtA9%2B%2B8FY0qkFXQKGtrACaWNgwdhOOOKH8irTSpkFC5F2ChzkOUlnfWKTVYXEpaG1N7%2F3%2F%2FQfXntOAWt66EABnHXiByuFS1w4MXCIq7elY99hTvDf77Y4MgVgwbvT2ENyJFGd%2F0bACGnbaT7gvWRVMz0QLpP8aN%2BnMcs4yAVeZ8XGB03tHccR6pVfA%2B4N5xZ2mgU1pFhbWMP21u17pWkXBy4%2Br187UudUvOmh2IvXIarXaKGY8ig8RQJJ41VXrg%2BEoiCqTiFr3JwqFF897%2F2j%2B5rMIfqRcJGSSlrZ3VDCPEHuBNWKjMsNKq%2B2DIArG3cvBHDhbxCj3SC%2BIHPqeXhZ98qHOi0%2BpDMN%2Fg3MQGOqUBDaGpzcgjY1LdupLhr%2BWa%2BoLoeoS1aE0PNs4oGAaf1OAYdlXO0l6FqVJyzsxCTjNhAULMqwrixPQkAJku0MwR4qiMEvaLOATP0aYQ5VdHKC2kjBox8jPQhZMqa3sHUHhg4DG59lIYGLgyK1DWvn3cPolnRc3TjzgGVvE510FbPuyrPduSRqjJxvyKNWasF0DED3jxTHMYEC3drCIUEyfP0y6zJ%2BsD&X-Amz-Signature=77b5f888f11fdb0c21502db150561619afaa8aa069e63632a374503c5b4b0ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
