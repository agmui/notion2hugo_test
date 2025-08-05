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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=ac5e796d99fec6b5957dfb5ac9118a2703446f2ebcd72783df89f08b5e1c90bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=36ce4d76a9f76d8f9ebefd67b05c590eaff561ba9405720d0fa36b9fa7515958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=dca538e72fdffa6e0b67056d5fe088cfa0610e4ea03241c44ffb3afd47bdae4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=8c6fabfd0038fcb8bafb29b0eb1b5e2bbe7cb38d2030badd741cbc53eff727ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSCIFIA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBUmCthmOKKohnN%2Bn6%2BqBLTELasERA1lvHtgC2wZjcnrAiEAwr6oyWBJJjo4z0zpQ3vzDsv1OpWarZg7WOAsymmQJbMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFhBXtHWJ3FG0heh1ircA1EcqbUIH8pGDkotg03HUUJkYt20qHln0eWh4rYCWFf2SbauViC9l7y74KP%2BeObMfbsymepEya6ae3UllCW%2FP4Td9sNyusYMLlyQ3b5hFGR1Y7R5SVQUuf1gPVh7YJVgs9hUKv6ba5X%2BwqSAMBERa8YE9U%2FTDHRMR3vWjIhsvYzog06evX6o2PlmCpKcz1pSYeQ15dcmMbiwJ2as7X7IrxtySjWaS7jq2LBlOjSkftWy620ifR26vbG9rckYpGbURX5R6ar2zOS2EGR8tXITN825nxZ2bfEcYI1CDnnpWxGDhAjKrM3IG5WKF0R4tsR%2BQO2Q97%2BWR5%2F4omT2xG%2Bu52mU5n08F9NE4%2Bc3FEv9XTNt7GrcOUzJzQPfayUB4Or6YO7jMs5aFCBPQQfDkq%2BL1MQ2M2U%2BApRQVb1CNpxTbrVVOH6qdv0KT%2FLtkAMxdgEHysc8FbmDRFAx0Zzb0rcHFSG21c5wO22XdzHFq38fKTtXRjfloZMAvHU8XYvSt3Cnwr7sRvMlpmpBomExqBNBxNBQTt%2FcM2wqxa6wL96DwY2e9oKryPZjIHOLjZ1RmyVKkW%2FHJrus%2FaTdU%2BHhWZTG66z1KCHIK9r5JUQ5qN%2BstImPE%2BiaJ2JITE8XSafuMKGDyMQGOqUBGJpU3L4KN%2FvZwo3Yq4I85SsBxVwRvg0yexr0ohIpyiYcayp%2F4izQecFGoCXXRrv49T0SO9Upx0Nd728CCMfKO%2F9vQmJO0oYlGzJ938n8Q%2BnOtRncYcwBeCi%2FmS1DXphBwnas35j49RBewwJelfNt7%2BVAF3yYvmvHUUnUigwIbpPAiOKdI1XYWx6eJdDhc5gBgb%2BcZigy9M0%2FU9823yL%2FUEIUNJQa&X-Amz-Signature=28e3fb779a160d153d44f7982455e0d462d071cba6a97b53ffb0e0ac3a1b193b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=9bf612e5f8248f1052a0795c8610fc0c4430dd6aba96be90cdd06af5e663cbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=99092837777a454341653ee37753385b357dc813abf463fa3fa4e0feabbe5835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=2b61c8fcb010b2e03dcc42d8d3623de0dcc4227c1f88b37fde475b74c735813a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=e4f2d70e9e6c98aa8bcb8a378c2e2435358244845d5a2a692f30285c6ef9c257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=49ae392a18f6493fe7bf7a02e8fc24093c9124c4cc731db4037e117f005d89ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3O3PSN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGlwlQedpTsWi0PO4d%2FXPyXCM8QBxpR313wulpF2TpRyAiB%2FpXOIAoJT1Yrl13XjyXaxIG7bdOih1pa8LCvW%2BPVTQyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMCvdFm0PniyLsEtRaKtwD3YAI6%2B55dI3VmKte25gsqIwwc5A5LjDIYqg7TE6UAmlGzumfXw0fG%2BeGuRYW4%2FlL4OqAkwCoeRfl4IfVUSGQRal4w83vp94phgd9mfcc36O3pDubyEAVsiNJ%2FGPcmv77UhMQPGx9CvSTpbfF4nvN50Hd8eZauiNBAmLWu5OQnYNeGz05SPpIMO%2Bvq%2BXlrafWET9PABS1RQK22SsaTjRMicpasfkFVEUWwcpm99EX9iMnmKsmL7RoPyslFQcW2UND31QuARzjozxYQQC7C2b%2Fu0q4F6g8BQuxGcUMI8k67fkGwYbDZABfEEl9cstcSihGW%2F%2FGh7ZLAgHFMT3jsYjaNfce0sI4OB2XcjPpza7pjXoZPpeDptUgHzO6AEv7i6BEnsmqkzqdaeDg3xnCjGAvbOXph1vZk6adEyC%2BqZQ5Sy49VpSFbHGj0sB4QSD0vBLa5RThKI8Ci5FMlumCNJ8yAOLsc1qlM%2BcQP2f7rWZTXwWwuh9X8BtTH2MWycPVmG5qI3%2FjpkNbBbrbEvi5alT6hfRMAtYYXFrRuA93LzPYr5JhGgsikWGedR6d4l%2F6YQ%2BS4E6rojg%2FoKfBv6hVgRERSdQ3elSYsnwTOeV48qx2BaT6jyiyf89qjIQ9kMgw%2BYPIxAY6pgE5HQwWHqaF1pyB5L%2F3bo97V5jl8g2h2ACGcn6T6kWNTZmAopwvLg3QE5mdxBFd8b20a0TLQwsF68qKxD%2BdJgrJ9LxtqVJOXz0Lo9EVSwAxZkelxmIdfkss79EDo88GvqF8P5wvp5l2fIOL0rJbtKsCUew%2BeKF5MYtz2y7%2B6O8Wl%2FhYMMvKOi%2Bet33hQxmzJMojMWNY7dFO0C2X6kSDWptUfT%2FF7Yx6&X-Amz-Signature=43e1216bc398e3150f3c902413bd9f08dbcbc4d65c6e132feeb1d9fb2107e118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
