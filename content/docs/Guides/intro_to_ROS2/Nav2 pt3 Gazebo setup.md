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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=b16d93a6510273a31e3d1c93f126f91b27b9a3a1b4c0b1cfb874331a4f92fd59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=ce161de442af1fc01e01f8efaa2db2759684967762f6d8842d6aa92972bd042c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=5fb0961e0a4980ca73c4b8217566bd59e401634e4e05d824a12147e2a989ff87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=433cfb73799c53523179313986913086bbe55c65ad02878c3ae297577452f7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEVN2ST%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYtZH7rWROutVDVI02tkcf4bmuY5j9Oz8oJCXrQw9giwIgDae9k2c0UOzu%2FZD3d%2B3cXAwticQLbAUkF3EG11DHDiwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrA6NMcsQgsohNkvSrcA8lxi8FfAEUtZUIIGJzvmdf5qarptcWUa5%2Bov3tspv5U7vWz%2FGJw5DdOHG633T6Y9U5puia6VYJqODaoPx6V9j7mtf11sBhYQV2ZmWqXH%2Fr4HWP6YD4nezkntU9NR1fIPKs5TnH%2BWyFpA%2Fig1qdjpOrF0lvVM2nP6QBXkU9Xe9K2Jqb%2Bm7ETnT8tGlpgY3PuhghDgyVcd1Dc%2FGyi14JgC1XNrDfkMVRQbwEGMf%2FY89xql9RC3Us5cCHKyHVrYg7OilbeKkkbg0gqBCdLmJPs0j4voAA9K%2FmlL8wEtToa0iNBuQWC2y1izQhRhlhQ5TfZQ2Ri%2FC1Y3woGte32bwDZyYgYsHFwrgoTbkqOHxYJjJk0JDxxrGyXShEgkAI5MH0eu9tGgfsykB35J181%2FzY3RCi3V0MvR7Qz%2F9ZIeIc1dNhScd%2FZhB5lqmC2JcqmGE33LA8%2FPjAvL8NGxBUSFg9bBz6E0cqjkL8EsMKZUU3ux1QE59FGmqKo7FvIcEVDvH5199gZsNNj7jH6KoBv1Pq0CkQllh0HzgDhhnb23EcH4BdLIJ%2BmSCbUXViK6R4Cg9l%2B%2FigWdk8nt%2BMvSXG6Hpqf9KJahXl%2Fkv4XQpV%2BHqJ%2FCLnujnuv8QLSthcEPzUqMKXJh84GOqUBm7GxtPCETF3YLyMDE%2BWfKdWH90qJiZnToN3eG0YAsC4M68mkK1v8yfx1RM4gtBhY2VdtrByMdcG36BKSQEG0BlHU2t%2Fn0HdgIyciNgvr1g7U9m8Sfu6fSCYRERfQSLv9p8BtM%2FWwzv61QXbuZx2DcQTAU9R8W8yfwlLlwv7X5TfKiCyljRuFWNAgEE9z4CHzpj99Ng2gtpG5HhYNW06iT7i5O0%2Fi&X-Amz-Signature=e9d8ff04edcabd033b8f071ab27c609df7e7c78602f1aae18d2a24c44c5ec06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=554d8b55b097a7ddd23d7392d54a4dcb05f0dcbd180aa304630c19056b339e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=36f05af603908e4c4b3658a5f21449f15a9d7bed3c908b9aa4db188094ea55e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=1008158ac3abc43e5548be58167ba858234e439ea51f087a472d3e13857d035e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=86fa97f883b75a595294675dbe110629ee4e2d67cf701719998040610948a1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=1a7f140123798f38573c1ceb3092a64960ed3ae6d5f9d3e2221cb98eeee79174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHJKNCU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPywDzl3YKsisaKtHHOzApGhgGKJB0OhX%2FkTjCE1Bp4AiBD1JuUucv%2FIqj3ZnGgHJvbvkiZq%2BWJl2xsOSTEKsJ4DCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqUwkJ%2FZyJiG9cMsyKtwDXc6n8Ai9aCspY2VWSTvi51xl%2B5nF5ePkMv1Kg0i2BnI%2BNQQvVTSNqwQSw6xp8ZQpD8nZOpdkTxTOwllJgdgkSgQ6K4mJle0geli24t1%2FDzJxZHYnLcAnHbx5jMbWExVszjl%2BRplu62iXpOOuGLE3kQi%2BJKeuVALJYbzf0KzHuhZNMtnJ%2FyVc6jY7Ui1LdoUunUXCJi3Y2F1z5FdKUnCStuB6F9RzpQdnXkYNiPQrDKGdCCHPnIO0xHP0SG9CF3dOAzZP48YF38MYGcG66wzgWvK%2BeiF1eIqVjJukCVPCDz7c27TSOdu0OcNfyipm6EXldS5%2FwlkpU8bkyWGTTd4G%2FiYFIEbO1BCGTMBDUYNmO1r2NqWMJ3zShuKEu3Q1qPDi9hr39vCIyN2FPcdFXWlOXoSvjez03fDb7%2B9CUkN2XFSw45oIgHzfckHnRzhRFt1zQgugnc5YaL%2FVfaV7aI3EiS4rfV3rvH04Vvh82UHWZZ1%2BN56u4%2F1ELxG9Utc6GlN9ec4t4dxE41R5aGXxIySNh5q65fzA4At4%2FIoEINDDHBvw6n4O85e%2F59nrsvjdtMMdLb%2FWmED9GJH41HPbrAoKy%2BgYnt%2Fu6zuBmS%2FWUOJ8xO6pSOUx%2FgwTX9TNL1Iw7ciHzgY6pgGhN2%2B8HAFNjJLlPAC50QZvlLWk1xIt9VOD9sCGoE8e%2BnxtpatPaAkUSzdvX0KpgSjX5UbrkLLFPYtqBZC%2Bi0dg1fNgFybz6ygwaiLvXD3tgdnNdVTGTya0i6%2BZDoLt59YcG%2FnKPk645mB3dc4DIpjEtoFo%2F0qZ%2B%2FZKrOkrNwP%2BDfm7ewhjxeQplLrtQnEyxr96dKcPeOFtiyHbns9h97IQKrpNPth3&X-Amz-Signature=e83f820f2c8e49e88a738dbb0e807915899de9e0d5e37e1d633fa9e034dd0090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


