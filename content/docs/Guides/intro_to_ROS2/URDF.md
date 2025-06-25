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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ66RU4R%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCJkrjSqIL56z0EagZr0d74ApBSjAAneUArYudcmuiajAIgRhsfsT3FwQnosm7Zpy6vsTMcLTJTgxPuPxrFAJ2m7E0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDP4TFVgmaK6K15RyiircA09HLotVcmUMQAhT1aGsfholrCDnMv%2FBZ82H2DyqF%2BbKfL%2BpffkhBiVffbzgOwn3EYRDJnHLluJNeJDqImnB6a8WBCmxBiVQXfqg2WgNg4M3HAiG5w37KmOUEV8BqnM%2BXfTYOZZWa3Yw83GeVj2nQnNP6MSNGUUqD2fyCWizIEVrlFYwn0BUxB3v38BvCFFxuB2%2Bfea3MajH8wtb4IYFvbMmjlEuH%2B7mKSoEYi%2BjtwknVqkWUd6Icb8DlouVi0Ip%2FEJiKOLFPU5VPbe2n8z0vjbDdH%2BIfv2ERA8DQUbYoAMYTWn7Se7HkcKmMhKBVy37wjvFNoqZotRfDZK6G7w6Ujq4Tf41VJJ0ZPMXGAT%2FMw1see6wfARjlOtM4ySxBEPZL5c1poX6xP3ySyt8hGcmSYR6zhOKRT20Y9bYu1poEKLYVezaFnUfB94WAbPGZ4bpZshZ%2FKyB4vES8hf%2BUsBgtDaeQR8buT6Apg1mZyf43I4RGg9xjG7QnJIvd0mODMB%2BOogEQKJsTZ9aPJPx265isJcG16eaVl%2FcWQuDfRsZA2746xomopEhl28vgdFodryvlfP9NYINqLNRR0s3hEl%2F0oz00YiMsRuV5Kos8Qf5VfbPVSabVtzklr5oCRe3MNmM8cIGOqUBA%2F2m3uj8afbmitFZn3Z1u9MGzSKLE4V9BlvIhyBZINcXo8yT8yXMJqi1ua2ozpi6ZrzyXNFPhQLlWQEi5VHut23AkvyWffIQ37K50K2CbzGcmDU3BeEUROhZNAJ8fbszWdSg%2BwXzGXkbvQoyqMvuz%2BD2Jf91iJctylCiw6va6IoMVjWRmaMNyGnQoW0rdz04V%2FbtWoHNCCnzfwYdsn7u4BGtPuWU&X-Amz-Signature=f177b76579f5f5fa27b53da08979abebc43437776f12a54accc259fb40355c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ66RU4R%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCJkrjSqIL56z0EagZr0d74ApBSjAAneUArYudcmuiajAIgRhsfsT3FwQnosm7Zpy6vsTMcLTJTgxPuPxrFAJ2m7E0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDP4TFVgmaK6K15RyiircA09HLotVcmUMQAhT1aGsfholrCDnMv%2FBZ82H2DyqF%2BbKfL%2BpffkhBiVffbzgOwn3EYRDJnHLluJNeJDqImnB6a8WBCmxBiVQXfqg2WgNg4M3HAiG5w37KmOUEV8BqnM%2BXfTYOZZWa3Yw83GeVj2nQnNP6MSNGUUqD2fyCWizIEVrlFYwn0BUxB3v38BvCFFxuB2%2Bfea3MajH8wtb4IYFvbMmjlEuH%2B7mKSoEYi%2BjtwknVqkWUd6Icb8DlouVi0Ip%2FEJiKOLFPU5VPbe2n8z0vjbDdH%2BIfv2ERA8DQUbYoAMYTWn7Se7HkcKmMhKBVy37wjvFNoqZotRfDZK6G7w6Ujq4Tf41VJJ0ZPMXGAT%2FMw1see6wfARjlOtM4ySxBEPZL5c1poX6xP3ySyt8hGcmSYR6zhOKRT20Y9bYu1poEKLYVezaFnUfB94WAbPGZ4bpZshZ%2FKyB4vES8hf%2BUsBgtDaeQR8buT6Apg1mZyf43I4RGg9xjG7QnJIvd0mODMB%2BOogEQKJsTZ9aPJPx265isJcG16eaVl%2FcWQuDfRsZA2746xomopEhl28vgdFodryvlfP9NYINqLNRR0s3hEl%2F0oz00YiMsRuV5Kos8Qf5VfbPVSabVtzklr5oCRe3MNmM8cIGOqUBA%2F2m3uj8afbmitFZn3Z1u9MGzSKLE4V9BlvIhyBZINcXo8yT8yXMJqi1ua2ozpi6ZrzyXNFPhQLlWQEi5VHut23AkvyWffIQ37K50K2CbzGcmDU3BeEUROhZNAJ8fbszWdSg%2BwXzGXkbvQoyqMvuz%2BD2Jf91iJctylCiw6va6IoMVjWRmaMNyGnQoW0rdz04V%2FbtWoHNCCnzfwYdsn7u4BGtPuWU&X-Amz-Signature=48176c9045436942e88f121e7f33f6cf9ecea40541720ae1378587c279ec7c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
