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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=01d842184eef5d1d0d371978c5d706c7156354b9944ee60825995bf0f3593b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=335bffe5e79356f75b10437a85caecb9752434d0ba9c100f244635b6ae71c4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=168faa654eeefd03ce57064266087048e4fc5baf4a25d5f7285575df4f012ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=265ded0daaf38f62822cabe79b0213f5ac5f01309961708d5aa40732e94b8304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=11facd0cf8217db34c7c62abcbdf7448ba5240dc6ba8dd657c38797a43c20492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=0796dccc7fc34330c80947959ebca90a0912236f9a565c9bf0ff59358739e966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=d573d03359982d7a00c42c2a31771d39afb2d5383b183aae43333d91026d9e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=8f966fb34f76e2f6cfd2c8bcdbd249f7fa13afd5fb2efc016cbada2932a669ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=c1cb822a777fd404fc9e86997064d4642ae9cfe3746fc9b319b67705df8ddcae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=a8cb27057575ec70c49fd2745294b91dae901fee498edc083d8ae17c6beee258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=1662a28101c8a0f130c45816dab5ae8cc403bccb60026977edcd14fd92e9e6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=50cb0c5a92bcba11d2edc9b62a877097bd2c1594df08b3f7ab95dcff949fe02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJN3DBF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCmckZrCxgeS6EAhPK5odSW7qMVZUDr4OnCVOB0hLSXtQIgdZj7Lg%2FLkv30tDQCCVAQTBUE4o%2FUIPW4QwIYKM25iFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJV1loM1hMYXjVpXlCrcA1uiifBxOUwA%2B0rTRuLML934HGJP4GkL6xi3UrdciBinHUJNc%2BNJzgnhcDcCtUphCLerjQgFbm9nlX5qtWD0iyDU7n8K1UAgbKgdANDIMLScUtqVq1eGQ9wSwABBI4hjBNkdePiP5yZR166snc%2FD6lOYtDv5Krx0l1cE3pRxIK%2BOZ100NZKzzTPqn%2B0SdeoWxaJhVwvO%2FM0zL63I5ulL4%2FPE%2FYHdoA77WR9MMZpfXx0LQNx0oXV7QYrQrpsQqzoBhy0CDD2VMop0%2Fwo0d4Fw7zT6rG8ok%2BHGZ9%2BLZLEP8sy1OIF8t6svW6bjeScClKAlIQQ6qWkoaMGdR4OTgggIhPB%2BroidYTlsL%2BGQdM8sAW75zgm6ubDa8fN3mHIpZlgNUX0tMS%2FWU8DCQSvSCgIGL9GhgbegRCNrVSsO4oHtH5ezu6aXEB0%2Ftfh2Ml1doN2a4UMqeofogDWWNjB1QCUVpXUBF0a08pt6R7BKfpqLrsc8Tmj7%2BcUrp4MNSzffq0XgXZkbA4UC13un2HB%2B2lcINLNx2hZ20N%2BWX9ORgBZoB7L3hnjZunlMJEr9RDZqxkcSuW8fbR%2B0qlTK1jEcyOi%2F4vCrkniBVvE86Uc3eXdS%2FPjC95NbYAokGDmDOielMPCsx8QGOqUBdP9YPQCStnO9f4SDkyZgyZOyHeETUN3M9ZiRgBHodL73tacBoszeVfKOZKDYtYVnMO74Xyp%2FBWj5D%2FCswY7uTfTP7ZCiTaI36DavbXl%2B2R3H2ScDPxqBrJrxlltU9RAUnjKehE0ZFLOEv6%2BH64k%2BhyxKBGYAoufYHv3ZItWQFTL8WZgp8Q6WfB3muiN%2F6%2FmZIH0RqHiYKy8iRmBGhKceNtKL7PcC&X-Amz-Signature=b0d64f716ba2c546884c6715f0c70707042b5434492249acecb92ccdc04aae97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
