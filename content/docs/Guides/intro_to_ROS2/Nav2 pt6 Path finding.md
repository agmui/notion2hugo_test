---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=4e0c4765dab3aa9003357564f441e998a4bc379bab997d0e761a981d35c9e2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=544b3f2a4983a3e2565119e2b3ca23d54b87380a8ef18cb140375adef743653f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=ea1e3cca4d9422a88ca09727727c2e0f310613df49bb63a01499a171e42f7bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=a82e419d842a54bf3af58302633f0414fb445856800f19a4546461fcaaa73c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=a0d8cedf049b8e6913c19175e8078a3dc04b98a54fd7a14d913a98478872ce4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=f44aa35aa665db8c542063edbda9f982353439c9c906f9d516a65224721b0195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=2b59307e65543d7e2ab2d123306d6855242f0a54339249f0d937b38681f4b75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=46b2447d0051683e4659e273625615b7c1d16c2f02ce1cdc039e999b0dbc8dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=c9f900efc1c7d9a2b54a94249a5f94512c8a97a50410c552091f23c7fdc72629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=f7ea0e230da85ccf6bc49ea32945253bb85cf2b32f6f7ba7fe715f24eea82762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=5e49060e28d966f1c2b6f301ab15e03c64e5e330485209b64c0a37d6b2c5e77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=5bbdd3373831289bca1f1d01ea4c2e1a5be869f7544b068112c767c59d946bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLU42KCH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGFlbVRus9C%2BxATzYXxsv5lVNhHkNKApfB6%2F8mULUJGAiA6uvWgLAIjI%2FnK5U4Ioh4FsFxVF%2Bm8cOtuGwuMgm1omSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM6%2BQyqsX2BtWDfmIUKtwDuVxB%2F%2F2TNV3pvi%2FDs5%2FDtKNTQyRb329W2izzg6tsnIycuskhaTtSNqlxVY1qZKHiHcFH2Lu1YzIvtEOpRjb5MR5SRhkxFgv1m%2FZ1mlUc9opvhQbCrSQCMfkBBDCRhTAqtS55XPmxcvx04WRdhDHSpgyHuc6XM9JwVKoIQyETNbrr%2FsygKXYknrDEtREMFwiEQhzhe3a42e%2BNTKLhH0LvhdX0lyfTPYagedabnoPb9SJAmv9VIjsT7HHzlM2MfzBSGVyapDrYQ4PsSPmIbDeqyabwqEkx84b6IIU%2FeRPpSKBsCjHCy31bHLrhwHw7X4tmUrkdioJF3hKKy7yC7GEXGtQGGkTzTp%2FAsFdCZeL2IQJjn6%2F0ZFuKUY74pUDdABu38rofGsQyDUe%2F627u8iBGIC7KZ2s%2BxeM8LmfFfbxw5i6kOWQdQD94gVfKIR3AWPjc6b50ENdD8%2F3M47A4dsfBsNd5YfFcYa3pOsuA613%2FUETQsLGmSH1DnLD7%2FYhdHZgM3ih2PgyOZbLN8UV3V5CuETt7Woc7XJzMnj7LfKSCApfmTirubAZdot0%2BKOT8o2zQg8n2Jg%2Br46baNnfzDI%2Bf6cEQqUJwvSB9BwqKEt0vROdnudHaaiVg6LeT9GMw1Jy7xAY6pgFwpCwAb%2B%2Bh8WfLHQ%2BVXXTfQPjVRKSev%2BGlESJDu5%2BxqY4F7AxrK7i6D%2BK9k4d6g7jzi8dnRYmn2GDBvbVT4FmDF04kPFA%2FnmWMp38tMe8xKJcZWJxQAoa8pgn0YQyJzYOzsMadfF%2FqOxOK5KpAEAPX%2Fmt0bIUP0%2FF9ENga2OokB8%2BoDykAZea9ACjQXZd9N53LIqVsCkG1tR1pm4Oe2frogwKR1LoO&X-Amz-Signature=b02ed1e86e71e75c2cc2c8aabcb90da571503205ca31753a7a2c741adb4b9388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
