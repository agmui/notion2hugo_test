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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=a2454e8ab9a951e688f1f50680ee32fafa1c44db893b882251b5643ba005d738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=0c26cffe451a4eb3eab05a3d28c3bf21be0e450b6898dded75af0cc2ccefd4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=a0a00c940bee1ad47d4073dbc6a2ade9c38d14fb8f1773809febbb7accadb67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=6022b9cedccf40f879f963c8ed619e222654e078ff503fe3e814119c52b12c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMHEMOU%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaMj3eqR4e6x%2Ffe%2Byw5JOeGqocD0mHrNgB7xyeadYtYgIgKXRw6JbLCs1%2FJZVpm3oG3J1fy2TBKx4O9qcc4rZeHMkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeyYLJF1QoDTZAiSCrcA3WwJ7fvWzFDeFUDLM40KsLgZpLuANoVIud5AqczRwfgQRT2gpcBBBfVy%2BhMnhWGQFIPrXAKFTDhiLSDqkytgyjOsBogivFI8JObXUPFXzJ9AJebP%2BvYshLKKj3tY4ZaBXBk1exXei%2BxZng6dKVZViA4tTS16TgW9jIAH%2FsCQKByWo3bGp215q4kVPJw8jETwhGMx%2FLapV7zcIHE3NepMIi4MexSb%2FNa%2B3bPjRUfmYyASVEhY%2BbTWpxC0lBXFtHt%2B%2BLNk37VK%2BUbPY5NQLdNYb43naSDUFcLuF%2BmliHgW%2Fi%2BBKyyYfsN0yXTjCYKl2yDfhZj1ziqMsCWO%2FjuN9eoMc%2B%2FGc2nHgjrB9srMev7XPfOanQTb9z4s7gTTOlRc%2FOMwr3jY1eyLuXmI4s8SA9WbiCwZk6UU345SaGa6vI%2BjBgaWR9Qa%2FNr4iTDeSO1yW%2BRIHy7QC%2FFz6sCOEeL3d5rgBEI6TrIkBJMSUuAnA5wReJVClWO%2FfFcE0WOBfi0TUwWuYkTq1WQmGrDszafDQ%2FCNl1j2cgYun8kaRh%2BClpm9OiQLe%2FVaDgakiWMDPlAqqa9oa4q%2BMp2F2xIZa6d6R0zSgsatlleIejb0W5xKmQ0%2FY5D4cj5AsPoPbs3UtPpMOmHntEGOqUB25GsQ4rwcZZ%2BOKfa6RLDVdaYUMriirjG13Yg3x8u9%2BrMAP5j9U4VhW9Z2OXOkJSZa%2FLWZd9nJ9zwAi3JxC6R3j5VMSw9iq93G%2FHU1ojRBeiYITXDv1yWw%2FYrT3qTHMGaW2WkUzgR4Wz65kBEIjC%2BhC0klzD9tZfsbAxYD3YyYvouyg2Qb4NAlGQGzUT%2BhFG1o1C%2BoXTM%2BiSOJZuiRSkIGTlNUM8x&X-Amz-Signature=7d35dc11a9c8932b6c2f054acb93d550c47edf5ae298f99edad6a4fb0386c21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=d348259726ca36c483fe4dc18ff9a40894d665627560211f834d6cde49a20abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=4b03545bd791c42aa07f06af8aa27ffaeb0feb70ddd9e359ab536cce34ccfd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=8a42a8fb382382a00e1edf559ecdf97a665ae51370f1237d4891117c2836f073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=1b1b613a342cadc2a44344d01f51a4f380f8779a6d02aef9386b1b2124694d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=b478eca7862824dfcd1c4122437ecf7c57413d6ed08ecb572328a3eb504662bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMRMPRZ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJv35md5rRlm1arh2ei43gAToAATTMmOkyDvLcO9dyQIhANFzCD4jT3Dr2HMLvLyTrfYiVGo448%2B3whDoSGz7lFnbKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8WkhOOeCRY%2FbkUkq3AP0Ab4mln4OizxegNYtX5AeWF4PdGiHU5wsRUhzLl2bHSczEZ%2BqHkGMBi4cRBqmdJhfU8afR7MkKWTcUWdh5qXfW6%2F9xREICTNyuJP7UwlaJx8bP7J%2Byr5OqfKVnFn%2BIqvkgecZVmEuT2irihQZh8PlBoDAwv1CpKtW2wwQna2simmjtrxWzEcLLgkxdFzqaY4ohwBqUMejVi7Ah1bWNBs1pnsltzA%2Bl6V8QoLpLdLt4KE3XlFs1OYDnd2rBtwug5LEhnUUlvp8pNSQdalqzWlKrdGyec51RYYT1xz7M%2BKVc7XCmWU747cbHU5fhvQjHlFLfLGt7VZQxLKsIx1HAJXC%2B%2BmhXGWFA7SxHwoI%2FLa1GT6MpsHEaj%2BYNzqztg9JIHOLuVs8rWTuNmA2%2B036XNPFOI%2FqaoWSstmiOulT4mHfm2Kl%2FnIsG6rh2lEcvcdG65cIGG4%2B2%2B%2B0KEd6k9H%2FOL6HkW9L9k2h6Kd0QpUR7mJfquHvZKzKEScl5XF4foNvuzNSlXA0L0K9vOYIFnQCABXIr6V4emuS%2FQzdlf58MJxWW%2BXpvp4DrD8ZSjTc3mXiQfWHO2b%2F6tdgyg7prU%2FoqcH%2FKvJRO03axSwVNgmQ7i6ptwK5gPRNvFeNPKeIIDCzh57RBjqkAWEV7mga30PrhkDlzebLbkJLe6QZNJPwFaycoUQtHdVxpZN1mPenY4GENluwlWYgrUxNdbBCIcTllZrBy9vw15kZVT%2BkSePC8BmNf47VwsKnje0h8AVmI%2F13O0o3ZePkOYA2X0v0KuburBOopE2EPR0prAOOJu8mdn29X%2BJOaPbdn8SpBhKObATZUdgU9vkGIRQCTpJhwK76%2Bu2SvxiRxzKgvj9C&X-Amz-Signature=7dc741bbe4d59b8270df2e3e2eb0cc653f04b37f07d94310931a2c09d4d11928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


