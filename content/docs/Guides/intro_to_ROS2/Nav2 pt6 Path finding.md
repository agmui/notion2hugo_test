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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=c1bad93abb20276783f3051d01d2891757046bdc178b1f07e7877869b4c8fbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=032e7c5cfca1815f754c235821e30402d09cc067659b08538c8ce1b7955bfd37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=d9dcc7b2b8ea6e8f76797f04db2070e990007704f09900f5cb6d1502f3fafdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=25473d4f275ae36daa11dcde562cc5c49a384fb47df69996193335d37f76d912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=7dbdfaf95e7d4acc4b9189fb17f48dcf3fba27c94cbe0b1a58cad9b149f71774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=62d15c2786bb75fd87cfaaa48bee83d450a1ee4b564b8948a0f120ef5e5e334a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=0adb31d61e5da08db4259b7de49c1e063e5c42bb8c1e351e2203b06c8bd174b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=f0cbe6b522f133349196e86aa983d65c741c0a6372a06276a398c81d5725082b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=03acb25e6eb42fc9daefb84a760c65751e1fd24f1a89ccee61206187bc8abe76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=273ee18c93dd379886f93923de9a999de5a1da79ccd811d03ef2a5a4e3dbda7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=3c4b6730e20f9831c124ebc1a5784f51201ce1ea5758680a04ee18f64494bb8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=85c7fcca0e45a96822f439e2b7ab06be9f3bfca48a16204c68a81f95cce1e7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZ6P5U%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk3GG5cL6j5fhLvnF7ng3E%2BwqObNJ31eKfNM%2BJfwT4BAIhAJ1KgZsIHc0S6VER6A3MyxDmUR7xjidMvMGj7GkkZ16%2BKv8DCDMQABoMNjM3NDIzMTgzODA1Igxv62eZhVW%2BSqtBcGkq3AN7SqvQkpf5gwbXkozIvsF54rzGsa%2Bb78RmrlEmPfA0OJlP26nrtsXWbe%2F5IOv0Ks%2FU5vZZXtqxmJWh33KPDQcgRFqoUXANc1Vo1KbxXrYuOgItzvQpChdXOhQXSPi%2BTC0syFGaz0BROqHktwf%2Fwrj7yR5DqbXo63RHtG6jsyWBgvkfO8N8cCa7lWRHXCGHouH6oVJoHLD2qnQQnEng9WkoOFPhD2ZGIEZ1YSwh9IEAFEGXfpZAxS0dLi0KNb1ejrqxY86og%2BSsZ3YxtRq0LebEcIM47RiMWEvzUInqchqdQf%2F%2FdMO8Rt4hUGm7ij2%2BfnGMnBsFSG2J1JX34yf9stvYlnqC1VftH8lwoFS4aeH9b1IfIXLRefBH8t1DBZRsLHor9PCnSM%2Bw8gjxL7DOnnfFNYEdNbGyhv4VW9aTumjx8%2FDkROYmTFUmmQUP7riWGSjVIyiNLv96QmA%2Bf9MghWKD7LXxnVy8qQktX7yaCsUBblh9HwbNJ5CJbwx2Ls%2B4yHindEG%2F5CuOvsj2Twd5Xj9%2BtCSX9wAsCV1bk7%2Fh2MsJIr%2F7O7O15Xn2J8msoOYnz076C%2Bnghb1t2Cy6Njh%2FEhku8Dv91a1zUHaEmtznmwC4e6pzSe028lX%2BS3gxPTDhptXPBjqkAbbDPQIQ3LUlQ7CJNgeWSk%2B%2BKpATFjn2BotRD614sk8NxGsFlbcgmr2LtS%2BeVQDTA6esWEuOHy77GEUXwWFZaCFok48xiTVL5R%2BzDkC6jxfZq58fskrdxc%2FHhcfzwCvxvLK8PByDtUF4OKSTIhD6XjanNdsHkY%2FxKNMHv1r5iaBaAegL7Dd1zZmeOG2ZDf1d3XCnJ0hb1cNVVEca6mSmW4Lk00sW&X-Amz-Signature=06e35a6a95c19df34568d6851c2f77c4bcccfde2ba953df5d999c32441816774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
