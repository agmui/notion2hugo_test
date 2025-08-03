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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=b88c21f766d8053fc325abf1f06e8dc16c91e4120e68171631d43ac0d77a2bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=d9dcd9ffa87559ae4bda9f6dcbd07b8300c429c61d2c28ebbce12d5d9f2d08be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=9d3b6f03d2f785dd041457b542ac1215b85be9669a7dea6ffaaf5ecd25c60ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=73338c9c5e31d5f555b604cbdf7aa1cc5ae36cb8d502b3ca39627438d8ef3d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=fc647f8f0a23fb8fd420e013a38f8b6c25ff6e7b565870876e0c478ff8e0cf66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=dee300670ebde878d838cb44b70b40df424fa62c1da50b9b97b82a9e1e2667a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=eb67d0e5c3d1a91698df4545ba58bbcf88a906f6746c1a0900c6e97e09d5ccc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=38722d8ae599c3bdf3b43ed6966732f58e670bf1e9d6bda57f8c001272363f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=18e38f442686f3439881bcfafc945ba600caf5b210adcae75c84496e0f9bbddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=29376ecfd42d61a60422a499bf562fe1d23a17b881d8dd843b469b3fdd01d3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=3ce2a83fbe5e3c95c8ff5d8e0f5871ce672e6423273006fba7402ffa5ef8af47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=fec39cbb6c5fa6eb58fb10ae94d5299cc907937b4fc1a5858884ef4211407bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AUR6ZE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhUSq0x%2BWq8p55YCae9AQS0G3AOwNhzobfFz411%2FshTgIhALEPz6oMzOExr%2FQm9I%2FJgPLLmPU%2FJoeUTzXNJ93pgtMPKv8DCDQQABoMNjM3NDIzMTgzODA1Igwf8EmDrudaYmg5vkQq3APh%2BvfjFMh1HFtEHmluPurX5upliV2Duc4rOoEaqc8e3Qu6oBu6NgnJuDInrm7zKRua9OGFOGdFlXwBFpe4SBCHimENtr84IXEm%2FldOmD2xnP8jJwuJVNv6bu1R9HPmx0gMa8rDQhRxopY5FKyjZJhS0Z03Blk2PIbdVcr4mg2smLZUfnzVhYgbsDi507IGjc6uenW9drYs4XeOsEFSS7jqOX5dSCSJ41HPB2fZHbl93a5KL0ivVIk2Cf6Ka5xc0zYk15%2F1dLpOomUjNL49s1iFfxZwHUb9PkO3NJrp1Dw8Ko%2FG%2BXNMbQ9PZR2Y8asCnLOIGDSntnYRwSCGXq6e%2BaNtY4qU7Zmb0QG%2BrOuIRS4ThGyn4ptmjZcmsK5qjFpcbMvDa0isCp6zcpQBk%2F2oOXXepAZHxlp2vOh%2FGT3Uq12td1gUAuap56qRgEaUB6yRzsFNn%2BdDDy%2BNRMie7Ec6lvdIac30cnlb%2BvKUCn6Eh5VPpjtva%2F8%2B4HgHpPNINiZgC5KOmW1q75zeM2Yh%2BFkg69n6%2F8Yy0vDhLMrxUpXDubXx8H9d5VCVoVHny%2BmuvntmxEvjTuOCQT%2BqnWbnU%2FIUf7gLmmmu8qMEVstNfmjYdlb%2BhpOLRTHfywCqWD10ojD%2F2b7EBjqkATswS5WlCheqCQ9Hx0cwCLFBmZWPHJBtKiqlz%2FLGmg1GXs9Oacmb%2B6sKv2LnkEFORXR3Ad02obkKAG6fMmlk%2FdV6YZXbbdeipjw35JRHX2atpicP7EpwwRuW5WdvE87BRh%2FTGSPlL5vZVd8TjSr1O519PE5QFwlRpUFe7dOo7sF2BMM7EH%2F7UY5u36%2FXGE1Z9Mso%2FAbQdlrge4F6kaF5qzv1Xe6u&X-Amz-Signature=167f6aaaf469c737d0ab84cffd13e19125946da5b3a9baf4044690f85181f25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
