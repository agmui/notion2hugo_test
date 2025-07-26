---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGAY3AI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC78aSdro14eAt%2FbpLc5rGlQ22yWNpoA%2BxHEKs5p2DAQgIgIQwp3KAu6y1wtxA9PvZjyNxWzUT9v2%2B6dPzOcb22mQQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOP20C532P07k777xSrcA13JU1r6Z4lS%2FY0PazjjODWsJZ%2BavumjqtiEnBMLVjKo5tj8GY9l1Oa5KqsoSjwyaY62Gx8753WoaDW%2B7Lsk8d6v8nzObebBj83Xyxuz1kikExdg1pijR1P9Z3YcecFpnBKm0GxVElAJhv%2BPkJqlNvkwW6pmPEKlg29h0YPcokb%2BYSgp%2BM3%2FnoMncsXCR%2FTUEq%2B%2Flrx93BZm9LLwMe2LLIOAFY40pVQWYRjT7xmVxczE3gToUlW4%2Fv3R7w3E4DykdNDX5bFfdnC5F1eHoqN0eI9JS1NJ0KDmF3b4CWK2MyWZoKnf4PW2l9pn5%2F7OSfSyaZtSPCyjaXrYnoeoOAiO3PlRzwu4CPyegBWEWeuQgR7Y0hPhiCFTGwUoddg%2Fsa9sLz8xh6nBj7xJFag8GFMxnnvuBy9vfQOzjZyZtmCyry3p%2FUJElOnI64qvk4jTvK1vodMx8nL1sYOh0PzuwTfmu%2FGaYIQkgmPvIGpnYBNrle%2B1wf17Ncqf1K5tFQb14xXLFeNJJDLsY2Y5%2Bqj0ysQRJFoXiByQDiartZ809Bp9fIwF1x8C0i2R5RIga1kqGW00KOm415NDuYpxwEUd%2FP8fqaZckzFAPDbXuCsOawpnQ6%2FUyCSdt7g2sZiLHXyrMP3rkMQGOqUBorKkLE8sQfPb%2FURPshuvkNFONFytkbr8Z%2BhD4LYgxeUbPl2R8bMYBUZypv7gDBW50FZmNa6v52YrTwv2DLVXiYv7AHEVIm4gFeWt5NkqE6bUVcaNsVjdEEGVEjuKDMozy5Y7r%2Bi%2Fm%2Bfq0Hz3d4y5WAVE2rEf1srgu5NBRsyIddadsqyJeLQWjjRmWUCbeK9S7PSm0MKG1BuOQIkmAGTfHhxuO6be&X-Amz-Signature=2570e14e4a9320ca2d7f0e7bf5308b9bc2ef19b07922a1c2c2e674e7d8c61ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGAY3AI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC78aSdro14eAt%2FbpLc5rGlQ22yWNpoA%2BxHEKs5p2DAQgIgIQwp3KAu6y1wtxA9PvZjyNxWzUT9v2%2B6dPzOcb22mQQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOP20C532P07k777xSrcA13JU1r6Z4lS%2FY0PazjjODWsJZ%2BavumjqtiEnBMLVjKo5tj8GY9l1Oa5KqsoSjwyaY62Gx8753WoaDW%2B7Lsk8d6v8nzObebBj83Xyxuz1kikExdg1pijR1P9Z3YcecFpnBKm0GxVElAJhv%2BPkJqlNvkwW6pmPEKlg29h0YPcokb%2BYSgp%2BM3%2FnoMncsXCR%2FTUEq%2B%2Flrx93BZm9LLwMe2LLIOAFY40pVQWYRjT7xmVxczE3gToUlW4%2Fv3R7w3E4DykdNDX5bFfdnC5F1eHoqN0eI9JS1NJ0KDmF3b4CWK2MyWZoKnf4PW2l9pn5%2F7OSfSyaZtSPCyjaXrYnoeoOAiO3PlRzwu4CPyegBWEWeuQgR7Y0hPhiCFTGwUoddg%2Fsa9sLz8xh6nBj7xJFag8GFMxnnvuBy9vfQOzjZyZtmCyry3p%2FUJElOnI64qvk4jTvK1vodMx8nL1sYOh0PzuwTfmu%2FGaYIQkgmPvIGpnYBNrle%2B1wf17Ncqf1K5tFQb14xXLFeNJJDLsY2Y5%2Bqj0ysQRJFoXiByQDiartZ809Bp9fIwF1x8C0i2R5RIga1kqGW00KOm415NDuYpxwEUd%2FP8fqaZckzFAPDbXuCsOawpnQ6%2FUyCSdt7g2sZiLHXyrMP3rkMQGOqUBorKkLE8sQfPb%2FURPshuvkNFONFytkbr8Z%2BhD4LYgxeUbPl2R8bMYBUZypv7gDBW50FZmNa6v52YrTwv2DLVXiYv7AHEVIm4gFeWt5NkqE6bUVcaNsVjdEEGVEjuKDMozy5Y7r%2Bi%2Fm%2Bfq0Hz3d4y5WAVE2rEf1srgu5NBRsyIddadsqyJeLQWjjRmWUCbeK9S7PSm0MKG1BuOQIkmAGTfHhxuO6be&X-Amz-Signature=e2f4a36456091ae8654dbfa54d85fa78648b31add1e77182396cfe0a04bc7e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGAY3AI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC78aSdro14eAt%2FbpLc5rGlQ22yWNpoA%2BxHEKs5p2DAQgIgIQwp3KAu6y1wtxA9PvZjyNxWzUT9v2%2B6dPzOcb22mQQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOP20C532P07k777xSrcA13JU1r6Z4lS%2FY0PazjjODWsJZ%2BavumjqtiEnBMLVjKo5tj8GY9l1Oa5KqsoSjwyaY62Gx8753WoaDW%2B7Lsk8d6v8nzObebBj83Xyxuz1kikExdg1pijR1P9Z3YcecFpnBKm0GxVElAJhv%2BPkJqlNvkwW6pmPEKlg29h0YPcokb%2BYSgp%2BM3%2FnoMncsXCR%2FTUEq%2B%2Flrx93BZm9LLwMe2LLIOAFY40pVQWYRjT7xmVxczE3gToUlW4%2Fv3R7w3E4DykdNDX5bFfdnC5F1eHoqN0eI9JS1NJ0KDmF3b4CWK2MyWZoKnf4PW2l9pn5%2F7OSfSyaZtSPCyjaXrYnoeoOAiO3PlRzwu4CPyegBWEWeuQgR7Y0hPhiCFTGwUoddg%2Fsa9sLz8xh6nBj7xJFag8GFMxnnvuBy9vfQOzjZyZtmCyry3p%2FUJElOnI64qvk4jTvK1vodMx8nL1sYOh0PzuwTfmu%2FGaYIQkgmPvIGpnYBNrle%2B1wf17Ncqf1K5tFQb14xXLFeNJJDLsY2Y5%2Bqj0ysQRJFoXiByQDiartZ809Bp9fIwF1x8C0i2R5RIga1kqGW00KOm415NDuYpxwEUd%2FP8fqaZckzFAPDbXuCsOawpnQ6%2FUyCSdt7g2sZiLHXyrMP3rkMQGOqUBorKkLE8sQfPb%2FURPshuvkNFONFytkbr8Z%2BhD4LYgxeUbPl2R8bMYBUZypv7gDBW50FZmNa6v52YrTwv2DLVXiYv7AHEVIm4gFeWt5NkqE6bUVcaNsVjdEEGVEjuKDMozy5Y7r%2Bi%2Fm%2Bfq0Hz3d4y5WAVE2rEf1srgu5NBRsyIddadsqyJeLQWjjRmWUCbeK9S7PSm0MKG1BuOQIkmAGTfHhxuO6be&X-Amz-Signature=f4c03e02e8093058cac1c6a6ad0b0ebeeef48d6ce8c6cf62eddaaaf5cc2dac94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGAY3AI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC78aSdro14eAt%2FbpLc5rGlQ22yWNpoA%2BxHEKs5p2DAQgIgIQwp3KAu6y1wtxA9PvZjyNxWzUT9v2%2B6dPzOcb22mQQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOP20C532P07k777xSrcA13JU1r6Z4lS%2FY0PazjjODWsJZ%2BavumjqtiEnBMLVjKo5tj8GY9l1Oa5KqsoSjwyaY62Gx8753WoaDW%2B7Lsk8d6v8nzObebBj83Xyxuz1kikExdg1pijR1P9Z3YcecFpnBKm0GxVElAJhv%2BPkJqlNvkwW6pmPEKlg29h0YPcokb%2BYSgp%2BM3%2FnoMncsXCR%2FTUEq%2B%2Flrx93BZm9LLwMe2LLIOAFY40pVQWYRjT7xmVxczE3gToUlW4%2Fv3R7w3E4DykdNDX5bFfdnC5F1eHoqN0eI9JS1NJ0KDmF3b4CWK2MyWZoKnf4PW2l9pn5%2F7OSfSyaZtSPCyjaXrYnoeoOAiO3PlRzwu4CPyegBWEWeuQgR7Y0hPhiCFTGwUoddg%2Fsa9sLz8xh6nBj7xJFag8GFMxnnvuBy9vfQOzjZyZtmCyry3p%2FUJElOnI64qvk4jTvK1vodMx8nL1sYOh0PzuwTfmu%2FGaYIQkgmPvIGpnYBNrle%2B1wf17Ncqf1K5tFQb14xXLFeNJJDLsY2Y5%2Bqj0ysQRJFoXiByQDiartZ809Bp9fIwF1x8C0i2R5RIga1kqGW00KOm415NDuYpxwEUd%2FP8fqaZckzFAPDbXuCsOawpnQ6%2FUyCSdt7g2sZiLHXyrMP3rkMQGOqUBorKkLE8sQfPb%2FURPshuvkNFONFytkbr8Z%2BhD4LYgxeUbPl2R8bMYBUZypv7gDBW50FZmNa6v52YrTwv2DLVXiYv7AHEVIm4gFeWt5NkqE6bUVcaNsVjdEEGVEjuKDMozy5Y7r%2Bi%2Fm%2Bfq0Hz3d4y5WAVE2rEf1srgu5NBRsyIddadsqyJeLQWjjRmWUCbeK9S7PSm0MKG1BuOQIkmAGTfHhxuO6be&X-Amz-Signature=8ce8abcb4ac756c8b8030916d36773ea32f19203c7f949816f4423a8d74dcb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGAY3AI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC78aSdro14eAt%2FbpLc5rGlQ22yWNpoA%2BxHEKs5p2DAQgIgIQwp3KAu6y1wtxA9PvZjyNxWzUT9v2%2B6dPzOcb22mQQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOP20C532P07k777xSrcA13JU1r6Z4lS%2FY0PazjjODWsJZ%2BavumjqtiEnBMLVjKo5tj8GY9l1Oa5KqsoSjwyaY62Gx8753WoaDW%2B7Lsk8d6v8nzObebBj83Xyxuz1kikExdg1pijR1P9Z3YcecFpnBKm0GxVElAJhv%2BPkJqlNvkwW6pmPEKlg29h0YPcokb%2BYSgp%2BM3%2FnoMncsXCR%2FTUEq%2B%2Flrx93BZm9LLwMe2LLIOAFY40pVQWYRjT7xmVxczE3gToUlW4%2Fv3R7w3E4DykdNDX5bFfdnC5F1eHoqN0eI9JS1NJ0KDmF3b4CWK2MyWZoKnf4PW2l9pn5%2F7OSfSyaZtSPCyjaXrYnoeoOAiO3PlRzwu4CPyegBWEWeuQgR7Y0hPhiCFTGwUoddg%2Fsa9sLz8xh6nBj7xJFag8GFMxnnvuBy9vfQOzjZyZtmCyry3p%2FUJElOnI64qvk4jTvK1vodMx8nL1sYOh0PzuwTfmu%2FGaYIQkgmPvIGpnYBNrle%2B1wf17Ncqf1K5tFQb14xXLFeNJJDLsY2Y5%2Bqj0ysQRJFoXiByQDiartZ809Bp9fIwF1x8C0i2R5RIga1kqGW00KOm415NDuYpxwEUd%2FP8fqaZckzFAPDbXuCsOawpnQ6%2FUyCSdt7g2sZiLHXyrMP3rkMQGOqUBorKkLE8sQfPb%2FURPshuvkNFONFytkbr8Z%2BhD4LYgxeUbPl2R8bMYBUZypv7gDBW50FZmNa6v52YrTwv2DLVXiYv7AHEVIm4gFeWt5NkqE6bUVcaNsVjdEEGVEjuKDMozy5Y7r%2Bi%2Fm%2Bfq0Hz3d4y5WAVE2rEf1srgu5NBRsyIddadsqyJeLQWjjRmWUCbeK9S7PSm0MKG1BuOQIkmAGTfHhxuO6be&X-Amz-Signature=fc7187b42e3fa83c15ad3fe083e1ca827abe7bb7ac0049d8500ee965bfe5701c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGAY3AI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC78aSdro14eAt%2FbpLc5rGlQ22yWNpoA%2BxHEKs5p2DAQgIgIQwp3KAu6y1wtxA9PvZjyNxWzUT9v2%2B6dPzOcb22mQQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOP20C532P07k777xSrcA13JU1r6Z4lS%2FY0PazjjODWsJZ%2BavumjqtiEnBMLVjKo5tj8GY9l1Oa5KqsoSjwyaY62Gx8753WoaDW%2B7Lsk8d6v8nzObebBj83Xyxuz1kikExdg1pijR1P9Z3YcecFpnBKm0GxVElAJhv%2BPkJqlNvkwW6pmPEKlg29h0YPcokb%2BYSgp%2BM3%2FnoMncsXCR%2FTUEq%2B%2Flrx93BZm9LLwMe2LLIOAFY40pVQWYRjT7xmVxczE3gToUlW4%2Fv3R7w3E4DykdNDX5bFfdnC5F1eHoqN0eI9JS1NJ0KDmF3b4CWK2MyWZoKnf4PW2l9pn5%2F7OSfSyaZtSPCyjaXrYnoeoOAiO3PlRzwu4CPyegBWEWeuQgR7Y0hPhiCFTGwUoddg%2Fsa9sLz8xh6nBj7xJFag8GFMxnnvuBy9vfQOzjZyZtmCyry3p%2FUJElOnI64qvk4jTvK1vodMx8nL1sYOh0PzuwTfmu%2FGaYIQkgmPvIGpnYBNrle%2B1wf17Ncqf1K5tFQb14xXLFeNJJDLsY2Y5%2Bqj0ysQRJFoXiByQDiartZ809Bp9fIwF1x8C0i2R5RIga1kqGW00KOm415NDuYpxwEUd%2FP8fqaZckzFAPDbXuCsOawpnQ6%2FUyCSdt7g2sZiLHXyrMP3rkMQGOqUBorKkLE8sQfPb%2FURPshuvkNFONFytkbr8Z%2BhD4LYgxeUbPl2R8bMYBUZypv7gDBW50FZmNa6v52YrTwv2DLVXiYv7AHEVIm4gFeWt5NkqE6bUVcaNsVjdEEGVEjuKDMozy5Y7r%2Bi%2Fm%2Bfq0Hz3d4y5WAVE2rEf1srgu5NBRsyIddadsqyJeLQWjjRmWUCbeK9S7PSm0MKG1BuOQIkmAGTfHhxuO6be&X-Amz-Signature=5fb61b5ac4facd45dd734c0237b87b510d2ceaf3943f7b71f6b574373d0f1443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
