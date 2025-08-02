---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T01:01:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T01:01:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=25f1233f9fd9bfed97349a7956bb7a559d7d7ee845546f4817c82083c80f6bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=a85ee6b3ba8fa21820c888568ba7a5b4c9d5cdbb4e375521c4638ef05c88b374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=fada40307e9a118a36b7336fe0fd0c171f4cec361170af6e1c1242bb089fb25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=930e4f8087899f48cfde87e0e1444df5f0334c53f21e174d08fea79de87aeb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: test `fdir`

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
          ~~<fdir1>1 0 0</fdir1>~~
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=bf744ab4c7c7386f3beeab7748f6af3458f604edf65f4860449661e119b94e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=be5ac055c73a122c5cf459c79e0e76415ab5c51881bd1bb88f83452cf3e3fd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=12413f0c8db0829965c0d95c4969958819cb57a12e34e9252964e6970d1e2423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=2d3a46c894617798d93bdc949ec0c8c1d4b111273b6cd80199b2780fd4bf7ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=122c0f00b655d19f536df80310d0756087bcd3efe7e75ca3a9e1c4eb8a6130ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=21d36f93b5c2b65d7c062a35e530870db8c49bdf3a89a6406eb77a87480b92fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6OJK7S%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgjScXL1bLYdtC1dugUZ3KuSTZWyCc7eHcECGd55Hq%2FwIhAPpqImN3TEv410d6woOd69jtVh6Wfs4QCJS%2ByGL1VIIrKv8DCBAQABoMNjM3NDIzMTgzODA1IgzC8zquBVKqhGtf1w0q3APmG0N245I4JCnzEy7AimBI8t0Y3gOSt9PWwOqeJBtbeSBoyz35jJ%2FJrLFDwA1W43ADI9%2BSdDOgC3DvekE6qnUQujUfozH%2BpkTohOSeXDC4WmPxy1bNDFIdoJMh2rMg4%2FYa%2BkmJA2vl8l63wisiiWKGgmlDYVbUc%2FcxA9QUY3uqrOsVnnG5yY2%2Bi1LSzwA%2FmW32ocFHIItrqymHOqH4%2BaUUr3IQJVvWr1jjRKTnb2FmQBOk4Ly%2Fz7Ve7zhj8gEUBxa%2BmWshJG3rqL5nja76DWpnV0YEL4%2FqtjFjlwaIRgMrFRGoNVzcn3S7igDiaHJ6uJKV5M8WSmpU1U4fg0hYxCB9J01TXJEkoreTZA2Qjqre6j2UwPsOh0Aoz70cvbUWna27iddJXphWiZvXPDUlSVL10gEwF8YuyKVvy5UR3mka5FA0OaHWgxgdUpzI0zNJlbOg7ulOUoL9s4fX7PLfgbArMdYaYJVKiwn8HkH2lwe6nLXWa6c%2FvxBLS2SUWyXmfp7FsyAzF8YeMP1S%2FWXEwxCNtyDk7IhDpYTJ5yf9iFzujiq7osDmrhCh9TIpY%2BS5I7OguxMMDLHOKazw31sxP1qtWqhFgp6OGKSWwQqtBuk4JPXLjwe1FsoLSy%2FsnzDg77bEBjqkAXxUeq62rsuDdF1kIEO40Th4E%2FPrQQI%2FACY5BLBuJjI%2FWt3U2G5CJvNYueruDzBCdEj1xl7eAtvLZXg88Z3BnkTA7z1voQUskJDlUTjO0Jsp%2BcFdCyZRhA2GdP3yLbKmDGLgrTD%2BNvAl6EgwfXA7SoeDvEknOE3uME9vACNpNrdzOli%2B%2FQqTs4wrNRkggQGJka0KcOkvHq0tnbcZl7bcTQkupRIA&X-Amz-Signature=55ea9943dfdec1cb69d9c5f392727352df0b9397f1cefa5dc4347268b05564d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
