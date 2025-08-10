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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=def5258d1a9a932cf056a9428a0685744e763a27689d4c78f222aed645278460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=ac224a3c60b3ae9c9da36580f9eff34402b42539c97901f12bd439e8917496ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=0cc1258dc3750b87b91dc02dc0d2167bd8f5ff1ad50339fed631f04ce9b52ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=e7cbe163323b46745524287560bdcdfdb36a859588b8f57e984862c915fa4429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=45e49653875bb6744a7d93a19a347cdf344d0ddd468209455726b2a4f3c589c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=2a4a662f5e716792bbc3f4f8cff8e6dd19de6a6eec71ed1ea571537d2d6bfd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=d878565d3ce19062fd147475c33844bf7cfc669c2db9a486e260121b695d12eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=3ad3f9c7ebe00b4d4aca358ea4247a6740751309efdcc350c86a0935bf715367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=13e75d568b1595fe5e2458951ecf919f831b61a0336f1507393269f114c0e548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=e11cca6dcc47fa8e521b9d0c422a744aeb6aa38c55169dc29a229cda6cdef363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=3e8dd48f8af630c782bfd0e0e927752cba380b9dcf817f62211971a236b27475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=dd7da06e15cc2ceca282e96f05ff6fbf80798b30b2f18fbffd4dbfc8483acff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHOW534%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcpaDSZPz6Jro6qEd5yThuS1PZkqG%2FpM0jnPeN%2BKgCQIhAP4xWoLCP7akjYJ6d7Sz2VWzwOBGvLQapjzNsj5KyxFdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXJuv%2BbfGx%2FRzOyqAq3AP%2BckGwQTBnosZZZxI7pe8b5lBH%2FFGK2xHyq64CQVmbDGPN7gYJ9ip2EJpO2%2BTl9rRXKMInEjDwQFVpHy%2B%2FD%2BuqNG0I%2FdCX%2F3cR0LxVPM0J1PhTOr8bytYRe8xURyPrf4VoyWDGH2zMzPBuqWRIzdwSUwhHXZ1sZhGR1ygX4kdTQa9BCf0p2hpLk1xVp5Ds2xrxF6Zbul0uSIJezJc8%2BqCL8LxngM%2FPl3ylt4nJsyFR7TjoyP4%2F4TQRfLohnNSam97taLECCZrSrxd3B9u%2FwgOXyMEUx7wQfhcO1B2SHgcRZEPzqaP8gHAx4NHGFqmWouq8GSyB3yHTqr6pnVGj9BsH96rabl%2FBm16KJ1BjWGLJtuDrr6yyQXfW0d7RyltOvoGIcm%2ByXWqFU32hPFzM85vufuDj8Q9I4ZSxfrP7W%2FJr3ZrgwfYCpFRh3DyGmKAds2ALE54sG6oyPk6ZT1I3sMgucxX1OSEbodxXcjv4yCpbTQxizONwON%2BF9LEMPoUoEcjeN8VZAOsQ9Ee4zb3DMfR5hKtMkYGcvzKKLdSmazvUksgKBhwpynun9o7ur5yNx275kSJ4TxTstwh3whqLYyPDhhLAlD3F9yofuwhggpNEWaH9uiDMMQMpmcnxojCeuuPEBjqkASRGTyUhcqfm15eF%2Fno1NsoBvO%2B1S5FZP62zhbF0mHuYSWIL%2Bs1JWRRNSGuREjDQVnisHljrtykLgIs1h6Z%2F7raLLkWzMWHLt5oBgDHAK7T23cvksmAgfW7cymI4Jz4j86bYpRC4dC%2F2KwS8Cm5C7iMxJzzVVkYTA4DXkiWxeXbptgLTfdXmeNTEL6zncxBWeksA7Qk7uneKzL6QcDGW7AE%2B%2F6sO&X-Amz-Signature=26e367aea8c94d75a4b2940936605a4f970c8faa1cd61545dfb220b8e071f20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
