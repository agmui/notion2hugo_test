---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-24T23:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-24T23:10:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGFXSY6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDunmv0v16UtIwVwEcgdJF6og6k1EAoRTaqrrG2XNuOMgIhAONx0zImaAfDsx4JPxebc2sN%2BFX1IMhilVAWZ%2B2epqgqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymGGazkL1XRNrh630q3AMC7ola7idYQIpw2%2B2MRQT7CIR1SNE8L4qmIA0aWX5mpHCLrBY5NXCg%2FilqGqlkqzpaC670KYmALcM2gWQX3ty%2FvON3iNLtEZZJ6gNMwKWUMRd1XECNMnpdlP7cFsF3osOe6xMMzrpAoNV9mrYTcv8TYpRTkqiW1uw%2B7EnGVoKovdcCf2LnNPUMq36eqjmn3FumNpEJxTjxs94nn3nVdZy%2FjZXnSpMcerf92ZetExaw3dM67JOa7y0ilFRdCmy%2FLBxevqvuvKKejy6wBXFUhi53tkfaDP6Z5nfT7vF5EPoeQ6Ya%2BLXr%2BrU1Gqw1kmfofGvCGT9DcFe%2BRNpz%2B9IDtO%2FEjFV1CatO2HBu5PsGADOEi2%2FjTgOf29kprZ%2F0ZWHnspGoKJh5qjQO1vUASZT5sK0ncbYK%2F1m%2FdaBK1c2aHISIOb3%2Bz0PzL6Ra1Y%2FJXhs%2B5mK9eL1qqQL16OXOat%2BIOIP68UXhAuzH20AHl2r7DJzszJ9eOqw2SeVF7N3LNkrgo3ieJhlgOk5cFU3XDgIY%2Bx6fOD%2F60NOT6PeJREveRhuOwYsF3SeSmnzKau7MsY1AIL3xRxow0fLJBkHAWJLGekiLVcW01H8FGx4bkk72UveZHEvBNW7Xm5gzPuM1pzDD7prEBjqkAUNOXua5zmHe%2BqbbOWzhFaoLph35lYEEA1E9p25S%2Bj%2BuBwd1IS2Sp744zc5f8fHGi8Yhg6JdaaGCJ1DLj%2F9PidlsOI3vjSB5ZHlBfYvN42CcIiV4nXSF5azLvEj4Ss%2Bv%2Bh4TPheeze4jHUTE1oC6BwPqLS%2F7jTsxmuaKyAYjrmpyD%2FfGZSqwHdFS13Z%2BXgVYeZcurtWAoQy8pzsHP%2FgOEI%2BVsezF&X-Amz-Signature=02a7c8397aa57f84b721c3bdf134fe0c4dc87621a81d56918c9b567cffdb8fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGFXSY6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDunmv0v16UtIwVwEcgdJF6og6k1EAoRTaqrrG2XNuOMgIhAONx0zImaAfDsx4JPxebc2sN%2BFX1IMhilVAWZ%2B2epqgqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymGGazkL1XRNrh630q3AMC7ola7idYQIpw2%2B2MRQT7CIR1SNE8L4qmIA0aWX5mpHCLrBY5NXCg%2FilqGqlkqzpaC670KYmALcM2gWQX3ty%2FvON3iNLtEZZJ6gNMwKWUMRd1XECNMnpdlP7cFsF3osOe6xMMzrpAoNV9mrYTcv8TYpRTkqiW1uw%2B7EnGVoKovdcCf2LnNPUMq36eqjmn3FumNpEJxTjxs94nn3nVdZy%2FjZXnSpMcerf92ZetExaw3dM67JOa7y0ilFRdCmy%2FLBxevqvuvKKejy6wBXFUhi53tkfaDP6Z5nfT7vF5EPoeQ6Ya%2BLXr%2BrU1Gqw1kmfofGvCGT9DcFe%2BRNpz%2B9IDtO%2FEjFV1CatO2HBu5PsGADOEi2%2FjTgOf29kprZ%2F0ZWHnspGoKJh5qjQO1vUASZT5sK0ncbYK%2F1m%2FdaBK1c2aHISIOb3%2Bz0PzL6Ra1Y%2FJXhs%2B5mK9eL1qqQL16OXOat%2BIOIP68UXhAuzH20AHl2r7DJzszJ9eOqw2SeVF7N3LNkrgo3ieJhlgOk5cFU3XDgIY%2Bx6fOD%2F60NOT6PeJREveRhuOwYsF3SeSmnzKau7MsY1AIL3xRxow0fLJBkHAWJLGekiLVcW01H8FGx4bkk72UveZHEvBNW7Xm5gzPuM1pzDD7prEBjqkAUNOXua5zmHe%2BqbbOWzhFaoLph35lYEEA1E9p25S%2Bj%2BuBwd1IS2Sp744zc5f8fHGi8Yhg6JdaaGCJ1DLj%2F9PidlsOI3vjSB5ZHlBfYvN42CcIiV4nXSF5azLvEj4Ss%2Bv%2Bh4TPheeze4jHUTE1oC6BwPqLS%2F7jTsxmuaKyAYjrmpyD%2FfGZSqwHdFS13Z%2BXgVYeZcurtWAoQy8pzsHP%2FgOEI%2BVsezF&X-Amz-Signature=b96b588115ee59dbdf79ef47872b7edfd7835f87d0f16daa7a852945bac57727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGFXSY6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDunmv0v16UtIwVwEcgdJF6og6k1EAoRTaqrrG2XNuOMgIhAONx0zImaAfDsx4JPxebc2sN%2BFX1IMhilVAWZ%2B2epqgqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymGGazkL1XRNrh630q3AMC7ola7idYQIpw2%2B2MRQT7CIR1SNE8L4qmIA0aWX5mpHCLrBY5NXCg%2FilqGqlkqzpaC670KYmALcM2gWQX3ty%2FvON3iNLtEZZJ6gNMwKWUMRd1XECNMnpdlP7cFsF3osOe6xMMzrpAoNV9mrYTcv8TYpRTkqiW1uw%2B7EnGVoKovdcCf2LnNPUMq36eqjmn3FumNpEJxTjxs94nn3nVdZy%2FjZXnSpMcerf92ZetExaw3dM67JOa7y0ilFRdCmy%2FLBxevqvuvKKejy6wBXFUhi53tkfaDP6Z5nfT7vF5EPoeQ6Ya%2BLXr%2BrU1Gqw1kmfofGvCGT9DcFe%2BRNpz%2B9IDtO%2FEjFV1CatO2HBu5PsGADOEi2%2FjTgOf29kprZ%2F0ZWHnspGoKJh5qjQO1vUASZT5sK0ncbYK%2F1m%2FdaBK1c2aHISIOb3%2Bz0PzL6Ra1Y%2FJXhs%2B5mK9eL1qqQL16OXOat%2BIOIP68UXhAuzH20AHl2r7DJzszJ9eOqw2SeVF7N3LNkrgo3ieJhlgOk5cFU3XDgIY%2Bx6fOD%2F60NOT6PeJREveRhuOwYsF3SeSmnzKau7MsY1AIL3xRxow0fLJBkHAWJLGekiLVcW01H8FGx4bkk72UveZHEvBNW7Xm5gzPuM1pzDD7prEBjqkAUNOXua5zmHe%2BqbbOWzhFaoLph35lYEEA1E9p25S%2Bj%2BuBwd1IS2Sp744zc5f8fHGi8Yhg6JdaaGCJ1DLj%2F9PidlsOI3vjSB5ZHlBfYvN42CcIiV4nXSF5azLvEj4Ss%2Bv%2Bh4TPheeze4jHUTE1oC6BwPqLS%2F7jTsxmuaKyAYjrmpyD%2FfGZSqwHdFS13Z%2BXgVYeZcurtWAoQy8pzsHP%2FgOEI%2BVsezF&X-Amz-Signature=ea13760001310ede56b06c08c2898e73c39ff6f16d7b9ffe7bccb0c0aee456c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

Thus all Gazebo topics must go though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGFXSY6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDunmv0v16UtIwVwEcgdJF6og6k1EAoRTaqrrG2XNuOMgIhAONx0zImaAfDsx4JPxebc2sN%2BFX1IMhilVAWZ%2B2epqgqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymGGazkL1XRNrh630q3AMC7ola7idYQIpw2%2B2MRQT7CIR1SNE8L4qmIA0aWX5mpHCLrBY5NXCg%2FilqGqlkqzpaC670KYmALcM2gWQX3ty%2FvON3iNLtEZZJ6gNMwKWUMRd1XECNMnpdlP7cFsF3osOe6xMMzrpAoNV9mrYTcv8TYpRTkqiW1uw%2B7EnGVoKovdcCf2LnNPUMq36eqjmn3FumNpEJxTjxs94nn3nVdZy%2FjZXnSpMcerf92ZetExaw3dM67JOa7y0ilFRdCmy%2FLBxevqvuvKKejy6wBXFUhi53tkfaDP6Z5nfT7vF5EPoeQ6Ya%2BLXr%2BrU1Gqw1kmfofGvCGT9DcFe%2BRNpz%2B9IDtO%2FEjFV1CatO2HBu5PsGADOEi2%2FjTgOf29kprZ%2F0ZWHnspGoKJh5qjQO1vUASZT5sK0ncbYK%2F1m%2FdaBK1c2aHISIOb3%2Bz0PzL6Ra1Y%2FJXhs%2B5mK9eL1qqQL16OXOat%2BIOIP68UXhAuzH20AHl2r7DJzszJ9eOqw2SeVF7N3LNkrgo3ieJhlgOk5cFU3XDgIY%2Bx6fOD%2F60NOT6PeJREveRhuOwYsF3SeSmnzKau7MsY1AIL3xRxow0fLJBkHAWJLGekiLVcW01H8FGx4bkk72UveZHEvBNW7Xm5gzPuM1pzDD7prEBjqkAUNOXua5zmHe%2BqbbOWzhFaoLph35lYEEA1E9p25S%2Bj%2BuBwd1IS2Sp744zc5f8fHGi8Yhg6JdaaGCJ1DLj%2F9PidlsOI3vjSB5ZHlBfYvN42CcIiV4nXSF5azLvEj4Ss%2Bv%2Bh4TPheeze4jHUTE1oC6BwPqLS%2F7jTsxmuaKyAYjrmpyD%2FfGZSqwHdFS13Z%2BXgVYeZcurtWAoQy8pzsHP%2FgOEI%2BVsezF&X-Amz-Signature=5a89198f372e1f9a99ed3959cd1f13cbb978d5d3c8e62e4fd84ffe0d1117cc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGFXSY6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDunmv0v16UtIwVwEcgdJF6og6k1EAoRTaqrrG2XNuOMgIhAONx0zImaAfDsx4JPxebc2sN%2BFX1IMhilVAWZ%2B2epqgqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymGGazkL1XRNrh630q3AMC7ola7idYQIpw2%2B2MRQT7CIR1SNE8L4qmIA0aWX5mpHCLrBY5NXCg%2FilqGqlkqzpaC670KYmALcM2gWQX3ty%2FvON3iNLtEZZJ6gNMwKWUMRd1XECNMnpdlP7cFsF3osOe6xMMzrpAoNV9mrYTcv8TYpRTkqiW1uw%2B7EnGVoKovdcCf2LnNPUMq36eqjmn3FumNpEJxTjxs94nn3nVdZy%2FjZXnSpMcerf92ZetExaw3dM67JOa7y0ilFRdCmy%2FLBxevqvuvKKejy6wBXFUhi53tkfaDP6Z5nfT7vF5EPoeQ6Ya%2BLXr%2BrU1Gqw1kmfofGvCGT9DcFe%2BRNpz%2B9IDtO%2FEjFV1CatO2HBu5PsGADOEi2%2FjTgOf29kprZ%2F0ZWHnspGoKJh5qjQO1vUASZT5sK0ncbYK%2F1m%2FdaBK1c2aHISIOb3%2Bz0PzL6Ra1Y%2FJXhs%2B5mK9eL1qqQL16OXOat%2BIOIP68UXhAuzH20AHl2r7DJzszJ9eOqw2SeVF7N3LNkrgo3ieJhlgOk5cFU3XDgIY%2Bx6fOD%2F60NOT6PeJREveRhuOwYsF3SeSmnzKau7MsY1AIL3xRxow0fLJBkHAWJLGekiLVcW01H8FGx4bkk72UveZHEvBNW7Xm5gzPuM1pzDD7prEBjqkAUNOXua5zmHe%2BqbbOWzhFaoLph35lYEEA1E9p25S%2Bj%2BuBwd1IS2Sp744zc5f8fHGi8Yhg6JdaaGCJ1DLj%2F9PidlsOI3vjSB5ZHlBfYvN42CcIiV4nXSF5azLvEj4Ss%2Bv%2Bh4TPheeze4jHUTE1oC6BwPqLS%2F7jTsxmuaKyAYjrmpyD%2FfGZSqwHdFS13Z%2BXgVYeZcurtWAoQy8pzsHP%2FgOEI%2BVsezF&X-Amz-Signature=614483496669f581bc79dd22bb4be0d0050a5938433454276ab4d69d4ee04338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGFXSY6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDunmv0v16UtIwVwEcgdJF6og6k1EAoRTaqrrG2XNuOMgIhAONx0zImaAfDsx4JPxebc2sN%2BFX1IMhilVAWZ%2B2epqgqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymGGazkL1XRNrh630q3AMC7ola7idYQIpw2%2B2MRQT7CIR1SNE8L4qmIA0aWX5mpHCLrBY5NXCg%2FilqGqlkqzpaC670KYmALcM2gWQX3ty%2FvON3iNLtEZZJ6gNMwKWUMRd1XECNMnpdlP7cFsF3osOe6xMMzrpAoNV9mrYTcv8TYpRTkqiW1uw%2B7EnGVoKovdcCf2LnNPUMq36eqjmn3FumNpEJxTjxs94nn3nVdZy%2FjZXnSpMcerf92ZetExaw3dM67JOa7y0ilFRdCmy%2FLBxevqvuvKKejy6wBXFUhi53tkfaDP6Z5nfT7vF5EPoeQ6Ya%2BLXr%2BrU1Gqw1kmfofGvCGT9DcFe%2BRNpz%2B9IDtO%2FEjFV1CatO2HBu5PsGADOEi2%2FjTgOf29kprZ%2F0ZWHnspGoKJh5qjQO1vUASZT5sK0ncbYK%2F1m%2FdaBK1c2aHISIOb3%2Bz0PzL6Ra1Y%2FJXhs%2B5mK9eL1qqQL16OXOat%2BIOIP68UXhAuzH20AHl2r7DJzszJ9eOqw2SeVF7N3LNkrgo3ieJhlgOk5cFU3XDgIY%2Bx6fOD%2F60NOT6PeJREveRhuOwYsF3SeSmnzKau7MsY1AIL3xRxow0fLJBkHAWJLGekiLVcW01H8FGx4bkk72UveZHEvBNW7Xm5gzPuM1pzDD7prEBjqkAUNOXua5zmHe%2BqbbOWzhFaoLph35lYEEA1E9p25S%2Bj%2BuBwd1IS2Sp744zc5f8fHGi8Yhg6JdaaGCJ1DLj%2F9PidlsOI3vjSB5ZHlBfYvN42CcIiV4nXSF5azLvEj4Ss%2Bv%2Bh4TPheeze4jHUTE1oC6BwPqLS%2F7jTsxmuaKyAYjrmpyD%2FfGZSqwHdFS13Z%2BXgVYeZcurtWAoQy8pzsHP%2FgOEI%2BVsezF&X-Amz-Signature=0309a860f4460e6de609906f352f750b8e7ca8ff1a2e74fdbb9a17ca79d7e821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGFXSY6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDunmv0v16UtIwVwEcgdJF6og6k1EAoRTaqrrG2XNuOMgIhAONx0zImaAfDsx4JPxebc2sN%2BFX1IMhilVAWZ%2B2epqgqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymGGazkL1XRNrh630q3AMC7ola7idYQIpw2%2B2MRQT7CIR1SNE8L4qmIA0aWX5mpHCLrBY5NXCg%2FilqGqlkqzpaC670KYmALcM2gWQX3ty%2FvON3iNLtEZZJ6gNMwKWUMRd1XECNMnpdlP7cFsF3osOe6xMMzrpAoNV9mrYTcv8TYpRTkqiW1uw%2B7EnGVoKovdcCf2LnNPUMq36eqjmn3FumNpEJxTjxs94nn3nVdZy%2FjZXnSpMcerf92ZetExaw3dM67JOa7y0ilFRdCmy%2FLBxevqvuvKKejy6wBXFUhi53tkfaDP6Z5nfT7vF5EPoeQ6Ya%2BLXr%2BrU1Gqw1kmfofGvCGT9DcFe%2BRNpz%2B9IDtO%2FEjFV1CatO2HBu5PsGADOEi2%2FjTgOf29kprZ%2F0ZWHnspGoKJh5qjQO1vUASZT5sK0ncbYK%2F1m%2FdaBK1c2aHISIOb3%2Bz0PzL6Ra1Y%2FJXhs%2B5mK9eL1qqQL16OXOat%2BIOIP68UXhAuzH20AHl2r7DJzszJ9eOqw2SeVF7N3LNkrgo3ieJhlgOk5cFU3XDgIY%2Bx6fOD%2F60NOT6PeJREveRhuOwYsF3SeSmnzKau7MsY1AIL3xRxow0fLJBkHAWJLGekiLVcW01H8FGx4bkk72UveZHEvBNW7Xm5gzPuM1pzDD7prEBjqkAUNOXua5zmHe%2BqbbOWzhFaoLph35lYEEA1E9p25S%2Bj%2BuBwd1IS2Sp744zc5f8fHGi8Yhg6JdaaGCJ1DLj%2F9PidlsOI3vjSB5ZHlBfYvN42CcIiV4nXSF5azLvEj4Ss%2Bv%2Bh4TPheeze4jHUTE1oC6BwPqLS%2F7jTsxmuaKyAYjrmpyD%2FfGZSqwHdFS13Z%2BXgVYeZcurtWAoQy8pzsHP%2FgOEI%2BVsezF&X-Amz-Signature=0d5e92ff40d90ff81f937a9819ac2250d40842ad667926f69534bdd598dd2e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
