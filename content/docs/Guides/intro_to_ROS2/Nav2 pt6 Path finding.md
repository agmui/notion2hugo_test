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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=ccda3eaa44d02590866c08bfba38001c6603410daca86e91afe409a4faab4f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=2f03fa6c94f7eef1bd9121d5a1cc43dc4962486d70944eb64cfc914749f57606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=8c5434947b5112a165d0da39104bb6be9ea22d68d7832c8ceefd758fc226692a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=0b0578547e931fec20315db6baeab406b27b3191eb0d85bccceeaa74fbf1155a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=b60f41f23d15b9950688e2aef9ede1a497a0eee818c48a89479a9e108d3b0c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=ca4abec393623fccd7b342eb19af2ea8d0ff666ea76d6a0f261eca96e3a29ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=3c73e16b243a18205b6d0bd016ad4fd0e2e7d03bfacbed8356f19e962b524be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=ccc49963810a27c4735855fe86cc425425239c8c9fb9a711395efc51605be324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=735b2e1f8ee74ee0f1bd697959304bb8878bdaac9d1a303d08588b3bf6d0afb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=61856321c5e38238a7e58804f89e9c651e36faa5c47fecc183d5e162af343923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=4ce4ccf79490af5a9477f0532be841fb0ca1e196c8dbd8d90b6465ac253c7e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=c5a490e981e77080b80f81bbba78426ce931a516c909eb5822e6a3aee2aa4f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMFNPF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBoSgULK83hyrUer%2B9DS9tFETIsIjJ98adc0tQq7ZrMoAiEA47cDl6Hu%2BGbwSs3%2FS%2Bij%2BUqrtjvBF93zAZCjuVycRSIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQReNCgK25wVxDXSrcA2GYPusbE7qb0OgOAO187q4YLCih%2FpMR78mKIHabilcMOP%2FNw7W%2F8lfxDb0K8Tvqi0PkzwO2cItVtwYvLrRO1nByWJWmeXyyy%2BoG1%2F2Mvp9KO1x5chlynO7hXDXDhE1eYYNBWI56bPg5ZuvuWmlmFJvSuuEheOQvX5dMk8ZAOaYxTmc503FdQxIWOs5NWvUZuNrixHVbOj0eiMGR3Z%2F0ENmfhE7Amli322%2FKj%2FHxIukQHbfyHzaE4xkZakaCT1EVqols8%2F9g10OsEftlWpQL7Wbr1Iekwb8idRUOrkS1Vr%2BdZCloKq9vpWj4VBMhFtVqnLTlAHuny5JECFCgkRtI%2BdJSgK8bVBLhsqyLL1uc%2B75do9j34gXGKYZYS9l9lHK3Nl4Q6K6f1dUsAAeEU6dLHxLgo%2F3mIGtBgWGCkK8nl51aI8yaeTOuzq61nzkkuyedfX%2Bi8Cft12oL%2FXytG37aRyISE1Esfjql%2B%2FFT6A2xdOt2pUUd60JachSumcxiuST5f3l%2FVCZ8S8GaRorZhXGqsdNI%2B00gMbqXE6kByL%2B3rj%2FQBpWfJl2dYre%2BrzJ9yG3Hi%2BQPx7timW71Gt6ZjbkW4F8EaZU%2FFE%2BD98F6cWi%2BX27Q%2FGLRe4L3k940Y8qfMM3CutMGOqUB7BLitCPZNZDuCCxHjquHZKpMZyLKE0c%2BKl6L6brMGddxTu%2BOISEEvRua75ySqdDyzYdizOTyHMH3vuIxi3LwCLasCDwqndlG3X6nEhrtqg%2BwVi7ZBxTD8IBZXFGECOFUwiFS35T7beFKEr8lyaf2NOERc5GrAgWTHG4RaI8IDIGvmPo1BNnwAH3KDfPwDEillCpueo%2BZ5OiFwpMM7kU6GOAkZ2V3&X-Amz-Signature=372bb38a7517c27923b8e4da1b6b3ff65245310b21c5eb97d0c93f7d8421ba4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
