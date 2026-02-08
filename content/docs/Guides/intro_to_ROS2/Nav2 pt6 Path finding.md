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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=f28448b2e2b63a2d8fa16c8747f42535613cdd1cb2b2e19bab59e7c33e809aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=eb2764ea1b2a99a53e00c4eaff8f9022a7b2f0ef70ca2407f4444bcd1bf837e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=2a40fa3011830ac7958df34fcfd220df60b1d853a1272eb363298e229e8de1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=b160e957b9d4419c768925b802cd4bfee95d6ebb972b97360058a6b78a7db93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=46c6e13f9076ce91705e76f7e71e9c3beb54a7727b0edd260949a5d1227f4e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=e87c69acf13269880792dc2ad1347f21982ad62f3b9ca072683b7834d8b38b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=c6e110e06c5b2ef6f7ca2aba72ea6f1ee8ef4325ead7f1c1df44bdb914521906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=75b0ffe02dacfbe5ee0b5ebaaec5e7edb9d5a7903b4b17645d2d3acd8acd113e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=1393a6367b161c2415a32b71ff4ce8f935790cbfc1d633bed39825e188016405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=aecdd3af0087f3f963aa7a2d4c6e5867ed6b062c564d5b7ad99e6c9ddfff20b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=ee48d203b7a770a3e79374cff6511d8e0db65ec62181fae8143c689b10b0518c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=0f3cd9d3af384a3722fa7623fdc0e60625e8277386822ef83faab4c6531bd423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQ5NRRE%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN%2BYLrMMcHKBlUx0SkvWQqVSdCXKyJy%2Fa76%2BBAoaWfgIge%2BjdHzCMpx2T7wZIamrp6ovTPk%2FHG5dIi%2FqYb6VtOoIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLchhq3f5%2BLYG1%2BMcCrcA7Kz%2FA%2BYVACHKeaP52ROvYblx%2F5vcyuSSdFu6aG05zZwMh3qyTLFV40xO38gThx2xrk2xIbFYVeSu9Y6Xc2VFW7fBdPnOXW7iwRLB0eAz3LeiPnEaRU%2BP8HOaOfgit46JYQ0ffy34Z6vAhLHGWObbgBJEQEuQYD3Z7pzGxau4%2FD%2FezxXE15%2FeIP%2FCwtD2SMwb5juFq5AqIT00xv7TZ5aygh0cBE2wj%2BCeXHIGYnRa04wCJrUfqt22F9XT6Qnl0AQatm2mowpyDp7wBD8kxTWYd4hWIocOeTLDRZZxbUOytLYrxyT72dX9Q9reXuJF9ke9GpVMmRMngfIYiQX41pFJlbHjBhmxEAwV0r3HroHIkj3ZeEmw6lkAY1DubRe0cMzEa3XQ%2BBF0SHPm%2FUqceVFar6T16LHwp2Q11ohfyPsU7LCk8wI8emX8IvnaFPcQTLcnhWVEsmZaVlXoKfjvXXkTLYxhDlJZwRvK%2FWSstNgy29M6gF9mtbGfh1L1ZRkTp51gGSOf9tK5FVHgeVHBxiRp5L6ZN6PX%2FBCSGCJs%2FUz237Cg%2B20u3%2BQkxqKsZ%2FYZsDiat8ygw8%2BIfBy0bLOiB%2BDWjHK6pCd38Vw4WsdhkkrzT5ai0J10KXcWAMMkaKGMN3qn8wGOqUBw6U9G7QCpJezILMQugVGnQQSWyuV1PU%2B30tg%2FORpFp%2FMjR9y306RRdg959N40YCJrbzGBo8z8RalxeyGMrvlkjCEAGB81%2FmXKpxIa1cuSHf3ZOcgeLow0tin%2BfDiVS%2F9gv%2BI6FjJb7XYDhxmQ6tEkMtD0uqngGERz6nT8gcLhGuWjmI7hTtGfgEsJYOMhFxLxpJhKvX8oM1zKeDxqqtf7qmPinaK&X-Amz-Signature=19a04b79c01d4356fa60c6ce1422a36a74a2fddb19b57275a946a2032a2602e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
