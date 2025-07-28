---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJNZSHY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDbB0ImOJmhO3pmljiNrAXVQlpjg2lHmTRY0PmJNUhhxAIgdLnDh6M9oCVZ%2F289fSSAkNyhlPixsC4pSe0LpUnrNYwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1K7yVRAI2rz2gOrCrcAwZfLHuQOB%2B1TnhSZ0uMC%2FCxKSbHDHtsXuJ8ZZUgPAZt5HdWBsoGBWrh02IoPcXJ9fdbn2YBtHVpJws17ObyM38bglECMAMhUxmZ4KlpHlQV%2BFl%2BcBJV0agmKiiYfYQle59iTUvy%2Fk6%2FUFjmLPEOV%2BjyDaQOBdLa8Qwihoc5nNN6kZ1a41HW64Iel%2BwjZHQRlEOjef4Bc83iFj6ZvS65H07V3qN%2F%2BczTNmf38vhRR78mDdZLO7SHanNqdRNpQrtZ%2FuuuHTJdfeadyy71dlhMgtF5Hy2ry1rthGdgLB606X2YwErtVNRAUjvtrEKovaZHhBylA2m0hrHvY%2Bra6X4Ok8g5OmvP%2BvsRRV9aTHJTvcXrEbLGnX%2BiFdHqgia7vGjlzzlIo3MW9ssgt88kTzpHDhP8%2BdxLsVQtZKETTL4dh0tsnA%2BWkbJ0%2B2w86TlluDukSEl8hspPVKU78MxDSpaEtbsFyz4uiXFkMEGFATC0y2P7g0P%2FrQhsUqh8KP4kP%2FBgifjrrn9FQGkZ4I5dDN9zSTdStNNOSYYAzpRrCvxndKcaU8AQNe3PRSXGCtK6WhQi2tglmFPUeeIgjxpVjX%2BKfcbaJ%2Fc%2BtDDYHREcIYKx1pGUZjwVSu6MrdAfEG1nMJ6PnMQGOqUBpcVLOpukdSxzqeLg63r6iVtIod%2F24k62PNz6PRRDprnjAK3Hm7eDVL6pVk%2F%2B2XIuBnYkXCWtKkW5Z9IzG57NakSdLnwRZ2ChhzOl1lxNuOUe64kF8S5QkqT4Uv5PP0ciAksdHgkTbqvYGxdp02J4VNBA4H42vnsoL6azU9IGz6ipuNjn6wSPMqB8jr0GTecgGEof%2FXoN1K%2Fb5QphhVa4O0O5ZwLZ&X-Amz-Signature=e2c920c22751d9f3d3fed1069ee97e05e4bedd080514cccd026627323ec033f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJNZSHY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDbB0ImOJmhO3pmljiNrAXVQlpjg2lHmTRY0PmJNUhhxAIgdLnDh6M9oCVZ%2F289fSSAkNyhlPixsC4pSe0LpUnrNYwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1K7yVRAI2rz2gOrCrcAwZfLHuQOB%2B1TnhSZ0uMC%2FCxKSbHDHtsXuJ8ZZUgPAZt5HdWBsoGBWrh02IoPcXJ9fdbn2YBtHVpJws17ObyM38bglECMAMhUxmZ4KlpHlQV%2BFl%2BcBJV0agmKiiYfYQle59iTUvy%2Fk6%2FUFjmLPEOV%2BjyDaQOBdLa8Qwihoc5nNN6kZ1a41HW64Iel%2BwjZHQRlEOjef4Bc83iFj6ZvS65H07V3qN%2F%2BczTNmf38vhRR78mDdZLO7SHanNqdRNpQrtZ%2FuuuHTJdfeadyy71dlhMgtF5Hy2ry1rthGdgLB606X2YwErtVNRAUjvtrEKovaZHhBylA2m0hrHvY%2Bra6X4Ok8g5OmvP%2BvsRRV9aTHJTvcXrEbLGnX%2BiFdHqgia7vGjlzzlIo3MW9ssgt88kTzpHDhP8%2BdxLsVQtZKETTL4dh0tsnA%2BWkbJ0%2B2w86TlluDukSEl8hspPVKU78MxDSpaEtbsFyz4uiXFkMEGFATC0y2P7g0P%2FrQhsUqh8KP4kP%2FBgifjrrn9FQGkZ4I5dDN9zSTdStNNOSYYAzpRrCvxndKcaU8AQNe3PRSXGCtK6WhQi2tglmFPUeeIgjxpVjX%2BKfcbaJ%2Fc%2BtDDYHREcIYKx1pGUZjwVSu6MrdAfEG1nMJ6PnMQGOqUBpcVLOpukdSxzqeLg63r6iVtIod%2F24k62PNz6PRRDprnjAK3Hm7eDVL6pVk%2F%2B2XIuBnYkXCWtKkW5Z9IzG57NakSdLnwRZ2ChhzOl1lxNuOUe64kF8S5QkqT4Uv5PP0ciAksdHgkTbqvYGxdp02J4VNBA4H42vnsoL6azU9IGz6ipuNjn6wSPMqB8jr0GTecgGEof%2FXoN1K%2Fb5QphhVa4O0O5ZwLZ&X-Amz-Signature=8cb904bde3e8e3607aa44b79bafe38ce211b2eea9f0b82bc2040680891f4a753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJNZSHY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDbB0ImOJmhO3pmljiNrAXVQlpjg2lHmTRY0PmJNUhhxAIgdLnDh6M9oCVZ%2F289fSSAkNyhlPixsC4pSe0LpUnrNYwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1K7yVRAI2rz2gOrCrcAwZfLHuQOB%2B1TnhSZ0uMC%2FCxKSbHDHtsXuJ8ZZUgPAZt5HdWBsoGBWrh02IoPcXJ9fdbn2YBtHVpJws17ObyM38bglECMAMhUxmZ4KlpHlQV%2BFl%2BcBJV0agmKiiYfYQle59iTUvy%2Fk6%2FUFjmLPEOV%2BjyDaQOBdLa8Qwihoc5nNN6kZ1a41HW64Iel%2BwjZHQRlEOjef4Bc83iFj6ZvS65H07V3qN%2F%2BczTNmf38vhRR78mDdZLO7SHanNqdRNpQrtZ%2FuuuHTJdfeadyy71dlhMgtF5Hy2ry1rthGdgLB606X2YwErtVNRAUjvtrEKovaZHhBylA2m0hrHvY%2Bra6X4Ok8g5OmvP%2BvsRRV9aTHJTvcXrEbLGnX%2BiFdHqgia7vGjlzzlIo3MW9ssgt88kTzpHDhP8%2BdxLsVQtZKETTL4dh0tsnA%2BWkbJ0%2B2w86TlluDukSEl8hspPVKU78MxDSpaEtbsFyz4uiXFkMEGFATC0y2P7g0P%2FrQhsUqh8KP4kP%2FBgifjrrn9FQGkZ4I5dDN9zSTdStNNOSYYAzpRrCvxndKcaU8AQNe3PRSXGCtK6WhQi2tglmFPUeeIgjxpVjX%2BKfcbaJ%2Fc%2BtDDYHREcIYKx1pGUZjwVSu6MrdAfEG1nMJ6PnMQGOqUBpcVLOpukdSxzqeLg63r6iVtIod%2F24k62PNz6PRRDprnjAK3Hm7eDVL6pVk%2F%2B2XIuBnYkXCWtKkW5Z9IzG57NakSdLnwRZ2ChhzOl1lxNuOUe64kF8S5QkqT4Uv5PP0ciAksdHgkTbqvYGxdp02J4VNBA4H42vnsoL6azU9IGz6ipuNjn6wSPMqB8jr0GTecgGEof%2FXoN1K%2Fb5QphhVa4O0O5ZwLZ&X-Amz-Signature=4e3fcaf95702e044199f7082f0513b508449fb7f060f61e8731bbe71521e4314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJNZSHY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDbB0ImOJmhO3pmljiNrAXVQlpjg2lHmTRY0PmJNUhhxAIgdLnDh6M9oCVZ%2F289fSSAkNyhlPixsC4pSe0LpUnrNYwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1K7yVRAI2rz2gOrCrcAwZfLHuQOB%2B1TnhSZ0uMC%2FCxKSbHDHtsXuJ8ZZUgPAZt5HdWBsoGBWrh02IoPcXJ9fdbn2YBtHVpJws17ObyM38bglECMAMhUxmZ4KlpHlQV%2BFl%2BcBJV0agmKiiYfYQle59iTUvy%2Fk6%2FUFjmLPEOV%2BjyDaQOBdLa8Qwihoc5nNN6kZ1a41HW64Iel%2BwjZHQRlEOjef4Bc83iFj6ZvS65H07V3qN%2F%2BczTNmf38vhRR78mDdZLO7SHanNqdRNpQrtZ%2FuuuHTJdfeadyy71dlhMgtF5Hy2ry1rthGdgLB606X2YwErtVNRAUjvtrEKovaZHhBylA2m0hrHvY%2Bra6X4Ok8g5OmvP%2BvsRRV9aTHJTvcXrEbLGnX%2BiFdHqgia7vGjlzzlIo3MW9ssgt88kTzpHDhP8%2BdxLsVQtZKETTL4dh0tsnA%2BWkbJ0%2B2w86TlluDukSEl8hspPVKU78MxDSpaEtbsFyz4uiXFkMEGFATC0y2P7g0P%2FrQhsUqh8KP4kP%2FBgifjrrn9FQGkZ4I5dDN9zSTdStNNOSYYAzpRrCvxndKcaU8AQNe3PRSXGCtK6WhQi2tglmFPUeeIgjxpVjX%2BKfcbaJ%2Fc%2BtDDYHREcIYKx1pGUZjwVSu6MrdAfEG1nMJ6PnMQGOqUBpcVLOpukdSxzqeLg63r6iVtIod%2F24k62PNz6PRRDprnjAK3Hm7eDVL6pVk%2F%2B2XIuBnYkXCWtKkW5Z9IzG57NakSdLnwRZ2ChhzOl1lxNuOUe64kF8S5QkqT4Uv5PP0ciAksdHgkTbqvYGxdp02J4VNBA4H42vnsoL6azU9IGz6ipuNjn6wSPMqB8jr0GTecgGEof%2FXoN1K%2Fb5QphhVa4O0O5ZwLZ&X-Amz-Signature=b6568e04dcf5a3396906bbbe525be09914d8ea39f556377ad5176eef7495c322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJNZSHY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDbB0ImOJmhO3pmljiNrAXVQlpjg2lHmTRY0PmJNUhhxAIgdLnDh6M9oCVZ%2F289fSSAkNyhlPixsC4pSe0LpUnrNYwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1K7yVRAI2rz2gOrCrcAwZfLHuQOB%2B1TnhSZ0uMC%2FCxKSbHDHtsXuJ8ZZUgPAZt5HdWBsoGBWrh02IoPcXJ9fdbn2YBtHVpJws17ObyM38bglECMAMhUxmZ4KlpHlQV%2BFl%2BcBJV0agmKiiYfYQle59iTUvy%2Fk6%2FUFjmLPEOV%2BjyDaQOBdLa8Qwihoc5nNN6kZ1a41HW64Iel%2BwjZHQRlEOjef4Bc83iFj6ZvS65H07V3qN%2F%2BczTNmf38vhRR78mDdZLO7SHanNqdRNpQrtZ%2FuuuHTJdfeadyy71dlhMgtF5Hy2ry1rthGdgLB606X2YwErtVNRAUjvtrEKovaZHhBylA2m0hrHvY%2Bra6X4Ok8g5OmvP%2BvsRRV9aTHJTvcXrEbLGnX%2BiFdHqgia7vGjlzzlIo3MW9ssgt88kTzpHDhP8%2BdxLsVQtZKETTL4dh0tsnA%2BWkbJ0%2B2w86TlluDukSEl8hspPVKU78MxDSpaEtbsFyz4uiXFkMEGFATC0y2P7g0P%2FrQhsUqh8KP4kP%2FBgifjrrn9FQGkZ4I5dDN9zSTdStNNOSYYAzpRrCvxndKcaU8AQNe3PRSXGCtK6WhQi2tglmFPUeeIgjxpVjX%2BKfcbaJ%2Fc%2BtDDYHREcIYKx1pGUZjwVSu6MrdAfEG1nMJ6PnMQGOqUBpcVLOpukdSxzqeLg63r6iVtIod%2F24k62PNz6PRRDprnjAK3Hm7eDVL6pVk%2F%2B2XIuBnYkXCWtKkW5Z9IzG57NakSdLnwRZ2ChhzOl1lxNuOUe64kF8S5QkqT4Uv5PP0ciAksdHgkTbqvYGxdp02J4VNBA4H42vnsoL6azU9IGz6ipuNjn6wSPMqB8jr0GTecgGEof%2FXoN1K%2Fb5QphhVa4O0O5ZwLZ&X-Amz-Signature=bc0af07bceb5921495d9814f7f7d0f2fe39e2ed435002aa956129a5068ecbb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJNZSHY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDbB0ImOJmhO3pmljiNrAXVQlpjg2lHmTRY0PmJNUhhxAIgdLnDh6M9oCVZ%2F289fSSAkNyhlPixsC4pSe0LpUnrNYwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1K7yVRAI2rz2gOrCrcAwZfLHuQOB%2B1TnhSZ0uMC%2FCxKSbHDHtsXuJ8ZZUgPAZt5HdWBsoGBWrh02IoPcXJ9fdbn2YBtHVpJws17ObyM38bglECMAMhUxmZ4KlpHlQV%2BFl%2BcBJV0agmKiiYfYQle59iTUvy%2Fk6%2FUFjmLPEOV%2BjyDaQOBdLa8Qwihoc5nNN6kZ1a41HW64Iel%2BwjZHQRlEOjef4Bc83iFj6ZvS65H07V3qN%2F%2BczTNmf38vhRR78mDdZLO7SHanNqdRNpQrtZ%2FuuuHTJdfeadyy71dlhMgtF5Hy2ry1rthGdgLB606X2YwErtVNRAUjvtrEKovaZHhBylA2m0hrHvY%2Bra6X4Ok8g5OmvP%2BvsRRV9aTHJTvcXrEbLGnX%2BiFdHqgia7vGjlzzlIo3MW9ssgt88kTzpHDhP8%2BdxLsVQtZKETTL4dh0tsnA%2BWkbJ0%2B2w86TlluDukSEl8hspPVKU78MxDSpaEtbsFyz4uiXFkMEGFATC0y2P7g0P%2FrQhsUqh8KP4kP%2FBgifjrrn9FQGkZ4I5dDN9zSTdStNNOSYYAzpRrCvxndKcaU8AQNe3PRSXGCtK6WhQi2tglmFPUeeIgjxpVjX%2BKfcbaJ%2Fc%2BtDDYHREcIYKx1pGUZjwVSu6MrdAfEG1nMJ6PnMQGOqUBpcVLOpukdSxzqeLg63r6iVtIod%2F24k62PNz6PRRDprnjAK3Hm7eDVL6pVk%2F%2B2XIuBnYkXCWtKkW5Z9IzG57NakSdLnwRZ2ChhzOl1lxNuOUe64kF8S5QkqT4Uv5PP0ciAksdHgkTbqvYGxdp02J4VNBA4H42vnsoL6azU9IGz6ipuNjn6wSPMqB8jr0GTecgGEof%2FXoN1K%2Fb5QphhVa4O0O5ZwLZ&X-Amz-Signature=2206cbf7e6fe235b0277ba45e74cf313a80bdc31be8e88d7f2171f7afb9ccb68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
