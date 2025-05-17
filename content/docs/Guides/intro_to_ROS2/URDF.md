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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOCCXWS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOZkfEWx9HshaOrz8xPGXQjGsftIhqAQuBpw6%2FQ3WeAAiEAyzWFbmkuKjP71b1J1IF0Vhkx7N2IDtcgIhmJqJqro7Aq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGy7dGMTE4CBCe7AYSrcAzua6ZQ69UNPXbN%2BJdBPg%2BxuqXvp8NIOBmrtECuolRlr70m7%2BKR2nsJ82Wki3G4Z6VVhiLXcTJ5ka8abPLw%2FJrJxzQm0wIxVdEMmtJWQb3fneLvrEeLSwSk%2FPPah9ZF6p%2F6nrp1pJ0cl5VqsBczlQ%2FPByJykRuc9L2Yk%2Fb%2FhyMjMajznBHM7ZTjg9%2FYEnrmAAWpuDET3Z3A6nv2UotS9Al%2FaJTrXgjEhdAtiCvg%2FV9R2jo8lpSTHI42GZ5JiMX7SyzC%2B9yIvzvT6waWpNmVgvpI17FNDiNuOwh59UmyblPxxuVlVKypb9i%2FOctGC5e8p1SOEPgSG0z39y6ISaObNtQQBoc1jUrF%2FwAWgJqyCPgSjflv6Ig1k8u9mSffS2daQWgvWvBQh82HLuUBO0ydmSz9dXmcI6rDfoopzpkTxCiglcCdAwjS5uzsqV0VqZxNoHoDLABAyIQ0lcX2nMhgg3ZN4H0OvTELIylKRy2ZlwrLgEFXLzmWJoRHEwNlLaWfx6jjx1TPLQflNBAYRfQR2SAFgNl%2BiUStW01X6QWHWdeAZCVUZ44QViLnTVtmikfmJRaYOpG0j77ahsH4TZCRQUDLKv8K4iRPMoHHAzoz2OV%2BntRR74CXY%2Bi%2BqlkSHMNC1osEGOqUBReovwApoHZXDf9NUat8EFgoncn2YUxhmE6ALGJILHT9QSVAaccBT%2BEa%2B0p4gLuraldm84kCjpx8mbFVn%2BMyFQuwzPsECzUaSGFJaH8l0GPLTjkuSHnHLRvjssRW9VTLfCBkvizBDT0Tckg7TXbl42hDnuOK0UvVNkN%2BY7BJ%2BcLWba9Zw7rwh%2FHxC7T94lrwY%2FXJ68rWm%2F19%2B6NVY8UBGBxuEx11C&X-Amz-Signature=34de8c72699bb39e73a1bebebe9c77620e47a998cfa301c4027a668621537007&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOCCXWS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOZkfEWx9HshaOrz8xPGXQjGsftIhqAQuBpw6%2FQ3WeAAiEAyzWFbmkuKjP71b1J1IF0Vhkx7N2IDtcgIhmJqJqro7Aq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGy7dGMTE4CBCe7AYSrcAzua6ZQ69UNPXbN%2BJdBPg%2BxuqXvp8NIOBmrtECuolRlr70m7%2BKR2nsJ82Wki3G4Z6VVhiLXcTJ5ka8abPLw%2FJrJxzQm0wIxVdEMmtJWQb3fneLvrEeLSwSk%2FPPah9ZF6p%2F6nrp1pJ0cl5VqsBczlQ%2FPByJykRuc9L2Yk%2Fb%2FhyMjMajznBHM7ZTjg9%2FYEnrmAAWpuDET3Z3A6nv2UotS9Al%2FaJTrXgjEhdAtiCvg%2FV9R2jo8lpSTHI42GZ5JiMX7SyzC%2B9yIvzvT6waWpNmVgvpI17FNDiNuOwh59UmyblPxxuVlVKypb9i%2FOctGC5e8p1SOEPgSG0z39y6ISaObNtQQBoc1jUrF%2FwAWgJqyCPgSjflv6Ig1k8u9mSffS2daQWgvWvBQh82HLuUBO0ydmSz9dXmcI6rDfoopzpkTxCiglcCdAwjS5uzsqV0VqZxNoHoDLABAyIQ0lcX2nMhgg3ZN4H0OvTELIylKRy2ZlwrLgEFXLzmWJoRHEwNlLaWfx6jjx1TPLQflNBAYRfQR2SAFgNl%2BiUStW01X6QWHWdeAZCVUZ44QViLnTVtmikfmJRaYOpG0j77ahsH4TZCRQUDLKv8K4iRPMoHHAzoz2OV%2BntRR74CXY%2Bi%2BqlkSHMNC1osEGOqUBReovwApoHZXDf9NUat8EFgoncn2YUxhmE6ALGJILHT9QSVAaccBT%2BEa%2B0p4gLuraldm84kCjpx8mbFVn%2BMyFQuwzPsECzUaSGFJaH8l0GPLTjkuSHnHLRvjssRW9VTLfCBkvizBDT0Tckg7TXbl42hDnuOK0UvVNkN%2BY7BJ%2BcLWba9Zw7rwh%2FHxC7T94lrwY%2FXJ68rWm%2F19%2B6NVY8UBGBxuEx11C&X-Amz-Signature=31f25be7f96484ddd97be09a16bbcdbb20f88b2e52f0747a07c3faaf2880e09e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
