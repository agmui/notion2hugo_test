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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=2b51a85416ee77d0d862f36d576f99d6cf31a05036bb849b58e9b46ffd0804d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=b807a38c8c707e28e4f78c4032b93daec93ad59be0fcbdd8741a236b2862de20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=57ec44501b37ed6092da67920dd1b5e0cf320316c1a5d9a8d632fedc91aad2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=f7370b96db442175555173aa1f9221eebd9c4a4aa31441dd7e2fbc7c4a5c65eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQ7IYBW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCBXAQ5Hu8Zw27ylHARqmO6JZa7IM5QxEdDSG7%2BKulbbwIhAMfFp%2FDZi9EBnfr5V7WgERiuzKEnrwXC2JCpbLD0Pdc5KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmJ9fQb2hRew0yusgq3AM2K0xvcjX65ztOWUcIzgvDpr8jmhW2bXvVA1yFtoR1nODMrNKrQQnLklmcLFva6DTL7QF1%2FGkU9nJ%2F8mI1v%2FEDFn4v%2F%2Fv7PBQDULkwEz2YVGGItWFkxptg7l9AmerrHd3zo9kgRBUJ0iYNNJeA8wB%2BA5lS6JO3XnuWGdqJKffjlDmu8jTAB6AhjlDDGyxS%2BWDhvhJTf3AdazM8Hno0riWMbTqFCFM0GsC2Z1%2Fgbhsfz7TFPpWtn8yxdFkCpgn3DVRU2nHbyd4JTPxGmSHfEY5vXJ%2B%2B9CbfNmViVoJTxO3S1xVsd9qYAs%2FYpKLa%2F43N5evQRijCtQXjA7QMA19NMPtktvkJZlCDoYAmfTY9osK%2Ba%2F2AcaYl3LhYFMikkTdVvVlbRcNyLZTZ0JSlHj1NSHJZwt0097W5iCTKjeN6OCRMSvDDnGjv4RfWwLViV3Gd9yRqcY5TjTMrh6lI1UULG1pC5e6zvt7Et%2BIyEv%2FP09pBYue5V3ze%2BEjrRC9xqLswvjBhbYQqhU6n7oy5i7BLjA9BDBpDHuutIZYYHyg30M25ZXVKXKhltRMqLjm7wTWFkV21xe0kWgCw44vcJqvDghVmR5IpshdX3uSh1bJB0fZNaYLVacbEfsJ0miIwOjD9xNvEBjqkATxT1E2pofkLw8TCL2g5RD7OeSw2V%2Ff%2BfMzPWN6Xm5DCoASCMrsUMaKrbwgH%2FxJyUJJnt2xBoT%2BL%2BSfB0ux6tij95j90pBoqh8GvsK0cGf49vGu2Q76hNZCxnqDF7rnVqeQFMWL2zTGUODhzN%2F5%2FFEYqyxI2iVkiUUMp81ZQGY2CI0gyJOMjyG3ctWNTAd8CD%2FXgana7IZL8haEY6CqU7d8hGbWz&X-Amz-Signature=4d8e5713e5d1715ef416935cf3b0359378f12adeffadf53361f77894222516da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=59cc12bc60d711558bc4bced7cf4b0db92499952faa47cac3723590b6c996b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=11a18fc03fc18d7fdbf3a07600ba629dce64bc9b66cc577238fc9f7468dfccb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=fcd80a92836dff6e699ca4a30ece0a536f20c5e5e116620e29e695ad9062d8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=aa67db60ce7f58e5cbc8c1e3493171e95151ea228a281a03bca499ae41bd857e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=3162014fe46c551ec5390461fc3ff86724336493cee336cc8c63eb133da5761d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H76SIW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDlUQqryK%2BPRbAhJUI%2FhgCn9SJ9%2BLwEpseLX%2F5nbdjIAwIhAKMYguRdRS7tVmcHdNsDms2aH7fKYu4M%2F5fmjgp9s%2BbJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy67Yuhe7%2BKX0ubtRUq3AOVSjgz1KvLkSNqv8xMRsbaizYtL7KpAMQyb%2BxdH7t3Am6BR7%2FSyoSRYNmOv1prb9YuLgddD4mDzAvBVx15lXkc2EIbTuZIay8THMMw0qaDlI5O2sWjFNs%2Brn1nexIgpQCiI%2FIa8tNmpYlmyRTmvax9pMs6RO45D50G%2FJViuiM2ehYIiH8%2FNRCFLTZIv2LGxJP3XK1ZqWsah%2FvZBTN4hRq%2B2L3zTkUwJFtE5AgU14LuHbO53%2FlIhno89xqDCsAOfq9RVKycNz7hWpkdBB1yIY1ITGZE1QXnCX9ehqTX1Pp7jNUxiGGWvwNYDk7ykcffJtERjjaD34vjIhAnYKDb%2FnhRqCzMRtt3YnAHYEKaSjhrUsB0vB2%2BlTWLgPqurX%2F92wIabEk98KCev%2FEgoRFsX%2BcFZeiSKndXtS794Gq6t6emoH5py2uXgBcHPA%2FRairXxfG2gaxFMcgZpHtDS%2FB5DkPdxuFOBoHQsET8yHrunCPT35ytHh3%2BbmhdBN4lgdrvchGr4wcY7JRxnXkdCm8aeCguigFau6HYsuEQvJgw9C4OQajj7l8soI3LBvPKnblB1CNmRq951kQMp1JxeQKzrFpbDpmeq92JvHJLyxkVD4anj5LuWZuQwrggFDQLljCUxdvEBjqkAdVRce9978AjY0NVuFGCs0em85MXvXLp%2BIDOPbIqW5CLzCrrQUlKXpJgs%2B7v9hGrZBMfMPr6Dpk9qsjBsdxJ1KC8%2BLqCS4Kj%2FbKFSEGhM7qyV9NY6R8fhu2KREHhN5%2FOTNICP3D0cf5DxMUqNvoNkAWEKIOa7ZnkmuOKXWpoHMINAljtOba9Q9VArm00lxacxD8dZKs0E7r%2ByCLWfu8N23%2BrrWMm&X-Amz-Signature=c0b0636898b847106c2a5dfb53f5ca5e83a9893212b5253028e4becc2ccb6ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
