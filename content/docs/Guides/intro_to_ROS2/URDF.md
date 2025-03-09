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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHP6GVG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDHG0m6SzBnQmqSHn4PcsklnJnJmMbEw3X1LAWDeZ741gIgV10T9iVkbPINdMqJhLq8MitKOsnALnFa8W%2Bd0zzurDAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGXOJxoexZOTAiDUNircA%2FsH9M3ta0Scp19Y0efLx1CA9T%2Fg28K8LKPJ4Wb7OCuQuKnYDAdXuiZ3qe86r%2F0FlEqOOKdrqhVxp%2FYtkZ7sQbI7XUU4IYFqfsXiC93R5kc%2B%2Fmel781TwxFqLWS459oChp859tcDcwwStLdR%2Bs8%2FL7iU6HdL6gMdAYknhJWlH3y1XooPIqw6II2mnj0Y7CaoC%2F1pTQRUOzuRoxIVnzjNxUliESaMJjIihnztwhbXoeg9%2B4YXtqHj%2Fr%2BwLEIp93Ugk1edp2N5pjwThN1CbMCt8LkE1Y%2FVGGmgK0RCKrgWbj9%2Bz47lftlfAURNOzFC5jiZgjdsS8fyTh%2F5gsNDQ29aBGKu02naVWAIbtYgokhFz%2FoMw2Et6%2BQMrq%2FqC8ar%2Fj68lwXOLyxL13G7jCvVYgjCHXZqmq0EdQpAC4UjB4u21LGnq2UmcI6YBMr8u%2BiBpjjAmDBp%2BPSI%2FpsOa6nF4criRFVGaf0EEHSG1I48xhS86WiuYuseA8XgXJJ5pGO7H9ZhyqNGFOuFBEUX9sObjiK2p6QiUXeUPerYnn4z7PXfTOcS%2BaGFS%2BB62VqLc2bEH6kAzdC96lI6smsZ0YHCSv9GSmfe97xLMZVthUPoWG8dOekqaY1USonAF5QDAm1%2FMMKGtr4GOqUBq1Ekkzh2SzFC1q6UknQOKBa55kXNC%2F8QqudH2OThEfgkpOxiQO3rDwI5DS0xtqhNP%2FSI%2BiBfxFol%2FNbIA2%2BmiUTTzHuTGhun9Uz66OP7QxjJG%2BhOkftVRPwJ0opZxK1%2BS80DnupCtSpVSqjPjMrC%2BeY45KjBQrR8ifNG2KGlHbMdOTtN2JJU03229p3JT4SbTpbj2E%2Fw5AqEG3coy6pWBppIfKjQ&X-Amz-Signature=267fdecb18dac40a96fd47bf23183f11233477614a30d090e95dc627a8cba75d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHP6GVG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDHG0m6SzBnQmqSHn4PcsklnJnJmMbEw3X1LAWDeZ741gIgV10T9iVkbPINdMqJhLq8MitKOsnALnFa8W%2Bd0zzurDAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGXOJxoexZOTAiDUNircA%2FsH9M3ta0Scp19Y0efLx1CA9T%2Fg28K8LKPJ4Wb7OCuQuKnYDAdXuiZ3qe86r%2F0FlEqOOKdrqhVxp%2FYtkZ7sQbI7XUU4IYFqfsXiC93R5kc%2B%2Fmel781TwxFqLWS459oChp859tcDcwwStLdR%2Bs8%2FL7iU6HdL6gMdAYknhJWlH3y1XooPIqw6II2mnj0Y7CaoC%2F1pTQRUOzuRoxIVnzjNxUliESaMJjIihnztwhbXoeg9%2B4YXtqHj%2Fr%2BwLEIp93Ugk1edp2N5pjwThN1CbMCt8LkE1Y%2FVGGmgK0RCKrgWbj9%2Bz47lftlfAURNOzFC5jiZgjdsS8fyTh%2F5gsNDQ29aBGKu02naVWAIbtYgokhFz%2FoMw2Et6%2BQMrq%2FqC8ar%2Fj68lwXOLyxL13G7jCvVYgjCHXZqmq0EdQpAC4UjB4u21LGnq2UmcI6YBMr8u%2BiBpjjAmDBp%2BPSI%2FpsOa6nF4criRFVGaf0EEHSG1I48xhS86WiuYuseA8XgXJJ5pGO7H9ZhyqNGFOuFBEUX9sObjiK2p6QiUXeUPerYnn4z7PXfTOcS%2BaGFS%2BB62VqLc2bEH6kAzdC96lI6smsZ0YHCSv9GSmfe97xLMZVthUPoWG8dOekqaY1USonAF5QDAm1%2FMMKGtr4GOqUBq1Ekkzh2SzFC1q6UknQOKBa55kXNC%2F8QqudH2OThEfgkpOxiQO3rDwI5DS0xtqhNP%2FSI%2BiBfxFol%2FNbIA2%2BmiUTTzHuTGhun9Uz66OP7QxjJG%2BhOkftVRPwJ0opZxK1%2BS80DnupCtSpVSqjPjMrC%2BeY45KjBQrR8ifNG2KGlHbMdOTtN2JJU03229p3JT4SbTpbj2E%2Fw5AqEG3coy6pWBppIfKjQ&X-Amz-Signature=e9187c3c132bc3e934b0b5c27f6c29f6244ec62c4977b837142fc096e978356c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
