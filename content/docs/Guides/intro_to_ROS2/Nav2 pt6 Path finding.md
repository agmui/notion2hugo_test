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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=1a87d458e16af557bb1b1ed03e51290e4bb39ddc90d5bf939196563569162a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=c7184c59d81ae98410fb5f7563a49a5cf25ecc669e46e02dd33e1235af91340e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=c379da0efa4d94b387aad5e2f0d33518ee08e7e4d678f73ab0367108ac3352da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=2bfa552b4884b4501fca05297009b436c97d15b8734a06cebe8dfd09c677c7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=769b33aaa9d1e9876b2dd258331c2bf600a5c385c658a0604b84ffe704f0e43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=dbc08126fb5771ec7ccae26c52c864c6d080fef530948c8c22222fd0799013af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=eb50908df7a3ba6bae4e44854a77c7934f0968f3aefce6df375ff766b90b885f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=99a23ce588b906a93c2d4b559133966c4f199185578f7c4d361986bfd02872b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=ed23bc52a5e820297df9f817fdb5832ace154674a38f4195e986fdebf9e3b430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=c4c77d8aa8f2347884cf7baf8561c6ad255b0325883f2f5273e5d3e5d3dc637f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=576788d499fd83c05b6faa97498f958bb92394910f24818102c6f5ca5a3e2315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=87b89b1a55842b3b5a9db2636483d86cea1644093983d18abbab5fd96bd94d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPJLJJ5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICIdpJWSAF%2FXD1Guac4OyohQh9s7Xakks3Rlu2YKy2AEAiBx65R92Fueg7VJe8%2FJEe7mArGjHAOxYC92HbRCksxkfyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocdx6VgDFWoyJM6dKtwD4fgibnYRspPpENWz58uuKDzbbAxGNHP0GKjMVMJf1dvk9E996RJv6U8sSFsfnWeydRCMQ6asPGghaZhC%2FkjQQALQsZgxZMh8CCfD1AifkpNHI6Ub5D10k9XSJB2fUOEvIdiNXxlXas%2BBkullidevQdN%2B9vxh8XjLsfS82WMazrC3hvc%2BsJ53iv5JfXOTttseKq0Zd9lPyvnAyLzqIbWl3d%2BgTm911GUD%2Fr5MMQYkSQohTTx7KBvwnHIpw0wf0VbRub22jrfDGcAWm6WW%2FNcj2UISEsjPGNjTcXwbiKPf33TX%2FiSWOrqEqTo9sHmJ4I%2FJ1w2M%2B6kmH3v3orM94wu2TfT5XqvxsWehTt7Znl92dWhysk8uwn9ZBBUvtrj5jYHFk%2BTO0POVGs%2BxWGq8by3xJNGRjsn6EPWIgRaopv3nDnJTqb3DLAQGUNKBn6OpBPsKj0nCK9f4Ypk8k6NFnPOsiIfTHuKxHA0okhJn2VDjhO8J3QLJLvCA5cozevy7srOS85DvptIjcWWCQiv0nhyfIhID46HxUTJTGAzYwlrzCDUopIVVe3JDecc9URzwJ8rBqYlbSbht5AJcBsjnWuXXEOm4VZTlpH2bqRP4bZ7W45jQKrR%2BMbPBASTx0NgwwNfi0QY6pgHTCxI2eNwaDOWwk%2FbjPHdPTZCRiwspCgsln0mdusm9ilHvVGgWWlZvtRjN0ka%2FbWaM5acbzIUX1Wp%2B4XmXr7nvixvkvKhF47yOwLA0Y1pJUxt3sxxTCbZ%2Buj9bcoehroN7aeLRwRdNqrM8LE04uxxAYFYq7YkuI%2FQlv%2B1rdL5aDZarNnU8kiAiuFm%2BOKxay%2FTYHvCI%2Fm5xzGFOpyAy8SC%2Bo8dsZCUD&X-Amz-Signature=4a1e4c8ea0d6ce866676fa830d8f9a320549f51b9998e2622e97b6555f6855b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
