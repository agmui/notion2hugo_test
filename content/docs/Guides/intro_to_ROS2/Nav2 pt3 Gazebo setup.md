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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=aef27972f8d8894fecf9d595a1daca08775dff0eb28298527e1155436eba4b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=f4ae296663a17778966bb96d9549a88b949856df831ab7704921b62c412b3a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=e118f9d26c717cf0144d1c39b87bc01779c9151f37ce9e68e0da169541571faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=095c21578f58ae13762d3e31e7d818f9494b649f4c3b94b73b3a071e6742c40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323IG6K4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr6l710ICFxhV7aQ3p3gD6T1q73uFdco6%2B4PMAZTeUrgIhAKzW%2BNH3US0CP6hWZABAPM%2Bb8NvvYeQte0IWVgga6MfSKv8DCDIQABoMNjM3NDIzMTgzODA1IgynSG41HEjuV%2FGTgE4q3AP1KnHxsi9CfYv8X8Z9ECRUjkqJBMr9Qf%2FotqJKIhRbtAa5cRv3nUISJoSxCoa3G0ALa5BzepQizRfrZjXbKn0tHYuxtVG48dJl7mZGBRu7PDZW%2BuAO45uBAoIM9NWtDEcZJUv7PdY9hyRomu7OD3qmUmCfFu3dWCeKBP3N2Gx8%2F3Dut1lmmeytbqJ9j7Dt6sCiCV%2FMNBTB0BEtPmCzJLLh3KVk64WwPxRCOfEsPijBB7sdsJKhT%2FP2oplVxg9hLnQB9acj2byAz584pxuM700RZbtEE7Swd0i0zNJ3v2YY6cDJseKDzog0C9%2F2CDPMrjG0n6ZxMemAPGrmqQ9JO6rV3moUZOJLnwA%2BPb5fWGC42nQw74EMFQT7GO4d5l8wPe%2BMTDqdoB4GQd1D2jzSZFb%2BDMBMcu5CwDcXlvE1f1OB861bIwHOtTOsaRmR0xtbMdeNYS5Wlo5oslNPBC89kLoF1gmIWrAUNIkZtwGa%2FZ3c7rkZLA8q5lXi21cxCPmMPdzxRemLjZWCSUkhwtWTqZAf8s%2F4j5E4GqlarwxT9o52oGZLLdY7PZsd4TQkrwxLtp5%2F%2BFfkko%2BMK8JI5d4S9HWm2FUF2PvmN1%2FjDxwuQU%2BL9rxH6KUuUkaCCrx%2FsDCn%2B%2FLEBjqkAUAOiVp2BOPkSH2%2FN8pVZakAS2gh8jlY1xFIcffkBZRvUPVNFq5AYYk4%2BIXuqBR56XKrVMrGn6yTvtK3VySjV1AtojqMpOLJ81pMoPh0rt0NwzLzMVA92wXhGBG12njJgRf%2BHNIx6mZpaQetQCeHRnt07166T3%2FwlB%2FHfJu9RdTt5aXaMX9geTfSLcGwroi6qgrifk2GyGdsNMEe3LrtHyj2Bs7Y&X-Amz-Signature=6ac27a26a228d4cb4fb319e255fc23cd0ae7d596c278c1fcf6722fed3a40f8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=c304decfbdf15eb7c2f486417d98c9fe2678651a5f18f5e11c8f3817fce522b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=5e35840a5a26520e2e3c4d238ad1d0f494955aa7b44ac12e93d5535ee6395018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=983c967c9582dc3c54aca192be54dbec0fba0163c2b75460aa17529a779da2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=c0e77cacd0d5ad322109f10b8596a1a5b9fb0e7188246a3003ad91ab4ffe893f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=e649a3bcfc8a0c6fbd42ae0eb9a8a9c8c5ca64b9781d43af205b21dd1f72c762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAXSKR7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2BKZBwJka8sHTMwsoYf9ssSxZ9wUee%2BmiPhBV4JdV6wIhAPuH0pYq3CcubhAtbJLosQdxp%2FR2NWr9u8FeXg6uVB%2BjKv8DCDIQABoMNjM3NDIzMTgzODA1IgyMvyDbAxDkFcM0N6Qq3AM146wKsKqqcI%2F9ymbmvR2MbFv%2Fmvvkf1M2d3oOdolmpCJD8ILTRr26epNCIYTMwMwuE4XW6wedXv5lMMJVCE%2FuOLd5UDjsWz7kjPYbrG86U%2FW3%2BqMimDaGtGx479DWqw%2FHviRCkw%2FptnqojvgEsEi5qg6ogAbBHkd8hulRCwtfQvnCpFsjem5S%2FGITgXJ%2BYrCmRwGNy2VUevoqlsxiVtfYtjgnm1y35tlap%2BkyuiENCOA5V62Y285wPZZwEfD0Wie4ZUsgMCx8ydOR0FSSW3iIuc0dhJPdtciN2dVhof4jbhpr01u9JhIfavSr3WfYmzPvERMe0B8U1svSjZmmpX4dO7XVZN2IVzwL%2BAYiXMmYcy2Sz5T2pr7cSf7079BRtyJv973P2gnjuu5Nb2YcUcnIS4ADU%2BPwlldNh6%2BjlaWnEuo6UaAz8Yr5NnDqv85SrAqXcazFBmCnxpaMtNqpiPkwMZnO0zN%2FpY2Og2kcuLE%2Bc3cPCWybZ6Ej2FePP4NOLsTroOPdKMDVYqzcwPWJKqNCpJzqw%2BWajddXv5S98zOq%2B2mENDUGBCvgs227UixfGUAUj%2FqiEmVIqZ2TayzxdOWuyzRdNkwNDjmNLC3UsC0ULjt88p2tLe6t0SSmQDDG%2B%2FLEBjqkAVKh8%2BL3BhMzc9XfRFOmKvzkLM85PEbLHKfMHrVtV5PE3qPSAAzP3NmAG18bJeySW2Q8Aj5Lljk%2FbzS%2FQzuN%2ByBew%2BaegPWyw6XizXNHLEgCdE11d2ltNYxVMjyIGY39PVuPNw2%2BZUqT0Lifev5s57x5OVKZ9EHt9%2FVli24hRcEej%2FHSU7E%2BOai8rponqcopocOKQ4Hs2xUZ1omQZCTqt2sRBIVY&X-Amz-Signature=86c4050864a8d840a6c0bdc146f9337d914dbcd12023f78bb026fc6a0ef9a8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
