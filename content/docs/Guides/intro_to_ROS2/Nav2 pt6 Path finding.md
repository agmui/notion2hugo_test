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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=64927c2f9782ef8a61f31c5e2cfbc61d3635a653cb0b6958e854713a179f5339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=e2fe192ec97e770038c0adaf02e8bd331c37dfd89b5ab77b9ce49130a88fe946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=1c4d2ef512a4df41b101773eafed684c82e4c715259f0e38fb5f5e3c58223bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=47327343ba62f3c2bf757a34ea028df38d161f84757e957755f5d859e4631217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=18a1dbf8d79e66d1c42bcb13aa6152436c4c816a183fb89183f3c28672fb5276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=392abc219b76634cdc7da4eccf1f0adbb96432e7e06d33e70edb895070d99e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=c51fda8fcb89fccde6e4ad06546b00e813ac4f3c3620e2a96ca4bf0d9f3184dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=17d0ba154fa285f472f1a7808058fcfa7038a78bb42660e0446f77b86f460eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=926f9bdc90ba7c11004ac51fc5f16323e4454f951e842f9d43fcfef61238abac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=d0c8f234d4ce871e233ba4cd599d4dbca8884a69512948950130695368fbecab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=1f1413a55a880b0ba27e1eb8f42d74cd65704ef711f35e1be6e56e417430c533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=0f5a360c64161f88f9fecaa4fee8fab0a7bdc5ac5bd3c22afdfedbf0f5907e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3P56D2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD1H7HmcslwfKQ9PNYKj1BJGHb59%2FSpXSnXpG6GHek4wgIhAKbwF17bAqad%2B4hfVdnKC2IfDDGN%2FvS6%2BMzlcEAiL4yJKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5AtiRWnMETMZQA0q3AOPEwZg2U8l%2FRq5SBO16AumZmy10GrBqsT%2FE98AZRdHO6W77CZdwuTqFdLg%2Biz1MQIhVlIZoZNCbfUCwRQf7vRpgDjEDPGOw6nH%2F5Rd5Jm5Sz8Pjk%2BTMOLMlts5SqKg7tM5E0WClvsXX7zXitAekiux6vt1YyPSLbUpJLix3RoRWyRUyBchFZz76tiXv3wkSW8oOkpRltuIGiZplNpXG5cypwxwTEQfYNo3PDb3mOJILaNkZd6J59hg4EUM3zFHQ7B3vDamNj3gQQTy5xJX%2BwfrBfP85yqp8jjTvVp2%2BjWGamvMyUgMfD%2FDehjMleDiJdz8Jb69sMeKZT96Xf4bHhpqrVK%2F1Enfxu6BLOwgLh04vNTbGXWqBgsKpDzv5QQNhSFSfx9zT9pRScbnygDHj8pB4j2L3tEOUOHzOANX4wPW4Vyk0CAjm7x53bUCL0IXO8zQvSuWTZDBZOUXC03N2h0cOaJcdinNVcDDKzrgXUYRPkpkbjqbDpY0YdOz1YDRVDTYczbTXUUej%2BYuWMtE%2B1PYA%2FRfPtsmxvR4Tl32WnPzClC9BhcyyZ7hpl0l98orvukkJ1zdpj6wZ7PuJpszyysvp%2BHagnbsWAxxZiL9ibu7DWcogeAtGGxp1gCS4jDYotDEBjqkATtfYOcUOCDxgQRLnw6RcdEOTLdtv8RaxmaqzFmWEQDomxBjo499MO5W%2BSIN4lJeHCKMhYiL0YV3bf5Z4OhWUqDHTltnzSyTdw3g1%2FpqRQsFZeDM1uEG9Z1qZgwgfJrtj1NO5u0c%2F80bjLv9ReY%2F4SuBFmOUcN0gVWQbMd4fPlIm7jin%2BWNW%2FTSjNeYef8BYrRr5oXiu5dAeK2ZG7eePIa2N0lmE&X-Amz-Signature=8dcb8c891811946ec5f2184f8a14a0a140227a3a4021cdae7b7c2918c91ad802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
