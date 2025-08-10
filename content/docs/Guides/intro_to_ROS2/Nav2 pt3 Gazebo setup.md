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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=a5b8854645df2245e6e720a3ee8b36843febd788623230c57fc51ab91fbfded5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=71a4df3ae8882c13db5e8a8f0d3d89bb968a338404689ac30b837a35a6b6adec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=95236f557ae312c672c927b5b06c32d6f4a8edc23d65be8ee1529de947e4f8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=7f706b86de46a143172827021902ab72d9bdd1da913c7776be24e319bc4db52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXS6YRBC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOEhAB4qLvcPApLxIPLPIOpStoQClmlFE1SZYSGOU8RQIgCMwLY%2FK8KpPlrS5Tj6JfEpEEnOzuE0Zyf66GyIZ5%2BUMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxYuqK1BmtMldPChircA%2BDvXdnLIXq1GRVsOd3PwrIrLou7I4A6FVjpswodWOV1qEHRKOe9JwdL3oF5%2FcXGxBxfSsHELAaaZcO0V3HvEc04ZfY7cZ8NmE9wfwXoOv8ftmbA8TAzR0cdlksQaTJfR6WpxhjrsESxG7iMtBev76%2FMsOaDKFiP5U%2FaVDOG6JGfzxLHB2AZjHkXHcFcZEKNlU3v7YkgtXJFCOdXGaUCQUS6GVDQ12904jp8FGfmxJcqK0R6v41hrxWGuPANhzYbOq6OisG51ZSLIr28qHU1iiPzs2Of4mHbJkUe%2BKe6EQumlVm5kn3zetV1BHGtdh1YdFuX4C2wUxt5mnb0ehibeq4wH%2BYtwn%2BtbYEurCcjdujTlp6TTd3DDBhS8QS5Xh1Zs3HHVRuEgVn6QI1LDLFJ%2Bs1VQwLRhr5x5jDt13zZlZpzSNFD3zoU4Uxbi4gxNTzDh2pHvu51VuS4L0doFpZnGi2pNng2n5D5MmvrIbWHYSuZF0rcWTpThQBgkn4FhxbyN3SacICWznWWGnykvp6Bgr4CNHKOGlGr3g%2BF73DZINllW03wikcsooNJAZ6sSkOvB7mGR%2FNpk4hoxDBdG%2BxdE0fw8soEUcGCrzTjlIbz8PmVHVoQSmn1QIwJ6fCyMJW638QGOqUBdeFgo0NFE%2FchmbLSX9Qdg76cTwECpQ9qe7X1tv9pBbeExl8y%2FnJhs72%2FUE30EphtOkebZL0pF8ggLdKHErAgbpRZ%2F60C5%2BEY6fxt463FulPQuKpGqbU1FfWWtTyu6%2FWRhasIxqlLWPeYDm4VXJGJAWpsIRDkAz7o%2FthOoUF%2FJMZXIDDADB6E07Z%2FziQrSuCV44yZoAUbUieLW8NYoFPru8oIRh70&X-Amz-Signature=81bc71d2385a1bdf99c0ace43a430042a426bf912628910289892e1e38041e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=dcf3f39d85bcedd678835392d23d2fe6de13b11fdbac0b5eb91e7cf318cf53c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=5348241a44498375c0ab325d686e5f487c465bc62fee14912e9202b538ba82f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=e3a75b4a43ccb97993df3047d00c8b6f6ca64e1fc655dac88b3f82f360b341d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=fc2f5eca12dac1232096800b069f116968080f018fa87be8be8b1b6f9afc465d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=55ca8aff10d56895d916c5b6a9efef0b9d5740baccdc5f407f0cd2fff74b5ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAUCVMF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKCtwpwvLf3mcky7Ecf2QSd%2Fqea%2BcquID%2FjhxonKpXFwIgCac2Qx43b87fRzBIjMjE5j2LlupqmCC1sgAsiz%2BC0mMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuKsvGFGG5Pt4rqICrcA2VU4l9nyDcRfY2a2EpQketmNpgdd%2FY651gecJOauKvsr6Aj%2F9YQdpihAs7bnDXRc3K%2BFwYXVN82zqf8iuTT2K0Vw%2FNlkuP%2FG3U0fRIfsmYQt3EscgILrilyR%2FtH0Ae34qv6KV1zvpuzOr1RssKh%2BJwcRXPdbhxKDmNs3ibE8UIbhojWNUSLJcKTUNN3q5H9EUj2Y3lsM7fomCFnpBeKcukocDDQf%2F8ilFvcOQqd7FiaPHpMMpZRG9jYoVlRWpiq%2BBMjbUXPpaZEFIDx6xZP8lt%2FTQEAHWpZwplAUa0couMVglbQFBsDICoMV05WG1Lgnu%2Fe0j2AFWpuCUXpUziI8aVA7yF7UJA06mCeND5V8bI7J4JxRSKohoODS1t2R4WvGfwYKAKH%2Fq14HKoY5JBsi00EqQfM3vsxrWEOezz44vkyLuaL70NABHw9PmEm60hOF4qupEclpSxJmgzXkKNX%2BqQvpBalKKhcqSciMI0fGyqAgChgF8ttqDexTNxTJZDT2wyeAbCkp%2F3sS0zTz%2Bzsr%2BpXcscvulcfNPmyY3%2FSgUq5xqio9L%2FfAeNK%2BfiFUf%2FkwszLTKc01IPRP8qJq6Jcro6xq%2Bzqtvu7v18BRhQ1VWOg4J4Z9J9JLL6X8JbJML%2By38QGOqUBkYq4FkMTjiJ7Aga7dUN81NcxPffyg6YVaRs8d0xyjhImK1oU5kD97oK9BxJ32I66vJu1wsiwlmYeUDGbnIKOmmzm5m%2FnnsJYwP1zJ9c4x2azHGeSZ1vWTUrxZDPBsRPlpjPNu18UvIDB8OvHx%2FTaH8YrMy61HLEHc0CSvFZyNjzgg11J1KKVw1NeU4KZvYfLknVGb%2FeXTXw3JBcvuP24KITKBZVj&X-Amz-Signature=9619dcabad5afe12e7ca06e733643b091cdd88865154a0b022d014951ca41d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
