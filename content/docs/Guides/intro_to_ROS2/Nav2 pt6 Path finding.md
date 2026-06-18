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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=5ea5630e7ea78b3b9c3669099c223953147a7df3ffc7a0f3a2774c4e2d2b7467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=edf5172230c6f3d133822a19b4b61cba26fe057f709a9a271cf11882bd37a06b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=f19bc834ad3cd90d493b9abed82ee3012987db2567aeff1edf230ad248795252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=29de274e5c6cbc9d017474c0c8ded7e726faeff52847f47499f66640beea57dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=b57930883348576e6af881f1f7205aad6462ed5bd8146d96eac1a3939d10d558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=ca275f9869a66c96664a795af5d70f58b5370b49197f60e6875735941ae80aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=ba59f53e0693331c0400deb7ab9b8d1318bfb09799e1ef07d740d70bce9a6f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=fda066f24ea8562214b3853eb5b32ce082670df6cb61c42525064f8ca1f3c8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=e6a24667d9f5c4e6c4e89eace529833bf438b56eb238e02125511932b81f90c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=befadf6b84e565995cbb6cc650e3eac65058a931bc725e25bfabf7e066cb5dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=a7b9ddecce041f7ffea3fc0f456cee7d93e307ca0a0f57f0721658b851e21801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=f9bff5c209bd510dc6f04de72eab7358ec004338b6165c964bcb182299ba8ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUXUYQ6%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFR2AS%2BMVaSNGuY3ZU9YVD5ccUhJn2CrmHUdp6KGsG%2BAIgHHifKAu%2BtuqJ4ReWILW2UFTbf%2FgNl5dbkfqU5xnB3Q4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG7v83T%2F9cnCEwQMSrcA3mIooQaIXRowYZcXLjGOIAPCm5OOC4mu1nf560NUYG5Y2J%2Bij1ZEW4nJ9hqgz6jOXhBsgIEZESjtdfaAieJtTTHvaKEqbFcgjqbLJCSSRFY1AvZzuytEHDzJ1WuooUFkZOlw4%2F4HIBjIRrshecXr9byIr1DJwJMBJdV5tAGcL6J5ngJu9DIOooxcWGXNO1N2nIVvUsS8fCt2yZTOytbdhqkn8AroSGs78DaJca8PMueUQWkDj5vgPSJgHqcLQmBZgDlmtCMvgOAK4WiaULNcqgIKbAYVzIbV%2FLJ9EU07ihCz5fLa8ikiUqgzHXosWzO9G8H0YusTtYbKX2FH%2BcllXTr%2BAGM4SNGsM70NVTbUtJRyapjtDBATsImaGrM4tBk3irk7FYfisUKhUgpMAj8fbVI6J4q6fgIllLijd%2F3CBPwbnRUOciPIkW7%2B%2BA82%2BH0ati5dF0jnBLYKYRTnewGt5Bh5SXrYo8J3gKyqEzAWdRJkWtRa9TTOW4WdCEsxeCnE35PXQtRqWldv6xXyPuAFGu0AiHZUWZyZFlxPwu1tCV1VD0Q%2Bt5%2FR4FyIvJ%2BW%2Fmc%2FN9hgleG%2BDyh5eZtp%2BhefIpqiSIHUcfons9d8uqoUF22Q5mYOiy%2B%2BmnCN4bbMNSvzdEGOqUBRMSgaTdKOPP61c2RTOc2NXXRZs92Quc%2FEVNQyHCc4%2Bof3rhC9WipIclbL6eGfeKOj0Esp62Eir9WdFr7IbF69rOppMeWRoGkyHTHCwmdg4dg%2F4GL3o9EANsyOmC5uDVkZTmwmIfmC2Wxq1g5%2B1HSB%2FskuzaOj%2F2Dh87zQzCJ2xSOlsu0BSREAnOV3I6ujTYhonAzPU3OmQSaYFm8S9zC4fR%2FJlnC&X-Amz-Signature=5180220ede2eb8119e6d02231b90ee986bfd76bbf190e0c29db77dee6091b2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
