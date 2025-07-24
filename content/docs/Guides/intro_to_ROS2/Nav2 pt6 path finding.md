---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T10:36:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T10:36:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQKK6X6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBsqp62kLBG%2BessPlThv5DyvnOHs4l3STNNmvoFnPohFAiEAw%2FsdlYk9n0dnxPP7Ya24klsgsZgGlDwmT0vDA5fRZNMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH8tWTdFXQ%2FdFfJR7ircAwLbp7wCd9k2gvOtlb2V2fKBQd1kjMYcK52IGke1MMk93hemtnpbeProWUkeWzprZ4JPL%2Fy3lncWFnKbDq4paLkDztW0DRgGRvER7Qr3jhB6Eel71tMHFqmo0OKxic57oeTpY%2BgiUv4ctwUNy04Z8kOIh4XzkJ4LOSi5PsbLdetcy3wsJ3jgj4Ty9Qa51i92cc6uMFw0Tj%2BN4FG1JH9ZkRU3th5ZuwRgAodx9YWsv%2FfznIjtZW4Cp8mHK1M8Hu%2BmNVAoAERmEsk93j1EUZvwRJ9sWm%2BDWs3I2dgTeqh2dfwRS2r4Q%2F4ROYrXq2FfyKY7R1zEOcxjnSo4Jo9wKnavSCPc254PNI7hbUfmzIj%2BS7gDWPNf7t5LOGc2DkwS6EX7l04%2B7CmYFnkY2Uqnj%2Fpl9BoUTdMZiVEcsXBcHYllcfMkctFYgxX4uxkJOGHQ93eHURgXMmdSQQPClNnBeGbxMkkCQsUKUgHysV5ceVIz83GBHXMGfs0e4rHJE7SnX8s49diMAqX2uUkmIty%2F09Uj4mXF0lOUcIrCx5x0aQyfDnF0gPx4qCHmV6erEA0ynCCT3jhDk9VYhapEm%2FVTKn418jS1pLapNc8Atqcjir9Br%2BUCQt4%2F3uJHFCuhtbnbMOiPisQGOqUBf9gwO3PZcIVwY3tWKyBdA3OWY3DvNciN1B%2BRjyfmkMy%2B4HdB%2BTjwq%2BZPmflkgIL8hLaShzrgaQHnfTOGldwVHWindrz9yJYVi8pP0j1BdoPQqmwjNm%2BX%2F91IAm1IyKnDPWXlAG8yrKfwUiNZWY%2BgbcwBm23c4M%2Fq7V7fezwkk6DP3JB6pDKQYtSnNCK7Irm3FE0sFO6tZw7vTCD0s3DF6YlvlAu7&X-Amz-Signature=ec986af2aa0572475ab432f02b484d969c4a9ea7158b19b463fa50d1421b575b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQKK6X6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBsqp62kLBG%2BessPlThv5DyvnOHs4l3STNNmvoFnPohFAiEAw%2FsdlYk9n0dnxPP7Ya24klsgsZgGlDwmT0vDA5fRZNMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH8tWTdFXQ%2FdFfJR7ircAwLbp7wCd9k2gvOtlb2V2fKBQd1kjMYcK52IGke1MMk93hemtnpbeProWUkeWzprZ4JPL%2Fy3lncWFnKbDq4paLkDztW0DRgGRvER7Qr3jhB6Eel71tMHFqmo0OKxic57oeTpY%2BgiUv4ctwUNy04Z8kOIh4XzkJ4LOSi5PsbLdetcy3wsJ3jgj4Ty9Qa51i92cc6uMFw0Tj%2BN4FG1JH9ZkRU3th5ZuwRgAodx9YWsv%2FfznIjtZW4Cp8mHK1M8Hu%2BmNVAoAERmEsk93j1EUZvwRJ9sWm%2BDWs3I2dgTeqh2dfwRS2r4Q%2F4ROYrXq2FfyKY7R1zEOcxjnSo4Jo9wKnavSCPc254PNI7hbUfmzIj%2BS7gDWPNf7t5LOGc2DkwS6EX7l04%2B7CmYFnkY2Uqnj%2Fpl9BoUTdMZiVEcsXBcHYllcfMkctFYgxX4uxkJOGHQ93eHURgXMmdSQQPClNnBeGbxMkkCQsUKUgHysV5ceVIz83GBHXMGfs0e4rHJE7SnX8s49diMAqX2uUkmIty%2F09Uj4mXF0lOUcIrCx5x0aQyfDnF0gPx4qCHmV6erEA0ynCCT3jhDk9VYhapEm%2FVTKn418jS1pLapNc8Atqcjir9Br%2BUCQt4%2F3uJHFCuhtbnbMOiPisQGOqUBf9gwO3PZcIVwY3tWKyBdA3OWY3DvNciN1B%2BRjyfmkMy%2B4HdB%2BTjwq%2BZPmflkgIL8hLaShzrgaQHnfTOGldwVHWindrz9yJYVi8pP0j1BdoPQqmwjNm%2BX%2F91IAm1IyKnDPWXlAG8yrKfwUiNZWY%2BgbcwBm23c4M%2Fq7V7fezwkk6DP3JB6pDKQYtSnNCK7Irm3FE0sFO6tZw7vTCD0s3DF6YlvlAu7&X-Amz-Signature=5af165e185428f4ec210bb3fd28db59042e9231d45de5148738e3a8e89cd3f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQKK6X6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBsqp62kLBG%2BessPlThv5DyvnOHs4l3STNNmvoFnPohFAiEAw%2FsdlYk9n0dnxPP7Ya24klsgsZgGlDwmT0vDA5fRZNMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH8tWTdFXQ%2FdFfJR7ircAwLbp7wCd9k2gvOtlb2V2fKBQd1kjMYcK52IGke1MMk93hemtnpbeProWUkeWzprZ4JPL%2Fy3lncWFnKbDq4paLkDztW0DRgGRvER7Qr3jhB6Eel71tMHFqmo0OKxic57oeTpY%2BgiUv4ctwUNy04Z8kOIh4XzkJ4LOSi5PsbLdetcy3wsJ3jgj4Ty9Qa51i92cc6uMFw0Tj%2BN4FG1JH9ZkRU3th5ZuwRgAodx9YWsv%2FfznIjtZW4Cp8mHK1M8Hu%2BmNVAoAERmEsk93j1EUZvwRJ9sWm%2BDWs3I2dgTeqh2dfwRS2r4Q%2F4ROYrXq2FfyKY7R1zEOcxjnSo4Jo9wKnavSCPc254PNI7hbUfmzIj%2BS7gDWPNf7t5LOGc2DkwS6EX7l04%2B7CmYFnkY2Uqnj%2Fpl9BoUTdMZiVEcsXBcHYllcfMkctFYgxX4uxkJOGHQ93eHURgXMmdSQQPClNnBeGbxMkkCQsUKUgHysV5ceVIz83GBHXMGfs0e4rHJE7SnX8s49diMAqX2uUkmIty%2F09Uj4mXF0lOUcIrCx5x0aQyfDnF0gPx4qCHmV6erEA0ynCCT3jhDk9VYhapEm%2FVTKn418jS1pLapNc8Atqcjir9Br%2BUCQt4%2F3uJHFCuhtbnbMOiPisQGOqUBf9gwO3PZcIVwY3tWKyBdA3OWY3DvNciN1B%2BRjyfmkMy%2B4HdB%2BTjwq%2BZPmflkgIL8hLaShzrgaQHnfTOGldwVHWindrz9yJYVi8pP0j1BdoPQqmwjNm%2BX%2F91IAm1IyKnDPWXlAG8yrKfwUiNZWY%2BgbcwBm23c4M%2Fq7V7fezwkk6DP3JB6pDKQYtSnNCK7Irm3FE0sFO6tZw7vTCD0s3DF6YlvlAu7&X-Amz-Signature=20411399e98cfce8c22bc52503039fded55ed9122e5420c883b03c57da028146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQKK6X6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBsqp62kLBG%2BessPlThv5DyvnOHs4l3STNNmvoFnPohFAiEAw%2FsdlYk9n0dnxPP7Ya24klsgsZgGlDwmT0vDA5fRZNMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH8tWTdFXQ%2FdFfJR7ircAwLbp7wCd9k2gvOtlb2V2fKBQd1kjMYcK52IGke1MMk93hemtnpbeProWUkeWzprZ4JPL%2Fy3lncWFnKbDq4paLkDztW0DRgGRvER7Qr3jhB6Eel71tMHFqmo0OKxic57oeTpY%2BgiUv4ctwUNy04Z8kOIh4XzkJ4LOSi5PsbLdetcy3wsJ3jgj4Ty9Qa51i92cc6uMFw0Tj%2BN4FG1JH9ZkRU3th5ZuwRgAodx9YWsv%2FfznIjtZW4Cp8mHK1M8Hu%2BmNVAoAERmEsk93j1EUZvwRJ9sWm%2BDWs3I2dgTeqh2dfwRS2r4Q%2F4ROYrXq2FfyKY7R1zEOcxjnSo4Jo9wKnavSCPc254PNI7hbUfmzIj%2BS7gDWPNf7t5LOGc2DkwS6EX7l04%2B7CmYFnkY2Uqnj%2Fpl9BoUTdMZiVEcsXBcHYllcfMkctFYgxX4uxkJOGHQ93eHURgXMmdSQQPClNnBeGbxMkkCQsUKUgHysV5ceVIz83GBHXMGfs0e4rHJE7SnX8s49diMAqX2uUkmIty%2F09Uj4mXF0lOUcIrCx5x0aQyfDnF0gPx4qCHmV6erEA0ynCCT3jhDk9VYhapEm%2FVTKn418jS1pLapNc8Atqcjir9Br%2BUCQt4%2F3uJHFCuhtbnbMOiPisQGOqUBf9gwO3PZcIVwY3tWKyBdA3OWY3DvNciN1B%2BRjyfmkMy%2B4HdB%2BTjwq%2BZPmflkgIL8hLaShzrgaQHnfTOGldwVHWindrz9yJYVi8pP0j1BdoPQqmwjNm%2BX%2F91IAm1IyKnDPWXlAG8yrKfwUiNZWY%2BgbcwBm23c4M%2Fq7V7fezwkk6DP3JB6pDKQYtSnNCK7Irm3FE0sFO6tZw7vTCD0s3DF6YlvlAu7&X-Amz-Signature=8afff221054540118f5a46fe1c2918ee8d2eafed71d91b0a32907233c7df737a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQKK6X6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBsqp62kLBG%2BessPlThv5DyvnOHs4l3STNNmvoFnPohFAiEAw%2FsdlYk9n0dnxPP7Ya24klsgsZgGlDwmT0vDA5fRZNMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH8tWTdFXQ%2FdFfJR7ircAwLbp7wCd9k2gvOtlb2V2fKBQd1kjMYcK52IGke1MMk93hemtnpbeProWUkeWzprZ4JPL%2Fy3lncWFnKbDq4paLkDztW0DRgGRvER7Qr3jhB6Eel71tMHFqmo0OKxic57oeTpY%2BgiUv4ctwUNy04Z8kOIh4XzkJ4LOSi5PsbLdetcy3wsJ3jgj4Ty9Qa51i92cc6uMFw0Tj%2BN4FG1JH9ZkRU3th5ZuwRgAodx9YWsv%2FfznIjtZW4Cp8mHK1M8Hu%2BmNVAoAERmEsk93j1EUZvwRJ9sWm%2BDWs3I2dgTeqh2dfwRS2r4Q%2F4ROYrXq2FfyKY7R1zEOcxjnSo4Jo9wKnavSCPc254PNI7hbUfmzIj%2BS7gDWPNf7t5LOGc2DkwS6EX7l04%2B7CmYFnkY2Uqnj%2Fpl9BoUTdMZiVEcsXBcHYllcfMkctFYgxX4uxkJOGHQ93eHURgXMmdSQQPClNnBeGbxMkkCQsUKUgHysV5ceVIz83GBHXMGfs0e4rHJE7SnX8s49diMAqX2uUkmIty%2F09Uj4mXF0lOUcIrCx5x0aQyfDnF0gPx4qCHmV6erEA0ynCCT3jhDk9VYhapEm%2FVTKn418jS1pLapNc8Atqcjir9Br%2BUCQt4%2F3uJHFCuhtbnbMOiPisQGOqUBf9gwO3PZcIVwY3tWKyBdA3OWY3DvNciN1B%2BRjyfmkMy%2B4HdB%2BTjwq%2BZPmflkgIL8hLaShzrgaQHnfTOGldwVHWindrz9yJYVi8pP0j1BdoPQqmwjNm%2BX%2F91IAm1IyKnDPWXlAG8yrKfwUiNZWY%2BgbcwBm23c4M%2Fq7V7fezwkk6DP3JB6pDKQYtSnNCK7Irm3FE0sFO6tZw7vTCD0s3DF6YlvlAu7&X-Amz-Signature=d02dd231f3a6e905fa36c55ee3f4c969df30aa408822f21fb6e393b374fec5b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTQKK6X6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBsqp62kLBG%2BessPlThv5DyvnOHs4l3STNNmvoFnPohFAiEAw%2FsdlYk9n0dnxPP7Ya24klsgsZgGlDwmT0vDA5fRZNMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH8tWTdFXQ%2FdFfJR7ircAwLbp7wCd9k2gvOtlb2V2fKBQd1kjMYcK52IGke1MMk93hemtnpbeProWUkeWzprZ4JPL%2Fy3lncWFnKbDq4paLkDztW0DRgGRvER7Qr3jhB6Eel71tMHFqmo0OKxic57oeTpY%2BgiUv4ctwUNy04Z8kOIh4XzkJ4LOSi5PsbLdetcy3wsJ3jgj4Ty9Qa51i92cc6uMFw0Tj%2BN4FG1JH9ZkRU3th5ZuwRgAodx9YWsv%2FfznIjtZW4Cp8mHK1M8Hu%2BmNVAoAERmEsk93j1EUZvwRJ9sWm%2BDWs3I2dgTeqh2dfwRS2r4Q%2F4ROYrXq2FfyKY7R1zEOcxjnSo4Jo9wKnavSCPc254PNI7hbUfmzIj%2BS7gDWPNf7t5LOGc2DkwS6EX7l04%2B7CmYFnkY2Uqnj%2Fpl9BoUTdMZiVEcsXBcHYllcfMkctFYgxX4uxkJOGHQ93eHURgXMmdSQQPClNnBeGbxMkkCQsUKUgHysV5ceVIz83GBHXMGfs0e4rHJE7SnX8s49diMAqX2uUkmIty%2F09Uj4mXF0lOUcIrCx5x0aQyfDnF0gPx4qCHmV6erEA0ynCCT3jhDk9VYhapEm%2FVTKn418jS1pLapNc8Atqcjir9Br%2BUCQt4%2F3uJHFCuhtbnbMOiPisQGOqUBf9gwO3PZcIVwY3tWKyBdA3OWY3DvNciN1B%2BRjyfmkMy%2B4HdB%2BTjwq%2BZPmflkgIL8hLaShzrgaQHnfTOGldwVHWindrz9yJYVi8pP0j1BdoPQqmwjNm%2BX%2F91IAm1IyKnDPWXlAG8yrKfwUiNZWY%2BgbcwBm23c4M%2Fq7V7fezwkk6DP3JB6pDKQYtSnNCK7Irm3FE0sFO6tZw7vTCD0s3DF6YlvlAu7&X-Amz-Signature=d7a4259bdb6c1065aa35a0ccb9a4e4783ef461924fb0374df8eb82bed996595f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
