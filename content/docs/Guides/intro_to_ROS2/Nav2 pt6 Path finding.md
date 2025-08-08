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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=73aa046154b78e7601869af47898b3b1d81b8bd9681fba2e86531ce4d4b53c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=8e24dedbe8ea9ee4672936f6a6bfa535d4c5230a0e124567a0dadcfc298f3b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=f8a1ef5aba6a2cd83b799b629c3280ce5bef08e178168fe712e79f70ded336cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=5aff7b04855d3481773a892e6e90867a1c3214dda49134233d12ad6fd7cbafe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=4df44cb0db5db52d1e8a46fa89a4235a4f9d48a5e206f2e30c66324b1096ae9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=8f29d9079c954ecd4c554737fc81d3764a0d7c85f9f5278dbb1aed213cc1a075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=9b618abf594f68ca46fd754e164c88dcf172293e5d02a8e5a4dce71826e38682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=f01f1392f03e4529a2c11c289c49290086f13c55dc1bee46384ec0010b889c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=52b72f17997fe3a4903ca1a5da49114fbb39ee4782f414c7565f0b18af988ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=f930c766129e3dfdd139a1bb8122c2c2ec75d0a82243184a9449b357cbb57c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=faa720ede421d23a3ce499816696c642c885f4bd4275c28b90404db51e9e72af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=2166c5422fa286960992b658ab179718ff8233fab20fe82e651c71affbe78d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRDSJPR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEstHFBYGiHIb8fuNob3Jkut3KB3KntGD%2FJnIg%2BbsUSnAiEAyKXjNd8wqV4I3yuvY2CQTuwvF0E8QnzutWpM%2Bv4jRF4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQDONc1XPHDbKNEqSrcAyh005XA7Ov10nXO4kKLunwyN6lQfzlDJnjz43GZkViMMVWkbleSJnfK3w8m4XOOVGXdpygjdJUHKyr7j2A1OjWVCFQ20ZRLDR1lOJntPcWBmzJ1Whn3jqK5xd82nHJDLXepiO5QHA1LuHgTkJhW6oUPfEO7dDCAgYPV1I%2Bm4VA8z2aQKDZ2n9kgd4l9ElQmwHgtmFFd%2B7jWh%2F2fnH1uxQyXrlreMJenmuXunt4YAYxdU%2Bn7vpWbswTi2oCVW9BOnaHGSu6XI%2Fnias9MnHtHdokNGOsFZOBL70ztHq4wz0VEydZYHszK9gfShgLOx%2B4Y06dqLST6ytOduCA4UT5HF8VQP4h46j9YIgi35NVDmaeUKpOube1TX6yrc5FrLfWH4gAfCK3eSSoq0QyNY1YTLvo%2FzCLW7PaAiTOr23ai93fQtHNBOlX5t0Bh4b%2B6mn1ISdV6H9egI5NE6VH0UZUTpXWX6ZQBYsilOuLCBrisv7A0RbkkizoPwyZQbxyN%2FjavzPmoJl4Qn45OoHcfrBrUa9LQY8awo4aTUcPCu6f9w2c9mNuOuAmCa6JoFRmXasdhO%2Fuosci0eQ8TQqMuH6mmWxJ%2BphHt%2FpX8Bbny41EN8y6ttiC%2BLnrOUNamIbwlMPGu1cQGOqUBtgELTkY5opF70lJL8RjZTJUyPHhvOC4aNID1AyuBUg83P0sjeuwKIrjY1T15iGBZn4j6BpDeepbNokgIscwWaz0Yg%2BjSlqWxEJKOrEkVHj84pfZp4f6gvdYvUOjubbdKBJ%2Fnt%2Bm71PPe%2FUVT6bGdwt1FdV5BiL%2F%2B%2Bvp4RsbLvULmf2sbWeyOAkyT%2Fz5MShb0ISOM9RRrIn7CqxQe4sVHImCO9eFH&X-Amz-Signature=3a1d6f5081efd414924c3dffd44a92fa2949ad6110ee4358adf91fdf1ce5fada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
