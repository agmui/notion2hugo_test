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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=bf128ffad90a4a42a786ae9488940a1f029a6f1723611cb3e1358495560a2e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=b42b51d63f0893cf4e859db51beef3a687f0089346a8ecdf297acde022b53786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=d6e614c690206f773bf8a50e00f1ca78c0c2439e750411273ca340273f1f7174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=ffc9e832fc80e550466ab8c8e14d240852ac625c8ec3086056c54af4a98dcd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=c14edf4de1c9b5d9bdd125ccfa5d16f11e10f15999d1ca03ea59718b34ce2a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=7c9667ad1a3b61a2c7292bd4dcbc7b3216765e435683b98a5e27476f0cdfc21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=422e991dd1cd16efdbb061a43b1888fd48d1bfbd050c923a95edceba9e7ea966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=506f8a5dc82976b742eb9446be4f542feae4d161ab219670e0868e089bb93c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=1b7624136a51334813f84075581e0f6061cac7f0add441680343949c807cbe53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=6bef2cf941439ec9a57ca27d8f0d03da57552e2cdd44c45c08c97e81212f3273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=20a6b179225b34ee3355cdda159bc8d030c6815e8596a1702ed80b9ad1b15873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=4bddbd142b38241c79e86e341aa14d6267a11a0ddf826bf2dc5db10644dbc045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRCYAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oRg8fFIJOWclX5S32uS9tM1rlkcrRKIHUI3oudZ4ygIhAMrUtzKl5YbqKrCm17dUYeqB0nS%2B9JdhpdYqdgMg22aUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8wz%2FQsq7GyObIFK4q3AMh49hY30daKfcThv8XfZLEvwC08maUavDshiU%2F1%2BMMAnnNfLmxPxGrurGtd7kW20VHrPK1Vfn7CUWhryAkQimxPCulUvTHeCuzEQSexRyzwIpTzKwhjb%2BrBUyh9oxLKRUn4JMRwLgrp%2BPT7lBLGvvr6smenPm6%2FWr6ixo6Eq5IdrLgnL%2F7wbQr4MmTsLLM8A7rWeURgWnptQBySyIvo%2FjfGX7%2F5UghVeNPfUZW24xGg%2BnPIu12iHGylYQAXcN%2BTAf2SJ6G%2FATt9xxsSJYPIi7A%2F%2FzmseC%2Fy4M9I9HzXVX%2BfM5larkWq5FULnhzsfLRU3kZIPZ3C%2BQ%2BFhDZDCYQGCfDlvqIxm0P3isV4OhWKlP9Gplw%2F3qI1BUJbK%2F%2Ft1imRoH2NEXmLrZR%2B9UA2z2l55VEuFOgo2ybP1XShhe4JMvoIYSDA0N5CQ2OG%2BK7QntsuoJqp9k55qo08JVz48g9kD7Loq0Y7zbeciV98%2BZdohYVK0thLIzaa%2FIik8OdTtE8XDiL43aeoD4c9Nrk5sZUMCQK37j74M5pMC9KdUbu%2BPcQEyloBUJV1iq3S1RKJhvrmpKOOL94g3BRBapSd8ONK8WHi6OP8eOA1OcBDfIGWHMeYP%2B7jsD59Ksd4GfqRTD247LEBjqkARiH%2Fy7iP2vK4lWrKH5COsJUrrnl%2Fa8Kv5U2kjoF6yItNSG6irQRlc7HSH3EfYKwTSEQiZz5qO5HGBX9EzknSQTpsIQiTb5bWz0i9W3L7oDjXoBVM0zO1XtuBtvhJohThcTM5YIBJmE2z7FTtzpCF5f5NK2a00lJoDog88fZ%2FIqmDvO%2BzRJM0vGHY85d1lsrGS3zFR0YOlmhoROvAZi80akDnovy&X-Amz-Signature=96d044785a2685fe89b0ba88f1157e1f9c55aa4104f4e151fc364d6de6943a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
