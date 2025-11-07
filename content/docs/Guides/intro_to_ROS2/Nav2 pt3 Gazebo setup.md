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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=2fe8cae4711079d91bd621b93dd76d1d84608fc0f1056c0e4d2aab582e336270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=01a0dfa0e20b2ab2a91bd91b75888ab99c6301a1f421d6aed5660a5413701376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=50b629af59f9d11d6041098e9779b0e2e16d1694b686a7d59c4acf25f950671f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=396edd5ead426eb8e6e4173cdf5f98fcce100aa601b471a17048e8288fb03803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFZGOBC%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt7aJ%2FX2W%2FbeZwYwemypLppQdbMpnvaIqtKBsFJrUMmAiEAuP8sDHxsfh6HOgN87BeYsPdOYzPZJtbRp9x%2B3bGvSS4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5TAewHYQKUursiTCrcAzAhQyevPBJwIBOF7I3hI2rgGYZDCBzEKcIHCF9%2FMphWL%2B2Y9XuGCchZDEtK27wfu0xMQ0W8waqoFO3r%2FKl4NkaUERURzS%2BfrvLfebxUDnCOWnuTFq0PtaWw1I7fujAz%2FGmUvkrnJjcjZvDOa%2BEVCV6tETGPggzTvlScUS8s3DuiOrwM1DHCOLPwOfSfafyzWFuLY3J1zCsPG9yC08evKZbvbM3WRYfBKZmmqcsON%2FUMvOh6lmvPe%2BPyUhrrCMsvUS3q9s72srCLJriL1Luvz5%2FyjlOGMrhAePDHValiXGVfVmvlcizQl1IQPlLndsEiihvUFjLA8c%2BmSXutJmm95w3m6TgDbg97sul52cOyUa6ES5VY8dARack401%2FZd%2F6pkOW3Esa5JUx2HpCMUg%2BMp8tiiIJkwZz5bUoo59KmA%2Fz%2B185EoTLykGjLCtP5xWWYfqCcBA%2FbI6SPMOytV5i3%2F0JXHyY2FRD7KW0tAz%2Fe9ROjILFXDDPy59W1Y0lrUbu84XRxlE968CIgslMXdfFoXVX45ne%2BPa52Uregl0ZLXauHKjmn6NIsAtOS1Ojfg%2BkTj2gehu7WtggBkqgfs0UCtMxTxPjwlk5Bir9%2B6SE1lgTL0H8MDnpiFAnbMaylMOOWtcgGOqUBKeK2ZpM7%2BRRsmVDl56xEdQYv7oAUBdcXZJcvBNflqLQ2weltagmdJXbrYDbhDeWOFSn3Tbgt6Xb3jIgRN5%2BvCjEWrFGIEqMacZ58rjDV8MWpEzLRd1kxBZAeqYi0wWnjzXNWhpLMaf9hJSu%2BLphQh6hoo6PWDqAmAyZV%2Boo20J3Mekq6IOFPeSoDd7p%2BXWOrkQEcdTEevgHuQU6MtMT8wJq0hGeY&X-Amz-Signature=6b3e0ec906ca29db3e3049d1c5994cfa6ce21a605a533cd1a331a4eee86b436e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=89f8f623154f6404a1b54513886722f26c41bf7f16a26eeb0ab8d084283fab43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=b52182e8ea2578d1ef41436925c52b2fe6a2c461aeb55771310aab3ad4c3a0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=0a3c73cf24b8b43cf7d4066e191f970211fcee0b2cf5679257a3898e19a1e831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=5a87e898804de79b6f19ff458f7adcfbaac45f35afb9799e579bed0ded637708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=03936b2f14babf13f921c4193922e1028b7ab3691e52ab2ae58d5189acb0cec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC3GF5M4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQjIT4Kl4MqOPmoTrsZhVwykBnRIpYNE9xy2NxFuDygIgWKkqgv7%2B2C5d9UFLrKGw1jjQkJNm3WV4xkc%2Bvko9F30qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEEDmrxOAAn95YfsyrcAyT1gj18xmcS9UVoSrZpsFQbtc1lNKwtGhh%2FlfkNtpHU39XmYH1ht3PPDs1x%2Bv58GUCV52QybHL77ygLmya%2FPTwuY2%2Bdj3PJwtBmueq%2FYAHTC1zApXKH0Hm4IJ2L6i3XjK6jlxuoBev1X32GHvpuvAtme6X0SUtIxF8L%2BwHuZaxUVIJwUCJ5A%2Fid4Tce1wVWwiJgGQTO2i9zjJwQXXCKM9MOaK3U9o0sABHgzCRLCdVfFK0XIPUsTsdXkUIwWVggQSBw3B8D5tS5Y5g0Yp6qr775b7DWENiIhIlmAnJ0QNRnewzXezyJzpkbe2ccdIv4RvREkvB6Nv8coSie5EjrMOLZu0JaS85%2FNIxfGCwxjvU%2F84ruUFZRrdjTu3VRHCfKgdnsTD22Cw79DUJom3rKj5YvhcuMNYmdcBRMCVpQdWyYHMQjMJ%2Bhj6pYNVeORB%2FECu5dLVeOHwYOZ5s%2Fn7pWdkNEBvgyb6hG7K%2BztTu0Bb9w3Bw%2BAHa72oC6sWHxnNS4%2FFnqmKpvw%2Fa59p%2BsMBlbhkx5wKSjKDoV3SGy6OzrRtXGeueO25YHV0LLVCpN%2ByE5dgsGo9B1%2F4GkcIdHNm5ZAvBKd%2FrAHfHUJ0R%2FSarNNKW7ex1I7%2FT658FzBsdlMIaXtcgGOqUBs05IW7kKO3uUYz1aQTv6LmZ6Sasl9k7W8BfmFOeI4G%2FVSLwI6KPQqcP8VFnkF7CCSHGUwR8zkEmXfb3ej6%2Fzx8wF3utvSaOtQWGl2AziVy8D9AN19KaaEu9VE4iqQhdh5%2BXZYJFHoArjvj1InoKH40MoWE39L27VTRbrW2wyS%2BR1k5jL5U692%2BZmCiUfMV3Pr%2BuglzfOZTR2pMWycUA%2FP4fyvfgw&X-Amz-Signature=84f3daa37f67bebc68320959db5b0b60fb385baf27edcde282908428d5d506df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


