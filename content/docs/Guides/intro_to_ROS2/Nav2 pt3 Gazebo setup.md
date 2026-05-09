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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=bf1651b3f657ea517f3a5bd54e3ac89596479abaf724243e4f722034fa3171e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=bc46deb46f9fab90c905d3c7b2f872306285618ff6b143029a0970b55058409d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=2e0c57f54683a1c0a8794e984899d6f51fc60e94413fe7c0775ea2727da76a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=72cb00246eb41961f6bb5650b8ef3d9bac84650d3586b9a6f5d2961f61de57a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXURAUMW%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIGPLFWpU3ULvE61rwfHv%2FNDYUyONzNe%2Fs9wM9QabuZTPAiBbmGilkmbNnKQ5RMWD1Fb%2B%2BKb5hybsACpSXb%2BUfWmM3SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXIXomHNpU4mXHOoNKtwDb9kPK%2BApdbTFaceXbVTlmWCRx3ULKWgwUx76sCkxzOqfGlhX%2FqH2IOzbIIOpTfy5BoRxpGtHvX9hAavOWzKLN3hZsCpkEizqOpIGisUtWWy5oeDTiKdKAPcT%2BkKuLYemb%2FzNu%2FnUDtjjHyPYCqisjaWZkt%2FdTdKGak1VlnVCdEQsD7WUHIlsLuvaveDsI44pMNc%2BCAnJLEZQ2jX9i8qXweKJf%2B%2BxIBTbvHzU3CAR1oqypplkZKaSKpI7E1uijA%2BbUCAGSbDNEP27Bu8Gq2La%2FWfgE4ugxQiAgw1QD8Fa%2Bt3EM7Fc9mZMnJejUUSGHCQ07peoiwCSs4wnwaS50Xx20d%2FmSF%2B431F1zdTs7FkcMz7tpflyqaJ9%2B1gXO7c%2BFx6gWCdTwQ5%2F3RJpGXbiQ1OBH72nYlBnTZawk3PAAqbcm%2F%2BjfYgVuPCkvnsfjFEmSa8joRUtX2unxa1nSq9VSoAPan0O7CCosuZo8UjqqymsfOu5EjsDk9%2BSZnj%2BzVPiclxQnydWxFHngHJLonmmjn9%2BB0cSsj29tqTd1FgcWv0FE%2F6KoCnU2JA7chZ4EqsYHR44J83f0TAWy3yvB0pggMdQVBT0OPjYATBDSC2%2F3O4uOvhS1UiPEsx5Yu8a0qwwj7P6zwY6pgFjEzkzYppmkLKvxd%2BQ075yfeXW8sOF0QT1tE496wcPG2eJTNJ9aJOHJBoTC7y%2FLwM1m7qtToSLBg%2FQyg6wEHeDUSEXSurKz0dhCcgqHrLF7XOL%2FatYkRVOxW0hx4%2F7ey5Jmx1sJPXeS7APWeawYtKkeDV3yuCeoN%2FMZ0mMRtEEkPxZVlEUl44ymME6OS1z6AfLD0Nc%2FJCcjS0nEMNH%2Bcmocw4oQfIY&X-Amz-Signature=c62164aad6cd5edb8f15215351f85951a48c2088e02f856b824957f4dfc3d84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=9dc9c1386423276c6c28e3dc0bc8150da802fd28d0e0ace6149a7a173bafdab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=312363429e163d93c7165037e58dcdbd45341edb4d48b5b7cd687c1497cc92fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=fd2f10e864b6ab464e11a812ff3ca2e88402bd796596e1a3a6b5be61510f97f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=dd33dc6c22b607cf9b3fac36a1c77344edbee4743c9f24f1b77cd1c18845cb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=27c15988f6f9834e318d99482bc6df3c8d5ca7e2e48ff002e03381373256b794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWGIL2E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC5rpj%2FREzM2CjVlKml7bSgIjwOA34bu0CfnEmyVo2RmgIgWZoe7KS44yumwcYDhqu1LxG6jvfwp11D%2FyMNircCiXcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEdRNzXuxEE%2BdpLdyrcA9xXhybfN%2B71zrhewPNs2FnewKvw5DP8IbdVXZ%2FJ%2FsIqVAutr3Sndjowa%2FUpmJgl6vSe146tabWNGmtCMGU2C8IZ0RP6xQq1IDMgnK2%2BYO0sDDJFz3lO4yi73Rb7Y1YI6bdNfWT%2BoAuXHZozFCNtYKCm6MdOgz8f6zaRP5yiyb4BLgzpQyWNTQ6K0KwPUsIRAq49wCChsEaVHX%2Fspv2WURBTHjBxRfjrGRFDSsCjKWQNYpsakrJ8v2gkJMZsIMtCgg7a%2FCRTWx9BTHphltxe1NzG4E85t%2B3dwJmPqOsftY2XHIICmAm5Oi4ZEmxcVGaXdcJFXUVNbBv%2BZz26h3jqgne0zwkUw9EHKG4ZU4AVf6rZhya%2BOoyJgjlwLXqa0%2Fy6a38qRTdXJyGgVf%2FdUMGVxr3Xyy0%2FdDZDn1bFVs9eHwV47AUZ4mdgw3envWOSPixjNdK%2F6owjPZwl5iuJz9MvM8KUhWy6fVf8w3rYwv5PVBnXzT%2BLjUXQm74LbDFuGJcFKgxwtg2UkZApLieUOKQmRnu4Z%2BomWgoJesXoaZEYqrpFEKU%2BDfqxbM8LZ9vH6e3kkz79Beq7kt0%2BfHhCDtuyT9Ygr2iiyozh%2FxuH4NounyFxUcbQZF8FB34ujx43MPWy%2Bs8GOqUBIHEIt13M1KktKwCeqKs8qG4JWoVjKO%2FqqGMKrUkafpQtlyJtgK%2F2X8ukAr8NUKl3mMvWtPGuWAgghWo0%2FVyuwhc86GdD%2Bdq9wQWv8K%2B2VDhBeQT%2FqCegcVAc7ZYaD91m73sqhCUS2FB4Nb%2FAI8ygiCohfJm%2Bhu0QJhOtlwDoXS8jYWZMbxZ6Wcm20cTVM2ha2JiwdA8ePNZElORL5MQr6q3EOd5m&X-Amz-Signature=f7324b2534863a74f6a41548ace31ac0d067214180ebaa293fca404a8de47255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


