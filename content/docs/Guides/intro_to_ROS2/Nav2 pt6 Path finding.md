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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=9ff8fbea0ce2b1cc6a280457bb302dfcd4c3a9a2291ff47c62478d79545075e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=4bf7ed04376d70e77384863760bba305580b3abc69bfa430b529c4313b0af87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=0c848b9e3b6c6728f1486e2cc88f9df3ba9e34171ccf3b823251ceee389cb94b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=b62928bf9572b2fd933c344771cdac30d857186b2a97c14f5178f18cd3593de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=34c5803380ffedd512d50b936088a3e10e09a5f26d7d8ef2cdeddd6d6466287f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=42a1a92a67cdc0cc15dd64096e528dc9ba6892642679730814f98dcd3d0be669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=6b6955ff55b420a9b9e08a7291dfb3b7db58da37fc25c309b059ee8fb2927a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=17a04a3b3fe848a48d69fd5910da59f319c1d87ef62fd5034f8f35f2129ab24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=62b3c79ed91034da9f2b978654974df44c355b2c0f55fb0f3cfd1945519afd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=77b149619be555b2ef2eedd8afab236cb1dc3c8d4ba73eb92e586168b7d4ecd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=30f893d505fd3a5507db4e0f2ea807a1b13421c447a024bc4ce5ea48479821f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=6f4e6a9bffb7d4edca76634269d3d60068f2694beb0e75260466bb939370fd54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFELKPD5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGro6fhfx%2Be7k2M5%2FRhT%2FMUFT6217mVLnokmJDLGJNrQIgISAHckK8lrxG7bygfNk4xP6syXQ89rhxrcR6c2qp52wqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5myGTvo1JuA5p9ircA5waP443PxiQmn0J0Mfv3z%2BBUyYnXmUNIdNPHBesG1zuNoBMU9rha7Vr0prSROS9wc5KXIZ8Am0mzK3%2B0YcoEEV9oZdA6hwEzHJn%2F4a%2BYwdIigVxO7W5H2f1Wrbcc7KL3m2MUhgLWGdDySmKcWTc88sL%2FUb4tZTj0%2FVUoEBpg1F7qjq2Sdq%2FOxMUWhrF1TyDvFhiYyUsGO%2Fa3J5l6b2IsQkp%2BR0scmkFo3v8UBQMpLXp%2BdPvuw3sivb9QsNSmeGzKZLV5cVIZUisD81yWJq%2BnyLdVCPulIC59KOtXUTfhc9fE8Jq5eGBOkUgNcX6kUQYUi%2BsgNhr9Zd2niLaYFIQVNkse11XnEU66J9PjCgFZSbaANVhm%2F7ZFvP5AfUa1tosZqJMl1PwbCPbgVaA%2B0PCO%2BAJdaeXR1DyJ7ytLkakU4rzTuY%2BrZGWsZSp6ykGWtonaGMSdyo%2FQtOngnGyWZlR9JSyq%2BaGeb07K1x%2BUB9tRjtMB6BpD8xiRv3TsiyngDGh0wfTGksqL6QLkFaHJLR7A4zhaM49cvUjVEHiggMOTYluRA1S75TfDOyVIZyJCB%2BxBi1wZ0%2BbeyFm9BdAvb1eMBg3XwLA20ReIn4Fd5DcDP%2Fw5mhXHoRP%2F7XWoGQIMI2ttcQGOqUBLzrrdGND0%2BYA10bp3AJpvBaNmAg5p9d%2Bz5lq9%2BmOjSjXnofnWEEjaiiN%2BCnL2cRaAevyxAf%2FtrQyEtslCPgmaB0Bc%2FIMB6aA0fkACWlE23Q1e%2BJ9XVinXNy0ALGAPfTugthZUXaDdS3RAe%2B9pSCx9RlKnBwyqcdCWqNux1p5aLSXdhtLJNjX8MnYkEm8MKAgOqB5EjWJKTXC56ijHgAjYAEfaCRi&X-Amz-Signature=96fd1a165904cc937e999c8a54d5e2e7263325d19e65d4cee52ac0bb092c38a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
