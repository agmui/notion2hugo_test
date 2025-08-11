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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=36624b49cf6e1b583b5b1ffcedb323901ec89e49a64f2640a7e5d0c3682d102e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=dffb2ceebbf92e1cf826446f1cccdd1d0bf33f9b96362c643fb7f1a66a7e5c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=497eabc6df1ed657b277f5b1180f8aed233c018145186a39ec5987909ce97001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=1369ffe4d9cb68adfcb3f2cf4a87038e708ef62f169644c1fd358a2e53bdd4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z524TVGK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPyPrWJ9CeZ39mlnP3aOUrhKWO6ASpC%2FACsto2XtbfbwIgU6i04KOh9CSY5sJdkKPoTbdarnp%2F6MNyM1IOnyyAPrcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKISQSzpZRbYqZTFHyrcA%2Br3mY9D31kOBOvXOnStz2Yc%2BvTLINATcPwzKA0YPYiF1f42HDgFpgBmEMteCGT1GrYtdUozOdcnQDQONw%2BXl0cZ2JhcQqZZT%2Bl3qhJyddf0T9ukmSUAbX8Py4P4KaLmGRXtuXK%2F%2BCxbAdIxyhvP%2BecYoJPsqrC%2BI7mJM%2B2c5B8QqyBhdu3jhlsmg6ZVh0zHyollXW3%2BmMWU9NzIfOY2iNaidztXvYhC9HTbSd1qQlzvwiQBCQ2s5CZEhSZJFzRZL%2FPxUrmDT0d6Z9i1Q43aJsMCklBZf4O0R60B4z2oTWOQYrquSUb%2B7wq2dtnpyEt437yHzk6Ps80zvOPbTzX9oW3SS4NUtOiYLk16gyeXc3ZIT%2FNJlT0NbXd1j%2Fhpxle8fln8zhG5uMM6QqiEGpHFRi7WGqmDWNlRwnSMKlU6hMAgH040HdeYkSYmaJOTn%2BPk1TmLcoyvNMfTG6oijETWxhy53HLwWv8z2G8PbxLRvDPfUgbWdjN1JLuEQ4%2BNGGV6lzYb05MjG6Abmcr4HNJkX1FffiIp6NEGURJzkuOGSxnbeAepSXg9gbbbvRMJeIV3ZqVQyBRAnGKwz2k95yVtD7mSX%2Fqvsu2lTIJI%2FlC7a9%2FDRnxG%2Fk2GbsMEuDNiMI2d5cQGOqUBULL41XM01YX%2FqGmxeVfr7mlxW13G0oVpBSv7%2FBmWVxf0XuTsc98YU%2Bl6ccgRiniO9uB%2B%2BMku%2B7vQ%2BCUJuvfGmq7rEmnBGIyitOdiiu0ehOLJeGW6xbsn8RhL9AeutxJyVt%2BxJ9Z2YK1VvXAjbh%2FIvDCNGc6g9vVobIQee4HkYuWFcVbX9rR3wG3VtoJ%2BImxpAQv2FD3L4vUX1kBaiQs%2BP9IeeSN8&X-Amz-Signature=08f16058a836861e223b6667f279624930e9a25a0d1556906f9dd8ce9c6667f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=0284c3d557a5d1a16fd78fac35662eaf9d4cf0f0c8d40993fe93f9ae141756b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=4963ef62e83e1986d8be8c9c3ab0eb7b5c58bf9209f214068ba20e5411004df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=abbabcef90c71ce99c964626ea9261ecc98ab2b9b9e10ddf62ccf10a6704072b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=7cef5e8e26acec5d8ebec906e09a0a72deb373aa211bd0399a0af996844db2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=5a485d42e052966c5c6dec7fe2291318d080d0c527835291633dde9a05bbc3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OF6YGT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oSU1qWmgLciWsEyOyStA4jfT5mbDyQ%2F8g8W6n7258wIhAPDvkt3zBqJskf8BTK3q9m4OMV0pDucTK8z3ET07IdiWKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQPaB5Z6Ph9wKIRuYq3AOmm8Qgb6K%2Bk6yahBjfUaTWHc5z2dOc0%2FqjAggFHEFrGkxFPud7TKh8Ji0Wfbepg0DkdPd9%2FFlioyf4Q47Q6bbDCYGsrL2eIDRDIKXx8iwPuOg4%2FAT6fuSrNGF%2F%2BUiUffTZSIQboXK7Jfq5AV3hQO7nQOaP82mN3jzHJq6%2BHgMFybWTum10mrlpz%2Bhh%2B4obbDw5JzgIPu0e7xuxtG%2BkdyJbrvGpuWVYs6AmFIQcHxbTQttqQjhSLNb4l3WVZuRoVth5xptguFsCg3BGDLSckiZKtVx5Ae6R791sz4NQsj9uR%2FL8BwyJGkXFc954okudMgwhMmyyNgIxEab6Qih40pDya2bVRSuvyduGKvgV%2BpgVOrQ1xx7KPVGo0oJTbHpguONs0rDcrgz4HvMf8CioABFzzevPWXwUHeOXS9TjRUB1UtrXUGMCyxqCIibu5DDZ36TN6773XMvJxnGg39WdO90CTF7QCdHHYHqkS1MoMfeFvY0vFpU3fzQyhzY2PKeSrDlh5Ja04MrG16%2BO%2FGGc%2BHz4x8VCMtu%2FdGiUAabuJY4Nw8bXT5lod9Y7PVR3dQq1iQkDjK8wYwpqomCije95Ruf6lpf0KZqdiwoM9Aj5SiqS%2BwFutyabFcU9g1z1FTCKnuXEBjqkAXKUaH8zdFJ%2Bbg1RCPb6gNsfDEFoaHOd6nUcO61hs7h%2FjxoWlIGWe0VIZN3xtPa7qpBjN3n4NvhS42dNyDCsNeSlm71J1K%2FqRQpQyo8SX%2BQvaNtW1Lywe%2Fpo8NaOAtmrb%2BNXkmuoJvTDYBlKb1FPGSQZ9B59C3mJa2vTUDlP8lNU2YBqCoLrxFUMlHwN2aGhWo8BWIDXriFZ2sNP2U%2BgD%2Fovf2uc&X-Amz-Signature=60d8bb4e20f5608373ef36dec273dcf030738da60536430896178d7d238270b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
