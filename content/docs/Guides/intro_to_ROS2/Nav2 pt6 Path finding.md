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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=439f2f9009c4df1f9e3bb94fb26ffbf06ff4b0d597b5eba09b5da0709d3e5823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=197fcdad04ec0aca8f5033ab6cabdf2fc179c280a9556d088de2a86fcebbb0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=4b88469caabe89342341e69625ac003c009d0af61b0a42a3df4b1e2d1b2ea2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=899f4635eda3626e9084967520f7247eb6d343165894769960ef689edec39003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=41d2160efbb5e4cd3525c4ab8239cf0cc1ef368cbad585f093b1ed5df8e6192b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=1b281c27d1168918ac1be833bacfb5e193b3b539b95f4cd56ad52f73b97bc99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=61dad1a0c5dd474fab1c9911547a274b78dfac985e7941b76aa47a2ab8dbd5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=a9bbce25a4b578329cb82f0dba6d29f7060611f88e981f9a95a5163299a96b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=e511c87de79ef97bb641011ad0841a0e6391e4308a84a765f20d1ce0e9a764a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=283624474913983a913056ceb55e46b7ea7e6b46b129751d8463339d57576903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=180d7c8ebe5a1e86f3600ace8d83393a15bbf17e6c9c3c2e47914ad986299594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=31936da11d975fdeb854d5a5b968d1ece73c982dae7a93e2d411f0394c1ff522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTXJ75X%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwHRV46rNdHqUzfB9HqEAQfff%2BwnlrwfpDBw387VeTTAiEA0OoAQReLbaXCb1oGS%2BKOIjNu03cAPpy%2FqIpU5ddLh90qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtmv77BQxGXN8Fg9SrcAy0DUQOFqkzAcp8K%2FSDhEIjfQxU%2FdxrC0zzD6oY%2BOodlQ%2BbvhKy%2F1r2NTGhVGhnouqMuqVBvQMuf6bIk1uqr7cJTQcnu0PmRGULwln%2BXp3k2F9VNHT8i4lKNgniU2RVVb93u5jxZ1jqQ%2FJpSBRFBpcOWvhrZK9ENHcEaTj%2FweBY1Hn8wo410TSaK2iuJlI5rWEn%2FTmvoXtGX%2F25aYgqrBMUqBHa%2F2nWJnv8HudNQ3vzyi%2FsGPIU6zxdt0SupQ6xf0%2FZm8zoh%2FlTx5scNXch%2FKdeBCNrIARju%2FYAOfxpGo6yJL%2BbMVeajibldnA4K7aqeklT2MZhSAsgG94mZtzkAoDUA3yDPaD1zQqmnKG0Vhl2jCtpZFKTHm0VWX4JezK3aG48XWBgdfTP8ENdZSEv%2FRFK8SmE2SAB%2BHEfIfjJiVU67dmwaDq8lS2QkjHv4UqwgvjQzjzOQ8dU%2FPJtWtnYAYH3OZHqnXdMSpdUsB6SgrMyOfH5BrrvJ6RRCLR9ornel%2BqEiauTU2q%2Fa75IVD0qzcpvPdS6qrDm7WIvdjZQu%2BYfYO%2FP083EdH6fRC4HxHGHqNVRMRyXskshMs7NaItLaE6VyFLNbkMObyC%2FEJL9EBJoQUDHpI40YGPuAJgP0MMz09ccGOqUBCu%2FjdtrSD4QtKUHkJ3eYyfTZGKtOg2eZcSFmxvdD5%2B4TsyV%2FL8EQMah2dYYlLN%2Bwm%2FUXehAoCMgGEg8XN1%2BEsmwBDfo7RQm%2BZhy1%2F3%2Fcvh9pgix4JVp92Es5Yg9cakg6bMJBRDgi1%2BMs2u6u9eqSZELt1CbTfnaA3KYsbRFG5nw1lxiFQBVfSEgEka9ZZ%2FT2AXT1ly44QG5d8LZ%2Fmw5UUClvMVIR&X-Amz-Signature=7701b7126ddbcc0aa6827f4807cb77fb2093128580f5644086d928da95e28177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
