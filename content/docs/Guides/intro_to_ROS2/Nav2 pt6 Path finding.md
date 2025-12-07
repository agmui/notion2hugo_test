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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=d0b6fba494187dc30b08c0d91030d830d43352d4f672084f2ded35466121e994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=a14378a9c1b5d06e04cf35bc73142a0282ddce58ffe22d57294cba71645802a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=53caabf26f1c1c0463b044289c8f2297eebd305ec181d0d1e38763d4661090e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=532c055e05c83aac5969eb3f0c3dca9a92e6266deb6bed96af446166f6bac9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=85c0fb3f7868982e59557617343d374e1cd224fd7c9b956369380a9e1ccb08d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=a9ab2d383be76ba7cff92d690737d1ece4533284520a8e69dcd05c74cfb2531b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=9c12853c9ec3a60b9c4309711e115d0cfcfd1aa2af5da063c439b4568341fe58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=670da541ea378cd79038bc34601e606a936beae8a00df8607bac6a2fbea48969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=c5405899a75e99bb8f0c4091bad386362abf8d83f17055839b7ef5f43c4bc2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=2caf04b5ea9b8e8b19dce3cf56bb6ff93998358f28696c7813cab43c08a4828e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=ae2f57a9229fae9f84ae3a3a4d66fa29626df661c96c0e11dab31ad0b8af5eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=a98158477cec3107bfe7f7e72c11658cd1e54c7e4d3a219ab2b5c792a63f4a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIMRODZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWhrGRxvkuFU57PHAofz16gte2mF2MPf7CIU%2FsvRxvAiEA%2FA8WUv3FHEOxa4tWfc1EE%2FpSP4xUVreAqs1gJpJCYzoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdwJkwYBB%2Fm6%2BWEPircAzuR7HUt3kjJ2S8%2B7AKmQP92asQPIGaGNUkX9fr4CqDZ%2BHbDVlSYzNWUb%2FJOxLHmgMZ9iEf%2F3XyIB%2B43XD1DRg6eMulSW%2FSEpwG8YSQpqEwT3RgdxeudoYWSaQsCYKaCfaPQDQOW1gBycIQxOVJeXuCOxEK3OLnXEDylSvrNFk0CPtpNHbOU0TpNEYjmdY67YPkcfIj54n6PEEuryW665KurRHIjknWpMBD4iCT4EoG3JQb3SIJm6lGfAijDEUngbzO8US5A%2BHajc2Dy%2BYLnov2aPldfTwCWzeAANDuqH0Gs6pRI0Qt0Cc%2Fk3lnqUyHQWv4GW%2FQfqsLkOtJFXFkQcTArKnRutyyZay7GvMFP%2BRAV1393%2FLdMYi5iRBE0VYnRYupyj7sVHqZtUX62ziP%2BhIGvNNwzjPbzWAwxgVzPovXR%2BWuf%2BlsOMJvnsLk6heYYiwfylFtptX5PYSIWhyXiSHnBxRycfktqT0aFo6T1mHJHAHhBLwVa%2FyuAG0yplSWb%2F5UH6RJP2VDA3FYZ%2FTulsnJKuVjBwlUeBgBZz6%2Blg0SYHmrpa%2BzGEzeu4xtak4%2F4L737q1kGQQxQMGB3RVbMK%2BmW5zSLIEzDCvM44BkwEjlK33xjwPnSDzSIKHHQMJD%2B0skGOqUBKAu3dnToGRno1PL%2FxnljZZR6F6mVp7PUO7x9EqfVM7hF4D4CJDVzhOx5IBpvgVXvIKaakBEbhGS4Lhk4IXt%2BJygcsG4fmBRJAIUzuADVUHHReyhilGk%2BG20H5BOuYxX8YxvzA1D9HqXgYCg60DIuSD56JaYk%2FhXDAoVQg0o5FJkkEofn%2Brnv54qe1wDacYKGISsq%2FYxUJD8hqsMqzfyk7ru6KYQu&X-Amz-Signature=6bc6409868387f3266435e12a340399c3f27c53e72a94bc40b0ef6003c7f0e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
