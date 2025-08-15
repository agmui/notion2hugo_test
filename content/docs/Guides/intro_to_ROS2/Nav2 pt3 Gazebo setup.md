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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=c19bbf1edffc99a19aaf2b0a87c194fae42df3528a07b3c071df4c6a40c2a220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=144be22c71280adee157a1df320832e8537bc520becef487b5c1e240246a0b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=655465683f12ac3099b1db42d2effad16a19a363afdd5afac1df60ff201f8a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=12fd919068f59e0fe5fa78adb6c9ea4066a685a8117421fceae1d4c35373c5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT27FTPS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDq6zfkyY9aY6AUV4ZhUzwzD1ZvWC9IVnplrOZXhoo6wAIgRaZXgmlQANPlP6ed3TwFzTEp8nJHNzt5cpzov2COwz4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO%2F8VIGYNomQRVvoayrcA8f3CgbJrQGGnJaZw5BkRtj%2B3%2ByXVVs3RA91B1vYSDKyXs63motA2VTOz21NpgVNlmrspLwJvDMb6fiAd%2BH2QbuAXpJ%2FgH5mzuq45FJ9LOZfvhOFwSYdsdv54M2mHBOaxkBy2Nud4NntOuntNNjZ6yHpU02GzwnjwSK7jhmGZjY5WUCgYfFsWcyhXmZon9WNTvMi8UG9wOKXlVwYb9Kwid2fnF%2BvWQ9MVIBJ6ObwKuHMAeBeaWb4A22gZ2wBSr8V6WstWHjwC45JE5fPxoD5p7Iep3eQz5PBDcYvT12C%2F2hNp3a1%2Fv3XJJlv9oVHcKX5jITJC5x%2Fir7ZiV56RFoH72xBtTvp%2BXArw2DO37sNrrFfZ94K4CpjWLa2HHNckEbcm%2BRkItvNCPw%2FL%2BL4W9%2Fq%2BYeBWbAopGeN5MyT0P3HlOpRc5lnpXYAYERYFPL9zArA8Iv%2F2BKKg3I3SVjQX6pWb%2FeoUzPXMkd73hC8iDjrBMzmlEzb%2BeGqRozEoHTlL67brbdITV43XTRPc8uaSQZcF8i4x3DZTSWmkpkFnoJPTQ9N5cjyylfzmnOZzxnyByYy%2BTlCMkA8fQmg7A%2FX3KHkT%2BCoiDGLUvZdYJm2WVVkYHnhuneWB7prrMCIfJ5AMKqj%2BsQGOqUBgz9%2FV11X7PC%2FtmrVo0qTD0oryXz8rCp2JLZi2suxnA5rYCYwKW6kQUvmASBV7SZ%2BfjvpC53ege7peUb8OWJcQqSdgbnAMlIDmY%2FfbtQvLTRwWSt0G8tgI4XSqS8wfoN%2Bj7ugaDYh3edyilDLyLgrtyQfuyXxPPrTHKgUJUeeseqNtkOv3nBiKOETrgC7D2mqkA4ulywSeBSCc7SSpykwgsxR5UbZ&X-Amz-Signature=33756c983caa4d47b563a942d2acb078ad7ba2e93ea5b4bed24aa7029f326cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=b06d9895bf6a8baa4ef44cd111adf4ca75336786e4214869e11fbca2e0556d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=d501ad3ec30e08ecf2e624d1ce2dee528d5f1884d5ec1e84cef9c575a71b42db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=a426800f6aa4825d35ed0eadbdadc57c359f901e18e033187367f16d4062cc64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=b8960ca427f92149df9004aaf735c98967a9bdb1fbdab94f7ad207d70980156e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=8809ba964aed4864b9b2c2dcdf6c18d523fc6cfda2e8d294903f6b10afabe6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMXCTN5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDQTfEHeB97qFctZkC4yrOEFdpEKduQqCHAoDAye6pV5AiALEBMCnNE5dj3slxugyIlIKrGdaxDwC1UmX%2BnJTYqppir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMOtHp8aCZEtG2jcm5KtwDiO2uQuxlEU4drzSeqIc1119GKZzVg54Bdy8hiWaWd61sew7d%2BxqehifV%2BsfrAO%2Fadv9KOXFq9vkCuq%2FuSXuOkdOm03A0UFzFqyJfrzn0qbNjpD4U1grqUEUJPCzrWWGLQ1veltTOncwX3ATrMy02VSOcDTStvS26TgVcK6fr%2FDUFURGObyORs83%2B0e3mqK97GrfdHQkUqslUHqNwYn2KOteCuDNGv4l56JaMWXYQIVP0qJ%2BzJenylSbaI3QqgRxPK6%2FO57sE34MjJOq2sdr1eFPstBQOSORWtZpYKBn2AQe3rj0Uzm8%2FM5Jb5PxuWqsCMnT2UgF%2B2VyN%2BOWtEWTmaAS9RwHZaafLKeOKFSuRUOxT49KCMRBe%2BkKJuY%2FiMyRhdy6mwktFm4cMVtaU8Jtu0qZM5NrXdJc7QQi54tyGY0G9hgRleOvqodXRdlzfBhW4KFtL9taxWAmy0dw%2BvxRYBWZzI5PyFZpZ4Ddwsb2pQVyKabJrvcMBMmkDlZSFF1NdOjDke%2BWpbQXyFjMyfdS1wXYnOipqcn061crF2K3pfybQ%2BDVnzuDopwF1wDq1FHJpi4AbmsZsH51mtpRPvH1i8J1Ef4GsX%2FBtdPXz5nKLTv%2F1BX6SW5NOht3zlv8wt6P6xAY6pgG4N9jIBO2964k0Q8i4VmFYenbomR6hm9FWOyid5R%2F058uAQaMJuGgdvRUgPLhvwE96hu1h%2B%2Fjt%2FJCd8qD4NWx4fyxEbNEU2E2eIfppcs3Qq43IRS5BsOFkM27FF80MUt6CJevz2VKhrN%2FtDci5QMV1aa9NNpdSQUrZKFIuMHptbxsXiE%2F2hvAE0NwnREHSRBkXMYpnkpXVaxmMsr%2Fd0FUnKpxGAR0l&X-Amz-Signature=ea2a1dfc8366c9facef00fd740a96674910c9f7014bd49f77c7f476185c75a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
