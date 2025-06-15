---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
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

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPC67H7J%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBIo8vyksVb%2FNzLpNzfRZp0yu5M79epP%2ByCabLDgHGZNAiEAiEMlA3L0YjgFrcmWnsFwntBZYfs9mRQpwGQvv6UUilIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCDvbnaJ%2Fz1Nwroz3yrcA5bFOHe6EH3NjVpp8bqctt0dHMkSxwbD8ceXwZlUSSFDskSTfU2EQYH8DM%2B9%2BMePj4SLXOde6cm4NsquMfrWTk%2BfAOp%2F6dYh0VD694CA7PD6Tv%2BX0lBhMqSk1FM%2BJSaJPeWOkpOjlojFX%2BEnXZ5hVEydm%2BVAtdheT8bmcT02TrEXbWndqoAuoVSgpQigd6s%2BSxruQCxllg4HWA29kGUJADZMpX8dBR%2FqK1FMwCRXOxsSbkOXSAuumcLi%2FFXR6WKvyj%2B1%2F5RQ3FHtBQCCD5t25rNj%2Faj9WQgqK0ci9%2FIoIyOzpOE%2FVv2XPT37IqWIKGorC1YwfmCcGkuWLkEP2zIXNGAi098S7DVXpUL0v9ArTMx7updSDm0mKPOn8VccbcGsr45OB23vE8VwGr30UiLIZoO1PrUdEmsVm3j5wfVcon5W6uL1k%2BPFUU6MCpywXtdmY6Y1TiBftN79BIjSvwpXvZkaAmGFDoPH2onL53phxCUfz%2BBBhlr%2FPZV43Y4vb%2Bje%2FYHawlh49e5xbRZPTrMiUj%2Bwpdi8wdyMoX%2FF5pFxOtGfS23XFNNCOdnYV5IOUKkM4SkTHHGXDuYESotdhUczozHOzsGzctM4e%2FcqhV9Jh%2BgIGbpukaP9r9hMQhDoMKnPvMIGOqUBjvZZjEUu49cEDxMwdbrVn%2FfECCM7TNOFRmf4hWstxwCTWzVeAx%2FJyim5nSFchI57cChV8wNS48t6mI1utVKByPxi52dIxZidI0X1m1%2FwcyonYbJ9HxLNHoduS7SFnrR1h5elocX%2Bpx7pPv6HAzZvoM6HUEdsSmUQCqfOSkDz%2BxKmM2dg9PRxEQQSdkTgtRYqjzPGYYGTKN421rId2rIZEcYh5pUy&X-Amz-Signature=20bed3121eb4966494f61c164a7e35291a7daa3e3567ab041a8aad08c32549c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPC67H7J%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBIo8vyksVb%2FNzLpNzfRZp0yu5M79epP%2ByCabLDgHGZNAiEAiEMlA3L0YjgFrcmWnsFwntBZYfs9mRQpwGQvv6UUilIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCDvbnaJ%2Fz1Nwroz3yrcA5bFOHe6EH3NjVpp8bqctt0dHMkSxwbD8ceXwZlUSSFDskSTfU2EQYH8DM%2B9%2BMePj4SLXOde6cm4NsquMfrWTk%2BfAOp%2F6dYh0VD694CA7PD6Tv%2BX0lBhMqSk1FM%2BJSaJPeWOkpOjlojFX%2BEnXZ5hVEydm%2BVAtdheT8bmcT02TrEXbWndqoAuoVSgpQigd6s%2BSxruQCxllg4HWA29kGUJADZMpX8dBR%2FqK1FMwCRXOxsSbkOXSAuumcLi%2FFXR6WKvyj%2B1%2F5RQ3FHtBQCCD5t25rNj%2Faj9WQgqK0ci9%2FIoIyOzpOE%2FVv2XPT37IqWIKGorC1YwfmCcGkuWLkEP2zIXNGAi098S7DVXpUL0v9ArTMx7updSDm0mKPOn8VccbcGsr45OB23vE8VwGr30UiLIZoO1PrUdEmsVm3j5wfVcon5W6uL1k%2BPFUU6MCpywXtdmY6Y1TiBftN79BIjSvwpXvZkaAmGFDoPH2onL53phxCUfz%2BBBhlr%2FPZV43Y4vb%2Bje%2FYHawlh49e5xbRZPTrMiUj%2Bwpdi8wdyMoX%2FF5pFxOtGfS23XFNNCOdnYV5IOUKkM4SkTHHGXDuYESotdhUczozHOzsGzctM4e%2FcqhV9Jh%2BgIGbpukaP9r9hMQhDoMKnPvMIGOqUBjvZZjEUu49cEDxMwdbrVn%2FfECCM7TNOFRmf4hWstxwCTWzVeAx%2FJyim5nSFchI57cChV8wNS48t6mI1utVKByPxi52dIxZidI0X1m1%2FwcyonYbJ9HxLNHoduS7SFnrR1h5elocX%2Bpx7pPv6HAzZvoM6HUEdsSmUQCqfOSkDz%2BxKmM2dg9PRxEQQSdkTgtRYqjzPGYYGTKN421rId2rIZEcYh5pUy&X-Amz-Signature=caa4ffd3d4aba80760aa4a35690e5ad23466e813e2fa0640c86e01fd320ca636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
