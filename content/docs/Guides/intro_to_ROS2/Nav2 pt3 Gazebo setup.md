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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=ee00de9f07f910aa1d189e1cc8597d2aa78613b40d5ab01d8a740055ce23ee7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=58d5078d13cbbe199c67ea1563a3493c1f964b95f7b3514e2f1c8c0d82c7f3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=3c46d36e5ac310f631c4f299b1af6de2f068987ef4cdf97ebb6b8bab7452f026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=3a37c180815f47e77c00e4105c765ec6ea8dc274a0b7904b2196ef3c218a81c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2BMKPK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHAICXJXmbF9pDQhl%2FJi75LXLk1K6jkw%2FB9FtDe%2BUMUDAiEAn01cghlTmm876Ybyhxbx2DFc5T5g%2FZQz6zq7QYsJmsgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOEXU6FePl9g1Y2jdyrcAy6fYCF91s0LM2NkvL9fbotjX1dTpi6KoVaSoR8SkMfZWGcNkSTOZUsWv4JFlGs140wCFdVk5vWkz2qRlNNA%2FAwl1vtqJAhM3UmLwkk%2BYnv0Zc%2F3hzyiXoXoyDL2FqG37pdtEXvb9Etm2mFRCtJ71ALNXFGYZZiBuXqN5B8y6XWZ1HywXa2kjJ57pK3TJTfyltKq382t0E4aMYraqMV1%2Bi1Kz4S1PZxkQ5wDpMstTvsyakUfou86pViLJES7c6xpuVM8hWVpQlVCuK8CihOoYic3SttGqfZOdangcbBLvfYLUVm4LWI6YPfMXYHti3BtWNs8HvqoleJixekFBExSzMhi05n8biIH2mDIvcfipGrMAT9dQcI8HhQW0F6Mi7uM3nd6zU5G3cnizUoMxXebcypUZZkwz9h4FWdfhTZ77Awo9cWfZKTDFqIfL48qlJNpicEORY4AmsYIhDvFR8vwM7XjywtRH33QQuC%2FPD88w9BANVObXp30UKVLTO%2F9WVEjUaKsU0y1YmZdmWHIzLqDX%2B7Qe3xao9nm26vI2nDlP%2BJU%2BvViwU%2F2x6E1PgTSn3fMPXHyLvTOJCZAd3slrHKE3OEDWwTYIffPGBmwX2JdYhAZkjzPfHuYp67jfD2lMNTFzsQGOqUBQzGHPVENL%2FfLjd49rNZUjNd7XoBT7AhMZbN4p41nMrvSR72JLjtpNuXf6LukKKwkLvIx4jOheuBSNKMGnbMfoK1mlLmm8LnmENQP%2FEqh7YSygYR5wsW4%2FU%2FE40%2BdmXemgmqN8Drc4eeTVd57CdMUchxF588lD2TJp4Sdb9ABm73qmC08bcdkxVVvkvNdT2fhTxhsH%2BFgyMISPeCsN2ydDOMO1pD7&X-Amz-Signature=f1e5e9e9b8467f9421ce6b4bf1d4246d0ab1a5c3dc1eb09acc7ec78c4f3f0f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=cc872d398df92e7b6bb99ecfad42c4a9e3e184d967d0713b6127d3613d3b6716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=46028e2dc55287b8e53dbb50712e98b935951258345804a16f15ec94c4eb7412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=1d96b8d9c47361bfe3d5663a351e1f7e7f496987379532758f95ecaabbdfcdb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=fa5213e7e78bd21fc51bafdc0aba8d3c49a649be09d8ea3804506f141830d41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=2919004d8978e5323ea98ad0a911bb0db7cc4f340a1c816e5d38033e093ed45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUUTRBB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDEXFpYWQaz22D0d8OIzxJbd35hLvUGtj4yhdGKLN%2BNQAiEA04PhLLumoxlJh890k40f6VLCbhvee6RQkPBbmgnBg6Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDK4IPB1a%2B0u5tLeiYCrcA2eR30WPJpRy3EE09%2FxN0p6dBT4r6cVF5zkqYdgfijOQ3h2TusadJSopxKisLavvGbfAzrYl50pxsqEAtARRcWLc1it3Izoad3fTCcFMVL8ZYCVNkb2p6Ijo7UuMWSz4BVXz1kRnF2tkTV4ttpcvXA1b7NKRd4fcBT3gJbbCotRFrSFwnj2ClL9QVW9LDP%2F93DJ8MvOvvOrEuIEcrIKa6UTlfZR18i0OJzDzQJC6hvF9y8%2FH%2BW8MzpKkXUyjfg%2FClPSQQvZehHgZWtn0RAXqcgSccVno71JZWiWhR6F%2F%2BibkdIEWgQen7cgJPDAEr%2B7FtS8BkbpYcRRnRM1ue7QzhDs3%2Fozm1ToJUpfcpBIdG8i2Vphh%2BqFbUVqI1nPFKEL6st8ZcQaviZgyLGGzPgDWYTzyKV05UjrS3PIyN%2Fh2iBN59RQV4tXEuduWUXP1IxznAqA5bkBd%2FVsM9WqNId4Uizp1LK98wJA6drT1ZJxZ8lo1YryJfZra3Aayx%2B3%2Fy8AwcqIQL%2FQE2Y03JrAv2m57siIVBxf4wlMQhRyK2PzUpOzuouW1xjXbAdHK6Ko8GuYfMUQMoy7HAzyPEcfbLYOKCVHqnTedOrcTAIZMTuHEoM2kF5BYcfxnPg03ZTPQMJXGzsQGOqUBoqiGsZrPg5M1M9lLEaMjbD2wF69Ul0xBRtLvh8SxV8zPIkCRk48xmCWN9fPtEDgDvLOpNQEJ3ztu%2B92YwbK04dKsZNtmBCLTNVzlPQBCOYt4snUImhXM4VtfMsmfGDcNcNrIXD3VLpMuek5l0lVIPRgS751JiBVmOPgnSk3%2FJ%2Bn8O%2BS%2FRaReEX7noQJHF1KTCS7fdEendb56piYLvNnyJaeQ3BBb&X-Amz-Signature=1db56912a734be6f83d8fd6a9dd22557b150d743e0be5594165f58787282d4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
