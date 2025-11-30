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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=338699db212a6c3e11d324f74f77376f5e351e957dcdf52fcd27b63e553bf6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=eceeed2c6a06a41cd6924536e3f69f88a633170876e2e7e89285ff11e25f447f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=84418a7005f5afbb4d50dd97e095467efbe0430573644a43061fbf9b4ed9b4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=e2d3f05682a9c94686922ed3a66ad3aeec891fcf44ac273e02c1d360a4c8b4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRXY5PV%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCID3DZwjjb1tM%2BTEzPQusPYpnJsNV2D%2BHBe9INLpZrSk3AiBdAmIJ3MaulsRvyw8FE3VRSY47c2aATijH415GfyJlAiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWxscGukRc777fMZKtwD6oo4Yy4xNYimsWvweSd2jXyqCKFu1vRr5zZ3vbvNyxjVyGKTsUDnxQUwooRV2qSCnfH%2FcQwERlAktHSesV3q958vTmhVj1LclGBWG2YY8VyQVX6I5OHGQMbbqwl7%2FJyLmC3qb5p8HWYlyeKCNhJqeswOW0WkBn1vRJJwIHaWpdwszCnNGBICj2HEobx%2Bj2QSCRSIJxyAKZVwXm2SygnonwVLU9jT9scjbn6fLjPGdzQmgUXFhM7sZArPKEEG7E%2FFMxUAyRb1sje0924dS%2F%2F%2FBButBCGyuifsk78oCeDmXhAIb9xltFHEklZk5q5wSSMyhvrwNy2oKH0ONVP7h94l3NtmGB47i6VGrmCrTGJl2p3bz8Kj1lpD3orScfR96zPatd8egTdEVKQWLdowrok5aaz%2B9%2BO%2BIstwdOUAQiJ5fVK7JaLAj8Twuhho%2F7bIFWXERDyWrt5vG08eH%2FWwwDOiU0N0zHOMpksCBbK66GG4s%2FD6lafv8CcLDS2eSG4%2BJXeoTrQzoluouyYgEdJUX1BiKBAWQ38ZzGyGD1B3jVFY%2F%2FWCy7QqgynFZ09hakx67AR4PKfAnk7YlicYNm%2FUxsSp6J9eib%2BUOQIoPk2TlKjKThkAPVPiL%2FMOWYkLPowwnMetyQY6pgELpfdVrWfJrfrb3STA98%2Fp4%2B4dUOgk1hOuaV3bGZcx%2F9JdSJ7xdO6U%2BJPuNtRbk39D3cW2p6sjWPS5K9gDbbsReI%2BXOirzqbG7PniodABqblH4eemgueEgmxtlgQbhJH%2BBzJ7KNfnbIyDMwN6k2E05UyFU2xtVKhU%2F%2FOzUAlAARMwr3W5P56Xf3iDmSlJgPHKROZUb2HqgdXEwi5vr9eEgptRjC%2F3Q&X-Amz-Signature=7ed1d6b14eeb38a0b5f490aa15da5d6cd42d1e363363a0020d89ed3b655e7d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=5bb3f9f1ae7242469efdce36dbf2a214924850ec25a5cf7f044cbaabb3f731ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=1b0c56946e0986c5aaf5d8c9765ea6325053cdbdd247db36c70be34d926a4695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=d6052189af3d0035e94e5efe95abb765c90c7a6cc15033efad099be1bbdc8fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=b42cdfdf84d4b219134442f16f2b22000c5bbe3752e46ea47a954b46591a36a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=3bbe5392ec71288ee59bc7a2101077799a433b4c0aa89f8392c862d247354071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRD3II43%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGjb%2BD%2BfmOIQZAWHxS3oMlaKHYlWCOucZQXvL62kFP91AiAsLkC42H%2FjDHkiqwCOzz%2BiXiqQlqFmnZuW5DPot0yMiCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVC5BNq2OALnrxPKKtwD30zC%2FzeFD5cexbrP5kyvXzvjAKRTmjjWp7xjM2TM%2BhsRebrOw4HXrX4tOyRwjKYxm0M2ArbXaijKKmXIdWxp0n5ZajgKf4OJ5oV%2BINHLAtHxrRj47FF91P%2FfaoZCmdmlPjGBfNohgXYXe1%2Fvm%2BED4o%2B6c5E7SkImoLBF4r2GvaodZJ%2FWeN9vIbk0sN7MLiEQeAL3g8TVJOIDmwGrNjsvw9MuRfDcIPcBrsJzI8ZfOS3YYIGvApbt%2BIinMOqvjAfz9fjw3T1oXDWevwrD0OMzBNXudadd9sDdEgYOkwu5JeEaxao8%2Ffc56tdLWIknXKuxqwswLnmt%2BqqtgqJm87y7M%2Be1ai399PKHdqhAygM7fPTo%2FqBUQMKqIRKmYEaB%2B6XbtoEa1VmNXyFtlwqnJP2NCueh%2FPaiwM6haX9lAQ0fLokdMzsGjNEkhNPNEs5hLOo6T6JMJ%2FHIewvQfFnMWdKpCkYk36QVblIcervKbvoPEsugjhQrO3%2FQKchURELehNKFKA15xh7XpqgRxGBEmgYLoEOmXdc3bIXpWPjLzKI6VvLLQCPS03CfaFoHtp%2FT0VTjTYDqz4uDQlb7uLjwy3URjQ5AQvi%2BM%2FNo%2B3xSFnKy8jD2spzwnmVNrL1UX1Ew8dGtyQY6pgHSKgvMKWlUXYAPzWWG9Hpiw7%2BQJeDN%2B25mFHENRlrAJsi4xFyBr1pM9ArWfgL1d5xb6tcChiFnEsX3libvlzdkR%2FLJ99uD6GmgNFmC9onD5Bt1J7iNdWBQJfP1%2BuTbj1%2Bk2O67mADq%2BnkEUJMVxPqhWILEtS606ZkOFSvb%2FOk7tA8%2Bhpm%2BZ7%2BPNOa%2Fl6KZnRygsEAXoDKXt49j54npoq%2FsTWghc3vJ&X-Amz-Signature=de3a86be893dca6fb51fd8a7cba7723a7f8fa9fbb0fa12010551ce86421de380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


