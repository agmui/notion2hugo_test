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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=58dd744a1cc59328a807cae3172ee17069e60911a574f2f3dfe194e38b47067a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=4b318e165e31a6a405f324948fa03f5c5f0ba373d13f469b771d83e45a8a54c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=65f05e6780fa203379f9b76fa2aee8c79854abd9d08ec97c4eecb2278601ac25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=0757c62097d2e2def029c65c2ce4a9958d52b3aaafc916beec4dc8e3c11a884c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=3fd0e50cef7620cf21879980032f981b119fe507416c021b07e92e9152dc5972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=8375ae7fb101b913b45aa8412644b492e48cd91d9434bc8ac73b4adab3deba6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=558c85f34cb24ed7efbe5c58fbfe8ff1db1d38d17a729184b4df73a19112e6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=ef0c62e4acdd623b708f6f02d1e057caccb929226cf54702ecda4dcb0d809cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=0694d3a327fa5538fbdbd06ef4c221cf64e0d8ce05a5bc94fc1092bba3775413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=9d5bb1cb53681d92f814ed96e872eb2a1e3e286af2404015e3c5f65713dbf256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=ef622d40f36777ea19bb9104e6100e1db257918e2359ce970f33a9bdff330927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=a2618dfe000c9fec3dd890673e59b63176ba2e964295f927d003ded3361204c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJ5I36P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUiiX2daY4y1ecLqwJMjuYJXvwJJo7oYIILKojaH61QIgNz%2FL%2FxUrNUFIGmAkQ1yKpXpqQyIugzF68DcsmVz8LjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDTIpyhwvP0uz%2FwSNircAygjG3AUY52WYXX8QJ776%2FS2L1ywib8s2Wy0lyzx4T68AM%2B3fCWSUw%2FEoSKlOAnjMMTFSzI9uId%2BAodKbbDs7Toc4FXPXkHMdd7vvotEZVu%2B8l9qslEXiVPKsPggszxFZ3K5ZwhC4fsbnR%2BUaC3Tw7%2F%2BRY0st43Lm8XWT0HBqZ%2FYBkqW0h8q138kZEloCMKHq6ZDqfO5iQX1QGnS1Gl657bbaM4tVnn5kCagKI45Bk0bwCbsOgDop%2BPBgyyccX70HyDtSxTRnVqlG0ndf8zgc%2FpEdxXEoqAVEsOZAh74A7FRl%2B0neOYSz7XjZQLkxZ%2BBoNe3CIYCyZeQ32kQzUq9H6%2FO4OdV6HkOFTAl4xqKqOfqBRjtHSxlJU2fgyzxNOAWZkTircfDt8OYrl2TWrLCoH7sYRmyyaMdpV%2F0nQ3jNcARYQPgPrzMLwaw8cTop%2FcSFJin7%2FL34zgKrSAAo%2FhnAVDHKxL14akwsc%2Fne6186QacVhAh%2FpLLjGLu%2BsYrjFvPnk097RYrJ42ZOC2gcXNZ4mJzUPKsZ4%2B8ES9ySdk5OToy2WmILtbXm%2FfSBTNlZASMlM8Zb%2Bw032UOBJtsAk2t6qH8QqwrJQwGdZ6Zy4aZaILyKvtLh65p%2Flet5cu3MMPQ8MQGOqUBaoF4i5n%2FJsRp22dSS%2FtRVT9%2BEqxeuS4xB8yo0yY%2FenY2G4rnbsZ8PgpiWeb0l3dstz9avycplWsZCVvl0zECTSBYPzAm2xmjqyKHeorQ712CKXmx9Op2mRbgl%2FXjHiyFWoXwpERHZDLV0K%2FK50exJCjEx4cde%2Bc5yTFZDkhhynpBFVFFGzRnC0OGRzrtpS7Jd5ycJw%2BvYy1zOzTLHDh1pycLRkkn&X-Amz-Signature=0f2ad46e9a4827ecb9fafba1ea5b30a921869d6210552d3bb0f430e15d8eefd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
