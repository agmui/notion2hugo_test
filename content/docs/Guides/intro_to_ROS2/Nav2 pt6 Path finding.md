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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=5ba68c8eac072abd338f5c2b121a295d1e6fa766525d0cc1ebeeb358796a2399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=a9c635d8a8444bb0d14efede48300b71fd785938ae770a8ac1133ea0ca884520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=f0e59c64328f7a6a8e844601ebfcb56e43d45d37586ca4af4803d370a9b498c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=574580a86dad37956b839499d19451693d9d0319248ca83ef0b4b6a01bf470d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=d91d1d53f723da57b3478dac2969374b1f9fb7a29e5e589239dd2989e434b6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=0d945d18a78eba2dd3a5df1b0a12e0978c43a9e2d2692e28c925ed6f6372b2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=0c462559bd10463f9cdb89c0a4030efcb82318e026041811d458ae88675aafc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=6cbfb56bdd0011cb3fef445573b9857dde5fdbede35cdf57eccfc055a5db2492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=e68dc09f28373da671ec8d69bf456af3fcd38d82f19b008767e616fd5ca5bcfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=3c0761e48a14adbd8fe43fedd9c9823c0f84a664e8e2b21f848102e63fc04b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=5a36fd05aafbc7d4628879d9540d5489cc57eaab9ec3887e2630e5df8f361072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=95c5a45420e86089d8a3d0e8597419c028785fba4a331fa042f0989cc31573f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XX3CJG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMlYW8aX9q%2Bv3KqnBhwi7k%2FIp5A0XDnAz03vDop99%2BmAiEA%2FZbVDYV0fD3bTFc0n%2FicabkEOhgC7yz%2Be%2F5UDWfe55cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVqzGnwYdVpaWXpkyrcA1V1N%2BCckEXBx7sJEuVEBIuuM9xlI%2B4OaD4OKBTn6foBbOD9BOxfzOnZn0bw67zMRkvcMH9VzjeWlDsrvpCe5esH0bel20bg0sBbM%2BC7gneUjsDLoO%2F4ppaPygpXJxIuHhm27%2B6sljEXurtfVy08mUp25TCUSFpyM98GRWJMZLTPKBsSAbkWgH6Arh8O%2F1f9ZT3jY%2Bma1zS2dsz%2FOhRahSzCqqeJWKEVwae5yEZOFRLmyUpzyglP4Ply%2Btf84lngiGZRQTQL67Ez0v7G990W7Mj316%2BA8ypAlZl7SSd0WsuWWpQTZOXSW%2FvijoaFfwoTWtj2zf03FDCxU3nNawIb4l9ylNFwhPKCPMmywOdy%2F6NNc2yv1RaBHm%2B79YiQI3co4rR79Dl3%2F4shmr5IhBk7myZcKEOTMZ7%2B3j0FoFFJSpO00gPDJn8uQLkYiiVCT1%2Bx9OM860K3sj0fo74temzdUbUOZrR2zTCYFF4J%2BpEe%2BC%2F%2BqENyCFspJwWLHMvFdUkfBYPPFpVEGH06ISCFcXJZ6uxexg6tctIgM8rYTXyt6KcKVP6MwuSCNnPf7FsPYc3MqiSkVP23OXPGbeHCsCysK5iaWCGT%2FoDI49RNrWgwYck64Idnq7f5H0iA0%2BtNMLii58QGOqUBKlhQLtbKZ8mFK1wemYG1rw4OqpIiU%2BdwFQ0zV1i5u0Qp5zni2IJjekGg7x%2BmqtN4CQAC7WQLMKNQOHWxPeniCf2ykxI5z4bzw75Ku%2BB%2Bd6PJqIIRxILcT4h%2B5PsoyFJl3MjgNIFaBkvfY9UTVmiofP%2FGsuKi2hxwzslzAKJa6okkcsPW1xXfF6%2F1uKnD4QJIX5AcAezZe2ib3qTJw1kaA6aipuaa&X-Amz-Signature=13ac56262fd01c2eb6255cb066996e738419418cd0659229b97f6f85fd184047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
