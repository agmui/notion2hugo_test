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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=7e66c44bf8f4e6702ea448ba4e328f1a4e82d1244aa9123962e69069fb4294f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=be126ed87f30d66a0ccb018e96aaee951c436f7a009f293b935b1e146ee78cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=305e78dfafeb3ab0d771a42e7137c85ca8b3e914ba81726effa7f24e522af752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=4ad271cbfff6a89151a5867753602e05fcf60fa99da4b6b86410507bc55969ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UTSQE6E%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq4Qgb%2Fl9TGPz28qRTCUlC0pFsjEukeMTW1NBsTd8R5wIhAOTYp%2BjxYq0IHCTHEBQmjvsZXKJnanDCACb9JIFGNU%2FTKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8L7TFFKizP7vtfswq3AOGLt5ib%2FJm5Ti%2BLZaHoljuH3f5zt1%2F9acmuaP3LY1cRHKlN15%2BQmBuMewK%2BrWqRO8fw495yU3HExiSC84prFRIM8AlYmPB3bznV6uJ8JQZRBcLla3uBC6PHkdZz7thxHjfK7HCGiSQgPI%2FxR2CWMEhe5e%2Fv5x9K3nflBNn1nR4O1Gi180MoRIReE0iBE0k4JDSgsuzOsYjAcXzzY3Hxbfh2Fav8EUWufvkyuO2%2BpKCcYxiFDTWnPHz0BWKb%2Fheraxcm%2FhSPsHnZJYXEIeYPOJacsFejUqrcRZMeES8AvP0IsyewLQe%2BFuAQ4BSjaWr4h2zzIqNvus0i3%2BuLTBMLqmeaz5Y0W41NPMndlwlHus0Y%2F380TELhOm7k1I6rYKL%2Bk3nOI0j9LhFdV%2BYwuaYd3kTJJrJlZ2ar3RmvV7t27u%2B62%2BVNRIvZ%2B7IcwaYwvHyGgj4mC9BgPW0kEkPpmLz3eJwfZaJx4dve52OSlo3SFlb5Dem2fjW25CG2rWwFM28z5sfsr6IufCDK2c0eP29JPpspX263qj1d1qRqp9FayICCXvTw2uKs7Jc%2BI6Woc7HXTZ2F%2FO6aUtWOxgt92Y8Ny6mf1joK2PMtazMs%2BDQIvp2m3l2tnv8qs%2BuNR232zCZneXEBjqkASMcmlYhrl%2FJCiFtJgLNq5GQiFfi5C0Pdllcc%2BLpDGN%2BABB78LRH5r5TdY%2Ba4LvdQ0Hwqq%2BRFai0udP%2FrS312qUAZBLdGMdAG%2BSDuA2VKRgIxSwgTsET8uBStsHjm1uclM6sVXvGQRd0M%2F0srZk%2Fq87VHkvon3IiJ0CPuSwW1YT%2FNlkDzSIN%2FBQf%2B53xaz0hTJ9U69QIAXEAokRj68aqGjumG0lF&X-Amz-Signature=75ba0900c78b4a25b9db033863c463c434012cff9d22b06b5acef6041cb07059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=c5fb330607eede82e8965e59337f79a8ada519763b0668cfce45187e9e29c0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=75ac36b5fd3bb9340777a2c5e5b6cabdbcc411007aaa5590b7600e3a17d29257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=4fa9f0fc178ffe4933b934899621d39f850a51f1759f05dce0209d309969a76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=e06ea805c8ca747a42958bee1776cf31e56a880b2b3e04a21638cbc3fc4f5e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=8b86d371260c2c602cc59b901b3fc93941b965c4732189f8ec55a0fc19c82b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOZWVR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE134JXXsC8w3PzDjEZPNyCLPAW8fWmCq7t1oEE94RAHAiAqE6g%2BXSX3ueENtbzZpKz3nW9P%2FFRJvA1mcNzT5l1%2BOSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvokFiaYdhte8HH%2BvKtwDMGLYq7b6qYk4yAgWGJRaf8GDTD6ut92Q7knBUKLxo6RGDVfpnvc8KdGrZjidgBsIwFBXQSmxQ%2BE8ayR7P8kTI33o9PJaT%2BdstFbsRI5V9IN%2F%2F9k3IzCWR%2FaXo4kxpQlJ68gpPwt6UqiYFt9zAqweBtFX0GTwrxJSERZRY8%2BlABqa6EII6qfiiIoDVqLgobfbxN9%2FkmyQ3YIY2wxjpQ3miyFWOCGv5abQD67BbhX7k39qIkA%2F1XyiY6cjZHMEvoQs1YgH1Af685j7pF5%2F5r0F%2F2kMX8Mpuber0LsDRqBkSffWbU4q81OwzGbBpVddM%2BqyEKnXvKyXCXQzcxaWjywhz2YB2tZvBX4dbM%2BY%2FuzV3utWOdjGM%2BQ92MQv6XEqNlHqbkB9cFfrT9r0YBFpsmAtKUUfQby3SiRRU%2Fs%2FWg7U8cQrxbSZSSvO0EFd0H1jMIWwTCT%2BeYA%2F0zakLoHjALgmeLSJN5eRCyc6ZcWu9%2BirOgXxAYPHWLlneU2zVUspjvGYDxYeVVLnRsKDpmefrThkmVtvW5aAblEXg6nVDIIgrZJopPF%2Bc2blAuzPB5wH7ziw0L8%2BM1i5pGwA3XRD7FDIsJBRvEQ%2B3jMPNHRNa3e038OH0xYybhe6fRpYxigwhp3lxAY6pgFY1qBqjENmCj0CiIM4HnKpKbJ1Stfk123BinmYAaG2VqTYkunafYgnoYi6ZZtRd6G0jpKRpEeYRLVXSY%2Fdhe6xU8qtG%2FfVspc7b0UAmaMbsxDPNlihuOriT2yxcVjoQ9p1qq4pmvLQzRS%2Bt%2FYqSaqkkKPC5NRLynX7CzDMaPENdT8JeBb2fVHsVgl0SxvbKvHw4FI202bcCLqoBAhxXxcG4oJxp9e9&X-Amz-Signature=99a6371a6fd244b02d6822be9910dd6cf50015056f98fd798266d2224396ca2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
