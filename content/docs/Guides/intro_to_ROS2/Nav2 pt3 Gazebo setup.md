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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=b2df0a28e3cfc6d56797875999b0cc1fb683be657d31e73e154704f75c85896c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=ad4c83cfece181e8dfd2b6c81751855d1eca4912f1ef0f5c73d216ac9d5120fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=67eda7a70296fdad17ebbd2619ffb66763cc0421fcd3449dccbee010e71eb676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=dd9f47f29e684603172bbe3df9ff4d7ca00ff3b0c67ae75b5c90521ce2ee5d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H2PV5XK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID9YPCqcezTlAJGoXEhFzt0tEUEDaMEjvFd2P%2BALS9MFAiEAqD6DQ4Qw4I1auOLu%2FXHfxCop%2Fd0GD7BFoDIxn9oOsBEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDI3BJGcXeOZzWEodaSrcAwM3aGIXuXSQUuvgboY4jZHxpQCGA9afQlKTLeeZx1KcncH6PpEuP%2FqHXSbrCoSUYSf5vpzrXfMRJLF2F5yJ7HkroLVjWMXOXuXGzZNrAnOWscLP43zPgn%2FLhUsSVLee6ESmdWEc%2B6tA5DCrrz41EELK8WWD9oaUx8pazGpLSKlRYQ31GVuNPSK1kAtJjwuhfpj%2BUpF36lcXhltrOuozMTBaxTS%2FWTmn1yCLtej%2BJHtyUkmGwNnaxigaLJdA%2BevYHJfJz%2F7u0jRyw2HPd7C0sNnSdJBift%2BDgfBhgqh9OwDrlJ5ERoSyDsc66prVoxQ4ZjuaN2S1Gr74lSJxMLenEHTJEifK4VQNSQzkI3SiI%2F%2B9sfKB9qTeaXgiLbXFfd%2FwhNPXsfLEY4AhTun9DVyz9pdeahhku9YC30YTptCN%2ByqePDzbjR8bS%2FM1pUl%2BnzG10T%2B9OjgzUfwjLM%2BlWveYmuCMBJq042HJ5F99ViEwL81iRtOR4SsuGdrQLi5dIpPUrE82NbETu1HoJUQVaGC5H3A%2B3vp7pjFMnBJyWBQ%2BJeMcDve%2BNUY3%2BH9TuLPeoN1oQuUcNlNlSX7MWgY7%2BROPbTa2p9psKtIEQ2Z83Vh6%2BpJrhVx3oNM%2FAD1a3iQ5MJ3Y%2FsQGOqUBsSH%2FsCyKoJhbHBJAiRvlZLe2VvbkSBHokXd8vNuDono2Y4ewUN3as5B%2BHc8pdN6YuRUwQdAw38Pml4FN7AAfzjOivqK9pSovZgUUN4mcutMNsnzDz8p8k99E87vwqfg%2FaHAj7Yl5dOIIHjzWQkb6hIEHTXmij01BLlRLlLhCE955DOxJKejOYhT1lGq2bBBZSIMtjaBvR1u5lIgIYVX737pbNsBw&X-Amz-Signature=b2e4d7739f02fdf90c53a7da2ff3178c3e8ac0cf31cde41d94c388f06749621c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=ddc4e51db790fe4e861392725f356c5bc1823b0afcf957163da764a48adc6644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=30262f90f8d00ff3b8f751b8aaec27c584fe7c45b87915c05dbf430884c8b78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=c03e95d27613db9cce454a6e9b87d9e5504f048cc31a2836336f0c740e5301ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=3cd9e6ef776695c3e9593b9855bc99f316e54bb98ebd283fdc5e89fb7a47cf5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=613555cee96d785a7c6b0911d2f37366d416be8100e8adce35290d0fd6fb8e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSPYL5C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpce2CUTe2gLCyf8cwCDDsvN%2FLTn8dF8Fa7fD80pJ3ZwIhAPlhEDBLzzibUWwDeWMjvIhNFNQwx%2B7%2FEgCyPq5OjcaNKv8DCGcQABoMNjM3NDIzMTgzODA1Igz00qzvVrM3eJBqQoQq3APhTBOehTloVARy6tHYpa%2Fjm6HViRndS9WZly2%2FvyLNIIwC9ojpEngGNJN0oHafdaboC8cbc9gJhagAzFnka6uHk1SumgQHt1Zei0q2rh4F4gyJftpt8G6X8tBrOc8A2u707J3BP55w5%2FGF8JnGS2HitS6feUUn0P2jf7HWSEY%2BwP7ADxlzr4jS%2FnBtJnPEt4y70BTZwfPk3XbO6bdinyOv%2BDmOWzTksu%2BcuFGftbdkskkg75nxA4TiFgql81RseRw%2F7axsz8Ib5HowTEXeYNVbXo1wUDel11c3%2FBHmoujHX4k73sE16zHtJyFED6o8CCLY47B0vs%2BTYnVv%2FywS35lnGo9%2BjDdoJzN0kjYZhIk5l5i4wBeiHNVbN%2Be0%2FkmRiKdr7AfIeWt7t2ARmfvpGYl%2B1eVYHNv5f6r%2Fg0gKvAKLBsKavQnP3RyJpJhdP8%2BQI5TGWa%2BDKq4Wy9VfaBVVeGBMUrdJRKM0pj5jqR6nvcwY5YD1djBF%2B0C546GvV8LxSigApr1ENbwhXs1l2pXCAqQIW0Oqj6uEKzpyn05UITpB6VL8tyhc3FhTEJfY9Nn1RjEU0GRWIFiAIsidzixlbX9v5p50erho1UvgNHVFj5nmLYyoyi5CQIXiY8T%2F1zCM2P7EBjqkAcO36qbI9L9v4PK4W%2B7ws85RIcjQbZcC7joWmJ4H2Fu%2FunaZ8Hk1dzcQ9QMweefQkCBhPrldCN3UqRkf9eNZ4zgi%2Bj8Q7F1yYs1SIt%2FdOpjFarQB2KDYcZzk4kHzE9xQZcFCO7TZVK64qnrrt2Vd5Uv2VnV293zoCBUi6%2BLUFPuQrICwRsAqUjLFzYKgq5OiwiBOKq%2BkNt8oIi2XaxsKmlX3NX5t&X-Amz-Signature=5e7af51a62166d959f8ca2b599a631f47e961ca500fcf61606ba2d1d37c5ed67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
