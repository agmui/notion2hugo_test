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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=1579267b0e86958f9f84ca80ffa4a8e9439f4102b130f835e725412717c984e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=a3c32b76be93b8f80ffab9e2527433cc31b9db60aa863045bf55e744d9197b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=06e682881103f063b928fa98cd9718baad4f62eb31d5995bb66de1cd9c2e6898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=faed7f501037e9d6278dc77da55f2dca1f1c982cb6f576c1904ac2909b172592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=4dfef516aa8562e1130bd657ea1cd70640853c597aeb706f6957370de7f576d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=93059e91687ae26acbb66240bcefcc2f99bbb85e86d399265e9becf684c4f627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=3173ce4bcd9163a7452c36efe6572c12a2ce68b641218d8731c5a1dd13607ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=a72ffd6075523d854b53374327e2d6f2935286af9a751f20206d56250f9239e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=3447f59baf711a44a6790e7b18da0dfe6dd71f9f29c4a1b00275c180cfbd5824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=42a8e59e18fed3c1d128bf39a5577eeb98c92e44b78cdd62ee7b228514919d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=77070c41c41bcc49b6d2bdd1adbe99b7d2da54a74afa64c45d139c288edfb2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=98f7238f6e49aa02beb72ffbcb517a653e36d13fed2aa953b27d55f1c9d3a4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL3KC7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSlg8rA2YisCP2AqB%2B4IKUITQSwS%2FsfZjPH%2FC7IjK3UAiEA5CDDW8Ntr%2BF4bd%2F%2FxcOQTU28SbPIIa98c1jFcWt0Pvkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDJL3NMO3U9yqCGdCvyrcAybi1Y2Lm25l2E2chkdiir%2BVvX6bVzV5nQRXmdGiAD%2FEYQh2H8r2cmVn%2BSbnpKR1DIr4yjgHiqnzSHskkSmnQDpQON1K026Ag1tqfg0fxkjWDOE6Hjn0iRYXKihnWrhXx7nnS%2FuAyEaOVv3ysUDYzfK99rQiIkmjPpsPK%2FHOFGa9AZwGna%2B3GvfRStrJpZs3XqrmxgEdq9cxeqR88dAiOXqjZ%2BEUyApdcy9W5gvDbcBuPOF4YThrMfPp6HVaEs4tkxGTOQrA2J2aWE9P3C1K%2FAcEN0tcIdftx4hNQlgsfxcm%2BfNqWSMTd%2FIYmapGUSqUqQGqGd6MDTqk05mSTjGwl7ZxcYfJXu9GNqXZ4yBlfQNoNtVWV5KDyG4EnJOStVes9I4TG3gM0xsPVrDlzVrQ4W2Lp1j7Y5htofYsfULWSZJ5nAT1CFTvPDhCPzGxWcBCZiURsCZbr3ON5EUPlZ0hp7Lt8Xl0q0%2BCAKl%2BT6GGLvnYYUFWaYP4G53Qhliz0GPqqgk9mS56mt%2F3JvxLp5EvsEX2bf545LwvYc9rPXraT%2BCtdFTC%2FsCAxLhF3XjFYnjMTB25pOwAtVFAGBVc149WUZ6OTJ7OGrmM0rqdiTbc3ed%2FR3hpM%2FnpNF%2BjpjCMMMyMuMQGOqUBtEWqbJS2ajWm3WtBHZBH1uAes16F1oduMc5wh4usXXznwZyi9tzB7Ci5sMEX1F%2B9c1giR6Nh7FBeLH2%2FO1R08L46uR0%2FwwKAJAoaBEmtwYKcEeilN4urJpz87spt3vCQz2yoPkU1KQAb15Srt99SLOPhlv%2Bu3VuXCsz%2BxCotc89BAYY1ddxJ2qIZNTD8vygLejZtS86K8TPsWnLhlUZ7%2BXuUy8gE&X-Amz-Signature=f0a90965924f163f4910d0b688115cef3b800b6b407e1f763ba5ed8699193bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
