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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=4629574333f51e432409a3bdc7851e43989eed53a2dd547a61f5231a923e7438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=759aff2f6682025903e525b77b1bbdbe0b6e08e7bddcf8974d502ed948a55ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=c48e61fc3c0f1b53cd982ab4149d5f263374116eff4166336d7fa6420b468b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=26093dcb65c1d346469e1b2aaa1f9e3e96691b5cbf51809e2d00bb92bfb765f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=0f860f4df61f5e17d764b7e3ee2abe3d7da5259871dfdb5e675cec93a08733a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=590a56fd34b3db685863d73517b777bf8be736bbef64747caa4b80189bbcc675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=d3a9b00c47ef30903546c84ea26479969844e044529a0d06fb1f50b277ec432e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=c863523e64b771b38c47e4afa3c7a66b668d6c88223bbc4df05f32582bcd0dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=171cc6481e6b762f98ffcc6a1bef30b1ce4db0f312342545198097abb2dda573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=fbecf3aa68069852bf40b2b903cf14ff21255997096b170229f25b7ce3e28801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=cc7a4b47413c46105f2ebeea171784c5b7cee207dcc97001a5a5b560eb1ba4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=02b43aad5716e4134fe0bcd0940498648f348b474c85a525a48f146917d86839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCRUKF2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwAM6GbNrc4oUmfXk4VOg8CubmKRULCPdjXHxN2bPtkAiEAlYAMkZlszBfoQo7TNs%2FS7CRTaYglJK8PhCMj%2BFN5nyEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa2wxKji%2Fjdr4wBmCrcA0Uq3V%2BaL70zczExjo335HgomRcfyPD0qhLXscveSFJWXwr9MB0qIPPHtU93LNCCBb8Nk%2BWysbdoxnDVbu3GVqpe19EhDv%2Bq%2BNeJdXm67JJPrFHlr2MaUtGF6xQpsuKES4OAikvQH0QdTGqc4rhgS6wqMSO8BxDnTZn6VU7rSJe8fHyAfnnup9LZ%2FtYnpHsTS2cfqqwVIoZ8R1tFbIir5H6SwFj40EXU5rC%2F8EXZU1j76Y%2FZVlPtv6qvYd7dpJs88xJg7%2Bp6l%2FGBih36wSk%2BILXP98Sy66q24lKg5DHJT%2BC09egMOyuJevlTKy8kChFzFLi5MWzP0i0mIaqx%2FghLmV2I1OJ4FNbWt6GpfMYD1XhbMS1L7iIh5a6Gx3%2FLzbH6Qr1N1EMSwrzz0gtqy5ZvDnTbTk3B8SgTBr%2BwSNJGXLVSwRHsXHUFrdT73Hdk8VbvtY%2FOHvJeWHNOwq1HzOrPVAT0xQok7M4xVs8fcub2EpIfTCzKAhyP4ZHNQseMJ%2BAI2GQcFnKuk5eC%2FmhQsz4M0jeoJ7VtFV%2BLa52tlng2MayCIt%2Fz6L6H7TDqm1JuQayJHA5cEq5GHTRaGwMj%2FJVHCsgTwIgONpWwHYXGOfXkQ9%2F1s%2BL91Zqo298OcxdhMJyP%2B8cGOqUBwP2QASCzYH2wOJSEtHEIX05XwTgLX3o6Uq6tu6UHMVS16PlNWElO2%2Fni2Gs8c2Wj9S%2BLXqSu6uiYHOx1nbgpl8X7elAYOzyAN0dF2bet%2FWW5qZfAyXf1hDFr8fkBuqSyxA%2FOiT%2FHGY5c8jYgTUCweRmIUlcCMjpDqX4y0l68HKsUkX8BGGfRkkff4R7mzoYJPgHIeye1ld4Y8YqMScZWeEhe5R6S&X-Amz-Signature=925f41a889e94fc3a1ed3f9bfd4a78f50022394edb2cc2f71b0c54088be41a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
