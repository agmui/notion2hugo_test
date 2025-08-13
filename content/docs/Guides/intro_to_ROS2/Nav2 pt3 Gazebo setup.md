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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=7d5ec2c8a81d20f2588034afaf69f1690b233257c91f3d19d5a7c721b2c1864d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=ccfa84849e1c72f66b489f874417745b1f5f41b978f3cef813644080a209dc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=79f90a202eb2a8d95575d85f69acb2d346f416dc6307bbbb290e7ca292484716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=a308c396f7a22b119fa7503778c7f96ca9fccca1c44fe3b90431e577c5bb9b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CT5CPWR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTclaxhLonf6Mf28clu%2BDFEuLn9I3qtWt4UJug7XPBsAiEAgHGnz0Y1IeVbBnferfo%2BFuL855qGRbOy5af94YWJzcsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFugb22J3Kl7OnPkSyrcA7Wds2TuqOTUqpyIcbtsJ9WgVbccpZs%2Fs8JZ9Vdbh5LL6LufjJiSObCx2rDegMJFMrz3zjrJMniXEFRCgbKtLdLkQa8MJih3o9HtKtz5%2BQG9d2YxAyiXTHp0LfrmMiy0knOrKybI1%2BvIMC3a3yGLOxEiFubjBtAdB2j2dkfagsBeCD%2BI301DpdSRAQmtkcSzrNd%2BWVJCNphk4r8hwrWLNXY%2Bq%2Fw50VhiDnrgOG6WXDXglq7PAbS5j3Rx%2BKqG8wiFr7TMwAM6m50w042uTnBVzphZJGVx3%2FvENeZ5Lk%2BPBPJapv5l%2BZo5lCtoIsl2sZ34bJL9GVvV7tXF89Zb0T50ZJdUpyjLpH%2B%2BusvE0cYtyQBxb9hIRtcX0m9fcopjvuH2MRw%2BsOW5PidAp7OzmTwAKiYJVoZBq8HI%2FeVDIHGzjKxorYQC3pVD4oXojVDC26bjlZKUvLZ%2B9sZZnvRcQj%2FayfVhQG0RTs7zAHIBJI6meIlOosBoZ%2BN4%2FWzO4Yjz8U1wU0WUQbHFqSWlM%2B%2BO09wjh38ue8w%2FPIbHzAYdWShO2GbwDesy3ukueedgsjR%2BBVdO9cqzllE1WlHGhaj%2FQCxWJuuzMVfEL81IZxlsFmvCTKLspioWRdClZ1bQRxaMMIbH8cQGOqUBy4CsdxiDju%2FronDsg%2FtaW6dDBSfMRuK9uAULElrjOcbzH9xT6k%2BznT1uhxjmeUVPZAlYXr0KkaXAyRLoHEoyguY8AP%2BZInX%2FEx501DDVYDFNW4a6RGPozmhtAl9sl%2Fy9MIuTNawlHxB5SjpeInMC724SnuQguw2yFQighNqmTzUwsE8TKLp6rx89E0D1hE8hUUAbJAXhMgLGAhd%2FnDvhE23o6Kh1&X-Amz-Signature=70228111c73d12319f71c185d28727f7010e37ff03162af57040b0255cf6c6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=5a6077913b4454a5de18d7dcf8e0722e8b1cb3e0f0d1a7b6109f4cfa3d5772d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=1e5cfe49c30723de824f126c9ef792eeeb219c881ec0eae09099623c9d25f52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=86b5602435b20463992a2c06b8ffa8d715f5354948c6cb1d9c5c19d0fa13ad78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=8ba74a95e2388a525127e9f634990c43d45f1bdb60a9ded152356e59ceb2d099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=cae54d8da397db61bf2a894fa272f728fabcc21e6614e10e15dae867aaa74daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHABD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1YjGu5mP%2BNConYg76VGFa7S%2BsZuroRbc%2B2bItt9ysAIhAPlsi73A3tbk59PwEjId2Se9dDUl%2BdII%2Fp9wlaGJKVwEKv8DCCsQABoMNjM3NDIzMTgzODA1Igw52XfLd4db7iUxsysq3APqvt2rBp6Z9Gnlpg5Kenk4R8SRz%2BhudEHCCbR5x6BnI88ZFyZWDq3aI7YBFrINhV6VmCUG%2BGpcxhXhesBce6jvEUDjFaxRP0TXO%2FIVTP%2FhvA6FaApvNZYy2d9Urk73uth%2Fv6HrniyJW1eWncSehECF1Po8CFH3rLWHtu3jfTa5Td9cB6iJ%2FWLBSH4y3DcKS64DgLFlu2EjDlcJB8R1%2B07EwEuS7q9GwJFUjIBcbqRL3pU7gQsnXk3ZxmV5EOYZcuSE8xI08k6dPOeYRIEehB8ow2F3sz9S53pmGZLYzsHtRMFZX6FBIhA6H8UwGfRwnAgdADAmGPx51LUpyBRKCUTt9Xe4hXddR%2Fwb1IM8FGwmpVZcFaGr1jpRfYuE%2B71eg%2BJv5clMbOSYKT9DZ%2FJ4UJN5CRezQBZ%2B9RuRIqxo5Jf3Kw%2BT%2F5hnDidKjH1AJKtn2t0IazuYO7bTfFFR87ckf7EdpqQ0hbjwFWuruvuZ5vjyPjWEqeakWWxQlADll4%2FGrS7N5zbDfN%2FcPuyy7vKe3lCmOLcKzLFZ9TwcJF7oNGolkiBVcVSmi1Fctf%2FgLNpX%2FszGJzk6jMOq%2BYkJrU2UvUCxXBA222zxqReN2MwXtqfOw3QIJ6agmpZgMYhKIzDCxvHEBjqkAYN%2Bs%2BnWjgabFWXlqTeAAj1AsX78QVDJkSwVHEiLzlroCoHzDU8kwLNWzocsKDrhz3mcsHvZaTKhE0W3HOMFZFD4hTMSMsBamDKbTY%2FjP%2BDt99dXZXhKlB%2FL%2FCfV7yL7%2Fa4sQBjyt4XRgyJrCxJKz%2FzhMNwMn3SZh0S0s1h4S1sSqB9j9%2FnCDzmoEEGnlG4ScZw8N8%2FWrXhLMy5miHRJYuM4cI8M&X-Amz-Signature=03a05b75280e72f9767794fb21c507c16617f4b2500ad8c146b9f4e7bcd9913f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
