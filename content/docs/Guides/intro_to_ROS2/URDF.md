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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWAKBT6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCQiaJT2KC5PULQjjdzmzMUaNuYRhTslqQHs71KwRbjwwIhAIb40B51tYN6aOABuY3hmETCvpYgqOdd26wbz4UOCWXiKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP2Qt%2FJDB3dsHwALEq3AP%2FknJgW5RXOfU1YalyFU%2F1y1WGw4yhB%2F8GoAkr15816GAk9nD92DnKGvrx2nyOli9qnfc4YZkFkVPAceyzloJLZX4UunRM1XgEKR%2F%2FJMYc8bElLsxH%2F7GGug%2BHcEEOi2ovUQK9IA3v1qUEsjMc1drMdIRBIpQ7k8YX%2BJ9aCdyTudp%2FMg1VdAS%2FQfzRT3S4l8KdTgY%2Bibz4JGLJe%2B97y3aCvVZMdcNRwAYLMW3uq44Hr5oCd48Gp%2BPcSHr7s64hipwxeiPi8a7TVapYbnUG0xvknj8ON93bx5u9XQzN0X%2B381CpMlLsCN%2F%2BzUufiuhu8w%2FTc%2Bd9%2BOpMIiPvw4dXcom0iyHvUe1oDSVHSotahc5H%2BZEiXyvxyKaAjkNbh5gHZA5QYCEd3JQ60cc6fBow%2BFayR1sfv%2FPkEb%2F93Vx8a2SThbQF4cdfj%2BlTEYtSsEt%2FdQUwCF%2BbLEdWfFdHF1aQWvUyrUr4yMojiYEM1CQdTKr8Ngn1ap3eNi%2FuQ0c%2BLJgl1Q%2FiR7ySspDkPSBLv72INrgPiUxkd2nCE7650wHrYHF65K0WeVJCIXdGq2T%2FxCt1TaLpNfjZRFiaqQI7B19aYZZYydSkajgiNufglRaJUIVdFzvBDkL%2FW7GgKd23eTDxxPG%2BBjqkAfu17P7cApQVc4bcS86TR9s5T%2FNlTKnH%2FUiC1cjZql%2BPuaUYPmNz2ve5oZAvSQHOsULiqc%2BflS%2FkYqTB9QGPi%2F%2Fgc1gvx%2B6ybMFCeHvI1ZAIKeRNxGaKjmA0uA7o0pBpfdZ9XN6djno%2FoWzXHvo%2FyLIqwJDbVHRBk66IYAaawIq3y72%2BsJTIaek7q3rE2VD0qhgzCGm8qL5zwTR90MPVa1udKZNT&X-Amz-Signature=809844f59be2f98c9e0c0f6dde356a658a5ebc1ece7480cdce7e226d65f5aad7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWAKBT6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCQiaJT2KC5PULQjjdzmzMUaNuYRhTslqQHs71KwRbjwwIhAIb40B51tYN6aOABuY3hmETCvpYgqOdd26wbz4UOCWXiKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP2Qt%2FJDB3dsHwALEq3AP%2FknJgW5RXOfU1YalyFU%2F1y1WGw4yhB%2F8GoAkr15816GAk9nD92DnKGvrx2nyOli9qnfc4YZkFkVPAceyzloJLZX4UunRM1XgEKR%2F%2FJMYc8bElLsxH%2F7GGug%2BHcEEOi2ovUQK9IA3v1qUEsjMc1drMdIRBIpQ7k8YX%2BJ9aCdyTudp%2FMg1VdAS%2FQfzRT3S4l8KdTgY%2Bibz4JGLJe%2B97y3aCvVZMdcNRwAYLMW3uq44Hr5oCd48Gp%2BPcSHr7s64hipwxeiPi8a7TVapYbnUG0xvknj8ON93bx5u9XQzN0X%2B381CpMlLsCN%2F%2BzUufiuhu8w%2FTc%2Bd9%2BOpMIiPvw4dXcom0iyHvUe1oDSVHSotahc5H%2BZEiXyvxyKaAjkNbh5gHZA5QYCEd3JQ60cc6fBow%2BFayR1sfv%2FPkEb%2F93Vx8a2SThbQF4cdfj%2BlTEYtSsEt%2FdQUwCF%2BbLEdWfFdHF1aQWvUyrUr4yMojiYEM1CQdTKr8Ngn1ap3eNi%2FuQ0c%2BLJgl1Q%2FiR7ySspDkPSBLv72INrgPiUxkd2nCE7650wHrYHF65K0WeVJCIXdGq2T%2FxCt1TaLpNfjZRFiaqQI7B19aYZZYydSkajgiNufglRaJUIVdFzvBDkL%2FW7GgKd23eTDxxPG%2BBjqkAfu17P7cApQVc4bcS86TR9s5T%2FNlTKnH%2FUiC1cjZql%2BPuaUYPmNz2ve5oZAvSQHOsULiqc%2BflS%2FkYqTB9QGPi%2F%2Fgc1gvx%2B6ybMFCeHvI1ZAIKeRNxGaKjmA0uA7o0pBpfdZ9XN6djno%2FoWzXHvo%2FyLIqwJDbVHRBk66IYAaawIq3y72%2BsJTIaek7q3rE2VD0qhgzCGm8qL5zwTR90MPVa1udKZNT&X-Amz-Signature=017190f0416d0ec087f2a7aff0fe00bed88a40ab8b588ee228e312ecca402c46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
