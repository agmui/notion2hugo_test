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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=836069392fc01eb111503520426369809fe117c42b0cf84a659f64b00712c15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=25cdef397ad543d658c41d616bc66257dad866277f73ede60faf6aae8bffa136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=f7a75104bc1697e951af4b96434c7b328219f5a967009ca2923e7b87244c324e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=38e81b1b69228312230827dd9b4683c3d5d79cfe9fd4026770940fa5ae550323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=3deb5c9fcf8c2d4fb697e147dcd11c9f772f72871d259c5ef37d6040a5f589b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=53103a487c5d8e20890ff46209dcc858031d65798a66852e9eb34d6d27170081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=ab6254ccce9c9e42380a07da88fd25ed1cc55eea304f3072173aef70431026b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=77ed8c046685ba8e5d6bcdd2dc2a8a2187f1799b1d2157dc5923e7147f5bcb22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=12ea0da5ed85646bbe5b9f541e6c1a73e0d635a8b44c92dc1bf5935e5fda7590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=33f22e43691c37564d93f3b065d9515987d3489fa9beaa124f4c35d865de81f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=6caf55b43ec0d8f46f41cf00d0d227f5d21a5acd3bf2a944193734602591d15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=26445f1e21a6c1e40d0fe0e3a33c13c5400c71b4060d1e6df6950f030098016f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU6YMZK%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBD94PRFnpLg4psGuB6nJ2yutsKtf6scYSZzGaYqi9hLAiEA5c0TKVX%2Bet%2Biwz9Y9Xh9w5CI99AjTmc9%2FK0m%2BmRslS8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPe7BeQJvkktrBRZCrcAzO98qdOF7buMNiThBpaKG5uz2un2YZCwJuNYL2KLp47aV%2BQyltEa2lS9faCLXLpX0M%2FQevgkFYaA3nfGPwTeNsqnXAP0zlWQHGPJKry1tLTKB2k49YKQo0PeXIamb0HpXQqfMjLeybn%2BQY9vBitp3ly2369mTcglmkVaNqv1JM8Ay7a22QkmLj7UOd%2FhJDYqC1EtXQ95NN3WzQ4Q2WIY%2B0u3pq0AWRBqKOLFkJIbC3ktf4ehTnF4RALrNJxF%2B8XjBElFalCtjxC0G7QcqViyJGvvp9puu%2F0JleZddS0xYtmIVkyxra5jO1t8fQg%2Bs9hS1Lrhkrja0%2F4imOU54MMb4UzyeC1HG1bS7PkvsuZ9oTRYfIYcwMpUUlN1dBWOx289J7JAr%2BbbSGtjRG0HDQOSi2eiftIm%2Fp72ce115HgQmaRfOJTjoeIdmAUq%2Fu0Zndeyl8Kr2wzOckL%2BRVxsT3DfGc89HkL9wBDU6LubrLSV%2BwQeohGGSJzXNcroPXRniZLRDJQxHtegt0lUTlvFY75DiTtfBwUROecoegbPYgNUhJC1PsoYJlRXh3kpq7fNUES2PWyRLC%2Fl9fi64v5DWvy9k3tQJO%2FFE6UazBGocSkOZDj35W82ukj6lRwUgPvMJ%2Fprc0GOqUBdxIpJYrXEYcy1%2B38nF6M0lYemin0PYiIqNg11b0SIJU3g53X%2FdN7SJxXst5LkW%2FKB7P1Y0OO6lJoMIMQojlUq4CaJxebIhMBLXzTubxJjszzc0R0V8qiARIxESO5vAHGXSglfopWts7OONkWdPR7bkqoJKchk9TuqZYC5YEG855JBvb%2Bibia4XzQzeCXI4ctymKFYbWKIbuc56jlk77Y56pdtFkE&X-Amz-Signature=b51d08186ec6339629d34b0762a8cbc7a6d4d59c8de399df5aad666c501fb941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
