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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=1f87fa116f0dc0a52677801ab8e3b2c5449e55e99b9b9dbc6173211aa04e2fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=f4ac6492f67427c9a8399322b10839c4a0ce5bbf37baa3faf1ffe8342de9e22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=72349980087de152291b3221e596538a5e2c8ccb269ce17547dea5f847d2a4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=650b08b648d05a64aa0d8e3038ad189663ae5fd943f9f0b74760fee720ffbdc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXHC3PS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkUc895NOpdbUfyPngdNLiIBe%2B%2FapIXsxbOCan4m8c8wIgPecLxVh2nQFsiJSs2zfdLVyB7NFxVkmcIBzf6y0S6rMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKscV07sCtDmGWsOmyrcAyvgVvJ%2BmN19E3jprKHp%2F5cJ8lhKB28MRmMOzNSGuWidpDzSnOS7fGcUwlC0gPKsQiBj3PRBThjH09mQiPxqU81W7B4pYgfOIEC3PHsg4WYjRnH%2BLeQixh0W8zs5eSP5yY6Ap6FlzJBAy5h5BWEpOanvtWWKK58Hx548E3tSlTKFOr0pp7%2BSAKVQjk3GhzeVI%2BardX4VlhBABMqKqznT6FQ%2FrWanzIDqUKygrPA1NWWxeM7SA%2FXojRIQlJiOyJ7rAvCvmMMXTcLRzWHEPbzB4kg%2FlOfOSpCLiVAeSBXAV9JAWaw%2BquP3iZAYb6UjdVlUnYUFOqiAr1tQZ96Ze%2FwuujdkCd8FXfblVgkmFvG7GxYtRnUEvTT%2FELO5shKARAgqyvnvJZTrrQGnnTNJea8g8zcMJEZOnBDSWaYaDqMpThqS7A%2FD6e%2BCImRapIS0fyp6dFoWjPrnSQA739eNg6r9fkTJQDU4wr9jaYmXADj3P%2BBWG8yKqTNJqZZlPZCbQ8sihF9QFM1dHWRpIZ6DhIkwCahDCU5dmeJbfQ0fos03nbeou5wbKptwA8U%2FBT9zyBFg8H%2Fm565HT20lybWfuAAL6xYZu%2B60BZf2OPeEwkxk%2FFRU1z9RwdprAStYRV9JMNfl3MQGOqUBax%2FCIIdwT9loXau2Y8qvbgn8CaFzlupa392mpym1To1KeS3uIQ1MR3VFwKf6epV098B%2BR1ZdJaQklAsFtkhAN4mpRAC45LAYJPkc%2FmVdielDAgMqn2C5rGJKjDVjvx1rHQXLV7ffz%2FuLKie48rj5qPj08nrW59cZKn727qRBmajEQdGp53jnDn6niSqDXeNt%2Buxoydxa7Nlb7V9bhJjv%2BtKPdCeG&X-Amz-Signature=2690088a953277da378a02dcce2988ad6103770777e4affcb04c52c129ae2cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=f60d320ee6820ea7a291bc50d222126d501f407e087d21aae303c2322d9f01e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=b5e9d00cf11ded4bf9868d17ccc2d68fe630e8ff21c881c1f605b66340d2bc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=ddb499dd92f200df00b22cb0912d795c6faca3e91858a445d2e8152d66adc360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=e6bc2642f2602490bebe609bc0895fe8a4179150152001d28319bf4fb175537d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=834f7779fdcb8aa4fe82489e24a7e9254453318ce4a7015d86266884aa8c8e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETFQI3O%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLhz6QBA1k6SSTJiwcum1V29Y%2Btu1oNyqfkZJtY17DawIhANhIIsH5Abq%2FYUHMLUKDDbyPyUQCtJmMiRotBuonqD66KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjgbOLKom1d2EDJokq3AM2uL64U7ftnL1pKrf00coQ1azG9P2QV6HduQ8DlBRG1EPwCX6nEDLGH7uMOJLW9Z7roSsHiO8QNkGpJeCYsKj7fkS3q76BAIUwtrTsOtAVbRbHqs4SJgaAtgAKMc%2BovlGC6vDWYlYwc%2FEgJtKuqRI6kRlTWvKUGkvOF13P5gITQSyxGimBksP2o3fnQOMjZE9eIzRTHiA2dVJV6vRnEYIedb2xaC3bbqukDHNzYKiQ18xUqiQskcudYef0rQUBnSYewTIkTFOyNcI9O5D2UPwvd5L3MOMYpSVZ1h4bQOgcGsC6zNOy%2FS%2F3zWlHrK2QXbzukoiDoCtxtyUUCZriMrX13YjQERssSmU%2F8gkHnvkKDQF8ksg3Uquw9J%2Bisyn4m1UeP4hXuujiULbFc6u1QF46U762tvKV8sz%2BvG6U6aH2nUEcLTWUvTnmlWM8dE%2BCZzkuWGwInnJJVhrdDjyaji613U5EgskphMqHKu%2FBbZB%2FuuOZCbFmOktwmfxOj%2FEDhjMQmt9acV1gDrL7oKhVce6CykA4MtDb23Wodl6aXqktwBORPQaiN%2FdnJ3vqOFv7bxMusywRF3crMFUbs%2BP6SDe96XqHsWzpIAx6OeY1kRq4s8a%2F%2B8xdoiRr0pKHxzDt59zEBjqkAUGzI5zzFABnhxe4Jg56UFw3tlXRCwO5CNoiCzr8bFEZMAVFJ7RlvNQ3fG8F%2FmQ6bdN6RGepjF7NZQLeT%2BhTeZoy1ePOls3PvwOQ9yQxIJHBrekDmEg995BEUdmPGm8PWPr12S3SjDs82yxeRYGYKbAR5CFFuQzWpaWp75gXDUt5PA4wtzls0bM%2F%2FJP90Gte74T8Wm1Ii68V79wYIrAOuKyym10W&X-Amz-Signature=8134d3ed15882683b72433e27085d0b4fc0c4b37a90da2b3055e21c507e6560f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
