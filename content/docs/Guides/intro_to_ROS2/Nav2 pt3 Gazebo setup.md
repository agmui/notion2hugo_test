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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=11964cf67936ea3eb19e6a97bc9899117c1df0ffaed3d07199b491412ecb3237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=ca1758379189f299bb7fd5008c4313dea8eacee7b5956fbf9a7908960d3345de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=f09c32ed4e3343d64e9c66aa727c33be57dae024175295fc913019e51ee574b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=b4de37cc099894d4100527c5618866394e4f58c168b0a0e30c70c10cdcd83f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSME54KD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJfuZbqmZapcvs43KrW%2FiWZygX8HMMBkz6YBiRHFWnPwIhAP46XDQ8MlajtXHODQkQfmCZYXFksuHUWHnryLfde%2FgaKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGDg9q0%2FYhcZ%2BDfVYq3AN%2B5u18eZWQ5sxh%2Fu2iRoSdhANUTa%2BrBJY%2FAFbLKeNpHHgYBgQBEQc4Z7%2BKKp2sEIICHTaLKzuBz90j1IHXoIKQrmoQ3dF3CjLg4e2zUR7tLtcS4OYlEh%2Ftb7ur2qAyb5cRPg58iHktsy8%2BEHHvHCgVTiWxtXJDdeFSoEOOGhw0NxLWpRthAZMNyoVP7J9swbQE10heQy28h5zEcM423R8o1AX1juLU8%2BbFlmv990ArLRFIMm5mNC5SRNG2BDH3s6nP44f3YNM43cc4M2Uv6a5OFt3lNmKqZQrEmCIMdq3TOkUj2kRfWGjmV6slSCCuLJ8fTGM8UlY9tBXbq8AJNTaVeDPI5HpQbPBwSx6GHK0o%2BeFMajPz%2B8Bn21W1%2BSSHBU12K7BZ%2FKCbkgnflDjyah44nNpMK%2Bxj%2BkFs%2BG0OxDTlsakqptm0lfmDlW4fTx7Arfe3HJ9LmTl%2FiMKqrY0cRxlVbyDpV1xLt2BeQ7ajSSlbow4ZnVBaBcoKqFjK4xpwfD1QhoFjXbe59xf8WDRNqsMonF3%2BEAob%2FTdbpG57r2mmcNeWKuGcvQXlIlpZuf%2BTDYgw2mMSRfwfbxmjRBzD5DqhTEQ9IMTA4o6cR4J%2Bgf15KuGM3rsOSyzw%2Be28BDCUmOLEBjqkAVjiKu4vayWrfJvyQ05UhybyGJBKCHrU%2F%2FK3p%2F6kEwZqLl%2BJFxpf27qLGeqdzOJ%2FlvHjFP18xTbdkLvjvqyjbmrSaauWyjHxz8YKYIHzdfd47mPeqd9JQv98FD2I1PU9zNZ3BKUl46xOTP6lHuArBSEfKEzJeCvxKfGQKoGSEvwbr%2FYl%2FmCgd7QlXuDryJAZr7pq4rBJVoJk%2FF70s62IAuAj%2B7Yo&X-Amz-Signature=4bf6e3939fe22af5e6d29584b9d43de2f908b7ae0a7343232ac7235c6ceaeb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=25c4f826bdbde50e02b46bdeae1f07be2c03032161f752b16eed740018a0e71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=e73552a1d32f2f9ab203cb002db2590bb3c0b984c3ff03b923065bb400ba2d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=00aa3f36d762df371d78ab28babc74e06442b1f61fb9a250bc95d937d294ad1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=6aed4a098d489bb07981f2d91efac96ee00fb7949d69a68625887784f517319d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=18178100109970e1f5f9d8d343d87955d3075fe327a38107218239f22e87c347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G2GB6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFr4ZRFKMYudATWViCNA37mcYmjuRU462s0DWbT6GpuwIgUGoN05hw6k63H0ZKKG%2F0ziONtCTJRIthbw6g7LMQbA8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcI3mh0TXTDRKW7fSrcA%2FI58pf%2BTYrah63zJ%2FbJFFZMd60Ob6wa%2FHLnFDfJtk5FcdRfCJQUCAq5d0QFnkLHLUBtR2V5v70seVsz7SwT%2BgUjyjV6br1ko2vGsADqJeXznaEhWge6lACE4i8KNd41kW8m%2FF2DG5fJGVHYn1UXDUTkejKX%2F9khUx5jpn81JM7a3zPP4lqUXr%2BPKste38sBLlNac7xRbjfcCgzDOUAsZj2OwkEPnm83sIg0gFu47SgbEFI2AzvayJX7AfuFIqVvKxqNiF3o9tbt6AaLaGNKLrvNz2LqoMLZ9O0B3z%2BBohdq4hRQa%2B5ReBJ1sEFoBzAuS7HtdGotVKxM5lVLdXsx1DlEJWfiFnv2Ri4TQd07I%2Fe1Qiwi2Vw0Vi2aXxLU8E73IlJcpjSGHym8eM%2BQBK%2BA89jSKUptZu1IkT1DNQcUChiPLltBvJ%2BvdVfCs9%2F6NXrfcVWcqNZ3CvHr7rVyiQ6wDdMwwjdJnbODX12G78dmz3pX%2FB7ncxHSauHAqNuoIO14ypKHaZTnwhABWklf928IAPgBDwsrZquOtCT3GK9m5%2F9YqVyf9L10ThfQfuayxbzDXel9gXuHYOzNIOWENyAx2Tx%2FaGiv5P2p4SD1sstLeSmY1MlgpRaSK197CL4aMPWY4sQGOqUBYIIqA4RnY5haa%2FXzsX1ZXQgxj916%2BGFc8CPe9KkSsiGQ%2BvXKHTnL1T3uMe6oxpazj4evch0646ikFy%2FhLKCjlU5SBm4sa%2BNistsb6Ahl2WS0LuB%2FN67%2BUciPogPG7QQmnJ7GNlx0qUKD7XNXOM%2FuRFtCElP8SnCRAJrGTkByex0xT4m4s8OiM6Mngtge4wCFCEHNSiqo51XFzANq0%2BgEQdqouNBX&X-Amz-Signature=0c716d62e9c4125b4088b72567ca4a4b201ffc1a1dc2a7a56c9f532020d058fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
