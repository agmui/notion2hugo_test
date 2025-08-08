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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=5700225c35e32cfdee5139bae69af23767ea2c0707c5253fefff2d49a38c63ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=7f9fffc4bb8b707705fad3185fef4fbaba89f46a2d0b639b69b26b7e11c8d352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=5251628d83271bca8f4a3939a58cb780495c96be6b0dfd22f01e90672b1a4f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=6babd411266c84703406e81bc3a912c119ba737aba485f646daaac55b959daba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=8dad74594df9e4b243d35f61ea4511cf533044355ef0bb25aa86d6550b22cda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=9c6681b2a2c59fcfa47f2f588bc6f21c9c4909569bec0896da5552ef01732974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=838c404493e932fe1a5427cf0c7370724bf0dc9d75058efcb3e75923ee345651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=309d6028c124bc67ba450a8f08ec47c6d2093e51a4886710108383254028f691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=a3b6787afc90727180127d1ee544eb8f2674b623c72d939d3b68ba89e8324cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=8c52409c21dc4b67a7997e0ae18c7e38a83daf1de7d9ddf34522812b32c282fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=e5d228003d1fb5466810f7e037904cd7d3c7914aac34f4475c73058bb2c929ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=d1d9370d00b3757bcd3c016b531b8df08c691ffd18e8bda86c2d86aa1fb0ab22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUKHGLB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOIgrH8YlopEgnXuiheEi1YIoN7isgo7RyUt%2FTYU3qxAIgUN7FN2JKdGyf1PW9%2BONBIgcVGNBJUXWdTrcm20JUhPQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS%2B4753ngHj5hBT4CrcA2SUstX%2FXDNnI%2B5DXCYeIOL5ztI%2FUPPcDwiPQhgoArSIBt33nAwTTH4HxWLfe4kixIy1do6ZV8Hmz%2Fk5mPreUPLKScovm%2FcEwa%2B0d9jguR77TVLHdZWQF8FsLrrASeUv7WCpaL2XscfTY60cy4vW17GhIOBNn8Lew5Lm1NfFjcllCTyAvymTHh1OiwfzRHxfqWsGRwwEpnmVs9Qr2r6S%2F1GkhUlWezu7w5UKZWdmyQUIIqmNTtR2a4VpElhGXGEPYf2SVQc0DciJaXUxjWdFYRIONbrHFvLVn8VIpjQybtLG9AY7ooxNI7nIoStKpKLruX%2B0ELvkHv%2BstvMiRMVG8RVHUkoqBa5lWWGyoPVEPffgJG3OEezHQ9bC3Qgh0inacbbUcFK9%2Fvn3BrVoEyjFuBiWKIKP%2BQ3ql2m6iTX1rjMvwMxnxklbl0xCujJ7cBajDI1oMveXCY4kQRfsWFX%2F8iizHWkj5jybG%2FxYrM0CqsevS1Gnebff01nZE2xmkUSbMi6ko6dO1XCvPlp0SFbSCT2EYkXyZ2QF4dX%2BfTljEVliu5H0CyiV%2F1ZLXXT0%2Fv0K5Vw%2Bv3fYgiDEiSyK%2FbmfOibU3w8bXjV8ZH%2FFsq7bCJPDfm5bUt6%2BwB0cHOjnMOi62cQGOqUBVzBKHQ8w%2BZHl%2FHpIIruzWGV9gR8dofqdQkg44dn0qyjCwQfB5Wlh5bzV7zQS4rIW84zGmupmQuet1AS7s7oJkQ%2FdfR6l8jYkhY%2F%2B7S7BWVx3nqqld2HCGYAD5KoEQzrVaLivBdjUvUVhUNnruiXGpiNCq%2B4mBtw3cnf%2F11uW3JUfta%2FykUyXHsauSmp%2FQ%2B615oGn907PyJLiK3wSYbnoxSeEWD%2FT&X-Amz-Signature=046b55ab9e9742222c3999cd805e79b9df0da480d75244ee8b26ee5d8f6f3ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
