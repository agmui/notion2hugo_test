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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=ea13f0573b4f7087cc4830079547ca5322544d95397af939eff707b5852f8444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=5e2f671af536580a3113a769d042e6fa9d4300d86b5bdccc7c5080e75d797438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=09b18e74fb1e213e5766d1ebc028af10a19a391d1b9c04950d287a1a68c51327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=a7ca68f413f74d26a6320886a3bb938ca6bdbd0dba1066eaf35949c5bfbe3e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLMACYV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDAw31gezq46E0MDlYFL456WnmwAh5E5G4YgPyEyEAdQAiEAtD4hNpCtewOWaoAQZz4B7Q5wj%2FScsE0G9opcCzRsHJAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDA7JVxRbobkboLDQsircA6Cqxd5hccaT9XiVylU8mAVJy%2B5QHX9O1B7LtXtZZDoPzp20yLxc%2BOTE6XPnUw3qh1awIMGfcAWNHUjM%2Fb20BlHUkWIasHb%2FUrcioIHqD505xPHyyKobtkiIAnL3r0ikRnCsyISal9f8Ihu4UQUmOEQHS0hl2Tgc6U3uvdkn6KIvuNFYezDRQDJ4WXIvD9tJEciXhGy%2B6ijkVVlOgGJ4xLnbSTCxlarjLfIzG%2FW63faZA8uPhzlq19Ncqrxt%2FxYdGh9EJLC7UUFEC4WBw9Q0lGrsGxFMNUxOwwYGuTGf7YsLyregXvpgzvJfos40rBvdc%2FAVSwYrgOfzb4NpPlhHrU2mm8jTqAtD4%2BKc5ouh35jQbrLB56b5umEqUce2WrwwPus8BNRPPJX4x2w8DqRun512MVITttDHlYiw3kSZrV03SDI0xhNoLfWmTVOVn7lurOBSXQOFPVRr%2BkbxdJNYn5AkT2W7Z35F6KTI%2Bh5pcTT285oM8edyWYBk0WzneCAJ0Pt0dOtuO0mzB8z2C75lYcomrnyHh0KiFZ%2Fn1xhUVg7nKcpQa%2Bf9FwcHltKfGG7h8xryutXYZSzwrnMdngl1j1cf1XABmbljVbO5mmpfmIIw60mx13yVBXypsxhNMNX3gMUGOqUBBCXOs%2BVxiySyydqmV8MQWovQ%2FDRrKxTjhfhCgPgV8ow%2F%2BDjmob%2Bj4FSN5PQtL%2B5tOjrrkJc9V%2BOFzpVO00d9cz4%2FWnQn20KP%2Bd83RL9de0%2BIw%2FBsLKGvwpp1SUBDaPcmnb7GhQ6%2F6Nm7rtXDyz%2F%2BmD9w1Cal%2FfVWVraLqDcc%2BynpoCp5jp8EFQkqgpxZgYPATvf1Wr216xws4UEfXVCGuOzzyLcr&X-Amz-Signature=c7311ddfe8a6bb3803671406ed45746597f6d7c70afc064f64e16ae8b6c8e071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=ae3303dde32adc5ecd51cff819b640a227349601bcc6f5a910e726107ec80a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=5901a2f6dcfa2dca3be0d4b4ce3a7436294233f78ef2712f37937786b23f9402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=c817f4b5b730a0263a89626051f924f0f161f32a9be9f15b8f6c45612145dd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=320243be67f812740b952335d3574f66fb3acae1eb0d9b5e09fc4cdf58e417f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=4e7e3adfb584d10d46e6c14727fc49db6ca83f54ca9b80742fb7d820f3ad2f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2BP4F5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDF3stlsiFRBe8srqpGn2L3bAsldTHl14Pd%2BFS8zcCadgIgCWpb7XlANS0ffnPrWZuA%2F6pftqeReyiMKjUL6iPKmNsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBHSpIlhF0mE%2BSBAcCrcAxubpMEbcrkl2iepGx5z0UxjW7%2F41CPuzdVvrdgors35jTRBcEfCHWGNzXmHtLUvli2nsqKXHif%2Ft9NsIvsy3P%2FjW0Fkc3fMBU6d%2FuwcKm%2BWkm%2B%2Fo0BfBBuBsU9%2BiC7UVY8f5ZTHJt2sJPa%2BQTCHVAOHNYf0c6%2FonVdPys7EjFhbnekrwsEwW7YQv3OXtQ7tyY51%2Bi0mpJv%2BAiSGrIldlFGkLlDrfq0zQ62i94U89JcXSeb0CU8xXe1Knk2fjh8hEoE3aPBpMqjynC3vNl6TXR8ONIKXDCZLrycDMBDzr5dcrSko1XhG9kaKwfSEqq%2F6Jzd6D4zbxP1r1zRdFtnCmEq5B5KIvhdtDeS9CbgYQOTcuu6WPeg8nKk51Bqt2%2FD1POrXFWAFDsxMOUK4GX0v51h2atcG%2Fi21tkw2pCe6piS0zcUJONWxVN8DjyG9vP74H1MlZPKcGSjv1Eh1d%2FHhezVARKF2Cs1n1JN1kwtWzxh0R85ft2P%2FWGwAzxIXUH7ctX2w%2FtByWbXTHSrg3Pnw8u57ipit7zoZyVPXZ2MELDxNaEbJfdqYCbE3ofgAzMUeONv06errOoLEkPlBOLy2fBl1Wbo9w5%2BDqHLBRpyjJQM4Ae97JTYdouxJ6gdzMIT4gMUGOqUBz4ov185dv84yrLee1cBLwLBHrt3RrfIZbzQX4Vwk0sAso%2BBPHN001J%2FxJlr7PpghR%2FqIxJyn1abM1%2FJZZS7GVzNrsqymosULLNLqSrH7lUzpSblunMoIIx2k%2FYKmBDLfYC3FaeR3jfNVt6yGG%2FJ5W1IY%2BW7P75RZOLV5pG3s759KHmF248nxn%2BnKcNBfFSc7h1jfJFQQJr7ZEXkYD%2BL5TrzNS8o6&X-Amz-Signature=77ab687b36a47e33f3726346e6fc49fb44e1393603383092c3294253b902d433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
