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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=ebe4b8f7718c44e7c9b8ad595f0b67b1c87fa977c9eb2a44efd65c83c29e766a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=4ecebd847f49f1c595ec6dc86b709fd92e1a58568c2cc448c5e116a34873792c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=4c01e3b48f2a8c23b5ff4de72466daaf991909fe4b3f267bf5de780ea913e700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=01c4330af9830d0ac88f3eb13acddb029dbd8aa09af65ce64e97af9c6bdf1867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=0239de3d56419d4b442965cd5706bf62dc5b7de3366c8f6dc53c4e18ddf9c2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=4673518c98606e3c3463d7141d73aea21da63028defdecea2ed447833fdd0235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=cc986b2bf821bb98ce8d5b52c09aea2ec7346a2b14b73a95e6ed1b32e79ade5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=914ea046548064b3328c6befcba66664700b697aaa834b1f02807adee387ed8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=f57fde8c029bd54ef1a727e944f9b146ca5d779695c5b51f4cd2e53a8d381627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=946c62aaada591c41e396076fc7b592bc37e96ded0e087d2ce5cf58869ff6e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=07742b9e96a18a8ab9462375b4ab0c57be6961b7cd30721176d9163255a43be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=72daea48cd782ba4bc06c7d88df50abb4031d28e779eb58f45fe19a397362b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LXVT3Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKiT%2Bh11i1dkAOxZc3IN5gaysWw7T6N5OJCCFpcYt7AiEAv6mL8aE5PPuStoyuzyWxyiMp50U4mtfk4k%2F6crh4vuUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMthRE7kGS3tCo0rPCrcA5uk6HJva0u6wAjmMU0RlF4ayXperEz6f%2F36wd%2BQwqIXLxc3CgaGj%2FkNzj3g3oOO%2F14%2Bwi0946ySvYNBQZXAJmq4zTRb728zTgsUBHdupdLYMObKVNf3YZby91iYKgv1jmWo3143UFTL85hmBot4iQHn4MHgdZ5r7QJb8o%2Bt8MAE0jvoGeZBgG5TIlEhuPOotyk2xh%2FLI9tf4f6712xWMAp3RDPRdMg%2Fp8ZdaPr0aKzgYJgswuCHewCDxudt1sRpWHjhurV3TmYOSgWNHNeSz0qRd2R9dEjNHdpBuyaGltu9j0yiB8qYU%2FCRygV06Oe8PjkGEf%2F%2BCzbrlsmeyud%2BpTN4395wkclzFzrnx16p%2BBVnu1m%2FgdPfwyg6xjaL79xcsLttQTuuewaPdPFwgs7kXn6btflvfZL8X6Z2oZn6zTMEafMaiTqU7BrSGJ%2BmTp1guGoeAla5TFWR9ysFW0fWduA%2BWipcihiOxLm237GnNhW7ZZU%2FMwLn96eqd1u%2FCEdDGjcxyLf3QD7h3htMu2QyHKSXdvFb6%2BmLqYBQG68VYSbXB6XbrymB04%2FGLFd%2BBGvepSFhVOqMLjWu31KqUAGZ40UO%2BSG0Qm3Z97zkQNudT%2Bo1tkWQh4EzIWqCzCYiMIqe5cQGOqUBEz2bT7qFE4pgPD6RTOp8QASfafHQxCfg1mX2RvYZV5LiLSgb0uebMdytNU6FkYwBOGVZvtIBKmdtdC4Q%2BH6zb2iGNOVlJozQsJ7yJVYwiFfj9XcLB7oCrNmH9eQShKsfX4Schyj8FuF4oSKA994S%2Bqeer6XP4ClnDk4FawfnJo0LjYkfO6RY%2FuTMw6xRfyQZ%2BKrMZp3fNEtpBxAe0m%2BgKRMwytIb&X-Amz-Signature=8aeea0213ca147358aa0b809d8be39c737cb13af2cefab94ca7eb6cdd9a7f612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
