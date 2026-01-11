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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=906023a1672d2a5d5d8351e40c813167151c416f9508eb77f9849ba7670580bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=03c1b64f4f3522522f3811a4559981aad5f286533d817a9afac31cff15cc407c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=d36ee05daa7c6d5d18d7e7dd1a7d814c2e1be14843f18193acba7dbe50ad5b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=a9a51ab713d184a83153730fe5a8a2c32a238a89d11d20105db33ef32ca1a384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=3207bb80cbce5c2f5e0e7f92baeb514e9d90917a355d9b32416fb4b97295b9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=1ee0c0c806ea51deb2392af3c26913b5a76a76f329cf7972f6f255db16005022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=39da091044a9089c13327c4322c25a221eebaa53e82667869054811bd2326ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=104e2adc746df115f7b1e28102190261223e2ef4a71526dea72875faa74e7b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=d4ab225db95f1ff1709b276348416a9b24f840fee1bdd347ddd56643f58e6d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=880e45cc801e9ddd00c78dabb07ee546f35b78b97d653e01b05d483f1f2859e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=98dadc6a357ad515d8b2f337c5119ff3d8682b10e8b417d4169a1bded4dee02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=cfb17f4f9aa29673670e7ba5062153bd412c404e209ed78b3eae0b511b92395e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USVLJZM%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDeRZZztGN6Y56CzeNbtT6y%2FlNnQn6wZCCHmEI%2FFMYhBQIhANnioiaQ3QewgzRlfuJ0Tanr0sca55DR6xevn1P3hD5kKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmm0XVUmpxC9xBhjwq3ANxLpsCmMiw8zo5Il%2FoheJwfXeJ%2FkuKh6lPXay5MwvNfxDizQPm3MjsWI84Met3nKvrN%2Bx5rgU6hdLfPpG%2FWMJIMKF3MJLhu40pFSv%2FPnbi5ySepSIR8C0%2BHIWQT47SrsFp8e9kv2UARc%2BhM4Ckr6UX5IoajW9XRqzwTIIvcDe%2FtvsVNfuNKlD%2FUJ3mjQFuNK1Zjctv7X2Fvduglipic3CabA61FboypGzjXb52b2a5DT8wuf2AH8H2VwtiTV7B9yWlt7CX%2F3SrLOGgeqCO4nANI8dlcE9v%2Bos4fHitv3ix9LRgZYn1dhfYevC3cxGRbkdA19XFE6QKpWMfQeqtYK%2BZDtzu7BCGsmZFPmW9BPi2zT%2B9MUIBY5f2TbyCaZ0cUoXNZZTegx%2BvGEOVOfXgGPjCDrglFyI4QhDZMCxd7Mrdgk3WhR9T9w%2Bv7naKarBScx4Njj4wyF2qHXk9byRnNfB9A2p1yqWmoRdGCx1qz27i%2Ft44nMYlSGhE8A5jovhV1yH4QYNvZsC9%2FUdAE1o8CVQGP1dpxSeSqZgBFN9pYqwCOM2qpPdo3teSYPprpZayk0obKTV%2BM9H11qPTOe60iEiP7v9adMKJbfkfZpIzUn%2B0whX6cbehBgjREzNoPDD1gIzLBjqkAcR6pTjhrEWJzR%2BdAC6dn8v1tpy6QcV0n919GNbOmDtOIWDTMC8nTzvePLQTqOvnlUgCHFrgPZ7Xh%2FdIPwyqFiOCwjJrzXHCXl24NHB9Znr%2BRY2RLBq3GwWHkEpitGKoWEg3j5PTxVI%2F0LwCo9DXO0VFfDpJEM29iOZadCgvMXm32Ug5FfT8WOL5psuqkVKa9BzI91fYZRz8U%2F29voNqu7C3HtNB&X-Amz-Signature=6dbb68c9c96a6457459054306791eeba2137155d01bbb3be94ba3b7ea8a26023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
