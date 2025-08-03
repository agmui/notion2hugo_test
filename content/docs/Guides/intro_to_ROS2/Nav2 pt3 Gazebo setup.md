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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=f5f3e74fa3abd9df8af7037e4f68015ff8e7beafd63f7ed3a382f7a1846eb065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=51f802c136ac37a13ff83889f65bbb95f89c55f59ad38fb240158cd515bb1767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=4d449d5eeda9d102c622d41e2460baa13b9c36b9fe805d4522f8534a2e090e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=a5df266c8da4fd7f504ef14b5bcca3a2af7af83f4f5240cd9e582776d1510542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBDCG6L%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwn2%2B3jrHbxVXyWf9IPJlN92R4eL%2F5xFU3Rjcg98E46AIgCtZPHknuLcDkW5NQ6xAWid9dNPkFeNYsgS9tAkbL8REq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDI6Y6r2iJXERyVamgircA5cRNsSMWJv30KENmRB6DxBlDp9YhF5TcEeeGGRT5Ngz4kHSGoLCi%2FCWsPja7JKwqp%2BWdtAuwtsLJ5TQ71WaGE%2BEWZN8nRGq%2BoJaY%2BmgfwyxPDoGykEf9ouPwOdp1gcANJKgCr6oTrDPnUm68V0PaxvqIRXsKSx%2B1P%2Bzp%2FhTQGCCgf4D3VxTxEfM3V8CWOz9daLaFjknGw%2FXYWiYMZeaUqQAEHXUopgf%2FWkKBjRWAKvUnp8YQoqIPVEHLp%2BFzLvhjnIgXjx8%2FMxOm5PN7SXdkYiTfFcGZ39olQQRfTwHgRiSauIW4Q1OOAqn%2BmPRTl6aMg4kAMojOLRt0sLjdMSGCUJVGdbB0A%2Fk0VkxvVrZ%2BWiLFPXAgGmRTTJ8aLe7TKvwsTZ5chI%2BgYyno31KFKoPzz%2FkSNdD988WhvEbbITgzO1ZJvRP4KQPHy4fpD%2B5zmlz%2BbIsYygTOMJrxjyA6cKyRsj7DLwroMQX%2F3yXTr%2Bayo7Cj1o2%2BsaJ4V1159X7KN6UXLFfELP20wQBkVwxqulOuOZaGTSP7i0Xth0pGeJMKy910peWWmb68jm%2BhAfoUVFnzZT1H7X46tbChPqrhbhGPJciQwo9LBLeAZQSYzIJ6BBq%2B1Metq4ss273V7x5MLDZvsQGOqUBhXeWueJK85f%2BucfKCgm2pdlcNe2OJh%2BhJf3JIwpJJRgSImu%2FeXNtBOCUxMzWz9autZnayIQ6LbGAv6WWHboW9qTEZgMKdxpkU28a%2BmfHEqgN%2B0Tysi3eDuKP6EB03HZTmGtSiUn1JK%2FXPxsOMXTnGcIqNi2snId5zyfwJAWQ6PZJ1Vxtc7bTgwuVnwHzllKdv%2BwsbUpUynQWKxlshNwUP0gbMb1C&X-Amz-Signature=2ca328169e646d62b66a78d5174cf734bfdd6615bc214d5b89ea2a35b34e0dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=de5a27958d2fd2898c9191d334269fc99d98cb6b39e3e59ebc1a9a8d07c310f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=993b73a2dc1d624094293ef7c4672c8b727de6b042967d47c44ad27263f2786f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=8f2d0daf287b51e51076e06538e3789208fdf9a8bfff4c3577668f3a10ea22fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=5bb383e5536e18f5f80691ba36fba2872d6faa68729cd36a9e1c87fa79048458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=3607167ac6f83558f3817fa7777fb1c81a4135c1775c337239e1280ff2c34bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCA2PI3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ZC%2Foz0e2w0sJIgn2zPVTw45v5LvnG%2BIUjH71Amm4yAIhAI%2F7FKcTFToGGx9rXEG74dPyK4H1RSkPFMmyz6W7s%2BKCKv8DCDQQABoMNjM3NDIzMTgzODA1IgwVotPeSEpBix5QrSEq3ANRkTLHjve5wp%2Fh1VriXrH4KcUIMxOkq5nFtjXf1yeQ7K%2FHmcPfOwNqL7arcr9OxlyQYTOoBU%2FE8TGrW2DqXXJ5uDmkDA1cx07Eo4USCmWDLK8gqLXBz3JniTLsypKPxv5SIaDuLHoBGsByjfTJy9Ln7%2F0rO2gcFnb7TksGKvm6a3LIS4zyVFzHCj4Eezuh%2B7GhJNGguAqhF7OdScLj6x0VCgK97DDbn%2FacMeAfQo%2BLG9852qGHwU%2F%2FOL%2FXgx5ggJQ8E%2Fvy%2BJjepXSlPQvTihyjGvvpcTtqfRiF2Qd8RDpD36InD%2FKK9GU6Wsz2MHxVvqfWEaIC2LjuqQAYKokYd6pUCvvznP3rIQaxnYHQigQkzNX%2FrTcNCNwO%2F9N8h4Mg%2B5Yt7b5MNiTQVYY6wAhYJfdbhGwp%2BXWlMW1J10R26kVAlVh7w20IA3vV2YZfcgQfkJop28mQ6YlH0UIcKQbZQS%2Bi4mk4YiA0oUUaVkMvOGdKfG3NdhQsRKCCQEHly%2B0ljiZYikHHTbQaw9CHnz9Q0wN416G5zit4XFq48dK05cNpeEzJDCoURqBDc%2BM%2BxO9xxMP63ueQ9ZkApESxvT8XZTSl8N9oyKpSo6nD0LsDz8NXlwYnooX8KqqwlvCrxDDL2b7EBjqkAZjwsgzPxPTj9FVeto1hLTWWhmBSZyZE%2BUrdkG6suuKeYFCVMIllUVmb1WXdKpHIutwP6xURzeAfQKvIjcF6GFy8sxi31M4aJSh8g94xfKILeeK2EZ4P%2BVDwzZMOqpdVPdEEsaFjnjujTw5NnZMDqS4n6CVk4%2Bfy3NdSgz1CNcBtwnzJYZOgULp8SqQsYK6K%2Fr7siDqDU4ngAkSpAmQqCnif%2Fcjs&X-Amz-Signature=b086696f080f485b3318632bbd84743d4f9dfc26bdb4593eeb9635cd0ce86e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
