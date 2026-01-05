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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=f91e5cf0701b1c579d1c6d82443affddecb6783b9d4e93a02dae51019d3b257c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=b1e422c33a213355bb0e9d1b9b427444427650229e36bae29d61a973a8fdb598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=e4fd2242a2909ad68068d5a1118dc9eaf90023de835b4e73b72fa8b4cefdc04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=22c393e0b0aeeb673e5e3a89cfcd6919187a546e4026222cd0bfc84c24c67ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664745J7IY%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDHNtrFgFF0M5Jp5ThfIyJTEjoOCh%2F1U7tno2ZkHyTjDAiEA51fEl0Gfniy4ifqJcRT452ilworNidcq0xBIzYJM7mcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBoJXBSlhVvd%2FtgGQCrcAyTwxjy%2FszmfCrfeFgv5yUXRWJ7eUThhRIiF4UfQCTv89exzMasAMD47nQhlouM6bF7RVGXsoqNlUDu703rc2PSUwB2Ro9SfkZnZaI%2BnA7bW1CpsTTRVw8l4uRE%2Fiy4b8crEj6HoQdphtwfO9wxAH6JMngUZDGH%2FeHo7UQaEviW2cGK3MjgEo%2B23lLOCDxDCLD0W8L7VoU7ZhK9UMsz5K1EqnU%2BlcoMDIGdBSVfUXom2CwjFfjM0MvZHI5GLItZ3vTSMVprdSjhajFKg2RcmZTcddCSeKZBnLdpGTPZyCsC4fXV3WEmSXQcp7M0hcbEikUdhdRTVPxlxHOgEF5XksBTf6XVkhQbXyWvehFt9edsUme9XO%2FsiQ68W0FmKNm9Q9e9LVRCBSQFH%2BZKLX5TSkgT6sqRvQleFV4Nq5Qf2ciTUkiYyQMdNOaeDhg3dD6TRnvTPU9KWkoCt%2FbZYfglqyWCBXyqstziqS5M71%2F9YIHVrjQcgqpk63JXnIALol7T0h6Szy6%2FN9UOUm4vWKR13S%2B%2FcjNyT7RG%2FZaThgDJ7Wtdi%2F8c6Hd5xJQ%2FpltV1tU9RKzkpWZgCUkIzDAe%2BS1t%2FO8qcOzuZVb7Q%2Ba1oRXlMMXFjo85etIvI7B5JOqDFMJvK68oGOqUByMlSHytdBSPuZ0xRFHPlHPOpeXnN8s%2BLZvZOEiclaxhgnIrI1jmU3JAt7c6a4QW6CGnMZRmOq47YvBQGh3HlYTbIq3JyCNg51bXniR%2Br1m2l0sxe5Oiydv6AVddl7eplfwUznrkyD49heCHMAE6Q2BvQFwywniubOasniYCus4zXVqrmkouYg4rTy1plxKZ0JDIP3eLBpe8gruGGLXmyDjySF2nm&X-Amz-Signature=bb3d853ffef7fd3edbfc24928736efd77a4e8bbffc6f69429137bd1a77336202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=0f4a8289c83b41e826bea4b2ea2e3803c29356bf096f868c2b4593a28f284c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=04bbdfcef27c927c6a5a673ea8cf9376fb662cb0e499e144ecff80067b2b5c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=c86f45a78d6516283697398a4fb30b602f74262bd23b705a16c694e343b975bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=dee2638b469e2bfe64930e16f0be683cd7d9f51a78b755349e2b3300f8ab4646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=f5d1b3ed75f9cdca8eabdb5fd55d61bb2c38a42c75e955a70a1f72d20995b33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2Z3YZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF5%2BRIyr9O9SRAkEzL64Qc5McAGmZ%2B4JT0oUADjz1oxhAiEAirDGsliaMCPtd%2FxwgAjT6VHdpCuVrgwW6cmbmZ1njCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCwQKE0J%2FslMaM9DaircA591JplUFRftQZTYca5c3Xf98gt%2BkNOH5gHurN%2F1kAa%2FGUCidl4sOlWVX2xTOubGJxpsp%2F%2FsXLxH9ooAeFOZlJ0PO8KtNwEEXyKHkpxveyA5R5TKQvCGcQ9R0TuLX7YUwyzpUJnTCIREsjMRdNEXng8bJq911QvgORwlkQaqqZxUN%2F1OuaahrBSvvnW8YwmPXslwUg1vme2ykgr6v1sbUKYqANJ84qqAsa2KjMm7qm7BYu%2FPwDPcAGZ8mjbnHcyxVTnLawWQQup9Pj373iJUx%2FGZXWAYI0i0vpEPEOcSDaweSRwYPdUl0L9rQ4qbaAsbt2BkQduysi58XoQQe4dyEGDT9%2BPKWvi%2BwrWZEVeA41u6P5hfufVt031UCltxRkY7XmHmr6vD3STtS6BW%2B3aBPFDG8dUO9joVWignB1fSWIpnqmTUZ6il3c9LgNP4bsfLsXOD9PT6OhgObfmwiks%2FoDfCnSaLgwKzNUdQ3vg7GysBUV6JEWTaWbjdHJ5XlFgab5eIbUWAK%2BkfZVGzsSrED6VfFiucVpULXSUggJPph19wLGbRPcQFBGgUq55JjNA2ld3bQ5ROx2HYCA7kHfbVk3DLJzsjzT69n43wpG3UbuQ9R9WeelPQug3mBtMKMJP668oGOqUB8ntGVZQ%2BCtCodIFVZEzEGrOoShWz1eJzLYSZHx%2B%2BugUq%2B9V5a7YF6oAas0p0gCbRMAdeOEszXb%2Bjy1biO6TFYWTGUmximhmu70urIHoYBnDPqO%2FBZ3HtnLz%2BYORcTxJpk%2BIG3HcxPr5lF66oiFbUhP2t0JCXPXBCpZwG2QkwujBO7yVL9hzRGhU83imYbON9967krAURIF2Fz2lIq2kJkQ8Tu9ix&X-Amz-Signature=2e91c8d9d786f0cf8c26dffdb99b8bed86f349010d5a1f9b52ccd8bce05db4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


