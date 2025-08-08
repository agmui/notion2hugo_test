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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=06694722b7da728960374c80114cab4038e6e185de8a778c946bc7b531a2423f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=ed1a0948ffac520a06e30a37a1263bc965d2642d8fea155ce4edb3b45c7d7cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=21883550d68cb9aefc5d3c711ba7c9f1e6c599115fe1bf05abb70ead66c0885e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=3d3725a53deda88bc0f59522735f396c5abc38e5e79b34d19384ff9a800c5470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=845bf2a7f02d81c039770b1a8c521320cc534a383e189796bcb14693b5ae47b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=40f7d819913665e4428a298e54743989c0934708da368f8555150c8a11284ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=f8f5044517ba358cfc1bf15994385a1980a8b66c9212f309e3662c18ee5cf52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=0d7e14b996ca233a8fe875ef2ddb34978b959850ba6a7398c8d96564d6b9d2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=093d234c6da3f59c2ba74606a909491322e9bd79aa9b856c4f1b29eb1293acb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=aaa544e9e779085a7bbbd0fc730a6687721df867101a6d203f7809020c09c26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=3cc9659d0fb4ac83138776821b113b17cb7566d9410b00aa3fcb1d8459ae3a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=b78d5ccdd743e144f02f05bcc03a1ebe309794a773b7d866339b9663eec21f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IGX54D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB5l4VZuYjprUwVr1gdD%2BVAGK2PV1MHKysZxdUQOwrHiAiB0MdhUZIOb8MKxo3H9onBp3hrRw5MLNCpPWs%2Fm%2BxQNMSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Yu4EmN2qCBqorwlKtwDERVR%2BOCkofvELqwdrWKt8Pu1DpWBu%2BKUjEYpA055nzMOwsfQg1adMaZVQLMnClnqTFTmRHorZY0nqlL3rP%2BuNSkgx0c45J4aTb4alYxefD5NltPGURb0En%2F4zGjdIxrmlutHgxlEDbxtCfwRYdoSMeEBHp7ZyK3bWpj4B6S9%2BanNnZbGgPtVwd4MV3O01%2B%2Bim7dFXzLdo7fts7FXpaOJiTpMNsV0gBEfvLOB6uesS0LChUt6nycT92WueVJ8Bg8yTltsIiSZ%2BxYfhg2HgN5RJDPB2YLFb73ikwTdKzXxcfdtkBlokzYNo4zcYhgtwvtySjqQAOaySBY0FcX8xetIHKHXTOvqTlwALqXD7QlPu28C6hdXff%2FBxPLqynD6qjtg7YPf%2FmdiEbgorSnnneQ0iqXnE4DbZsYi18tzdjSOdPL%2Bv%2BzAzmDOk8af1bHyPBBzYK4SFcs%2FyQ5jPmTE%2BlA8Cb%2FV%2Bj%2BM4a9uGJbnsq3XvQFEXgMrcHodGrpgZa8txkbIKwaJRRpgQ3tyerx7vVezs6PglLeTEgrRXAtoM7ccbGt3tcrvmhshwSj%2B7ezl5wSO%2BllhAqEkUxrkaI0cHb7a%2F7Wl6O5b%2F7lXWftF9aGSW4kgXIo%2FlDJfadamFsUwkOrYxAY6pgHt5JkTZA3awTH63LQsc4s4vjZYlyamx6HwE%2Baui4qRzzC%2FHLQbGqFV3SB5SwTuwq%2FXm4tPJYgl51QGcfYQbXhAXXiD6RtQgs4roooiyQVWK9WPg%2F6LvRRWDOALJuUGO4Tf484Mpb0AaqyY1G10otGxyJk8Ag%2FKHFvBiOe1jFATIm%2BSk%2B9xntrMrrFKitwtjEBHFmxnl9FMeHpMEpnMOuUxEM00gBuN&X-Amz-Signature=f6df7701626a26d2eb415f9559fd34bed6c59da877577a6fcfccd6cdec5bd585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
