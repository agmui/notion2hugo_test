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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=0cc0a48d66657032c08336d9c15c8761422f2668bfdb5f53ee7978bd23c52889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=6f0f766e112a829381798e6e4a9162700545546a17b879f938c7fcf7dfa93c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=927b898f0c80792fec591bbb92cf5e1633b8fdaf25a0c1d436bd25d73fedb77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=6f989eda1d84fa930239e363fd47930b2393af9ac3dddee21797651a07f2754b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVX3MB5%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR8zQd1ufCLreVcs85U5zT72RCPm%2BZphOa8fxc2nYe%2BAIhANYi9HOuN9rpuWWv5SS5DEDVPuyZYCgwyRwf24tbQMC3Kv8DCEoQABoMNjM3NDIzMTgzODA1IgxMcpsR6QSydatxa%2Fwq3AOKdnGUum6UptzdgA8D0jOTLnchWW%2Bus6Fra%2FNtdxx%2BiAeEpbBpvIHHyKVLuXMcHy4LlXWGxC%2FD%2FvjGGC%2BAA0OBff8St%2BqN%2FW7rFNEKtyrHbMOZMCzDm%2BHUUcu5%2FDmQx%2F%2BJg5umJ7RF2Frlk2UBrvbh92Ulj2JZnluEJ4hSTxeh2z3NqeXZurMw2BLuTOrR%2FG8%2FLjgssCOf1ZtDlvyGUw9Lb43wbf4m%2BA8RlmpqaEiQDELsPBLK9fsWUQLZ0h37LncEdN8VwLtP3M9%2B1gddI9RYm4ZwQKKBsgm90WuvTN8fMkB6BCSBoFpj%2BVgvHDUbPtXYT4VwgpWXRkcFRSPDe5ycFpFrMnq1AWz5Ib%2B3trrr%2BVUbBwvyKi1GGNHWWRd1TKArUl7HnUuo0wd2R03YQabegUuYGZNEvPB7MUpYJ2EmuRtet%2F6St7UVamKedmz6xredPQFecz37dptx4dZlaLCK1%2B6kTH3pPc%2F58GhXqFy6Oxr%2FCPNnSWx5ZFWhi94rtb2cocVsop%2FtHDqpezPx43DZS34Qa0T38dvQrIL5mkVCse320DCIlfE52bprAWjwa74jZG2TLPDozH1qSVhzSzmxadD80WCSrHdJ648AQliHCaRSSeyyZB2YpCfGGDCBx7fKBjqkAQJvRgQXXdX6NrEmSxIe%2BI09%2FsV9VnV1KP5JLFKazkGUyWG%2BboNRw8gonemswCwaK2gkURRiEuLB%2FOnYixe4OfL8kSB24DmUTyb5ASK4%2BFi7xbus6DEDWKj3pA%2BSqqM5dDG3UuUi36ZeXS%2BoOgaKIbEb2fSRmlWiCg65n1B2V8ytskiXuraPhEh7h0oNu8DUcMAQt6hG9Kow%2Fi1oPDwPiFushRXF&X-Amz-Signature=12906c3b77deb3d1644b63934928b0dbddcdef0aa905f448d9f9f7f331db3461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=802e171b26b5dcfa83deeffc0eae5725fe0d2031c92e45411b1b204ff621bb00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=16b0b835c88cf771df113b887bbfad92743b7a86cfa681dc143f420da2deef29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=e1822184f4b50cb692cbe0e4debcd5649dbee4da616885521d7d11573c40be00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=402a8715434f498a11e71432687694695cbc13726192f3dc0b4aadd8a8b28e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=5bd0abb404285f750ebe3c45a92c0d718600214b4fb4397dc42f196a0d9f5cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRRXOM4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDdGaahUS8i8VmDAYF4i%2F1F0A3TIBRG2Kc5L9N5GL3opQIgFcoK46wDbtY%2FMPAJAAlXcEdBaNdJGxFyYsBgRLaXzbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL7h8MCyjK8lnajG%2FyrcA%2FOgeQy8DKZmv1DfLM4UkMLOJU0hjDQzmikW5KDbvLcNBWFdzhtJJqSdqFnUGjEjdjBv79RzYISWzxrgY%2FFWe7m%2BQ3j7XdWh%2BdqhsW4BRQW9hfdRf2ijaPfoa1bM8SDM1JBb3W0Jj8B8qmfhEFlir9SSNwilUFcQIJLWDKNuOCShCvATXdHhMjvWGp8q%2FdJEKvkpXlOrG5HtlSaqsPcEckqBJNNtdExa7n%2BEZPmyJWXwVNI9dqaDSdnti47JMj7qhg9NaQ7nCmw28gF6OLAmVrWrk6C4dqzwRhN%2Bv7u6Y9x7vQXCaR7IKbC0l5cxyQI2DaupypdVc6%2BzWV1PUAKsaWqfoM0fRLrULwGj1gczU9bFaA4njYhz8AZVL6tNNuLGDKHp68VgIQPr7w7hJJaofocmpdR0mcVnkRsDw6pr3iNyFRrW9tmZyqNxfiJlpGPgolE3gROiNpq44xXwTJ0hpXiFr3YNxoJjahNhTPnfRgTzJjyHzClOI4k7%2FqwIKStQdh8ugeA%2BffVkuQDlWNr7T%2FJdAlBTCySpGaea7r4GYWlqq21VDbn9oJ9To99%2BbLfyhcLOmWZlyHHbDof8%2B9g5VoReAuwC5Zx1MwvALjD9uYW%2F5aQbuOQtnjGp2JgZMJKutsoGOqUBKg6KGbTZqVae5OfMbcPkVX9qdeFkM3NbBYoWUysBs8QvTvAPBNi%2BJuviQ1al0x4P8%2FZ%2BTWnYJWHK7t09%2FE9VtsoOHxZWNgFsjGIMhMQ19onxE4Kmlq5F7KB99PPjOXFbkPHMVhMPSIk9MuJDOKNUOteo37xtKvsI74M5wo4ZKHAK3zL60QR4patJwiYfCxpYnkpxcUKSrpnK2x3TKKjhZ5l0Jt5C&X-Amz-Signature=47d29701a85edbc503e2400e4291e9a6b220ccca599d14c8946e96eddfd10246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


