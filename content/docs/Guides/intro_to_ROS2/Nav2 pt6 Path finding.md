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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=40efe81f1ff2363a3f5de11aca6715d349bae62c155e46fbebd5ec7d2367972f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=92f0e5bdeace99c4b428950b425fe9e41e450aceb0e1fd7dc9495ba72ca6e285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=54682dc5f6f5d2a273cf5a72aa19797ff52c38ce893de77467803e83ca273d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=ad4edc72d3c393defc1c1352fa4c78c46a3c6de48483596bfeace9b4830390ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=77b6778eefe7675edf92346e4c2038d8b68a7ba5edf9832d6db442b2e93bf224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=3d9775fbdffccd25e8a9aea23f3c39ea9ade1db21d6a50c893b2555ab1b364a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=284606bbc3f342a92ccbf81f8dd890493ec76af7c96f72c033dc8b8c667de9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=b1b43d970d3289e903cf80a690b371e3b13408101aa930551bd8bc09061d0ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=85f714693d2a7d79a58244e863001210499427d00df13786fe9089b92146087b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=21f7d4d60541a2e631835820efbddc1f7059204d68c230345c3d64f21793e427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=5f6f603bb412b11ede8b588e68236877bee2747b775880a75d16ea2941b8c612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=f54b6d152cc2eaca7bc587e3cb16820a0cf7cd12c158a7f59a586b416d534a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMXCTW7J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDUEFmx9mvTxhTkCojxMO4UKEzOwCfRk%2BJbvFHqBExvQwIgLSlV2cC3O5sQK9DropykET22CwNN%2F%2FhK0OXVTm8E0qMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQ5ws0mZjq6RbLJsCrcA5DHbUMB5riXvT3coQEPHIyjfm8cICaXDBfLWiUFxl3LHc7%2BL4yBhWmneYmclQpz0bvUfpKiW0uJrrvje3FFzwvVT0sWrfWddg7zTqtqXRAqwwQmWk3EUl9CoaNLxmsb84itG6SlRBEDpxobonEM2zT9FbOVqU%2BZDlUQs4TX%2BIyFUVFq%2BOhDmXXYEAj7CBKDj1q6q32FR4c59hKI3u9X5s8De0n1PT1RZUu8%2F4oYsA3fXOpxBaRsI8TFgQISKgMUKSrHjWslD0ZIHZ9Zizn7vSeMyKphoJqXJ04sNw3LHI%2Bl15ytepAbACH3pQtCFMZxSDtCODMCv64xkAsN6fhaHtExcgI8%2FXgpSoXCz7xZ6wBhTzceWiTGbOZzJhuEwpjS7q2SVQFhUGIIvyfjWJXZqqSio9VlKdmZbFbGLygGj0G3RXiYpN4eBfqaH31ZOd%2Bx6A5bj3mwEtMKWSik8wTG%2FTQgNahsulxnvDxFJcZsHEwbZGgLyO1AdDRr3KwnKGuJedUn%2FiY1oMLG6HeswUg1qnDfmWOibGENcuwckV10Pk%2FxVVsCuWFL9AB2QpXa%2BV9sOw4B5a1QFmPg0XS0QTkmF38QwQxL4KwSE13gLj9lkPGst1LoPojVuvPi%2Bl%2FHMKfF28QGOqUBKY2%2BGU04%2Boy7RmRKw1nuMN0m1CmvD8o%2BztaRxy6IfXQJS%2BRwlVQd%2FhvJnceYE3M%2B%2Fr4Uvo846hFiiNnL5X3Ot3xADoKY9Ts21ILXicn40dF%2B7SdAl208Q3Spcg%2FyZLyKVhqiDlHCtDwAEdygHHEOyAf17IfStW8%2FCTnsFVrr8IrGh9qV%2FCQoEE5PfZ9ie310qhDkIoMdpOevZCBZ6lPFftWGjvkP&X-Amz-Signature=31237e94af682448a1eea14235fb60e8b5d725e8866e4404b3708680fe70c6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
