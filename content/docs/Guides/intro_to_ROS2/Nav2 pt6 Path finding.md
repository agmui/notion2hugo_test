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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=58a08bb05d9c4525d5a96febd891b73ef420512e321773de2507db269c34e6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=3fe21658a9021f87d1fd6fe775d73c5b668a4cd7fa1b30401c78083a7f52dd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=3c896b6e431382dbd484957502e26c0131146f748306e0ef5d397fd63e81d752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=a07b7c3f25615f9bc1d78d53cd1906fd69502310177c64d9ee86695135832af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=712a5d9f269725199d867d4b32058a25e7e57ef30f54462a22aabfc9e8e576e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=293d1e8047c835f522f3ee14fa1c478db1ee7a2f34e4a233b25d5d8c835d8110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=25e1bfd6a09a009f88880bd77d741e0bda990cb6fc0543afaa9d27ad1ebfc8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=b4162ba853742292bbc890dcd61b2e1c0d7edf6adb829323db18e2be6e69a3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=c803a9dce757b5bccb994b57fafc4b7b23ac59809fb27b0d13aa2eddb322e2f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=c475ff382a0f5565c4ebfc9354db4379fd3584e7aa01f0ef0aae19f9267388e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=163d5e38d60530d33d62449851e7593400ba91535977442b516493f244346ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=1a47f163cdfb5fd767f3726b8f769b34be52350df84869b045d11cd9087cc9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJPGKP6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUeLcEjPCIQ9PKrFV4L6hgiiLBR8hbG41%2BOKs4Q90f4gIge4mHOq9hpfx6MoGomLLoBOW%2BfJW3FiS4htolKtBUtCAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAbowPLl5uXYrfLGircA8%2FODbFFFeupxoQgLqZBqUe%2FSGEOIhUu2AmDdzBRrw4HfGk6N4QRPYKgnx4rHh95RCpRx6riYLTrMzv8CxqmQ5eaJsxsm%2Bts%2FPxMQpgo54MYuKTR2EFfS45BQCbjss5qd1mbkMROkXzrAgvCB1xEPIgOQvCm9bgPuBTmut2vYdNYjcnNudZ5mPTkYPqIvFBzhYKuyZfvAXMlSC6Pd4nHfdXQc5wu0sYtJco8mmh0YIlT0Y3ItAdIQsoWExyHtdUlQgkAYUxOLrfMrKP%2F2iQekcItdC7FjQqH5QORjPsfL7sMdLBB1v9EoBYoecM9v3yEv40LJHuFx8IypLAgm4oViBzLTLaQxsWE1lUr%2Fuwyek5hb5YBcTvCLvDsQOMhTgQixQPljaW4Fcf%2BRYhnTjwulOz2wbgLtk1pRU0imDek%2FMeR6WKG%2BXS42iB2kZttkIbTU2ScjODopEW6IRJzp6OGquIKPhhFuqqFfzBbkF8eZRBE3TzV1Lmj%2Bqf%2BWTfjFo9C8L4tpJ9VO5cHhmqfM40wlVXOu2jP%2FuDx5oynurKIgX9%2FQq9MMtG8rl3qnjQUI%2Fs9Cudtm0kwrsNUVwtBR8jmXzx%2FQl2L3Xr8WmThWcS4vrFhF59rO62S%2F%2BqWaic8MKvMr8QGOqUBl3NApdfWjRk0ksAg6LHyy9CM0fZ3uXG1EsRnFTh3Ysj1m2zFetkFoycgc2sSwnsHq%2Fpu0NvwJvsFndpN%2BKToYSPu%2BlOLVZaKRJyvLqQj%2FWRnPwXgrx9WP%2FNcEaz%2FlovyY5OtUJEbZqxN65noO5mxgOrynxk2sM6uKHvoQrvDwCdRsUO%2FIgPT6VOCNDml4ouKZ3mMo88ULn8vF0eFY%2Bzt2NL5lOMh&X-Amz-Signature=836bdce790d445d51615c377fe9c129d6ffd94f661685071fcd0fb774b82cff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
