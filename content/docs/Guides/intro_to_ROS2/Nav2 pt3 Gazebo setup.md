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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=afeb75242657c3bf14d665c5e709ba1d67d8d9e29a498a54ba538f57105c9be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=e6a42b148d615602696f19f21b9aaa8f956ed499ca7826ef2ffd3b1126546e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=54ddce4cd3aafbdaf99f9807c8fc52cad9f75ef813a0ae6ed2c50778dc01cfb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=e4ec633db06e8ba55c5ab0e543c96918a1196439466d4277fdf6658a75c22afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PVZBAON%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDiLyFxr2cvbMKe%2BtVULHeNgK8jTMyE7uT9kQqRWrgQegIhAIKndg%2F%2FB7A8YtrgngeVEGwU%2F%2Bdmc%2BqJVco7lfbyREh%2FKv8DCAEQABoMNjM3NDIzMTgzODA1Igx%2F85imlEBhull%2BGfoq3AOInjGhDOUpX2M88lxbdXYr45ebkPeg87Wbtj9M1nhjpryKUAPKHihl2t%2BDhTheTvpcMuKTw1mV0p6WVW5gSMYtHHy570ot4EWfclKM5hyRaJ7snmfbuihlH7KpijAauP6j5aegxO%2BxsZcMgMTq3epYc2fu%2BzI8sxOt9LoDDSnqyYTFnATZ%2B3IMnuZ1W8ldDmspjbJaadeLBqMe0pOXzSOvhULVrWPPm4lNfNraNeoETPeTY4iMiy2Nux%2BylHCsXHBsc4ndZVnHIVkPrqNJG5jIYdwWFKH6wvUIs1aD0gd%2FzL2U2FLE9o80RuKzjQ1VN%2Bc71fAgY4GyxtOViLVoiiZg4XwVwkKE4Sq%2FYWgRQmvncsyDghmDm3HuoxetRPVcJM0KyQAEDnDV1riKtfqqmzGNp6yjoajhoTg%2Fj8Ea8WTL42WcytTkrpvCdR576j7I%2BNNDCP%2F9nqRtyyI6C7mCqiKWw8yEFZi6W1T2YSEjSvGQcuZr08BkDMRnQ%2FiNWp1%2B27xaLV4sWHWdHvp6EyArUra61uFNX6jEp6R84HjDI4g7m%2FjA3x7G8pd%2BtcoIgDsSixCKYApzULP9%2BTEK2YzOeGjD0oR8LMmOt9CLVDLuziA9%2BSBtNj62C8%2FhqWmzFjCwg%2FnMBjqkAafTK58lIQBmKhuD08ZKCTXWC99%2FkPwyZVTY66kuTBtsfP3WdTnbPLTQ4If2XSHYCMJ0VaY%2FFLhFnId17tGGQbO68ndzOLnl3EVAZgfNieuhMvO1Sro4OH2Y4d%2BnTB1gYUTq7cEBh7VNL8V1CYeEdSH7wwYHY%2Femi27ZVvn%2FI7MeGh6aSNXrNYs3e7X2KZc9IraYLHWuRcbCWAvbiFwjpDDhdNr2&X-Amz-Signature=c37411c65dc3e4570b8b1171a51aba525cffe77532a4d4c1b980a47fd8c9815d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=69a6336d8d1143b85f74715ad951dc3ff16cb523322a77f2935fdb53cdffbae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=38e8d910156e8bc02d5cab926dff1de5708097f0ac24339b60d184f3340b720d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=349102daabb1943bcdf3cb02e19b557783ec4a2fe63a8785139c9586fb2af349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=a2fa6f1dbfbea780d707fbef57c75b1ced57a9434d1cdb81572e1461c0b9a51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=f27fd16277a043128e6b66061aa92c380abca374a5f67ffd1a996365e62c223b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFVKZTZ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID1%2BhZcr7XE1E2PfqsOx6yxxZ5LmFfb2eh5iJ0lw9t%2FVAiA0vybF6b%2BzXpEAxy7kWbXaV6BnzqjzyZ%2B%2FCPsVk9ylEir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZ2uAwVWWcIz9gvjqKtwDYzT2TQAjAmRRGjYCf2%2Fpl0Rw%2Bh1h%2BcPqsY%2F%2BuZ8SS3QiuTFXskXYbLajXsA4z0eZrxFhYBfxLjU2layx410XbpXczsamMGL79Fe3dEi04Pg002inYXPbbouB3fbXOWSX1wHOO8FzjrmZ%2FAiS5RvR0qzKt1c0ueNEMKMNVcEW%2Fb0GxDmjH83csue4FU%2BPIs0gy%2BzIVUAgfbhljSuRPPyGmC9L0WMx0wA9dg0gA2c%2BvtJciWek6wUXkoTJLuACFrsa7O%2Bj90zsXOtRVMQ3H%2BuBWR0CV0m8%2FKg%2FLxTLE0ocMOJxXf2%2B%2F1dFS5ssMdfl1ZvbMcDHI2tKpslQMGQQ5ch7SpPujhFGWwGrPxpe8H914dmoWa%2B3jhEDKSVaGaH1K49nxK0EcIEMprBtje66qDNDaWY9ABdYIvUvPkHVdFxi2b9YlT173KHGbKnw5DRyYUDy1fBsVgcYeOrv%2F6dWq0xs2kZ1XnEyr58C37jX%2BSUkdAFXI7EKR04FUwPT8x4pdR7x%2BUOLY9Cv%2FYgWBjsGHf0ezftQGyZ3XhfSv8zhFrk2QZByxqBYoi%2BsOdsrzeFePyYoKpXwfzHguyKjKwKCw7Kc1d%2FGRbYYEedZZOD7Zl7n8Yh8kHio8cxp49qJnXwwu4P5zAY6pgFjfluqrKho4O4wvcT7fEnqB4U5eOs3l0W0TkPZIKyVvIE8FFDrVjWYJOHiFqUZKSw5R%2F5kG9vNfgR50rI%2Fka2PLYv%2B1gqLJA%2FGowsgjbhcD8tP9qgtmkkSf1w2SvRYk5cCmBd1oCwIhgIAOMOCgWLAYnnNxr3gjtWtYts%2FQ%2FAd3oTbAvH%2BJCUCghnPqxdTOwCf9dmpCUHz65HfvVcYru7Ei%2Bzz2gOc&X-Amz-Signature=0bbe09b173fb27b8ebd815bdc834563f544a7e2c88a51c8f3afd9b04b5701b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


