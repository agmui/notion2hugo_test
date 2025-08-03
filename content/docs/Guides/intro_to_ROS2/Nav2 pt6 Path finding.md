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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=db6bb2a952d2023996dc42d464e1a8b5ef201f479dc40203a37707ad8c89048e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=238ece0342c2808ead09fa146feb8c00f803d634a349f6960e289bb825790383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=2bfe5f3a91c439fa142664f140972d72f4e80ddfc5b45854926b62a2dc6ef8d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=1b739d4205f91629271de1d36282045060bee47d55202c522fc5225bb7117907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=22e70f07f2317b34b3ccddc5c25d3d1eac062c0ad502c18186d903d224c3e170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=6e4b2d754d9ab7811708ed0a7be8c41a35dbf1592b779669397abfb2f9deed25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=24dc9f7900b50ac41abf5b7317ba888c98d95bc5bce20542afaa491728b3ee24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=728b689acc5fd2bea4951d1ac520ecc728e320e02631a07a18bd0d54762c55df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=0f253660bcc1334a75ff5f63be3a0b7543ea4dade22a430bff0f4f25604d6e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=4c9075c6a0f82c3b6ad22161a64dcbb5dfa68007710798711b1dd9ec32d1eb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=c3d0577533d2924c06354254066adad2dc03e3333766cc3c800ea5ae0a1486ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=5e82021a64c2790595d2a339af4c7d31472008c5675ca04c828295f6569c1ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YLE2VL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnatYxFuP1qfjf2%2BA6QtY8PAhP7zOMn1wnYwpxUZUh9AiAzJhAuN%2FwPYcC%2BCSs3OeLuixlfKXE1TFl8IBlyxFZKVSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT3g7P3meIMNyhXHuKtwDqb8t8WfBDJtmG8BQufD3tCHxXtRUwpGbSPz%2FpKHUGC8ReO8rAEHQgEqqGMty0NsNcHphGVSLkCoYfU22KsJVYUFkF2yljtqRCg4YC8Ivz1KMR0U8%2BWrmazOyAqs4X31sAG2mFJwSMY0LLABkadAn6VO0922ELjEOUV4z%2BianK0pw8Rtg85Gzpdq1T2mCsk6bpQUEHO%2FeXcBKrjO2%2FiNAXBN2%2BPzjeHaLD7hsqNQhzc7mLHhRbFZCFxzUIuJ%2FfonxUuKH33ymNZ3SwgXOtoVnE8Yw7POmlcrlOaKcRV4al27Ub0vUIBkex2GE3JG8R30BuqOVs1%2F4kJX7vwKyLR8YM40CMrrKcPiKqekW%2FM3HpS%2FnQfieOHR5Xod2zGrJ0kU%2FWZv9HDpCb202Vk1QsxBKeEBMI087pVMkQAN3S6%2FQlstxWGGUjIduPSo4hiNM8fyHFmEQUjUlRvTL9h3S7Fwz79zkI41%2FpfM7N7HlAe%2BVQdEcJOFHiYcrcQZmPAl1FfcAh3FZKs%2BcPHz9BWIJ47c1YuRywXlwGZufdDlxTnmckN4pOpAgjhIiz2BneghthWOP1Cr42L20k50BNLerKyJd1nvqQU2djZtbcavysgFiLmRmFjLpEunzSbG0AnYw69G9xAY6pgH2j2QhYV8PeGXkbZ6zmUHKBtI5sO7cLhz8nc9RVIH0kuUSIDMVko8Dn5nyU4gNjwT27fBIBzuu7npiR0F8ObSE2t15sQ73VEX7VZ7LqimsPFyq34g9Wbp7eS3mF6qLcH9mRXHDDzWB8okBRRAnV%2FcdFJT52knWhULNd9ex7NbaJkK11IJioDeeHtsDsxWRCZ4wkOHdCtnukEL9sr3OUfddvo6S9PJg&X-Amz-Signature=5ef5bc7f4cbf0f4073c6479ba1fc175f69eb552cf7f566b7d83be9bec7458bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
