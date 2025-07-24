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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5MJTDZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIG%2B%2FhYylxLdnKHZnOyDCpqoNPo2u0FolDjiTnQm4W89aAiEAwXqw24AB8mURRNYGZfB%2B%2B%2B3G%2FqjXOXD7iZdByalbESUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHxpmUpSo5vQyyyuCCrcA%2F9IlLSiEKQByE%2FpQN%2FcL0yyX08JuWvPd6wNeHcQM8EoZaxqesjzCTX1OPIIrwxnKJHlRvgC9FpE2XScAl02fmw96hOXmQ2Gb8YC%2Fmw%2F8FAi6X45C%2BxkhNBysXj88jjW3Lj0CJ44PfuC6%2F2HYMcZJATRDI2GdmNa0EOLNJVP8eC0GsVVgZXPoLdd%2BGFOHdVsNRnbXw6tQJOjdxilXQvmtxxrrqU5vjq7kKk2dFd7S3UuZY3Rvfz0pq9YlYlffdYPqfaI%2FFrgy3fc8zDBjVr4A%2Fu8QsluLaJ8NiXk4lkznQ5iaFIJbvpvmF%2BxJLk55VUBfPcs1TABqrreQaKoYiE0JsYR4TKT4JoxgXaLhSmAfIL4oqfOvLcFLVQ97Qt8%2B5pEbJUmQfzTL8RT3ofoZgPuxpIe%2FydmIYTrVP0k8ZDeLT4wk5nxSEJCOH%2Bvk5ONv8t4cYwQTGz1mWqBFpF1UB6X4BLReaUqXTzCNPXreXZ%2B8VkRnyUpAdGcKUr7GelfYW7i%2FDdP4GxKnIRFVRvwt4xKcfHsDiMIwR2cHXJ9kj1GnPGGBGZb%2BpFmJY%2Fwo%2BBTuPcErhWWC0%2FWY7SMUST9DRjs95HojGIVNbt%2BRe8UlBTHzUT4GAghnPNMiFaWUA8dMIaxicQGOqUBXIp7zeLZjFvjDFnwErgPBXC5C36tX6KzhPz%2BTc2BrbcNynm%2FLAXJp%2BLfBTQ29y25oEk37g9qLUTbDnc0yDbP075wtS1nXQfvW04dmlJF7UPP7hfS9ZGYPHOmSTr3zCnq4Omnww%2FgmcTuaJXd1joidw7pf9BOm2TupKBy7Kw%2BnJ%2F2kUG1HS0CWqTxJmuCqh03FGOo5%2BpITtQnb2vEbEnQD%2Bjhq1%2Ft&X-Amz-Signature=23976e8d138ac229f667affecd1b058c0c2f540fea3738177a1be07b54d738b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5MJTDZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIG%2B%2FhYylxLdnKHZnOyDCpqoNPo2u0FolDjiTnQm4W89aAiEAwXqw24AB8mURRNYGZfB%2B%2B%2B3G%2FqjXOXD7iZdByalbESUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHxpmUpSo5vQyyyuCCrcA%2F9IlLSiEKQByE%2FpQN%2FcL0yyX08JuWvPd6wNeHcQM8EoZaxqesjzCTX1OPIIrwxnKJHlRvgC9FpE2XScAl02fmw96hOXmQ2Gb8YC%2Fmw%2F8FAi6X45C%2BxkhNBysXj88jjW3Lj0CJ44PfuC6%2F2HYMcZJATRDI2GdmNa0EOLNJVP8eC0GsVVgZXPoLdd%2BGFOHdVsNRnbXw6tQJOjdxilXQvmtxxrrqU5vjq7kKk2dFd7S3UuZY3Rvfz0pq9YlYlffdYPqfaI%2FFrgy3fc8zDBjVr4A%2Fu8QsluLaJ8NiXk4lkznQ5iaFIJbvpvmF%2BxJLk55VUBfPcs1TABqrreQaKoYiE0JsYR4TKT4JoxgXaLhSmAfIL4oqfOvLcFLVQ97Qt8%2B5pEbJUmQfzTL8RT3ofoZgPuxpIe%2FydmIYTrVP0k8ZDeLT4wk5nxSEJCOH%2Bvk5ONv8t4cYwQTGz1mWqBFpF1UB6X4BLReaUqXTzCNPXreXZ%2B8VkRnyUpAdGcKUr7GelfYW7i%2FDdP4GxKnIRFVRvwt4xKcfHsDiMIwR2cHXJ9kj1GnPGGBGZb%2BpFmJY%2Fwo%2BBTuPcErhWWC0%2FWY7SMUST9DRjs95HojGIVNbt%2BRe8UlBTHzUT4GAghnPNMiFaWUA8dMIaxicQGOqUBXIp7zeLZjFvjDFnwErgPBXC5C36tX6KzhPz%2BTc2BrbcNynm%2FLAXJp%2BLfBTQ29y25oEk37g9qLUTbDnc0yDbP075wtS1nXQfvW04dmlJF7UPP7hfS9ZGYPHOmSTr3zCnq4Omnww%2FgmcTuaJXd1joidw7pf9BOm2TupKBy7Kw%2BnJ%2F2kUG1HS0CWqTxJmuCqh03FGOo5%2BpITtQnb2vEbEnQD%2Bjhq1%2Ft&X-Amz-Signature=a24ef4e26873e4d9decbc23252109fe91e69c81ca865670feaa14aff4cc4b51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5MJTDZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIG%2B%2FhYylxLdnKHZnOyDCpqoNPo2u0FolDjiTnQm4W89aAiEAwXqw24AB8mURRNYGZfB%2B%2B%2B3G%2FqjXOXD7iZdByalbESUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHxpmUpSo5vQyyyuCCrcA%2F9IlLSiEKQByE%2FpQN%2FcL0yyX08JuWvPd6wNeHcQM8EoZaxqesjzCTX1OPIIrwxnKJHlRvgC9FpE2XScAl02fmw96hOXmQ2Gb8YC%2Fmw%2F8FAi6X45C%2BxkhNBysXj88jjW3Lj0CJ44PfuC6%2F2HYMcZJATRDI2GdmNa0EOLNJVP8eC0GsVVgZXPoLdd%2BGFOHdVsNRnbXw6tQJOjdxilXQvmtxxrrqU5vjq7kKk2dFd7S3UuZY3Rvfz0pq9YlYlffdYPqfaI%2FFrgy3fc8zDBjVr4A%2Fu8QsluLaJ8NiXk4lkznQ5iaFIJbvpvmF%2BxJLk55VUBfPcs1TABqrreQaKoYiE0JsYR4TKT4JoxgXaLhSmAfIL4oqfOvLcFLVQ97Qt8%2B5pEbJUmQfzTL8RT3ofoZgPuxpIe%2FydmIYTrVP0k8ZDeLT4wk5nxSEJCOH%2Bvk5ONv8t4cYwQTGz1mWqBFpF1UB6X4BLReaUqXTzCNPXreXZ%2B8VkRnyUpAdGcKUr7GelfYW7i%2FDdP4GxKnIRFVRvwt4xKcfHsDiMIwR2cHXJ9kj1GnPGGBGZb%2BpFmJY%2Fwo%2BBTuPcErhWWC0%2FWY7SMUST9DRjs95HojGIVNbt%2BRe8UlBTHzUT4GAghnPNMiFaWUA8dMIaxicQGOqUBXIp7zeLZjFvjDFnwErgPBXC5C36tX6KzhPz%2BTc2BrbcNynm%2FLAXJp%2BLfBTQ29y25oEk37g9qLUTbDnc0yDbP075wtS1nXQfvW04dmlJF7UPP7hfS9ZGYPHOmSTr3zCnq4Omnww%2FgmcTuaJXd1joidw7pf9BOm2TupKBy7Kw%2BnJ%2F2kUG1HS0CWqTxJmuCqh03FGOo5%2BpITtQnb2vEbEnQD%2Bjhq1%2Ft&X-Amz-Signature=1b8fce8ade71e21c081ceec591fbf59d83ac55d9b133d998f330bff3d2d0ca26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5MJTDZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIG%2B%2FhYylxLdnKHZnOyDCpqoNPo2u0FolDjiTnQm4W89aAiEAwXqw24AB8mURRNYGZfB%2B%2B%2B3G%2FqjXOXD7iZdByalbESUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHxpmUpSo5vQyyyuCCrcA%2F9IlLSiEKQByE%2FpQN%2FcL0yyX08JuWvPd6wNeHcQM8EoZaxqesjzCTX1OPIIrwxnKJHlRvgC9FpE2XScAl02fmw96hOXmQ2Gb8YC%2Fmw%2F8FAi6X45C%2BxkhNBysXj88jjW3Lj0CJ44PfuC6%2F2HYMcZJATRDI2GdmNa0EOLNJVP8eC0GsVVgZXPoLdd%2BGFOHdVsNRnbXw6tQJOjdxilXQvmtxxrrqU5vjq7kKk2dFd7S3UuZY3Rvfz0pq9YlYlffdYPqfaI%2FFrgy3fc8zDBjVr4A%2Fu8QsluLaJ8NiXk4lkznQ5iaFIJbvpvmF%2BxJLk55VUBfPcs1TABqrreQaKoYiE0JsYR4TKT4JoxgXaLhSmAfIL4oqfOvLcFLVQ97Qt8%2B5pEbJUmQfzTL8RT3ofoZgPuxpIe%2FydmIYTrVP0k8ZDeLT4wk5nxSEJCOH%2Bvk5ONv8t4cYwQTGz1mWqBFpF1UB6X4BLReaUqXTzCNPXreXZ%2B8VkRnyUpAdGcKUr7GelfYW7i%2FDdP4GxKnIRFVRvwt4xKcfHsDiMIwR2cHXJ9kj1GnPGGBGZb%2BpFmJY%2Fwo%2BBTuPcErhWWC0%2FWY7SMUST9DRjs95HojGIVNbt%2BRe8UlBTHzUT4GAghnPNMiFaWUA8dMIaxicQGOqUBXIp7zeLZjFvjDFnwErgPBXC5C36tX6KzhPz%2BTc2BrbcNynm%2FLAXJp%2BLfBTQ29y25oEk37g9qLUTbDnc0yDbP075wtS1nXQfvW04dmlJF7UPP7hfS9ZGYPHOmSTr3zCnq4Omnww%2FgmcTuaJXd1joidw7pf9BOm2TupKBy7Kw%2BnJ%2F2kUG1HS0CWqTxJmuCqh03FGOo5%2BpITtQnb2vEbEnQD%2Bjhq1%2Ft&X-Amz-Signature=482dd7835e7c4fcc46237f1b55e9cbfc0e9bf38b8d55733b6e7d044664d543bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5MJTDZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIG%2B%2FhYylxLdnKHZnOyDCpqoNPo2u0FolDjiTnQm4W89aAiEAwXqw24AB8mURRNYGZfB%2B%2B%2B3G%2FqjXOXD7iZdByalbESUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHxpmUpSo5vQyyyuCCrcA%2F9IlLSiEKQByE%2FpQN%2FcL0yyX08JuWvPd6wNeHcQM8EoZaxqesjzCTX1OPIIrwxnKJHlRvgC9FpE2XScAl02fmw96hOXmQ2Gb8YC%2Fmw%2F8FAi6X45C%2BxkhNBysXj88jjW3Lj0CJ44PfuC6%2F2HYMcZJATRDI2GdmNa0EOLNJVP8eC0GsVVgZXPoLdd%2BGFOHdVsNRnbXw6tQJOjdxilXQvmtxxrrqU5vjq7kKk2dFd7S3UuZY3Rvfz0pq9YlYlffdYPqfaI%2FFrgy3fc8zDBjVr4A%2Fu8QsluLaJ8NiXk4lkznQ5iaFIJbvpvmF%2BxJLk55VUBfPcs1TABqrreQaKoYiE0JsYR4TKT4JoxgXaLhSmAfIL4oqfOvLcFLVQ97Qt8%2B5pEbJUmQfzTL8RT3ofoZgPuxpIe%2FydmIYTrVP0k8ZDeLT4wk5nxSEJCOH%2Bvk5ONv8t4cYwQTGz1mWqBFpF1UB6X4BLReaUqXTzCNPXreXZ%2B8VkRnyUpAdGcKUr7GelfYW7i%2FDdP4GxKnIRFVRvwt4xKcfHsDiMIwR2cHXJ9kj1GnPGGBGZb%2BpFmJY%2Fwo%2BBTuPcErhWWC0%2FWY7SMUST9DRjs95HojGIVNbt%2BRe8UlBTHzUT4GAghnPNMiFaWUA8dMIaxicQGOqUBXIp7zeLZjFvjDFnwErgPBXC5C36tX6KzhPz%2BTc2BrbcNynm%2FLAXJp%2BLfBTQ29y25oEk37g9qLUTbDnc0yDbP075wtS1nXQfvW04dmlJF7UPP7hfS9ZGYPHOmSTr3zCnq4Omnww%2FgmcTuaJXd1joidw7pf9BOm2TupKBy7Kw%2BnJ%2F2kUG1HS0CWqTxJmuCqh03FGOo5%2BpITtQnb2vEbEnQD%2Bjhq1%2Ft&X-Amz-Signature=ec49276c2fc75b0970c3abaa5c5c1c46ef31f097e1726a8630f69fccb995d1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST5MJTDZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIG%2B%2FhYylxLdnKHZnOyDCpqoNPo2u0FolDjiTnQm4W89aAiEAwXqw24AB8mURRNYGZfB%2B%2B%2B3G%2FqjXOXD7iZdByalbESUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHxpmUpSo5vQyyyuCCrcA%2F9IlLSiEKQByE%2FpQN%2FcL0yyX08JuWvPd6wNeHcQM8EoZaxqesjzCTX1OPIIrwxnKJHlRvgC9FpE2XScAl02fmw96hOXmQ2Gb8YC%2Fmw%2F8FAi6X45C%2BxkhNBysXj88jjW3Lj0CJ44PfuC6%2F2HYMcZJATRDI2GdmNa0EOLNJVP8eC0GsVVgZXPoLdd%2BGFOHdVsNRnbXw6tQJOjdxilXQvmtxxrrqU5vjq7kKk2dFd7S3UuZY3Rvfz0pq9YlYlffdYPqfaI%2FFrgy3fc8zDBjVr4A%2Fu8QsluLaJ8NiXk4lkznQ5iaFIJbvpvmF%2BxJLk55VUBfPcs1TABqrreQaKoYiE0JsYR4TKT4JoxgXaLhSmAfIL4oqfOvLcFLVQ97Qt8%2B5pEbJUmQfzTL8RT3ofoZgPuxpIe%2FydmIYTrVP0k8ZDeLT4wk5nxSEJCOH%2Bvk5ONv8t4cYwQTGz1mWqBFpF1UB6X4BLReaUqXTzCNPXreXZ%2B8VkRnyUpAdGcKUr7GelfYW7i%2FDdP4GxKnIRFVRvwt4xKcfHsDiMIwR2cHXJ9kj1GnPGGBGZb%2BpFmJY%2Fwo%2BBTuPcErhWWC0%2FWY7SMUST9DRjs95HojGIVNbt%2BRe8UlBTHzUT4GAghnPNMiFaWUA8dMIaxicQGOqUBXIp7zeLZjFvjDFnwErgPBXC5C36tX6KzhPz%2BTc2BrbcNynm%2FLAXJp%2BLfBTQ29y25oEk37g9qLUTbDnc0yDbP075wtS1nXQfvW04dmlJF7UPP7hfS9ZGYPHOmSTr3zCnq4Omnww%2FgmcTuaJXd1joidw7pf9BOm2TupKBy7Kw%2BnJ%2F2kUG1HS0CWqTxJmuCqh03FGOo5%2BpITtQnb2vEbEnQD%2Bjhq1%2Ft&X-Amz-Signature=342bd505fb50be426d637589878d9207429dee0c27e2278550595456fba1911a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
