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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=14f047cacf51a23fd43fd12d4447bcd549fac70dbec45e58886584f2dc8fd832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=80fd32234e24f2c96f40842af3b9668cda3b25e88af3cc7f01f25522e568cd67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=6c304d8baacc94fe34d2008ee629edced4e7f9868cb59d49385819f8f1fc5341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=89c80ffc36df45d9471a9e13cfe01e7469e51f5af160d7ba598fe51bc51f5a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=2e4e916f6a539191bd1900543e13c51bc19ef6410e61d8d92a13611d025670c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=f031bc67763084b4e8fa8246a962107da1f75dbea424d32e3e202f5d3c1ff113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=f706de02fd3742aca5527db5b8ba1bbbf5b4bfcbfb527aa5b91903e652487b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=47530962b23e1b7f8ab779593174e235e610597bbab88075ea754114aa079c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=1f75dbe99e5f55a34d3bf51b1dc7344abff4e3df7a2279ecd61a8f7985ba7b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=bcff53a4bb21687c481c2c441d157bc45d423b020bf46aab6087807f4adc05ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=730271c8652f552963a5faf60906bc0c075cd348a6ece6ebd377a3a36f3feda2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=570cd031b10a8337d6b008cc952d6d0facc6c39b5d35ece553ceae17782e5836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJDQKZQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Uc8wWUup5VPAI19lBNupcbSq3xke9bKwfhaz%2BJva1AiBADssT1dWMog92exzYakhGsrLz6DSJiT7jgiuwnwhD3Cr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM5VxxiERfjtfUBm7FKtwD6CvZcf56OWRzG%2BaOElEzwrDJ9G8TYrJZObvEM%2BYO3HUOPtBe8QRoD4h8i38RRDH6f%2Btl35PgGNQlpATchoqDGbaALgRm5AfVOhnkeqXEM9%2FwPBZLz9agsT3NXMgI3B6PLIcO16s0pKtwBSD597nfrb6ibRuMTQJTvdJAZ6NDiNhOjDh8H%2FdVwIhbfVv06VPDwWbBMX8pB5OmIo9NCSN%2BDd6Tkn12WOBpQuZ5a1zjgu2u80Lc2WsWz1GzGsr0fF%2FyDK0i4tfH%2BGRLEPH1wkNiwToeZEY1%2FFIXZ2aJ4X0my7%2B%2ByW%2BoOwFloSCUqYXqNmDuN0GJOver6wvkkmX%2FCDXxsJbbldgGfTdxZwzfzaDahITNEYPhyBT39vCAacPdwtu1WmxYiV%2BvrzR8dRQUXJ81QqgosdeKJ8paTzcdxB%2BKXf%2FGEscPqYIWAPvcRNz0TiRTyXViJ8mgvGc6SkCj58JCuNBJPmUugxtc7kQ89y3IJC6OCDfsQBBkjguczqLM2eJ0U0NO80wLbE%2F2n46adnNER6IFr2kzFHuyPf4FaSbesBaAruILif6ITuFcy9UljFS00hM8dJkhRxDzh%2BOS3UphlfUbhW36aU0fbwp7X1Da%2BAJK49UA71naVtXvA2owgIqgyAY6pgEzZvXLy3XdOuxWxCR7KHo6YzcowlQCoZYQdWiKFteiPZKdp4O5%2BApFID59jp3PSINt9RZ%2BUvb9cfUtAeuKOl0ApPBtOesHFV67zhxbgAksEOKZ8LaLgsabmDBW4y3%2FXHQBlY8jjhfa1YNZx%2Br2YrKAxKiXG58TOhR3KA%2FVuYy8xhn%2F7c6HJuMeVuvUUyz0SnWbw4LsSHGIHGgvWxZV%2Fjgsfo%2FCXUIX&X-Amz-Signature=637a8036e341f77cd47efc279380b27c6d000038a4b0fe0f4fff0a8ee88ba585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
