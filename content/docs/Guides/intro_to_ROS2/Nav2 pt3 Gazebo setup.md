---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-24T23:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-24T23:10:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKCXSDZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGuiI0bakANaFQNoneR9dSneJNAv7UiVBkOKr8SXpBJMAiEAyQNagrhoPUQIo%2Ffk09d2ypcmKqymwue0CKQc6N77SU8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO0EXYsaN7x674i1nSrcA3WF4aISiq5NYkyaKGvkv7WCkUH0iEHU7jc5c1svTjpLp%2FxMg6vyYg%2FFJaA5tktue5X7hrLW9B6eZEiLrPYmD%2BS1Xz4cE8dRaXcMFarBtWhGtl0p8g5evrxKhCGJMfs28L0XYeXmCDPlzqd2Z%2FFBdd4Q5X06ni0cIezntBOxft6ZnLzqX3cz28cIdq6iW1rV1nBDljRNbuE%2BV%2FY4qjpS2ThbSoqp0wA0cpF7DxvUQwN8zmFgTnMw3ilaRX4F%2BLGBzg73ouDbw1P2%2FaGEqA210J0FklPg2AaV0R0OXQ70eA%2BhggNx68%2BXgimagyuPyMkqcC5Zl603roymL4q818C89Fe9%2Fk96EzcgR26bnMVQBt%2BxYslLkJQ2NsyrAzy%2BcEboEjBckY08mHR%2FhtsxoDnTvy0RJKQj7lT9WjRlkaZLqhSiKwzk66rpba8w07ac7OVDPfw78ZVlHd0UlSxOoxyCMUBqglk8ZaZpoGV4zvGWq2ypq3dXgu0G10J0Zog8z5BK1%2FfnTt7jyLvKZrf651cQPN%2BGXpBhbhmse5YJTV4%2FtCucYNUwO34lyDa%2BJnPTy%2BTlgjs2BCQFTtUViszvRn%2BxVCcveT6zpDrsWmOgwRtRqDkQvnDDAvASXFCUONi1MIPcl8QGOqUBvUOnSk4Y6Sqn117sIgGESknQ3vuK3shQszdSfjj5yhN5%2F7vJ79SDzVvi%2BVXiJtBLaD%2FcCojy5E%2FG5cZqKkST%2FSNWHkePNc02jiS2Kajef%2FKM3XdyGo%2B7rUlld7i96UN3rYuDQUnHAK10vUhy2xNWcjeMGuwZmto0tP3%2FTUmaNXBvHLo1cQa1ynB%2FDQi9QC1hZ0J8kq7idT9khaf9Oh0U3gJDO2Zg&X-Amz-Signature=a692110c69a17d18369f232a04fa45beeba84695e1a403889fc7fe3fbbfd4a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKCXSDZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGuiI0bakANaFQNoneR9dSneJNAv7UiVBkOKr8SXpBJMAiEAyQNagrhoPUQIo%2Ffk09d2ypcmKqymwue0CKQc6N77SU8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO0EXYsaN7x674i1nSrcA3WF4aISiq5NYkyaKGvkv7WCkUH0iEHU7jc5c1svTjpLp%2FxMg6vyYg%2FFJaA5tktue5X7hrLW9B6eZEiLrPYmD%2BS1Xz4cE8dRaXcMFarBtWhGtl0p8g5evrxKhCGJMfs28L0XYeXmCDPlzqd2Z%2FFBdd4Q5X06ni0cIezntBOxft6ZnLzqX3cz28cIdq6iW1rV1nBDljRNbuE%2BV%2FY4qjpS2ThbSoqp0wA0cpF7DxvUQwN8zmFgTnMw3ilaRX4F%2BLGBzg73ouDbw1P2%2FaGEqA210J0FklPg2AaV0R0OXQ70eA%2BhggNx68%2BXgimagyuPyMkqcC5Zl603roymL4q818C89Fe9%2Fk96EzcgR26bnMVQBt%2BxYslLkJQ2NsyrAzy%2BcEboEjBckY08mHR%2FhtsxoDnTvy0RJKQj7lT9WjRlkaZLqhSiKwzk66rpba8w07ac7OVDPfw78ZVlHd0UlSxOoxyCMUBqglk8ZaZpoGV4zvGWq2ypq3dXgu0G10J0Zog8z5BK1%2FfnTt7jyLvKZrf651cQPN%2BGXpBhbhmse5YJTV4%2FtCucYNUwO34lyDa%2BJnPTy%2BTlgjs2BCQFTtUViszvRn%2BxVCcveT6zpDrsWmOgwRtRqDkQvnDDAvASXFCUONi1MIPcl8QGOqUBvUOnSk4Y6Sqn117sIgGESknQ3vuK3shQszdSfjj5yhN5%2F7vJ79SDzVvi%2BVXiJtBLaD%2FcCojy5E%2FG5cZqKkST%2FSNWHkePNc02jiS2Kajef%2FKM3XdyGo%2B7rUlld7i96UN3rYuDQUnHAK10vUhy2xNWcjeMGuwZmto0tP3%2FTUmaNXBvHLo1cQa1ynB%2FDQi9QC1hZ0J8kq7idT9khaf9Oh0U3gJDO2Zg&X-Amz-Signature=27ac15fa908d68baad0fd8c933d290053ca4a7eea5ce9ad73421973b2576b227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKCXSDZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGuiI0bakANaFQNoneR9dSneJNAv7UiVBkOKr8SXpBJMAiEAyQNagrhoPUQIo%2Ffk09d2ypcmKqymwue0CKQc6N77SU8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO0EXYsaN7x674i1nSrcA3WF4aISiq5NYkyaKGvkv7WCkUH0iEHU7jc5c1svTjpLp%2FxMg6vyYg%2FFJaA5tktue5X7hrLW9B6eZEiLrPYmD%2BS1Xz4cE8dRaXcMFarBtWhGtl0p8g5evrxKhCGJMfs28L0XYeXmCDPlzqd2Z%2FFBdd4Q5X06ni0cIezntBOxft6ZnLzqX3cz28cIdq6iW1rV1nBDljRNbuE%2BV%2FY4qjpS2ThbSoqp0wA0cpF7DxvUQwN8zmFgTnMw3ilaRX4F%2BLGBzg73ouDbw1P2%2FaGEqA210J0FklPg2AaV0R0OXQ70eA%2BhggNx68%2BXgimagyuPyMkqcC5Zl603roymL4q818C89Fe9%2Fk96EzcgR26bnMVQBt%2BxYslLkJQ2NsyrAzy%2BcEboEjBckY08mHR%2FhtsxoDnTvy0RJKQj7lT9WjRlkaZLqhSiKwzk66rpba8w07ac7OVDPfw78ZVlHd0UlSxOoxyCMUBqglk8ZaZpoGV4zvGWq2ypq3dXgu0G10J0Zog8z5BK1%2FfnTt7jyLvKZrf651cQPN%2BGXpBhbhmse5YJTV4%2FtCucYNUwO34lyDa%2BJnPTy%2BTlgjs2BCQFTtUViszvRn%2BxVCcveT6zpDrsWmOgwRtRqDkQvnDDAvASXFCUONi1MIPcl8QGOqUBvUOnSk4Y6Sqn117sIgGESknQ3vuK3shQszdSfjj5yhN5%2F7vJ79SDzVvi%2BVXiJtBLaD%2FcCojy5E%2FG5cZqKkST%2FSNWHkePNc02jiS2Kajef%2FKM3XdyGo%2B7rUlld7i96UN3rYuDQUnHAK10vUhy2xNWcjeMGuwZmto0tP3%2FTUmaNXBvHLo1cQa1ynB%2FDQi9QC1hZ0J8kq7idT9khaf9Oh0U3gJDO2Zg&X-Amz-Signature=57340602c5f28b715fe8913e3bcd9ceae04c83d9e8ffab1e42e78cf7c0d006ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

Thus all Gazebo topics must go though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKCXSDZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGuiI0bakANaFQNoneR9dSneJNAv7UiVBkOKr8SXpBJMAiEAyQNagrhoPUQIo%2Ffk09d2ypcmKqymwue0CKQc6N77SU8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO0EXYsaN7x674i1nSrcA3WF4aISiq5NYkyaKGvkv7WCkUH0iEHU7jc5c1svTjpLp%2FxMg6vyYg%2FFJaA5tktue5X7hrLW9B6eZEiLrPYmD%2BS1Xz4cE8dRaXcMFarBtWhGtl0p8g5evrxKhCGJMfs28L0XYeXmCDPlzqd2Z%2FFBdd4Q5X06ni0cIezntBOxft6ZnLzqX3cz28cIdq6iW1rV1nBDljRNbuE%2BV%2FY4qjpS2ThbSoqp0wA0cpF7DxvUQwN8zmFgTnMw3ilaRX4F%2BLGBzg73ouDbw1P2%2FaGEqA210J0FklPg2AaV0R0OXQ70eA%2BhggNx68%2BXgimagyuPyMkqcC5Zl603roymL4q818C89Fe9%2Fk96EzcgR26bnMVQBt%2BxYslLkJQ2NsyrAzy%2BcEboEjBckY08mHR%2FhtsxoDnTvy0RJKQj7lT9WjRlkaZLqhSiKwzk66rpba8w07ac7OVDPfw78ZVlHd0UlSxOoxyCMUBqglk8ZaZpoGV4zvGWq2ypq3dXgu0G10J0Zog8z5BK1%2FfnTt7jyLvKZrf651cQPN%2BGXpBhbhmse5YJTV4%2FtCucYNUwO34lyDa%2BJnPTy%2BTlgjs2BCQFTtUViszvRn%2BxVCcveT6zpDrsWmOgwRtRqDkQvnDDAvASXFCUONi1MIPcl8QGOqUBvUOnSk4Y6Sqn117sIgGESknQ3vuK3shQszdSfjj5yhN5%2F7vJ79SDzVvi%2BVXiJtBLaD%2FcCojy5E%2FG5cZqKkST%2FSNWHkePNc02jiS2Kajef%2FKM3XdyGo%2B7rUlld7i96UN3rYuDQUnHAK10vUhy2xNWcjeMGuwZmto0tP3%2FTUmaNXBvHLo1cQa1ynB%2FDQi9QC1hZ0J8kq7idT9khaf9Oh0U3gJDO2Zg&X-Amz-Signature=9a7ff07dabd743313b5c3943ced3786d9a280a83405c9e92c56f8614c9868bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

past this inside `bridge_config.yaml`. 

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

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `urdf` right before the `</robot>` tag.

This plugin does emulates most of what `my_node` did.

```bash

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>0.1</max_linear_acceleration>

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

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKCXSDZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGuiI0bakANaFQNoneR9dSneJNAv7UiVBkOKr8SXpBJMAiEAyQNagrhoPUQIo%2Ffk09d2ypcmKqymwue0CKQc6N77SU8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO0EXYsaN7x674i1nSrcA3WF4aISiq5NYkyaKGvkv7WCkUH0iEHU7jc5c1svTjpLp%2FxMg6vyYg%2FFJaA5tktue5X7hrLW9B6eZEiLrPYmD%2BS1Xz4cE8dRaXcMFarBtWhGtl0p8g5evrxKhCGJMfs28L0XYeXmCDPlzqd2Z%2FFBdd4Q5X06ni0cIezntBOxft6ZnLzqX3cz28cIdq6iW1rV1nBDljRNbuE%2BV%2FY4qjpS2ThbSoqp0wA0cpF7DxvUQwN8zmFgTnMw3ilaRX4F%2BLGBzg73ouDbw1P2%2FaGEqA210J0FklPg2AaV0R0OXQ70eA%2BhggNx68%2BXgimagyuPyMkqcC5Zl603roymL4q818C89Fe9%2Fk96EzcgR26bnMVQBt%2BxYslLkJQ2NsyrAzy%2BcEboEjBckY08mHR%2FhtsxoDnTvy0RJKQj7lT9WjRlkaZLqhSiKwzk66rpba8w07ac7OVDPfw78ZVlHd0UlSxOoxyCMUBqglk8ZaZpoGV4zvGWq2ypq3dXgu0G10J0Zog8z5BK1%2FfnTt7jyLvKZrf651cQPN%2BGXpBhbhmse5YJTV4%2FtCucYNUwO34lyDa%2BJnPTy%2BTlgjs2BCQFTtUViszvRn%2BxVCcveT6zpDrsWmOgwRtRqDkQvnDDAvASXFCUONi1MIPcl8QGOqUBvUOnSk4Y6Sqn117sIgGESknQ3vuK3shQszdSfjj5yhN5%2F7vJ79SDzVvi%2BVXiJtBLaD%2FcCojy5E%2FG5cZqKkST%2FSNWHkePNc02jiS2Kajef%2FKM3XdyGo%2B7rUlld7i96UN3rYuDQUnHAK10vUhy2xNWcjeMGuwZmto0tP3%2FTUmaNXBvHLo1cQa1ynB%2FDQi9QC1hZ0J8kq7idT9khaf9Oh0U3gJDO2Zg&X-Amz-Signature=f1f7f05f5f316ae6e2774afd5ad794ad7737988ce2ba1807f9ffec8bf966920e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKCXSDZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGuiI0bakANaFQNoneR9dSneJNAv7UiVBkOKr8SXpBJMAiEAyQNagrhoPUQIo%2Ffk09d2ypcmKqymwue0CKQc6N77SU8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO0EXYsaN7x674i1nSrcA3WF4aISiq5NYkyaKGvkv7WCkUH0iEHU7jc5c1svTjpLp%2FxMg6vyYg%2FFJaA5tktue5X7hrLW9B6eZEiLrPYmD%2BS1Xz4cE8dRaXcMFarBtWhGtl0p8g5evrxKhCGJMfs28L0XYeXmCDPlzqd2Z%2FFBdd4Q5X06ni0cIezntBOxft6ZnLzqX3cz28cIdq6iW1rV1nBDljRNbuE%2BV%2FY4qjpS2ThbSoqp0wA0cpF7DxvUQwN8zmFgTnMw3ilaRX4F%2BLGBzg73ouDbw1P2%2FaGEqA210J0FklPg2AaV0R0OXQ70eA%2BhggNx68%2BXgimagyuPyMkqcC5Zl603roymL4q818C89Fe9%2Fk96EzcgR26bnMVQBt%2BxYslLkJQ2NsyrAzy%2BcEboEjBckY08mHR%2FhtsxoDnTvy0RJKQj7lT9WjRlkaZLqhSiKwzk66rpba8w07ac7OVDPfw78ZVlHd0UlSxOoxyCMUBqglk8ZaZpoGV4zvGWq2ypq3dXgu0G10J0Zog8z5BK1%2FfnTt7jyLvKZrf651cQPN%2BGXpBhbhmse5YJTV4%2FtCucYNUwO34lyDa%2BJnPTy%2BTlgjs2BCQFTtUViszvRn%2BxVCcveT6zpDrsWmOgwRtRqDkQvnDDAvASXFCUONi1MIPcl8QGOqUBvUOnSk4Y6Sqn117sIgGESknQ3vuK3shQszdSfjj5yhN5%2F7vJ79SDzVvi%2BVXiJtBLaD%2FcCojy5E%2FG5cZqKkST%2FSNWHkePNc02jiS2Kajef%2FKM3XdyGo%2B7rUlld7i96UN3rYuDQUnHAK10vUhy2xNWcjeMGuwZmto0tP3%2FTUmaNXBvHLo1cQa1ynB%2FDQi9QC1hZ0J8kq7idT9khaf9Oh0U3gJDO2Zg&X-Amz-Signature=3393dc9e24c6f96528a6e6b290bc94cd3a7186211f65699367f965658ad217d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: idk add robomaster arena

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

## Updating launch file

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
        DeclareLaunchArgument(name='use_sim_time', default_value='True', description='Flag to enable use_sim_time'),
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

Remember to build because we added new files to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

**Result:**

TODO: add img

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

TODO: add telop twist keyboard

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/924fd9f9-340e-42bd-8af7-edad3cac98f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKCXSDZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGuiI0bakANaFQNoneR9dSneJNAv7UiVBkOKr8SXpBJMAiEAyQNagrhoPUQIo%2Ffk09d2ypcmKqymwue0CKQc6N77SU8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO0EXYsaN7x674i1nSrcA3WF4aISiq5NYkyaKGvkv7WCkUH0iEHU7jc5c1svTjpLp%2FxMg6vyYg%2FFJaA5tktue5X7hrLW9B6eZEiLrPYmD%2BS1Xz4cE8dRaXcMFarBtWhGtl0p8g5evrxKhCGJMfs28L0XYeXmCDPlzqd2Z%2FFBdd4Q5X06ni0cIezntBOxft6ZnLzqX3cz28cIdq6iW1rV1nBDljRNbuE%2BV%2FY4qjpS2ThbSoqp0wA0cpF7DxvUQwN8zmFgTnMw3ilaRX4F%2BLGBzg73ouDbw1P2%2FaGEqA210J0FklPg2AaV0R0OXQ70eA%2BhggNx68%2BXgimagyuPyMkqcC5Zl603roymL4q818C89Fe9%2Fk96EzcgR26bnMVQBt%2BxYslLkJQ2NsyrAzy%2BcEboEjBckY08mHR%2FhtsxoDnTvy0RJKQj7lT9WjRlkaZLqhSiKwzk66rpba8w07ac7OVDPfw78ZVlHd0UlSxOoxyCMUBqglk8ZaZpoGV4zvGWq2ypq3dXgu0G10J0Zog8z5BK1%2FfnTt7jyLvKZrf651cQPN%2BGXpBhbhmse5YJTV4%2FtCucYNUwO34lyDa%2BJnPTy%2BTlgjs2BCQFTtUViszvRn%2BxVCcveT6zpDrsWmOgwRtRqDkQvnDDAvASXFCUONi1MIPcl8QGOqUBvUOnSk4Y6Sqn117sIgGESknQ3vuK3shQszdSfjj5yhN5%2F7vJ79SDzVvi%2BVXiJtBLaD%2FcCojy5E%2FG5cZqKkST%2FSNWHkePNc02jiS2Kajef%2FKM3XdyGo%2B7rUlld7i96UN3rYuDQUnHAK10vUhy2xNWcjeMGuwZmto0tP3%2FTUmaNXBvHLo1cQa1ynB%2FDQi9QC1hZ0J8kq7idT9khaf9Oh0U3gJDO2Zg&X-Amz-Signature=e2b1f16414456f509a4f9d6c02292f7b1a66c83780de9c74aaaf82eb92879744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
