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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=df758438d6a8167f3116b225d97c74b21631fdec6ec81ff066bfcf1c6ebb281e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=5a043aa006901357df15555970842f23791458374e60dc579619810e6c1a8d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=7783159de4fc100b5a29147d2e60549f813dbf8ab6d67cce0a32f1166e172dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=1e9bb24035466b108fd1c4e54eee2f12aa81535f90ab4e63c9cf9f6f305098b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=201e371d6a94df43d531e70ea685bb250ff30d511dd9aa07562a8b9f52992b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=7f51c40b392dec9d1d68d4127b0f112d23ea886620b02b63356d4105e59f3a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=f798480d8769b406cc016d4673d71c69582a7fd01894dcd86dbcfae28aee649b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=3103885f70c5f7ba9318ad28fa8e5a36d1676ae20e3de451309e8f3bdb77c049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=b3c38d4860f1ab86255b4bb78e7842c33d31a37ae2444add87361a77e62d4830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=b3add9880058f8a28f2a394b8bd8accef9427ccb4a094cc7852f4f25e4e95a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=2aaf1d6c91984a69e48ff2c9d03d0ef506e1ca3e3278f11c75229766e4ae6834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=674ba0eab62a31ee3d8534669264239f2b7a9bde3553f8fc3714512f44978d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVUXAS2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDb2422nd2UHO5gzBsEbgltWj8evUemkufSDlDoQvdSdAiBDtGnObiJEg5%2F%2B0oaixLF2jmr05T1zFcAxu8RHIMFh8CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BabisDSV7cvqyzD%2BKtwD7P2e%2F6UzixnkMXEJeGUGUiFshCPt04IgAUqFcrnFJpKGwE%2FlbrQ5%2FiLb%2FVCi9FrymcNkq9jiNQfHEPZn2bb0EN0StaQGppq08RIHd7ta7Kw4DJaXvw1G9KGkK94RmwX23DIUhoLYBhCGUuKYzD34V0Meq3nTwAaQsizGwY7qDZUNOFsdnbrIm4BnNM6lAE%2F9kibYRoBcwlu0juGHbIx90dOMaaHkLxGtqXpX6gyfIL3OSDjHQs%2F12eEJH%2BdVZqsJ6gIVXBHAn8I%2Fj4mTxJCYnk0qIa3oXzYY5LNoDhfBnhG5M%2BnOdsDHqWILPK8yNxQ1RQUWg764b6aqrepHOeVTJj8VJRA2GDbA9hjXW%2Fy1uLA5bbJvUjuo59tDeGQrqLaiRsgBWuu6O1fIFF1%2FI6ct7xMJWDoV3P98ZkYVBkGa2X3dY5xVsUJjRXar%2BG%2FfKpnVAlWMhKSulNn4PPTG604S%2Fq3jcrSFHa5i84%2BnzLvrheTz1Hws324Nw1qehlHq65mnqS4bZjdt6QYSIkM2O64AEVT2bLbp1bddmgOqlAo8DTIKK6yATV3q%2FOM3mKfS9hIua5IAV4PbcGtx6JA86aPR2FAwkjevUe9rP9S5fmqJ1JYScx6xDgWJxKR%2F5Ykwn8qRxwY6pgE30jgwZJo%2FbfN1kDuyogLjzbr63kGegnCKpw7Q8%2BS4jG9%2FIj07G1WWxDEC4e9N0rsiblCH6QU2vHNJLqdRQuiVie8CQ%2BHyJB0XlF8ilVVXPT1ImEa%2FO6kHrdRSD7TxtE11uCI%2F2GBJ0jGl5lEKDBHyP5H7Ux%2Bc6cjuZdyDXCUX6jukpHDDrE4yTe3pKWzxwmJ71Y1uVkFqWlAU9JJYWzcLCiZ0prdG&X-Amz-Signature=14b19932ecb9b6eaa08074f883519faa5ef70c4869af240a006645cc8680df9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
