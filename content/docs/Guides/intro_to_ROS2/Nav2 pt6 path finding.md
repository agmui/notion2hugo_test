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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WBT7S6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHvWyKrctUwEjvZkAdCx7%2F1hLXTSULsvIJcRlkEBvmT5AiEA2GAJh7uhfCaMWfDTrutEMPdoXdGzVJpxInpFHMgrry0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDILGA3d%2B6ciG23DCfSrcA95BgSILp3my%2FSqVRMmNwiXDIfbAzi8pYvZuLWXjsurm9KratRzcTU%2BYizTPs8HI1r%2FHfQI%2FbNaG7OuNp3gYH5ntfGjkBqH0k4unzzlJTTQ%2Bad3RiMWQLBZWUSNI%2BKrz%2BmFvDx3NnkNumWLNDl0WXVNf%2BhEVLtfoCsFNoXWWhQaPkaQhIQoV2%2BHXISMjU%2BK%2BcuC31ILE6TgJI9fRZmUFmUxlF%2FBheUcj1DJ0Q%2Fp8GoYgk652OYaVkba2DBwKImBoyvebxcxjAq1iC6uzd8j3ubgg2TgfSCNWvKp%2B2HGm5AFw5R0FEDvM2I4tBNmwWKuWMeJQHD6GH21iiIkFP8bw0qXVoyOvSNgLkb%2BEhL674Q067R%2B6tMECYsxfsmPy1wEdLs6ZOX68Cbw2NnjU8CvffxSDTDp1hRT5vARRc80PR%2BFzcMxifz5RbVXkPOlEeS9%2FvhCOwl14dkBJ48KFw1ASxInXi%2BLKFskUjM8j06VXM7BgWqoSy90SEnuC0aO9Hgup4H98Y5ploL7jVn6CmibsPyPjyx4JsVatpsghDLQz8a9tnAG3updUJzE6Z%2FcGd4IYLzqc6jWuV6F5qlqyWxWyM30sRH1kCmvTLb864i7mGsj%2F0NB9cfwBvbFtYPuCMOnClcQGOqUBOTTOOMdkJ%2FX1oMgwoGgW7y9JiD3yMEGtpuWtiC%2BbFeAMwTOqx%2FZnA%2BEJX6A48VrAZNiMLb2ExPSHFkhSpn5oKQnEc3yAWwaWqmPT3Btc%2F6Y9xj4O6QONH%2B3oPrQJ9%2BaJM0hwN9%2FMSu4dA5dMK0rCpNVXZiSW5AEYz9WVl%2FOdi02nWjFUD8X3QpD90zMZVTlNFrpo88V21VMA4c%2F2Xa3oSbhpKyeb&X-Amz-Signature=5b736dd0b8ac81bfb0a26abceb8abbd8eb64badf75bd755ce8b1fc72c8819c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WBT7S6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHvWyKrctUwEjvZkAdCx7%2F1hLXTSULsvIJcRlkEBvmT5AiEA2GAJh7uhfCaMWfDTrutEMPdoXdGzVJpxInpFHMgrry0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDILGA3d%2B6ciG23DCfSrcA95BgSILp3my%2FSqVRMmNwiXDIfbAzi8pYvZuLWXjsurm9KratRzcTU%2BYizTPs8HI1r%2FHfQI%2FbNaG7OuNp3gYH5ntfGjkBqH0k4unzzlJTTQ%2Bad3RiMWQLBZWUSNI%2BKrz%2BmFvDx3NnkNumWLNDl0WXVNf%2BhEVLtfoCsFNoXWWhQaPkaQhIQoV2%2BHXISMjU%2BK%2BcuC31ILE6TgJI9fRZmUFmUxlF%2FBheUcj1DJ0Q%2Fp8GoYgk652OYaVkba2DBwKImBoyvebxcxjAq1iC6uzd8j3ubgg2TgfSCNWvKp%2B2HGm5AFw5R0FEDvM2I4tBNmwWKuWMeJQHD6GH21iiIkFP8bw0qXVoyOvSNgLkb%2BEhL674Q067R%2B6tMECYsxfsmPy1wEdLs6ZOX68Cbw2NnjU8CvffxSDTDp1hRT5vARRc80PR%2BFzcMxifz5RbVXkPOlEeS9%2FvhCOwl14dkBJ48KFw1ASxInXi%2BLKFskUjM8j06VXM7BgWqoSy90SEnuC0aO9Hgup4H98Y5ploL7jVn6CmibsPyPjyx4JsVatpsghDLQz8a9tnAG3updUJzE6Z%2FcGd4IYLzqc6jWuV6F5qlqyWxWyM30sRH1kCmvTLb864i7mGsj%2F0NB9cfwBvbFtYPuCMOnClcQGOqUBOTTOOMdkJ%2FX1oMgwoGgW7y9JiD3yMEGtpuWtiC%2BbFeAMwTOqx%2FZnA%2BEJX6A48VrAZNiMLb2ExPSHFkhSpn5oKQnEc3yAWwaWqmPT3Btc%2F6Y9xj4O6QONH%2B3oPrQJ9%2BaJM0hwN9%2FMSu4dA5dMK0rCpNVXZiSW5AEYz9WVl%2FOdi02nWjFUD8X3QpD90zMZVTlNFrpo88V21VMA4c%2F2Xa3oSbhpKyeb&X-Amz-Signature=c6e6e6f9acfd3e69fa0c11067fa8935d29070421cb2e12eabae1867233eb87fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WBT7S6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHvWyKrctUwEjvZkAdCx7%2F1hLXTSULsvIJcRlkEBvmT5AiEA2GAJh7uhfCaMWfDTrutEMPdoXdGzVJpxInpFHMgrry0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDILGA3d%2B6ciG23DCfSrcA95BgSILp3my%2FSqVRMmNwiXDIfbAzi8pYvZuLWXjsurm9KratRzcTU%2BYizTPs8HI1r%2FHfQI%2FbNaG7OuNp3gYH5ntfGjkBqH0k4unzzlJTTQ%2Bad3RiMWQLBZWUSNI%2BKrz%2BmFvDx3NnkNumWLNDl0WXVNf%2BhEVLtfoCsFNoXWWhQaPkaQhIQoV2%2BHXISMjU%2BK%2BcuC31ILE6TgJI9fRZmUFmUxlF%2FBheUcj1DJ0Q%2Fp8GoYgk652OYaVkba2DBwKImBoyvebxcxjAq1iC6uzd8j3ubgg2TgfSCNWvKp%2B2HGm5AFw5R0FEDvM2I4tBNmwWKuWMeJQHD6GH21iiIkFP8bw0qXVoyOvSNgLkb%2BEhL674Q067R%2B6tMECYsxfsmPy1wEdLs6ZOX68Cbw2NnjU8CvffxSDTDp1hRT5vARRc80PR%2BFzcMxifz5RbVXkPOlEeS9%2FvhCOwl14dkBJ48KFw1ASxInXi%2BLKFskUjM8j06VXM7BgWqoSy90SEnuC0aO9Hgup4H98Y5ploL7jVn6CmibsPyPjyx4JsVatpsghDLQz8a9tnAG3updUJzE6Z%2FcGd4IYLzqc6jWuV6F5qlqyWxWyM30sRH1kCmvTLb864i7mGsj%2F0NB9cfwBvbFtYPuCMOnClcQGOqUBOTTOOMdkJ%2FX1oMgwoGgW7y9JiD3yMEGtpuWtiC%2BbFeAMwTOqx%2FZnA%2BEJX6A48VrAZNiMLb2ExPSHFkhSpn5oKQnEc3yAWwaWqmPT3Btc%2F6Y9xj4O6QONH%2B3oPrQJ9%2BaJM0hwN9%2FMSu4dA5dMK0rCpNVXZiSW5AEYz9WVl%2FOdi02nWjFUD8X3QpD90zMZVTlNFrpo88V21VMA4c%2F2Xa3oSbhpKyeb&X-Amz-Signature=ed99104ef445af0c1c18a47739a3c01fe4f98c48e22db730aa8109e245a669d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WBT7S6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHvWyKrctUwEjvZkAdCx7%2F1hLXTSULsvIJcRlkEBvmT5AiEA2GAJh7uhfCaMWfDTrutEMPdoXdGzVJpxInpFHMgrry0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDILGA3d%2B6ciG23DCfSrcA95BgSILp3my%2FSqVRMmNwiXDIfbAzi8pYvZuLWXjsurm9KratRzcTU%2BYizTPs8HI1r%2FHfQI%2FbNaG7OuNp3gYH5ntfGjkBqH0k4unzzlJTTQ%2Bad3RiMWQLBZWUSNI%2BKrz%2BmFvDx3NnkNumWLNDl0WXVNf%2BhEVLtfoCsFNoXWWhQaPkaQhIQoV2%2BHXISMjU%2BK%2BcuC31ILE6TgJI9fRZmUFmUxlF%2FBheUcj1DJ0Q%2Fp8GoYgk652OYaVkba2DBwKImBoyvebxcxjAq1iC6uzd8j3ubgg2TgfSCNWvKp%2B2HGm5AFw5R0FEDvM2I4tBNmwWKuWMeJQHD6GH21iiIkFP8bw0qXVoyOvSNgLkb%2BEhL674Q067R%2B6tMECYsxfsmPy1wEdLs6ZOX68Cbw2NnjU8CvffxSDTDp1hRT5vARRc80PR%2BFzcMxifz5RbVXkPOlEeS9%2FvhCOwl14dkBJ48KFw1ASxInXi%2BLKFskUjM8j06VXM7BgWqoSy90SEnuC0aO9Hgup4H98Y5ploL7jVn6CmibsPyPjyx4JsVatpsghDLQz8a9tnAG3updUJzE6Z%2FcGd4IYLzqc6jWuV6F5qlqyWxWyM30sRH1kCmvTLb864i7mGsj%2F0NB9cfwBvbFtYPuCMOnClcQGOqUBOTTOOMdkJ%2FX1oMgwoGgW7y9JiD3yMEGtpuWtiC%2BbFeAMwTOqx%2FZnA%2BEJX6A48VrAZNiMLb2ExPSHFkhSpn5oKQnEc3yAWwaWqmPT3Btc%2F6Y9xj4O6QONH%2B3oPrQJ9%2BaJM0hwN9%2FMSu4dA5dMK0rCpNVXZiSW5AEYz9WVl%2FOdi02nWjFUD8X3QpD90zMZVTlNFrpo88V21VMA4c%2F2Xa3oSbhpKyeb&X-Amz-Signature=58f67b39ff89db2abd4617172abcc2b07ea92dbf96ae49f641109912e3d633c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WBT7S6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHvWyKrctUwEjvZkAdCx7%2F1hLXTSULsvIJcRlkEBvmT5AiEA2GAJh7uhfCaMWfDTrutEMPdoXdGzVJpxInpFHMgrry0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDILGA3d%2B6ciG23DCfSrcA95BgSILp3my%2FSqVRMmNwiXDIfbAzi8pYvZuLWXjsurm9KratRzcTU%2BYizTPs8HI1r%2FHfQI%2FbNaG7OuNp3gYH5ntfGjkBqH0k4unzzlJTTQ%2Bad3RiMWQLBZWUSNI%2BKrz%2BmFvDx3NnkNumWLNDl0WXVNf%2BhEVLtfoCsFNoXWWhQaPkaQhIQoV2%2BHXISMjU%2BK%2BcuC31ILE6TgJI9fRZmUFmUxlF%2FBheUcj1DJ0Q%2Fp8GoYgk652OYaVkba2DBwKImBoyvebxcxjAq1iC6uzd8j3ubgg2TgfSCNWvKp%2B2HGm5AFw5R0FEDvM2I4tBNmwWKuWMeJQHD6GH21iiIkFP8bw0qXVoyOvSNgLkb%2BEhL674Q067R%2B6tMECYsxfsmPy1wEdLs6ZOX68Cbw2NnjU8CvffxSDTDp1hRT5vARRc80PR%2BFzcMxifz5RbVXkPOlEeS9%2FvhCOwl14dkBJ48KFw1ASxInXi%2BLKFskUjM8j06VXM7BgWqoSy90SEnuC0aO9Hgup4H98Y5ploL7jVn6CmibsPyPjyx4JsVatpsghDLQz8a9tnAG3updUJzE6Z%2FcGd4IYLzqc6jWuV6F5qlqyWxWyM30sRH1kCmvTLb864i7mGsj%2F0NB9cfwBvbFtYPuCMOnClcQGOqUBOTTOOMdkJ%2FX1oMgwoGgW7y9JiD3yMEGtpuWtiC%2BbFeAMwTOqx%2FZnA%2BEJX6A48VrAZNiMLb2ExPSHFkhSpn5oKQnEc3yAWwaWqmPT3Btc%2F6Y9xj4O6QONH%2B3oPrQJ9%2BaJM0hwN9%2FMSu4dA5dMK0rCpNVXZiSW5AEYz9WVl%2FOdi02nWjFUD8X3QpD90zMZVTlNFrpo88V21VMA4c%2F2Xa3oSbhpKyeb&X-Amz-Signature=f43906781e2135df6ef178df580c22761ea31863c6601998c1ca506b7c504eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WBT7S6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHvWyKrctUwEjvZkAdCx7%2F1hLXTSULsvIJcRlkEBvmT5AiEA2GAJh7uhfCaMWfDTrutEMPdoXdGzVJpxInpFHMgrry0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDILGA3d%2B6ciG23DCfSrcA95BgSILp3my%2FSqVRMmNwiXDIfbAzi8pYvZuLWXjsurm9KratRzcTU%2BYizTPs8HI1r%2FHfQI%2FbNaG7OuNp3gYH5ntfGjkBqH0k4unzzlJTTQ%2Bad3RiMWQLBZWUSNI%2BKrz%2BmFvDx3NnkNumWLNDl0WXVNf%2BhEVLtfoCsFNoXWWhQaPkaQhIQoV2%2BHXISMjU%2BK%2BcuC31ILE6TgJI9fRZmUFmUxlF%2FBheUcj1DJ0Q%2Fp8GoYgk652OYaVkba2DBwKImBoyvebxcxjAq1iC6uzd8j3ubgg2TgfSCNWvKp%2B2HGm5AFw5R0FEDvM2I4tBNmwWKuWMeJQHD6GH21iiIkFP8bw0qXVoyOvSNgLkb%2BEhL674Q067R%2B6tMECYsxfsmPy1wEdLs6ZOX68Cbw2NnjU8CvffxSDTDp1hRT5vARRc80PR%2BFzcMxifz5RbVXkPOlEeS9%2FvhCOwl14dkBJ48KFw1ASxInXi%2BLKFskUjM8j06VXM7BgWqoSy90SEnuC0aO9Hgup4H98Y5ploL7jVn6CmibsPyPjyx4JsVatpsghDLQz8a9tnAG3updUJzE6Z%2FcGd4IYLzqc6jWuV6F5qlqyWxWyM30sRH1kCmvTLb864i7mGsj%2F0NB9cfwBvbFtYPuCMOnClcQGOqUBOTTOOMdkJ%2FX1oMgwoGgW7y9JiD3yMEGtpuWtiC%2BbFeAMwTOqx%2FZnA%2BEJX6A48VrAZNiMLb2ExPSHFkhSpn5oKQnEc3yAWwaWqmPT3Btc%2F6Y9xj4O6QONH%2B3oPrQJ9%2BaJM0hwN9%2FMSu4dA5dMK0rCpNVXZiSW5AEYz9WVl%2FOdi02nWjFUD8X3QpD90zMZVTlNFrpo88V21VMA4c%2F2Xa3oSbhpKyeb&X-Amz-Signature=bdbbd5ba39069ca86b4afe115cac0de32fa00b2cadb4fe07049a0cef181c977f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
