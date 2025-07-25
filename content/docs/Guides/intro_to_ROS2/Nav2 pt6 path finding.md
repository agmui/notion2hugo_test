---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOCZA4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBOU4gbDPg5xzOS6%2B71MgAs%2BMCwpBOOPpTxkvR92YcXMAiEA2xC9nCi9hVJv2rdxrwstCR17kl%2BTD5L91zWtk03083Aq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIrnRUxV21EYQGfMiyrcA%2Ff9uLBef4kJACT%2FXBMpb3P6yL48TgQ2pjL83yRLNryCvv6CucNt8Ax1qtwm3Kxs4RreS1MjmW00yKuWfDY96965%2FYV7WXmvuk%2BL7y2rTps9qyT6r4F%2BJn%2BGie0AbhYTVC1iQBxV1XhMx8IW916GPxZkhBlyT7T7wvl9mqg7i%2FoMbKoMGZo2lXp7qzB4qB582bPiUrftDx3RjUF9irs6LjQNjAq%2BsuQeqwkHy%2Fb%2Bh8vg5z16NX%2BPzwZI81H9zS%2Bat2HaBlBsIkl1vXQodtRNpsJ40Xl82m08ZSa115PDTcM8ifvgM%2Bn%2B8WIX0j8p9di6WxynZl3Y5zH0WRwZ3B92f%2BHGmmCTY4anUaBhow3h6VkLGd9%2B%2FuNjah8v%2FoW5s6GC5Vcni9LIrs8XbvJM4WJM1AQoPxw7v9tccc4kFc%2F5XRXRaYr0I1KxWCLX8lxtTboGSX3gh5uzArLohXAV0%2FwDAbjWCa4cRB5pe19V3PAgnHJHxBJC5d8piWjVgteoxb7rDaq%2BuTlZtSDdd%2BzEzkTSjKX3uNqFw1nv5H8GJFSS3ORzmr%2F9inWwIsZsh5o4VRWfOFqWagsXUAbKs1M%2B1qKFtpTZgfIMhSnMCxNm8dFvrnlnMXquKCu4BrdpyIa%2FMKycjMQGOqUBvgRRYQD8pnImK9aXSYN9IrOszQXu2RqX7ol6398oNYb3pLKm0VXqXigv5dPflQZl4XoU9vIYGBp9bgr4e6AdzhvVYodwTC3XKOTWyCy%2Bf0OSWhzWWMXEtqkS4IFViUk6986EABAikPHdUk5IIkR%2BH6e2zr0Rd9Rm5a3txje65Wjqu3Yqjfu2Q74J4UKd%2BwM%2FGRZx4yZ84HIPMvmzoPkINyxV9N9H&X-Amz-Signature=c070d55f81bf79c0f667e381ecad4ead379f8306acc01a31a6bb6d9e5b3d8239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOCZA4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBOU4gbDPg5xzOS6%2B71MgAs%2BMCwpBOOPpTxkvR92YcXMAiEA2xC9nCi9hVJv2rdxrwstCR17kl%2BTD5L91zWtk03083Aq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIrnRUxV21EYQGfMiyrcA%2Ff9uLBef4kJACT%2FXBMpb3P6yL48TgQ2pjL83yRLNryCvv6CucNt8Ax1qtwm3Kxs4RreS1MjmW00yKuWfDY96965%2FYV7WXmvuk%2BL7y2rTps9qyT6r4F%2BJn%2BGie0AbhYTVC1iQBxV1XhMx8IW916GPxZkhBlyT7T7wvl9mqg7i%2FoMbKoMGZo2lXp7qzB4qB582bPiUrftDx3RjUF9irs6LjQNjAq%2BsuQeqwkHy%2Fb%2Bh8vg5z16NX%2BPzwZI81H9zS%2Bat2HaBlBsIkl1vXQodtRNpsJ40Xl82m08ZSa115PDTcM8ifvgM%2Bn%2B8WIX0j8p9di6WxynZl3Y5zH0WRwZ3B92f%2BHGmmCTY4anUaBhow3h6VkLGd9%2B%2FuNjah8v%2FoW5s6GC5Vcni9LIrs8XbvJM4WJM1AQoPxw7v9tccc4kFc%2F5XRXRaYr0I1KxWCLX8lxtTboGSX3gh5uzArLohXAV0%2FwDAbjWCa4cRB5pe19V3PAgnHJHxBJC5d8piWjVgteoxb7rDaq%2BuTlZtSDdd%2BzEzkTSjKX3uNqFw1nv5H8GJFSS3ORzmr%2F9inWwIsZsh5o4VRWfOFqWagsXUAbKs1M%2B1qKFtpTZgfIMhSnMCxNm8dFvrnlnMXquKCu4BrdpyIa%2FMKycjMQGOqUBvgRRYQD8pnImK9aXSYN9IrOszQXu2RqX7ol6398oNYb3pLKm0VXqXigv5dPflQZl4XoU9vIYGBp9bgr4e6AdzhvVYodwTC3XKOTWyCy%2Bf0OSWhzWWMXEtqkS4IFViUk6986EABAikPHdUk5IIkR%2BH6e2zr0Rd9Rm5a3txje65Wjqu3Yqjfu2Q74J4UKd%2BwM%2FGRZx4yZ84HIPMvmzoPkINyxV9N9H&X-Amz-Signature=4a3577a1d22476e6504e53c4ad73d3c397c7e6f19080d4a285e898a132b93365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOCZA4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBOU4gbDPg5xzOS6%2B71MgAs%2BMCwpBOOPpTxkvR92YcXMAiEA2xC9nCi9hVJv2rdxrwstCR17kl%2BTD5L91zWtk03083Aq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIrnRUxV21EYQGfMiyrcA%2Ff9uLBef4kJACT%2FXBMpb3P6yL48TgQ2pjL83yRLNryCvv6CucNt8Ax1qtwm3Kxs4RreS1MjmW00yKuWfDY96965%2FYV7WXmvuk%2BL7y2rTps9qyT6r4F%2BJn%2BGie0AbhYTVC1iQBxV1XhMx8IW916GPxZkhBlyT7T7wvl9mqg7i%2FoMbKoMGZo2lXp7qzB4qB582bPiUrftDx3RjUF9irs6LjQNjAq%2BsuQeqwkHy%2Fb%2Bh8vg5z16NX%2BPzwZI81H9zS%2Bat2HaBlBsIkl1vXQodtRNpsJ40Xl82m08ZSa115PDTcM8ifvgM%2Bn%2B8WIX0j8p9di6WxynZl3Y5zH0WRwZ3B92f%2BHGmmCTY4anUaBhow3h6VkLGd9%2B%2FuNjah8v%2FoW5s6GC5Vcni9LIrs8XbvJM4WJM1AQoPxw7v9tccc4kFc%2F5XRXRaYr0I1KxWCLX8lxtTboGSX3gh5uzArLohXAV0%2FwDAbjWCa4cRB5pe19V3PAgnHJHxBJC5d8piWjVgteoxb7rDaq%2BuTlZtSDdd%2BzEzkTSjKX3uNqFw1nv5H8GJFSS3ORzmr%2F9inWwIsZsh5o4VRWfOFqWagsXUAbKs1M%2B1qKFtpTZgfIMhSnMCxNm8dFvrnlnMXquKCu4BrdpyIa%2FMKycjMQGOqUBvgRRYQD8pnImK9aXSYN9IrOszQXu2RqX7ol6398oNYb3pLKm0VXqXigv5dPflQZl4XoU9vIYGBp9bgr4e6AdzhvVYodwTC3XKOTWyCy%2Bf0OSWhzWWMXEtqkS4IFViUk6986EABAikPHdUk5IIkR%2BH6e2zr0Rd9Rm5a3txje65Wjqu3Yqjfu2Q74J4UKd%2BwM%2FGRZx4yZ84HIPMvmzoPkINyxV9N9H&X-Amz-Signature=c05126b52682eb3f7fedca527740f0fbf681fc53a98a5146973dd94547c07e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOCZA4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBOU4gbDPg5xzOS6%2B71MgAs%2BMCwpBOOPpTxkvR92YcXMAiEA2xC9nCi9hVJv2rdxrwstCR17kl%2BTD5L91zWtk03083Aq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIrnRUxV21EYQGfMiyrcA%2Ff9uLBef4kJACT%2FXBMpb3P6yL48TgQ2pjL83yRLNryCvv6CucNt8Ax1qtwm3Kxs4RreS1MjmW00yKuWfDY96965%2FYV7WXmvuk%2BL7y2rTps9qyT6r4F%2BJn%2BGie0AbhYTVC1iQBxV1XhMx8IW916GPxZkhBlyT7T7wvl9mqg7i%2FoMbKoMGZo2lXp7qzB4qB582bPiUrftDx3RjUF9irs6LjQNjAq%2BsuQeqwkHy%2Fb%2Bh8vg5z16NX%2BPzwZI81H9zS%2Bat2HaBlBsIkl1vXQodtRNpsJ40Xl82m08ZSa115PDTcM8ifvgM%2Bn%2B8WIX0j8p9di6WxynZl3Y5zH0WRwZ3B92f%2BHGmmCTY4anUaBhow3h6VkLGd9%2B%2FuNjah8v%2FoW5s6GC5Vcni9LIrs8XbvJM4WJM1AQoPxw7v9tccc4kFc%2F5XRXRaYr0I1KxWCLX8lxtTboGSX3gh5uzArLohXAV0%2FwDAbjWCa4cRB5pe19V3PAgnHJHxBJC5d8piWjVgteoxb7rDaq%2BuTlZtSDdd%2BzEzkTSjKX3uNqFw1nv5H8GJFSS3ORzmr%2F9inWwIsZsh5o4VRWfOFqWagsXUAbKs1M%2B1qKFtpTZgfIMhSnMCxNm8dFvrnlnMXquKCu4BrdpyIa%2FMKycjMQGOqUBvgRRYQD8pnImK9aXSYN9IrOszQXu2RqX7ol6398oNYb3pLKm0VXqXigv5dPflQZl4XoU9vIYGBp9bgr4e6AdzhvVYodwTC3XKOTWyCy%2Bf0OSWhzWWMXEtqkS4IFViUk6986EABAikPHdUk5IIkR%2BH6e2zr0Rd9Rm5a3txje65Wjqu3Yqjfu2Q74J4UKd%2BwM%2FGRZx4yZ84HIPMvmzoPkINyxV9N9H&X-Amz-Signature=dd2a3d04efdde2cbb4b959d50213f86ac6428a1446fd203c419f0e03a5c62578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOCZA4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBOU4gbDPg5xzOS6%2B71MgAs%2BMCwpBOOPpTxkvR92YcXMAiEA2xC9nCi9hVJv2rdxrwstCR17kl%2BTD5L91zWtk03083Aq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIrnRUxV21EYQGfMiyrcA%2Ff9uLBef4kJACT%2FXBMpb3P6yL48TgQ2pjL83yRLNryCvv6CucNt8Ax1qtwm3Kxs4RreS1MjmW00yKuWfDY96965%2FYV7WXmvuk%2BL7y2rTps9qyT6r4F%2BJn%2BGie0AbhYTVC1iQBxV1XhMx8IW916GPxZkhBlyT7T7wvl9mqg7i%2FoMbKoMGZo2lXp7qzB4qB582bPiUrftDx3RjUF9irs6LjQNjAq%2BsuQeqwkHy%2Fb%2Bh8vg5z16NX%2BPzwZI81H9zS%2Bat2HaBlBsIkl1vXQodtRNpsJ40Xl82m08ZSa115PDTcM8ifvgM%2Bn%2B8WIX0j8p9di6WxynZl3Y5zH0WRwZ3B92f%2BHGmmCTY4anUaBhow3h6VkLGd9%2B%2FuNjah8v%2FoW5s6GC5Vcni9LIrs8XbvJM4WJM1AQoPxw7v9tccc4kFc%2F5XRXRaYr0I1KxWCLX8lxtTboGSX3gh5uzArLohXAV0%2FwDAbjWCa4cRB5pe19V3PAgnHJHxBJC5d8piWjVgteoxb7rDaq%2BuTlZtSDdd%2BzEzkTSjKX3uNqFw1nv5H8GJFSS3ORzmr%2F9inWwIsZsh5o4VRWfOFqWagsXUAbKs1M%2B1qKFtpTZgfIMhSnMCxNm8dFvrnlnMXquKCu4BrdpyIa%2FMKycjMQGOqUBvgRRYQD8pnImK9aXSYN9IrOszQXu2RqX7ol6398oNYb3pLKm0VXqXigv5dPflQZl4XoU9vIYGBp9bgr4e6AdzhvVYodwTC3XKOTWyCy%2Bf0OSWhzWWMXEtqkS4IFViUk6986EABAikPHdUk5IIkR%2BH6e2zr0Rd9Rm5a3txje65Wjqu3Yqjfu2Q74J4UKd%2BwM%2FGRZx4yZ84HIPMvmzoPkINyxV9N9H&X-Amz-Signature=c4874b4c96882e073bcec37cf7546e941d2a6b08e1fb23e712686bc5f446439a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOCZA4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBOU4gbDPg5xzOS6%2B71MgAs%2BMCwpBOOPpTxkvR92YcXMAiEA2xC9nCi9hVJv2rdxrwstCR17kl%2BTD5L91zWtk03083Aq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIrnRUxV21EYQGfMiyrcA%2Ff9uLBef4kJACT%2FXBMpb3P6yL48TgQ2pjL83yRLNryCvv6CucNt8Ax1qtwm3Kxs4RreS1MjmW00yKuWfDY96965%2FYV7WXmvuk%2BL7y2rTps9qyT6r4F%2BJn%2BGie0AbhYTVC1iQBxV1XhMx8IW916GPxZkhBlyT7T7wvl9mqg7i%2FoMbKoMGZo2lXp7qzB4qB582bPiUrftDx3RjUF9irs6LjQNjAq%2BsuQeqwkHy%2Fb%2Bh8vg5z16NX%2BPzwZI81H9zS%2Bat2HaBlBsIkl1vXQodtRNpsJ40Xl82m08ZSa115PDTcM8ifvgM%2Bn%2B8WIX0j8p9di6WxynZl3Y5zH0WRwZ3B92f%2BHGmmCTY4anUaBhow3h6VkLGd9%2B%2FuNjah8v%2FoW5s6GC5Vcni9LIrs8XbvJM4WJM1AQoPxw7v9tccc4kFc%2F5XRXRaYr0I1KxWCLX8lxtTboGSX3gh5uzArLohXAV0%2FwDAbjWCa4cRB5pe19V3PAgnHJHxBJC5d8piWjVgteoxb7rDaq%2BuTlZtSDdd%2BzEzkTSjKX3uNqFw1nv5H8GJFSS3ORzmr%2F9inWwIsZsh5o4VRWfOFqWagsXUAbKs1M%2B1qKFtpTZgfIMhSnMCxNm8dFvrnlnMXquKCu4BrdpyIa%2FMKycjMQGOqUBvgRRYQD8pnImK9aXSYN9IrOszQXu2RqX7ol6398oNYb3pLKm0VXqXigv5dPflQZl4XoU9vIYGBp9bgr4e6AdzhvVYodwTC3XKOTWyCy%2Bf0OSWhzWWMXEtqkS4IFViUk6986EABAikPHdUk5IIkR%2BH6e2zr0Rd9Rm5a3txje65Wjqu3Yqjfu2Q74J4UKd%2BwM%2FGRZx4yZ84HIPMvmzoPkINyxV9N9H&X-Amz-Signature=e304b15c389667df18a9a5fff6739348ad0f72668374810a9d0fe834193e3014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
