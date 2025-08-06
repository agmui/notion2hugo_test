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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=df5ac08cd40fa202c721964261c172d1e19713d351c6d3e11212c6196f16911c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=68106db725739ad2c504b6a21a4ffade1f3a84f7e12fe2a4a41b7ef020dd750c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=a17af1d4cc76957b66f6b74c4ec9af7dabe457880fbde5125b1715c4b2566a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=565cd7631b32c56aeda820cdfcb95950984fe142b4d6b046e7a8ee7d49f82dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=35fe80d597a64880a0f52fef383a232c1d1e4859133184515eef7b425f999ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=55b0a620237fa57ea56947c607d08457c47a4f0b69f368a1f1190af60eacef9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=b1747f16ace400c2851b5bbd428c6ea2a4b0354f93fe57fdae03d3197b7ac7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=d2aab8eb487988c811844081ffdcc7e8ad49dccfa6dcc0719664cc8dddb4e104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=daae4c06dd8e81e4d0950bc2abb814dc222bbe2ce49e0cd804c76f79b32218e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=c3c7fb2d9f7ecc0ddf327bd1866070c8ca43ce9ca7b817eadfb6279857ed0ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=8b16f0294679d7d0e39b4989c3f519d917615a6ddf8b2cfff11c2a78e2618d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=cb476f5c5ae1317f9f7b243b433f962e87ba64e26860807d0529f6072e13417c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGEGLC2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDoAdMi7DXiNQbZUm0YjYZRALOL4E89e%2F0%2FJrVLsknvtgIgIF2ivj0L7uLNbK8er3PpcnR%2BlCVGCq%2FXpWI7UjlQb%2FYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChpNQMoor%2FXeZNEjyrcAwpyeZW%2FdMT0IIa%2FC0VB6TG4jLBFxbAJQvJbhKzGnFTCY7R7oK5%2B5E0iWmD%2FM7YFbatyQb8ecB7iqYV%2FgckaFPE2FYE%2FmdivwZZjl1LMSYPNXY5ITAlBJvCJl3KqroAaPMQAMDip2bAZYf7T3Yx4DGrLtScfBbKv%2BHgsX9bPTIOOBB%2BjGGm3BWzDHrV6fzHelX3q5uCMsupEp4sivPV0DVm3%2B46SYzeB1J6z%2FmUR5wk7O5gXmunmEctsWsW7iWhRKUSuGInTn8BrIMdOD%2BumlHo%2FO%2BTH5meBUMwapNBA%2BSjvaNCrdl%2F9TC9nXp%2B7gfGvH8sWtHIcLPbp5GhCeQ035ubBDJbNB%2BLZ%2FGiiA%2BqZnWrEg1c9qNrGi99szdNe1MZ9Dzz7nMp6NJPSs82h0wyHaOqRSvjEGMGIgqY8%2B83H9OfHb0lW5ltmdda9WhwrBKjQKgoRLlnnkogX%2B75d%2BO7dcWU%2FIz%2FK25jhxoddyn34xgejjgfi%2FKL34i%2BmzW881yo47mdFYDL40auujynwfV%2FS1R7x7oEHFJA%2FiViPtUJaoI2gSVo5y0gh%2FsuAJsElt9G%2FKHXrve6E2XQ%2Fv3TF19BS9WcCDzzmJH7YxXqoaqMiiZpuWjalfN4sNnlzAicgMNXqzsQGOqUBjPNScmnjz9871ebbIMIw1QJcoCMuVXs3HkKDWcuBWciEyKVAxw8LXY5H%2F%2Bx0LkBOkJDOqm0H8FZu0fnbznRFPeY%2BPSdRX3dfNZeW9ocL88q3t82Npsw9Be8opEPUvA5GnDZG6xRhMPsEyq87zXNXjUHAhJr5PYaMh0%2FnmKN7S2wfGQwDy6xj3KR0GBUGVjIE%2B153oaSbfudpq4%2BddrnaPEi24JLE&X-Amz-Signature=b3407a06c946a4451e0ef754dc0c918bf85a5cb3c53f637f08ee115ce39c734d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
