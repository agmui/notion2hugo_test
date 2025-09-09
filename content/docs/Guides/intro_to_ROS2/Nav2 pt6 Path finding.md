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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=d81c6e5df424f4ea6fc7c9e0968b9291f6104328ac551edf225966e9e87cc8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=3dac03adbbcc94807bedb13788d2e939745667e09f322d983080b37f69ee13f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=b5ddcdbadba31de355fd67392cfc2a52e2ea684b107a296a7bf72a30c153dfc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=a6e3ed57b2a4d74a96d323d2a1fdcc9fff56eccd940fff4967539eb5b8cffd3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=d999c98f2270d7d2238557290e1f5c86266604616053f1fc93e16b5cbe7bf5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=38d6987e75a100e8df66b04863a1d9b2e97eb3a4f500088debbf124776766920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=6bce6addb4c63409245c6473415f712b0646858342da5aee751157dc0d246755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=3b622f973befb63197bbfe5faa535a0df86c27889967d977bf346de5b2124cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=e87161ec07c93303511591b27689470d96c89c1dd38fc79278770bd7c0b26d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=b257e60299df576e02358919fa182c09a4597a2d1e6aa7178f14f4297827b3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=b6ba014e300fd271cfcdb880944552b2db41dab97f17fdd3d50097d385e5bf5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=3bbccafd8a1ab560ccd8eeaa8eb1007ecdcccedab04f9b5e8f9453035618b5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVXJNWS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCd77cSYqJz1CBxiGowwCKtnOJejQileBM2frYSQ6hrYAIgWYco3uKOatxAhZeKJVUJKc4GfTnGgAMHKr4fw2iPX4YqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEfRu3pXzlma8Vp5ircA8g3ydQK7EFTE%2F%2BF9RqDiej5h%2BLTmGzbLSBa92OH8qKyzLuyLczNMAgQD35c3zh7HJiXcF1IhJ5498HtHuEIHtrNJeobmHaglSc%2FxX9d4BFo%2FW9ORuSqAiduhD7eS0gDucx%2FAXCEcxzb%2B70avXh8aMS8FnR0ElCoSxYJkbgrPjfWOfNeq%2BdrqTlyhAb6EdBxiwwqYou35k6A6%2BEJDjbE4%2FyHpbXolomn%2FIx988CVTZj9bC2W%2FrxbH4jd2XyuxPQJhKQLLV8DFkifYIuVk9zSnUTR4M%2FWaXmLKax8MONqBTAY%2FlRC%2FAD6VTVP91whINzTaAy8SMRvuxpboNbbqV17zxvuTYw8k%2B0Is7KarNahCTlyhjkbYC4z6zGXRVyBhi98kezQo7KbgCrFWM7877nb19c28mWGpdecE4HsyQN4AZGT3%2Fnr9XLMgn%2F%2Bex9Va8RfomvQQbC7Glrxvxd8s7mgLH8oH32tiZanfnoeJvEov3KAPOUsG9g69qML3mYKw3BXTkyHyIao%2BnErdqGxan2FgT6fKY%2BplbdH6l%2BYcoKZHsHQH8NtVNOMXNFKmGVKtj5sVe4kbFMr7u26wgmE4dRqgHpT9eA5JDNseXBH6poTey0T8u5T9C0xOqMIXVQiMNTy%2FcUGOqUBUElDAnBeTryMnR9fMzg63uWIZv3peTm7uTTRI6QBlfZbPnmPlRXy5svXI09YNHzjfPJ0Vop2bm2%2FcoWTGije0v9NKWG7%2FjQ69ViruUhC68IhHIjdf6Tz5WMPQtLUGaAP7YlRwSxIWbWGn5N2GK2cmfk%2FLgAlqhZWmKu7JA4HgLbD%2BclsPoVw1VjmOp3v6emmKlRDHlHbxyZP%2BHSbI6wIOdCMG2yu&X-Amz-Signature=48417f2d9c2279df5c15da3c217f0b990b5333d954f057f5a869577cfa839991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
