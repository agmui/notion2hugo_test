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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=928029616decbe3793b497a944589cb250ebd61db50090582a7c7bd064389f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=4b0dac268a9c2d06129e56dc61d94f5a9a9346e9adf14d31afb29895fa5e6f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=7d24b688fbd1ea5946a418afde7a034342881cd4c73dfaf7ef347a91becd1362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=8b2861c638ac0eb84ee585e1a1dcd4f2d42e07775de2daffca034b06d74d7f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XSXFVB%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtttgJyexHqAUUDqzJWb6N%2Ba8fb9csuaYxzhrgHISvtAiAIrcj7jY%2FcFEWRibkR8Xq%2BZmr2Ly5JhFDvT7Lwrps%2BUCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMitDkiHHC3%2BTXjbJfKtwDFOkJ1em%2BNjaclEeO%2BWIlQJCdcGNiesmvBmWm80kpLyd2MJmY4OL4VaELOmGvmtm39%2BRIIck9Ct%2FHALyBupuCRk7yipf4ZpnaSjB%2FUMTPNELJvIz6Z7lnrKf8%2F1K%2BsIBIR2%2ByFl6pRl2FqvqA1d6CbfrvMobCPjDajqiV7RWB3aeKjmNO0N%2BOmLGvgDq5Gj75BY6A8pTRnaBrcrVPb7NSfk6ozjMkZi%2FkYzar8w9Bpl83%2F%2Baaz8XgAnVywHsIidrGVKSRSvArLTVIIJK2eDFuM%2BQJE2H41HOuqoNIRjx%2F3f38P4lyeiIuWrstxkjuBkxnDPjV7uPzAAIWt%2FyV5GF0xqN5IMpOZLhrQcCSwRFDVWulOWl%2BQBNc9tLy66coLkFycfE%2FBmvs4IeWwsWYAAwogcZpHTlbVYYLAzK5VSev13yXE469y5x%2FGzBCC8GBCwq%2FdnuQOHjgoQFB96K%2FeVPuPvYyB3T5U0VaBlxvCjDKNC1SvqXPfrsekUOcN5mbZ2cE329TaQfLWBLiHMcwbkT929T07KBXIPNB600RSN9HK%2FuICJseDRiUUKdpUN%2F%2B4KdO%2FDXqSOXIFleBDJT8nyp42rXg8WsM507t3RwHbI708Ryhd15B7QDXf3CrvnEwytaiyQY6pgExm4%2B0uhipgMXdBOfILgksZ7GfSQTBOk3GUAV%2B1Zjyr%2BJUMAfuFr0TRx8eiUG%2FIdB5f3Z9%2F%2FLo%2BViLxGJ0akAvLJ1VV98xHxECNoMfp1HJxb6%2FRfAxjHfeMGmjj%2FkmWUTsJJE8bg%2F9NLsvSye5XavPbSziGAi9xuisiPwLdFfGP5Ye8dsk7g1nNx3ZDeWfy2TdhewivcEOtUVo8s2tSzgUPtTL%2FtPp&X-Amz-Signature=e58cc555a5d556559ce184a00cb4e984c903395323ec29f941fee4db5ac38527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=046d8648f47ed4a4ec604c9195f94c13a8082a88555d85334b95a2c7debfbb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=71cf882c091ea024b9dfc8d030e286f176e1c43a6ed8835d518452b9e118a272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=ba12b5223d43862f7a6b224ef87224519405231da725f0ddf04c40316813a13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=539994c9bc69033bc6bc5c8d4ac73026bdaadb55e883e0cf554f1368f00b9c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=ce1cb9ce6f8c670a705b7651ae14443577a521d4ca1c4b8530285f5267aeef36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2ERG3T%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaMj%2FEf0zijY4dmg2BlmEd%2BsOesUkCMTYlmq5XB6o4DAiA%2BBpt%2Fbu3EVZTkVryPFahXMs9ap4qLWlf8RzBk78pdyCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsB%2Fdn21Pr3hnO75XKtwDu6IordW4p0q4Z%2FddfgDYo5Yypso0Zf%2FNCcL7gGD42pfBiEsBkqurUBr1zMWv7OhoeSaea3fgZoJtXXLMkjoDajvOuw5tG2m1yndEvSpOSGTpfiBEahPt%2Bc%2BzPYQAAsKqjm%2Fi0kUT3%2Bg%2BbfDSgCj6xPuboRYi%2FZj3EIGHBfpbZTNk9TX5v%2BJr7dYw2vkWLlBQc%2Bfea0hbtn9MLrJ0IspcgR8XI1sPZrkVKalRK0E4WeJPPCV71Q873vEh0iggeo2IzFwWOo7eTluyoLq9jUu%2F9FQizDmQBik5hG2uTr8J8pEMStDBp%2B7HWfyFa4eXVwgo3hBsuYp13cwk0kR%2BTju0Vj87sx19sdMC175gE4HXBZmf94CM0t%2FX%2FJ8BHE0LeqIScmBHTLYhFpePVWJ8MR1wn0xNRNTtxlffKEUTcXlQ6wRAOB%2BbeumUsgqseYXM%2BNFXZ%2FKG5sg7XeX%2FDhDvir7jyekGKIcanvQN77T%2FkhaRMnPdQSu5CYBRM4xF0WdYyB8iz1Kt8AOB7iAudufRgEdJoG8VxCvBTdpCHdcBJigPBNOoRA%2BHBV3C4CfFUb1iZ%2FrBqbDDGUbnLmF1Ulu2hRLG%2Bc3Xi8cZ1M%2BIme0I2qwrmYLLkYSzeES8o%2BJVGsUwutaiyQY6pgFrYwkB%2F%2FbO6zYgyHQVCmb5x0nLu84PSpVYgHMRlG4vO8DRP0CQzWZu5ua6bGK7Ez9mhBgpL4PMcPlnHG1AffLtCwfuByrDrq9NX2S0l0UOdHxi%2FMgR9PC4oO1b0NnflkUN%2FLXifLTT4inMYhj1%2F2Xe%2Fjz5aHAsouWKvLaciW5d7A3rwxMvR4LBHwI5H7dfKIBRkYSPeLRpCwmX9N5Yvjpru3oPCjFh&X-Amz-Signature=5200bd3cf1dadcadf27d9f984454ff522afe1a0a50030b5ad1cfb930d012d914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


