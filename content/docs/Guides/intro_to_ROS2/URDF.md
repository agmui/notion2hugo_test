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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AFKVI5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6arQv9HvnAv%2FBr63dABfFS7N3Ml7JvPxVD5EfBVpBkwIgIZ2AenDltbJjKPiQ2jHIxe5IVJTP14vf5J0zVTC8dTIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGaVbfegQSGRcz26EircA%2FgN4Dk6pXH5Xaw3oURzq6lKG%2FFyFUZ7CsyTzpXm9FPU56GwdZgD%2F49WOJBYPkpWci2QJQAiVBP%2BKvZ5yD%2BGiB%2FEnsCGl%2FKcThoIJgppZG%2FImClnnNM3RQ4r4UcurhtIC%2FyxEpQSFys2r3sCore%2BhAhOqOsQS0WFInEKDtqdpw%2ByeITeSv5ci9B7iE%2Bo1uiBugiXj1Rj5wNfJCJlPAm%2BnINe13eqGPrR4E56YlLMn6VR%2BPW9diQakM4KMKahqmkeSy0DF1qO%2BtK%2F2tFA2ugxwI2v4HaJVBhCBeO1Nczqn%2BAA3BPOJK8Zq4R%2BMy%2BIaZ9atxjXoxwd9Rmp%2Fj3DlxzW9%2BnFGtFv0fISJFMu%2B7c44R4iZC2cYYiWwarz7nkWlkUGHqoBeCO6Z0phKFv9R8U3NwGQUnEWuadXRcSLNHpTKe2c3sL9HfM3R4Mtj4dMjPu2wbACNZ7zzprb5YWpJAmI62zSNPkdUbwmWu3xhMYOyGnEERGSGJ8oftjPQrdRolK7JEMBqqvhN%2F6CXcjJhTOZdFJ6eWUkO4HhqAXNXr23yzMUcUb1x%2BrN6aU5YDuTRFlxFQNKVYCTnfbendfAtxOIlmJZTWKBmVgN1QQkoGVzQtMXSaKFswESiUMSa152MKO9hsAGOqUB75Hwdyuv%2FVesOV0nRA6IObVpgSWXLBsED65oiAPUW3tUbTEBZpDkPMq%2Fw9798baNrbaNlIwmRtLpLQ9mvJqE3HCkOm2Tz8sE0grlHzyAaAhjDM5YRM305kesbCX02evePI2U0xhLorfFPJB1aZpTVBoNmBUIwNCXYN4pWQ5WmQip3BrXfgkgC0RSwQy%2BRiyR9VecSGdt%2BDyCvA46EZIu6dg4oc2D&X-Amz-Signature=0949fb148e4bb6202b4f8b742f145f4f9ce5467afd62de2d13774dfc9d53316b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7AFKVI5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6arQv9HvnAv%2FBr63dABfFS7N3Ml7JvPxVD5EfBVpBkwIgIZ2AenDltbJjKPiQ2jHIxe5IVJTP14vf5J0zVTC8dTIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGaVbfegQSGRcz26EircA%2FgN4Dk6pXH5Xaw3oURzq6lKG%2FFyFUZ7CsyTzpXm9FPU56GwdZgD%2F49WOJBYPkpWci2QJQAiVBP%2BKvZ5yD%2BGiB%2FEnsCGl%2FKcThoIJgppZG%2FImClnnNM3RQ4r4UcurhtIC%2FyxEpQSFys2r3sCore%2BhAhOqOsQS0WFInEKDtqdpw%2ByeITeSv5ci9B7iE%2Bo1uiBugiXj1Rj5wNfJCJlPAm%2BnINe13eqGPrR4E56YlLMn6VR%2BPW9diQakM4KMKahqmkeSy0DF1qO%2BtK%2F2tFA2ugxwI2v4HaJVBhCBeO1Nczqn%2BAA3BPOJK8Zq4R%2BMy%2BIaZ9atxjXoxwd9Rmp%2Fj3DlxzW9%2BnFGtFv0fISJFMu%2B7c44R4iZC2cYYiWwarz7nkWlkUGHqoBeCO6Z0phKFv9R8U3NwGQUnEWuadXRcSLNHpTKe2c3sL9HfM3R4Mtj4dMjPu2wbACNZ7zzprb5YWpJAmI62zSNPkdUbwmWu3xhMYOyGnEERGSGJ8oftjPQrdRolK7JEMBqqvhN%2F6CXcjJhTOZdFJ6eWUkO4HhqAXNXr23yzMUcUb1x%2BrN6aU5YDuTRFlxFQNKVYCTnfbendfAtxOIlmJZTWKBmVgN1QQkoGVzQtMXSaKFswESiUMSa152MKO9hsAGOqUB75Hwdyuv%2FVesOV0nRA6IObVpgSWXLBsED65oiAPUW3tUbTEBZpDkPMq%2Fw9798baNrbaNlIwmRtLpLQ9mvJqE3HCkOm2Tz8sE0grlHzyAaAhjDM5YRM305kesbCX02evePI2U0xhLorfFPJB1aZpTVBoNmBUIwNCXYN4pWQ5WmQip3BrXfgkgC0RSwQy%2BRiyR9VecSGdt%2BDyCvA46EZIu6dg4oc2D&X-Amz-Signature=347c94213308228ab7ab863984884fd28957345f246ae9c29b867c2e3e066e63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
