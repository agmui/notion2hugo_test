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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=dca4b0e941f57c96d8b25a3840b759912c2466dffb2449a97347bc3b492ea0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=af4d5538626fa44cfcf1c75ed28257503645ca5c6ab7c35fa66b4a87f8141a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=7de09f2c0bbae84e27dec9aa53fd49b117aa80fc355666dd9d7ab8fb5fb566a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=a11e645fdf2704affb7f2f4d3cdc410c5a7f28b01c8d2122752e5ee708e80244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=3e0c6e82b815c181ba82a25862bea9b35ed2b4c67fb59454b056a5f8d4c9b405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=6ebb4b2ca50e32795dbec9aec2e530cd45851828b92044ef9de21e34ff7e9a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=6bb57e358d755540226c84d53275961519e2a348d5063b2a7768278b30ff2b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=760e55b21c688e521e56f605cb563b80ba6109c0906537a5e38e7e1b804c4218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=7453b74f7d2658cf317f1e596f2d4cf3a006477815b83942a1803c9a15c67265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=5c4532fc4f5e53d34b2da516c438032fbdd4733aa9ec0b20b5b7016adb6b9c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=056b84698a3c4623ddee6f1848dd21106f58af317a3304ab80c0f38ae3ec10de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=e617a2939a54f6781579e45c3ff5d413faae6e401979939d27c9d75ca018f373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNQQ5VT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCglmF86kbaqDx%2BM3viZP%2B%2Bh26gFmFN1eseWGEQSwMgIhANiXRNBTbkLY5OOtAQvE7QoH1BmWmGvYKAx02953ewmjKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDN8U6EvAjQTSUNYq3ANfseyv7xMP0G7iN7gGmpcHRfl%2BcfDIlbkd02fUa8MF3UZs1pNkKYhwKqT7OH6ozAZiK2BzHy9UyAfiOY9MBCitATnqsdw7FYEKfgfEMal8n7Jc41JrmWVE%2BIZkHNl3zs4tOqMLtGzgOV2GAZjcb4r6cPa4B%2Fog8DK9RPOKJjUXLfyGzpkWERHVdtgD33vWduFb%2BsVSVgEilutcz%2B0QS%2BBVeeVyF3fWKTxbUotE1y5%2FIRzmU1Fg2eL5vOZrC%2Fmc8Q7qzQjj6NyaNhamgVLtMbLkhIzTJ93kHuQtAx2zyl4lyRznzMIJgGIpjA8kTGcUJuQGMrUjE%2BBLlRedV6m7szdKw6bx%2F7dINUTfhaqFumO60V2ej6nsE5aFk4dgZtzTyTk8k9fyxdH%2BVBnVW8NQs%2F5e2ypi%2BaqH3difZnzlbwPv93g6s%2FOpPY%2Bds6akzFnHQ6sNUuJxH2s2QnCZJ2GA94OJpKpDXpZ0ByP%2Bsvd25gxd5y%2FjKM5zf3K2FYfjJ8czFPA04cYJ1T0tRjVZa2H0LT8nOLqERD0dH0WF5r0y30TxwGHQpq4iG33lNTsr%2FRI8PwY%2FIVlnHvnTINJIqo2ysCxxa4AsErVy1XlXi52nDByQEXAC6HeDD0ySHXu8pTClparEBjqkAWWGBVHo%2FLVv%2Bs8O1ulNf%2BdLeG6Ck%2Fe9%2BmfL0S2woj9MCCZHQNgh8%2B9aDOZSflCAOyq7u7uMkVqvzw2Vlp%2BOOWogoF0Jr%2BxEOZHsh%2FUHOJW%2FuWMlLhhQpbBskIEnUBzlLSahHkdlNaWbpu6kImFBC7M1D343WpBY8EqaG9eApccUmVP2dnpqZ%2FcptYJ8XwJw2avsv%2FXwMnGlMLHnmrYe%2FwqJG1eb&X-Amz-Signature=d9475ed61c7d674a4375afb4f2ed63b1b1f5d82a9fc84821887bf52e7f8e5969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
