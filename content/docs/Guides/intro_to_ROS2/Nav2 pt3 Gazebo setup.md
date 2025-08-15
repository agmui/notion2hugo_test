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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=13e26b02d49ed996b81c9b4e00b241c80239e44d505edb709bc9e63c7ddae603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=e5544de16da4a06f1618430747e4d3487f67181bdad99ecd754b78c07f509d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=e423ab22205f189f95f8930bd524a4891507893840eb1cc900f4859dd8dae42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=40d93aa158808c3f2aaada362795c1c0c9b48e05c64692f2441b5be10309db63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MM4MYUT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHz37EACytl2inqZajkidlp3%2BQgmhC%2FPMSELiInV0CKIAiEA71cK2M9gYT%2BjQwK1L9cb6YdQcMl657bqdzfmC8y3r3wq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKGmAje7ejWdayDX4ircA8RDoGD10%2FABeBNcxtnRktPTIfbgcMs%2FLdZ0M4R45tuybLt8aeFk2W7HFwuO0k3My2MXaOOpMn2ynw9XSozxqMrSXlyhc5HUq0DmJJoTnvAy7QYrOiZ4tzsONA7v0fkVdGycOSCCxjzhNm66iGcOJcbI4g2ChZmUrLtNgTXorr3hMsaxG8hc5Uc%2B%2F16KXo2kv08sItnsbqQ7kOIFr5ebYceBGZq0w6OzTWAt8HXdQH0mokcw1y%2BpRQ4BIx36Z2b77njKdwyW3f25x%2B9lrDtbcq8DCTiNH8FaALyqLro44qWsMUGCcDpHOu2eGpeKy92nvwxmPuBIo4XmsbsviNYOmpC21NRWILv8VIvP1ricutkfSGY9p3Vb3I3tRXKa8L9V9Q7DQBV6qoyp27bxK2RfK0hFEnQh%2FCPjcpVql0YXNpGBeljgncvnH3FU5uRxJxaxi4wrW7TVjx%2Bt4p0j6cww8eaIPx7Vn2UWaFXVuVgT8d0f8hl6QbN3Xu0EEDBZqoOgJ25Guek0PC0h2C2LMCmZ86XIBj7mzDMn2k9j9N5sOqRb984Ib%2Bq%2BCyoDFK33fg%2BUK3ttIILc7TOfK%2FtHg06HHKLTOsfEcT0AD%2Bn8mtxETQHr7hg8McFp8mKfb3CSMJbY%2FsQGOqUBVVtP8CEK933q1%2FoxnStrdN15GGOONGPyMx2gf6QNL1Ygl8bbdsFiQw8DBJBhTpfW6IhS5dYY9lsJo2vd9PVfrbsMMPNx8ofKmcQ9ySn99ZTTaPeegTYx4ii%2BxNnWIAeH39ZPYTSapd0TFGzfPVYTQq91P02ziGf2sDeBZLKjH1H9925QlLHZ%2FmBCFFCDZl8wH8zU69RQU%2BRBkXtNLTICcKoM7KYV&X-Amz-Signature=7ce52dea8399baa6d493b31423100ae024f1e0aecfa1ec5af7d43dfb24a39960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=f70f51213bfde52c335215286b19425cf61f3976f3651f0ce0d29f732e32dd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=dfb00316138b1df9f3d8161e4be89b3c8e06b9720082141368a39833637bc0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=c597fad2bfcfdd6662f0897986fbfa417a199f509945dbbac4c9cab15344d4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=ded52e1a3a48e39689b6ef19b784f94d42a06ad66eb44ee9d3ab000ee346bb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=bc6c826910623dd087423a2b0a4701b8ad0def8c749658578e8c8a4c6c0321c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJMXZSM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICsrqqsua26K7Q6n92xGfi5UIXf0418PeqInaR6KzY43AiEAu7fAgzFq9qzvMxl1SmcMZSmV%2FUMYUZnw1lrDMq0Oqx0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMRyHhK9oS5i4OPA5ircA4xR%2BE5G603DLtgupYGmb3iu69LsLANwruP0U%2FZ1YL3sJhjC4nNpgj3wW2Tk6DYZgFmJgohXuRbcCX4Po1dOQnO5ARkZm4TzFF2rzqHPbFOOj1tzDKBu0ITgPh1tfSNMRPbWWkCMKxU%2BfrBiyqqcdZsTNS2JRGSAE49rCDJfoM5s%2BtF4SzSb%2BHSaoZgyeo5Fh9%2BG8MBEdzp%2FIo1CVG1JwE5Qkino2WRayJOE0sVV7oH15picPYPl%2Bb0VaTmNh88komf%2B9CLKSJa0oIfw4ump2R%2FJ25RJpK3PXG%2FFj0ryIfVtqfAh04l6EK9TYdEQ%2Bgvd%2FGWKu3M8sbum5E3AbzDyvVf7Etr4nMvJ%2BHFduzuLwv%2F4oJUGeq0dggedbSyKY9uerQhZR7nFQ3BbDTDbMEh6CxYGdSduyrPyo4NJIWQO6z9%2BXJYIxc5M0Bh%2Bdp2l3d%2Fj3p2OBog4qmVDeByFRn2YlDJskrpEw6Qy5A1Hv0kt8hnjwcVFna0BL62VFT1P1l%2FJ8zjIQ%2B6oWKt8XQQPRIkHMUs5x163c9OvuzYmbtnVChQNHmSzcxBzJLNbHFt2oZciyJ%2FMS%2F6RLvycqeKhZMQOIoO3cXP5fq4E7YYqfDS%2FAf0jFC%2BKA2bmHV%2BxmNx%2BMP3X%2FsQGOqUBJD1yo6z81sMEpbwT4fCHXKb5GdPl5mvi6ccxaxH9yjtFhsw7Cu%2FbDfcU5JOH9N5wDlJJ6Fe0d7zAIwjZXFkN4PsY8Tjbn5OCM0x4Eclxn7Na3ePz4aA2dMRjac76qhqjYihNmA5%2F48eNm0MkdfNHiwUdsLvZscIe4mxmq21ddHQ9QWkHEUX0SVcdFwOgnnqShQaaV2NV35s%2Bj%2FTdkGLELwa77vh0&X-Amz-Signature=4a42e82477b91cb44cba4d1551accd3ca932ac0d2faf7fefc45f4378628ec9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
