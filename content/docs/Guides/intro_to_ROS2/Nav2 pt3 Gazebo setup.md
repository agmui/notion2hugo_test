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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=23ee3c092f0d27ac134a5e1b05c1ca97094ad2a8dd05eaebfb29e71fc2879c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=ff50fb54497b2b291a2f5dd3262ec82e87c9e4b005d9a739e316b3a6cb82d3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=51456b36a71b91f3dd0323108afe30b4db85915d8cf134de99df623168c251d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=f64214461c124932abf9d88a7046f7d7e80e6b46d24741123be89cfaa9757901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3ZUD65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDBoppiaKb7FWVLZetTKaYM%2FrxSeHCgnymq58obf1V3oQIgaW1kE1R7tzd%2FHOB21RVPOt%2FbKiS%2F9hIlISY17WZCEoYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIszsCKos5weUJa7uSrcA1jUWf1WqiqTdmFBgFXpvzhBGAhryS%2F6QAM8%2FFefzFUJe1BkSAtoxpR%2FijYiahK%2FdQN5dpACI%2B4qw60wt6iRcDm9oAVlNTHesYh%2FsYe8x7WS%2BckkJbIlI1XRDGj4i%2FmzmaEsN%2BfBr0Dza9MEQoACZoKTjDoHd%2B1p5hu6QlIIJrF5EvJceo34PI%2F8KDVMR4v2xxA63FzpOLcQ3o3ioMzhaoJ%2BCa6c9a2C7VGfXHezuh0MkEHkCOgs5mf4d8MGFoObgqP%2B5JhBPYOTs4eujUd3BJDIWkElya1iuFYZ%2FcmTzYD6ALiEJalo%2BalVjmtrJLvZ0lYaj%2BagU6orKWTKTeQJqzYBkpTZvn%2F%2F5rxmQbW6Nm%2B0AJB3UMWLzWvSpvepINkGaBDOAZNhqFo69xVBS42xajjqGee3uYW79sx9plkt1nAsKgw%2F89SC%2FZujudSk1Usys1mLxJ793HwcWgJoPTOz86O0CdJnlC9J3P%2BER5tVFhElvHEuqkssokRVLqyb3n72WeZLGKlZg5QyvYuCUeny7Xc%2BGD11%2FtKaoLmqap9JmQV5%2B0t3jckj%2BkN6gjrJpe2JpUM4vCqSARfJaJTF%2F%2BQTW1aAFR7n14Vq4lWXxIdMdk3cYHqDnTaRkKg1IeiVMJOnwsQGOqUBJzlSfBSX2YDRwWOrVJoeyksTED98YBL2tLddIBtBDl0VsjiccGAtLQ8yRbqtixYX7%2F7G1P3d8BnUESXPAf7x%2FxZRgIrYTBY%2BWVW0eOE4Wwrrx0t7PrEcMFCeKu1QoZBvIkinwGbm01oOycsxTVVzIdg%2BnBqot%2BF%2FqEPYs4ZSdY%2Fytd5ChzJiRAmqdiBe%2BXDGKvgP82PcZUQRA1qchbhbiNeD449Y&X-Amz-Signature=609753d87f765fae0d535083ce66d93ef541a5f147444e23bbe935053837e47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=3e92ae25b3498b3c36005bcc5026c1e7d4c187b491922d5d0da795471f43a39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=5b15d2a74703f6cf22669aa54ea6493add264fc1ec85efdc7951faafbfda2609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=087b8ef405ff0161ee793cd1a14dbfda8d17a2673713bd333a6447ddfe41c724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=fa129785784dbbef03dfbf4c48397bd612b6652981c90fb72f742aa08bb829c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=751b6a9c7f6d0f90e853a2ccba93e33126b14de3902c13f484729460dec9316d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537UNN5B%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzQRJL3PqJQHH7aJX5iglA0ohLdn7f79f18XJJyosxxAIhANnn9thMVcp8UlZS8eE8%2B9qE5ciLUjFE9iv7lf2LOEZ9Kv8DCEQQABoMNjM3NDIzMTgzODA1IgznfDk3vx5MBMQvm9Uq3AOw9Y70npGdpWdFmM3AbJ6z2v0KEJ7h%2F3IM7bPChqDXqx%2FN2YV5fbaEMRaJbmGTzHXI2H06wSvSpQHhp%2F5Zyqfjcwk518i5DkE%2FJMDup0CZ8YuIuQhofrbVU86y5Fc2qKmqApSQ9vNOjIXCsglIeokDyaevCQtchLc1VTtUwpG8ce%2FOsyS1ikjIIebW%2FD9eIOQSygTRTYI4r3CBmNYAndawt6Fs486aW8JKJAWn0t1cDUQhvu8EqQm4Zwa3Us5Gwioqe78zhf%2BHvNL4amNTQAy8LArW0Z%2FNQ75BxPPnQQuV6ebgBbkvJHNLMJklp5kam68nWYWesJXz%2F5R9G1AcEfkK7TGMp1%2BNE%2FurckABOnyOQ%2FyU5rxqADnlUWbXKiz3QUP5Su5tlgwal7fJqiwzUKW7mE5LgKSI4DbzOCkVuAHkYzwig4g71XrWjc4yYhBKtDuLa8HdL9Vfjh54zprcGku4I9M594bL7UKktHdNfHWSk0EmhweVz8RRfswCt0IaqA0pnF17ztEHC9j4zIozcehCweY21elhmdslL7VFlK%2B9jSc%2F9JL5PhzsDyCZWb4JZkU0RznbUszuk3dHW1oRZQMcADMZz8rnypmZJo8Pe6FSsUgu0I%2FRhfKeaMv3wDDopsLEBjqkASnE9URZUockZGyBhl3VkscTrz3HmEQ%2BixwKIHyYizoaZVc6yGAKWD00GWsCXv5SINm5pMGhAvbSTpjbED52UwQvjGRiwzr8Bp%2BH2utXDqRrgeHZXkbgDu2NUu56c2UKU0A%2BQRATT8VhqJ64yjCqlQAxOQCcJEFNKhDe6D6otrfZQCcEKP2mHkDgAdJso7R5Vkej6O2Q%2BrbISYpo70NQKmLKQUQN&X-Amz-Signature=2ed945fb07391659f61584de73b2fc2f3e6c7c10e9b5b3cc87864711e29a8ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
