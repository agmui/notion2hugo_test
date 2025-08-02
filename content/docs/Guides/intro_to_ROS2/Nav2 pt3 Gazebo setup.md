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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=c803eb9601681fa4ad3cd30128de443ee2501424abc5df5891cb646271cd67af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=0ff70f90c85cddcc14740ad5a34c51132ee60f5a5d297e36eacf894d1b0446fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=5ca022a24d7783a89f306651c1450f2ecfb9a27da4330b0963212f0b5891ffa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=dd40978f90e98b38a708f62670865c09cf6238c32a68bea07cf0c3171d48fd0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQDJLJX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqwVH%2FzHgj3d2ohs4EM3w2XnnCyN%2BAUB5rRFydUBzWGQIhALeLqGXbxCfDXiFTlWjNY%2FMz%2FRarsE4%2BZRp16gGc6YMEKv8DCBYQABoMNjM3NDIzMTgzODA1IgxzFxld5nvwhK3P0NQq3APkpPVegoVZOUg4Uqj1c81YvQkc6olvAfsauuI7Fu39TJZyL%2Fh7WocJdZZoU8R%2F%2FNzbJbrBoaT%2BmzgIwQgez5EJ4C5wJrP8f38QRspnNU0MWbmxNqifp3zV5wXVW%2FW845B3TA27I01IIiJyH1QojfmG83EHu8emZAKGjzPmHr712aPAXdYTp1orJhfn7fDJ1Huo8XMTAr7t795knHRHOfQTz5nSSuMsYz%2Bu%2FLOZrfvxb5GsloVKzs2nKBg1Gv3Vkc1lc76j7irPuAhSN4VxcJuRaVQYqaioKmBfxAuKw1TzRStspgH9VrUaAFT1%2FblHJfBIVRHYZV3s6ucmOms9mcf04juwl3eJHvGt3SvRkIWuuG%2FvB8r64JgQIS%2Bw5XRdf0lWKEVN6NOx29H%2FyRa4tk0iK9Pdl633ybOxr%2BUksZknd4QYPm8%2F2GjaNFLidOSEM6K%2BL9JmJhwg39hWF6YpnlypuvjpcHw37PMb4eGsYEP8BUH0Sq3SYFRFwvwoBYAkstfN2YkCG%2FP9pYm52hVGsrxNjSjg3ec1B7j8VhT0mk7VvvC5VYTTsQ3TxX%2FfMf%2BV92YF5QbXnN1YX2nVikGB91zy3CpFj95DPd3gHHNh%2BlLExD8GE9brmELtm%2BcbtzDhlrjEBjqkAWzjuNlI2O%2FgmskksrLQJUl6Kz%2FjIn%2BjEvkQSS8AQaTNJ49ra4IV2ebFctJJu1t3Gtn2TwIR3WbnetnQKI2cQirZen9HWW5%2BkZS%2F%2B0vhf3KkV9MF7mcZnvO4w%2FbqH7Tq%2F635iOJytzShABGIa5VtdCByYez%2Fxpzmo6%2BNh%2FT7ENw2c94A%2FdrQSgbuMoOhi%2Bq688ftxM%2FlMBwhi8ApM6L%2Bd9HgnncJ&X-Amz-Signature=2ec8fc63b9561c37d27be4bf6bc837a4b95472410bfa0cbf8e193dc44e7eda40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=5823f0adfde31e814d124386aac22c0cff1478c61a6cdb8d64636f79cadfc39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=5ad408f98f5f16a1fc370147d47b672026454f78c2bb1d9ba47c060510320753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=e958bdebd0eb54fe96bf30ff5071d8a2a51a944cffe436e6e73f8f1653198fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=3ca8370622d23fd64b3cc77bc1f8cada40746bc73564a4d3ee5435f797bc81f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=a0ee6bd647a667683a7badad19b5b3ab9b508b57f179acde14b04b4a3655daf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYM5QDG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtF70pKx%2FqYUDVhVjOzFkBjzo0Me3wsYYMSMpdnnlyNAiEAhSt6YG%2FaXtmrvjttpVeOS6R8FldNmBFjnmUp3UNKlPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHEoCzZJzRIflyzsAyrcA0HbesHiZbAspbXs0yVDvBsxrAA6fp0S2sxt4I%2Faxac30PLFCG1AzyQk2xxy2ykpUjP2JKLuFpN%2FxNd9UQB6%2F%2FoH8K4%2FCCsmxUU1m02Qd704Ekucfb1IzKMwqBmiYECvieVW6e1ZK3WkSiAgtmiCqnefY5EMP2QSjKKEAgkTxaWGT5fOh1ulHfbEyFN%2FK5ScljTZM8SlVk3H1UqPF2LmklX6B%2BS%2BPks%2BDv1HxEFp%2FNw4ajHerHs8xt4fDXJMTzkEuE8dMlsnOlAqA%2FoNyD6T0AQRRGwWZmoQDKEOOxgt2mMOOwW0tfVWuxK5rfy%2BWqvbP4ksI1KKoruIOuAEoryG0rhe9qRAyG867LusXY8Br6RthouBOvBF68d%2BrGgzfTRBlunFBmz3MaTI3idfpxasqLtXCtqUcMcgDOJjvZlODrKg6TjMGV9f7fxebKPbpOrOiOJS5Wgb6GVewZZjddzDttyce5GGcHoRXd74cJtT%2BVUIzD1yyJfSNbLSYGueVIAbx0zVSVegdRNgTbRTdvRJIeB5kyNoBi1hgxjTZpaGdjpVV6RSfa7aH58yo3VBHGCvOAnQulgv2FnpApuE54VJA1EllRrfXTIMv3fsnQ1D054Po8fW3lvw0HLnAO44MLKWuMQGOqUBT%2B8qDG4EZBAFzPzEAqEkd%2FwCnYX8OKgformYz4DUDdyKu%2BKodQYP%2B6j46cETTJPm7wpj2gZEbMgi6ujrxLs0pPdeOqL0kqf2PKgJNUBMq834BD2zJBEYGZ%2FGxNI%2BAS%2BUDl%2FWUA%2BgrBnDo4RjZ0iIYuQEEEkDZCmm3WsVyr1HDvaZv3DPRE%2BEz3fXcELnpPx5ivN27Ip9DKv7UUcOLrBBai5OIG1M&X-Amz-Signature=d7915cd4fb901a28a88f8fc353835cd57f9590acfa34c6e74e7bb8994484fb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
