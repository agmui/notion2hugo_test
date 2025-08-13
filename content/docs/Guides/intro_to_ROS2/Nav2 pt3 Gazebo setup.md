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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=61bdfd7da4c3eb2c0c3cce9aec88832152eb9f60718967b38f54b06388f97d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=a3d9c63d2fca3e01974333fa478830df7b2c64428bca0b7dd487bbf15863f9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=606e4f6e8bee8cf8c909ba26e748b16bfc296efe78f32c585b614fecfd390d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=1e183a3c6410263382e4087417a330a9a95ceecd61592e400dff6d9003bebfad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICHKRDA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwOIivJ7NXzvxqlLp%2FI0mvLVpvX%2BXyuRCcC3QTCxTxwCIQDWgprwfYQaQtDmErnDXBU1nleWgBF9EE4AUvbNYelj4Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMubWlR3m66bq7XtN7KtwD6sfZ6fzoyFgqJ7Ai%2BJblYUMIV%2BZd1awFmEmFInb%2FmLOhgdEHE4mtEpEOgrgQme7%2BdVbIsXQFS9%2BqlTTpJ%2FYM7M2zoP09slIyKJpS9DriBZGreMhelXWeGbmjVPp5lec7DyUlZi3Os6qLvsGqFU6wsBbY251kvUa2tW0tgHgAv5VPB9vZZQ6Zr%2FJBFGI9V6uz0Gnsho8QJUeQ7Jc9CbwsoehPGdzqSZBEiy9YqYm%2B1P6XOtCmGTg5nPW%2FBCGi%2FMwkGAbodoa99zoTPmmHEMNF42IGOKuX9%2Fi8qdWDztjA5ZU%2Bi4p7qKEQ7D%2FF4PW%2F2AZfubz0iC2Z3gJU8RjyvR90Qwqu0Ixpw1E%2BcgeKjvi3oHancK2OhNUgEI4FvCjWf2qwv43CFUpS9Gm%2BqepDLDBadmpYa6VNMYO%2B2gmu20amzlTfXi9UEqbJB9d%2FbsGuVfdat8hc8WiPx%2Fr%2BT%2F1BcsqU%2F5W9GVWipPMGJbbWjZEk7lPaE1TfNCzbtAmwQWGx0wtCcT5NVmoK3VRAN3pmvtS4Q2Wstafv4AumY7FbfdkiVpcQhgjtw0y8l1goHlYVV6qnBL6p7efwgvb3Uxvme3lx5uaskgCLlGJfyPLx%2Bh8FDw9zMZvquUKc1gZOCUsw9YbwxAY6pgGK2r%2Fv4XNSGe6xeoXqE301JC2TYlvewWtxiEs8KAGyeGvIWuaUQoRVfXk8G90Dmx0EnAeY%2Bt%2FdHrs8WHbHEhqQSlL0VU5vWFQ0m0NoeHPci7tIzz6ba0I5UNR%2FNJLTPJIrVrofl5CeExnqxW3UghyWPaDqPnjB8ZS5wORn6j3uSibg7vuTkxEn%2B%2BPOX3%2F31LVPg9fFCYpDu%2BeseXL%2FGo83%2B81aYMG6&X-Amz-Signature=75fdccf69335175b415a9996bb04af9ea6cb0f76dccf4eecd55738a4e08e08e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=9a622ae34035b0f89abd468824c887addd3fbfe35205be4f1db7ff07bd2b0c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=534ad9ce21778c02d8178ad06f9e6f434ffc046a0ff9e3972c817417b46f27b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=17768efd1961abf5ce2c7dd3857dffff8ec026e22f9b8c942739d178dab89cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=427d75a6c85821389f2fd9a98d17f2f794e5c589c9d49b5b4086d6e9ce2844c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=5a472eeb59d601f46882842dec9b8abb25ff624062f30450d2157ce8d707ee7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSSYTAY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICte9skflroqdSUZ0P%2FmNT2obuQDzBgB5xDnN2Ph6JmwAiEA%2Bh5AxNQj53ypKG4UZgf%2FlVrJFwb1Sl4bVr9CMilVs3Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE8B47v7SbmmrBTSAircA5qxACIc97OUWas7vpo9Rrb55kxCPr7RU%2FdGzTMMKUlYGj3eURJm4v%2F6HQHYYmDuzNkQPURlQDeYq0ZSiFkzBEW%2BIW75383OMCK87i8Q5Opy6hOpoeKC5ThzoPrxhKPx7Pr5c3tqhwJz2jyTm3rXSc50BNIlZ3emt0cviEWHQs%2FGtXI5BGjO3Du4vJOEeK75jDRB5DvzP2F%2BdxICZIjO6fESxTo55F%2Bt3BHt6M8acn5dwpvfdvwOG2JUa4TjF0TncaaIG7jaFin4T076x9sEAZk1mqvwWYEp2fnI%2F5M6%2FKPhT7ww022XWMAgjXendYOJPqXAL%2B%2F4HgHBCa4PZb3UwWrvjMu0W3%2FCryX%2Bw%2B3jjO7a9xRiE%2BfPMINuQw0me%2BfMoJBIe%2BSfjak0pLoWrFO7S0Wg%2BwhoGlTIsPw4PDja6MH9vHHjH5NeTWG4tbooMH3o2iBPFuOM7Y0RZOWNaZq3%2Bvw%2F6KkcrbnLAbtfF5r18zXU7c6P4xDiK18YHN9Fs3UXiAqBegmURgh2XhDL0Hrf6aBcG0S%2BiPofPFY3iqxc%2BPZI6ujGk0eVMuxLzYM59vKnJh1bYYh8N4iD0NEBgw2CA2CpOCe%2F5vMJvuLp5obwyZ3cGnAkbHuUx4ofKb%2FPMNWF8MQGOqUB%2B64kSsjIlE1zvLD5VeNiKw%2BkbwK2guhkVfwHO2HMxK5kcoqf3QYkb%2FDq477Ir0iudW%2FskSIunOQnrz9ZuYc7osR3UJK7hVQgqztsV8OS2lQacDzRjx%2FipeKuD%2F7ZKek%2FEGtDyaVGFeYKPwlCtnDaneLnZCokhyWYgPVLxvovtGyXAEEQ1eZXKkvBZfu7CnjTcOeqIlZbVDmkA6Gm4TJ33wIsGcbW&X-Amz-Signature=45fbf4520d08a1802f1cfca8e55a02dcb8bcf031a55a7bfcf6dcb77fef0c6b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
