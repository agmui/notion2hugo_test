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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=0923a8f54b11851e39ba41318cacc49a2aa621de6fe99ac9fafee5e142802532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=d2a773a8d7fdf2a89a53bcc2e8959a8a7aea63a504cad9241264b7d94bf02efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=2566354a211c084ba9fd7f1d487625c97737754ec764985433d872fb34f87fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=d755dddedee27513f1f560c5b4a4ab0eb579549156f3d8edead8db999cd66a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDB75H5K%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDaTADi%2BrlwDAbSZSiZ8bzrQrBsogzxYjmQfKm2BcxzsAIhANmwO6KwJUXgdjEu4IRoRRuIOEVd7gHehQVYU%2FwTDPA1KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws8moRVuKuRQOxfvYq3ANavYLqOtaDRc3ZZzr8t6c8PzJHzoLv2fygRQkgCmEd6KgUW1fakfphhMk8V46RNcH8pw1Z66UDVA%2BvNAdx%2BiaGg0zQeFPnR5Ws0GD95XDt4saujXqA5rsCfy58ENvB4vfK0%2FyvjG0q0K2xIehT0aKQFRtJnSf7B9BjsDPPpZ1PPPYUguMHQ%2FIBB3ITVL4d1dArju6xtuUuKw6Xrqtt7VM408o8NKPXYwnfdXOLy%2FIZIB%2FXt2Bw67qt0zqf6B%2BaJ%2FbznGMQnu%2Bwa8n3divr0Ro1KT9g8WmuVFAIgGJ4%2Btlu9PGO7NTthZjsIgW2LdnSNYeU1TsLrsDE92GP3C0VmRKdCrqdrb6OxH9CHpKDKcxoLj%2FXsz5ph6vbK1C2nBvbxlcDPyKWj0nBVbQcRcaY2ySn8jeDxycKFeTMCxmBot0q20Y0HsejJO1kMwJG%2BgKJj417ngD7dyjjrz34182HTLIkvgNLntwjX0PWdBe4rMQZFGP8KWAHJK73Y5CY20Z62OUfsXHEnBQ8Mf%2B1%2BbVCaC6W%2B%2BaHj4%2FhAzw37w8H%2Frno5SMzeU2dUHhedH%2FxXj3RjmDRuicwONDPJGJYF7ucdWdo7wCHwHP67zeNefDp1GUG9YSM32WCoA3ul3RCNjCc%2BaHKBjqkAfoVsqEYoPJNwN6%2BXebaZWUic6Fovz3TfARIN4N4tpcjvoa5WTI7wNl9e%2BxHCh9OYGVJDOvSqPGBelmknhuZCZvgwIziPb6Ewt3bcWA8bG4TodheL9xWKvOkUEC2l8QOBpaKnwjHTu9uUE%2FfjM339m%2Bqq3FPDNHM2Rhz3SREA4n6BwjX3VF6Cag6Ii%2FTHvJGcogF%2FEmtb9FeBg6TgFGdLi1phwN9&X-Amz-Signature=efc271646676e36810981316ee387abcc3943d5ff636549aa8ea0dc003412aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=5cec1586de0014271fb2001c6362ace5ba62fcc74c09972b803ca76c740821ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=33f113f82a380d196095b493bc4f57b2e9cd25cfdb9c89bc650230a7b40dd26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=56007f73fbfbedfa3a1beb76f8414073e1f8316b55678602d5e36559bbd18427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=1f2c9760b116a2cca7680cba7b59c6c0ed3ad3c038ac211a300f977a86598e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=5be876c511f6b38e28b99185bd1b098c21d07c964188ccb9017b64cfc26c1356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD773Y75%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVGhplfvrzPWkBbpXS1hBOe2e7Q3Mntekfz8Mu7mpIOAIhAKz5riQLAvTB7vkGW4S%2BcB6VyUkRjh4R9wJfQigdCRF3KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP3mfFel9ZMbKj4Mkq3AP68ePXDhP3X5jlXnixOrUF1VviIzd4tyNymoQUbdXnY11lSGZNpvFs1SCWnQ2UUhPl24w4nR95v%2F8p1R4tCveauWcPJHaNibb0DeEwaEaiKi8GOlHGThIuF%2FhbN3zVI%2Feu135%2Fl1KQ23BhEYuzIXyZdPDEiWwojZ7IzJM0KdLqHT%2Fpx3L9zmyvFPmlPBEJwRyCf1nzstT0r33IVrh%2BdOSfdvNZmto3u4DEyIowYyVDKCiN4ScHn5SINnc6UN7zadYwTQfFKj9tW7DqV4E6W%2F1i2O50cVLj%2BteOHr67IhxQiY77TWnRAiQds0LiCKCYPI57F7JR614%2BgvHeIZJITsERrY%2FWKDvBEc4GS1%2FuL4Xriv8AJqQhx%2FIDjGrp0eQZtOSENjYwFyP7cgoHZVk0nJT2WXjUw7mi%2FZuSeBMVQwqNgx%2BM5CfMs8bp7uDmIwqYo9As4GZ8Canz5mK3%2BITHwvf3T8iZas1GftTX%2BLWCCsBh%2Bvn8wogbnv25lquijPC9PAs86ws02GMRE2jfyDjZHIxG2%2Bk7Mz7XsT%2B7bIKFA3f7KK5w%2BM0K%2BOTW%2Bt%2F%2FCy5%2FagVyUSbFJghIahjyHnj7LghZRz2AKE2lYORpgD3sm3bceIvD9pbO3tZ8Jy09MDDj%2BaHKBjqkAfqKCUFRu6Q2FxoChLb%2F3ud8Epug14VewjYqqnuKt6%2Fu0TlrdsJ5J2NCXd2RRXkVsBLz1etFM3lsjUFv5quUPk2nNZHDE0boZyAxwSRVsTcovylnvwVfWyYwyQ6XZvs1MZHMKudeCLztrueXvjbBeG4NUPMRY89zV1QtejS%2BMvhGCFMF10WLImKPFUmXrsWWJdZQkOFqgi7GEhZMbWrlOe7FewZd&X-Amz-Signature=8425164e9cac35721aa35fbe98c7f5e1ff60c15a9c9ded7d811730b6cacaa32a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


