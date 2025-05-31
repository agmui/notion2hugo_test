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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCFSFQE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZo%2BUnZO0ZWC9KGlim3nejbkeE2FP8tMATIjLoMuUYRAiATVQ8lXqvUpDAA8rAIsiEQIloKDHGcQC0khEXQqhcwoCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEt4rJ1ujcKzb%2BlFQKtwDwfz8P5VtB1wrfMXXcurjSkMtAk0OAZspKqFAUMGX%2BWD7Re6i9pdHMxA4j4Z0xD%2B26zInIbhHBq7fnETXajtTLWVbuIaqOv9dG%2F2zFZVFPNED3triID7JoKGOHO%2BUwgfCesc8Jg%2FRvNtAIZzMCt5neASr9dvt2SIIhcEmVMz%2FPfseFr59Ok8YTdBHh20yWiJRl4fJinQ5qUH3QxFxBjNfYCtZvTBDAoBNW0OLolExrDFVq%2B2WkhxD8UXIa6aQlHdE4VCOLc9icHO9IzZEzpa2X%2FcKoHv18vX%2BOtCwAeFq5WoYA1FkSFZDBbHY6Rz8oY6Zm0l4HQ6%2F905FYpjKsxM9H6zdkqGpM7UyzDpXwswFg0FgSycBEZO9W6jmW5Ls2bxS5oyAxIbxhKA84i0DOiasvB8vf4EvDaejKttNHFiqJuYEgFE5NtXzzgd4URY%2BV97Dfc2iq0Y1DmlTS3OhA3XnB85Qa2pumTNmS4iEqL%2BvyMhhH3dg%2F1AkEQMSDCgoyswor0rXwcsL5J7YDbJxI51aLxUGIAisgo4Xffj5S1pEavAQl76opT6HymqisMZNH2YXCufAyATs%2Bt03VIgBUN7YDpZ3f%2FCYzPv0swuN%2BDyPfrIS%2FW6O%2BY1Yj3JNrJUwm8DrwQY6pgHo2%2Fqiet3wBuoTeGPBJaKL3zrw%2FDpiljJCP3ZRWu3tg64fkorWteghI22HRAQyVqn0%2BYIXISSavUaooZhAGGkQGgVd9FGomWdmR8g70RO2jTfQ1tzN6cIK6h%2BHcFh%2Fik4p9D9dAwzM%2B0%2BH8wXZ3cNisNE5fMUn9Juyx3EhF%2B%2FGYty%2FgOdmUi07Ao1HFCOhrQI2Owx3Y%2FzwRcepyDnzylkGhmIdy0YG&X-Amz-Signature=66e5dcb31bf5c359753f8f98066c7c7b8ef97ff4767d54fd5d817a9ccd4b2410&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCFSFQE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZo%2BUnZO0ZWC9KGlim3nejbkeE2FP8tMATIjLoMuUYRAiATVQ8lXqvUpDAA8rAIsiEQIloKDHGcQC0khEXQqhcwoCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEt4rJ1ujcKzb%2BlFQKtwDwfz8P5VtB1wrfMXXcurjSkMtAk0OAZspKqFAUMGX%2BWD7Re6i9pdHMxA4j4Z0xD%2B26zInIbhHBq7fnETXajtTLWVbuIaqOv9dG%2F2zFZVFPNED3triID7JoKGOHO%2BUwgfCesc8Jg%2FRvNtAIZzMCt5neASr9dvt2SIIhcEmVMz%2FPfseFr59Ok8YTdBHh20yWiJRl4fJinQ5qUH3QxFxBjNfYCtZvTBDAoBNW0OLolExrDFVq%2B2WkhxD8UXIa6aQlHdE4VCOLc9icHO9IzZEzpa2X%2FcKoHv18vX%2BOtCwAeFq5WoYA1FkSFZDBbHY6Rz8oY6Zm0l4HQ6%2F905FYpjKsxM9H6zdkqGpM7UyzDpXwswFg0FgSycBEZO9W6jmW5Ls2bxS5oyAxIbxhKA84i0DOiasvB8vf4EvDaejKttNHFiqJuYEgFE5NtXzzgd4URY%2BV97Dfc2iq0Y1DmlTS3OhA3XnB85Qa2pumTNmS4iEqL%2BvyMhhH3dg%2F1AkEQMSDCgoyswor0rXwcsL5J7YDbJxI51aLxUGIAisgo4Xffj5S1pEavAQl76opT6HymqisMZNH2YXCufAyATs%2Bt03VIgBUN7YDpZ3f%2FCYzPv0swuN%2BDyPfrIS%2FW6O%2BY1Yj3JNrJUwm8DrwQY6pgHo2%2Fqiet3wBuoTeGPBJaKL3zrw%2FDpiljJCP3ZRWu3tg64fkorWteghI22HRAQyVqn0%2BYIXISSavUaooZhAGGkQGgVd9FGomWdmR8g70RO2jTfQ1tzN6cIK6h%2BHcFh%2Fik4p9D9dAwzM%2B0%2BH8wXZ3cNisNE5fMUn9Juyx3EhF%2B%2FGYty%2FgOdmUi07Ao1HFCOhrQI2Owx3Y%2FzwRcepyDnzylkGhmIdy0YG&X-Amz-Signature=3bee75e3b9608cb108f400863279d36fc969790a0fdc8315c82e4f2cdd903995&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
