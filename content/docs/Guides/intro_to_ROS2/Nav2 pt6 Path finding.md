---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=12ab0e492a13bbcc39f892df7e6b263cfe27322b494ba5810f0a043743374389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=ebcd2ef33c79e00b227fd5a7a2b86bf99146fb27917b20f6406cd8d81279ec97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=642344763df65c8df0b225c73192d5e2266d3981d2bf5256ee561e19fc215d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=b2155ea05039fada2547c52bfca9af4bade1c9c056a8dc0ba606bec38a04d3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=6ecc3369be61d492b423ccbc9f30775290584b4199411a710c1ffcdbaa476f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=93b62ef35db966af4080d205066661c0c40a9fa963b88f44dc9e08289d2603a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=403e59b4cf07e4e833d7f1c0d4e7de8eeb6bb423d895ba4a1d307d7ac7e1c235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=12959146777aeecc16c81c5c7ab41f09a7e887ce3004449376d89818acf38839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=a9a604bc1d1ad0ba60461501985600f56c112713f63fcc988566a2be11f04c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=fc7300b8a86010cdf443caa410b5673bc2a98ad5cd9aad814ea82509ecdd3cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=5c9a208df9de2b0a3073d130cdf119593b23c34e7a8424c2234daeea1ee7c041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=f71739a563a3bc5754183079355e8dff271fda47113287fb53e65731889d1150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBNNX6C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6hplsizMFk7tL7NoyOLyK9fGATA1tAAUg6uPhBtIvwIgb%2Bvw5fZ3Z8PUPuZhkLcbRnd0jLoCpvXumQ6B1W9hxCEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXvWr2JL11RW9t9QircA%2Bd6U6bPttyr66phOSMmDD1GceXlZfIKG0s2yC7BbQDrz64GCaHs9cRFd5uUr6bm997Ds8iDjRe62kq1QeeW7lcXpjiJGV7YFZj2LGkv2pcZsClrThQpeE6OR%2B3tgSF%2BvbKKCI0Y9r%2FuzEVrdMZqkhRDsmzGaIHVCjh01zpzmbow9Wbl6Ls2WMs%2F2HIa9c%2Bo5SsrQ1zFKa1xMxgroIRaym4%2FVIEQV8pdeNs3PWclzn%2Bkqslogxn9AqHaPWUp%2BmLZDXRCAHd%2BRbfEO2BiRa%2ByP8VQGebPOwUYP%2BsSH%2FiW6hO5IsVig6c3JuAAMqTc1xYlI5GZyHmRCCoowR%2B21%2Fw%2BwKHPxYSC2h02d%2FpBY4ncnqSV%2FpZs91qMHYaUivhc8%2FaQ4UrlRDrDcjASWIOhckVoWfhiALD1aXb6GFgIrKpsI071vQfqSS1vxZjjkfV0c1yMJVFEDCLHeajsDQLtYdZyvsu9jgx6N8YWLuMP1k1DS2GyXKFy84Lkwf56y%2BsawAGPbXhuxxIi08TBkKt%2FFYItIzSgiu5cGLxxL3Fo3kYSbuuvv%2FYS86AcylELxZqvYWOjYlC%2BgkytRkhoj%2FBXoG5E7N85M8l8dF1Gkz4xy11Lw4xOfH02C7oguMRwMf5gMMfJq8QGOqUBbRdHyZTsOcdjWg7OPmK9BePemC3ISfeB1AwCqsFkTd9k19zWtkAtdELznxqnEdKyW%2FP0IxOXoQKRDNX7UnodbseBujTJqVQbqvV%2FXjKLXJAOFfzpHrtLjRKbUZTLWpT7Z%2FHZIupZV%2Fw12eVjQPaWuG2tZN9Mfa34xid%2FTkGuVNZBoE0tmLSDFXcF17NUSMuLlkVXNmGUrZ%2BqROK%2BfQK0OaFC4NJa&X-Amz-Signature=e85ee24b70a2ac21062f2b6de5716681a89ec723dce0c865627040359c2f77c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
