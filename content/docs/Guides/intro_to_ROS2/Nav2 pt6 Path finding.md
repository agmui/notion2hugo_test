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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=4178959cfb3ed4d19c91f65c259605cce5b4318eae5f302ff3b1f0256511bff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=639be9aa042188e0e38a3afb3bdd939edffb3a919a9261652c7b0d40bc01b258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=abe091d0622a6b3afb9423577d68d96551ff08778778ac66754036f782c40e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=6b51d6959a82ff3c39b2973fc007f355cb70fa13509e2a72e96fff6abf3e7602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=79dde6a629ce5ab0ed8634d469e57173cd9d600767aba5a3e05be423e9ddf470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=1ade964d264dcdbed8d18b05beaf0b61aa90dfed5b23b22734ea4c2707c96c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=a43dfb3836c76bf9d75b1475f4765ec96b70a47533de05733e7b82595500d5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=22026446f086576c74eef70ad27d5724b6809eee9b411c7a4088784a76388fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=a8d65cb2fd68f85fd75f2c95dfb14145e4348b502b079adefc91d4d37c0dc39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=302ba3e7b557019b7266630c124c828308fc815a1db314c49a240509be2d6112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=eb29503a530ac7b2f005b29f6d906a5dd5e740c2ab3c0f8e0dfc0462ccb4005f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=eac441d8faad3eb50016c74fdb2d3bb4b1b7e782d562230a433b78f1a2def88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SOEE2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRIKZlsq2E4fTNhJxWtPqG0z%2BE7sZscQ2L6QcEV%2BFxEwIgO50UXKfoBn8HaN9DXE7J0H1rc1f1a6wx6rJraMFb2zEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPCb9MNCjeMNh%2BsZ%2FCrcA2ojBBk6Vd87lg3RRdLFCVOTf3NFRTS9SSS6OsmmlE8N%2Fm%2FerdnwOL7p17ld9%2FINQVwGXrSQ2wvCkHPnHiKJKtuwErwt%2FcdVm3UMwwieh%2F05fq26uU93%2F5RsBzZGvGyrBupRhB2Z7aItUJiK6cQ%2BCgVEINGMcTbTHnuRcm%2FRoUQTmYiq3TGVCYpcdEFgmSVuW7166UbJYkABwtzv%2F60sDMhln%2BZIb8PEAo83do7A%2BRf2DrvFgUupGx5h9tGy4%2FPaZGqWCpNP70BaP11kPi8kPj3pTLwzZ8id%2F5J3M2zVydb9Q%2B4aWgc4XGbt0rsPt6%2F%2BjlDbORwj1snq93j8l6xhBigYnotvxx2tHRo79XAy868fQoAVOeSe19EDQxyur5K55QlPDmRlU1zHSgt9IZRR%2BLwrIdHlfsc3e9RafzqcEml6TMxs449YBuPb7fEhOJEF6pSwfEgPOnxw%2BJ%2BIBhGeS%2Bzm%2F%2B2ihRs2VEsCmUpQ5XAA2awhuDBgIL7vSw6tNZIQP7NXVrEe0GXDAhlU9G%2BwUFeIqU97BOThYbzo78nKWGQz7N8neTkjIvXV0C5WxmOUbpfKD0OX0eais4XpdMaNCmCjyxIThuTX6cVRgA6cXZXKZU3OIGAB2UsHETaoMNCeu8QGOqUBqPTctjv8jIcMH8K4wRHUjYGmURis0Qn3lpvWGMSGn4TcsbJjhRYecEVy1iUcOgC1UFbiWXJ1dxcZJxHjRh1X%2BxuBy4ixzvHVM383xWzgbV2Y7UYB3iisNXz5E%2BD5lexzMb4jsatUuKVVxLJxpeGJl0P0C9LkF%2Bgc89z%2FZZ4ENnzQJyhg401Aoj90J95cfp4wiumQOYiR9lGIMn1saFSQKS%2FRzkUm&X-Amz-Signature=49ac12c3a8e73637b75c96c00ce3cb9182e8a016f3f4265a18ef9d8ceaff9d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
