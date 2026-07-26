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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=d4879b213b98f8aa0aaeb378f2321c1ab260709d36ae4438a22a44fbb6df446a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=2d13cb8066164cfdfbb8abca2d0c79c1d55432268dab948bac1c03adea7ed4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=ffbe57569a2bf314710bd86f294e1cd5b841bc3c13a8e19e24a2adafae3b81bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=8308d4eae883fa002f2bd4a896eb71ab0f114adcc3cfd5ecd92642e48ae054f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3EPKANK%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDHB2wNB6neI8krRB5776JrmjBFf60gxhCea1kRdiex8gIhAPlK1Hw571g4V6ySSo9oqLHZ1TjK5IW7Ho38FBQCLE6KKv8DCCwQABoMNjM3NDIzMTgzODA1Igx7ejmzUWMHbEHTpB0q3AOLoq4or3iedMnJylFEx0DLTYp%2FhPB7%2BjEidD4VDGGnh0tlcKnwwA47maJGJxiAIQYD3iYjev9bqTFnUV9kBogo2Vc5xOlgl6nFcxc13kUtXEL1mZmSPLIh7BBLrMaUAEvC0emF0fz1uXjWZR51vHHxXky6V6jrFXT0TUkbeOXzd6mGofxqi7fS2DFltEA4I%2FRG7O2QAkZWTV8l5BdxVSiJVibWOaYeX%2FDEW4NPcB%2FpXwddu%2BYncV2aa2OKVI8HFBWnW9Y6riLBpOjh0z%2FQ1ZrbhNVqxaondLl5Wzs7lc9ojUOfGjG6%2FI1DUe0c5POZqFPWg6CP75jNedcdMuq%2F8adZOJWs9TmoIoKJWiHIgkObM7W2ee94Ox4D%2FYmbpLfzEKhZEc0ZwMb1sUxMvRaxhq1Ixmcr4CeOxaM0Zs1vpxXaZODh06hm3na%2BxR4hwMcyFOUe0ZfAdR5%2B67NS8B6a1x6vjF2ySoia2wfOfgD4t32nwAGZs2VkyTD%2FXoT60li2clZw%2FNcF4NcTahuaaH0Su0NdeA99yc52f6Zq1xCqDa1U0pQvWTFAzC%2FKfg51LmmIPNzQI82WfOifWVdIu5TJauwykdMSlqAWFWl1BRa63TrXzZ8%2B8%2B0A7wJYWfoSVDDd5pXTBjqkAfnn%2BzfFpHxmqmPU9tOsZPtfbkdwWWHleshcxyxTzdIhX9IEZ08sQqyQ4JWxkG9vP4BUODX4Ltef5aRbOWNk98rGlqu%2F2zj9BMKxb6sufxIBskz9e71oLoZN4t9%2F6z%2Fcx%2F9aoNMatg8GW%2Fm40SLs7BpK5%2F%2FG6cGVn3QM%2FWU2nwE0z3UHwniZ%2FGoMrcxmCap9hErohJPZ9JmQpWevC3d4kckhrSqu&X-Amz-Signature=d9e52b3dd5d6e4deb9aa0f55babb4c63383ff5fc6a0aa658b7b224be8f715e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=0357c8127e30c2a5b859e663bd8e7d188e1126e2e81c485b5b3bf6e364a3d559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=a3b9d504797627fba0755084792342c9d4b36fb2f440aa672e95daac9e4580e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=226676e0fcef625fb1f45465020b3e35d7cf59859706701af778575bd7116ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=5e04958e2107f6a6283b91a1f0fab9611bd465fff59d876f19ec2a5306b2e5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=9e9b0bd28d5f3725693340c949aefda3229b9c25f9b8d22190c86af10a95f55d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTOK3LFH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEvacRJc5g3XEu7xIPrB2RfGP8%2F52mO4FB4bMriyPcafAiBk0aiVgiFgC92BjkIlwFRWr9eyoGtMUS5bTVXSe4vjlir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMKJcSYv4pl7gIw02lKtwD%2FJ5eLf1wOiHShPIMWAV0B1Xip74pe%2FXBr4PCFF4zR1UndH96UwESJjxzAJFIcn78tM0YBPuq6uuuiSq0dogKCnHl7gsREW95CHx6vTRO2odp2%2BATNHwxqh44SdZGine1ey6Zuk%2F7pMFBh5ajVMOKwK0VtWrb4RUOTUYRQy7ZXZaogZPS1eME86cwfmBGhwuMfGaU%2FCzrBaQ6M64elWv%2FnguufYR2pItN0%2BzBj1w7spOik1MzjXDcN%2Fw7mGzBmOrm0PvxVUms%2BsD2h6%2Fpvk%2BOdSyEfjW%2Bvq99l4frQOPVkEQn6aigrFi9nhlrk7sWaRQltWQ%2BZkR84QNc%2FA0HtCJ%2F3h4UxcICjZ9xSt5b05L5zNpFL5eYMepM1j3pu5p8hzXOghQz74MTsvGllFPceCU7RlhOOtRMWWIDKuOpNNyuaWkde1OY4pjtTRoKOBSTsKuVlEIdGu4LC6r%2FkFL62V6YmGNaOJ3mxuoHlUwZCa%2BI1h3Fqg4p9NJ2Gjw8Sqqv2tFwxVkWlKcTLUduyr9Xg7VK4sUhw5JWXNoDMpx%2FllBxmVRFd68YMz%2FaM1OxedO4XoqBLkh6uFCAR0UTzv0ulsYdZfojgJSUQgEUj9TrVhOp5BbNTDqUzMSRv06hsrEwjeiV0wY6pgGOaH9v2wnioX1%2Bmj7O17s4%2B5Bu0mBApKa%2BryJbHcT1JbCmi4KWO7w0usvaeD0BbvMRHmKPfrfzHVg08U%2FaSy40jCBWG8nbLbrM4kNuk8lioJJbyxFQr0I3zrOwjYk5NrhEzmqr3On6eBctD1Zj6PwgugaeQCqaP2nSoLrPsLOBNfu9NhcgOWhfIn41PVw28DureQyaTcm8eaVFx6mUupJiKYnQ4xT8&X-Amz-Signature=b2c7db2f19496f15f0b98c9356647e61b47f9298307d5a91106bacb9bdc4f1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


