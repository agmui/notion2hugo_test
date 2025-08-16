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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=369dec1eaed8229138dd00be9a96c0241da13ec17aa4be3e6d215a2614a86cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=c55c013391fbbf728d848383f5c8209da4072b590dd770e1fe26bcd1e42386e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=c3f9f2d0cc2e929b6a1b29fe6130183f8084dc998fc2ca8bb6d308115ea74d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=375d1b15b8c67384a5e682a441c5aae03aabca4e6048c3e1cdd5508a9b124e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=c79882c6752d452acf8f775b02707f956d9ad135165e20158bb9d32bf02e7e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=979d55b8492e7c5fc97fe3133c88b1797395764ea85139de63f1b78ed4dd6ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=461602e6b1e05c7ada9dae21c0043743df102feb508402d52cbe11b50b0c63cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=85aaafd1c925bf3b2d5223442fef0c0482b45c1789231f4c5e3096d82e34a1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=a250a76667aa2d59e1cd94d07fd276609c678ea2c56837efada86bdeca57ea27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=9ca36fffb051b92cfab54fa6d9fd39ed77af28070f7e0258b6afeccd12c21ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=e6fe8ce209155481615eb4dc560c3cbc3f1525475159b796bce28e083e163ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=82dccf9d9dd30bbe1bdecde8600462cd4842e7025f37de7f26988a7f0d313026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5W4CVF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRbAub6UxgcxVozv6j4XXga%2FVIkFM%2Bxm05yE8yUfVE7QIgRr5xnnR9DuELk4SrZ8bcIzHQrNMOMDrxgzp0H6X5KtQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPW5hlp9DitPE5LXSircA7QwH6uLAHEJl%2FuPZ80hnuwWX0SdJwSxHYCbvFTtyhLZRZW4uNCvTLgp88Dw2PYLRxS%2FNRZmTeuF%2F99r4X32TNkk4zb%2FIUD%2B1UvlhGW1QLbPQg2pr74PQHwuYiHM%2FiuN6jS8oIBqzic70Vy9v3vf5d69wEAWwnO82n9gT85oJA7ucOgEQ9P2QtpXSUqZpwFwRFMsfyC%2FYO3ODtyWbbzJhb4IsebDb5FvBNXlv1Anj%2Bu4lkxUiA7NyAULNx0PIuyxk%2FAdnevT8SIXTi7fb6nDFq%2BPuUohKRTFDqdXiiPp6JMelRsDlD%2BbeKI%2FmbAkhKv3awKTIdCNM011tkGBJRi698CxHmRWqtLW0UanTyFQtxjdB%2Belf1%2Fm2hghTTVIwJd693BzS%2FZYYlmVKPkzGIQamwv4anPHjIlDcNfGOeOLm8reVbc%2BUTkKliBAlI%2FAUahb%2Bhd8OSHOQTOCHwww9wGZXmzOHMX38eN7DAJyk1b5pCpEQLfZYB7%2Bp%2B1m5NYSvvGD9KKr%2B6sJNL2XEp3aj0NGmnj8rzKB6bbx68a21oGCBY332fq%2B45iJ36UKXEej9ISMAB07veEWpMwb29llGw9a3asjrbGvS74fkcQXUNe%2BHzbQKi2tqHNwWJ7C6AhHMJeagsUGOqUBJEw1zC2v4dSKeIc7%2F7G39x8JToTGUq%2FVWQQy25ZJqMxMsdGIAym3017%2BVcV3sDsMaWYs%2FLwReGGfTV0bWM4xFtXhKUs0HFDUQdzlxrL1QmkvTMwKIIkIeG2EH9XrjDo2%2BmkSkK%2B6OuagDOp1St4ECy9VXQLqMLd4VuEhd1QT3P%2FWT2i7oix95S%2Fhx26ySYQ6gL8zB%2FGTV6mRhCHyCIFKbDLKwAgb&X-Amz-Signature=6ec6d1d47d291ea51ec289bda90ee2d3b7d842ace09720cef8e7f26c4ea601f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
