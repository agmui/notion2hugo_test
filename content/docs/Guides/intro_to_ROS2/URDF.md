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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4O4FOQ7%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpNwmVMYaMdUQ%2FDdZM5PhMiIaKTKUUpnX%2FblMVt0TeQIhALvjUpEEUpQSVeZDjhKzRQA9wN2dolEQ5Q2ND4eAnuf4KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzRjcpnBCA5ULJFxMq3AMnlfUm9KK8RWevevVlhS3VwDsDn%2FOBWM4UEQZLnYiRntH4HoK3PSeurd2LNTv2PCPzZC1Mc63mYwRxPXUlbIQuzFN5Dqyr02VLJE%2Fp6vdw6W6cFNVE2jmRqL%2BxI2LKbgesYSioImv1BlPP%2Bk6O%2F0HBc63SthejHEP8VWlcHbHi7Mw0ulEGlbuUpLvpXZNLI9lx8uhhh%2B3JwNsCeixpp06dpyIa6x0UBRt09M5PZUyUE0B%2B2ACJNZF%2FaPUJT4RFkDRjcULUocboHaYPhkgr%2BYx%2F9tJTQBrcsBhtdnYKnFZkB%2Bh6BZQKVV2xGkrrL0TwqL3oMChI%2Bs3SipBAaYzgB3urk0RWvrck3C00liX8v72bpW3O5ye6euqSr2CMW%2BDX43tqkGn05KcJforHORBOOrMbVwr6N3k8FR0%2BgKqKPBN8%2FFFhg5Cs9ornU2C56gcdpGC1mruzkzVGvihTm%2FGNpubTfmeKW0YHBQ2uC8UyLdIIrCV%2BShaZkeNbSVOkzgOx8MsNMHW9XiW9McVPKTugEaeoK1swT5N%2FRM13vCxkhbRAfBQ2B%2B5VQ8vfbh5Xtb0G16ptnjhg9u%2BcMaLNbFUc6%2B7Nn1eH16%2F8i29fjplw79FZIRQchRmWAE%2FFi7llgTCz5PvOBjqkAUsG1nKWpo8zDmXyEycQnfkCHOtGzBnfOv%2FZq9x62JhQF9V3g1ce%2BkWXhGVmog9%2FWuyOWWxPhdffbFlSdOEUf1j6xK8rdjlX5zcVAqk1AVC8ULDah8%2BzUjJctTpHIKbMdxcz81oc5xWA7%2BGZSp0LazbA22GWpkw9cTxn6OrP5ya101trO6KPo5kOoVxkbeJXEI4CgvBgpmAcLdoMbIwNif1A8PCc&X-Amz-Signature=1f6b7a7923ed5a7f910ddb08753e66e3d5ff4f809be8923b41460e0df2cf9335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4O4FOQ7%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpNwmVMYaMdUQ%2FDdZM5PhMiIaKTKUUpnX%2FblMVt0TeQIhALvjUpEEUpQSVeZDjhKzRQA9wN2dolEQ5Q2ND4eAnuf4KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzRjcpnBCA5ULJFxMq3AMnlfUm9KK8RWevevVlhS3VwDsDn%2FOBWM4UEQZLnYiRntH4HoK3PSeurd2LNTv2PCPzZC1Mc63mYwRxPXUlbIQuzFN5Dqyr02VLJE%2Fp6vdw6W6cFNVE2jmRqL%2BxI2LKbgesYSioImv1BlPP%2Bk6O%2F0HBc63SthejHEP8VWlcHbHi7Mw0ulEGlbuUpLvpXZNLI9lx8uhhh%2B3JwNsCeixpp06dpyIa6x0UBRt09M5PZUyUE0B%2B2ACJNZF%2FaPUJT4RFkDRjcULUocboHaYPhkgr%2BYx%2F9tJTQBrcsBhtdnYKnFZkB%2Bh6BZQKVV2xGkrrL0TwqL3oMChI%2Bs3SipBAaYzgB3urk0RWvrck3C00liX8v72bpW3O5ye6euqSr2CMW%2BDX43tqkGn05KcJforHORBOOrMbVwr6N3k8FR0%2BgKqKPBN8%2FFFhg5Cs9ornU2C56gcdpGC1mruzkzVGvihTm%2FGNpubTfmeKW0YHBQ2uC8UyLdIIrCV%2BShaZkeNbSVOkzgOx8MsNMHW9XiW9McVPKTugEaeoK1swT5N%2FRM13vCxkhbRAfBQ2B%2B5VQ8vfbh5Xtb0G16ptnjhg9u%2BcMaLNbFUc6%2B7Nn1eH16%2F8i29fjplw79FZIRQchRmWAE%2FFi7llgTCz5PvOBjqkAUsG1nKWpo8zDmXyEycQnfkCHOtGzBnfOv%2FZq9x62JhQF9V3g1ce%2BkWXhGVmog9%2FWuyOWWxPhdffbFlSdOEUf1j6xK8rdjlX5zcVAqk1AVC8ULDah8%2BzUjJctTpHIKbMdxcz81oc5xWA7%2BGZSp0LazbA22GWpkw9cTxn6OrP5ya101trO6KPo5kOoVxkbeJXEI4CgvBgpmAcLdoMbIwNif1A8PCc&X-Amz-Signature=65ddb9161f0d199d3c0ba71862b9012c3210d66763104b5835160853aa54fd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
