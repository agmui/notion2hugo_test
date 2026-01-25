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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=f051392e5c2b86f5f18e5c87060516505b430abb92cb58cd298fa5e712c9e136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=2e857131dbbe4c05791df533a1a8b51e56ed621b90a7aa13e39ae2b7ca83da27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=26037ebf60eebb6f2a642c7eaf3b3c7b4b6582a64704717cbe04fec5bd903ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=ecbd4682784569f4db99425d9eebdae1d66ca3baa6e492ab80246b262de1e4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=c1b377255ac4d92334f8828a4780f8e37254a9e555604f1efabc0b1f770d24a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=f20ac1c7c547d435ba9be378ccd5cd29640032edda244e60f3d93df481d43cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=e0f60ef1ed6c60f1af574ae1ae6b0fc5bcb82f3850906e1fe25effb96a77a0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=38641b0bf97d699f2415e45099262c5791da181d05b927145f3ccd3ee25ae721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=86cfc38165a0a1fd46fa8dab46b55ea0a8ff6fce18abfd16374df8cb0a5f4059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=b3f92442a7e9f9e4c04df36a14fa31f57afdeb3f5511382c9f207231fff0ebd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=961add4167161f627067a4d164f0b6b6260958daeeaaed37380141d688d9ab3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=43b3fcdcf50805d2ccb4c6b808b721afc26a286aca85b1c2e184636bb1a291a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4ASUDY%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID9nh%2FGiBEusA1biKDPeDUqTohN4oRVfl05dHG3%2FIpAiAiEAyGwl4ggBJrlnA4qScs0tbj1uxvDiGDJcYSEytfYHdX0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHDbYLGBnTvSJhFrByrcAwzYHAvUAJKilu%2B9zHHmHqWBtQe7um1PXEJXPTyEFE6wPe1lO0NUV4sJs%2FVkscnl17lJC%2B%2BB7h75Zqh1k%2FhYwUcBAOTuePHkHq2vjl9%2F34e2L5XDvcLhO4i%2F%2FC8iGKm9RpRfruwk0Td2pVhge4DqisO7%2BZFPSlLxj3GEnNac%2Bo%2FMbQJCt0%2BKWgCno6jCowHa3cieZznywSTJuzlL3hyqsWOoeIrHpmUWBHrKnSCrsdeyxuW4ZkR786Y6u%2FwQ0%2FrWpbP5I%2BE2HqoELf6Oqdj6CrxeMCTJUUdWRC96MJhy%2F4rD3rTp5tWYXVZyxLAtC1RVjbHXVWZa0jjd8tIiZ64aQcrcsOT1gx8QQBLVsOQYp0BBzepq3GAjEfPtayouKVJNiMpRwLrS4VS9%2BPW8661r9pjJCccIAFWalrip%2F9KE68PKylOjDxWcb3wUxx9Rxi29etPveS75XmY%2FHohZjPpVHufWpiqBhNumJqLoJgFLCFbS0QG7dmOvwjuoYzKiDKXHQ0J%2BmcrvPKYCu9lUkqcF%2BkKyaDIryjQYTgfkQwlmS4klbh1MCN0JCdDzg98BsjDc6C%2B2tm1h2Z3hX%2Ft0vl34P3pje85T0WLRvMrIh5Pv33trXorLvOueGDT3wC%2BrMOPu1csGOqUBmhvpW8%2BMu4cllCkv%2FoLyaLhwTZ9oAt%2Bsbe4yf9gYhXfEZ7QJlEoU6Ez2scvR97dt32gCXh9bOw7A4KvDobreeIHD9%2BNFKgiJe8yKy%2FVxZdBE251qiDMppB0wBj2EDwTFHAmFhXAPccOMpQ6Z9vj6%2Bgp7GoRBBe0EfZSkgeFhG7xQ%2Fbs9TAuV0Fj4146F0D4cSnwXwoQp7wv%2BpYOBBUG4H3nhMTg1&X-Amz-Signature=16c961ac94e8dd407a53540e420e5fb1f2af3f9a48ef4ff28b7d85ad2d437c83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
