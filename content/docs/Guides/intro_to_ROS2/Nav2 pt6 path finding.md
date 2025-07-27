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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4MSJGV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGqDa2XkWV0mmWM0AYkX18rGRqNU9dM%2Fyvtop%2Fh6i1jzAiAmkQrQgzF1gCvyd%2BP3vR5lCPX5qOwZqsq1hAEXSrg7ayr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxP4O7vAi%2FETWcLcgKtwDsWBdkmNQ7z3Fxp5Be5muvrxnNNo0JxE153m1CRatT5WNILCr0Thg6i577xD5%2BgHtEWMYV9fY44vsiuvjPqvOqaXTB3%2FlZD9jc7SDIMbi%2BvnogVb0Wlo%2B2MNxsttuKB0BMRPhqshlCs3wUVHFdZgdbHz1iWLTuSxbZnNCYPil0%2FNzBoRCQGaFlz0MaGwVzR%2FM64UlYCdyVFogXX3FU8jfVeKqBkSJBnpkrBp2msDmgg%2FqFXaTt4Vkme%2BkxH%2Bh%2BUKKs%2FV5JRXB98z7dASFci2U9Qt3oSLWFloZAEtN4W1lfBJI0dtCc0rtyuAikWppFQbdEZBEJsDQR7QeyaND659%2FpiXfYHazO6HM1nE2IYBWGgeUBq0lyUkbKwOD6Q30GeRDtafGIPvXdGVsuxWke2Jcbhb1z4w4KvYvUE8ZUKQIUdt0VoDliN%2B3mJ3W9cWaBg1xULkEXjCaJ2dhpkraoYAN7lGfWGae37I9aSu7nn2g74hFHSUg64AW%2Fx8yYb9IZDtupkRUuS7SqitbxNa%2BxhyewUuiyr3M3nls39kI%2Bzm%2BFlIxtjfWlVmO02JaOHyePf7i8BxE4DYvrI%2BPEYdqvrsaTfeDTWB2KkGBssnn5%2BYF7qde3ZBWhKSHUNh0H9Iwh9yXxAY6pgHbs5sxH9Cjew8LRqDIw8aU8%2FL79bByGXrBomeTfq1Hb6EJnfAFC3HdfjvLV7NWCACe1ssojjoMNXgImVdWpdAJTKahEV36yhwLWRJKqugOyrVLtW3tyaAMxuIlX3%2FCZIWwmsrpBeJ0dnwWzVhM%2BD9mi7aFbEZPkGj4Z8wbdmCyUfxsY%2BjbOUbE69Eh%2FT%2BYZaTQnxoO24V1XXv0XPcgt60%2FBneQ1dna&X-Amz-Signature=982e08c6b63d15b29171862d2b57dad8261a2ad644b1872333dd35c822310182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4MSJGV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGqDa2XkWV0mmWM0AYkX18rGRqNU9dM%2Fyvtop%2Fh6i1jzAiAmkQrQgzF1gCvyd%2BP3vR5lCPX5qOwZqsq1hAEXSrg7ayr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxP4O7vAi%2FETWcLcgKtwDsWBdkmNQ7z3Fxp5Be5muvrxnNNo0JxE153m1CRatT5WNILCr0Thg6i577xD5%2BgHtEWMYV9fY44vsiuvjPqvOqaXTB3%2FlZD9jc7SDIMbi%2BvnogVb0Wlo%2B2MNxsttuKB0BMRPhqshlCs3wUVHFdZgdbHz1iWLTuSxbZnNCYPil0%2FNzBoRCQGaFlz0MaGwVzR%2FM64UlYCdyVFogXX3FU8jfVeKqBkSJBnpkrBp2msDmgg%2FqFXaTt4Vkme%2BkxH%2Bh%2BUKKs%2FV5JRXB98z7dASFci2U9Qt3oSLWFloZAEtN4W1lfBJI0dtCc0rtyuAikWppFQbdEZBEJsDQR7QeyaND659%2FpiXfYHazO6HM1nE2IYBWGgeUBq0lyUkbKwOD6Q30GeRDtafGIPvXdGVsuxWke2Jcbhb1z4w4KvYvUE8ZUKQIUdt0VoDliN%2B3mJ3W9cWaBg1xULkEXjCaJ2dhpkraoYAN7lGfWGae37I9aSu7nn2g74hFHSUg64AW%2Fx8yYb9IZDtupkRUuS7SqitbxNa%2BxhyewUuiyr3M3nls39kI%2Bzm%2BFlIxtjfWlVmO02JaOHyePf7i8BxE4DYvrI%2BPEYdqvrsaTfeDTWB2KkGBssnn5%2BYF7qde3ZBWhKSHUNh0H9Iwh9yXxAY6pgHbs5sxH9Cjew8LRqDIw8aU8%2FL79bByGXrBomeTfq1Hb6EJnfAFC3HdfjvLV7NWCACe1ssojjoMNXgImVdWpdAJTKahEV36yhwLWRJKqugOyrVLtW3tyaAMxuIlX3%2FCZIWwmsrpBeJ0dnwWzVhM%2BD9mi7aFbEZPkGj4Z8wbdmCyUfxsY%2BjbOUbE69Eh%2FT%2BYZaTQnxoO24V1XXv0XPcgt60%2FBneQ1dna&X-Amz-Signature=8922c495139d0a3848dd517cae0c7563f60f0609beb35ec58a9a369bc3cbc705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4MSJGV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGqDa2XkWV0mmWM0AYkX18rGRqNU9dM%2Fyvtop%2Fh6i1jzAiAmkQrQgzF1gCvyd%2BP3vR5lCPX5qOwZqsq1hAEXSrg7ayr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxP4O7vAi%2FETWcLcgKtwDsWBdkmNQ7z3Fxp5Be5muvrxnNNo0JxE153m1CRatT5WNILCr0Thg6i577xD5%2BgHtEWMYV9fY44vsiuvjPqvOqaXTB3%2FlZD9jc7SDIMbi%2BvnogVb0Wlo%2B2MNxsttuKB0BMRPhqshlCs3wUVHFdZgdbHz1iWLTuSxbZnNCYPil0%2FNzBoRCQGaFlz0MaGwVzR%2FM64UlYCdyVFogXX3FU8jfVeKqBkSJBnpkrBp2msDmgg%2FqFXaTt4Vkme%2BkxH%2Bh%2BUKKs%2FV5JRXB98z7dASFci2U9Qt3oSLWFloZAEtN4W1lfBJI0dtCc0rtyuAikWppFQbdEZBEJsDQR7QeyaND659%2FpiXfYHazO6HM1nE2IYBWGgeUBq0lyUkbKwOD6Q30GeRDtafGIPvXdGVsuxWke2Jcbhb1z4w4KvYvUE8ZUKQIUdt0VoDliN%2B3mJ3W9cWaBg1xULkEXjCaJ2dhpkraoYAN7lGfWGae37I9aSu7nn2g74hFHSUg64AW%2Fx8yYb9IZDtupkRUuS7SqitbxNa%2BxhyewUuiyr3M3nls39kI%2Bzm%2BFlIxtjfWlVmO02JaOHyePf7i8BxE4DYvrI%2BPEYdqvrsaTfeDTWB2KkGBssnn5%2BYF7qde3ZBWhKSHUNh0H9Iwh9yXxAY6pgHbs5sxH9Cjew8LRqDIw8aU8%2FL79bByGXrBomeTfq1Hb6EJnfAFC3HdfjvLV7NWCACe1ssojjoMNXgImVdWpdAJTKahEV36yhwLWRJKqugOyrVLtW3tyaAMxuIlX3%2FCZIWwmsrpBeJ0dnwWzVhM%2BD9mi7aFbEZPkGj4Z8wbdmCyUfxsY%2BjbOUbE69Eh%2FT%2BYZaTQnxoO24V1XXv0XPcgt60%2FBneQ1dna&X-Amz-Signature=e2b9d6a745467b3d964d0a39ac29f06442fb7c58eaf9d324c3bf6cd7d59902b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4MSJGV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGqDa2XkWV0mmWM0AYkX18rGRqNU9dM%2Fyvtop%2Fh6i1jzAiAmkQrQgzF1gCvyd%2BP3vR5lCPX5qOwZqsq1hAEXSrg7ayr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxP4O7vAi%2FETWcLcgKtwDsWBdkmNQ7z3Fxp5Be5muvrxnNNo0JxE153m1CRatT5WNILCr0Thg6i577xD5%2BgHtEWMYV9fY44vsiuvjPqvOqaXTB3%2FlZD9jc7SDIMbi%2BvnogVb0Wlo%2B2MNxsttuKB0BMRPhqshlCs3wUVHFdZgdbHz1iWLTuSxbZnNCYPil0%2FNzBoRCQGaFlz0MaGwVzR%2FM64UlYCdyVFogXX3FU8jfVeKqBkSJBnpkrBp2msDmgg%2FqFXaTt4Vkme%2BkxH%2Bh%2BUKKs%2FV5JRXB98z7dASFci2U9Qt3oSLWFloZAEtN4W1lfBJI0dtCc0rtyuAikWppFQbdEZBEJsDQR7QeyaND659%2FpiXfYHazO6HM1nE2IYBWGgeUBq0lyUkbKwOD6Q30GeRDtafGIPvXdGVsuxWke2Jcbhb1z4w4KvYvUE8ZUKQIUdt0VoDliN%2B3mJ3W9cWaBg1xULkEXjCaJ2dhpkraoYAN7lGfWGae37I9aSu7nn2g74hFHSUg64AW%2Fx8yYb9IZDtupkRUuS7SqitbxNa%2BxhyewUuiyr3M3nls39kI%2Bzm%2BFlIxtjfWlVmO02JaOHyePf7i8BxE4DYvrI%2BPEYdqvrsaTfeDTWB2KkGBssnn5%2BYF7qde3ZBWhKSHUNh0H9Iwh9yXxAY6pgHbs5sxH9Cjew8LRqDIw8aU8%2FL79bByGXrBomeTfq1Hb6EJnfAFC3HdfjvLV7NWCACe1ssojjoMNXgImVdWpdAJTKahEV36yhwLWRJKqugOyrVLtW3tyaAMxuIlX3%2FCZIWwmsrpBeJ0dnwWzVhM%2BD9mi7aFbEZPkGj4Z8wbdmCyUfxsY%2BjbOUbE69Eh%2FT%2BYZaTQnxoO24V1XXv0XPcgt60%2FBneQ1dna&X-Amz-Signature=8bbaef7d635077ed87555ef87895a2250d9ba4192bd106ead5195056a278ca78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4MSJGV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGqDa2XkWV0mmWM0AYkX18rGRqNU9dM%2Fyvtop%2Fh6i1jzAiAmkQrQgzF1gCvyd%2BP3vR5lCPX5qOwZqsq1hAEXSrg7ayr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxP4O7vAi%2FETWcLcgKtwDsWBdkmNQ7z3Fxp5Be5muvrxnNNo0JxE153m1CRatT5WNILCr0Thg6i577xD5%2BgHtEWMYV9fY44vsiuvjPqvOqaXTB3%2FlZD9jc7SDIMbi%2BvnogVb0Wlo%2B2MNxsttuKB0BMRPhqshlCs3wUVHFdZgdbHz1iWLTuSxbZnNCYPil0%2FNzBoRCQGaFlz0MaGwVzR%2FM64UlYCdyVFogXX3FU8jfVeKqBkSJBnpkrBp2msDmgg%2FqFXaTt4Vkme%2BkxH%2Bh%2BUKKs%2FV5JRXB98z7dASFci2U9Qt3oSLWFloZAEtN4W1lfBJI0dtCc0rtyuAikWppFQbdEZBEJsDQR7QeyaND659%2FpiXfYHazO6HM1nE2IYBWGgeUBq0lyUkbKwOD6Q30GeRDtafGIPvXdGVsuxWke2Jcbhb1z4w4KvYvUE8ZUKQIUdt0VoDliN%2B3mJ3W9cWaBg1xULkEXjCaJ2dhpkraoYAN7lGfWGae37I9aSu7nn2g74hFHSUg64AW%2Fx8yYb9IZDtupkRUuS7SqitbxNa%2BxhyewUuiyr3M3nls39kI%2Bzm%2BFlIxtjfWlVmO02JaOHyePf7i8BxE4DYvrI%2BPEYdqvrsaTfeDTWB2KkGBssnn5%2BYF7qde3ZBWhKSHUNh0H9Iwh9yXxAY6pgHbs5sxH9Cjew8LRqDIw8aU8%2FL79bByGXrBomeTfq1Hb6EJnfAFC3HdfjvLV7NWCACe1ssojjoMNXgImVdWpdAJTKahEV36yhwLWRJKqugOyrVLtW3tyaAMxuIlX3%2FCZIWwmsrpBeJ0dnwWzVhM%2BD9mi7aFbEZPkGj4Z8wbdmCyUfxsY%2BjbOUbE69Eh%2FT%2BYZaTQnxoO24V1XXv0XPcgt60%2FBneQ1dna&X-Amz-Signature=53f2476ed6b17d2cb82575964db67aea08179d1c3705b5507be267d30e1318df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4MSJGV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGqDa2XkWV0mmWM0AYkX18rGRqNU9dM%2Fyvtop%2Fh6i1jzAiAmkQrQgzF1gCvyd%2BP3vR5lCPX5qOwZqsq1hAEXSrg7ayr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxP4O7vAi%2FETWcLcgKtwDsWBdkmNQ7z3Fxp5Be5muvrxnNNo0JxE153m1CRatT5WNILCr0Thg6i577xD5%2BgHtEWMYV9fY44vsiuvjPqvOqaXTB3%2FlZD9jc7SDIMbi%2BvnogVb0Wlo%2B2MNxsttuKB0BMRPhqshlCs3wUVHFdZgdbHz1iWLTuSxbZnNCYPil0%2FNzBoRCQGaFlz0MaGwVzR%2FM64UlYCdyVFogXX3FU8jfVeKqBkSJBnpkrBp2msDmgg%2FqFXaTt4Vkme%2BkxH%2Bh%2BUKKs%2FV5JRXB98z7dASFci2U9Qt3oSLWFloZAEtN4W1lfBJI0dtCc0rtyuAikWppFQbdEZBEJsDQR7QeyaND659%2FpiXfYHazO6HM1nE2IYBWGgeUBq0lyUkbKwOD6Q30GeRDtafGIPvXdGVsuxWke2Jcbhb1z4w4KvYvUE8ZUKQIUdt0VoDliN%2B3mJ3W9cWaBg1xULkEXjCaJ2dhpkraoYAN7lGfWGae37I9aSu7nn2g74hFHSUg64AW%2Fx8yYb9IZDtupkRUuS7SqitbxNa%2BxhyewUuiyr3M3nls39kI%2Bzm%2BFlIxtjfWlVmO02JaOHyePf7i8BxE4DYvrI%2BPEYdqvrsaTfeDTWB2KkGBssnn5%2BYF7qde3ZBWhKSHUNh0H9Iwh9yXxAY6pgHbs5sxH9Cjew8LRqDIw8aU8%2FL79bByGXrBomeTfq1Hb6EJnfAFC3HdfjvLV7NWCACe1ssojjoMNXgImVdWpdAJTKahEV36yhwLWRJKqugOyrVLtW3tyaAMxuIlX3%2FCZIWwmsrpBeJ0dnwWzVhM%2BD9mi7aFbEZPkGj4Z8wbdmCyUfxsY%2BjbOUbE69Eh%2FT%2BYZaTQnxoO24V1XXv0XPcgt60%2FBneQ1dna&X-Amz-Signature=0bd8989637d41e9fdc1da9e5723fd8269bbd6b86ec4149c5351effe06d6b074e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
