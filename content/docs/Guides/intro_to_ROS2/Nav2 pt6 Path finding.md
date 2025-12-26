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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=a1f499c1e94bee48df56922443a1f5b4c996de272adf06470e3d57614dd8ae51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=ebb09a3648551d940d9953e19a943313cdf85b4221798da0069b4e0f15120691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=13f46b3c0ce29f968581ef5f238dc36a753df491e6c60464eda6e813512e6667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=f9a6b9eb88048a2848dd5295b649639ca22a5fc8b4354fc64c66a8fb985a6ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=4d2f29afc062b68cc8037282ce47e594a7a37736337557f03479e455c81c3950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=3aa4abfe7946170b659d78b050bcc2d65cf6226dc6003a41b163e3064d95a807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=0362e9f38ef32013fcd5c5237d82de224d92c73522f76bc6bfb61970554bda18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=b9c08db2524e2df02694c07933c3ce306f0e753fca92b29a13170793983bc631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=9a7e1f76f8613a431e1efa8febfd37afcb216ddfb9dc5f55f90cd401838b632b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=05c49809e60f05cd30078c45a54581780bca8367b9c7e26a5f28fbc85cf7f636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=0dd595781960bcb5e4ab5de44bde7c19f83e1b52bbdec5de35ae39fdc7cf3222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=36a41dc3c2cea36d62076be11a1b27c58ce03eea45d0ce3e283ec6e69ff8dbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYFUSYQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDWDzYCKx%2BldDqJ%2FRp1m6WGRelcxr%2FlGJBN%2FTUExqoE%2BAiEAqZWdAMlXWEpOLqKg1ozQTtkfVQywCiQ19OuGyNxMNgEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCqG50nDC3zFSSm13ircA3nSr%2F6eOJwax1RcrJoX9f2BWxEGJmL2zuK9prXMPz1x%2B1fFUo3GWDfUqxej5RFFTxuTbgEMm6geFgXKEmXItokdF5sUXl6XcEhSIv5NnMYhrah2i%2BxNd8BMCy1SEEw0s%2FwDQPTgKQgw%2BdrGMspV2UgI6khKiVDhIWZ2yHnwaz%2FsVDzlds5DRs6gDMFHt%2B6Vpn%2FfiRgdVH5pqruumyl4b4keIkk%2Bu%2FtQSv6lLt4rEY%2FjhOCq5J1S7k2WDDcGAdK20uV2%2FHCZYAU826v%2BL6vqFeR2zgKTuWlK2NZkR102g%2F0%2FqfoH3FaFP%2Fj9QAddozMMjUnQJphbJK203RnJO5Q2jSno2s2Yvvx8oVNk168ZcUnJR%2B8D8NQ%2Fdv0kgLG1h4f3AkrmmliWptV8OKqwxUqDyWZAb8Pkr%2FsyWUk9Bx0av6rUUX4IPBALXaH%2BD7pXNLKxJmo1BCdBzIy1iVMCkQgkCv4WW86lPqSRz0njCxh0oWp%2B3WtVDLBi2NhX%2Fgm%2FN3o9mB%2BAuYqWbbGBe%2FWZb%2FLlg3jQmthlTOU9QzVxer1HXTO9gc0qdNV4EKQwfGgsQJ3Po8uBctE2R9kioUoB21HLFFAv17HVSGfBz9pcbPvzMlKVdlFRd2l2is5k%2FsnsMJyztsoGOqUB%2BAteICbSmT0aNZ7jeY%2BibbmR2JtIAxQbBXfUAxn4h7CnjMoZZgUwJkhKWaDbObcm62NKBjiwrIyCBV%2FuJI5%2Fn%2BMw6e0tnRebLaZNMefNH0ggAzAnVPaQ0io%2Fu1oRW9UPjorornT5EACiZhTCkF%2B8zM2dzq7OZnF2x38VOlh%2FHQOUTqvovUnvOeoSzGqEtYzUYoGagtDYMTJYCCsTf7J%2FJJhKsvke&X-Amz-Signature=b55b61974e349d4b0116862a601c1d079bb92403834e0730daa864da5cfa1cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
