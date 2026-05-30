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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=c52057f50ce363b7facef848a1c2329ce20165ef421af7e5bd48bdea4441a8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=5d0b4b5edf71d5d5dab5d1b63a9211b51c83bd1640b8e33acfd494b2e49e3da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=c62d36034c01d21ecaddf46b62b965d3ed06d81e0db0497d4ad56633ff77a19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=33cb3497f79464cb316eb839a8153cd9d105740cfd154ff8b943cff346e97a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=c9f2f6ad8263989aaea0b334c907dfd6ff77357e56a5100b85172357d4af3585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=a3f57942e4f66597fef148699ed5f51548073553cd01547ff72b6b08d27398c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=22fc002972566fdbe436452015cd2b0dc2547619165050cbc1266fa6fde18bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=ff1a828e2044c809294f8a19a7f5c6780b630a7620e9f0dd881f37122ea7f15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=5552ee8c9beb9c378a7b541ae0544bb96a36bbeec1f8c1b0ec2bd8d2b55b4eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=63dd39a2f569a996e6555e38a6726b702ec7fa0e636f41f8e8a8f364f07cf957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=e6b2252acd15d80426f155e14f05a87d43fe43e82f3efb80cde94a87f02b92be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=f58f428a6816bdb99200bab75f9e02a27f9f72985a9633ad48cb8594bb9ef9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDWUSPY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAwLVcFgQKOKL7cp9RUrPFonyDOb2E0i2uv32ewS%2FuUFAiEAxXsYyDh2xPTOWwF8XKNM7EphIa5KIt6z2MJTmH56w%2FMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHircsj2yn4KZjilnircA8j%2FSnOffo6tS7MY33DBjfyohF1eA4kMxrffMBQ2z8u37J%2Bg21txnkHy58OTwNam2dL3o8vNjUfNoCB1vx9eYE7zaxIfMUFJdDfATG%2FCe%2FCDvlokKWXuoe8QMyNrTbkZ9Iz%2BX8rkOqJJwZv%2BYtPrNXONdeBY%2BimjZQVA82OCj187f1qPL1a86ajZyRea7wR4QaAzeZB%2B66lMBdwZWtCskx2wJjHZgkUl0YCD%2BQN4MBMMLKs1B1NKdQXVUadmi%2B6ro%2Bgweek%2FiJuo39oIIDg98KXtBpqCIZVO1f6S6aJ729p4kg0urxvVnS1cbJak8iRIz5CqTJovnUCf5vqrsgnygpvza7I4LhJS6r2IZs1a1xqIvY581Tc5CivP6Q6XX49hn%2F6C%2FBSLQ4cdUPMaFSobRmDHb%2BAQJTk3HFDjZ2YN4dTp5vxpt7DYshcIyicRsrmn4yT%2B5YHX4ynO5Y21zd2NKHShSrgPGPIUxZs24gTPQaZwoUKXTIfmBPijJyXQRW%2BBtVwCN%2BXP2HF977cRWxU910ROF8XfLSkG14alpb%2FqjTxImwPsIxCAPGQIS8Z9iEq3KM5An7wns7R%2BaAEmJVG%2F6wyTFtH8tXTSrAP1hVjdxKrxQMGObVQYbx9NerajMLOn6dAGOqUB6wMp%2FEIPNXemrc4pT13xp0G0WaVA1RsbQp6lmiHrC7LrT%2FrlIZ0IbD8hcM%2FuHegWVLPhZQDeo0UgzValQ9HoUo7mgV1S%2FV2EeOLrLLweDMoUP8Smi2HuZ0taSASxc5X2ExpGKdmxt%2FuuPZdF9YzD%2BsQ8kNTdLSEpaE5Pc0JlZ%2BpZh1lC1YyYaVni1xeno6NOvnOITuBb%2FMf%2BBuait9n8roZvkctr&X-Amz-Signature=d19b7e7ef43d74c801fbf3379e650430aab24c633693f9f56d96997667f56207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
