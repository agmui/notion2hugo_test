---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=8ec9060d3483b7de59413bef45955f58bd4dad6f483c71c9bf1c150cee856e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=885f5c4f02ba78e1597d109c6b8687ce0c0423af8a46f1cc64c2831be88d1765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=74d0f0577b5a091968757970493c9f58e9019d4bfc322e5dafa92ce794977b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=cb9cf1a7f3598c12395b5339f94cb7968c31409c708e11a7c264a7c2cfca29fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=4095b874928af67d47a4c5b3d441cb18b11ff54f95dc5715acafe1ad911b1cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=9c041952691088991d5982a209d92bff5fb9e25b73e00762b26af2f2f8eb4f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=3cfd9622024fccae90d66b68fb1770d211259fc139d919b58d4e454ee6c05a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=e6bd1c310b90135189c0997f8074192545d1d4f5c527e009d9d30186c22c9139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=1f13667c54e1b0da6d7819a58a5916a4598d7547c8d230cca19143023e680c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=f8f5954b247061a8377fc45387058fdedf6237ff5327070d6e49170ef1a89acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=d20a623471c7d84c1cf3c09c61718235949c17f425028ffdf475ea18f5e56808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=0fad83c22a5e2f5b5387e23684ff132118466fe84fa2a68f9418f5c1a71289b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPOZQLS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqpf6AAQSqirAXWJY905%2F3exJW3W7ct7%2FaRbRcxsnV9AiEAmyDpmQgnBkOPdZvw3SEEOI3mOcira7FdqM4k566j2wMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwfo%2BsXsDd%2BeMuUzCrcA7EOfB8Jmmj6glafCapcp1rqlm9Rh08U7KyAsnLzlWG14YFiHnuSm977mNQ%2BLmJBnJNSH85Wmk4HojORtdLu1AmcqkPtmMi6w5phg1JKe8AuEWYs7UTTSuMIwH16NXjJf%2BC38U0Jf1L4J8xCLHpIJOWOy5vXEsaVXt0Q9MuIJEJ3Ro9Zki4U9ZH9EvbOWi3cw1ZTZ19hC1f5VvJ%2BgW2ZVB%2Fnt0qQXngtk8KqUHL5C9gnERaAFHdBtQxOT%2FlBY8YqB8ArWOPGAomsbYdUd%2BOYjcNSjbt5ZmFTFdXt7XL9sqEJnK813D1BilG6%2Fm%2B%2BhsYSPuSf2YHx3O8FO9JzVhzCiWH87VlDYRkVw8TWn36lwED%2Fxo6Vts9I44CCEMVGlLl3FQOUN8lYG8CxA645%2BXBbReCNCPpiqUx7Yj77bdBmJzUpRfvuI94pJ9vCGRjHSFTtrdz%2FgFV18oV1iaGx0QFd5Y8pWijEvlSfkp%2FaT%2B0PSLB9BPbYSw1T8QVXc8FhAMtWpW%2Be2tIqtTSReaN5IwlXrqnRVppMZEybczyj2WFp5hxtlBs2pFkHcsuTs3%2FjtJxT0S7TUDwyXM0CwHznswGdtxRljG%2BG7VAHsZh8pGiDifv%2F05ISIBLAhnUquw0iMJPBp8QGOqUBiYMFPLXoGFiQly%2F1P%2BN1JLgeifcTzLSSqx5c5UE343ol%2Fz7FjX1EaxmCahFkqLE91Mho4afr0jnRA6UFBYZ%2F02ldfL%2FKZzLB%2FSbUXmXgawzROWxGvySZokEaBtY%2Bc%2Fj49ORN0Un68OD2rgl%2F4MV%2B76As2bFO1IqBBO3uchPwBmZ0tcS807gXWAJmDgIUl7DWr6zyM9SpiYER%2FrEB9R%2Bskd%2FCc5RS&X-Amz-Signature=26694b0f9e191c96674528a66edbb0eef24563aa5054c64581145ee00bc61b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
