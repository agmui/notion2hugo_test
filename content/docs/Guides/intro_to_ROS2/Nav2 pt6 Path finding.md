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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=3031f3c43bdea6fd495ac3f1647a8456a7d36a5e2c4e60416098cc3891ecca92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=d54a5ff8d2b19c235e34744c9d8dada8038027f25eeea6e896cd95fa3e0809a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=aaa38c5adb96d55e6ff336e8c26a1a9bf153ca4613615bd0a6c6a0fffce08888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=6e0e6ae8613ce6d99107fff3b02201e45f16abd0064194ed2bd6d55cff4cc3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=e6d1a3fbe7d2a316fbddd24429f6a952610354494dc9e4b8eb004224e0f24a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=cc3a2645179cf846f5633f44728c9b420616679e5038162cdf8b73dd0a693b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=38e626c7f1a38b139751d8504636756d92da8d653d3d48d80da8ad371cdfa585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=5812b069ace8452b8b3770414ec31eefde94b5d24e932a16e4970a0087059757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=46e0b3c5ac56383ce890aef37c5b7dd80e9bb4860568ec605ec077a6b15687e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=5b9ac10f745f420c86546688e4ca38e31a8062df2c456bfb833c1e680467d152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=5ffb0bad4f7a7220b70d87509ef0f71351fb30d6d324528b6f90cfe50b76b810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=cddaba71c33427e459b884c02359723c64a7d9ef095f5f1b200553de53cde571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW2GWCL%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHl%2BUuonphFCYbaw4RVHf8bbec2eqVD0np%2B%2Bl7f9mKRpAiEAuv4f1jFtnWhPYoanosfYszT66%2BsxNVnRVtdPtHE%2FB2oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCns8FSjC%2BLnGiyrAyrcAzlnUOq8PubDHwLa0it6QVaFU6XhZhGFXKLnEGmyIms2Zc36w93n4UB%2FCEZTtGKCUCOJboJvgtKjUKMRsqyjle8WCxxZ4R4WuNzpJoC1P4fFkJxagqF48uKSiFrdJN90IHu2psoUk8%2Fou6KoMAY8y8e6kqRz06mA1iyE7C1NvrW%2BuYbvyB8bCkZZUuu7y4lZltd6VXp6rjXAWmdAsv8GKVEWpei%2BVOpynoHsGPJa5RoONAScCsvJQW%2FCgL2he1uLa5N37ePbkQgoelcOUcHBi3sFjO6D2iUcqmA557mzXPBz%2FGE21YnRllkf0UjyPI7tkbiVPtzbmD3xy1XogpA2mStRY%2B7kXCONurAuPbUUMK8qlNOVZt3wc%2B9QXATPs2HKoddI3cfZoShUZF8jfxwbrwWmO0eV6HPgpxY%2BlCx0sqMn3XEvjuAhkITLpT5np%2BSeoG0PflPwmlaz7lgDBIrElhooNN6THVl0f2h3faD8YPRG73NHBhEf0AwJOl2nDOPpcLOeyBo8XUsDir%2FIguBvFdQg755DSAJXq7VudQTgrel7%2Fuir%2BPDZQVZyAnJKuFUQSgt892a9FMth1%2B9LoTBqpbJtA67%2FqEgy0Zn6m6yZog1%2FqfzL%2FvSpSnpCzu2WMJn7stEGOqUBu6IOweWP2dTvn7UjhqKsCVbvrzuFH3r71IfAS2Al%2F5u4ZaO1HzfuRCEG%2FwfLAXK6rDmGxZKqcv1hcX59xSUHLrkyVVKPYsguBNjk7CGu1%2Bpv4dFViL8zGCuKVQVdc0p5zr97DTDz7bZD0M6lGQUbmj3BedplszKm07syJXPH7CpMBXrQK1ah9hP4Q9EwVzccgimUr1omv%2FAiDoc5CUysFF%2BZYYec&X-Amz-Signature=f6f269a9c707894e7a6fdff85720fa83bdc78c2e5f84720019e7a8a19bf7dda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
