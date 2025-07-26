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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4C3CYV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFiM2JyLRmBt9tk2bF%2FYuveQdXI%2F3T0gEfIb0kYTazkCAiB3iLJCn0YcmTF%2FnuGnpnpFykWaTCK2zeIYu48KP%2Bk8%2Bir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMonYDGhRYt1UuExoAKtwDCdXN1Ga%2FBrKN5h1CmuUA3MtmuD4ksC8Q0%2Fe35qIprB1laR4TJpXh5TOTmzSfngebNRU8LZLeAPqvP5q6XwWfdOMFqOoipR6Vb%2FQuyocaryxSRH2idm5jvNTaUdOqsm1cNqP6Dt2zkUHB9qj%2FBPvn9uYqsJl4dtCOhhHJ%2FWT%2BAFUBJRHuEwZNfw0zHP2mIUQ6btWo80fXnZaq2xRDnnJOnyzm7qzBkvtIYABQwOimr2BBg5wiKLnzhKFgT%2Bp0KoELtIpCZmhXGEPXPz8bslq8Tv9ege8G32eRQMjmBlbh9mKDR9c1PI%2FLkxdp3OIFv%2BAA%2B1Jxpz%2BFmMt%2BNdq4GKWNzDPZug3u179t4x6v8b9ywyQ25DxMpgr8mSIlxSeUmBMIQfvDvgCkMaB0sFMC0zmPv%2BZ09zWIJYsIA%2BochY%2B9TEQAhal3N0Ea99VUPres2%2FPWw7Ax0s3SPkSLKojspze4A6INX%2Fqxu1zt3R36K%2FsdzhxkixKWxBJxSj3fGUc1hIe%2BlTp0PaDYHetS6LTThR%2BvzQ2nUaotvcI0anaFJwzNyh42iYH8SETyZOIDYzl4Uz8HFw%2FhEkMx0qtzOznds3Uwzpdh%2FJmCfWNbaaouWbdsWwL4zraYCtwJYnydMpIwz8GTxAY6pgGBkeaQgrEOjrenGEpgV2yHpy2kEsgRHdytx9%2BYF2mWpc%2B6WNczeu2rsDp%2FwjiwqXOziV3u8hZuBkdTM2DBJ3bcVaLp0o6yo2SpoSOxlrFJSDY3MvXTAf2rdzXMcII39qaBeIoVc0tdDAN4A1Lrnf4eGQY%2F5u7%2BzngBLF4zxJqZUHRJ0IvzjXY1d1Ped%2FeHl21lmIgjjNq0pZh62NRsF2Qd6v78uaaV&X-Amz-Signature=a40473e89da3eb7a4371a82dec07b27184754d689aadf6c028eecc4fcc3e871c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4C3CYV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFiM2JyLRmBt9tk2bF%2FYuveQdXI%2F3T0gEfIb0kYTazkCAiB3iLJCn0YcmTF%2FnuGnpnpFykWaTCK2zeIYu48KP%2Bk8%2Bir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMonYDGhRYt1UuExoAKtwDCdXN1Ga%2FBrKN5h1CmuUA3MtmuD4ksC8Q0%2Fe35qIprB1laR4TJpXh5TOTmzSfngebNRU8LZLeAPqvP5q6XwWfdOMFqOoipR6Vb%2FQuyocaryxSRH2idm5jvNTaUdOqsm1cNqP6Dt2zkUHB9qj%2FBPvn9uYqsJl4dtCOhhHJ%2FWT%2BAFUBJRHuEwZNfw0zHP2mIUQ6btWo80fXnZaq2xRDnnJOnyzm7qzBkvtIYABQwOimr2BBg5wiKLnzhKFgT%2Bp0KoELtIpCZmhXGEPXPz8bslq8Tv9ege8G32eRQMjmBlbh9mKDR9c1PI%2FLkxdp3OIFv%2BAA%2B1Jxpz%2BFmMt%2BNdq4GKWNzDPZug3u179t4x6v8b9ywyQ25DxMpgr8mSIlxSeUmBMIQfvDvgCkMaB0sFMC0zmPv%2BZ09zWIJYsIA%2BochY%2B9TEQAhal3N0Ea99VUPres2%2FPWw7Ax0s3SPkSLKojspze4A6INX%2Fqxu1zt3R36K%2FsdzhxkixKWxBJxSj3fGUc1hIe%2BlTp0PaDYHetS6LTThR%2BvzQ2nUaotvcI0anaFJwzNyh42iYH8SETyZOIDYzl4Uz8HFw%2FhEkMx0qtzOznds3Uwzpdh%2FJmCfWNbaaouWbdsWwL4zraYCtwJYnydMpIwz8GTxAY6pgGBkeaQgrEOjrenGEpgV2yHpy2kEsgRHdytx9%2BYF2mWpc%2B6WNczeu2rsDp%2FwjiwqXOziV3u8hZuBkdTM2DBJ3bcVaLp0o6yo2SpoSOxlrFJSDY3MvXTAf2rdzXMcII39qaBeIoVc0tdDAN4A1Lrnf4eGQY%2F5u7%2BzngBLF4zxJqZUHRJ0IvzjXY1d1Ped%2FeHl21lmIgjjNq0pZh62NRsF2Qd6v78uaaV&X-Amz-Signature=c3edb0d8162b654f9da806befb17a35e571bb1dab713f96c2ad0b70071211a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4C3CYV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFiM2JyLRmBt9tk2bF%2FYuveQdXI%2F3T0gEfIb0kYTazkCAiB3iLJCn0YcmTF%2FnuGnpnpFykWaTCK2zeIYu48KP%2Bk8%2Bir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMonYDGhRYt1UuExoAKtwDCdXN1Ga%2FBrKN5h1CmuUA3MtmuD4ksC8Q0%2Fe35qIprB1laR4TJpXh5TOTmzSfngebNRU8LZLeAPqvP5q6XwWfdOMFqOoipR6Vb%2FQuyocaryxSRH2idm5jvNTaUdOqsm1cNqP6Dt2zkUHB9qj%2FBPvn9uYqsJl4dtCOhhHJ%2FWT%2BAFUBJRHuEwZNfw0zHP2mIUQ6btWo80fXnZaq2xRDnnJOnyzm7qzBkvtIYABQwOimr2BBg5wiKLnzhKFgT%2Bp0KoELtIpCZmhXGEPXPz8bslq8Tv9ege8G32eRQMjmBlbh9mKDR9c1PI%2FLkxdp3OIFv%2BAA%2B1Jxpz%2BFmMt%2BNdq4GKWNzDPZug3u179t4x6v8b9ywyQ25DxMpgr8mSIlxSeUmBMIQfvDvgCkMaB0sFMC0zmPv%2BZ09zWIJYsIA%2BochY%2B9TEQAhal3N0Ea99VUPres2%2FPWw7Ax0s3SPkSLKojspze4A6INX%2Fqxu1zt3R36K%2FsdzhxkixKWxBJxSj3fGUc1hIe%2BlTp0PaDYHetS6LTThR%2BvzQ2nUaotvcI0anaFJwzNyh42iYH8SETyZOIDYzl4Uz8HFw%2FhEkMx0qtzOznds3Uwzpdh%2FJmCfWNbaaouWbdsWwL4zraYCtwJYnydMpIwz8GTxAY6pgGBkeaQgrEOjrenGEpgV2yHpy2kEsgRHdytx9%2BYF2mWpc%2B6WNczeu2rsDp%2FwjiwqXOziV3u8hZuBkdTM2DBJ3bcVaLp0o6yo2SpoSOxlrFJSDY3MvXTAf2rdzXMcII39qaBeIoVc0tdDAN4A1Lrnf4eGQY%2F5u7%2BzngBLF4zxJqZUHRJ0IvzjXY1d1Ped%2FeHl21lmIgjjNq0pZh62NRsF2Qd6v78uaaV&X-Amz-Signature=a6738228eab45b94c8d30a90c5c026568e1011e0d2f3c75d9d7300db4af75f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4C3CYV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFiM2JyLRmBt9tk2bF%2FYuveQdXI%2F3T0gEfIb0kYTazkCAiB3iLJCn0YcmTF%2FnuGnpnpFykWaTCK2zeIYu48KP%2Bk8%2Bir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMonYDGhRYt1UuExoAKtwDCdXN1Ga%2FBrKN5h1CmuUA3MtmuD4ksC8Q0%2Fe35qIprB1laR4TJpXh5TOTmzSfngebNRU8LZLeAPqvP5q6XwWfdOMFqOoipR6Vb%2FQuyocaryxSRH2idm5jvNTaUdOqsm1cNqP6Dt2zkUHB9qj%2FBPvn9uYqsJl4dtCOhhHJ%2FWT%2BAFUBJRHuEwZNfw0zHP2mIUQ6btWo80fXnZaq2xRDnnJOnyzm7qzBkvtIYABQwOimr2BBg5wiKLnzhKFgT%2Bp0KoELtIpCZmhXGEPXPz8bslq8Tv9ege8G32eRQMjmBlbh9mKDR9c1PI%2FLkxdp3OIFv%2BAA%2B1Jxpz%2BFmMt%2BNdq4GKWNzDPZug3u179t4x6v8b9ywyQ25DxMpgr8mSIlxSeUmBMIQfvDvgCkMaB0sFMC0zmPv%2BZ09zWIJYsIA%2BochY%2B9TEQAhal3N0Ea99VUPres2%2FPWw7Ax0s3SPkSLKojspze4A6INX%2Fqxu1zt3R36K%2FsdzhxkixKWxBJxSj3fGUc1hIe%2BlTp0PaDYHetS6LTThR%2BvzQ2nUaotvcI0anaFJwzNyh42iYH8SETyZOIDYzl4Uz8HFw%2FhEkMx0qtzOznds3Uwzpdh%2FJmCfWNbaaouWbdsWwL4zraYCtwJYnydMpIwz8GTxAY6pgGBkeaQgrEOjrenGEpgV2yHpy2kEsgRHdytx9%2BYF2mWpc%2B6WNczeu2rsDp%2FwjiwqXOziV3u8hZuBkdTM2DBJ3bcVaLp0o6yo2SpoSOxlrFJSDY3MvXTAf2rdzXMcII39qaBeIoVc0tdDAN4A1Lrnf4eGQY%2F5u7%2BzngBLF4zxJqZUHRJ0IvzjXY1d1Ped%2FeHl21lmIgjjNq0pZh62NRsF2Qd6v78uaaV&X-Amz-Signature=d1afcd45b2628a1f0fd9954b7824707c39cc35cb442edc02bfc67aee1afccc2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4C3CYV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFiM2JyLRmBt9tk2bF%2FYuveQdXI%2F3T0gEfIb0kYTazkCAiB3iLJCn0YcmTF%2FnuGnpnpFykWaTCK2zeIYu48KP%2Bk8%2Bir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMonYDGhRYt1UuExoAKtwDCdXN1Ga%2FBrKN5h1CmuUA3MtmuD4ksC8Q0%2Fe35qIprB1laR4TJpXh5TOTmzSfngebNRU8LZLeAPqvP5q6XwWfdOMFqOoipR6Vb%2FQuyocaryxSRH2idm5jvNTaUdOqsm1cNqP6Dt2zkUHB9qj%2FBPvn9uYqsJl4dtCOhhHJ%2FWT%2BAFUBJRHuEwZNfw0zHP2mIUQ6btWo80fXnZaq2xRDnnJOnyzm7qzBkvtIYABQwOimr2BBg5wiKLnzhKFgT%2Bp0KoELtIpCZmhXGEPXPz8bslq8Tv9ege8G32eRQMjmBlbh9mKDR9c1PI%2FLkxdp3OIFv%2BAA%2B1Jxpz%2BFmMt%2BNdq4GKWNzDPZug3u179t4x6v8b9ywyQ25DxMpgr8mSIlxSeUmBMIQfvDvgCkMaB0sFMC0zmPv%2BZ09zWIJYsIA%2BochY%2B9TEQAhal3N0Ea99VUPres2%2FPWw7Ax0s3SPkSLKojspze4A6INX%2Fqxu1zt3R36K%2FsdzhxkixKWxBJxSj3fGUc1hIe%2BlTp0PaDYHetS6LTThR%2BvzQ2nUaotvcI0anaFJwzNyh42iYH8SETyZOIDYzl4Uz8HFw%2FhEkMx0qtzOznds3Uwzpdh%2FJmCfWNbaaouWbdsWwL4zraYCtwJYnydMpIwz8GTxAY6pgGBkeaQgrEOjrenGEpgV2yHpy2kEsgRHdytx9%2BYF2mWpc%2B6WNczeu2rsDp%2FwjiwqXOziV3u8hZuBkdTM2DBJ3bcVaLp0o6yo2SpoSOxlrFJSDY3MvXTAf2rdzXMcII39qaBeIoVc0tdDAN4A1Lrnf4eGQY%2F5u7%2BzngBLF4zxJqZUHRJ0IvzjXY1d1Ped%2FeHl21lmIgjjNq0pZh62NRsF2Qd6v78uaaV&X-Amz-Signature=cafb9ea354bcfc2134a421ba0f2cf8d7250fbd8cee78685f4bf8fe18c12926ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR4C3CYV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFiM2JyLRmBt9tk2bF%2FYuveQdXI%2F3T0gEfIb0kYTazkCAiB3iLJCn0YcmTF%2FnuGnpnpFykWaTCK2zeIYu48KP%2Bk8%2Bir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMonYDGhRYt1UuExoAKtwDCdXN1Ga%2FBrKN5h1CmuUA3MtmuD4ksC8Q0%2Fe35qIprB1laR4TJpXh5TOTmzSfngebNRU8LZLeAPqvP5q6XwWfdOMFqOoipR6Vb%2FQuyocaryxSRH2idm5jvNTaUdOqsm1cNqP6Dt2zkUHB9qj%2FBPvn9uYqsJl4dtCOhhHJ%2FWT%2BAFUBJRHuEwZNfw0zHP2mIUQ6btWo80fXnZaq2xRDnnJOnyzm7qzBkvtIYABQwOimr2BBg5wiKLnzhKFgT%2Bp0KoELtIpCZmhXGEPXPz8bslq8Tv9ege8G32eRQMjmBlbh9mKDR9c1PI%2FLkxdp3OIFv%2BAA%2B1Jxpz%2BFmMt%2BNdq4GKWNzDPZug3u179t4x6v8b9ywyQ25DxMpgr8mSIlxSeUmBMIQfvDvgCkMaB0sFMC0zmPv%2BZ09zWIJYsIA%2BochY%2B9TEQAhal3N0Ea99VUPres2%2FPWw7Ax0s3SPkSLKojspze4A6INX%2Fqxu1zt3R36K%2FsdzhxkixKWxBJxSj3fGUc1hIe%2BlTp0PaDYHetS6LTThR%2BvzQ2nUaotvcI0anaFJwzNyh42iYH8SETyZOIDYzl4Uz8HFw%2FhEkMx0qtzOznds3Uwzpdh%2FJmCfWNbaaouWbdsWwL4zraYCtwJYnydMpIwz8GTxAY6pgGBkeaQgrEOjrenGEpgV2yHpy2kEsgRHdytx9%2BYF2mWpc%2B6WNczeu2rsDp%2FwjiwqXOziV3u8hZuBkdTM2DBJ3bcVaLp0o6yo2SpoSOxlrFJSDY3MvXTAf2rdzXMcII39qaBeIoVc0tdDAN4A1Lrnf4eGQY%2F5u7%2BzngBLF4zxJqZUHRJ0IvzjXY1d1Ped%2FeHl21lmIgjjNq0pZh62NRsF2Qd6v78uaaV&X-Amz-Signature=6b98846ba02b9db2dc02fcd086ab1c23566c8d88768499bf5dac865d97163629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
