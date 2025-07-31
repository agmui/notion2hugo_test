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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=cebd2efa7c237c84819a2cfd9da7e53eb4989f5b4e5153b1b72fc94fdf5a5fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=5c55e847ee654932f91cc6b7f4ce41486b8a5db58d5d70bb666a3da42e8ccdc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=8f5d0d265190b6f93807c7c07b00704ceb6a8381dc9306190f6a343a8154118e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=7a29ba08a96a356a75ba807ea99ab1d398a571817ddf8d883da731f38e7a1180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=fb6d90c999e49022b218c9d210aff9b52dc8d21c0272e874b58e0bc7346ee978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=3f7bccd1bcd23ae6ef678587d97d8673b6cfad869b5146c0e1de902de60db1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=7669e64ebd80ac41e8c7a93afd93b665cdb83c8889ea630b51dc83e9943eaf7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=c2b37d3ec3a72bb181ab2dfcc42f5a5bdbe82e362d57f918b112c2149ec0e211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=11ad0541f275a9da8bd5f344506f717d7f44a619cfc6fdc01903fd4257878ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=441850751421341ef920692d41e6165a687f615a6b82a11f5d11dd3ce1f8eadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=dbdacff2185c4f8d43f370d862bfb04c76037e6dde560e1b44a4dbe6178cc571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=6763e7ddc918eb5a1af1d5756bb91472ce905e6347ec3a0a99e8a8ac221b8dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL7UDXR6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZLXAr3Qd%2FkY%2Fbbxpbhwpq%2Bd34eVBuQAUEgYCHmNOzAAiBHPCp9ytbGZMqQlD4WC6olh5aphqDUxa0Ss8qPOgtGVSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEh36wOuZNw6tQOlKtwDZDazlWQtb14RE85tXcplUaLxd5Igq%2BPD79sIBjIB9xSse07QkuTWsL4bW7WZE2FPNng90uiwDJqh63Z2eMTZ%2BwOqVvQxpJxby1AHBClSGmSKfQ1MxY9600irnn2WbE4DhJ7uM%2B5ek4rM7YhvnHYehzJfwoUOqker7kax5fWBmpl0YG7i3NYHs19rO6c7CckfkgUR5gE735aOZRI0bCINXoEUfATaCIXsnw5IPz%2BtHsDaQm%2BnHdNLJumZU%2FaQDealP2SDtOrkcjMpMTO1vAfaXDsVebBPqErZtGe2q4NQjkRPgYFThVlmnQ5qXSLQuu%2Fg6OhfPoQEcaoRNSxSIYoOOZ0l21rogZEhvDzXcdmZmGT0deEcGbRRqkADg9BW6vHPaURO%2BbBr9%2FkjQYj%2BLFU2I43b3c6Em9Bv%2BPNF7iZIT7x%2BdbNZHBIXPOJp2KtJ3U9nwladpFHBvw6EJO3XxbyZ7GfDasSusWwn9TSKpq1sra7OY3qWcXad%2B8GlZDn6iwKzD4ecMjHuZIfDKQTV9J2lB9HYsMEjffCkKSvcOqicL7JxJX6xwHWbSvxIsp%2BREWHLk58nc9mE52sCqcBtCYqEX22ZPnBhZohTgJtObGEfnlvz5Icd2uQEzqfa6N4w7LiuxAY6pgF7VVUf%2BDPoSSQE9hqTNGHbrganRfOKgfr9UTPVLcqXWN19DUuWPXFnMPwV59DpmA1chdwVGNZHoDjjGWtvXfiBshHQwhDz8DVoRskNDqQ8oSb0vFS5M9gsh1jPlA0kJLgT9tUlfm0JZo%2BuVDn26rQRHUSDfaBiJooJbRg1BUpdWgcSRMeEAZDHzxXiElC8shrR%2BDFuRwInIsuseczQFfkMuYBP37fz&X-Amz-Signature=f9e7fdfc079c896d616b80e53f0de848bd14ca6cde2f848a326d75f71f44b2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
