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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=a9e9ac6e10fb84fe92d58836af4b71535dbb6b22af46efd77f005cb786ea8e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=ae4ff5a4f7b486f80be9cafce6cdf4d0b0413aeaefab5c88e52f00c10ba75cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=d3e85b4a9452156c6f7bbf9d491d965af7fcb35b3c39f69f4aff8d16667e2553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=0017a45467968d3ad4dd01881d1a66f685d21a1a244448bdbb2fbc0fb93485af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=698ae953a5c787005fca973328ed59265b24670cc578b202c6ab4de0cba5b9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=9cab7045a8389d6b3db148c05fa70b0a9ef49dc036cffce798a119f93c979ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=489ee15611ff4ac71ab53abe77a2cb5e9b3eb0530e4bfa52707a597ebeed603b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=f06ee48616bf50508a2e7d14ea453fdca375260b6968700d7b62c4bfa8c92878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=e389eb69d5e2b87d7609e151ea6e6e26701899387a80fa734e7c0a49256cab8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=d7ec8ea98f9ec26a417f316b4e4abf6007430a53ef54a1d66ef804f3904fe3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=fc1e3d239475f6f4921da7848061a961f6b2674af538d8aaa1a5d0975689fad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=302f62bb08cbb477b4ae3be7c1653e9f942214d56acfdcb8fd36925e40310971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANKOY5I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICgM%2BCvdyqLm3vObnFV%2FqTx2M7iIkLdWVPBAoQcn7FkIAiA%2FvNEZ8d4LpGymQCG1cqgflt%2FE%2Fpf1NEwnvVdxLa984ir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMFKI8N47NdDnTOabnKtwDRQWtfZCPUBGQWQfrNN5VfghVEGgVfk5mzcXXrSkOi1VOo7RTUSuGXNWRqpnHCYSxWC%2Fbu6f6O4APN55xNtNQd371%2F1fqOt0WlGMAQSX6aXsQ4pfy%2B1PyL%2B%2BF1RObSoFDmRMD8miAGOyl4WMVbENBpkYW6mBEBKsjmel6Wyn09xzMKbMl5uZLrV6bmFYOJHqEJDvCvkHuXyHOqC0k21Gh52DKErDcurcgaqCDkshhUYZhaH14o%2BoJZTamzc4AzlRff9XQSmVVl4qfJQeMW%2BIs7GsHV%2F2eMYNtgY37%2BCO3WlVZPsXDLX3dDT7y2B10K%2FYd0iRTf2sURasAV3G753PBy0soSLDH8Bj0pr%2BDVT1De%2FvPW0E9NSZWDxQtYLLmZ3xDtR7VRh1KOLlWYM%2B7vHoGRo7GAuloiO2nrXGU8RgDIvPcmv90JyA8mXXrXBzb8pCWQBI0tKlJ4epI6YfeD4TLx1tjyznhdAz3IKQqbF6oUyQHewDwNTuLroPQ%2FKtdXecU0PwszsUOxhsZ88iLRjyhPQf3B2nmsINPbFjcvcNIMKiFYb8eI%2BMOI2fHXl%2F%2FbRm8UdstMuEczeqXdhq7OP1NwHOLPVgbPgaG4CPqZWYVGFfThqqwvXgZ2YKwuZ4wkfiAxQY6pgH5CTVH92tikzWvmnLOJfjSjg6iPbMNVgT3IUFivlKsTVCTC%2FKolUrmaL%2BlglLHtN6umQijuoly90dAB9YczpLZuRVVO81atclQoe2N9htWSuBnMl1io0FlKOEwFyFtuOPoXJoVnUCgB1xpNq49JXT1W%2BFR9Ms2EZ%2Fq3Af6%2Fj1XBbtdlTqdZ70%2BSzI6rlF%2FKSksh20gzc7slm8N4BJHpoN2HSDxrlWY&X-Amz-Signature=0889c59cd1b222826900f2839c9b77f77f4d29238132e1b2307c8e21a27fda7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
