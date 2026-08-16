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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=322f7080a501f21d9acefa8747a4210006a5a0982159acfbc366842e6a1c8e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=e97e17e19f9d5cbe3bbe352a8ed2273fd20330603e5520c885fa276c1df414e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=cfcbf8e3092ce8212c1b66b6b58e6fbf293b0a03864b6fdea4fe44ee90da6f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=bad40535bc457cf23593063371bc69f42388ee4788c84e8a2f27f89dfd10cd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=fe6b10d353e91876f948d8366ec5a371aa97f9f9e3932894084447f33ead4530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=327c020e9d2690a4433cab2b704c435ad0e619a0840ec1f8a20307b98b4b4af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=4b0990862ef6892ad35c26ff421a5cecb31394a552be1703452932b128235560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=311e75065d2ae1ba0bceff6338e293d30e66800bf4cbd539762ec3db199ff629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=6f5b1430a3a319551d7452009c96ee1d6bf405793fc2876fe48e3f5616879ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=4a9f3d8e5612a3182ef8358864acc626a52ae9d2aebd37c7c945d7d119682f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=55e11a1d195b323e657f716d015c1527e29fe834fed729f86b0f50b3791c1bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=e69cef5a74abed0ca75e98711785182bbb524a314b5e8584352a39333d5d4da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVK3HPV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDUKAko7nEEun0F7hRHnHSNaeDRt3qx0DUQPrwWMdeD3AIhAO7WE%2FyDytbz%2FpnxrMg6Wa1Dhp9mD88fk7iyj%2B9M2k24Kv8DCCEQABoMNjM3NDIzMTgzODA1IgxvQDbQumVdmARBOdgq3APgEi6kKrwcrPDJ0H0eCjbN5PJZiYbpKYg8%2BfadgM9%2Ff2vCO9O2WmuBlWl3i%2F%2FLhcd8SYleUTpOcHfxJhYAHwzGHkbQDStkwCDV0z4Vx3yl1pvVqWmLAqxfM5%2FQdFNH6hcH15hVAAL%2FgUKR2vQtSIfun6LRSo2z019j%2BHDixeQvHJorsZc4iv1nUD9%2FLFnB0Cyqf532T1dl3Kgx4dVFomVIHVwy6W411P%2B8rOSActb4ch7olWsl%2Ba3bsKOPS5QsFkthaeSha5R8bhuQLhd0nUHciyYXAb2vDksYXMLvOuK7I8wZEbnUwEW868THdm5wbLlQeQVEZJ64Kuk4If2H0la2RK0%2FvdLBYUgaOlDI5BVm84GdGOz3Oxgk0R8XkgkBmeiKT0x3H9zbQZLS2IWUii%2BliT8LaW5KAs8dVzfujkgqgqznedyB%2BITcTMHabFymdmsF%2B84YcYTeOfWsCbr%2BXYa2NAoz1LDZVm5bRXlObFzql4Qmz5Td9bwRclW9CIh6DJYoqVyoIG9PjTDlpI8eh7OGptD2rK1rHvG529Xfez0O5GC7urc825mUrUcYwiyYR5Ghv5y0KMX9iaQuXJbSorQwqRNXwC05FmPi8ySmg7cQDUlJYYB%2FbSHO%2BjmWVTCd64PUBjqkAUhhDCW8ODp401YdjM9ZOVxwtqT4pu6Nk8jZltcfmwFmnC4zAgzDS4Bf0RkRg5AshNE9uDGtlf3HAVabJ%2FBMJ8%2FV5Kit4Yp9pCkgDOv5%2BtYusg6oqHStbmK672gPOCa1OABH%2BoCxa5yqtehngd%2BVVEeRV7U1AuCgPtnaDTsq%2B56PU7FDAwsL2hFsCosYXrfbHQwej8j7rNlVRXelfAVb45YMOFP2&X-Amz-Signature=f624b9b14c62c6a57ca0b1941d50dfe3e80de4a38bd4cfb3ea3054c06232d492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
