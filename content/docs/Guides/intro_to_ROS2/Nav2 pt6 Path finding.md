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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=cc16abf0866833448b588a015e269e18acb552e3d2d88d544f859c1d6f5565f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=7c19776c195b9084f2e16afbd460f9fed28756f4b3b71a60c0552ec27254a6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=5faca5ba2865ba19724a9d9fd3bd2223098c167619cf119d362a4c98719c704b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=f23cd4fd3008a4e0b2445b72a0b096ab1750d298f08830bb4e52e94250f6fb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=eebad8389476573e93fe1496d7eec0a1f24c17b3f443b09f6cae081d68549485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=1fabc88e784d7ae7ce8b5768d831acdd0eb013a290035abb06bc5dbceda50221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=81937f9b451cec9c2edc39dc8cdd543dded8516edc461a9c9643f450016b4430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=8b5ecd171d5a98a7f1a763a1033579fe855a4bd0652ee27db079e9dbbae83dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=0b005d4a79c3cfbd933e4bc0e0b496331ce9acf178bcbf49166c8de5f83cb5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=981aff5553d056b0aac3b852a0e43017b57fe162cd12e90afa1f8e33a89528f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=2b09b29251f34faaa25d5ce6bdb8aa9430d2f605e5bfc42fcb386772ccfbb3a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=896a0c2af8c3e9f273b2e11bb138bebd52da5a0e6a8e8e4afa02eb97a6b18403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC75WNM%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzqSHGjZM%2BrebNisWYhXGyZxaizBPPpt8uy6VUa4sbOQIhAIoybUCF3%2B5t8vqaxJAnEyg4jq3Z4zxLsfqzksVpp3YNKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2FXTv5alS9GlGTOkq3APImcksSfhGZpJNo7FpokPxHeJSfC8ZdLCPIHpdWDWZpzDaJBScCh%2FwNKOvzoWKkpl4MMFq2W36BbNROGbZn1vkDecmDudAxbdHBrY94%2B3BjP0zuzucaAAVpRHjKYpnAv1HfxfadsbPMqXjumrlmXCzrmv4w8naBaZOU0ts4KbGgBECqVD1yJoW3RqSWIPtzZHrhyhEnIw5P6Nu2Dg7TcAx5yb44p1HUaIyN86i6f%2Fd7Z4R4C7R3lJYhul2hlf8yL%2FpBHpOUo9BYWY8JGreuuYwBwwQNlmv8l20Ylm%2Bz4dZyMQ6GkcT2hBD4d80JA8ZrK6%2F4BtC%2FUUxEahoueddTtKKd4J45jkaXOtSyRUuWIi7dqvCLngbQmw644U%2BlhIGuZ%2FKCQd6CuzLUmf0g3SdQ%2BnGdF%2BLAnbIa7DAXR6KRqW8imTA%2FAKAyCqi2NPXW6d21Pq1Ou%2FdshMVBbFR3hqGlG9YyH6u176ygo83NomGh7vVTUgn90P4dc0OKZPWC%2FEord4IP1WGea%2F9XgJgy1BnDVQRkRoTN3%2BZWP8egtTwEiOYopB1iuk9BYR2jouPLgUP4R49ZlZqN1E2aG3tNIa5%2FDMtQPx3eu4%2BrQ8vJzIzRSlW3AH8%2FD6FFcP2jErweTDK6N7MBjqkAXdqxb1V%2F6qoDoPduVp%2FUxt5A2n7e9t11LddLGs18QPQOLJXthUaFIZbG8ksIBm1d%2FSkU95bDeBhRbtU5rmjOhiiSZIZt%2B2wZSYbvoIJrYwii3WzWZh0lTUIP5x5EmnBDe9Fd3xagrLF2rrXHA2vCRepUeaKVLN6WngL6t%2FXpax3m4DsDVPHDNdHbcj0uECneqoCzBxtNIuPRR5GoDeK3xKwq68r&X-Amz-Signature=39b6221d8a23dd3917a0089829955a585f1b427a391eee21c9679f15f80910d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
