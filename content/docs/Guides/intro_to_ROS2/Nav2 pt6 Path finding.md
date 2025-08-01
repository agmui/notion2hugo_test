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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=996f44d65d8060df0603c38b0ea19dd80b21e8c8a5be98c088d34e978f2e2a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=3e9afd3adbd49f4583d588d8d9b7cc964771a488f19a61ef14d0041684699512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=ea32b4f36c83d481286c172d7641e1e9716bacb780136cbb075cb9569ed758a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=1896fd545d83e07af4c13273b6b7a8b2969c6df0561d9ac7f43120f72d8c3d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=e16d9907f661788a30332edd823b89d322048cbe7a9ed5cb7f888db9288bd37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=a95e2f6c1c1c10c911aceb2db78240a4482c081fb81679d7c3c068b1d2ff7333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=28733eda64f8cbcec59c90c60d44240ed276c1f0707e6a461bd3333e5b5cec57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=3fb94a0589a3fb3c03930bd9464ac237f90e5ab6378cd9e06c305dc8cbcd1e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=0ebe58aacf5827c877dd46beea05258f7d840a7ce72159b75a05c7e845ce7033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=9bba5125c634bf5c40b8171d8e16b0fd817aaad80b4a3b202e68efeb6300a0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=2e9bc6cab61140c86b56beb2251b4c5d57adeff8c1c9a499505e9a99589b5929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=89d94362fb7e4024b3999f1414be92c000ab4e1a25d34be91f4436bdfd8a3cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SR72H3E%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7Ltgm%2FYmO7flx0vhTTkxC0ETiqd7B2BWAfu0%2FmIBrHAiEAgeLuJGGjtPvvGqhFpIgeIR1%2Bfs1zhK%2FEx9gl7WMn730qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmW2Hu03m7QPe%2BVUyrcA8fA%2BK7XMGwxhTOMl6GZwpv8aAq7bwd6GAE%2FgPGhI6eQ%2BRWgNW4XrYKRcDnZC1xjjHey5tjIHssC4CR87hLztb8A6VrwBCOQQfLNKAngOT3AZAblUAS%2BtVOg9qekC9OqWwmzBoZxChLzQ8ZJAjq2YcuJSEsRug6fel8iUTPI12tA9Rl0swYKY3RVHE21tAfwWZQB37vM4Cd0wIUv7FuZ1IEm2J9wXXxRJ9PoL%2BfT3j2vLHykIDF8tWcBpO1Ym1xBopB9AsYksYKxZ1d9r8oytrfuRkAPsmFxZ4iO5sN0BdPthse8za4lwOwrvb3gjrhZuW0XcK0jF25VsnaAhSdbetB7IVZ2TwNf0Yu5M7Ykk6VjfnhchnkLvMDIeL9WPSob1%2FeGaU%2BCZX266Cw9bTKHdlFN291GXG0huqHgsYHDAf6J1B5nB%2BNgoqXSWL%2BxcTmTT200lF1CySCVsKB%2BGn06QRY8R1jvpxSVoQ0ullUZ%2B7Cfb7Fbfe9lCI6xfiYr4nPMf%2F90wUhBxdb5vUhMA%2BQttH4qFOntzxT%2FwM%2BboUwSuAhrbFx3%2Fln3vognhvIexdUX6mjC%2FREzZoM%2FMGfS5OqHgu%2FC0pR5qCsc7ThD4cQfhKmvHkhoYN25BsZbwF%2BcMNLAscQGOqUBVTi7TtvDJrGjraehm23igvicTF2FE7YLVd5N%2BK8x7q0hD4Pcmf6FLTsDjAMDSMdMSkH963HHIWnXX%2BCTc9%2Fk1KEGqmQGom9ZhTQ%2BQcUFxxxaB98XgD3rdYoKflHOlnKJaUaNkwhH%2FEs81l%2BK0693OiK9gXWsqwoejdi2ukedVStNdP7xrO2uVgjEc%2FvGjZOvaN7HBuptbjnCvwD6oc3QPeFYMwCQ&X-Amz-Signature=7bd34c8b5167f629fb0ed61d59a80e29f36c25a9b2db374b4acc8dcd964b140a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
