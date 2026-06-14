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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=a70d90c03d43a5110fdf556a7d313fe0a946f79fe4786f4a8471bb8320e26557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=3fbf66945a32ef647e0a1a97517be45a836e5dc8b0ef6464de675dbbbf222841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=df811a5590f89e16ed6a4c1a98b2df96fe4c2621c599ee26fb475ae83c01aba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=b4c8f76dd0b1920e532a929b2025f1d86c9dda90698b32d458b7a53191a5e258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMZBMBP%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCR5wE2bi%2BhzkUfvK0PL5n3vNIMuhXe7uNlJkRzYiIZxAIhAKQuzed%2FgJxaqCKS%2FJ4IZT1mGcx3Bktzh0%2FTB9vsaF4bKv8DCDsQABoMNjM3NDIzMTgzODA1Igy2%2BG8IQRlE6qHsDUYq3AO6zMbdhgoahZbnJrYt2%2B6PTCX241yyQ2W8l982kUDS6vQwj4w%2FPtyDPuhYRqmCYdSWEdcanLILmdNQoTOiL7dZ2Yk1tWJIw7XI%2Byt4tNPL6%2FerVFZPkbOjqDZ8WAus1owOuD4sBuJd9guuoG9FKct7yO3J%2BVkRoCNSLcJceHVCuwknJqbrzVvaYFczrX0%2F0ECS7LC1o3ZdDOpZcY9nRqc8rdTLNipfYm6rZ%2BNW8vct%2B3%2BZsFo1Jb3sjVxl2Pl8KzZ%2B8J0WG818DuTbZd5%2BSQEc6vFXgPxW3bXzCtEsrzQiMBlh%2BV0TufWPO%2FB2T%2FHg3r%2FBC82ovPtAwjsMER5VXZilbMjnjaCgluQ0BYA%2Bo2%2FphOB%2F9sRRuyHYX8TWJHaxExvK0eFBxdIf9i%2Fw%2FWiN6akfCkZ8%2Fon%2FWFAB3q2CxCuntqu%2Brp98VO809A3bUBqG3xXcZQ%2F6keZ97B%2BdTrycFBGS1pabExEctP%2FizKKlv2mbpN0JsoLJnzamxGv3LTbcUnq%2B3qvrPpaySXKr4o9EVZTaW0d2lKztHzBX0JByu8fLvOU8z7AqSuJX9nfCHsrtaovOWRVfc95IuRucGOKx9UoWIs8WDPurXeF2SX0WlZyob0O0ZXtJrnYPIZ5FKDDTm7jRBjqkAatBzv76qomXO%2B5Xg52nqEnX6a6wSwFzG%2BF9wEc0urNShrAk8WwhIz5pmhS%2BnxMKI2OJKI4bGvutA4QEwS5frJrTPYOkNoZ7%2BuQD1zx6XJx7wY1arCCyLThjaw5IQaWX3BLnFqJ73TnlqcFbZWc4GbLsTg0kjLVToOAUHDRkU7bNq%2BKcfCynVzFr6%2Bxz7RQpUdNLKVk9oZ7%2F7l229BqEozAlKOqp&X-Amz-Signature=3f85b89061d154d7d31bfda357e234e6f17c5b216207053155623c7afa253f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=e3847b16bfa7e26c10b8d94a49c50d668481590a41516373b88f31d73837c8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=619fbb3480176cf7b8c88c1229c34042ed26834e26b439f8c3d081577ff5c0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=fc2aa042cdd180f3f28764094ed7095fb8bbefe28bdd047a6eaca84c546e620e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=b165a524da43b8210159e14128fcaae1ec4f88ad9c2bd8bb14eb464379282ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=16f279d1e1c964d1c51d26c6e2a6ec246bc1c0af4075d7c2e8b5cb9331a602a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTJYVPZ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO%2FXMXDYaMDb36m51lP5Sf2V1%2F0lKLOogjOD02FqrKagIhAKn%2Fr1ddFB3q7MSvb8DEe9U16k4M3UXLzhkreRA3w8TMKv8DCDsQABoMNjM3NDIzMTgzODA1IgwASufvcPTpc%2FLMgeoq3APyrmABGsIfKukk6NuJO11cmEAgI8MfJxy%2BaolEENRIrXvLlIqDUG7Kc7Q2nNV5nZLLJXeU2r%2Bc3%2FZpHiPnO0j1CeQ8m1St2n1KmGoud1nVOOGMDY3bNFwYVILODA8Zbx7gYpsRerRvehXB9mL9P2hutybxCgvJTQsqY4MaEV4RmtAaHb0vPrNNlZC%2F0%2BBMzTOUvX%2BeAyLkAan9fkgMG3RBNZXBVeuQF2k%2FO0Y5FgoFlrmdT%2BZ7gEsPmzcLyUGcEthZUYdfgDg%2Fpg%2BAbo7OVgWACTckKfkKYt%2BcP%2BWIki9uLIusjMksm5VZX4d7xZrXQlKdO6e3YXAhyZkFxS2Qd2O42H9uhAL0JFzpFMRWL0A9lpE1pXzjfGmtaWb7LunnmGZ7iaNfszYtggcfkDeBM272TV5zvdnRt%2Fgp9wyznq8b4GqNUD0YW%2BBAQ3PwpHTlezl%2FQdxlK14h5rVLjxh0GhtUIj49pVifzqqn0mZ%2F2cb%2BpT1KS8eCkoC%2BXwVSywQ0u5nM24GoZUEeyKQCpbK1ZQcNFSgsBULln92bVtfsWZKWRMA27bT7MH2QtsV8x7kOMFddAq9DMtOqFhwyHzcXMXJwSw%2FXzLECo4OGZI8K0Vy3fN%2BaISveaBR%2B3wfdATC2nrjRBjqkAXXmE6%2B0Zmfj%2FoSeXEH6q2rskkk7%2FdFdj1iasv%2BftFlz8Y5b3r2SCRe47Os30cG9rinMMAXnsvMfl4FBuNS4NEYXdLiQ7uiQ8AyNYqb%2FABjJcIxgdx9fGt%2FURNKNM7Ll1IzzaY5fyVNLPayuWDNhNO5nsRbzXvcD%2Fh3sHiK%2BWQbE3Jgi%2FbOY0yDa76i0i6cVoa7CzNDBWUrr7nUiS8q2DirXReOA&X-Amz-Signature=4113257d1a2cc4a375f0e959b4aa9835d2bf9364e3af1db500c67fb09c0391b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


