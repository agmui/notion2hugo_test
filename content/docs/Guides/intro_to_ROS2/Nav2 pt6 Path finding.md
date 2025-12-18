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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=b3a7f74417f766ecf23069b5c72174c69fb7acb77a75b695affb529d689d2874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=3e47fa893ed0dfaa9029b46e9fb2f0b80412bdc9fb93620a07352f8a98e6f41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=4d031cbaf035fdf06aeed48607373306cdbc7b89737e137633ff2abb63084b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=04abf12e9ed324700d4f801128cbef40f9bdb9456d6ba71967f2adb44abd952a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=2acb61d03db052f4a027c170b1ce0b3ad8d3e99b9cda91921a21798c7b5be811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=6cd2e2b60d788614bf052c04f629623faf48fae2335adf76e93607701a5720c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=2cf3017e4fd5012a84f0ab958af0e6bdc22f7112a845d201c439de26b08e9a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=171cfdbbe4a1828eea5697c1bf87c3ab52e52113b04b33689cb257b29b0fa4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=836aee92865152f8f89845d83531e24b81f76e22ff6b7bfb51f54763d62efe75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=d973396a473be1196c36881e15c8c499d36fb6f1b55b4122b698afefafc539cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=94c23f4f6ab702b4778e6f5b68f6ff60e36f23ac8c117e090e58ce8cb0b3cb39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=357747c2d843933a9c83295c085fc02edd34575c6e575cbd1a8fee03fe01beb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJGCUD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMMvZ%2F0ZJ4h1NZRKA9TIojyrA59dCVei%2FoSYQ6M01wIhAJ1MkwatYtGB3baqmR8NCZ3xnivEgDFJ5StfArsW%2Fn8fKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymZWWOHkZpsziKi3Mq3AN9kOHjuvPvlirXfzSITpb1Bx2amc4KnJXTj1f%2BQikdFOY0Eu7BAQeTXzuxNqy6rdUfNTtSBQEqoilUrF%2BoG16v8kDA99M6AxNPImH4dH%2F769%2B%2FvM6xT8KOcxprJH8Ps3IdDAJbqNzMIR2oYP9wcpzcfYcYQIMKJVMGSgcT85sWoziJv8oBNG%2BEIs3cXdZR9DNZqCCUAS6Dhyk5aFLsVkQtQ%2BVVMPMOxRl9islw7fea6%2BMhR5V0oOza9IVd6JgeHFkC%2B9vybIsld3e%2B9VIdofRhtp7xEF%2Fk2gUiGm5tqwSAkoQANodYctoMaZs%2BVqgeJAGMSvhIs2JRkXA7NS1%2BR%2FdAo8%2Fqxmrfj9m97xDMjCPYKCswj2eTdgzVZ1ziQu434OGcpfuNew7M0iARtNJ0JvMtJkeAKjYjDDnTH%2FktcBzn3Glj3WiQE%2Fb4%2FOSaH8rHdMB7pUNjHDZdgSnBhsKJtXgcc6mVcdmWjSIBKB0hD0Z%2B5%2BRL77zC%2BgDd7LGOHcEDSbEuogb1ReqGyZnSnYrx9iJeCkyv8Q2Que%2BoGUg4rCK1S2O5Tft6ujkCnoBD5vHsL1AG9jiMANT8%2BTr83J9XBx8ty5HPd0w9QErM%2Bqb1jf1w1OmQVss09hHiOK3ZOjCkro3KBjqkAcpujxnyNS94UD5Zajcwd%2Bp1OcMyjyZsfK974BekluEzoefiUK7gy9roU7qp4TOx9iQxdteE%2Ffx9OMoBYcPto6qhHJpa%2BaR2cqJwniDgbX%2BsvRO%2BJzqCiEdPS6IODoldID2tUtQOVUfdckDYBqp%2B7%2B8BBwnYunL2IdZ%2B2kf8u083nPL3nEJNdggcT%2BuenWvUG%2Fiv3l1URWKIBfw%2Fm9WPWVWjQqoj&X-Amz-Signature=07b51580b69e75ccde5c4fb30c69f7d38be1861a37b3f6b9d9078d5a97cf03fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
