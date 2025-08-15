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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=75b5e9f78c2a4b5c60c5bf0b2c578cd17748d0e6b2fcadb4ea8509b1a731ed7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=55521b6e1febc432cf36d8886be0a558d7b07c7cf067c42e3b489e545b1fc684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=74395baf986995b30366ceb29cd3ac5fcfac768f27dc1ea8b360acea9996a19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=9af489ff6eee9ce3ff9918aa5fbb9e6a8ef6da059b354cfbfaa3cab7919202a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=3a38615f6ad105bee9a82ad851216fd6526c625abadcde5d68ce46e71945af25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=763e4e145e01e6e3b2dd9ce071c744c609bb1a476a063c0b1a908262056c8176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=b3feda165b57dfe7c9cc2b3898b3f86c90a90e0ccef3b152109cce191c5e8a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=f10ae753f4704b1eb15b2a1c35daff53302a102a3ab17569308ce618aa9c13ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=57c903103bd9b24971159ed997ce5d155702987c872936b110af705ec6afe074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=cfecfaaa863030580c34da4ff6ba1617c9bbc12c45977c1a5465d78b0693f814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BSPCEC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICxZ88LDR%2FTayvIwWskCc%2FbdcqDwkj7YPXqa%2F2xfq9zNAiA8xyrbqSgI7x3QE45DWJr9pSn%2BnX0bv2woA7VJGB7VaCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoHriVQV4jXnUmAwRKtwD%2FEOw%2B%2Bxe9846zG2Z78sD%2Bw4p83Okr%2FSUqIrAeW5%2F4wIHtr03%2BFF5HUx0KEw2foqhzMpGttRPWAa%2BsC7vJPfxzXHWz9gBcRkAGztf2sjHwR%2BV2QsBchj4akAI4JzN%2BOU2S7dMeLOXJJaUlSZ%2Fj9M5CfangIa%2BM0v84qHAS0CJE2B63mCwQff4e64E8bnhqreFfSqKjB7Qxz5O%2BVLQFaH3jwDYYYr8A%2BMQzFfbUUs5n3oO8Z8KfQRK6VCBQQhFN3kr5e8Pvs239EdTq8ILk2i8lrAvsLsGGPMTbHOjv86IDCQde1LAReJm4e4unI4CH3bOrJEQ%2FLO%2FoKt3Dx51CZRpdv%2BNMIHbRVUBEatORZzSxm0NCwXo8K7wU8ROyQolSYl6NzePjpsCgJ6UWB5ydSmkhWUkh%2FtdWkAlLeOb1Vcd9YcgUtXFxu%2BQRxsMxhOfnZ8HS%2B1vCUMfOfpjdhyZ4uc2kecAlLwuR326vE8WnvouIVeOk5yZ%2FUOAG4m4464IjGXeIK1MM9rvNe9TbtzF1ccpyj68uDS3Hfckqk0EinPT38ptOtGGd1uAlNYmQzeKufapdt0%2Fn%2BgkrHIk8MC5EaPYCf8SqGiuYsgjhrTZM6i7%2F%2BAvUwgIyraLvOYqTg8w2qP6xAY6pgF3Qs7GhqyInYuUjNxUki0pHcSfNX1iZ%2BKnvPPC19C1Ymvxry1MAEj8J9Wsp6Q4i2GXNddWXcgdAtsniSH56oWYA9abXjbqbpYAW%2B%2FpnmdkjfxaJiXV31BmDA5Mu83XhIMG24qZxSN6ZQOH5hERbiUw8VigSPxOf7nfJdS9RL25QOPaODhhyDsdo1ZEjL7TnYgr0mjGdxqdg5zzUSODpj%2BZRv1AbNsV&X-Amz-Signature=04f40ada339e30f4beb17ff1cf86944e6579827cbf3400ac7898e711c90cd70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
