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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=c911d842f87ec1ef5047e3c425fa651cd3b94aa7a85377f4149b632b3819f5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=2f7d1f961aeac64e909ae9f4d0104ef2f6393dd7f8efe14bac43709020c1e77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=6bb1def344d149607d18617a1502e2feba95b1020e6132f8c0eba36dc2055128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=4c5b4199b2c6f496f927ed967f5de6cef767f1b3a191c6f52aa5027c6b60280a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667A3HOV2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIAC4Hp8IJsGlD%2BaDJGWajDUvs7p2F%2FEm1C390%2FQye30BAiArDj0xbJJ1i%2BDd6QwTsOXUPYzydMJwPy7LyNvGZ1pNnSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMmbv8fuNdq%2FCsQLHeKtwDWZ%2BL%2BcizxTvzF0QjDL3f%2FePl8748rQlsRhnqAaLYEd0XLjqU%2F%2FhGUn8pyZVybBXzX61ceLj0ge0zt8NfKh5JtBI77xXmX31WeLILrLD%2BHPpVIhG%2BI2%2F3LMZQ2AlG4CdzzMPB6%2Fi5deYaNRhhCszVXcMa271IcpoZ1TQrbwkuo4JnKVeTiufLrk7VG8MHKeOiUnt0XFNb5%2FvwnBXNCpUqsK4aUWNZk0b37Rm%2BoY47gtacB0HhtYYLpwF5uuBZC0K2y8IrOQiXgkD%2F8nm%2Ff9RBxOl3BzkMX1hfmzji8uDkwBTHHV6x805rWPQ8nosriYRO5OnpCsyXD9I9rwbXHnEoPYEFHFtgWyyrCv8QleKjRo98kFZHYN2y9rSpi%2B3VtS06C%2B0GB8T2%2FTDAxPUL4rnwGdS1vR9wGzRYbUF%2FH16ClQoLkyOtK3xIhoHUwSfGPRUMWf4fR%2F%2FCb%2BuZlGBMo3wBOKRBs5%2FUA2UvbYxaE13NSyabnxAVqg2Cy6JBewDPQU%2BnK82sUY9PTsyRXa4f1XTVIOZ4puHEdR%2BZIV82voS6tkma3e4vfSKqp9OYqmDucKLxLqQULFAM%2FYy9WuFhrLUiMJwrNQ3nIPyum5EnUY%2FBaueYT1tAff7WOGPDkqQw1IfKxAY6pgEumCveAdtoDFPsUUFwzhK6l%2FVdwbOsuEdmQpqrbsCUiq0GT53Tq4rqtXHS5%2BC%2BTJDxQz%2Fx3lv1HVJOnOxRp1Tgx%2BpV%2BqmEO5xXCn%2BI6f1Jo6n0ITV0yTtkzDlnYtSO%2B8iy5Jj1LPMXvUnoiwTdMboOmw8%2BDycENa8J8fFxg6p6CKD%2FkTkQri8GAoKPWN9qk9ykdOpVP1hsiVc1tsOR2XfmHwU%2BzfBl&X-Amz-Signature=191875d401717cca626e9a54d45e75bb3449a579c5b8e4923bbf3f66138f1d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=66d2b27106833c362e3fcaf310c6dd7c9c89f8d9b2a315631d5e4456488b8e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=83d0f62d33bcae9e3c065e1fe86687b08e233481ce90dd1dde05547f21bfcc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=81f52053f2b3624b987e2c2e9469e7f65a540f674460f28190dcc23dbf01d5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=f08e8ed5eb09ab8d71455ded7030d0277a4d4060b366aefafbe5e41588d9b85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=967e8af58a5b31d8049ebfd94f8c480038b42efcd9a2c2bc6e38e95e43481f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFYYLCV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICx%2BYhjTFPonbL%2F3W80BbrggZRgKH3ab12VcXKiy2UuFAiAcA0lhKf7MS90qmOwRpI7feo%2ByXiW41JcPsq7TyDxemyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMxPAHdsN%2FjcLrYDIXKtwDUdTSeAvNVKDHRQKzDdQ5o7xC%2FyEuk6%2FlnicUkTGHF3PUuHjMiGo50llPChVcaysejYF7FTEGUTGW3WR%2BqVwnKNi5GP5aqTNVugDVeWlORowYwQ5Q04Kc49n1iE%2Bq0NhXUwKM7hkwpq%2FA7cnRsGd0e6gYo19tsjvDB79hDrgaQyF8hyCRBPwYmlQmodRE8HKEzjS42bgtlMJguvufgZvjEvcOZgv0AJKLyqJPekStyxeAl5yjErT5JoaI%2Fq72sXkz7bpL8%2Bx7TJd2hc5GH%2FrTk%2FLwXnMM4%2BUVSyl%2BwsrsG3043z6P9WPeuw6XzZM6Dca%2F9Fv%2BQugTMPgMN0GdxnAs9WupbNt8z%2BaBwoST0TghQ5OyVlIl12A4y7i9kRw4KtehAkCuFIc8elcvkZwWGgPDTkmQmydKw6ek4gSzx6H07oZMXV1gLjAjKhI69qS29czL0LZM8f503k1q1Gh%2B5a%2BRWzJLHXvO8m753oNMqRTQCq3MYORLUtt1u8giFfD5RMZncnD6HNs9Za%2FzPhw4O%2BRN5nbXTziFhh8VR8zQfq7pZnxAzFoftm4UFS%2BZSOHS4OvZjWqQrx5oZT%2FCATl%2Bmk9laDBMbIpXOKGGIELag%2Fr5ogkKfV1rD%2BCpoyn9b%2FowkonKxAY6pgG2fVorxsWVm0nKx1egnYBkdbohaD%2F5D3FGi1bNOlct8jckQa6jws2MyLPxbsb%2FnO2tl953fAAtVldE8EVeqFIWc22eAkZCdCC8IdYWFcsb563vNdtj1HbyjsD%2BVVnSH1EQrb8Hb4wcpPaPDT%2F49auXf3Ck2crmQ%2BoNpzJzpWdbJ7e34GkxOsitRYoq7YZqD2YMNFeYlz%2F411QBYGH%2Bwu9ASZv3lERh&X-Amz-Signature=8497aaf5b6dd876fed20de24f9189376edc2d631a17d4d15ef0c829962950699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
