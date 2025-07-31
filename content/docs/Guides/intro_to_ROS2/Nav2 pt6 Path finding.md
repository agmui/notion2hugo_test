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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=9289b97bacff5444bec8c4cffb01773e89471c20d299ffb8675a9f4b05961f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=c9aeec7115b9c976d86760f2e0b0da0ee004aa627e289512e0192562e4854fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=bb9560fc34e87fcd963c8d92160dcd9e78aafdad7d6f3d1fc294769e35423a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=b5233d48124c45989fdf0ceb6aced2f3090c8a7456813f0672cb42bc40fc8528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=1d6a744e153fc5883dc11296942dc62426cf6d30fd6adfaf3365ed9cb64d2ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=b725190ee0bcde3efa2bed9ae32b9f6a97cad21706c931fba79503493c7d4160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=dc6229adb5a92ca506a832bdb5f32868a73230131d2872a2edb774941b072132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=e9620919d5b01572cebe274570e81459080f19644cd1a2ee51194edba6abdccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=39bd6f153dad8ce9d992609d133f4ea4934f52d23ae117275ea32eb7ae3cc33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=134fcbb8522cf38f96f3716d67db6089e35bb3e7274532a7db22845ceb1cf56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=385a8611eae2e03a1a12397f10ecf68c742155fdf0742150ff5052923c4f965b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=594e7d81aa620875242a0647114c462e3ffe33e3998ff87a2bd4b7f19f85414a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q534F55I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMBePA%2FS6r%2FMqkaf3N1rL2gSgbSv%2BdAaw9hXEAeZXCSAiEAk%2Bz%2FqBreGvsnJG6gWLxpiH%2FnU4KnAWxG9tDy%2Fuy7WxYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFPBe0UV%2FEOJIjEYCrcA733SAWBXkkCwBF2j03gxZ%2Brcv4aJtQFRaBeu9BG0XDJXr%2B2aFTSKrD4utLDxX0cj0NNck97aFL1vlp3yQn1%2BTRI14YtVn6%2F2xSkWlhCzlWN0xc5wEYF183j7O11ktQi9ACucCbC6%2BlSqAYkhBjc0w6PcssPhF3BEbYymR5ZIEIb7VfRGDRx%2BLNn0jKXobUzuEPE1tlDoekekRHh5%2FobNdfUVuKe%2BLItutjK0iRRGCEqtQprPV5o3WBfMw%2BxtjSeYk%2FzAyZEhlFRstDr8alAXkkz%2BUd5f6VEctoiNoFQLJozWiqVr0l7ZxXZGdoHB3ocAVmAekM0ID1urzFumLKaj%2FM62B5N%2BIl2g4HyXuf2BICC%2BcJKKt0EyDIg0K4%2F1pFQIufJ95IF1IQwPXEn%2FG5cJ7IDiDGs3OqOXXMd2D2l7o8xhqWB0Tuq%2FiToop%2F48TG6oN9%2F58e03ShLHJ3yK8y%2BR0SW4IigJyS%2Bt9ZWgSKesXEG4qfMFZz8kM%2FselHsPOArDe8mozndkI561UL5akfyP3H5QytJOsDy%2BTOvJqJTE8golVzcNomOiGHg2GI4sVoy%2B9nBbMgqdyreS4ZdHd5wKKjcLHLjxYpcPPVT8y0z0GC%2FGLLqovE%2Fnc1%2B1h%2BOMJSgqsQGOqUB8rW9QT4cRW%2BhPnKQWMqq8hjxeo%2BCmALao3hrhIjh9BfBMxwEl%2Fk7bHpHbDacETKBulJo2WUgnH1yEmnDgxcTURXT23ETxrM3VLCC7ZzsLTIu8Lf9%2F%2BiNegUmEv0K7sekzVY%2BM1j35G8uZa7Uf66rTb%2FYkTYoYdvmry1n1aODVJVFg2i8xIQkMTCNoYAlSHJEZypUeL3YmBY1jQNWAnWbfMkJ40C%2B&X-Amz-Signature=98d5980e53386f99f09a69b8b8fc421cd39f7fbb6b52326adab16cd80348ba63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
