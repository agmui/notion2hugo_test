---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T01:01:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T01:01:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=bc850dace6c335834fee65d770e10c498eb426f69d8b95cb8229c43626745da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=bea4c84e325263e06f85b06ca7d44c06d0c92a85c689054805f8188f2df5c668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=a2e0336389535333ac40a996bf97ee0986f6447f109e55afe09799858377dffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=32bd42db13f3187eedcfb15091a309a2c595a1081dc2bbe65d1b56430f9b30aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: test `fdir`

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
          ~~<fdir1>1 0 0</fdir1>~~
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZKBSMC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkYMOYqakRilZWAqnOTzd%2BQ80zZlo%2Bc44eoKqs1ap2FAiEApdWG%2FNqofOvHAmQu%2FeCoinT4bVUKEScy9B%2Bbu%2Bd71W4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFF4jekRWoP%2BMUqdSrcA2jw4D6ZHkp2XM31KBfM73MIc3Zg8bJpYFc7%2BVP2iVTYYnLEjMe75VkxLIajjtQW51Y6%2FO7EBwGWdLgkMzR%2FGmHhfn38%2FEQVB4OtZeBlIvw%2FAvC5YwO22tDgx0rPiA4qK9Q2cmkBEGtABGaCZkQ4U1vXc64eP2xoZe6BoJWuKPqV3b6a1Q3teYWJe6W9zaRu8tGDQhYsyOV74ERFWB6d4xGPZa%2BEZe3Gjr54D8%2FsaTcPTNMhKfnupEXGZTdQYyLKoWKsOAbxZjsGVwmaBzfjG%2FmxhWbTw%2BPt7bxkUHqDojorLNmieWASX3tYx4CyleKA2h4Ma1T1DqV6K3VtTvOu6h7yq17CSGK0efvDdm31A3pNTgOp%2Bh0sXxsa2FKYXwK8EgGWsRoKxIImjpSMiam5sIpX0yYczYniFN4dhrYzyi7U%2FTrDqUiL%2BD1XNnaow3%2FVknwsDtG6qkmvpNV6lxHAcVgDWy7dQdf%2F5v1wcuXQPEW3BzmXIdb7yKQ5uZ%2Brj%2BLlk3RZdmkMr%2FEEr6%2BUxH16Kbn8zn1UcM2m2O%2BaZUvfYpsxgQWdER5h72N4c9ddSh2RByieitzT2DrTBlLM6%2FC2PtIkfhbvuQa2AxAR9iZ9oavYw9N73wBO0MAnPUOgMMTKtsQGOqUB%2Fv8QLLuyenlxRF1H8WA9N3B7Ox8BX6%2B2XMda81jES9GP6nVmqbP%2BoaHVA1sCNQ4%2FLUivCcGUs9x%2Ft6coyjBJXw7ur8z1CRH7xOJQTp3KG9bTZZsNXNef2FKYsopvnAP%2F7webT3P8X5wIw08DARADg%2FFx01gGb1c%2FbCmQXzK5wp96IHrPO1kTl6ZalCgMymjX79h3rgxOw7Sgg1rTPeS64NP%2FexQB&X-Amz-Signature=d0aaba009feaabc44907d0e1dfa38160603a447e7948db4fe5ae1b500ae912fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=db6387adc6ada242760efcad0cd3ecb3e455e8db2599a045dd7520cfaee4c761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=dff910618d3b2006e7e92cc01888b3dbbeb6abe81fcb3389f1b04710075651ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=87a77829923f9e1717d6797f39699042ebbb0b4de9498b9798756745f13aa144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=7181d7e8cf54f694a95dde6b899a37ccf02df4e8fcc6803077a461e7f976b6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=777329e652db0e5dcc4df2222efa7a4eafcabd78b606f48e0e9d8489bd3919ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJ2OE3J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFTqJcQ2zI%2BPX%2F4m7LGUcPPnC6vh0sU4ht5gSQaR%2BgVAiB3wJmeYP4ll8GHF4DaIrX91fiK7ikDj3SVHraXUacuuiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJiNj75U2bgGl8KL0KtwDAUKQEPrFvjs7E0Kj0lCuTrBlz77ubCPR3rrvWrX5KO%2FXxWpKin%2FVeEyPRqvF2WSjGAap%2Br%2FjCLUbPMQQmiE5QSKvAE%2FlJkgET0Xx7nwpM7NIOuAgo5%2BhoSKsQp5KZp2EdbGQppL1lZFvIRQxAz4VtDugEi4LDRSLwKfqoidMI0p0rB1uU%2BUW4DUwHNqjO44irEFq8FKeqmA8fJ5Kgtc7yX%2FnoL1xdpKxF%2FXpbxLXCmDYSmYe%2B5NNlncfhVuTvs%2F2HoCcmU3JnhPJsUmrjroO4BUU3zYxFaCTrw%2BaEFzc59izhCkqizLXVykkbsoDDQuA3sEhpz2vRgrl4DDmjPHZKLVUlWr9GEYQ6SmPR2hNAwyDjjCktuk7wfg6%2BVUG7m0mfnBVU8eLhx2pntF2Ns8uRgJ2Hcr99F6oe8XFLCBqkeHcLCovyCZXVb0DoDLFGA4BBtrLs6%2FjdtXLdis3j0txYeoL%2BcvUBHRym%2FR3mV1g4jRbPqfQTKv91dBCZ6crTgfQd74CPDz7FPm9yuOINgoWxDkUtjjU7AKJVZbdOaLznKjT7A2zf4haU9B25Py6Gwnq4hFGfkB3XmfhAF5X4qSQapPEDDt9bnkytLw6MPB3ittVTGdLMwMikvvIoX4w%2Bcq2xAY6pgG6Wf6p4W1B77n1Dln2wyaul%2FfMy5CrMrMVQYmfhnnuGXoHAIglAWm0u%2BKNXkdIfNN5KdC31HXWYmwEoz8QC5bQzn1DRoA0Rli9%2FyEGfxJiBtwuHjSGdSpgzrZUXmu828qmiTnLRCWJ24jyT85y2Uiid2T9CLkOfE1tOJSuf4mcqN7IrWt%2FP2TocriBnPckNRVWjHPaP9Pqg7BafE5ygqzPCFp2IqrC&X-Amz-Signature=933a9c42a6f284a4e5a6efb709006ffee63ce512ddcd5636d1daee75493b9f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
