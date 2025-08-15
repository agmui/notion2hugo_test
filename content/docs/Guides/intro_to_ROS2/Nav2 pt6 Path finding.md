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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=eaf77e88ae0ed03af058ec49646f784ba46d903a0c93a88cf093a624d921425b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=3b817131db6b45ec4d2e016e51de15adca5662e3cd3f66b0896c980ea0bbc3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=9f73663bea2682df964284751804efcb2da13034efb7392ff5258afa4c619cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=d1dfe52fc6d1112df4f9d926156e118d1cc5ca64859a2d7870258ef8eeec4fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=42077e563f4fb4de4640eb432695d13e407e04c25156d402fbf7e17a4e3ba830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=3285e431c2ce729d5e9df2a2cfac97dc1f666eb1a7c3ed5dc84c70848f99b767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=6733edcf15e05f61ad29fc3f0b353e56995d2c20175e1451f4e16a065dd5dc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=f5681623d63ed1020c2e66edd0b70ce681c6b5d1f9ac0abc1b9aea4352942928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=ac6bf448496a4a489e46c9dbc38144d8b18f5cb0451e208caa27739450bace91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=d5e9286d0adfcf929b67793090ccbb76f19a381b75dc5823cd39a2714ea689d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=0f0ff64ec319b551a678ba8d1d14b429908677f4652794a2d03565412f8f8277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=5166511179c0fd278dab07c4832121699ffc02fdde53699fd8c1603689f59323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA6S7SK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BVFxqvC1jk6zcBdSg6pHZN8T86Km8ZVVnIcaUq%2BMYnQIhALOJU5o7kQwjUFzoOJLrrvzs6y66nNQs9OCw2wHLG4RPKv8DCFkQABoMNjM3NDIzMTgzODA1IgxuyvkHh%2Fdy%2B1Q1tpgq3AP6ZTTPXk3jfJnM8UsV0TmmXImvGBENhpxgUBhvpWY%2B3aaJD7DcuyAaoLzQc%2B%2FV7vsgJv0qP3nZOaQds1Z%2BxVuIlB9yldkbB3MLPQSBtnw%2FcdnEb9alFyD70bPoXoXw1RX5bcto95jLdH1fRSk8N6daHJz%2FsVOC6vlGFk2VztdB%2BLTPTHlZ9tPhlNoLItaDXmAZ5JGOgokKZ%2F4ovwZNc57cGz3WTxkG%2FoSpVMB67cYDbNmHZ0i%2BIajawI8APjScHWwRSWbLfYRg%2B%2FjGq4hXoZBM8weyFF4O227rjbTZJXN7rYI5HyE7uFQRea06lwOWjhlv2afOl8icYYDWCxxf6Uad%2BaPfM%2BF%2FJRuOJHitplR3Ne%2FgNVJ%2BkH3uvg1fahO9qK8qCnRkthK9LvpGZUPwgZwHkRAL3PFjDW2HzC8usIJP%2Fun1XiT2eTSOyWMi%2Bvs1tosXy3ykgeWyWYKmx6vV%2BjZ6m5jIXouPVspcVwCK52CVsgzCJc7vY3ISf1gaFuBVhVKPQMW2UbeqYdl4o4mQo2ujj7a2L4%2BhtkH7luXAIQ3RnLpZaA03d7%2BuUF5lm3HfDQ18HdErUPB6Zhh5Hk3n25Va23q1rZqVyzGNWPUgrlPFC3yWOef58LNfSIjHxjC8yvvEBjqkAWCr1zyYL4QRmp1KLHWmXrhgnP%2BUHhMdxpdpzIxVTUL3%2BeTLEt79RFaSZw2oExiLc08POGRdoBSBjkT%2Bi6rYMji32NVB0h1n1W5t5VOijAWjWS%2BrVG%2BqkjwyUa4kCY1WYc2ji5Ivem3%2BVhcK3iFwyjDVIslx6YwbcJcAFoWdWYGB0OWIoR7C4jI1X5fHFoJ1%2B9dqGguwYnFKsnIOLrW1VsjpXV%2FP&X-Amz-Signature=23f5b7fd7148ba49464fe37fb18bbe505ac717273efc52b30273241b88b640cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
