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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=f0b3ba5453897f0b7519ed18e30bf627cc556605fa292b7247a23547044cd7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=3e4dcfd56e731002abda6a72e074afa045b99d27c4731ff7150c168a0076d3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=c56c4ca30421d01afbd55f26479a7907ad3afb1a68d2901a0a8e9662d06462a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=dc37a4bb2bedd3581abaf036cead5b4bd8fe0c2e67d87015bc7ec2173fbd29dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=d897a3c57ac50159c399e28286055a57d58ce7d107c809862687ef6858a5003f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=b5884d9851281081afa17e762830e7850f2f5c0dea88cbcd47c42368f5aa3a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=fc9c0f638b86f2d4d68db65e47800536e5dbcbc62aa94832902b2ad1f6a23326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=6a318eddcd4ade52d4142e499183571dc2a166c458cd2fb3b1c8b14f22b76d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=4bd457205c3ba5af659fed23552076997bd0b74592be93898461540db76faeae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=9a54ed2e8dc3b822897f2aa6b343b731ccbbe5aa2b54a9a5819ef9da04ecef2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=cfd722d9b248bc126aeac2c406b3aa1e1033f5f4486c9f9c721b9bb27987ec99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=700ea034d7711b0270b8b614bbb50f7aba113533a403373a336c847e1ad33dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIVE6CO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbaUsCaBGVSK6iESRz%2BbbG4l0Cngq5MooBudk6uamSlAIgeae%2FQx0aLCTqMk5CIkuq1O1n67h2Yx66oM5lwwgBsM0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAqAikSgXI9EnAaADSrcA8jgJUd6B37h5Pc8OwtabDLfVFsOxGE0rdBkM2qMqtE8NF95GXxYsDMxkywVhj%2BaxsAGQLhSUgMlCnCB14T%2BJ7gWMjLGBGnLJ5jGyoJrM08S4DkMwcyPdFvhAhqk%2BKiKzUCuc118rwRrWZme0Saa55jbTZxeNyPvCEt8OuuIRssJcCR392xfmL9f6A32QFwa1Dcfa%2F7aY05zZb1Drdn4RZr4v9I84URzK1tzte9hT096VOFVuNmTOHCjWsvDnnOqzOM6eKvG%2BDuqfc%2FiHELnr%2BjYqKO5zbvjexdbPkzSYngbrwvWWO7XWf3f%2FSetZwc1ypEY5fGWMJwZkVz%2Fc4Thsp5PjXJQQk7J4uhObko1y10B26STvxk9MFoW597v3deyX9nGJHrxpm7qx4armIZJqVjt2ks4aCeb1pBvIZiAmAxwwGSY7CQNfVRmbDnHraednuJcRKpGaa35hUC%2BqqEccWx50YoTXQIv%2B5Fm7mxSuOnXTT%2BZdRafha8cleXe3LjjOIoEfWINBoVJdc%2BeOOeGQUSEXVLkGtdGCFxInLACvhXCb0s2Blc2qnAOJ27xW5ahK%2Ffy0%2BLKkgHUt330USciiAuVfvvgmyk4i8r1xGjvNQlvknzyYafv1X6gY4R7MP7ZvsQGOqUBhkrzNIMvIoiXdy4LFo1AiAGgC48%2Buxq%2B6KHlMsHS4Q1U%2Fg8DzSQ4mPfgqbrg5ww4%2BUuxVCvfLrO7G4cnhMiKAQZk0OoxK4qdqkEAMB6Q4c0RGfHLBx2IxCTH1RYZ0UXflO49slACCn%2FcASKSR702CqeiTDq469hI3cOj%2BJ0NspheK1GOWm3kLDLwxIjK1MfgUGfjV%2B%2FD8xEmlrOSiyLo%2BtIR5PTV&X-Amz-Signature=287183492f72bd339c290a4a2bfd5b9a228786a3362770030c780d0f2f21db77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
