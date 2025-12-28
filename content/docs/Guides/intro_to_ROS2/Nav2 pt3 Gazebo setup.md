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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=580a941f5c8130193faca0f4aff2eb9347e499bf1755610c789c293515279474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=f6714b2577fa10b43ec80256d46b6a8005e59ed74b85cb0562f3e8227ec5b69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=6206965ea7168bc81cf82a0413ae29a4978e0b6e2d68b3fbe156d02961170e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=58c772e2804a57dc96b10e90fbbe07361b346e1849ac6a351ef08c6f44844d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUGICA3%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAiEg9JcnQarAEVQHc5U23i9dp61ar8Ih16HwV%2FULJBAiBp87FR2k9GnJJ3qHNlYMru2eegeeNM7GXEg4oiTyFFzyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMHse%2F2MKv22xqJTI8KtwDLunjCQz5aYW4Aoh0zjad1GAxquMW79xJ3RPPOgOitwWVWSBkphraYuZst3LgvY0AJnX%2BeLSHOu%2FG77%2F7ORq3LswI1k33w5Zax0yRM0XS%2FYb0isDNF6nCX95XfVCkDpCBoyoQfktSSZA43nXhfRddlR8hgSXBPeHzbAHVdOsXikSYtL36nlSpF1TE7iwHen5MmAKw2RB9dG8aG9Azb%2FdASIq3XvRzJrUwA7F48G2emoHlsZeV4cAlvAxeugTGkqmkh69hk3%2BoyExCdkb%2BAFAdJH2ennDIGT3DKtof%2Fj9PyCjGjmU6eW18%2FaTBvIiBpydctCQafSskXRQmgIT%2FBDZ4tGYFhHdr27kWwnACG6qFzcg7KJVJbuoVoKVm%2B1%2BpTS33b0TzDj5rY0vLDVSXHBqHgczdWyQifS2JLDxeUpBMrhvh%2FqzBZzf8dnqh584ww%2BEBW0VMoF3mJeew3PHHcCDSDAIRwGW92ylWDqFLHGVCXgqo4JkYmWJcSktQgvI%2FC%2BeLTAIaNcXBkNqxfhOsRfcZn12UMsfvL2ETM0GW1hRLdtIKguoZQxmNFNfJEClx7xT944qvbZvQ9BVUw5LjaR78ggZn5oci1yrVSSiRUEeDiY652Iu3BDknUABm2Fkw6ePBygY6pgEQZKIhKo902bKcZFLFaXEUdzZoLlV6hn%2Bj9ZapuAO14nl2bYCo%2FVdrkhANKlmmFuoyTF%2Fw%2B5J8B3YJKR7AIXpvZ%2FHJS2aZeQfvTTVHNTF%2B2UJUi3Yp9q6CHymNJMfgqvyeW71vXLwWMnK6ASPCZG4Wj4QSvtBltmcJkOkjYQvqjoVm0ofyIzfN4BaFpXYXQexh10D0rEgpBjHeGtxt5%2FrWeYz9qhiT&X-Amz-Signature=e2e7da5ccc945d53613970a2317e983ee2e37a363234986147109ee99e92f85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=0770fcb9a3ecceeb1c7684818ffa42a41d60f155d472ad8bca3371c26636868f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=b2d9b8eede8a3e36df64ab429b218aa3930ef0b6bbaa4d85e815c72bca84252f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=3b0174a5f5b244de632f7da61e011acceeb1dba10acad279bacc9813a845e869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=c2a2206a68e90744609f7d328f6eeab575d3915ded7c3e5c2de115d01e0332f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=b88a8ca7fd017198bb6bc405cdc6502d1dcfb36a82b5d2841edf2dadef12caf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22S3EFP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCs4Su%2Bka%2FGllBcwozjkenzwu%2B199wMjd%2BjO2qUIi7mAiAGmHWjzLcW82bldQN9y1%2BANjnWpBr1SRF%2Bn146ZP75Vyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMi6HLW1teHTV2XoSBKtwDATKNT0DN9my3ZEKKZ61duGhZzK2m80fksFezWmx8WHRZbiw%2FLDvsv%2FR%2Bxc4na03RMlqQ50hnZHlPuB%2BJyvdF2BhUi2OLru8Yvw3mAiNQ%2FR5el4hUmRmdbjWt8HYBc3IQyuW5Uwy3y7L7a4HdEF32va%2FneTCF%2F8Nu%2F5blcQ9roYq4lwL5z2YIT2U8uuOR%2FSivRb24iWE6LXB%2FOVfCnLg1HTTu84fvML%2BaRFXP0kRw3peps1r8q0fc%2FtL4xQvZ6t2o7Qc0V%2FbM1Qb8dlNHzgAIsnb%2FXhVTDOB6dHe2xsYSQ7%2Ftd5q%2F%2BTOpYNkzdkzwZTmtUcyaptMvHk16Kmx6icMuzwuOAdwQnbAWYRWqftZCX1IDMgtlYVE5HHSWD4Vk4u4V2lnXJ%2BSbyWqRu8%2FzNCdVeLnziLT2FBd7VgCq4gwaMgsFBqt1T7SRe8ePltCHJ5IYu38ZwsuWk%2BOijfltiOuqciGm6ukuKE1IoKizFYoFsLlMiAzz0Sp%2B2XkCFwivR2qNsANgzl32VTVXBn7tN0PnYZrSeYxc3dMTQndRvGBtrhuESX6CbLrVtaCCa3p3fPbHGLxIymgOjQbXcgdcrqiLm7gkP3b7j53eUHpX49BYICYoR%2B7SyPhquQ79z5ww6ePBygY6pgEtUGwFywbr271dhO31LYMAvQR0gzbolQuaP9sg168o5pi3KgQFPUH8Q7rWzb0%2FA%2BlOR0aul6HkJKMr0jMChT2g%2BVeznrluv2GGNkHjFTwHXsRDhccgYFYd3xjqQHcoXhTtHhAZgqT%2B3Nvs1LPVYDkVXsFdeFct8D9wePiLnVc1PNlvuSo3CMJupu7QvfYx5uYNQUlp2aOjUON3YFuOmPJ%2Bn%2BSJjsrm&X-Amz-Signature=9a2c9828f50dab4c86bb32e0eeac178d632a1861fffdf84c020fc6c2f3fceaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


