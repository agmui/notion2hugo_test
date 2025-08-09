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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=4d765cacab890d203f2a1aac7a2488a860127e29a8b76bb33886a741a7f09d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=81ec035b64fad277f53129c8a547291fd9ccb60e8834e235ee18e4c227147a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=29fbbfc90a7738afa5d5cce47d81bdb05dc7ab5fe6fa5797af5c80cd73d19f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=043150f02f05d938ac568c1f21fc8ddde46d1d3537e802d7945547e0f81c9922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZDTRPI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEcrQIFtzkg4Im0R0VxtbMlFbj1sOhqBFCCEN9BOAPG2AiEA6ognzy5InhAbA8uV7ZFPObqj9LP8NaNVg%2FOdZZ9NYx8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4rI3V6zN%2BIDTB1IyrcA8edjAnvKc1vhmizipbsX6XuIl6zk2y5uzJowOk4vSuOnFdnrmmW7xNn4jptIKKq3LX5h2Z2gqp%2FCbev9afqPI5LesgjeF3ci1ubtz6OiX6Q%2B1rgxwx3aO6%2F0316qwZnIduv%2BvvkuBM1TP9pdvdQ%2FbYFa%2B9q2o6l4elCK7y99j5AabvML4bCeqsCH%2FWlL52NUB4FMuN9HQ5sEgVidEqEHp5NNgTM7Wv8z1pkoZ%2FX6Ifl%2FrVRnRxpl2we8wZb2OFa3R%2B3T3azbUxbiPeVW7a72GqsDV6IFs%2Fiabop0%2FN0DzqZrUjSIQaJ%2Fdg1LaSGA%2BDlAVK%2Bwchx3lBRcpY242Co1inebATM8zi8UNQVSSvqadQTsekeQwnFSeFic2ojNGgZAbA1oOD8vM9aehLjCDPOad5lYxfqXgtHe7UqsM7zVVcrg534Jktuvkz7oebjbF6XVUl5v4MOmlF6LU6aJG1G%2FxiGT2rGkrLeclA59x9XY%2FCi%2FN742fkBzRUnyl%2F5fWjh%2Bd3a5BuxG2iYpmB7Kov03y%2BGW3q0DjWt3RW0GQ%2ByeajS%2FXzWfC10JdR2AkXCPLh1fd8leSNkBWQET7obISKjwF%2BdRcVoU3cTytMb6W61w%2Bd60VTF5VLnNSZHX08OMJf22sQGOqUBVD%2BHqO2ODA6nDzbkohr9umaSQWG7PPzffrv3TfLIS7A%2BhDEz1LYWRsUtnapwN0PDbUFoVzjprNgA3zFjc3flfwoaq2kMqOg5IwcT5r5fVUrS3AsGEDoZD%2F2%2Fie8CSTm36Iynl1BPpZNm06I1fNPJzFK6YGOqsivleaYlG8o4dwg0DDDJnqlYGVSXT5wfrQQDUqmdBN8g6x78OUcfLM0cgDfYAL7B&X-Amz-Signature=0e2fe9ebd3efb19de71118da8e642c1bed97639f831577510f5f50762967f140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=294fe05c1432de2372e38a8921a2de4d5576dd773d54357d5c770576d88529eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=6fa253ee7ab27c79b0ab8f5eb6a0a23a16a64db8c3ae5a631cd382b2b0bbb09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=759b36d7cd16a4408f157097dfd0ca4075549b7bb09428b817bd6838723b42ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=e4007de6d77b93682be5ae2f678cc3b5e4bcd5aadd0e6ee42f0b061825402dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=247807219266ecd94b1a925a75492fdc2a48642def191681de334e270a598f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YTUS7I%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICee8rnF52DrsSEO2lgncbzZfu1DG63K8xjr2fYRsQPkAiEArRy%2F0LQyEh7XNnAGORB6VNJUTBNzE08t3CgckeLJUBgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2B6fY1V42YeIopjCrcA7t05XD7l5VlfQREHrEjAz1J6ndKIfl7h8dFR%2Bc8OV6tP0aGBeZlae942v37em6AUj%2BoHWc9VVMr%2BqBHHUG4dh7FLl6KqEBPp00qHbgdroIL56sxujoYphDWXWGNCDV2elExucL6ezF9Mm0jbhU1KQglXmTyjkV0DZpFHxb9igTSHUl3TePMtHQFSo%2BCSWJWS4BpE5I0G%2FIghFBTX7WqTNBPUPUxYfmB%2F6GCVip5P4eXMTd2m52LRVXIBcDO5nQ5mMj%2F8HUOV9VgXyFqaMQ6X0NqZzNmaeL768vE9B0QlEONjdXgIthLvK5eATrz32JYjra2%2BrHemZEzfUeI0l%2FHKRPuo6Lhj891io3KdrBsCjHpvFWJDKJSAijHhv54Z5UnquHuN747sKuEGhu%2BsxI4E3Fg7URZ8Mn%2B%2FeRv2bmbbLM92n6BLeXGD4CQH%2FMqifncegh298HvmKKdUnDW6H0WEogPTjlPF26dYkj5QqzLzZ8YbE%2FtScGb0HJkKZYKzemlErU%2By8PT1CAwiT3%2FWRX87wOkE3XXaz7GQzLo3T%2BQMKCizfHe%2FxN70bqrXAQoVegCDgei%2F9FJFcphYXFTuNW2ER%2FXA9Le%2FI4Tt%2Bu6uDTGEzelZkmMrs%2FkXAgW%2Fv%2FHMPn12sQGOqUBgPhuuxZFwgZosvNqpRq%2B27nqXHzzlS5Kjoxtj%2Bmc9o9qcfesE%2BLDAnjR5vzJuVDpnWKyTVhgD8qXT7LzjMqiWtuqVhGg%2Fc2COwwyLdcucu%2Fbf8P6xMCGJNotLCFTLjyGqAs2rBb%2Fld30t%2F7uAcqo%2BBhgipPHQGf43Yz6mknXHHAqt591UJUBcqsyLABMvmmB8hY2DfIL8jb2AwdDhbIHeAJECpfU&X-Amz-Signature=f793eca77a92d8ce9ba93abf9eb2148b64fd200e23edef65cd8d3045bb639bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
