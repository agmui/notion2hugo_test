---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=4dcfcb315f1a3a43aa59c3766ddf31ac8042abb8b2990fb3dee39e23d5e7a81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=4626b2b0f8ca0f53830b95904f243fd569f7b70c2ff86dc19d9b4169bc30486d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=00656e225579d5ecbce7a2fb7746d937df0839eda37c9e850f7ad92ef73a4715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=68114267d363f6717ce0fef1d7666dd958b6a365c03b81f33e377e867a72a9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=978407e5ac9b9ac42d2ca87dd696873d7b05dd852f90a3aa8510e78db7250944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=b21c4107383e245681cdcf51a303fc51883cb55ac94917a4da0bcb2e59ea8580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=b69dddbe2dfe8b84b2f331cb3226dd0a6bf3f48a764aed2148852274c907555e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=64a301c575a297df3974ab73ce6e421e0aaf7ae54c477a73a5760927bb3c4269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=bfc37be24e035dd242c4bf6b8d7f6ff5731b5e980be665827ce1edd164e70ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=637cc652be589567c4fe21acdb03d4fa9c2f4a2a39a966d7718d927841a33e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=03e624d9bbd5af9dbe2b7881687ffb75934b8e72fc4823150594acd35d21e282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=cc951852746913a44746a8f961f13f2365750553dfe57dd3ecf85e93f7617bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJ3XI3P%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNI22WpTAGMpMyPv94yK8%2Bw3sTcKXOJFgtqgH9C69sUAiEA%2F4y%2F7SuNhk%2FMCpZQU%2FGXMjhrfaipSv0ecpw2SEs0wS4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWXFUEiX4mE%2B5N0SrcA2iTAjhI9vppO%2Fc1ThJVDzXDBO2QZLAWHopNhtvR9JzF3PvVy8MKYZvBR7PPe7En0vnf0Z5eq%2BNmiaRPBcTBHu2VEzx9iw8ra4%2BImMezQPK6xtBTH53T2xSwUZkcDH01AyZ5%2FyY1nErYGX745ZoYbEoffzBe51nGEaqP6%2FvVcyU7tzumxt2P9UcHk35b9V9YXS27QyOMdTcdZ6abYu6AhC93rNeIUUAXASLi0WR6Hi0WoPOt57mBa%2FF%2F2UOop0YLc46R9bxmdeTuef6U1BC6tllg8mJFKTNXvkkwuzGEuuWmaVgamcwPXBppKDhyRXOwc6uH75OLCWzLKcNRypL47JcylVwPbwlTMHpq0%2BXYWyoFylHFASo81xUV8z7d8L3tFOidMAUC96X7A1n%2FablVUBkbJ3tl4qdaVbbtrPMHz9t8dnV6k367Dlmi2cRkcwN3o6dCrB8Mw%2FF8nCA6pGOSJDXJ8NA1ni7bzTZ5LN67FBfuRqLRws2%2FLb%2F3Y1di9WB%2FhRqz6V5rhAeGy8I3Q9LAZhQziOoe5DpxFhmDuru1CJOvrjX0Dar7ZAExPb3ebCSOf76lRHal4J%2Bdae7UiBwrCbPRb0dTua8%2BxIk%2BM2v0P0MZlvyyQYMUxPZSzHMCMPTVh9IGOqUBichaxIOEkJAAjIu1Gnp%2BUUj%2FR%2F9FPkCxHrv4BX7zIEPN9DoNxjp8eoBFrEWTY8HYblN3po9%2ByjRgQZ73%2BWWQJ6i%2FuMyhenbCQNme43ko%2Fh8Jzrf9YoXxSGhNpfTbPG9HO7EG0I%2BxtdzstdGct6kGO5XgfKbxCkzosJ0CYhALZQIOHkMsvJbMx3%2Ft9xQGdXzlC3MrwSnM1nMzzzzUrU4Hmjc3Ydub&X-Amz-Signature=c6f7daa85a1ee8154862894e4de7df5ff3fc1d034ed8b1faa00e9f2ab5156c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
