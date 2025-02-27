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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEVRC3GW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBZQf5sLMZcvnEIPc%2BSfCk%2B%2BneqfmsUFYp%2FtVJE8FQOrAiEA%2Fa5Z7CcZ83yY%2FDZngN%2B8%2Fhz76%2BLS8vLDmke%2FBVvc5eEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPeCZLWbwUHOpMWpDCrcA8fkx1Bb0JDOlKHxMGULA4%2B912gAHCvjZ0hyK0muMo7rwD5dOrL4DYW1QNECTIES%2F%2BYiNR3tPWfVmthkQ3LNMJ3WmD3mIfptixpG6vm4VzoRNKkqkkVlL722Ym65dUPO3GZ65h144odCKypW23i2Qo8iPCQgxEp9rc0mZboo4PcOVox4iB1ybptRVFfRGh%2FUcIv0EXVtiJA8mVvgGi8cOAv8VEnjNpR0UbfesD1gNgZmpenA74d26Rmr30qgNYV0vSuUR1QPZaMEZN8ACjdSRjl%2BwlDMSdFpCSQOvV%2BSIy7miZenvNAeDH%2BPaF7QEcLBy5wGZi1P2AaUkixE1n0oqTryEpIUCD%2BniwrgNh9vP3gW93ddDOR%2B03ef9%2FtJhLDDSz%2Blz4brqJwYmjD9QqI1KfmPpDHiHcQHU%2FtXXjD1%2BASVMO%2B2FWql%2FsnUWdhHWM7M51g5amSsfQayPOkMMEzcGEIXcT4vZuFxC3IP4zjCRb6Rjgwf5l6m80JDCVBvG5cZ1uSPBVR4BK9aqfZDulqGVixY621aCnQwZ%2FYtJQcBJ0bDHMekD46hhPV7bNRJsNME9oBPMDUvWt%2Fk7twAeRgub3i351%2FrJ%2BTm49wWog9aJPcvLqXSb1YYQUpsd38RMNXwgr4GOqUBiLaMDDUwLLAoUl4TwYZvIBvOOztBd9VPrb6GWEu%2BXpSuATs2eDjC%2FImmMuvLsyxbCLytKn%2B79IiNGMqOm07s3j4j6UOSYnfxr2eJ5ctppdI3CdkSOR6zeDAs5QB84MpPkWmm6TU8P%2BsSucyBTot1%2FWWct18nrL6mxVJOx%2FwtQWXEWzHKjNKXkyRsK69zH1lCam0w6OK5yFw8Lh91Vesaid%2FrPa30&X-Amz-Signature=c05daf64e40f5392d4a6c6b6b6cc5cff42f539e17bfc9d78518731e8a04db746&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEVRC3GW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBZQf5sLMZcvnEIPc%2BSfCk%2B%2BneqfmsUFYp%2FtVJE8FQOrAiEA%2Fa5Z7CcZ83yY%2FDZngN%2B8%2Fhz76%2BLS8vLDmke%2FBVvc5eEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPeCZLWbwUHOpMWpDCrcA8fkx1Bb0JDOlKHxMGULA4%2B912gAHCvjZ0hyK0muMo7rwD5dOrL4DYW1QNECTIES%2F%2BYiNR3tPWfVmthkQ3LNMJ3WmD3mIfptixpG6vm4VzoRNKkqkkVlL722Ym65dUPO3GZ65h144odCKypW23i2Qo8iPCQgxEp9rc0mZboo4PcOVox4iB1ybptRVFfRGh%2FUcIv0EXVtiJA8mVvgGi8cOAv8VEnjNpR0UbfesD1gNgZmpenA74d26Rmr30qgNYV0vSuUR1QPZaMEZN8ACjdSRjl%2BwlDMSdFpCSQOvV%2BSIy7miZenvNAeDH%2BPaF7QEcLBy5wGZi1P2AaUkixE1n0oqTryEpIUCD%2BniwrgNh9vP3gW93ddDOR%2B03ef9%2FtJhLDDSz%2Blz4brqJwYmjD9QqI1KfmPpDHiHcQHU%2FtXXjD1%2BASVMO%2B2FWql%2FsnUWdhHWM7M51g5amSsfQayPOkMMEzcGEIXcT4vZuFxC3IP4zjCRb6Rjgwf5l6m80JDCVBvG5cZ1uSPBVR4BK9aqfZDulqGVixY621aCnQwZ%2FYtJQcBJ0bDHMekD46hhPV7bNRJsNME9oBPMDUvWt%2Fk7twAeRgub3i351%2FrJ%2BTm49wWog9aJPcvLqXSb1YYQUpsd38RMNXwgr4GOqUBiLaMDDUwLLAoUl4TwYZvIBvOOztBd9VPrb6GWEu%2BXpSuATs2eDjC%2FImmMuvLsyxbCLytKn%2B79IiNGMqOm07s3j4j6UOSYnfxr2eJ5ctppdI3CdkSOR6zeDAs5QB84MpPkWmm6TU8P%2BsSucyBTot1%2FWWct18nrL6mxVJOx%2FwtQWXEWzHKjNKXkyRsK69zH1lCam0w6OK5yFw8Lh91Vesaid%2FrPa30&X-Amz-Signature=79b427da7a778db5d3c4dd9d7d72673f081ed6520cc76d7b849a8189cf39361b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
