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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=dfd5f63348a63e161114c578e6f8497b312fc8138253d340a8717f7a4e85b775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=c7eba4d166c94d083510d3b7357473918d694c9ea539670fa1e3045cd6ca6b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=6988a8a67ed83883f38ded97f834cedba99e18cc5054182a1b449e9fb431d162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=4787f51f0cb5ff2c1a647ab78bcab25d375aca976f5ec5b4fa0a83183179e2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PNIT4K5%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIALDuyPRalYXMkClqTKFFdwU9fy5J7SrgzZFcedPhwwvAiEA9eGKFa1Yh%2F1NWzVNq4XB42ipcZbD0iDMQsTzzfONW%2B0q%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDF0u%2BGsxv%2F926lge7ircA2I5VigCqbFi1qEQMS27hiFLZNmZoqcN05519hU7eTu0IcBXvMFfEE8UgupGrNin97xRNlWyLdxvtQV8fLXmFx7TQNfCw2bWAq3JLr9VMKFGYHkhFjwjpCYCQE9zdK7jHll6C6A7XZZxHWdQcT91q5cHgFRPj1WXiD2FEsJt%2F5ADOyCH%2F5EoXNwRCeWUORGpd%2Brca%2B7QclUDp23ILKwcTb8XPU%2Fk1kULzpX7o72ty0A45rnVNBjON9KYIULcKE9HBpnWVR950Pt%2FnXtIhRaC7K%2B4P0fbXRAhuQgfPsmkaWyHvZL1XzwzxYu5UvfnZbbYZ2AfyS6%2FD37SK2Yrb12Xs6g7AjTw1UvCedJsR902AEWoplxdRSpL9QK7NzxnSKCvduLw8LU%2Bt6ODC17UCd3GDVSCqN2%2F8nr47BDDf6ntBo5ef%2FF7C7VQto8T%2BXDvcPSG0DFcvWDBgPnZ8VUBQAT6Bt79um7AytMhWfGNaNbkMzKOJI1AeY9wUlY7omQ2z64Wj3%2FqwcJP4is2TCM7baHN1VaWrj6omu%2FbbNGot%2FIu48cKMA74w3PtPQ0eL0OS7qJ8b80YNDZ%2FmHlTqqHkSw7tAY61xubK6QmSiSyD%2FCMsl%2FPDQZWY%2FigRI0RIflAbMJ6EhdAGOqUBhvOKdlA78Xcesex7Kl8J6EHUbBPQBjMpDww2vOfHSffQSMNrQ%2F9GPidKbmkHpr0b5UhdtouJqipoJ7vkzwxLB2hpKeWEi5tuAgDDoP5okprc2K3UfsyFBgQh8MZbrYX37Jxef4f%2Fjol%2FGxhgIWdrG7Z4lwwEBq4kqdo6MoRHwQverOZkcuvLxiRSLE%2FEmtqx4XYYd1UPhEtGS3i1pW8VnyhBoOAn&X-Amz-Signature=6503ce00234827da9222da0123a758125dcdf2310a9fb5e81b2da5328642006a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=763edb31f43bd19d5b464a13c887f856424f1117a94f2b2712f69c8eb6bdd592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=f66f3a5093bfcd8ddc34b863cf34d5b5d935d35394887d2623ed3e722e5d4314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=746075ddfa0d444d5ab626e548e15df5aed1b12b87591acc74547bb97adb3484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=0e0924f8405564d9b7216e7dc382c6bddb3ffa5f926b67d8a92508ebb8d2217b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=5f714d2d7a3d4137964ec0a02b8afbd994a07b8bcd0d42166c9cdb569d0dc1f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOOWACQ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE1JOLqmtnrTk7XC26s%2BTZ1CxiwzsijvNrRX6CUg%2BNlNAiAyO3mG8ph4OB1u9tfxR9PCS0UThu%2FoDSy0tIp7LyqLoSr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM614ArU7Zk3sr2QJoKtwDLdKusucXtm3fyKfEctOri91fXwNZUBykvbO9nkq%2BKoNpuPphi2sdGYZ4A47NAkXoLgC3Fb56efwcAKbTZ0RMzLbt5j0EdHX3ukw3tsIbfb8DKhIOe2SEp1pP2T9ypg%2BQCDDReaPQpgzHQu3UyVH4DyucLtU8CkEOYt5GXEsh%2FyRlrGYd9KLnHbiHISKZq6T8cGBB7Fml07s4odujnbr1KcG38WM%2FqzmOHbvIXGRN0oAs6b3bCRcTpOm%2BqkHW0I%2Fq9AvIeojCNng0ELqoPneG6gy%2FJmj27PuvD%2BgcI8cQ%2FD3h9Od5jcbjJOP1PYiuM%2FsGCtG7Zi5xEl5Egk0m6XTmoisSSj7B0SifsWeDHQ4f0wuyG2deeCtrwG%2Fqt03POJe3TznlUwpCXKbL4BDhhutj%2BE%2B0EYyZUikNX2BYQ0qKlBvQ0PKhrJSl%2FTvkbbkZywrXwmjHJZteagKgf3di7c6q3tJYlYgfh48B1snXknaCUbVyZAlGZ9V0sOJd4CvNTtoPzEDI58w3jLJc488iFHoIAeOvlwCjt%2FUBYZIb%2Bo1Gfz4VgM8jYMA1cWqOljpt5K5m%2FB7kEMGNRiAlsvvjCTUZpOzxVx0x9snYvDwt6q4sDAAoHKyE5fk0K6ddFGowsYOF0AY6pgE%2FqH%2F8fmYL1cH0DnH4kVFpqZNSEujoiC0j2szGm9%2B9cP3IPXf50tpSJlDpXKYiDMVcBN%2BD6%2BmR0LoadH9nPmZomucByz8YnZN37Ma6981o0whup8Ro3dQjEdzpPeCnzWqT4dGcJg%2FqhTGHtAQlCMfpAROvLsMF6eEEcjvNnzFvCpER640dTzrJAIKGxFUXz1rBa05M66QvA1k%2Fm7nGWDvxR6aVEERv&X-Amz-Signature=5d898feb65f2cc3c4b8db9a58aa247b28b60e9cf9f1f45f0da34b72bbdc45b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


