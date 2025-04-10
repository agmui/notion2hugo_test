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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PR5WV7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFeZeADPKdNj4HwqUE9eOFrjF4Bjv%2BkhWPB9DEEv%2FVOQAiA9Pd8LxqJjAIZL05XVhrT1zTbnED3voeL4EANrDub%2BISqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpssbMukOtIn9rp7JKtwDLl9xcR9Uqug6PwleTtmoIoJV3tnd1MKvqmp8BZ6acWAo6nELV0diLw3nHcnaLMmb%2BU0V%2Fm7Xd%2BlYw7qotiHAfVnwFBzXha6fStcALWHBKokGWa65BBwJw4UQHIukEZ9%2FVQU35etLCdpiq5%2BPrgL9MGtKMZudG4Uv2Sb0RQqqr1qxBZE2wZm%2BG8GKnqA8xiMi8ec4xLJSsSsIkPWQdrXUqQACTp8iJN0iNcUJPG0HK2SxsBieVpa6WmYPoBVLsOUdRBfMgW8eFD4jqY7prmlEnesPpk2HoSH1vOLAkyhZquGniCDFggsUNIMs07%2Fw4TWtBrnL3C1hPUZL7G7dx9aTp6xCBQDrl5qzyL2kdjbj9xmGGb6iMl%2F7%2BzRC9I7LY9Hosputtm%2FVVE5yDL1gYXMoE1WMIBR%2B3m2NdY%2FjhRMmJjzPUUp22%2FG8nSx1KBQ%2BTMrk2xb%2BIF%2Foh6VxTLm5%2FKcWo0MIdCfxt2g55%2F%2FyCrcMeJUUq3BpSe%2FqRchFs%2F%2FPcj%2B5e2XBvGdBOLTMf3E4b%2BO4nDwnA3ijV3QLYSzR%2BEtE3LQb%2F9rnKSxOc8AS3nvlMNRvdSqZS%2BuMRavMy%2BkTI%2F%2FYYZPg3E4rGYO9F8Af5Ny0l9KGT2YJwHjn5ekFJQQwobHgvwY6pgFI3FeBxzvjJ3szYgeKN8VcR2GJuPtNIo9u6vzjvMyfh1%2Fz72EA5LODEp%2BczL%2B5OL8sJ8g7DK%2Bgwy4b0nh1dCpqRkDjWgmNIEI319Q4vuEdUjt%2F8qV77aPIFI2BBjIY9FS8eZggfHSCADbWIDM%2FThfWPLDcB3n8FJwSq%2FhaJk9KKYqS831HmM00Q0k3HgTF%2FCPJLVv2wWdDeXn2z6NQ0stWTyZY3ALo&X-Amz-Signature=4c3d1574d2c7bff715a6a4caef26d8e9822c505c84b193be3668037f5782d396&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PR5WV7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFeZeADPKdNj4HwqUE9eOFrjF4Bjv%2BkhWPB9DEEv%2FVOQAiA9Pd8LxqJjAIZL05XVhrT1zTbnED3voeL4EANrDub%2BISqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpssbMukOtIn9rp7JKtwDLl9xcR9Uqug6PwleTtmoIoJV3tnd1MKvqmp8BZ6acWAo6nELV0diLw3nHcnaLMmb%2BU0V%2Fm7Xd%2BlYw7qotiHAfVnwFBzXha6fStcALWHBKokGWa65BBwJw4UQHIukEZ9%2FVQU35etLCdpiq5%2BPrgL9MGtKMZudG4Uv2Sb0RQqqr1qxBZE2wZm%2BG8GKnqA8xiMi8ec4xLJSsSsIkPWQdrXUqQACTp8iJN0iNcUJPG0HK2SxsBieVpa6WmYPoBVLsOUdRBfMgW8eFD4jqY7prmlEnesPpk2HoSH1vOLAkyhZquGniCDFggsUNIMs07%2Fw4TWtBrnL3C1hPUZL7G7dx9aTp6xCBQDrl5qzyL2kdjbj9xmGGb6iMl%2F7%2BzRC9I7LY9Hosputtm%2FVVE5yDL1gYXMoE1WMIBR%2B3m2NdY%2FjhRMmJjzPUUp22%2FG8nSx1KBQ%2BTMrk2xb%2BIF%2Foh6VxTLm5%2FKcWo0MIdCfxt2g55%2F%2FyCrcMeJUUq3BpSe%2FqRchFs%2F%2FPcj%2B5e2XBvGdBOLTMf3E4b%2BO4nDwnA3ijV3QLYSzR%2BEtE3LQb%2F9rnKSxOc8AS3nvlMNRvdSqZS%2BuMRavMy%2BkTI%2F%2FYYZPg3E4rGYO9F8Af5Ny0l9KGT2YJwHjn5ekFJQQwobHgvwY6pgFI3FeBxzvjJ3szYgeKN8VcR2GJuPtNIo9u6vzjvMyfh1%2Fz72EA5LODEp%2BczL%2B5OL8sJ8g7DK%2Bgwy4b0nh1dCpqRkDjWgmNIEI319Q4vuEdUjt%2F8qV77aPIFI2BBjIY9FS8eZggfHSCADbWIDM%2FThfWPLDcB3n8FJwSq%2FhaJk9KKYqS831HmM00Q0k3HgTF%2FCPJLVv2wWdDeXn2z6NQ0stWTyZY3ALo&X-Amz-Signature=c5801584c6ab3fc6bc4dfc58f9c73f370abc0229fce3d3589c7ec9cc45f18d81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
