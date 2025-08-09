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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=f34fbdfbb20235e98c48d1d134232764007d69793a9934f1d318f498b1d43365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=86a37d708d3d8fd51add207e0acce1e88fdcefe3476293e4386b1670e071105a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=a8592bea310975dcbc7c9eedc9142c5115bf1326eae0c1c3a0afbae2b530ea97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=1ff4d531ea53931687c8ede73a7dd9cca511e471523ef2201b5f0f3c7369b169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=c507963acbc03f158de4f68f8391af6013bec862ec78f637444f3c354da339f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=be1883c0cfef4a08a6827b706689fc38dd65bfb19ccee73af107828e13b0a3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=abe5894a88b63674312f5a815da23ee7002aba38d66f9770cd48d57e057483e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=9b8079816045b54717ff8f025d45aa5ca530d36d449f20bc4d03e8c11f7689a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=116e0ed6670a992e4be01ec8de74e071e7a8f6e399cfe27c3d7805d54612c9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=83b5901acd160269e2eac9cb9f3ad79341c51bb5986861772d3bd435835b44d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=e390010ee9ed64607e3741d56ed3c58445a1de9e540706d312d7c75f8b77adef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=397f473413c10df3e48059654b1e994094e6700918c46cda85acd52f5250e6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMRO2WG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxxiLcZylAIjFe1LRgl4MdWmHRodjL81ET1VsBNh71xwIgQwkmFdeR4zvvWGpZLbCZ7n6A4issWDKARfG9Cn%2BFdBQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY7JImfch%2BnP1JHrircA1U7b4%2FjczTdRDtxH9o0hEePmrdGEAHDxeYGprDqAb5fH39fvodOPT8vnCSr6IZLkIecBZNIFbguRm9hTtP24aLGxk8Jj0LVeaF8I9yTcZEsz5pQz28kHATO6%2B8EJXXj98kx6zkw4tJszV073TGUokZKMdgDl0LlDHJQbc%2BoLBa41d%2FqtZtT58oDbJ3Aumwqv2M2I90fpw3M0JUU%2BnFDHrvcxEPtVZ%2F3xeScW46fWtHfM1ctAGwGQ256j9VwlPo4owmgu11ym2Kbel9wUuw8evIwvXqPI33qORrRH%2B9yCoQgdDtpCHNRhP2VpoHNAzN0DJR7zWQDb9gFWyYBKNVqITKPQwZQ2A1ROGfzVw1e7YJDqhJk%2FwQ3NCKj0h%2BAqSZrsqWpmeJ3fG7r15RD8eTeZFa8Au2YbUiRIXI4KD4MDyXmbp2OwaIvc2TK9%2BHnXBkOY%2BYW3I%2B5vUmFwzHfQG16VA4ulxL0ZQUlao8Bfuyp95S9%2BQrU5sxyjW3UY%2BdpIZpd8iC1WYJg7XG%2Fa0%2FO6uDt%2BLBQzJFflznOqT0c1VtdlGESfTECEF1T53uCtSLgEGNCjgWRRDZKeUg9%2BX%2F6tNxmGhev5hlcBQUVrb1%2Fxh1Llqcq75zrizaOJJXEFJreMK7Q2sQGOqUB1PGzaqSDFeVLkRBip3ctl1fnp1Z%2BWoTejENuF%2Ft94m4VY%2FCbuyD%2Bp8%2BlbIycu47AmDYdE8eZBUbHCk6AvvGSZAjzjqHmnllpgx57VyN9PpoF0aN8tsSefOGo9FerpAYRk1kIR3fG%2F529zc26T0r0ZnLkGKQykpJyeXPF8quUn6PYY4Gl3tMWLpuHDDd0Ouo2sezD6YZhmj6QHI2jV1kUTUFVHUQU&X-Amz-Signature=ed759b9bdc325e5cd7af8058ca80ed40cdaa6eb02aea30738dde5c24c8368d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
