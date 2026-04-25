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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=d5cbd2d1ad15f2316794cb505e3e82ee67ad8a80981a7278799a6dfce9d653e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=20f88b22f2ed5e2659a204128591290b53f6e948362a4c436d1dbf423f60f741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=7178a13adde8ba4b5b0514cc04667d622d60652b946dcd5cbd2e0103ef5bbb40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=2e3e51d1db43972b2918b3d6e00a4aaf608afec9cd4c62023269afa749cdcdc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=162e954cf284cbf1dc0b011f1ab6d4f871c83b61245b5fc5e7b54ddf6bee86c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=e921478e00f80d13e5833fdc362fe211552efb26fcc61b9151f83613db845c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=7591819fe1ab56b5598baf14acb113537b2b009ad66705c31ca94cfc39629854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=aaf6c05b7f4553ab5219c27647674b2a96a741b8f91a9186d5b332a34d0cf2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=8c802c707a4abe8a1e371ef3236829f8c3cdc3bfa8f372158d4a35ce370c9b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=c24fad2bd39df0af493757655a1756d9031e0a4e53d3527f38da597a76667725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=f87249aa8fd52725bcd595667a8c5d3c5e33fa38d48c3236e9dd72fd706211eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=7ff7c96d1ed3aead9d65a571b7556a3429b78c1c6f907d54ec18c20e04c16f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DROIQ3B%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdMKrpy3NYAJvXOnoZsHdQTnGxMJhKq%2FdyZomAHJbzUAiBofiJtsr8taOR33fZtCfNGDupHRSCLJUKYBv4m51X0%2FyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq6obTrE%2Fr080m5oKtwDGnwwLvG%2FFIy7iwehJN0Kn4i6p2ZmzxNWlBPwmYletoteCfYOSjlazr9ht1nrX2EYiusSkx%2BTt5t%2F3w4P63U5zW1QlVJK2FIPZf9Z2XddXBbdgBVBCbztjQNLUIzNjtp%2BXpZ1x%2FRM%2Fep%2BjGkVkK6dIYbqBCILzG1Nbv0aQFLvJcvgZWMwMAVTqMLOKhdp82WGgdPrZIYLy6OxHWsxIEL9mX2Z9TFaId4EQg8dHuQjNJix42QmXnYfGZEzUcuiK%2BPpUIkr97C5iukaCfiAfwvdZVXAJGlx5TNQKfatC60lViM1cBs19pjy4%2FjYtikUqCJdNLoAjvDJkFvANLkzW%2BGzaNKWel2YFfPykU%2BAwpWYzFb%2BXyZ7c1M42knSuZwny8Djbh52peHVM64QvS77RN4dDELOqnqtfY7jM7A%2B6hd50kekk7yq2qyNRWhSo%2BcjangvqXBQUijNTuMkxE3v2942uKsGSiSJgpd1xBDeX9HfA6MpEzlpF8L1iMFwIgN7sYiRPA%2BjbE%2FcOxU9ZNLe8HQb%2FbQILqrSSuMQEiHTpj9EXvljrs%2B%2Fn%2BaBszGB4NyKzyMm9nRhCrWQyzAwtgjMZvtx33kALmJ7zxna5zXFZA0Bn5bSMpvWcb9ijlH4Incw3bmwzwY6pgE75zrqaG2Dl6tOIamwT5rQAm%2FxmODtM0wTMFBwAGXawBv6OuHL8eAzNStK6utLpGyJY%2FKayiBb32vvLUyocAvCYYGeuHGVv31V27ka9OkwxvyBETPl8RryfamohfopO4LtKMz0X%2FJcrGBL4xcFpnoZuWxGglSkqYkDRbgWAr9X1PpqjkrJ1tsP40bHwlOTxm4cYzUBTtj%2FqoV%2F3ff2HzUPCtjvW6m3&X-Amz-Signature=b6fe0d4846a84ad33fc4ab8847931067e4fd7578d91c87568d5992485913cc99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
