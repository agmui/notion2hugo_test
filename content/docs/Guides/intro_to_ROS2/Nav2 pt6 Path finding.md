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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=5f60b33e3a9868f9acab3c1b6b44799cd6a100bb8564fe5b0404a9e3c97a3bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=0caa271ee5b454998b5de3989083b760433fd8b1393b94079b7fbaec9404ca34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=f1dbe3aef048e284438d8d3733c0fcf32fa28356f9428c6a87854af37e06b5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=e80d9b17960d8239e15fd8b8c5ffe1760b012e97cefc739b3140121428148f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=1063a069892a3c3fc6b2ae1ed487369b589a3b9ec2a64e1fb6661b30ec958780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=fde642de09124f52d495f23d265fd9b1bcf1ff5aeae389594de978ff3a37369b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=fd91349cfc12d8fba11e59b08d1040452eebaaa24eb75b8810ec5a2ad1c2904a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=c7712bec2aae5aeb8b800d178fa28aa69e081bfc86688cff7e72137f93a1fe72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=7b9ef1ec0b5083c9ebeb192fdf2b679a56a11071a43602ae5c7ec9d183395e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=8770476eb8b192bdfde4f896f4faf9d24ab9a46b9416b162e850f5c1ee766755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=f322c39808e8df8dcb83d1264ceaa3e8a16e02c4ac3fee975d0a6510dde8e776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=8aa10c6d6c0bc470229c6be817fc7888ebe456c31c89d32e63b80972c60d101e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WJPWCG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDcf8b%2Fwbh6KwBwUa8LxNIxplAroCpM95npzMoXOS2NPQIgOoZz4BMRREkjOQPJQZuuVgTXYAoW9a%2BGyMj6t38CCxwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjjrFHcQ9HwL6sqGSrcA7WQc2gmpqbI1BoL8YcecPuude6Y4ygA7duDcka2H3vdKB1b1BPNnVbM5IqV1qWxN85MkHeodkSs5PUknbOXrRq1DxdpxL5d1Oow%2BuVC00%2FkQFsinvbDSigPaF0KAP4dPiqa%2BzH72HNDM%2BUlp7WPtRoatC29o5mWKanjP0ezEe2oreUu6YER2Wcqtqz1D4occEo54AXqKjSRvc4%2BMN9D3zslbofdn0bt%2BIrQ2smipkrKPZV3ExD%2Bja0u8m3JwZhdgm1suXmSTj3NJ0tZKUaOZtvV2sEJhkJOK95xSY3E41HrxSfsRgCxxRAFDM%2FXq2LH337hBIGBKl4FwbQKhIjwYldKeZnATGd8cAuEr2kxB5nz9OqxHwehLP78ndjyD%2BT%2FKS4PNZSGFW%2BAQr4xzYWOf8HJpJEt7qs8sYILo9ahRvF1xDSEXoCw4uIvWH1Au5NFNIRveZURxAq8764KUTTm5ORJ%2BKugFWZk0%2FH15bWF0zDaI8gihyq8s09xu3Mbk%2BKYQeA58%2Bel%2BaefqbhEUEEgonaBibMLlZ0uXDDqP2hNJZs2jo4hWnbRMWiRlHnL4XOTTl6ykv3PIEa5Dx2qycihEoZHJv5wMqR1pFDCTP2LaQ5kiKgN1h%2F5cu6yYXXrMPDE28QGOqUBZLxsMNsRGUp0lsmUO%2BofNApYZoTEjNHlNgQEAaooDlQJmNsfLnpeuYFzOTooS5FNgaK0b6bMFRpHRaKL8mpP6rECUhKiKtBz3%2B5ieHkwX9aLuqgFkcs38M7qrqbD4AVsyig3zAsUfo1GwzuO5YBekRb%2Bdq3MMylP1TIAlpVJOiFcRR%2Br1TFtHYbqIITO5%2FZqA%2Bt64N%2FtwHYdLusfaDB3GID6mMbh&X-Amz-Signature=e7bfd0898eddff19925cf44d98d5d52b9a7c9a5d39f2aa03bcd07d98a5aca81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
