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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=0627233be1e3fdfdaca318dd5e7bd74de82cf3de1f1b243870d03e414c3b59a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=7d97efa0dde6de95878ffd8bdeebe31255aabc8be32b186b6b46377f2bb635ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=fafc6f5cd7f213f0add79baa5480d090cf6577cd3e57dfd461f78c21b1a13f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=3e81dee84e4b45f07fa3ebb01529090dba404fe625fc4a413e96dc61bc3ae658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=e9003e82052b41894cf973ee31316f820e92b6f6079c8bf6c87fd8142e908281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=4ccbb04550efd35363b92cef1893ce85087944dbffd00cf3180be46a1c700db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=386f11a91e74a77baafe8428aa2257f3bc06a443479841425978a3f5f465beef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=7a13ddfce304f4a1b1f4875a4b7c5d602fe47206ff70622decf216eb8d028306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=7549303f91015a7fdbe499ec1d24d5eb283a20df0f40378a11d90fe114b5854c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=6049c778be734485fb12c364ec374a0ca03268ff45043ae34da41ee99854cb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=a0b3ef2a367c44a54255df3edf754299f628d966b0d2a30c659bd9cf4b1e4e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=d2d4a6ff359aa81303f0282a498bf8d6bffd04563fcd4a55872e8f0268a4ffe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCNIATG%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkaxczw0Depmc2OVrM1Kb8G%2FlMvH1Qyx0RXxYgeDAXeAIhALeVNMA6nAgCk2daupioCBCW0rbH2WXsskwEipVtE6HvKv8DCHsQABoMNjM3NDIzMTgzODA1Igw6RKlp6snvc%2FVGStAq3APqRwQizxeVxKkSzYYYhhmzfgP1wz91wwCMuMzcCKIcvhXM6v%2FjbWVZ3%2FDFIicDNYVnY%2FvthRoSPwFNACfektmNiVpSccBAl0f9A67bxY1wTiFLgeqlVk%2BBEFtP08aMRwcfvS%2Bg6lD104xw0QtTlGjW7xxicRMybRi8WIMHgodrd%2BUqQPXKBOv9D4dHeirityusE7a%2BD0O3h8u8VR%2BZxtztuFmecn0iyss0wUdcApzSW5i3p8iwRg9Vmfamkop%2FVebmHdBKYz8QmgxYWFOBQ0aXQxbpVXmxAOz7r5%2FTC5Jq0VK001VazwSm%2B0Sy0%2BK1ESOkBWHIxjkBKf3WZQmOmlwjtlIJEaxahHkfjlcHXclotVDQ4vFiS0VwmkSWAFT1STlR2OybdW8EiAQMqIV4zAQOZ%2FlmmgWcDMfSPaY2IP1LBbBB9VrctnarUcRyOk6yWz2iBoaemjp9orTkh0fv8gw1%2BQUUzHw1w2viD9YAqBqKwN9dPo8ZB%2Blc1jr6BNARP%2FwCdteiLDrCtrGKzhKGTpVn4ndIhAuQBb0pAZ1OS9Aze0MNhk1oFTD5%2F1oRq2hWWuSeME%2FpVHvhqobu3FiTXWZhMbmQ04n1HjjgTW8YRGraxNLf5PhWFiwKhvLGUzDipuXPBjqkAaQCblsq1UPIgY0fV3K2zLc9UxOyOByYiXSodH6QN0yqqDiJh8KHmqTMfBUP%2Be3zRidUGTVZLKdKs5q6S7X5%2BkmSvHlxvHH7rJwXlbDKuXY4rYKcM0ck8Ea7Cei%2B4D%2FFMB0t4Ttkgbnz5GD9VO2AmnN976QqXB%2FNctVZRLAa7fMIipy8sexfjs%2F1q9liUM%2BlfRb5g8PPPHWTqQCU2h4PCLO%2BcCys&X-Amz-Signature=3347bbd2fa2e5818d6403bf9badd4f64b1372586bd0de2d2c3275e53d5004a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
