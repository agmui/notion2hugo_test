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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=ea72ac2897c8aafe5ee1eeb671e57905b8298950bcec40ca30e6a99f31953fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=78e8f5f04bbe9409dee7191465b2b63674d3049bf0b453c24d058934352bebb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=66a5152006974f68dc73be00769e53aed94dd812911905e31d2476a5ce28f835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=9b488595140c3573eaed5805b8dff4d0788fda62a6dee4f7b5801550ded27372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=858cbfdca8ca5c4175f89ff2c9abbe2ced71f06e8f773bfa1fa521b34ca718e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=b4054a5d94f933c1609bf297076a7566a0c9680776987c76c5582d70463d3a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=23968d2665fdd9f3f6a4a719697f5e1f394d9ff1ed3b9ee24876ebc2841789c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=ae5ef2536ccbef23b96982a5b419ef66f53e096e10d0c875d54f83f53af798e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=a49ca3ffd0daec8ee3c45ec5735a098a6dea8812c3e056cb114fe70b94f1ec82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=235a3f7a3715e05b055f0a704e84beef1e927411e13bab33b05516cfb23fbe8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=608e84b872ad455c1f14190edc4c1d1df50dd6983bf2a47b6ff100812653bc44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=752adc45f318a595a18fdc939c9e4c06cb57c02fbf1677e536eb0de37eb502a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=a907b6be9fb5bd11b044a711160285fabedf30e47d842ed3c66192ce05126c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
