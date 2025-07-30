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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=b3c17f323e1042149c3f62df7087b66ecafbd23471d45025d4efdfe1459a0e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=70e5f14645e9470f5886a82ac5bdac1690a2320ddac08abe673d032f0c84a1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=82bf17b3021f5f0b290e1d119f18516f8626be9e6ca2da9adf2725c5a46e3e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=c6538532cb7322a12a9beb9261c35fde2c93956566737aa1c342a17438163234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=90ad4486cc1cc2ac61a2789cc80906290f770e2ab868d53d3da666dbc23ce659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=09c60b9f90302748d9cde54ff9eec40b6fca23d23af0b5a7a3e15a43c2aa4182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=c46c4dabf97fd751e78103dcdb4d730f02bbd6b2688b9f7f80dd018e58d195c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=106625218a2703215f9f9dc6cf7b46e9d2681ef5532f0d4cf422921228488bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=76a29a034a4d75028ea10d218a17d9ff87ee3a64071dad83f26a07faa1e5958d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=8e5f8196eaac694e8dcc5d00232d093e71e556d4c82a3410ca3c252166c0c806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=059e55ec9d341f082917bf5552d39375159fcf0bb2f8ddd0e359f7a16ab807af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=2ea303500cdd0a24101adeba6c857fe11f09fa1c822c0d6b2e93e75f0acb257a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRMENAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb72EPvykoe6F07r9%2BjpCqVWVB3hrwzUJcWhkX%2B63g%2FAiEAtRPDhCCm%2FKUG0GnHD%2Fc56jbPdDIgj6LPpZ8j9lx5eckqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnbd0rSIdMUjqNq6SrcA%2FJ5SuxKNka8EeFp9KFKh92i1uhDUAnS4YomNro%2FOnfHFSQzc8db%2FmVqIxjTtD9YjGCNhqbChenkf8AoFTdnlyxPhBUj9JFcBqhQRC5mze4V0VwOR9v2lTI5ypQ6JLDawonuHBM0UulfE2296YJ8kF%2B%2F7BNidcEuZruojdzWdnb2UOlBIZXxcSJQQCUnzS1QDmQi1j10AIbnDk2VjyZMl4PpmTCQfpZd0lk8i3FTNLc9ToYQMn%2FQXULjbP1BExpF3b91BdEaarnJ9FA9EvHbsqA2CW4h7Y%2FsAtu7IpyUqjLJTPQ%2FZaqZaBu1XGluzAL7XeXj%2B3G5jUc0whtg9lmAZPgPnJ5rgWd%2FFLCAKRGC3w3rv2%2FhhIUf2SByZO7OS%2Fv%2FwumT8lOVJXLZASNaH8qTApNckzQvMBO0cWrOe2Ant4YQ4Kdc7BFPMBPJPaavTqdUQ1UG%2F1VKtE%2B2nNpvbSMDgcABMSIZFjp%2Bi51yQfOcj8R7ldDIdiWDibQX9QcjAQ%2Fk0YugrZBNW8ZxAgvRVUwL1%2FkFTKzLxCMw1zMTkieot8OhR4mCLKDjifBtnuAprtZ3gbKgtbMgSRSDUKntCWA6CJqA2wOpSeTrD%2FMEh7zFbwsOohoN2%2BzGJ2c5f5laMNqiqsQGOqUBoQdITQaX0Zf8PNgc0v80vQhaJsiPuUoRhTAsQ1OqYwXAvHOxb9L8AP5z5%2FpgK1WHabuMOmThVwCdNxIVf6z%2F75QxmQszQMk1WsmFZIDwro3Wv2G67X1lAJdRfyq2ImaX%2BT9eoK%2F%2Bxv4DeSKxooP8ymgvBONXtwTmGesPwatMTLh9O6vAU%2BmZ4SatsvS80TetxlM2UVTzTaMFjMNuACRUsfPZN5ML&X-Amz-Signature=98eed2519598d973fa521c121c39fb02afcb0108319e7bea083b83403d3f1553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
