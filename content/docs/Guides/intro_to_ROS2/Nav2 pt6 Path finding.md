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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=43f7ec30d6f8a50a34c458675a6c53ecf8cac1ef211c17da84fd59f4106d316f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=593b95665eac94371ad97d50a96d4b7f82eb56af5b5ea7c6e07da31374973a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=0b41f1dc2cc58e5198f0deddedbfd0d15615f6a86955c8d6791951e690be5108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=1d5bc99eac0f710c9c842ef1f0a84407ca471afad6e5b4aa67d1c3f2ad41968f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=f49c46e38fa423111267e4e3ce7f50c918539ee0fa63a7ace228fb4e0aedc4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=03b7d710845d2a75dd230132ad2261fa44ecd548354484fe41e66a56ec7ba8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=6485dc8ba885477e21a1bc985cbfef0b30f983799ea2a27b1c6eecd34213a283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=f54d91377819ca4d7b9619fd0652468561e76e73bcea99296c600f919f0f41b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=c419c7147636dea3075caa20b9cbfa956142b4b7c97c16b7a1f17af615fb344d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=bdd4b9004b98b0106a5330a022ed801e5b1e0d21a46f8f9e09312e4a649e67ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=40d27691b9a163c30c3d8b2836b3f11befd9eb7b5035bf674842f77891ca961a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=8c8cac8bc85698d8c90fe888ad90dca9aadc1626d2dee426e56c92ce6f26a97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCJHKYS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFXN%2FSCT9G3dtU1D2kTUcyEz%2FS5TecqsScLHf0P8hBQIhAJ1vv7lKa2LOXShX01%2F3kA9KNghpbASAOZ34w8lPgfEMKv8DCHQQABoMNjM3NDIzMTgzODA1Igx%2B5DrprvcGBzefDioq3APWs8HPJ4QtL164NSLlPNuD6u8mrEMxx1%2BXho6%2FRjeVIAFD44knV%2FXN%2B8K%2FTJJr0k2akO9XADLFLHTkUmvSa4n2dy8kLbSYWxPKxPanYE5ihPeA1CC2CKilSvGQXh4JMu1bMzyodvZt3AsQQ97%2F%2FitDUR97KYf2YXJDjtigt59SJxm69%2FIXHrAux8cc%2F24%2B%2BPqWLDiOmOjh4uocKBruwx3%2FuxU4bkMIrq7me4787es7pPNPjn4I4p2VTN0LCL4WcsuzERjEUVIW2ODe08bco77otdfdv4%2BrfOrtD8cpHlO0yTM4ebP%2F8W50bawYDJUX%2BakBfKL160ecj2kKj9k2DzrocE9jlTmhGrspDbZ5bYhAo84Mxn4vCe8rH85xNKRk20fDZL1SvTazhMr9yzKcueB57Z%2F%2BK7JSM4LdsAb2nDGEqFR%2FIiEDteqc3HU8S8TA287YQVivIGR2J4l7RTehOEW0qX3MWdILMBf03ZDeVcYWKfRtjTehrmkoXb8yXNTZou1DQ9Lv%2FuDC5%2BcOzJ9xknF%2FI9qyX2sqTByGXxj39y6dEUSMMCIgzqEs%2BIMc9sMpN2F%2F2PffmnpE1CbnNFRsKOu69LAgBF8wHIWArBM%2BJwkeQXOoVzWCaRQSgm33MzClqavPBjqkAZeC9wHg9iebgXj5TMqp%2FbNuxMjoR%2FR362tQofRirrYzQP7mzajutcY%2BTSx1kQPuvWti2aMNG8MB3X7JvVA564rZyWb%2FJY2bI6DKZqOpMPgNFQJpuN5QqbY%2B2bXwHBOg0fvCk8X6qZozH6CpSrCn9QcevjBQqPedPfqnC1l%2FN8yiYkdThv50NGypJXmIf55IrvwFk6aq7IV%2BKJWdmOvVJpBc%2BpqM&X-Amz-Signature=0f383f943d05c82044f4bef0425d9a555c75d5f4cfcf41fddc4bc9a8e270680e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
