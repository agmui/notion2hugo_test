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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=7b5a4b44aa57ea7e8c4237efdc5a89a7b41b900226c85313a6dcb1fc2bfed689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=10bf67b4c5eeb66ece4b54aaaaa3be0bc9c37e6a89f0e4d164bf178610c0b0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=7a4ddeb54d5b8f7f4adf569282d1d4ba7d2dd2ac90aedc9b9adb68b913dc104b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=c68effe3cc9f5ff9099eb4f61d0ef183a014bb0acaca27d01f2bb69ef2851d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUKB7XY%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDoKdCN3cU%2Bh82w4OfvW3H3uLvhmfobnCi3XG8lX%2BbsYwIgVXZ3JuTdGcdR%2FoZ6Sp%2B%2ByKXnbuCmduFLv72Q3Va6tsEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFw2Zu8Z%2Fe8bHhXYSrcA%2BHiZJK0o6f7vA8GKfSPOe%2FYUThzkH7kD9%2B69VRT8PROxYwsWPjUqdfSs6Gc5%2F2Z9468qVfmru1pSS1q9mUezTl0rEHVb7nlUlLVcqAGxXc1TCGJ7GKZuzXzw%2F2VyF9IgnhxRMJ4koDYjGuhOBGpD2MFN7C7R%2BizTgyM1Cu2BPAiwckRwcfkFNoG5VdC8E4%2Fp0E4q%2BPljNN92X8fv9zZF9HRj%2Bw1wWGratrVDnNI36fm13tNV8CgnH5pokNuVhaCzaK9157V83tqHf%2F3oi7sObiTUQXfES1USnJQaAVGGQhEBPOzE7e42lt%2BQzaQuaweEPb6ZP1gjL%2FAYu9VKJkmMKwERsmWmq4Ig3N29z4ZnA3O3G2mgjAXVVK1fynhP7RidXKXZ1XS56zr5kNwqYzJoAaC0rACNwqpM8Qo0JpFS%2Fsps8H8LUJfXSZYJOiRl%2FCUvXPgoKa8rbylCRXyAo0ym2uv1M0gkTIA0V8ckr3t36wPRa1wjL6FY%2FPzPbfgF0DffZPMeSd0K8y%2FbbaH21nkya%2FbsUoNGU1W8AUjQRoowNY0sB6pRrxrLkIBXDY2fl47fFpe0o6zlYBPmDvrqQuMiGkXLqGoZjQoCeEnnV%2BwmM562EM4GxB%2Buja09sRUMM6Tv8wGOqUB98RN05JtW3M2EyoFXcq%2BVa9zi4wS5G25ZiapUwW%2FJ6bm8FOCsll3FWnDprRlZLf2iUmeA6eEn4JjhlydGQ6j6vFjkeOGqERscXEY9gqGi6wgeeHtJS4lubXb%2F8TINldf837iXvyXKbKaIZ%2FAhio%2B%2BM5yI3NKrClCsNqvJJa2oJaST4NwQCNcvijwK2c4EE2qz%2F6ojOXeycSN9jkGuICrPzvF2gbS&X-Amz-Signature=9d34fed6314aa01bdee8139a5cc9a6b31a986d3de870a7a2cc0881cb7309844a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=cbfd04d26dc5df99d31f952d691506375adb595c6d183a9d68de9031e5aabbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=ed5e52219c6ba9b4fb158288cb305870430e138f93ffff0f863dec6b70fc789c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=97331fe434851acaef6ce07e8c53a40908ca13677c191ee5d06c2587855c9970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=4c5539eaf0d6ccdafc9b58bb761a4f052701232c0915e9dda8ab544fb2dc0f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=50e1cb8e88de5642fb99998cc83b66388152e6357b3f7c4e14d7f508debbb5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHWOJP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCR5wFcn5JcXClmA6b3vJ9Bzlwji4nEDd11UjnOP3EqmQIgKuZu5v5m8A7UxyJG4wGLL%2Fk0BjVaYbPtxO%2FsknZiLUkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXL9jC5Aqueg2jTNCrcAwfY2bGZgAvO09IutaGR9e9EolVvAAkyKqzi5CWJ1huVqV4euGCZaDMEDZQtD09e6osDTq8tiFYj6V%2FiPXlnCBqJmCJXhmlNQKYTjTI%2B52ZxaTVdSsQkJLiQpInsGCld56oGV4ynfRS6dB2td%2BIsjxb1GLgEOAb2Mei2VmtC6fxoscKt904Os%2FNG%2BTa%2Blteyo5C0cmqdoqQymbtVn6JI7mGd52D57Z63AVv8jiOSWCk1g3xCiFngcusiQU3iZyJJuZRnGGUxfUF59mxKPBMSV6A1IU0g5pcXBnX8itlkilZziV6KykJTNMcTo%2F%2F0Rn%2F05DwbVZYw1ncNeW%2F%2F4fc%2BYEP%2BUfU3cq2lSrrEwYyaeSZ%2BjF0J339asbdroyiJ3TvrIZTMmedObqLCW2dYwwKniwvB3iid%2Bvi9vH2XWHum7vBbwOnE4b9P97FCXejfrP99hArjGUprLB3z4HfWx1TmYbI58cC45%2FqoMDFMmXJwQdaHiKeYbEWh3xnYYdG8FSxSIYoNhyHx%2BPmOTY1mvjczRuLhe1MOucjBkhDg9iFGrV%2F3PW0J4nRz6dOFSoQMQetOQAb5s0gUvPPoG7EtbcPf%2FtC4tl4oehFcrx1OAU7wCn%2FQKfNkIjQvvmSt5GA2MJ2Tv8wGOqUBb0P54AA1%2F86Ts8boc3uAksOf0OnLUax35BkJkAxzOsYYs9Jo%2Fcfs2ksC5AMwv%2FmZWCTt1rR0kzHRctH6dy1gESmP5tW3MxGoB4DdiDWJdPXQCuCsFpdpXujBomxZ7wR1EGcUEULDJFt1bAaOdUN%2BulCZppYIWRos2pXuvNq4YBvfV5HYGFULdOj9cEcGRjAxR91tpb%2Ba53OfgC12ERC05NdaDIo0&X-Amz-Signature=12135fdfb139d5a24e497f636aa96ef7a243ee36e74daad64d1268f0569cffbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


