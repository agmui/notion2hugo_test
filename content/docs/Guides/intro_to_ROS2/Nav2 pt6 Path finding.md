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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=4f670eabe93ab6d221e987856659ef35232202bc77274dd48b56b17cdbf0e6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=09e91536a51dc5bf7ed05f173d17a40d1db2b45ea0d6c4fad4932544bfbe34ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=25a060290b86edb82a30cf1ec363b00f3a909af6834d0b3a15ef65a81f3bdd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=89df9a25d864f2f40ba0329fb93877e61b82feab579c74909e7bd203a3d03200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=416d74bfec25e095375c0e236b22363064115568cc9c2e86aa8f42e45fa68879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=cc4ba2d243b934cd952633f7a9077a0b92a5da91a713331b2c6930d7887c04e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=d0930e15ac788475d15d502c8e4bdad88ff187fd522ff1abdbd2a7bc86b0ba2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=7b47907c23a996144d69fd8ad8bdcff2382178559ddd893b1bf519741be4bfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=5f3d687500c5776e08bb4a5ed070ef473c24d7698473dd0cdde535b4a2a5254c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=f2e55f672f0dbc407abbc41ecc4ae653fa6292853fa001f207ed3510ebc850a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=f0ab3dbd807e8f946e66eb3a3df595877c9d0ef167f7330cedf0ed7c7e8adb31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=d7c43f8051edf7f35a700fe09240a2352d0a7b338beaa53f187db86ca21aede7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNHGLLG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0KXU8ZZwgp7XssrWTXBeZsq3TU6QT7rEh1D0%2FT2DzmAiAfgR0Sck21%2Ba1aMv6d1Di7al6XrWPt3MOjS45UqtX7ESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkGiQ5CAu0ZZV5BaeKtwD%2FuZU5yUjt3wEoSI6KP2OTZu2jB%2BRoHaBeOOuRdPOYOzznMzc7snF2EyqMzTRe1macNQ4ai9ebjrZChlcUCiO27jyGCowRf2XVJ6Aj0D5ywSbZ6M5gUUBM56MwZ1sGY9BsfZtej3GcoQe0Gnq2IftK2Y0L6910aCNMY7hE0n0Dfoy7Z96KUgYko6JcjCxMTgIYEaoxvH47Yptv6o95RVmIFBQyDIy6tq1e%2BPY1B%2BJVgbCIpqNcSDiwegzHA2rlHHcRx%2B6n3AsVtx%2BEq23LrnJrTTozEplfsbBPKRs1JdZ7mCNNy5eC1zBS1p8%2F4X0003fMIquY27D6JwP2M5JKS7dSVwUaEKQ4vjT%2BXoaf72Ojnow72Kuis1FauZfc1RpGQxmn8CZHQGd7lWUWy1J3kjY17em3mR7WU6h9Mw1%2B4umkNcSTueVrbNKMjfRO5XPeZOfnv8GqCtZcaNbzjNekmQcui3sRdSi0OA8yG5xTuj1dx%2FIDBBM2Z5fWrBC4Fq5%2BgpN6ll6kCpI5PaUDVEYsDmo69tvDdZxiTWMIsCjBz219mWj4tOAFQspcGmgy5HX63xtGxoBCENYS020I8O44axhmZmxQUHWN%2BpPLtD8TKjufk93nVEGF9RbaVtdSLIw8NjazwY6pgHD5Cezj7QjyA4jmvl0bEZ%2Fcj8ZWlzXugUbqd5PtYruKyKchemThynSPf1BgtXgMgD5aj0e9LXArY74Kg4gPbU2pN1HVzqCwmM%2FRIet8yuOUjP%2BTKQfolBJXabtCvH7y9%2F1iDZ4BY%2B3vTi0Sb69NALFgWXyV6DO%2FLFQCR3D%2Fk99eSSoWE3%2FrzlCCcgXaDTkys1ihK9oXkhLGOTJHAJBHLTCZ3yEmOqe&X-Amz-Signature=6ae4e8b2a97a6c6df3b67b4bfc69e8476ce696e75db5cde66d7f9019f5e7b091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
