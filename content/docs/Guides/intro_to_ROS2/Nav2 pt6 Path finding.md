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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=ec2767fe04e6591010bd0cb06449ecd3f6c716ccdeedd0e5607a17a5297c6c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=b207f19e4d42e040850a15c4317c732acfd1cb45fac3ab9fcf27eda786dcb8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=5b6223ec9cdd9e4516caa1bc58ff6d0b203da94bb8887df94d6b5bd07ce85d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=26d472458bb5a4f1a7e81593f8d020d04ef9e368543603dc0812859439c3ebcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=2851bfefbbe434cb7f82a2ea7a707159b64e443d600c8fb51181f941ca1cac64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=0235592ef329b312692c145124ac7a6056e27463a3dc1d2d6568e2eef3c2842a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=12d7f6a9885c361d534330dc4e5d0ea7f0d14fb4713621f1bd0bb85d42e5248d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=3b995929ecd82b5195a8b509380122741b100e0c8a6a5043d117b595afe7c969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=d91f37b8c4c7b3e03f6972db768fbd76ba7ab90bd66db1569d0258af3d0e624c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=dfcb499b5fe2b4d56ce7e1262b8ed84e40bee649af86fd6ecbccd030ee6d1183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=6f4856a0e48b9fe444be212f2ad857143f52534c82992f222f34a14607ed2dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=0fd81e938e9652a462f6491205d47221504a456976fd5b665f47bc4fc4417524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGICUXNB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCJpZbAyo1PMQ5y6rfgDD7wU4Tw29UKVpkgwXtzjEHJBQIhANDqWRxHZIhGmPVXabxLY8JYEkovdJNE8TEi42w%2FLCXaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzYF98kla7RLeFv1fsq3AM%2FgXk93021Pisu7u84daUFEqN7ypHgn8jRgFirN7sA%2BrFLJgKbxH%2BCpcActTo2ZGSmeR%2BfxY2wmwExtRrTk6BElieCtF%2FLMEt6JIEP6dO7zZZTVvQ63%2Fpewvk9zc%2BFnYoNpfnXdI%2FB9Qkp3cW7dI%2BcmELPuhaINqYBADBNYRI%2BVooV4fvopRf5WQBSXOWBoS9l8CnUXqHJBpqnOHjRto3LDULo9DXe%2FUt1ukW4u5kfzuxwOP7%2BpEezYycEdqEADXOxbBFvIDQqCACzEAiJhEYGjE8Jgh7X6XN9Whrn5D11EWtWQkrRnxcTCMhIQRJAVnn3WYVXH%2BkxI02LjdUl502SlIKQx9p3oNSDeuniKb6bvAZwztFl6MSHF1K5tgO87RpTi2ESPtcydf1NQX30sphCSHM9kC65UnDgoECIrtuN0M7G2u781IJLF0Jacds35LSXCuJE9sg2jW7QU9EVbeoyrdbnxX%2FyD5yZ9zWZoe%2FHXHvN8yZbB9%2BpInWWJb5DhGJrHGqbi7vz6o6UxlKsWMwUy%2BOBCJkSgZAUNDkIvlFpoKo7JiGIocbIobelMgEV8rXOCPbWdko6shMAe4dFA6bOY8E4whFdl1VvHaYZN9WnhAjjjAO3EZFWRVC2SDDI2v3EBjqkAf5WoStAmFVHPQhxOZcKeX0eDYqqFCqBuBVVd4Gejz3T3l5Do8t0w0SVShn8XbgNhtSf0RHDufnvxMI1Qf50onrcF0zIgJCal8ufNZF%2Fx2q63Nhnu7TeB4ps5fo%2BGKsWb0dwI4ZWCDjOTcnfdDMVk%2BKQEgT%2FCT8ZZZJu3dDUoL9ctEHXAK43aNQb00IAwymdZe55b%2FCxoIhDubJ4twZD1JnksAWg&X-Amz-Signature=3bfd2a063a6c89bdcf22c1a2043a789cdff923180931fb959ba3c488917e9b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
