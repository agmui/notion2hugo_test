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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=0fcf901f691a328f36cc40159ab72fdbd62e97b92a9f2898559d664f899c15b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=4b9fc488be3a4bf612a1d7468bee062c3a762aac74a78adeff921865eee7342b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=02d2be53e9470fdbfb57b4a6fe5478e71a1093adc0b11a7138cc30bdfb561ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=0d355c173a92d7faa28b3b2bd2c7205e1f5c8036573aa1879a7b099344c16296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=b5ce92dee1982e0faf667973085da98015f5ae09f7d38128850e81ab9c78711e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=dc14863991459f2288f0841a1b963c846357639469544d423e89d0ba68ec643a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=8c1f446a57014847664c11e95d072e59c7d055053c61163a4ce252881a5eb29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=049ae8946b52af23422cf792b27a32013b49a8cbe394b3d6a30e05c78590c0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=357e60c4e12fe28fb3196ef332c269ab81be9513e930575577ff8108148d3ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=9dfb4686dfa8179298df5a0c0cc86ca17a3c062bd399ee2ef542ba9da5ae5fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=417a3b7d4b0159dede1573462cee2a6a1405306e0c2958b67383039e3a5d23a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=969c2b1ae06a7383e7202865b09cdf23f73aa448f64c461051e2e6174634c9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755SUTVM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDD7SCeNN2ii%2FfNUeaOIW0UI%2FN5j%2B0tBtCmYJyqM32lRAiEAwIP3DlAwFt9c%2FWH6GyfNxLDZliSMrjrWrfb7gaa%2FYXoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGviQnKC2vCzmrTEvircA%2FRxsLhNdEE%2FBNBpFjigjDMVmHtuXYS1tPhb21OJsJTl6hKV3VJvHG86VY9NbsD02W9fOjpyOTUwV2L5u0ihWOUp8PlA18Qn15ZpfOSJpwBI7oy0rl4Z8ndZ%2Btw%2F4GIMJue6AB2IkuhnEpxqS%2FdFuFva0RjY%2BkKnCUX12siRE5Zeyihx0Nip%2BnD7XjQtOwjwvVZt6SOKIGzV1BplmfOs4n6XdxHvx7lvgwiPd9kGqswRWUkqdhNq%2Bg9sfS5PPyTdNzKWdfuJkxpl6pd1XPYZrYZ9aGn8eu0RviSd4e%2FCBtngr%2Fmb1gVE1zipyyJDTCLQC4S23cqgEYPq73EdnVDYgOdlu%2B2s8lnLI%2FJ3%2BWqrCNCxgmzoCCImgspIsU65hQPFPIgy6fVeLKZDxXEIblWu8SvKRyBoVJpBjt2Lua8rD%2FusMnu04tqbgjpdc3S5uUxOV6LVeuQW9Cant4vcd8xs6bfD4xfTWb2pOc7nfo858ovex4bTkOO9vkPAtnzzjd3IXCGtcjfiGV3nQdcn1kM51H%2Bnz259UZJBZi5NLAaRbKVcv15pZ381X78O9TEQOsv00u7Qs4bIK03sIemSp%2BEUqXyXdhUTk5sO698q2xc7gQHqiI3lImZhRKa97KsaMNSooccGOqUBPYDo2dCGhu9hWUdAdOka6kL3ebynYp1U0LG2XGih4grQkS%2FjP6mqgknhlqDYv%2FCMtT0rf5%2FkZqfb3sCANJy6Jx6vvAwFsSPZj55yFEgH860REPNE02d7LJnWlC4H%2Bzf5dhGCOtGod%2FnXKaywsMe597DxcJFB4CoB3LFEWcfQmLlqI5qCdSCYglM1f6Ja9zad0ncx4cq5HlzEoA%2FzJoOA9N8NZ%2FXJ&X-Amz-Signature=d21c0049dd5115b4736591dd99494b571a4f94258eb38968e23c12f1305a4e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
