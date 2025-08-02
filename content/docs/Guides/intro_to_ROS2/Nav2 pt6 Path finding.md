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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=9e39026ba0ce947c149f3dc82ba5795bc49b60a10139728cce105e0fbaa36fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=59cfef47e66a1cb1d7ba9d5243f1a2b953b0f8114859659de4a89e202c876963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=ae5f2f949a8b13e8b51657e0e40c96a59b3c040b6bd665ee84ed2bb6b620d5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=f2fa0ec0fc9d1571fe42bf1a27499e4d5f942455cf4c87d92541b167ba39884d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=4d977df937fd8c57af72429d1b6bea67950744f1a38c8768749cf91b4cca1c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=9be17dae1204f81046276266cafd61c26446aa854d1a7b03b2289ea6224c1d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=c11edc885a7b85de322990eb446fa93c170eb1f4b557623f0130765ce8387524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=02ecc7ac3bb41efab80bb2794089bbb5f4e00276f4ae7b8290640c4df9da7866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=5b8cce89dbb179df33197b0260d83a21150b66783505f8ceab2f7a37e9f16b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=61e004ee8fede917f16cf429d10e4378b033fc6a0f193724ea31bb651c83d89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=b06cbbbe051a6b0d192265fa293d9624b8417c97bf2350a73973822ae4f98c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=a7ee929a44c3931cdb7636c730a7f72269e9f2cdf4e957dbaabb746480e4abc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2UGFM7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUsef%2BECJ03KjVILzLaDa5nY5tm1aTSo58B6D3JCNnAiAy3txmxktQnplWHe3jXrbaGPdNxiaQaZ8MXhsCgG3C6Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5if4WGJvfdlmR0yrKtwDyfn4jPUnb9Zw6mhe0HXUUrhuiJiqrPp72v%2FCzUgGAzRkOXUs6XIm71cSaRtdvKMiadmepmiYjGX50TTp3UjePGgYpUjOQTSHkDesM%2Fag69QH%2Bj71NtNczc8uvbr1WlDL4Ln%2F0LHYvOUcyPS8aeqdI5yqRhEZFGkjrGZRFyFMe9Lh6RZD58iVz8lK%2FSOE6f38NWF29O%2FESZE5H5x6CgTyLR701Z1iWIapCV2BZmd7GbvXbqk0inJ3H7alTNSYcg9wK60JvOOIbG3Vt3%2BF2XKwJR%2FP3kr%2FOSTIzH8C9lHnau8SUJ4cuL%2FuSvyC92Pk4Y82WSVHO%2FPIUnlNynnyn%2BaZjmYd9hnz15JT28G0hdD8slT3RravY7PE%2F1rOO9kVQVNluyF8H4JiH6FISLfURMAK8Bpt%2BS6hfP1umZRYMFjQR1cOlGIyyDOsGPB14rGmo12HKcz33r65RdJtBAQea1Rh%2BHfQbJOZ5aX8%2Byl%2FriQRnutNTm0wuhrmzA2n0YH%2Fn21Kkn517RwLGA%2FrMPhxDx8ktHEIZsSvWhg7pSS2WEt9oeDHtYGFPc%2BFhEefpM53%2B43aRH3pHRPAE994O2ueIEi3XlMl2VVDfx61UPw9I1xMJungqLdlhrfAHx1xvHgwrpK4xAY6pgHYpUMnJ70JoxhrVN4VHR5%2Byw%2FxkI7P0dHvNHjiJ69NNL%2BN4MZ4N5S1tkuHMqP4%2BzDHGaSrcyV429%2BGg2uYWcpZ0IsJKE9DPZIpbDz%2BygPLJbHg%2FZhijf8OREf3KzzSKRSoJ1ofg8VjU5kWdjNHr0n22GOpwNQU2x85TdUULdf638mR202PrUKKBVjj1%2BLrXzQKGG2jN%2FydlOGe0ZtzPlcLP8735NBV&X-Amz-Signature=827821fe86d511dd6cdc1cbbd5434861fe58c9083abf0da6b9529bc29e917e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
