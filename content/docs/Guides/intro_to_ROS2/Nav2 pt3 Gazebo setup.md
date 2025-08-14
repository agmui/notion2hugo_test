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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=46ca1859778934209cc7af388f1657d5cc6fe89d2222b83fec92bf781fd275ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=33ae9e99695feabb1f94bd67035fa14d52ad5cd5ac7cb8a9dfb060d091688d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=1cf99c37fc101161977de098cfb1d271db0970808e65162364e436417af6d3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=7eb8b4129db46aaf7eb99be7317a9fcb4db6ab59480c3ddaa882b6e06804e571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB27Q3GS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB8%2BfCiQKeQXx%2FJGwEKPJJFTBkZGjHfSoGcFIIAMBU6AiEAw6TmgQv%2FpB27tpuItU4Wsz%2F66wg6%2BYfyJn5tl6dTw9gq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLkp4GaVwKc%2Baq0jjSrcAyKOqYIHM%2BhoWFrnvgRjbhlflmEjpqM9DlAFQkE9c5LDWQPmSDzGHluVjPCVdwFGFY9sEEV31pYcLPRns5XKdNlLXKWqdz1NZjm0O7xtnkF93%2FNaLE9dDKkNAyP%2BYs%2BEjVgN1MnoMNGAuqp5Pe353Sw7S8sKy9CSbVOUWwSM5ILeRB5s6zG25%2FZv7ooZUD6XO7w0yvBwqNSdBkqrm7rQ%2BYgHIpfJCJ0w6zXYo1NgOBFsLo6aBLY0M%2FOrmGXotx8bQSEsu6IUU69bvsiYPmucM3NX9%2BJcb4NLpqv91jlYhJxkyczlPgI%2Bz4QqOBuxJBwjfY5RYaPoch1tewDpMYoydeFG04jnmwmJFI1q3QbDwYcl9Y2bR%2FmjaBaTZJmwl7uVZ8C3J%2BcwC2vk6J%2BXvzlg7N0JO5NskuX5PuNxldFptPbVN%2BZ%2B5lK52g1EC5znb0MZnqDF58C%2BJWP2sRIb0jSTN%2Bpxnf1KQq8QYbqlleHJ16YN%2B5H433%2FMbhsozgyxpf8VDWSx4yWWJnDQcQqbrTdhIzuzF26SEugNJ%2BZJqNRKjUgmAKVi5SH37pXdRJp9G%2BT9MPaOUa5uyDa6hxcguwOVp7k2EcdejOgbo%2BqXkyrghpN5LmPegf56XewHLcY7MOuE98QGOqUBsKitQnNVtSsZUtZvfkB3828zvwB21Pzu0DJXquYW5mLpHsy9eUv83K016cDrOvLhUCWCirFpKWCUnEE0IVAaXVc8oK%2BEfaZ4giwnjG01dKmvZ1aE0hE85GScAIBXgo18cgFRJlOtiFMB4xaCom5JRKwwuZUekcct61B3EzVsO2XPKtsq0REm3409J43uz2ryUm2%2BQhe%2B6PIiCoNMjIHJNbKy4OGc&X-Amz-Signature=5174ab470b7e8ee32103c9777a94bbe48f7717e619a3b9daf648904fc0663b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=7b95f49714d18a06fe570c5631227e57e2092b7a9873e85a75080c56b8b8d449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=6be256bd612c218fe0d9b1619c75694ea5b081878a0e8339b4bb8b0a60093ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=ae680d33dbb5aff923113307d5eeee4ddbf13797f5637a077989af2643de279d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=e8e2dcb087a5c3dfe039c85a7351057f960f5ce6b4371211063704980271bc23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=d86ab662cf5f0a1a7f72aaed6593082e83e9b091665325cd02a9fc038cdcdbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6ZXZW7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQWyTZDpRJYmGVZOH%2F165biqq%2BGoXj%2FatCL3qR5WZWwIhAPGE2EHSunHUr0YX1wPbVhtqiNrGgIw4vbP4HbOOIOcxKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7PqgdVolS9%2B1V7EQq3AOwe%2BXhTKEcghVdX3nmVDji9wfihcLIHcgC08hyMhhWACkf8gbbkH%2F%2B2Fm7VoIfsHyqe1mewDGU0e%2BIWigXpztrncoy%2BENJw2dVTap9v8iMPLIiHyKg69I16U3aNZqX2a13pzx9d1Ss4O1qvWmGLxYXstqociZuwuQD0vaN2CphqPtxyz0g5qeKthwHuBrMla%2BfeNL7DvYyAlcULyml%2FZA%2FPi99jN5rdrp1sHYuaj4IDSqoXuMPxgPTuE2Bai13gHQV2jm4MEF8ctvn1zQU4YcOrajSYEBJ8rdi6rRoiw263MJ7kVCMnoquflvp31uu2QtBAAJk2H5JU%2Bl679PODzcFPusatNKQ8kcbc5W0xQCXVIvVPTBokCzggniRiYZsNpB59ikKpnMgzrfgzDxlXu05Ui3t39Yg3gCmpirTr%2FRnkp2138jUA2WnRb9OINS%2B58sDIh6GWugmS6wrHaLBc%2BAyjHWsc9%2BkQ%2FhVkUWnwxCUX7QWfK4i5nIAihTMVYT9mmak1DfemYWFZhFLgdKZLrmG%2FuLrcDq7NQ%2FDoSetOCZzSBLHT%2Bp5BiECjlr9OCxyCiSABKWIlAcQPAGWOT5xUlBI2XiaFT%2FdeiSOmQhH9xROtdGBdgZ3ih6%2BHxd86jDXhPfEBjqkAY5hNs1RtuCHx%2B4K%2BBtzWdaN%2BFKiegnEPCoTjXsjOikSzP4mDxS7xBcbXxVFqV%2BWfrIvGNjVbdPfN48BFFYc5%2BTzqTZ75%2Fxh2LSYOrAkkm0WZb7WicCX1Nd9xiO1XfnIDBFokXNH39k6buL8YH659t9uQ%2BO%2BOr6s%2Bt%2FTfdh4xgsdwI5HtWUJcWWAyRxX3Owx0JGIs73HOZ5NvF%2F%2FOQPGsj6D1LFu&X-Amz-Signature=e73a840fa86a046ecb5632ed8318285dadb1a017f082aa3105fb22d5b52ae4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
