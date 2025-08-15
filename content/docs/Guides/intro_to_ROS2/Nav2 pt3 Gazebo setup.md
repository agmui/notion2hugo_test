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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=685b482a3a9f9c32d1cda1f68c6da28c5b292c3bd1bab65f68279290afffbe4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=a2462b2da82016048fe5ada6a6cd7b55d84189c1fbc26307c32a5e1d7b314900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=9cdc1c0943baf2886813332750f7ac9279c4bacea22c4d33b59ec86b2a7a932e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=217c660cd3a5606a4d578ca870c60096257d8abeae0f1bde096513335f32d009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FAYB3PX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDhM4tSAAEllNqmENut2fWFM%2FjtdcC27KF6ytPym6BKtAiEA0%2B2MBPB%2FN8plLLITHqY0MDWguSBrpWynMPB6%2Bm3wqLoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGG52SYR0adtPNldpircA9FfN5jaq6Evu3snwBOICTRztQ2z4w1eUKFRhJz4iO22Mhq9hoRkxa2500lPs%2FfP4yvW2kLDjjRdP1VaLK9K2T0muteYj6wjQBH9%2BFj0MKS18za1irOn0vF1txiG%2FobAzkNABF8i6oFPB4riquWmS0MyNO6VDhJkdZ2II%2BIOqwk7BLhsQ83QF0FjTqqfn0WXBVrv38xAiHLfwRuNjCqk0%2BS8747XlUYmcZrdibM6tTS7E8S95MLquPvAb%2F%2BiuvmLq39bnZ1619%2FVmMDEx5Qmm%2BG0tCZurpnf5GCPNhgK2QcwhnbbHqO406TlRRpwrU3k9%2FTZ6ieywO2y0njWRX7x5asz4KjNTdvaBQ7R68BhHDWtTF0mKzF%2FfpO6X0YvFsmZiLJdD%2Fa1dRm7bUrON%2BlrjegcAhMSqj6lPurlDqq1XTRxbpjWE3JTYpx9Uj3hnW%2BmCiXwYj127DK2MMYvrqFj%2Beb8QN9lQ7ZVB5Rcqsv1I8ilRVaJl3D%2Bl8c12bOHZR6B%2BszI2kB64e5ApMM%2BWjQHueEkJhzHOJtwrvc7loTjK6iXNS0aWuIlh8IRpmth0NyK930Th7fdS8IFdipxnzQJAdYChDfWNgdOFGTFfvMKRXTvenwI1BhERa7bCdRxMNGj%2B8QGOqUBk7a6TYoy%2F3rh1l6%2BfBGANFyUeg4zfb398OnwwlZ1vilVuEcnfKOMp%2BwtjSlgpL9rLC14t8%2F2LvnfnlqN7fUs7IOW6PUkMcWYsUYQ0teG2Ru5WxtQk%2BoiW%2BL2xzAvG0fdpJNpL9AgoVJ6yJnpdzcxjpOmUkyXskX93bwULc7tqKlHNWmQ3ntxq58OARK15YD2uRdtPedMGEUWFheJ87tKFS22EXW2&X-Amz-Signature=40fd96fd6ec9fae19dd5f1735f52e743bfd088e7c5ca9ed67ebeb4d5acf40df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=653efc718eec4504a151af568101986047e3f0fe7cb2438def4931cf159733d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=e0d1ff5a8a1c08d596e8cdbed23da4564101eb2ca35d8b4737b1846052145dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=40a3db0cf8c4159bc9044a5d2a8111f6fd0f1e79cfb0b75582690ae0aa7c48d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=8dd94897f70275a10d2817cdc9e28d9b163b6e07c7350105bface2bb98fbd765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=1e8a4f27f6199a19872dc986ec816d11ead1fa212cd22188b68299faf2aa8069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKHVR7K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHI0upNz7iiTHS%2FN3TIVSX2XsA0sOGgnmT0XpSbeN45yAiBUVrsMkHNnsh6%2Fw8a1TMCl5KZTx%2BIjs5ijBjeRHWA%2Bxyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FNVL7fn2xUJh0XlGKtwD5Lma2XVSjpUK9e7BCwvOOXmOaXOmuZf9bRbcFVsCy2HwPK5YQFapfqn%2BggBpL4IQfDKTKyna%2BDP%2BEliHcTrigm7Bn619RW9jn7B4OCPieYq898EtT0F3I3OZ1ZjJZZKLiLdQ1A0LZ0kkqs3VcbV6J0GA6vqDeAolZwmSgdo1JCwdzfCQ9zP9BrEa2HTAV2HLaQNZWyRaWctiqSU50Sunt4ER2Vx4qfStXbQzFWTGS2Td4LAAA2HAuqlf89p2uSzAsW2M%2FSt%2FQm%2B5%2Fkh%2FcBVDoZ67bynWe2NOeBzSxpY9LyKBPDWl9Xf%2FuboUl%2FzXqpeT823x2P2EQ77AYqnJ%2Bvd1%2FWwQ16d40hqENPSb06In32FeWFZBnWpgYemKJS%2FCp%2FlQrUUmuX0Re9SgE%2FUPpe%2B3gEMuFQQE%2BtZGYlPYbGzfWpMYEBetLxyNRW8CZyqGCJCqtJ8SjrQ5Aybx2ZKvWho4VJc9B%2Bdq5Ee6G%2FWkiG1YJFTIJhfltuxMoM9gvmKNkG6sEcv6RQ3j0GJ5Wxs8D%2FGxASLWxOIYhe1vgimdD86b2JM9GCYFyeQGEDGiSHK4vBbbxlDQ2mpl9kuj9yiUSkThmjT6T%2BqIJU2xlVrYe9mnwpbQFmdk5CC9hTtzTvEw5KL7xAY6pgEvOOGNMRxW%2Bt8T5LJJ9OF43UgSHHylMCr55Z2hezBUWmatQyj2zgR8NZpw9Tjx7aJ0Q2V6LRngUh1mtXPK3q%2BFbMok4qYjRmaNjpPaJ2xMFiTREm%2BtcASBXaScESO%2BvDdw%2B%2BNgEfym2j%2By8yBLJwyWnZWtrDzBK%2BSiV0K7K23o76ydRculYLJu2W4wr75ZsyeTAjzPUfdhjaVGboH%2Fctl%2Bgekrpmfe&X-Amz-Signature=97e309408eb3d4facf01982e018b0dd27ab8b358e88305fadce5c2a1f498776d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
