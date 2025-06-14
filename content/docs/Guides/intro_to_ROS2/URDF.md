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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMOUXS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQClHITCIjaPFjfQAa949e9OX6XJpse1R2VzKupPBWO8ZAIgUs%2F2YuivI4fVOL5QEizJqQfJsxX42sHLMKencJK2zQ0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCFnJsR1%2BjgW729nqCrcA%2B3aPAPzB3w7StltA8RjIL%2BWQZaD6vt1s4ZBnUeTBwq8%2FSghgb%2FnFIIWqys509LdLjcku829Ogi77T0A59KRoA2df7kMP7VJ4XoPEs3Vy3ZXWaUevpiBv1Dn7loj8IkUTr0auyp6BbjELJB4QXeX1vqqeMReFOe0RcxRz0GahyoC%2B2IolpC2mOydBdekii%2BlsVVppuBpejUFoWEjM3C8p6wBDqPVhl%2BPgb1L2ePu%2BrMvOGyrdx1qD8ZmRiLfEzqBYXz7yxgYK2FMcFKmRLOT2JS%2B%2FcSCR%2FLccqTCvgL6eDAxcBWXABVOo6xJoBJj4O0GGhnXvHP%2BnfOAVs1nwM%2BiiV6DksojgjLjqu8imSDsnt9wkeXjuUGGauz7cUNoDoMAVKnvKSZrEBL9%2BrO6NqT2jZY7gaLc6G2o2UH06B1kwmTqzYz3awpLDK2V1iUNLlasBJMPeyvKEoXxtiq7Ua6iYk503QiCG1fGb%2BgIO3JBQOtjPLL4ns%2BuQtB4jJTOKcAtNseJDDzuvUFNE1ue8R6dKlWYxwZvoftX6Lg3%2BQIQ6sH7iQWIhw1TNlklkWw90HTQiG%2FZyFfJU58zaHxlNbljXo348qvC0Byzy%2BAWgv4vIcmshELVTp15Zdt%2BHckdMPqTtcIGOqUBfQ4KfgenVkKAG0aFtFkQExjz3nm8kgtH4eEyP8zV8i3f2xJcVKXCkFQ3aRDEdh4yYpu4D4h%2B8yE8Q6BU%2BWzrpc93B4Mb3Ma%2Bd9o8ohI%2Fyxnzlmz9DofdzC5ZALd7PDuOqbHtXDQ2VoMLVK17r55c6HG9gMmXDkAhgdNT8%2FgBlFcCzxC%2BnaUfqzAWN4%2FErgTV6A6I3np91dULyjyWaracvvvkGxQV&X-Amz-Signature=dff36378e00f96822d34c19c748224e5d7689e787414d365a9da84926072f23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMOUXS7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQClHITCIjaPFjfQAa949e9OX6XJpse1R2VzKupPBWO8ZAIgUs%2F2YuivI4fVOL5QEizJqQfJsxX42sHLMKencJK2zQ0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCFnJsR1%2BjgW729nqCrcA%2B3aPAPzB3w7StltA8RjIL%2BWQZaD6vt1s4ZBnUeTBwq8%2FSghgb%2FnFIIWqys509LdLjcku829Ogi77T0A59KRoA2df7kMP7VJ4XoPEs3Vy3ZXWaUevpiBv1Dn7loj8IkUTr0auyp6BbjELJB4QXeX1vqqeMReFOe0RcxRz0GahyoC%2B2IolpC2mOydBdekii%2BlsVVppuBpejUFoWEjM3C8p6wBDqPVhl%2BPgb1L2ePu%2BrMvOGyrdx1qD8ZmRiLfEzqBYXz7yxgYK2FMcFKmRLOT2JS%2B%2FcSCR%2FLccqTCvgL6eDAxcBWXABVOo6xJoBJj4O0GGhnXvHP%2BnfOAVs1nwM%2BiiV6DksojgjLjqu8imSDsnt9wkeXjuUGGauz7cUNoDoMAVKnvKSZrEBL9%2BrO6NqT2jZY7gaLc6G2o2UH06B1kwmTqzYz3awpLDK2V1iUNLlasBJMPeyvKEoXxtiq7Ua6iYk503QiCG1fGb%2BgIO3JBQOtjPLL4ns%2BuQtB4jJTOKcAtNseJDDzuvUFNE1ue8R6dKlWYxwZvoftX6Lg3%2BQIQ6sH7iQWIhw1TNlklkWw90HTQiG%2FZyFfJU58zaHxlNbljXo348qvC0Byzy%2BAWgv4vIcmshELVTp15Zdt%2BHckdMPqTtcIGOqUBfQ4KfgenVkKAG0aFtFkQExjz3nm8kgtH4eEyP8zV8i3f2xJcVKXCkFQ3aRDEdh4yYpu4D4h%2B8yE8Q6BU%2BWzrpc93B4Mb3Ma%2Bd9o8ohI%2Fyxnzlmz9DofdzC5ZALd7PDuOqbHtXDQ2VoMLVK17r55c6HG9gMmXDkAhgdNT8%2FgBlFcCzxC%2BnaUfqzAWN4%2FErgTV6A6I3np91dULyjyWaracvvvkGxQV&X-Amz-Signature=a36635d3c27779e3d14becac9ab929f6bc111e4f70c2fe382cfd4660a8f12c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
