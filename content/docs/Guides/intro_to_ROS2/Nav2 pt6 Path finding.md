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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=6124c8309162848e22425c3c2754b999dbdcd09a5ad5b8221fc19ca50c44e45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=e5ef30824ff74122791d69a3744c9db65481e7db9c39fc2f9fd66b050c153324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=8e4aa38d87ce2edbd020ade6c54ba3c93e29cb2758f6e86676f81138ae7cc63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=edd2e57fb3784d5620403d0dcb83f9e09902ac0e1cd60cf1b182b94bb9ff696c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=589fe02f50f03ced068d5d015d9338da9533a64af7a1d790e8601f0add773bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=1ec41bd0059ec0e0a28ea7e87b66299d63d6a4dfc125e5e85bf55e10f7c8fda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=52dfd2eb80f006f400f72774ad81e2eb29b29cbf7beb2c1734cc2c979d59ad08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=5ea76e94843e33f6627bdec134213ed4ba106874f58ea0f119f4d6d38994b1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=a06faac8b6bc08c62ee72624a1a3785c70d68ad40a7ebece3951f672eb00e417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=b7e9f0d1866cc60cf5d85c2ddc8ec09f24f65e398a28e8b27a35f6379e553091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=d393b501c4188cd812f9466546b82d8f5890dc39d78573b51dc9a04585572779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=43a1f8d14a47a5537857a6ae83caaf3bf642f36712f3c825c61bb02c8b246869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOI376G%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoiPsvfvHuKNdrtycMJnnXe5gHiB3RFtDEqbZxho3F%2FAIgHaEwlMPSfewjaX9uBY%2B5Z86F9CcVzG4rJQWTDcZ9BHAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHlAe%2BzYLhM5I8hJ3ircAwKs7YJXC6%2FENFyVF3XIvNI4B%2BLo5lXq3YDpDre5ayk9%2Bo7qXDZ6L8JZWixId0NQComiekrrpk1vYh%2FnbR%2F0rKFgi9DrFKog1OROngXbaiNQ8qU1b2dCTldbaOAf%2BuA93eUAoWubCVRz601G60HErO2Y1bw3b5dLjATdU1GlU5ZF%2BMIAziFDCPojD9vrm0WXOoANlchmc3pMw4g1nlBjFVyDHYKJm%2FtdoUOmv4ff2Zp%2FrFUexYoq5pPB4KOiYIlHmlS%2BfM39Mb5w6GU3%2BR9LAsUMVoen%2FupAm0I7K1rOiCgcCPfs%2B2Jb%2BhJrgWoGgOflX9%2B8KmgcjXH1vlhnTkCx6pKBLSJffoHzQstWqm0tD24FmABDLXeybWc57iT2S5U9yk82FZIiYVVYPAbyfumyoFaxfBc%2B0b%2FAjgw8fw8ekklR0htmYwEi6QW%2BevZoxhUdRNnskwv7XuiDILQ8IyJz8RkQEWeZox59BTf1RtstBelhr5kL%2FjjoZuU7QkZgH4fFmPdvsDeSa2sDFVd6BJyIuNZCvdb20rn4AstHKgkZ0oBehX2Ip%2B9HjN82GCtm3zkZpncvFtOfedRPe4ABHhiQnnqo8pxiMyp84535vKSC3qGOxut0yQMmEIxytO7qMJmwmckGOqUBgYVNoBBz3rXN1cLQ9zPggtgtnGOh5I5DJVueBhDefBce3C5MaI6GOI21YbRXv5lWYz%2FzHOvZ2EPGfQ8zcTTWR5PaaH4wpyM14AkBvolc0eQGiAklcadPRJSQ1LYmRaifCDesrhiqyGzfnwJ885YlV5NIBVUQ%2FsvUOPEJpXMQS%2BNCwyHmmC%2Bhz0pNPT%2FAdibjzwEmisEZwxqNHwXH1VkO2eMSqbig&X-Amz-Signature=bb133805d36e29080e9de10fc3e911922fac43a6aaf0f1cc57690c0c7dba3a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
