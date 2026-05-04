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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=ca67fa18f8b14ba8e2c67e929167642f204c1aa939b10b3f8c0514c6ea36b900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=403989e07ce1142cbb913fbd6b4733247968b5cd54a9d4854d77bfb5af039e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=22064465335b9aae580b727343fd667ee18f4dc64e6ac945ffe0987eccfb46a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=e9c636098421a74afaabcfca7c9f2b88c2a399898ef3a3b3ca732ab011731c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLLBX6W%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD46accK82WHxni%2FTYjuUKPb%2Bb%2FID%2FzhgHmgwfbFzPbgIgc%2BlY64R8Ss2CQKUt0SVQPY4yMxFzVIFmrPEyVHK0bUIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAGCx8uYqo5zP1Zz8CrcA8JmQ0lD3YCBXaoiWPPsvBTEvEJF1npM%2BzxovpXkUpOXuaegjE6rfZbBDjtwBl46egQcGCvWN8DT0OQ%2BPDblmNuzoDKZK43wZdV5U2Ox6NonNICKqK0%2FbBaQrqxJE0PTT9vSf1Zq25TnU16mzeys05ApvXMRjSp8tRd6gEUDDQm%2FMM8Y8Aap%2F0i4NsTPWIsHHdL9XFKoTOMM0t8%2F3DvQZvbMLpJw0%2FjLrbVv8r48I%2FmgxaPkVdj9YwqXZdCjN1saKgRLChwAaXjknw0c0qmaiDGgUjPnGse9sbfV%2BFtg2A44ccg77hk8cvi559txcJej49odHuv6PsD1F5YRRdJ3Xbr%2FjoGevsZZs53%2BmXl2%2FQz%2BrsnksKcXVT4kpv3nmd88%2FE4nnoqow3dkTZcyq27%2FEhYaQzjmfdM4bp0YllDKf1SOxKDHGP6VZ4oDm5mponAbd%2Fn5WkJxWdDPc4sYIFdGN5MNrZC6lkJwgZtdoJ9XMCf66CgGhMlzMLxgyJvaxFCNgA3IPOyrUweIsdY3ogKySesQVt%2BYqrhp3c8tLZIiBWayZTo3rV4DMvy8mEMoFfes3Ibza600ytKTlot4o3eNmMZ8vzkWRm3wp9BwJwgQ3YNISNb1%2F8h8bdJmLP79ML72388GOqUBaC122WFCfUGaDrAG7YfF5Q3rrq8sxE4NCJ56%2FBQVrVMldvNf%2BW4oSdx4ojkiwTHserrgaP6sL2ubFio1yuIobWLxYkmuL29icZGJbdFwSHnSeWwGDMexDkwGxSbEWWI19l0zZb5wa%2Bbhd8MJjhqAV%2B2o0ILDYAf7yVK7pRU3ycg5BUk14R0fY4ExLL5LtDbuVIIWOrXnZpJ91lU3121ggDlyHlaz&X-Amz-Signature=af07e0d6b984dc1de7d0998fa24a70832387ee10084c1424f2711cd382781a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=f52828042b01f8174bcb7184a5427462224cd4f58d025b2dbf3a70ffa6b9de8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=b73884e579534c471f3bd832691e7faa514568c3565ee94cea70ec0ce243b4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=7a0e16ac38a51399ba83a2e387c466071a581efaf138227baf3ad2fcb7e33c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=9068d131aa9312f51d9c4a2f090f3b3d68b1c6b04e1c75fa7d0fced77cc52b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=4dc606f717bb9002ae6ea42ed851e80eff3bb0ac4e8b0eb4d9f42dff4eae594e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6XQS3A%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRvT4fAfaB4fWmqFN0S7TOVhZTyWFGHPZSCQiIsiBBqAiAESViLRle2A1GwKTpDXik85oJ5rcTEzdrE6eiJ6iL4yCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMiYZRVo8lqoASckISKtwDj1ulHCOarIeybA%2BadVvIF4REeIJiuzvKFpZyP8n9osG4NDH%2BaEhqX7uKqNeoKdC3sOtazd5VDeYUqocs6hchqa4keF742DeQZxQOovkWYZ1r8EpMzLz7yiATnlAmxZLI5ygF19DZddDn64wzjr%2B6Hr98%2BuhE40nxBMBLYh%2BDLTEDhmJKI5Cp7R2Bq2Nn%2FbCebHTz1TUPvH%2BoHp5WabVOphhyH9dI%2Faf8pfN8OIJj3JfYhSe8DMYkvO5LpkyDaIHG4UAzbKgMafpYAXZFanSMEgfBdkqPmEUdr47dfWuiGlYCE9%2Bk502V%2F1Eq7LW8a1oq4yOIr%2BjZN8aCnRAUPzYqVVfCVNdWDPjBgVVae5AFnRKBcxILND2IuT0%2FZT5kXZ1WxAtDXyi1F%2BdHJ%2FiNg0dufFF1z51hpB7pqSL2NvE%2FqYphseN2HGoTOMfuGYYOQ4CFZ5ynm8yTGUBSLmJ5DzlKZzSAg0%2Fvvja9xMHtrJqS%2BRjEsQuFXu%2BuNdREVWGa%2F0iPwAfGCQ5AtT6POkk95sUrYmIyNyc70%2FgLstiOfLqzyImteFxwrhW0GZ8bduthugVlfnu1Fiyl3Wqg0ju%2FyvJn7zjIH3039pcDY1MqKBEq4r%2Ft3%2F806vqZYVkhotowrfffzwY6pgGBQQSuqliDCOtYHPtvFtapdsSAGi0vOIKsnHtRqp2OgaYECNhYC28YdHApbCn1AA096oXM5oumYaI1%2Fy70NhPDdMuoWfl6n35cektufLJlabAv3EaJaYRHIGP8uB2KA0xcz5Myo732iXrGn8in1Lh9dc6xEawl4lZh6MsMt6KShHMjhEF1fQDOjT9EF0sMHUZbn0eNtE5%2Ffdkg5OOSne9ouyKOdeAz&X-Amz-Signature=dee1235cc0492fee84df44397765d91e6d9def0850f54ba53a2046d1322daa91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


