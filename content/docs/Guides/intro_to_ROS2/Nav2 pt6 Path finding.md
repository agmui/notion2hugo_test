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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=3a1cfc77a9c4121e8500342db7d175e495aee4a42056e3d269e9051db03c597c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=63879315e1b6963e1e731cb36e33132f0ebc42da351c85e36930eca9d20e52a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=43176a8115a04d0a147ef48a5bc5f0865fe807ec9a2affbb69ea09fe2a9e04b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=7e5918ad069cedb3ff85c10ae216a9e8128585733adc2b5a9bf7e4372e2fb277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=e2fc985a5780c60544e0723dd975553002fdd735e0bba428d2d3347902e605ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=c6958a26dba741789eec919c60c8ae9d88bfea0a53e1d346d16e1df468e6db9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=6c9d06e1e06843dcca601cba9dbbf6ff9a7c9c9192aff29cc5687de92dde4dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=eeb7dbd9e2582ca00fa73593d7e0a935caa0958873c101803cb902bde401b5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=7270ab4c4ce4c9680ee7bb323a9a4551486124974ca9b095415cc31eceeab30b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=5e124808feda48dcbfb895e0fe4b39394daf1497ece535169c47e185af9cd997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=e18806f8e99f32fa669799a03e15d6107e2565a170737a8f1f55ed943c2a2c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=7a87b5e95375f399dabe1ed2a2d094d59d6c41095ac7e91cf35028d18b2ecdb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJL5SQET%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAoBMR%2FIhytBoHiGW9n2cLllIG%2BJgSGasSkfH78URHMWAiEAmYt5xmoNmRSxb%2FTpOJju9foxgWIbQ0yYQXqcgeC4QgEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGOMLRckDXf6R86tNCrcA%2BmlfVgeolRwXXz71tZ1lbUNp0H8KnxD4cMTu4wuIAD19ROHUCm3jOtOkQiX4i4h2ofzbSmzZolqIN1qxm2n0FxejgfI%2F5XmzxdclaCmKrISF3ZtOJ98BoH3Z5gnEvTzg8q3HmkerVabe8737L6FZoIwS9LWGn7JuijewX657s2fJAH2bPdYqhsXqwf%2BVBKBsMzlEKnaZBsle7jBOWQfZlteqwlHDQvs%2F%2FUVGIQxy%2Fu%2BlSySGz%2FWeIMhJ1XBIV93b%2B%2FfkdhnL7wR2EnUn%2BouPv%2FlCkE1qlDKbh9erMcHo6L1DchZ7Hw6rr3YtaEDfeuX%2F6nexgn7NQPb73QnAjELqebleCOv6R7%2FwEPLF7ZABhAZOiGHBCGRd1Gu03%2BfCy0Nvwnoj2miclrhkmDut4pm80ECGd1VE%2BHwG3L9nBeW96HNZ7y%2BkU1YtK6G%2FUUhNRO%2B%2Fi0ddutx92ekKkVF3WJX6m2LrWKc10JLhFP1zfMtg32Y60hEKjnMxIadHDJAzn8rIxi86AbCASYXwLztYZB%2BcJ16VvRf9hNRwMdBRY3ONBh%2BMc6FsjbOxgvdse8eGFCIVjwpuHQePGy8jFHttpefMcQtDbgpMo6gaP7K1MytTgkGKjTWjeMJ5dZN4%2BoYMODvy8QGOqUBRMTjOdpJgyCeUO5HDG204V6L3dKXMyv5kt%2BYn0rLMbneAra%2FlylzmhkbcDZXoxAE8TqksAzgsHQcn03q5fHguEISy%2BKksmNUNSQXbwkdzlazMcrhuCAr8%2BqBMvnnE3jGG4zX6Ne0amsL9wgX%2BqC1W4QKcf8y%2FCZLVfZ2hejlanpm1Aoe3wE0Ajxh1XuAoEjviwldIZxDZIXR393GrFpmdSlvI%2Bnh&X-Amz-Signature=560b468df4a6e6aadea9f3f6ff35a3fda594336beda70000e86f481fd508217b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
