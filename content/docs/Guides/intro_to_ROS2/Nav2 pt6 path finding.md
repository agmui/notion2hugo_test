---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-29T17:14:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-29T17:14:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=9cf0caafe74b54174d9405fe5b375f9948a4df5b8089ede68fbdba3d7716f01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=854a69e6ab4390df225cb04034abae77344476b65a302eca642c9ad5dbed3d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=06bf1e58494274660c189cd88019b7d62f8ce7b8fdbdc6074c4a71d05d65e527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=7457d3428237c96ba9590adc657439e70a7a499186dd49a61aa7c87379065dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=6720128b2d8c3e06a2b1487ae3e74147b6705c2849bb2d602b8c33a9335fe9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=e00d4deb08e99c27562217372ced1f0a5a184e958ead31fb668e271600e8ef2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=dfc0e112d63ab0ae3b2ba907c59be36c394ec0a8fc98a38054e1f2a3d0d65f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=8033815c3ba8f6c354fa529309a99e3a61a7adb6f2b969d8e5929537fa03c225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=fcd52ec8a9fbe1bbca5903a8d537739252936f7da69b3972046a272d593122da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=174e37e92b615cb4f07929656b473041c006bd3e6c1e736fd778f11e6d03b93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=650e112284adc4e546b0073dfcb2ed45083a7fe9b59f97f447803873e7097df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=4a902bb482938155bc2237a78093ed8219bd8c54d039cf725bda230347c8f115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYKIW6C%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxRtGNuRoo37ecY070d0N54mzExMV94h%2B%2BiRBkb7VdgIhAK1qZoDAiLJWBahA6xqh7Nl0d6RNUZmEpy%2FGP53XCXZKKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8YJEfMhfcZzSK%2FX4q3AN8iVDP1rzp0bi9seZIKRQl4ZzXriaohHWgFsLAQIetso%2FnISaM80QHK%2BHYrc6lPjbUylz%2BQdLj%2FCoWDsGTKgVkoA1rJbq1ojnczWTxGwq3m2WhX5hlRCrOBUZCEO3DD5ZA%2BeJV4CpVHBxoOlCDlCfohcByrhUhpRPxZGV6XQd45OOnHKO6O8OtaOg6SS%2Bb1QS%2BAQqdL3%2BcwfKvJXzoBX1gjuh64u1ZqSOAvgVBevIasg7l3C%2FWv4uno0QY%2BP5oZKXIFUqbHbrZQ%2BxEoNkmfIeQ4LJDy0xPZZ3fK8Nosa0v0UI7vhizep1ijCuaVuq1Zfkz5TXJOB3NQ2ALnBbM30bLX%2FHo2Yusr8VWVEQNL4BNKx9BG%2FwoWnlUSxB8xpI4FqPiPzoM4IhKjl9lZmOFFwPl4YUqK4xzCnqmU4uaJJ%2B16oTNPNI159fHE7olk2NN20NPuxuhj3Mrl1HzyE%2BEFE%2BKtJl3lbJhUJiXewZdC4cCn0sXnXXwOr1qf2MMKXvYHs9y5UoC%2Bn0Xnyw7Y%2BCLS4KGYb1ga2FpeBAEMHyvVWtANJTZzlbsC7MPXGksAfxEUb4QfeLbLk3dL9j4zTGsV4RcIlDtkphE6mnGqr542Oq03Q%2B%2Fo0fmdMLy9SiqvzDx8aXEBjqkAdtpU26n1UvmHCoBzV6iGaIxFqxP0ZPXLdnr7E5XvX9p6ekcXJM7nMkCRSCWaK41egwlmNGQ%2BsR6mmNmeoAnvAtPg9Rg6MrrJoBsSkbBugX2aRzQYUVlvtQLafwLwnEGh9Y94vvxXQ1%2BpYzlLFNKWLFJBqS8AD8HsWXaWWMKoq8Z6vC%2BN8rz%2BLcCQATeptF2Z%2F9OEsXkS5PhauE70InjONKTtrt9&X-Amz-Signature=f54e8f52178e7432b0094c917a538ada38ce30610fb948721e54664c866a42a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## updating launch file

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
