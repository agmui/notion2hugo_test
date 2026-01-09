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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=6ad663a3208755310d11d01eabf756c7bd90dfce57b265c4542f795b3598a8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=b07250beae2a237593ae9b1a958ebaa28aab535d5ac82bd382012c58a21b6c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=3bc48b112f88dc6f56d666019eb70b40f1a1297e523d44ede982db37a8241f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=97b47d689bf13d85b507b4ff383b49b858e19eb1cfe4bfda095a19dd98ec49eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667C5LCZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUrmKhsZiQXLSlMCkExIA1uwO43mt6tz00Au1HJrkVWAiA9uwYE6o7%2F4S8ikjeIJx4e5vkUp2SuMZJjFlQiezKZ3CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6xFdivFDzhsovgMPKtwDJcLKG0Vm96dgTXlOUBDbT5MX8K67%2FA%2FZgtXMBo46TNBxDll%2BzOYL1JNV%2FdZ0YrMVoI3hP%2BzWt2UNbUEpF7hoetzVqtFQ8b5UkA7CuTA9JzWnstKGj3e9U7b1tq24WZS8sAddbgeu1HnwxOGPyYYM61UYndQHjX7VzKC7MxD22xMEl00VaLYFzn7LH1ukkdLvl%2FJJLu2TcemtV6U3WN%2FPB1%2FFUKWTNg%2B02N%2FW%2FlYmIinTuvD3l3XlvLgq0hDMtEwSlrj2yDDWJeX1hUvEY2up%2F2xdXfdt%2Fy6Giqwv%2F3TCwvdPkkWSSNaOP%2Be4hOB9IDJey%2FVq3LJSkznMdG4uoC%2BI2JRc64xtFsf9d6VYx9Wqsxlb%2BhamNrzgHfvuVTg1az3ye7pKbnPrxsWmH3Boji%2FSBPhxKzvX0jfKMO%2FEpkXjnQsvPHd7tnqiePCW%2Fqw7FNV3ePz%2FbF8UH%2FG4lbrIaI9i%2FPdtdTI0K%2Fi%2FwIGdUIw9dsrjt4Z%2FeYNdT9OqjqOgECS30x1Ig%2BH20PAJk8MGq3ZpYHvqOZ51mf6NR3AQFcWcV%2FV806XXZCpNK1QvjJU6kh1ew%2BUhRmreE3Ozyt6EusCovmJ3YDhczROZ9BWzOftnMcAohn%2Fo1q19tPWUioYwlqSBywY6pgHQ7VKnZ0vN4WMCyhm1SzLgg5%2F%2FTsTYneOgM%2FSwnQDMI7CnjhhfyCUkim8MnHElSS63rLf%2FkFzvDc2BQtWmp6%2FSwRhEvBiC5YMaF0mUqv3U1c5fht1ArBbX2YECESZqVthSjXCBGY5ckXhoJgilm3wdgs1mFAJQuSOAw%2FW04FrVre%2BpQ073%2F%2FK9lsQBJmEb%2BxG26kVXYlqOT8GKF9niQK0%2FxbcH0jIN&X-Amz-Signature=13559848919d74294338234b45db8cd5b0f8276b93a4565ae3d081b8dc23dd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=1c72f0b9b27224b133112baa09b100b5f557ccfc20b649043c0233be08ce13ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=9d520162c10e790a186561053128a1330136036d6410d944d9eb25254ba1b0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=62fc8571a60ecc3fd0618c79178685770171527365a5734dc67b322bc49d31f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=8890bfd8ba94257d0ce6bbd8f4205abcd6b0861e6152f03d0f79eac242905193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=2da8c6b1de2b86534b72d8ce1d71b58a0838392e6b9eb5f5828c66aa59593c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7BG3A%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkLsgZOndIgk%2BDpAaaa8wentoViNO2UnUv9tgIlgQnPAiEAyoDGecohzGi6sA4rslh9wFG41aPc1mX2tXmoZbtq1t8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMvQVqgt%2FWWHUWtyrcA2lNXu7f4Bhr2L19Sn17WracvR9RWhGGUW9SnPlyZR9l69WdplLQS5G%2B9olrDVP7zVj2Wz4KhzptFZR%2BEx8Dh65WtZbVPPJ8xCPbmdMGBp%2BdtRylvMC%2BiHfz7WBYshMykgQM3HLyxS28m7LgTBES5rqnS8c9ZJjDaaB7SuYUSOVIZlDGSXbtUROKCVerrHJd3K7n8vFOxKvW%2B5Qbf6e0cN9RgYAxvxQw5mVjxu%2Ff%2BmdIb99h6FdEa5LOxOI90bjwvwnyU8qVLGanKfMgmoWZNJQblS7rzX70Ahyi0cCcjoGmCsaE1G1Sr2sfo65wsLhGWFrGcZje250KOohS3I7h5LEqvFhqVPIUzcTClGKU9MKVhSEfq%2BrWlN3k8EydSxPlhxadav8L0kRBAh57faIHPbjtzn4mbVO7y%2Fyz%2FUur1FQx1ragb8ueRaRahvIHu8AJK1yI5Iy4gSliZjfJt5yHmFkqFhZ8wtHC4qeEu5ANQ9TC0kqK0eQ7SQPGBkAbZzHiwwUZfA6LshkaY%2FEz%2B0BQEH4ctOfUWnRDpBMEdHxeGOl8QpyNuSTeSu16y%2B5ujF6VbmjbAumwHPI0LRfrGjU2%2FMtGzN8lzFBmz66sZ9QjSJmzaKvdhccz4st32eNmMOKkgcsGOqUB7kjlZe65kJBrmJjlIGCOLmM8m8ix%2Fr3%2FOukWg4NRw9db%2Fdo%2BU%2F%2BbMXyouEB%2FZQbDep4h%2BPWCZLf79ccFPrATp3li425zFwOfoX9IsNwYV%2F%2BHrwFyFSArw7mfo8IQlj4SjLP7oFO5XFESc4GmueZ7X2psHDdvMvZkBjK4ATpuPo7Won9QvLxLxmh6eD2Qxss7we1ZhcRnaTsLVAxdc86dkXM6zU0p&X-Amz-Signature=232f68e16ea5329ee4a2ff57501c17a87a7c92e1fec9dc66a9c900c27e1ba7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


