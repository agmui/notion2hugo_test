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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=c5af296ee499f89d4d56f695a8b3117b862f67114d07d2fd6daf8845667be83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=b1179c444c4aa7ac6572da16fc0ef82f142de586c0b4d3d1af5827246c1e3e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=269d0c8c451f787faa8c58d3c53e61f182b21045efa5cfd75940345621c63e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=1393f00639f4c1625db0e846df3f6e0edc01e5e692aa616fbfbd788f194446e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SROAV75L%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIB7MO%2F2M8cYY5Oe%2BULt82oZabWlWLWaZP2r71o6zXLczAiBwkwFrkR9xA71gp7t5OvDHie0nR%2B9NiRGwmPx%2BLPPA%2Fir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMHo4ioEkioXK5SasEKtwDSbuavh5iiSBPGav4UY2pTMVrBFQA2Jg28r%2F8kaq0hLF1%2B6bZcJE%2FTOYAEgKTxc2JJrnRXFyFJHFH5iK%2FHDPOD5jKvgSuEfuc3v5PQpfQvs41g9%2BIBrviE5w24SfgRX489lB4yU7xwUM0VWRr%2Fb1mpfTlp06e8Z94TUBzLj21vjvSZfQtm7Xu3FUOyu7ZjQzjTa8C1fv6MrFUjVRjCJAa70bTBSTI8qnJ6pTVDUbHp2LPGyyf83G4f%2FAt7OLZTw%2FktSu%2Bx7GUl%2B56UkyMvhrNsa4yB0ulyjx62Yg%2BKrd1W%2FH2SuuBnFtQfN5%2BiHeKlAN06h0Qw2JlBGYKEfD8FuDmIBtorDO5d%2BWha59b0iQqAFAvUaiIAYCQZVZg4Dz6Blf%2Fcpjh9BbJyBbQrs6G6CS67W%2FUlUYSef94jGR3mrIRgvFog3RLktVaT74lgU7cyqDmQxhCyDTd7vLtP0QafIUgJCio4v9nxYnUsgq0TM4F1oURMtYXjufeGPGGbE1WfudEFusE6pTZM6HiD1xUPLTCzc6mfycPi%2Fi7QDJzyK2BdG7uEkan5KSPYBfga9KybPNVTwYjA%2BoYDD4Iqxy1wL29gT1EwKVQvrVNqnPHmonmYkIlqBsMe%2BoEkJLywb0w2JjPzAY6pgEJT9u4k6vLPNNTQZO5pHDrODBXOUGVsWJ7m8NWVCFs8d868ib64FkPsNc1W0o89O4jBQ7UID5a%2F%2FR%2B4oDrrFSHKkGZp4Q%2F560SMjOT8p4Jb0Aoco%2B6nNJ3FIqDFIq6CQXa9LXIK0JSiatgbFi2T4Nyyv3qWXDUAbSoR7SFCGHpCWTOg9Tj27KsN3h0PJddniZVQ%2FOIS28KfeO9Mgy95dHhqagMFqNu&X-Amz-Signature=fa99796f420bd6e2ccc580d60e3d7f454fcafbf7e7985d261a0464ec10e44d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=e791f557aba144609d44e96b8bf1bb5634ec73119e505a2ad4813b3d53bc4c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=5a2e71b4c1d908273cf5c508b5dd15e357e856259eae12c90c0eb43263e58d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=ec222a0b9bb2260ce13b13ace223f1197a46b0c15910a760ea6c4ee387829b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=438625173f35d3c1112e10e415077ad2533c923e9863705d60464bffbf8a1a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=5f6d9a868ba074cb5bbc299da166c99c5dc1d1f4369fdb7c3f5b1b7fc8d2a60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFG3S3P5%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6FefESPqP02L2CTDTF%2Bkt3Fs%2F1%2Bbv6BWTErJWZkDVbgIgWg1bb8nfXufkKP%2B0a5k1GgCNwRiGzrvbO6vwEmUk3Z0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHtX98hEPWOiLTubFyrcAxwhJd93svHCB%2F7yWDUUubrluGE76TfWz8NAL%2BU7gWnN0l0s2puKolFikYJQYlyZZu3xeQ3xNQ7BRzXfSVMfrXQzADQKXowMGO9WUaZhjspJcXlBQ8P%2Bzv0Z7xOyDy%2Fsx75km6truzvRRaje5GDC0g5Yr39sUlBK%2BlUiiqQPd2GhfLHGs17dDKIPqmR%2FkBcLWxpKAFHvpVzfO09iKbY9j8r0PiR0yyKAowPj2sSfzf9lEmkhuZfJUQ7g9FpXTcNIXHxtMlg7xrZ3x6aC%2FrN0u6r%2FcTKQtn%2Bu7oVcAz5L5d6IuxGOIWi1UGhMD7%2B5ko8E5RjbQUSBQUdv8WHBnznmHvDb5ObBYwuLai0KL12Yp647L%2BCkbsEZBOK57Xjhh6gFhXkl9Xeb%2BpEq%2FyTWGl6e49t%2FvMsA1eYfY0WvF0AFbpfJPZFyGPTv4jvYJc%2BGTdK5HS2yfz31vlI%2F6XOnC4UAK%2FkDzf5ncG6HRF3cQnPAjr1DuRsnWNShaKbBEon7MkyHQgYfYymvivbvU2vDRMljeIq4j6hJ6DuQOafMW5YTVoecsIAaCINyqJEs4n5DR%2BwVmQw8tIN7DLXBcZ%2F3NT4HgryG0w2rhZ6u0MOUVyrMpIH36r6FWddA9UgNPmGnMM%2BYz8wGOqUBfsOZVxX8%2B%2BY4%2FiAKj565wCmkGAeoLU84OLVe6ZZHRQAkUIjo6ZZpRBC4bIN0yYpwHQcutX1Tez19kG%2BJ6Wuw4Zia93o2mVsN0bVSjxJjQejlD%2BsMdGphUeTwSDrTBdvBZkT%2BoeZOZ4%2BAsWBihNfX1%2BRD4cI6Dq93LwT8LfGR%2FdHMc4Jhe4XmIeQUc0x4xD2OuAOGErDGMZjxw0MLLjiTilPyBwQo&X-Amz-Signature=d48d222932300de829431fdc9a3d53ef7f9eece01439cb48aca0f6eeef979c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


