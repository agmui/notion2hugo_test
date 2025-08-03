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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=16fdd99ec3dc96e6fb376c578f25e2bd0b94a5b9585c5497554ea4c28b1a1d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=34f62a314b4e4684cf21047bd49c3e60c8ac4fd69d9a4278bd2f7b0a62c4530f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=20c5676d1606470b4fbd255d0fb6ab2d5d88ae8559acb849cae6e145e4cb6f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=7a146f3e1c400d9f50c768af4b97c6ac21bb0b2305e313115ea3b6e124404d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664QHAFXF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsezrijBuovCfyZcK0%2BQT5fn%2BVG9yj08GdjIIVbZFizAiBEq24CNuW65DPQjDjg1LYQWMdI7kjzmwCqO8yTxCpqVyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMS9QomykpWbhrvNy5KtwDO41FUTcuCUCzJIrN2IgG6ni%2FQDsInmPWeQpyFOHuOwYC8YYbnBahtMtYyZBfGncwmTNHINlAhXWhMRb3%2F%2BMvAJvkHMGrtUWMjARpZ6zyyNequrJQVDDP2d2FP1yjX49A2e%2Bo5Tt%2F0LH8%2FRVmAr13FdmQzyc3Hw2ilwY3CNAtTY5B2ikVSDlQl%2B9T3vVDancSAwxkv3VthJ9PXGqE0lnWv7Qch6ZXveya1zaGR7q79VvkpAL%2FMRmORV4Q%2Fz4Xf8valCjppvXzsvADq9fEfA0qDlZDJ4Q4EDCy6QhtZxKtZ%2BbGIsfZTbTW5fZAcsfXHHa%2FfwzLbpkUm8jcQ1%2BMH7jVb%2FZGXZEX%2BRT%2FAQzHlFWUxT8npzrWAed5Ps%2FLwsv1ORhSTDfO0ahjg%2F31XOe1jIauL7cOAz9JRSE1nGR8kHgdDpuj6aDtlFGzebPmZ3BQvSfOW94iToG5P6yE5vGi1eBM3tHigZy9QuN6MlEW4A920vuI9Sganh61pX9zVQztMYbMzSOPVxfOoqX7dKuCflOrZhKk0oum87Qm1s%2BZRJWinlGfNs1PJdIcFmOB0tmiBqvLjFYrqkzTmDEF5rxXfv0JhQ2YknYNJHUil%2BdSUwJhK9klLXWnH%2BrooiXkzKowucm8xAY6pgEr8mAShk9UxDj3SEp7404ixG7hPybmFL2KduOcSZYhGbpZL8DEB%2FUtVVm2Rpad%2BSKvcYoH2F5Li1aFbGE7lU6jY9knH5jeWb3FbR0CB90%2BK8BxocrqUTgLNmuAY9cWpkhMY%2Bl%2F89QiCVKYziE%2BeWsdFgXSVe6wtl8cm%2BfIyBZKftKL%2BkWYn9Q6pQbJr2QsW0i6mvLs8NxiIdoRyH7%2BoVlzs58FWshp&X-Amz-Signature=d1d4228db83752288e6dfb0bf185c955627cf1e456af3a20d936f479e84af9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=6e46344f811831e1c1daa37b51ae9920aa18761cebf558dd90f13a3015050844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=4d35bd50f029df9291fbd892d957d98c6d5cdcbbbc2d326ba0ad36c8528c7fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=e70a1c3329fea9200d83141c1f263cbd15139d2c7c6444ea326f267de7336e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=cdaa066ad88e4f26c34dfa8757725002471c6fd9cc7ca069378dcdb2e29e0e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=dce28cf4dd7a6591e1ffa2ff7b6bd672c366caaa634cc698cd6237fb7b842484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTXO6I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq3lobU1rhsBRK%2BYuxqctMZROS82UIydw6hBvt%2BbY7%2BQIhAIw3Ho0X%2Fbg3q1EehLfd7Jog548yZi2ca%2Bs%2Fd3%2F0%2FNm3Kv8DCCoQABoMNjM3NDIzMTgzODA1IgyGy%2B%2BRj8v%2FobM4ynwq3APoEpQ1s%2FrxIlRpD8c895ezXpfgPjpy1CZozPV%2FNcaODhRRHdKO3Ko5svLup%2Fi9RclyIS%2Fm73nddOOLwkiqpdjtTuFuJ%2BFk353Bh6z0qTbA%2BZuvHisvwDbxf2c2I2bUzkXaYijPCmE2k3S5JG6Kx7ymsfc%2Bl92aicTL4psuEfCuQKxd4mGoNL%2FKLeCEOGQpmeTLar%2FJvu2QWjKB4bzbc%2BJRaN32%2B%2FBcioSJE8RQym43fOA%2B4owt%2F03OCFjcFo9fu4a5Ai15lGH9qHsd5Zk0ICVB%2F04QIlNMJBiO5NtySMjuYcSFnEDVV1KvXgy8SXtlInjvMkDNZx8Bf2QYRzh%2BOKKZ502P6yxKGe%2FbzS6pdU4TweI%2FGIQAl8om1DmUTxHxq49lTHaIPQFDGN%2BEYnzS0UjOdTInMPgS851mUoviWr81%2FmLaC2QlOYHAuRwLmfrF5VVFh%2BaRQW6WQFM0%2F1ZqFa%2Bw6UPuH22%2Bzfq6PIvXbMv%2BjR6FQw176KufwwyZ9uT7a2G5vUPFWlZ9B5icFoaOszEKL%2BHTmkmKnBxm3j98J6eXJsUdtWjDWuyirgQG4eBjvwI7evJCbSPjrU4LAxhKMMQ0gSGAmmdgDPMvQ0PcOcmJGiwZabfC5gYA0fllHTDWxrzEBjqkAWWXsgfV2xJt39EQu8jU0zzkPZ7OLuz8%2BtPgOM61a%2FMggdQ8hZf3H%2B0zyIhesoxtFyCg%2FGs3KNtQ%2FJVBan%2FaYNnxt6rFO1ZxQgbinsFnYk75zW9SP2g1%2FJT8sOD66Ll1ZzG5p0NNkhHPC7F8zj%2B5vjmDgOXupp04ckP%2FkB%2FmKFR0TIWR3aJMAq93F5IxK7GmB%2BAyV7WS7ubdJwrMd%2Bavk4eGIicu&X-Amz-Signature=361df1a013c046a4e850d9b6c7343da449555d569dff4583138d70ef376b7d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
