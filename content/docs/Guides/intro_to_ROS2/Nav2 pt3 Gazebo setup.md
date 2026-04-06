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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=ddf5b5befe21efb60ac3ecfbf024404d61d4f0f8f964f28868c925bde2851b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=4634f5e636f0ec7d45b686056ae8a5db46d446de3893fe1d9b00b70a4c6c7347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=4ea8776f57fff39668024e4dce403a614dcc15eece9135fc1beb64485a9da437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=29cee75752ba9370df507901c08380d73b81b2112f7d8a879d1c0ba19a0d3d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKO3PRS%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCe99NBw%2Fsz4tRqI0dV8MGIAvc5p089FWfOfQHAdVwAAiEAyUaEztNwe8Un8IloL5PIzWGy6BUf426W8%2Byk1psYIeEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWyR%2F9Yd4kikIOmqCrcA3exki2d0Yustxr5fuLfekWym7dAUhTPZfFIFRJHB2rj81hLMiFCI%2Fc66oW4jSvtWf8TN3PbV5OLjBqlw4aAovVM%2B8SXZkXeGjisE9FosFu95tmlhNzkr5W%2B29FGwB9TWVQrzZKUCcO9xl7E3Mhrgq1eR7lXrl9K34uQE3R1xtGHiPy6BGmaXSZ36CW%2Fn27wSJ1Nots57%2BsRIJ0XINEAG8L%2FANvEqfgqNlqnQDcCMlD5ZMumDkjbiWjpqHMr2U6RtslOgscccVtytGAncdJVkeBrfOakR%2FYEfAKSUK193ZwNdaebGnv74FqkVKyjAYW%2F3nJndqFVgAGWRe47C%2BsgcSPkC%2F98bivr6bPNnvLEbTUjvIf87KDOdRyncpb7ZXDvZA0Qk95wdZ3S%2FP%2FFXBSBgvO0xdXtIJx%2FY6pu%2FJHdvl0yXLESPqnCAqCGu4DnzXqlyC4cBUmEXAn0F0%2FZLECVsTXlF3VL2xVdl656yx%2FIg7FiUieEepE7ZNCSOQpUkEo3dBInaQSAN5ImOmbU5EcM9C83BkPMEvZtYdGDdA%2BbcRcGExLLh6r53xmVPTOc9f7QgF2H2ujO7ZkEdzQ5PKYJ3KoXfkznGlz0Ap3DOo8FIM1I6I5mQKyt76oX%2B%2BgHMO6xzM4GOqUB2RKw5YEOqTs%2BMx7L3%2BhRUd9XYdG6N0tTX1ksbrD1kJqj1AIHc%2BrqdB%2FMjUs8%2FTeMgnkS22wJ%2BqURkcQ7kMCKExssnazDXM3V4YKHF4%2BUEgaZ%2FAL2CgKTLKMHNZGZT5gtjdUAIg4%2Fe52S%2FArafBv5tZ%2FKZ18QeD15%2BNAICuYlPciXEDlgZiUb076irdqH2EwnteTWzD5hVR7%2FlIwbHuYjKL99LB1c&X-Amz-Signature=139b8eb61452be2b08ee6ccf4b0ce6dea00904555ddcb860157abaa468fe49e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=a41903c5f898b70a8d325e7ac39891ed4c66b116fcefaf6d23a9995353637892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=9594b7ce344a953424be4db459c244fec9d791ce5c8606f35119865fd4c43a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=0786095d21e00a37793927406f33361ac22677e0eaa0b9768b622ce00cb8b6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=19ea1c0c38aaeca9c737de5106b94066872e2763ff25038e7ee8584f24797513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=7559dc4c8c18b9578c54486a4f5a607bc7441de59e66d126c09c0f8b8b091abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEVX6KP%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIe0%2BViEdXYGx7lx2Rms%2B8tY2OmmK8LybivdnmheMWGAiEAvQTVy5NTBW2KhoJYeV2wOSBNzn1JQS89SecolL%2FlueIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpDiWbCgLGQATXQ8ircA3E1LH5%2BTrZ%2FhTSxyOBMvTxsMrB4oHuvadfCp%2BOVuqTs15j%2FGkdQEfjdP03It3L6njUf62oX67uBQTo7%2F8Bv8HnNhsLhnRv0oWNQCsb63euDNMeTSiNFQtpPFiskHo16Im3y6Z0rBv9l0pHWgOpgj1KxAd2sxVWzpeZp0qVbcg%2FOi9fp4a1LQ%2BScRTZ1BoYYCvFHgAqbcsyK9L0oeLbMeG2v3r562GZZHu2JlfebH6chAM95LciVGNmDRjctoaac%2BEBce2rFyGLSHv3%2FT306noovjiqCVpzjkd%2FQ6O4b%2FSgbhuCl4uTBPK9HUjsImXkyfN1o30yOD96KTLWj7mq0TikQwtMpdrL2SM7euK9hqAI%2Bccys81j3vRrA8XyEvf6lWxgkQKCMvDiV2hIGQm26cg%2FrJ7Xqmuto3H1MiDfo%2F%2BNpGUoqNYu2bOp8KiqgGJvXf%2F5Qi8UUFYURD%2BY9O11ls6dhhtWPgKRKB6tOiT6MsR2xhwrGurL7OZMAlc%2FEkwLffuxBBgB31xiaQKPbd%2B5odMfba9558ompAQ2RSiKox3ViZBXCU%2FfJZjzV1On2YjUsQQzxr4diaT%2FD%2BZpd%2B5ZOiAbWrqZ5BbZRDja4%2By92PNij4Bpj6RC%2B1Yb953o4MIaxzM4GOqUBd7d%2Bpm19louQNkPekgA4jE26Ss%2BT1fOGSu8JxGTboCbqWYRueC23WObE2aRAyW%2FHK6SDXqHxnjPO7lwloPSgPQiGYjhBr2d1%2B%2BNZ4jCW2fr6ApBU%2FVCIIB66Wclo1wbwhKJMOFNd22gssm61sgTxxV6g%2BeFnKJ3qnbW8os3b5g%2Fl119oKXrzCVmsEnzUH1BX1wy9Q0QBD9V9YPMWY2Qb2tTF5L46&X-Amz-Signature=67b0dfd9cbd8482522f071d54bb19e01cda68f82ca4ef30f956298a673d6f6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


