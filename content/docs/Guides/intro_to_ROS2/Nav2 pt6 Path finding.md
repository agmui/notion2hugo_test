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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=c247c1c878d76a6df51e72587bb8a98fb6c99fc7c8dd2e578b329a179c72654a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=186b12419a6e5a1c58b0d9ec3b45d9a5a2e2ab80bea8278693a83d01212c9567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=3160fca938c1099d974a73dea4b85fe294e7570136e5e45c6e57d6a9301b63c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=21eb3c5e1c9b39af2923ec6d89ebfbbf42a33d528dd935de5008a5d5146bbea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=f91bd32da089c64a0bc0a99e9578ac3cf7ff047eb77113ee191d4dcd958655b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=36357c0ef21d057829584de8e4d7120ae027d5f96afe718c53d17f8ace519943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=9ea60f4885bde10eaed42d44e75efa282e2afbcf6d6f6f7134ff13c2f4d33316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=3dd5535dfbff7e8c38c250f421749dc5a440f1cafc11d272bec6bf3f393bc782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=80015459f88dbcf94a107877690190038f74e55147dffe2897b26f47e22b90f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=7c74a13de0408624c4364eca9538e9c82d81e858fd385d1428c0e1aa0b10adbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=830bf01ba2efc8a6785d8cf6826eb733af58c956c8c18d486ea30d3b20cc00bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=8e5eca5bf94adb4caa069fdb3350d559a926b2bf6f8773432562ab715e7e0e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNMN7LI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQ%2FMTKToqFyunelsEZrFii%2BItJHsbpg%2B0n5VNXQN40QIgaEFAZXOyMqlaGdGZncFDsmCv4xnC845rGHlnKSPqVCMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFAmPdVDwSqg%2B1G22ircA%2BhKTTQpxMm7JsebftsJnEHM8%2BZdpPO70Hh5gN0naRlQyblxkMptweVjy8WYddnZJ2KFy1A%2BsgVdCQy9QV2dA04MxCPNdXdx3NQpSHhgTSOWxPSHtx8zK79dlFM66d8s01BISgBcAI4TdoDww4%2Fp4Qbm6uoGtzy%2BXRwRl58qvVokg9MFCmoil3HnsYzl%2BWnqDEiV6Y4DsfY6E96e0Qa4NwkZe56AfUEdVTgQfWa4%2BAXfWuIngaA9U9%2BkmM1htatWW2c%2BFCjRAXNuLzWwDdbjSvUOLQ8yxaZCIGxjZtUlaDAKRYw2pdzCY%2Bb2Bc43ZiOf60M8il9j%2FjpAgDdIf74aVnykTU3GLAbmPVNuC%2F2eOQ0rthqHQXOHeaMwxS7d16mYH43pyP3YwMh5jPiT1HCpzw3Kmjv31u6EVaPT53itvY1DQRkd7vTgl4gH5R0UGXxHz4PwjU22mmM8%2FkLWAABq8p0DUNdJITcKUJ6zMNb2yVBH8dbvzzQ0xbnIWXXRquEW12V%2Bno2bqOBgN2nxsVXEpT7QzAsIlQqwZbSC6nqS4iSrNL1a5uF5tKsrXlWyW52dend66sJ8poPwUcyr7IOjpQgKr3pOEwk%2FFfLlix5KbezKR6S3qy8y2XB1XD0GMI2J7M4GOqUBza%2FyBflO%2B7U9Vvr2j2FAWFXPL3u2aLGwY9%2FrnmjqE8V0qQyMQGWcLtCqH%2BkIQOLAztHlUWrS0PuhHH0djBMkp13j7mKEwvL0dtsisZWen8SjE1EXBumYCwxOebCTyIMrFQLJX75uQVSfdsifjTMwLdpFtHyZT2mLiKtgAb2R4Nu6uySRfSMEJtaOl94fNwNVjw26Xa2Rik5eeAeSfSvPMTwYjNqh&X-Amz-Signature=6e805aba9d6d49e51d86e218df1a68fbcccea190dbd7d44b5d8d404053f736e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
