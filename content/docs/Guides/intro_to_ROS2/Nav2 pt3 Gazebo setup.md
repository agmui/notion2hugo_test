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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=bfd4d008ef5684f0f4f5608331046c85540a58940f86f09752d23249481cd9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=f89eef360fac0fbb684dacba5be3bab87c837f43073591e2b2371fd15376939f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=e08216c281d9a9d23cf9310d45a06df10c087c235c810bdde64358be0117ce0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=3075fcca3a365da16f8ad44cb563a207fef5f8dd6c103800a5e8a26c799d7ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HPGQDW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDcbMUbz4Jd00OhheJsH6sjuLyHnai0MNy78XSHoXeYsAiEA9Qj06RlZIY5aLGqKZj1whkMejqUoHQ%2FwRyuptsw8ceQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBu7mjEpLCLwgxR9qircA1pt8rWF4425uXN3GuwendautI84ZJTUWQWN3QbD6gqpNjO4eAAZuj5IPkWggLlDN8pqoHf8Tj2SQSBEwJmP90PG6CPmdiZS7tASvIUcEceErn1TT6LdHKR8dlrgkC0Tu4ZA65zX7OaG2arIc68QL14VLN1%2BrgdYVs077NJnedwMf60jjoOalkyUpqLXmjNH3vXsqDe3RXS8gfR8ATsHHBRNKF2FKamM0IIoJRHf0HO5J%2FSGkLpTdTmckFzFs8BsHwHKkR2tLM9WNinZwH6DrTpVPwnaa6Z3y7oWkzz%2FJyDPxIThjeSZr2eeVQkUJEBb%2FM0GI7t4j4AXBqxCFgoCW1upExVYiPig14Dn%2FLqJmxDSXTePEfcHe5Qyh3%2Fvm4PM%2B97CGr4jjZSGboNBF%2FrA3veoYMDr9w%2FwxbQWRPROgyWbYacHcYjeYVeWa2xKDjf%2FX%2B0M1yUR2ZaAz02CJcWGdG5WfEfOBiXZUj8Ag35%2BADWvVDfK1k2xO%2F9paa6P0jv%2BiyVzscJBk14SjexR4t9GVtgyU%2FkMFz9NsUOO3K4kgRRxKBpSvqTFwe9ujOeEXwzeioAyfj5sFHhMcIYyxURltmwYbTmDkFEiWBsrUrgfBhujIrkNIQv70o2EVkt9MLLC%2BMQGOqUBrj%2FtinUeG6%2BgxgUwMYlDjTqIKvc6YN9AllssLtI%2Br5ZfpIYxWxWMsl4VR7y1YJuQHJ2XEG%2BisVujhZViIFGZcNNq1Ib82Ls1auMJ%2FEAJhncpsCJDfW3rNlFlOoJVgkod0%2FomysWgLOOYd%2F9ADzj68PoVs7SmrEE3bcKEN4fqz2C9yI7bQtaR7FJT6TJX1sKNtPg1oenm7usEWmLhYaljVdLjAiOl&X-Amz-Signature=c246eed0941a0333cd9ea4f43744a17251cf6d7ff5b0d5927ee5b5fc0c6f7ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=f3f0431614a5d2cca1902e1c84999a47ea31044cb60b40cff4489e15d03a9570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=8d125eef6871dbc4e47cf4b6ac1accd402b1a98c0e4ae39d979cda03c4ce8040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=d18160926c6917b58a30cf81febc9a6dd80f6f3427882171a30e111cf6d753d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=66384baa22a3d6971223435e6f7a49fc40665cf417b4aff3e9d3543af66d8218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=ed16f354056ded0e862013fe5dbf2fc8d6ebcf03f66b34482096cc1133684a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3DWG3O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCQ2Hy2uDMn8MsfkKpbQK90k1yZWxMg00nPtke2R9dlTwIgPwSbNF9chxutalxKK3NUN9Y8tqRpkAF%2F9gjwG4hD0Xwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCbuIApgjOJ2cKrpbircAxRDhqNLRQclJ1IVR3WALWyVzxPiXALIALg6P%2FoukC%2FhBqjkvh0bq7Rf7L%2FCiOqIufQOAZVcUrvMm%2Bcw0utoAzjoqc67WTlToiCpixgxgsk%2BtDwxtpYe7GHCw4rSUHr%2B6QzfgbAMsVCbr3mf1%2FdWX1Eapo%2B0sLsIw55tWzCInHIpwOwidakwYhuKeZHzbjpFz6jItXbzmYej6bTOS5O33tUZGpMFSB%2BPa092DVU7RGL8U2vFB0rtuw2sbty3kINJajtOKK7uH5oEoGakiuvarXpuvLjirDJw7rAF3MRtEKy2YPqjhHjfduA2Snk%2Bo5NQR6PivLzYP%2FL4%2BVfDq5NIIWfxv9WJ%2B5ZX42lUNl%2BmmxoyGTMH0vtK1EMeI7KPX1PVrN0QsjrwlpEA6j7qTa%2Brr1NiRakrhGroHaN%2B7ND5FxXjoI%2Ffacue6u8OmoS6HmY6zFOdltwBX1MhcpQz%2BNLrqJaw%2FeKHToVHqreRqxyTOOK7NgKp2t%2BB8HVe1iuYQ8txzIsv5zwl7p6TC%2F60a3OidmH%2BXugC57NfP%2Bgov3IkrK5bjHjb2QOmJvXczszw8qHeihFUvfcNkaBRnByxHxeYtbhFVIOAi%2Bqqpd%2Fn%2BrBM%2B60vIj1m3zZy73avQradMJHC%2BMQGOqUBCoYc6Op0wzCr%2Fs%2FBeXBkCe4HGKp44Sgtkw9SxAkLdo%2BOVw5NPHskRm73Syph0KfiP0qQs%2Fw7PufH%2BIKS7JhjVML7yk3IEthucut%2FotC3c%2FFEk8%2FPRumKo0MyVKcvwu2B5YW7o3%2BUEUjo6xab%2Bd2z7w471B46D9Rg6MQdE7E2nWnBqadY6EUeO2bDj%2FsdZPYw0Ps%2F3QCjA2TgKUzUf3WbbWsIuFJM&X-Amz-Signature=82834c01e6e28842688a83de5049c4396ebf79c25b5f68c422b888f4a140ae56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
