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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=4064d5b88a990dec39d8833ca45e9fdc26532de87b3eba47bd1af03d6b740f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=bd1272f1bf33e7d6e92ef03ae56827e37dcf777d0d87ed50fd69dc95a2506843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=6124cfbeb7a91b06813f20235e9d39a4a701e1a3cdab1d737b1e13dcba17e042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=71de5b0ffe8d5914006e443f11b4a70a982930c2d8285493870f4872ad7b7784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTGWOTT%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKWS%2BlfQIvnagjVxofCZGsWljkqYLVpFSxKgr78K5E9AiEAlPOvFYttB10d3qCtdS8GIIqOs9Ph439uWOJEclgyp8EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW3M0Yuve7IQUeEOyrcA6BEd%2FVuq4fnIeH3VIMjNp2g6tPj5G4VBl%2BCFd01%2FLHrj%2FFJQCrxkFAcF8IG43b2oqbFD9KwN%2Fu%2Fden58i9Cl8DHD21SafXj0FbD%2FUPfs9I7AKtDjK4Bi93RiGTJE6tAuijt1hDwEA35ljRHr5ccn97iU%2FDJsE81RC2jwE0%2BDphkiezb5cJOlIJ1vi9kZ0wgOMqzKygxbFwWzYSq%2BtjulATgQdVGwWFsMdPFpjYnxt25ZU9guQsdBXIR14lAO%2FZXmFNkQ6BtLPPnv5ES92hLcWd%2FrfLOujg7rzDQgTAJ%2Fd7Dut2Ho4sc6bpwE%2B5trK5o07CXQfhbce8a5bBVRyVFzeSQqvvQm5fynMdN0mUWylVhsBj3lBhEEC%2ByWYMpA%2FZr6c1dNuUrwB0MnAzzyB4iTNFZALWgmSfEecHgpfx44IIZVytImZgiSX87lZSAQxyuMryHAuhn4l1r0Bq%2Fb99czBeys%2BndV9lSJsBnG4l5R41ZKH9Aia2wfB1Uc5%2F0IcWqzthS1o%2BIDZne%2BdQ75dKdbk2QkBYzpODQS9BLcUUdHJPZaGfHr2fqZ8LTuJJEFrdXTg3fKSAXd1m41ZVo9LHS6y3rCIjN1oTbU3aV9j%2FsebL1atGM3jKRc2acBNnIMOK5sM8GOqUBZeazmJlwIRVXzS34%2BpuoB0W4VWhSzO8yBsDIl3r7nftBuR3%2FrFwWQYMikZifzh4X1zW0%2FRWKM9WnRf1WRIZiQpcZGxAi%2BYEOZftO56%2Bz0dXGrHL1407kC0lvG6o%2BqE0uxGcD%2B0KNMkZS0s3UGxuonx%2F3wQD91MAPeXaGFPbOXVr%2FdxpSmV9fbOBNAYk8BEIdPHt4GMNJUQywXuGBLC734Cj8BPrQ&X-Amz-Signature=5236a50807f4f02d3dc80c4503d7944281dcc1706076b11cd4e92542653ab42a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=085879000b68c96132af36b8001b875a39765a6763439dfbdb935a44b30de842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=fccd2d9ebf06b711152e4cd13763ebfd3485cc8bf3be9bc090bb4f1721db01d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=03b493022cd8f85669dbcb10d1c430371ecfb058c682cec1e4149d86c6a82266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=5bc1d1455dc653c234b742dae1543bf4305b1470bc594bb7f5f5d6c8e9d94400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=c8902f9b1fddce717493f91b64a3fe60250a20cee4763a476b3bf83456301ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7MMMZS%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduexMuP5H8bx8zZGYienA1Dr6Sk%2F102AFThj%2BNEXNlQIgDGjfvIstjVIydcf1e%2FjAgTMmDnJXVcDTMR0cILdrFuAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWzvVUfd6UPjNGnCrcA12cj8Zuc6%2FTpTd7IFYiINUfu6NdvZXG%2FebqUyLhupu1YvvtW9PIydIxg5es%2BIZ32Fi6tuKwf6wjoKNit9zbmauXeY%2BkpVy2LWmthqZCapZWnW1pHrSvV%2B5VLQiZdRz%2Flo%2BoXU4I8DSqPC9hug4eih7UfWybojqnuHO718cQ2654dMpji4v0pmnN%2F7K1NuzQejDXj1l2c1aZkmRQuLsXXcIRnV5DaudBMAx%2FvWRJV%2F%2F3w%2B2p7oOFqqBhk6mphP7Pa2Cbae1q7aKtHlfHrXspw3Kw0sOGX5bGnl0XfgSrx0MHp1L7NfdGVmOJ9putZ0KnSjPWiqtxMDotJfet%2FGUm4u9%2BuM3QxeiOmHbxa6ifIaFP35A4zDCq4ZUJaKxnwYn2xPbhPWV49zxhrgqzyjoSNbwwhIqVrH88PVVCa3r8oImJKadY3d73n2WNbfCzSldYGcenhLIKMOWPcDkd5MDlCu2ttYle%2FevOGFh9yAIidgma8XntvvLWW4dgP0VPG0If2wytwxqGoFgE0x1sKZBlPXEhgB2fwQehJh%2BuX1lfeuDVvGh%2BHCznWMcxY5sZWyFZd9%2BrTSgXQg7tqCDEgA6NUXJ3UfSujLMiHOKRJjAumYij%2F%2F5iBJkzPu6K7Pe0MNa6sM8GOqUBms6Ep2rpWwk8APszgawV2MEi4r2mBdjoh25NHqEI2B6vVJWtGarLLKb3W9Y3Pghpq2nw55JiTGeJxtrzdDqwoVyAOXUcBLgEpaT81M%2B3N0SAtHaX4DJyaNkkjsLo%2FhNewmi932tK3zlC189GKD3GwKciYl4F3Wmho3nJdTub1MWGMcP6AdwYtbw59dx8H8bd8IWrT6FAmdF5dYkkN2YGRIv3rFJl&X-Amz-Signature=f1c7ccd4d57501f80e71b63ae074dc8dead1c5f6e9394fb5eb44d7f99985c7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


