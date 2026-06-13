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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=83e2416f3907cddde20202961a6247faa386f2e200f91d8c253ab3791e109148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=0695f60e148310151a370741e54f04262ccd8b76a25c770dfad347f1c5e461d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=a8fff96133d0b2e93f691233a6a7d592b3e08528e1d19b4fc09f50fb855cd800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=b1554b58a9ee89cf5454dc9f3155a09ec0b514ad3289b0be024e8be76308c7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IZPGK3%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAT7Z8v06vdMdqpqTxUZraJeufi2FmVOJI5Fa5BGGa6kAiAiZH4dEyeX2lqz122%2F4B2NEYmlbLaXe9%2BED52OCPKTpCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMlKZ4KO34QQyoaxzsKtwDK%2BEVcVxZC9rE947L4xOdhI6E8bF6CYJBOwgHFoOR%2Fr3IaqErsFa2%2BRtw2pKWCym30iTz%2FtTCNIOkbVGCeRroOA1GpimKf%2BStvF5qTAr04OG9O2Cq1Ttc1nLVm7cjNJBlpdFcgvdwYwQYHnnpQi55KUpgIE3KXHmojCydn%2B7ZxxrGRTDkhasui%2FEgrk7479qs5U5fl5226G2XGvhLxoBvttlC0LVhNaXxI5CnmPiRUfOcSRFC%2FS5vJhQV3kIrCUYwe43aIaVBNHSOVTiQFlaeQwzFmFrcnp9a1AQrNLxV1SF%2Fyx3cMMZqs4kon5NpUOaJj8AarVHH8I3M3g%2ByMRIP6dH165lN6sh9Wq8uGopX4Q2eIjYHDmos%2FcBvdJHlpV9t8KJizuaYo2WMEqkUDpeVvXe8fGJzMJywOoev2U%2FGtmFkzKQd9WZtGncsJuI0pzipxZoDgP3LngPVvz0FrybJdgXNiC76tVSYYLsNVznzj5o2ORPmdQ59koL571AYCB8BndN8xUQnj1o5588hczkIEX3MXm6zxKGUvntIVon3FrVKCUVuJkjPO%2BIbCVMsPhRXl4Oc%2F1vfdjdP6QEsBtzyj3aawpywk7yZfhuJ1yDyG9Q1ZMqVuMzInPC6gf0w%2FPuy0QY6pgHQAjEMrWyNwAMrCKhi4zEJK%2B6HxTltMOOdXDCRHoXMswRvg7v8WTLbso1IXnk961nw1%2FgqdVPY%2FN6CXYLot%2F%2F%2F8Y0KTQXQeroUZFrNNLKQG2VMjrajT5LcueIXukongtUIjxC6dJcHgVOIAwcai0OC7LAasNq2OOmKLz7kwoOgPSHzOog1n4qlecXBvzwBMYXvdYWRVsbMa2Ei8Ub%2FiULSca9izDya&X-Amz-Signature=c1b2d7bdf00a7d53662fba659815490dedd17a38bffe76d460694be147358ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=83d5c36ba0d589fa7ebf900b0ee8bdf362aee86de22c7b37e654985ad14da7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=1f19866c028ab81f86e68fd18638db6e68be8daa6db8a04b11fba694a794e057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=2e69c2913bbb3e1deea99c921ce27fb6003ce5e9cb438c7a64b5fa6056175d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=1e7be74530d118ba871df014f5233c95f2f0cc4b6d23414484cde75a9e5a906d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=4de15bb671e14bdce6eb2112ad9dd4c32eaaea179e6e5d53b0c7a8646a42c7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNWEMOU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCNuVgYm2b5KJYPDNoG6rCw587vRhguQY0ZjUZSMwGRrQIhAKtPhRzE7yqqM%2FKzrfOJJAsEEhAEnwlH%2FiNGn%2FnrHSoEKv8DCCMQABoMNjM3NDIzMTgzODA1Igy1lH1TqFjBtQzDn%2BAq3APAVryR3%2BKhh5GgyZMnFx1wuq9HcYUu22IEzCFIyw96VA4MFgwG7hFHhZEJkidxxkvK2a8FYCSNfOGwLBPvetLPLCsBfA6FF4kxZGprBDubcnZHkkOSoEIKQJrv49RzYugGs2H54ejkhNfDEB0XxS8BWoGa2Bzh7SaAwlv7FVVTE0iXQjKLvo%2BMfYvlQ%2FQ9QbGiqjpUolhXAxgfuPw2d5SHZWHeUFFTgOAfFvTrP9IYrba5oZWfFFhgN6oXR1XSi2MIZUZ6ct0xpFK%2FCJ4r1TLQMio0N%2BPzDWty7oNkUoaQCQ4AM%2FPEBeMlWISj1DiqvlxY02%2FFCGv2sGApfV7sg8%2FiMnkfvvCo%2BWviuabWTT3ovbqrFFRCOdPyGEZNZ50Ii2XkpblVqUM%2BKbgXaLbYkZCLniobliEbEDdjgyq6Q386jo5TfrtwB4W%2BFCb4lco07RP7mObeejhRUcsR3GIOZDpF%2FD%2BFywiLFAtfHklaB0xmnmxmbrMrtP2CIwirPhwoM01NBUNsk5gIaoWJfBIryE1EfUTeK3IbBeEQ32hbV7lZtyGyKOVibmI95jpBDLg%2Fi25C8w2mBdwoPNPYvYjJUTC3Ow8cBitJERAUFe7Lu5Y2yWMYwIjcEmbDZbHJHTDm%2B7LRBjqkAc9YhLhdtT%2F3pFDm8Y41TNO7wZu4BjqZaS9Pm3gN6%2BVr2NkaY%2BpWkDdScmZQqS5f8hwE11fOQWUR9llnorECYwjnklGmsqPG9aWNorUzKH4GKG6uYZLs5I8n0Y7o25RQ%2FJrnwUQwo2ms3AD%2FY9xQjSAC5jAuswsHNemDH%2Bcp%2FmqTJT3ga37tAQ3DdVCz83qAQShb%2FZLXetXC9bkwtjPVgPIfM%2BE8&X-Amz-Signature=404a5ded585fa175e7d4155c456fc3f79ac32b9e057b6d780ce957cf884c66e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


