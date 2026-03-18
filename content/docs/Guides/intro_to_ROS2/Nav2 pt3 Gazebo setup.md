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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=31a3d09c5918ae1eb398d16da941bb5974a12481581ac80c9cdff9754774f02a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=25d2002fc0755154997dc59a4ced346aeebf5910c2453e548af883aa540e13b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=1ff88efacc7e3c9e889b4307cf0b172662ab1651554819e93863baf3f2cc01c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=f4fb2d575488963933e1611826a4fdb05d0ccf06706ce67ab7a2573250541ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVD3LWBF%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDJEboRPH87Zdl4aaunwsgRTTu%2FuPdQWqJvq6kNRMctOQIhAJq5DKwZoAvpfC8IxuJ%2BkRCe9s89DHTJnSzwaP%2Be1psIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqcA82xme4rXDRXYsq3AN29BNLDU%2BMmlIqfKyuvdNnR%2B8x2aA8ysTxCRIiBtT2ZQxEQR%2BxTCSx2PCi8xnt1rYwFSG7PJnwIjRI6siSehoSbQPfExMoyBvaMPOpZZlkMK82xB%2B1fDxgIlxjynG08QHTKcjlUy5sbxdRrVYOmjSameOghuiG3KOVh4WS5vQwAnN%2FYryH9x%2B%2BzDuwT9oSE04kmz%2FaJ%2FfngJjVtrsTe%2F9zFlU%2FtYAjcIjCVQOYx8MvvV5TE7m2%2BB6JyakbK4yNWY9q4Dy8Ad4j1cTUYCENRTLPvJemwqmC4tQy6zceC5ASD%2FZQWjNdNyJFJS3MaQNyZAVSjvQbvCd5IKcyb%2FApIEq4U48%2FoeS5qwi4bnaBAicXHJfP5qpTi9GfytYK0d9AmRO3oInxfB1IYu3sYBXGp6qDuOElnr1GCZmURiv63RlJGXQl03vWssBq89XXMnm5t4gRL93GXyo4xg%2BBtRQN1W3rSCD8Og1hRiDQRHmfey2mbRzZiT%2FC46uo6gGDOWs3Ns6TDE7l9YllqemlzYXm4hb%2BX9nfsHWPoJk%2FmnTSNH6BsVAjl3g%2F%2FI6rR0QPNfrG5wQpCAEsqLtrJQu0Q5iUVd%2FtNFS5hpEVPVkL%2BIPaZxFhuoUJKpspPqeZD9VjNzCq6efNBjqkAUzw2uC8tdnQEKelI1uUrkXzdmmSf32LZ1SflVehE%2B%2BMnM%2FN4tE3oTfCXU9GPxyygzfY9VLp5jLYFnwXWSTme4jOml7pRntM75eC6xg0yMv8j9fwQxkeVKvvjks%2BrHbRvxpsTjzin7nkBxzdpIY%2BjiN9QSgLn219RuRBh8BN%2F8vyx0Om%2FO1yiWtIc2hgzDW3ZjP%2FNgGoy%2FcQA5suZTVt5FNVnWGF&X-Amz-Signature=73ecb83acfb0c3e299b1565fa6052177fa6189ed18e08b536e5d0df96a02d057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=7692402d59c2aa2d41abea65334608acd851cfe7c39435ba8ab2f59685be2bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=7ca4de4244e68546bab9883f79724973a7b2466a2bdeeb301be2413facf4a32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=f6467aa34d4b13e0c548d16477185fb6e552a256351b14d64149ae3879b95964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=1d0f2705e4cba4abe2b51a9e0862f9c4a6df7a765386a9683e5382baf7d08b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=be824b7e29d98e09611740eb7954c11e2fec39a779d142e12b56d42a3a309a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65WGU3O%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC4Eikryfv30MZwXPqqo9qCX%2FBDbM%2B8ox7NKoN%2FsnVAxwIhAPZDK2nHa0Li4Qg%2BU50pqWzwvDuEYgpitLoP6T2tnq39KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7067RG59oa9jyNAq3AMhHR1tOR2T7mUTVT2O9BYV3KeSsCKHzzQsAyEzCmqWJwszNxEVmLAT08KNYq1dCORdSV3CaiiZOV5N5CjsM8gG3x7csg81WJCoBtWi2fPqS%2FiodPu42GrBcMW4pcltWo%2BRd1cMa2DvQXNOn8%2BDHZsZkkbhQSrLYc3ZegfB9RFfHOu%2BFBd9pQFPkT15VplVaShwtwqFFraBWyNJbf%2F52XR%2BT1QcvxeMGbpaukhOtppMahDW7SGJNF%2FDtfxuvou6w9y0TozoVr6YAB%2FC0ldGjAYKOOM16Yui1mdXq76MsEZtQ3kfyaNjOHJgLorZN6YoY%2B2U3nFpmKMqdlzzV4P9nu4bsNZk2ZeC5Wf7FHZd5PjWqUDCrCSupKfV1%2BPfD9bpYLUpv6lDZOlIpBWNb5vvzubzVN%2Fe8PrMwUzTx9vvJUgFPH5wW9%2BBqW8ZXZo4%2B0tVaxTG%2FI7HRvyMMuuvy%2Fatid7HIsKrQNm%2F8RQ%2FvGDc4QsKaC47f1t6jjcWG%2BJGW%2F3ArE%2FE1Jsl75zh7OlTcbhxVd9E6ZgggSZVp8OUiwnPdLP8JOlc6bgcxP%2B8T1xwbJdIx07%2FGluwhvH2WMBfP3z9%2F5h9LrQfGCkOsQ%2FyezBLsz1U2nq%2FcG31%2BeNhiXNqrjCB6ufNBjqkAdcy0a3BtuVz4uUn6wm9gk%2Ft%2F%2B%2F05TEHxRD0fN4KdkeZmRe4q7nAluXkuKm5%2FIU4q49ZlWhe7I0oZQIL4oKi%2F5r%2FD4HJSNWHrgsyU2Kb9ZWXAUfBze9Ra%2Bf3LLKGLpCecypE69qM%2FsN7cnHUri2pSV5d6HDWkIMahV7nvcvyY9ORtw4kvCg0COUcSnBNAYcdIrejXyy4FNPqMK1ts%2Bv6VHMfN9wY&X-Amz-Signature=9bfe58819d18a2f9cb9d96350b01559874823ffa046c39cb8b769e9bb35208b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


