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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=70ca5e74695a1743d0b9803a89b8363077fbb21bddba44f1ab8a0749c147b181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=385b586b44ca908ee288e846c2141bf8f5fc40005bfd3152862be565b2fa6031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=65bf3b36a881cda2c88bf6021b995a954084b97260fa502a8a05035f2690f67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=f12c98b0d9fd23521ae1884f8f7cf38c1ac538ed1ce410ff4c00a725fda1af05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=123b821c78767f26cee9b8559f3493253091e7298ae1d2d85a9b2d4d705e1830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=1f4fc2b088a4500db0b58d1c03390d74019a27f2a6aafe0cfcebd1ab9fc98780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=b8dca1918069177f46324bb282131e48951a4413a4e742380238669c3861f67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=f3779e0e1cabd46d74f9b699d22db5b912fe2fa15eeefe1801d22bb746188528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=68a5e6dbd35feeb5cd543cc457e43c096b061e47158d6583b00919d7479e1ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=7707df5a8d22d3aa481cc13769d9eb10f9bb57d863412f3c9d377c2055a34176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=524efe45ad5bc7090b249ba367273f337a79b386ac6a39a20eb8e5c3e151fd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=765609ae285db0be94cd7c6edbda52cfc56c4b8b1f272d90989edc049f4062c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2U4EW7F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlzuLMvNuHaE7Vbvh8dP%2Fpxr5O%2B5bP2acmez%2FV3ERhwIhAOppoUvsv6nRRFtUNdLIvdWNb9m7PcsOdd%2BWW%2FkNZfOlKv8DCFoQABoMNjM3NDIzMTgzODA1IgzpmyrQiLsSDMjbn18q3ANnq1Hrgk1EarZst4e%2BvSh5ZClVyamltMpfKIPqoru0BhiVwwlw%2FgqloLcr8xpm52e0ravlELGluNaCnkDtFOhSybG6ANnMCGEr6RcViA7ZYJKPsimmJK8kJQHuZlmzE5wVq1sJMumhZrwMf6BNRi1AoQsjUuTWTUm92RPNu%2BqB0Hx%2FcV2zc3OBkDYA8YXvbDxD9m8hTI1jvuaJKSaSgdYMmnRDfvD8sBhXKSHHnTd8sDRWcA8l6240zs4bqL7UcmhlSa91DGhISSFkN5FpMPGYKPIxdYllEcSlSZiXAIjk%2FNc7niKYR%2BfltWBgBEs3525DMxnZBWt5ks2Fut5q66d8BcxMDze2VtJiQywgcPjYPgt7D1JdCTrt13%2BL1V3PAVJN6jBX403tIEqL5qoqq4SMcl4Y4iG21H3zyR%2B0GT%2FszLVt08seyyQmUdug4gOLZq%2FinTLD8FbyvYd6uWEB2KpMJneSDTauknvEN1hzqbItUOr8bEPkyVO4Sv1jstdJZM8ATRS3lASlP1ZkkielXjHm1wcccPFjTzmfY1xRCmTW9lE5bG5chrQc2ZULD3Y0eCFktQKsIIDopQ5FWz8g7xoPtGA9ygR%2BoRnKvVOgxMyCMnhRfiW%2ByGoL%2BQOFWzDJs87QBjqkAchEqkBjEur67xfazyDgAFyouG%2Bvo8ck3FkUqnz759B%2FKMzjnI%2FWB3vInhlDmxiFkrTc1pTMC%2FOyIuLIDHmDUTn5Nvbkabqtp1utoVrDkIxIUtaZKoAa1%2B9bIPyVB4o5N2WlHP8eFV00z79bdA7uRcY07LDwJCr6EQ5SiIHP14zPwRmifYSLyT8KzHmR%2FR%2B7xe%2Ba%2BhTQ4c0EgHnxPSrwbKk7ITky&X-Amz-Signature=cc42881eb1f8a9f7624c957c5985f81efc323f46ba623a72307a7c5676d0d2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
