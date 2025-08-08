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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=9c270029842fe85be21314d19b13e15a9fc8c212a444f6462f5419d01a38f91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=2e928a18270e3e4ba2d01bd74468cc30de0482764a04fe3e19fda69ba9fa017f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=7f1a5f6f73168f5254e6f5dbf76f7848f3a4a0f55e52a2d82f69537b15e22efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=e756d7f84b5c98bfdf11a91c4b6cfc66fcecea0958e0a7ef25baec2f9a53299b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEVLDR5R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCKRczm1yu3MAbUKgK%2Bwef%2FHEOryCVjdEVfvTGcVEZnxAIhAN3c63yidttiNvZlJikOyHnIqqEaleKx3HyP2dC30fo7KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLk0hM3Bl28WSX2hYq3ANlzdycyxYoHTJ1kf3WVkJpRGlyJFyK6LflcOwZPZpYSQtyaYBcgSFDvXoKOtL%2F1nGQwWmK4PDJvhLI0%2Bb%2FAmSQMxj2yFawkaAGiG%2BW%2BE43eI953g9sqmEgNT5vNPdfHo4vZSfOU0Ztuk4dqtYn7seE%2FBOdX8jNRt%2Fo9b5O2VXHfCd9ntlZr7yWKbOG51x8lEP6oroSUjVTt0QK5lZjPMTjKZD67Cwo6tIjEq7jsM5511TWgW8E4eJN%2BuLAj4grmI3CI9VftQ%2BgwzSiaLTc7%2Fixll%2B7NQCN6ghfEKaw6aO%2F%2B6UFKoYiiDGfVaH3AShiHJlhgg%2FvgeRPN30AC%2FxbU3rgOY3PR%2F8P0%2BglSrapLhsfQBg%2FfOjGzpOvVBMjUwshHg5sHsmmKhYIjOJMDxJYj%2Fp%2FSIF%2BA4RA3ESeLHmeaqWtYvteDN1e%2B6YodSN%2BBMlmoN%2BMOkKiioXfXI1NvxMG0%2Bckkr%2BRWNLnsxWmkucQIec%2F0t%2BKZwnXdhTx1VsOf3UxVGuY3RNVYK7lPT1yTALuxS%2BbhZ4CPwdukC%2BfNFzOMNVikjHDPRjOibu2FrOQWUqZaFO%2BISMAe6R0VggQ7yAB1t45TwaYLLair4t54lgWdIPgK4V464KgZQPKuN%2F06TC2%2B9XEBjqkAe4%2FlQTTVGd%2FsWHVqWi2cg7fTIpyhFzYOOWGjFMiaJF%2Ffb92BhjQs4IbXtPxO86hPowDgtQa0jY2xar2vH95SzKelkfmUO1dIeipphK5Zk%2FKGbNgLhNhZL%2B7wWiM9rslr83dR%2B7toRNog2Noy3MJExp1jJOjXtqyk0l9Il1cudqYa%2FdCd32xCEcCF51W9YQDTRk0lRr9cLwLt4XW9mAx1CUfbtUm&X-Amz-Signature=ee2ee1c4e2bec2919721d551c17c4dcb971d6afc28315fa958039633527bc45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=c63f58b927a9e68c5e65e526b4cc611d0a57ec6bb481e5c60e607c50a7ce6597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=d37904a04f32023d01613ead566e5cfac1f1a9478c9886c646a6571c8d126c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=dea941792204b53f37b792087206179528e46d404bcac0af3365135e0e845922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=54638416174c35bf1a8480c700788e4afcbe6126530a8fc3abc7b4cfa9daad89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=e5252279ebbfbbf62c3663b2ae45819a4f2c8f08b80ed01e5ced6f232b178881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTBEJDE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWqghPQZ4exJt%2FfkggzRzjcLqzGnRSJ8yJ97ztLCkvbgIhAP7My5TN0dJJHIVSBoixUvI0AS2atBdyKSOZP4Y9PafUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVSbAcE%2F79IIzjG0kq3AMtvc7Mzu4J6jDXy%2B%2FL%2B%2FwkyoshuaZ2Dvm8Mqv2wngcUeW8ckI9kKLcvseT0NqX%2BULDJSh2hhizoBZG%2BX9IPE%2B%2FZq5m0NjuVIp1J5BOzZ07oupiFmrPFWMtBHN7tTDuO4Txu9WRxG%2F1bOh5nuXxZzTetxQMY3IbWXzmHPIX%2FnuZ9sxzqM39kpeMh1lF2cyc7Z0aBoVeTONEC3Hhxi7nvTeF2H6R9pgqyrdQYFpX9e0RYdQ%2FoIPiVGJ5v3lh%2FMjRJqoBvaP8PJTZSDIzx%2BvJcZw1orvs12wlAmqhHQnqL%2F%2FYxhnhJmEouY2Mdn5qxLDDKHhHgUkflPEgKjRiOcRD0Ox4y71AYuhJi0Kx4KvB0SH5CYsHRFgGc%2BHqt6EX4bAy1yVEBrVidV%2FbowjUce4iYlYvsu4Y%2FlTCdBz1Hb09gJvZIoqLOMMhL5VIihbvelCmfLEiE3mnzJGM4KZgzJQKYbKl4WyzNCJqMaiV9r4NoCwSJEInNM8PZadtxSVHoQ0DLi01ROI4SdF%2F06qkfRR5pbrOrbo9LcD7%2FpQBJsUwac0MS4XcO3EUDbxYOdsprQS%2FebE25vNYCwNPY%2BuT5QgZUWM262oPJc9XxdbTr6mBDRvc2uPo9V99mHWiUQE%2FbDCZ%2B9XEBjqkAdFBpjMrQEt46AIDJO6O5b3ja8jGyHgT3ccAgXacL0VkwiBLhhhlnnoPiB8dBdKLWKxJO%2Boob3NYP1lkR%2FZLQQ1Mgo%2BmfkRnr7LwJysSuOyG%2FtBoqzqWSgpuSClT0afaeoHHVDUSQAygx3mllr1T5o5wqN%2FFaeFYxWGQ7FkoY9VvT8b8e9RyiSFslb%2BMjgUWKb5%2F9x3lVUFWJ4XGIpu4r4ydkkcG&X-Amz-Signature=d80016e200c25ee47d0aef894b50252240f8f5030e82ca65047dc625480defb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
