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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R4XZSZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5g7IZkH0C7yUISKdYAqdtyBp2jjqfaEWsQ3J5iFkCQwIhALZMzfar%2BqtO%2BxBb%2BHaRCqVMw63trqK2X%2B%2Fxxnc3GM%2B8KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYIvkkg4yLAjB1Yd0q3APhn%2F0H38bJRYyLL20Wp61MBxeMrKQHdfxFG5E0sFb%2BgSASMuMInjdpxznI8Ad1wkjpAod6bsHl4T14ekHGGyyYZb8ena5FR1tWsEbbF3AKE1CphauMrJjk4edQ3ByntuReYxIRNFoH%2F97gaY1Uc75eNCjT1KM%2BdVkWRErcsoa5HZBrpQMKIfZvbe8D92PCkx2xFp1I8C2G4RO0HU4TToBvNYx2NXuUpfX8bDrsJYTswK3Rp%2FdR7PNy00tpN0dA%2FHawDpFzAs3K%2Fysy%2B%2BWt6waioSm1r07V0V4TEV1SDD0aZYZUzBwuqii8q1GYeAbvAqqQRg13wYLVGamkyE1oAFRWe%2BNbQOlOLU9%2Bcb78kKHA48JASmovCTsljVhq208XROlUA%2FYqtoaogoZjyBBxTrUNP6F48Wii%2F%2BA4ujrfwQFqrB8W0S0bdGuALnvhZyuUtmOVjXqs%2Br6ljQDcM1FAawxsAEa40ZKX5O567Uti023Sa4PESzIeNbVJLpnY8MjBLqmsa0DchUgPqAN3d%2BN7Ww%2BVvhcI6MTqSWt8Taaj3IhzSPlNLaV2TL0OlUPgysLmeoy4eLmXDOgk2W2igIGDuSuwiYgPJUjxcwJDX26gXkW0bFTB0ZiP9gV9FfHaLTDtpOzBBjqkAQHBsrlbubQcx2QDPALFQdVWJcxw0hYXciZvC71%2BDVwJJ%2FKIlgb64Zd4Jge6WkI4b3Y%2Ba5sMe0pFMhAtXBMfuRc2h5bWWX72AyPPzabcmHFBzdepOTj4nsFMFUsJOon7hU3JNQj5bC32%2FA%2FOZIAAOs0xo1U4V3CKgRybloB6BGwIxYwhjyFIfxKx0QWc17UOPKPpzlpH3y1r%2FXHQMJiU1J3m%2Fg80&X-Amz-Signature=072a01850ee8027d4ed28df467753d03ea9bd7f70045077c0db089d0cba32f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R4XZSZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5g7IZkH0C7yUISKdYAqdtyBp2jjqfaEWsQ3J5iFkCQwIhALZMzfar%2BqtO%2BxBb%2BHaRCqVMw63trqK2X%2B%2Fxxnc3GM%2B8KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYIvkkg4yLAjB1Yd0q3APhn%2F0H38bJRYyLL20Wp61MBxeMrKQHdfxFG5E0sFb%2BgSASMuMInjdpxznI8Ad1wkjpAod6bsHl4T14ekHGGyyYZb8ena5FR1tWsEbbF3AKE1CphauMrJjk4edQ3ByntuReYxIRNFoH%2F97gaY1Uc75eNCjT1KM%2BdVkWRErcsoa5HZBrpQMKIfZvbe8D92PCkx2xFp1I8C2G4RO0HU4TToBvNYx2NXuUpfX8bDrsJYTswK3Rp%2FdR7PNy00tpN0dA%2FHawDpFzAs3K%2Fysy%2B%2BWt6waioSm1r07V0V4TEV1SDD0aZYZUzBwuqii8q1GYeAbvAqqQRg13wYLVGamkyE1oAFRWe%2BNbQOlOLU9%2Bcb78kKHA48JASmovCTsljVhq208XROlUA%2FYqtoaogoZjyBBxTrUNP6F48Wii%2F%2BA4ujrfwQFqrB8W0S0bdGuALnvhZyuUtmOVjXqs%2Br6ljQDcM1FAawxsAEa40ZKX5O567Uti023Sa4PESzIeNbVJLpnY8MjBLqmsa0DchUgPqAN3d%2BN7Ww%2BVvhcI6MTqSWt8Taaj3IhzSPlNLaV2TL0OlUPgysLmeoy4eLmXDOgk2W2igIGDuSuwiYgPJUjxcwJDX26gXkW0bFTB0ZiP9gV9FfHaLTDtpOzBBjqkAQHBsrlbubQcx2QDPALFQdVWJcxw0hYXciZvC71%2BDVwJJ%2FKIlgb64Zd4Jge6WkI4b3Y%2Ba5sMe0pFMhAtXBMfuRc2h5bWWX72AyPPzabcmHFBzdepOTj4nsFMFUsJOon7hU3JNQj5bC32%2FA%2FOZIAAOs0xo1U4V3CKgRybloB6BGwIxYwhjyFIfxKx0QWc17UOPKPpzlpH3y1r%2FXHQMJiU1J3m%2Fg80&X-Amz-Signature=597bf625ce141e7bc25a02e688f60e4a596b8ab10f36abdc21687e8bdde70335&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
