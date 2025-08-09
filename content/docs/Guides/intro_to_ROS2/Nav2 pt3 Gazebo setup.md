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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=8f0822795f866aafa3ea8080da8af67bc594c5d9e93f046c12520bc094e3d3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=26de7f690c57f8bd148c7510c6674ce90626acd854c48a8479e11d5523ef30b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=8753bad3102e4e3de685fc98e566ff8713147c91b76f1cca4f9289e1a07bac35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=34811e2184ebeb7291e47526dc1a3e3693649d1d9a0a7079c6174eee476f1c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NBY4BK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCRMOU3bsaecRkQ3bjJyVmoIbsVf0dERVn8bED2374MDwIhAP9f3beyvxSsKeqcD%2Bfkr26O5kN3m85Jd69bjDTktwAuKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMxrau7tzSWaYexdwq3AMNdIgPjr39zyuV53eg385kIwY8oKxw9j3IeFJIWaQXewcjwV5HlkS%2B7hmCFqWQ39D%2FQbi5qy3N7%2BPEJZCV00EgkM%2Fawluw6xskFPxXIjoJPCy%2BW0nYwTjg1ocuxDD8Ej1h0MlK17PV1%2FwuGH4zv%2FKuuO9Bd54bDt65lxtQFwIdT5hcud2jsjAjlK%2FGHUBNX2lLfrvX1223ra6GnTov50AuESoKxTV5qH%2F3ZzHYgECfijgFOvVt3aNI%2FCGwlYpeTbL3qSt2s4ZpeOmKLnWFym%2F9gMLOcezmNKA5HUbLVgVcSbzNa2LafSCBYS6YciWqSk92gplPKuGEWrP0R1bbH4iD%2FscCH%2FSIYO4lg7bxBA9XvjbQH6y1udsTDlU66us4KNUEKBSyol3ZtM9xtvcsrc7Bkpd%2FyybLnzQjlElUt0Yv8N9t55sbuqXeun389Hy8C9tIZFkh2rLghGUyJ86oZw2ueGun2R7H1kt4T2%2BcRVf6lIyzfhnR49XNTUIo5I6Wwg5Tp1BmrXIXqSePxrxotxCZh6d7BWbRsndfZqX5VtaGGf8VquZ96wLPBDDNxHKtO5Wihm1urSa0lO7zPsUneiAr6FWOgRSqNIKzv8WZAtGzMHJJb3pf8q7ORawGXjDbn9vEBjqkAdt77bM1CRS1GfTMcQL86DUpN8rg4QL3bsgp6XUxbShneOwhGMVjyTV6oNOMn48k%2FOO8O0F5ULLe6GN9qGreRb%2BjNZTZcgUyi569Clgsywf9nWRnFQ0P1zcoKjWmJmJtltX68Rha9HjrWWtf9sI95StrYDb7IC%2BdjG2xVaJA8GFglTM37WNVHUyrHdK0PRiiX6toRglthYv%2FKsw%2BK6Kzg6FT%2FTVK&X-Amz-Signature=24af8ce269b48944005eecd2e2730a80a539ab14fe67ae2431b4661b9e9c1600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=c7027212ab86b5764cce77991facfc7c9d3900af849ceda0d760f6b4193fb78c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=81dae4bce13340e512e2192043a9451e2c4b6976328be6632190ff6f205585d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=171f041a113f92eb435f52a11db4ea91bcf13cc5aedef07001f07898512fb843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=4a417b589e28dc3e3d68d57b89ec24b84551d18bb08f05225002a2948b8e04ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=e1c9189998abf967304e8e2fe891507d817a0c7135302ec1dd978f899b8802ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNAYCIJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEYnlGNz5bxTpvLt%2B0HUeF0WzmeKDIUJd7sBzmVp7wa5AiEA8kcgfJWhgdVbZJ8bUI7bYh8RKQwhk0I%2BcQ3SURjjjoIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf83YeYAbsus0NNDyrcAz5l63Bxfv2uFOseXTzxPmpM9f6VQK02YULrWhvImZXsP3QTD%2BCDJ2l6WSsAkB3gymyV7bmzEndj7XZyidX%2Ft2j2ZgY2Ufyu2vnxsJSTHIXKZzLJpXDL6aHlGSJtay07AtnQtw9VaQ3gikgzpKbl2Mm0jkEhyQCOSljxJXI4UUS8ksgosJIdYWpYt8%2FdNDtB%2BNka9oONxz8Y7W41m5X0TqQR4eJ9a2%2BtAM4egb16dHDgEXjz%2BZcsz%2B%2Fa5hNifmy%2Fte9Kdgd%2BOFS5PsSkohcbtTZgYJEcZ7fe91r6cb8sg%2BAxM4gavT68dhdfUHQYFaWTl8q2w25IqA5CrmYqLeFR0FvzqKjIRn0dGtPl0Lb3TNUEPEN5yIlO2yhHMGsUGVs9O3dGopX3Ee3afnxRpb0wIqQYcaDnQpVxafYA8Mq5ByIHjZBuXrEKIpLfOeB5HFYmulnajbnSV3pq%2BcNYzNV1%2FeyiQwbHmAvfJOXzW4H1fw0cR16QlUiCE9YrFDfDMudkWxvyMQyrMjfeKVhMC0s2UOo4qIJNnaM2pcEIoqOTRb6SAmpZjfG8GUYdO5hzYY9ddS9MPi44LVjzilqetqATJxYOJdEyLgwMMtw8Cj%2BuSlxHeCq0nUnBtnXf6r%2BfMOaf28QGOqUBOcLwZis7O4Xrxrs%2F0BNylqOcNAkelCMXTews%2FdIfAl%2By2Wxr1Mj0N7f30CJKKk28bu1QUFyhk6cBPkc68Otd43a3jO6UsXTQ4o7cSZxsvgjCDW0ILbfTBRTvAho3O%2FqsZKKHAQY9qm%2B8R5aTakOryNdf5w0%2F8%2B4FmvR5p0DCvpHgnd1kChudRSzP38ehdummTR9bwrZB%2B5BiNXsx3PiU7Re03fJi&X-Amz-Signature=de57cd09c4510cd3a2a49ea250edcd923de6aee0f0922ddadae73364e472a472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
