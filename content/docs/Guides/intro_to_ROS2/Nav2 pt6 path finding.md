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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=be7c02fd3084ba4aecb872afd65357e1d78f2f62f115c4a517ad232b44a81cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=da9d68f415b9e6dd4651785abd73f808169ff81011c5a044a1630f853c63a141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=cb1e849c307f8714f542fb7e8c07ff77b43335138a32500648c6f5d3386fdbfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=841629d5557972f948d98e4577b791ebba6bb994bf33916be5ca7141725e450b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=85ac4e48c913245c060875737ecac3afb410672c13bfd32e7d2b9eeacc002783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=9aa2561989e8a92f3eaa461da7bee898cae01c3500f02b6069fb0d8037fca15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=5d21cf6eaa1fb527d12f8eedccf1859bcce542bced3d849140c118d16b27d9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=2bd54110ca8166a081f942b3f4f8cc02dd3248fdeb7b82c761cb117dcb74c672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=4e67566e41a74d82968c32bd38a3ab04008eb94d3ad37bc1ebceeccc564e49c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=d12fb6b193fd001be0757a9461ee92c7c3e5a9b6cbb2fe0e8938fca77148254f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=07e666af92f68af213c248a8b3c6a6165ce7fa472e07adef900190cc4a73d920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=49f6de197b14d354e93a530dfcdec78f18c3c4a63fddef54afeeb6f1aea56b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WLVJV6R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6hXM9DLhp6s0GYDmEDqgCi0VYJcTekkbqepy9LLoDfAiEA35ZIhxzxZYjrV2ZVmdI22luu%2FIhQJSyXxytckpB1bfAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq6whMmWg43J%2BxU9SrcAwpfnVoLJflVp6wyLkUgwK7g0wVRGFYftcsZeEVq9YHok2njltc7QUSiZ3j3ShuIvDFFrOqc9t1LJvYgL%2B0UrOnYlhSOdeWJE%2BGUdIzeolcAn0Hp01DZfSRgpHsWye3pOVmf9Deqk%2F6tFaGnRJXt8ooVFdmRTqCPphm1gTICiQxNGfGVs6yk6M1LTH3bzaerio3JovDksT724p6ezATPVYbydxy4IuEs9UhuQwEHuwkUpg4Ym%2BNh8Tl32vm5PEaW1JVFln1kzawbQ59Ec8WM62tD5885moTHUJWN3fyu6OwVTD%2FZTIGSCCFKVara43nGH7uJ%2BcyqzuiARKTbZNapH56whfQz3UeMxJc1z5ak1u60zPS3Gxh2aANAoWMAeBfi5lad4PXE2bm4EeXcawJJ8k1RERdd10tBVwbeCIAKcRu5wAcWw6bsDV0UMWwsNjaDq8LKRoNZuov%2B%2Ftq1da3Vj6kmk4P9wdH8fuY7hmjFB6%2B%2FNRTaSq2BnIlKL2te60VUgYF7X8xzeeps30VenAaLcs7%2FssFRHH8JUyrqkNll8Gs4wwOlCgW1szzJRmUWYSzTG3o5kmSy67%2F%2Bn8Wy3uN0swc%2BLYHQCBfaiqSuXzdbIrwQJXG3NBbrtR2zjHiZMJKupMQGOqUBbuB1d4SfCgo27vXzw38tNzkc%2Bl5xp0Lz2xYf3l9SulafFycSTcBidi7z2bTrn36CTzbgMQ1tM0vWErL3KmTnAATQuXjTvr4oT0IyDGWbdhs73sfhvOZKBnFOo%2FR%2FxUneKzYFe0L8LR5hlpzms6Ryhqx9BgDZFQOFvWQo%2F3goxlNekEVAMem8xG7OoqFUR4RWnJcE0U7H2oeKschDj9YmhVm0WIBe&X-Amz-Signature=e91947c322c9603b177a75ff1c28b50a6b021ee801f7a57f168dbcd75b05b216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
