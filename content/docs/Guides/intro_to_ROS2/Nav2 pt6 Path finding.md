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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=a0d8e48dd51ebab0581d912d78b73efe703a7f7e2d2365ea083a35c1da152283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=f0083606c35fafab166ec89bac295d67ecc4ad720242bcdcc4d66cce127f0516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=e0ca8ab064f745950b1f71d97f3242e19522c126e8f738225d16aa3c7b20bb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=e635a5d51aeeeb68016e174793addb893fb9112dd576dad1a8e512205eec6692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=79e78ca14631584c4629ad9aa0afc00fb8b78149b1caf745d1ab452bb61e8d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=21c6212868ff9f3dd00a1f28add8bb7b3f8cb11b280e11d3860a90dba65454a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=5f6406ddf3e53de6aab5b0df079bd41420d8ec324de39700416c5c466f444462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=36433e98dcb0918dd5663167ba4f8c2b615e5e418e64577b11b70afbced82381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=eda8cee21a1d26150ab1b3df7f771a37bf6616540477cf83d7c98c23ac73b8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=9a7869c86dc6b605ab2ef1e872b91e3f77679a30870c2cfcb9356120f0c66112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=4cefd10c3ae8c7e60e9dba193a7eed8e3f957f7fa9c0081d4d86625bc5741ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=0f00ee25a2f749a6bded140de0d40bf4e0af41a2dfe786325c1495588d84766e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWSBEP4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnuj4ZkzysuJ3li1I%2FzU9gX%2FW%2FjoZJ%2BqabLztEJA6V1QIgeFCYAIWz%2FEEXIpVZxNTbXCvcjJgBm5tef2xwihAKE4gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEDioa%2BDZzZhmhjbCrcA52E%2F2B5zaMsbUWRtxZoESYNSiyAEVtVuwlAImWlZGfuq0Xbbz1TLaVs4gfCi6PlXoGT0Vu9KDNrHDHv6jdxXwWB60S5ck8VLGRBy7DYE2WCHf%2Bz%2BZSi9zyHmnAb4dUdqFl1FKm%2FVtWZ%2F0TiADvyTJOz6SOgqkCw9Drj1iZyIiF%2FxIPtAM1HO4wndhYf9CrVn02zdWz5KYUJFBrRAaEgpZzF4EJAQWznh6OwEF9Bse4vbqmniSbrmrmCVk2d5301FQcvWkoM3g4GkxfLn5%2FUX5%2BHtp9OLdU2tIE5H2DsNjJJQt5jQaGZiSI1xITQrtEVlLvEKHWj5TVT6r%2F9OUBOoDFhMpNvEdIx%2BMdyWe9ejCt6h9dbufUwYsuwqDZITbj4X8Yl8Ha%2F6aqCcCWxtVQ9XVx2AQHbkh8HGo1oWIDwWvXyL8dwboDRwpzKpxtEA%2BMs%2BFIRVzWJwWBBCis5WHUwn0%2F13Io1xRHEgPLYPVV8iuwXvH7Q5OpofAk9tJMJrRUGt8G1UaZaFnQQbrWtwYJFl5zRy52pb3v%2BzGe2mw70mKGbbLIPA7CJjIdC%2B5NKJJU%2FYKkQLig02YkEKuA5dSsvwzR8ixspu48QAb0XYH1fiiyZBjL6sdhw6nAz%2BAmbMJuNqsQGOqUBzx%2BBM9Khw5uCl0M2dUAeMAe7zIKmQ0vLQgyd4LEJgk8vBhC4InvmsLca6q4eMEvH7ZN8LxiR12Ug6M4FeUZkjQco94IxTcqs6tJWz1%2BEsBoIvNiwm%2FriICuBqBP%2FqpcvTIm2yWAVHG2ImDMu2I4xZijyV3Uu1rlaHGUddF%2Bw%2BIpRzaIbfvuokx3cqP1rd57eyZpEUhbFDTTpuVIVsSQAX4SvrOYY&X-Amz-Signature=e4e3c2030af6007cab7acc9c1aeb01eb2a885820c032b943c1ff043f9a7f0f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
