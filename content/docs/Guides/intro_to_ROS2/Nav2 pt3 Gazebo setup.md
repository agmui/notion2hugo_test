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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=ea43fedae07851221b6dc66697659e190f41fdb630d75000141fccfb552ff378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=50ac39715446b27898c110c6222d7a404e709fa62ab6c700413d02484919c223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=68b054a3c39cf4b918775b28f5e0f57d7c964b74bd8fbe8f122fb2dd437c19c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=db338569c1add34934efc736925aa613890018abf1a03c4b6ade1710c7fdbc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7JQTMV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFQ1CjVBNvTX2Xoy0b5iDpHa1qcZfp0pVrWGeZ3P5RKHAiEAmbknwukA6OjeD2LxHQ4uaAvXIDF4uw5IhTXxwB39lcYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZC1Gbh1HLn9s9WxCrcA0m9ZRPgKPvwg84MDRDLjdnc4veunS%2BFOMRA24RMw9OzD9jmUHvWPtVD3n3kqh2eKn2wh8qUXM7sq89ySNWb%2BwqFhaA7k3B4Gnmkkv%2B82gaGw0rBQDBxW6Oeem9KXHKtR8i2u8%2F5pNvbUvexo4vf2VZLNr9moWjV5G8hNl8eX10vZV2XQ0gUxHbGcPgPYS0NvjSVNopQEAvlar%2FB%2Bk1wmhOxBeT0PoFFavNu%2F36VOvVATjT7TU5gCG4z5HVz%2FIf84Rqb8aDMFR01W3fsdU5VR0XeGJwVknenIXnPsfwB3IbEEx4%2F8cby6dcBI3NTFgd2UukAp0ZacAdnptPtJRNsHd5SEd1esLL8SNVkyHrYfgtH2HqzeYq21RetVD2WJ2js0HiC9JzXGZPTSf0P5dEhooloE8ZHrBsQ02pl9ncNOPKR96SxOxIGF93EQgZQj1ZguhKQpUt6mVkQbyrV7ex7gFYm%2FYcqVRm%2FmODjgHlekbO6XrgT7Ih6%2BuZ3t3leMnXf2n9wZ3lfd0UUWo6ZeoU2n0Os8T0FdH6vdyE062DHqbOQ6C7vHu%2Fo0PMqfy6M4%2FMn1cay2LUCFlSty0bX6YBdcP3r5nhLvMKQM6dv0jisAsTz46f2SE8MMdGNxELaMLuh0MQGOqUBuOd4w15Me6DC6j5TS1mBoMd1Yzna3MgtVQahJa%2FwK5xf%2B%2B2ovNsxTqZKKSyr3yn%2Bu6W6FZAJmDaXM8Zm0%2FzEcjdcqcps74OlM8QtooYYq%2FRbZEYWdXGT6ml1n%2F%2FRT1KBCG56SrZSYkUWKPIfPoHnx5OegRwI4QPs1FJ2IMJ2TIOT%2FvH7%2BuzkhlmJNcjzHrV33M8ayETKqeOOELCTEraECs3RqUFM&X-Amz-Signature=7b8ce433318d9b25a771f628a578cb3d37370d0e6d4110ff12be4863690607e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=a4a5879bd3c1973883a9e6ae9dd8a304caec22f852f02f038190c681716b29da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=d47b93f34dec157e528f91527c34fd2bc94afb0f3fd596e2544f898b97d21348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=e8bd7dd528dd091a6a9fb501e28bc74b0af75d50f1b51dedf415b61d910a4391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=627999c8cbfc904d24b924c4911398bbcccf947d75c37048d65a69d87c2927e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=421339718f697fc2560c2816d6f1d404bbd86cdb73abd4a49edc3ed34cfabb4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CATXR6D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDYDFoFUsL7Kqt%2BeDDmMiKgUqGz6%2BBgJmKrLaDAB3PWuAiEA0zwNM5z5vQUEk1T2vv17IfIMBXXhrAVUaNUcDA7k2cMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvGQYqao8L5k5EKXSrcA1iC0qFMe%2Biu%2BvQ9jvcG%2FmDk1vo%2FpBn1zDzn4BJ949a5zqux7UUcXNh5DZj%2FWCqiApkvTOi3UubFRzPjcCTatu7is8l2bpGevw1OWgwALegCdgBJcmGGMsCLss56Q4Kv0qLJh69YKKPjzh2ZTtxCXvvG%2BBHkpfZtVi1dzKovd4XUBpYAxDzv6jWDQM%2BbWqjijTrTwQ1QTLCJQrfPvK0i2EqQT6a25%2FhwpALENpwlfqKQaIUdvIDUlOybJhkXEKO%2FuG%2Fn11MeNB6mL%2FM3Y4YT1dMUi5a4sWHPI1QEKQdjXMwiHqQZUcMoYewZmirnEIOEmkkrNn6q%2Bbo6%2Bkk9yVTLO7WILxfAyKcPE%2FSs43z9pW7QGWruNReyn1yHVDN6YdL%2BfxU%2BVpb4rTa40l1p73sEfr%2B68fQp8Y5Yb%2BRv%2BmTbgwO%2Fy8qEUTsAn7%2BuSv7HCE62Ajl%2FnCRCBG4oOPzDaNslhruFDDJF6pYe6T5AHIfm8%2FuWiJrYBHbTkqAUIKN%2Fvk9yqYCavY58qm3Dt80%2Fob47a3RRnYTEr1AJvUM%2FTFH13SPz58sNEvirCXWIEXGMuPO2F3HjVwUgO4I2nAjWaYwbbLaDhvdgJac8wuYHzRDPPJuOunn1N3%2BTDb9bCD01MMCi0MQGOqUBwx8%2FGzFxfhtVZth4j4jFN1ZtPTAvvdg2LWc5Gbl2i%2BrC5yP9rjmbQH3PCtAM0Ujr0PMNpqXF%2BMprvhkJjqIhKo99Jx0QG1gNEyd1HeYtAIjLSfiUwwlV34PTakZV1sws%2FjLxXuwM2LjG2ouBsoWOAxKqZ9i2xjUNZCRRkOsUHWuojN0cpNND68Vc%2BtAmDMqMhMrFC%2BH7GGEqfHOHKDbuEZMA6O9V&X-Amz-Signature=d20ab1e17293e965067db3bb96b31f009d8760c623f804e97f79558ebddd9a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
