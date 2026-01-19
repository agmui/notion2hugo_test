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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=44666fb31533f714fd6804364d548501f5238b9d7e6d22ae19679bff391aea7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=5c588c72e4a1491bb94d1cd2863a77baccb9e0850302e11c5334227a654e27e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=97c8420cfa596d0cce954d2171029c3afe765c9edffd623dfe41e8315cba4c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=3ee73d4242468168071922c1589b84f4fae9e95fb1aee8f57641e7469a1a14a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URR3CNA%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXJSN0lDoGOtaQXA455%2BqhXxEyt%2Fz77m0KasgbQfwEWAiBnGEPDkbSu0nQdhsfvlUNLGyKMTlh3DFX8V0KV8cY%2FfSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fp%2F7qfc3LWkoOZNKKtwDEQqceHH8KGLw6oFR0Kxa5xC2OvGw%2BDSThEMse3cVxJUZJk8SGeUhFiEiMaiFLtaDz%2FmGx44YbZ8lxulI6U6KdN1DiLd%2BRUqyo3dga%2Fo3Z0oxRn7DosRYWtRrFy%2Bq%2B7c6nKtzfuvuAjaUFqnxk9GmeIoYxrajDBt6wBWeeO49h3usSHdkIwpcLnZjvgfHAozMR59cquY6DYALuxSGLyGsxrySvEDUzJJMUv5cBr9IDuql5w8nKh6i%2BAVn03FOhhLxRJ5Bcx3Bz5xDfXwMf7kVavSLmE2IhQkGKAljI1w58YqdOvJ%2BVACsY3FstTvR2jLCzVpWyGjlTcyrVJrG5gdiBmyIh38Innro5ad8Pnu1RTv8YNgvaT0hxmUbOW4aakDlDT%2FC4OUSX9L8gNfgFfhagbAHgXsgwvcf5KnC29f9d7lBAfRs2F%2Bobl%2Fore90djbKDZdPTC939%2FJtHQcB0MAKf7OhCR8O%2FD9jt4FQJbu3wn2GLOSrlUcSK59iFmP5cHVBQRNHNrqUvLRZJsuM%2FD%2BvshG0sCzM31RjwslApf%2BbIHdzL3N%2BEAj6DFsgMH%2FQcYKYnAsScMQ4Y%2FFA3%2FEzHZBZLWsyVQUZy0TP4TwSt94JRUbVKB8VRg4aYaFW7wIw%2Fty1ywY6pgGl4pfUguxa8c6PZPk7RE9A3ZfmEd3f3HuQFYfRw4yzJvJDtexKM8asqXDgUrBBclVhHcRybLDUb35PFg7a6Wq33blIX7JHYgyuIG1hCKk5lI%2Fap76exQK0QTXjZ8Md94pEbonXLOUASDUC7cInSIQ9bHUwPmzwLVVO97v61P%2FMeV48hpLHBa30kKdu6c5ACZPdMgo%2B3frzKoVvJfOqSJ7cFyy1bdKH&X-Amz-Signature=28c019df88a1f947af1a0f669d15d072b52f0b412c57ea686cb64d2ceed45209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=25d698b2db97f670cb9a3011caf96c3dc8a275961914161c80a1bfd8d0dadb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=f776217761321b02b63277c98fa65ac6c9d7fb72a79640462d8a7b1d850c4adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=e396b59554d95b31093d3b06d31468fa3236e495e0e76a74995482c897738a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=cccf1e479f5a0c3824c63a4b78b150b690e093c070a0df63323c22252afe608e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=45c66f98891766373b17322e62b37f081986bdcc8a94f4dca50556c7ef30e362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GEV6FS%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCmCRO9yrWTi9njL6a8CTnIOXZyOGInszZTLXyTQNw6AiEAwzkDloCWg5ITD%2BkXBXmWrYaKGMe%2Frgk3PDJb3RzvHnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcrdaME2w7Qlb6ChircAxUrMm%2B5NZmStirZ9RRwM2iXEvdITO1FUw9mlpi9cRMYMjeSb7x4Cv%2BTQZBe9Zhntthr%2B6vZSWkPsKftBOelMxt4Nv03z%2BZVjNf7O%2FE73GgkTtCb1UmzJTxZYItv%2Bf8942A7hRoNMpUCSwl9YlYvKn70rXdcx%2FIetzZtEvgmReD3BpxD9ufPcT7Rdsjep%2BXt7jhLzBLwayJzYTLAZHLgLHi3g8smRIk1tfVPHQeePtpOPm91ZP8mHMwsLtnuqrCNCbhdU%2Bdr3n%2BOtjSHD%2FkWgdRb3y346A4%2B%2BAkiS9IJK0JC8UCngSQzeF%2FUiwkEKyAVgDY5V8TMBGzlL0PMRMKTHW7RhoCONwITPdIhlKAii5QiTb6aMCyBOqF2dIDNnUwtkPuf%2BPPySAcoGt6%2BGK0yn0qeOMksMFUKbEGHP7WtOaFTcKGc5xxTMF11kpvbfLBf3i3qMxElpQ2zM%2FCgLoc45HuCPtdPMbY%2BV6zQ35lmSAZ8LZsdj9e1cjmqzAtq2nPEaOjWI4cDaPoedmewp8Pu8DxDUqtOPHI0RruUXX1XdPLE3Yzollzj6JOjHIaG7h54kMEwhJiGvkY6GCfHz%2BokbJ0PcwDkmGXvGGZmCSA9UvknBQ5zyMJQsR8d8UvrMIvetcsGOqUBXqvL42g4wkrSiXYGfChpC7u%2B8NeQRVVhQuhxrK0TwhXFsEBxhrK8ta5qAxiYtjCnWPurYizGO2a6LFxSbpDVW9zHt1SvMAFkgNWmuRnqoiV%2BiKr6E0GQjM2Ufe632YlwqHC3%2B%2FR7kH3C2k%2FZELiHrtc7lEeVTtB2d4OYMKvoNb1GE%2BNLiD6p7tdUsGZfFM1%2B%2BK0CqiPKEn2WTEPJK%2BSkYVH9Lx%2Fh&X-Amz-Signature=5e8e592320a3652a425c2cb8867abdedb62cbe85e3edcd428c7b335d6004d753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


