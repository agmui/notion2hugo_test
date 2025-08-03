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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=43b945131bb65b5a500aba32635cdb6d15ea09ead53fda3691777474bb09a08d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=84fa18ed94959c5eb2fe7bd2b361ad165c2f9f4c2cd2b6d2ce93b5628925c1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=c7fa94e81eabd81e1d92dcaf3a875d8a4cfeaae962db128161f5c5dd6e9b38ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=755b7f722f3ef88d605935e581baacd4f5605ac93a511f62fb683497d0017dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=bbaedfa55c77017faec8ccf0abc373d2962f3320532d10410c6303e12840e1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=4e9a0f6ebe023800e5a5277b873709072a1468ccf5daa74ebf115377bbcf2910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=bb46097e21bcfc05e8d85182cd76c82d47b0ed9be8662d92255e5ca12d03692e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=b14c18a480d5711c9d3dd8218618886b90b1da2729c5b63f616892d30e80ddaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=0879704027af83ef2b032b3609a39c61b93809ffbc707a4223102bffa62ace0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=66b5f05dfccf7e820c9d4bbbfbaa6407df819bac0599f0fb413ca0a508dd5640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=8b45df4a4d8c89b6f8935da65f0e83df23d951e01d2a8fdd9549070cd6a04162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=af037b742acda4c5eeba49873fbb5f4a4dff87187c9c30fdbe8747656b1ee719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D44LFGR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrvn25OjKU1O9Ci%2FRQP%2FW%2FN6mT3fUwBvwUN2iha8uLDwIhAOIxuPvN7o4D%2F5Ah8fK1eAKB2WEZ2%2BQOp55eozIC1sA9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzS6RQNLgbcjT%2BkZOQq3APhSufHc%2BHXCV0B1nt7G8mQOEUVA7aeMQULUzWMp85r76qH2b3MPPpP1wC8VbJNaq4JAIzAbDP5HHtmCmeovjLNeACe2LmjlP0hqticoLxLbE9Ua9Qh%2Bi%2BqgcaCZEfZkCzD%2FlcD4UQo4f2Kj0U1OSqUG1%2FRr5E%2FUOg4yQBekLaVXsUjEkqHxu8vQ8D7fmXfgxCwXut15eOK4hzNdQFjU3ZyzHXe%2BTmQDjL1AhX6ByQdvYSTQaanEyuRu8QxG2XdrtR4T1wo1XbaE4QrjPEuW7AXFF73nPRMdPercDBOR9g%2FpUsSUPC%2BTlg7bCU5BqDidt0AEgTvMs7%2FkJP5d49ffvcwgomK3H0TpQzYK4XYkzoBwP6Cm1jxvF0NtPK46XaS4ztok9QOUKeMD12ovpirL9h36RJqXNxMvEvK%2FZ8B9Zbkp5mZQWLOV2NIhvfP65Q6Bqj1DlLRX1wofOSNrWHWpY5uBIFJ4C6lDRO88erxEDpYlc0o9SWou02ejt%2FNVHu%2FaXGGDCJ1%2B6n4HdWyVSkMoltbl003t5wG5XBvW7XXwWanH64qZ1VPI7GQ7srRLkE0BB6zkaVax0SUmGrUqdsznBEH1yI1wFrd57nbGclt9oEvmPGG0R%2Bp8MCU8kDJRzDSq77EBjqkAancL%2BYb9gQ9r6V5SlKumrHrP%2FDEEiP%2FoXoyaHcB2zt54SFRdTnZykn9rtebqO988w4Hvx3nGRe2JseCQOhI%2FDC%2Fea4aihI8VFAM5z4tn1zzk3SbPX0JS%2B8zs4p5g0FNbq82d2EaXY6z%2FsZW37ZllomzL6A43JoewYCpDqLKxst7VsWBy3UGja3NaaHJeObQgO4MXjcFZ64ih%2Fmr9jdaUCisO5VO&X-Amz-Signature=c5ba96b58549267e9b166759df829197e64c5bb6afc16383c4bf91364ae97477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
