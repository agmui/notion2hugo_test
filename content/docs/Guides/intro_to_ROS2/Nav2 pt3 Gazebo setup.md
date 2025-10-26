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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=7fa0e12c31da8b5eaf52e5fa06b5c9e77fab323b2a0beb2d8cf83c69c17c9b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=aa839c99f3fb1dbf4e58846fbcc287cafc70ad606a4abc9201544dfb8b96b829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=fad264473eac993b9fb1827cac452226783259517bb6e1dd0fc6cc06fb478b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=04462e0cfd35e70f4377c83b0f5553e2c747bc5e5805df3004e929a866670dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3IHY2P%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lElNoAxUgY6rYJz8l1ZK1PPABU6ao7mD6SAFa44XbgIhAMHh2MAhQ7StT73EnEpNTjuXvaP8q%2FBOgXjbhOzPTb5gKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwry%2FDHka1k4lZfLDYq3ANFogjpphNE8rsBuhSgjLEMR5FQP2HezwNKuohOixsgNhtPqyJyftLurq%2FkcaHULSvosvRtjFxod7ox28G%2BgBSy2H0t7F0VBt5S5pjGkAIHqcDwGFauVQNI0YCCzwV4mjGZhyql9bmVWz3IXAVnqUg4KnyLrr5a1uZD%2BnQGMlbLqkUYN%2BqegmXE1g%2BjgeYgs542TbD9fw6SyTCqyNzE4HiaK3u1l6RlL3v%2BOcL7EqDPyEdrKsV%2FI0QGsHdZ9iVxlCkX7qjPh3YIfyI3G%2B8KHdgjaqPLwpj56ku%2BywHBWbCw2CQBybX6omXlPNeQIra%2BGhoCPNo7%2BwlXs4CfWHeS2AtMcRNthKKogWwbq76RO61iL5NfD8cfC9OwpJbWAQ9FWjLJWHkPEGXL8fOnqtXVz1X6WLSLW7IoHbUkSz7bZrQWl6FcpHpG55jBI%2FbKDaSpG1hF79UJumEL40QhpAT2B3FJJujYiTkjvRm5ZcfdGlN8lpKvMCA%2BZcgP0MqC60GNTG%2FGGF8%2F%2FDHXCebLNUzn8sAdC4avsKC%2B7i4nzJName6TIoNnT93tsymZxoTTJtszRpkNgjW4%2BHCQdukL8p60JELYQE0e%2Bn2lNwRkbF00VHG8jCMYWJsmR%2BUCSbyInDCQqvXHBjqkAYCb5NbxRgO9UrJioRBW9OQCOw7rdwMySuMDzpzL3fMy%2FPDzvR8e905tKjWn9U0u2g%2B3ZYl7xdXbVhZjl9seIh1krNk6YpNkojoDhGJ10WQgJcBctkyOteve85ih7WqoufXE%2BG1Wx356m9L4X3dbMb6bgPkQBC1PWtnvJ1L4thHYwOcupiWZ9B%2Fi0A1Bfp2ZarBq3DCJS3UROP2xJzuxUNbi1oi9&X-Amz-Signature=e46f560579a46bfef2ae37b6964ff61e8ae1735a8bffbd65f8126cc486baed4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=a7582f69bf0bf3a52614a06ca53a8420dfc9845a1a1e4f80e2998e9651e69cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=183a8cc6176045e14523d1d64c2d17542aa1d9541c882a4eea7c2bb624ddae9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=f5d6fadc43bd1bc1c666767612196dbabb152afdab43c6170e1af3dd9fd460f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=6c14697083675155cf9ea8711c39e5a29747b8f861c68cd6d9bc710ec0d8e545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=549e250230fd58a368446acb702ce728ce0ee1d5983e34af6da5a56361bf3fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNDGL5Q%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzHzeogWg7%2BlbIwVTVR%2F9oKIddXhvinGevcHxfb6H%2FNAiEAzMbzgysEEx%2B8%2Fjbo3fKbyYMOS6ANBE3TTTd9oslXMcIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI65rBW8T1LuyglJVSrcAykWv3XJ5d1ycjhjHlHtJixXMJy6%2F3Bzs3rDcTv2o3j20N8rsww%2FPn15Ek4ZM6JRAwxkOeBKbVmuODS8R0TPL7pYUNN1tgpzM6zb3DNYyAlo%2FzUwn0tcZ3I%2FDhS5ayuh5Xgm4VkcI7fnpp6yORznl5smzjGyd8VfxOe68LRlmGLVAzUIim5zG58i5bYEX%2FnBPvN5suULEAG3RN%2F7sij0Egi5eW5fcetx5gqxAowf%2Bsx2J622bcdzoxVDhr%2F%2BBUFwvHYQCmFawd4RBxLLg6fgXYbaujlbKFxpgxvc46pMOgcNzNRCBNvTbslVrZCFuJWLMK8CKMMbB8%2B1WB2I0XueN3J9Vq4r5XR4LATkuTXFypcymYdR2fbJ0mc3p592Na9nZ4AFM8bZbsrQH2OsV1SklR2sLDVPU0RnZjKCkI2EMhtaCqmKp99CNNCmHMWD43U4PQcOxJRbp2on5fmvGo0FWtopm4V3getGQoUsxlPAR%2BZcVv21db7h1zqSK%2BweJz%2BAMEHSjpIjihdMSH%2FX8x0IJuJ3rISIgUTBRVef8xrgyUdz7KX3Y7ZPRA%2FUmeGLUMnsx5NOKPg51XSSoskKyf3ecC%2FpdoGHPPASExFiZl3eKK5vY7Nm5EbfJrmEHxjnMKyw9ccGOqUBvH82%2FYzG6hKqPCw1jmspMxZG7nsHFXxUk1TQ0e4T%2FcDb1uVuiFk%2F2U0lUmHb%2BNAJWvzu%2Bnb2x9XyVO%2FqUAVwlI1kXnsRfTTurxwyIWj4slTY%2FQIL3xLlEIjmBy1%2B4Zwv9qYL0Zw7CQzgQ%2BlM0%2BVSWrLV%2BE6AcgoNH8qgc73d%2BMUtkF85zhAZbF6U42ndVYg9ukSVBoAcZsiNWBj%2F38mzz%2BPM8h5h&X-Amz-Signature=fa19d0875fcd4e3da3a05c22eeefbe97ef451070928d84fb75a00ebaea6b13bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


