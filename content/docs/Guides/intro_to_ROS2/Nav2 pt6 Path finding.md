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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=93322c87e149ca440c5597f2803b322913b2d219a9c63ab75c1c6ac342fce0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=07440aab603c84ed8b5188fa2d3e82923adcf2e8df877739e3a63238ef965d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=acb437b7cd5055ef2af8b32fee361a201208a9f552522eddcd72f8c00fbd3394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=57c8925edf0039dbe9e6f0d2e08397c385731c79f2b9a5ab9e2e1fcb08a6a7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=871aab69ebfaf379439a3009ebaf189e19de5ef8a76eff55c8ff524d0279ebcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=dd81f056072da23c4766f0451198f748d44818843ff29fb23d1036a085bd464b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=8845888815797574d047ae757fecf7457da3fbe046fbaab492add7e949a67a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=2913f5eca02079c32ed83d7d75ddf36d14a81c31a1aa37731eed4a308ca9fb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=3b6de948336691e09fd6cb57eb8fe506725fbccbc5a7abd14574a6783b93d0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=605e60f77a2a2d27c060042ae18b9ac13e74101f4df2e534d93a7cd4b9d6777a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=bda9e0ea3246e0996fca068a2c2bf11b2e2a9ba18e5dace0762c59199bd7ee3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=4f03c9882dbd1397188de824a6af67a02dcb89d8ecd265d58ce98936dc92f427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSN5NIT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCT%2BW8mTGC73EaE74n4j6JrU7RG2sJ6fe3TInF0uuNNtQIhAJi7l2hKUHzYA5hzqhhdQcmrK%2FJJ8zJyOgJ2GHaenOjXKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNo5sftViqX9PDLBwq3ANdgzBnhfNGKMDvjtYD4vQBfMakdu61%2FBQU4TN2%2FICpXN%2FxSGNOdq09xFzv6Xj0tSVZjs8HKUfRY%2F1KNvMRe4598VkL%2BvT%2Btl9gGasSF%2FKEqThqk3TZgYy1FJQ4c%2F0Fclshvo1UaUN0YMrGqCpR3Hxp342EsZjpqxU3Xvl%2FFDZH7qxGix%2BN1VLBn2r71%2F08H0WfYWICLv4SZlSAYI5bbfaxNwcuY7RUs3GScSFqoQT%2B1ygY%2F2I0SWaLfguACGtR60unqpdYy7FLb1ReaiDKpc0IrvujI4GdczncFLx%2FumSflIoLZoCWzsBq0tcZ%2Bndrhr2ZCQxF%2B80yR6YEqOVR5k5E0zwV0i5X9bOJgxu9T1xNyF480S378LFQlllZDTfpt0Ct52i2MJ%2FuCXnUIDTzUrDUgtGIQwjkirmz%2BiNGx0%2Byc6vUXqKVzbH%2FUqOq77l2iLnO0gWcRCiegan8UyHGk70LkENs7hhsuNBww8iyGYu9AX1lKCDugW2qjWoxfs0o7a%2FcCWwvIsCACX%2F76sg2ORr3qGrLIiNeuDrVgQO%2BI0ebJWBPuJTHGPplYml%2BWrE8YelkVK2g5zWclHYo8ArOBwlFqVku6sPOl7Y6cj%2B47%2F5tGm3ym3O%2BnhnNBT92cTDE09XEBjqkAQoXfbbS0gBvQoCIktgehDsKR%2FAL8qGFxN32LvwoHLH%2FsOcd7AK4hVVFebWalF25JNtifi%2FeBPpg9Wr9Yyck5zSNej7rWtBVcwn1xQ4CA1WgimCYwuBdffH52f3Bk5JOApcfgfr0%2Fq1RKGB1QoyZzhPUofPppCXrmV%2Beyk2El%2F%2BfgfqnTB9FZYdFX5YIY9cwvE91I97lJDLTeBZqZmhpVqH0%2BnWL&X-Amz-Signature=2c75b69090db11048bcb187c8c8a8c518da8850365179030e29710f4a8917637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
