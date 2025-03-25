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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYSVQ7T%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtHrGWWs5fKWidlEAuoa%2FgYpg02VLDLiGuh7UzQg1O%2FAIgC4e7ubzr0HbVnsnGpxIGmVg4AvUdZLH03IRagJlbf4AqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVRvUKQ%2FhG1SCtkCyrcA%2FZdkYLqXJk3rySnHxaSns4aemDC6k4oNys95bcUU79eyAvs3f%2FWfbXVA0AQuLYpQf%2BpnDWDxHMThNa%2BCTF8BFagBQbbhtK90johjs3gGRoHP4p4EEaICORJ2A1HfW5uKzj6fRWo6QjGAGyvo%2BkDw8LTZloE21MAgENHWb0bwEk4V2OMK9pSGGsoTLF2yBX3dFcBeH6%2FT1vXTOaio4mpyMZQ%2Fr%2BA4ITO%2FJ4FGcnhwVYY0FFi5kh%2FADjSYT5Ode3OjEEI%2FtZZ7sX7CqB1mEVWoJUTCUorS7k%2FPgeOvTSGC60DxmY3E0UwZ2yJ5V1FD%2FBOx%2BPFJZ%2Ft1dxyKjAYlOdUDWWJNIX63lQ%2F6bGSjNKf795UEHY71I5pHUs4kRPVGHQlOsP8qSWhGdj7Bs2SC9P%2ByW3T5rFdDGNnHaC%2BO2tp5pnAOekBnEnHhNA2ZBqUlRrfv5QzRm1VqDko2bzQ%2F6lDi9NKZpcdE30rp6X1MlqFScYQ24QKFJx1p3wYNdmrzxzlOPfmfkA097xlfC%2FDQli%2FE7Z3NIMKF6cm7ilu%2F%2Fv4YHQQN5rvXPmIaovZaSrMxI06OhjrmjrmZii48nznbggSTru0ajULcM%2BEOv%2FYJyfCMmLYJcz%2Bju%2FRQEWROv6jMLrwh78GOqUBd3zHGn0uE8W2Rb0VoLIRJiENKlYVbUeV5cSJJLlWW%2FIMUMqk5X8VTCdMYl9PU5%2F0LRejuJ9yGmh5ul4S0HiClJi1c2io2CiMcm8w1DLj%2F6UjCukp%2BP%2F9F5SjPbLQ2FkAyG1cg22yetnsztw5abU2x9hIH87%2Bgc%2FvfMVLCRR6U%2F6uc%2Bcj6Q3tuTh%2F2oy7gBxRbGhCDQrEsEfZBaWUFp%2F3JNZdgY5a&X-Amz-Signature=d011dec3e8f0bd56a09466ce940bbe7b9ecd46791bc2b34e90021cfa5ef7064c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYSVQ7T%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtHrGWWs5fKWidlEAuoa%2FgYpg02VLDLiGuh7UzQg1O%2FAIgC4e7ubzr0HbVnsnGpxIGmVg4AvUdZLH03IRagJlbf4AqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVRvUKQ%2FhG1SCtkCyrcA%2FZdkYLqXJk3rySnHxaSns4aemDC6k4oNys95bcUU79eyAvs3f%2FWfbXVA0AQuLYpQf%2BpnDWDxHMThNa%2BCTF8BFagBQbbhtK90johjs3gGRoHP4p4EEaICORJ2A1HfW5uKzj6fRWo6QjGAGyvo%2BkDw8LTZloE21MAgENHWb0bwEk4V2OMK9pSGGsoTLF2yBX3dFcBeH6%2FT1vXTOaio4mpyMZQ%2Fr%2BA4ITO%2FJ4FGcnhwVYY0FFi5kh%2FADjSYT5Ode3OjEEI%2FtZZ7sX7CqB1mEVWoJUTCUorS7k%2FPgeOvTSGC60DxmY3E0UwZ2yJ5V1FD%2FBOx%2BPFJZ%2Ft1dxyKjAYlOdUDWWJNIX63lQ%2F6bGSjNKf795UEHY71I5pHUs4kRPVGHQlOsP8qSWhGdj7Bs2SC9P%2ByW3T5rFdDGNnHaC%2BO2tp5pnAOekBnEnHhNA2ZBqUlRrfv5QzRm1VqDko2bzQ%2F6lDi9NKZpcdE30rp6X1MlqFScYQ24QKFJx1p3wYNdmrzxzlOPfmfkA097xlfC%2FDQli%2FE7Z3NIMKF6cm7ilu%2F%2Fv4YHQQN5rvXPmIaovZaSrMxI06OhjrmjrmZii48nznbggSTru0ajULcM%2BEOv%2FYJyfCMmLYJcz%2Bju%2FRQEWROv6jMLrwh78GOqUBd3zHGn0uE8W2Rb0VoLIRJiENKlYVbUeV5cSJJLlWW%2FIMUMqk5X8VTCdMYl9PU5%2F0LRejuJ9yGmh5ul4S0HiClJi1c2io2CiMcm8w1DLj%2F6UjCukp%2BP%2F9F5SjPbLQ2FkAyG1cg22yetnsztw5abU2x9hIH87%2Bgc%2FvfMVLCRR6U%2F6uc%2Bcj6Q3tuTh%2F2oy7gBxRbGhCDQrEsEfZBaWUFp%2F3JNZdgY5a&X-Amz-Signature=5bfbaba6d747cf6f03cf8643cd691d3d70c461a4bf50d1954d2dbfcfe7923135&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
