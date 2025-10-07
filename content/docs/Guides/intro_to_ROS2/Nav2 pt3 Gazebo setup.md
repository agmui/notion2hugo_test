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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=8924c65c0ba2a668549eb846335249ca5ea9fbf280f81639ed1e3e7679b5cb1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=2fa7b0d2256eda17ef8b6ea6c221c52a139ac347760445a30a7377d37af711d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=a7960472479b516993a543d7c5874c55ef2a9dfd5659421807529c9681433318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=a5e4a37ae32f7f66b19f960e464c48f36dd72c99c2e8b35aa94c5180c93bccd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWQ6THS%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCxre00wyNNXl1Mc7zu89U0Mu6LvhdWs4C%2BNo3QPltR%2FwIhANg4qXgnKyQ2sS6t0XiKCtTy41OSd9KCQj%2BjcyjRDaPrKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxXxYZdGueukfKbWAq3ANMtYZ6jT%2BqM%2BOGeHLA1030ReQMYawk4j%2Bjbhbjm76xtDWTKJPK5yhmt5I8pSv0HGedBeOj2WS57hqacTNKovart2W1cMP%2BFbTVvli1v2dqm2Q2wxJG5ELMlrXjwf6C%2FTnH9ImiGX0VWTUEEencvVToGdyt0gjDW2d3cha8TIBiSsS3qKHJUs5sI6B6TjgEg%2BSFzjreoh5eT26VZNyGzhs0xF9CNEBJ9%2BYCYvLtI1xuQjH1trYogT0jlgFrX1GGfR6xWde1%2Fy38VfvVy0rVvCS3l8eqPQyg4bfLvOqtN%2FyzwvvyNJ9DEArrmn8W6OQZXZTMkaRMQnhxjWnHEsd64RFmUm0QwDkKfOmjMNFGTLmwm9shC7HbrFBvXo%2FJmu6r0deqUKxFNbx%2FbQkvUQi7gjE%2FK%2Fr4qhHOW4Hm8jVRR%2Bu4acCovkvN6V1XkZ76GLAri1ozPhRDJ0gRMmEwPSDAL5gREo7D9crMtv9UFTj06SOxeU9ufXTLfA%2Bmw%2FKnwIm55bQfPS6tGWQ8xM2NPrxHpHQ%2F4kWaOsjD%2FgP%2BTt%2Ba%2F6rs3dBtfpHy5YM7j7jQfSrPMmPfYBBYeSWdw6i%2FwSuc%2BuxjoEAfD9mDIArZZbp%2BF4pg3hHFMJSy9Ydq33wUtTChypHHBjqkAXoztynJerZx567eW9QSCUp3iUjW1MIRD0UNi6xCB2uPzX4UnfQmzPbqS0gpPz3KZS%2BCeN47IL0CCRnsQ0NKL%2B4Myhp3bsx1b5okMAasbJJqncllsFb0HviwcOb%2F3ppC6RV3mB%2FlIEvTHB7VyUZGEvzWjfNpaCwa75SFZvlxVqTh05F%2FzBFVlciyNXaAss%2BdKEXQ475LtkQPLSA9Wb%2F2inAoqp73&X-Amz-Signature=7ca154d0f57ae2a041f8aaae54d2610bfd2349f5e9f31d3e29c592f7f6830c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=660b7d9ee8094a451a72c4ed9c0d65ef9bdb3c3d97c323402d64421304b14a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=b4bf973e39ef5bd6a3e32a52a65ad5b3a2a9e4ed3ffc76259d8ef597f879333f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=1f173e796a59c5438ff2f6c65c992998acc7f9b7f3d16e8fefd3dc9dee1514c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=67a1f1f9f4f63b9e7299723903e91809a08c5d378fa62cdb0819e59cb0974d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=264ae0bad076acc08ab3d6337de36299a02322e7b5ae8f316e41b3ada3fa649f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2V7MAZ%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICckMQ2z1wQ5nibewdxImoBS8wacILeppra4khY%2FJiTgAiEAoENtwolzT9gI2TKiGYmrFF5Z02DbD6peg9g5qs9VbCsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIRHbzOgGl5%2F97fEyrcAzIRL%2FHTGx0BAXeRs%2BkTlDYeVT1yIVzdlc8ZiU6Wuycj%2Beph1Upizxl1aTkta3IdfClEvHu3LZUMEiXcYse8xNGykFsiFV0Ccipa6U8a7QtxJwSJvzylOqOtlAD8F%2BsV0Ppp2%2BAh4Kk8rLqv%2B52nxtOx%2FJoCCOyPD8tyoKkQJCQnGK74ElEkP4NN0QIlmU5IlNdTTHfPry89fC3GQgyrkUfv8RjswjAicJiAqOy0O7vIiN8B1jjWi%2B2SW24IIpIyQj0lEryp2iLOGzissejlejbPH7Ei98ezhlABlnAcx4HnOrg4DZhmjvJPsIaUSmFpy2P%2FXENO2FIUICMWntBZvx4VzUf99oeVamvVwGiYwoil7%2B%2B%2FDNb1C7rUv1GV35E9nLyAW%2FNO4Uy526qP5OGwhpWQB9RI0CcQ5Qs%2F2z%2B8KZXH4uINXykJcFCM9wncMD07WmWtID3ShTY8dva9pKLex1gCrfjBUd5tyjq30XM25n81P12E2x%2FXRYyhoixpNK7LeRRv1y6K4iELs%2BrydF9Jr6NhrhcGGvA%2FJ4s9RY8AdeTX7geVrhqYbaq4dG24lQbnUJVefXBc5wpA0hZmGJ0hePW5mWZNdq6b7HlFvOEmrwT9dzXIDPcILRqOrf5UMI7KkccGOqUBNeAvflvL6BBFsSismK4EgGAuqOkHAezHrGENUcFLTh7q1AhBD6Ta9veb%2FXi%2BhcOYQIRZ087ywWQlEA1avDRYdUKGsnCTPe9gcDrIOWX%2FhpqPZpJt7caWhURxQ5JGGiZ26HFMQ7LA1%2BoTQc%2FFD1pj8j289do%2BfReobT3%2FI8wVNPgNQ%2Bo3oxGyxoe9eCIHyq2DnryGKediw1G%2F008mIbQrcmAAzO54&X-Amz-Signature=f823be767e06f8ec11d9ffca0baa5ca9d018479b904e34c8e6b6c9f6385f6118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


