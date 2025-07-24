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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAAMXM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAG%2Fu64L%2F9tQ8E5tAG%2BLNXxVwSU8s5RUD80qrLaZSMsUAiEA2tYzBmk8vTfgTJZ2ql9ZQ8q1WkOAGn4FOGY262BTmG8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFNvMcuYV4MithfmCCrcA0lmawhJ09BVGRM2Is833H1sbrYaLvwOOkBzVqWQoXkjUIyy4s7A3lr1XhFu0F%2FVVgkIDHJjkjDVDu4ufV3golWMrWzOorBTgTQO8OMgXoFHDc6CDiCnA9zgC6iJf48PHOKFn2v1EuvxeWfteuFXTfTdctMk3z7jnIWR3uMDqWhxXKKxh%2F0jCxoglGiu1xsH0gjAgT5dsSy731pEzIcx%2BUHsk1MZCZCoES8ckJ%2Bln0NbAQl%2BqclCtKdQdih8QDmkALp1k7QYyjk2SzdFHglX8H2s%2FCOYGK%2FErsO6djKnGXhD%2Fg5dR5fSXus00oZMhRVGz2FFqjqrlOKojdIFkupiCSODGi4Q8tps3p%2F6MZnJ9WJii726cic5Cgh1iIJM6qeQB2PPzHTTrz29dPJEMbqpjdZK7JlOYA%2Br44y70u%2FTN863n%2BzOaB7ZeR3mmpmv7UT%2FVwoEj4B009aMp3fK8%2B3omhh41YGDwdi%2Fk%2FJx2n10uo%2Bft3WbGlslKdc14rstZsqgzvpUGy0QIzxJag88sFJflWNkY%2FfcAaV1BDW9mfx3IlDIiTCppw2apK7nEZ%2Bz2MfNARXkV%2B0c36W7fDVp3%2BA5jJi%2FTkbhw1K1OKWT7PlFIjRNqoBZAn5J7OEnWkToMJO2iMQGOqUBu3QIROmbyZLIs8gpNC3csPgzZ2H8wwB%2BRlailvqOXlF4Lt4J0IzdChJLpqcbKQ7UjSunUBlV8Y4xEtW57S81uVFYw0bWaVkG1WsmZA1IQY%2BFpXbluLDPI3nK6EF7f5%2Ft5RDATGZNljzX4U4YCMcjj5mqgvxuw9fj8b%2BMABB%2B7wQ%2BhBeF8xbY2oKX3pFIohXxaJlnxmpjKTAXmzGuVsxCkl0J2fu9&X-Amz-Signature=470fae473cd1ba29851cd49405979d35ef9f765441ad26c289f11ce863c752dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAAMXM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAG%2Fu64L%2F9tQ8E5tAG%2BLNXxVwSU8s5RUD80qrLaZSMsUAiEA2tYzBmk8vTfgTJZ2ql9ZQ8q1WkOAGn4FOGY262BTmG8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFNvMcuYV4MithfmCCrcA0lmawhJ09BVGRM2Is833H1sbrYaLvwOOkBzVqWQoXkjUIyy4s7A3lr1XhFu0F%2FVVgkIDHJjkjDVDu4ufV3golWMrWzOorBTgTQO8OMgXoFHDc6CDiCnA9zgC6iJf48PHOKFn2v1EuvxeWfteuFXTfTdctMk3z7jnIWR3uMDqWhxXKKxh%2F0jCxoglGiu1xsH0gjAgT5dsSy731pEzIcx%2BUHsk1MZCZCoES8ckJ%2Bln0NbAQl%2BqclCtKdQdih8QDmkALp1k7QYyjk2SzdFHglX8H2s%2FCOYGK%2FErsO6djKnGXhD%2Fg5dR5fSXus00oZMhRVGz2FFqjqrlOKojdIFkupiCSODGi4Q8tps3p%2F6MZnJ9WJii726cic5Cgh1iIJM6qeQB2PPzHTTrz29dPJEMbqpjdZK7JlOYA%2Br44y70u%2FTN863n%2BzOaB7ZeR3mmpmv7UT%2FVwoEj4B009aMp3fK8%2B3omhh41YGDwdi%2Fk%2FJx2n10uo%2Bft3WbGlslKdc14rstZsqgzvpUGy0QIzxJag88sFJflWNkY%2FfcAaV1BDW9mfx3IlDIiTCppw2apK7nEZ%2Bz2MfNARXkV%2B0c36W7fDVp3%2BA5jJi%2FTkbhw1K1OKWT7PlFIjRNqoBZAn5J7OEnWkToMJO2iMQGOqUBu3QIROmbyZLIs8gpNC3csPgzZ2H8wwB%2BRlailvqOXlF4Lt4J0IzdChJLpqcbKQ7UjSunUBlV8Y4xEtW57S81uVFYw0bWaVkG1WsmZA1IQY%2BFpXbluLDPI3nK6EF7f5%2Ft5RDATGZNljzX4U4YCMcjj5mqgvxuw9fj8b%2BMABB%2B7wQ%2BhBeF8xbY2oKX3pFIohXxaJlnxmpjKTAXmzGuVsxCkl0J2fu9&X-Amz-Signature=918c6326277814ed3a25429f4a99cc83d87c4c6d79ee013bfaa2ee2576394a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAAMXM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAG%2Fu64L%2F9tQ8E5tAG%2BLNXxVwSU8s5RUD80qrLaZSMsUAiEA2tYzBmk8vTfgTJZ2ql9ZQ8q1WkOAGn4FOGY262BTmG8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFNvMcuYV4MithfmCCrcA0lmawhJ09BVGRM2Is833H1sbrYaLvwOOkBzVqWQoXkjUIyy4s7A3lr1XhFu0F%2FVVgkIDHJjkjDVDu4ufV3golWMrWzOorBTgTQO8OMgXoFHDc6CDiCnA9zgC6iJf48PHOKFn2v1EuvxeWfteuFXTfTdctMk3z7jnIWR3uMDqWhxXKKxh%2F0jCxoglGiu1xsH0gjAgT5dsSy731pEzIcx%2BUHsk1MZCZCoES8ckJ%2Bln0NbAQl%2BqclCtKdQdih8QDmkALp1k7QYyjk2SzdFHglX8H2s%2FCOYGK%2FErsO6djKnGXhD%2Fg5dR5fSXus00oZMhRVGz2FFqjqrlOKojdIFkupiCSODGi4Q8tps3p%2F6MZnJ9WJii726cic5Cgh1iIJM6qeQB2PPzHTTrz29dPJEMbqpjdZK7JlOYA%2Br44y70u%2FTN863n%2BzOaB7ZeR3mmpmv7UT%2FVwoEj4B009aMp3fK8%2B3omhh41YGDwdi%2Fk%2FJx2n10uo%2Bft3WbGlslKdc14rstZsqgzvpUGy0QIzxJag88sFJflWNkY%2FfcAaV1BDW9mfx3IlDIiTCppw2apK7nEZ%2Bz2MfNARXkV%2B0c36W7fDVp3%2BA5jJi%2FTkbhw1K1OKWT7PlFIjRNqoBZAn5J7OEnWkToMJO2iMQGOqUBu3QIROmbyZLIs8gpNC3csPgzZ2H8wwB%2BRlailvqOXlF4Lt4J0IzdChJLpqcbKQ7UjSunUBlV8Y4xEtW57S81uVFYw0bWaVkG1WsmZA1IQY%2BFpXbluLDPI3nK6EF7f5%2Ft5RDATGZNljzX4U4YCMcjj5mqgvxuw9fj8b%2BMABB%2B7wQ%2BhBeF8xbY2oKX3pFIohXxaJlnxmpjKTAXmzGuVsxCkl0J2fu9&X-Amz-Signature=52f5b2fbe77672dabe49e9c77d8773449f955f704e048089764136ff0b320646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAAMXM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAG%2Fu64L%2F9tQ8E5tAG%2BLNXxVwSU8s5RUD80qrLaZSMsUAiEA2tYzBmk8vTfgTJZ2ql9ZQ8q1WkOAGn4FOGY262BTmG8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFNvMcuYV4MithfmCCrcA0lmawhJ09BVGRM2Is833H1sbrYaLvwOOkBzVqWQoXkjUIyy4s7A3lr1XhFu0F%2FVVgkIDHJjkjDVDu4ufV3golWMrWzOorBTgTQO8OMgXoFHDc6CDiCnA9zgC6iJf48PHOKFn2v1EuvxeWfteuFXTfTdctMk3z7jnIWR3uMDqWhxXKKxh%2F0jCxoglGiu1xsH0gjAgT5dsSy731pEzIcx%2BUHsk1MZCZCoES8ckJ%2Bln0NbAQl%2BqclCtKdQdih8QDmkALp1k7QYyjk2SzdFHglX8H2s%2FCOYGK%2FErsO6djKnGXhD%2Fg5dR5fSXus00oZMhRVGz2FFqjqrlOKojdIFkupiCSODGi4Q8tps3p%2F6MZnJ9WJii726cic5Cgh1iIJM6qeQB2PPzHTTrz29dPJEMbqpjdZK7JlOYA%2Br44y70u%2FTN863n%2BzOaB7ZeR3mmpmv7UT%2FVwoEj4B009aMp3fK8%2B3omhh41YGDwdi%2Fk%2FJx2n10uo%2Bft3WbGlslKdc14rstZsqgzvpUGy0QIzxJag88sFJflWNkY%2FfcAaV1BDW9mfx3IlDIiTCppw2apK7nEZ%2Bz2MfNARXkV%2B0c36W7fDVp3%2BA5jJi%2FTkbhw1K1OKWT7PlFIjRNqoBZAn5J7OEnWkToMJO2iMQGOqUBu3QIROmbyZLIs8gpNC3csPgzZ2H8wwB%2BRlailvqOXlF4Lt4J0IzdChJLpqcbKQ7UjSunUBlV8Y4xEtW57S81uVFYw0bWaVkG1WsmZA1IQY%2BFpXbluLDPI3nK6EF7f5%2Ft5RDATGZNljzX4U4YCMcjj5mqgvxuw9fj8b%2BMABB%2B7wQ%2BhBeF8xbY2oKX3pFIohXxaJlnxmpjKTAXmzGuVsxCkl0J2fu9&X-Amz-Signature=045a650def9f9419180e54148ea17c80848dc0778e9840767946ca8f3d5d7903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAAMXM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAG%2Fu64L%2F9tQ8E5tAG%2BLNXxVwSU8s5RUD80qrLaZSMsUAiEA2tYzBmk8vTfgTJZ2ql9ZQ8q1WkOAGn4FOGY262BTmG8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFNvMcuYV4MithfmCCrcA0lmawhJ09BVGRM2Is833H1sbrYaLvwOOkBzVqWQoXkjUIyy4s7A3lr1XhFu0F%2FVVgkIDHJjkjDVDu4ufV3golWMrWzOorBTgTQO8OMgXoFHDc6CDiCnA9zgC6iJf48PHOKFn2v1EuvxeWfteuFXTfTdctMk3z7jnIWR3uMDqWhxXKKxh%2F0jCxoglGiu1xsH0gjAgT5dsSy731pEzIcx%2BUHsk1MZCZCoES8ckJ%2Bln0NbAQl%2BqclCtKdQdih8QDmkALp1k7QYyjk2SzdFHglX8H2s%2FCOYGK%2FErsO6djKnGXhD%2Fg5dR5fSXus00oZMhRVGz2FFqjqrlOKojdIFkupiCSODGi4Q8tps3p%2F6MZnJ9WJii726cic5Cgh1iIJM6qeQB2PPzHTTrz29dPJEMbqpjdZK7JlOYA%2Br44y70u%2FTN863n%2BzOaB7ZeR3mmpmv7UT%2FVwoEj4B009aMp3fK8%2B3omhh41YGDwdi%2Fk%2FJx2n10uo%2Bft3WbGlslKdc14rstZsqgzvpUGy0QIzxJag88sFJflWNkY%2FfcAaV1BDW9mfx3IlDIiTCppw2apK7nEZ%2Bz2MfNARXkV%2B0c36W7fDVp3%2BA5jJi%2FTkbhw1K1OKWT7PlFIjRNqoBZAn5J7OEnWkToMJO2iMQGOqUBu3QIROmbyZLIs8gpNC3csPgzZ2H8wwB%2BRlailvqOXlF4Lt4J0IzdChJLpqcbKQ7UjSunUBlV8Y4xEtW57S81uVFYw0bWaVkG1WsmZA1IQY%2BFpXbluLDPI3nK6EF7f5%2Ft5RDATGZNljzX4U4YCMcjj5mqgvxuw9fj8b%2BMABB%2B7wQ%2BhBeF8xbY2oKX3pFIohXxaJlnxmpjKTAXmzGuVsxCkl0J2fu9&X-Amz-Signature=8bed8542f62905305c1e08230a20e157928d78f00ab016f4e7b1d50a7433556d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAAMXM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIAG%2Fu64L%2F9tQ8E5tAG%2BLNXxVwSU8s5RUD80qrLaZSMsUAiEA2tYzBmk8vTfgTJZ2ql9ZQ8q1WkOAGn4FOGY262BTmG8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFNvMcuYV4MithfmCCrcA0lmawhJ09BVGRM2Is833H1sbrYaLvwOOkBzVqWQoXkjUIyy4s7A3lr1XhFu0F%2FVVgkIDHJjkjDVDu4ufV3golWMrWzOorBTgTQO8OMgXoFHDc6CDiCnA9zgC6iJf48PHOKFn2v1EuvxeWfteuFXTfTdctMk3z7jnIWR3uMDqWhxXKKxh%2F0jCxoglGiu1xsH0gjAgT5dsSy731pEzIcx%2BUHsk1MZCZCoES8ckJ%2Bln0NbAQl%2BqclCtKdQdih8QDmkALp1k7QYyjk2SzdFHglX8H2s%2FCOYGK%2FErsO6djKnGXhD%2Fg5dR5fSXus00oZMhRVGz2FFqjqrlOKojdIFkupiCSODGi4Q8tps3p%2F6MZnJ9WJii726cic5Cgh1iIJM6qeQB2PPzHTTrz29dPJEMbqpjdZK7JlOYA%2Br44y70u%2FTN863n%2BzOaB7ZeR3mmpmv7UT%2FVwoEj4B009aMp3fK8%2B3omhh41YGDwdi%2Fk%2FJx2n10uo%2Bft3WbGlslKdc14rstZsqgzvpUGy0QIzxJag88sFJflWNkY%2FfcAaV1BDW9mfx3IlDIiTCppw2apK7nEZ%2Bz2MfNARXkV%2B0c36W7fDVp3%2BA5jJi%2FTkbhw1K1OKWT7PlFIjRNqoBZAn5J7OEnWkToMJO2iMQGOqUBu3QIROmbyZLIs8gpNC3csPgzZ2H8wwB%2BRlailvqOXlF4Lt4J0IzdChJLpqcbKQ7UjSunUBlV8Y4xEtW57S81uVFYw0bWaVkG1WsmZA1IQY%2BFpXbluLDPI3nK6EF7f5%2Ft5RDATGZNljzX4U4YCMcjj5mqgvxuw9fj8b%2BMABB%2B7wQ%2BhBeF8xbY2oKX3pFIohXxaJlnxmpjKTAXmzGuVsxCkl0J2fu9&X-Amz-Signature=3aa52fc3de7683eef5c3b7722ba7d388e059f3d268b65c9e88af2312979e1c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
