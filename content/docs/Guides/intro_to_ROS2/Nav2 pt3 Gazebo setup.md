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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=19ee694791346c24cd793d346164dccec0efbe37a5ac697f0d84383fc9c8b9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=f11cd075aa7df7e82c48429dc3c3ad133ffeba4eaa2a1efebe68071aecc107a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=999e5d5ac9d11ec3f074cf2c79b930a99612437ec407fb20e5d4118169b7d325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=a1bcc06180b4120a05ce09536b7002ccc1580ce385d314e1ee252164d2aff42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2MYDEOE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC1HgSVIJmjXq9fVcL4GIO9AFbHlL6DH38zuGyHaoNkvgIgZy%2Fd%2BvlyhQbXTtdszD2oHqd5TIUoTBfGuXuvljv3GToq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPzkJOr%2BgYZzDx%2F3YCrcA3ORbRy3qFse1cvEHkumTTiWTK6QjEt2DAH5e6RFwmnv1MgIcCMldx6hLlZvj6fehSayUJuVcweGRoSO7itHgdnHfNpOpCqGxOWL4i4yDzvvTL3LqPJxa1OMckcSkgYODcRWjntencFNOIVpMPSNpqI5lKDEinb4%2B%2Fu2GNqhvnKeVDDK6pvyoxOhKPsVfG0StHFWf%2BQCc1TXy4pL%2BI7pJpAzrynGmUTdDyz7c5AQn4kuy1j36vrVRHBiAqx6%2FmGhgeoim8LDF5SFaJuaSa7qRPQqvwFxFNOjVUrezCk%2FNro5bFXJahUpe6rR%2BfCLu4q8XdFT6ocF8SOu5I9k4rO9cbvO02535BHb7S9r9BhuUzpw8B0vctugaWQEmLFc1yQAxJowL5yv8%2BmDvEXgeYF4JQaQ7OqUw5oqZ1fzF%2FyjruZqPtMgmsCCNkAkhzcSPE0WR4gvDRHWCCllh8WNGGDW4bG%2BIaFtgfPYXm4lkPiSVfJkBAoZYiJCRI3MDoA9mHpDwB%2Bw51DWP0MDSB95l41nj%2F2OHrx5CSDGRRCfhr6RAoi0OZ0hwu3s0FMccuymnZUjoLij9sydi28ht24VfjpuqpTIUz9DtxlocZLl%2BQ5EI2h3nddjiQG7730mNp9IMJ%2B0xsQGOqUBavfxjLwFcI6joBKC6W%2B06jnzB8t4CGWk7BMeCOChWjIuIIusgvqzR8C0A1tWgQEXXW0rkxg20OKq6Z5ZAysLuT9N39a50wSA9Z68r6jfxohuxdl21T1bX8jIziqQmxg6%2FCID7HMd%2Bn8Obt20Lb87GF77ts7Vcq2197NgXuBjxiQj4g5kI%2FAUe5cO6sksM6INe8GW6HtE3arKuFboZCyt4j1h56yU&X-Amz-Signature=59070a5b6e04d699751eec9107f9a43457c73177f7d8e7c9815616e54eafea07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=0b321b8d82a3e270d7c2699352be597d4f558201a91977a85ee40a0cf08dfcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=f006748419e47df716d0d5bbf337cfa49287b3cae92cda902f513def5b549ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=7166a882796d14a34e6714cef77473bbfdacacd8380c546414bcda30b032cd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=528c8c628cdb3445febb6fed8e724bf62e7626e6dd7f15226032afc881911d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=8e22225f61646369876889def8817a3a591f4c75da0dc80ef924eda9388b6353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBW63ZH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFUGgklhTuOwZ4OnI8PQXX5GR5uTCisWs2OLJ2W2Z5vLAiAct3tmvA7WWAIYjvFYukEFygIuqi5tZcl3BPgS2w8s6yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQASYy0md595dQFOtKtwDdXoIPiAxYwoBNidzg6x4Czt4FMmOLnJ60kQsttdQrL4jIv7cSL%2FsvN3FfyJEjqseDLGwTN3UEg3ToBiq8sCg6wqHujqP2unn2jQL3yxWFrL2qRrsSjVFhiFlu%2BEfXA6hj0WV9VgEdmPK%2BpbRfhj%2B4cFq%2FmDMzwqyd4vNgL2VvqgByZjZjmzZKUr1lG1%2BNturDMIv58rJW1Fr6Bv8IOw5Mc%2Bnf4DXnsdGDrjuIn6YUTdnLy35d%2Bej4VgVZqiyAXQxcIn8OSrxNw0QWAYGjLdoMXsXmyPmsGJkPHGBqI%2BtvUeumZrJKcgEaATeg%2FxtnQOrOycWW7kKu8f%2FwqQtd9BrMagnkDKlpZqMyosfxPSc5jqJ4S1KDWiTTmpmdP5wyrOPB3kR9Xnfyp1LuXZIuKhtNkIFKp3qpsXfme2wjCQIUQFP8Z5GbRxc%2BpDyWg7QtE7VsYV5nL99ZQqtyvAzy1vo%2B7eq83SyzaeueJIaqLu0NG8yoxPwOZxeD3V7pyiLvmSH7sKHpmE9W8qvpAlCGr4uGiw6AvPLV9pBfv7kCE6IODyU4B0SD6cfD%2FSnhMemKG3xCVPNwQKVLYAeGQ5%2BEarHBjTQwPhVS1GPovltf6WVNGk%2BzV9QJHgFK%2FqA8egw27PGxAY6pgF3ffyRZui%2BJtbMLIoD2M2VFyNEJNyfR1lLXCSgg9cp93f6zgxQ%2BvjjFHmP4LMRpJNjjUkbpLsvUDgivA18i2HADbPQX%2FYYFrPyaudAyJd94E2GLOjQ9s4V8CHj6dTmOZs3U4dE2PBfPEZfuQBjs9zUDlCc2feNuEigjT6p3Y6fEuJtmw0lCKryGNOSZTuvIXaPAkE2w%2B4Q%2BN281wsQERKgXgASwNY2&X-Amz-Signature=05a01ece97d513b8a70a82fbff7c580343811464ca4d2d160b8d80379f299b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
