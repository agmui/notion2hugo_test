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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=7aaa8d46c8173977889eaed3d95d0224985001ef744390787ee40cfc0c18e178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=6b2a92bbd3fd0cee9d0e7674fafcde3f318d4d820cdc2fa7181805c1b2d45d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=009e86df0645ab601d41266afe3817812632043c6a86697cbf1c4518128f0b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=ca2e7e41db3356cf85039f2f57a61e7e12bd9e6a726f9e09a70bc43c23543817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=421862943479da292cd5bc2cc7c767694183c29e0834d3fa7143edd7e4a7f2d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=48b7967678bd1a949f3287a1e46350b193f42bf4969c1856eceba10083657a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=dd5a6c3f7407f494eeb8d552632d7182fbfac334f002ff6fb92346ed0e991fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=9ce2cd3e549605500362adc4720e98979477ea67667cccdbba78e5df566f9c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=d8c6dde026817039c8e96c8a55abd584674fcdd143ce0676618603b35f1c7c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=9e33e5436926f8d539b649e98069a04270a961c98cbc54fcb53a3212f648d930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=5f84fb54866255918c5b6ac74bc2576f60411645ea60663441bb30ed99bb68f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=093cf451c11e2b2da304156bb4800e1e1be90a7a406c9298e649b8c543f2417d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXU43FC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBw%2FsEd2eLWoAPrwNSblCtaIHTMcxc3STa5mZyg7AOOZAiEA5nd%2FdC8Gij2ElummQZD3N%2FEJJErAF62YJ6wmtq6VbCQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCiiBXUgrLPqKU%2FkCrcAzWuFetaQdGIYDrDSbUrhuvPsWkmuf4EV1IsjFkNyy7GU80fVgzeOAfYOF%2BQBCAKaNIswJs86AS0QubZta3WKcJCpQzmtLRUYTlI4xBzBgX0e9EkYcfxmcojyB%2BC8a6MtTilsXI%2BIpuHGKzHdvEqGqDlv2IshdKOepRKDLtv8B3%2F1fAY0A8CaLudlcKC2SJ2Au6aF9NAx5oFLIFJpvN%2F6BLbF9V8yd09H%2BK%2BLhs1gf2axxCtWDb9OG59tXSQZhDEwm2ALCuuYKQRv1N8fWyQlM6njHT9Cp7GIlvldNE80PM24p9bCJklknKH6iMHkqLCh8Rb1MVxB5QJoecrB0r9wq9Y0SZHZGDTzwNkqp3QWmzqU6SfRwvPNHk5XuAWvxrNS3gyW5ZKQcm6TthepEEjp%2FD6unjxX0ACWotb%2Bl6aZWrzshTYeXtMTCXUCQcOO3f1TZ%2Bac2Zv7Kpql8PxZZX6Obzj3GHi3k1euSmtB0Gz62MlxRf%2BCyAjNAxwbwUgfKs2pMpVyn3lmcYoq7DQVLCXKuIE2cyfQhmlulllXSYvBMASCqUZNIsDqqgEjOtvXBQ789Trq%2BuMCETFAatx1bEMsmZmB%2Fp23HrpQEChieSMIN2ziMaPyxpjEx3BQ4hWMJPD4skGOqUB0f73QWGDWFd10Afb8gTCQSlxs%2F%2BQQkHVHbptqOWa7L7coYNCv65UQmKOQZnOvGlR34SYbtwLcHv7V2iwa9PeQjjzY%2BIUTLsTJcOE9OXSd5qhIQeBZSb92WziMWD5VNt7qiDJCL4tAGqNUTeD6AkQvzjGuIHvQ6h8hvGs7eoOFo0nfe05AwhRNuLV5ndbyh%2FWIyyRzlCSgLjWr9frz3uL4ZXQINPQ&X-Amz-Signature=91340d80643db79a6e1429c33d772579a656b8b5ba3e2ff976a7ef3f65bd0c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
