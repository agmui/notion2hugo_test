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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=dd2ad8f9cdfc6227720d99145f9f7d7286f0ec5679f758882ea55c9b5bda43d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=d69599b37d538544612e9dd11861b3fce35bb05bfea3394646012ae09216458b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=f5621fd134d0964de79ebabfd3641f58a5458cfd173e14179d55fab705c5d73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=37b7584ff0c46ae54f0639277d014ef250018e6029c5a5eea3186853117ef009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSN7T7XZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyAhZ9OwJM83SFhOU8a5xUuY%2B283cFJFZfZJVj9qL9YwIhALLYiEngCmT3SVPACAYPz82EOaFKGiYA3SgE%2BreQmJkDKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxzf8fWIkwZin2cxzoq3AOwpimZ6zssZwSPri2r%2BolQKrBeLKYusrPUTNwC6ZTewVygiiZJZR6XCcidIV1nAlyOJAtXq1YGR6NgKKGeijQUN%2B%2BC4RRZwnumZPh91soLFd66FqbqanZiGFgSzR%2BlzZEx3z1T7kRVs4WLZAUy7kb18U%2BG6JvyvuyZ4NHS1Ip9WpHUO4o4Ppg5rEDAKaIeS0zphXgdRaePfIN7O9IaVODjZJPRjCLNBo8%2BMmsZa9C5SXXmNH9iHkGpW3lwRDdFallZht11HVJS%2BXp%2FPbSmdvs8lmT4oTz8tgFGHxAbK9XHOSoac9tuUZSiZ0NXoJL2quGWpFIjXAFSVZSg9Nstbz58L6g9kxEEjtKlGMLGk5s%2BuE6ds3uP4%2FjnoPwgPyABMEiNctoIFe7WTYfVvzxCttb7wHsk9JLuGTVDgN2DON87q1s0s95NshfJizTouCOlZScVo9G3b8Idw9IqVaX5S2aMpWlU3vYA6O3234O%2FpI0vnHbVTXYGV1Il7T29pzRF21Q5AqmoKQb9zno%2FPUQACzxYKLE5zq2NrxNDSKo4O2V%2FKilyQJFZnm25OCVTo0iPCw12fqjIm6DwQVHA5SAkl6kQXHGA8mwFs7u9EBoekBhdaA9ar3mhEXINUwXZyzC2i9%2FEBjqkAU3V24KtEzYxsxVxIA1xCpIBHBnN%2Bf%2BuqUGMVkSdz3GpakZZnaeHJOOi742%2FCWpaAgu45spuNPjAMyBeFVGmDM3vD8LlixrHgTiaRmxHzWP3GJsWHYEse4mg2MoLuhszd4Ot1GqAZInXV5EORdJIYMwUBI%2B%2Fm3HCbZWP9jiTt9Ca4mG35JHV6SWOvfHM03ZOaHLFsVHa6cbtpfC8cQ8l9Pdia47u&X-Amz-Signature=a598b77e5922525927f4415b178935446fdf2e37af3b830c6b9d1ce7319dc170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=a9d43ea6a1e057aeed19a0bff208b92a3a0f2aef64c623d7e7bca4d7b4f22596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=5a748a8932b695f86c4161b824077c02715c87af87eb08fd21b870462fcf9338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=e0be243d5e618c6dcd38ce6993438eafc80c7b4f2e39419ad10ff90ec030f879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=9dacc9bc06753f87584840cb21305bccf97ee45ccd3cf349852089ecc79d3b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=470fb501ef8124df387c4d5e86a14069089b3239fbca4effa1ad20871bcda8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYA7THC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0kigdL1zcqvLZYFPBsnFIg4C3Poc32eAke26bXXrqtAiBLBY9tKqoKCDrqAp3uo9uwXKO1BeuT3ZE2tSut5nrDTiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnQd3ODPs1Pq4siLuKtwDg9nyuTSaHfyuGHtJIGZWvWmsxp3UOvU%2BejXR0WjFChugP4FBB5kiHHMZ5U%2BaC1XdlIg0m%2Fy8EylOvWEKWKIPkewV%2Bqdc8%2Bt9gnCFWpqfUZSGS3h0%2Bt6v2yeMXVZERE2mNuGndFhE7XHfZ5sGEU87K%2FJRGRHq%2FhLA8Ym0Mk0yjBvV9zw%2BAV%2BFxbA1QwJSN4%2BDQMIQvzcOUIfn4j7xtysmDvQRIM51sDbkle2Ua79kNvaKScufis7yFiyvyHkm6guiMHU2OJZTGc5RqkMhSuF8u%2BNiGK5m1%2B%2FK1xZj0OgWRu7R5swePuZkyS1FeDUPlNmme3bJOLgMOpWhwUVDLDCb2hLnnHY%2B4YxPmyYe0hb9bvwG2ngE4zd%2F2zNAd0us%2FFesgojKWdchNpNMC3vOcgKeU%2BuF5pdCo3AyYZesNmadSBagDwTsfrw9ZuCZy11X0b%2BH%2BfnkJTqnYzDJXzVQL%2BItcwWfc72Oc1Tiwa%2BD63lXX6HHvdV0knfgB%2F9gkrqkisRSqlbxxtHCTKuT%2BxOgtUV39PqVIWXPJVIRjh8Cbbh0fzJbwSdlIN3iKBLxw437jAzxjEwzic3UhlMxFZfgwyy7BplLht6bcMfmV9Qb9BaA1kAPuYwwCXC%2BEpmy%2FNAwlIvfxAY6pgHzzfP5d%2FfYrCuBQFzFU3O2C9XtUWMj4Y8Fx%2Bb6CmY77v%2FPYYaia1VV0IAkxy2pMAK1wjLupUfMHe%2BL1Sjf3tb2G1darrwwDHJDxV9JyqdSIFe2PZI%2Fo2AafjVwNtlLiEQlBKUZ0n5D0pq535Qbe9u58h4%2BxrtUvelzM%2FKG5dFy18Tm5GwK0JGIht3eU5SLpQ%2F9PgxFSfTsTJ2LMY8urr3i0vNgJ%2B2P&X-Amz-Signature=14043dc755ea9951ed58e2ea2f338aad64fdcee509157b2c5fb3ef83bd14f7e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
