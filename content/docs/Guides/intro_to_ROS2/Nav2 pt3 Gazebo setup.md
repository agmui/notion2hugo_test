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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=197c1e264b0588db07d0b6606f3777e8f91aa3f19b850d1c103f1a1fff0d0179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=7610684d1f88fcde8a8421a743e938b8a53b04594dfdf244f05d0855854f98f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=8db354fd2973c54cb4069eec8a247d70019d761f192c8ef47d79c1b324b33d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=88e354d3cc990a2c19dc97f30b4764bfbd78cc87724f2dfe162406b1091f1f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YATIVS6C%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIC0l%2BqU8ZIV%2F6XPnlZAXQbt1AmKyc49ts9Ivpjth628nAiBWPRdQLJfZFCg6a55NfkBxLyZ62l22FWTZN%2F%2F4eNLYFCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHXrn423Sbxc%2F8e1TKtwDFL%2FJ3AE4e1UD16cenuZ5nCQUrYsKV%2BMAq5OzyQzq55pWg5BA6qjvWubSGgF%2FYDjC41o7jLhI5rWFBDhKdpLQPcYQk3Vuo8%2FKlEql7K2sqKjslCKfeK3yc5x4MMCH0SgD089CESl%2F2EiHYGk6Wvik%2FId5VDSHTuMKATkUJySlLa1Wpd2aGmFA0EIj014dw06s1vc6eS2Tk8QguGS45NY1KjVGmfUyXIwFQGkT4b9SmQO16%2F8CBGZ4yGzG48jEsKuppbvA1r4DjFWJeK4bwlGzwWzgno9lSkekDdxAAlLn6uCPwoaanwE8F4iSrBuUNYMQ1tapJdhc7qPppREPjZWAxyYxhZ%2BK0rC3lrTJ7v%2Fohb9Uaya%2BCD3p9q6MCectz%2FMbewygNnrprO3hNr71XOY7XoDrlj9HSncYRecuOUzsP5c8P3%2FckzIDbLdZkFUK4zi50PGepcJDXawN4AqMelut5zggUtxoEU4KfChPZI%2Bbvx6%2FgRXvNWMOB4ndgy%2FzKzolh%2Fn77YzPqnzx1ASXInJFvB6bGjcJ99EM%2BiHsOcGhzHbw340r84zvAYb9OzJBFp9SEN3DDnPbVVAJN6CmfVJ%2B4myK%2BaEX2yQkNbAYfIxJJSUCFKmElhz0cqy8FDAw0eeayAY6pgGvlwM0I7qfcs9GSqpv%2FMkefsvz9CMYmgtFLDJ27PQf4g9OedXea7DFYDT1HoKDEM%2FbWEmFs16zw9dbvQdDuHcQsv7xg%2FOkHf0bFfTaC%2BllQtnUdi%2FJKipXlWmtkgKjJXZxBfhNQRm7IaZP6oAVfdOyI5bvS%2Bq59hPdP31jEneunTTx51B0F%2B3peyxLoNVjVPlPCRrlA4fkO7TzZhU9NthHlHxd937b&X-Amz-Signature=90c0b551e09c96b54595f431c4b626825935880fd09a6b383662aaebb399fd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=6e6ce49b9e9f580767da022e81365e9d3483841bee5e08a3927e018df36a678c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=75d4859fe63806ba77034f54d4a1c1ae15350bd6953b52a55eda9766c4fac10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=fbe19e60a8dd8928b37c21014a444f614602e5dad1ef78c6df9b80de870f4648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=781a9a1c8762210d98c353b82f5a5f696a1fdd0c7c510649cf310854f5de2516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=5d599c6094638807f9608dabc4b92522213de2d9715fed89b425065846f03096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDYWBRA%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB4co%2FHVEwhi4Nc%2Fv%2Fj9ujUAZwWZgfKX02Bw4h%2F0bgbpAiB67U02hnn6vfpjH9mVRt0WM4lA7cQmk86Oz0eZmOg%2BqSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7VqFKKUTqrGd9zA3KtwD65x9o1fLUV8ocAnNyVBX29msaVhfm%2Bk%2B%2FtaE0N5ZWKZpCbRd7Z5I%2FXmwyPLD9BXlBGfvpe9PLKrtsdZN0SeS7O9Tolo%2BgXAbbgm6bckODF9mh8eqlpZqnFiVxs0HQHgUmdVE02VL08x3CkndVrm3D7Vf2SPVnJgjeXstwv9MSKxZIp0P1G3NSTDjV2U2cu38Fwu3uO9fqXQmeZcPOg5sIb%2BdBRtAUKFy0ipORQ0R9utLzadeRF7PsKGvk15t1WFmEmyMW%2FrXlwGza8gGQY%2Bi0yGBtNEAoNwqjw72DM4XK3%2B30gY44bmu98HdA5H94q5jYIik4B9Vj4K8kfEuC3imzoZPJxukUQf45q9ZRIeNNm%2ByhQUSWV7UneC1A3nxAZZ6o%2BafuMgeWv7Eeb2KcqKf41KMmmjgNxsx%2FdB6vtUOMpn2Wbl33Ep3K4mz5DAraFuPS6SJL%2BxZl7TPtkOI6lN5cgLfrwwikSyRs%2FfwfMYz7xMUS%2BltHeXZKIc%2F2kqy8nPYSKHYdGwBAlC3ztQt%2Fb96HGMaKVoLA2QNiWNeKE2pB29DmlqX6ZOGyCQ%2FIQNE59s2rchJVwbq1WhxXW7kaqPARpn2wG9HZIBAgWHWUTZ6NqQyZ7xOnaVL%2F3IdtJowuuiayAY6pgFZYAgEJ1ZJ%2F3SCFCXc5ZuV7ugsjdysS4sDGs0vJJfq00RbaEJcZkD63fHWIA0W4H%2F0z2AYM8a0PjS2cgM8LcF4dhZmr%2BsbAmVmDz8LaU1nglhaiGDYKlXXSoadPRZzmWjZsKtnFQ5BHjJJTtdvJXJEh%2B8AtW%2FXZZre%2FTGAtXSvjJoNX7BwhNrpqAHuyzeXqJrpXklr7xKr15h62zC5IgpfNOxknwsb&X-Amz-Signature=8f542faad05ce7042452f484f4f69bb1fd51927e7fc14e5f5e6fa9f7c04170f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


