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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=ff298fa7fccb9f8cd3d48cb983ce41923a9509bbc2b6e987d774570f424c67b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=29ae1013fea900a8f3a20ccf5769f4f11124792bd118a520f6d0ba9179d4f0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=4a032587795d180492e19dd48cc4836a08db6dacd1f61acfb9db5a3c5cc753b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=a9acb18dfa693567448ba2421078c99c1c53c58dfd8a031156098f2e6139c8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=7c286228be6521bc33bfb85ced85891b5583c4a6d28a715c47382ac7d83107ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=62682187a69e0d64909d7095c76c23389005946e265c2522dea6a3c8b12d0850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=203d01088b38ba2876a7eb72aedcbf09ad3472716b4e119d7ffcb9de235a2344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=1680d5ad05c655ed020584421531b4d1641f616f0f98b6d82cd2a1343a52a03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=8e18beee78801f96bcd012adad88107068684a7bb29ffeb956393e65f80182d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=b32f6c7c2455b7e5d48507a642842b5985e40190d8774ae22c9d7b9fd23374ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=6c946340dfe25481a2bdc5baccf23bef8480b85a81dc23184f45d75175e4f8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=e1c1dee3e2c54b6c5924fade870442faf54c1a3b79ed6cdee25a391e2e697744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYILBN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDzUCQTrk5VwVHstdrxePR8oj747zdeGQph9xwDfCXTjgIgVZ%2B1KewQT4cFg5SkJV07rfiVVAJ%2BLJWGDM%2FshVtz%2FKcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDNn2Ju6zys8XSQs6LSrcAwrh4cgtnvy2IdFQScCfErtz2y%2BprVJwX8QW2UIMPSNL4RUu%2FC%2FLXVCsomgA3hmCFPsLGso65ayDOJcqVx2aHf7B5UVRYhwcYDob4JWhzOY9kFfF5Bf81GQKSsfNxKLjrhC6GYtGNy2oBiKGGojxuhg69QCjFfCCnx5gEp1Yagxe58L7Fnw3nwNGIPYVPKBxgbNlK0qPpI4KVPsrRaBf%2F%2BtP7KUa6XJnYYGAp69%2FnajGloY4d9A6jE%2BBqdsu1089ofO6TppfpKGIW4gHSdgDXtVYo0ewzUEaTKFj4RKD3NtGYXi782ouVt15gGk9ESYwBQu2E42s8NpBLXyEzpaEqT5LoyhkC1gA9LcLpWPJ2KuUp1PwJKyxJzxKVZoT14e30lIM3GMQblj1fECZ%2Fu4HTnbHCYLg2CPnHeWNNHmvtEJ9%2BUUV0lGfF9mVXDnBm%2B5SvbiU7wfjgoDm2gnErr8gU2SZKHBaVpdV4KuOyvTpohEofWEe7hM3hjy5ACeF0UxD4Gc4mwQcCCGp4qYXPLWnT0Z%2FPU7NyOUD%2B0Xt%2FIGeUVrXH0fswA4I4vBPdybd8ePKeN8szm2tIUwu0The0WmE6OPokDkSFyuQfbXzx5J0EderFhVwSv8M199e%2Bqn5MK%2BM%2BcQGOqUBlJpuWkk%2FpYI284wOJFEOc96KMEehR6SImRvOa46soo9t1PffCVJtzE2JC1J4oFfvQfArPURD1Yc%2FiQuNskZvwfK3oxhTx7xyjIceXpKOPsoAIY%2B4o9PVXUWmrwK8MqbYymhQNgEbaGKcTyMlTW591tWwULMYccxvveCOtlsf004zw%2BcjPZ%2BAfXOY51bVNq0ol1n6CU6rBWNx%2Bc8o%2FyaYNa49bWoT&X-Amz-Signature=fe653fc1ce4593cc86dba099707637f003cf43c7c4cb03c3e148ef62f3cfd4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
