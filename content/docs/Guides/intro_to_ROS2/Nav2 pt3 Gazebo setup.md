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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=25515fd6bcacaab43bb370a4728893ec8086afb749734dfadc50cb80efdca6ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=a3a6b1ae28e5aa124b248a2791495f91d2ed4757f770b809187f1d31e5978daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=8cbabb4f3f48600790907cc8f50a700c12b271cdf7f12af6ed74b91ee0dc5e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=97c6195c96b01cabc69cb1f92341542256b88908cf8e5ef2c1d5c2482de71261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3VKXLZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUdtHecZNG4v8OgIg59tu3keNjlibXlzMIko%2Bs%2FiVgkAiBefP5oXUetRXKsa3slR%2F94bqsmpG%2Bf39yv4%2BDDtdBOACr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMeAcMz7HWDvBJqKBwKtwDJ11YCYPInJMrl8dNj2nyw6VG0cWUZoiJflpkz54yyg7xdisgBwcP8yxdvbo3i9ObvtdpDrkVTFQGifrZTgro3waCGFsaraDaezemYWNJET3aAupMWHVlmZbCFmuUidJS2xHvrkDIH98lQ%2FDSwUjL%2BA8LegCa9Uxgr%2BsKHApU%2BUBGx%2FL5U0QixUD51WUhhR7e38njYW%2BGCii6o0HgecazpFUd%2BHDkRCwccXwgcjvmQ3V%2BBlYMW9zh3g%2Fs6tV2ehQM4AdzAlxqYAoHGaxjYphD8JCbEi1LMEdiavFCT7sIrFcL0QzW5Yg7JZkMvbqL4TiHRlyqe4WfQjO72rES2kSGAPCuuW0cnphMnKO%2FxY%2Bf3L022Viw%2Bbd5tL%2FQCQMPSNqkMaMAEDPljPGiKEuDZGWO27btNr5faGQZ1OUAJ%2BY6IaczdnY1b%2F6SIy1m7WgelNvWxrU6tjQcGKY0q%2Bhx57Sf9qFaMJ3SwETW6g6u0s5nObccg%2FJZCW7J66iBB3fzi2%2B30wfjfYaRsQWsVPooo8CvX06BFepkYqYGmCLPomVJJNhZVsblxV1iT1Ad4QP%2BblB6%2Foi2ZufrmPpaw2sJHpbhhTeQiqwEMyLJpFNHUTAyk5Z%2B6j2yTgHoSU6lk5owz565xAY6pgG1q2qMVm6HoK8dyn%2FDCIjG%2BzoFR0TT2ajf%2FNevpfqW3s6NzhhCa9TIJ947iZVrc8lLn8x3C%2FjOiC4YYXzmMwyzd%2F5BnQ3PRdyJ7STnZugkLO0EjLVKQ3hrQbz1kDnjcvfbo7WX6aoMbikhY1%2FRKs4wp2n69PcPiJlKSy8uPzHHCKOLNAfmz1QpcpnpiEVC6LQ8tDBlu825qHHBAeK%2BKScHYNI1f%2Br8&X-Amz-Signature=0bf7cc08e586bc0a8b954c328bfa96ce6eca526b16d6c0d1950e4cbf69793e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=d8b2d3b66ee7b86dfa48c6e6f809fbfec3f4bddfb417551671b52940f2a43277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=df25738326190b95a3ee5789cd3d3d754c1ffd96dc1c2b74eabca4c73f840bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=bd6c4893c7d618e84cdff7d6062d6e34b699fc60034fa2113d2c063e10175167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=a33e33437762994885dc565b2f01bab15410c9124f766826c25dad9743e935b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=49242e86d5e598f12b86332dce47d34e7b198fc1a4c404bc5c6b8fe4fa1ed96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFML3WU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiKSMopE4vyTKVTlMaBheyLPko8QEIrR%2BaVS7ByHSfqwIhALtcT4a90QqvGvxak1f%2FgqZ9Ws0%2B4rD%2Fmf1G9KGdVYDkKv8DCBsQABoMNjM3NDIzMTgzODA1IgyXZqi5G5Uc7a13k%2F0q3AOuQA9FuqVzKvBYN4k3NpYdNjPwEKrhaPX5PDEkmOGQKZ6p0HXw5ojvdUVccf0rCWePVZ7PudbybMRK3nBS3ywh0%2F8%2BJNDGNPN8ws55M69hnrFkPeCFTpigvqf64Z5VjGaSKdVyfTXWFnO%2FescFFwSGLpAL3YN2u1CfRcOgb2g39K9BQpmYkzU7VhuRL0BTh2C9tJe35o4ElJ90OJY3X0HSc3414HDc5Wvg4ta7nh%2FlbUcQdl5AWYxevBloA9lq8Au%2B8zqeVljOSwxYBCIEZU3ybOmX391ixHhJkDpZMejxH0xLa5UbmKY6WHVgHT8CN9ADCGyStaJnJjszlh7AdFe8TWPlHzEKMoe5hsSmBPx9CFX%2F%2B1%2B8blGzzZLK5oSHcbTT5VXCw3FI4fya%2FLhT5TP0d%2BWQS8EHB7bwYVkXmCu7hy996fXd25VPOL4d%2BUNjjLDyEcEUBJbL7k4AU%2F9qdegmbA2sFRGdeEBDUUfVIU2b8xtluQkNMOJ5I8dVYLLuksK0bEdGj8IbeG3WVg4Gt9lHbEKIT2%2BeMk4B2ZT67M8RgZHcoa4mH%2FAitXxjZoepro%2F71oDPl12gEv9UwwB4TjpFp3ut4VHIjGg9oaaNvOOwW8zfZ59as6UuFTngGDDBnrnEBjqkAe4cHRY5Vlpq%2B01gGQQIaOvjROiQA0R6lPzvtdPgW86XrEeUOrf2TFwrRkJQlkHgYK8rhxH17H9X2E4WnEF3S1AWimaXK9YrK2JtIAlFVgEsX5x5tVyWj74oyD0RFMr9MEfoba1RENZOGDYaQSXvwPaKVK%2Fh3lb3TqJquUMPIcjxAXZnqpHQgMyZburYrDue0%2FYU5USp188aV%2F4cGw1pF9zXi5tZ&X-Amz-Signature=70491a521d147db00062067c3de924c767d68add38990e0bd7fbb54328adae64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
