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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=14982e497853b009498c87473389776a5201dd96390222dfcf1f8d2d04982f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=8cf5b32169f23a227c02ae2ead06347bb89dacb186407491e43e6c2f6e32fb35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=ad4d6d0453cd05686cca7bd3bd99861205f30b86224948532d8cc4fecbbf3a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=7e8d09271cecbaed5516c9c8e7f2d2eee00db58277c035e3534d094aa5b0c483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=6cd3ccc869e1e149ea175575118df38aa64873d29cd0d9878ded7eaa5f6232b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=ffd8a320e0c64bb6b07bb742df92c194a660202d25c8d157e7929fe343d9a643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=092a0e161f993778a6ab7a089059b539dd81c3a372db8e8e493add816d08807b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=f8171f9e71ca38cc233bf8745f24e0eba5fecdf905b55aa83f0e180116c0cd70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=3993c63921642828e4d6c734071c51db870e9503343f9cf729f54a3e902ebd8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=3a8c9bf07fea0ea00d374ccebf99a90a7c519c52d601d50ad384232dcd4a62e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=e6afcf0516b2c19cfdb00158210aacbe7491f360da8f3ee22746d6965c00eea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=9e8918f1d59e22705ae32c77ce3202cf6d06f267d28d6269247493b25e4f71cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57R5AVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHUdKYYLALbWzq2tU%2FeypsgJ1vBOlaZNskbjqq61Jne%2BAiEAteOK0UOI4PSoiAB2qGHNEPOUYiKRv8AYQL6a8KiRWx8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDItQb9C0Vb5iBXQBNCrcA7dfu7%2FjInSpYysHv3owCVrp70HpIrDDH6W0n1Ili1lEle6bV%2BXh2gHoie5d9s3EDIgDR5jLeO638KRh%2FrkXZAas4ZdKcZLu7Tf5XldeRKaClSS%2Fn7H%2BnzYByWP0C3Ljlph0zX24PFL7M2wDi2zOHcKYFMc1yylaqNFYsixuKSYfc9XlwRxxq%2BdVkB3YMdz%2BkBw0na4KCi6UJKPUYxMtPUu%2F7TOLWn8rLkuqtF7Mw7Kowcu%2Be4Rh07vMGOCGfCOIY%2BPfGcCc%2BOQIdH4P77CtPjd1Qkgg2jD493yV%2BHy%2FiP2A8hjV2dRG0MkXkx1XUXa3poiu8BszraFrM4bDK1E1GC2iku9nr59aCqr%2FkAZhiq6VwET3Vpew%2FuADvslCUcMxS8bz7D5YDXyCpoASfVlOtlwBdU3dpkMsprIQAgQicb1P4Vq2vgb7uBfaohnbCqyVgENVAqsU%2FmxGtgsaHsEvGwsRsyyAZJa9n%2BsmHZI8GWndUWd02q%2BJ4TztwxxkBFnfiIyGcr6lOpEo8VRnarokzHOAQ%2FaKom%2FYLILNo4%2BNVHEu4bUEly7WkAUx6J8vvxaWKBjndEgJXhmbPNFj45w1NUj2King8iFHfbXXXBRnqA%2FtZoeQSPm5tPEaOqs6MJ2nwsQGOqUBzu8PDyI6voKtDLyUQCOvrjN4qbAf1nqfnoxDB1QeKLR6REvZyl7IXFic98KMo%2B%2BtvSuL7vbvDsSdgsQDiGNnGPkOUXSbIK7m4LUDeOxIPjvVy8seO8WJqL%2B4zFjTkgEiFYwOcHN%2BRyhJirOTivAd0mKznWICYmPlpZTtsnx8h3goTVHV%2FdH9Tp7TwyLeqAtkTyf1g68atY7sK2WspKSAkLt%2FvYQ0&X-Amz-Signature=7643d3823e74e5818c796994a29d57ee5faaeb22d0371217230989f952884f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
