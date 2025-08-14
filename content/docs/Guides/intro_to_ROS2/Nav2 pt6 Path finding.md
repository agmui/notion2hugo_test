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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=4f61fe240b0208f02e48b588712a60e2c7f0bce820528065b24e51a4e4219bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=d6f4744014d38abe59873752bf18ac225940f7fd90b578f979cc0c903b219d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=0e358bcd3b78912908c601a32e7d2e5bfa38689d8868153c85bfa9ce4d163f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=7bd7942cbc152e125ec648e8499dac5af32628c8b79ed046460e83d9687a4350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=9335e603be2b35c209e247fd715c2e676f4ee44c4bb20cad605fa2c3e714c0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=d4b9195368ff97f92f76f4d1802a8833fa67be8809d592ea41700c2ab51252c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=992d9f39595e24bb5891b267cb77f9b46338244c709d55c24e762c75690007f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=6fdddcf5537be5f3cd4506ba64b2619b5a1370cb2a513df74c3c4899649115fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=5d37e0f36a42105bb11cf89df4193fe8bff27ab5c997688ad8f18f79c0ccead3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=88e2173ebe0b76912e6337e0890ab7499400c80f83acce497f0b5bfc4e761547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=2087d77bec4903261fe4e5ff0f9783e2f6df0e4371ccd34e8d2582a913a2689a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=d6e130ce70bfb495af7f3a888f471d51c2181eea693e7a5ed999156f18da60b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDEZ2JV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Zi%2Fa5wrUxmWmk4ojjpKZfL9RktL5ZjeecGceHuEWRQIgfPLft0NBRjCz63uQHuHBwuTsc7s7EDW18D6Giya%2FXb0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGEK1nuAP56K9DVVSrcA%2FnOc%2B414X88HDE7bjiG9sib0UCt%2FwanvdW9khoAGamwkfQ8dYJRIdSOWsQfLEIsTzkov0xZOhOE7%2BBzn%2FvQJ23Lg4eMm0FxKTE72vrGrTV0UthEXug21mu2YoVRytK%2FvSuKmu%2BCfndputyNDSfo%2BKBj0bZUEfKetK6UH53XAM5EVq7I64S8z9IwYTLE2MFMt1BgvMoNJcx1k2vtk3hx3etweoyTmVbpTmZVYwrBL4gJ5NkMxJpqUO72k9v4Wwg%2F63zWYALrUWT%2FZWrjb6AVi1i8VUOVB1i8u9iIBSbUS9u4DOi0G4bshBfFSIDbR8ObJzNG4smegdClgmR%2BB%2FQYfCuY2T%2BW1tbqIOO1KVhQ0Ck6ChaUlJnQ7Cj7OLBE0tp4SVhXCrYKEuP%2Fd1A9RyH4mdYhKh96EREypQUyYcdFdo736SLwCPrDpQZt2UdEqf5yzZ0Kg%2BDfkvUajNU4g1ijicxXhztPU5m%2Bq9iiS0fv0VIZ%2FPu8vF2OrVYZOjxYsgwvFYKHYt186J%2Fm%2BWJaw3V7TcSfrRUpxPoN0ysZM5HebHkcGj6yxdA0F2o7yEfxUF5RbzX1R0FSACHRswNK3XRDsXqnioiPt7DWrT6ijMcvZ2Q9T250CG4zjsF4Olj0MN669cQGOqUBh%2FKPNPyioEP622SsfrNwvXOVin7ts8mI3nb%2BdV9Yt45H4VJQrOsCbpLVTKHPQ10qywt09R4BkH4BhC%2B17zYjQo%2B3YMOwRQYz88RFvQCCT2C1jBKs%2FS70FAJYCcrb6mWNYrE9aEe7sFg9xZUXLDp8xMc8kIDJ6av%2B6dtm9tOEBgSaWgsEMGC9eE7utZRqJ%2B4OGb324HkCz3AfJZpPKFe4V0e8qGaL&X-Amz-Signature=809b0c8b97bd7f0d4d648c653b5127b852dbeb004a3944358967e4e27055b92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
