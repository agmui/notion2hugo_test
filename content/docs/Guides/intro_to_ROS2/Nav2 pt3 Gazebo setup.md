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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=34a82625bf3d31af63e394111c48df3abfa1b15c8c7a248c62bf140d44dfba47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=4d14d83c110e159f9f87108adea080acaa5645c06dd152e6cc61c73aab3b609a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=3c16536f5ed8d5d350f4c05fbdaa4dc953c4580dfa019c563925cb1761881678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=05ba99dcc049d6017a45b744da75ffa50130363eeb5abe0daa6cae9d9378c52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FPG5NON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHllQdMIN%2Bu7RXQj4G4kNK7YWjJ%2BwkJ42ALrX510TKQxAiEAhwME30rspMXcsNlZcVN8jXnJpYuko9IDGjcdUEqVQacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAphb3O22nq0%2Ffb00yrcA64vXBlt2Hfky%2FHPhksjBV14Y3DsEKdVTM8LuG4nJESEyWSfp1xEi0y3%2FMffKsDh444FW4Q0zqZ2qyn2xoGGTA3NbKKEF8rljCslt7syRH5YXozDHxrU23TUuRqfIVDWwgcdrC6gj8yAgIKkTrRczGEKovRg65p9wslG5T2rnvKyOqbmhL%2BdMsZpaJVr76Iyl%2B3yNf81cI%2FLMC0PatqYb16VQ87HVKJvhMCRqsMmieJcYy00WZ%2FiQ%2BKS4GQRk7GL0WpuGVdRZn65GkiPYXI%2BbF7NNZecKryJZj%2BBwzVgl7Sr4Tusji004EbE7AXFRMOP%2B%2B3YLmYSE5wA6OIKktcggb5B%2F39CTPW%2FQ2w%2B4TB%2BV8JYlmjB%2BMHm%2FFQ2tNJB8pUl4eg3s2aW%2BWKrk4V1f6KZS0HSgRJ0G6Nx2mp8rMT9FrfAbOmn06aV4JiODXXOanqCMI4qiXsmJ8SNmPpMHNB%2FA4gTXXMOKsBXm4XajEvReKcEqMOLR5bqchCGBEH%2FRSHvNjTuf1NycorgvTK8JOPm7Por9Rybi4He83Q9KVTRB1OFRw2rEfaz0IBRHdGZZKfN%2FxTC9C64D5Gm3zoEfuyjdnC0nbCJGGt4d1El95EGmLP4FKQfKkVWgRwUmNDmMOWi%2BsQGOqUBJIz7L%2B1jme1IZplj6JAQUIyuThrVIxWuX2uAMRSrbRrhw51DtEF0wOX%2Fk0TkLnbrCpnBZmXWKH5rZJ79mLQ%2B0p5PSIe2i2G0cAv%2FRc50sgSMbJx0XZsiVYrFwN6vy3eQTGwcwjgnDMirahH%2F8m9H0F55aw9P9xAmAikx9VOXnmlLZPSgpUxnezaW2Nlax1MZSIDO5yBlKejZcDhon7peP3nbJA0S&X-Amz-Signature=70509466659d8f58e2c7c3fb2adc7e5b5c5d6e2b70b0ca2c47fad2d7ce6440d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=2ef08ebd61260e742b2c4d9d198ef759d359529c051f624b30eaffffa784bab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=71516177ba8951c6487f2727a28d68d1b2977766e3424fec4ac86732b3fe06e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=eac8d54188cb3d5f127f321fd34d5782a782ffedad036ccf49ab54d8a4b7ade8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=cfb1f02d2ec000c0e24929214c585ecd5755007f01b91272c40f12e7a76d0600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=22f3836ced22d4c527f7e6d3999758557defe9b96b22aa3890387e25ee974950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDDM7NQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIG6OfI2%2BozkwoohSiTIAjhr8ANHVR8GhRdkAH9jWIN2WAiBPZxVsqOgxFScco%2BUWTLMBt15NwaiuvqusoRDkVLziJCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMesujw1HHpl9p2IeqKtwDByNoJh%2FfRncYRIZ0NBV%2FbtHdKyvc1OI3gZ95x4pj3WAWh%2FafFQhPdRzq60D89G43F2slyEVZwxhaSxhsS3I%2F62vYLkwklW%2BOL1iyY7Gifagy3azhdZsndVIRCZASTVsXVJ5le3tqxGXlsLWzlrf9pQtGSVPfo7r5W9uGkgeBtOtUkvb5vxv62Zn0nm8OqoOH9BWLGHuYbbxMYDdtglf35K8qXpj%2BfEK6Ys2ZFW%2BSi%2BueQ7xgVAWg96BZtQkMgX3ZnA6CH1nDVn1M4SzvWY18jTAL3ZQl1MauYSE6rCkzYiEdS9Px2oBtzayf6lYVLdQtkui9pjDD7EkYU4rkxjachQLlRGJwSWZBjHuiz8p48Oreh%2FXaAjYOi4DHcdsA%2Bkf%2FJrrwqMG37da65PpLwu7tqO8NmcmkkTViId%2FRGdo6nRUtNpxbNVctVaT9i83Nt6zyWHy5zXFzNTjNPt9NsDX8xr5rjzag9UVSKDp1c1V6T6bVzi2LDOcgpHHoiqfCflN49pSp%2Bq9HZjW5QqN3jMeQHgVNLYirqPBa47p6NzvH5kpunC7DDyAK3cYfAnW8ALBeSKuodI7%2F11BKT5UpPryQDm3n6FmnoNhoYhTZFent18LeOT91wqGR7v%2B10mUw7aL6xAY6pgFaZ%2BXPavaKgNrG3jZdpS7XMlhTLZ%2BFrFJ12QL%2FNrRRLx2rGCRCf1u194veNoJmvYE%2BNMKAQ%2Boe%2FgMa%2BPI2Sh%2F6SXtiXVtIaIzYbjwfqKiKp7gAp24pZtW7A06zz5VgP%2F9gKe8p0HVveqrdBGxMgFEWG8cnDrhVhgUSwG9h7kCWCM%2B1BjCVEIt86hYnhN4ghbeTi46krre26rVgVDvJk%2FmZd0IRN%2BRK&X-Amz-Signature=fd5706ca3a0b8f008a6fe7f47c709e8b9d734808a4a504754c2ea8df977754b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
