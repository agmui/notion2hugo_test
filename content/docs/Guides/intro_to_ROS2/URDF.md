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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGAO7U4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDZWNlAFnRdRy9UL3dAKzWuktnwpSGOsbn3N1qUELbHOAIgaS8k8lERQL%2FhJ6QiwORnulKqBoKtvERYfGd1O10%2FNNIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2nup6Lg80GJOe2gSrcA9RZlr1ZhdD3PdiNzHgI4xKr4%2BvFuSJwk1Y%2FMdMgk%2BLWSuqvudQUay6DoS62GRN3lwiQyYobMT7uQQkzMtmIHmF3F4I8oIynGvKB0VXhme5aTfZCWZk6R5ly3JK1TmjqaDmz4BGkz5lmgpYzgXy3lQyalA6OsRJm32HdmZVvmi5ByWbJiOe0ZrgUElL%2BdA94mlA8hWLV9FvdKLsp%2FStNFwRoWXcAiZMODCOJkTytbLBIlZcoMPm%2FU6Iyykp92F5jhqksmOCpqdPlT5ckYIqK4itCA4F1yj%2FdqSLB5rcXe1oyZSjoDyFgyqDVupUkMi0FbyFKt0d3q8ycw7qFCqZwRqCviqXQH81VQfpqlsBCjM1o4cHxKR2%2BNXKKwJvDRFbA7lpI4pwSDukIBBGN3e4YDcB7Po7aWOKadIgv6RmpCfL5hp8Xd7ctTSemlDok9VkLSTzVXC5qZK6FwvjBsbL4FjBLlOEF6dcLzofQRjd45oe08T7njZM0G%2FB1HmcMhslbqAGdLQozay1SB3PEKYlNHgDGdaBNT4OY9yVdcMGacGT4RWhUqi8LTkbIr2O5MoJjNl23GS0B09Hq1pKC7rL3rR4IcruSFLn95faqgXpIOlvWErgTPNb7PppDRKBmMK7FtL8GOqUBoeELuNEK8PZoMKXXnJaE9oTx20%2FkSDf2xVfZL%2Bdbnxc3P%2Fbq%2FQAefUGd1r3rXt2FN5Gb6hzsbHVqCZuheI0nzIquRQkdMFwBw%2BBlhP8sez63H632fOKWigUynVpJU3Z55xk%2Fnt0uWGFJu7NtiAS681KFUhNyb6WiYls6RYOE07M16Rcd%2BeiHxHlr1KqAAiwrsdhl8Q7YKkSkaSzSgWxIpOizgIIo&X-Amz-Signature=3a98acbada1e424e53a662ba61dd4f0ebbc725873fa6d4db4c3601f1855b6c95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGAO7U4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDZWNlAFnRdRy9UL3dAKzWuktnwpSGOsbn3N1qUELbHOAIgaS8k8lERQL%2FhJ6QiwORnulKqBoKtvERYfGd1O10%2FNNIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2nup6Lg80GJOe2gSrcA9RZlr1ZhdD3PdiNzHgI4xKr4%2BvFuSJwk1Y%2FMdMgk%2BLWSuqvudQUay6DoS62GRN3lwiQyYobMT7uQQkzMtmIHmF3F4I8oIynGvKB0VXhme5aTfZCWZk6R5ly3JK1TmjqaDmz4BGkz5lmgpYzgXy3lQyalA6OsRJm32HdmZVvmi5ByWbJiOe0ZrgUElL%2BdA94mlA8hWLV9FvdKLsp%2FStNFwRoWXcAiZMODCOJkTytbLBIlZcoMPm%2FU6Iyykp92F5jhqksmOCpqdPlT5ckYIqK4itCA4F1yj%2FdqSLB5rcXe1oyZSjoDyFgyqDVupUkMi0FbyFKt0d3q8ycw7qFCqZwRqCviqXQH81VQfpqlsBCjM1o4cHxKR2%2BNXKKwJvDRFbA7lpI4pwSDukIBBGN3e4YDcB7Po7aWOKadIgv6RmpCfL5hp8Xd7ctTSemlDok9VkLSTzVXC5qZK6FwvjBsbL4FjBLlOEF6dcLzofQRjd45oe08T7njZM0G%2FB1HmcMhslbqAGdLQozay1SB3PEKYlNHgDGdaBNT4OY9yVdcMGacGT4RWhUqi8LTkbIr2O5MoJjNl23GS0B09Hq1pKC7rL3rR4IcruSFLn95faqgXpIOlvWErgTPNb7PppDRKBmMK7FtL8GOqUBoeELuNEK8PZoMKXXnJaE9oTx20%2FkSDf2xVfZL%2Bdbnxc3P%2Fbq%2FQAefUGd1r3rXt2FN5Gb6hzsbHVqCZuheI0nzIquRQkdMFwBw%2BBlhP8sez63H632fOKWigUynVpJU3Z55xk%2Fnt0uWGFJu7NtiAS681KFUhNyb6WiYls6RYOE07M16Rcd%2BeiHxHlr1KqAAiwrsdhl8Q7YKkSkaSzSgWxIpOizgIIo&X-Amz-Signature=0e22633cf85755e7afee569a7f292fc862bd683e7ed6342bc76016a5415f294b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
