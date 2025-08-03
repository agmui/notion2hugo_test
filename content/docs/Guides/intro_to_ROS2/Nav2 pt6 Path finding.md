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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=bb89c9093a45906c88b991c3fde11498d97ea747db640f41b27c43e37909ed36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=3c4ddee451a8e55f5825508558891ee84f1d877c09d239e95ab5a7d2790e63ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=b7a3368c7010f0da8433ef2d0782d6d038dad2db3e6da7795e95ce4faa024dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=cc2caf870c5cc2d972a7787026326c93ddd85baf01f7054d69c387e9df49d330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=6d627016a34fa6b88fe9a84dc211db2560eddea9e6b3b2c663e8a0c387d3d105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=d63621e487ad6919205e08e61f6db1a49e227348b840b07384d1f7b49ec34f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=f615caa7f5eecf99dcc901c2b2355d1302f6a956e2decded5b76dd30d03c4ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=9e57447ebfa036ee374dfd037cd41d43fc4d16b8b4c0d7bea7717605a64940f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=bee83f33749c04f94b3ac171eba4874bb96efd8acd7005a2c63dad522a556efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=d3a9c2bb6a01e88e800203ea064d87496fba610dac776d299d0e7270a8d49267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=b0e0b22002b19bafc8400bf7b3ddb53cda5d582e7bea9a25fe028794c0f24e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=7555d587ef070a1f2cdee55631cc6abfe94b75aeb4f553a2f7f80cf00280fa2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVXH6X3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2FX0KAgzYqgHuvQF%2BdIUQ9fjBATfmx91OB%2FbluEDzSgIhAL1bW8gPaLWITAU40ghbc801szigSjltGie2UPLe%2BP1CKv8DCC8QABoMNjM3NDIzMTgzODA1Igy18R%2B%2FTOfLuUIga9Mq3ANkvF3XW6MsxEQ5CUitIbZE%2F1p1OLLA0nWeakYn%2BUKvZZItDmqrtTLNLChrlNanXhh6SQGpkvup%2BXMAg15s14ectI7vwACJU%2B9VxESI1EGbXc5muk21ZIf%2BmWE4KjpwzPPZSdh5k2HDTXfbGYeEiCTFh7hbJu3DpEZRDy4WNaxaCEpyKUMAngTQv%2FdzigIL%2BsH3jTpzQgjxo2U1fqxiQxY1WTHJiJBAQzQb7d5csb%2BjXTTCeCiozuJ3z5Qg2AfYVzgsio%2FLGuELuiOyGznXIU5HVHLqDI%2BKhJUYyVPAAoYOnnHKoYuj00nZePu%2BNaWohB4wyJPk5%2B%2FvdHJ14QSxjotc3EniNmHmLFcyJP8T%2B0BB%2FudU8gy9CcoKN6CBRQc7cFvSgMwYtcDCfxXD5fzxzWkvF6JOR9hqAW0t3YzXFA9MQQPgz5rxzeKeur07nRLeBf7cv44UaQt3OrQI9H3QVeK5tiy8FI2CMFFlB56AtzA8XmRUl76mXiZ22PUajgoirn0h3zaqN4hqdERcAODGulVorMmDLOr5zh%2FHh71rd2suqnqgTwCPvy%2BhnfbuTHqTk%2B9e9%2Bmdr5afmsMM%2Fy%2FLKTVJYnkh4fYBm9BHLw1i%2BuYhEkMfWqiwxh9oTVaGaDDR0r3EBjqkARsyvuHZmGmvSV1b0o7kwU97J9mYL7DNEcbOZQRsOVnbTg7IkGDBgTORn5dfbVeX7YUh1aR8BUWiw7Ts6bG7FmQkvaHcYkV7LMJk55rMTMq6c%2F8aLcHa1gk4X5Fl1nPD9hXX46XVTH5i%2Fw8a2PhLuP0r8ksudiK%2BdGi3d0VAW%2Fq7joYa%2BS2FzHZPfkmDG4dt43EGZ3agt4Odejv0FVXicWqiRKCA&X-Amz-Signature=d04cab5f3966521d9afa1ce5f32f3a2760314e103eaab0852471394f00be589d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
