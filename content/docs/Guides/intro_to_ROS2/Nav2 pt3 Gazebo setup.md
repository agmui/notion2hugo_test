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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=0b56a9a83bffefcf4148a3cdb111b1fc795a432ec7941b78e83a908f78b6c09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=c6b836f3af0b7da692d2a459f206733c22acb6083d7e15f7479c9e2a773cb410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=867a09b9497f5604929d13639e56c1ddfc41a5df04333b0e3be85b743120b71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=0a43cdfa162987da8afc7e62cd9438e2514b67c0c958586b81200a6be1516d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3YPP5U%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BUuEWd5ICQaCpetXf%2FRfR8UF2ksgbRpUDz%2BEnoSjOgAIhAOGTlmsIzVKgSTyh7UJqzuqULhw739HtSrHAtpoUFPZzKv8DCEsQABoMNjM3NDIzMTgzODA1Igx5GpV%2FEWyZCHGiPDEq3APverADJHFD0Tup1c915mcyweavmjvZPvbkvq497K3oTrl6SYkqRuGq9HO0dWZy%2BFJvH%2BC0S0c%2BB6h7Maq6xeSu2MLd5yGdJ8Scbc8OqXIg0%2BUcvyCR0A4gro0ueWaKpxVe5IJmHIflxH2h9W4mcBX9VPLnVzsJ3bW8c4tOB57Y4pt%2B9sBaXJ83JTiOb%2F0EZeeElU6wUK5G7YuiOOdbE9CpipjZXHLkKit7%2BmV5OqOxwi2Pp9vWxIBAWRWLg%2F0FskV5D1q%2FV%2F%2FVXj%2F7gp5tudegvaiK37OA3C8tjCwuXdiBZ72m9TSo%2FSm7eqtXjE%2B%2Fkbx%2FfpLDYdZben3pe9BNnkUWT%2Fk%2BzWEGTq3FcPNULFnls6xU5avy4W13WJZaGMaXOl%2BGS4bW%2Bp%2FeDk0szxjnPVid%2FMTRm%2Fed0q7WBadizgOgfYJffnJAB%2FWXTIHxMShOUOyHw5ql9XVka84dVaS3e1kQeEE%2FEWOKMtz7vD6Zolj%2Fn1mPZIHElQJNqha%2BAjTHC107L3cVFL3Yexu5vrhRMPPpgWDtS5xDf1BlJ5tiyNyGGCAyFaQF4xsMppch3Q1hCJwkWWqxQGRI%2Bn7GlJVLGdDYgFQCg%2B%2BqbrNNsrrNypkAtdryFq5Ofq%2BDgRsOhTClsuDLBjqkAfj7vlvNP8Uor7o1bP5sGdRMn4d1zuXvLV4rhssp%2B3j1zP3V473aIXYEc9iRxEQ1ePbe%2F6dxrRYMdSpEGBSTyFCPBk4IsW0xtfCF%2BV9Ih7qeN981O4FpQCIVFoeMAWaDTL0nT%2BLaiTZIixRLL962SPIaKLG5uqoyVGHIgUKgZe8ZBv2VWFaNeGgLZQBaIaLkkg0p3OvD8ZeSawQ35OVetzZ8r88S&X-Amz-Signature=0979506bd94ef5b0595513299d01ea647b3653c576111d42a11594333f1fb1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=4a1c3df67296c01b56aee0daf968a0faf34e3b6f7f20c4369129eb560e766032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=b0f41bbcfd0ced2701565e7911e38cbccfc3a54be1000c792f6f1b48530ea505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=b87c17b40cf2309ff20c0eab9fe4a94e0fdabb29d2737232ffa324ef4724afcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=3f58f046754fdfd5159192ad74852e012ccaa088c22c10001ad12ddac53ab887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=3452d8dd75ec59aee306651b32dfa288be2905126ab9272d6cd10749e03dfd46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=537efd21c0163a34a86016b419c73b33e280ca021d8e468ea8d893c1ae215297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


