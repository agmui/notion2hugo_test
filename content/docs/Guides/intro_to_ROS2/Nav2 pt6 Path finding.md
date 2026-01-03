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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=32ff8cf8de6b427154cafaf0258d6fb3c4d8bb5edd3653a75aa4bdfb9ce705ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=4c28d587442365d78547985bf3914d8fc9434744e52af40e6f6ba4256fad2105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=2ac9fd038bff4b1535a93d73548b0520c14a5a7950d6c2623c2b03b07d288027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=d9f867c24c8b60114ddf3c23f3bd9d2a12b08de5778eec37578c1dfc0bcb22f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=4bd3b0b35de8c59d03da874814d613d629fbdc9906c421392f4536f10787f645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=091a1031847a01c96c35a1854cb27552faf2fdd067de8507e24419794904000c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=bb31a88d82fd539b979fa61beb4b75a59fbb59660b92f06339e7cce2fbf2123f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=d948567abad5cbfea3e1f4dda8723c5a2c09abfa55df3b74a1f8e0f0265192a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=e140738f4e4f155b072c0b3f0454f8dd23042140f27e97366b01d912b08f6fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=280f3eaa1f5c45eac1d65c816d954fd0a394cb556e5abbe58d5c3dd170ce035d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=544c11d05b814d535790081f713f1d27f9bf12ba2cc27c8bdd344a4cc93e6700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=37c929eb1b67d4261b7b084d871c053d1b41d4f1b387ae2ded569b61ec8bef75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2G4CK%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAoVyexnxjrFCpDxADVhAVPdUiuZyw040If0Oh8bp9zfAiB7eqI1wU44Sa59N1vx%2BIjdy9pWu%2BJlAbCHdIhSh6u1Dyr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM6vu6qbSuo%2BVzoR2KKtwD13RAnXmdHFqBKSSY%2FKRRGlrJ4PxXTR%2FKX%2FFuDVpL0yGwbP7u8Z5oSeYH42gfzhZV%2FdyMdTV3rUZmZxT1ppQVH2X4FhjiGZZkyzDNSoQehDR%2BvHMqz0IkyOfInVhtsWcBU9S3iOteRKlZj2XhPtTxr3cfCrD4jPDhyUWp8n%2F7CQjUJ6muQdeoKCXQrFxWY1t%2BzWkXr6IhGyEMpErnK6dv%2B5439sBGWGmDFrSyEuS7RGbaYd5fmjTYPCzBibr3D3yo0PSgNc5It3UYOgMrp0cOjIh%2BqAWo2oaeaRdipPF745U92xvbfbSFGOr2EdwU82ZYv9jOikhyy2vkNhq1UwYkoXkXx96ddUxskZTIvcr97xOVPeCEYUNZa%2FyxA9IPkNz3z6gx%2BI1QSZAN8aAq4PeLfxvYDDiF0o7wedWqhdkG6ijpR%2FlU0r4ywgyOwl4JSNb%2BH%2BkkpBR9CAAEpw0Fb%2FUDR4oh%2Bx7Qj4%2B%2BiUVMD%2Bo%2FcwPPMZGnF3Sm1FDxkgg7wjLQeWOl5eJnfizFDJ9WaDIzNKIeWI4pZvq2lHQCxNQNYUgY7IXslz3zs86moc8V2JGtZf0RVOLcr8UYU1vK9IdX1fJneUBQUZPDbR3FO7VvZCqd7ZiJ7FWB8kn5jcswjsrgygY6pgGC13pan38WEshGDkjFJnPWGKph63Y9Gkd2OZSghn5dj5bsS3YUlBhkAtW32M3cpZaNTPwd5UcsMlQ5p9DFwHw1pBPmEp1%2BsspvlN1eRcW3xqIjxx%2FY9MKCLJN9j4ZrUFCpGn0e9WYsrXoXs3qwBOJ%2FcOxzqhSB7mZncHBgmhNAe0zCu%2B0w4aCffiyg05%2FHbH8j1apqSd86zWYZ7shevIZLNqCKht31&X-Amz-Signature=9db1eeb4bb192bcc7a9b13d9d308cfb99a3692fd5cc857f8a5548ba1ec6bc2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
