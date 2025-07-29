---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-29T17:14:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-29T17:14:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=b27401ce122d02f94ce1810008b550334f88fe4b47e370cba85247139c53b2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=ac98879513bfb3f69edb137b7a6b52789e10ee924cc4f60a245a9405ebb03a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=9acf2ecd1b5ad83ca598f11da578f3592c332e2b9b6f2e29b68eaa7034434dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=067593c447241c138a3f904a0724e2e3b3493751e12a900bff8752f0b23369ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=4e0d3c5375a48564932fa3684ced5283bba6e38231da5a2ee81be671438d235d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=bd32455a26fb71121bfca42446ae7cb19c3205ef205fe9f4d2b0c36ed01c3f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=6c94518fd56d89db175b2acc1d6442cf99e79a852a8cf51aab31610559079390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=ce82374c556a121f6164d8014a5aace46c315384e271841b222de0b8aeaa1431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=5d7aabbd080377e18ec813336fc775297f2fb76521a5612b41efc00b054004da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=8eff04a58d7dd167f3124928c8abeb730f23471c9af38359560b4cc631a36427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=ab6e6aa8e1feea090f2ed4dddfa7fefcbf912e3e4c761f38048701685a4ebc0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=ad20ddc5f6dca3a5a39cd723dd3ec8262e83da99985202288476290b5564863a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3P3SWF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5wv15PY7c7aJ4JM4Nt40mp4JyYwIcxhy1SHpWvylWeAiEAyAxg2tjipD9vYPRkaongCLk98pReP45Sidi%2Fof8QD5wqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgsOC5pAhW5LnFVnircAyvp2SCgd1oW93QWJPIMc2%2BlDYkB9UukbHLq5PLbTZiluSC8ctF5gtLiAYVxYQW913ocH%2FHWLLptHtLADd6a3rWIeN4gwZRVRKVmoN25qdl3QEdmUYlF3%2BeNPe%2B3080nTUQHDkbMzuYsr%2Fw3pp0ro4SeGOBK1u6hrcIqpzSRXo66J1oEzpCbuuAyvYKK83%2FuyAQZ7sqqfYuTvWJs1IjOKl21%2FFGQQeRSpDGwKKLjCRYhEWfvh7l4F0tgGhWdTstL9p8niD5FCMxE9VQGCdN2%2BkKpen50F1KT%2FWA2V1Cc0m%2FUATGwmZvA4Yrys%2FgeWTi70PunJ4WsYHUl2%2B1I2sZTZU0lXkjUdtnq6sJtBUiBmNJFaUwTT%2Fx7SRtzO4bynXGKMbcKmALKnOzdCvTGPFPtMg0oGZZ849hyam6Y9rK%2F%2FhCH69uqPHXK2b%2FctJri9r57tNOXvRvU2UJnOeAzr0FW6vD7rWKCq1ws6Xz0qRFKpxFC4glUep%2FZlwZVjhPn5wI%2BWkl%2FQwaVjllqIU%2F9zSdnvieEANhGOWABadLMH8OczCXtxJaG1XY3kqsXoZB0UY2ILH2BGz8WENKROquZnZyqqphbQn%2FbkXdyTWQPWJ6SUooJm3O9NI0BnCvmmCUqMMOKpcQGOqUBxsJ6RwfgV1JgZZmXN3ktPwTssbRm5niNp0pcr2fzbi9NCWegDotkGrteSlO19iuHyAETrE%2BBOYt9NuiZcF2tN%2BksVe1dAmNUJruhaggnBebiBNmCoX1n0g7vXqTsA0D%2FgxR69trvojjk8x%2FjT8tdht31NhRjaus3HEIJdo2ufYUxm9icNKO%2B3tpBFa90n5RVD%2FKajZKIq8AnjY4xocT6nl9Aa7Pb&X-Amz-Signature=0ab4d48cb3d2cf4d4589b1a62b6c7cd37a852bf617ca05997463f4e9f668b165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Nav2 settings

TODO: change footprint?
