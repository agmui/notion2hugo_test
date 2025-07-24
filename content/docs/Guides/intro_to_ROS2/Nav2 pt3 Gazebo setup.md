---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-24T10:26:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-24T10:26:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR35I2LP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAnvppqJntsmOD27EL1HAJqZBU%2BMSBUCxsuyHRx%2FehDZAiEAhdrPPHaNUQIbrnErfzJCM6F28kfTGNtBSp5x%2BeAGJ0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKPngTioYAA042B9dCrcA%2BzZAYzHd5G7FX2bvvWiDN%2B%2FDvPwsllWIAIy0jBm8fgSR%2FJcM%2FPbUkYNyG8K3fVchFsGrj%2FwNCGpHSSN1z1al8YXqifb8qTJFEOEiyOwbf0rOn1ROaCvEtk0e3GCUwZOm%2B0FU8UIDvz%2BKPwJ%2F6o6yw41FcGF64PGAn26xM0aEP8c8bG8KI%2FNwzU%2FPdlDf%2BJWy2htnVBBBfoeKWNifHh67T4TzVzSUXsKpBoouvB9o8Dm7gxE6AhRr%2BY%2FY568iL7q4MybK4iuVmlep2dJj2sYXNuEuv%2FQtxyGe5kUFNHh0VTLRMMZgWGhYkQG9tMpUuuVQjqtmLTQHzM%2F9gnST9ac3ya5xUd3wgvwPP6wtZ%2B53x%2B6dhL8xqKjC5z7e9qJTG7FSvxuEWWMTv4l7YPv0bbrwIltSgAvJXPlGMeVgMx8vo8KpvTbp9F2N%2BbLBEYa%2Fx8jAfRuSqFZUCEBttGD6vjK7tXcjC3PEDzanB8by83hM2wEzmOiqK%2B5IABCqmt4ouZpGlFzQCQhSNabMz4Y2V8M1APIIBRR6QohiKOO4s5kU%2BHPr7Yt85CTuMxWW9AjB5M9w0%2FR3Vku6sWUtclDbpM3SwjzEfo1WfTQItyB9rwgHJdpq49MkqxH9G4eY4WGMJbaiMQGOqUBA0jLBpHmApSN2hZefXTDfAaFeLxiSDEB0EjmIw%2F1uVObmN7sgrsOx0IbbvqtRV8yMAg7Y4qiOYnA1cxSuM0h9shuI%2BsAi2zqyOL3nxSUD%2BOpPYjMZEBdXlWIg7kEHQ%2FgbGOntlv1DZ%2FwpVdjJivWpXocaIUYpgcGY2VU1G%2B00dkWqvgU3a18iVVA6loLHTHv4GGKh3FtCXDnuM5A3qZHz%2FNPfHEb&X-Amz-Signature=3bfccbfb9e83c9c746e2725be489d4911c386d358e3127c143aa2dc0513e8105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR35I2LP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAnvppqJntsmOD27EL1HAJqZBU%2BMSBUCxsuyHRx%2FehDZAiEAhdrPPHaNUQIbrnErfzJCM6F28kfTGNtBSp5x%2BeAGJ0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKPngTioYAA042B9dCrcA%2BzZAYzHd5G7FX2bvvWiDN%2B%2FDvPwsllWIAIy0jBm8fgSR%2FJcM%2FPbUkYNyG8K3fVchFsGrj%2FwNCGpHSSN1z1al8YXqifb8qTJFEOEiyOwbf0rOn1ROaCvEtk0e3GCUwZOm%2B0FU8UIDvz%2BKPwJ%2F6o6yw41FcGF64PGAn26xM0aEP8c8bG8KI%2FNwzU%2FPdlDf%2BJWy2htnVBBBfoeKWNifHh67T4TzVzSUXsKpBoouvB9o8Dm7gxE6AhRr%2BY%2FY568iL7q4MybK4iuVmlep2dJj2sYXNuEuv%2FQtxyGe5kUFNHh0VTLRMMZgWGhYkQG9tMpUuuVQjqtmLTQHzM%2F9gnST9ac3ya5xUd3wgvwPP6wtZ%2B53x%2B6dhL8xqKjC5z7e9qJTG7FSvxuEWWMTv4l7YPv0bbrwIltSgAvJXPlGMeVgMx8vo8KpvTbp9F2N%2BbLBEYa%2Fx8jAfRuSqFZUCEBttGD6vjK7tXcjC3PEDzanB8by83hM2wEzmOiqK%2B5IABCqmt4ouZpGlFzQCQhSNabMz4Y2V8M1APIIBRR6QohiKOO4s5kU%2BHPr7Yt85CTuMxWW9AjB5M9w0%2FR3Vku6sWUtclDbpM3SwjzEfo1WfTQItyB9rwgHJdpq49MkqxH9G4eY4WGMJbaiMQGOqUBA0jLBpHmApSN2hZefXTDfAaFeLxiSDEB0EjmIw%2F1uVObmN7sgrsOx0IbbvqtRV8yMAg7Y4qiOYnA1cxSuM0h9shuI%2BsAi2zqyOL3nxSUD%2BOpPYjMZEBdXlWIg7kEHQ%2FgbGOntlv1DZ%2FwpVdjJivWpXocaIUYpgcGY2VU1G%2B00dkWqvgU3a18iVVA6loLHTHv4GGKh3FtCXDnuM5A3qZHz%2FNPfHEb&X-Amz-Signature=37ae75d9151a246b68357de4cc21a5b12098a809bfacafb5cdca5824ccc056e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR35I2LP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAnvppqJntsmOD27EL1HAJqZBU%2BMSBUCxsuyHRx%2FehDZAiEAhdrPPHaNUQIbrnErfzJCM6F28kfTGNtBSp5x%2BeAGJ0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKPngTioYAA042B9dCrcA%2BzZAYzHd5G7FX2bvvWiDN%2B%2FDvPwsllWIAIy0jBm8fgSR%2FJcM%2FPbUkYNyG8K3fVchFsGrj%2FwNCGpHSSN1z1al8YXqifb8qTJFEOEiyOwbf0rOn1ROaCvEtk0e3GCUwZOm%2B0FU8UIDvz%2BKPwJ%2F6o6yw41FcGF64PGAn26xM0aEP8c8bG8KI%2FNwzU%2FPdlDf%2BJWy2htnVBBBfoeKWNifHh67T4TzVzSUXsKpBoouvB9o8Dm7gxE6AhRr%2BY%2FY568iL7q4MybK4iuVmlep2dJj2sYXNuEuv%2FQtxyGe5kUFNHh0VTLRMMZgWGhYkQG9tMpUuuVQjqtmLTQHzM%2F9gnST9ac3ya5xUd3wgvwPP6wtZ%2B53x%2B6dhL8xqKjC5z7e9qJTG7FSvxuEWWMTv4l7YPv0bbrwIltSgAvJXPlGMeVgMx8vo8KpvTbp9F2N%2BbLBEYa%2Fx8jAfRuSqFZUCEBttGD6vjK7tXcjC3PEDzanB8by83hM2wEzmOiqK%2B5IABCqmt4ouZpGlFzQCQhSNabMz4Y2V8M1APIIBRR6QohiKOO4s5kU%2BHPr7Yt85CTuMxWW9AjB5M9w0%2FR3Vku6sWUtclDbpM3SwjzEfo1WfTQItyB9rwgHJdpq49MkqxH9G4eY4WGMJbaiMQGOqUBA0jLBpHmApSN2hZefXTDfAaFeLxiSDEB0EjmIw%2F1uVObmN7sgrsOx0IbbvqtRV8yMAg7Y4qiOYnA1cxSuM0h9shuI%2BsAi2zqyOL3nxSUD%2BOpPYjMZEBdXlWIg7kEHQ%2FgbGOntlv1DZ%2FwpVdjJivWpXocaIUYpgcGY2VU1G%2B00dkWqvgU3a18iVVA6loLHTHv4GGKh3FtCXDnuM5A3qZHz%2FNPfHEb&X-Amz-Signature=032296302834250f9e03add8c167c8266a644d037c650b775068dd71b33cafe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

Thus all Gazebo topics must go though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR35I2LP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAnvppqJntsmOD27EL1HAJqZBU%2BMSBUCxsuyHRx%2FehDZAiEAhdrPPHaNUQIbrnErfzJCM6F28kfTGNtBSp5x%2BeAGJ0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKPngTioYAA042B9dCrcA%2BzZAYzHd5G7FX2bvvWiDN%2B%2FDvPwsllWIAIy0jBm8fgSR%2FJcM%2FPbUkYNyG8K3fVchFsGrj%2FwNCGpHSSN1z1al8YXqifb8qTJFEOEiyOwbf0rOn1ROaCvEtk0e3GCUwZOm%2B0FU8UIDvz%2BKPwJ%2F6o6yw41FcGF64PGAn26xM0aEP8c8bG8KI%2FNwzU%2FPdlDf%2BJWy2htnVBBBfoeKWNifHh67T4TzVzSUXsKpBoouvB9o8Dm7gxE6AhRr%2BY%2FY568iL7q4MybK4iuVmlep2dJj2sYXNuEuv%2FQtxyGe5kUFNHh0VTLRMMZgWGhYkQG9tMpUuuVQjqtmLTQHzM%2F9gnST9ac3ya5xUd3wgvwPP6wtZ%2B53x%2B6dhL8xqKjC5z7e9qJTG7FSvxuEWWMTv4l7YPv0bbrwIltSgAvJXPlGMeVgMx8vo8KpvTbp9F2N%2BbLBEYa%2Fx8jAfRuSqFZUCEBttGD6vjK7tXcjC3PEDzanB8by83hM2wEzmOiqK%2B5IABCqmt4ouZpGlFzQCQhSNabMz4Y2V8M1APIIBRR6QohiKOO4s5kU%2BHPr7Yt85CTuMxWW9AjB5M9w0%2FR3Vku6sWUtclDbpM3SwjzEfo1WfTQItyB9rwgHJdpq49MkqxH9G4eY4WGMJbaiMQGOqUBA0jLBpHmApSN2hZefXTDfAaFeLxiSDEB0EjmIw%2F1uVObmN7sgrsOx0IbbvqtRV8yMAg7Y4qiOYnA1cxSuM0h9shuI%2BsAi2zqyOL3nxSUD%2BOpPYjMZEBdXlWIg7kEHQ%2FgbGOntlv1DZ%2FwpVdjJivWpXocaIUYpgcGY2VU1G%2B00dkWqvgU3a18iVVA6loLHTHv4GGKh3FtCXDnuM5A3qZHz%2FNPfHEb&X-Amz-Signature=72993541bd7fe982d4aa90e2baeb0bcda96206c53c8bfde2658e46fc591779ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

past this inside `bridge_config.yaml`. 

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

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `urdf` right before the `</robot>` tag.

This plugin does emulates most of what `my_node` did.

```bash

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>0.1</max_linear_acceleration>

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

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR35I2LP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAnvppqJntsmOD27EL1HAJqZBU%2BMSBUCxsuyHRx%2FehDZAiEAhdrPPHaNUQIbrnErfzJCM6F28kfTGNtBSp5x%2BeAGJ0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKPngTioYAA042B9dCrcA%2BzZAYzHd5G7FX2bvvWiDN%2B%2FDvPwsllWIAIy0jBm8fgSR%2FJcM%2FPbUkYNyG8K3fVchFsGrj%2FwNCGpHSSN1z1al8YXqifb8qTJFEOEiyOwbf0rOn1ROaCvEtk0e3GCUwZOm%2B0FU8UIDvz%2BKPwJ%2F6o6yw41FcGF64PGAn26xM0aEP8c8bG8KI%2FNwzU%2FPdlDf%2BJWy2htnVBBBfoeKWNifHh67T4TzVzSUXsKpBoouvB9o8Dm7gxE6AhRr%2BY%2FY568iL7q4MybK4iuVmlep2dJj2sYXNuEuv%2FQtxyGe5kUFNHh0VTLRMMZgWGhYkQG9tMpUuuVQjqtmLTQHzM%2F9gnST9ac3ya5xUd3wgvwPP6wtZ%2B53x%2B6dhL8xqKjC5z7e9qJTG7FSvxuEWWMTv4l7YPv0bbrwIltSgAvJXPlGMeVgMx8vo8KpvTbp9F2N%2BbLBEYa%2Fx8jAfRuSqFZUCEBttGD6vjK7tXcjC3PEDzanB8by83hM2wEzmOiqK%2B5IABCqmt4ouZpGlFzQCQhSNabMz4Y2V8M1APIIBRR6QohiKOO4s5kU%2BHPr7Yt85CTuMxWW9AjB5M9w0%2FR3Vku6sWUtclDbpM3SwjzEfo1WfTQItyB9rwgHJdpq49MkqxH9G4eY4WGMJbaiMQGOqUBA0jLBpHmApSN2hZefXTDfAaFeLxiSDEB0EjmIw%2F1uVObmN7sgrsOx0IbbvqtRV8yMAg7Y4qiOYnA1cxSuM0h9shuI%2BsAi2zqyOL3nxSUD%2BOpPYjMZEBdXlWIg7kEHQ%2FgbGOntlv1DZ%2FwpVdjJivWpXocaIUYpgcGY2VU1G%2B00dkWqvgU3a18iVVA6loLHTHv4GGKh3FtCXDnuM5A3qZHz%2FNPfHEb&X-Amz-Signature=6b09a02e67ff47fe2cda64d0046f8b55b15b6cbe57775986cbc724b20caed484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR35I2LP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAnvppqJntsmOD27EL1HAJqZBU%2BMSBUCxsuyHRx%2FehDZAiEAhdrPPHaNUQIbrnErfzJCM6F28kfTGNtBSp5x%2BeAGJ0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKPngTioYAA042B9dCrcA%2BzZAYzHd5G7FX2bvvWiDN%2B%2FDvPwsllWIAIy0jBm8fgSR%2FJcM%2FPbUkYNyG8K3fVchFsGrj%2FwNCGpHSSN1z1al8YXqifb8qTJFEOEiyOwbf0rOn1ROaCvEtk0e3GCUwZOm%2B0FU8UIDvz%2BKPwJ%2F6o6yw41FcGF64PGAn26xM0aEP8c8bG8KI%2FNwzU%2FPdlDf%2BJWy2htnVBBBfoeKWNifHh67T4TzVzSUXsKpBoouvB9o8Dm7gxE6AhRr%2BY%2FY568iL7q4MybK4iuVmlep2dJj2sYXNuEuv%2FQtxyGe5kUFNHh0VTLRMMZgWGhYkQG9tMpUuuVQjqtmLTQHzM%2F9gnST9ac3ya5xUd3wgvwPP6wtZ%2B53x%2B6dhL8xqKjC5z7e9qJTG7FSvxuEWWMTv4l7YPv0bbrwIltSgAvJXPlGMeVgMx8vo8KpvTbp9F2N%2BbLBEYa%2Fx8jAfRuSqFZUCEBttGD6vjK7tXcjC3PEDzanB8by83hM2wEzmOiqK%2B5IABCqmt4ouZpGlFzQCQhSNabMz4Y2V8M1APIIBRR6QohiKOO4s5kU%2BHPr7Yt85CTuMxWW9AjB5M9w0%2FR3Vku6sWUtclDbpM3SwjzEfo1WfTQItyB9rwgHJdpq49MkqxH9G4eY4WGMJbaiMQGOqUBA0jLBpHmApSN2hZefXTDfAaFeLxiSDEB0EjmIw%2F1uVObmN7sgrsOx0IbbvqtRV8yMAg7Y4qiOYnA1cxSuM0h9shuI%2BsAi2zqyOL3nxSUD%2BOpPYjMZEBdXlWIg7kEHQ%2FgbGOntlv1DZ%2FwpVdjJivWpXocaIUYpgcGY2VU1G%2B00dkWqvgU3a18iVVA6loLHTHv4GGKh3FtCXDnuM5A3qZHz%2FNPfHEb&X-Amz-Signature=5d6598efb6b7b4f0b9af16aabc8ce45bc2c7b2295d8772e10460d5eed4429e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: idk add robomaster arena

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

## Updating launch file

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
        DeclareLaunchArgument(name='use_sim_time', default_value='True', description='Flag to enable use_sim_time'),
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

Remember to build because we added new files to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

**Result:**

TODO: add img

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

TODO: add telop twist keyboard

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR35I2LP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAnvppqJntsmOD27EL1HAJqZBU%2BMSBUCxsuyHRx%2FehDZAiEAhdrPPHaNUQIbrnErfzJCM6F28kfTGNtBSp5x%2BeAGJ0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKPngTioYAA042B9dCrcA%2BzZAYzHd5G7FX2bvvWiDN%2B%2FDvPwsllWIAIy0jBm8fgSR%2FJcM%2FPbUkYNyG8K3fVchFsGrj%2FwNCGpHSSN1z1al8YXqifb8qTJFEOEiyOwbf0rOn1ROaCvEtk0e3GCUwZOm%2B0FU8UIDvz%2BKPwJ%2F6o6yw41FcGF64PGAn26xM0aEP8c8bG8KI%2FNwzU%2FPdlDf%2BJWy2htnVBBBfoeKWNifHh67T4TzVzSUXsKpBoouvB9o8Dm7gxE6AhRr%2BY%2FY568iL7q4MybK4iuVmlep2dJj2sYXNuEuv%2FQtxyGe5kUFNHh0VTLRMMZgWGhYkQG9tMpUuuVQjqtmLTQHzM%2F9gnST9ac3ya5xUd3wgvwPP6wtZ%2B53x%2B6dhL8xqKjC5z7e9qJTG7FSvxuEWWMTv4l7YPv0bbrwIltSgAvJXPlGMeVgMx8vo8KpvTbp9F2N%2BbLBEYa%2Fx8jAfRuSqFZUCEBttGD6vjK7tXcjC3PEDzanB8by83hM2wEzmOiqK%2B5IABCqmt4ouZpGlFzQCQhSNabMz4Y2V8M1APIIBRR6QohiKOO4s5kU%2BHPr7Yt85CTuMxWW9AjB5M9w0%2FR3Vku6sWUtclDbpM3SwjzEfo1WfTQItyB9rwgHJdpq49MkqxH9G4eY4WGMJbaiMQGOqUBA0jLBpHmApSN2hZefXTDfAaFeLxiSDEB0EjmIw%2F1uVObmN7sgrsOx0IbbvqtRV8yMAg7Y4qiOYnA1cxSuM0h9shuI%2BsAi2zqyOL3nxSUD%2BOpPYjMZEBdXlWIg7kEHQ%2FgbGOntlv1DZ%2FwpVdjJivWpXocaIUYpgcGY2VU1G%2B00dkWqvgU3a18iVVA6loLHTHv4GGKh3FtCXDnuM5A3qZHz%2FNPfHEb&X-Amz-Signature=43c58b5068af593f87478e2cf70d1497868ebcc4ac3f4026fbf3af90190e13cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
