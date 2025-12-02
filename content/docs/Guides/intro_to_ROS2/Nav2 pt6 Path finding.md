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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=b11e96631158ca6a5cd8c5356f2cbe23e4ea57676d621fff4d5376bacb4ade4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=f784d0ab6570b66c0ac94cae135d49d568ad937e784ed8f39b3f3399ec78efdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=ca3d3fee437bac0cd58030c51cb1213d6a5819719d4758feb1274ece468688c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=0a48359ccc972ff5505ede60ed77ead7b1d47e098bf68ac971e33bdcc57bfc92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=6619ae0d29093ee4c0e175dd5cc0333eacf98253980f8489af956f0a3972fe1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=39cd1ffdfbf6d7ea86106e4774bc4343bc0fba8fef7cecacad8e040f11f40967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=3a30a7d535c094683add8a70464f13ed41d81d8b9a7d8e704456f8e24c871d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=35799850d4575b81097fb05387aeed71cead2c65c6a0d4d5f9448ed0fbbc26be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=c7c6a15694cbb3daa4e8773c07eebf6527c9d1baa744176576abab7fb224d8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=50638edbd84a96f42d442e72ec171272485d1c1a08f65dc454fcbf64c9aae773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=98c5dc0d6da890eebf2d7c629d3b1a26ee6357c97c7a62a0b6e02f5eace30b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=98cdd2f096cab4d550a4926ec881bedf0af89741767daa52cd0881ac5168113f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX2YIVX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2Bi8eiKPqdR8rsug58eVChzLtzGUt5v1VimKQdayx8DgIhANECXuSZsuxZn55C%2FWaMrX%2BHBJzgi0d%2F5V9shLgIK6k%2FKv8DCAkQABoMNjM3NDIzMTgzODA1Igwf%2BsJURHQnuSZwC7Mq3APtm27Ce4py45q5n%2B%2FpUonx7ZRH6QnQAwQvxDNn%2FozKfw2sK6Dnqjc5hxZNlkEeLcvh3R7u4RsYf2HRv8X%2BpqO9g9yBsPTSYtGFL2oHaknMXhkwDhBZ%2FcNFC3A8vd%2F93scRG42pZPcDa3UOB8E8GnyhR66aCJKsxdwweXRJ%2BOSdD2DTKD%2BSFPWJVkCGZwQyfX2Br63rR3bIORhq%2FN6ccmNsdHTCgJNUukyBMu%2FFjLGfX4x%2FssZKU9A2LiEMI61H9DdqDWA1mI6rdukF3n8I6XN3LGtgS7vZLStDzQaj76rs25GV7C6rSK2fMFkQYzj2p0hRXhyHlpyeBRt0qm5pIZq%2BL6SkuDwBRJJ2aIOoY5UW9Kbt0XWkvL8dIIUI7VFavOBozS0wMN5Yi97X4riEvCeNoDmQbgZabxr%2BBIWMp7mL%2FvULYO8UIjLkat9EghWpPYWajkjI95C8Js7nnF%2F%2BcBPa5RN1JIyYGwZM93YlXd9VOZwWB%2FVpJJPr5pfWm1uLmde%2Bu99N420DbU0p1zmjU69CCfkNTX5R%2BGNpLT5RO4vYEBpcUbzrhpl4iiIeR3E4rJQlJORXXiJPq%2Fqcq%2F0GfFaGSK7jJar9QRzJtUZKqrcQOpUIqs8fKO15TKfQpTDe3rjJBjqkAUexRt957UrgOVlVymtc2Zh%2BnvaP%2BW3BBEyUjH%2FMe4pl1Nzjdxo4y0Zv9q6VvrpvRc2b%2F8kXsvUMm4T3Jf4WYbbPILLSr%2FUbz6YIWsaYAQvThBEy5WhUSiXUFiaQbCrycuZ4%2FkmrwSdocMK9gVJAZHBAaGY3a946i3L8cl%2BikOROyx%2By7YQL30iIY41MMJ2iCUY7Nzu3iPr1DvNXgM3i7cZVkpMf&X-Amz-Signature=349f7fb83270e91aa7e7ae47b7371fd0c082f9346a4e84d25be0eb538493f9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
