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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7JFIGD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR6RmxweUBbPSgEexeFXRKwD8irf37JYqWPQNQD4C7gAiBZWAwBFunO%2BVwOoqhLzDcNsDD9j4a4MyFKVoVS3Ggb8ir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMgDVsl3sKvrJd%2FLhsKtwDxUxJif1gMBlkZ3Gmv7Za90zKwoSbTgRYp5ajXPfMXdfqEPqYbMillIGZww463NQ%2FLU7l%2Bw8IxHqc%2BsexOcADf%2BCWkoZJhygqj95SBJTHlgyTwXw7daexjqmrtmwWn19OqdEhHJx7H%2FiJsmRG3Sv5Mh9IF9cDy5rsLBxn70lnPhXduDIILP3d%2FSCHiY1tbLJED4mpJuhdKPfaMubttCTzNCbI7mLHHevvSlz2Pg6XSTrjIK80lyYdZjfXnLW0G3eMITvZQlJ%2Fsdw3GsxEcET6mvrDt1knZtGkZCoOiRqPcJwbNbdtAzPuNZS0wvHXb87KS47IvDOa3a0qHIxrBVPDQg8UW0VdezsZuUPDO3WKLdIIPHO8fO6UXIRfP2ZR5lUS8ltVW10IUEUqlooo6uz5paNpTiWLsmwCgUoIYuLuhtv8OjoyNgvg0H1U0uuPnl%2FGxM3ajgjYHd9um%2B9ka5LwnI60tiQ1qKyYrZm4SmV%2Be84%2B09KNVjG4pnJFK1M1f%2F1pvNh5QwElLyzc7OuwXTKGX8bsIV4U8vt0hFYqmMJVxbKmd9MUS15W51Q4H6ySAwGQfs7s4Jh9p%2BT%2B51PY5lz2B11O642O6ys6Iw%2BOw7rnjimMYQVXpi%2FOWJllobcwyoSZxAY6pgEfCQOkj3a0RXl9gjLQv38hSTbBw7yM5%2FXkjQe9pQ6OZ0IfiEntA%2Fr9jDPxxoNjswZToJZORFLo9DyOy3beXHwMpF5lLjZSimtMYmr301yKOu9SiUujqCY36tYwy4eY6ujqIOudE4IKTNpB5tWzdBpqCarQ5ADirXJ%2BjY2CN7h9iw2S0zfTRayYKwN6fhrMOoyhdHS%2F0RNAtivPbz0EfYjaLrfewcaN&X-Amz-Signature=21320475115a8ce2784b69b1531b4eadb26f537fefa20d3c4db6245b9f2b53a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7JFIGD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR6RmxweUBbPSgEexeFXRKwD8irf37JYqWPQNQD4C7gAiBZWAwBFunO%2BVwOoqhLzDcNsDD9j4a4MyFKVoVS3Ggb8ir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMgDVsl3sKvrJd%2FLhsKtwDxUxJif1gMBlkZ3Gmv7Za90zKwoSbTgRYp5ajXPfMXdfqEPqYbMillIGZww463NQ%2FLU7l%2Bw8IxHqc%2BsexOcADf%2BCWkoZJhygqj95SBJTHlgyTwXw7daexjqmrtmwWn19OqdEhHJx7H%2FiJsmRG3Sv5Mh9IF9cDy5rsLBxn70lnPhXduDIILP3d%2FSCHiY1tbLJED4mpJuhdKPfaMubttCTzNCbI7mLHHevvSlz2Pg6XSTrjIK80lyYdZjfXnLW0G3eMITvZQlJ%2Fsdw3GsxEcET6mvrDt1knZtGkZCoOiRqPcJwbNbdtAzPuNZS0wvHXb87KS47IvDOa3a0qHIxrBVPDQg8UW0VdezsZuUPDO3WKLdIIPHO8fO6UXIRfP2ZR5lUS8ltVW10IUEUqlooo6uz5paNpTiWLsmwCgUoIYuLuhtv8OjoyNgvg0H1U0uuPnl%2FGxM3ajgjYHd9um%2B9ka5LwnI60tiQ1qKyYrZm4SmV%2Be84%2B09KNVjG4pnJFK1M1f%2F1pvNh5QwElLyzc7OuwXTKGX8bsIV4U8vt0hFYqmMJVxbKmd9MUS15W51Q4H6ySAwGQfs7s4Jh9p%2BT%2B51PY5lz2B11O642O6ys6Iw%2BOw7rnjimMYQVXpi%2FOWJllobcwyoSZxAY6pgEfCQOkj3a0RXl9gjLQv38hSTbBw7yM5%2FXkjQe9pQ6OZ0IfiEntA%2Fr9jDPxxoNjswZToJZORFLo9DyOy3beXHwMpF5lLjZSimtMYmr301yKOu9SiUujqCY36tYwy4eY6ujqIOudE4IKTNpB5tWzdBpqCarQ5ADirXJ%2BjY2CN7h9iw2S0zfTRayYKwN6fhrMOoyhdHS%2F0RNAtivPbz0EfYjaLrfewcaN&X-Amz-Signature=069c1776d55c68de7f5c4222ff78a37deeea42fe43ea2b0d2099346ca23b5cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7JFIGD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR6RmxweUBbPSgEexeFXRKwD8irf37JYqWPQNQD4C7gAiBZWAwBFunO%2BVwOoqhLzDcNsDD9j4a4MyFKVoVS3Ggb8ir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMgDVsl3sKvrJd%2FLhsKtwDxUxJif1gMBlkZ3Gmv7Za90zKwoSbTgRYp5ajXPfMXdfqEPqYbMillIGZww463NQ%2FLU7l%2Bw8IxHqc%2BsexOcADf%2BCWkoZJhygqj95SBJTHlgyTwXw7daexjqmrtmwWn19OqdEhHJx7H%2FiJsmRG3Sv5Mh9IF9cDy5rsLBxn70lnPhXduDIILP3d%2FSCHiY1tbLJED4mpJuhdKPfaMubttCTzNCbI7mLHHevvSlz2Pg6XSTrjIK80lyYdZjfXnLW0G3eMITvZQlJ%2Fsdw3GsxEcET6mvrDt1knZtGkZCoOiRqPcJwbNbdtAzPuNZS0wvHXb87KS47IvDOa3a0qHIxrBVPDQg8UW0VdezsZuUPDO3WKLdIIPHO8fO6UXIRfP2ZR5lUS8ltVW10IUEUqlooo6uz5paNpTiWLsmwCgUoIYuLuhtv8OjoyNgvg0H1U0uuPnl%2FGxM3ajgjYHd9um%2B9ka5LwnI60tiQ1qKyYrZm4SmV%2Be84%2B09KNVjG4pnJFK1M1f%2F1pvNh5QwElLyzc7OuwXTKGX8bsIV4U8vt0hFYqmMJVxbKmd9MUS15W51Q4H6ySAwGQfs7s4Jh9p%2BT%2B51PY5lz2B11O642O6ys6Iw%2BOw7rnjimMYQVXpi%2FOWJllobcwyoSZxAY6pgEfCQOkj3a0RXl9gjLQv38hSTbBw7yM5%2FXkjQe9pQ6OZ0IfiEntA%2Fr9jDPxxoNjswZToJZORFLo9DyOy3beXHwMpF5lLjZSimtMYmr301yKOu9SiUujqCY36tYwy4eY6ujqIOudE4IKTNpB5tWzdBpqCarQ5ADirXJ%2BjY2CN7h9iw2S0zfTRayYKwN6fhrMOoyhdHS%2F0RNAtivPbz0EfYjaLrfewcaN&X-Amz-Signature=b044beeb97690753ea6610461d3a12c9e77859c00f838435aa1b2a8b14123eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7JFIGD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR6RmxweUBbPSgEexeFXRKwD8irf37JYqWPQNQD4C7gAiBZWAwBFunO%2BVwOoqhLzDcNsDD9j4a4MyFKVoVS3Ggb8ir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMgDVsl3sKvrJd%2FLhsKtwDxUxJif1gMBlkZ3Gmv7Za90zKwoSbTgRYp5ajXPfMXdfqEPqYbMillIGZww463NQ%2FLU7l%2Bw8IxHqc%2BsexOcADf%2BCWkoZJhygqj95SBJTHlgyTwXw7daexjqmrtmwWn19OqdEhHJx7H%2FiJsmRG3Sv5Mh9IF9cDy5rsLBxn70lnPhXduDIILP3d%2FSCHiY1tbLJED4mpJuhdKPfaMubttCTzNCbI7mLHHevvSlz2Pg6XSTrjIK80lyYdZjfXnLW0G3eMITvZQlJ%2Fsdw3GsxEcET6mvrDt1knZtGkZCoOiRqPcJwbNbdtAzPuNZS0wvHXb87KS47IvDOa3a0qHIxrBVPDQg8UW0VdezsZuUPDO3WKLdIIPHO8fO6UXIRfP2ZR5lUS8ltVW10IUEUqlooo6uz5paNpTiWLsmwCgUoIYuLuhtv8OjoyNgvg0H1U0uuPnl%2FGxM3ajgjYHd9um%2B9ka5LwnI60tiQ1qKyYrZm4SmV%2Be84%2B09KNVjG4pnJFK1M1f%2F1pvNh5QwElLyzc7OuwXTKGX8bsIV4U8vt0hFYqmMJVxbKmd9MUS15W51Q4H6ySAwGQfs7s4Jh9p%2BT%2B51PY5lz2B11O642O6ys6Iw%2BOw7rnjimMYQVXpi%2FOWJllobcwyoSZxAY6pgEfCQOkj3a0RXl9gjLQv38hSTbBw7yM5%2FXkjQe9pQ6OZ0IfiEntA%2Fr9jDPxxoNjswZToJZORFLo9DyOy3beXHwMpF5lLjZSimtMYmr301yKOu9SiUujqCY36tYwy4eY6ujqIOudE4IKTNpB5tWzdBpqCarQ5ADirXJ%2BjY2CN7h9iw2S0zfTRayYKwN6fhrMOoyhdHS%2F0RNAtivPbz0EfYjaLrfewcaN&X-Amz-Signature=48f8ab69ebfcdc6665c151274b72bb2898eb9630125da4048eb0b912b9a00a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7JFIGD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR6RmxweUBbPSgEexeFXRKwD8irf37JYqWPQNQD4C7gAiBZWAwBFunO%2BVwOoqhLzDcNsDD9j4a4MyFKVoVS3Ggb8ir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMgDVsl3sKvrJd%2FLhsKtwDxUxJif1gMBlkZ3Gmv7Za90zKwoSbTgRYp5ajXPfMXdfqEPqYbMillIGZww463NQ%2FLU7l%2Bw8IxHqc%2BsexOcADf%2BCWkoZJhygqj95SBJTHlgyTwXw7daexjqmrtmwWn19OqdEhHJx7H%2FiJsmRG3Sv5Mh9IF9cDy5rsLBxn70lnPhXduDIILP3d%2FSCHiY1tbLJED4mpJuhdKPfaMubttCTzNCbI7mLHHevvSlz2Pg6XSTrjIK80lyYdZjfXnLW0G3eMITvZQlJ%2Fsdw3GsxEcET6mvrDt1knZtGkZCoOiRqPcJwbNbdtAzPuNZS0wvHXb87KS47IvDOa3a0qHIxrBVPDQg8UW0VdezsZuUPDO3WKLdIIPHO8fO6UXIRfP2ZR5lUS8ltVW10IUEUqlooo6uz5paNpTiWLsmwCgUoIYuLuhtv8OjoyNgvg0H1U0uuPnl%2FGxM3ajgjYHd9um%2B9ka5LwnI60tiQ1qKyYrZm4SmV%2Be84%2B09KNVjG4pnJFK1M1f%2F1pvNh5QwElLyzc7OuwXTKGX8bsIV4U8vt0hFYqmMJVxbKmd9MUS15W51Q4H6ySAwGQfs7s4Jh9p%2BT%2B51PY5lz2B11O642O6ys6Iw%2BOw7rnjimMYQVXpi%2FOWJllobcwyoSZxAY6pgEfCQOkj3a0RXl9gjLQv38hSTbBw7yM5%2FXkjQe9pQ6OZ0IfiEntA%2Fr9jDPxxoNjswZToJZORFLo9DyOy3beXHwMpF5lLjZSimtMYmr301yKOu9SiUujqCY36tYwy4eY6ujqIOudE4IKTNpB5tWzdBpqCarQ5ADirXJ%2BjY2CN7h9iw2S0zfTRayYKwN6fhrMOoyhdHS%2F0RNAtivPbz0EfYjaLrfewcaN&X-Amz-Signature=911e49ac55f04a103def4fa5aa391db9cd10c8731f8acad8b8b82def11e2a03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7JFIGD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHR6RmxweUBbPSgEexeFXRKwD8irf37JYqWPQNQD4C7gAiBZWAwBFunO%2BVwOoqhLzDcNsDD9j4a4MyFKVoVS3Ggb8ir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMgDVsl3sKvrJd%2FLhsKtwDxUxJif1gMBlkZ3Gmv7Za90zKwoSbTgRYp5ajXPfMXdfqEPqYbMillIGZww463NQ%2FLU7l%2Bw8IxHqc%2BsexOcADf%2BCWkoZJhygqj95SBJTHlgyTwXw7daexjqmrtmwWn19OqdEhHJx7H%2FiJsmRG3Sv5Mh9IF9cDy5rsLBxn70lnPhXduDIILP3d%2FSCHiY1tbLJED4mpJuhdKPfaMubttCTzNCbI7mLHHevvSlz2Pg6XSTrjIK80lyYdZjfXnLW0G3eMITvZQlJ%2Fsdw3GsxEcET6mvrDt1knZtGkZCoOiRqPcJwbNbdtAzPuNZS0wvHXb87KS47IvDOa3a0qHIxrBVPDQg8UW0VdezsZuUPDO3WKLdIIPHO8fO6UXIRfP2ZR5lUS8ltVW10IUEUqlooo6uz5paNpTiWLsmwCgUoIYuLuhtv8OjoyNgvg0H1U0uuPnl%2FGxM3ajgjYHd9um%2B9ka5LwnI60tiQ1qKyYrZm4SmV%2Be84%2B09KNVjG4pnJFK1M1f%2F1pvNh5QwElLyzc7OuwXTKGX8bsIV4U8vt0hFYqmMJVxbKmd9MUS15W51Q4H6ySAwGQfs7s4Jh9p%2BT%2B51PY5lz2B11O642O6ys6Iw%2BOw7rnjimMYQVXpi%2FOWJllobcwyoSZxAY6pgEfCQOkj3a0RXl9gjLQv38hSTbBw7yM5%2FXkjQe9pQ6OZ0IfiEntA%2Fr9jDPxxoNjswZToJZORFLo9DyOy3beXHwMpF5lLjZSimtMYmr301yKOu9SiUujqCY36tYwy4eY6ujqIOudE4IKTNpB5tWzdBpqCarQ5ADirXJ%2BjY2CN7h9iw2S0zfTRayYKwN6fhrMOoyhdHS%2F0RNAtivPbz0EfYjaLrfewcaN&X-Amz-Signature=3fb6bed3022f09c27b614bab7e2eab52303be9b8b903c62011ab52a8815fd1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
