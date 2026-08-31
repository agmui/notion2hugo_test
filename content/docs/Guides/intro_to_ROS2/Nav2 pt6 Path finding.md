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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=0d3b07f1c3b52c66f675a0e1e0c8412de75ee56763a1699860e390888db2f20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=918304c8d0c0638b1d216fea0cef13f8d28f522770b14d0e20643f1f7ba62703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=9b2cddf6dfd6d719b201cd4e61813df040c1236fc021f7475ea57cbd4b6ec009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=5f272071c96e1ba79ac942c58435374996e0ee40639c20c729a7f6e384039c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=8a7e4bb94ff012a9ab0e4b0037227efd77ea22a6c0a7521a7c3a1aff6ad514bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=2889876eddde65b9266edcff7d80607304d3993f14273f597b78622d859c8b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=f7a70cf6e6f0efe093eff7174701b7f42150795f13621b047e19224faee3684a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=74175c2df10b24026c574171869c33fe3f4d50cc2ca0a147c4de6c94faf58a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=ff2159b13fc52e0a0658fa585f98152502450da40e85b777cd066ed744308229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=ba2423561a7bfb2f9ec45bdc25f7058a2696cb2011417954d349c080d6902bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=918cc31fba0a761c6c737a4024e0a7899bbb7b5fbbfde67331342b33c5f4509f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=385ae7d2487dba4046c3d1504470c3dd6b26343f11308611c5649e1ebd726351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3YXHNR%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgvDok0yuifOa4UbhDdfJv0eGhyCcKxqQnltSq30%2B2ZAiAYINhp61naf5ffPhn69EKd4DDymtKlxRqwBEgwgKMKTiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxTiYUfmjXiD3mJKgKtwDq4lIfcPfiUh9ESRWe466%2FFqr0qnAVrGz7jhO7lFGKWhw3d%2BIWIWo8PU1dWTXOCTWnKTZeV5wB37%2BPzIYt2H9Xc0i86ysdPkQcjtEpLAjRsVBvPWxqq90I0IBMKmImZd%2Fm69cJ8ygLShqb%2BgHWZnfuMWl%2F72cWDe%2FZ0WBNurEVduqdB9H4VluZbQny%2Fk4Xo4FHHlxK%2BC23uz02GlnuYEKwq%2BqViPCFwFF0tfU47tBCpTqxaj9CAT0xi9fzemQEFCvu1HzG%2Fsxpa6DYtycJiMjZeSAgeMDJ6a3D7%2BwrboesgRg2dgqBAvtVgekkaB5W4o9l3Y1vAr4ySAhFskmZRlAnWjlciCKvC3xu0MgTRedENRVCjUVApWW6IIDYNoZxGJEH7hNVJZ5rkn1C8rBf4Ci8oeRQ9t2ZEoNS7mEl50LRTbD6HM%2Bcz1rPftYlsUmwb70jC3RKUtITWpNoWcat4Q6BWcyilyokzZ17svb0hZdXIQ7q6EZp%2FYwNE2SrbLGoKGXebX4mQ5%2BLvo4jS9O5QhZMBRP9KLHTfd8iZMMFBSeF%2FxwSmH6P13xH3nk1QpYPDzsaxsnPjdfQBhuDdxVVpuFZIFkwzc88g4%2BdSsvR2kDGgjsQhqrZNVNqWgJbfQw9t%2FT1AY6pgHJOSvyiRNaVEANy%2BqrNknxQWLlKifQzC4xjNHRn%2FOROG6egFIQp5aKyKLmlqVYI4QnVpICVDCNHfrBHAznWFp30T56JuB3dmWqe73k4vy%2BpdMdW%2F57YSodk3%2BKh4g7uVfwxLI7AHw2r0f7vFaBGp6qhFubv3rUEIj8ZmqsCMescShZjmqbOR%2B609XdCiH1MOzHjjQ0WOFp%2BiSw3yNg8JanBdyakREP&X-Amz-Signature=4a7bb9587c5fc2dde9522898cf3dad50217801e23c542efc668487be8112c73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
