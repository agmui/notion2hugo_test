---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M5I7QWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC81RLNjUWujS5ueeIPg4hwkLjojcqQDXZRxrIKr0fPNAiEAjjWs%2Btt%2FuUuoCd9uAYhVhlWUsPwx2UfxXqY3qaOcEi8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqmbYVgQxgS%2BI%2FZjSrcA9Q1TJW7lC5F3VHgCcRpNkuh3noDB8Sb84JeTmh5LceRpNqEzTmC1H5haj9kpLklZqnlRBmbNCqzEYDmkQiUOX%2BK8i9gggMT5ldm8HYRz86gqHwCWz1v9jjkCDVPua5RAmZch5%2BByn0idFqChk82B0X1eOS9LvwAirg%2B%2Br4%2FLLeCXdALgMSL8QCN12%2BhSw76FH0ggUpA%2B1YX3ZkDH8O%2FJOVQYpmWWHEHSSndqKq14EiCzVwcGy91mQmHs143a%2FpWiperM5a%2FX4CMjiPbl0egKj29dSCyseHrgM55RHbjuRPt%2BzEXif7%2BX68%2BJtGgCZTkb27gT8lcuB2ojcz2vc%2BkHfxeBUpI247e0irr%2BSYV16qtoB9W6%2FJek000Hp3GEDl2lg5o%2FdgpF2fBXjhgSfKQLMT%2BgqrECYxmTA0wkJzXsdkVXf%2BJzuDK5V6FxnHbyZkTqBiK8k0Eh1n%2BrDed%2FgOpDJDHc%2FFGzYTaTz0JoyqW%2FcDgrJO11B%2FZ3mP7QuTa1nsChZ1JzQDO5ePD5fWBNShlWenqfQr7nd7qup2H7kxciB%2BgblWj%2BCQQ1FexnOi5ltkrkNG0GY7%2BaOrAKjJxm6N97tLE%2FD5itYzuca%2FcflL8HsXF00ivaw9d1%2BbloxZfMK6y38QGOqUBE3FzFEIU16KA8KA9BoqOHu66U7s8668EV4j1yEU82hTOhV9xAcjbRJd9dETlt5kShjMo6GQ1DfB9ulVVn%2B0G946N3VlPriUGdcnZm1FXeopgQLrqKWx%2FNUCf7smNaCyph3vgS94Eg2uWtk1LaV6a30grAYY7UGQs8KhUWehLYTeCrUOLiRJ3rcjnivBtcseAylep4ONSW3AjDRU%2BitjFxuxw0wiS&X-Amz-Signature=92e06f6e43264f7469fc5b6e0b3bfdd964f81cc3b6112917a3fcd91c0555d4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M5I7QWU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC81RLNjUWujS5ueeIPg4hwkLjojcqQDXZRxrIKr0fPNAiEAjjWs%2Btt%2FuUuoCd9uAYhVhlWUsPwx2UfxXqY3qaOcEi8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqmbYVgQxgS%2BI%2FZjSrcA9Q1TJW7lC5F3VHgCcRpNkuh3noDB8Sb84JeTmh5LceRpNqEzTmC1H5haj9kpLklZqnlRBmbNCqzEYDmkQiUOX%2BK8i9gggMT5ldm8HYRz86gqHwCWz1v9jjkCDVPua5RAmZch5%2BByn0idFqChk82B0X1eOS9LvwAirg%2B%2Br4%2FLLeCXdALgMSL8QCN12%2BhSw76FH0ggUpA%2B1YX3ZkDH8O%2FJOVQYpmWWHEHSSndqKq14EiCzVwcGy91mQmHs143a%2FpWiperM5a%2FX4CMjiPbl0egKj29dSCyseHrgM55RHbjuRPt%2BzEXif7%2BX68%2BJtGgCZTkb27gT8lcuB2ojcz2vc%2BkHfxeBUpI247e0irr%2BSYV16qtoB9W6%2FJek000Hp3GEDl2lg5o%2FdgpF2fBXjhgSfKQLMT%2BgqrECYxmTA0wkJzXsdkVXf%2BJzuDK5V6FxnHbyZkTqBiK8k0Eh1n%2BrDed%2FgOpDJDHc%2FFGzYTaTz0JoyqW%2FcDgrJO11B%2FZ3mP7QuTa1nsChZ1JzQDO5ePD5fWBNShlWenqfQr7nd7qup2H7kxciB%2BgblWj%2BCQQ1FexnOi5ltkrkNG0GY7%2BaOrAKjJxm6N97tLE%2FD5itYzuca%2FcflL8HsXF00ivaw9d1%2BbloxZfMK6y38QGOqUBE3FzFEIU16KA8KA9BoqOHu66U7s8668EV4j1yEU82hTOhV9xAcjbRJd9dETlt5kShjMo6GQ1DfB9ulVVn%2B0G946N3VlPriUGdcnZm1FXeopgQLrqKWx%2FNUCf7smNaCyph3vgS94Eg2uWtk1LaV6a30grAYY7UGQs8KhUWehLYTeCrUOLiRJ3rcjnivBtcseAylep4ONSW3AjDRU%2BitjFxuxw0wiS&X-Amz-Signature=f948034a94fcaf59765d00e51dd35b3d7841cdc6cc46f0d015b895e5cddca4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
