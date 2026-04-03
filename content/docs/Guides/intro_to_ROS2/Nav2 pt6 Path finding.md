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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=9cdc757f1a012e1908890eec1e5acc8108cdfda655100f0c0f9cfef1c9578a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=ed7ec5fb9f1771cd88f9ad6ae3df421ad1742cfe807a74b4bb76919b2aa4d791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=39015a7b95c4563cef0de0785c42d888e01a26e08dac575bb70bd48da12f3133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=e4d9de8375e461360f85294a5c04034ec5010ab0ba8559720491f563545870d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=9da04f3421607d14e120fc9f233c4c3694f386a2a32d510f510384a673d70a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=be224f74e92911702703e8f3ff81e559cf502b75ddf6d3d5410344a2a8bdabde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=c3481985124cf35d785311951dda6cbb88079ae669dba9242a2eea30b49655e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=fc0564cde7dbc23c73c9915c331dd3299c4cabc315417e529e7c458e06ee3f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=1870feb7009e0376288ba68e0b1f77820da442dd53353110d1dac945665115f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=7ef5903819788fb8a103152395e6d995bd68f6c1b6d01d07252aa34e36e3fa38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=c5eb94629122f878f95d9f491d8de07c72eb0ff7f04b79ad6b27155c35ca181e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=08a9b5e1517660a7384b8275e8a1da6775bea8b50d4960dd16f13575ba925ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USQP4OUF%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuKI25cLalHvqiq0Sk2nXvKdu1lNZbXGgq5FEiwi02BAiB%2BkOtSNuParsnlhf2ibuPE3mWqwutzsF1E8cFbmFV5GCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2gnVzYOZgVTAV6obKtwDPCFWD1UcGKfPbOJiuVqnR8DDyLGgi3ZZ80r7hP5l0PX8jV3dbYok%2B4geWU3T9I4noOA9oiXmceCU3n1GKmD7vseYiHBhpp8t242BctgZJGuurY9qNuBuY6qN67Pat%2Bq9Ej6f32tVoOffXbJhNpRU%2BSKyCfjYAyLmGHv4LVGIgiLbfAAUvnoWTbqiOx7f1SHnRXwULRVIhQrZiviz1%2B4grHGbz28LrPcIOIt2hyS5P7Ian88Dch%2BCFRfgyB6%2BGfiz%2FY9WCngaMga07nOxPsXBZ1yGFMojschGZ5rPQ1hngmXgG1MUpixEOmlIVDSHBaoVauBvIIX1oTl8RUaakdUO%2FUrV1bbZ98jKdAvhZbu8tjU6VMKxUL4UD08kz10Z05wpj%2BWKBShyvtBgcBu3nbej%2Fcs5fuVhMS%2BEDTdX6oO7dYQndj4%2FhlgVM%2ByXHrVtYN3%2F16kNQDdfgoEVaQcIFeDlAVTdzWDdYLKR3JGubUL9v7Ug00lGyxdMJeBXLXY%2FM7GrGnxdjjdjOeDRxUdk99EUirTAQasJk%2FXatNb6y7V8X4Sh8waeoHmFKmX7BrdmVo%2FQ570cHlttyDjdRe%2FdRlUuEJCrwenGkgtMCZeSqqI7eUTYAVI5Y4SkK8jQmF0wici7zgY6pgEbIgnwKNVZjD4Ww6ZyBc9XxblVAFb8e%2FirbiD1K2%2FdJ%2FDaKhPtRFVWN5Rnx1tgJvzrGmiXHQMIPMujiktRCAmCLQKBJ2XeCyOpx0hrcc22Nil2%2By2%2FnQyTvgL%2B2%2B2aRLOzCf2sZ3rJtriQhD10a4ebP327G5EaCbOlVIQN9br073QgneeUJmwq%2Bybz5YHU8EOO%2BoVoPHRCKySFQha3HiWoOwvYoHJ7&X-Amz-Signature=c968e81d3b40c3e68c2d953aba4c64f0ed45b229e9c0fa92c0578aa1fea6a000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
