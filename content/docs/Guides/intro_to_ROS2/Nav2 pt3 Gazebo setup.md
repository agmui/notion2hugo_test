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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=a17d1e6e2ce186e37f5a694fbcd9ac0d35cca3a0065c00938bba21ed58c8982f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=01aa3af890cb04a1d109c1620114a7e7038e4ebc29c1da4b75cb0b6d2e47936d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=729e19824a2a0d169e91cb3ce7600d9f0eb627af36215ee815c4e1fac445ba85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=d90f8e9fa30fa17a28bae0525881fe24727698cfa02730e30f42819fc55a7ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356MC2GE%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2XT0%2BalZX1g%2BzAuIzDGy6ZuWuvXMwXAtxVe1UenEBtAiEAo9bRcQwkQHNRg4jayL4d8LteceOqZEFRDJNk1izeufAqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf9PdSSYYFhfvc7PCrcA8sXnSWK0BDM9ZuPxUGgYA0Tq6%2BGCLjILYrb0CN25fYoe4AZDEg%2B3MlgWovebX6nLgJGzRU5UZ%2FMskhI0RTLsxs2g7avvxICfCioxcZPooIP3MXr8ZDDYno3XZwhKTkF51OSM7itB41uz5N5GiVfQ6Omru8gyPSN%2BC%2FJTSsafEK21%2BCvBasQuXPF%2BbefkuUeqb76rhzrGo6ddEbp8FhN0DqFtVr%2F%2FFMgX0WYr%2FfdPeznuov7Jkx10eN0kxK23bI51dB6XWoHM9%2FQ2A4EDBr%2Fs8dXlAh0W%2Bz8Ii1J5K3l%2FLL%2BhkRG53qjgusHOUwaIpt1qMCsAQy9Uda%2BsRcJOFPqS7vj3tc604GXkixk22JXqj%2Bv87fq2aA5Bwz1i250rvOot0WB1pjFmUEoN0LYx%2FXINN%2FITCWyBmAz5DO822prvRHprweFSJjNNHBCsmldmhj9y0ceK5zKjTgQnWUNH1K886mDVNwniqKz80xdIMUY9e6cHUSnZAbmKacuYNtLWfNgdDT0Vmo0UvDcJudrcFewA9cE3aa0hWf3r5GRsTIZC8zhT1rQn8sxCY%2FvclQQA1rLQdcV4qv7BVG5GVP0lZQ%2B9czRf%2FvKg37QpXbNdQHBZ%2F5GmqfuhyjOrCBrMy1nMJDJ4skGOqUBhVARlUCqoemVGmmlxiF2AwqVvLQsp522eOJoNXn06Iv0rClRHjJroE8jHisOuFV6SonSLmHmrOnOZWRmSNVAhLH167RqwSOc3y7M3JJiP9AYrROLuhmHy0ezqmRRKmUy%2FxH%2BCzoqXT6%2B6J6RxKKAlezGii3MgO%2FLShAtjsi0v0nTep9FWAR%2FkCKfhoDFLUkaMQ71vvnYqOlTzLU%2FbSDCsnLuf%2FYU&X-Amz-Signature=77d26e35624b342c385928f3af831a7b6624d89e7dedd8755d036dfcfb4f9316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=11310b6f6b75c16787340d5e1c5ffec1595f84f150b4055b5a75736d958e645b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=6e98e2bac8bae2edae346106dd96ecb11b32694118dc44c88fb2c229bd883598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=605f0954980a1d6c750f610a4608e1fe012b2bb10dbd0e0e321bdcf5ff47d986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=60054fae025fcf87b5c219aa5ae69e519ca15b52b280dcddf876e9031a421fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=7d3d9f015a6fa2aa174797a75667c6a0b9d1d3ef4f477c97d8315091ded93f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V6VYQP%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnmAJt7kfcrhRIHZNgWJ6Zd5N7nKm6wzP5vZSGmG2cSAIgcM8MrgdjhVdzrlrfyZpSmXBER6UvGudBjpCAGMmuWrUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbBvpqBuT4iHkaTICrcA881WNinqDi54%2Bng8lbSZAersF0gW8QsEr7Cb%2B%2Bb3UhyxWn9PkOWZEHywpR%2F3sby48OuPl6BC%2FXfsk%2F0%2FKevGjcTTJcjLNsw8xxb2ykHYSyZgZJXlYPcqv12TCTnJuBd77dfVmpwAc1hpBsOBSQBx65FIZlIi5NicNqm8RCIoGAUS%2BXPXsBO3%2FCKXWpevGtVHhRe%2F5jWV0FcomdZAY8PQHRt1ylpnOuws32f%2BpupT3TxEdcmo8FUjx2FzXP4j4FrxjM3%2ByC%2BZ2q8N7ssf9aVrgAeS9s%2F0Pgv%2BsAHiiU7lH6HAdSwOjER33l%2FHRYfJd5cO2xDB9JELI9ObNq9iuql409qbqzXnmzhKfxE409W6Nhq43RowcpOCNAmsFSP99Rfn5mLn%2FR%2FuP06cOKyNQ%2FcjzP1pYKsttSfM%2BJw1ZsDI7xEHHtSkZgf5u2yQVRM9B80Mmz6eJ7lkgAAw6O%2FqJx%2Bmspt%2BHvY%2Fl%2B3%2Fy9HRtkHoWx0UhU77U9ksoZe3RMQDvHarYQ8FcMVvbHo5ij2l3HcScyOwdmrpWplO9HDbWJ6bdhbht1xpx0L0sSZ3qKqjjRXCVgP%2BAXaWvbpTtC%2FrghEmpMlLWUTEc7OdMNK3RvNqeAVBxCaJtSsVWE34dXXMKDD4skGOqUBuMF0Ft4%2BBVyoNUoyzY4rsvgWEqGHL79X9TfSKUV6PklCyagHloGgyHFoXNJY21SFCPCMI0Tb24OwZ8ahTBnU%2FlEurjqt4CCxu6XZ4E0AySiKI9AsQQJ0cYsTc2tcWWDPZ1KDyQ3L7nIxbbEsL51zjW%2B1tctHPxZ%2FeAOBT2xpcQOEgHLBLiFi4b4O8tsLXhsmKU10SyMvfnV2iHALYGvxFbL6ovg1&X-Amz-Signature=9899d79087b3f6921a6e40e79752f7945799a45ce95779899d1bddc43459bad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


