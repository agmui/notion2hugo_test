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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=bf146ba4ee354b036cb4d3c91c971b0e95febcf0b5e8ff1533c72767a3510622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=5d3aac8a1dfda871791a7ef6bd0e7a78b760b39cef89c6aebd4767429ebd7ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=9b8d9d2d4304e01f8c8415a9446ab30312e46a258be990fb7cf4a31725c9faca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=b6c61236584fa1a19d4ef8d2c3f99925364d160cfa4cf86081af79cbf75747e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCZ2V2I%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERcRCPn07p3EN1q2EN0u17h2N77UPI%2F8YwfRljPHepmAiBkwKWjFcOdRTqAnpANA7hDtTo%2Bpxjfj6xQlXV3oZFHTSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMAq3Z%2FLDsn1ND6Oe8KtwD6pylv0wkyHX32BQemfXCjaHuzQWsFxyp0rm7ow5wPNidmqitnF7hHpxfWl6rlk3wti%2B7mE7FQtLgxhrw%2BhTaHaYe8qVPOqZS7fazXSdG5jneUBzsb%2Bm9z%2F4kYTn7elHaffl7XKT7w4zwKppr62Qr%2BThiayucsZaCUkwowJVbMoDhQN7mEgSOgFcuNKOSjIBhbZ3uUfEEBgvyo7v%2BHF%2FVTxaa71GKTYTwDnNtXSNGZ%2FLmgKcDXmfm9fUmrVcx2DHgPdy%2FNbVWR%2FYJ%2Fd2OQW%2FZMhE89qBnJ4J8o5qhA1fQpsj%2BbqQx067CPZb2ShQ3nXRd5kv2RCbvIZHiKu0%2BEM%2FDLmGZbc4paLAQDujaGy7ugXXtrYZc75fBtFBmO%2FIsZ4E0REBM7HpVwSHkawb4bOHd3MmWnia%2B5sj5THBoSUQPeFK9BAFAP4G2GiIldb1q5qtMqT39uxRwnt%2BfqPz8tBiWHUqnXwg6g7rCYsN7KvJ8lTKFlZgXmw4ENmkeIV65LMmnG0BGbvFjcLrUSz5v2R3kzySnKdiw4u849P8J6mTAwage%2FeS9xmkMuQGpvK%2BxoB%2F2x7s1Ovkv07XJ7LsMRnpT7EAoXGhcFMiouWkScZQZbQHgkz9RvetNpkRN370wr%2FnwxAY6pgGUUEq4HLvYdrtGfZ%2B0JS%2FBNpyAYF%2Bh02XvnazEFt1DjRkwfIhM%2FuI2sJZeXoO7kibRs6klQRiroqE9vNKb15PbLhpxoK%2BlATHExl0yMC9GsCe94elmfiC%2B240bTYKOD6lDU%2FsrIarZPtTADACA9DBVXzUL9ujKC%2B%2FP0yN8xRmJBpvYAg1AwbQbCBLmtsPgSEZbiOajvFRXb8J18nDdIOqV6Vc8v023&X-Amz-Signature=cec66ee90f2ad82969974ed6762d2adb5fc82b3fc08f73f25d0c59e2ebb766a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=bc8aef23a4c555291637edec32baf265e9277460bf8ce65675b54399eea8c857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=6f62c34a5c78c49e43d019e428d26cfb7535cb6aca85d4d6f2e4f67df1921a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=2de2394235e3456c37ba82588d3f3505e8bf6e17e90379e1c312810fba101cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=bdcd9c515ae8c788c8ffb56f40d16e257f84f3b065f16fd461cadb41f8410fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=c91e975b605d0a6097777cb42d4ce73b1135b9a99526ea2cc2c9ad533081b098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGLC5B3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFurqhI7A7KJ1BkgycyKIa1y5wGg9ELfa86gqEL94GXyAiEAtpBPrAEU8QUUjjg7pSvO4Q53LqjqRIuNUmCSvXlfmpsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPDhEyG0Rr1pF5kZUyrcAwoa1GUYDrrrqNlPQKcu9ZNdwzNw%2FNY70Xgjh3T5o%2BSpSVWI4ZND16Fbse0eBk1dkYE9RPuGAia5ktPli7goeXcwFRB6BH%2BlGi%2BPcI%2BuIqnFzrxXuGqiv37mcR%2Ft1wRi9ko6wg4V5mjAsvMskMaYTuH20BogA35A9lu%2BzfPeWaUYKM8gvAj79tCQ%2FhhAw0pi5ucPj6SmUAStgvk%2F3%2F3ysuhlmdPK1AAv6nxg8bLeYR5pI5aD44jvcDjIz1%2FrsXBHdHsj6jpKsTdAw0Hoe0f0mHDva1cK07YrT4F3LmUdGty%2BZQjoOTHK0viqWKdmFoHeB4braeSXhSgUe0HP9Ebg4PrDaDmYRaeUomkzOx4sEJAjKFXn2Sj5sBgnE6mhCSTNJaJrjrkzcxvicIFjehIn9ADDIqGKPUWmuYRWM1gY6TSuFGNxuvcKODGmuFSEuJJN6%2Bnbn9dxSEZsNDhF166HbcKIX91zSbhkPEa0NQIhArQS7b%2FmQ4nK8xNWHvvFYAif2dEJ05snq2GHDAo1Hkrt3KAeTItCfJyoSser6I%2BeH2evml4MoMTuz%2BoIrkR6Z%2BBX3F38grNIEKI9%2BVCvaxdmxdGcdyfTjdtrwZ5dBhU0EYBvg38H29gUy8VBWC%2FPMKv58MQGOqUBDPqHv%2FGwsMTsZpCXKGBBjcAm%2Bu8QpQ1cDgy4SRg3e5TzHrURg5EhF5r0RlWAhN13WKU8m2y2sPFbjimjeSKlWWWPzZAwLiImZZlQS94%2BTUc5%2FAwhAyNm3mhnKnF8CTVtcFJ%2Fl1QzaDjt%2FMYhE9hAMqYqnAs5IbcehVa01Kh%2FKff27VC4tqZN5qvkVGZEDynZ%2F4BcqoyPexLtxnflah9Qvg0OBmqk&X-Amz-Signature=6c062aebffe5b21a5fb6f879754c5036ab4d1c023c95ac7a4d3f71e498d564b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
