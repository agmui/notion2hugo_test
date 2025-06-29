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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPNLZ6V%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2jLvt0M32qm5QG52VdPQHatuPH%2F47pdJYaYnCeoA63AiAXkK45%2Ft0Xq8HuxKkV13Ply8VDjnPyRwOhhZAc%2BB0VCCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaJ6H6e2mzEnEhxeKtwDaXH3JB6q6Vqjc3DEcT7uKiOyQfZIWUZx0rsMh5mpHPCdor1ReDrmRE5oxAzLvm1wKMjU%2BjHR%2BcTr%2FCRcEC3XxH2Q%2FKsR3veuVdmXBXfdrcY%2BHp8xjMaVoS7JN00XfmXaCCzWG%2F2Y5diSJ8WKHZmxuvjTWklfvkF94B4st%2FB1LKNgQcD6JDTRiE8AOdmCmTRlmgEHHf4P17q546ueVI%2FZqJ1RcvoPmy38%2FYrLzn7d7OxDmywUSk6XBJ61p1RjSDEUdiXO%2Bc7MmpK4Hj1mQGQOZ5q0jwyLFaeDp9LJSc3OXPAgUISirIX44UmSI4aHQBiNlYCnhMp4R3EWzOwm5ObSsf2g6TxWo87u6g82VuVR%2Fw0c1TxuNBgg2kfns8OR9krMN0xVBGmz7Gf8WK43riJRp8Vdva%2Frp7Q5ttMndggx8ft3iuVzVeJejj6J8kO%2B7JnKt5rHAfxh4AjxMLB4Br%2B5C0sByMS%2FQqE2%2BTilYqQVeoPa57rmVqzUAKmzbPRTwQ9swVefEjfAX58RLWclYfbo9u%2BiGPd8lPnrr9mYs3ycgbwe1tbLlcG1QzoXYMUKWSm0dAlN8GgbTVgkSkmspt7gml2anpc1ZcuaMuiC%2BhObT9%2Fn1mKnCffJK%2BI9Q7owt7uEwwY6pgF%2FY3QxWNO5LltXY7HsJKiU%2FeBcgoaY0KxMeOjBD5ZpVInRL%2BccchnYnFKPmW2h0%2BRvSZrIgztWSsAJhExs4Ct6ijHWV6G7gVH1bFvsU0IPaCHEjwNa4eYQMs52MlyCjb54qz%2Fr0RrjXiLNKg3JUiiWsMY7%2BsDQ3xa8bYNaKstQsKBFsz6ZgXEtJ%2FoQfMG0umqfUwfQ9OUT%2Bjm03np6ck77S7ebnkVY&X-Amz-Signature=fdb1e157dfb94f365ba51b1715c1dca644ff4f6e163c64fc62b1d77fd3cceb3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPNLZ6V%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2jLvt0M32qm5QG52VdPQHatuPH%2F47pdJYaYnCeoA63AiAXkK45%2Ft0Xq8HuxKkV13Ply8VDjnPyRwOhhZAc%2BB0VCCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaJ6H6e2mzEnEhxeKtwDaXH3JB6q6Vqjc3DEcT7uKiOyQfZIWUZx0rsMh5mpHPCdor1ReDrmRE5oxAzLvm1wKMjU%2BjHR%2BcTr%2FCRcEC3XxH2Q%2FKsR3veuVdmXBXfdrcY%2BHp8xjMaVoS7JN00XfmXaCCzWG%2F2Y5diSJ8WKHZmxuvjTWklfvkF94B4st%2FB1LKNgQcD6JDTRiE8AOdmCmTRlmgEHHf4P17q546ueVI%2FZqJ1RcvoPmy38%2FYrLzn7d7OxDmywUSk6XBJ61p1RjSDEUdiXO%2Bc7MmpK4Hj1mQGQOZ5q0jwyLFaeDp9LJSc3OXPAgUISirIX44UmSI4aHQBiNlYCnhMp4R3EWzOwm5ObSsf2g6TxWo87u6g82VuVR%2Fw0c1TxuNBgg2kfns8OR9krMN0xVBGmz7Gf8WK43riJRp8Vdva%2Frp7Q5ttMndggx8ft3iuVzVeJejj6J8kO%2B7JnKt5rHAfxh4AjxMLB4Br%2B5C0sByMS%2FQqE2%2BTilYqQVeoPa57rmVqzUAKmzbPRTwQ9swVefEjfAX58RLWclYfbo9u%2BiGPd8lPnrr9mYs3ycgbwe1tbLlcG1QzoXYMUKWSm0dAlN8GgbTVgkSkmspt7gml2anpc1ZcuaMuiC%2BhObT9%2Fn1mKnCffJK%2BI9Q7owt7uEwwY6pgF%2FY3QxWNO5LltXY7HsJKiU%2FeBcgoaY0KxMeOjBD5ZpVInRL%2BccchnYnFKPmW2h0%2BRvSZrIgztWSsAJhExs4Ct6ijHWV6G7gVH1bFvsU0IPaCHEjwNa4eYQMs52MlyCjb54qz%2Fr0RrjXiLNKg3JUiiWsMY7%2BsDQ3xa8bYNaKstQsKBFsz6ZgXEtJ%2FoQfMG0umqfUwfQ9OUT%2Bjm03np6ck77S7ebnkVY&X-Amz-Signature=a27181b6296ac0fa5deadf16bf2d63e4499703b390b1958807d08b5b32e035f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
