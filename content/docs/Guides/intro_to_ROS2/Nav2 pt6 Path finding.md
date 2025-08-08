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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=648a614a194f1d0419a15c28e6da2a6ba1bc2da26cfcad94f450a8c196f24f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=ed81240647ae4bc7534121d942262617fc5f2c40a764c0f67b42785d0155b148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=d0b5a4f2068bedc05b4f7b69771f4db5203158a1e0646d937be6cb37e950fe59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=de9cf1c3f8ba92e57fcdf41055d39c4da9fc75549c4991359dcac7aec0846666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=265e72c3795c6ed194be448c5c9ddff56589b9f6d901e025e21551033696c94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=3a1525e84330412ca75cd2d809f94b53d7926fd49ac1d0afa9b250f68b2c38f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=1871393533748ac1af7f290e64b52d085c56f306cd03111d8894fa853eabb557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=a73c973b659230dcae249a93baa9f9842c43a5e48619347a2ed4e827194f2f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=0b741c7fb68b55f2969b1662085e3f9c65d6428ea48d70f78c84fcd3812fc400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=f28d2c0e45c9c1396fb00d9345123c13ae000464cee4feb5a48ae038ee63e7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=c59e0036e8624187ce9bc1cc5e50024568f3d90e177b817f4db819be744bdaf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=77df786d318f7b21007c9e44baa77c2ab556a51d36390971acc7583eeafa302c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4ZA7CH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCIVbYWgsHxlh8x3H78v%2Be320DPZPnFOeWAapVZM7I%2FVAIhAMJosOfFQTYHd%2F%2BnIBU0FxmupwgeR8z9RuFMIRywLXTWKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2FQzMlbXu7jZTxqkq3AM33RoN4l6cFYKoWWtOZohvzFg%2F0D5OtFeBqyczZgr0G8%2BkOzLJ3gKrnP%2F78qVCdMZ%2BQrOIJDo%2FJPNVxBApGNP1HdJhh5sgmG%2F76rlW8dezyhiXYTXXLj8wAyC5EBsKhLTNK7opdDlGhT0mNzaQkyYwdcEwHXwAIb2HIGWFlrkaXeWgatemmthYbtFdl15snsEcNRwWd5sf3Sgs2WxgpdAd23qdXdFTsAEdWjb2u0I4kd1ZktJHJLzIEqHnEyqwO6n6Z3MPTjEV5Zpa3%2BwPd0Cw905F%2BAPvdXqjn23uH%2FKSkJ6QaVXZWceK7%2B96eHCYPMIqPt8zSWeoGOa6gXuguCGu0QaXJJA1TbyvDZuquUZ7vooVbbt29%2BMha8CqSHgmJlvxs6z2%2BjzuOEOVOm%2FcsdnZVf75NtCWAWLqoy9iDQnLGoXL7pa7TZMRo5aY4ZJ2lzOUgG0grrpPNQ0dcOP%2Flvpv56zPaSOG7Ic%2F9R0TmezobE8uD%2BYxkADSzEa4nCXmplY4TYgu%2BNa2MGG3ECaxduKpu2u2V0ILc8o593mIraW%2BGUYClWd%2Fhh31NS9vURUSHks6PsxlVVP3xQjxQfC4eX7oRvrLCnejoIeyjKLOVZlegysUuYLiRoCEZoPKajCu7NbEBjqkATxdjK%2Bvy7a%2Bxa3tIIvYRjh0jHsP8QxhzXTo0ojD82u7NqYmQBX48V3O6EeL0hJGEVfahAma7TRv%2B%2FTPbuWjbyL8ErA4V5ISvmHjeVEKugUv9vr%2FZalbdBIUqyRKBcH90k2I%2Fw5g2Q3c3Wv1E3yfiojQ%2F%2FMTgPpY%2BeSeTpxzzery2NDWwbW7V0IhpSNKBuwskMohMfCd6NXyT1X%2Bggl0k3%2FDV9j4&X-Amz-Signature=b31d731c1be69806cfb84b27f49d09dd5c11bbed0a1db7722f35a5cda5b23722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
