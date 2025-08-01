---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=a71ba33ecd0b7a5a287b418ff5d6d9decf3998fc3a8e4296971b9695a18852a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=7077b1ec7368a4243329ec6276199df6d6a95d2b605410343213fca1765f6bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=55125f9c0f4634f098a8e83fd869b433c0880a83b1130e6b7dc3290cacad378c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=aed025e7cd1a44844f51686cd28bd6209904f73be53c7fc5aa34fcf0ddad6381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=cb3f862c236cc7052c6b71fb2ee38d4af82fd419233094b473ae7d5bfa624544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=b2644dcbb9bdc2a3597bf4d993f735089f747e90e6ddd0f0f85a2547f21465a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=d4fb600f8c07641dc1542b68a69b67110d29bca47648a055b651dc557dffeba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=ddfb67d543490d039bdd39cf3db0f268ba78d0a5a2fa893a9921a9f1c3e2827a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=37ddd58413bbbdc7f590b87c068f4f9059f1ee8d8e8ee71a7393d3b08dc2a779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=01195dbd58c4a3919a0ccd14ab9de1abcd9e40c40c10d9834f6d9ad4d1110929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=4b347538b5883429b567f713a9d5114a140849cf7a2f092da4804abebce92d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=8585ed95eed165db2f6effdc26fa46f35bd89cf63c4a00da1b943a57f73564a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWZV4RB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuV3Igt4EAS0MQaRVoKImBd5iLiTaEKRgwOkJxCLM4YAiEAhKpkfYB4JYi3zcItkCQXkU5P4RBnMPnZgpJQHSrLrCMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk1GXrnBfAyxR2IMircA5ZEGc%2BaCUmov3EpU8nkZjBKKSICI53Jol9oXRs%2BsZUghS9klrI8LJRbKMjt5K2Tm5U%2FjP1Oxx5CaNbUWT0cB2b0CWMutiWbUzJdx%2FF9iQElDCAGAleMdS8IoWMjszk7e82lBAm2E0qhS2zCH%2BFvSAGGZC5mFLE%2FM1UXs5Y7nZPrOO%2FiXt9RAajOrC%2FDrDcF5l3KDSMGBGo8TM7Jx1RHWlaCNRXfyasTL16q4SQUGrQxNRstJEdEl3hOGEy1VSB%2BEAaYcMnzARLUzAz0ap%2FrnM4zedWZ1sKQNPAj7IYz9ig%2BsP1gIAPj%2FtS7m1A8bBRlxlho6qgSAhHE4LjNLOAczplvf%2BVyTb2Ox44arOZDccaXGg06ZZlopt1WUxKfeF5Cm7DjxseqW6GLQGd3fN%2ByV8QCjcdvmJW0dPPhysZ0SqpMb5ivLdZ6DGWWg1xgN1%2FeMXCh7IoiigMwaAeR%2Bs0ee%2BeEOawIUv8vFcTzknwh9dOoMmdN1FAKFyRkuHY%2BLoZb804AvOqA30XQ23zOOJsf%2FbWYIMTWxAI2JKYrDT%2FKUe%2Bm7D9QMcuNLW1kdJTPKqsDPvICUP1jTR6btE7e510YCFWOMr8I5JIAo50dm18kilTwBu01Q2gaImLNRZYoMNH0sMQGOqUBjqiGTiHjfEn3aCjxpu4aHk%2BE%2FL%2Fk1dQajUQq8Y0gReNFArNT%2BoUQYe8iNqxXCc7A%2BY4fOnXAI94tq0dprPUoWM1WEhuMJIWvG668a8jwNZNGQUCunsrcswpRVuN02JBVGWYUukAsOxHqtsZ0xML4TmUyhjwYOqf%2BSTNbcnzeDokKeEK8NzztrpRT0ZQrkqFTtbmbdQSc89R%2B14kpozL8wh0JeFJs&X-Amz-Signature=104e63cedfdcbb7da8aa84d57fdfeba8098738d001000a26d1e2c36a31eb3f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
