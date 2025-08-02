---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T01:01:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T01:01:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=144d6fac42ff3ae91bd3d237a9aed42d869d457eed93ef511871d21c48943c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=c769e019a6ae8dba2f4a904cd4117f98e01f4328e7d5e230238e338bff0f97d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=0634f8eece25f4afb1afd4147c81517f65aca2176625a13c3aef6c98033889e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=80b2f8928393b5f5abdab296453af01f61069de4822fa4a2614186ee8ceccd4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: test `fdir`

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
          ~~<fdir1>1 0 0</fdir1>~~
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Q5L7ME%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy6rY0DP2leZyhh1IALeuX5DevYtN59QrdrI9XH4ktrAiEA998gb%2B70fOzMwfOEMKGzPM87SGO6YebN75M7jMlaTqYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDM6lVVYe%2FG1VVqA%2FESrcAxxKpJMB3lPistX%2BhbQly8050cL%2BtNxaDw6ocKri1tlgYE4F%2FH9xaBhCnAb7ZW4Flr75dIjyrOrqsNcp3Ls3ojFgr%2FjZkYWk1u8g1VWPGseo%2F2M1nVurBJmnWVp%2B2DrLFBp6dM6tPrRGGTAqqVouC1l6qcJb%2BD3P1fi1V4N6wJeYpJSSXp4S1rxPCA15jAPL%2FqfcWQlNtGEW%2Bw8IQypoADVBvX2kFCO8avA9GjJbp0bwTNQyBoOHPYwal0U9%2BUphpOAXGkbH2SSSctkvug53gzSvEHkormxdBRAYhmvyoDrHdgKAgYTLCde%2F9JXWqbE0bx6Mf6WVJAe7Esy9VYow%2FR%2Bi%2FOrT0Obu%2FkMV9%2FT52gs0FTsaki413dcnNpxYxAVYTmF51wraYhKdlTJVnSqMqUCOnPuUaf7blX3weg34KenvKIQT07P0V07qunDf3EN2US%2BR7DFVep%2F3rcR26vH5cXglrVpSGj8A2%2FB2tmLuj3N9f4gt2KKOqTMn7n22AYMzSoFZ%2BxBUkBYPJysqGUEtIerNPdavTM9dyGWZuNMDmzxLodzl6quGiaqfEvbBPYMQTPv%2F4EhuAOIpPeWrqr8hILAAkT5TURt9W%2BN%2BWWgzWk%2BJHlqtQv08VHk%2F2kY9MOPvtsQGOqUBXrLmo7zCbfSE4a26p2OIn7EugSwdOStK38o7%2Bh6LI5LfHakN20x5uE%2FduVR3WtT3l78OLzdiVvSfoiqpFGPMNgmqxZeClR1Nn8ZvXZQKs7keUv72yjBKG2OC9rGV9sgMWM8J8B8QT6IRYF9RWQQXKcATFuhSDl5wvEmwsWeinIxwrHxFDc96cGwCnYMXnCOu1YhAVrPsQpUAmugAIZLi0sTFqzLa&X-Amz-Signature=5f86d65a4231ddd153815840d7c2e7e31900df64843e49e73dc726da5897270d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=d524ca127cc631e8bb5deb36a4e0592f5ccef45c97ec6f1079e01f47214d3b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=0e9dad6910bd09653118b6424e8dddfbac2108e745d12dc0930180e8e6c32ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=0bc8966428c9ce25bd05ac1e2d3bf20b664e68393f2868b562c7245ab9977a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=9af1ba1cb99ccee853936f5d6fa7f461d84f626440737d97b0fb62bc886423e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=4c501814162f99d0549e55c053b6c38ad79e51daec853250ca6e6d6f88b62039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPYWOVW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ98h%2BSoAJ4MPv2GvTzTKM5Hge%2BkB%2FOws8hc5hPnfX5QIhAK1K5WGlrgHckO7IyAKLc5WVdHofzR0ZD1wbklGi6edCKv8DCBAQABoMNjM3NDIzMTgzODA1IgxGItfKxDsDtmY55KAq3AMQv6Zrk1GUgxe%2B5tCVXgnkL6FZ0dvFVHKPjtIqXsq%2FB%2FAhsByZQ2qW7mgfQsCdCF8Q3SALrqb7ZiakPM8GIZj09lB%2BCs2VUCihczDsBy9YEXfsHzuWZXslveCoKniS9DKbhnp0NcuFzznM00apjRGn9oyVFrlDd8PfyGzfrD0HqaYeJYMcXucKXKe3yiqPjoNI5L2%2FxzA9vz3syGpDlsEyfYkiXJKefhN%2Bjb61iP9piU956SxEzQ5TesOpQIJjea7PU%2BidNwgiK%2BH3Ik0kcxABmE2kq4n3%2FcOdvn9juROqhULDYZcKzBApcQ1MVU42HZvP2c4PonZYpqp2WHb9kyOsPyRDhSDHNyaLk2Cn9hs1YavlME%2Fhp7MzkJ8bxRJVYSpNtgpfhQxlsvgCvT5LwtCQOjVlr4E74bQYSZrwg0StxFzqeAnPI4Ykh%2FfoKa5NxeUwQABS7KnUF0kLn0xU205%2FApuWZZRREOkN%2BKFPAOq6o%2FEaqlopJBANWkJL0M9Mx6IsbZFCeptQhibPVJ5oP37kaQQbrIbsCE%2BbXLY%2F3heMr%2FI6JUZxQqDCoDJdcdWlXUReVjy3iOKVwY7FxfDig8NTH6ywiNxTetVhE9erdcNVRZ95eePPp9zbdIrtxzDX77bEBjqkAcmfvB207jJ8fDEQVV3UqOPMkK5DGFzM6YzZcRuTzK3%2Bgp%2Bpvqw6hPBkpP7AZhNBet%2Fys0uADcEjnVA%2FG4jNKW0pfd0ZtvhI5jOv5PA4iB%2FS%2FQ5y4hMEuhVNbPXdTtYQzQeyWnvF4ZvXV3JlfFEqqYhXowXJUoJ5LBCxmr6xPmq6czaa6WIPbQ9uNWxLEoCmeioJqs2Pcj3rH2%2BFsdB2wDCbwn5j&X-Amz-Signature=70b10e6913bc94e9fe41f0f75e0d47f7ebd0d6168ae2ba9aa4bdb81e7312e972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
