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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=7529f5180cc03e2f02ecf0da8da96cd09454761e3f7aa51881d6b1e9a7b80a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=d954225d664004a5185d6553fd8bb0e1f19be4d5bbfe27105a02f2f434ae5e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=80941ce27e40f5e46a9c9fd8350a9b4db4f5379d2efb75a9c94e87374a65b645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=9a1f3ea542bb81db1d228338eb91888631f152879fce44b0d7bdd522e4acf7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=5e0da3d2c3f27047b65e95dd2e8a8264c8e8323ef920cab21f3ee186836ab7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=6f3ae430e331740fb7afc98aa9b6df824e03e4d1785d94fb83d7f34b6a566692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=68a5eface3f3ecc48ad42d624de77f9509a1ca1f5349f311dc671f401364b4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=c00cd270081c232f4653718f4f74afe058c53c30484c453c634783e245605d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=62c645381a53e3939083fe060ef6effda1c6070ec8da5cd0def1981e32e070e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=ff9e4528830740b2f85a1b8a0a5f545d192f63a1e29044ff221eed9aaa1f63e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=392ea45a88fc0be7b7fef17be5232235c4864826aa184844c84bc19b7339801e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=449fa230e4b7acd6963c0f910987a552d9632b2f377823d4acbec785b7d2625a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG5GVHM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIF2yqzt8G%2FnaJgnkyjW%2FzppPNUTJnwk63m4W1GSE4C7nAiAQrn25dpd7Vln3vwHQ%2BxPeOodKLO0OauhlbK%2FYPVvkmSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7jZofgVIeXV0UhfAKtwDmYlTWFpte9VD04zmNN1n%2Bl%2FgxDPzw72ajzgR3z13Ic4%2FDlf35G41C3apiNajkxud3oEurNRCRc8GuCPGLo5BI06sA1ayxgvPtrVidPd6KQbGNz5Zi8wJdEVSMFGCklUPSHqLjYr580%2BG%2FV2%2BtMioTgHg3Z8TMdD7TCnkB8zC7wU%2Foca4K9bwmW1jqrjNxjQTmbezdUci5O87yrWnva%2Br4j%2FPsFS8t31zB4c5OYzFDvPFE%2B5y7UbWh5z%2Ftqw%2Bp6qTRtaqxO%2B5jpDlUwt9q2BEEiVVxMR7faoIHHKb0tM2cOpypvHjk09CbUQ0kdBgdj0eZJV4tWfOkwiYyJwKF%2B0yHvX6b8R%2BIG8uzslLH85UFopEqG7zcpK2ipmRlZXQnfNMcebtCuJwYMWX0oEg%2FQUPBeH404%2BBtlau%2BlRawKOEA8eLit%2BkPBYNNpG4J%2Bk7a24GSgR3CdTm%2BbsX6xY7PMFNUMjkusHRgCGd8xdQ2X9wNoT95fWy1rRlOd1TYy7lPwoNc6OHVUz0mXTyIjgBcY6w9%2F22PdI44IX23KLVPi0ZdkpBL7gNb7A2s032IyD4jRS9f193Hr%2F0kmCo0hLx3FVe61mqIiMLoKHYqcETe1%2FOlU%2BaJrLdvtUI3hBqasMwptDMxAY6pgGHshKrxqADeB6ZH%2B0b7pHbR1TjeluE9KZ5Nyj177%2Bhc629Y2nKrDaZ%2Ft%2F%2F%2Fb%2FQ8vtKmgEsdNZC9xFuHBzf1ZrMEWsuL6IozV%2BwEQ2hbVUsSsRPe7ZdRRNXDfwDAmFmKJNVjboyPjmWHWgSGTfc1H35nnfUggjr44VlYGDdbzZThbhnVmkruoOjTuMFjfnVRvXycKsFdWX4ckImZSdklERqGklobEgk&X-Amz-Signature=c5eda4a2bef8d2c4929358377a7848274e573b32e40bf413cea2fa2dd455a451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
