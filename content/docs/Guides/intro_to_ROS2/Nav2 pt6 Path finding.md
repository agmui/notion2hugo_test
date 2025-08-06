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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=88308323bbf62fbf1f85cb635dd7f17bb0c6cdd36fd19ff201f365d58b55b3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=b98879a66c7b986ac53ff5a7b41c5d3af88ec1cdfb8492d489c52253e35648c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=1eed2edcd14e0fa8d19b4aa4ef29573af66a2fa2182c491c90e0a3b58966a45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=9db7d30fcc93af93c6027064f2eccd99571c4c9d33ca570a788debbc42b951dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=e0ca28f27f74df8a6b5854bd11d3401022123d882c36153cabb4e10aa8ae7306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=7ece43388dbc454b40a81b000aef594c2e9abca6f0f16ccfe2516dccdb7d7c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=54cba02ed0478caa8deb28032f4a606394e33509842d4148010756f61aa47d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=39ed68feb4b395ea24cc05e3e511239303855338b118b2bf802e5e388c8a062a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=d12dd38d53bd616ce4581c99bbd06a79b535b39e3f52560150565420098ac3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=c0fd39faff0629073d65ecd2fa6cbc385c198f351f579784cafa8858ef6ec45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=5aaed3f78e380249a75e4f94ec7809b0e75f25e0e00719e86ba915a8885a3bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=b53724fb7c4fdf2259387abee7ec7a01765694837ec9a422ef99a7e89d08dd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIFH3M7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIClq2JsvekW9iH1aFqTAsHlKrieqUCiIbVBC8bGdIvnRAiBObxBy4kU%2F%2BJNbWxExxqB3mI2JITRB8YHUjI%2F2mci0%2Bir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM8IunnfjID%2BIB%2BXtZKtwDWe3Ka9xqRUyzGscYDN11zWbZCurFB1KqTIuu0II3DZDdWEOb3XT2xbwYYUOamwUGEJzm341D7SlDGZa4EBwMc5H0DT806rhhdEEu4SK4uZlWATyzA345iTk6HeVGOOtSR3q3%2F8C1zk9r%2F8%2FISB0X%2F8X75DCRfM7WEs9R%2BtvZW8SDZiaiBNN5eIgMwI97%2BOnw%2B8xNtS4YHUCzEmJroOQEBGSy4LtvmwCN8Ds0fJ8C7LldGPiWnLShjIFGCS3dg9JMZyykNyt84YBX5gXX1iWVuUziNHCU6Js3rTS%2BpT81GZdNjKQTdUMvdbT9HCbXnSgB5U8H07XtPqppme0L3iOvUQG6GPJGzOJGzhQd%2BG7SaZn694GaFLiJrawVOooloRzd8HTdIAc4mduRIadfqUULGWBS7SqmEWY37ea6ORyaY%2FBzAIFmGQ5968K2tvFB2IJyisnqMYOea0mJ%2FuVWtKI%2FkZP8hCdh7ldUrv9N5kTdpnEJN6ejk8aCXP58s1JWaXoqnuKknfOKhmSxYZnatqECXQyySr7EfqC4QZxfqnSMuCtIvoJPr1wXzd2ddvD0rrPpzlkNLHFBmBPQ42obQ7G3Na1F8WGQYAYXXVzlLPG%2FgPryTGdJTeBn1orR%2Fw0w%2F8rLxAY6pgHzE9E2titM5iizE%2BDQKDHcDvYoC933azgrVFH7sEc3DdTeAdSszwBCX8ZZubmAHBhtBZfSHMOurJIjPgAc9C09Q8gs2dAaNlw3v7RP%2BXXhgG7%2FYwN4qu0w%2BdNNF2Ou74v5OtjoO1gtcc%2FjDv15RKa0aesVeylZhrKrNhGURDXALzhp9T4juK2RLHr3Usg2UT4Ib1mxIDU%2BMAoskhfKVACKlT3Y%2FH%2FN&X-Amz-Signature=edf0cd039fbd3af0d685ad642065785dba1e7088b07d823c331c35cf20e91ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
