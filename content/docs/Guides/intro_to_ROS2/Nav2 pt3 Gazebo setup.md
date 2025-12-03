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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=739c10e2f7c8ec4808b1ed5ee8140458775e1d2cc825d42fa76d750cec8dd74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=628f7081b030d01a93bc121fd159e29aec6bfd19fb29c4d52ff26f4eeb07a699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=0331da00a1aed5311efbed3446ce64351797485e35edbe286b74797877a3a70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=214e4e40d35e5d86e42abd59879ecadcaa9243de5dbbadf69103263bf3ad79f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOKZEGE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCvC7Kq3fLRRvcNrI%2F0k2BeYWH2z6vavyV85jfWGwimkwIgUwaGDTi3p%2BUYoYm9TijYpuVTAZtiJuwk9APr5F3Sxrsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDINQTlUm5SnE%2Fi2OSSrcAx%2FW1vEjQfjK8yjfc9kXFqo%2FNXOPbPMEdWvfo%2BVPXXLkTg9jQZ2XVRirJ0ZLMu4AR19jKT7O2AS1dD57QS3xAY2ZYW6WSW0leKLe3VY%2FjiA%2Bx0DgeCqVud%2BppWEpYVOw2p2PKBg4M0eZluJ3gZSpAlmasRFgutTmyFI2U2r%2Fev6tHXvhKYTAeHdIUngXz7O0RbHnLJgum3PiCywrBPPI9w5Abi750gCaqDy2tIMGBNir2NOoGdoFomd%2Bg9lCqA3fiA%2By3yC9Blh%2FnBAfesZFyhaWBj26NKSmeWgQJhZiTeQDcDPkjClAiR8PJycmppWttKAjWjBPkAqnlXoixWBfBW5YFMxwLR9J6oxgrF5hAldRNid5o%2BuirWDEZX1xjtZG5WP%2BvCC%2BjTmxgeJAygwsFzoPNh%2FI5gHFEqwuYZHYlEjF3vHLjch%2F1NFpNqS2LUDgXGieMYyy1IhAVs0zgWGwxTZnuphFmRGvc1aYS9X1T4n67GPY3IHpVD4TJGrWj4Tdzi6bTtzBexmPRYMG1H%2FG6S0z7budy%2FGLCI8M5j04E484xNu1w1LFMaI2MKISfPepD9xwehGHJnbKcA4wFz2FuxS5BDzxnHIDgR5XyLEnae1SzwqMBXaU3aXy%2FjqiMKehvskGOqUBg91WKkyI%2BHYoJjD%2FBscooPKzRO8RszAw2ZRw9ljNv8Dqg4Bfqi9nLA5aYXO3iSRdQQSKTqR3go487oWZvuAGtM5kM%2B6w36OAxv5B2v1v2jDECho21mCXUCjIKd4%2BJE2P5lSlFOZIdiU3xyOwAyVh9%2F%2FoxM%2BVIsjfu%2F5%2B%2FiQdkGQ6lFnZ5I0QjEaxZC9BFPuQctJh6DXvjidVn2nfV0KOqJaXFFl3&X-Amz-Signature=42851953bf1b9815d4829a2301c67900c1bbc1c6c65f93a7a3e57ec9faca51b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=730c277c8d3898e61151ad79479ad554846d90da2554018538a65659e6ec48f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=9146cb4a9c9122b98307fc75ef77600e850f9db6d4efb5cc130675c322986b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=2e13184b3f6da0f5aeb41d1aad8d834af3ff4f62d7b9d24fd88ec460305b37d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=94bc68ba18e3f264488b9e71b34742ba1193c0073bfc79dfe1328d6133031ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=a473e650aed5f7cc5203d7f6f1883b4a5b1b667365c6121c8b7e3f036d0bc985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVP5ZYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxXqKSXJHWLzqe6DcGUg%2BpchNwBvBVkxJvN0%2BqQWnauAIgFfs%2F7o5CSwN6GWX2W0FUjKmUBiTwPEZoxUtRKRG1LPsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDM0HgQX6Ormh5HZLwSrcA4butL5RqOZ14E2dbhfjtiMdIwpCWt12olM6a5546UDSa%2Bhrfac%2FO0LOdnVr%2B%2BOOpR6H1cxddLTSidBVs8T1FJYxRMN%2Fw5IOBF7rqU3itMFlT0BbGKkTmRY28VZ2d4lkYNbIjJeWGN674oX9WgaXWOwhlIY0hE9hDhMCYbDXgjbcZEhChhFuAcUKovKKuKIvEIhs60pi9WPBrS2jKW2efuW9FFdvxVhtW7FFQuVIkyS6NPcRuRCausTVIqkbxVyeK%2BXHeUsCGHZj9EwBAAYIDCzTbYTUrKDZznvkjmf2oC9sax%2ByijeUTyzbgTV0eIr93uDD2x%2BgeGRxELeIGcCNZA%2Bo6HyIZ%2BIVdhStevcLRwL2Gy6385TVUVsySiLeL22NPzI%2FCWY9FpVhz8QqGGfsBiknCwwzm95zz3uqxSpMbBCKHuEoeca0tTuNYT5Lgtv8nRwOmJPjxyG4iblhBFNqDLSmd9mvAXOYHx9sDXci4Ju%2FDlOEbrw4LlOtkHtHttyMsBB49vgKgIgiXh11h9k9Te%2B3hPfFe2mnOXblwTNxTmb4SVvNXXG70dNgXPGKmBoslxB9ua1YGizo2wFAhHDbONBsXavFTiOoOjmitJ1TWTK6p6pAOeinn2zPdB44MKCWvskGOqUBD9VfHBk3HwMezFdF5cx7wf5iu6oChyeR%2BMdf95cZWyzj5i8v%2FGCzZGpb3zWXmqTlc6qBKbjouDMMaZ%2B8GMoJXoqKgaHbvcoSsPySsdwTX2YGqFyxNW97ow2mXYDu%2F5xBXQ8wm2C0IPldxaVZMMTJaLdflUnH4HkgRHmP7zTFfREM%2BcQaqBcfdsJUAShCxqMKqjQlFQd1aI9T%2BLVwGAFEZP4DS66x&X-Amz-Signature=4f1f1075dfca9fd433414cf0c294e244df56d9e3bd55ce3d6477a22ac086875d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


