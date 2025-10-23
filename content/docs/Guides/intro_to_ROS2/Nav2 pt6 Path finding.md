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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=8b7694b193149dcfe437ee583f37aafa47b99298a2b4c3af99a6213b3a326ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=e04608ca4186162ca86a8b0e4cc8b3de4150672ee8592bc2d263b417f36f2347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=5b3fe9517548968629d130435b971a459666e4d0b54a50295735b371fbfd2e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=aff0684b9fb6fa0a3cc1ee6d08be53ad452ac7c36d173132dce368de69ad848e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=c05d0c51394ec67091b35df235edb636eae7ccff8b493cc7e2040080f7215b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=d855b68e543486cdbb90829e9c1046e8f2cb96a3dc347ed9d8f2f72807bcacd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=431d514a55b280024a72195b7de7e55d39589eeb6e2e7636d4f0ce5d301b0684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=d64ee8eaab322a59ec55daa56807f8e3dae16660579da7c136f0ad749daec0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=70b87055fbe1d1ada4dd43bd17e39f32c2ce963eb85856ca580c74b54c8ce3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=660dd5570871b694fa3c3a1a29c06a4e031d64e92073ca3522f81dcac9d3fe05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=d9eb21c1e7fc982e42102643942aa7df48f32957bcaec9946e5ce0f0aa4e6901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=9cbdfcdf85d2072e42653e7f8269507f34f73a0c15ccd3c888a72ddf0b7d327f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSISGWY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPdYPzlqapxdLvDE94yT3WHq5OrDKJk1g5KgYDWIN6kgIgZpSJbiDEm0zSXgtT%2FnOMa5eTquY8NC3EanE3qZZH7fMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMZBDQ%2BonEtsGI42FircA78BhFX9Myi1F36YEHeWvOOJKSI3ZZg1lqWSffTizG6QJSEat3qRmE8i3wxbKVUxTIfWKJuFsVpI0kvY5TZpH%2B73DCPxh08TXvPl3XV7a%2Fx5DdzycKvWRIWTMKwz9WmJbkZeqddP%2BygGIbdysVTSZu9NxKbILu8sBP1BVYM7oEaFNF0NMcJHGqXf2hmjYYDRqd%2BTx4sgpegg5Qatn1ZdYZ4FRXL3%2F3J6BibJgVu29%2BhPykirZqL0FjbBZ9NEVt5POGvqX%2BkFSwSfEq1uiVVmMlhZCIyDgqKkj05pflYvnM6r1NzuoMHhvqgpkHQWYBH7ZZAjdi3DC%2BmzU8APrl5KP20xEK2ARnIvXaRN33MFZc7mCy6Zf60wBknfcpdEP2t1ekoQbEwLWeoSorHhKKG6XcYUXBqNE2s4lJaxiDpu93uKg00h9VBbU7GQXF1lGI%2F%2BUtLkgq8t8RR8VomZwCSDaGtdBzE3L56Esn63dZVMBhriKqPo2KDsr8qrDGSIb%2B0oBOKS%2FgzD10azNUpiop%2FmlIbWr8wSGmD%2FX%2B7oZGw7EiP3SHhtM0MAbY2xYJIuCn%2BSgLB%2BGNB5w4yT1BSmQwNMgxyckSMCvyWJJOIZgyN7J8FO3McuA24Y8lKlxeajMPTv5ccGOqUBlB%2F6KwyCRRmLlT%2FcONLqkP7%2FTwzX7LS1GbxxYk3GAv2QYT96r6jCoI3U6OZSUJNQ%2Bz8QSkGCAZcyr1sWAhCfHYNOUgP926Uwg6tdd6mwPcRJpGFhAK%2F7O%2BXPzavjntNpfe8YchYqsraos%2FM8PPMbCcX57Jn7EWj3pxYPJcOX8DFl%2BCyzuMLDr%2B%2FS%2F0C9FMFbR%2FNaUTooOH3e77zY%2BZHxxTuEwWs8&X-Amz-Signature=159b736d8b6470053e1d4947880749c8da170e16d226e3fc9509a25c927dae5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
