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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=65d1b3058f6a5b910cfa4ccac7888c4a198c29c98ffa9d2c78c1e548cf7f3d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=dfe4d1a6f631283ad8c5bf7ef0923a71c62b9020a5ec9c30a8224975b94bbf89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=fa2bbfa555a5bbbb91e8532dfe1a2c3a0a479ea970cb7395953ddd2dcf1a9e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=fcfcbae055549865ba2f1db2d4f1d4d3379c91377ba47b96eb9f758cab495983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X47WNV4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZvit6gfr4CFcJMiJci5iqwFMMhgFdn87ma7ZAuhYiIAiBvl4vn4eHriOTOgbWARRwlBd8Uu8ZAWgOKVwfv3fd1hyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMzX1KJXZsPQhZ2ipnKtwDNiYMqXa5G85AH29tQ%2FAtmbJLOeAixhT5mQ0wPHGlFM0viFdD%2BRPFztsgM15K%2FajoIaOkfIe9CRBayC%2BpKqt7dk3yPpzgDfJjU1KXbsw8O47BOzRv0mtu4rxPuJFfN7HJ1thlxfy%2Fq8ehfGBrtQc%2BY0kXRfVBHEAkk6Vdk5kltCmTNGKuq3QoP6kI6fTaDPNAqUnyyaK3vtq0VsKpFFdOWopSYzuVGDUfd40HygxNPeDFg0LJEChI51MvfOyL0hJBS%2FH9MScb62xJGCHWU35z6CoNKQ5ix3s24SwNPHVkmBlB8WyDexW%2FUBACC5SHOSpTi5Fd3EBh5KsrOiZgk0sjn5jl%2BZphEzRFqQXQQiAT3rlkPSvFqBYn06Y4GEa%2FNoUoo%2FZdJKFSHAvUaNFb7zB1MeCO%2BM%2FJtuJLyRb%2Fz7x4Hu00j1ltAsrepU5dUR4hzVtb4TXp4QIya4mUYLJXuDLmrV%2BK1CTqsRCiccMcAN3D0CgNir6GgmT0XaJLnyQBz%2Frrk1AAKdwcwEjIBEGX2lB3%2BQgFDWxi%2FdPB3OcLbJt6dTy%2F29O28bW%2Bxux6yQVPxDjLc%2BO%2FbkFnN9CiZ951KzN28lexUl7jS92JzfrUUmrxm42xLQ0KzKKdEyzYZbYw9Nm%2BxAY6pgHJyCfPKmR81yHYHqs7XrPFKpLxvWc3wrrzx9%2BvFKhtSpEkgItZIAhMBgqKTRoPj%2FUM3nOqQaelw6hntfjw2WR9ZGCc8kLurJqNzxCpoVYdEEXriq54r6bq%2FtYIxvYrxdFuFv5rR7zItRapygJrpvYBGn7N6OYjO21Asd0tPeDLKokFzGsA7P%2B4IqAYUz%2B1LO%2FpdoDJjBltokIejPFtuoAAbOwsl%2B%2FG&X-Amz-Signature=bfe9c8e20dac29f0114ef00a986e0d1f453f68c11fe951067e172a31534019ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=07165ee7bcee1d9929b559610b3f943cff2424e62f382b827e6d9f04d4a2e9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=9891cb321c66f2611deaff1ea54ccaf764ef876ca93050da79b03e68eb4162c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=80deb928553e6b5495d21b75899c73287a2b8c917ea177e63392df794e884d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=29487a757ecbef80f5ddb23f45b70f85a95b6bc11c94fe50f1d65aaac2cfb6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=19479e5b58f61922d47f4fb495aa2a26303f44c3ba8421c263a1d0db0adb6c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAVXM2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUvIpo4hdarUhbnSHcaQ4ltCgTKvi24OWeXbDT3yho8AiEA0wsdMvm7CjCbbnIY8CRo9Tg6sqPdqy97G9%2F7xoBDCRoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMmmBaFxLm5npv1mZCrcA%2FSX6zTop9Nqb4qnQ8r8TwKaJxuDz%2Be7PWWQhba2Y%2FLsThdjgk%2Bsn%2F13vB5pCsYSgRx%2FMtoiZrcReKvc7DEQEG%2FYZXFexbDKoC93hLGJ0FkhX%2FbBwvMywTe%2FMPHN9ygxT8RDlMmeGAZbERTuyBVDYS9I4SW8KW92cBOKQ11DEa5UCcDq5ILFe0ur7f4u7N7lA5Ty%2FmhHD23Q4PJiFAjD2ShL8B1Fr38QJRnDhqwwMWZJDVAzkb3gnrepLujM4XIa5UeP%2Fd%2FBNZmw0z%2FMUM%2FV6w7K0qGDb6%2B%2FIrWOM8gp3JkCwfqvq%2B%2Bk8mlo8atM24NVKXxYo39MYBE0CfP1ewkuWB4TJdKXUHgOlT3dJR80IJHVrNJjC7V66jaLe7rj6ENAUKjUsgCS%2FvE%2FLcOfldlfZtg7jQVyMN5GcMSyhXEobPJLorlclG3iAT6xyBGhnttNJ6UmFos5ENfFP%2FKTUEnUqc0lg5OtgfpZcNpZQ4NXugMAsqP6W4WoI%2BJ0v5nMohtU6JRwd83Y8rceVFWaZOzVjIj5zcmUveqkPmgTG85O%2BhatqlnHF56VErd3CcWN3D9vrdBqbis%2FjAQo3y5INOGOQ1l%2Fw5755P0V3M%2FDNvG3tVeg%2BcGKfPgVEhpOX%2FV2MJjZvsQGOqUBQKGStqtj2hVmovHUoqCSh9IhJNUgi%2Bs8zH%2BrXB12MAXmuNJheUXY5CooN6snPyUsrx8zaV%2FcJGq9bDtwAA2mkbIvRVxG6dgp6NzzADkPD2NnB6E6ZBTwEbmxSRAZe8GuM8jT0SeJ4h7gDvD7Xl4yW6WMw96lffdImph2uQZh%2BiPhWu%2FThHlx%2BCG%2Fsx6UjtemhiC3GYMEpg%2FP12pMEdms69qM98L8&X-Amz-Signature=a1a990dab144331fad4af1d476b74a37834754adc3905ac0f59a9c28e84bc6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
