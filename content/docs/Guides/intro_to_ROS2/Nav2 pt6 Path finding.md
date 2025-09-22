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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=193184e6656c2d923c143a11935d3a1417e1720856576123372f3b5399455da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=8dddee0ab26d64f35d30250cff3b679ea7499f9c85c4c1aafa9ec743794f0111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=e982738a6141b7fd69f3c7b0bc59277a3fe998c648732aae16ca48ed6fbfbf5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=908295037fa812ffb7bf3a12f3e2e699f6bc476b80d9194071e453ca2b846bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=0176f6a621f10a100789e63f1a1ff49ffd8a08023498f0b12ec90ef743006acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=4918844f881ffbb6fbb5c90092e41263a3d33887105e4b3910bd5b77e4f4788e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=c33d3ade73d33a131b9439dbf2b7115063fe0dcb52dfc183dc77c8366cb5b61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=16eab02f6aeb7d2df736ec825dc0f3e09e984d6d64a68975f868b5c4143b139b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=bd868e870ac796f009e2062653dc45a92643e672dee45e87f3fa4723111cb0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=a65f512fd93057071c7a7f19e62dd86bd6a21328632d678489d16d300b249c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=f400b75745d49ed99de2190a2a80850cc5234bd2b4addd533c8c04c3e547b810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=548b914fcb1c09a69548c9a8d0333e4bb05f4dbbbdec98948d560b9f67567cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCF7PN6%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2%2FQyBftAoMj3J%2FGIvNEGPn9LjOW3LB%2FKb6C0D0w8JXAiAwUfoWKyLXNBRaHKXoEnqamaI9A1gEsMNNQsNpWnDG4yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9Lj%2BMSRbcM2hGjtGKtwDUkEppEonZ9E0NSuZotK81QRkcw1SjTMwC3YaDbsc3l431jAjt629Gir%2F76K8ocgAFcrgnJMpBNhXqekoy%2F1MMAcMkNkQ8z7WFh39qaj%2BrkDvMmBkfM9qLB1FLYHy%2F642fGtrcnf95FA7ZO%2B94U%2BhfocQmh5snfEY3JlsN91sccm0SIdIz7kyQHujrRHAIrcyP7qSHy8NXg8eWaTbVNHP4rEWVKU%2FhQvlrs%2BgEWHOe%2FqdDgd6sz1%2FUO0YPGR2KSjjCRAAEjaEtRmN9albfKwGTlwBVzvqQLVQVgR6NO22pr8CCKkiWLRWvIsib2fCbGq7La6LcKRfPM7qWaTIMA0BZLubl%2Fzr4FdEQrulE4diSWpjFEK7FVpTFkLaFZ%2B1%2BtePm4PssBvX%2FNK9EnFn0Y7YfbBd7UeFXXQ2CVTwnamv7VoU7NF9JpTvVMIBE99%2FjqVcFT3rovhJ%2FVzFlsZ4Yy7XxTHlm67PfuRcs5t7QNDeWNh8In5fO3ebOX%2FNoj9NAIRlX%2BXtyI7Lmt1w77irqv0WMZAqj6E24VFWLZzIZuUXn22X%2FRB3JcxYzp4aJUHo0cBVq131WRu4RH7tbOtVHuQistdlt1OJAeOYGTNZGcNjF1zRx%2BugiEJm6oXdIx8wlcbCxgY6pgHVhWjK86E4EiT4hREijJxqVFR%2FoKKF%2FxiTxt5Is6VfIW%2FOn9haOWnjnrSE6JVPqpth1LX3GCNYnK53Y2lSCuDxEfAlOCMjTVbmlRPrdgRHG1u8%2BT643g3hqcDUXrQe4v8VoKy2z5%2BhK2PbMfLwBKIEFCrPiG%2BSsaY2TLBgkzbdS5BTmuM0JAGGr7beUvJnQqoi6xK7vfClsB%2FDaznnR9Af3PsvLE0p&X-Amz-Signature=e376440bcdf7678e13c35c14282cdae75f015df29b1d8d500fac5c15c7ac1a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
