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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=eb3a85b33efedb78751b7a3bd63b42ccc9471c431303bf4deaece03bd6785d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=334b6fb1ce2710247139d51f3031afd736c2c28c15b048d7e7d6680f246003ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=62a989cacd7bec9fc3739fa4a271fb38e19dac2e90faada29ce71a1405cd117d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=eda5bc28bce40bb65241ee59fad7e09d0eb2b6135522f31ab8f07c2bcd9510dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=b761471752ddab4ecacc4dee837c05a5584d4b62c7173116e26ae434e455bafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=62041b7948abbc99252bac6604ace0663581c92b0ed716128fad36bc0793fb2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=49309e761486fad6c3d3f86233a808d0be46cc17c80c3d48e1b8fc3b7cb3dfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=c63ce6f15ac168926512dd170194219a0f597b53a07ea9149c9c046c33d7f290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=72450882a8ad577a6e61ed28d65ff9fc301225c6a9507abdce1a6db21d62a1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=c13a49b9d9be7c525d49c664d930f6861f450a1ddc843c5ab05c3393275c4ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=f73ed5dd56e3822be0c661636008bd75c704e62f44b1438d1c884c0def497938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=f8de41f17a4ee808141ece828d2f7c917dc1ece17421ae089276117b980004df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGABHRAN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeFaTzTsMothZNTWTTR4FiW%2BzbdKgj2YBkQrn0XrpKegIhAJaidu8c9MBtj%2FQMQRDJVCPIB2kZRJFnr2P4dTJifbjPKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSEYSoYlGDq29PtBgq3ANg%2BufjfOw4DJBM6WnicDnbyv9bapxFaGoamAdUbx318kCGJygJYSpxoComNkwrSCZIfaNnYC6PdYGjZjrJbCge0PrX8ZXbPGHCq8R7wtXeBJplPF3LXKUi4hcirW%2Fg76Xt7pU7P4Ew6lqna3NGF2M0oT0mHfWe4oaooiY2tFWGTypgAjCjAD6B13nnmE%2BH8B054ybdjBrKRTmzM1Klisl1RPR7jvexFTkb2x8j8SvCZr%2B00OyBCZinqvJ%2F69AYe3PMuDfyohhFLAt1JQ0YXv6%2BlGL%2FlLgY2uVQXw5MXSWtfGQ%2Fc4aO6bstJLnE7bKIvJfRh6mAH%2FiG3lFpIhuDr%2FFrCu5Joqaqluv8pc%2B%2BTogrifUpyxiJsZR4uimFOyvrUT9Qo0VqHs3kO03FLmGRoPgPwwtwb%2BE%2BoDfYdps4F79VzKegNRJXcO2PmfTg6j9m9YRptiHnUA0gu4QPe9xqNVy5UYrh9whEdAjW0TiIUzugjwn4lUDULZzCSJ2%2FhUsFZHMqp1aKdG8NDBiezfU1qaNXfF4L9fIywHWNWFYEUfGHrw4yYwsQfeSLMJ5UVdhOQ3nInATdyZ0CQIZVnWhYkRFMzoHGO%2FGZf5OcOolyAFdTiUSOqG1txwLEWtSKPzDvobTEBjqkAWiYUUwp%2BqoSChCePKC%2BknuiQm%2BTC0lWTTES%2B9jMyvN6ti0OF9curBdowAOLGRWulnTPPyi7ZuMQ1NQ1Oc23CtAzLpiTFxLskHFOFzlXUQKJplj807vAxvU8q6tkbjHE8U8VujIjyMDnG0iPcDqSN2SFY8aNGOVrJrRH9jrz4FxWnW5yatJyqka0XWo9o0K2lzVDbJTdXfZ5GGoSOTW6OszZe3f%2F&X-Amz-Signature=cda7ecb1ab974381180d6a681b0327bf94cb78a15c92913efe6b92c6e00663eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
