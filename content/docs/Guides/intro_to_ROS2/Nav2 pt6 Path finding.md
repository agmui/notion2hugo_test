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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=6fb53e4342fe210a8fb9e3f01ea01ee0989c6db86577842ba15ef16d222398f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=599aff35ecf1c252e5b3dbd65e15b81391e13cfc16622cd064df692faad16699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=5fa15a60295eda9560fde59a9896fc199a9359e8bf6d558d64e86d6aa290dddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=231756374c001a4823e26a78a6088be519ead369e4a2d6aef4976dd117fcd444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=c177c55d0f1876033c7af24752956abdcbae07aed181d7470a28dd2dee375451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=44d117c8974cab491844050b069948411d5fe57de0dd414ccc47c09260d116d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=e5d0a9e9532c6996fe1d2999dcbfb109b4d139146e90e25da06336dc884183fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=5a71e3c49e0ab8e0bd26c06ceb568b6c65e241dc947a5d2196c3e0088d2782cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=f0cea723fb68bcda7561c86a450712a74a4d1435e775c7238a4b98d6ff89496d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=5fe33a2bb58aaaccc6ab6705e90db327299a2962f72bfff6fddf81d40c6f012c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=30af93ceab54fddf21e8fcbe67a6f4371977c569997407d5b8048c0755bd0ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=8e24f65a64c27102c3122e51fd3f6c476aea92e3f9a93ecc3583e138c6663e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRZ6YMC%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1%2B9cmzFSxm7uu3geeM8fJ%2BeaEZeHRZwgo5QzpGfH9nAiBsrNNo8%2B2GgkE7rXE0%2FL2Zif5EzVGpX5ZR%2B2do%2BP1mnyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOo7%2BegpAO9wWDqJKtwDxlnMFp5OLQemDesJSvVS6KHXWOrPO7Zw6Og%2BdSmRy1hEBo1YhIeZjLxNKN2IYLJdMvyNKrbCwjZFJk%2B5pn1vM3%2BPHsBmSPiF4fBQko1GQ%2FKcawgSeumt3N7VASO6AH8ZOy775JcAFekpfbWN9LZjGaMXQDBZE87av2ITkHrHpaLgYD%2F3t3WRoHCkWx486rIApF5IUPRWxml41sVWZqa%2FvuIS7NfhgBKKLVu5ygmhgQxbRbpI9UXWoIXVcTR54gZliFiP9g889%2BMInIENhVFPaUpkL5%2F3LOrGTts73r5UILSOkz08ombGcCI0WazyDazxy3eQ5kl9abRiTEYH0PXvXsOhuS4NjVWPTG5IpiWXuqw4c3sF54rN79MH7%2B5Nd5Pd2lTaJgALGjL5W%2FJZRRVz%2FCRCaJtYy4ggWzRgXaHAWc6P2xZUY%2BiT1786Ce%2FeAeAdTcyTUdqVXZvR1FKIQVMPR31UEMHqEglH09%2BbMmnxUxQgr0ueGGbkiUJdUVHxE2loKt%2BlAyi%2BmJ8VhC%2FvIgsC7eGEjTN2YeI83V4ZIClsik5YtD2qawxhK%2BYh74NdSF3cmPGuLIJbGWMxJMi0AKmS1TLs2%2FcsIbT249s%2FqwhBLo3aVjudfvmNmjeiftgw9ZDYzQY6pgEvc78Vt%2FWFS5mpAe0dPEixSoI5VNYq6QAoxr9wx%2FoDWUxBCeLM0Dw1XqRwf71qKDUntrFB9UwN9wlnVEgUZAo%2B9qm1xNFH2rvA4Mee3KsCE%2BKfhtoaurSYiuRWI1aXc1cE1y0mC%2FV47H3aATKkGZuMRtR4%2B8fNbVhpUGBpVJhBQ7TRItkq7EYg0PdmwVcakHuUJ4HaEJBs21qp4K4bhp69OH%2FWR3y9&X-Amz-Signature=e146633edcff5ca500725f84210f445c0639e9ffc2bdac88adc33f80d20ee581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
