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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=d873263eec6d001f51c18e2849f22a2968a1c119ccaa8f068876941690e9a8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=c4b9074ec5a712f4eacc62d8c42e1435593bb967490594de454befa73ebcbe56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=8103a12b3c3f275b8863caef30d38e5afca8639852d95db55ca416d2b62abc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=921c85bb1a602cc8f1bed7a2e79de488961ed9937f3422ce9f1343f15191d524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWGXVWY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDBOt9jV8hIdTtFiwZSGYAQEhed9n2U57Xup12DkSaJyAIhANTj%2FhlIXludsZrxnP6zFK02%2BQNWeeMtQu9RPypROvh%2BKv8DCHEQABoMNjM3NDIzMTgzODA1Igy%2B5q2lTPPYKkj5gNgq3ANThewFUJl5JYQdR%2F8CkbwP1LxJr%2Bm8OIlLTY5Wm9ekyiEK5EMiv%2Bq9MpqcuT5eqGDoTKg8veJI3fDeLdkRbCkkzI6kJL9dc00wKJNcK9wTWKghYS%2BO53rFC9yFPwzSPHMJJAZkRSmEpWaeA334C1ci4E3BSmbyPHtejdwIkNBo6WaMmFa0pHL2qHhk3uB2LhAhcWOcS%2BkGprSGzPWz5lUfrjPKW84C46SImXRiVlcf1vREDeK7LQFKJKlja4CjVgo%2FRY%2BpYc2Zxy%2B5xAkrXSX4Q5ZMLB9BwA%2BosLJWJl2ZHa5k%2BmufOxeQZM570yEj7qR66yQa8UsYg%2FLfp53g92K%2FjGRxfhUhidX%2FXEdSVyTt1SLOmTOr7ElbPJJW89QriSDBL3xAm3adz6XtIIL8lfr%2Bg6vDMomzPAtp29xIbyWkrRlJYG9DL2DUmBFz%2Bchs8XmR7ps639az25PCOzIB%2Fpk872zKtd7wT5WYRQbenaVjlD8sNayUZmaKDwABiJI4%2Fob830Xghl7jxyCzLjLarKb2Nnp7aHV1x3zHts9sHp73puR0Y%2FoRdFiQrejc2R9OUhSTUX2xpw10sDrXlwJFfeBIkH1PxxzQrCsp92PyrJoxKNK9tEb9LPwSBJyIAzDE94DFBjqkAXA0Nwn4rAQPM3IwvnFfe3PlEYnrolRd%2Fp0y9Aai6eX42q51oXiGrF57wW2bdmL%2B023J938RumWTUZdQQF1PDB33k5Li9L3awPYjBixlObxCVT6aWKryvrJY1AYyh6%2FsRqhd57Kz5a4GzVwmaUHYBg6wV0YWCX%2FGfZm%2FwliKl4PntF5a3kDrkane3KdVln1tXAHd6gq2iwWIucdjBwbOD6JVkmcY&X-Amz-Signature=4655347da57200134acd84f97979ca3d874525b6f523f78fb63e4b0efcb2a066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=61b84e26a85229cdfe1f52740d98afbcf1d1047154c91624751ca8285ee785f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=4c73efe05ea055411f767b8e786043b918acc96566e50d4b1dee3df809a55b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=af4cab811795ac243e158b2dd0edd76500fc55c11d95a46e7106e2167dd5f796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=b8d9c7967031e76a2e060de4149640827e3796f465e47466ffdd9aa0f5051f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=e7cec2c82f9e495f55eba4b48fe7a461eda212aeebb6d32f317c15fb31210aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QICI6RTD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDf0G3kusFgCjnR0vEAYIUqUhAmu3bBgxRENr411q1VaAIgJww%2B6JgyzfasCxbAMBdxbxPowK4akpxBEp9GjzcHtDsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJ%2BH2waXR5dS9T6F4yrcA8nF2nqED5%2FOpWahDxV%2BDr%2BNE4F13HVRIgJtTQfsJUB1%2F4qKeXxPqOUL28%2BTvl%2BtuNYKHkGFT3Cfqi%2BDieaFi8goB%2B%2BIbI2rgT1oOLTvrSN6gQIhiQVXStq%2Fy%2BlkdRviY8M4qVVjaJS1QvEUZZCEpDnPbe5GnKpnFAcxxgl2v3xQR6JKLhrJswrMD0r9zyxgliSNf6CNyHE2AqYqfOFaH8xWJViEPIYrMhq%2FyMir7Q4I1iIxRXYxdvXYpNCuuAziOFhpFenQ6yMxSIXM6HKtrD0PcXM6dAbwLhq7ZDnKSigHQFBRsHYpzMUQ60Wrbj64o%2Bg3r8Z1zFQGawrKuWcT8C%2Fqell4nZ25p4P3Abzf2OSHJGE89QPEIY%2BUc1z4R77C0KyUX87ExrQuNy14ac8ouSpNY77WVeVfhWKINTU9jiVg5EqgfdYcXm%2FTbtxaoIaQQUaZh38yxwdj5Ikwzd4VKv4SegcgWbAf%2FdJ%2Fps8Es1yOIYH5zrEgkoHClrWTLjFZSuG4%2B6ToEQTdhmLNtA1%2FyxdbIVJyEwHeBFUCu4a1RxMzjTi79Qmj7NotYI5h2xRTYeFNpDCFDtKjXAQ2gHjxcKzBCt4IymmuTANPUI%2BjPoQR5bInSNiYn5SLlKIhMJL4gMUGOqUBVydh5VRrpNQDrDCAn7oQpbO4owCwLn4vszWQUdcUjK98%2BaOZckGisgxrsEvOlhR%2FFP3I1NXwBwiOlIPA%2BEnuI2GAAjtjpNaJIp5ea%2BqMUU3AARxGtWKrBI7zyFnlEfDrcKJcH%2BE2zn9Ms7dUw8lyZmV5jbmjvpRMdtI2wX4da45lKBa%2FHg9sjLVnP3m7hQxzKomFxmn3h4q%2BBXwndZM%2BxYfsnXr%2B&X-Amz-Signature=4db51d8df5f8fa2bbcf5ecf3071b7250b0115dd67369e919d8d386a1235b6346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
