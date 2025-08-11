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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=b1cd5c740ba81f0dfba3c278264f6dcdd26ed855e91a2c222afa9a6153a15ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=43d2931ca35802a7553df40bdde9505256fb9e76ffd70cb892be263f4b51baf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=8c794f3e97a629f7117008b484829fa8d8d766378ed440cfe43ed167d275d8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=f2081e4ed30c9412a264b368fa45e33995cce4ced57d0d744ad7ea968e0d91de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVELAT4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkazbpsVKvSc8tmHX2Q6Q5ZKUE6SXuzskiQTlSEik90AIhAMx8mO35pPjGSsZ2KBLSA3zFnMGSg22gxARDZcvyMgvkKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIbrnT31D8u9BZbJsq3AP8SU8yGnGMey%2Fp1afCc%2FqLVdFxYr9cdlCqA3iyIabEamsuYKVm9%2B%2BI8aykY99XZaqxCRfp16%2BevK%2BMsPBn0kUnvVy67o24d3xKypRhlsoxmG7%2FvAY2t7nvqwFqEATZLAhdHg%2BGa4Mas9KzoX87CmdgGgZDFLdNRdy0%2BDZpioHZOVYsE9zuJ9DbJP0TZIoz7Yx5%2FOI3I83POdGO4YoV8PtnMJY8%2F22apDHC%2BNpP3va6fVw5dGHfXBhBpUdScS15qbzYGFUHGsAsLr92FdCZQpJUnV%2BPJxMQQhLhBJgK%2BplGDhVA1LnPGGjiRaE1KqnQSmvfVrJs9c25Cr6TAvidN9c0AALfYZ1rfLZijc0RIupzCVeDyOTPMNwxliZiOXVtDppWmLZbMdWef46ds3FvpGY4fGAkk%2FUbT51PYLySuzBBtwyoogu8wkbs4Gq8zOsYi15tBCXkmWLlBsTcoXpVp0b11TGg%2FehE43vPuYaYpG9J98d2lGZUg%2FH95sphrMpjKgQa1qxO44EOoAfMXjkb1f39fLjdK1Zz5InbcrtEOKhAadS%2FWFdVnckzvCVEwI7wdIUi9Vak5xb3AkInyvqNgdHNE1T5hdtK%2FmxIsCnjS8zpZSIJtjFU4yeC9NoV%2BjDpneXEBjqkAWa51DK47o%2FucPOEfWOzTeRm3kAA9JLEHqTQoQoCkhUx0WCZY8U61Al1vjHQENoATODo3tF%2Fbe%2Fz5bRbACvSRSsjG%2Fyk3M89ojnhc0Kf%2Fl9AfITzBiYC2mGZa5xuSYnfHeDZC3JcK8tQyAXxTZx4iIB5XjNN8UMed6j%2Bz%2BTArW%2BNpuNrCGL6QIwYjrc4SO%2B0nbOmw0bLr2RzkwF%2BJyErCHCOV%2Fii&X-Amz-Signature=967f604347d9eea32b84855d3f43663ea2bf76f053cfa21a59a7a48445c62b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=aa3296c0575b3b5eeaf6afc43e2826e716a51b2e0860118bf4fac40f53431599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=75d1cb72487c57a98521f5593ad2704ad4340ccf4b707dbe72b50d150980abd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=02c3a066d95aa7163c29dfb37ec20b51593788561297dccb59122b5dbf881da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=343e6c5b600b79f2528318aa3fb2640cc8ecec2b51af6b4250afdbc1e9ff7c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=b12f4edce2d9ca900729836f415b57dbdae7d9f9d18883728aa22bcbe197f40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDLIW5O2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBSR%2BdNMW4XVNb%2Fi9ZB6dCwsKXnZV%2FWchHp5EN1yfGiAiEA0a9HOiVMBaR0ckKztyACMmUjGc7TM%2By6IaWnWWeGuSoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6B1UHyDogLUsOZ2SrcA4YdyZnyZsVYc4JJlvlSO1xTvj6XE1a9oUXQL%2F8tV3bRQLt2dBEJ8NMWMsbNSXPKipAzKj3P9yma0aErLJ%2FS0YYjTNIUj3mnB5Kq7Q0FzKQeAmDdkXDGuoOariqvqXU9qHSTgkae0HBPqVC%2FaSKxm8BGDC7eD8oFTaxmaYMlkY1QTEwerFggpSegriIN%2B52QhVFZHt1Dz3eqemaaomWG1Vv6W5VMRnhyj2wnpPx%2BY1ir13wOvSx6oY9QHEh0H7ujvwtjdbzFXVloYXpsukL%2Fcatl45PivNdyRAlzukJKY%2B7oVLc%2FE8QglhsxeGb1lkGGMLhcFAD24hM3dpaUzyBp52D1TMsXlFCnK7dPm1S4YOcDkD2cX9oRUWWct5wtNOkVVCcFd01NgzD0JEFwyvo4aVBN18vahaAermmaZqxb1ov%2Fumkw%2BghFA5XI6vymsKmcnskuU5Eb6I5d3lZB6DVCHleJqFI5xn0rME3kM1yO76EBjgTMdWH%2BlxRQvf2cLomIVVLl8xDmLuYWWece%2BCnCSzVq9wJ1nF1DoYI7w9KnmHxyigtLnS1GfUhP6x1PY0U4JZYEzsyeC7kMx1CsUQTZ8MlYXV5r1f%2FJ47EOlpmNBlhJ%2FFU36OqqcCcPqe0JMK%2Be5cQGOqUBqe3k2htdPJHNeGat6sHrBNYwb%2B7j09mcuIKEpN4RTCAyrI%2BbcaWcLbIa%2FUS24EYIQ2mAjAJSumcQXPm1x6J%2BVNgfcKQPUZHk3h5qNkyM6aH8qgq43OVqiDU5dvQW0yiayCN1B1fxI3UtJgKAow4XvqfqMrqeDOT7h6gTaAjedHwvRB%2FKntZiL%2BR8VsLxN%2Bvy%2B%2BPkoUUg04guc6bVvNHQgz0fFnFv&X-Amz-Signature=6dd76618d7cdc4a51d75eaa4f96baaa7153567d9a676ecee05fb9fcc74e3f30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
