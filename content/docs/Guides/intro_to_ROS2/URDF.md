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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEBUVFNA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCKEwFHqe2XEh0J3qY7H183puGuRSQuTmjIArYXieJLdQIgXDQJMQJa2d%2BvWd%2BYCNbSXF0%2BpraD%2BO7SYiW3t08EXdcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObg7CuJ4WbfpZ1JrircA9VowX8ansaAcqySj1srBPLj8bXMlV82CgSQWd%2FcWKbJaPpjywezxhRCIoSjoBu8JKaa4BjoEhyiZ3GWnHqzPnN7YrBhRv3jyVbYsVii0Eh2ztOe%2BjEDQAV4LVVeSVkQTFG%2FlwcTKRMtTPsNZA0uRSGHBapGZM7%2BxKwSg6kuxjYReVEYESYJUyMHFzqX7ZumqZ7hiVnlY02ZmDW13FPB26lHRZgARcBBRmjfRXXSUIloRnJwjCYzDMQ7gZowCyWGq3lo4Bd2ne72847pwHBBSx5iAYjjBLbHeMSqIyAmzGipHv9tpcaArNbOV5vi4KXyAvyeyGfTaeIXAVq12fnz5xi4BgmutceJhnnNJvcWJf5l96r6tUkCpd%2FrTr5SgYhqRO3EIbABpo6haM7aQCggLxaTDFdBPs8VHFh1kYvBb97TIqzm1Ej%2F4hN1cM272R0rWXA42%2FF0roUA6Mftbu4IDT2sMJexAXQkd1M4f9y5rV7CVBMnMZ7TcMuUWqgOEE9cXGUm78wJCM7waw8SxkI54Wxw9gAnemy4l6Ab8Y7BQgp0tLDw%2FwNlrXed0ND%2FBZRDf0yDw%2FNJ7oII3pWrsMO0MjcmKxg4yBpuZVg6eVbrC2fm1iT5gTF94FaBAakbMNy77sEGOqUB1eG66wTOkDh5T%2BP3hKrfY6f1YmkrFLNz7Fmh2nwcT6odySxqRKM7UAPJXVP1K%2Fw9SDCkm4xsYf%2B9cXaY2hbn7pU2V01cI0ua34vhKqllMryh70URlpI62fIVGu8xEoKgcGwm66Z7bmRoD66Mobf4OTi7%2B7J%2Fe5m4yFToidfg93ErqwZI%2FIFYSlTQMrxS%2Fjb4VTooK12jGVAmvDJ0Vr0Sjw7MRHHj&X-Amz-Signature=10a3a1999922ea7b034ba8368032dc2fb231a4bf8a169315dfadedcd598b9386&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEBUVFNA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCKEwFHqe2XEh0J3qY7H183puGuRSQuTmjIArYXieJLdQIgXDQJMQJa2d%2BvWd%2BYCNbSXF0%2BpraD%2BO7SYiW3t08EXdcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObg7CuJ4WbfpZ1JrircA9VowX8ansaAcqySj1srBPLj8bXMlV82CgSQWd%2FcWKbJaPpjywezxhRCIoSjoBu8JKaa4BjoEhyiZ3GWnHqzPnN7YrBhRv3jyVbYsVii0Eh2ztOe%2BjEDQAV4LVVeSVkQTFG%2FlwcTKRMtTPsNZA0uRSGHBapGZM7%2BxKwSg6kuxjYReVEYESYJUyMHFzqX7ZumqZ7hiVnlY02ZmDW13FPB26lHRZgARcBBRmjfRXXSUIloRnJwjCYzDMQ7gZowCyWGq3lo4Bd2ne72847pwHBBSx5iAYjjBLbHeMSqIyAmzGipHv9tpcaArNbOV5vi4KXyAvyeyGfTaeIXAVq12fnz5xi4BgmutceJhnnNJvcWJf5l96r6tUkCpd%2FrTr5SgYhqRO3EIbABpo6haM7aQCggLxaTDFdBPs8VHFh1kYvBb97TIqzm1Ej%2F4hN1cM272R0rWXA42%2FF0roUA6Mftbu4IDT2sMJexAXQkd1M4f9y5rV7CVBMnMZ7TcMuUWqgOEE9cXGUm78wJCM7waw8SxkI54Wxw9gAnemy4l6Ab8Y7BQgp0tLDw%2FwNlrXed0ND%2FBZRDf0yDw%2FNJ7oII3pWrsMO0MjcmKxg4yBpuZVg6eVbrC2fm1iT5gTF94FaBAakbMNy77sEGOqUB1eG66wTOkDh5T%2BP3hKrfY6f1YmkrFLNz7Fmh2nwcT6odySxqRKM7UAPJXVP1K%2Fw9SDCkm4xsYf%2B9cXaY2hbn7pU2V01cI0ua34vhKqllMryh70URlpI62fIVGu8xEoKgcGwm66Z7bmRoD66Mobf4OTi7%2B7J%2Fe5m4yFToidfg93ErqwZI%2FIFYSlTQMrxS%2Fjb4VTooK12jGVAmvDJ0Vr0Sjw7MRHHj&X-Amz-Signature=4e844395ba25ca94cadebf0174f6ed6da1f07760daee4eaf5f86a7208499795d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
