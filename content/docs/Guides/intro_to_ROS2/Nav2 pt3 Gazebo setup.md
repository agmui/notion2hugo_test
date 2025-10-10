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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=81e06e5c9fd19ea69a48ad86098554c842302ab890aa49703d2a8eac40071c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=6c011aea5239472bc4eed59d51a4f2d9cfaadb7d469c182b21e9924b26f694e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=5e0e1e069bc8e274bf9d932a9e0a723e94d09dfcbeab40676d67482f4d5d50ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=9c62d9f21096c598f9d472558ca760e09cec93c51120489593fbfd19992dc587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQFCU45%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCOn%2B3OaVr0JjYRJioClz2yViKz9QJ0yxYqVhkt0Gl6rgIhAP%2B1YXkeGWLPoauaiPCuvVpczCHmgIRqreGxsC3RTLpxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9w3MCeHFzbEeMUWMq3AO5HVk1iqMNEOg7tp6MfBKQIIsKjxuGOKiOD63nIJroQVzRlMLaGSyFTYYUIGjH2Blw3hovZWDjK28s9K79xpS374l%2BvWAQ09Ino%2FiCOmLHmyqXUzjFUV4qtOOe1hJop2yhKZlotU%2F%2FT1w0Ix2CIP5o6npv%2FLgoq4%2BoUypD4NiVAjvFvpcAmgA96xj8a7ck6GONxsRVBpCYbKGBD4Uny82d8ugQ59qm8VOs5gT79Sc%2FXphRYnKYEZ8OAu4Wkc0fOr2MyUU2qNQ3rel7FtNLJ7i8bGM3OEm%2BkPVK%2F5Fal%2BFiZwgocYDk8FSi21bz%2FpyLX3sgwQ%2F20DR0Ye2UEWyOCBcP3Fc6OGelaNGxt5ZPLzMgklIJYkdLxosmQNqXs9GvsIst2hdXDBIqoRkV4lCtuqQqdnzs2RD7wXWoUpXrrjwbe6W0nHaJHcHeAtmAhrZdrIbmepBJLc0Sj6Wdp%2Fqza8sjEZ6GXuqsbeSpRyG41FU0tCgXjVuQuSbQGZguZJFYGWPwgfJnFqHu9Bf5%2FIHRR7EKogH%2F1jOj%2BL%2FB0aMbYCgIdE2tLJ%2BSvt%2B0RLSalYoqLFwB%2BptsfLZVXC5IMTFVRMl7xRALK96J%2BItG25pzb0f76WJROq4D1xot0W6uIDCQqaHHBjqkAcNWpxCrFBNC882oUvu7OPVu5lTET0JhP7%2B17ST2xtB%2BZ9u3jvPK3aNy7aikMRzBRXRrNbT3mWrkfE3fMAMpQ9wQ7MZXUjsFXQNpnf1GJmbFUTdMfmdrtStZCdFWSxrSiyu%2FBoHLb7TT4eA01ja1evmeKaVi%2Be72UXwf19NlQvQ2vjpAA8VSP8Ibo5Y1KWHPMZgNcCPfrk7WoViawM37XgZRCbAt&X-Amz-Signature=b7e4d6d06dca92741167ed7abe53969c2801f5c061ea6516fb8cbd65a5e34451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=0648b22a94b75801ce0af8f049f8d3aa9898aef3c08b6b592c0e1949cdeee0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=225d26aaf2b15bc3deb1360afbfeaa5934f404e340885a71c6f6650854b77f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=723a754c7c9786c16d0ec8e510ca37a9d6b591a844f8a31b8547421bdf872465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=c68035b9a574b97c9883f5a000cbb020415c9327d9e97438cc533c840e7f7d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=42763de5e46f6d196201038d80d2edaeccf69934206679edc6f1877a17b2acdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55LLT7Q%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHQeM7QpY2uqf6g3JuitSMey7DAUbuP3vJuOvpJpzj%2F7AiEAsCBmjomP66GXs2UiNOxS6PWn6E6sY5g2Haz1mv%2BDksAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvHyGSR40NSCdAiyrcAyNVvbx8b6PLeyrZe3FqRtg3wJh8vRIwqRy7HFPpKeE2OY3r9KljOIP7mw7FtH8jB9BKXyc8HW3IsrHD5hMSqkWmAdGAZtIlH%2FiW1lXYwISRO5UsI%2FvVYRI5XvSBAnJXC1Xl4MpWCgcN%2FpwpQlEtqA1h0FWwL6YoAMZkanxdQKZ9vMN1VSttQxTGJw1KweFLMS%2FruUiLWBUd2AqQsSqdbqN%2FvgJhuIiQtSD1rOZv7LZ28wTQgdKsnm%2FTF%2BUM8Bkx1goQDzxd5%2BfYuLe08TGt2y%2BzJloytHUuusV0oGUcJe2Tdf7KGkFBGp%2BDg9rE2JQBrlm6XQRPfkFkgqbsiG5C8%2FXu0npFayBapkDQ3JSHq60Efc0QXxLrC%2FH2A%2FxpQOnQz8pth1cLumGNSpPU0bt8uz8vqfM5wThQQnnwo1cCIaSb1GQYCVJH%2FOPXAm69FDlJKgyHKKDy02Em8OM%2Bxz%2BxhDDqL0FajlvNkbKextLfcY8b7mrj4RemfLsuP2Dg2eJde%2FIGDUoYGEN3HfbpFF1%2BADsJk2w1GmwYh7OAhuNz4VhDg6VRs%2BB3ua1f6cyyjNGaEtgje4wtalNHQP%2BF9MHolGjOr0LYf50rXeK06RiK8P4yEf2LOCf%2BsnNQFspuMMmooccGOqUB4GV0mTngwyTo9OmnWHUtACzpBLF9QGSuOSzdPyNYvg7gOVoH%2BgI6WPdCyN0eQepm0PEGlFW3MTuXYDj3JW%2FbtrruMz8bPA7b5wLNpauid55CQkN8p6WH0z%2Bjho%2B%2B%2FCkSc2QgpgngUuMbmgcbvEF1O0Y1D6ZnfP2DZQ9MBtp4gb3R4urg8lLDlHzHJn3l3at8ZWkOiwN%2B0pXPfTqf1lDJ0mSg%2F8Jn&X-Amz-Signature=7abf10fec08ccb109967d93d83ed6f6f3afaabb6ac79229c558a2e69b09a2e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


