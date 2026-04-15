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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=0e8c6c3ad0a33f0e8c34170b12b0a7b46a9ac9777512e4dd073b90348929932c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=41003bbaec1b0708b23f104233ff156efbb71fab6fee300c6054ac50530fdab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=244d893cfa59342bb2a56d02166b7355860cbc65cf8790239e3df5713ff93a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=dd4bfe038f5a4d7da34e071b1cc86039715ca5c8fc3ef2bed3b8c0335d29d428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=98cf2c9daf4c0d4a591d8394bf27251e7ba8b500cfcf1af99be71ea8ac71b3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=1e90b4ce0c31c325feacba49fc00a39f3d36a471c59ce541d716c047052d0c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=889108a183cbcc371d2a5a9605c29316113eca56d2c896616c6fd79603b96b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=0c750473c8e69149b4b23e31450a8f263eff1010d077a9693d358dbcc277f2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=776533d37a28921045548ce432fd0ca571f574a3f3e9a329413d2566d859d4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=ce33f416aa3215db357a129deb0de38d0cb9ef4ba4d5e6d4dc705a4f94047e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=9ad222e348e9379d998a62fa794da857f50d0e2529bc9079e904b852d0aec1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=7979d1875f8fb05f360ab397172c2aca7cfc3f46173ff7e63da716e9ea3a933e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEXEWIH5%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BDyhy%2BLr%2FTKjSF%2FNGTjP4l0PO2g8z2N3HaD1pMvu8TAiBff8Aw3MqIGtt%2F2cNu3ClgMLVzHTkJDIHd%2FlXalyvMWyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIfbnzEIWx6cBDFGhKtwDgUcRbceEMa8pwYeRdEoZ14tjkndNrBoMpzcOUbZ5mEg5Onqwm81%2FtOfLmvy03H%2FofE1BgO%2BqfTCcrn284xSqFr%2FRlqF7OM36Rv8DB0SlFgtGqQvbH%2FiArSvoC6BG93o4AJEBcLSx9aQ%2Fp4Btj4b7uqpj3%2FFeNnRP%2BLsjS4JouXV0Eyzp6vMF3B4Ppz19cCb7RQZbNWPHUpbaiLzI3%2FaPrOha5Kt47wmann9%2BohW%2BOvz8kbxFFhmUMoXKqgEada5yzbL1rU9YbcowOOHEUlRAz8YWsp5NRmikzhUFOe7SmECiv02fMr3RYYYQb2oHMVG6IVN2NkkJxuAH%2FnffHGtVZW2mAqfOo0uLuRdDUXpvEMYGvoM547Jw78trONIqJnaFg7dKfsOe%2Fwmwv3jh4ZxROx5tzncW3oI7jiML9c8eq3T6gkK8pF1dpbO3RsILpmOks8WbSAc0TcFTENxjTejskGKrqTvMRURkIQVOoTK0xDLSWOba%2Bj0UHHXC9rlWw1%2BRssHK2c2U%2BDg6RcVKPI8zOLXjED3AP8R75XY2NAdgaJ7%2FW8%2BdFObfG3KzMdP5BbF3Dgd9J1pipiVvCXQaTOzd%2FA7MoAvGmhKUsve4ifPXzSMQT82UyMU11WsHqQ4w2uL7zgY6pgEA1ievUUxeeqMd7aZbmU8JnIrgod45o%2Bv9ZJ5f%2BYZOPjYLuQQqOC4LCdkJkMLDWUmxtqR9ISX1gHGhC0S3QOcPEqVlMoBO5CYSDvht6yKB1XN0VRBgbYhfjljiCOFmwDP1wM41nBnyFqeAl397IAqBr1dCHDHCgPJl85OcMqsqy3crt4V400IbBqcvM1YjyyQp1g6p6UfYyPYtxbUOKJk2f9EIxinE&X-Amz-Signature=55164b52b74cc884e325253e279117ba73c8fc83e77d023977783776f50e78c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
