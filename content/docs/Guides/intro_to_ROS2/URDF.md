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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBOAB5H%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQXqn6qPgiFtpC0TuTRNE1arx7U3bHoP0wbdiMZwGpXAiEAgy5fOvrY%2BLzmkksBBA0wFCcVY104RqI%2FphsCJSquYcUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJxY8ruU50AD%2Fgz9WircA2kIEQpS3TjWBl%2FtSSWVxFrsmZ3tIN8Z%2Fz71oO1MVyo3eIziXyLToEP1fy4PNitK6bfNWmiCIntHp2oR9wO%2FApboJ%2F1NglQvlfAzxRaeoG3Ui%2Fv1XjfUxWzQw7Lkuk1%2BCz4s5A652cyLaW1gaeh2oHHt91bPf04MMvfHLnySSRVO9wEPYjOTLJjopMURfSubFRMGh%2FdW%2FMqYCPNx3dl%2F16dkfv58P8PexSCbJkdeRQCYrpKMSfy97su%2BIN8nyoFX%2Brk%2B8hxAkjde8haI4U6ZzI329NHhHf%2BWnP8R%2BiNWm10ZTEyV0tB1ixevpDuGbw85gCM8ClqyltJk1dkcFFBqtBG1wtUTK2Ip3T4RtT%2B3nJG7gdGDTljKDXCTwPvDt0J5c4UYq3tjFj%2FtGuGuo38ZvLP7Q5iRHHp9AvA9PeStIRv7Bxt0UR9Y5b09Nj52AjAliJwHzyHJZIgsKJnQOi87EeKrR3dXZqt52KftRJaiRWmLGPQMASLXCIoz38CvSBOnjX0l8wkdXBT%2Flto%2BrlR0WphYrfKyM5ctF1xz%2FrmvUqccgZr0v%2Bk0q7Lpqb6rZM8rvWBOmvl7%2BXXkSmP3ECIvbu0KNMti3AN8C8BLMpV%2FjD6RUD1PywM8V8aDwnF9MMOUmr8GOqUBIoS9cgpmLJTT0v5koo1KpnTKUP6tCtlhpqb9LZI5UbkOtDEIcvIrVM6IHCELEQxxtXIi82ll8CG1yHIX2F%2FNphqNmiLNzxO%2FG5bH3Dkk2KMpX8uvXEpGcBptZmsXeXL1KXB5%2BsmNdc%2FH0CAmztES2dCMiJQj%2BjiZCHpDdSt1grzVEFtVConoOLfMyJkATESWcX81cXNnp1sN3AEw%2B7PvWOu95TpD&X-Amz-Signature=b491673a5257d6dee2d9f63c54f02863d3151c26143eb0d11c1f695a229349e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBOAB5H%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQXqn6qPgiFtpC0TuTRNE1arx7U3bHoP0wbdiMZwGpXAiEAgy5fOvrY%2BLzmkksBBA0wFCcVY104RqI%2FphsCJSquYcUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJxY8ruU50AD%2Fgz9WircA2kIEQpS3TjWBl%2FtSSWVxFrsmZ3tIN8Z%2Fz71oO1MVyo3eIziXyLToEP1fy4PNitK6bfNWmiCIntHp2oR9wO%2FApboJ%2F1NglQvlfAzxRaeoG3Ui%2Fv1XjfUxWzQw7Lkuk1%2BCz4s5A652cyLaW1gaeh2oHHt91bPf04MMvfHLnySSRVO9wEPYjOTLJjopMURfSubFRMGh%2FdW%2FMqYCPNx3dl%2F16dkfv58P8PexSCbJkdeRQCYrpKMSfy97su%2BIN8nyoFX%2Brk%2B8hxAkjde8haI4U6ZzI329NHhHf%2BWnP8R%2BiNWm10ZTEyV0tB1ixevpDuGbw85gCM8ClqyltJk1dkcFFBqtBG1wtUTK2Ip3T4RtT%2B3nJG7gdGDTljKDXCTwPvDt0J5c4UYq3tjFj%2FtGuGuo38ZvLP7Q5iRHHp9AvA9PeStIRv7Bxt0UR9Y5b09Nj52AjAliJwHzyHJZIgsKJnQOi87EeKrR3dXZqt52KftRJaiRWmLGPQMASLXCIoz38CvSBOnjX0l8wkdXBT%2Flto%2BrlR0WphYrfKyM5ctF1xz%2FrmvUqccgZr0v%2Bk0q7Lpqb6rZM8rvWBOmvl7%2BXXkSmP3ECIvbu0KNMti3AN8C8BLMpV%2FjD6RUD1PywM8V8aDwnF9MMOUmr8GOqUBIoS9cgpmLJTT0v5koo1KpnTKUP6tCtlhpqb9LZI5UbkOtDEIcvIrVM6IHCELEQxxtXIi82ll8CG1yHIX2F%2FNphqNmiLNzxO%2FG5bH3Dkk2KMpX8uvXEpGcBptZmsXeXL1KXB5%2BsmNdc%2FH0CAmztES2dCMiJQj%2BjiZCHpDdSt1grzVEFtVConoOLfMyJkATESWcX81cXNnp1sN3AEw%2B7PvWOu95TpD&X-Amz-Signature=b55317537f31eaea8a7ef1a931138bc63a1b0e34e597684acc0ace717f189950&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
