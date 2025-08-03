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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=51eb7f38cfdfbad63e40e18da3cc080e6536af9a607805d2c003f167e7ef9c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=a429bd65f49ffef37834845ea021f9e5e9474c512380ecf05f5ec3d9e1ef8083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=f254683bda10dbe2276687471dd1ccc5747602b07587cd8862488a7c8079c429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=545e1c01576f5dc3c59adc4c35821f180584d248b50854cda4f219043d8e8d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JO2FU34%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVeWmGyvzOqRqILyGHfnOvo4ZAGIUgsxi9EmmcYbuV2AiEA%2F2PXnFEMG9wFQgbjsHiIAv%2BNuLOl8AXhMI5PazcuzuYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMhBQNAOy7RP0N6i6ircA10lOytXQw467rWFfMPfPq814zj3FAWXkxEiwA7OyVCrCNUihGzvWtfhZZqY%2B%2FKw%2FgLwTH6Tb6GE0MC%2BLNaKrQjtqEuep3XqVMAHO2AzKJ9ptLLsEmWxlSbqt3Ntcqa0gkMinYrzbsUzUrCwXFOwxDnpR3NUrnHintIwxkciuHMwkzYavTbcQiH3gueWrWHD5N3BNi6xgg3eIbbx9uz3cSpUJShxs5wG1tRbl%2FasqtS4RVqIWhPZlnfwweV2oLhv0ygnSUSVtMgjb3%2BNE93N%2B1CVFNuKt%2F5JWIZA%2BhAz2x%2F2mqd6FQ5013ckbUVf7VzkJES84H9m0zJ1JGoaM8SN%2BDcIBUPqi%2FDShPkFvlxUz41EC5gNsbIfld9V%2B2PfPQM5b8yS3PgOsXWzPhVlN5r65ih6RIUmpNjQQjwlgFYyxIqIt2QlAuhwsUUhBdhl%2FrqSM1%2FLxr2Jkea%2F5CYvPZSEJ22hmdMFWcIfBkUeFwQTz3vLhf%2BkpQfFcdOaMRV%2B4mlLygnImCSf5Nk7kRHAhC2xSwWbMcoeKKkQdactTSUrV3J3k0BXoiO%2F76gWwQRc0gNu%2BX%2F7UfOZe7%2Bq%2Bc%2F68HzBbpidXZ4HSwQfmrrqq%2B6H346f%2BBDq8nLD277724RkMKK6vMQGOqUB6ztCTT7uHYfNh9FZpuWdAYiamOoA2VfMhgfgI%2BBfCzF9N1SKKkQJKo%2BWciGLvT5RJIkjEebldBJbaNa%2BxrDXo4CXHdM6dk4GSqhuYeaKuLCq9prwZxpNbeKQOTuXqQDfhlWyQ4eMhruCCCk%2F9q4q5SUIVuJTvk3Tor%2BQpUPJaIYDmJGxI8RPvi8XTzRrAms8U8fgYfiwISa2ziOMtIVOiv36mTf5&X-Amz-Signature=69fda686152351f1e1afe80a9168bd84a90661cb1d342dba1cca970abc336ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=fa7b5efbddba43b08f50d6c5b5fbe1d919c091e26f53c12150674aac01832422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=82d265efe31e01f042b983ed30fd40ecc24667ae27b187c166106c28e2483044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=5937df7a45aa051f6fffab2ef130538eb75f4c8f483f8847f5ad17b42025c2ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=2d5e1c9c4b38eaf6cbee51237366814d63d132404497ea5b6133dc7f5e1c3d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=4b698bf4fd9ba65e1fd456694f5b44a546707ff318580cd7b53311d484ea5101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQ27SFC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd6DFIJ%2BariiKEJR%2F6XBW5fjsQ%2BNpZsMnsQoiWSaZarAiEArCr5wOXVPk8gSpz6N3mrWNMUzfOZW%2BPaqfh5K6FmI1Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKK213uRsZ7N9EUkOyrcA4BUrcRqleIGOb0OFHFSzZj1rUp2OLp6VV82hmdXg7HB8j0FRVAoFbvMy%2B0Cga112SH8T3fkMVsL68vFzDGwF2EeQHRU%2B2uSSg1ONo9Xy%2BTqW2tw%2F%2FLDvZkPa0iBZ6tJV0wFV6krVPhZANfYfk4sGH2guHTuR1zk%2BV9eBiNIBN%2BOQCBmnsqyx8AQqd1pEHQ96GGfsMGqhVASintzR4rTc4H1iMjnCQNIvfbTUq%2FURE1Sse8pNfcY5wQyIJXu6Gu8Cs%2BCFXEqWDVta1tgfUu4DPTAj6rqhrqUQliMi5mJZ6uGPB413r4CI41PVMB7KOIvKBFcIY6SINdQkfdW5xDZZU4OK7H9ojjDjGN5jXv9hq%2F7vBuyx362NxsQrjpmCEe4503QN5fM5CkvTBb5G2qHSO1zPEyvLGTN%2FGoIEgLblXRf3uzU5udr%2FmTtZ%2BcKcFB%2BdaMOvYFR%2BL9E3kn1lfYbF8Yole6qIOHmoJnNuBXxY1wcIYSucZOSsuFyqxK0%2BPpttKXiEgEX8%2FtWcswXeM%2FxiQq4xW7k4TrGP%2FELBAePNMTACVt1hyKxLPBX%2BPVKUJDhNwzl6%2Bqizf3Y69AMogyFyPpFrD6cJ8mxsUy1ougDXb21CAKMkna4t2Hh2s6%2FMNe%2BvMQGOqUB03ppDCblUGRuItr96cKjqp%2FAQ5RbXHNd5v8P99pd4CS9hpjVc1a%2FnVDvNe6%2BbYs6OeD5YF13YlYElYwsP%2FymCFyvyc8cHjPD%2BFvBdgZgUW%2FKsLXLLHMY1%2B3nxxw8Sn3taeFoZDisooqjEBN%2B17KF%2BEGqMJ9ffi0%2Bd11RedgL8JSA3frICtPxn12ZXkmZwJhXc%2B6LBRB%2Fmf4ww4FdJbtLCEoQc%2Bys&X-Amz-Signature=9ef96971bcfa18bb9e122980faf18ccadb62a900a9042e1baa153f9ec529067a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
