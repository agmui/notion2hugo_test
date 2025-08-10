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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=634c49b15469fef9b08762bf3399d14e2891dd3f437a568ad84433667c7270f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=fdb2b49fed949d51c7c6e3a055518121d47416977b66829880affd958e413ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=d0d6594bdcd2f41f612ea1096fe0c3c5f82cbac3ddeb5f548dd14b0bd39b2cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=52e0c99b570900df5fd06f298b7bfaf815875d8e3332646cffe40caf839f0f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5OTHA5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBK2aGElsHdWBPQHx7lFeALiWnuPJwRut0nqS8c9NBBLAiBD%2BAh%2FIOhPL0k1BaZubExcyirxqsvbwx2MOi%2Bfpd3RWCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMedyI%2BX3VzQmbf7vaKtwDjx7QMEquXl%2B1fMK4G4vVkWw60zsHYMhoabKA6us5ZQYhZ%2FiQKJJFOur9QieMthXUV1G1ULkrmTHzUbpHB2eBAngurYq91%2FUI269y9ECfDFDAV0z0okHBBrZL0TBsM1WM%2B9bxDqhXmcyfyAf70UaOMJwGgKiz0oPGSCOYmeJSe8f4Bv4b0BVH%2FCbqat8FNIzQEgFAmYVIRed08jJZJXQGgJayNZU1VgkRb0fiEqPzit241PP6mPHl4coL1zlpZ8B%2FSOi%2FpOft3zBInofY8snFbby%2BtNA3jOV%2FUgWWciqtOZy6NV9%2BZ1e3B8mE4xG5P5srlaj1%2B4%2FQ0jwwSyceEZ7XLGRoS%2BwBqy8y%2Bq%2B8DKGwuEk3H7mbRV42yqVH7O4z2zLWszVN4nqb9W96iN595tHRI2RX5cgCzEtjNA6yXfh700CsporJhBAedgjaMA%2BBR2YgX8DBAPOz9Ehx%2BD3wB8b%2Bl%2Fz7BW71b4ujMkFgVXbCKTx9YzESDcflxE9fJyUHUagFm%2FPQgZTTINX%2BhWPYp1bPe0947nLTEtMmhrq%2FwqEMBi%2FrS63fEAU480qbEbtfams8rYqGSaRXa69ifZVbwZ32w7PXlco2W67dmw%2FUmJY5R2lSAqLcnYiQmhA0Kigwv%2FXgxAY6pgHi2yys7AMT%2FZTztr%2FwVU68nL57V3rRPpLP5aEen%2FfaW7P4UR8wssJXjZKh2SJofPXw01nvg8kLS8hS6Rk1Gsw%2BZQr4KbHa9VAyKY%2FNSeQCQ2CJdUeu1b6rxopL5QRZLlKae5%2BarbnXS1ulNJ2gwpjNC%2FKsv8OrJ7lS73VJrkXO3ZNNeRmQsuBvZAdr9r%2FQ31l7c1noKTPw4E7GSQ13hseeJbUBngmP&X-Amz-Signature=e2b3080fa357a6f342c86f728a6bcedeadba15c9a0603d4e4274c71479dc3d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=6ba0c7a80033cfe8744551b5ad254669b17b27c8a0eca4f97f0142f9321a9d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=b5f7520bd33058dad888ae41fb2e11f32a4498fad456fc0d36f21d9259a50c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=5a74ba23410887b1d5b09e49d314712c9bede8d519920efd9ba792daf136695b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=cbfa9f4f9ed00810dc074144ec062f68f147b9eb65b615d2c25ffc8cf8fe880f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=f98faa90a57fc03ae1a8d5e11bfde4974e37551366446ad5f67941c76b5cbfdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRJDJEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWdyhqlx%2B0bDAlOcWx9RjejablyyIhUOW3%2F%2BCy8fL8lAiEA%2FCjTv2isWGx9vtiH%2B872%2FDonUhPrlrTt0dpTwQ4gw6oqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhsXT9ZxuZSH8qLsSrcAwO%2BTmwHd5emIhpcHSCnI14v6pSd7UsfX%2BL5o662g3ABUiB3nW8SqGUMa844nTgqzfdakpgsseTHxYvebJkJvCQnnfJ%2BG392Flc87Nl19E1FGcsk98e1o7zaM92RiiLf5yGTEy1stf2lVfohUvyNfzovPZ13sLMCYp5OD%2BofwYM17phRrmhCT09lg7q5F6OlS9wF%2FfCaVFN1V72sxXfkiCIi7EI3WS%2BSgDKUmgYlQhLG0X3vsvCQ9WzYzlAWZEP6djpoeaa9HYNKK41%2FyL580lwMINm7MqwHPdzmjaz3NFhs00al4FN7BId5omIHGEkyz29cu9Xa%2BLC57TPFVG8%2Bam2%2BYXeZmXkfdeWwdQWPEQBl%2F46w1nwFMIZ5e8bUQL9k2QSn2AK3%2BG2d49CEasks9UDPQ4ixZdyien6n6ytw0oM4iGDC9ofnzKJfcnQwSHz0zgEtE2MHxzbeErx%2BuurnTDs4h3s%2Bd583DCuPOTeqK6swvtZjHDGtRQSp0c4fHI6HOjE80yA8a1aNkRR8GgMGjnYM5UqS8h6NSGgJx4oWJJLhBasdFjAh57NjI0AQQikpFG7d2plK%2BL7Za9JYR1MhAZyEIYCNDyWoCs%2BdlwpAGmHrSGPvPBaVLaRryKX3MLX14MQGOqUBeWJbl0LTqq9hg2FfG%2B34FqnCtK2JBeFBGij%2BIfOtViBEU62SVqsd75cDO2zmu9nNoNcSMmrP7I7frSJKn%2FQa7hSe2Gz3sl%2FSaPG6c7YWw7b%2BBDPVT8Eze2KOICtbjBvV5%2Bn0yrnq0HMUa8kluQ9TkF%2FEFlFo9p6G2h%2Fweqp%2FRs%2Boh8XlRuKO7ojWfWp%2Bw1iO1nRARPVt9glosT8h1zuFvwB6v4Ux&X-Amz-Signature=ac19c354a4809de917293cb7cfccbeec31c77c0d3a21e96c9a31b9652b420b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
