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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=042ed71cabf23b2864896536acc19bfb92ceb8fb80aca12f6c6e5e9670aff057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=b258ef4d31ec18b40f0386738bcee63cd72129c17a2b8deaa7bb588a4188a33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=bef636abb4a2fc8e98f720b9abfd3d3d1e1861f5d096b19c5eb485e62c7d6dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=6f9422ded2cd10b13e1b774b8909dc7afe9b34b6160fa16f1bd662547bc9becd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=c3a531795259c8bf2d02e0c00d473d7b4e3e8ebf28b4f9e0572dd55f806a3f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=5a7f8661ef73fb9560ab3a7fccc90c347c5ac70808bfe7064e73c13c69d8fdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=ee7cf3839381491ff9789d2bfc2081cc26c08fba5bec6cc801033995c0ac8c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=c90664175dbaa826914758a1583b4afbbebe49d9ff7228c066517d49405ffba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=cd0d48506db52f25af4c1737bc28c57264c1a33fecd576400e3469872f865f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=9fbe86b8c273042e057eb6556e618cc4f40df12565502394eeba65e3ba6ebbda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=792aa13216a895735df639150ade67747f033ee42ed3ac7d53c6dd55330a2d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=b068b8a307c7a4f4d7efdd2384a17c8c89fe7bc1f09d957c935cbdb8ae9a3d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CCBCYAV%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAzv%2BsQ9Ax21fMilRXDnc5K6%2BYX1srUQzUdIEAz%2FQcQPAiEA212BlW5QUypXxcupub7rlXxfmlLf%2FsnwZQkr15d%2BdIQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAjQZLuGw0QCq2ELgyrcA9BYFFRp2G1QAxNs0iE9cSEv%2BB%2BWKJNmx3Z1pB4a9oW1y2Fw0vwHXVYpRSAAi1Rtb%2BRqa2VnwG3O%2BeYo6rA9P2Q8I%2F9gyzNv4NFR3wSxvE%2FniRBkbNOPWtPh%2F46OMnL7Jj5spxojEB6YfTJgPx76%2Fqnv8LOEPR6L7EtCl5T90%2FPEYqZ8%2FcUvcGpphcx0R9GDqMX9YiSyS7M%2F5zjYx3mjqPXhDEXk2sbuC8xuIBLz0KuN4qBcAQR1Y0nIWG5cxYGmc3oTJGtsVTvAvemqbZaL0Z3d60qs%2FOsNHV1U9u9ImAJcVkb0JXRpif%2Bc%2BDzBXxg4VqnzmbX0TdMwkvZjkyKpS5baGkkEagC0Z%2BHeND8NgYIKnogKLWUKlvsLw6QWIIpupolhV%2FQKYZg7GAv3CZUsZvHBLnDEFb9k7O4bAckCKfZM607fK4R9GncN4w78jsHDMfhvCRLJYVHIbL%2B3IuJGq74caUT4ys9APUPnUE3aX0WEIYAhJ9UtIKmjZO479ZGumqYx%2BsSY8sXEfOon6BSm0ENEiZaPNvvZm5Q9YO6zA0JgPRx2zPGCgHWsQhNc9hCydmC%2FjE9OMygbtrIg6YlKPxhEuXvFXKRgb9mqaPgayDbUMUKPsKJjUlubxK3hMPKWytMGOqUB2ljXRmOb3pXfHmTItnQ8sxUy0kisWaEUxKlXXo78tbo9Dm9d9wIYmuEdhEEQGhWGQSBZLZQjhkBVMnvcYo4J8LKKwz11Id9n2ULOMRv7IzeY9wOH5SwdO%2F0wPLd0RP4C9laiA%2BbxuKqdVOM%2FRnMZwH1wDqr5u2%2FtmZBBhp2ewWI6GKRu7hiszl405oHxyZSfUKxHyRzZJruEq1eHdgu8AmUhBw5a&X-Amz-Signature=86f3108ce480200f6e0dd2aec1a7ef3c650be8e4ad6872c4338a9f71700351ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
