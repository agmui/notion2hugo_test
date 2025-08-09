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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=93860c9fcf713929682b1ffd402b837c11f9b15fad58491c6e8a8af4f0a3ec9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=9e02dd436a3d46d33ad5726dc2a5cca12cf4f27ff2cf8e35320ea4f87b20f689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=87cf4c2f047b8c80a5798dc98a61ed35b91bf78781a249cb46d3ca2795e501ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=83391fadc5e78f9b356ec474bf64aaf1768f04e9ae5e373c9ed53a576ee78b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGJD4ON%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxYS4VtGEWNZstLlNE0nxNq%2BmCxtjKpmY%2BFrTqm8RSgIhAO17BrcsUWTy%2F2WV%2BJDnNEXARTAnt4Od2Ympf2wPakhcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzohQqCR%2FLFho6Y7JYq3APPLhtNpTRhWBvzz3Xgu8VYlVmLAI%2B5zv7JlgDSHfkYTzG4ynPsZHNIebn1uZ9g7eX3XPT18vHQlPlw7apIbiLXED5fuP6sVyBkEwqTXuo797R%2Fl8ZO7Q1uHg%2Ff2MsYVov9EImvjUD8zlcJyUhCO912uf1LF%2BruJwgkB8X7uSXhbUKcbajn13m6ChaOvE6%2FfLre2sNAD0ND4OhwQ6kQWVxkmbB8xhgTV5bDgMvAwNR%2BvbJlXsl5Cgtw4pVohAW3CUrs40%2BjInb8xR%2BNMzTN7%2BartsjCWbELmL7NMwFCzdOdgQjrhgMBWfws0vxL2VX%2BP61Bm%2BthQgbOr2W00AyDGyHmwfOUveqws3CYkn%2B3N0Kwi28PSd75fBplykFoZ7lwPFQjSCKjroFg5ltEDbaS0KteBBfSdxikaHCidp6Qy9tAPvkS2GUEIEVfaACq6VIbZS%2Fe54aRKpTgUMNBfJ77CvR25L5FNDGM7SJxiU%2B%2F41jGXwJCJpx%2F68ogB7N0AYz%2BBH%2F%2FpiGitsofwvixg02UV7hkYZ2IdqLnjr2%2Fm1%2FxOzAGbMGd8FQCjUIrIha7azSkJdeW0iMQwtCbq1EDz5lTz%2F1Z5vk383IWVDA9wj2n6F%2BzMHrzp9CRqHKUpITH3zDI5dzEBjqkAcmrbW9nfCdocooPb212Jw1Y92YRThE0vNrMxX6E7HdNWDVYQaR2t5ZbRHWs2xgo0NlMVsvt4Gzm55%2B2XzVERNe3EDLwUEfhYiA4wrcNsz6773PM4UwoMxVbjth0ua42y2GS065Sc7nZSgsuw4151Oc03grL6n19uYallREqKcIpGaU4v3BRPT30EMPLmJrFH4eUnEvUiTl%2F43PAL7KsLoN2i37h&X-Amz-Signature=7c3361eb8853d9a774fb44e874c669aea7cc1444799810708a6bab875a1fd6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=c855969e98170798401b738277415f71f5fa9f97ab129d4e1e2b50f6a9146272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=0d182fed3b6f5d78630f8cd42d23dd351bcdbfc6906383b6149465b418bf0859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=bd854adc58925ae00049c3f63d52ab55607b4c3ffebcbc86009e8158febe726e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=baf1f535bc698dfd97c4bf45e0757ada64a83ce2b7beab7ec5abaa8743b500d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=f922410c82124cc783b5cead3792f25454542f917520281b8c25b802f6586b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ2WAKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGuFVdsCwLtJTn5QO6B77uAobjuRX82H6%2BQTPG%2FszbKAiAP6yemyNkBUcEM4yBCLI4AeYutnaJgQmDCFoSRYA%2B5zSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5Ps%2BjYQegApR0TEKtwDieH%2BcXKFFFjXXZXUQuY9mDOPCZL%2BUwaLs1LvDXKiVjg7PJk8v%2FsKkTrsH7WSooY9U%2BFAaRyRc2Z%2FAHidBsF0r7qjiRmY0bY2xQ8nyPV7g8UasoYabj1wuHvCV42R97F0olvXAQOBNkkcop8N7YceQJXAW7SM5mNRCDNjt8yVf7aDY4bgYZMgAQsSWsLmJYt29Faqh9xllx7tzMdR%2F6DX99xYNlfJRJrPII9wPRKzXsvE5qMhEbFirGXmlROYJPXSqC61yVxxkGgPl%2Fan3f9kJ5vWqJYgDriA3CmU29OvBNzkmQmdJiiltTyCE54eNqZ0ZtpVNckZImqOXbRIzDlrua16Jqwhnh06si2521O1WkrMBA2sED%2Bye8SaX2T8ANC0kQoQSeTVFBoeAKIcNrj%2FGXnVL0TlaPaOBbS5kGB7OUbHhEllRvgXJhFNM9Z5US5Qind9e4SQGzIOYlFob3yJLmjarqgGXsfLYaJtzgQx7fCtMnW47a5YgQayIuaGJg%2Fxw%2BfeElOGJrYNpwkxmk1z%2Bw8dBEja6LOx4WphO0AlXhdFImRfMqxGGigiepzFXXyMkmObLKEqK1NzZsj2sIojYZOQxiGtlCc8icEep1g1gQJxFDcumGPkiGOAbAkwh%2BrcxAY6pgGVYCbcpmRQx7Z8h0IJc4IZky%2BD9OnSq9Y5ckcF5zVr0tFqCaTEKFhNZUsMP9%2B1qjBaI3ALlccVOz0Mit4mFxU7SXuh4p5HlA5g%2F1ttmQqj4KuXer0HDQ8Q7fV%2FxEvNeVQ1Hc4cgh8yH%2FuWboY5wuxu9js9LGP49JqUBqyd5V%2BsNZ4uUCg30hW7bMJJOzb9lv2GWh1hdY1WKFfvgkXkhqBDswuNm%2BXZ&X-Amz-Signature=a3954db40aba799781469bc2615ceb4beb0728f5f5de16a1ad99f0a2eb00dc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
