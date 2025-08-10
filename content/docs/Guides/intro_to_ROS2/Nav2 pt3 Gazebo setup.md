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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=cf58da4c511fe89485084969db08ad087564877516b293d93299e799ea16326b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=3a3a46a7863a2186001e10823b85c237fe1d4dba6a118c3dd4c3425821bc5d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=04c51db13a54ee651efbacaa1cb2d9e94404851d87c44d74ac2022fa8e9506b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=05f52e6a8d301ac5f38678601d434cf3b873beea4dcb1e734095419cde407a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDCS754F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7e%2BdA2lE%2FnCb%2FOikBc76jP5VzfKtMf7CyjSLnPIHzbAiEAqYLc%2FWqmqiLQD%2FDLE6fmdHpwg%2BjXUPG5Xtd7KtdJVY8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHZ%2Bfytamr83vSb9CrcAzi8CpBEm5WPMN2BFh3x7OX3OYbmg%2FYVI1QQLf2oXKjGiDKmZU0UuP91dC31L3ULDOG9rdWrbWdG9ohaBWAbL3ymro6CDrozcKBljcBn8eRhm%2F2y%2Be1OO6cgqQIlo9mRDHeShhijlvh%2FVqxJGDgogmpk2WvNmaUDrF%2BAT4YvIGGfyiHktGXtYZqzU6CK3CFzPb4bCg5vHmvG8YzW%2Fo40ZlHeaFqCFDavj9yx5tIgkWiDO3g9%2F06D85Ej3uAk2Da02LdJCKj3MG9JUJPsKzeXCJkbKTy1wRhN6e5dNsl6baRQ7LYk07soUt6bW7Hf78PucnmfWI3erUsaVTcb0%2F8PGGvU4Y1GkAoGVeHb6qjjz454YioHXhMpyv86Q6PMTRXut8GpFS36bz6ZBWLCsuO9AA5dfzPVSyy3mzuNjzTflX5b2EHWRPqFVgmsyES%2Fj3swPdzHAz147Pron2lj%2FA%2BnH1N2czqMLYlxo%2F1pngXaXt%2FUBZXsJ4GQUBMdDD6Vs4kHioUoDqDdRztf7bAvMN2z1kuuiUjj%2FHYr7m610vqep90NzXXDLdZQakbvqPHs1kHFa5diD6wKT%2FmJT6%2BtHpifVvwfqw6Cx00ZRkpdbNNR8gc23KW%2BsEHIqKgesh8yMIqz38QGOqUB5%2B69EN4XtBn59sDuz6PGMk74zuZjLm6mJhl4GSI%2BhOB9Z8OCwJd8olhPcvU7C7Od1Shjj9tdo%2FC7aejvp%2FCmiWLax9XE%2BKfi8nvOGBdYAeat2tQxrzQq8FdepNOo%2BfmYuFYnDY71vXQDrvqsM99O68tRz8iW0%2BvTgHZ89WlkB7YW6fAoZgxPS1IW17P%2F%2BvwVpMIk2OZ1OukBnEMJqCN8rM%2FvMIDX&X-Amz-Signature=29f0b462e3fde3b1cb669edb24fb4a91653edf86c90e420acbe0f2ef41b34441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=93e631c864b67a569f73953f9be11b72b3fb1fbabc8488ab145c373486810466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=8238a601ef3880de400a78b703ecafa0fed85a36967245faa99a4106b13d38ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=6e1054bf7697a64f3720795c949f0138af7bffea9aeac331b8638bce3be5ff70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=0968eadc768408392147a51808b0f7829a10e9e25aac50e8daa665bdb879c986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=c516b38121c160657c15490ab4ddc81bd3797f612cbe3242b15e5bb299ccd2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZUG7FN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FJFHTuB%2BZqYPMrsIzuQyVj%2FoaWnFwrC9bjlj0%2Fe6ABAiEAt%2BmEH2D%2F0VzgRlEBuVDTrYiK62ymEqWMO%2Bv3bLlfcFUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPh1Tu%2BKy6RjrhbVSrcAxMtj1bOhxwCxkgBt6KyKVBy5W75c6ZVAeq9iOE%2BdAKhZnLARZvDhV2hE8fXrPPNtblfW6jymPENyJ6R52hEUt6BJa0ale3JB65oSHlKbyG75N8%2FsSD22esKGLmtoUY56JDyVQPy%2BXGo%2FlD4Im5QTWCUocV1ZH2zjBX3PI%2FKmEBtrYlzzJWiG0olHbMEnN9wkYa%2BgaE3sNcrLdiZw6la0iqFC44kiica7Pq3hK6acWpdH7u7EbXKeNFDO3JgbFA9kcbahY5ogLOkQ4DmoRUEgcLY1yn8LnFsNetG9GLTdNA5IrQEePz6JMuzcv2ZQuqWYkn34wNvKFptWUL6GGn%2B9qUNhit04P1rIhQv%2F8jEYW%2Br33mDYSOtivTgM%2BKiZGlbvSQhushGGQ3wfz0YQvN3%2BfUaUEs1tSrZ3whesG5A5R3GBH62dtkcbpRR5utZUxaSGv8X2v4xmMJpSmkUNh7p1ECNKizhF2PMt3r3AWq7nnxuLa7Nek8TUDZFs0n78PmJTvDTmJWTwwwJQ7oi9sCX388mbomPzDm4zdhsxmGSEJvHJFfd6IS0QWeC3QjTjXpY9VeyviXQrOjxYr0oUG1l1HN%2BvzWPc7h4Wx5iMltseICIyjWRw%2B8t8z0S6J27MKyy38QGOqUBsDbLOahdEWGxpE%2B%2FYrnhyShW8dsUP6WpuitCgZpg745a%2BWTzVty0VdYzUKWYPnPdSWMmuk68gD0H5DXHj0ZxWdF3pV3%2FyotNcZAKCw%2FIFqcHSBqMjDJ%2FNOgdbRDSilfZsXX9mZ6LocTYCroD5O0IgYrBWgaEhVzF%2FpBkYjVMyGlHYhXeK2cOBE0sG3%2BYKOfl7b06sCUPMKd8GsDEOV5wh4dgtTQD&X-Amz-Signature=46158c535d2bc1bb51db6c1871651c09f10b1002c95e9bae127739ded7af6ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
