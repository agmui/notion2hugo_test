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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=f6a117980d27a049d585e5704c44cfd81f14942ce603f21fdb731265e261e2f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=70a017bbd26b692c2a7c1705f1caa3598e153cc78114e4164c03fe437dabb7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=0a108d4813225fc3122adf988607699cc52f8755a54091e39223282108f9837f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=75cd67649d48305ea16cbd0bea47effefd93c8fb8711c9a8db56ed35133a0b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNPEPGQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Bg%2BjuGKzAnS44qciowu%2FaOU%2BVjdHyz6dwe6pS8c1GAiB8ecNB4Jt7twHOnP9rg%2BLqKlFDcqKIfLZEQ3v1OK3NUir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMWOhW7KqBZGNdHfhkKtwDA%2FeSwr3rztLdvBIA0u1VSRbHHAqygOBTdIHdOGy%2FmiJdgXEvQb90hpRdstsp4cKIEgyEUR9wfgD1PbN1ADCnJQAw5J8iD%2BdpuGkk0a45dH1tz85FaFU9tq5MqIXvlZA9iJh2f71PdVkRc5mTYpn4UT9BqI77GHVwiGPHCvIz2xvCQWwUYapFgxYOFJY6cotuvTSwZKn0w4t3HbYEr9%2F5xJ5GxlhCf9UBXxpFjpBLzJ3N0%2FDv27qTHFnnO9B52PVnpA%2B%2BxPLhED6QDcxXUuhi1B4Gjd90LbDNz93z1WzwU4PKSdJqD5uIMqKXPJfQtgesPYnijI11PgDLZISPEKQEJXeKb%2BB2uUA9r5sfE6Rs7x048eCDYquu2Tk9gFPaTSHslPIk%2BcDRaU3jCKfmg4kO18isE%2BzTnYzpBNSGuWgfa9h42NY7zO2c46%2FdT1RWOr%2BXjZf0SHUWXiRDFs%2FrX4Fg5smamfwzJAAcKuTVO2bdix8tY%2BcKBzfkuXh1kk3ZavKI721Nxs%2BBAU9UMi6vq2%2FTbEA6SXq3%2BTg2GWjudbbjbgW8szj20e0dwJAcatxxtHdFRv8PWWgTAVU%2Fzm5b7%2BFxdjXDlGwvnpKOs0ailoF%2BNbn4Kynw85ju5r6sA2ww45K4xAY6pgGv2y2NceGWmRZOtOQM9XCaJTd9Y9YzZ7wArvn1Se7T61UJL%2FFYKMf7O1kbJweeaVySUOtI7u%2F6ZT4fjw3BDT1JvC188fLFv1xuVIWTzV2TjkxzGw%2FMpit3yfI%2FLpkNskB9jjGRR9QtdiSGgU7%2F3cnagxAHN3dmYYTp2q5R4VDYEtT4Rc4Suyk2nahd%2F%2FT0lZ4RW5gB1Mnb2ZMGZgRpwAkigShSpDGr&X-Amz-Signature=a3e1b3645b7d1fc79e9e57fb6cd7f7379cd89ba0b3a3e8445e36526a4dd45d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=dac105ede1195f197fcdbd1bf6be2b6837af64ec6ad6c39f4e35d941264a1ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=deb44b10d15e11c0a8dcaeb01c8ca071366ab68c51f10fd795a6b0f6fea6a194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=336b4ab7752ed152e93b97eba1a545efc2e3bb03abe20f4f8b9a08c4f8ebf523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=4932bb2ac92173d536dd21d0a8f43fb25375b87c3b00f4653e7769bc61dc283f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=1f8e7520d96a6270414d9407c864e0ffce1be2290cc185c248743c685ad17cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BPHQWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQ63DmdGfI2eqt7fbEfrPmyyQiDTLD1BxQaTwbyKBGgIgf6HWyFYTS92TeCmK6Ij7%2FCfyAuY94YRTpmDzuR7U7rYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKAsdH3%2FQ8uNBuh3TircAywuMG7DOXoNQDRdzgtlLXWM2vgr1agdM7ZvDKgzXyVdY60EXYEGC4QVYHtE3HJV58U6go1EiqlOX34o4h7I2brj7AvR4t6sj8%2BeaEaRSHXYoxs68rHNMPhMtB5E7GFa7gnTSYSYhZTAwGftFweQc76czsP7MTZua%2F01ry1waeuF45fB3bl7Ir7xsFVsG4GuyoHyDJNZKyyhks2bBbbB2lnLFnu%2F0s69wY4jxoy3aVOz3HCEw8vz2%2BM6IzH7PyvX819YGM0KIcwmp1%2BmD8p0B%2F7480KqTpgOSR8SsTqxTaeY9AzAfO173VtUsorJJLN6W0z0nwyUQEm5UZ2SswvIHNXXnLNJ7eJaTpAmKqmckKK3QLuHkk1lmiMqH%2Br9Jw1yCH28QBkxxbobh7MJZC%2BmhA1PiBRKc0Y85XMmv6DIqs36I1CBEkhO5fI4k%2Fes481%2FzUcZimSq85DnJF5NYymTBSEhgyXWJSkFJwiwK1Fcy%2F%2B1LvZZ9aHw3pGZ3Ki6Yq84FZ0H4iTRfP22WwC5TeqCpV9PwUZ%2FWXk8ZhfxFMXFq8kDe03Dr0hMMFG5MmUVRkWQ8iOwUEnl1U%2FojRhaNe%2FYunlc5bWXgVepv7WIncRSrPA6b7tLyYAbxC5xO56ZMN%2BUuMQGOqUBiLvSsODYS3px%2BlARA3CtxM4xVFASSyNK64VKyf1Uax0UEUT8wV%2BI9QmnHtjD8WKZrCKtj7FRJjYsVC8klUfWXYPQtoVCNvTB3wk8XbD64gpx0g%2FdEy3m9qLeXHI54I2d%2F%2B50pjEq6vJMv3vBSxsIfBO1WFV1BPLCHlCXHk4e7e%2BNZNwf1Kes6XmsWOZNfjSjJBQ%2Bh1y3VyWRNWLDzNAQazNIGAgj&X-Amz-Signature=f931791ad30d3c2412dba96d6a898d49e34331ceb22ff122c149d2a3b0c0a951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
