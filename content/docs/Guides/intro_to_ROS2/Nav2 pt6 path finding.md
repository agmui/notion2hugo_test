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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAQU32Z%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGo0nkYoH7EONviJzwp70rUNkvidsP%2BRPSxFm%2BOFYvGtAiBreDZ3LP18VpzwKE7xsSkMHI6TT5wBwj4P8V1WxtYkzSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9e%2BLxBx30EgJJT5QKtwDB1H0udHtqoe2ejVSMAeodFP2%2FwtfhwpN5YbmRoasGzIgAdB1muPm%2F51wPdflLWIvtizaBc1%2BCYNk2xtqx5dNmqHu4PSn51oGVee%2BG8uRuoUi6TTdWVXrnNCo%2BZtsuy3WEdufol51lfL12kFs2380PMATKc3S49nVc7cW69PcLz5UTds81ceOUX5zAg1srQCv%2BddsOcGiC%2BKHfHpInc3F4X%2FZ%2FOdBsH7YBL8wG60zz6mWKbZyLgC9%2B9Aq4FNMV86V%2BL%2ByKxpcZYr6RAiPlmbJ5HxoEDMPswvgSztUHNHTaxqjWneAKym2ZW5bLJh4cjW%2F3lbbfcgQ0%2B8bDbuafPp55iAPNJ3jnWG20gF%2B2VLtwnOfJ6TLFrxSPp81Ygzn9fjDvJjlVGrsdEAE3ZZP9nFr3NjYhHbiq0YP9Vys9%2F2O5fo22jR1vEfpfjb3NkEWfU6gw1mVZtoRrA%2B9urdApkp56qAETuNtDhZEinxn%2FeDBZZ2s8l6gZK1mjrTPed0lCk0VNqagJYqhkSaZ2w9bc%2BJgUUf3e928SJmPpCrSuOBJnrVdJCXtjdZ1XO8wnAZomcSGuMdnt2afDXWXpgXUsSR0GYzIV1pooPjy0VkD13bF%2BvInRoJSiai7hOZ5uNowts2gxAY6pgGBa3UXCAbntCEwoQJ2lm1RonoF3ZiSyZaMENTac4RECEzFdaoXLvIk7yJmj6MIB2aXCtEbegvQw1lKcc0n0pzJmuWWza3h5CT8g%2BJLjtrgQ3cf3vEcVhrtNdPTVeO1tgaGFddidWgbK1Ks9JL39WbS4UaCQBFB7BNMdzcsoZTsF1dVUWDpuHC0YI7NQyi2zkcAkK8A5L72d2fxg2jmbyxLx5Q7Kncj&X-Amz-Signature=6b37af17b8956614e6a44392b3ccc6dee21684ab590318f3d2dce173e85821a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAQU32Z%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGo0nkYoH7EONviJzwp70rUNkvidsP%2BRPSxFm%2BOFYvGtAiBreDZ3LP18VpzwKE7xsSkMHI6TT5wBwj4P8V1WxtYkzSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9e%2BLxBx30EgJJT5QKtwDB1H0udHtqoe2ejVSMAeodFP2%2FwtfhwpN5YbmRoasGzIgAdB1muPm%2F51wPdflLWIvtizaBc1%2BCYNk2xtqx5dNmqHu4PSn51oGVee%2BG8uRuoUi6TTdWVXrnNCo%2BZtsuy3WEdufol51lfL12kFs2380PMATKc3S49nVc7cW69PcLz5UTds81ceOUX5zAg1srQCv%2BddsOcGiC%2BKHfHpInc3F4X%2FZ%2FOdBsH7YBL8wG60zz6mWKbZyLgC9%2B9Aq4FNMV86V%2BL%2ByKxpcZYr6RAiPlmbJ5HxoEDMPswvgSztUHNHTaxqjWneAKym2ZW5bLJh4cjW%2F3lbbfcgQ0%2B8bDbuafPp55iAPNJ3jnWG20gF%2B2VLtwnOfJ6TLFrxSPp81Ygzn9fjDvJjlVGrsdEAE3ZZP9nFr3NjYhHbiq0YP9Vys9%2F2O5fo22jR1vEfpfjb3NkEWfU6gw1mVZtoRrA%2B9urdApkp56qAETuNtDhZEinxn%2FeDBZZ2s8l6gZK1mjrTPed0lCk0VNqagJYqhkSaZ2w9bc%2BJgUUf3e928SJmPpCrSuOBJnrVdJCXtjdZ1XO8wnAZomcSGuMdnt2afDXWXpgXUsSR0GYzIV1pooPjy0VkD13bF%2BvInRoJSiai7hOZ5uNowts2gxAY6pgGBa3UXCAbntCEwoQJ2lm1RonoF3ZiSyZaMENTac4RECEzFdaoXLvIk7yJmj6MIB2aXCtEbegvQw1lKcc0n0pzJmuWWza3h5CT8g%2BJLjtrgQ3cf3vEcVhrtNdPTVeO1tgaGFddidWgbK1Ks9JL39WbS4UaCQBFB7BNMdzcsoZTsF1dVUWDpuHC0YI7NQyi2zkcAkK8A5L72d2fxg2jmbyxLx5Q7Kncj&X-Amz-Signature=58c6644a274843e82040beac7ab7c98310919831d40bb754ffad6d8fc482f904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAQU32Z%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGo0nkYoH7EONviJzwp70rUNkvidsP%2BRPSxFm%2BOFYvGtAiBreDZ3LP18VpzwKE7xsSkMHI6TT5wBwj4P8V1WxtYkzSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9e%2BLxBx30EgJJT5QKtwDB1H0udHtqoe2ejVSMAeodFP2%2FwtfhwpN5YbmRoasGzIgAdB1muPm%2F51wPdflLWIvtizaBc1%2BCYNk2xtqx5dNmqHu4PSn51oGVee%2BG8uRuoUi6TTdWVXrnNCo%2BZtsuy3WEdufol51lfL12kFs2380PMATKc3S49nVc7cW69PcLz5UTds81ceOUX5zAg1srQCv%2BddsOcGiC%2BKHfHpInc3F4X%2FZ%2FOdBsH7YBL8wG60zz6mWKbZyLgC9%2B9Aq4FNMV86V%2BL%2ByKxpcZYr6RAiPlmbJ5HxoEDMPswvgSztUHNHTaxqjWneAKym2ZW5bLJh4cjW%2F3lbbfcgQ0%2B8bDbuafPp55iAPNJ3jnWG20gF%2B2VLtwnOfJ6TLFrxSPp81Ygzn9fjDvJjlVGrsdEAE3ZZP9nFr3NjYhHbiq0YP9Vys9%2F2O5fo22jR1vEfpfjb3NkEWfU6gw1mVZtoRrA%2B9urdApkp56qAETuNtDhZEinxn%2FeDBZZ2s8l6gZK1mjrTPed0lCk0VNqagJYqhkSaZ2w9bc%2BJgUUf3e928SJmPpCrSuOBJnrVdJCXtjdZ1XO8wnAZomcSGuMdnt2afDXWXpgXUsSR0GYzIV1pooPjy0VkD13bF%2BvInRoJSiai7hOZ5uNowts2gxAY6pgGBa3UXCAbntCEwoQJ2lm1RonoF3ZiSyZaMENTac4RECEzFdaoXLvIk7yJmj6MIB2aXCtEbegvQw1lKcc0n0pzJmuWWza3h5CT8g%2BJLjtrgQ3cf3vEcVhrtNdPTVeO1tgaGFddidWgbK1Ks9JL39WbS4UaCQBFB7BNMdzcsoZTsF1dVUWDpuHC0YI7NQyi2zkcAkK8A5L72d2fxg2jmbyxLx5Q7Kncj&X-Amz-Signature=7ce2079fb97e8205ac5c9b922f3487fe30f472b34b45f4c2d1729b46f8fa1dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAQU32Z%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGo0nkYoH7EONviJzwp70rUNkvidsP%2BRPSxFm%2BOFYvGtAiBreDZ3LP18VpzwKE7xsSkMHI6TT5wBwj4P8V1WxtYkzSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9e%2BLxBx30EgJJT5QKtwDB1H0udHtqoe2ejVSMAeodFP2%2FwtfhwpN5YbmRoasGzIgAdB1muPm%2F51wPdflLWIvtizaBc1%2BCYNk2xtqx5dNmqHu4PSn51oGVee%2BG8uRuoUi6TTdWVXrnNCo%2BZtsuy3WEdufol51lfL12kFs2380PMATKc3S49nVc7cW69PcLz5UTds81ceOUX5zAg1srQCv%2BddsOcGiC%2BKHfHpInc3F4X%2FZ%2FOdBsH7YBL8wG60zz6mWKbZyLgC9%2B9Aq4FNMV86V%2BL%2ByKxpcZYr6RAiPlmbJ5HxoEDMPswvgSztUHNHTaxqjWneAKym2ZW5bLJh4cjW%2F3lbbfcgQ0%2B8bDbuafPp55iAPNJ3jnWG20gF%2B2VLtwnOfJ6TLFrxSPp81Ygzn9fjDvJjlVGrsdEAE3ZZP9nFr3NjYhHbiq0YP9Vys9%2F2O5fo22jR1vEfpfjb3NkEWfU6gw1mVZtoRrA%2B9urdApkp56qAETuNtDhZEinxn%2FeDBZZ2s8l6gZK1mjrTPed0lCk0VNqagJYqhkSaZ2w9bc%2BJgUUf3e928SJmPpCrSuOBJnrVdJCXtjdZ1XO8wnAZomcSGuMdnt2afDXWXpgXUsSR0GYzIV1pooPjy0VkD13bF%2BvInRoJSiai7hOZ5uNowts2gxAY6pgGBa3UXCAbntCEwoQJ2lm1RonoF3ZiSyZaMENTac4RECEzFdaoXLvIk7yJmj6MIB2aXCtEbegvQw1lKcc0n0pzJmuWWza3h5CT8g%2BJLjtrgQ3cf3vEcVhrtNdPTVeO1tgaGFddidWgbK1Ks9JL39WbS4UaCQBFB7BNMdzcsoZTsF1dVUWDpuHC0YI7NQyi2zkcAkK8A5L72d2fxg2jmbyxLx5Q7Kncj&X-Amz-Signature=8ff25c310aa47ded14ba756d234b8ef9c9537b57f674569569963d0f489df08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAQU32Z%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGo0nkYoH7EONviJzwp70rUNkvidsP%2BRPSxFm%2BOFYvGtAiBreDZ3LP18VpzwKE7xsSkMHI6TT5wBwj4P8V1WxtYkzSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9e%2BLxBx30EgJJT5QKtwDB1H0udHtqoe2ejVSMAeodFP2%2FwtfhwpN5YbmRoasGzIgAdB1muPm%2F51wPdflLWIvtizaBc1%2BCYNk2xtqx5dNmqHu4PSn51oGVee%2BG8uRuoUi6TTdWVXrnNCo%2BZtsuy3WEdufol51lfL12kFs2380PMATKc3S49nVc7cW69PcLz5UTds81ceOUX5zAg1srQCv%2BddsOcGiC%2BKHfHpInc3F4X%2FZ%2FOdBsH7YBL8wG60zz6mWKbZyLgC9%2B9Aq4FNMV86V%2BL%2ByKxpcZYr6RAiPlmbJ5HxoEDMPswvgSztUHNHTaxqjWneAKym2ZW5bLJh4cjW%2F3lbbfcgQ0%2B8bDbuafPp55iAPNJ3jnWG20gF%2B2VLtwnOfJ6TLFrxSPp81Ygzn9fjDvJjlVGrsdEAE3ZZP9nFr3NjYhHbiq0YP9Vys9%2F2O5fo22jR1vEfpfjb3NkEWfU6gw1mVZtoRrA%2B9urdApkp56qAETuNtDhZEinxn%2FeDBZZ2s8l6gZK1mjrTPed0lCk0VNqagJYqhkSaZ2w9bc%2BJgUUf3e928SJmPpCrSuOBJnrVdJCXtjdZ1XO8wnAZomcSGuMdnt2afDXWXpgXUsSR0GYzIV1pooPjy0VkD13bF%2BvInRoJSiai7hOZ5uNowts2gxAY6pgGBa3UXCAbntCEwoQJ2lm1RonoF3ZiSyZaMENTac4RECEzFdaoXLvIk7yJmj6MIB2aXCtEbegvQw1lKcc0n0pzJmuWWza3h5CT8g%2BJLjtrgQ3cf3vEcVhrtNdPTVeO1tgaGFddidWgbK1Ks9JL39WbS4UaCQBFB7BNMdzcsoZTsF1dVUWDpuHC0YI7NQyi2zkcAkK8A5L72d2fxg2jmbyxLx5Q7Kncj&X-Amz-Signature=c11cedd35de298bc59b550d3f87b90cf727e2a7df9328f8fc8763bcf8a61f2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAQU32Z%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGo0nkYoH7EONviJzwp70rUNkvidsP%2BRPSxFm%2BOFYvGtAiBreDZ3LP18VpzwKE7xsSkMHI6TT5wBwj4P8V1WxtYkzSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9e%2BLxBx30EgJJT5QKtwDB1H0udHtqoe2ejVSMAeodFP2%2FwtfhwpN5YbmRoasGzIgAdB1muPm%2F51wPdflLWIvtizaBc1%2BCYNk2xtqx5dNmqHu4PSn51oGVee%2BG8uRuoUi6TTdWVXrnNCo%2BZtsuy3WEdufol51lfL12kFs2380PMATKc3S49nVc7cW69PcLz5UTds81ceOUX5zAg1srQCv%2BddsOcGiC%2BKHfHpInc3F4X%2FZ%2FOdBsH7YBL8wG60zz6mWKbZyLgC9%2B9Aq4FNMV86V%2BL%2ByKxpcZYr6RAiPlmbJ5HxoEDMPswvgSztUHNHTaxqjWneAKym2ZW5bLJh4cjW%2F3lbbfcgQ0%2B8bDbuafPp55iAPNJ3jnWG20gF%2B2VLtwnOfJ6TLFrxSPp81Ygzn9fjDvJjlVGrsdEAE3ZZP9nFr3NjYhHbiq0YP9Vys9%2F2O5fo22jR1vEfpfjb3NkEWfU6gw1mVZtoRrA%2B9urdApkp56qAETuNtDhZEinxn%2FeDBZZ2s8l6gZK1mjrTPed0lCk0VNqagJYqhkSaZ2w9bc%2BJgUUf3e928SJmPpCrSuOBJnrVdJCXtjdZ1XO8wnAZomcSGuMdnt2afDXWXpgXUsSR0GYzIV1pooPjy0VkD13bF%2BvInRoJSiai7hOZ5uNowts2gxAY6pgGBa3UXCAbntCEwoQJ2lm1RonoF3ZiSyZaMENTac4RECEzFdaoXLvIk7yJmj6MIB2aXCtEbegvQw1lKcc0n0pzJmuWWza3h5CT8g%2BJLjtrgQ3cf3vEcVhrtNdPTVeO1tgaGFddidWgbK1Ks9JL39WbS4UaCQBFB7BNMdzcsoZTsF1dVUWDpuHC0YI7NQyi2zkcAkK8A5L72d2fxg2jmbyxLx5Q7Kncj&X-Amz-Signature=8bac9605e2f2db2856c40f642b48591e802d346a50bfd9a54ab3a40f007e0778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
