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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=b1f8f20dd5e4d64d2bb9fe2a038791dc57e9fbcbb777a53f317b8082663ee087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=efba8a6c39b5fe1c0ad7196b32e5da948025c3e22d07891f30fcf234c039b7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=938847136920005b9707b9df8184a6a2e1f0e9498085cca6da1deca5a9d9aaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=67cff1cec15d78105a7f1d36901289d1c0b610618e28444ab0765597001be6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=4995d602fe7c0d865ef223283ee7d9b23e2221e7979c1abad3ae77f50f4b0474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=188f02461bc0464fe48ac34b0e67bfc17a4e6686b92bd760f1d623a4cf4bee6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=565bb985ef1a21b727c3f1e9a609aa52c0c8d83e8eacc01f0552d53ad082f9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=af0659abd609ae564f7d826350fa580efe003e1817f2fa6239f1fabf235250db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=9433f90338a06b83d0c59c98009370212085b3c57cc6efd8ff36afd68d77f0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=315f33bf8781c1fef8ff99a1dcaa5f94afe229570407c48747407d5cbca8ba9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=5e13ac211bf8c615de485caca274cc9e3bbc522b976d9fdd3f2d9c95f7c4561c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=4184f8273be1e5ce8bb9a5ca58b098e22a4cc480e4d55e57208f886432885787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LKGMI2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7KNdha48qitRhEnJocS7wkCUrF4ODmiIMCu4QWhrk7AiBVpb5WiuWzrtg%2BM7daTOJOtzg4y39fIcXqK3qFHsnJwyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxyxxdhVpzf63L2JwKtwDkL53zoofEWdLo8PeR8TFKhuFIPM8eUwxWyUMLmVXzE1wO1jGBc23qVSA7kC8%2FFqO4aGx%2BXBkUglwnqLrts5kN7ut0TgWzfFV8pqiZiLxgxDczziO5pbRH%2Few83e6P9c49WQ%2BZ1SHVqSHFBpDhqhM07yFvIG1yvyJ%2FI6vZdO9GFo5zOJDdThC%2B0d%2BOKge%2Fl%2B1KY74y7yXdF9VIek0bQLq%2Fx4lk0MrW3ncwCBxIwibJyBHjkX7n%2FFq2rW8jf9c5VA4rNlmTdtz58r4ruAmD0tZDRTJQnRxVyVe2lr%2BZb21vN8hsgeIzKnVy0tsONk1CnXR1r3j%2BhhPVQLecQR0rGX%2BhKm7B9R4sCFEVb36LDCciw%2Fzer8kL27zMH0rtfyBTZVXLB8mUz05dt8vN8Vl09MoyozXnhvYPQ0G3gJ4D4kjid5g%2FGgo4rlA5yqPDED45WHhMILj6U6OI2MXtHHEnST2eVerPjfmnruL8WI48%2B6dys2avggwc9RkIm12EVEJqvWMEuTDZ1jzXQWyddY0zCQFGTxbdb8ilUDjxS3%2BHucgj37Z9wkvZPhhRP46ZKfNW8z4bsuAjpnAFrhDKDzakmWso5U4u4CIxi4h%2B1wxmfkyQN3nEenfP8ZsfJs%2BSNIwvPjT0AY6pgFiHTkMqjgsw4VtS4wbKQWztSwLE5ZPPuu4BHByH7B4Xy0JrInpCxXr8uwxfFJO%2FOBDxqClppXqc8uaa%2BKdkvywmIgBh%2Fyg1EXnFHzu5U0URfSiZ7X9%2BCOdrGjb3qsVNvW%2FdI5hhupj5lZ%2BRoPwmG%2F2MJ2hM41imPVbmIp%2FoeSLY2hvPp2kQCKY8gx%2FXaOLzC4ZUpCrzrwVHxRVQgLGOb0Hl1j5DWUK&X-Amz-Signature=69a5247c0aa29be20856fc2fa92132fe3c3257bff7066000d9fc62abe0fef710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
