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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=4b428d4503783e97e162f0a00370f9a4cc8e86e86be93940453485cda3b7e1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=72a5ef3c8383ef0ceab69a5931285ccde63ef286699e86ace6c20cf575246f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=520f299f50b9baab329eeca011c26c3cc799ab3cdb2e1b53a18336b7a088dffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=22cd4fc6965fc1644490a6d6cbb38a20b75e5bbdb79d664a2339a159a54cdccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5CPABO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC%2BqvHjDDOJekbOjqvYyqxRU1vXSK84%2BSHmWoPRy2qe5AIhAINj1jUlYU8VtJilqIqtny1FAA1MgzrPJWLvmug7CQT3KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys1qVcukZPsgM5Efoq3ANt%2B376U%2FLrgi0isNpZEAddJXKl2qqTJb%2Baf0Ss2zNclZkTN10z2UKnh%2FQqKERAUUKn4AInb6X5OJXWDlYVY1id236cTvxuLDGTM90kQm4b3A3H6argjHp%2BRHATWzRn5GAFB8y02BwKEjUZ8JSsPzOPxqiu1LMwDEz79m7%2BRvpGwkRqr56R2H3dlN6nXc%2F%2BfG%2Bi6Ntgk44NbCBqGxytD0umWxJwWxqjR91LHPp5hqERvsmjBr5%2BtupXP%2B02LUE7Rgev5biTdDJh32LFiDTUoB1O9asL%2F4G0JDB3W%2FA3P0yNYkn43eezww90p8ysEwxHwGiZ2UQ7dMRg8VtATpoxSyp8YStrbfqRshoOYSyD807b2T%2Bt7OD4ZCsEK5Gqjx0YMLN6il58zzYk3Ec2TLUo0XIpBUw6jE%2FkBVSMlZO5uneNp8LM9yHeGhELZlfBq7H%2FcXJNpC4ySkbpJOWJXsqyi1fZAeYuvJNjQ%2BNZQPN2eEhQW%2Fc0ZbxmkHRSaJ0v3YqgD2WPT2i0wqYh8km%2BQjGtYnSQa%2FnoXeAVZxarjDdED6Kfh2BJUqZ%2FQL424q%2BFccnAx9fbxfQasqxW0fhjFdfrT0mVpE%2FPRcHGlMErzC4%2BDwsFi4w15D6RHiQ0VtmWuDCTxdvEBjqkARIGIBKTBVQ6CwTLhgKYal9yLT9wFL1gxXmVV7icvmsmV9YTbduJpEOE%2FZWdzcxLGfuGe7GXRpWAkwh%2FyZ0zyQxMMyO3byW%2BrHKpbHNRNKq1yBtBCQW8v9OTGd4Dds2RW4KLdZyiqp4gwQXd07YA1PufBAsiYhLGvod9wWXsuu1fkekN4SdfY6gSyEN56Ox74%2B10i3nb1oYLQAR%2FiVeV2wVey0h%2B&X-Amz-Signature=b7d0d6f3e02f64e946f783b73abaf327f14ad5d051b0d1904727c765536db5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=6f9bf686f4aed7bdae5e1570054fc19ad3305725b60713be53a0a4d7254bca0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=ec4e393a759b07859ab92b4dbe095b1d512e7f4cae3f776b9e8a5bf49c73eb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=64847a72ceef1f271f5a8f50bdf9d93d5546ca673ee4d062c09640be6ef64693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=0488bf782ae8786fc6d1e58753a25332a21ac496223b540e3b361a6dccd03e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=0321ea64c8bd3038a59bab8b25a4a0aa5d3d5667bdba83e886b574fce9610b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHNLIR5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID846Y%2BsD5%2FRGGa02m7zQ1rSDqZenOPUgVE7Hf4hTXNwAiEAzjdNLkgVTDMTU9yqj5ES8LBq8aiABNQkp7OqchPNPlsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkrenVF8EJatyQONircA4lt3%2BuS2T%2FI90Rjg0nqiQ63z6qkWdUCWUUvuHLnjrGDUGm1m5kLoM98O%2FSrIH6LnC7NIgghlrzBcM34sn%2B3ZQd5lt9jn%2FNtBSkYqfy9rerqsATfI8RFx0beXHq77kZyfWD8k9YJO46hnsOcqXDtj3Sh%2B6SEDpaeKyEyUA3uhhulKzAzmRRfPYBHeLq3ujCArYsspSd0XzTviwfYhAKrt3lI9k%2FyrGOTQkHacMPLtpT3QUWsxSMtgo%2BJJcm9ICFHoGUzA6XQCxE6YI4Yt4OcnGQBjTFYuD2fPYXdcpvF86%2BD3QWBC%2Fp%2BzFJPVgLFGRVeuMSR407u%2FAbNGEEBoH5LRImxFdmPdHuqIQjmIj5BRP2JFRVyIHUXmzmZq2HK8CfNwZb9klDDGPj8d%2BPi9O2J9fVRZ8XA8ftxMgVI5LGxjcRWrR3F8qyCjYo%2Bb9BZMh138CSRor94rrjfORykKH2ujwsI7nxIEw9janEzlOQp7EHDpx%2Bk1x0y2HfjUx4oo4MLjUGrgiMctHa8n7C0UqDhxbIsvTczgI92dWhIpGEX%2BMYalkzFj9IY9DNX9BtkvejzlN5SC2lH8VAtsLDdK7ihofYlt%2BOYr9dX2zHlpRsrzHP2iZMP1QHnRUa%2FlEaqML7E28QGOqUBMGh8oe%2B7pNXmeJkzMd3f47HjuJfTEAPCv0ivxTXuh0iHJujf%2B32GE6cwAbULmjd0%2Bn9GV7XQf%2FNDwoKHeu6eHGwSf7QUtiIWr66oSpfLCPKkda6IRynbRJvNKhRq5hjFsn7Ay1r%2FUD%2BP2niwo6o%2BfDIsfzKLrGK7MArzxnnDnI%2BOyam9SxR5%2FhTQJ3OuakUKIfUGa%2BvPoFMakLcJY3WajH1dU6Pf&X-Amz-Signature=6fccadbacb2406c091596a733489c4f966504cbd3b7e7b76cb9d7e024666b912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
