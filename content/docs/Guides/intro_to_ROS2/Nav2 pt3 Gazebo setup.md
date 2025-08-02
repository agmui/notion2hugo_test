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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=83bf64b5eb868d785ebc1289d4d88c242420cdb2f829f3c368e8f21571c11d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=92bbaac73538f742964f40bcee9d456fe7326c673b9107fe2078d4a36211a100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=83d8315671c7722f6aa1645977f8b8f3246f5ccc1a607764fcabba38c4da9638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=3390faab999b86152d6d6278de2bbe72d693ce8f4921edc79a19f19352d9602b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6MKQZHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXO33RGfy5IKpfmVy51yLgn%2BN9KK02Z6mZcTzlU8YnIgIgZp0neSEmtRUaD9jZEjK3J7IAnwdfhFY9HKE%2Ft8jB3LUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLOA4YKAwsDk7FwC%2FCrcA7bObWmIwSzoYnR%2FcGXyNTptvJfe8OdiJ7H%2Fyi7oCHdTT%2F24TQu6qH%2BaPO4HNy6aQyFn8N%2FepLgxOE6uv9uLkF4iAHqyckC4dYknKXPD093QgZDsO%2F2805E7wNDbD7Jwy0699syZ42CeyVRsL%2Fgx7i%2Fogb3SRlkY1WJ5dLqjVlwcwqHdVccZlrDhfZaeEkimHZ6lShglOKb9%2FcXX2I5U8mazOzmZxnEjysShkx6fEdnbjYXsnk9V%2BpG7bSnJQZMMTK4rpt8wUYPT843rV%2BnN54wMxRnEQaMX8Keeh4uQpf%2FysN9UvUpq65luik9MbGvFA9HA08Ytk9PrQBcpEkXRsoCmTD%2FomzcMdkur%2FL2j0CcdcPShhHb3yksJFM0%2F2mGBcVBRPO9u%2ByYCYQFeTMf99BCLK96CLL6MyyL6P7%2BXWD9irlV7d5N4XH%2B%2F24%2FMGvxUGuEZ57V4YipTzH84EXXtI8vignWQ4la4FCTrQe5wHYTJfwxjcUEFF6Sv7T2PfFzzYt7UCZlo1ulzh81AzQG4rufElvsj95E09Hsn7zR6eN42sG%2FBgqBHy6V6k2XgWZNx40wNMY%2FhUtcls3O6SaVMRbAxLSVS1sDoSG3oPv01FC4rhY%2BvPCkfNnQ8LEliMILEucQGOqUBr2C1lKgQRUqjv0wyRm4mjOAGRZ%2FVH7gYmNoopDHuYzE2ctgf0arsB9Cl6K1sA61DP7LZvmIQ%2FhBuTL0X2mKb31zVh2M8zzywqsIDkNnAXXkSqEeTbkNGb4ni8A2kpDL%2FKA2eoiPgt90XxhCJ5Wn7AwnOlCiXilumMPCs3UlEB8pXSqWJqEvU0S70Zpx8luo7gDNLK7Skjy6S0fhj2NjWADvylii0&X-Amz-Signature=6ad7f3cbc1a3dc0992564bea2e7ed8b152b7255c0dc27f0cf912c83df4d654ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=31e89f5928f0eda5bee489db0417da88c527d77490be30cc0c28893ac66a6b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=e3175b2788bb9b9497fd1d800a3fb2aa56efad31d1d66bf65977d6fa35122bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=a54436f4825c453b4d680bbad069fce99bfff523fc6af32846c9f997cc2d86a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=1fa534c7281db3312156c5bf246a23f13d1c951475126db52961c8a16987b1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=ee03118d2e74e85bb763cc2e5a154cb16cbd9c1fbb5d204f7e0caa625910f739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJ5A34%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4kmHsfkssCamvbOqOv8g44ASEMVwx6O3FUpCiFOBWYAiA7sf2WnH1Pv%2FRpMwYNCRK6yk8ewgo%2F4PPiPWux7o7WCir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWLEYelG1AZOooFZrKtwDtQpDgEZSAOklVar%2F71nn%2BpQhXRBZpsztZP1vKe1uVSUtGLPTxaHozzNsi8BqMjGYbM%2BR6v4HdxFLr3c948xTLN1QoIwfjXXN%2BYGrf1IFyXf4ewgZ9lkjG2CQ3rMasAptQ%2BXj5Q4XERvwEiZ58FNRq6b3pGwwPJfUq2Xm172xqq%2BQzElQzjWdu%2FTTU%2Bf6%2FG6724bVxaqKzRAcVxGLcwERjGUw8jwKFw5i4F0%2FxSFeN22%2FRR0Yz87Zb2g2yuDmOjqmizJsvFNT42C4sSRppNovahATWo0WsGDUxd7EOuRatAH070tvhyxoXMV%2BqBpUL%2Fpq4KTK7iCYpl95yl2Vrtsbu%2BBLUp3KDIhypPybWzsdAX0oSARs6JXRfSDyIxQP9%2BBDCwqGg9NBXKb2XmF6rVdYFKCxM9D5IFP9LcMM6o6om6z3qdYOaxc3j1wZblyuyW0gCE9JfQzX9TxmK3p6ER1Iaz8rvQmPp54MZQBKT1gdFbrCWXZZbUYSXb%2FsZh7xb9zXHV%2F9ElFjP4Ag0NuyfrQpuR43z4HGM0e0Zcmv%2FZSGuPy%2Bev8GjKAwpecVwtHKxQB3SpdWl9tFsDcSwFDdkaKUR8ptq9tRdJhyYrxg%2F9bPleIc8orT14naLbH51VQwgsS5xAY6pgHPtgwfTMHPG2IVFKj6ZhXYHQzzJsWLoPKgxWFqMVKcXdGGjR%2BbiRjyDQCg4iTXbY8ljL%2B4BuRoyYgFPDos1wNferBal%2FzKjgy9QrHThyEkiXA5ZU52cdJbntHcWpjdgRh3y6PJ8VOoK6WSe8V8JhicH6gn%2BBUAhLlKEmRFDbNXfh%2FK9B3Z4XHpsazjsTPWfp1FKb2VtzlAPf4T%2BtSv2Fa9CTl5CgWW&X-Amz-Signature=4e0b9bf6ff3912dfd0ea031244bbe1e176dfcb1eefe34836eab83b8202319667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
