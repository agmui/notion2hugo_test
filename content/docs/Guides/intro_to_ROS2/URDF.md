---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQYTTBN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEqgHBnBXuspxYTfTmYA1Kf07xb3zPBIBg5ajCLbOFlZAiEAu8GsuNz62PH9e6vAD3%2BzcNQ84AC2As4KX4vC%2B3Rb0GoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQiP092nxGarEkSVCrcA7Efo7bgLkH%2F3MYdF%2BKwyeK5DQGin7LRRC1pBgtaT%2FgE0hy3ASOPIVFUJbm7YNDR9ghTGPuJlynExmVj4gtrw8gWnOcgG6KEuLGlL2wMH1uLfDZfPWKcdrlffsaIYK11nYgEfwjJYUNqCCdMogOOvkHZlGbCDqM91rEFU2L%2BnGB061p37r8iaymuMbSOvt1c5azl07ATnpIZBvz15mQF2JcH4V5MPxYz1QYuzS2NL0qU8e5ibhPSVKzIIVOUnExaFcKzahNZ4na7yODJx64JnWrclr2Cgevpi2HqWljoeV9NR0RJcy7U64wYlABLinEXTcdRWVgOHW89XVNyE4Us9bDxsjGVB0WwyjtVmhS6lEBBUgXuBJB1s6LYqcGtla%2FBup4Gs3S5kTIqP2hSHUs4pt5V2YMvcBL0FQ%2Fyn6I6gT8jbC21Fk6BAjEx7LjWFo1ovXl5Uh5Hc1p0x4cQqeK1zCBWg6W%2FYvvZbmCURjojlkfsQBaFPW1szu2C3zDngnrsgtqFl3CvmWMfirLu%2FB9s80RPOaj5DjOOmowYB4%2FL9UTvfWRALk8jeB3Gu1aH2ll6Y1A%2FVTyUtwbZqMrVcgUhmY35LxFe1kNYfS6sCwxQ3hwCy2497xu3T5o6%2F9M%2FMIH71cQGOqUBCA45efS2Zy1ivjRsZ9XyvoI%2FG%2FG9tRwMl5hpSJjZLV2gQRYUjvBzZpONwWM9UER%2BmSvYSXe%2Fzsz919SUgAh7kSFxTf3XV8riViP92bd0oyV65lgBedied4kp%2BIX6bNlaQbYRT9zK%2BMxyGmhQ%2Bcthfpec2c6cr7tlDL0zWbKwvuE2iRvZ%2B7ECs01%2FlCRzNIgZWBC7xVGk6nIwmIX%2B8OEcpblnpM2s&X-Amz-Signature=9acde244fa00450f1e3c28f30044bc86d70d8b12786209e4b69ceb70770aed57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQYTTBN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEqgHBnBXuspxYTfTmYA1Kf07xb3zPBIBg5ajCLbOFlZAiEAu8GsuNz62PH9e6vAD3%2BzcNQ84AC2As4KX4vC%2B3Rb0GoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQiP092nxGarEkSVCrcA7Efo7bgLkH%2F3MYdF%2BKwyeK5DQGin7LRRC1pBgtaT%2FgE0hy3ASOPIVFUJbm7YNDR9ghTGPuJlynExmVj4gtrw8gWnOcgG6KEuLGlL2wMH1uLfDZfPWKcdrlffsaIYK11nYgEfwjJYUNqCCdMogOOvkHZlGbCDqM91rEFU2L%2BnGB061p37r8iaymuMbSOvt1c5azl07ATnpIZBvz15mQF2JcH4V5MPxYz1QYuzS2NL0qU8e5ibhPSVKzIIVOUnExaFcKzahNZ4na7yODJx64JnWrclr2Cgevpi2HqWljoeV9NR0RJcy7U64wYlABLinEXTcdRWVgOHW89XVNyE4Us9bDxsjGVB0WwyjtVmhS6lEBBUgXuBJB1s6LYqcGtla%2FBup4Gs3S5kTIqP2hSHUs4pt5V2YMvcBL0FQ%2Fyn6I6gT8jbC21Fk6BAjEx7LjWFo1ovXl5Uh5Hc1p0x4cQqeK1zCBWg6W%2FYvvZbmCURjojlkfsQBaFPW1szu2C3zDngnrsgtqFl3CvmWMfirLu%2FB9s80RPOaj5DjOOmowYB4%2FL9UTvfWRALk8jeB3Gu1aH2ll6Y1A%2FVTyUtwbZqMrVcgUhmY35LxFe1kNYfS6sCwxQ3hwCy2497xu3T5o6%2F9M%2FMIH71cQGOqUBCA45efS2Zy1ivjRsZ9XyvoI%2FG%2FG9tRwMl5hpSJjZLV2gQRYUjvBzZpONwWM9UER%2BmSvYSXe%2Fzsz919SUgAh7kSFxTf3XV8riViP92bd0oyV65lgBedied4kp%2BIX6bNlaQbYRT9zK%2BMxyGmhQ%2Bcthfpec2c6cr7tlDL0zWbKwvuE2iRvZ%2B7ECs01%2FlCRzNIgZWBC7xVGk6nIwmIX%2B8OEcpblnpM2s&X-Amz-Signature=c8dbeac9758e168ddb53640c3a7386d33a6ef00ee0fd485e1789c651a844f37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
