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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=57604d80b4c265e2b3e3006e79d26b49e413992b884ea95db84d57b31b55af7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=eadfce6d7eb9160a9d2db7e9421ace0bf5eaf6b8ff13910ef3b0bd13ad568afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=ba8deeb393e5f31be2d6ee28c22b4725b96b34f53db1744c8fe223d404d89100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=1cf1b2c38f40c731e5ae4f88cc186c79f6a9f11ed2ef7aa29c9a3db559f619ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=d433589b05adbc852e3c4b927ad3e4baf4d6fb2916e0653d11eb40e6a36f233e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=158fbc7821690c1d9663b88e07a8ae3027bdb671ccea7deff8149f13432c1710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=d0490bda3b952886880ec326b2e92059c88251831b5b0a89baf83c2e10a4e00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=31a99fc585e484ddbb79d640b4eb48321cd03931ea085bfca523d8e7975accf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=ec47294ac367c95f33aac7cfba98a64d5a00772636739082e2a02a265749da7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=9ae7cd375293cb0e6de54434fe67f26b5f4422b32718ecdcbbf5b7e46686f078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=ef9e36a3521f7aecbe86d442f5b9ac5ff1b28455c0d6d51835a92ab35ff5be6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=3e5ddabfd296104393057bccfbc67a3257b603c714e488fca306ac9b108da8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ653HD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ry9z3MJ5cBBcm6MPEzY26BZ4at0fpJD7jrRscNzJigIgAQ0i%2BzZckLNAjCkQJFhxRSbF%2FNUmYjOahrCJ7W8pCgoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrBVK8Ai9o0pkRY7ircA0b59WuCW2czlt9WKUIhRbnr3yvK22%2FNk0F%2FVtn2K4cAZTCI7ZjmMQ6OLRMKcQWJFmjoZ9UOrN9bk4FPUiiXA8ALlelUS5eFJrSZgAElfC0razUlHYG%2BdM5aHCEuNG%2BxdC3mAxUC1HgmQn6zPMqvgdy81LwSwKCEXry7Tjw57Tevd6GjNpY%2BpQFZzhxxAqsIc7iMREzfOXorb77mZvZMEHy9yUNhivWAh1Ceyp%2FYStMKNp2jgkBwAfbF53PVCJciAwfmxJMHTXnxHFDmIgp74tSuxL63qa97aBh0NtYNaYexU2mmkuvalPK7BZ7kxXmdLkx8zguDGaW89XusktODivxRO7SBR7f03IX888SFXRbcX1rpBdax9%2FHDNPciTdMwoxDtWNkOM3TQR8tZ9wlLJ1ckKr3fem%2B%2FkkIIqGVDLG1n%2F%2FLtDrk15qeK7kmzKFeizL7i4b8AnlAhGURTMyZI3qjRVyWapENEO7Kvp4na%2B4F0FiTTjT4pTqQ7kT35lWLFAcEYLNxUDmnw%2F7YYRHf9v%2F0KXKxX4OZ3Ypjsr0n8kjQIZPP9EFOz6hgALIjZFM3NMa14j1dOAyHMelEA4vRtwgHkLPqMPhHtJ1UaqeQjpaLysJoUz7VhAWA87QRQMNC648QGOqUBRjFlcgeDwN8QrDpdFGdooAI%2FK2ONHfYPYghYu97OxJhqjLu6fpcoWpGwWRAL6JaJf8NMmQ42Snsz7dLxqZIJeOskNzp9NQJLh6g8BUAs9EFd9IOyAPRKT%2FRrvF0VlbT%2BjGMfrrr1q5Q8bgrFIJoAZJG5dG3QqFVF9GGNoLcx%2BWns5AG2%2FVaCOfoDEXO7eNdYDAA8EErswVyokvOXuI6Mwy5fhuCH&X-Amz-Signature=6e4116930bd5be7dff8ea709617e4715a8b02d9cf2b5c6e1fc71581b7642aae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
