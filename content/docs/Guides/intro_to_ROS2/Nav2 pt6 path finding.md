---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKGVG3S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIE3AJIklTd9DPhArTPQqxC8aWcq8l9OILW76BHdZxRulAiBAy4FkLj08bkZIsfpYDjDT%2FCcPlQ67%2BWWBsPxX4R8QHyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMQKCCNRrfDxNkL4I1KtwDi1zM6zeQ0cor5dRbPSatu%2BtwkI3c%2BzGx73%2FtMevjawQdm8yDcufyavwmt9T3u1%2FtYPmcuyBVueu7D5lOg2He5jBNc1IPSEoZbxXARp%2FR2hmh6vbB2mxLPSrC65dZpKbvtn79VVjg5SR46DXovMfRjkjU3eN7n6FpQgw8LI0kyUzcBlzXilkqbwLYdI34k8vu3HfV8w4BXqYWehrFnxyaV49c%2BIioQO45jYI1Df2XGHolNzWtIE8sUcktLFwnzZZ4R1NKCZVXjzO4C99adwiQLeZZauLZbQecfdPbXFodlAwiL4y8oj81XN36iabGrs98RBx19WS%2FwbmcKBqfActnx6OSN13tHpYaoe6lNPtmIV2JBRKPpRokH6juDinGgMq7PvdI7ldbpX3plehfWSAT8QRYLNrDcAjO1iGlCHz11f32oGJZ3GQjjNNZiJBYadyYqU2mpAAfr%2BA7%2F3gCCww4tDbS7fzvJmTOx7CahjAB2eAOvgM1cfQ7b5ngIZbEcoegT59bi021sQFwwDSo3TPMOi58pfenAXWVKmg078G8uuJGlL%2FVfUzdCGtRw8mquNY3P6Ht5rDGZCD5ac3Oh6zjVT6JefbxtLnYAcr3gDgTKUdnYtbAAYdt3kKva2EwnLyRxAY6pgGWBugpaJMqzLvDj45WvJFaUVnVCT5wSBbK9A6%2FSkOtA61jv3VDiUBN%2BIuIWj4EjlZz5pdksabvEInC2RmcIMwa8rrfWP1bFsSOYggC8CMHf7RA4c4ZWvIzZaxplYIiF7l%2FlIB%2BMrTDIXslgsz9d2cVhis2XW0OhPuyRO%2B8eZgLFOPZghaCPf%2FClq54WcGpnv37eETg2OF5tWlE%2BYyF4Et2oqB1MzjY&X-Amz-Signature=ec928be92e6a2ee3fcd8009020616b0fa9c48bcb79fc3da63501aee4ca0d1027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKGVG3S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIE3AJIklTd9DPhArTPQqxC8aWcq8l9OILW76BHdZxRulAiBAy4FkLj08bkZIsfpYDjDT%2FCcPlQ67%2BWWBsPxX4R8QHyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMQKCCNRrfDxNkL4I1KtwDi1zM6zeQ0cor5dRbPSatu%2BtwkI3c%2BzGx73%2FtMevjawQdm8yDcufyavwmt9T3u1%2FtYPmcuyBVueu7D5lOg2He5jBNc1IPSEoZbxXARp%2FR2hmh6vbB2mxLPSrC65dZpKbvtn79VVjg5SR46DXovMfRjkjU3eN7n6FpQgw8LI0kyUzcBlzXilkqbwLYdI34k8vu3HfV8w4BXqYWehrFnxyaV49c%2BIioQO45jYI1Df2XGHolNzWtIE8sUcktLFwnzZZ4R1NKCZVXjzO4C99adwiQLeZZauLZbQecfdPbXFodlAwiL4y8oj81XN36iabGrs98RBx19WS%2FwbmcKBqfActnx6OSN13tHpYaoe6lNPtmIV2JBRKPpRokH6juDinGgMq7PvdI7ldbpX3plehfWSAT8QRYLNrDcAjO1iGlCHz11f32oGJZ3GQjjNNZiJBYadyYqU2mpAAfr%2BA7%2F3gCCww4tDbS7fzvJmTOx7CahjAB2eAOvgM1cfQ7b5ngIZbEcoegT59bi021sQFwwDSo3TPMOi58pfenAXWVKmg078G8uuJGlL%2FVfUzdCGtRw8mquNY3P6Ht5rDGZCD5ac3Oh6zjVT6JefbxtLnYAcr3gDgTKUdnYtbAAYdt3kKva2EwnLyRxAY6pgGWBugpaJMqzLvDj45WvJFaUVnVCT5wSBbK9A6%2FSkOtA61jv3VDiUBN%2BIuIWj4EjlZz5pdksabvEInC2RmcIMwa8rrfWP1bFsSOYggC8CMHf7RA4c4ZWvIzZaxplYIiF7l%2FlIB%2BMrTDIXslgsz9d2cVhis2XW0OhPuyRO%2B8eZgLFOPZghaCPf%2FClq54WcGpnv37eETg2OF5tWlE%2BYyF4Et2oqB1MzjY&X-Amz-Signature=af9a3a831d838d0b58f43ac6c2f388ce41d4615aabc3826c4216696e96cc416f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKGVG3S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIE3AJIklTd9DPhArTPQqxC8aWcq8l9OILW76BHdZxRulAiBAy4FkLj08bkZIsfpYDjDT%2FCcPlQ67%2BWWBsPxX4R8QHyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMQKCCNRrfDxNkL4I1KtwDi1zM6zeQ0cor5dRbPSatu%2BtwkI3c%2BzGx73%2FtMevjawQdm8yDcufyavwmt9T3u1%2FtYPmcuyBVueu7D5lOg2He5jBNc1IPSEoZbxXARp%2FR2hmh6vbB2mxLPSrC65dZpKbvtn79VVjg5SR46DXovMfRjkjU3eN7n6FpQgw8LI0kyUzcBlzXilkqbwLYdI34k8vu3HfV8w4BXqYWehrFnxyaV49c%2BIioQO45jYI1Df2XGHolNzWtIE8sUcktLFwnzZZ4R1NKCZVXjzO4C99adwiQLeZZauLZbQecfdPbXFodlAwiL4y8oj81XN36iabGrs98RBx19WS%2FwbmcKBqfActnx6OSN13tHpYaoe6lNPtmIV2JBRKPpRokH6juDinGgMq7PvdI7ldbpX3plehfWSAT8QRYLNrDcAjO1iGlCHz11f32oGJZ3GQjjNNZiJBYadyYqU2mpAAfr%2BA7%2F3gCCww4tDbS7fzvJmTOx7CahjAB2eAOvgM1cfQ7b5ngIZbEcoegT59bi021sQFwwDSo3TPMOi58pfenAXWVKmg078G8uuJGlL%2FVfUzdCGtRw8mquNY3P6Ht5rDGZCD5ac3Oh6zjVT6JefbxtLnYAcr3gDgTKUdnYtbAAYdt3kKva2EwnLyRxAY6pgGWBugpaJMqzLvDj45WvJFaUVnVCT5wSBbK9A6%2FSkOtA61jv3VDiUBN%2BIuIWj4EjlZz5pdksabvEInC2RmcIMwa8rrfWP1bFsSOYggC8CMHf7RA4c4ZWvIzZaxplYIiF7l%2FlIB%2BMrTDIXslgsz9d2cVhis2XW0OhPuyRO%2B8eZgLFOPZghaCPf%2FClq54WcGpnv37eETg2OF5tWlE%2BYyF4Et2oqB1MzjY&X-Amz-Signature=5a097863035cb32d65c90f74654556c9afeff0708cdba804ccd09a636ec50d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKGVG3S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIE3AJIklTd9DPhArTPQqxC8aWcq8l9OILW76BHdZxRulAiBAy4FkLj08bkZIsfpYDjDT%2FCcPlQ67%2BWWBsPxX4R8QHyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMQKCCNRrfDxNkL4I1KtwDi1zM6zeQ0cor5dRbPSatu%2BtwkI3c%2BzGx73%2FtMevjawQdm8yDcufyavwmt9T3u1%2FtYPmcuyBVueu7D5lOg2He5jBNc1IPSEoZbxXARp%2FR2hmh6vbB2mxLPSrC65dZpKbvtn79VVjg5SR46DXovMfRjkjU3eN7n6FpQgw8LI0kyUzcBlzXilkqbwLYdI34k8vu3HfV8w4BXqYWehrFnxyaV49c%2BIioQO45jYI1Df2XGHolNzWtIE8sUcktLFwnzZZ4R1NKCZVXjzO4C99adwiQLeZZauLZbQecfdPbXFodlAwiL4y8oj81XN36iabGrs98RBx19WS%2FwbmcKBqfActnx6OSN13tHpYaoe6lNPtmIV2JBRKPpRokH6juDinGgMq7PvdI7ldbpX3plehfWSAT8QRYLNrDcAjO1iGlCHz11f32oGJZ3GQjjNNZiJBYadyYqU2mpAAfr%2BA7%2F3gCCww4tDbS7fzvJmTOx7CahjAB2eAOvgM1cfQ7b5ngIZbEcoegT59bi021sQFwwDSo3TPMOi58pfenAXWVKmg078G8uuJGlL%2FVfUzdCGtRw8mquNY3P6Ht5rDGZCD5ac3Oh6zjVT6JefbxtLnYAcr3gDgTKUdnYtbAAYdt3kKva2EwnLyRxAY6pgGWBugpaJMqzLvDj45WvJFaUVnVCT5wSBbK9A6%2FSkOtA61jv3VDiUBN%2BIuIWj4EjlZz5pdksabvEInC2RmcIMwa8rrfWP1bFsSOYggC8CMHf7RA4c4ZWvIzZaxplYIiF7l%2FlIB%2BMrTDIXslgsz9d2cVhis2XW0OhPuyRO%2B8eZgLFOPZghaCPf%2FClq54WcGpnv37eETg2OF5tWlE%2BYyF4Et2oqB1MzjY&X-Amz-Signature=2c2990bf879ecff5ba18fdccd440c84b7b4ebca360d0e2633261dcf7dd00bc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKGVG3S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIE3AJIklTd9DPhArTPQqxC8aWcq8l9OILW76BHdZxRulAiBAy4FkLj08bkZIsfpYDjDT%2FCcPlQ67%2BWWBsPxX4R8QHyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMQKCCNRrfDxNkL4I1KtwDi1zM6zeQ0cor5dRbPSatu%2BtwkI3c%2BzGx73%2FtMevjawQdm8yDcufyavwmt9T3u1%2FtYPmcuyBVueu7D5lOg2He5jBNc1IPSEoZbxXARp%2FR2hmh6vbB2mxLPSrC65dZpKbvtn79VVjg5SR46DXovMfRjkjU3eN7n6FpQgw8LI0kyUzcBlzXilkqbwLYdI34k8vu3HfV8w4BXqYWehrFnxyaV49c%2BIioQO45jYI1Df2XGHolNzWtIE8sUcktLFwnzZZ4R1NKCZVXjzO4C99adwiQLeZZauLZbQecfdPbXFodlAwiL4y8oj81XN36iabGrs98RBx19WS%2FwbmcKBqfActnx6OSN13tHpYaoe6lNPtmIV2JBRKPpRokH6juDinGgMq7PvdI7ldbpX3plehfWSAT8QRYLNrDcAjO1iGlCHz11f32oGJZ3GQjjNNZiJBYadyYqU2mpAAfr%2BA7%2F3gCCww4tDbS7fzvJmTOx7CahjAB2eAOvgM1cfQ7b5ngIZbEcoegT59bi021sQFwwDSo3TPMOi58pfenAXWVKmg078G8uuJGlL%2FVfUzdCGtRw8mquNY3P6Ht5rDGZCD5ac3Oh6zjVT6JefbxtLnYAcr3gDgTKUdnYtbAAYdt3kKva2EwnLyRxAY6pgGWBugpaJMqzLvDj45WvJFaUVnVCT5wSBbK9A6%2FSkOtA61jv3VDiUBN%2BIuIWj4EjlZz5pdksabvEInC2RmcIMwa8rrfWP1bFsSOYggC8CMHf7RA4c4ZWvIzZaxplYIiF7l%2FlIB%2BMrTDIXslgsz9d2cVhis2XW0OhPuyRO%2B8eZgLFOPZghaCPf%2FClq54WcGpnv37eETg2OF5tWlE%2BYyF4Et2oqB1MzjY&X-Amz-Signature=b89e0cde3e8a835c7b9b14232ac163ee95ce13b46eff61944ff4b82c7bf9e18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKGVG3S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIE3AJIklTd9DPhArTPQqxC8aWcq8l9OILW76BHdZxRulAiBAy4FkLj08bkZIsfpYDjDT%2FCcPlQ67%2BWWBsPxX4R8QHyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMQKCCNRrfDxNkL4I1KtwDi1zM6zeQ0cor5dRbPSatu%2BtwkI3c%2BzGx73%2FtMevjawQdm8yDcufyavwmt9T3u1%2FtYPmcuyBVueu7D5lOg2He5jBNc1IPSEoZbxXARp%2FR2hmh6vbB2mxLPSrC65dZpKbvtn79VVjg5SR46DXovMfRjkjU3eN7n6FpQgw8LI0kyUzcBlzXilkqbwLYdI34k8vu3HfV8w4BXqYWehrFnxyaV49c%2BIioQO45jYI1Df2XGHolNzWtIE8sUcktLFwnzZZ4R1NKCZVXjzO4C99adwiQLeZZauLZbQecfdPbXFodlAwiL4y8oj81XN36iabGrs98RBx19WS%2FwbmcKBqfActnx6OSN13tHpYaoe6lNPtmIV2JBRKPpRokH6juDinGgMq7PvdI7ldbpX3plehfWSAT8QRYLNrDcAjO1iGlCHz11f32oGJZ3GQjjNNZiJBYadyYqU2mpAAfr%2BA7%2F3gCCww4tDbS7fzvJmTOx7CahjAB2eAOvgM1cfQ7b5ngIZbEcoegT59bi021sQFwwDSo3TPMOi58pfenAXWVKmg078G8uuJGlL%2FVfUzdCGtRw8mquNY3P6Ht5rDGZCD5ac3Oh6zjVT6JefbxtLnYAcr3gDgTKUdnYtbAAYdt3kKva2EwnLyRxAY6pgGWBugpaJMqzLvDj45WvJFaUVnVCT5wSBbK9A6%2FSkOtA61jv3VDiUBN%2BIuIWj4EjlZz5pdksabvEInC2RmcIMwa8rrfWP1bFsSOYggC8CMHf7RA4c4ZWvIzZaxplYIiF7l%2FlIB%2BMrTDIXslgsz9d2cVhis2XW0OhPuyRO%2B8eZgLFOPZghaCPf%2FClq54WcGpnv37eETg2OF5tWlE%2BYyF4Et2oqB1MzjY&X-Amz-Signature=b060c58150b59930578980bded36338285cce40781f0bf7ad7190084056197ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
