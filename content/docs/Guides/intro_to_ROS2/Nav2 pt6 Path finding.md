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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=e2d108d78e36d72ab46f4e146eefa16da612e390516a402da892326d51d03fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=67fd1fb46063e6398040d72220ac456285d6cda6fa6bdc72b4e4068221334f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=a603cdb728a6148df88fb01c65e12f47c4dd3d97ab5ba4ac9d12f575edfd83fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=5e2f3c0fdf08aa4785b5d273a814958e9a700f478424024dbcbd3f5517326de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=030d1a2856b7398bf8b3e3f81cf9f69c1a1e1adb219ff120930ee4e43131e68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=bd48a9445026d4d40ca24b0e330646f55f464595a071987331a48c49bbf99a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=e40275d1ea64c981d3041788dd634da81a8dff44fb30a6825849e77de4ba3e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=9503ed7b12f966fd1cb3055dad9491dc856d6872633f53e96ddc8a9b9b233ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=d280877b1157525040f3cadb7e589a7fc7faf68c99921e8dfe0d60d4599d2474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=d4a8338c7191ecf3edc7c750a5cc74ea08e5e80047f5578bb0782ba5fbf4e0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=ce9980d66a63bf744ff06bfe495f623e5694511153e3b12667379d321664da97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=c4c884dc952317a444c097857c141204f018cfa60d2a3a11a3b373004ac76fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFQB5UR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hdH%2B63iV4EwINMPovHbxeYRsai1k6WRgnI3a07dqRQIhANh7VIbV3gmZp1jK3ABuI56TyU4JcwA4fXCiepoOr5lVKv8DCBsQABoMNjM3NDIzMTgzODA1IgzguOVOHeg6%2FoXGHFMq3AM94kPX4r55rsgu1k08fEE2iXK26B0YKty7YzNy5wVthnhttsfukX1TXwx5K9isC8e%2BlepnzMhn5GuecZB9mbwK%2BAjloF580h%2Bi7N26%2FJ79ViqtRHMEuw71GiLOT0uXoFiBlWCV0HG3ox%2FAwcq582ZEGYYgxwFAqdsqRwU7HVvkgs514DYA3Ei2PrvGg9oIOYpfhlh66l6R4KxcyRGXrxzS58Blu6FsOhDJ2sFynZ0ObrZyaOdiDkgxBGKv8k83cJWdotdoi6QpmzCrMcjmIrKcSUuy%2Fie1q1fnCRUAbBDXTrueCMYOw02QnlvCI4FcNxF1B%2BpiIoDOJTG6%2FN6CgfNn6p4VvpFl5596LqITT5yv0pzxm0T7awC%2Btb%2BWhOiwglmc17ED8W3%2FxC2sH5%2FJN0XQ6wsvJWTbtmjlxp96VXhWt%2FofNeniNMaygnm0A1ME%2FrHRpGqivLpId6%2FMGSktOIitqYzUCP3Chb5Na9ZogEVP%2Fi4qHFkuXYg4r6PLglgFV2I%2FAF0fWRM7e5adhLfkKzndtgJJvQnvNRSqbr5sLfpVrCeGoQnAdixgl9Vio9FvQfZD6Xt1dZ%2FzJrkEPWzBmpYh2TQy9lpjPpKsSLRc7tAdtqjF7J8w9wNoAeimwzDQnrnEBjqkAaCAbed9HLJGJEXwTJk43SYh6IMpBiNEsNcpJ5fUUXGNRoUzsRafHW%2Bu7WDh5Jki4IdqIKK9eivI31pRqqox25eWkrPymWCpGnPGHvrPkq4BgXqE5%2BK0591vdb2tSwIrW0hsZvAlIQrTNg74oRwL2KP%2F6CHdD80bmA5GuiBxH0b0xh%2BjNzd2e%2BXQAA%2FvBfY9m1kMdS2LQz9ABnHekUsgXrDmWXE%2B&X-Amz-Signature=cbc60f5c38677a2160b4dd51b6a192f2659495d7bcaeac4bac05ba0ffe5fb8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
