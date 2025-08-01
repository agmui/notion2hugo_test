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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=e4b2243aa2371a29014e348d2cfd86abe4a21cab6aaf0941101586c7ed4e2376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=95221dfbedbf5139ba558f29baa21c8362d97b9ed92c8d8d68b9c4aa7189731f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=f181b90fa26a7f0a4fac0ce9f7b136eee77cb9f05c56dea949099c40750e311a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=237cc4becd0c5f72452c0fbc6e439deb441b678af25c3b5fd2090b3b76e3e3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=40c424d277fe8dd310d4a75a7e04cadc16444113fd4d7d4f2562b832f4907336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=45a1b47c51d7f121cf06e8c7e39d7d2b67a30501910b3f3995dbf5b25560c10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=5f3f4582519eb6e17baf1d43cf7239791ba1ba51a271092008cc3244ade6ea84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=021e6c73e60c60f360ed6dc3dafba75ea89afbb3ce254b1c9e06ddd3724b39d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=fe2f598ebaf53fd559c30aa1c42b23ad99aed2c16b85c3d34b86a6020f227528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=19d6fbc2628f472688eacb5710fb7b23ac69268a08a11f94c12b7f6a9ca42a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=3e622cc70765f7eba6ba00c6496f441b56ea5b5b79b6ebad1630b45390e7397d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=cd63bb7d25591ffaa87563ced8de021b9c13e7ac8f27e3f8f80854fbd91e9e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXE3J5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXl6fXZXRCVK0myb%2BIaFJVP00QsvEo%2Bh3zRfvl8WUnlAIhANUsiZo6jRnuMBQ1v%2F71CdsjjgBNnyatLiMoUgk4GmOoKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbsDiG2QcwJhIec4kq3AOB1rxvNtl4zc7U6vKgcmzHkKceV%2BkkDslE%2BR%2FPwr1MAWfHUaD%2B0%2BzMWqiwSDjX4SC9wDZ7Z%2FAgF0pVGDPIbgca%2Fzqrv%2F5YEFjh%2FMpMHeYRsKN6dv7Nl6CdVTMbMmQ5S%2Fzrvrc6bEnmPATLOnZKkupDnpkYFbpPthvXWKFpHYDod%2B%2Bp6FRHq3%2FCSk5S%2BZ%2BkJ0nOZZXhsGtyD7ZsxkIZ4gTCHv3jmJoLX71T0Z%2FymuBYFJxNPgG19zESwwOGtUCi6ZBlXsX67Og9guHWY8dp7uo688HaqcXVQ4gckKIBM%2Bfh52B0ykStWFnQuJPZ35JFL%2F%2FNqovqHIbKo6fqkRnmYDzJI4gNGPqK4u5eqB7zmcS76LBfhC6vWxgS3ykB978ZwjTpWkxCCZj5FWpRk8r0hu1N4jpZUhAneGDwou0z4nx0GtTO09LZpvfNmtj7RJpcdhsbSX3T94CjoI41tvTzqznLL%2FVuySpw0BfqDORxvjDkSPr2bjH7pUTkUtj56N6%2FrPjMoNgDrku0JnihM0l3es4SDStvVreJwxlNfixTM9bdReofJ9QEs6J%2FZITRLSRsME2QkW7bZwTpe%2B43rL7ZVaMMslW6jRBU%2BsMX4qxGNs5o5xvtCnn0kAdxzelPizDayrDEBjqkATUN%2F%2BYKSXuGHCoqUns72RLI1mXOjXzkOfOevO%2BJMTemDZ3oXT%2BtXCuJ4LDMSSfuhbtz88Z2YSDviyk%2FUD8xOJ6ZHTFHkeIpuyGY%2BcSJjr0w1mo5wMTCYei79qZUmS16Q6hnp64NGyatRD2GzFTHvqUr5jkC%2B63CkV61gLzFji%2BuAv08cZkpv7msG8lpnSD7MipzMAgXgN3r1bo1XNoHdVctc%2FgK&X-Amz-Signature=666f6bdcc22c8a6112eb63eec59c04749ef8cab2ea48c8da1ba8685f16242792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
