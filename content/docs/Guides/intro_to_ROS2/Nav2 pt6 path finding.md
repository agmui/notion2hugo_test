---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBYQ65A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGTB5VmlfY0f2PyKWswbIZ6dXaO3CEk%2FvdUJEIN39scjAiByM2Az6vvaUfIGKFI4NyQ5cq6MROKbmQMApiFMjTwdrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FfUDgGxPlV0HwjnKtwD3PrRYswZSgDljxis%2FE%2BQgIXl1IdDaPtgZZXVC%2BKqZhRwm9NAy2a9M34U1QqXRKcnG%2BhVquywS9Ias1khE0DP%2Bg76bsupcZFS0VwPvdqhG7gwVOBT6cbyVAGik4UB4j72%2BoBjvdzJ7589BklcF8eFatGr0Z518TlYsmyXUNZsTU3VxpAT9Iwlf3ajB7TRnZcyn8HButdJR2zVfGqxE3Rwh9h1CfgEZ6j52Y9JmUoYt383wJx1ZPhAX7ADI9Rq08FRsUi5Ni%2BDfU8HHKT%2FYAB7NdmrareqZ6jrsGQym95H2p7nytsAAgDJnQOmgSJ3r1G3IHFN4K6wuvl%2FC%2Fh%2FvQgTBiV%2F%2BKZkLlZ3cRSIBEEmZP9Jg5DY0OMg8RLsU7B2Fyd5maTQFpyswsaasFgtyZwMELa3aimeOptI7WpWu%2BsIzvmNW%2FF4HOBwMldas8zQJedAhqAx1%2Fm8T5Ns1LmZqGFRQ3fhOPwjPwrhye3sjygZEM3RPm98ZIVvVr7nA1YjzGKPDPImE%2FBQZUuefQPZc%2BjVre4avjQtroJFUpj1mq7lnY3ehsjy6XSLEsjBGCY0Sw6o6lkhcZjHgU%2BCV33tJ5uhGiVFhuXjnwEQIMGz8LS7TlV79qprWxJzo0J%2BYXgwj7qfxAY6pgG3Nmf4cQEl%2Favsw3%2B0qE06vRHK4yU%2BpUMu0HT0IS75EB3xcG8ox2rMJZA5wshfZO9Lf1NygrXM8jDXPZOXBlGFXLPBteW9dqaD4ofzcBZlyuE%2FIQEZK0CnJWalhWQ4nJ8RgwJaBTahJwuh667nNLccIRmJ3jGviKXv24NEq3Ao0%2Btqt2x%2FML%2BO%2BQ1PvyYGQHyBAtLTHBT5eHhylYlG5VzFaX1G7wTs&X-Amz-Signature=38dfcd85771f87e2a5197eaff43eb09b77bbbfc618ce654a9d100f8027600817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBYQ65A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGTB5VmlfY0f2PyKWswbIZ6dXaO3CEk%2FvdUJEIN39scjAiByM2Az6vvaUfIGKFI4NyQ5cq6MROKbmQMApiFMjTwdrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FfUDgGxPlV0HwjnKtwD3PrRYswZSgDljxis%2FE%2BQgIXl1IdDaPtgZZXVC%2BKqZhRwm9NAy2a9M34U1QqXRKcnG%2BhVquywS9Ias1khE0DP%2Bg76bsupcZFS0VwPvdqhG7gwVOBT6cbyVAGik4UB4j72%2BoBjvdzJ7589BklcF8eFatGr0Z518TlYsmyXUNZsTU3VxpAT9Iwlf3ajB7TRnZcyn8HButdJR2zVfGqxE3Rwh9h1CfgEZ6j52Y9JmUoYt383wJx1ZPhAX7ADI9Rq08FRsUi5Ni%2BDfU8HHKT%2FYAB7NdmrareqZ6jrsGQym95H2p7nytsAAgDJnQOmgSJ3r1G3IHFN4K6wuvl%2FC%2Fh%2FvQgTBiV%2F%2BKZkLlZ3cRSIBEEmZP9Jg5DY0OMg8RLsU7B2Fyd5maTQFpyswsaasFgtyZwMELa3aimeOptI7WpWu%2BsIzvmNW%2FF4HOBwMldas8zQJedAhqAx1%2Fm8T5Ns1LmZqGFRQ3fhOPwjPwrhye3sjygZEM3RPm98ZIVvVr7nA1YjzGKPDPImE%2FBQZUuefQPZc%2BjVre4avjQtroJFUpj1mq7lnY3ehsjy6XSLEsjBGCY0Sw6o6lkhcZjHgU%2BCV33tJ5uhGiVFhuXjnwEQIMGz8LS7TlV79qprWxJzo0J%2BYXgwj7qfxAY6pgG3Nmf4cQEl%2Favsw3%2B0qE06vRHK4yU%2BpUMu0HT0IS75EB3xcG8ox2rMJZA5wshfZO9Lf1NygrXM8jDXPZOXBlGFXLPBteW9dqaD4ofzcBZlyuE%2FIQEZK0CnJWalhWQ4nJ8RgwJaBTahJwuh667nNLccIRmJ3jGviKXv24NEq3Ao0%2Btqt2x%2FML%2BO%2BQ1PvyYGQHyBAtLTHBT5eHhylYlG5VzFaX1G7wTs&X-Amz-Signature=6d5678bfd6afdcf903bccadfedf7d84bb0d2350d8c9e2c565bf104211546f20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBYQ65A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGTB5VmlfY0f2PyKWswbIZ6dXaO3CEk%2FvdUJEIN39scjAiByM2Az6vvaUfIGKFI4NyQ5cq6MROKbmQMApiFMjTwdrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FfUDgGxPlV0HwjnKtwD3PrRYswZSgDljxis%2FE%2BQgIXl1IdDaPtgZZXVC%2BKqZhRwm9NAy2a9M34U1QqXRKcnG%2BhVquywS9Ias1khE0DP%2Bg76bsupcZFS0VwPvdqhG7gwVOBT6cbyVAGik4UB4j72%2BoBjvdzJ7589BklcF8eFatGr0Z518TlYsmyXUNZsTU3VxpAT9Iwlf3ajB7TRnZcyn8HButdJR2zVfGqxE3Rwh9h1CfgEZ6j52Y9JmUoYt383wJx1ZPhAX7ADI9Rq08FRsUi5Ni%2BDfU8HHKT%2FYAB7NdmrareqZ6jrsGQym95H2p7nytsAAgDJnQOmgSJ3r1G3IHFN4K6wuvl%2FC%2Fh%2FvQgTBiV%2F%2BKZkLlZ3cRSIBEEmZP9Jg5DY0OMg8RLsU7B2Fyd5maTQFpyswsaasFgtyZwMELa3aimeOptI7WpWu%2BsIzvmNW%2FF4HOBwMldas8zQJedAhqAx1%2Fm8T5Ns1LmZqGFRQ3fhOPwjPwrhye3sjygZEM3RPm98ZIVvVr7nA1YjzGKPDPImE%2FBQZUuefQPZc%2BjVre4avjQtroJFUpj1mq7lnY3ehsjy6XSLEsjBGCY0Sw6o6lkhcZjHgU%2BCV33tJ5uhGiVFhuXjnwEQIMGz8LS7TlV79qprWxJzo0J%2BYXgwj7qfxAY6pgG3Nmf4cQEl%2Favsw3%2B0qE06vRHK4yU%2BpUMu0HT0IS75EB3xcG8ox2rMJZA5wshfZO9Lf1NygrXM8jDXPZOXBlGFXLPBteW9dqaD4ofzcBZlyuE%2FIQEZK0CnJWalhWQ4nJ8RgwJaBTahJwuh667nNLccIRmJ3jGviKXv24NEq3Ao0%2Btqt2x%2FML%2BO%2BQ1PvyYGQHyBAtLTHBT5eHhylYlG5VzFaX1G7wTs&X-Amz-Signature=1bfecaf516248f0ab730d8806a5a226b02e3c334da2c304d739becba32eedb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBYQ65A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGTB5VmlfY0f2PyKWswbIZ6dXaO3CEk%2FvdUJEIN39scjAiByM2Az6vvaUfIGKFI4NyQ5cq6MROKbmQMApiFMjTwdrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FfUDgGxPlV0HwjnKtwD3PrRYswZSgDljxis%2FE%2BQgIXl1IdDaPtgZZXVC%2BKqZhRwm9NAy2a9M34U1QqXRKcnG%2BhVquywS9Ias1khE0DP%2Bg76bsupcZFS0VwPvdqhG7gwVOBT6cbyVAGik4UB4j72%2BoBjvdzJ7589BklcF8eFatGr0Z518TlYsmyXUNZsTU3VxpAT9Iwlf3ajB7TRnZcyn8HButdJR2zVfGqxE3Rwh9h1CfgEZ6j52Y9JmUoYt383wJx1ZPhAX7ADI9Rq08FRsUi5Ni%2BDfU8HHKT%2FYAB7NdmrareqZ6jrsGQym95H2p7nytsAAgDJnQOmgSJ3r1G3IHFN4K6wuvl%2FC%2Fh%2FvQgTBiV%2F%2BKZkLlZ3cRSIBEEmZP9Jg5DY0OMg8RLsU7B2Fyd5maTQFpyswsaasFgtyZwMELa3aimeOptI7WpWu%2BsIzvmNW%2FF4HOBwMldas8zQJedAhqAx1%2Fm8T5Ns1LmZqGFRQ3fhOPwjPwrhye3sjygZEM3RPm98ZIVvVr7nA1YjzGKPDPImE%2FBQZUuefQPZc%2BjVre4avjQtroJFUpj1mq7lnY3ehsjy6XSLEsjBGCY0Sw6o6lkhcZjHgU%2BCV33tJ5uhGiVFhuXjnwEQIMGz8LS7TlV79qprWxJzo0J%2BYXgwj7qfxAY6pgG3Nmf4cQEl%2Favsw3%2B0qE06vRHK4yU%2BpUMu0HT0IS75EB3xcG8ox2rMJZA5wshfZO9Lf1NygrXM8jDXPZOXBlGFXLPBteW9dqaD4ofzcBZlyuE%2FIQEZK0CnJWalhWQ4nJ8RgwJaBTahJwuh667nNLccIRmJ3jGviKXv24NEq3Ao0%2Btqt2x%2FML%2BO%2BQ1PvyYGQHyBAtLTHBT5eHhylYlG5VzFaX1G7wTs&X-Amz-Signature=1294a744f1aa31048f016c174b18c66417707de9a437fcadd312838a97f5dc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBYQ65A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGTB5VmlfY0f2PyKWswbIZ6dXaO3CEk%2FvdUJEIN39scjAiByM2Az6vvaUfIGKFI4NyQ5cq6MROKbmQMApiFMjTwdrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FfUDgGxPlV0HwjnKtwD3PrRYswZSgDljxis%2FE%2BQgIXl1IdDaPtgZZXVC%2BKqZhRwm9NAy2a9M34U1QqXRKcnG%2BhVquywS9Ias1khE0DP%2Bg76bsupcZFS0VwPvdqhG7gwVOBT6cbyVAGik4UB4j72%2BoBjvdzJ7589BklcF8eFatGr0Z518TlYsmyXUNZsTU3VxpAT9Iwlf3ajB7TRnZcyn8HButdJR2zVfGqxE3Rwh9h1CfgEZ6j52Y9JmUoYt383wJx1ZPhAX7ADI9Rq08FRsUi5Ni%2BDfU8HHKT%2FYAB7NdmrareqZ6jrsGQym95H2p7nytsAAgDJnQOmgSJ3r1G3IHFN4K6wuvl%2FC%2Fh%2FvQgTBiV%2F%2BKZkLlZ3cRSIBEEmZP9Jg5DY0OMg8RLsU7B2Fyd5maTQFpyswsaasFgtyZwMELa3aimeOptI7WpWu%2BsIzvmNW%2FF4HOBwMldas8zQJedAhqAx1%2Fm8T5Ns1LmZqGFRQ3fhOPwjPwrhye3sjygZEM3RPm98ZIVvVr7nA1YjzGKPDPImE%2FBQZUuefQPZc%2BjVre4avjQtroJFUpj1mq7lnY3ehsjy6XSLEsjBGCY0Sw6o6lkhcZjHgU%2BCV33tJ5uhGiVFhuXjnwEQIMGz8LS7TlV79qprWxJzo0J%2BYXgwj7qfxAY6pgG3Nmf4cQEl%2Favsw3%2B0qE06vRHK4yU%2BpUMu0HT0IS75EB3xcG8ox2rMJZA5wshfZO9Lf1NygrXM8jDXPZOXBlGFXLPBteW9dqaD4ofzcBZlyuE%2FIQEZK0CnJWalhWQ4nJ8RgwJaBTahJwuh667nNLccIRmJ3jGviKXv24NEq3Ao0%2Btqt2x%2FML%2BO%2BQ1PvyYGQHyBAtLTHBT5eHhylYlG5VzFaX1G7wTs&X-Amz-Signature=c5dcdb7e93357f8b88076ebd37ffe0c9b2881c7a6366ebd1a7467dbc9c239fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTBYQ65A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGTB5VmlfY0f2PyKWswbIZ6dXaO3CEk%2FvdUJEIN39scjAiByM2Az6vvaUfIGKFI4NyQ5cq6MROKbmQMApiFMjTwdrSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FfUDgGxPlV0HwjnKtwD3PrRYswZSgDljxis%2FE%2BQgIXl1IdDaPtgZZXVC%2BKqZhRwm9NAy2a9M34U1QqXRKcnG%2BhVquywS9Ias1khE0DP%2Bg76bsupcZFS0VwPvdqhG7gwVOBT6cbyVAGik4UB4j72%2BoBjvdzJ7589BklcF8eFatGr0Z518TlYsmyXUNZsTU3VxpAT9Iwlf3ajB7TRnZcyn8HButdJR2zVfGqxE3Rwh9h1CfgEZ6j52Y9JmUoYt383wJx1ZPhAX7ADI9Rq08FRsUi5Ni%2BDfU8HHKT%2FYAB7NdmrareqZ6jrsGQym95H2p7nytsAAgDJnQOmgSJ3r1G3IHFN4K6wuvl%2FC%2Fh%2FvQgTBiV%2F%2BKZkLlZ3cRSIBEEmZP9Jg5DY0OMg8RLsU7B2Fyd5maTQFpyswsaasFgtyZwMELa3aimeOptI7WpWu%2BsIzvmNW%2FF4HOBwMldas8zQJedAhqAx1%2Fm8T5Ns1LmZqGFRQ3fhOPwjPwrhye3sjygZEM3RPm98ZIVvVr7nA1YjzGKPDPImE%2FBQZUuefQPZc%2BjVre4avjQtroJFUpj1mq7lnY3ehsjy6XSLEsjBGCY0Sw6o6lkhcZjHgU%2BCV33tJ5uhGiVFhuXjnwEQIMGz8LS7TlV79qprWxJzo0J%2BYXgwj7qfxAY6pgG3Nmf4cQEl%2Favsw3%2B0qE06vRHK4yU%2BpUMu0HT0IS75EB3xcG8ox2rMJZA5wshfZO9Lf1NygrXM8jDXPZOXBlGFXLPBteW9dqaD4ofzcBZlyuE%2FIQEZK0CnJWalhWQ4nJ8RgwJaBTahJwuh667nNLccIRmJ3jGviKXv24NEq3Ao0%2Btqt2x%2FML%2BO%2BQ1PvyYGQHyBAtLTHBT5eHhylYlG5VzFaX1G7wTs&X-Amz-Signature=9be3d38c6a02540895af90c72a5319d394988aee42d3c4d9fe6c79e28ce4ec8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
