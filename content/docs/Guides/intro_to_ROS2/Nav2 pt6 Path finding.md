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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=139b2462ff41cd1bd31dba8e826a6765e2221aec3294291dbb4e9192d2d6c328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=b5b50b3e381168f15d310014e6bcc684f6b28ec3bc82f78b2c40e411c42a347e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=2c430a43504bac69ddfb828b60085873c7631d59a7cb49fef37279a6e00ea88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=55c6d86cbd312f7f336de809fe92de1ca1c6e6f74b656004d08a9f1b755a298b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=54bd808443745ae536d41fef47a72c4c8af9551adf4423f9dacd675df5fea192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=6ce935108df3a136077f2a80f5f0ee3b38a713c18bbbb0ca3a04bc1c408b729b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=9ddfb452d341f87047d3d1364d56f681b32cdfb83a32bb17a6bd0936b91fbe19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=4a0fa19f0d8c51b6e3d2224a8e79095e2e4a8ffa3dbb30680bdb18c50d231d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=0f5a003ab2fe4ee49403af442967f5661099ed87ccee7d0063f6553eb643a6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=7d89c05c3be3870f4aa36d1425fa23515318389b391d056a6ab5266681af9905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=ec34193da564a7f18e087cd83029b1a96b077a7a31bbdd82fe2948259a37259b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=7553868675dbb1321e43bcbbb04db034fbd4ef42726a7f1245140a46ebf9381d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HXAGVD%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCMk%2BzOVFpA2c%2F82LFPI3qvWPsKULMVeQJqzvG6jwUQGwIhAOtFUUKb6jA1Szv5ksGWFMI9t%2BmVsjUTxlq%2BUIdkX1MEKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxwEIljXbjsVJdKQwq3AMqh44SlBGTQJ%2Bf7OWtRtsv1h9Cahucg%2Bbntq1gi8A59xWCZt2v8alwH3K%2FThHokD1daxrPT%2B5lsT0dgFXN3cYOughuZFibvrPxDm4TxcZ33iSNqX9AdcYvcDrniOwPM2XK%2FbiGocogJ%2BtwB3S1dasMQ%2FY8vRXxS2Y61cDdAecZy9SlEW%2BH8Tz3Yr6f9wNsJNkNhjH%2B1yz3ksmfAsfWm9dPZB3NWlbtR59d2x%2ByFVPYWAFVHB97l5n322UhLOPHBqLO0ZaFis2fN3YgZC3VBnQWpbSG5zTklEzHlP2D%2BAicsMQ1xXHmXwghM87rbB3oiEMR%2BA%2FBGAfakuEEXykukaC00kKmqRQpIFej3TYVv1DWVYb33Q%2FMitN2HusH04b41trsdO4LNv0nqx2TsjjK7m4CH7fuy%2BMSi0B4RNnmAa%2BbpOpOB9W8wxvtcYxOBBwbLvCbszsWDQpGkbvmMMtQQiag20JOWDm3b64e22NF6QJ5InzBIiKrYzbn2H%2FgOgWHEFVXqZ5%2FNbUDtO7YR9Oy3lReTakK%2FdpMUHmwyiovJXfE1fbPy%2FZh8RsRJbODn3a5c6ASsLUFkBlyzPvVzLFK3cLi4aP4BeHbHWz2FiTQK1FnNwymNvPKncl7MSe08DChq5vPBjqkAQFFWeU3gAbEh7nB8HviHL8HtsCkSzzz32DtxzHLNC4xFkOuVriflKN1fzbMGLW%2F1W5i7ALEu7qWT97M4lb%2ByDA8UpGIoGEU42SiTLZmhARoXzmZ7qUIdBYMPOQ3pDIx%2Bu4W9dsymQCZElbxU1AM1Yu2vl6YhI0Kx6ByEPcsYtlBz8%2ByWFsEQGDsTL%2BupbCGpQx%2F5k5FVWF21JrhAYGRJdwdwH0e&X-Amz-Signature=1e975407d8d5e7598f57ff8d2d2292973c8e82e6ad1db602324b7ebedba5c019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
