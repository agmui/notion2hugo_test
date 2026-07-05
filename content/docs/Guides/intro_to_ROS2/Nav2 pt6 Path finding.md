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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=8f3fcc1aa5e3da1d37cec4aa8709201e15a7078ba4bf6f558ec720c2425ba2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=135fe1160b2ec48208c686b34e5998eaf58f92c6383f971ec6e957efc7171364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=ab9c6f3cba165016d2a01cd261dd1ec246a379b1e0e32fa294d31452fbed2c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=55517e4882259ef02c168e6174b61efc16acfff6a4dc4c5a7a6e43a4cbde3b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=bd646981ce2afef707e5ca926e1742dc00bc990bdebfe1ca20c69433e99ae69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=bd8249790670e9bb8d19be31650db9de57e850c54381efcf8aa05f805a5200db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=c973bf3b179024dc3d9e538bd83a0a251de151e67aaa3e0aeb0a9a5fbed1787b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=abafce5740fa04085247e2545e492142a2587e50911c7668277e5bae50ddc52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=ee9caba9b6914c22971f274f8f704dddc07eaebe79582f72a6a07ec10d5f3c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=524f70cbcfaf5511ef09512d3a3e2e044e41615babd6dab0958787aa33b948c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=0efc64cb384e35c2d7623016aac1e3fbc70a3909ef04b77a206aa2f823028f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=2a6929ed9f64d6c0af53b644ac74d76da9a6503c68efb816e840da390e7be0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLIH7AZ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAfLmewDFPGfJqhlU57JrBum9AzEVov1DSmXLWLvhw54AiEAyI4f4HaRz6VMetzWqM2fJScd7A0YBmalLjIiXerc744q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOpV1gMVSMroU4WKISrcA%2B3SyWYKNyeFOjXCilzoR%2Bhslxo3AsmKL3LDNKmu9GEbndc7gSrtjQtpAHv0sXCOD5fYqJuPljW2ufPVuCgLIsEGFmrCshV44fSzvgNLh98f2ee6lmnbF70sAfRChAZt2CP5%2FJs%2FEu4SXJVMWLKXfmMedyVQqI4znI7dJ9Vv5qcCAa21GR%2F2QVCGq6%2BAw0cNUrpKaE49g62tRwzrjwM9BUCWRh1pu%2BGcUvuek712e1wS%2FycZ5MwJPwzCIWVWuT%2B0cyRQi1M1bshJX2%2Fe0tqhVEcLli2AFGD%2BspjMsiEPjzA18xPQBmm62G%2Bo%2FQviql9UiyonwvWZj4wApxAYes2fvfgPEX9B5tVy%2FJYS0PT2p1Vl05hx3%2F8blyfN1BEKrwy5fvD8jeMDPVEpHXAbv11IJ4VfeI5CIA8pOKbs8iQMGWpHnP2YRAiT5NPWVm8rYC833V9z55vS5MZVFWe6wgqNkoVnhAj9Xmr04BIDs6rWrKG8zRuyn4rYdplbugQvLLGboMd7scwa6BIZ0tLnH2HnH%2Fu1f1aubUBP3yCKhZjfgLcMLK3ySSMnWx7rskPLpHfXETLsf1vmjzQD7pdVfimVbltp%2BYcsPqQ4yNML12oT2XBDcT8UWMpS9Q%2FkRLQwMLbbptIGOqUBUpVsKpb7%2BTYw%2FoIheIoPzniJZK98%2FsbdujBo%2BwNPNwQKQvS4UBaYRxWSkMJLLZELutK5htT4wlPljiaXAJ8zfSt4e5qJasWlVjMht09rYxmwJ8%2BeUyiB55c6RZVJ%2BTLfdbRfSPPv4n2UokjIe74UciLnUW4gRyKnCI%2FsJkP5bzr7lhrLS3esFQ5T3lebC5iMapLG5C%2FeJ%2FVHH%2Fy4tsTlPvkJL4El&X-Amz-Signature=4bdc3c2244a52069d406a4a88cfb92ab506e02468ec24aeeb594ba3ec941cbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
