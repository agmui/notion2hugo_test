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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=dc1d9ffb36f519bfc6ab5b6250635e32b797b35c502570f6eb11c614f2201754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=8f00c3eeedb3571d0886aefa16e692b7e61fb78d77925fc5c4b698865eade7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=936cd5fb5b66804f92e8fdafe2855f93bcec4fcfed20b92a1158259fc711e9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=feb66aa656d99967bb3a996a105f761ccba5ba054aa0ee950391a6e3ee10ee9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=33a8b1c2994096e559dafe4b35a1327ff59ac11d1501ce362d3664892c0c5cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=4c94a4d283c1c468503babf1b3e17f0fb98d7493f9d5115d412e3dd7a496527f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=be5fae380f80428bf57ef514ebb4289e5072175c1e137c2f20e2e4b359d2b4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=2d1bd56f30c7947b8ea831d915350c1b1bc15b60059bc40f8c03bec421fa391b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=e45445371eb02bd5b5ba5ce9ab62cb1f2d70a48948b9ae8ece8276ce3db8c9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=acae5f9939c830b650c2ac080cb754674234523a598578677dcb0b9ecb498c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=2a2ae5b7345e015bb014764391e83aa9efbd7bbc2fceebf2903bd14949117716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=e1b436c30edf00d3ac5fc307654f45dc373ee37ac5145792dea935e79a66e6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN2NPCP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQtMVlzAw93uT7JP2808nWico%2B9S3sBdLMeU%2BXfHF7NAIhAP1T0FZHQlSpQ1EaUaCeSgxkB65FTBtCnGhQYkhkbm4%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8TbrtTwSvmEyiggkq3ANh0J3uGNf5DIaRe2s0Jv9tRESFjY5dVsi68LDbO71QocBVmzGY%2FuNgvgsDvKCmypXpPn3wupVtTDxWC7eIbUgZHyjC3Ob52qDcc5wixk9l0y2rvbhT%2B%2BlWNYjaIjvfNmmPYMy5iv%2FRAegHSrH9dD8wU2LwxRrQZ7h5arb%2BdmpCVignE83Gpgh99XDQRJUR%2Fov1wJjvZes2WARJCIHMxVHEsASoarcvVJuu%2BpytCCK2gZGa15nmI77Amzl87geqP48OCoQtcNH3mJgSKnJ2vZ15ynajzpLI0H7k0n7ruMRdrWYxmnmfUbwnFv5qOhPeqOB%2BmJEFTCT5FA34G9ZeLrmFreQ370Awwqq1fxsgdGAeQdrVnFLzR4XVolZ2o%2Fyh%2F4BqdySd1nIChoN51DWYs0TW8KG6uTUPq62CjNXgOi%2BhmpH%2BT2SJk6HTgMpq%2BkYL0utSM14JsLpkhOUEmogRiIF0F03u5pdJbBkim97q9Otn%2F17iIG4ZZ%2FztVmjCyP5jVWWPNLnBiFCiBOrrjIZYAzkRupfnuxkimn1QpesCG0cZjID4d6OwVdfp4MrEwIkQVzRvgfiVb8Q%2B%2BsfkWhQd1iStxq%2F8r2MELhjVNuY29boAgLa0VpiRCZdbeAAV3DCUi9%2FEBjqkAWwzgL6KuMaZjONOHj8NOaiwVxOf1F9e7teJhYrys9IwQQgj6%2BsRIGlLYXM3THYTpclmDgr9BZpoVi2ux%2F9MaBXicC3yYQtetsXlW8RFGojdYS%2FWgqHQDaLwkWHx%2FkVnJQ4%2Bm0jPX%2FchFG0%2BIZRFKX8it9m8uSBjFJCaWGsH3Eoz12BZrahlytte338BuO8qebDDscxU3eXGCyiZvvkd1nQINQVH&X-Amz-Signature=b01dc2cd864ecb62631e5c0f53486c4dc923e87d34ed8e8b2ba21faa84e12d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
