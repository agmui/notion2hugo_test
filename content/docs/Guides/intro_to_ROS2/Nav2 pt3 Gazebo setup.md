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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=d9e681d838ba23f9cfc43b481b20d7dad83f1175f39fadc80b4c14c14b81611c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=ff4db7b1e8b75829539e1edb389c4fbffc747ce28bd638ce68f68b31d293ca42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=2cd5f5c559122e531ad84825f8861825bd5b0e7ff067853e198a7cc21e1f33ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=b898e77b7b531e1c38a465d881352d2ed49bdca5711eb30d42a66aa9ad3f1999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAASS744%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW6aORenDM15h8akpUNvs8QrltCb9%2FThRl23SVNozM0wIhAJlrxmI1768GF64a%2FSwnUyCsmDhYM616mXE4GBnFYZxGKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM%2BWGtJuJAZR7O4IUq3AOtjslM%2FvVGNsM%2FQgWyV91cEx5DVgDaDYQ7pEA81bbEd37pCZWtPuS4h5fW48DE99BAG3daZIfKYgk4olapx0reoP%2B8W2oAI88EcegmptYYxsgX1YyBX27rNv%2BTtisRWOJFSQnwxjc7jm2JZ5Z427ug9iIUADbSFsGA7%2FQ%2BuOcg8%2BQRAbUqksbysv8Bp38Xwo0FOkSThaca51DJlBU2xLqVFCnOFtiKSlStySdaHrmPEGqAc64%2By4dQvesikGepy4EJZmxYYJvyqGDaJrNd2ubyLxyJjQyKT6mp0F4h0vXJsN2nvgBDXKgR%2Ff9fNUAIOAYL8JC7%2BxArMaCUpBObZngucaL049FBkedo%2BugHSXILQ%2B8Lqn1EDJrxTlHP94XiU%2BvWe5Z7oHucbbflcRS9KoJAbEWmFTG5cvepcgoXv9R%2Bvv%2F%2F3sktXIWeuV3jtpH%2FfrbdiLPC3CkFhmMo3uwb5kSXj8HGVLmP3ZgkRIi7JZnPr7tpM06FzsE4xUaNyzGO7wcuqA1f4aZhSap3RfbwF%2BXayn%2F5040nsoUOyUI9fmU2kfrTwoRWLQatW8h9cExw6PocVfynoAnrXz7bY82zN%2FGyaHlLkPdD5pzSn3B8khE61x%2Fm5E5wtavOJ%2BkQYjDr0JPRBjqkAWCx1EWwtHo8N1Z0SINmkbPVu%2Bc%2B2AzxWQdf9vxQdGd0UOElsYEQ8ka4%2BPBZIN%2BvpwZufT5Ed2XndH%2BeUoD5NJjA9meRHUtIVENR2ru9D4DQXd%2BI%2BDpdJ%2BhxF%2FprZMp%2Fc9pKHO1CKr1lec4nMYkrgsoONRn%2FhCNIJqDGysRadQ39hq8Sk470gx7%2F%2F%2FitjU7qpcFleJy%2BR3mEz5uPab83klJE16Jp&X-Amz-Signature=dbc30b5e84ad0bda9c445f10592bce7c8e2039a38c3916fd834dee7ed4e64772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=ccf3ebb63b408ed393ffb33c1006e0f04a61ff705e3aa33b57165bb879d5e788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=d9eaf44630028dc6d2cff8fb1f40a99ab75547b059884f068da1a9ee516911a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=521c78b7bbca9f4e4263809dbe0880b068da23668ec45e6ef3cc888d8a707801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=fb4f6ad40285dd5f8b5f1f788f309508de721073176b8e07cc856608c5d111b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=d981c1cd659e1e7843cd8b2c9e325562d442eedb073ea17eee69042dc68ca241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IL2VJH5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiNbkSH2%2BF%2BUexlAOgLI6%2BniUA5P30iXwCjaOGvTagLgIgV1oMFNqW9Xjfq9gRtGiX87rxJJaVlgXti0V7z0W3o6IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLGhQm%2F5bHOqwGxMCrcA3bllcwQeqEvoD6jUvXujw%2B1OoA1X4dslaf0wf4PTCqS2n5BkDgegkNskh1khISF3hikr437frWbPRfSoFAgapwpdgY1XyA1mA%2FguRrAD4JSIYCetTDr0zVAj1S3lrUzv1bLWW%2FqpRSLdlOj5yaqxL%2F48vwCrN%2BGBwXVlbc5%2FTWXYla6Bp7uLmTRmMWQlrhJKJcT4JlfChxIq21CRgxQ%2Fv2CggPu0P51pu0W4ThDcW92USl7qD8el92LUuK7RSDcF%2B4wDnRMUV6KsEFEKcIHnjp%2B5vA%2BNwMML5QhQBuMk9XWexXPvWthAetB%2B0BEIe2%2BBMXQwv3Fg%2F26rXScHi7%2FFWEMfB6bZZqidCixHJjiVf3pHUZLxPgHP2fyffg9cUwxXFiiFKoBYhYrVBixkbEIjQSvKSKBE4xQGWi6RqlD8RUlRdbzrCRLi7XsZrU0Wz98seownYYl5%2BIUVp%2Bqh98YGo2YTO8HKRfyQvCahiI4sknpOAttegS8fBiXknDUirbvUHmlt3T2OdcwqDppC9P5E0iyhHTNlgz%2FLXjP57ssHPawntgdv1FewHvWr6H4EhD0tV5ZKvBizEhWhZVV5gI%2BhZHyLgZdbuIKhFVJvI6U%2Fv1lbFpDaGCkHUIg22gpMMjRk9EGOqUBDTb%2BwCm6mnpzzSnGCYXrBeWWif4%2FuTaROJnCxaoocSSzdAQzKREWbg27mCpRImxW5glS4qQTGSjAXOgjzMSNfuAvW2RPvtk7OlKTOk9bKXdvEQkGX6pnn1ridjOuMLE9up7xJPzsV8clwGhMcXnhWYsYqzADX8DIqhLx85sIDEtdHZdM8MyR2Uewj8Dx42CLGD9TrCIndYnFOpvOe7FkmK0PUp7f&X-Amz-Signature=b1d1c4f61e7e8726cbe51ca16b8cad4809e6bbdf52966b13b2bded42712e3975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


