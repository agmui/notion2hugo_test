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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=a4a0bc6f10e9c46da6193f42f18343619beac800f99b475ec7971b329166736d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=ab49878c0d2f732b5577b2be26a562dafc53d223d1e1d95201f6bb56e0fd1186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=609c6a9d88d97c6f2f9cdef647c39e3336fb49e1015660eec386df55006102cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=e57e97dad01aa8b0f67f2fe039d85ed05cec0fd5fedb6d938b98612af5aa15c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=a45b7a74a2dcf2652d012b0848e7e71f0fdbde48d3ee076e52a56a3ec7dc349f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=a3b5560fb2eecc114df683bb17dbe0cbc05f37af3eba2b98b2ed76f40c130f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=651f68e240949f7b25a3d08b86ec833f76320fa8090cef637b1972202881c343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=dc5ec66fac377f665ba83271b700116ab2c507cc25d4bb63aa048ca848917f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=ec4eaf252b654c2ac051ab389be2fec27564f5f3f3dbd959a0dda93c72a8ea8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=48a481287d57b49ae453bbe5e2a17bb8f0b01f4594e88a24025d267d6c1d002b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=47da4986e285df7839bcb9bc66e56bd5c1dd0fe8172f996b3bf50c5532e5b430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=10a2306e9e21d3d4409441a9134891e313fcf448b04a0134421db877cc4a2b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDZSGJ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE1wylcOFpe%2F%2FeyachsfBYd3s2CcIQq72sRtlWzoU%2BPjAiAQvVHwX2l9zjhgBhv%2BifI5iy6iFs44lEq1UOZ2hMqVkir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMJ3v9RH9J6pUJ5IMsKtwDfEmStii5RevTLs17rQSqT8Ve130RI5wS7efumzUsparxF7Q7Zp7Z8li81noqaHMrUBBGmDGY%2FVEDHBpLz6s4RtgcmyixCm1%2FK7ideH%2FLETA0o4u%2BdSFlJU4gMrXgz0sWSGZpBkHtOrBBTWfd9%2B34aocLsIBxAeQecqWetVy5SJSQCaiG%2BTo0XP1yrLnjInZx60yf6oFoWikmwX207PfAJseqNUcUNau%2BNERSQa7I5NoDXMqD9X6w5%2BVCgvAqJ%2B1Tk%2Bu%2BHlZpMoIStTBj031b3MPe64GUmEUlQcafJwRc1YNQ0ph2gbZpOoNsei9FJ4yE6Zr5N9tS1RsVR1%2F5B91GHebrat9AQYIdJUEr1la2KrjJftIflSnabye%2FqHTU34a1uO6vAPVW7J1hmXJ1cBy4s6WE4vagfdZZ%2FNabJ%2F98N44FDKno1tVsVjMkgI%2B8oIDJHJsHmM%2BzY6JyFhppLfFXNIEiOWqBzcOlR3svqmcD8ZUUwbR6Sr1QXX%2B4VceyrJ%2F4KbGX7os4caWegXz25p0cZxelbeSSwVU%2FaomX8T%2FuAIaNPnuxfd3H4TYsvY99W8AeECxXrLthh%2F1IQM45otes11IpAQ9Loeo2P8ZQP2KfYZo%2F5ItC1iaDV8KpuOUwge77xAY6pgHOEO9sbkiOfmEFrB9h6JvgBb7t4SU3gy7ahyy4PhcqpMzD8okgy0Vpw5KlgQb7UVfOj23A1%2FGfsAKnfz8F6n%2F5dynz6BfA%2B51whTifL55Oc0i%2FmufUojNoB%2Bas9tqhkHz%2BWf1G2IZnja%2B%2BXiP%2FEk%2FFK0zhL6Snpqh5Wx0JX8TjHz%2FZz34BlnOeLWhIDdekBaeR%2BlOKrb0rsv0jqAITSRqeBlsq7ejT&X-Amz-Signature=bb2bf92f3e66e439e1c4588f75856c4f9c076d8d46d1472c113c9d07a1058dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
