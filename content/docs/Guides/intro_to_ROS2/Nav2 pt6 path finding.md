---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-29T17:14:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-29T17:14:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=a9d7c34bd1f446e9ab5604596b5db86236aed3a9ee7fb98c786d1fa8458fc2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=caeb9a55fa7bf2c72610d2f2e5bf59f83c640fd31c975d8b8c9fc0942a0f113d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=56f963ff668885ea7d8f7d823e7ba628e75e664a97a58364fa4a608ea7ae36d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=61afefd34e4db13bed78211c63862535e844a97d483e97480c786caef60c5176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=6a4c24c04f4110597bd926bbc3826ab190920bef23ccaa4c60c3e31469bdd119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=184629a151265ab1ff5beca1a35a50d371166e784e836f69cd4c12234a720f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=b41de8d4a401968eaf5c95fd71a76e729e5b14f4d7f787f4ceb851759bfd287b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=cf2188b814f61116f2e99a302181952b3ea9647d47ea25ed062949a01b2dd59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=74aba4e27b81620277f3bf7930d62375e8b670711e8a9e5113082f5656439431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=231ee49c67a8b6ce88d3b28f117c22dcb7cb69ce1de8aef3270515b3c5b5d2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=b8a9869533cea16d4d29afe63e8c3a24b284c96ae7ea8868075f15a74cf90c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=1243f7d78871f21046ffa90c91e3c486597d377fb3f1fb118273ec1e0f0ded3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF6DI23%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtWCIoj9ml7xIrrEhrC0PGSf%2Bt8RjmV4YDpzvwoeDqcAiApZyYzsGwP837H11aXTM6rUGMfe%2BdpK4e5FQyeQBeoyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf7QOaTiSv6%2BMBEjtKtwD3vTneZmO6JiHN%2FRAOn%2FnntUAeLllaAv1HMa3fo6W2u6Diz28ScBGqzXqoF2neC6uPrpjkuZLTk%2FQ9e60uvrcgTp1G0ZMKska17mDjuaCPh2pOR4CT%2FDrjjjDWGEfiEwZVwTvGD5rKY5lM1RjSO1Vrw5Wn4kOKA3cKqsepGaGRZ2iqQunwajbbz4GfMOY6EfTDfEgFsADaKwWSw7R8MkpMZE14fxALmKaMw5UjA%2FpPZwtM4cwq%2B73YYTj2638ESWjnSQW3PL2TpZno4TqnFWURZAsJOUSXEWPZJ58JRIe%2FWfILCr9GWexLmLskt0aPzLukgKQ2wn9VhxLc8mTQ01xZMWq1zt40XG6LuhGfDBi0wRXEto78QKcRutb3FUSNUEjqBN6IXW%2F2WzQP5exH97iSF4JL21wrpGmNl%2FBkPZfJPISjywSFO84gmF16dS0JGJPUc7el%2BxbQVcj5fma51tdew5qOaLWSe10sqQmZSSbA7787M4hmskdg3diqzM4fTC2nyz0REe72xTrB70KF2ulhFltcE864IM%2FRVD3tgZYlHQBhA2sfGRq%2BNJGtYFpJuvUEC%2BhlppDAjBf2x3DpWEytchiXs63eLd5G3X7xvwioz7WwuKRt889h1suXQgwvLelxAY6pgFRBTkzI80vu%2B1uVdu5EXmuNzW82upoGnGFWvnHjgdBd3z1NKiqV9%2FSqXi8kLufaR5pZPbmggnYdM0RYFRIvcsDDjvKq8%2Fg6qyStReNUaU1q4uicOvftrPg5O%2BRWgodsXXOCF6FYCPaDC9hN46HkH6THBOeeMVVbkdc5VjOGAGdEng5KYpc1AIaIKr0blZHx7dJLmC1Va7FQ1gj9128dIS0rWRcmGDQ&X-Amz-Signature=2a2d233ff1b188e6deb1e04b4bf04b19cf8a540d1903b47c920fc633656000f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
