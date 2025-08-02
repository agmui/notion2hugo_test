---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=66a63c0c5606ff3b769c10cf4a93d0cb3d677dd199be806076e35184874346c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=06d7a582095b2e7f876c0483600a4630c1d805da1ce9db65d7d6ddc1bb8da013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=32e7997e1f23c08f96eb527fe332e56b3507f09789b219113c216098a4364e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=e02fcf22094d4ddce2c02d5c8a2370a7b355df4d364e7ba422b19479223d50dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=dafcdd20f851351df71acfb1d321777660e478f6909f3030c1277a9667bd2163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=794e712d200112c47d2e8d3e610be56fb423d7e01cb895e3522eae760a4fcd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=595970ecf124509289f90e6c1d219a920b3bf846c58eff0b4670789f0fe4d3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=852b32452a1a2dbd3113554ea8183864ff5cfb37535b7bcd9ef4e11aa74ad9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=876577145362aa5a7b3bfe81daab570ef666a168c9dd09ea4b3ce170c31dccb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=32e09c31a98eab382c6fdb653410d3f89e4892faeedc97097b375f94f3197bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=2eafe55fb76ee6fd47296f8e5fdd218d09e0b3a9cdd4cad7edb0fdc9dac2bc41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=553127c6720589813e5cdd57e6b82eb220d7ac1aaa88745d07a5e05102b9c6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ENDS6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanCgtVme9wmvzsF8cfj8XTuhxdYwBi6jvbC2Cyo6KVAiEA9ENbSiBjZdL%2BnaDVrAmsv%2Bp7duzG0Fo7P4Pp6JryIQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs8fGHSXrYJn%2F65SrcA8d2mITwB7x8%2FOm8YMuRTEXy1t8ltEfx3eWLlesLlNNbJF7evkype5qFkPhQ2ohWC78BvgaS1vo75H421zMZ1244ObNcHlEcDJp9VQTJZ7cEbJ7qLLlTHuPq2vfYbuSiFEI5ZEnIDDfWTWePB0xQyEd9gLAJ%2BVHLdYr7zXrsucC0UKGXQPjZ5Aow0%2BVYeaUYKcKjTyRWTiHrNH4%2FOdbpSwlH0nQt9vCjJNx%2FwgpH4GylZjRZt2FOeI395avfSMRS5ExoepKwrbQZJgzFXqUkOSfOXE6P6FQ1l0%2BYsduBtNv2yPcsjPrUp8XKuM3%2FRRIOvwFgbbpNIAoGQORs5RrZJj54AYJCrnYOCOy7HrWu7MCc0FoP400D5jL%2B9MTKtcxcNRFuv8MGwVm3faYAVvtz1ThBVbAaTwo%2Fdhv0AE%2FcO1pLrm7ftleHJHjeR%2BC0yr3CERGCjs2%2BWa3xJtNjZnUnNp9P6ZWAHuiTb93Nru7azDU%2FI%2Fi5p5tsYLFfqMFVqvmzDojH7O8x6yEy4%2FLY2SJEElGeGIqfvcuzkt4gskjHRjPLfl5IwIbJh3Sqq99WcwdPrTqc6mEcWoH6%2FdT6rfO9AMnR4xs6wF6clWQGvoaU1PrHAkDSain7appnBrCLMLj3tcQGOqUBefsRMggnLwTname%2BLVg0fpF6iJvZWnnhp8RUP8nHWNCjZWq6gpxSCeiF6XHAphXdboOS%2FAXjzW7zAOAGLRXuhM6m6yf9M0dD8yqk%2FG%2FtPrFsBULUCIVn6GDQbByjrkGcPdG4wkXK1MhS6Ct6dcC7GodcrOl5jhHkI5cgFjdc3Rbp7MD5N7aJsb3%2BdeXYGyYDThhxKUHO7QQQXyjJ%2F5KAlO5iM3en&X-Amz-Signature=e8ddfd4bb1eaa235280f88d05957106a19cb2d78fc29fafddef833ad3ede87f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
