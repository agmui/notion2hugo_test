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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZ4JPWG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4FDQwf%2B%2FEgdBg8CWoCwNCwcSzZI3%2Br3P3X09JTfnS0AiEA6jAaWaGZqxT6eWrlu%2FrxasTNnopVp1lXBjG6QTwP3UwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfTkywv4FsXDsQyYCrcA6j5OTcrPtmtBKAS%2FSh1l5vICLtTElhxCuxLeUVEq27sMcOe1XPzzRNNEVW%2FSbA6j9oaICWpq%2BN62e0I%2Bg1arhQMC2Hc%2Bmga9d%2FtJ37vhoTwh%2B7QMnkMsnt2zY2x8th4bfiIoZopbLL4R0Y34lmN41KSqXwIa8sQLfYCI80FOTOt1X%2BleuNSws%2F9QegMazMIaIXnqwDsQ3QeZnL26KCRzBhiIr6XLkGfOBxAYaCwMYf9euM9LQU8IUljKYjfr8RL8oY4WZxvUNKnEruu%2FpjKdAGUCLzX7AMQ9gVzc6s71pQStUOLZpAe9O%2FBjMSktp3C95ke5hEWXNUJDyoaVK1%2Fchu3wduElsdFipUH31aSkWdfLlJTdIV9luFMjRqwKXK0WJkUJp4LB72%2BQ3SMi%2BdR0OjcjH0sWoU4ESVAKVRrnm7SgMe5TaIfkIG7vIUTA%2FR9gWDvXNIv22R4dbCRXKXa9nVk2aeFCOSCMPNfrAmKUGitG7qVRmsPTzlT4xloOP9uCeM4ve5TyNBjcul08fVTnEWUd1AovN3GL6qBEs0B4UTJ9qoMVroj2yCuaMLtRtZjsCiYtd4Go3HaSPCKFaygfdeXo%2F6zgQg8O8V5b10MzPA3GygfzR0zP2qQr9r5MOT%2Bhb8GOqUBXzG5G2jir8sOc2dygTMVwrf%2FTmyLPBZSthTp0Vw4fmz0%2FTuxNTqSWHKgDiFvQ9SXsOqnwDDbGIDCRwIv59qk8XXPXXiQpzQa2OksWBLK%2Fi3LxQWl48iK2i8bZAK2ZnjTP6A9seME6ZhTlshxFNlwzauKaE%2F5Rg4y%2FFD21T16ixcgl6jDbxgqvnyV8kjCFcB%2BkGuJvCYR2uPNGRV9mVGJdkIXcNpK&X-Amz-Signature=44ca8696649a85fbadd6ae729535bd866ce09fe20849f9f4b5689eac6399830b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZ4JPWG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4FDQwf%2B%2FEgdBg8CWoCwNCwcSzZI3%2Br3P3X09JTfnS0AiEA6jAaWaGZqxT6eWrlu%2FrxasTNnopVp1lXBjG6QTwP3UwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfTkywv4FsXDsQyYCrcA6j5OTcrPtmtBKAS%2FSh1l5vICLtTElhxCuxLeUVEq27sMcOe1XPzzRNNEVW%2FSbA6j9oaICWpq%2BN62e0I%2Bg1arhQMC2Hc%2Bmga9d%2FtJ37vhoTwh%2B7QMnkMsnt2zY2x8th4bfiIoZopbLL4R0Y34lmN41KSqXwIa8sQLfYCI80FOTOt1X%2BleuNSws%2F9QegMazMIaIXnqwDsQ3QeZnL26KCRzBhiIr6XLkGfOBxAYaCwMYf9euM9LQU8IUljKYjfr8RL8oY4WZxvUNKnEruu%2FpjKdAGUCLzX7AMQ9gVzc6s71pQStUOLZpAe9O%2FBjMSktp3C95ke5hEWXNUJDyoaVK1%2Fchu3wduElsdFipUH31aSkWdfLlJTdIV9luFMjRqwKXK0WJkUJp4LB72%2BQ3SMi%2BdR0OjcjH0sWoU4ESVAKVRrnm7SgMe5TaIfkIG7vIUTA%2FR9gWDvXNIv22R4dbCRXKXa9nVk2aeFCOSCMPNfrAmKUGitG7qVRmsPTzlT4xloOP9uCeM4ve5TyNBjcul08fVTnEWUd1AovN3GL6qBEs0B4UTJ9qoMVroj2yCuaMLtRtZjsCiYtd4Go3HaSPCKFaygfdeXo%2F6zgQg8O8V5b10MzPA3GygfzR0zP2qQr9r5MOT%2Bhb8GOqUBXzG5G2jir8sOc2dygTMVwrf%2FTmyLPBZSthTp0Vw4fmz0%2FTuxNTqSWHKgDiFvQ9SXsOqnwDDbGIDCRwIv59qk8XXPXXiQpzQa2OksWBLK%2Fi3LxQWl48iK2i8bZAK2ZnjTP6A9seME6ZhTlshxFNlwzauKaE%2F5Rg4y%2FFD21T16ixcgl6jDbxgqvnyV8kjCFcB%2BkGuJvCYR2uPNGRV9mVGJdkIXcNpK&X-Amz-Signature=82d339a959a818b7b046e35fe00be5f31536ea0c3e9f876de0f967016f577439&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
