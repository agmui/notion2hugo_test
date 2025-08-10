---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=4bdf42f7f4ddefca3e4a7f32211ffa8176a1e7f70be2531882efdb9d93cae326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=70ff214b76f91261ee09cc8915d853f763bf3e43700cb32f6de93437d987946c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=4efb8ae450777e581439f4cf1ee1513556c5a1d071f17325eacbde505919bace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=8b6958f93a028ac70b250576c10c0363f0580e9587660f13b1942443aa89eab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=92db4be216a2f27df7aebc219db6ed0f3b1e99e55083409f015548aca9072281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=0d2763aadd42bee42f5eca0779179f4781cc3f954421093ab5dc1a9ca4ae0aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=facc6f325a0834a8d490f196885a923242fd77cb63f9ba8e30fc8d4a964ee036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=2d6f5ba5fb99b65a86051ee3bc8b1572c8586eadc6c26045fa998cfb51d41001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=cef4ef2081627e34e5bdd20f43e178eee19f823bd1dfeb413473b487e36b31ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=fca574bd34dfde876283cde035f1f1436072a2c83b279a291e2a1276407f653f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=70707c7a4f9d03973325974a75e7a191af358888842fedb1b55a6f433ef789fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=6a1b754562d7ef46df2ab095384fd719eecf0fe1463af31a3c0c40d37f3138c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LU2W4WH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLVxWV2zCpZkpFqKvPuVaW%2Fgx5xIpJTyw4vghRxjUn2AiEA2Jw1uOrSesYdBn8iconOCsn1LDgiKBub4OjwD9rYAiEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiUEatboQJfqH8NkCrcA%2BguQXvk4QwqzS9qN7B9UoJI%2BlCGL1gMkiMdz4WdYBDdkYzpHiXuEAq3MSKEE7mjkr%2FD57OB%2B5f1MQCrcpeliwhNh3qW%2BKZjipnecSE4LdWKPMu4JuRFyngtF0D3NmjawxXc9WRmQKC6ebNVhGiFNquK%2BAjFaAaTXRsq0tK0F4jQHztq691gHRBFkqnK%2Fcc%2BJ0pUgBt5Ty33BUu%2Bi5GaS5GpNGxj5p2EKUlKjQvFWhNViVWOM%2Bnx22hZuwdA0zbIbC2idmIzR3NuNN9x%2Fb%2BgfV0khhHeTpBroYbGDWCWkJSrVVPT3XSFuMtKrG1aB1zygrPWf4YZX8WisgB0174aGf6aoCKWqW1d02ZoHr%2B2Q71DcnkN5FoooHgcA599grZA7cwu1tksSsH7zKWntixOngOU880fPN8J59AGmcS6k%2F0WQaOitnCTtOirkfkRW%2FFCBAzkc2qy882cgBQy3Rp7o90pmuj46HsqYjaY2c%2B26vS435if7EurMeMEM4Itx85LBpU8B1Pg4Myyro4SQ9Wgwxdj7TEFdmBUwyz6UCn9CW2IL0%2BZzvENn%2F4p1BT9nKwCTouePEN%2B12zVPUGXitHn%2FliYDggcTMnDDb69zXFXnuFLLp68VuDncelPKP5aMMOy38QGOqUBnivJiIEGEyxp1RINZvezu%2BtGknXX9YPiAImvqSTpqQlcIb%2BeFdomP5jU2gtqVFRmGQGUvNuV1jO2JIn1iuiXgjAnBqr8Q7mdQf689KnXo5URj7VfNkgH5hGfr5P2avF%2BKv%2FTiCAYSGcODMqdr6vrtW%2F%2B7xiHH4zpJBq34OZY6c7x0NWXmJ20B4xvRxR%2Fv6dOzJDbs0pooodwrjuwuzwdA9v%2FWF8%2B&X-Amz-Signature=af86dc7513fbac7f2aeb2459d8f185230a259f8050bb284d0a149b9373edea12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
                    'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
