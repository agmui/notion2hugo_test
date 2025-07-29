---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-29T17:13:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-29T17:13:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=7e9ed9cb47522f386a9716aecb12a4189e5e7619c8126001db3892dba01c9b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=dec2fcea3f292ba71745ebd37f6a1999f5f418175f029de607fad4bed0ba4ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=7ac6570ee6a27ab530523d0bde6a61169dc52bf744b9495f067b927ae15a0cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=9187c92d298fef63438a3e2117b636cbb3031d7575bf1ec170b3521f61c307d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=404041f91802a8fa65fae6e36b18c3698aa3bbb6bc6ab6102024a642f48d67d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=85e66a00aa49acd5328b467417455d15e7ff44c0196e2f87b27975bdb1f61c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=a631914029963aa47b5d589e590882fe7daedd9ee770c99e6d24858e0c0de41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=af9a38356b7f7231270bd1865dee77f1417b1d76a3d8498c19e63d33e02426ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=99418a69d223ece9a120b742d2f4874d07e16cd7276fe770307f7208911b695b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=428b119bcb16b9e8853a8661fc021fb48d59d9a0d42699060fd5fed9ab27810a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=e7ddb73ecf35bfba78dc276b904a6d1fac5b54f2189cbc7d808bd7fc583cd0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=7680ca541f49f17dde0faa979062691a9c987d458dd87f450e81267ba238d929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3R4YISN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMwnzTdwAx9GY1l7z2SGXopO0yUpmYCOP3PIQcvw5hKAiAX8ahtHBE%2BZ4nvEwNgAbIjsaxksPaPi1qVv%2B7hRHOxCiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCppZ5zQYE6hdATz0KtwDWYvdHV3adQLUSFQkRAaIKSFZyGqTzGx2F3Svsz04ZGeii%2FpWquAFwqfgVX%2FSE3TvtybhFQm%2FHilAZR2AneugIfdlF9ViTxgmbd3P8YWakT8CZak5AP86KWqdyEzKWGC0fQgLXgGDuumqCZQ%2B5YvLizG2itxCaeKLYyd%2F1CRQj4h1wz8rUeXGQaOkTm%2Fvn5RmjQynH0wBvEViwvceh9MX5QKeyr42PMGlbaerrkA%2FA1NqP1pSX0JwSvA4yrIDYnuhdJf%2FiZKo7ycPAA59Wq7ITES9WXW3NV7OQlwmBhCVBM6k8Py8knnx3XQNphuQBZVmsPt6%2FAcradnDgQ6g6O%2BfIpG1WhYuoLpVx8mV4Rp9ord7%2BdIFk%2Fbm6ji7DBaKWFSOzxteHqP2pTZLg7BWFiRjz6%2BmRhFZ6c5KJR89%2FwnmI7kZXN28RlEIt7Ubq%2FGEG4x1keizm%2FzGvQ9ko9ceQaz5DCvo34F56VB5ar6FoqlcM1QwqHWFNFdxS7yM54WWjQ3owyPdvR249XLSPN%2BH2%2Bkuq6SzihLrIW5cZ6OChg4QlBigfucaBmSDesA8g3BAzwmJO3HYUi%2FSSP84y26m4AVzvMwebKMsRbdfqOix6YdgWPrCcr3zUevR4v%2BaRHcwiv%2BjxAY6pgHyGHpfG7xEqGNDd9sqSH9lqwS3IOHx%2BtfoO0xUxKycfC%2BKSrNjM4RPe8VEF0YfAG6ARVGdRkDsgh7xEz6BDbcuMyHdkcr549xbYiT8gHOngLzOhTQNZ0HUZ7nKNj4TPvRsydjmT2RehKGY78b0nJGUOX2c81tdzD9Lh%2B%2FJZ7hd10UkzZBk%2FpyJPLvYRPZ%2FZGo2uTzx6Vr0SsAlm2zrnMoPOKtpHIqS&X-Amz-Signature=b6dd401b88be906ab83dbcae62aa8b6e340ac37d214dcccc21a62874fd77f725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## 🎉YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Nav2 settings

TODO: change footprint?
