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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMUZQKP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD86B%2FpJk7ZLudDE4hBThMAZHabxfUMFx5CjX0Cx4JFaAIgd01YHI6c8Y35kkEB%2By3mDafB%2F32%2BzLEePxj8j7j3ZfIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3b%2BvYmyj0ADa9X8ircAzyyDlYeFkZxTA%2BOFf3%2FHu4CIhXOYRo2zCqwdbahTVoQiMMiwn9cyWdMNZLBbTDU%2FXKV2eo3%2FpKeK%2BHX6wJZXK0zha4%2Fo7L3dR4qRSTKi%2BXog9NFlz6sBR%2BZ1736XfusDkD2XmG9U2c8HYg2zyyK5P1SPhEmY1MYcDxGHtoPI6kkvuzJYEHf9iYDBXmwRXV9Q89NOTCrpK3QZ4TMdkTZ6yWxCipC1fnxf23f2HljJVvflcX83r8pUNbU%2FqksJy0%2FrMjMN9Oem1VNisPF0nNGlE2IZ9lfDv7asaImx9HzWT3%2FdiDwKVyEuFjVLwVaBxYD3jT%2FC0O34aHY9IABViR84KKFvOf29%2BZw2%2FsfkQrL%2BS7sWqnccUtogpyyrvmZjVFIsthnDivLfOY9JbnSfWUwoF3qlPbteowheGSAUfCwnOmsfx3%2BLwDicS%2FJo%2Bt3RQ6zt1KJ0vJPDQmBPQiEWLQDOCTrqDhTDBIebdPrTP5%2FPgd6Ddd7v9f41qEJOMEcN2LdeKrsaWnmJWjAzXWcHMFuTtDeLryeLikFjyM%2B43sd%2F47ORDFy7ue4rEpHIQWLwBzW9hVvDXGZWLpfhtSWWZ7bjhCvgvMt14cfO5lN2sN5CV9Gaq2PeD5uhV0%2FIUK8MKmG8r4GOqUBRNdJia4Hh8KBbuVnQ2m%2FFITDk3Dl0ox7gwRSAfXaLJKBLh0w65xPHkUCSaBbrRajso5Kn9CnEDzGBiX64ydzF%2Bg7e%2Bjd6uF3J8MdnTRKqb4Jg0Ps6%2F%2FnqeFVk83ENMZw1l1IlJNEC9lifU1Zb2APg5vuQf2L3nq3F4fB8P%2B5hqGNOnBgqgI6Ji1iHJbH8XFl8LaoApPlquVwFQEEaq6sfpnd6zoO&X-Amz-Signature=3e4b85b1ec9fdab94a3599f2571127b15dcf8d6018fbf9454548adbed56fb46f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMUZQKP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD86B%2FpJk7ZLudDE4hBThMAZHabxfUMFx5CjX0Cx4JFaAIgd01YHI6c8Y35kkEB%2By3mDafB%2F32%2BzLEePxj8j7j3ZfIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3b%2BvYmyj0ADa9X8ircAzyyDlYeFkZxTA%2BOFf3%2FHu4CIhXOYRo2zCqwdbahTVoQiMMiwn9cyWdMNZLBbTDU%2FXKV2eo3%2FpKeK%2BHX6wJZXK0zha4%2Fo7L3dR4qRSTKi%2BXog9NFlz6sBR%2BZ1736XfusDkD2XmG9U2c8HYg2zyyK5P1SPhEmY1MYcDxGHtoPI6kkvuzJYEHf9iYDBXmwRXV9Q89NOTCrpK3QZ4TMdkTZ6yWxCipC1fnxf23f2HljJVvflcX83r8pUNbU%2FqksJy0%2FrMjMN9Oem1VNisPF0nNGlE2IZ9lfDv7asaImx9HzWT3%2FdiDwKVyEuFjVLwVaBxYD3jT%2FC0O34aHY9IABViR84KKFvOf29%2BZw2%2FsfkQrL%2BS7sWqnccUtogpyyrvmZjVFIsthnDivLfOY9JbnSfWUwoF3qlPbteowheGSAUfCwnOmsfx3%2BLwDicS%2FJo%2Bt3RQ6zt1KJ0vJPDQmBPQiEWLQDOCTrqDhTDBIebdPrTP5%2FPgd6Ddd7v9f41qEJOMEcN2LdeKrsaWnmJWjAzXWcHMFuTtDeLryeLikFjyM%2B43sd%2F47ORDFy7ue4rEpHIQWLwBzW9hVvDXGZWLpfhtSWWZ7bjhCvgvMt14cfO5lN2sN5CV9Gaq2PeD5uhV0%2FIUK8MKmG8r4GOqUBRNdJia4Hh8KBbuVnQ2m%2FFITDk3Dl0ox7gwRSAfXaLJKBLh0w65xPHkUCSaBbrRajso5Kn9CnEDzGBiX64ydzF%2Bg7e%2Bjd6uF3J8MdnTRKqb4Jg0Ps6%2F%2FnqeFVk83ENMZw1l1IlJNEC9lifU1Zb2APg5vuQf2L3nq3F4fB8P%2B5hqGNOnBgqgI6Ji1iHJbH8XFl8LaoApPlquVwFQEEaq6sfpnd6zoO&X-Amz-Signature=26384bccda589a91af15d7c829ef1db7942415e2419be9b79a6e726a166b9284&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
