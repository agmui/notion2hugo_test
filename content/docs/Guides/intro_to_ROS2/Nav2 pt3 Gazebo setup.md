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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=83f73a0c8b1250d0ec312e7471f89aadbda7e5b8a48680c9a2ea93b47aa11399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=370ad20dc9fa4f392109392a08843630ae7f4c98847769e412c8147ad2a1743a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=c7037c218830662179224030f776105baf51db3119c00b75db4d05c91d6dc98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=643fc4bf711e1c9fb7a166830bd4ec62735af976250adccd9c66eff7c042d4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IANNNKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj2JAdUehKawwFP6H78xRLt6ePan1u6%2FnIf6%2FzuZmQKAiEA2f3Ujdjxvq48Pwtcg2zWRJnUHxwWgUzinLc33a%2BIhVMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCboGz96qtQoW1RCNircA3hhkb3eRgPFAK2F4LvkyT7MdVSNxiuefbCBqvt7dfsp4c%2BAnlYrdzKMEqSzb9U2p7QxAyHtNqyv%2FdTW5kA%2BT7r7U6YYUrNXBkbfmqi%2BfHJeHKzgvq3eO%2BLJm9uikvgCJksW9HZkSndrirkEFq0ct3a9e43FMgmG2MSdSrSz%2FZlR2MdFhGTa%2FnJ%2BMBgKrT2CYz%2B0YLWIcTPSwSPg1z4L6zBKefA%2FsBpZ8VhsiwBeN2WIreuHLEm6WmftL4nyI%2BUgsVj%2BD48FgRG42Mh8uq%2FyoG4j4d88gMSiqvFTHku0RjCejc1HLJbQvaE4rkcl%2FsvuLRbwJC1igEN73WCySTHOcnKNoqd8F6%2BLZw1EcDJn%2B23dh%2B%2B3l2aQjS7h0%2Bo38m9FTCXb8ED29HKKSovJrgD37Yl%2F6c5Fn9Ma9%2BiJn97IZaSejPBKxO92eopT7Zulr8fikMPQCCVMWNfiacw0MUKceW8tvUtvEUP6SMRMCO7lbIJWpxF7yjQxBD6KuG0yEENcmU6VQQCCnJgo1DGBV8X3FsljG0uq%2BXmHgYqC5dqi8hJ9yV4nX5RXASIUkyFpwCw%2FhqODtBLHxV6WFOkW8FzcQg6YdKwA1GWrmZKQuxc5DA9CfMhQZfqMGcu%2BmaYLMMX7h8oGOqUBujOSfDey7iYc6ajsPCKl%2Fy3bYxzv0%2FnaxSEaNYplJMtp4leDFFpe4osFLYGzoKP9gBn7SOynj1ccO3yht8MMeg86Lg83zm3udjyZ6EpGk35RRTPCpw7dTr8AfYfWFD1olJtWMXx89Y2%2FbVboBs5nCWNMZ7%2FPg4rdhzYKHsXIgLsnVXlfUKZ3Uztk1%2F5BeDn%2B5N3bEWrk9vAnYKpZ20xxIX4K0vVS&X-Amz-Signature=5b0be1ed2ca7e9db9889032d871ec9cad6aae84e6d3ac70f35e3699db4c768f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=552e58e8a038482c7b244e55ef8f3d59161199cde01dd59fd8f1c235cb4e25bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=e62fc057a7fa0f523d87809cef9a3fae4cd458b11770a1ebf91b366d1d10378e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=ed3ba18457a2267008b235ba38e360f8da000457b71bf8ef009e38f357f08e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=1387c14555c2ca2ea2671dff23bb202828a6bbf91baf34d767ad2df77f29b48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=4de9d46a5393a6a6abac4e2841c31db0258b2af3d6f70cc37358b3f23db59be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKZPYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpfRQrJ3DEffvIfA%2BNERcpLxu0aQxe5NBG9kvi3gN8igIhAIz%2BIRVIV3nTg9IdnCXX3E2RkqPWHZObJ81teW7AozoOKv8DCHIQABoMNjM3NDIzMTgzODA1IgzeRgmI9a8NVO8tLHAq3ANIeLFS%2Fa5PsD3mHQyKQUVbiOMfzI3Sr9VM%2BQUP4Xsj6KgY0WZ4sLtATApTW1E7%2BDH440OF2rSWg06mAfDwRe7W1kKS4EryXqCdQmrHCoeXboKx7UGe95l4e9UAfI8frRuy5O37ajADJx1Fz0iptZ9Fk%2BKC%2FlEF7%2B4QS%2FN%2B2smVvseSecsEFwjb2DUjKcqySdefUi3Q%2F1mHB7pOnTvngEPzVjWNCGvn44ctShC0YcouBkzdKNK0Y73mxG4ZYjrfTfvXxN%2B%2FYO%2B5NpB4IaPlvriljejMeSuJ1sNiXtsQaZoQupQgnUwJfg%2BYQPBkzdB7MKSI9G9mK0JEAwmZ9GfYOanodvlF2uuLUr2eD7PmX%2FsKtJ%2FSDXIZjKJ5jJD1CxbQHgpcB4msYviOqJvTp0FyWHVXA2nmyBRS1UZxKyvVQdf1UIVyJPCXJgEi9TnIMKIF3r%2B6teKydZjvqIB0SSKV0bSuL9ibdUNqvWbIM1Pol8wiApxOXY%2FnN%2FffosP%2FZ3sIxGhvI7V7DehFv6xVtRQ1WZGxechLsMtLtHylL2OYS5UgXg3j9p7b7C3p9PT7YFYbAdBv5feQjoWomowlmlrMPi28G7wBUUhJD%2F00u6D2gs3IZPyB3zedb%2BBSUbuD5TDRg4jKBjqkAbn%2Br%2FyLKdiX8fAu%2F6WSyNNty%2B1a4YgQ0nKNKqdOiRruuL6xRV4vgGFYI7stD%2BYU%2FC%2FVcVRAnABXLEV6%2F9gL%2BF6rblldO3UuJX%2F9pic%2BYaq3KjQhgzHdOyGWQDjxuSVW5YbgsJ1i9Aj5SkLG0SrtuL1z9WVUyCJwQHLVf16N5MPaagcW4JebN4Wa2SM4nm6KLO1MZwkDTFcvuzMvsicLMbs9TWp%2B&X-Amz-Signature=efac481f8ffb3640ced06faddce2e0cb0ec99de1bb8b5ef86f7ea37333a6ab6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


