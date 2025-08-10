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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=c31deb1f70d66cb0dcf7a647987d1694e453b83cc6d259c5809d74699f87274c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=12bd51286634b249159e3aa08fd385ade9e328f9c8ef5d4d9132f62ac377aa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=46fb013b4814e4ffd86b973b0c99a403b04e7be3bfaefa9ab6b0b6134680f810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=c9f70c767570a13e228b1e09fb570e2c1e1f63e3120dcffed141cd973eb2588f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=5792bc45868ef7e0cc40da96b43347c4c8cc1088c285ad152d0ec30ede9db1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=f0ce1a27201438c15b33eeeaeff07bf929a3c7f4048774938dad9e5217812957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=7635c871c44195e2f1f02cb8bbc1f641ff79d2b1255c2b154d05604193541551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=efb9359c8f33e65e60fb1ace300d56caf117bdb2b4d0e24f763cf65b196e85c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=bebcce2ad7d3d92ddf214a59e9ff02fdb7c913180e613ada5e254e00750918cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=2bd32ff85323a06af1a5531e64ca78489256b52b605c2ddbc5e770c55b9b7404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=140a2ce3862866b051241876f4acf58f5e38dbbbe1154568838f5cfdbd6d44d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=c012e8ca6b8f4dfae51bcac19cc9d56d257793702e63ce068083d70d9d7d6efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALNZKAU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8goMtb1VdcJ04J5zSPwjYKnL%2FTc2j%2FyxMn6ip2m3oWAiBIMdZW4g1HNsq5hEHc31XPnnJ56gFmKCaz7c1q8L9AJSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmG6hUn1x0TQwlPsDKtwDuuDFMxGMFDuBP98AIyjH6VD7ZrO0c3DFgnETl0XC6Y%2F6g9q98cay9%2F9VUKYtuqXvoVOei3mreN4GzCNHH4jghsivI%2BXiDAWCWBtZxI2Qvvf%2BNZhKzlVKjUiDmD%2B%2FPgLXGbNRvnxPI73KHO%2Fv%2BVEvVHppAPkc6GXTAhDDWth5uDooZFenB6BZs1%2F7PCx8ovFe3t%2BOvQ5spwzf04PGBzUpLyvK4aSdekNubr8NdD7GQ33B44N1%2BTOMFVx4AeOavWWLzuuHv59gfMJyUM324pt2MOsYdAeXIHyVf9D6pik9ofBRnTQMl%2BgL4LUJPfCe2A%2FgIUTwqnwnmqpaE26KaJv8g3Z%2FmZe1nHJWdxkQoiwJpSxn2Qxf82yGLXkOirsaNaXqnJFP3p7cGsN3Ekg9Pu2B%2FdP4upL2paT0VPLLHzheFreS0PHhXJVJOp6T3g%2BIvUXRstyvTKneFlicqe8V0%2FP8wb7aRuKA%2BL92coa%2BtW3nO%2Fk6vbMtoj8J8UD3tUCShLXdjJ9nySE338pFMr%2FSPZ%2FlVAUJc0PZ2JoMJ9AD8ww%2B%2BhpQ56NrJI%2FE9wzWszpIPTRNya2fGpQd86ghbZQbok4KsZwzu%2FtEGbWucJWUTQEpm9g0dwlvba7S4G2VV6YwmPXgxAY6pgGLvxXzK%2FDJKY6SNckEUKS5s%2FxbDdynOXzTLBms0u51U9XQImBfaHP3XFjll9ifRQ%2FBhSkKj9l%2FmzcxM0DtxJke4nkfxqDb%2ByYsHab5kyYxF6YJ7QEWjSVWJOrYR2C9kKNRvhPwq0UoI9hacQd4mYKPx9bXLRoNwdBuz6AsWoyIk8zsB3MP6vlrOxxbIhF2lDtjfoyxR8ipNh%2FP06u4GB9yCtA7gHA9&X-Amz-Signature=74955e020c9d6d75ca42d74dd15b8f81af246e61222de5b625ac2bade38cee3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
