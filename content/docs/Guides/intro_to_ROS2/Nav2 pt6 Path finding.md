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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=e91df71a97ec4bfb89270aac492d15388aa42123217f5a416b613d1ba2151e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=659a6efa156a701c50694ac6b926394faf09cc4aec6eb7fa620159fcdd5f4dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=fb363c6b0411a2c443855ff6ae7db728a955f95a17690ca4edd153553f952c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=d87a3accf8d3f1e79a86d77db8e2db2a62872ff26393671ffdd1ca810c59f6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=70cbac7f635bff400f91ef8f64eee910eaca2c7e99898852d034ba43c3dcec0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=2ed40ea97898a296cbc744399e5ac0db58d7f655a03202b423f6f56a87d69127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=5d823224da5dd7ed245d362912d342e09b13d19b06f4656351c914f07ce5aba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=8ad04f6c82b24dd4c69966487c20878dd7fa9b9ea07c0425e6d143914ea22632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=224f1fb0c4804716b9142eca51bfab0f64247d47aade10bbf5b5b7f4a1ce0dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=61066ea62075767cd2b9d1aca89aee1f87662b60c6759526041fdc8d7fbcfdf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=9c0b381b7cf733d671eb8b847a8616424a2b06cf037c280bc474042da814fe8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=e6c84824e8f615cce2ebb7b63dfeaf79f319a41fa63aa98f4c77ba9c36181b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=e2f4019341b919ae13478cf3368edf4614dccad24b66426ea92fbe9a21cd0017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
