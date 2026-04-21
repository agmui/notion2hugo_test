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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=2152f0c774330c71ceb23e756a55038adb8a8249565a39bd8df9005952955650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=e918017b33635ca7c3ea6db05db302038bf7b3d6423a530b58dfb77be76eac19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=6d8b227af75a4f4195efb2f36cff978c8a7b267d6db3416df1d5a69c219b49e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=89eabfb2e53725983638d6e9e70b74a30ba3f9d132fc3fc1722e5e8062eb695b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LNLJAE%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCFtOxQdVbmtm9u5scABUPXa9SN1mGpi8ByxjuL7058TAIgJ6do193MTsyBLIXUiSoZjNW1gdCsmcPP3vjsOrdgSTUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHhNMFkNeIpbo9qvmCrcA0tXkm2DYZsuvLANKzyeft6pkAH03N35S8qN62CR3hYcKuWC1RGhOqzqntcamg8l7u%2FhiMzWjiYLLNtwA9BmieAIueqm6Nvp88on2yrknMHswo2SKLbrMuSkiy29vTo8rxtQLgNHHzEkcoPAxi4D2Pmes7Or8KAfN5liaVxJZL0ixzA%2BEOnQ78iMHxFmS2p34QVcUKTE64K8kpvRpSxqMj6LY0fPKmYWsrJlrDsL2%2BOl4YlYkfCbHsGDvLZ6XC0GIBxByYqIWdRrCNu4y%2F3Dk%2BsAyIFEOvM4ZwOs5KnV8zDobrSX%2BxzENfYwahHM6tJVXKqTISZp4YHZcJT43L2hj3D5tv%2Fe6Noi8pytsn%2FrNoIQQ85sbSlK3Z0bYywelypeE%2F2J%2FqPnPLQ%2B3OnJCCsfr8SaZWI83Zv5TumvkZSZx7G9zzF6gBa%2BHCsEoKYHbz%2FISPi2efBKVIkp3Yp6DJdbs3cg%2FOorplru2d1WR%2BGyNNnLNoSqqh%2FzNhPJAP4e2faflUjSmV56SsScnKUCWCy6OOJo2Sm6iyqVzdu1Qvh5apF3OMexddPBJl8KQBsbEYdHPrzEq98B5MzoGM6yMPK8SFGnp%2FxbmYogRP0DnQA%2FbK87%2Fbt4PqL%2BzrXQlAX5MMmqm88GOqUBk7tyDdbxZu8dx8xuQgc%2FTZmGC8%2BDDIv%2FHSXt9Ex9yZHFIKQsB1cU7JDSHSIhBStquRf9yP35W5azHSr28JbeIstbS7POe7WS0Wf2s9NOuIL9l3YKFkC8wjg9M7SyFjKDtL0ubwAY0FJqNuLHSj0U%2BXu%2FQojh%2F0djpiyQt2cyZMqTszNEPTuec%2BWyQQUv1oQOiFIN0ffOWmX4IUK9d6YDhoeOa1E2&X-Amz-Signature=c67df0f22c4c98b2c9a021015eab1fb2abea9170d37d9dad30e87216b2d5c6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=77f0dda666e3a21a0d4a5faecf683ad9145f22f2a33bc90403594024765501e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=789740ff285de2c442ecf43861b04857df3f0da4c228f26b1ef3164fcd6740f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=4cb9329c5ea29c1ba9cc143f3593548b68435dfda455bfa02548ad8605502143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=e6c7c3ef3f5dfb98a42fc0cb55ab1bb908ba198cf585fdc4dbc95bc7fd41651d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=bb367996ccbc5cf59313e1babe51c7aa8b3ef6d72821a04fd8b05c5748b9b749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUJSN5N%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDBLQhumHxEdXtugfdxYHyBnxZegNLYR5iAjiZV6LjsjQIgQcGfcLSCx%2FJ1MRGbJ4nyWLcMNHSluqaIRlUrMv9ESTIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPoVE9JT0AJZRKThdircA1K%2BDeGxa3uEtTGnInmkcNexeT3OON4GcKSgEq8uo4QH2ZIIBiRv%2F%2BLeXIRuaLjfY1iCfKDZUM6Q7wGzVU5Pp%2B0lVyoWNcOlhyJp1bbfXZTxeC3mz7yUG09IzVoXzZeCBHi7N2weG7qsdivojGKo2OdKsOesbmyN4414VS%2FxEvWABWQIjZ6hl4i%2BrcmCJCwGHo101TzJAiQ5SPi0HnX3MNf82xhRWDEtP3mZQ7HRpRREqDquKsrrg8rGFayHhwtQhTpo51M2Lc4FQBkQ2qwz1I6546zgnOO%2FzZ6ejsLvs18CUXEnaI5l1ngLGpwWu3nYl1jfD6rY0HAujbPvTlyZiVIxZQafU3ht7DNVK1Bm3RvAICnHeW4pzbGQr8Up8lAswcCqi7i80qwdeBKHPcRYRK3yMrkCEaf3%2BabDqAF0IUhHhn8WOctwshZGAHk%2Fmyy531wY8pIfDMlyKko5m84u4OpjH1gQWJngGJ8Z8YNK5I62p5xaKiGPqe48MqlfzkSSj4XCrWpEw4UchPfL9D63RHvFIIDAnKOckqXXc%2B6C8UgVgxNPG00dkM%2FY9fdgeFAKH89WgZsf6kIKEfejzPD0Gn%2Bq6ECM3wpcE4Yg1o94wijL%2BdFXMCcA3Y8cum8KMKitm88GOqUBPuMzbyfBi57Xcu8Y9J6NN2FTxi6hhe72LP2V17l4gX0ZgeW8xYNoIl652y4oGYv3iX1eXitZZppayj6jGzUbnUKGhgbAEwG8ye15RcQQDIe%2F87NeHu67P%2BOof5gykez77SH6SFM%2FpeD0zNeSXJBfzuEvIWuOBjtxxGnREG%2BnqMGtcsJJn8wDkKYtXzN4Oqg3Ad2%2FIEbhHAqV1M%2F8UidWeswri1X%2F&X-Amz-Signature=74fcbcfdb9b1aeb33a03df9fed8c16a385e5f782583fa380c32efb32c1fb4d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


