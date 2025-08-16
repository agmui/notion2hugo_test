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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=c31b93437aa26dfdaf4a29fe2369b4f55a21005f86251c03cb1217229cf37dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=24cf11c8957a31a05c98f3777c50ad63e4d4c5ccb9a55c29990d6b157303b5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=6d360ddd4aa47f04975a3af6ae37fc08808bdd05b35adc5eaa7010e69742c179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=057bbd75e61184a65fe5b1f850c7ad80272389681c1c2a5377b02ca2411719f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=1d093d53d61b1258a39ca7f234c3448c24a0e0fb8ec4059e989df209fe257a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=fe319b16df5b185b14c1d759a304915327cb1818689b4ed610a5de808442a705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=4dd753d9e853fd8c10ae518fa5c1dae6592dd2ead22c7f13d4850d43220ff16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=b6ebd0569207efb75be44569ca8947d3b02ce229c3b49da686a60be1f49906d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=7c2d623cc7b7697030ef2a1c9256ec96ce0b3e75ac02345af73fd9e9ccb9e215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=aa3c500cd254dabee8d03bcc65bf478e2a7397a3ba58588bc4448c3ddd00c0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=d5498cfcc6d32bb1d7973bb3ceae72c711392416a33188c6659a00c3d81d6699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=3a250855d970f702cb68f90b8e7417506ed6d6130dd2b308df27f121c205d999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD35R2T5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqJwhNvyeV%2BbVsUJUsDU5%2Fwnt8XVgZFtnx8INZrpODNgIgF%2B9kbaK8644wps38pg14OCmEaWR4ZckQFQoAvTjAC%2Fwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAKPMvwdb5Gg8NoqFyrcA6soKuKUmw4lmwIAtjz02vsA7dJ8nNfh6FK7Jzw93HowvrTB1HGS4iHyphOSnP3hmBbaqufSkIYU4SR8wwUaWIlTUwJgoVFZnVMFC0IuGhZp6V45wsllnYpmUpZykGkqQIGfx8F8tnx253mxLRB6ANuA2OmkXWpE2WJgLqCHmwNS9GxUT2cwJ27k%2BMrrGhhEeTvbk471Sax3hxC5jlIY19ZcnmnE991lQnXHuuO2KFEQf4r%2FoBZLEHrcfLm48%2BKc2maCJbxRVEqyOXODoByZUlF6If31SxEgsCMbcoyspK4hWEleW1zxgBfLhyBFfVBqiS1d0H17kXKyGG8YGLRFO9SUm2HJAq%2BIMqQnpX5yUixkIgvJFboez5RIPYK%2BBt%2FFA22gVLXHG5YxnKrJfBPyjQSPW4o5cxZjhRmyvTcV%2BonTP%2Fny2bPp19%2BUr%2BdTDGZ5IfWVb4Le2UWp0J3cZU2kcfLiLC8SBi9kZ2feUK1k%2BUhwatAu%2FZm0ApIzFgWc0mg%2FtDalBEIZJspVNt4XXQ1IPcObRFO%2B0yFaPXQUyonWcIXrQ5CinQRmMG3mKBAeOlkDza6LsximBuTSaMXx53E0EDYSXzM5czqiMG0SRmb%2FHbQNxcIv9b%2BF4AOCBkqCMIX4gMUGOqUBOVefjn9uydWKBV%2BYLUvml6Ugl9T%2BsvLzVOplP4zm4DxAT7RqT7WsbyOptqFnjb3AC9aApEsKYO%2Fhig1wn%2F4SiyNXjpFk5UElYM31ZMPmQVtEUucwtapjKqGXhdRBaOhJZIrNqCWa8pUKjP8O3FNsk3AS6dyZnsnmNOhiqimmWCxoSOdbZACf2xuhy0eowz9xlD5geY6SaDyBlNAZrRDfGte1H051&X-Amz-Signature=457e049951b46b0e90d7ffb7dca95d55cc17a63e77458304c2ce1890e8290531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
