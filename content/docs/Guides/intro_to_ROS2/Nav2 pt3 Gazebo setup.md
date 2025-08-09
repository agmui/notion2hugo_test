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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=8c8d32c57ab436b1100e7feaf8ea33b53de63c7e648daf8bde5dacb9134d1764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=753483fb65790529b154e6300dff6fd44ec094e7bb3cdc03e1aa06c504469424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=22971a717042535889685701b430f3a04555b3abd28165a93d39e9d0afe74f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=fdd6423afc976099487f687bd00be7de108a72e6f037986efc66ce24db7d046a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBVOZ7PI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDNl5gSMsZYP0EXe9%2Bo7g4SIzzyTqbHJfAXdDEaoous2wIhAKBxRQd%2FW1XZIKoGsoHkEZX89Z9U27%2B%2F%2FM8kVCYn57mIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaUX9%2F%2FxbDmJ6JRpIq3APPC0Q54OxMJtHIapiP1XEZeDPgPiNNjyZm%2BcMCIXamp43N1tKSdG4mDgLWd%2B4WDwfmr71QhLI7sUFOqgNjhmrUBP36LJbFOQ0Y76tp%2FHD7gVN7P07HEjc03vJX3IDAGi4vqvuAnXAWW%2FTs8UyQtYjIEE34vQgM0V4SNuGvHFF5UYoF%2FPhi6eN39ZULKByFlp%2BBde7Ih60G4xqp6JgBt2D4kgzrKQ6J4qpQ%2B%2Fbv%2FOs8a%2BpzLdHJd7ItRgO0Z0TIxZzvrTlGMYJ%2BhJ47YEDVXob0qtC%2BAA89pYwa6hloWz5B%2ByJmIPzxPdcn0TIrEzPY1WH2naUE285qMuZxDmlRdLytQ19IL%2FlTiy6KDhL8D%2F8xWgEGzCB9h5s4gDH44CobBzDfTzLAY%2B96O3u5emub8iZnGhL%2BKMaT2CenDHrzlGJGmNzFCx1o5XliVcfkgH6uvoWXAPwIX0Pz3MLdAxf6uKT6Vd6j9rm8jVTqSg0uIDzbNnMdVSQhT95xhrqnECiWaqTPismn92xLZU7RFDxRUzaJxwOzkMH4MSVU%2FPuQ7PfJ7Khw5%2FmUSH8EUiAm%2FwvgrnaShf9R1Gd9HdxGlVxyLyPFlOZIHTKdXhSS7iANT7YS41MNWnCX3QfiKvpHmjC50NrEBjqkAfl6olf8autqRD5nDeF%2BiND%2BP8rUGxBNzVZw8sLKxZ6wX%2Bw7a20H%2BWcfS5RigIRRjdDLQ5V%2FTzRzbSft8grzohysKitJWzoVlnZH%2FrKBWyx8GXLZMoklUBZ1%2FwzTBf2rkOFQIWWao2TWRcxK3EolIiGxQJ2a8ObRTeHBiPAREkMBXabMbu0VYL2EUugfwc0ZSSTmNpIrJjeTwrRPe6CEFmmPSpCP&X-Amz-Signature=be197c73730f84d169eb220298b1e376580f55ddba05dbffc6a48d27b7c293be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=62c49d05bbb5784e4ae3b5f2b90d165c7ca7dcfea3f36f4fe3696ba2cac90ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=4bfda432d77ec52653b584c965cbb365dca30966212fd7e74d4825d766951719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=a7fc9a55578a52a0b5a71ba1d2c8ef80a590df479d415439bc7797b5e40bbc62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=4711b29edb7f3e0661a0b26f12e448776b7c128b47beb35d64e9fd1a2fa318e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=fcb353b383b596b6b0d5c0ef17ac5517be29b2e95a72f4f0fed7c5863215532e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK7GZ3T%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEEl0E1fY1pk%2Bo4ml%2FSHY%2B8It49o7x%2BybYjLrglcrAcPAiEAsoTfk72%2FFO%2B2CQ08rGf07p%2FWxc%2BMtieuaChfbyg9i3QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeL5XZG97uKboNUiircA9v5%2FAAeMscIpPru3cYzeCSpX1PO8AHF1eqXzAxwf8lAs0Hl8y6ztYc4Aq2ArYp1I7vQgvAMbCyQmpxIbRWgzBFfx%2B5X5aMRt1CksEBOr2WNL0r1DNLL9pVP%2BEMAKWYiB1Ikx3U%2B5hOIMH8zEaxaLWDvvH7XS3K7j6iumN3lKEU8kW9MR9eUgKEwZEIiEY7irgiON6DHjXbFkgxixLap83vXaUAnE%2BGaKYyTAaATq4%2FKViVrNhEsEDJ8aMXi8wyOvPKIlWEV9APjuWbYrqDsCIJnfnOqv7TRduXy8j%2FtC6x08pWQ%2Fs5fLpQMAZP3Ya0XBKo%2Bfp0wy85dRbsJ9Ppzm1PPY%2FKzFSZGdBKH2RDdIQDAuqu%2BjzdIQMntLdHMMGU3ZcceLQUbJCDD487FN%2F8%2BPrnppRK9k7QFA4LGyUlMrAITztsldzQaJG3u75SmWSqNhQDD7bBe2QNDFuT9SxMFx%2FvXRCFqDFne9K9CY6wRcNXEfqo7cK0lH17iLBhBijSi8AJzryIDBwlriTLPNyczJKvSbWB%2Fuh%2BAhamhGud7l7PSVSYlfwNl7%2FGxgG31rLJwBo8OYh9xhHKdqb5I%2B8x%2ByhQ%2BLGR21X0kcf4kCinRg08nEHxzENkM1pWsQckYMJvR2sQGOqUBYszXBE4hSka1KdXYYcRm%2F2ukz90ZuwYExQh5VfiGdBJpKhzUdAMp9rjWXBA5pxE72eQGGDIc68O1exgbFrxmnoaeS4kOWvx8%2BjzgBDD5O37iC18SdpdfuCHEvTZuWi5qc69q%2BG1cLuhE4GIgsstLvWOiRwWc%2BJZYzc21iB%2F8tK%2BrOReR9zvTxuriWJbsM2LyiZraOZsyjpbF%2FDHUmffEabQCr0DA&X-Amz-Signature=e02d489058a74c3d2c09c04b4a7e66de6d2cd0497b60d633c178892484b9933c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
