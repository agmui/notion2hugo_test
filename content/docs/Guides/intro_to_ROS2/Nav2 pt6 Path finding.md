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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=1ccfc47898797439404b464d539566ad011000b687e30d3192b9569f2da29f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=0eb1c94e91ceebf67cdd66ebc31bd109580832172663dc7e95ebb60e21861502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=f827ef378933e726fd8e94b3e1842f017f4eaccdbb95caa2bc4be01440dd6c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=54ad86e5d6abd76774fecba9d737ac6b702fc91cc93756185585878c70df3c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=65c4d32e256135d0f9ac465a4d8d93ec330c2a9d6aa42c6a906e1c5d1bbe49e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=6a61372933a27f91f2d7d90742facf579aef12862ce268fd5b9f494ab0aaa430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=ff12e72cdbfa4bbdea12018459a05774be3f281942e9dd1650e12ec8185ca66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=0d8ed1df1fa544c0c3e3fb02cb4ec3ecdd9d14bec70aa462d3daeaaa59fd1291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=04223157fef66878025993864725ae1a1bc0db59653c8ec82627639cc77e9275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=23a9c0493ae1a0980119c8db79dc6c2728ffe48cf2aff83e7ccc09f5ecd44584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=5efad27b997275d3590b47346845de6f273949a9bef82f82f03ff6551a665753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=a372a0f382c64d216b19e496046042be2b7bc3cf52181e13585ccc7c8acd2fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKHQVEW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG%2BvUrz16zrLtHD44Gz7k5iUFP0pFwFw9FQJu1psMNtAiAbbC%2FGEa%2F2rrUPaQiRlx1sBxQEDuHZycOa3z96hOne7Sr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMQIf%2FbcTftY5fgwOkKtwDLLX%2Bi%2Bd97HO0GcGU%2FR3Ox6GYcgXO0mw7dS%2FyqOJapm0d8owpCgfbglyB2cN0IQDrEGBqLbzYta3I%2BO%2Fe4OhbJl1eCgu%2FLXKLlIqvCutPjsfdpgBVQQjkkRMgcPckHF6LxollOO2GPYLmcLW%2BiK5LAk3sjjshMVNoCGhV3AnunvlKjRb92tNolARWtScy%2BvhYCmJXFtu%2B%2Fj%2B%2B7vpg4weF89af7qN%2BuwfJvgSUMgfWWqFNhTO7X%2FiLPwTZH5sE3S7fqtmeLds5ciHbpjZzHzl6cMgSp33jw%2BfVzcamGyfegeD8D9U1J1O367NkUt061kR86K9pJpO35IPzJ8aq%2BkR47ArCaiEfUPH1dNBR04ZOL4oi2aSKTdIwVbk7lwu4LrLH7VspuLCNCJMFihc6z64wDl9GqU%2BMXO8AgaKsRWorIX9EHztnTvbCRg%2Bf8QOLSek1nLld0BwJSOiqZkc7n64M7Sbqpee5xY9c0GvxXuVX%2Fh4BoPPdLVIXSJDtHH4LE261snVqml%2BBaTrLHCkuUMtcvr%2BYr2ABomOb%2Fr0P26%2BFyetIbHU8DFeeBGWUTHaVhEkS2AQ0HoPXsbmTavVjavbn3vQbrUQCnrEc4nNoeK5ywcmYPeFByKcdmwGTGiow96rwxAY6pgFuYPyPe3NrHT66GeV62JP8yCjMFWejIRKs7caMd7tgtj38PHj3gVqeyh%2BxcD46HJRVZaavTaSNkinpyJ5iC7dwkl4kQ2Jm%2FqCN1cvR4HBbdUX3dCQEqMQypPMhW1szPQDqRsc2EvOgZf43w8MAALX8CAecLsuJKckXYSrVhKY5FQlPvHsAr8nevBddeSC2WNf62FF533BYnNwef72AQOeP3WFxh4Jr&X-Amz-Signature=a4f32902a36db875293e273f4e90fa51ec8ba86897d8a7a340517f5cd315612c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
