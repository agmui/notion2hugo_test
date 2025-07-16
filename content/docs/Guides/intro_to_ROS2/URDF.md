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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3AUSEF5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCCQVEE0KLTdYv%2Fv4%2F0j4%2FplzOHbvWNh%2FQ5f9CHAVAPTAIhAMtc1Fgg48Et4905ZqWgLTuNh%2BM3Pibah%2BIXFpTvXdrWKv8DCFsQABoMNjM3NDIzMTgzODA1Igwo4SBRjA1wBqT1Re8q3AOj0PjzHwEEvcZTByZqEW%2B99NRjlPpBhxEWdB0amx9%2FUWyAURQTo5CL92QFxHyGMobMYXRw7pBkjd4OxffUkIFtdShzPWEGuNvt%2Bk2G30Xm6y409sTNNKxPnd4tqks4I1QjQDXiVPANgtN7KHoEgxU875B8bVOSqH2iRoMYjJGZvFc7qO9fjQvJTymKYXVaVUuI74LpM%2BVb%2BDlTmLV6LhCxfiE4UTSptyY8ACIYX9M45rRGNj7hBaYlcg8%2BTxbBNkgh8xFooltbg6lnnP%2BkodAjKCFFLcUCCgCzV7bvS4yOMBLHEyJR9Z2vT3qMibwbQ2a37UnTBCC%2ByV32NQjkGgNdinEOAQmVs4Br4q%2B7jGhtw%2Ffdt4HHrl8urW%2FE78cwF4WcAi63xSdTmxhEfd2wU9S1iB9fIG9IywAMFVN8B%2FuQKMp78cpMdFuaK5y5ZYbZZK1j06igAnNcEioYwxK409vIao0UKXatkeACA%2BQY60xF16WwsqvWq9j9SXjsR9bdcn3coxqXSKZ22T6NmR5uayE%2F07WiI53nsB%2BNBy6o57mSfHMzOKkMWBAn0pHUeIiL6RM7rVAIrTf9Gn9y%2BXY4JfT0nysdrHqjb6xyb4aAQMWGSZwPV5t2eoLTLIDCWzCD6N3DBjqkASmV3jTuhKoCvXJSrwpsXh0W5URFk2wLNlximf%2BFp4MgGaL61hPuXPBGVI3CF8NCFEKOtQD5uYVrir3OZSmXCDl1thHuVjohSqBzCuI7zRPANadqtVZ8UTo%2B9byAkpyfTG6nkcuGViRUsc9HBN7JOHA0sbstnB4I%2FN537jQ%2FFbn2O9%2F6m0W1RaSmLZGO%2FdzSng1C1EshM7tWm%2Foh5uzbJrAsExbU&X-Amz-Signature=70cc8cb88cf0bf051302b61a4ae6591d10cb1bbf84be8c284f9b5be202f16555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3AUSEF5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCCQVEE0KLTdYv%2Fv4%2F0j4%2FplzOHbvWNh%2FQ5f9CHAVAPTAIhAMtc1Fgg48Et4905ZqWgLTuNh%2BM3Pibah%2BIXFpTvXdrWKv8DCFsQABoMNjM3NDIzMTgzODA1Igwo4SBRjA1wBqT1Re8q3AOj0PjzHwEEvcZTByZqEW%2B99NRjlPpBhxEWdB0amx9%2FUWyAURQTo5CL92QFxHyGMobMYXRw7pBkjd4OxffUkIFtdShzPWEGuNvt%2Bk2G30Xm6y409sTNNKxPnd4tqks4I1QjQDXiVPANgtN7KHoEgxU875B8bVOSqH2iRoMYjJGZvFc7qO9fjQvJTymKYXVaVUuI74LpM%2BVb%2BDlTmLV6LhCxfiE4UTSptyY8ACIYX9M45rRGNj7hBaYlcg8%2BTxbBNkgh8xFooltbg6lnnP%2BkodAjKCFFLcUCCgCzV7bvS4yOMBLHEyJR9Z2vT3qMibwbQ2a37UnTBCC%2ByV32NQjkGgNdinEOAQmVs4Br4q%2B7jGhtw%2Ffdt4HHrl8urW%2FE78cwF4WcAi63xSdTmxhEfd2wU9S1iB9fIG9IywAMFVN8B%2FuQKMp78cpMdFuaK5y5ZYbZZK1j06igAnNcEioYwxK409vIao0UKXatkeACA%2BQY60xF16WwsqvWq9j9SXjsR9bdcn3coxqXSKZ22T6NmR5uayE%2F07WiI53nsB%2BNBy6o57mSfHMzOKkMWBAn0pHUeIiL6RM7rVAIrTf9Gn9y%2BXY4JfT0nysdrHqjb6xyb4aAQMWGSZwPV5t2eoLTLIDCWzCD6N3DBjqkASmV3jTuhKoCvXJSrwpsXh0W5URFk2wLNlximf%2BFp4MgGaL61hPuXPBGVI3CF8NCFEKOtQD5uYVrir3OZSmXCDl1thHuVjohSqBzCuI7zRPANadqtVZ8UTo%2B9byAkpyfTG6nkcuGViRUsc9HBN7JOHA0sbstnB4I%2FN537jQ%2FFbn2O9%2F6m0W1RaSmLZGO%2FdzSng1C1EshM7tWm%2Foh5uzbJrAsExbU&X-Amz-Signature=969fbd4b6892aed0a1e10371d2aac164cf849261ca1734c9511cd8835f516bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
