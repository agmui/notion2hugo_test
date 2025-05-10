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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q42NVP6J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9CDlvgrjyh%2BoNACUHWfY0zl4ggeV5ZYB9Hu9NggQXHAiEA1v2KmZRYSQqyBEF1pBBPSTHruCdzVOPCoK3FpZoojKwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEiimVR9FaECrBicSrcA3whYjE3ZpjV8OfuiPMUnFgR%2FRnBEzvuWTP1O1lcP%2BWNtW%2BkurKJY7JJTAaWeXFgIKl5nqKzntLUAF7Lc9dXcgh9DfNhIcSUkICitN2A1E2FsgLO8dSVfuzwid%2F9%2Fdw4urGEoBYmMYO8BUfBinTv5nM5%2BSWdyN%2BFNwD3xU6hmIoH4BYo1TJ2zRGKqhwD6GlGptBkftRLGCLgrhfRwoWVjWCoGFieNcSHeSBM%2B8aE103JWIIu5zcwuCqPMvXim67%2Bi5566LvUx0k8R5UUPuPEPum3qNXx5cjMfcH2vm%2BoBrSOAQk5d9fwwyvIaIrNWCozaGuKavRSdUIsUtn6jbeIctGRkfWmL5RRWhGZQlthTCtcGTsjACk8Wlzj14tUubmGrA7MqhnDxQJtxLVZv3QGFZFwfKs1cqEkVOkE48pKyyLBJzcQCi1qWDvZIuexWZLQeoyXLM6vqiehS%2FK4gBg68ztGSYo%2FQL9XtNmOKoOzFSKN8AJwu3bgBmJyy3I4pV7wPV8sPyjuQbNnYkrSsJX8vS5SZNKr1qk5FENxEyRH0JfxPfmY8pOTp8V0zybaVMgk5vvwtDliXIwByrlMrCwRKLJdZZOQ59Hv6SIjMjXqa%2B%2BJjddfqTm2f%2BF0XdQFMKGH%2FcAGOqUBq7V%2BkcCOtsEJxfxwKG5Z7VxpJEZKIElQgOdkvoNnWtL8ZJiVVnSsw%2FofTcT8GADBqPpsU7aLyBtRIJeI41QIz7C4hOSuFWiMxmPFvOUvzBOlNroaDRqvzUIdOimdDRv8H7uRQCOIb%2F%2FfCfT3HfmGiGJxl8Bxgb7zeP%2Bd59ztAxFYRU7Y8izJU3Yb7bdsPwShP2sqpKp4r7M5ruj20KFYs7AWn%2B%2BJ&X-Amz-Signature=0bed9e3f7222916e1183b6f6c74d82adc3bcd80ce8380c13547227029dc6dfd2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q42NVP6J%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9CDlvgrjyh%2BoNACUHWfY0zl4ggeV5ZYB9Hu9NggQXHAiEA1v2KmZRYSQqyBEF1pBBPSTHruCdzVOPCoK3FpZoojKwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEiimVR9FaECrBicSrcA3whYjE3ZpjV8OfuiPMUnFgR%2FRnBEzvuWTP1O1lcP%2BWNtW%2BkurKJY7JJTAaWeXFgIKl5nqKzntLUAF7Lc9dXcgh9DfNhIcSUkICitN2A1E2FsgLO8dSVfuzwid%2F9%2Fdw4urGEoBYmMYO8BUfBinTv5nM5%2BSWdyN%2BFNwD3xU6hmIoH4BYo1TJ2zRGKqhwD6GlGptBkftRLGCLgrhfRwoWVjWCoGFieNcSHeSBM%2B8aE103JWIIu5zcwuCqPMvXim67%2Bi5566LvUx0k8R5UUPuPEPum3qNXx5cjMfcH2vm%2BoBrSOAQk5d9fwwyvIaIrNWCozaGuKavRSdUIsUtn6jbeIctGRkfWmL5RRWhGZQlthTCtcGTsjACk8Wlzj14tUubmGrA7MqhnDxQJtxLVZv3QGFZFwfKs1cqEkVOkE48pKyyLBJzcQCi1qWDvZIuexWZLQeoyXLM6vqiehS%2FK4gBg68ztGSYo%2FQL9XtNmOKoOzFSKN8AJwu3bgBmJyy3I4pV7wPV8sPyjuQbNnYkrSsJX8vS5SZNKr1qk5FENxEyRH0JfxPfmY8pOTp8V0zybaVMgk5vvwtDliXIwByrlMrCwRKLJdZZOQ59Hv6SIjMjXqa%2B%2BJjddfqTm2f%2BF0XdQFMKGH%2FcAGOqUBq7V%2BkcCOtsEJxfxwKG5Z7VxpJEZKIElQgOdkvoNnWtL8ZJiVVnSsw%2FofTcT8GADBqPpsU7aLyBtRIJeI41QIz7C4hOSuFWiMxmPFvOUvzBOlNroaDRqvzUIdOimdDRv8H7uRQCOIb%2F%2FfCfT3HfmGiGJxl8Bxgb7zeP%2Bd59ztAxFYRU7Y8izJU3Yb7bdsPwShP2sqpKp4r7M5ruj20KFYs7AWn%2B%2BJ&X-Amz-Signature=c01f4b4cbdf8785989079fb3f3fe4e803c87100184829853abc19817caca6056&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
