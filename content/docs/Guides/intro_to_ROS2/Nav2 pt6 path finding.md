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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFJG7OJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC5wFv6Pq%2BTTIILtOiW6C%2FpkSADfeXtP4BMaJBa6Z3DDgIhAP5fvo94bgMeHPLQwXFMvBdKGdrlrm%2BdgugGjiRkWdSAKv8DCFcQABoMNjM3NDIzMTgzODA1Igyn4afpZ%2F0OgMXSf%2Bwq3APdXI12Af9YeavRaF%2Bwx37ny3rKldtIL%2B%2BunZIJSo8xu0K6tizBN1U8%2BwPjYbTtbaCHH0g3ctlLVB6TWOAn%2Bnaobdy2%2F92E0wXkHEC19dv3FizjRvPXrkCSnyzLsoO8jh9F5tB2gq%2B3l5vQAyWCWrI5eo8BQUDsUPcUyL%2BZUqvC12NlnZQzYHl9lpfAjTw0zhj2n00Jd1GcK6fi6%2FKrqanFBOIpdvmlXXUsE6mUNoVyKchJ7vfBIPbLWGRx60e%2FO45GHcBydlWOa64fdbvVKM%2FLIdlsPln%2B%2F1EfiYmmGvDsqc2E0%2F9eWcAPaIJ2Wyn2S3HUW3NBKhmks6rJBIaovweyLq3w2DoVVKRZddeFHh%2FrSDNMkBZRCm4Y5azf3gp1R%2BX%2FJzx0RE23xeFdoa7pFxi1hgt62doXxsKNP8duAIey%2BnauWaJO9Cm07eShUHvHZ7pMwoGVeC3%2BLNmpCeCdpsEvNh9w3YVkWyYKiV06D91Ktb20bO2%2F0SnDwR9nYRn%2F7o6MUbOYDwWxqs2dk3RNrAjwJYke2pnb8DvVENyxfvBKOCtia%2FpRoekkvVbxzggMz0PKtrcV%2BMUAx1LT%2BO6ZTtFbcEPTgGQKC2PB98nxft1hWAEGTbrkdQaibiZ3KDDZ4pHEBjqkAYQmuwnO1rT8SR18Wz2rI8yCYU5kq%2FmUS7sZ1k2VOe2b6%2BzXcLGwZ%2BRUcFriEH%2B3%2F6Luo%2Bcy6IhLND90fnINmDpTNSv5BQRxnwjqVrwuH6%2F2sLJ651Pma4%2FehM7SprIdEa1eL1pzCdGW3q%2F7SbLfyP2iK0Ef0VB8Bt7CT066eWNJGxr9IlaPT9kMuqBuFrHoIhbVETMhiDmVw09xsJuKkPGiOZN0&X-Amz-Signature=3b6d5ea916caf2f96b0284532045d49633116de49c20c735b9e1ca433760e6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFJG7OJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC5wFv6Pq%2BTTIILtOiW6C%2FpkSADfeXtP4BMaJBa6Z3DDgIhAP5fvo94bgMeHPLQwXFMvBdKGdrlrm%2BdgugGjiRkWdSAKv8DCFcQABoMNjM3NDIzMTgzODA1Igyn4afpZ%2F0OgMXSf%2Bwq3APdXI12Af9YeavRaF%2Bwx37ny3rKldtIL%2B%2BunZIJSo8xu0K6tizBN1U8%2BwPjYbTtbaCHH0g3ctlLVB6TWOAn%2Bnaobdy2%2F92E0wXkHEC19dv3FizjRvPXrkCSnyzLsoO8jh9F5tB2gq%2B3l5vQAyWCWrI5eo8BQUDsUPcUyL%2BZUqvC12NlnZQzYHl9lpfAjTw0zhj2n00Jd1GcK6fi6%2FKrqanFBOIpdvmlXXUsE6mUNoVyKchJ7vfBIPbLWGRx60e%2FO45GHcBydlWOa64fdbvVKM%2FLIdlsPln%2B%2F1EfiYmmGvDsqc2E0%2F9eWcAPaIJ2Wyn2S3HUW3NBKhmks6rJBIaovweyLq3w2DoVVKRZddeFHh%2FrSDNMkBZRCm4Y5azf3gp1R%2BX%2FJzx0RE23xeFdoa7pFxi1hgt62doXxsKNP8duAIey%2BnauWaJO9Cm07eShUHvHZ7pMwoGVeC3%2BLNmpCeCdpsEvNh9w3YVkWyYKiV06D91Ktb20bO2%2F0SnDwR9nYRn%2F7o6MUbOYDwWxqs2dk3RNrAjwJYke2pnb8DvVENyxfvBKOCtia%2FpRoekkvVbxzggMz0PKtrcV%2BMUAx1LT%2BO6ZTtFbcEPTgGQKC2PB98nxft1hWAEGTbrkdQaibiZ3KDDZ4pHEBjqkAYQmuwnO1rT8SR18Wz2rI8yCYU5kq%2FmUS7sZ1k2VOe2b6%2BzXcLGwZ%2BRUcFriEH%2B3%2F6Luo%2Bcy6IhLND90fnINmDpTNSv5BQRxnwjqVrwuH6%2F2sLJ651Pma4%2FehM7SprIdEa1eL1pzCdGW3q%2F7SbLfyP2iK0Ef0VB8Bt7CT066eWNJGxr9IlaPT9kMuqBuFrHoIhbVETMhiDmVw09xsJuKkPGiOZN0&X-Amz-Signature=e85beb38df6b97602cb717f34c7e621e4545e5bb9c9e4e1e2c657b10769cdda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFJG7OJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC5wFv6Pq%2BTTIILtOiW6C%2FpkSADfeXtP4BMaJBa6Z3DDgIhAP5fvo94bgMeHPLQwXFMvBdKGdrlrm%2BdgugGjiRkWdSAKv8DCFcQABoMNjM3NDIzMTgzODA1Igyn4afpZ%2F0OgMXSf%2Bwq3APdXI12Af9YeavRaF%2Bwx37ny3rKldtIL%2B%2BunZIJSo8xu0K6tizBN1U8%2BwPjYbTtbaCHH0g3ctlLVB6TWOAn%2Bnaobdy2%2F92E0wXkHEC19dv3FizjRvPXrkCSnyzLsoO8jh9F5tB2gq%2B3l5vQAyWCWrI5eo8BQUDsUPcUyL%2BZUqvC12NlnZQzYHl9lpfAjTw0zhj2n00Jd1GcK6fi6%2FKrqanFBOIpdvmlXXUsE6mUNoVyKchJ7vfBIPbLWGRx60e%2FO45GHcBydlWOa64fdbvVKM%2FLIdlsPln%2B%2F1EfiYmmGvDsqc2E0%2F9eWcAPaIJ2Wyn2S3HUW3NBKhmks6rJBIaovweyLq3w2DoVVKRZddeFHh%2FrSDNMkBZRCm4Y5azf3gp1R%2BX%2FJzx0RE23xeFdoa7pFxi1hgt62doXxsKNP8duAIey%2BnauWaJO9Cm07eShUHvHZ7pMwoGVeC3%2BLNmpCeCdpsEvNh9w3YVkWyYKiV06D91Ktb20bO2%2F0SnDwR9nYRn%2F7o6MUbOYDwWxqs2dk3RNrAjwJYke2pnb8DvVENyxfvBKOCtia%2FpRoekkvVbxzggMz0PKtrcV%2BMUAx1LT%2BO6ZTtFbcEPTgGQKC2PB98nxft1hWAEGTbrkdQaibiZ3KDDZ4pHEBjqkAYQmuwnO1rT8SR18Wz2rI8yCYU5kq%2FmUS7sZ1k2VOe2b6%2BzXcLGwZ%2BRUcFriEH%2B3%2F6Luo%2Bcy6IhLND90fnINmDpTNSv5BQRxnwjqVrwuH6%2F2sLJ651Pma4%2FehM7SprIdEa1eL1pzCdGW3q%2F7SbLfyP2iK0Ef0VB8Bt7CT066eWNJGxr9IlaPT9kMuqBuFrHoIhbVETMhiDmVw09xsJuKkPGiOZN0&X-Amz-Signature=bac3c788df90d7f2a7ffc3fd8d3138227e0f55756ce5597934a1eb10760e1fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFJG7OJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC5wFv6Pq%2BTTIILtOiW6C%2FpkSADfeXtP4BMaJBa6Z3DDgIhAP5fvo94bgMeHPLQwXFMvBdKGdrlrm%2BdgugGjiRkWdSAKv8DCFcQABoMNjM3NDIzMTgzODA1Igyn4afpZ%2F0OgMXSf%2Bwq3APdXI12Af9YeavRaF%2Bwx37ny3rKldtIL%2B%2BunZIJSo8xu0K6tizBN1U8%2BwPjYbTtbaCHH0g3ctlLVB6TWOAn%2Bnaobdy2%2F92E0wXkHEC19dv3FizjRvPXrkCSnyzLsoO8jh9F5tB2gq%2B3l5vQAyWCWrI5eo8BQUDsUPcUyL%2BZUqvC12NlnZQzYHl9lpfAjTw0zhj2n00Jd1GcK6fi6%2FKrqanFBOIpdvmlXXUsE6mUNoVyKchJ7vfBIPbLWGRx60e%2FO45GHcBydlWOa64fdbvVKM%2FLIdlsPln%2B%2F1EfiYmmGvDsqc2E0%2F9eWcAPaIJ2Wyn2S3HUW3NBKhmks6rJBIaovweyLq3w2DoVVKRZddeFHh%2FrSDNMkBZRCm4Y5azf3gp1R%2BX%2FJzx0RE23xeFdoa7pFxi1hgt62doXxsKNP8duAIey%2BnauWaJO9Cm07eShUHvHZ7pMwoGVeC3%2BLNmpCeCdpsEvNh9w3YVkWyYKiV06D91Ktb20bO2%2F0SnDwR9nYRn%2F7o6MUbOYDwWxqs2dk3RNrAjwJYke2pnb8DvVENyxfvBKOCtia%2FpRoekkvVbxzggMz0PKtrcV%2BMUAx1LT%2BO6ZTtFbcEPTgGQKC2PB98nxft1hWAEGTbrkdQaibiZ3KDDZ4pHEBjqkAYQmuwnO1rT8SR18Wz2rI8yCYU5kq%2FmUS7sZ1k2VOe2b6%2BzXcLGwZ%2BRUcFriEH%2B3%2F6Luo%2Bcy6IhLND90fnINmDpTNSv5BQRxnwjqVrwuH6%2F2sLJ651Pma4%2FehM7SprIdEa1eL1pzCdGW3q%2F7SbLfyP2iK0Ef0VB8Bt7CT066eWNJGxr9IlaPT9kMuqBuFrHoIhbVETMhiDmVw09xsJuKkPGiOZN0&X-Amz-Signature=516e7ee1cd7fb5abc57508736d48d6327ad5dfbc6a18cec20e382f714dc5bef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFJG7OJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC5wFv6Pq%2BTTIILtOiW6C%2FpkSADfeXtP4BMaJBa6Z3DDgIhAP5fvo94bgMeHPLQwXFMvBdKGdrlrm%2BdgugGjiRkWdSAKv8DCFcQABoMNjM3NDIzMTgzODA1Igyn4afpZ%2F0OgMXSf%2Bwq3APdXI12Af9YeavRaF%2Bwx37ny3rKldtIL%2B%2BunZIJSo8xu0K6tizBN1U8%2BwPjYbTtbaCHH0g3ctlLVB6TWOAn%2Bnaobdy2%2F92E0wXkHEC19dv3FizjRvPXrkCSnyzLsoO8jh9F5tB2gq%2B3l5vQAyWCWrI5eo8BQUDsUPcUyL%2BZUqvC12NlnZQzYHl9lpfAjTw0zhj2n00Jd1GcK6fi6%2FKrqanFBOIpdvmlXXUsE6mUNoVyKchJ7vfBIPbLWGRx60e%2FO45GHcBydlWOa64fdbvVKM%2FLIdlsPln%2B%2F1EfiYmmGvDsqc2E0%2F9eWcAPaIJ2Wyn2S3HUW3NBKhmks6rJBIaovweyLq3w2DoVVKRZddeFHh%2FrSDNMkBZRCm4Y5azf3gp1R%2BX%2FJzx0RE23xeFdoa7pFxi1hgt62doXxsKNP8duAIey%2BnauWaJO9Cm07eShUHvHZ7pMwoGVeC3%2BLNmpCeCdpsEvNh9w3YVkWyYKiV06D91Ktb20bO2%2F0SnDwR9nYRn%2F7o6MUbOYDwWxqs2dk3RNrAjwJYke2pnb8DvVENyxfvBKOCtia%2FpRoekkvVbxzggMz0PKtrcV%2BMUAx1LT%2BO6ZTtFbcEPTgGQKC2PB98nxft1hWAEGTbrkdQaibiZ3KDDZ4pHEBjqkAYQmuwnO1rT8SR18Wz2rI8yCYU5kq%2FmUS7sZ1k2VOe2b6%2BzXcLGwZ%2BRUcFriEH%2B3%2F6Luo%2Bcy6IhLND90fnINmDpTNSv5BQRxnwjqVrwuH6%2F2sLJ651Pma4%2FehM7SprIdEa1eL1pzCdGW3q%2F7SbLfyP2iK0Ef0VB8Bt7CT066eWNJGxr9IlaPT9kMuqBuFrHoIhbVETMhiDmVw09xsJuKkPGiOZN0&X-Amz-Signature=328b2d5da555815cbddc7ee10c45e440b2570d119946892de69c2888dc8d6b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFJG7OJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC5wFv6Pq%2BTTIILtOiW6C%2FpkSADfeXtP4BMaJBa6Z3DDgIhAP5fvo94bgMeHPLQwXFMvBdKGdrlrm%2BdgugGjiRkWdSAKv8DCFcQABoMNjM3NDIzMTgzODA1Igyn4afpZ%2F0OgMXSf%2Bwq3APdXI12Af9YeavRaF%2Bwx37ny3rKldtIL%2B%2BunZIJSo8xu0K6tizBN1U8%2BwPjYbTtbaCHH0g3ctlLVB6TWOAn%2Bnaobdy2%2F92E0wXkHEC19dv3FizjRvPXrkCSnyzLsoO8jh9F5tB2gq%2B3l5vQAyWCWrI5eo8BQUDsUPcUyL%2BZUqvC12NlnZQzYHl9lpfAjTw0zhj2n00Jd1GcK6fi6%2FKrqanFBOIpdvmlXXUsE6mUNoVyKchJ7vfBIPbLWGRx60e%2FO45GHcBydlWOa64fdbvVKM%2FLIdlsPln%2B%2F1EfiYmmGvDsqc2E0%2F9eWcAPaIJ2Wyn2S3HUW3NBKhmks6rJBIaovweyLq3w2DoVVKRZddeFHh%2FrSDNMkBZRCm4Y5azf3gp1R%2BX%2FJzx0RE23xeFdoa7pFxi1hgt62doXxsKNP8duAIey%2BnauWaJO9Cm07eShUHvHZ7pMwoGVeC3%2BLNmpCeCdpsEvNh9w3YVkWyYKiV06D91Ktb20bO2%2F0SnDwR9nYRn%2F7o6MUbOYDwWxqs2dk3RNrAjwJYke2pnb8DvVENyxfvBKOCtia%2FpRoekkvVbxzggMz0PKtrcV%2BMUAx1LT%2BO6ZTtFbcEPTgGQKC2PB98nxft1hWAEGTbrkdQaibiZ3KDDZ4pHEBjqkAYQmuwnO1rT8SR18Wz2rI8yCYU5kq%2FmUS7sZ1k2VOe2b6%2BzXcLGwZ%2BRUcFriEH%2B3%2F6Luo%2Bcy6IhLND90fnINmDpTNSv5BQRxnwjqVrwuH6%2F2sLJ651Pma4%2FehM7SprIdEa1eL1pzCdGW3q%2F7SbLfyP2iK0Ef0VB8Bt7CT066eWNJGxr9IlaPT9kMuqBuFrHoIhbVETMhiDmVw09xsJuKkPGiOZN0&X-Amz-Signature=843921d979c3be8d938d144a94b144547eed222581b976bff4d9163be2dd9952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
