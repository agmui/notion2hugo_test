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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=be3c10216fc7a303b4603737c7f426432be32bf5f0441c6e656baf3f0716f0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=678e46faa8309139e0d36a339789420f25f0d107eae0843944ca74293de1e39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=484a1d7a9fb14d2368c5c6fccbf1f1943d5722d7bcd3a353a0973823c330d264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=73ca52496055278ad62b00a2075e78c0ccde20f6b96d854e2992f0bef48c2162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTWEJKL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAPJNBiI0kskwAZl5sCD33Y9BBncZwWuRuU9Ps9PS7DIAiEA8hD%2BRhXf91eqoS3Z7RBJPZfI6N1YhIbI6pp7ZE7lAyoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCds%2F%2Fb9U2u74sEqSrcA58zDdjLbT6B4FhAzOm%2BYgpdypjo6DiZ5MKw6A3QS%2B6GrWKU1qLruq0Rsi1lC0KMsgjFTVTbGthTgBqAx5jePwgay9oVpzEAfK%2BUHZiACsZ5zq48fIACrg%2FhkOJJykWco%2FXn6AlW%2BbMRuKnnIlCd4lrC037KUrD%2F59JKB92MvT37pbTumWTAork7r1MXqN98eD8tPgH1KXVWWIsgxtmXcAwHG9u2qRNbUVSGn60EnY%2F7PnD9V8plwaCnCl%2BTlwSSnhMiwL1detxNXKtOVc%2B%2FP2P7Wv4jZR722sUMizaMZeBI4iijU8hemmaGu7TvokvwoGwdzGcCrXfrLammHmXFTyOz18FCxK%2By9FbBRCe70HzzwxJtKLHWdUN4bjE66MfoA2tMWwDAsfpEgWp5Pb4QtoYriwAQNm0DWI2cn2vXfiKAQEaByKCsMqKXAujZH0FhFeOlRs%2Bcr5hFvD%2BIAAt5K%2BmGV9IL6JmonLJ2gmQyzruLNQBc688iSA72V%2Fjs6SHOcbxJMmaz3QOvJG193qMmJZBOrq5mXCOZU1KNyoJKB4l77ELdfLOmotS9e%2F7BSrOnNL2%2BaEOIvB6QLaXo4q98hRVyJ6%2BvVpnvzCiNSiHYGEGL1iQgN48kKBF9RXx5MMbGgNMGOqUBSdn%2FOvbE7k6GQlo7c8m59Dzaawv3OA1lUCDmz%2B9H95enwY7Vwo4dNTLqOxC1OHzagMKxzEDSNEnFzQ9VNDCR8rX2Q49onGCJSsm5EXe2ZE2dPyjdlMwSuXf7IbDPvJuGaKjfHIaQeLDivkJr9DPvL%2FcZbB60wkkYkIrtIjUasC3hHfr%2F464MU3Wlc8L2RvrrK2cgxEVCz6xHse8SsjIJnKo%2B78AR&X-Amz-Signature=ed7fe437cac40a467c52d3d0a04273e0a343b623b2953b0cabe2d603442c416b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=8bf5c7eddb71456cc5b95342167b3af31bff506d85ead425b401933e2d6089ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=d6404e13fa1af39d19827f03f2a51936d2b7e21e9c1d1b615c124d5fa84238ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=06603e3cf8985e31c25c62c499a6fc937bcc52b9e7bdfdd5b50a8cfe7d492033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=67ac6367161c31c9ee65ecc0e037f62a660953a18c786bf6fb1585f8ab7594f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=62bca43a290e344a2c50a000e39a242e8e014ff52810e4c37a119a7a07187499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVVCJQI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDyx5Uu90GBdZ9%2FKs29q7vEKVeWmE6nLeTV8EFazf4IRAIhAPLfgVAW3zWO3P0o9pvOBPG%2FflHkx8c5z1tlLyrhi2ArKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLnx%2B3XEER9XsH%2FVYq3AMDK%2BLJhlC9RBQtsISKWuGVICSkgO8vXKRi%2BLCpNo%2FvdW8CcVNZShlC2Fch%2Bw2SIljqYrbVbTexT57j8QEOBp85HJOgn8hMaciN1PGkb%2B%2BeBx%2FiylX5AsoqQUqPE%2FpeJr%2BOKU%2BB73Pl6HHPEirZ84zu5o2vnKm8OqyZRnUWeQC3ZvLmgssoCTk6lSjhpwg1yoPkp7CPdvucL8HOvDzRbtFC9tKpAWlsr0iTOdz2fwImkj5L2aMt8JWh6d0IYwR%2FMIOQl5bvG5glrqzTUOpAOY9c18%2Bdrb5ITGJBhs04YVGv7%2Ft48YSgwsyC2BoVjuBcWPpqjTMmr9jcClKzs%2FB1abNEQsdud4B%2BgA8a1cNLLvK2HVG6j0%2BIYSceiaUJQhI8Ie1UixHx2fhyP%2BUtbs5rV7uB09y7MY35GjW72027Kzu5DtJ75IptBcHrAIh4PZW6OVmZ6%2FPzXbhnHFcAMUoIUrvrOdI342IABMASuln1aUBtV5Y45P8ohjFJitN3DEMnmgv9d%2F%2F2%2Bs%2FWvnNgPxlWsiEQMY2dps4CIGtE9kQLruILhMxTzTDP4VrxcGx%2BTceG8sZH4GdWNG3sv6%2B7pABkHvIGrVftJrTawj050It4qDWJ9kOEEKMZrcr2sEZW6TDpxoDTBjqkAZB2QPl9et532Vsv9OUJhMnNUqSAkueWlu0Ajgh7AvryhO%2BgMm%2FkUhiiogxtOs8HerV1KVX0kjg6SXJJwmTszPccSbOc82c0a5pu%2BybSYxbCaatRoRKsD6b%2FmttNXdwRqPyju0WA1gH8%2FWZ8dGc2R2iXmWaH6Bpbho2WTG3YuCC6Rs%2B69hA9QA7y%2BtXG55NPZl6%2FRrIX2rW2QgpCPhv1Aa8ZqRHb&X-Amz-Signature=0739b1a4fb0ac03cf233dd1862e73c2e3d77c664c19a432a68fdf4498d6afad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


