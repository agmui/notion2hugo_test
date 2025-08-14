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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=c1f8ae6084d10cb5568a2aa8e0b7354b828191267023500f5b51ab94b893ec68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=dfebb54c132935c3baa4f4eb343eb4aa208b3a3c76895e4452e11967df0c6e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=74d98d4225b5446d8fbce253a2258419766de0e37e2486cac21c4d3dddf17906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=36c697d5c2c4fb095acae2b120fb6ca115914f3f19e7b9a864687bef0b96366e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=be9c6ecb724ad7f4a2cc45247f2c7eaea777d58adbdf3aeefa72fdf5d6cf328f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=f028aef1412b94db169b398fa884124f17b513917b9071994eb8312a8d43904c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=f6b053d043fbceb1e89c47ab27f66d1fb1105dc39c645695dc61cdf019e3353d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=07fc30698383e3648481e81dfbce079a2867803ec1d953e5da1ce15987e57711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=2319993f40e4fd56ab30a65569a539867f4eeb76d41be5c719f7a89cbf0828f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=f71256a7a03b14006d1b6ca078556e2e7d6a25ebb0d4e847a1897a2492955ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=a8c590b2b4cf8caa0f81a33e52398ef5e852abda7c89ba21b9a1bbf3f25db397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=c7df5aa918a574a1650cf607392bb72c42f862f619aba6cb6744d3ad483b0cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRDAJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L5%2BsMfxfhYxORG6CPS1ikchwt3tDTj6kdNJRLfnVqAiBwFGpvPWgRaxz%2BBksmxRbkXRL2ekFom0MK%2ByErwGA7nCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhoMOXrTXbVnvaA%2BBKtwDrmLzODW1RDPMln9DtkSf3ZwVvLL98uKBKsVVC%2FUSXuDu%2Bn53RixLfK7hVMG%2Frve2RlDnjO8ZK39kYZuF%2F17LitKb2y%2BneiG9mUMq6VH2O6%2BR%2BIG1izif67l2tdK1v3cdPIHOUidFKCLGErMEHGWAXEGmD0oyvtg%2Bi0YwMyK7rjz0rvLmvseaZkUhoOyKiukbkz4Slj6zceoe2qd2Mkb9bp%2BdYoou0codz9pMP6hYNsDlpRmbyqoD9qOPacrHTT2ZcMPHSLDQSw%2FRUaWW8%2BHP4SSb%2BXEO2kDukatAEAkY%2F7J1rOALnJh3DY69jeh2wLNGtQWjrVt7U39JK%2FV0PjZJHh4oE1UYf9WMnoDQtSX3j93MmcvhLtwOFihykLr2pCMtuTIgmK%2F%2BzWAU1TKf5qOeseko9sLd5XU1AJmFryILJyVMiqrd25rQkO9m2usgAL4bTgp3PYINKj3Iwz5jvCM69NwV1fbxyh1zfuGxmRGPdmjAwu2MOy5lIeHVVGYqk6FOCQ4z8JRtDhcoeOp3zwiteGEqgUKhzV1L7hG6YP85poLNaMltZx9Usw93VLy7OINT15JXpL9oRO%2FJhJc1BUUqSHOcpGVSjtSZXIsqxk8HZAbe5tqr23Ffs%2FEMFNQwjoX3xAY6pgGwTHAI%2FGKxqUGUiObqRWy20Nk%2FL9DpC7iy9Ltw8U5WTOUM2UieiGwZRfyAGYZGOhachoo8AHe94xf2HZxDaJ7HUa8oAkGZko7RPIjxXfeBpoFVbWqaR%2FF4YOCqmEW1LEvbvQ8%2FtNttIb7V2omvAzA%2B128jihw7gLE5FxcfiGzP%2F5%2FgBA13mgRoeKlGtnSXn3GWfcmlRonUTcZv83oPkPcsMCh%2BDhrP&X-Amz-Signature=85a3a6ca90bd28a3e187facb8ab7d58ef53b7b56d2b92a767b2facb378478b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
