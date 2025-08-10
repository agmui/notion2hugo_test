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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=4dea81ff373f3350669fbd9f0105c251c091737390147d89ea9f64a6aaea705c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=8234f6607f0055a88fe5182e15670aa985694197f8fe3db16d42f6ee06b30c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=055221738947037c19e2d15fd597a5de529fc5bc25751b6ba959631197ece649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=453c9a1e4de36c943388e7ea7a37928df403d9bf6a14f7da1833f7ef51355c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=350507d7c02649e008a8982d697d88111f1a8d85df85bceb67e8ccf40980bc35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=22055e9ec42a679a48cb62290f00b745aabf46eb916b404598cb6abaf769abd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=be2880c6e842366bc2ccd527a6e9719a1d945f63e3c268b2aed6ede81845c188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=30c2534724cc0b74437a9d422a3776c3e1463cb60ba244a9bd867aff5fdbc8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=9c142fc8cefca3ad9dfeb08e75ab9ece0538e9dd733212038e3763dab00a40a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=111f8a85f541ddaeeaff645f082ffbc20f6b4575a7ba630116649e2327f9e663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=ac1ad1340e1119337567b18d2703e25ca41054b1007e7e9a5a38cc3370722a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=b02233c7226fe096d5ba13abea3047d4261dad794c0d902bee10f5bdb4b22e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOTC4AS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNyYRyxM52gF7OFMRhL8lgqhJd7VkhDThNwaLCpMP8lQIgWTHZ7IWSvb5EDq98gVHBIMHE5dFvDk6ZAGh%2FdeGfNMQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjN8Wew1qO3sCB7RCrcA6XE%2BiGX7jAkn6nkeWNbhsZbEh9gnYaScLbrw2nWN4qk29iV75Q3K%2Bi%2B9d6ocXbSnHAJZx6TucZyJ0wxe%2Ff5Co0mqoVcSWLQz7hRnfhzdsBaCwfDa%2B7OPhr4K52oMY%2B1VampVgU3pmvH7VSuvIiiC3s5miadKvRmHvJpWe1SQnSKJmNn6TZVTAqFxFXEIexjwpYKb6yFNGsTTgGwaVjfiDEGpWhHAnxJ5eoF%2B2q3Pdj4U%2FpXDblrEkbdP7wsr2w1m6pk6CISc7exirq70YjqxjkWaopnO8BwXi0V06K6o76AGM3M7WcVV3TgVdH4D1rkOwNG2d3rDv4fsGmq%2BIUfPMiR%2F%2BeistPS%2BHLpSuo%2F05gPNHKuLnQUsxjV5PZDfpUOhzLl1jWcf5vIlLf3x04fCFnXYalQF4ZJPjDyeegIBUO3v1fDJSBqewpn53W2lJoQzQhetK%2BDy%2BGJtE06sj0D6K2hoZdNKe1wrKR31AOmCJIQ%2FfS584EHRuSHmbaTd6gSt%2BItFBrg%2Bf5WgFRPfu6Jh5T21Q7XFnQbGyhc5sfFeUmEKn27LWGSrnNEL1JVyhc4eV%2B0nY0Ni4s5%2BVQwjbs4KE1uENfNYnOGKy2zJ6o1RqXP1Lc2Jg3egBsXMSwVMMW648QGOqUBBZWpWtHcsPBX%2Fgs41HYm3wa5xRYiV246lu9DIGyAEtT23%2F2G70xGFLrug6ssfEInOMabPFpjjnXy8W%2FTs9pyZOSyDwihhPTZMwVix59eOtL2MCwWJXfMgvKIuzBJ0xQVTXPKJGvwKQGqXScjJheyCLAZd3Oyfefo7ToPiD7cyhtyPVcha0bmJMa8iT3rFVcsV6Cevvc7XkGwkWkYizarLmVtRlwD&X-Amz-Signature=f96383f9f60c62db76326886b342100b731c54925ea58567bbafc69e9874840c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
