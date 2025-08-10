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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=458b5f3ac95d119c24e79474d277f509dca6822d70ea28c1a49945c7aaa6461e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=d5f0d775858ea58d0a24e5e67237a3574fd39fe8f893248c0f4c8217b33dc166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=db7e1847d7207c38f7c719fda8f3fb4445f2b98892a5e7d9bc48dc251b211b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=7e06849feb6e7a8f8f29a9b88df9029515077ad4e399941c3993035ce49d8f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=f7a01cea951b594999f248ca7d1fa989eea2283810720f9aa82436a16b5dc6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=957fa59e9126255d992f3aae427d814faf1ba6cb00eacd1e3a322ab907473014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=47894d404abcd74d8262205f687b099291efd0620dc7fdfa93c1c0bac52384da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=7ca96191dd306bb37b2ba9433e8fbbfb97959c707431998cff00e48d18215477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=4d6877999b8e81888f10353ffd5a89af42bc9842fd7a251517ab7ad06fe4665d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=fd2d18f660be0ff752f98a0fdc265e868e45fe527596fc48fd9e87a9c5c1851b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=528cacd7dc3125e68088a917cbf8f10c2afbfd54fd28b517414f298c4a929c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=4bff7b665007a3dbeb62d05005c08fcf4de922912724ca6bed9fdf6fad4540da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VM226W%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLpDD4RL9h26HDd3vAaz7BoqLvUGFpxsw88HJyJhj5dAIgbLx2%2BXauxhQnlKTYtAkTz2mlHOi%2BHy4sJ8TE3A0G9lkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgc3u5tUndl9dJtMSrcA7OgBNUWtArZomxafTiho02PmNh3ywG%2Bc25aqMXhsrTHtZeuYkIv36VXh0tov86m65LYxGhgN87TistATeqFszl7fKAovcVqOrg5mLQj63D84b5OpWH1O5E7ZrjtdlgcpRnglGoGPFJQ2hplPUuaQEx7IJF7DPaQu%2FpavfNuf5j2Jvng2wnbBk7E8cu1egoxkLY5ZEHtU3QyrYJwOo6uThOLAM%2FJ1CqgkAVh1FPpkxwdFHdzhyAaHl85AT2STp%2B6m%2BFI30%2B4TQYTSwvXmG%2Bc%2BlpqjXciLXyCYPOFY9KfWT%2F2%2BzbGC2XAsakVkpqcwwJtACCzJD0BZyutHJodeCsTQGVMEGXpiBMyCkYglKC7jMWKTVWQj0Ol8TwFwmLJv5bb7yKS32Fg%2FoUs%2FzLraKBnAAqlA3YAyJhk6eFpRGGPsbhzt%2Bcj523K5ri57DK6QAPyd3ZBHL1Br5fdx9NJP5u1A8ohtiUc2Yd167ieqsjesnfUkxuYmYsUmjHVKSW6spt%2F8b2YEQRAkmy9tRsS26Dllqf5oohTbIiByzo3PpT%2FVwwpj3Bmx4t2uwocn9Jz1tJhPdRMLCfppJ4xdvydQj0BnXoPiEK%2BvNkZVoN7zjfp0xiOivWxUNUE62dYkmG0MO314MQGOqUBOiO8te0GPdP6TjsmNKtBr%2FTzU4mx8bTW6QkcvR3%2BvO5ktwt9D9DjQ4GmoU2e5bUceRBDdhWREG7TlOCL9tp91UAjkd8Eaw4RSj4SNweDPeiMbxRi0hXWGwPZk2mn3XXpf3jXb5zdid1xE4o8QPWkBvDCIMG6V1CmSmybcMcczYHla887lf2nq9VAhYMMPwVoljCPR8u0Iy%2FmdrU9e1Y25KfNngRh&X-Amz-Signature=d756b4a637c952042abae596148bd6dd47a3caa6684e9f1488d62526b045689c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
