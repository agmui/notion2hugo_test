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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=974c684af4ea12ab7a96fc3b2d2f9f1c051d32ca75195f5d7ce42728f547e7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=094517eadf295c86dcc403182b708b90fa3662c2a9ebf67e450e355d5699a835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=79736b49c4c6daa896dfca8dd0547d75534da435e0c0bb1b77493dad9794c914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=f21bf8ccc1ed5471d52bf8e46efac7ba896f86070e5c399c7a5cc972f2aec378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662MJGBRW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA4Ev%2BsjGnRBxBCusV7PGzsNECi0pTDO%2BufArxddQh0tAiEAw3qosHBRF4tyVxxrC9s8NpFpeygmETq0BAP%2BRF7%2BRbEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyyZfNKQ9zQotYP6CrcA0lsHNpptrZ5XrPG%2BT8%2FbFrke%2B93%2BfWe5wRcP5uATzZk%2FT7tChfFGbC%2BUBHbjaQ49n7qb06xLDq9qXLaxAMQQbkqXfz20okMhF7AkaIVAzDKpJtrnlQ9IlWSCYE6hAC4VHe3%2FzgEH3o%2B1o0EGArcogM%2FXzAtLoDymrfIlqCPZyVqC0bxaxA4UPNjb8xcZ24hnQ61VFdBBQ7K6KOGbDxxB1T8JiOVN6pjgEfMlkjPjh4amfRxRb%2FOSVBxaYs03xmeMna%2FSap0sbx11gZaPsuYYCN9x1yk9QCqHashzF8wl1lqTKvVgxTqTH8jHPu%2Bq1yNOkg1nvVndA9GBvKps0MNrGbF%2FV%2BGb2LSXySm1RKbvXyX8HgbTVWPooAvmZ8t5u7tFK520NKC99fMBA2mUuKXN4tf%2BnBy3awza3AEgRpK2zzdUMs19Z4tl0GwrdTO4UCWzrqE8s4EGLjpNr9PJ%2B5pP4%2BJvcXJfg0%2BIAcXbXo%2Frzw%2Bv7zICtrtfT7O3xWuQPooQlnFTEiL2K%2Bl8DQSm71tNMyzZwwxvNebeRP%2BCMRaskD4Q0ukTQq3KITc1qbZB70WEw9pEiaDOrJ2LqNM10srIZYVYgqen8f1NjgTH5q1OKEQfpVvNbl2Q0qMhPSBMPPU0sQGOqUBXeNc93lqljz8RJ3Eqv5c%2BJ3xg6J%2FOierjciwSp3VYsk5P87sfbSzGMmXnERSku2Cn4Y5MsfegQdFdQGm0WJWDiQxG0%2B%2FatDiE4yMAFfki%2FERiFSAaDcr3sUn6zYaW6SljiYJqnNHCII6vt%2FLW%2FAWGMnUvUWYFGBXtIXmjWRHwyehBaUhmm2FGLZjQTRuyFV9Ge3KX6DpQXmuR0HWBqFLKclP%2FazE&X-Amz-Signature=2f89ed1a018326becc714e7eb860d0c0b02b9ad3837d6a04f8296c50217fac6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=33c8759dd45183cee48358b0201069a24f6c0e905404c5b99de31c7be4f4c197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=3ffb75c7b47a8fba08b7b88ad6ed1a57eab68f431d22d2a4223749d0fb081e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=1b8d613e554b0607d0d96b42fbd9ebc2a16f260df324e75da76649397490f2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=55f128a43a5bf1834951d951988c08221987d5048cf849ded8054099e2ae310d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=11a73ce360e81d4ff83c5e001a0ebfcc8abec09da2f5081ae44954fd22769220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKDJG6G%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDx4J7AhXG8u4qqA5wBy1Vr3DsoaGQJb1h%2FsdIl9hJNIwIhAO%2FDoQ56JLb9SolgeZ1VdortIsWr6b7ZBWmpZ9ziiWniKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJi%2BVwAQpUB3AuGn4q3ANOy%2FqmZfeaI62j3jPBWPG6hlOPHsvbwEK9PGVpftc%2FuXPGzf4E1oxX5JsivltR4MUFOBAato0ANOEhXiQaQQkI6Pjm3OZj1utUu1aq8FicGUnAm38GHi65wMsMq%2FLH%2BBEikL%2FLNrr5vF9PNnNxvld0GJbDcyvttNtur7kmJifPAl3eofnv6LmNZGyCAljw0uu%2BrrZKL6lszXrZMPj0SlZ47UsInzfznvl0G%2BCmDjEZGu7YO0UTe9ZWcbewVboUtV2ctbCi2oseF4kfviQavPIcZZHwX3ZOMG2lqccaih8A09QY7HVFba3LpwY7Htv9%2BgAbA5vr9FE9Ani77NlT%2BH1XF%2BUfzsRD%2BwshU4V5WV4n1bZ4L5a6TMhS1WNNwVIDRXGRq8D4p1YwLDtUc0E2nPzT3em4JvlQ0v35sOtx8YKXI%2FvqSHrQAIznS4N4t9UhMPBu96ZA0nB81mjuF6grkTCgTqEg8ygiEnYgCjKqS91nebZx%2BpRwNHDXaSJXTOu1WoS2lTYeciM%2F9SMuwiELvhdOGmD837v2BgoZE%2BBiJTy3TL7FC5cW3e5culpCZai9tR3yCBudr9cUBtczTc8iJlM%2B%2BwtlrUhRIk0w4qrA7TkWW7%2FjAiRWymZOATd52TD11NLEBjqkAak2V2tpp%2BeDIDPxbc1a2%2FHRoMKf1kbkANtN8pL5qetj8AneuJIfQf87jM6QugwDFdhoW46m8kmODcPVd2tQW4LREDsI8hJkZHIHInVlRiylHP3W0yugWnZR%2FOJLT%2BpiiFIt7j9N1628E6GByTDhzUw0i%2B1rO8lZ1%2FeGJTHfI%2F27lk2lkk1Ygtx2F6dFRQ2HbHd9unlvgie0EffYK%2B%2BcR6VdJCYS&X-Amz-Signature=7d4b89563e374a4038905aab17a87977d788efffa582d0efc94091b87dd45d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
