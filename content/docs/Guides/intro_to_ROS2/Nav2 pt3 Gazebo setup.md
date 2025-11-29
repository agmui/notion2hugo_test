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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=c153eda20f7b37360c05ebcf871f230f7bf19b86c31c9dc9e86f68bd39fa0cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=90c9275f7ebd5396b3aa80107e2f11db135576a7c0c3bc904abc7d7ae31e122e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=782797440a681b4f0e3318a8428395309a49e5c9e999440155da04fc549e9b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=cae4e50e885d4fcba19e583c3c74ec66f7ad77d7dc9d90286b65a4e93e1558fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXWAD2I%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEDFEZXf5hNwxpphq6aNPy%2FGX645YdK7sDaVD293Vm3AiAVixxLfWQkGnH2AC%2FrLOovsR7QwqkgO9QKJm7BE3xgISqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKrfQTthE%2FfyU%2BaAkKtwD2mRle5seRfnFok9p8U51B5a2ryliyAMqpSSS2z26yWoZLW9hEzmkOhQ4OYCOfmK%2Fa8j%2FdoFWq%2FrlXGecSWLvZJBiHywMEyjMjAzYVCitCZeYazSBh2pGmsRGspW2iRojo1n3Is381LLmYY7Q%2BvdqxjE%2BnJtS4eJOnknwoYnobhMIjOtPrDhskpVhY3cIfkAODcyYBvXlM9eMNraGli4iWTQgIVsp3ZKFuJ0guLzqiau8SwDoI4IMIO2drBVVxNkrbkjb%2BEV3jJIEsbU3BghDIRZC7viaYuiblJRpfaGU21RyGcMn3RrlExHG4A8scLUn85Q0lLugZafC4u4BBAWOLpv8oKG4ezX%2BroHZcCd0oc346uoTFQ8aOji403h7J1KOfQ7zs57iFDMn36Jb%2F5WG%2BktJldbNdg0AsWXOjOq%2Bjww7XX%2BDof%2FMsLyNa%2FbXu%2BFdIbkAhy6KhkwtsYr%2BhvoOIfL0Y8hC1QXZ2DIkt4u9Xny3u6SdL6prYYZXiybpNiUAaiKmrWzP4J5M0sTg07WkaXmr1aZm83P3lU3U6GCXktP34f3bBY%2F%2BEr1ixqxZiU4TvKLBMzVrk9fIwkoBh6uEbpxObgN3N3uVAi3zbr8ifZXz%2FECh%2FvVyuer0ANEw1JKpyQY6pgFwyCIE0tKYG%2FUSiqESZyCYWBt3MlrPrM7d4EA9bV0Q%2FJwuYD8hcz4hqwlXUl9FHYgt7dk4bp2hOuIgs5BblVr268EaCogr0uwVkOcV%2BnGJar3IJFfqbPBupeOUycXdtEgvjgEwEEkOk7IGDW9ceu7MGfcwEJ2d%2FpAwArPFn0Cm7g0cufCrAhTRAEMeOHhwo9zA3z6KDoNEOfIcxSNWXPlMyHU%2FqrCv&X-Amz-Signature=39301643b45dea851cd7d385008e7b4667f5fd1f9b5dfe2236609e8137d2e49a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=464b263490b915ba600bf189b32bebbb9ef10511d756c6e8dad4bbdbdb8f2843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=9c92079da4e716db662f1ad8b0948d30c134b4444aa817be8367001568c493eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=5fc767d77c4137905366e2994af990ec066512a94832d01eb8e497adb464a6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=39656fcac66deb8c3e43a0b5e52536b5d7cedfef1099336acbefa8a3c9c8c53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=3fe6c240219d827eb7c489ddeed5d0916386a22e1272d9dbcaa9ed337b428044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPVS4CT%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm0TzPhxfeBbLT7hyA36nqkBogk6K5SiahpA21uT7IxAiEA1bBgD3J6xLVZGNFnkhkw0gK6sUDso8S0Om7AYd0Ln%2BsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMio0WyY2UChOWIQ0ircA54TpX1yPgF5gKMjsZoarSnSNWGd%2FivWg6P%2BOUActEkvs1VVA%2FZVA9MJzbzBxQGfXGAIkS45LfQjssHIzOEntt6%2F2Zmg4tJH3aP5peOgu2htLONGQNJ8r1Q8IsfMltXRBa4HA8cUimewRSlArWREo5fnUD0l%2F%2F7cd0%2Bnkz82SzkBHKV0nRzPRT3gqlE7fYb42%2FSBZMsiqc3%2FniSAoabV837iZBGyhCm05K2Dn2KsKYg%2FUvKv5ziqygT33msCMtQZ6iF0A0jK8nR3UQGYbQcmu5zDIi%2BvnFWyDZ2vfPRX5w3h2%2FCFm0x5cL%2BnQsULK1LOBAQfPKYumhq7FEocsgbDos%2FLrd%2F74ti6oAYthxQzJvk6z5a4Qrlrl8bRG41GoArLndox3oY6pp3G3xDL0xmLHPB8NBre2mBko6I8PkJ%2B7lfNDxn%2F7pj6kEreZoTqDN1kcl1qHgFTu71oUwYywPfPsVXThVIqqOXOyjkS0eKpl50VBFegWHHUSUup2Q1zgvx199CBJh5h3lAqm5bfk20A5Piyot35%2F7BhnPjlUz3F%2Foxd%2BcKRiCG2YeNuAFx4tu6sRjgsH%2FHIK%2FMw6k9hPBtqaCTEHzCLYAl4aJKx4W9%2Fi%2F8cN1xOYncy8FtTzoMSMJ6SqckGOqUBAr60QilXfkF8QfKJUOXYbKVvnp7KNZ09paw9Z1Jw0hT%2BIEfm4N3Esr6i%2ByBWgcRNSlLwX2rZPdn58UYEXx1KML8h5wJM3f%2BaPdY2FHFh9DIfWsnR2NnqxPyqgZ52IZRBi%2Fh7vBtDxTv86HQJ6zcwOSwOpWJ2ffSVxDkNxPF5cEEX%2Fni3PbnHAy02Or2bHG%2BcRyabXtcTn2jq5i8W%2B1Tk9gXIp0h%2B&X-Amz-Signature=35f6f4f6fcf1cdc5807a5acb769a4699f04686caa52151af28846fa491ab1151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


