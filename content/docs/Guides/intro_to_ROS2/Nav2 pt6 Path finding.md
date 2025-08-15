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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=033dd7729d3041bf7bd22410ab6c974944a9fc9ab1ba2b4bae2591ba0b258acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=80fbde37e8507981913296af8cc98874386d10b90fed682286372c1eb0b08cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=8668d23e042ff4404c262611520f5b41388d966ea3f5af9adec455981ac2437b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=c9cb73cb002d83034fdb59d5f614fb15268f0a22c9a2e524febcf232d8509820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=dc6b39cabc1e745d631fa9adba9d28bd110f1f5f42fe7471d74ca9ee1d168950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=20fc33c93da1efd587ee989184bfd2b6297916d207f7ddbd9cbe4b44e4d7dc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=7ca9c284d75848d3baf9d6ff7f4e961aa6f670b075df14a9fc05ae429e523ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=fe1c0a700f738b90117c8f36077abc691e07bfc0ca70c9db9b47359a642a19ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=b0efd8e3af8272b254f69eb3131b7f82a59284b7086a7b90f5193c04401e23b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=23aec873eaba2c6daea2aa4d58137f7fe855ec56c5f06524740b1cfd65be1afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=327fa9fc1b81babc98b212672f7e2afca15c28a241814faba6bfb746453a838e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=b0d4f7924fe31215e21a2d2587a360e4d62c1583a5d9dbecbcd19e99ba4c98f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYOJYQU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA5fbu0gxMD9VtQ4abRwHdRBMrCiIf0eXT98UTqy9DNPAiEAobeJQnGQvLFQwLL3RRKdjWWxRl8uPUS4C9swU%2BGHhNMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHRCNV4B6WDQ%2B1vlTircA6vfXrqTDvSdFvtNmO0qQPBo%2BvduDau8HJVbR1TAOdDmphwk99YD%2FOHFiZj9XdCWbCw21PhakBhIVevMGZ58cIzo%2BAB%2FSn0AHDru5LBlQ5xAcbt%2FGpoNfbwzBeKbG%2FzK6T6sQXdhjLhlitrWRTFOGRpWd2sy5cjX3UFViPnxBbW%2B15mXKXSZozSaw9QvgDI3HRsPlKzfOpBu0us2xgm729eXaHWStUgLac%2Fzgf8a3MWwLqT5f%2FUdLzSLkrrUm9uUuvC2%2BWHjG8CgJ3hx2j%2FDuWRMYwkN6YviPV9uqT2oHKeXJe6GbOBK2vEIXm2JydfKensepmR%2FxxDIqAJIPW%2FywSoBIv9m1%2FU9pns%2FU2Ym9Yhyll82Wp4OXaSFASNEusOex1BQkOYGEMDyS%2FQgiIwSetbV6xXRd7lPR6Ke5h4dKQEDEtHbFWiNtfryC%2BmioH3vfuS6U9C%2FUzP%2F1Ea6M74q4JOlv8FV8a7EAPOrQzDTM5msSo8ZjVB%2FxLMZMtgBAxlIhrSiJdlEWKvTij%2BqOov2H90jrK6H3S4z%2BE4UsHDjD6hrYXvlIBTR55aYsQzpDAb%2FJtDJwwJAcn%2FoYuLf7Uper7yXsy%2BuLK8LecnHaKZOzcowFmiV0JOWxUFoeCi8MP%2B2%2FMQGOqUBtEZFOX5ZdN5iror%2Br9DyrS7di%2FM%2BBA2S3rAUXEj3zhtOEDF7xZr%2FvZIosKSeReeCC8RZOY8QIFJdrhEgSa84luSnGwQOATsr16ctvtQ10Q7pBLowYaIizwnBeLBWqinBTjBp8dnzu%2BLKVJuvadlgdIJG7JlbocX9Xb9%2B1uGomqxt6kVt25A169CfKFM05fX99c6h0kpfv%2B8pUQna8Bdl74CBlka9&X-Amz-Signature=48ec3bcf8d5a8a1dad6bbaeee1726878b896869c5c96dea2b11521d42d39fff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
