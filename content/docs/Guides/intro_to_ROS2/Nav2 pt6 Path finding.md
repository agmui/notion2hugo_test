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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=d3cbef1572c952c4f23330b63ae2f5a785be166cb9bc12dde38b4b9b9d195646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=ff222545ed37d028daf590d8f98ce4902b9ce860b1d4225f061dd81533a3438b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=b3e0b38efd74a003ac7e85cd9f6848b2f7c5741c6122bcce82768983ca874fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=1a75aed4df717d16b863c7fe6c82f512d9bf499935d34d0d93dafb74c2422028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=19510db43f4cfbfaa86453e64c6d33484b3e047852ce83027a75738d10842279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=13e4c944129039b169d66db876db75b6e572d7656b8fa423cc7fc208adf3dd8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=3efc4f6a80450e90c2ea4c628aafcadbefa6a9cf476e9c28d630d5a3a4ddadb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=2de11fe23202f8f2a46b5d87355b0bc14f30ac006428b1414bb73353b6be1f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=e192c9bc5aa95d7f959f9995563a4a816db5b2c6dea702230da1ea656daa7e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=6cdbb25e1f1d9e616cce5d8b9f573980fc55d8d5afaf2bfd7c1e12c3b870c9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=bb2afa595ba0f587567f48024822d888da78b3dfec30e121e71f8fe866de83d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=741dcc7c851a66448a6408348b866c9aef1394137e81bd770cc1436f1f38a794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFMRDTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDnnPLEsoVWlbXn6q03qnH5jfAJFN9iPqHbGf9qiulfAiA20%2BWSlC8Ut%2FVKv9od%2FONxooB6tNj3KUsdi9PCFrAmoSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7OEXxDR0cOqd8ZxhKtwD4h%2FVVbSveNWnO8AdjualAOsMneP%2BY6q6JhFzTzRTIJO%2BYYrS%2Bv%2F0MZAdfM3bfDVjJfxjKgr6hXGwrjAlP%2BMfdH9z%2BcbMTp%2FCdPY%2FvW3AVPgU1lSpFlDwJR2ajCHYn3HyCv1CdbTVHj8leKBjkCZjvY1cN%2FI2GngvH%2FH8EhP97wy5UFZkMMujtbcP52KdSEBZAH%2FqBXpFLYw3XwowD1eVkeIC9rnuYkI5nBVGh70uOfmKVdwkAz9p408BwPOyP2S4RbsSwruLd%2BzQ1Shk6tgn5kuRKtDfJedNiJJb9knXU7hOobNdOmX8NCvqh5SgJ%2BwS1r7vDjImA7jj4zEDpqmf2u6YDkLbBW39Jq%2BezvDoPDB393TZyZcyMkT2GApIjG5RL8bl6kinwN%2FlI1P6%2B8MilOLgn3MlorY5AjzN3r0FsVHGVnO2OjvZSQRf6uOLZxRVL2YsLC12QsJkgVTMyimZ6PMMRB8CM5VmFcTioAYZXoPOpRlqRfvS4Tp2EixQan375MK3GcVdpd2HT96vWcbqKw50p%2FV4V65tK4dT1PhCp4htVGVSbu20sJWj0qC8u6HszbhtOq1%2BgqhWxUkzPW%2BUJH%2Fge%2Fg7BAbA3izKEfbUfLKHbbcQ%2FAO9F9p9CLYw4%2FvyxAY6pgHb1a4kZcp5%2B7tQGdaaE1o05brMrPgQqNjoLdbiboVq04nWjT9v9pjXXHmvYrVHb6ms32uJnnsdr11PYrNqCQUzhD3%2B6%2B9oMMbnMOqmb1Y%2FQnoTqQr544c1Q48vps5iO2%2FCggn8uenmi45PrwkrXGWXcNlTaaI3wP%2Flc1CVnglUFrGSqm%2F6cYJ2ORxEoBexL6BJCdPlzOwDaVXTa51EwFhFE01gsyhC&X-Amz-Signature=7222f86c8fee715efa9cca9791df67885dc62fffaab1b3182cb8a7f2d4b32667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
