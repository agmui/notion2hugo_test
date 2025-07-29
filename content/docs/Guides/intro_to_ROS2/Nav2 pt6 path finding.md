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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=a4a69d3cc3a458cf5c525dd611406116ceafa4226ed45a678e6d75ea77f23feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=9fd112e550c0849937dce8dd404e7c1bcca215f2e3dbd8c314597bbbf9f3fc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=ba12f5e9764e9b9f3365b14e9aa38f041c095fee126ef9584cebdfa4d27bdd86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=fb02e0b0bfc51ef90624f1954d1d2dfe7356649d5405c0484060120d52f1c29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=10daa0c2a975ee820a7829ed4a4c98a23a281ce155025acc96dea47cd1c02843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=3a560d116fdc1236df030122aaa3c4e3913dae5a401a9c4d092b28ad896a2c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=1472012a126f659f18c86869fc729f26e2a6093cd3136c734fbc6326448655fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=61ed32a957581a1078a4f16ab2580b055fd6847f386e99d475ed0a862ef113a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=e0b7ee9c0da4fd47cec737a8b8c33d52f1ffd0b3ab1c6447dcddf136199032c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=3b8dfd37d2975a708f9c5c7b8394548b3c7a247370a24eb08bce1cf8a242dfec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=eec053c53884349475c36e4c15ee32ca299df2e4c8b19919f445e868cc04c536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=92609af7b8ac500dfaf70a1091834765379a8f6c08e5931ee47a0da9aea8e14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC2GAVQH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRo2kjxT1P92EP4mcJzuU%2FstTAK0Zx2y%2FsPHpGBZ6UzAiBlFugJpq3TEk%2B1aYehb%2Bos%2FmeTz1kvuBGS5Z2Rl%2BYLaSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3xrSdyiK8GBmmBgKtwDsxZvZEpFQiQxWPLQ5XsRyG%2FscPCoC8Pvm4Tv5H5sUmmSvkRrh7Ubs8dfzlddzjWG6vcP3mjY7r%2BH5sDgfRsc2ZoxWMugb57EZAgn0XL1j6SyccYIi35Qe6XwNnPReJOBUEtWEfSI06bXXUEuHhNjBOOFRJos8TmyeLxAp3ciM%2BdGtusjjM7lUd9FXtaHXBD5aNvdGCIpBX2WESddmZ6CGvGAR4sMzz2VBRZIsl28kk63fr8I48G2EVuUC6yw9GAq5PRK%2B6IYcFf9FEJOHkOhy%2BQ%2Fl1PlLDg%2F%2FwKnn3Ft2azfbMuTYbenxMFGgz%2FmnkfThDl2NnCiEvSpCMQ43Zny%2BtRjS9cGJdnpYW200D6k40zV4%2Bj4RGKEsyqjC9gtu3SgTdwLc1zeqmU%2FZ7o3d%2BNy1%2BAUAh9Qa9Vhe1ZNXloSvXZjpmY%2FKyvz%2BhW9CUecNyovYvq2%2Fq5FisDjBcsHGl6OrDU1y1vApECYeHXgqHBs0ezmNBoWNKe4QIDIZl4%2FOCH%2B8oluMOHaNwBT%2FJMMBvfdzJ%2BUOWCSdknSOox3%2FavwMNNxrf%2FW2F%2BpSVE34Xkgr2N1F7rDlwI3X61V4NL5DyA9OA8ts5gpyjV4Pt1QnM90Hq8pY0001eexwJaHDlsw9tykxAY6pgFIsroaILRMOgafB7wndKH%2BPpX4a3kRtl9ZO5%2Bjtc%2BeyZQC1yTSjojYNMfUkEpksfmic8w5NQSlmLNCPYWzHuI%2BqHaRj9so%2FeFVKqJTttOPYvB3nSUErwmUuQ%2Br7mfTYBr%2FAdkXlTD%2FCgGwchQDDrRKcbj5b%2FCOT%2B7MQeQKqSDdATAspXO4NN0MvPRsk6hAyDjhd1uSi%2BNg%2Ba8ms%2FZGDzyCiGDaM74R&X-Amz-Signature=3f6b02d63b58dfe8713481f6a049850cb74d49fd9f470b867bb726d47d52fdd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
