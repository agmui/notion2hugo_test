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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=28d5ae60d2f7919d3e30d7f87ad9c101d591133792283a843418f4a8e2d16707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=4eb51bb473cbc3c535493d652a0a58f790ece78b17cac863b10b4c862239cf24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=d09419e1c04c46e299729245b71223bd775cd14f776e0358f1c0ad43fd6910a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=7089336494725cd1098e2eabd9cdd88276fe08f58045561bd358759a704c0893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU46QE5F%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCKTSkZ%2BmTT1NLZbjlGG%2Fo7bPf4LRcji%2BBeC74oDZtrNgIhALhHQe8v9g2GOwdgnGQtBKRBqEp290BWB0KAdF8fr1%2FFKv8DCGwQABoMNjM3NDIzMTgzODA1IgwD4bRkhVF%2FolL7jL8q3AMRUuHpFTVsB82eDKLX16NHsOXgYSTP30Osi1BigQb9sE26%2B%2B5hnkqOqy43k9fzvT2wrNvarbIDWdthfIuOgEVfceVEsPzxThI9%2FZGjhRYLb568qIaVXdTdlnBLM15M%2FBoPH1afK5f3hkjpmZXv%2B0Cc2m14GvVA0DkRBuc49YU6Zuf236KQ0vFQf9VQlckfllTUi705RSZ2sMimazehkBPfIgxa17GJc5oyyU6YoCCpbHJ2QEV9mPIHk9diKBK5z9lafmpyJujx9B%2BpxFW%2BdB1RzkJL7%2BC5M85iab4AwN8kLa931hNoELXxPe8%2BF%2Bmsq7y%2BCH1kzxdxp3bNBHjF49wLuUbaneS3qT%2Fer%2FGkPGCJ%2BqWhiQGfzE%2BexRSbLEQxpn40dA8bpeNgXhgdbE7rxSNqI%2FEDDSMDemYmmbEsl2o7DFfYX6o7t2j1ybfgGc42lA1B9HxEHmOOi8BuXGeZm1ixW3NcalQNlbMlZzeXyFZbyaQBnhNEofzB4mYlcty0O8RXjgghTdHYE3x63Hel5KD5OhmzDM%2BENYW6dCa7nVbMqWpj7qSEOp8e0z39r7GMB9eqDU4XGVEi1JAlcvq8prNfZUZIM79bnF2k5tZp%2B9RvPYQDL9fwOX%2F%2BaxEHtjC55P%2FEBjqkAduP0X%2BGzqOZHghrq274MzyZTvQNfWy2qKpimMeALBIMLLxhEjcMl6oC4drJW2K%2FKABoFks6co0MjQnPYZ4PAqfKNTOp%2FUqlCUr1Gd5bHqQnU%2F6%2BC94rtBEgOjeG12QP85atQPwrdAKKJof4qda51YfDpgSjqiCaeqICGTvyOHzS9BvYFrdEDMo3UmE8LO3G2wViGpjWb5II64nuKYtNcfzuABrL&X-Amz-Signature=7918b8539828d02699623fedefc09d2de57ce9b56e8256f28298f8fafea1516d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=5aa6342b8832cb10f57f998e2806187f49534d5ecf8d4e03dff29b7542b1b35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=dd37c0670fa25856b3c61b61aabc0cfd5f5f0fa3ac9186152af612297bb7e7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=1c444e42f99e5fce3f4635b2490cbddc2595e7ec393eac680f80cc68b3eb437a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=0bcd8e9a00f8e35aba9ee05fe97128c8d7ad648b6161f78ccbfb7ea41b1f2d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=719d1780f68cd5abfc2a299276f46aa4a20feac945e8bf45b2b189769d56a687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQYGKIB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QtLcHJBloBaC7UMWkgOgGWwWCAjhWffVZ9agSgX5TgIgYOGLcJMbvAwGMZSRNgGmGgjmmO668pUCoXbPPMABZHMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA2eAs1VwcDylPG6ACrcAz4N6Ar02WHcj7mUi2lD1iR%2BTOk6ZHD0sJJaw3GMXvYqyD%2B3ovhqQqZf1ZNbAsSrcMTp%2BasdJNoEsVEWAFiykcXjfcGqGM85EYJ7WSnxcsVPyCOveIwahU2YAfw4UIypDtAPOPqzxK4rRQ%2Bt92SDihsi34hE5CWJFE3%2FHqOh13fZixEzBFZJ10QaxBh80yvWuCzMAoRHbmL7HfKd76zr23nWle7wtdrcecI8DfwaePjcO72hTVaRsysdQ7LTDjosbuIdu9bpKl6ahL617nZ0nDAJWZcZQNMuw%2B0MM17UkfxfWL3OwWq33ZIYcdg8Oq9sV3FgGKdJG%2FrT90zvjT7E62XnTNoVmoJwOl2SufYdQZkKOvH29PWxh9Uv4gIhTN2HALMWXyxkl6R6dtjnXmbHxaYSzXMpaJYC6yKuuM9%2F3WMlvTA4ZHVgLMLOE96t3e%2BUWs2oUDefWFZ3jjUonFtwbzq0IvLVZX3cgxRdgwZ5%2BsfkZ8SXrG77t2V%2BxnggNQ6BdnligvFvnnPPBbquTzKWlSRf3VuD7uwaOIS3AbcvN6f5ClpxWj6zn5ju%2BWd95Q7RZUgeqEmBr0n6SIvVjrJ9bBkhmmfZtlnV0vIXzOsoU1pZiHEoyQDeER4TzoqMMI%2Fk%2F8QGOqUBuYzqMYxNCC8uSmAqJ7AJ5LxPBHr21hwml%2BOfJYQA%2B6vbc%2BRfq92juYrGng9CbQvM%2FSF%2FaHPcoJOHUUwmvEzEA04bauDqwBhvlVjtCrbhOv%2BOJ4a5qSiiSg4v1aJLnxIeHoWCJAgFfS23eKIUzX%2Fixe32kxNZgTcksTAntEiCNtb5lj%2BXn7%2Fd0B%2FhnGrY9Tg7hVGQEZS5WNjRumSJgfu2vVkhJ%2FqT&X-Amz-Signature=beb86361ec1fbb5ea787d38baaa56470f104cb14716c7f71751d18062887a5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
