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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=3d2bf92d17b7a8a712f10ec3b335230ba485ae6889498b359bdd021746ea03ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=1095e6dba53d7565e16aff1a35e0a1a260e1a8487845ae0fb7e1b7b0649c26ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=aca6d197cf8a85b217e5eeddec5d99e165490f4f86a1160d25214748b2f0f9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=cf5b246d6f9ed36f152da9f34ed6233912d46a5bd04a0bc418f749dd24ad519b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ONVSYJQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGT1BN5rYTgBBPtG8qPJHxxXsmo3njyw04cQ0DBhnK9HAiEA17PH69t7BAHgZs%2BaH%2BlR9BGOFDV%2F8WsNFlxQR07VdtIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoetBybZceSYITApyrcA9uBB%2Fbiigovw0ZweoHcy%2FcMpn5MxWfoSwLMEPCFW%2BbyllipdtpnOPZ3bwJIfXh1pu07I%2FAgUu4wfIPMu68P8K4vbRqHRPGWdFgaQ2WA%2BESVWLNA5IsxWmFrW7VJfL5ESN3esFnQvo%2F42QnP4ElF0Z8o0WH0Hs5i7FGppb%2BHKdH4RYIcoampesweUeVKIBkuq7Ln75oKzaEJffT5uGjk0zdNMvert41PBGbMmRUdXsa3eRTsBYhXkRAVsc%2BTzdsI98YnbjYH863%2FoKUINa4kiQ8vlP69pGPdVmnRA1TuPYKMCQMuYfO0ehaG6SbAle8gaxndNA7V%2BzPIY6Ytotzy0DSbULlhD1Hu5V2oTGm49u5IZL7BopLj6SGRVjG%2FxCHclsAnTRU5FqFvRWllZRIGNnWXbQTbnB2F7Qvz%2FReHCAqQg%2FS9ekADtfYprSw%2B4qrWYG7yRsRJFBuRl6KjwoJI7nKhc5c5qv0Ye9sVF6lj%2FkE7m5duq1pG7hpGwTP56Xe%2F%2BBEmaA%2BPu6Goun2A1yPqKlClrkY2MS97OXwOvdBBXy%2B3dKXb3euD4WcHMRTtL5vuSGQqOczczfzCuSNJykTaPMpF9eYh6qTHkDsyT%2BKOTYzNbCIay7JjLVFI2zjlMOXE28QGOqUBMxvchHnJqBtGErHlgJBf0h991xGwchn4VSlCMiKJoe6INNsfmo8f2lEGbEPJ7m2WYEVBdahsJ134tBvAYd7%2F09W4%2FoQ81YcE2b0SNuQKnMpmOvv7TVjJ9QyOGcuqf3%2B15P9hVEbj8gkCgNs1MSXJpuShNajE1aCmMXRJ1KoIauimh97htwMDsSQsQomERUzpshbmrGpXpKxORYR8RwFMGwdNmRgS&X-Amz-Signature=550e0ad3aae18746ed650d7ca7de22fc0c7b9ddf6cd678f6aae4b84f75a03237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=4ea1b7ccdefac60c79e8dbe38fcb16950c52dea7ef4ca367ff9ac84f4b1c6a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=03ac3c6a0f4573567dae19831f518751fab28fca44cbb0423ab93dc3908aef87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=048cf957f285af044fc1c2684efaa1a3baf4d02a21bd02e8a4fa5339e0493733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=104b171610e4dd645c7e405cffb96073d9e409f66f41322a3e30909103703ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=e8af1503be050239256cae9f10085f81dc877eddd2a942baa2f9ae2dfc0259c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPFECJR7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZWdfoVUsP9MAM%2F9PEtfzipUu7Iplid1sQV6kjJE2VHAiEAyKqmZSwlAXokVKMxAJqRlRywJJN5NXERcZTDoRZw%2BX8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtd1OaLMWYKWct6ISrcA2MRlL8XrDe30R3IQcsPa16BEL8wiig2IKRBRGtxPWYe6mBjqtHDoIiKDwiCDPModB%2F1CPSsIejXjy7BYRE488EAnD%2FU0UeahxOJ5ST5zw6C3iVwxjoUIVJYw30pCMHrVZTQYtbqNbIj6YaH8XUeFmv4mSl8%2Bz2SHWWDXYmMA392z%2F0mTSdjlxfOY%2FnyIWt8TjaO04tvyIsretu6K%2FDNv1wg8q3jJOWeOk8N63VW0wK6u1y%2FIcYC8%2FMXTRJhOVIpIpx1zZOAAQAMdTRLnSflJ0B78Kc%2F47mQsP8C3ktWsjqGmZtGfmYiHZMmUwaetgWeQh4OahCl%2BVkt8TvwemWc2puUcgPJKRnScYCzb2bljgd98FkNGgvGavEWhe5r%2F2VEiQIQmqBish28XUK7IMXB58mNVasF3hZB5Q%2FMleIsgxRNlPGn6jSbrhIhFgtwhP75dpk9gOjWmdjlbKh2ZCxA14v9TTVeRzZJphLm4UPhCDNEz9cEBn5bv3m5ZF8Yals%2FcocjvC4qZFiHihMRUTvNbF6Y%2FmCbPnUqysra0wpK%2BXN12Yfu1Zyz2lkRFVb%2B5EoLX7%2Br2PGJQqSX8Z8de1WwfKKR9EQPhjTkHj5NRgGL2fOWB4ESgsdjdO%2FBT65hMPLE28QGOqUBCtVgV7TrjwzeIj%2FRkegCGs6bUknH1zOs6EOm7HHd0McrVrIf7E%2B4FG1uiI4iVSywXkWuMS0iwHSiKP7YIZFZHX%2FEPAd97XngPW55l5oe4cEzAeJ7Shqmkjv4lnEbNNtD%2FlfIM2IEn7KUyU5L63GnErYTiSyov8B%2FRcOv1we40BOsqaxTr3L5wDR%2FTH8OuOVlHl3%2BhiZ636pwAB40xy891iMqDmcK&X-Amz-Signature=dc5d6c1e95546a12998da99dedaab9952a42c2f1111e29a67b4a7470b23c5330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
