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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=1ca0636e88673df65f142991f6f6b8902be2fae1dcfa722e8d5c27c819c81170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=23202a83e83d0d48538b19e8767ab3e2647813996e2b68937e493307bd149a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=ed237274025d311bb0f5303cbc7ea87110e3288bb927f889223e0573c39b3f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=cef490839b16a2d7e0c59545bd08003993531af1aefa9fa438cb8cca02282c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DJORAZE%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC4z1a0X9QiZaKcv%2FI4ohVAPjOUFsHTN88q%2FyP0erSGLAiEAz0DGNGWHw3pyz3M8NougzuYuetZStIe0dJ6ZV8ASlbQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJcSThumZprKMjXY6CrcA4191EoN641HPc7SVdPou4Z8QKJkktThVBl%2FsIwg76ISb6T31wPrJG3E9Bq97E3k6R6%2BoMoZ7wslvyp%2BqCZ%2FPkQFVsQrUaks%2FjZeoo%2BOYWMlvOl%2B7vNXp4OmvGjM51pxO%2FsAe9XFE3kVysmgnbsX0umFVtlQbSHkRiUB%2Btmj3qZ4DR%2BcVwlpkAIb2aEOg2FnqrlFhcppP9PH14a4QT7c3FkJpDNPKLBhP1i9o0ZE4kLBC3ZsRzsfcvNVRBW3u78swZ7KAHUdphjpvMfgKmhLKI8yqCY1z0emxGJDJqCYI%2B3VrjHC7LRcPlxj7pQs%2FlPM2YYfEjzdLoy1ilTqt%2FectzeZY0es7y58ELoeuOyC1QDrVtdXml3oETf5SPSC32e7IClD1VMg6U8sQN8XqBjrjlC8U01fcr7gDD3lOikm%2BT%2F5Acg%2BspvHz1sVP9ePHAMxFxtzJKql%2BMgMQgsnsOCfuiYEdU0qLoVzlgcjdeliKHzrR7vpX%2FMTVaAwRoCx3zo0ytkhDuyfKDMzFnqr9wBpL0UQm8YwgaRy914kLFsb0EteIL7U6P7orszFR8ZjGGusfvCfi0%2F%2F%2FGpj53L74NrNuatbmBWz5UAr5mKFjPoEDshS3Rzo%2FRBhb6RaLYeIMN6X%2BMkGOqUBKRyx0%2FRxtNR49V%2FKpvXPvMF%2FxZvTY1ZBnvQzpoUIZzw7H%2B437hLXuFOd13%2Bzknyu%2BbuFoCAj0dhd1371YS8q9qS2EPegHQmHxENLIRVm4nsTVAO6VJ8d3ZFUgPmDRagn2xFFdq0QAOrSnQz8EUJ7Sv4OIHNv9PC%2BQ8iw8jdyn%2Fl9EHLwRqLuC7UBsr6X17PJoG1yT686nUZD5eBr53zmMOVUFddG&X-Amz-Signature=0439742fa2b8eba75cc436cac028ca6a60582730944c70f547e717cd2ad77454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=25510827618b68c9f0610f9f45033f38f007186ff0d47730faf5bfd036352012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=ec7ceb8b287a3628a8cf392c59c8371f0b5f70bdad2cc032c9ba43b3ed39ffd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=c40ff9d4b59bca7077c44e67c6eeeb546c20637855c5328d419027ca778195aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=3cccdb01cf5c0acebfc5814f55fd2f0b70fee57ef5e04bc2edbfef1e056c50e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=adb5941bd4660e17ebfa05b29d4d844753e2023ff46428e0e4fec9fddfa29da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJCPPH4%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEfn4KTlRvGCew4T6ljnKd%2B6wy26YELsqtLZSfQ7%2BmkdAiEAq3uLiz53B0Ix63ahxyc4MqCtZTRFlbr59UmidiEI5TEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCWXMRUvItgXurxx2yrcA0kZe5iCBEc%2Bqme6x0XmP549aS1ZVYzUotdjwH71gtgEilvslVzmcsoHbwHGFyu3CIepjim4f3SGrgzXPOekQmA3zNPw3cbr0IQVVTR5wc8BPWoqH0vuh3AMMS%2B29oM8ZrEwwOS%2BDZayiLP75GORtA8gXZJszsMZaJvBJ3P1gSBTjlP6NAvAy7i6v92T7TRHe6AtR5C6rQjQyXpTBB5GlYswddROo5zF5JOF1HHM60%2BOmJOSYAh6TUXr6AkvpGEB0B6vTMJo%2Frf9mttNGtnLIWcFE1ZpIlaEy1t%2FhIArdt7Z%2FvqKrbLKDAF6vQVwWEE8eW5ElmJiTTuX5jEd84Sv%2FSZvz4qisYKkRzwUdIBo0SsPG8rgZmRA1zobtSrO3OgSE9lUgWq2djW3CRJcEuU7WyuS%2FWgM23shTXqUfWoejaUVfuF7JMTlrweadmEN1u7Ik%2FyhWQbBIQVbe%2B7xcwWjyZNc4ttAOTOda3w9orDxsjUSVjilJL%2B2s%2FcqOJFnCYIoQwiMy4BpfROU7kkrkysfAfcPdFsSc%2B4MpBHKB9vbeNGjqSmHl1GWIkRjY2QN1KL0yW4aSwsh4P8XQQIiEcqdOd9kEnv0ugiMR%2FuCaZoCRm9LbV1NkkhDbXf7FodRMJWW%2BMkGOqUBB5BqqF3%2F5Zce8BUSGcJbx66VarkSLnnEAt%2B065r9nrWS3SXZ9dLaQyVFgjLc8fgKVS64qH9AoQc37VzEkZDlMtKrNU6OJ0k1Hhfo4vykjQAz7a9w%2FYI6ztz8YrL53ejdvXqZlRxHWpoLOV2qUDI5EHaI4PegZZZOgwqNgWJ3hxy3rVDBU5nM8WfU%2FV8CByoTX1IJdE9kngzBPnY15RO44HL6T7zF&X-Amz-Signature=2c2fa2c0f9a672fae526d12a3ced0aa970b1b37eb06bb6d31b49c4dc6cb40bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


