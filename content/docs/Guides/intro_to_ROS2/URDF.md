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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIANQPKG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbhRSWpPzJLkQgPp5qDCK3d%2BJdhKMKn92qbXqWZGQERwIgNyTO%2FTyHUYZEsL4IFEk4pOaC0TPZeFfPLgpMFXsiZVkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgqI6ixFqRXZfUwHyrcAyWz9KYi1bP0WVSi%2Bljc%2BUGA7ASKI21cuw9iOqu8sKmwHLkMni%2FE7Rve6XjcQZ5e%2Bv%2FBllF9wRoerGcd0f8qVnJKcnugqhgqtZH5VGLDDl2O5npWxu23uBhtAabv3C1KT18ifQpfr2Dc51Xgus4c1sJnVd4jbFDxLMBoe4BIeuTSG6CKrpcCGXFTc7vBZtBFTBcLJ9NmuXL%2FcFBrqhRXxgXyCgKD2MS0NvlygGdVb%2FS%2F7SQCiZgNuPvbHpjz2guvsXE6NuORbtBvUyDWYS25dq5Nw8sV1wVRBWg4wnJi%2FWRxwNv7%2B52xifPyln2AeCzgl8dSkwGLigg%2Fvah5H0kpFATSplqATsB4pcsRzfeLAXb9YhJRsCscO2SC2fTYkhgqnm6exTtzpdFA7qyoBU1RpppTRUXh9gzrIGrA%2FVUR9U%2FSv2KgXCbMR4Rl%2FovfPFGsqgxKitn77Z1uBbHh%2Foxzav1pCjcEr9jqpvwtWpbnrehoNYHpiwNJD%2BA%2FGC9c1gB006yEIbzLDMptkgAnZEjTeRYyONE0racJlCukNZoCsfvjJ8g7M36XcgjN1pLLc7teIrb5LwP1o3VBULyJSV22CFE50jMuvZhgyFO91da7NranE%2Fdhlylk%2F5S%2BWCAWMOH%2B2r0GOqUBIvrzTO1Ozrn5SbRHUxpZN1w9iuk27YTJR2zNrRfcTw92GFhUNnrDUY1nT2pstwwZV95XsFV3tO0SSs4Yg2XOBjFZ%2BpTVpTweGXV6FAI6u7sOI5BNN%2F0nbhbKRqpADQRHllEotmURIU2NrAG%2Fj3JpNORDSIOmxpoLJ5wn22nHjWflT0xigmvmsRmXDKp0Dc%2BQDyycigeydCBOH3Rmr%2BU%2FLoSe9qXP&X-Amz-Signature=29cbeae13dad2a7787f7902b87cc867562af1f8fcbb031e5ff35232732d33497&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIANQPKG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbhRSWpPzJLkQgPp5qDCK3d%2BJdhKMKn92qbXqWZGQERwIgNyTO%2FTyHUYZEsL4IFEk4pOaC0TPZeFfPLgpMFXsiZVkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgqI6ixFqRXZfUwHyrcAyWz9KYi1bP0WVSi%2Bljc%2BUGA7ASKI21cuw9iOqu8sKmwHLkMni%2FE7Rve6XjcQZ5e%2Bv%2FBllF9wRoerGcd0f8qVnJKcnugqhgqtZH5VGLDDl2O5npWxu23uBhtAabv3C1KT18ifQpfr2Dc51Xgus4c1sJnVd4jbFDxLMBoe4BIeuTSG6CKrpcCGXFTc7vBZtBFTBcLJ9NmuXL%2FcFBrqhRXxgXyCgKD2MS0NvlygGdVb%2FS%2F7SQCiZgNuPvbHpjz2guvsXE6NuORbtBvUyDWYS25dq5Nw8sV1wVRBWg4wnJi%2FWRxwNv7%2B52xifPyln2AeCzgl8dSkwGLigg%2Fvah5H0kpFATSplqATsB4pcsRzfeLAXb9YhJRsCscO2SC2fTYkhgqnm6exTtzpdFA7qyoBU1RpppTRUXh9gzrIGrA%2FVUR9U%2FSv2KgXCbMR4Rl%2FovfPFGsqgxKitn77Z1uBbHh%2Foxzav1pCjcEr9jqpvwtWpbnrehoNYHpiwNJD%2BA%2FGC9c1gB006yEIbzLDMptkgAnZEjTeRYyONE0racJlCukNZoCsfvjJ8g7M36XcgjN1pLLc7teIrb5LwP1o3VBULyJSV22CFE50jMuvZhgyFO91da7NranE%2Fdhlylk%2F5S%2BWCAWMOH%2B2r0GOqUBIvrzTO1Ozrn5SbRHUxpZN1w9iuk27YTJR2zNrRfcTw92GFhUNnrDUY1nT2pstwwZV95XsFV3tO0SSs4Yg2XOBjFZ%2BpTVpTweGXV6FAI6u7sOI5BNN%2F0nbhbKRqpADQRHllEotmURIU2NrAG%2Fj3JpNORDSIOmxpoLJ5wn22nHjWflT0xigmvmsRmXDKp0Dc%2BQDyycigeydCBOH3Rmr%2BU%2FLoSe9qXP&X-Amz-Signature=0e79dba7a644aea478a78e412341c6c986ebda215869890aa6ea9b582be3297a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
