---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=34d1f423b89eb7a385018762f742d8bda7d5e1214e164311b0a42913e695abe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=1d1eb39dc800498491cf92e6c544b566366710a2f84b5ab3b8296a36815dc7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=b99a96dedf6fcad9088698ac9b3e6ffbf6fe3967754b2a1adc976985c1751649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=89f7f44026464f6e116758f90b0770ee73e5d6d0f666e8bcbe7bf50ef18fb2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=db9c592d029f813e04ccb6bd854e257d0d3cabbb214a5a671e1a4d2abc3467d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=87df8fdbe8c25c44537cb0fec67c224c7216c7321d07edf8a43d2cd40693c155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=be17ad0b3f0aaef78aaf323cfeb3b0a90b8c27120b4eacea6cb1db38d0e01d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=18ed598d10f3babb8fb10348d836315d19196723d5b6aa9512bd85bc7368afe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=3adfbb568cd76233f313e7152e4ce6b645b819471e37c62fcb757ad34e5a8851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=f1631b8add1356500fc9c566b583c8ab7d4d95a6960bdf280435db36d9b53c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=ba6f07898923717480bdccf620e951ae58df5f1f2a049be8877511172a49621a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=f63796652ea0a4f40f31e556deebb00cd48253f8de75f5254309c7e9df6a4934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CXWGGW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2F784SUKyBTep5k3xQMerkino1J60Za4ZIrJpDQq%2F9AIgZ%2FBSBQwnZNyflryaeT1gk%2BI8Ehd73HqUU4GG%2B%2BgtJPMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPto%2F8RrpNcmgay1tCrcAx%2B0eNrwaeR5jy0%2FZvM0d3UXZ14ZAAPW3WSdTETTOuujmNeoZwFj8vqv7xvlFhP5gJwEj%2FKXWFo5VhMloSKNRHhuLbf%2BbjFsRr37d%2FuMuzwoqh9TwlfkiC0KzRHf8T0b9h15H%2ByJLpl%2BHRBttJk2WkSkCbUW0RgizV3e6rqFlZ%2B48ppFI%2FSckxpsQiv6rYAwmDHWb%2BJEKinjnBb6NRsbag4kO0qN%2FuhYQJe7NcbM%2Fduhijr4Mw%2FiyoiXvhr%2BhXAXvkpPs0aHNyqdPIls5lZJudFcg%2Bd3MzHtCw3PdIPDEla6zbfOp7ilfdiFL1mPa83LJ0iS2dgj%2BYOD45tyEvtb7xSIox6MgwHe3uncV2HtET0BU5Jijd7bJM0NS1GQZ6J6FHb5GEO9Yb%2FNnzOPDS6JeEl0Mr3R51tL%2BsLw1d7ZWRF1LF3Kj78B2mk2kir%2B1a4KY41TIN4yvx01D74%2FzUrcW01cOpbJJemUNV9CMn%2Fc%2B6vgTO%2B9KlaQaSVv7bNy%2BczG9elsOVbhbY8EkA1XGA2qrXUhrpDPgmONU5Ke7fyhujIssDZW07WehIGJcn%2FtL%2FCKhchtKrgkV%2BWYBlBrAK0laHWuLsttnnuEa77LOdtMGrELr5kXtImzUd3BMvvuMODbrsQGOqUBGd387nuXloxJ%2BVqlZCELBjPHj4V1mR1WoNgKPQcBVrwDBuqePn9rr91Gs2F09tb0GHZBCq3kwvG%2Bb2kiCneCrPkHZpYUgEhdR%2FIm5dwBZz6HNeD1jxvtCiOc5Tk8NOZ8Z8931%2Flg%2FQGhPt4l4gNTLi6OT6%2BGfHa3r5r59XIITJePrOGwYUXP%2Bg01DxALsdc5YMaEc6DLBrkvrMdQK5uLxvQprVl%2F&X-Amz-Signature=0f9e2445cb6f20a530b2a169ae1c3dee5cdce616ffc0046e075d4876e9e646a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
