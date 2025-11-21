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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=acc6e326bbf3e3c12c88c9002506025d96499c645a3c0827724912ee1e4faa81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=5a25df07f5b84b121c974e21a6451618adc54a1f3d68408f691fd1bae2ebe5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=02cdc7390d2c93ba432316c55a52efc1380b0d0b88aff812fe3007fd08676db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=2c26252edf80289a7e962a932c8675d10d9dd8e6fc53032297404aa9b2447e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJCJT62%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCID00uVux5v5TRMn4fTRwFaf%2FV%2FNYtajqdWb93h%2BRkxEJAiEAwqh6TJJjfh9SxJ%2FTUlMSU2lrQezDSPXAXu%2FuGO6K9Mkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJp5THDEiT3Mwiq1KCrcA9WVezKpULpw2Grs6EJHHEZvcdbxBldRlbpILOKnMeLvEopJ%2FlXJ7X0Tbgfi59pYqKxOuJ4w5KBXgMtF41mr1fgaGNq%2BOliLEJVb667UCDkCVnFdAhZ7Q9Ip7y0xKt0rSi2TnGRbbai%2BdD8sD%2FiaqxtoIduTJ0sLxmtPHMhaBaRzM%2BkH3NH1Qie7ubBhy86BZ9srYqDa3BOvnG2nrp7Gzj9TxWnZjPRUPMe82B%2FDZ3vsS0GIWdspjxrqmyYN80Jyr7ZR6Cj8miShXG%2Bk%2BG0jdbPlvdqBTEI48loBqCXkM4mNkeV1NOel3cmzezIi6aFeY3CROGuPDoICk0k3oo7YmVvRVPHu0I61kLo61wOSSGX7A%2BFYM7To6P9xblSnP0IxXLgYhJDUa0OIerD2avNj77oq%2FJZP3h0D2Dkp32dGoSFVAKWU%2B78K5kHHFGO55eJ%2BLdKXfCa4DZQkBFiThLvXtE2FrhAesBLhewyRFbN0Uz5y%2BGmsSdWfghsKTRQ4EQewf14BWkp9xoVw2Gm%2Bd8uaEP96y6BZUYdmCOv%2B%2FzATu5CWpGNMxDvWj41IbHips1C4UYz2TjAnmYN5LPs4wNWSNol4OG9Z5sje%2FHs7L4%2FFetfK5G0awFv%2FAq7OZjaHMNqA%2F8gGOqUB1GZNhhH2LD22ca0adbxfV904qBLwtmJpMJGi1nmbgYKO3S5XBMER44t8STW8Tu7I%2BwEXGmC%2FzKWe2v8%2FRkeNw3ZUbmVwRVJa9GHaT10NUo6KVYNqDcf3dL1P01PncCEoyepFMhscHapHKDKhf3TFhCjkMIYmavFBFXZNrhseQOKY1jhmjxhum1JjTvDJuFvExH0J%2FWaKZ%2FhHf03JeT4c6tXNOTeq&X-Amz-Signature=3d89cec2f4804705595bca53bc5485310444de3add2e00ebd0ac66a52dabea3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=172c9cd77d1b52a95ccde4f9ca1e27075012f6e1f8b622bcddf255cdf33b53c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=6f8a017cf960a5cb5c906b3adb589f85972474a4bd45089932c3175aff7c8a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=684d08b98510b3839ffc05b69d1689a2733575f16ee778c44a1381a3b5b465c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=789d701345bfc2c8f388c2e082deeb34f5f15f8e31858bbe34c73733a2e98384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=42940d76e49974889f39ea1643e32f97478bdac2eca0b2e8d708fb238e9d6683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLXFGLX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD2RZCNoYunzF%2B3rGyKtIc1QEfR4s996Lw2eXYOF0LF9gIhAMJkAV7EnfbhXilCQInbuvPrCt2AHYGzfXi31FlCvryUKv8DCAMQABoMNjM3NDIzMTgzODA1Igx91S81erdyHXLUW00q3ANdaZZC4G6cAq1tLLgN%2FX92qDDRytiEbEdhSjcR313mwNVXadX03NCxXfgJERCwe9xFvm1Q79yg%2BFraAhinBNnkmpq6ZZfNzP7f9z8eOnrqN44FetBiqba%2B5Ao2LwMC9VOZan%2BEu7SDyg7cIsGnDxQCqVYYKZc1R35hbQIGdKqH0eu6LkA5IGsN6yDGTYEsZZILace3%2FrmMRzQg2BuYrLIAYzy6uqcMtcPdB4hN6egsSO8w2oi3NJe592FUM4fX1BIPSwUWYOA7w3T7YSPNDNM%2FycPYNBOxUfY2a%2BJpYo0Mowg6bguBncg2RLaBf80vyDtWRhYscHxmsJhx7SMIRf3K2gvwegL10O8ktKkQnZcFfL%2BGAr81jPFk1k3MH1iwHa1YBe9%2Bk2McnkJLs68SCTUNjtpnMeZbaPRVoUY1LkpjsCkwbS8lxefKadRbcQC0RXFub7f0%2B03I%2FV8iJ9MazATOVFzH7h%2FHsVV7CfBZwvV2QERFIojj8OFR75VW%2FyCCDkpBlNEwGAVhNXtC%2Fru8cqmUyV%2FaHGYGNPCIlZRxABkJx8u1%2Bwm%2F4FVVtwMsZV4rQnuuNeMGfp659j4b%2BVfbN7t360F5Jl8PriSoKFtBcVwceSzI8UzMUBfy9M0BNTDL%2F%2F7IBjqkAYKLm3EoG7yGkkC6KvgmdzLvT6ymzm6PnIkSmPvDe2s3ZUbGvUNj4Lm6Vp7k5WT8ppOBLrcgaylkcZ1BvrWwORS1l2z%2FCIH6CwMq0VCEhzQQvZf7OM4jgY8m3qSt8NceYaF8lSHjuU%2FBncdcG6ahOTkqBYdFzyWknlZ16WGS%2F%2FHCQHuuPosjm6qULOyayhEYfhthG28E3dI3JAyusz9ThjWpQSgi&X-Amz-Signature=2659fa2a34a3cccbf6f5568353d0024f40d7ce597ba5224b7e27cbb696f0cdce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


