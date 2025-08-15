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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=9a8c1b6672d101a5eef0f23c5098cdc847f329fc0ab80e7858727f5ac289fd9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=675012ba0fb1fa330b62aaef737822cd2f585dc91bf9c9fe3016d37ba9aad689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=aefc4381c9c551a98c791ca45d0f15e0d4c17e038e898d0df6be4a7a14c217f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=3ba6c6919bd9c562560cfb27d48957145adcfb6c8b681b44c2ae919d1f8c6b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XGAR3Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIG%2B94h%2FVPn0sfXZZUY7yq4BjJykys0%2BoUz%2F%2FMMB%2BGP7tAiA2Gihgz3y7MAa9ypQtdJCRlCP2WKoc2sX60SxScFDeoir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMbw98IgrHG7ReXcGnKtwD%2F544G%2FWoO0D2DeJBkUgGOf67AhlbNiaeXnX1uq1He%2F0gjNqUXotgFwh070HddDCLNg%2BgBX%2FV8pTY8WMw0Ay7QNeaClZr1ntc9J1iqTBydVcDltuMAyohJHVK21PdJEmwruSTIBJUkHqaVgkAvuQ7BCerEHdBNnrBRl3VrHy3eAcXvOlGrEGzS3%2F%2BygCjziEH309DHq3K%2BooeieaG60UcTrfAjWby0vHHX6CHq98IU%2BjgAEo2Z0YyDms7olc%2BEw6HZdo3uF7h5l5dUIkxI0Jo7pxl8gBg0O4z0r80bnMQyy%2FNLFlmNOMF804KSdl58sRebg7pmVdRzTTK4cUUiA4cjWKK6DHviTfq74I6ODbh%2BcwrBMiecsu5J1YErsemltS64AXBqlPboXes6qC1YHEVpILiARIhqFvm44tVkbdvuZSCjvk68aVaE%2BxseRE7joFK7kURUWB%2BSrb3Tfcmwz6T9lJo7XcDQ9rK%2F681uSBPfOLP2jZAgXtueCqbtVtsSFODy%2FQgwoU1kCVE7MNGoJj%2FqTFJqE9rOnUfCvW2IIrObHqjIG79N8sRf%2B%2FpHJ1Xq5vuVxb3p%2FIOM3cFzQHDyN8KoLFjmV3lqCpYi7fAVuwuuoUzV4GVsuY8Q8wo%2BjMw6rb8xAY6pgHopx6E9a3YnmL0cqsxXqjqxwNJrVkiUz6YSgRg5TBPG6KzKWGC%2B1Wuen9V8l8OAcoisisBOJ7l7tBBcANVniymXIiLBGrScV%2FwUr%2Fp5hdBUjh4alX9raqP9f0brJPtpOQ1W2BT2S4B%2FgeUEcD1OgEnuH2lkHRist%2FMpoXNdVCYWZyHpi0JgGpKW9aEViIRwSaoQ9kQHxnsLzmt0Zbp7XYP972Lxm2Y&X-Amz-Signature=dc4a03e60c44c88b4961a259764ddc6c3061124942a740032b78be6a552c90b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=351717dba60d69dab07a3bdd720395374f52b958270b8052c2059c015cc93d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=449fc4688068389a7dcc0547d5cf138da83cf62980d13016704ff56c5ef6e6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=2df44dd0bc32a24be4f1b1be95042b38f421c39d67c58fc8c2b8928a41a4c941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=51f617c5dccbd162db0ab4532efc72f16c30a675c41b0cbf6621254b19ce46b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=84e25e4a2b08940e8fa3fa061778265d50dc9b39bc8dfe1fda29e495f679b5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROE4DH5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFKTHBvzCK%2FwAJlHSNvNyFXV5T9VeePT0x%2FuKllJUbumAiA5hFgwC%2Bago5RmJEAU4TdbwrnjMHAHkLaXHpE%2BejLF8Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMYQNT4YMCmZrJKyOwKtwDmxijSxq7aHKj4nV47KK314yj0Ap50iQGQ6qELG6a%2BJqs1O1RMKr9BWuApcIaJS2WIPCphLydbCiIHrQ1WZU0iU%2BfuIgiOtn6KicrPaL2mdM2emUfVoz%2FWOgblrracV3Zdt04lvoVas5XE56DgZZS8osYuWi1EQBvZ%2FqBvqhhGu7gzyCG5onhZnmq71oRZhNTA2v05C9IVkYaFH8kfe30BtOAIdrvfXQHzk0BVTO%2FP5GMQiwEWfxxjB26BYiOIGQXTnKQu8qjkZZtQyGOc1i31F2qDUhPmrwJiJMB2OFVXaGb3aOGojMR1hoCbjQP4N2OGJfRu%2B2Orn6OGJiA%2FT5VAJN41hvwyHlqW%2F9BqrC0P7K0KFFHxfS8TNkwN%2FBB62hvi9rsAm8y6xo9xVGCzhFcQwfLeSddc15f8FqGvHvI%2FYGJoyabEYf6Un8y%2BU6SKG17mIU2oJi%2BoFGGD0BSgJ4yu%2BjVpma%2Br6aUEP03X1O3aO2hAf3dhFmoPoYUYkqjPwcRkEYf7O2dlS6JGBTzEIq4JXpxxPycsVPm72gk90YcPE57J1pI769R05vTaU66%2FXwrY1qcuOqtbNbqpJBPoIWtZ25nBZrnDd3GT0NmQ8QBms%2FSTqehRMjqGP4EHh4wlbf8xAY6pgE14KLj31zN68wjTjZONZKHy4%2BxiFqM0RjtxKnJ2NlK0MltPe9t2UTuafBxhwo0OKNMe3lEW5UfOz0fc%2BZdSs%2BrIAdNvqaPtvXLHTwFX%2FylMsvDphTH%2B1R4eHj8pmG7vAo8TRAsVF%2FwQc2XnyU5bXcuUSOmDGuIwMHpn3UItlvTaJHSIR4Pt8phgFU7IbaYtGl3xig25%2F%2F9RCtEhqt4NX5LdoPew5lX&X-Amz-Signature=14eb3f9774cdf653739f28316302efe3494d895e13eb2e70fe44cf3d502ec49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
