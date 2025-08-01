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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=7e0591471bc427ca4092340f47c94e7e564d626bd3b94dc51a654c494c3d05b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=79b95e67a0a02097bb867b8ab237242c19aef2c9369b18c5da94e56fb59a3f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=c2bff50aecf39f6a2fb1b0566fc169ee8239e6b0e08be0afe9edbe2bd76e93a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=d1ff62d6b87027d84042ef221fe45e0047db3fec3e0e431ebe822eb378d26a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=36ab5405245ea3807559ad64bd4b5f9929cccf694b3bf29dba1c4f9f8f39a8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=a08782812a80171d715d2a06e0033cbe70390eca0294b32cae3c9e992d45aa11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=4105e226839bebd1339a71fdb99e9058a6d8788322920da002c09b0c550dfc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=594b1752b906bca8b1dd322e81cfbd454ff85c5dae5cffbdbb3d0075d8dd2a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=a67f528a7eb34e8fd102bae5145e14cb214b2f103e988ae0421fe935b83981d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=ecfed83cd755a4f304b423735d681f84829b8526fb22f71725d51f34974e80e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=699a58507c6ceb4ba1806c9571b75d65c518d4ae7b3497502b496506145644d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=4b4550f71b8e2c3aa298d6bb4231111d796a192155db6f13cb1b75afd0b7f7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM7VKPS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzXXZVq4Ihn0CImdcK1eTklGOhNbMXptBj0O4O15BvLAIgV614XB4NQHVUlxSpVYRhLHZxZN3KYbtyUS2GdvIEB3IqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoqy42h%2Bd8KRPQe8yrcAwEJwYKLj3SBGAETONneD556p5YeyAIBNunaKibsdATeZGtpoT6lMgmWRxiKdXbp%2Bl7GCuOZENypxYQ3NqRTF354Wf9rAL8MBaHt0AKQ4ACjArLgQLJndQ8XbSqNSSbOjeHYBp9sH1eB6yaEF07xvWP283rhOHA3IZqDP9E6qnuorKzjmDXJ9MbsxY3SDpZHpkI8rlect4ST5DjPnYyEhJqS8s8yIjG4hFv5x4ZGX%2FEea0dvdYrH53sPb%2BWetFzXGw3R4FYivwZ77NmW2ciKeDFCV%2FBrwmk9dllcOomd2T5l7esNyRdd1roZOWeovQWOELt%2BwsZMKsmYcjtWNOVFK9R%2BxlnSugMhdvA9U3p77KPTQV0OMu%2FdVHGLL99ruwldhJQDX%2FJVI50nwP99GAyfWHDP%2Bx4PRq2Fmc4VFbWxnsOxPYIrqC6GNJo4H%2BhxRf9432I6avKDuy0lJlqx1SM%2FcXB44%2Fjh0Iq1hCUKAfuJPYnrqlbs1FIfqxRYEzCaQ5CuUwqP1Hkd7H8T2vZmYNHX6UljkG5J7BNRJw8O%2BZsqN8g0af9zAfdXIrtCZwhJQ55prepMfIqhUTvAptuOyDA27H5Xt1%2FyJbIy%2FJH%2BEaAAbVXyc5lfBViff3SdUFyjMOzVs8QGOqUBs7U0Me2cB%2BqnbcelmEIb9wh9Z9s6R6HZkKYFLIJxsXoslxvxYMdhWsOJnaCvOaKjiGLwWXzsfm%2B7X7ILacIiUNZk2Q%2BK95oBnpmJa%2F9I03LD0dnYBLoYy4Lbq%2FZBGc%2Ff2As1gHHv3KDsNzpg26TvSyj24ugnwacd6c8AOWtHpjgXHQmSAMM7hyvEM41KA%2FVaYrOh7Tsch7LmVXKrMJb%2FideX4HPA&X-Amz-Signature=99edcdad6b40490545e0e010ab6bd3dac37fb7e9539bd523ffde03b664df66f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
