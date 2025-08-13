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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=bab3cbed89107e3670b8ada9442be981e2fb95d8c20891bf2bdc2f3ddf0d0c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=4df808ce743e96590f9fb1777b1f17e109b0d35e5de22d6b519a07203df52fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=1f3e25346a73a7eacb0453b5cef43bacb8b571ee8e289eee6cca2b4a7b4a1b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=183d541c1bb5d16095f1654f5b76ce0cfa03aec705719c3876143db6532eced9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=db227039bac16c34cc4e290e78bdce2f04de32e7046537c4ea346d7be0745d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=21373200a542267a9a35681f68330b0bf6fa99f1d392e2bcc683558247339bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=9f57c5c0fbf08c380eea69acccb6e4b328cd5cbe60fd43a2b7113d9cb9fcb2ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=bbf999f6361511bf17675b1c975f64f7e4981ba69c60eda309a5e57fa1f86e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=4651eeb2fd0aa7d8f3cce482d9efb6ab43311e212be55c671477cf7555512e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=bd5fa6c37f372097e04c24be1bad57b9e03fd84027b90a603221cdc34c9c495a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=ad3a340ead512866eb55e2d1a67bb2246a1cc278795f2c0c75d853606d24f976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=09dfe540247fb1c21fc921c88128f404bf1529ba099ef21e565e52bd007ebfef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3S4A5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTNCg%2BjytZCHIwooj3vE4qwggU5sHkH3nQjodmpZuyoAiAXPxalkKClzhQQe6vtIYuopVkjTJ2lfdVsxroGLU5a8Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMDkcGffxCZFBJ7JQzKtwDfjLBurSJ37hB3hwzJracngXzy0Nh8lndpU2MmfK9LA7OjvUtnkOLw%2Butag8mONx2zvY29HyCIG8JZpNyyN5%2BsNuZ3nKIYlUfo0Lr1T7jgKkMlk1R%2FbvztyHQxiX6eIkgImpJl6c9Y6luWamNWOp1mK2umL%2F%2FmL3MzNyzgT95ZPl51dsFKCpdv3nD52U0Oacf5p3gVZD228B1aqS08XRaEV8VABENmmMH09d94QUtj5ZoF7mgIVZdSeCcS1YQ%2FSMsJKUFXzxBd1Vac21AP7qFKXXSUR%2BET%2FgnbVfpW8PDh2mTs%2BxbyvpGpWvcfsgDhFHYq%2FgOEtMqXKIS%2Fg15C9otOoqeoIki6kk%2F18FnCrWJeagCGpjgvgHD%2F0I5yg%2BR%2FhQzyt%2Ba1aQ2IcQZkaTlyXOwQ7oQcbt6enbFT2NfykAQazIjIrvCuSItbh2foLCvBqoY%2Fo6HVw9S17mhsfbToUdctq44llc0F1oAIpvjgyjlMLjQ61U4JVYoPesURMP1kkYAZV59ZwyV8Ew3HLEMNO6fiTF2nD2ZHj%2FfBuBlYY1yBdsbNPiGcRkRR8OoBM2ykz8eNnIkoBqz8F0z0GMgswshyTREkeVmeOJzafkkBJ4qxs1jJxabUXsJv6jrYtgwyI%2F0xAY6pgHchg6k2hvU1BKuU83zLFo%2BvjQ40lOkw%2Bq9GAwAgmG%2BQ6%2BdGQm664z5yJns9Tv4F9WG2DTb6i4tzLDOvU%2FdyoOUI%2BAhG1bj4noZ63%2F7tYdd5VRVOqXaeT9aK9wwZ2QphOc1M3OaSqB%2FbNtEzYtPQ7VreG%2BMj1u6lZ8SI1l5OZJzCeKS%2B%2FkIGC%2BRvT5d76KSglJ7Fc2XFA0emeszNsltKl%2FlcPf0coU6&X-Amz-Signature=9b05c11b871e4d959aea2aad6299da0256ebff7232615c9417049bc1c6152073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
