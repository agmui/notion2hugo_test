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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=0e4e71de4d86d1b569ff6b50e5c9e8d919cc97ddfc7f4d1d1b8a6deab34bd5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=a6d9c09572ae48cf01f6c4d7d91f9834ea9f69406f54c038d7d988bcb9b70e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=b1793e62bcdee3d4b06c2cd9d7c135b93e4f3b6575d379cc897c23b800c99d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=50357f64c251afb6df669b13b554e494b51889a93b6f3ecd9d8ae38a5bbed7ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOVXRYY%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmyYGH7ulLifv4GFazEQlLXY528gIOhWsh%2FTB6vUZC6QIhAPX8RaewYW%2B4I65oksUXzy1ksCOMr47U7u1c1xSiT4U1Kv8DCEsQABoMNjM3NDIzMTgzODA1Igw0ai2vdFrcq59slTAq3AM9L2RfqdCluSzIbLk4580ubpf0dRaqUvTIP8LKZpOoNAsprOm%2FR%2Bbtfo89NmV9chT5gVYGfnMX%2FkTQbYF88ip%2FMoKNp6Lp13asFpICnrzw47RJcWOdPAE51IQ4D81FdKryhfIxZ5YeElp0v33p%2FyDAYL4FCfwsGWIVOdczRfukgrITaWa9%2FhWrfHZn81qeSIRXObM5Q1kvtNPmguwVOsNrXSaQSHcU0cvtfLNVPzt8zQuqXXhZaCg%2Bhz4P9k8Kse7DG5xwAyHewHHpdX%2BMmTeTQRd9pwudM8owUidqYI9xKp55ZqVTT5dK4yYh09nz1W3O5wBtc6Cxjlt9VAMtGeepc4Qq6gCa0wlgDSanb7cEaqZ%2FioXJZR3iYbtKhdzpnYVcPlKHcJpw5SyeYLnaE2tiHJDTAZobYsx2L4NZsZvfbBUqgVtJyMjWqdCqBq1Zx4q6j5mhfyqYkNn%2B1XNRyKGlrsM268e3S6%2FhLvrQDVBuo%2FwsoKsDx1MJUXLRvMZRVlFswsSQqTmfHoCrwurjNPxjrgi3pVwCvO7E3fNn0Mh%2FVEFMcKI4Zuv0S1R3aQpe0Gzehfc%2BC%2F4iBRwmK64iDTbkDhk2dey3SCLcCYimcT5SAvSA3%2Fbkqabwc7bbMzD11drPBjqkAcbLy8UzXDSF8gMbzdSvmCZ6Cx%2FAAgFU83MSEwuSVLYvDklP4B7I0tpdj3FqqmyFxkC%2FJVcsHTgGciSSNq88tSv%2B3bRU%2FvVfLiJ13gcmUUj2f%2FEcBQ97CPSDBW%2Fiz9ZTXw%2FNFt6vbuTMAHwri%2FRNjmVfqp43A01quXTz%2FwIn%2Bs6P8P2FdbK9kTayABdW0JGu%2B9hR7KdqRndRGukufhLXcHr9Wkv4&X-Amz-Signature=b033d43d37da44cec995ae56dce8bff9eb00eaa7265145af962151125c48175b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=ab478da9d24be67138ab187914098528caa35f9c4156134a67c514ef2f2e44a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=5e9329e05bbbbb626fb0c2e576adb144e871abbb0797af65cc43459fb5169176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=b620023c41209297e164c9186d3a9b166adae55c61b28fde6c9c5850deb5c671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=58fe1136b784ba6e57f89368b20dd0c3d26609246e194b6fbeea2fa0d3fcb928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=9565aaeab82fb411eac8055ba54e72060be3749f96380890b7f9d3f98f5dc476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJSSF7VF%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4dXPlUwuE7PiiguFjzxV%2Bn%2BP5Yv23TuAnH2KVCDVVfAiEArpNEwqdpDpa7zjnC3TrPESxgb%2BlBvwYOXlyokM3YDuoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIV7y5HtUiYtxtJosircA0ss9JlewX9zVrGOXq44P8JnUIrh4jbvNB7FWKEMSe%2B37%2B2h%2BLZFOSwkCwH9jt4vdc%2FWVpNVcNTXKexj57T8pOb2%2BKqoAK7Bd8KQFRh79pr1pJtjrRb71Hb6AnuX5Orev6ZWmkW7F4TvGqrzssArsA5yuAGJdrTqFkxhu7mckpS8oZzNiJu99fkggJLWYJVlV6AHZE%2FHoq%2FnevYAKxLiEsLLSN14qQ1MCGAyRgn7djXlhQItGsAQIC28Ys26%2F%2Fse6wFwLrs%2FgVv5pcnRPn86Ga5N6IF4NdpHzt3QWCRqp2YnfdvQrVJvw5byktFK0Q1tfE0pvClbJozMhvbDRgnT%2BzBxCHUCJavyhT2dRm6NUbcpL7KP4FxnOFHfHKkD9PrvUqQVtS0wQtaJuFgiBZVHmrARqQwHN8Ye783U%2FbWuswNJCbgywMP8a1KMFZ1mJoHrUdZ6QGA25MPhlICl%2Bby6RTTx2Aa6Pl9FajHDhHAy52tZKI0IzRPaNGCGmfmOBzHY6s6jDcV3T%2BkARBN9PaiZ3N6k0XjoDyO7IVR%2FyuIc2sCoBnVehfe2XvBZAgUc3YjNaZunjIaUEXuQa%2Fk2jz%2BY9JRY1BowMbs9s%2F6OE0oD1%2Fc09Uld180Bhpy060DWMKzX2s8GOqUBdu%2F2UXNZ1wsuTxYc1WyWaVlVRJGFQVNhKqiJLBLt0OwyI7h2NPXFijc%2BXCtxV%2FJGXK123S7yzrpuz7gYi3y%2BN%2BI7lTeSm6cKcF4OQ%2F0USpdsfpiThprB4ZO6eZiyrl5HH4FftHUI5ln8wac%2FJ9q9Jcac61KvqIo1N7MDaSpHy6sjBRd83i6EnjNyvOO8WOXHpnlPikLBQsa2Ygb%2B5Iz4pnY07HEO&X-Amz-Signature=70bc67d3395ab35a53af93d3cfbcf66f9a8d6b3f09c9e2f1ce6778682fb5ea77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


