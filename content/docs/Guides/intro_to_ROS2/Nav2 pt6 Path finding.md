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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=d42c927cdd6fd9f5702377535238105eef1a835c268589ff4d701abf1bb8834f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=fb5533ba16465c00daa5cd6ccc3d058a7b27e8e04e0d34666e53433551081f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=facb8dce295632702c32b94fc94f4d411e1dca9923996ece59cfadbed6a44378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=6c21fc3374fe9e0cb317cc18ba9f029ed4604ca9178b7dd56f33877970d61ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=364dd27ea93899e62815bfd9b0e3f177619bb2681ada0d01d4a3d4211df7f0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=f57483245799a3927a461768c2559cb1e47ee75f8b90fd8c18b3a85a7f1a5d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=3dccec1d705fdebcc0c75b0e1c311ba591e6217ee7c215450ef3013016f9a9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=97ed0e396ccb854ab770eec0ecad9acb42f40436dceaa1237f2c1a184b311df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=f1fafa9b647a3e8100b1c54b619be5fa43c39cbb608d2074927051d9b0f9323a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=ff7197780d6ede42203d52efdfea9c6d7b1cd5ada810eaa077ce0eaa0ab91a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=ed6de76ce56c1d54e2ec42b5fff662b42b95913a06cb7130d3ee6187cf212577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=7b740925f5b101321f6434834d38cf9cd7d42292850f4331e4597be9c7414673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTUXEZ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l19WlG79NdYmPAc8CwgPXVxKc67%2BTvYKOfs1bK6d8QIgU0N%2F5G8R8xbXiTCXGQ%2F4oQVMHBMXwqdyJomrZcceOtkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD0BLXMTOqDngSsGxSrcAwJKZEt6kewipNy7KHZrOgxBgUOxTgbSSAzjyThqS7vPfwulc61bkuHsffG46lqAAbgUV7ibx0YwlXuF9IunZK43F6wyt9dvQ9%2BVh5aORC2lmoeCzmH2tWJ9FQFMTn%2F%2B11wdL6OyBIUW1%2BLzn00LsZIBSX9bmkCLW3ycG7t6ip4aQcCaciC81Qvg06kiMM186ejJzKaZ29JU9WVHU5VJ0BGh54WAqElemfpY%2BSdFEsd%2FJQ0UNF2nuXlCtG5VpJ8lJRGtIzYO9lp5fCiw73GQvmJT64pTo6TWQoQSUTFM88ndB2GwjdNyvk%2BOWy0eCSQYJNQBzVZ5r%2FiVj7o26q2emAeK3oZERfgkpsdtdjT8ZP1IXTVj85tpiPbNRl6NGddPFvgfuGDUlZXnus1%2BRkF%2BEXY3Zjm64YATPK4Y4A%2FrPnby5RyRb7%2BM2TBHDGtmp7UwcSUk2Ctz0R3dafVBAk5XOj2qdv2ymbJvb%2Bs35tSJ9EKNDk7Ib9b8DYAJJywmWFUHGn7SZFzfmX62lyyaR5c70CzOiJxtqIXusFo1TtBeg92p2b1zGXwpnSdGMgkzm8D5AnfKzh9YV7tcAtgpD5qJrI6eagTaMpqxDWswrODPngSceNn7xr9X0b5lROpuMPqt9sQGOqUB3Ch1EdXuRmRyOg1EYdU%2F8f4vi6QU9Igvwjf662g1egPVCsq%2BiKcd09%2FZGi9f7ayz8BoIpQ0d5zotEXQ%2Fz3GHnM7M1QyGuBbPtv2Mrtd9Q8H7P8j65NhB7gEhl0677hn4vv5gGH4tZMtJmQ9l%2B4rrKPrDg0IYNOWgaIYgphk6VA%2FVXuCW6dHCWiBcBC4Lotns%2B3c1nfUb9TBwVNcZ4%2F8wWSErgGNf&X-Amz-Signature=684a371e2294016e2f860e1906b47f1926c4a6071129497c01fdbcc9773a4f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
