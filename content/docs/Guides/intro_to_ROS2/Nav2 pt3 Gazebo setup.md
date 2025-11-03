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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=fb30baf99b3de98ecfa0353d8e7c3ba3b549dc3320dfbe3202a40f7cdc1a2e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=f07a6a0a51e0803f162c4f8bd134be12491677fbe95086dff43ef85cd449cd91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=b6bc0a1b195e48694720fb46b425e207bdc2a2bc8b889b23acc470c1b460c81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=bac61b0c03a867242e32827efa4288b225fe3911d497e31a8c07fa19fe5e0f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THA7MWQS%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4A9McjRtKBHIVNPv1oNSdkpmlgCUYStblk9%2BkgglehAiBVrqiu1OPlnQFFOYEPFHVoOjXKgdypmOCKZ7i6%2B2KDCir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMy0CiUCkUf0oyvZmUKtwDHo24lqcCtoWPV08rH0Wry9McoRUsbfVZ3rJ4v4fQzOFTYXO20aAlKPMKffYuKVLfn3SedHvP8enr75I%2BMuO%2BAI64k9npkb5X7kRj4Ns%2FBQWdceT0RWAmNUaFSt40Ixb%2BST6b5XETlIee3qH4BEixIrvj34JwBkmC0lVrIrOT%2BJhXOlU4sjY2bTQ7xpIwK4rN4fOjE27wLWSkReY6OYFZCbY9xe0YNWklxyA8mHxVNbh7R8Rvu6scJmNPPk%2BfxD9l0wgMpnRFCHBUco0OMaHnSHS9Sp3PS2o8H%2BiLGmCZLFNx%2FMZl3M3wt5CD6i24hwDAAOcSJ7cXhI1xdmhkiFloOdsIF%2BgZoxpnUTE0qwJ0lpg9ZzIQ8nSs8%2FUXTqTrnD3cMAI%2F9d929au%2B0esEmULpXNTmtSahToHcZnR4smzMWHTmxN88rDGElFiW%2FPyKmVzAWubaAgVH7csBek9NMMczg4NdWdrC13zTVaoJzFZlwJbeucha1gJrSY8lrWj9zPj5zWzzn8Tzh14dpi7K3yGgyrLkY800gCA%2BhtNLEYUIlwMsHilA06iVrQAjDbk89Xp61%2BYjAH5DqEbUNIpOGJVb9vJ8sgUrTxunxxHeujp%2BKyTbrUjmVGGw3FBcoDEw94igyAY6pgE4paRw%2FAAszNUP6OW%2Fm6QiTbQhZWfavpKvWydwkcmJDPeiFQe9RRWsl1DeNt7YERhrFspxVGMffqKTTrC8SlpH6klHpfaJAaQuDAt6RMAJ%2B%2FyNDM2qEtJ%2BIHUMPtas2cJUdYpJOfMWqIDF9ezumwik2AVlVx53%2FWu%2BtQjWaDQX6nUl48pOqNor7YXFaQSKZ4%2BFWghjWtqP9B3JgUEDPtibxzkYrxwK&X-Amz-Signature=4196ea9b93e5fc23f973323610afa88e25f3030682f0f33fc0941b9ef882519f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=4082361f90ba1a1d39925eda8a2eacfbbecb2b3666c630d3334960d8f5be0ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=a5809b9b7f5349141e4eef9927401545f28afcb7eb7db9121386670b780cf07b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=ab5cb79ced8fd600822d051a211b453f09b552f97b188c3ad6ef80e322a1ed97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=65d82ac8c0135e5c6d5c011e20574a2e84d8939bdbff1088b0b3a8791348d05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=643add1b4809b948b21b1c267cc6125ff160e77e54619b042566e676f775f01c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2RKHCD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FqMu0PWjFQXasN7lRXN%2FJAGJdaQHEYQZHPtWrA%2BmWkAiEAgU0qcULjEssocGyYq6JeTs2AFNkCBRzov%2FNLFdm2BvIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD6KoPXj%2BdOWy2WUKSrcA5Ze1UOPobptjkf4lMVH9X1i7ISDF23OBbzIR1tbB6jnuLpZZaaGj7zF4hdund%2BLpdJeuIY7lGij3lByfCn84usYmqQP4saShHoc8nKRjjvvvob9w4YYaqq3k3T4gaVveh5k4OEuVob55EOBioBwiXGskfKA0jU7gx4zACJ8XrZeQsqMc9Q7VBJjD98B5Bq7LN5uTukwA3YXVxYIyyfwmns2yETMq6u%2BHneBECRXUSurduAw%2F4k3NAEeXWeiOyKZAGBJq8xIwl5aTtWAwr4ijoL3ypsOMGlaKjiQpa0rVHU4zPc8hLsTAioIPFcshsS8Zh%2Bw%2FpM5ezxQzipZEEVaM0%2Fxa8hTvSkMzy0t4zws9fap%2FH19V%2FerBvVhT4uqDEk76kRsOUev6Tc%2BqqFlrRWHsU8yi36mAsK97MshfjIHkGZBIr1B6H8tuWzLcCaUzG%2F6kXbJ1lbskfb6eYahH%2FwB97CrzAOkHhAROk28dRMBLlZXV49Wrpf3xZ%2F674uKpCIHAJ5f6eYdeqg4llxMo9kqlumiNQaLYEQUsmFmXtYp0WokXJvg3iewnUnW73x2XQ0BoWCa%2Fpkoq2OKnLoUI8S8kDpjB6JFZAxS8S6%2BA4mRo9UfDxwIgkUTyng5mb%2BUMO%2BHoMgGOqUBnINGLsJKO%2F8oD8k30YhVKMjk8NE%2FEH%2B9C9isyv%2FsM3UjXMrs0AAKFJkV8qEGPt6KQQf63Z8zbM0G6tBW2SM9QGAS2BnhHXpEll%2FZVQ20MN%2B1Dxzf6YsG9io2DydQNDmzDd7ibZdthoCcr8GHD3LKlXfci20dJIAhb5Szk76F4spQwAwupfngIXJFpT14DZYCB2Ub2mI7GgGhS5Ul1NPL%2BZ4dVCC4&X-Amz-Signature=a5e94dc1048d1c3fa74d5870b30fb14ce4d60e1a539a2bef5650e41362b5425f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


