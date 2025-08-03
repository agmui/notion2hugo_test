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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=dbaaf41c0b14e6a908973adc158675ba727f7698ca024dabc790572e0ccccae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=90e00ed2c25c05790a2c9b4fd24e5196aee3e6de93889f4793df2279a7c85a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=2a211440c2e66eee254c23c263599afba665c88154adb031e931681cdfee656e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=f9da1bdd55145f70f86119449e547f3a2f420822b2a73910df230feb481b378e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=67969dde6f48dae86307fb252fc2dd1c33fb4d55eab531f6df533b78d5d144e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=5d2335ed6029494ec0cfa2a30a5160e678add89b089bc7264350a20beba10943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=de4216d61f7f0ba41f0faba1aba59afc4bde47a5f45cdd216e221a4a4fce97b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=2ed7e19f0546fd44f3eb5e15858f0b565c562b83e046000cbe59aab1baa6cd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=0fe3062c86ff177ef6e82432b99de6937cad0672727c56401951156a73dc5805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=7b0f8dab56c0ffa67781b6e853226fc2dde9db28ac7b38db28db3802b719517f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=84e41505bcea0c28f9bff70fe5d02dcb5481ed766a87c4f4da96ae5786a1ee7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=f70d2c69108d85933d1338b7f250fb6924d5e60a6a18b18bb70ccd9733218eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SVCDXZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvi9DIadTG2v0rj3jci6k2xjeJSmwMFkxngBmqAqFDoAiAYNQ6WlHt9j1fS9bs2j0BkXAZ%2Fz8IyOZrDhmpYBUgfryr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM2b%2F0Wr4PaFJh5Z9LKtwDu4VGc3IUPVAiRyfYqYgBjVz%2F2vsiu20qHzlnTEC%2F6ccqZJSJ9FFUb4fTv92chH%2FsbF77%2BJXZt5sLAfCNAVPnuBOoQZql8rv%2BCILxkQ6TssvTDfCw%2B3lG0zU9LgBmRM4JvlzGIyZ3TJcoYEHh%2BhxuNEoXoNo80O7EhAe8KhHr8ipYOhuYG5gTbkQc4kgpE4i4rk7e%2BOhoBhcCY9vqke4pIFUXARLG7tdNsFPq%2B%2BoroWX7myTyyauHZhQ4v6jJTPfiWLCyl41eMFWa3tbHu%2F%2B%2FPn5sFLsTr1cRVe%2BcSpmh06%2Fg%2FaAjry7Ez%2FYRwzn0895RiUfQzVz%2BRw8FLVAfdBLBN6%2FCxKcFyKSBmrxggUM7BbtLEmqzIkbjVWioT44EGbETiU13tTk3m2bYqZpNQBv93xxyfvGxNObzkV3GZb2bONMBJHr18IyAcEk4SPuB2CUarYfkU1pM2JWFJhZhq5PcIRBCqEIAIn%2FBEyDOJx1QFLiocqErJ45xDiZqrrEiMk0Eqz9UScsFMkor8i%2BOCWY5hC1VGNx8FHempTevcd5ePrR3UCgDFswWzgVmLkR2%2BkQ9SBvcVxiA44phTPiO%2B6pzgnVu8glD3%2F6yMG0Tj2G30R9gB0pDS0woxYBKgjAwrba8xAY6pgGoA7B%2Bh%2BKbRPimbjj%2BYy8NlnJ4pIK%2BJDst4Oi2p7N3fKSsN0yVP%2Flzf3ntaQMMRCktv9OYJYwx3cHC1a0c%2FTBNuaBSAlIzlMfKpppXLTZk%2FNoQBEHFKuSeyb7swKo0xUKXsfvGftHkaQQBCUBdC9C5C%2B0Whw%2BQJXULXLaE9ftRh6nKW9Ei2wH4hfWKmpp2W3at5u1Jx8iLksjQVwwWA4PQYKwACsfC&X-Amz-Signature=28557aa518a28b989686e05fc317065fc1a0624cb0175846682677d4613573fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
