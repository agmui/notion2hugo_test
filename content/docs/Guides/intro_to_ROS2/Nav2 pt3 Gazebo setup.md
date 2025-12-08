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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=f46367c3c67cb1c18e26881521dc6c89bfb68b0f956b33e3a1062b0991d520ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=d28055a8e21241f860e625e3016658f5b350367b785b75ff19d06419503dccef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=e7ae95d1e10e45bc28751f33137ea570fc7259c3e38c9f6ce076f4fa6501fbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=c1be291bb834bc9c9b270dc2fb30259d5d2923d00bbe51ab4da36b9798750fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMVIVXW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkOo8Azx8wuMdeSfWYkbup%2F6zQUswPYnTXI%2FMZVFXQiQIgLX67Rz%2F1frOpXmtoryTCQnPK8SrpXmedf%2F40AJEMa0YqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmoPOK3oambgxEt0yrcAzj01UtSuTmmhZ0jBrcEZsvgZMgyT5FJcCR4Wcw6P%2FAWtOnGpWgQvTuemz62aLMo34UJFZ1LWHw5YkDchsQhx9PxYsgsj6ntohrBTqPz7%2BlKhNCJpRgjHykmZTqxGXbrmBzcF4%2BqQj32KmCwmluJsJIQWv%2BnaWA1CnDcz0OhHzMSMiNilrx%2Fy3%2Bdu72cqI0iQukA36f6AfatP2d%2B5YW6QOahemOxP3J09j7yc6lLyELP8K5yxSAHKAEy4waqP78cu770wz4iBSQdx4eY6MdIFsSX54eVg2wDFvFERQ%2ByKg8RRgEs949TM6g10exJJuQ1U68M4HexDb6ENusMfWcXOCwo289N%2F7VVVE7PAQYlx%2FKfyfVK8dpopEyyZxDMaUnEV3cF9LYZWAqIpTY8RxLg0SBBbjU%2Bc0tXIb9G1csKMtDDEL%2BQsDdPL9eaKkc740wTuxHAgTZv4wbQGCaeb%2FQzhyZ55YsSeeWuJ4OXKuedr4RR5HG8JVTpMmBnbO8%2FdiAotiMheg5a2bORCnD8RRpraFPBa5iKyGkNr%2BOi%2F67Am29c48ypKVg%2BZAR9p1kmnXEihvyGvGphn2ILJEJu3e03s0mHTdc1ojg43ZYNuJOiY9i0VLOcIa8ocBuMTGeKMPPQ2MkGOqUBCJC%2BTeUsm8Tt44l7G8KlBw4XrJV5CDiUu4cAT%2FBphAp35aY7HsVgPQUeAMXMMQ3VPtMFxdtz2XLefK17leymskEUwM1ROM8juPsgyH6W9XOMTZBto%2BmjuQfpnOXlIKjFD53KbZNzGEO9BAbPZPEUZpe5V2QZu4oTaA9y8wJZK9MvsMq0YNVpOXRnMo3XVIuk5RjKRq6zhMKoBIDpxzpB9pMCEi6L&X-Amz-Signature=f48b92027c4cffe71e2152259539985679be0085420fddf20358d17b3a0bedbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=e95f751fb285010ea0ec147f2c767dd10ea68dd79227e496fa1455c43b068431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=2c32325d25559bb9757232637b1239789467fd8896eb112840d7d939cb74cc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=8eb43b541442b01c2ad6cf0d5613cdf35f73c408f42014795964989b573afa95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=6f934d752d8ff283b7ca4b8e695daf3a355c36ba0071048ef36d4461ae0e7121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=21a5ce9bd158a1407900c00577be204b4d4351db84fb47022c9a182ea577ad7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FN3BTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIDY6mmga6Is4QxypDHG8Y5l5J4VWp8fIXvQRLFY7bjAiEA5mMAfs5epJEFNsJIhH7bfzjeqZYN%2BEBTUpwA9ghgUnUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5zVXqDhRrGJnmzGyrcA6XkO%2FwUzIpLMJ3C4Ad%2FZ3YcUYdD7%2Fq3omG0jw9ZDNVHQ0WayRtLgSqvTEUhKLsImSbtMmb9ofjo3Vmd5YtenUSr6E8JRY57ljTXQTJkaM42uHvzj7F0V3H%2F2BSpWug5dLA9qSSBLtPgGh4F2h9aqw1XuFqq%2F2wMWHjALyRondnt8hXyvcZ6NTqf3qQZrzVbjyzCmHSWgUG1z%2FttpCA%2B1G6FWjIwqvfOgIaEG759iecPXEiRKm7Hwuty2i%2FsZPks2XyWz9txAMBAlmMBalH5EsX%2FdV17zLrRuZkE4VcVQEe0PBNdYBwmQUygBwMPULCruQb9lHjd82KEgb4FKyl5jTfKG%2BF8RFdKFnoJQt0gNtnF%2FTrqNI%2F2%2F59XdscLZ4I2nTUzBbU3K%2B8kUnWj8vREBWgSU0QuVuBcE9d9AkHtQKD7YgEW6UQkNiWIKWbgSUsY9nAO2VM3GyvCL4mVP2xVoMez9ikk0%2FtgafRhJZjCBY5NOMGXOrR0Bv94NsIMLuC1EqHjlXfomXArRmOyDQJ9kUQQmJXBX91EINUVvEUoVrLH%2BWRMDBftp7CsqtLnvkLTfclgqx9NF1trxTjtNP5fXlZr1C7wZk5WosvCEnpbLmaKSSNOV2gK6ptGQuV6MMjR2MkGOqUBEsFaa0TXL8y1mSdDoQ1qmhVo690mQsW03ciAVHxRiWlx%2FgNQqJ83RIKP7Bsac2Ugh3bT38ZDC7trdfUQ%2FmBNis0WnzERSMfDH%2F%2FuyVrWhHKl6oR6To%2FeVZa869LIZZoU%2FYOXho%2FY8q3d69%2F9s6bQQ9RX%2F%2BMjEPVN16EThAjiY49W3WjwC7gz%2BJungCnYxCUamandUq4Zxdv7qXKSesRhaOYwNyn7&X-Amz-Signature=ee2a651d4795d6350125a97a11e8ac8835e3687dc311d9604e7b57009295c0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


