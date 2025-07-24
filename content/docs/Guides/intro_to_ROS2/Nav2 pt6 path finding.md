---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T10:36:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T10:36:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H67CX5O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCKC2FOqPGcrxNoqkc%2FxA12mLdwVWX%2ByZ2mYy78rC6a2gIhAJxdb78SQEgbYRo8k3WbzOFsxcsaq%2B7Gl6UZrdM20WzcKv8DCDcQABoMNjM3NDIzMTgzODA1IgxBsV5ihp7ccr3h9jwq3AMZ6sulC0cVSIOalgGf4LBwXKt6RmELglyj42TmZkLAvR8ZrHUUAPvsP5QLoDUtInLrtvjEeRsQQ66o3X3dhCLkblSVWxlY1chlJj5E5y3n%2F%2FrtY55%2BD%2BoZtWOJ4%2B7jQmHsJAEEg1s5XIqcqxoYlRUY45djG1g2aP8SlYVfiWeBTZTI8teVi8ZpEMD28cpJUrY4E%2BzXGumZaKPT7N%2F%2B1P56WROSA%2BzSGVVdU0Y%2BhaOJ1qfq6euvTEt%2BOC%2B0LrOyB9sv81ykv7vXzHxZMfTXhxalubBncT2TsZ4BILxKVJicwSAd3HkVs0f2UmkNHl9%2BtOMWkqCNIZZ0TM7b73HwpB1l0wBOp7q52r40%2F1OYMogJntN571jNrCfDwfPd%2ByHrFv%2FFB%2B1W0VDQKJ%2FPwMCQ%2B7zo7Vpi3GEg%2FMFlPnMs3GrCMacoZf4EdLa%2BFJyURfL34sJ1%2FpC9jyrA6U2xsCf9A4%2FI78aQQhQ3y3eE09bE8QR%2BRAkLjmThophpMu%2BPWCqvOCZKtz%2BH8olKcJLdQ%2BdOvpxWqzhwkEw%2FPpXjxiPhAGlz0RDAK1akPEew4rnuC%2FNoGxlStYjyZbuOC5khtjFnZXyXIqsfOdYmbxbPZwxh3QUeZf83CVBngPjHeX9TYDDo14rEBjqkAYArg1fnZPEzcYxXUtOd9V33SSuukuaOAbO4y06N7aSd15xWFVCERyitTwGqqW%2BQ3P95dLq95Kdw4eReOSL8Tgov1UZmLydKpwkqhHNa8SrLMRVP%2Bc0JPqlNKh6kfhenJV3h3UuhnRCJth6b%2BBOt%2Fjao3XTsCgEseXRHzcf6ElNORGEZ2kJPpLkNH0Nl4Grz6UuBbm2iAFYxIxGnE9tfV%2BH2u7xf&X-Amz-Signature=3af2aa7c499293a12b610450c26dbd6df5e91d725f0078fd672714e085a85046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H67CX5O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCKC2FOqPGcrxNoqkc%2FxA12mLdwVWX%2ByZ2mYy78rC6a2gIhAJxdb78SQEgbYRo8k3WbzOFsxcsaq%2B7Gl6UZrdM20WzcKv8DCDcQABoMNjM3NDIzMTgzODA1IgxBsV5ihp7ccr3h9jwq3AMZ6sulC0cVSIOalgGf4LBwXKt6RmELglyj42TmZkLAvR8ZrHUUAPvsP5QLoDUtInLrtvjEeRsQQ66o3X3dhCLkblSVWxlY1chlJj5E5y3n%2F%2FrtY55%2BD%2BoZtWOJ4%2B7jQmHsJAEEg1s5XIqcqxoYlRUY45djG1g2aP8SlYVfiWeBTZTI8teVi8ZpEMD28cpJUrY4E%2BzXGumZaKPT7N%2F%2B1P56WROSA%2BzSGVVdU0Y%2BhaOJ1qfq6euvTEt%2BOC%2B0LrOyB9sv81ykv7vXzHxZMfTXhxalubBncT2TsZ4BILxKVJicwSAd3HkVs0f2UmkNHl9%2BtOMWkqCNIZZ0TM7b73HwpB1l0wBOp7q52r40%2F1OYMogJntN571jNrCfDwfPd%2ByHrFv%2FFB%2B1W0VDQKJ%2FPwMCQ%2B7zo7Vpi3GEg%2FMFlPnMs3GrCMacoZf4EdLa%2BFJyURfL34sJ1%2FpC9jyrA6U2xsCf9A4%2FI78aQQhQ3y3eE09bE8QR%2BRAkLjmThophpMu%2BPWCqvOCZKtz%2BH8olKcJLdQ%2BdOvpxWqzhwkEw%2FPpXjxiPhAGlz0RDAK1akPEew4rnuC%2FNoGxlStYjyZbuOC5khtjFnZXyXIqsfOdYmbxbPZwxh3QUeZf83CVBngPjHeX9TYDDo14rEBjqkAYArg1fnZPEzcYxXUtOd9V33SSuukuaOAbO4y06N7aSd15xWFVCERyitTwGqqW%2BQ3P95dLq95Kdw4eReOSL8Tgov1UZmLydKpwkqhHNa8SrLMRVP%2Bc0JPqlNKh6kfhenJV3h3UuhnRCJth6b%2BBOt%2Fjao3XTsCgEseXRHzcf6ElNORGEZ2kJPpLkNH0Nl4Grz6UuBbm2iAFYxIxGnE9tfV%2BH2u7xf&X-Amz-Signature=3ba61b23b75c785d9af0b6484d90fd2a912721e7a111ae2693f2d0da68a7869a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H67CX5O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCKC2FOqPGcrxNoqkc%2FxA12mLdwVWX%2ByZ2mYy78rC6a2gIhAJxdb78SQEgbYRo8k3WbzOFsxcsaq%2B7Gl6UZrdM20WzcKv8DCDcQABoMNjM3NDIzMTgzODA1IgxBsV5ihp7ccr3h9jwq3AMZ6sulC0cVSIOalgGf4LBwXKt6RmELglyj42TmZkLAvR8ZrHUUAPvsP5QLoDUtInLrtvjEeRsQQ66o3X3dhCLkblSVWxlY1chlJj5E5y3n%2F%2FrtY55%2BD%2BoZtWOJ4%2B7jQmHsJAEEg1s5XIqcqxoYlRUY45djG1g2aP8SlYVfiWeBTZTI8teVi8ZpEMD28cpJUrY4E%2BzXGumZaKPT7N%2F%2B1P56WROSA%2BzSGVVdU0Y%2BhaOJ1qfq6euvTEt%2BOC%2B0LrOyB9sv81ykv7vXzHxZMfTXhxalubBncT2TsZ4BILxKVJicwSAd3HkVs0f2UmkNHl9%2BtOMWkqCNIZZ0TM7b73HwpB1l0wBOp7q52r40%2F1OYMogJntN571jNrCfDwfPd%2ByHrFv%2FFB%2B1W0VDQKJ%2FPwMCQ%2B7zo7Vpi3GEg%2FMFlPnMs3GrCMacoZf4EdLa%2BFJyURfL34sJ1%2FpC9jyrA6U2xsCf9A4%2FI78aQQhQ3y3eE09bE8QR%2BRAkLjmThophpMu%2BPWCqvOCZKtz%2BH8olKcJLdQ%2BdOvpxWqzhwkEw%2FPpXjxiPhAGlz0RDAK1akPEew4rnuC%2FNoGxlStYjyZbuOC5khtjFnZXyXIqsfOdYmbxbPZwxh3QUeZf83CVBngPjHeX9TYDDo14rEBjqkAYArg1fnZPEzcYxXUtOd9V33SSuukuaOAbO4y06N7aSd15xWFVCERyitTwGqqW%2BQ3P95dLq95Kdw4eReOSL8Tgov1UZmLydKpwkqhHNa8SrLMRVP%2Bc0JPqlNKh6kfhenJV3h3UuhnRCJth6b%2BBOt%2Fjao3XTsCgEseXRHzcf6ElNORGEZ2kJPpLkNH0Nl4Grz6UuBbm2iAFYxIxGnE9tfV%2BH2u7xf&X-Amz-Signature=5b02f758793952baecc36035e40be711fd5e3549ce140a660c8a7f600a7d520b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H67CX5O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCKC2FOqPGcrxNoqkc%2FxA12mLdwVWX%2ByZ2mYy78rC6a2gIhAJxdb78SQEgbYRo8k3WbzOFsxcsaq%2B7Gl6UZrdM20WzcKv8DCDcQABoMNjM3NDIzMTgzODA1IgxBsV5ihp7ccr3h9jwq3AMZ6sulC0cVSIOalgGf4LBwXKt6RmELglyj42TmZkLAvR8ZrHUUAPvsP5QLoDUtInLrtvjEeRsQQ66o3X3dhCLkblSVWxlY1chlJj5E5y3n%2F%2FrtY55%2BD%2BoZtWOJ4%2B7jQmHsJAEEg1s5XIqcqxoYlRUY45djG1g2aP8SlYVfiWeBTZTI8teVi8ZpEMD28cpJUrY4E%2BzXGumZaKPT7N%2F%2B1P56WROSA%2BzSGVVdU0Y%2BhaOJ1qfq6euvTEt%2BOC%2B0LrOyB9sv81ykv7vXzHxZMfTXhxalubBncT2TsZ4BILxKVJicwSAd3HkVs0f2UmkNHl9%2BtOMWkqCNIZZ0TM7b73HwpB1l0wBOp7q52r40%2F1OYMogJntN571jNrCfDwfPd%2ByHrFv%2FFB%2B1W0VDQKJ%2FPwMCQ%2B7zo7Vpi3GEg%2FMFlPnMs3GrCMacoZf4EdLa%2BFJyURfL34sJ1%2FpC9jyrA6U2xsCf9A4%2FI78aQQhQ3y3eE09bE8QR%2BRAkLjmThophpMu%2BPWCqvOCZKtz%2BH8olKcJLdQ%2BdOvpxWqzhwkEw%2FPpXjxiPhAGlz0RDAK1akPEew4rnuC%2FNoGxlStYjyZbuOC5khtjFnZXyXIqsfOdYmbxbPZwxh3QUeZf83CVBngPjHeX9TYDDo14rEBjqkAYArg1fnZPEzcYxXUtOd9V33SSuukuaOAbO4y06N7aSd15xWFVCERyitTwGqqW%2BQ3P95dLq95Kdw4eReOSL8Tgov1UZmLydKpwkqhHNa8SrLMRVP%2Bc0JPqlNKh6kfhenJV3h3UuhnRCJth6b%2BBOt%2Fjao3XTsCgEseXRHzcf6ElNORGEZ2kJPpLkNH0Nl4Grz6UuBbm2iAFYxIxGnE9tfV%2BH2u7xf&X-Amz-Signature=bc62ce8f321ce743bf075c71d53747e2dc2dc97e1fe0920bb56c3c47686a98a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H67CX5O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCKC2FOqPGcrxNoqkc%2FxA12mLdwVWX%2ByZ2mYy78rC6a2gIhAJxdb78SQEgbYRo8k3WbzOFsxcsaq%2B7Gl6UZrdM20WzcKv8DCDcQABoMNjM3NDIzMTgzODA1IgxBsV5ihp7ccr3h9jwq3AMZ6sulC0cVSIOalgGf4LBwXKt6RmELglyj42TmZkLAvR8ZrHUUAPvsP5QLoDUtInLrtvjEeRsQQ66o3X3dhCLkblSVWxlY1chlJj5E5y3n%2F%2FrtY55%2BD%2BoZtWOJ4%2B7jQmHsJAEEg1s5XIqcqxoYlRUY45djG1g2aP8SlYVfiWeBTZTI8teVi8ZpEMD28cpJUrY4E%2BzXGumZaKPT7N%2F%2B1P56WROSA%2BzSGVVdU0Y%2BhaOJ1qfq6euvTEt%2BOC%2B0LrOyB9sv81ykv7vXzHxZMfTXhxalubBncT2TsZ4BILxKVJicwSAd3HkVs0f2UmkNHl9%2BtOMWkqCNIZZ0TM7b73HwpB1l0wBOp7q52r40%2F1OYMogJntN571jNrCfDwfPd%2ByHrFv%2FFB%2B1W0VDQKJ%2FPwMCQ%2B7zo7Vpi3GEg%2FMFlPnMs3GrCMacoZf4EdLa%2BFJyURfL34sJ1%2FpC9jyrA6U2xsCf9A4%2FI78aQQhQ3y3eE09bE8QR%2BRAkLjmThophpMu%2BPWCqvOCZKtz%2BH8olKcJLdQ%2BdOvpxWqzhwkEw%2FPpXjxiPhAGlz0RDAK1akPEew4rnuC%2FNoGxlStYjyZbuOC5khtjFnZXyXIqsfOdYmbxbPZwxh3QUeZf83CVBngPjHeX9TYDDo14rEBjqkAYArg1fnZPEzcYxXUtOd9V33SSuukuaOAbO4y06N7aSd15xWFVCERyitTwGqqW%2BQ3P95dLq95Kdw4eReOSL8Tgov1UZmLydKpwkqhHNa8SrLMRVP%2Bc0JPqlNKh6kfhenJV3h3UuhnRCJth6b%2BBOt%2Fjao3XTsCgEseXRHzcf6ElNORGEZ2kJPpLkNH0Nl4Grz6UuBbm2iAFYxIxGnE9tfV%2BH2u7xf&X-Amz-Signature=eb74b3e2667d73f39bcdcd17b185768f9cecf9a86299a9159ac32962eec5b407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H67CX5O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCKC2FOqPGcrxNoqkc%2FxA12mLdwVWX%2ByZ2mYy78rC6a2gIhAJxdb78SQEgbYRo8k3WbzOFsxcsaq%2B7Gl6UZrdM20WzcKv8DCDcQABoMNjM3NDIzMTgzODA1IgxBsV5ihp7ccr3h9jwq3AMZ6sulC0cVSIOalgGf4LBwXKt6RmELglyj42TmZkLAvR8ZrHUUAPvsP5QLoDUtInLrtvjEeRsQQ66o3X3dhCLkblSVWxlY1chlJj5E5y3n%2F%2FrtY55%2BD%2BoZtWOJ4%2B7jQmHsJAEEg1s5XIqcqxoYlRUY45djG1g2aP8SlYVfiWeBTZTI8teVi8ZpEMD28cpJUrY4E%2BzXGumZaKPT7N%2F%2B1P56WROSA%2BzSGVVdU0Y%2BhaOJ1qfq6euvTEt%2BOC%2B0LrOyB9sv81ykv7vXzHxZMfTXhxalubBncT2TsZ4BILxKVJicwSAd3HkVs0f2UmkNHl9%2BtOMWkqCNIZZ0TM7b73HwpB1l0wBOp7q52r40%2F1OYMogJntN571jNrCfDwfPd%2ByHrFv%2FFB%2B1W0VDQKJ%2FPwMCQ%2B7zo7Vpi3GEg%2FMFlPnMs3GrCMacoZf4EdLa%2BFJyURfL34sJ1%2FpC9jyrA6U2xsCf9A4%2FI78aQQhQ3y3eE09bE8QR%2BRAkLjmThophpMu%2BPWCqvOCZKtz%2BH8olKcJLdQ%2BdOvpxWqzhwkEw%2FPpXjxiPhAGlz0RDAK1akPEew4rnuC%2FNoGxlStYjyZbuOC5khtjFnZXyXIqsfOdYmbxbPZwxh3QUeZf83CVBngPjHeX9TYDDo14rEBjqkAYArg1fnZPEzcYxXUtOd9V33SSuukuaOAbO4y06N7aSd15xWFVCERyitTwGqqW%2BQ3P95dLq95Kdw4eReOSL8Tgov1UZmLydKpwkqhHNa8SrLMRVP%2Bc0JPqlNKh6kfhenJV3h3UuhnRCJth6b%2BBOt%2Fjao3XTsCgEseXRHzcf6ElNORGEZ2kJPpLkNH0Nl4Grz6UuBbm2iAFYxIxGnE9tfV%2BH2u7xf&X-Amz-Signature=5b56444d3fefb687f0e7a936a5cbcbe3ed2902059b463033f894bfd11455ac0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
