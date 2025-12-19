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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=8a8454e603398eba55a07fe0132fb80eed6ef6b0bd2f4e43dee532e7e0be066b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=d1658b7728ef96be09a9980e1e186fbea0949146235ace3796f605f10214a8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=b321a33f79f43448127787204370cd714f0f3abf1017b5b2eadb7ac60f2f6a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=9d655aa2245925a30a2f2d18953ec5672f963ced8415343bbd8045707e736bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=6d3c50d63b8bda15f3a9904738ba42691e3d8ac76977e116fa78418964baca61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=39413c923cd96a1116090a820251c659685b867e0ff2adc935dbfafc40f4921a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=f983574b943090a12fcdfe5b12ee6a0ed832fd51b22f424abc0034ee9460b117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=e0b95e7d5c4fb7b743654bdf6f7d75d7274a082c1509a9795aed0f270047ca7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=bbbd5b8c98560baae53d9785bef94c72b3b2fa572318fdbf27fe342a80a70868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=c549eb45c1165c04835f72fceb0cbc608c678f2d209f64737892366de0ab858e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=d797c45d00b7bce4ec09be16fb78e480383a098f8d7d103e7f9d499108f210ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=88ae84569cf089dabf563ec9bd11edcd96be420071959e513aca8f39d5b6e22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NRDNKF%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYMig%2BgPHktXHHfISZsI1sGHQkCHD%2FH0DPm9CedyALggIhAIbc3vxlUojyCodsZyOdJYWfSt4wd5MYbYlAVzuaerALKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzweZ74mQamt%2FFoedIq3APbkHwd66RjjzqsfPzgTfOJgB%2B1vdAmfQ%2F%2BjZLFJG0OOz5SetgYnNvjisK%2BFVO%2BQoIWTcsiDjjLEsqiMWblRwY7GLSQLjTJFbKtNNZEK30ZRIYqw%2F2V2EjIXmn0%2F91aZGfqJDke%2FvTpaXtgnV0%2F2qZcJzlgjloNdJwSLrfYfIWcGO3I0hjL46uDJRqYMw855rcKiJzYIFFezHNKn8TzTgvwx2KJK6Ftk9cjuCBDlOmm5daSlXl7i3v0nlbHf8VyHeSTJDemtpKUcbrf5Yt2JisLpIA4Fmpm1U3ztJOeGmy6Vp54kVkD2QDqjoqkn6I5SJMPPzJ4Wnl9Pbq04ma0gvnllV8k5%2F1m3hYgSpUaklhjvwXGvx5kKdR8qF6yPi1KaOsB1fmhwCB8Fx7YrIzC7SK7JIRmboRtaDSeo6DjpLrFtKXPpwtT9tAyxZzk8mf0ye7zAZYKbAhLRUgA%2BR8CMt3Z0V2QEAkr0tLr6OorupXcjNLJqFwPI5WVkOCKR84T8DWsPQFXGp2Xz3sd%2BjIfdyYVSf6DJU6x69n0VmAZE7aWAb3Q86JLrmtIL8X8Xa0utz2wz9BFsLXRtUf%2B%2BqKXgP%2BL9kyTsj9jE0aIN%2FgkvUX80snzC6X7SE%2BxRMCsoDD0x5LKBjqkATu3ZoBjiWCpvoUWzKNQRnA3g4yaZBmAN2zVGYgKHD4QDYBnKJFT4%2F1ZkKfxvzlNk7IqYDkDsXbClgVxTrR7udINzTKmxaqEjzDzV9NL5RhmCYWG5MG4lLvgACfkRfulmmUL%2BKSHG3H3iNYC4P3e0mu0Sac3egriD6E7BkIACrELjfG1oPO60T9bRQ96rTLXH%2BrefC5D1FBYKRk7i0w0HwzwZIeY&X-Amz-Signature=8fe513cf1841458090d49230bbbf5d9b83902e28db213267ac57e9d7b7b106f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
