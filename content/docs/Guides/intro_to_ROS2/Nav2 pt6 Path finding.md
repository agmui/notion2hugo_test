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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=260292b660d81eb0a417794566d827d8447bdf45a006abb8eff038e45669dbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=1fedbc3c1072475d1834c5e00c665505d94e5ab42c23960a1083de976964668d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=113a2dabc8dfac1fbd2b1eff1626c937e19a089600edff44f1155f4d3d8cde13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=63a44a9ac164fef642071a6ddd3743cdcb35f204416c48dcfabb1d7dc803ade5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=eff5d53c09d0347e96d0cc12e1f01530c285f47283fabc1f132e4988eeffcd1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=e54ec93bb59f79390a108fa315e46f0ccc13cb0a5f9f419d244068975e4cbc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=83e24bdc41c0dc425bebf41a064b38700b154ed25242931e33c232d4062465a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=a19eb931bc884e09640f45558faf4f9ab1b4fa11ef007274c44652a286b1294f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=b6d018293fdc619a324fdbf15c066b5f69ee58afc37ffe3d4694e33fba895024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=e229b80abb69b761c3441ddd8ade92760408ceb9353fdf9ee858e644277bf8bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=d1d4046bbc0fcb9d8f82f333f19f67bf0b7dc51c0629db464f47ebc771df5d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=cc09b9da31f88f915a5b2dd42169449bd5f0bf803e4110d662e6b872f6ad69ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBU5AVHW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDoQmx56Bc89qZI2D0W5kOxVFBOZmL2QT%2FAdbJGMi0JoAiAUBnlviMYb%2FJiyTo%2FALNZ7NRAPGZSaIly5FkDjcBwjCir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMRalExTLREByCeOGJKtwD4NooIGyg1VjFR79RnK5X7nGk1NYGLwznn%2FSpNzfOSNm%2FzgElbyrU7o60jt9hHWnVVn6vjjW4%2FsMQs3w1CJSoQ8PU%2BsdD5mKMMDemcyLBEvKUJ6fWqi5VK23PY0kJIPr9YLUWTYIkTCVqRIsT3hyTBzccqWKG0EcGrPiHUB0osXNe1WfWd3Et5SZ%2FUCDmpY%2BVlTxzswdefPnztG9qZwuPBusN08wxddqBWC2XSs5H5d%2FLhdmpbAFMb9Dmw5nOr37Nlw%2BDSmZRvUCnbnJxB7LJgKKuOxLsTP01kJ%2FtcSKFBix2IsxE87rifWuwrFlPC8FOD7YIaNCwRYB2mKBj2p5IdMGgOgrtkehnTXlOifxJOXRTgqKh2bXz7sKi8aa9lUdEz6oR20smfIl4rbNnSJjwgL7v4MTWQLEEd5eSkk%2F1c0qrvQbqiq%2BqfnVnkZ0C98l9qW%2Bk5YHuMhw8PjoVEEnfekKyIDB1xjdUQeUtiNQxzcXx2%2FxReM1TFWpuK1yra6xOqV513amhxo6wtr3MPBbCgvCspg5N%2BCbPE8es17JJHy4keXot0ueGum1uYMrT5yF0o0N6BTn%2F7jwJ0ZukgiyyjpSSTqLP53VJsxSXUkZEQjt6lxbpl4ZJ9Hac1fgwp%2Fz5xAY6pgHFyJPu4qKEqCjup5bSy%2FeNKSSw8M0hmNkXaBoRMN519ntUGSkWIiysqxkHgYFci2adFSJtAHcydrmn9MpfW1QseqrG%2FI%2FgMGBWSPQ91MNup19YyUj3QY3ANAKwRDd3yKReo5bHLjKJ6f9NZbQYFwqBJwplCF3HmiYIr%2FrZRQ2%2FyhWZPrH2hgTNlB7cZqIZqMZHdG4ed184accGNEXEJL5f%2FJdV2i0I&X-Amz-Signature=0c2cb20bb99397088603e7e8d501552303bae71b1d561e4ad6bb1be739750a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
