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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDPA2X4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHkwSXAlWOcRE3f7vN9NH%2BtJ6yqXUHZZvESZ3oZmWNPlAiAGM9EWIF5CGtd1M54gSaSja91tbf7%2FmBfbWYXcuZF2bCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVOiPxkrbYwF5722nKtwDoF%2B2C17GW6E29vS%2B1ow9P21kRY751A5Af0uABHwD6fZlNQG8Qkg%2FKchKK5bbWaBOpFMRc%2BLBT9w2kh8ru6ovjJRNDFCtYrIqQMu1zYNKERX9%2BnypM%2BUCvaa301eZMXSignRLe5e0yFh55p439g7vxi09P1%2F%2Bt8tDxE6nAWojuynDQ6D%2BzUme57Rwo4tiyVJeyRwqOqgWa29IAlPdSOCqR4L8eODQPtNGsC17r2ik8Zesh4%2BfnRbleVJgA7QoNgp2EjURic5H4D0Wf0JP%2B0hdro3SPCv77zUHdB2PMDWUCtJL%2Bju2KXLNOthQNMXt5rH21eW69ctt8taWuLSSbEdU3AuMfsPyp1wZ%2BIwPm%2FPB1uzWw%2B1cDiJxranBnbkDH6zi1zGYlKu4GQ39qSeMshWHqF5VHf1hKtFhhnhHvyl3JVZ5ySK0puDF84Vdn9pRK9i3RB1wUsB0VtDoxZYuv%2BQiXWPNKx48OmbNypkbM%2FoCnkdm743NINfCjnU9FsPm0f1qiYIr7iPXmJ0829b6Sqr4%2Fp4QywO2N78XcKgR9gd8TxyOee%2BKLlz9weqjhQsQeUf2tEzSZ%2BU2fmIPQRk1FBjWAzTrGp8RagR0VPMSg9Sg7TP2aJjw2Evf35iovIYw1MK%2FwQY6pgHSoFXvuCKww5sLE6SHjG12AoHgvDQ3%2FeKRILql5KVFiqfrs4pKnkezrzqj%2FbWHoOkB94A7n0oZiEXyRgWx48S5RoFaYt9f6PMIBN%2FpVJmslA3EVOWMFrUQltcgx6r6qvrlb6RoOCPXvrg%2FbEgoNI3sH6TzR9ysOUn3DD2AM838NkO1b9YAR5H1avlvvB34b3cBRMdJwH3iYlH4cB56ui4GtmhSyQF1&X-Amz-Signature=913411802fd9aa68ac8f0173916ab3974be23321334b2e94b6ca1f893072a00c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDPA2X4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHkwSXAlWOcRE3f7vN9NH%2BtJ6yqXUHZZvESZ3oZmWNPlAiAGM9EWIF5CGtd1M54gSaSja91tbf7%2FmBfbWYXcuZF2bCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVOiPxkrbYwF5722nKtwDoF%2B2C17GW6E29vS%2B1ow9P21kRY751A5Af0uABHwD6fZlNQG8Qkg%2FKchKK5bbWaBOpFMRc%2BLBT9w2kh8ru6ovjJRNDFCtYrIqQMu1zYNKERX9%2BnypM%2BUCvaa301eZMXSignRLe5e0yFh55p439g7vxi09P1%2F%2Bt8tDxE6nAWojuynDQ6D%2BzUme57Rwo4tiyVJeyRwqOqgWa29IAlPdSOCqR4L8eODQPtNGsC17r2ik8Zesh4%2BfnRbleVJgA7QoNgp2EjURic5H4D0Wf0JP%2B0hdro3SPCv77zUHdB2PMDWUCtJL%2Bju2KXLNOthQNMXt5rH21eW69ctt8taWuLSSbEdU3AuMfsPyp1wZ%2BIwPm%2FPB1uzWw%2B1cDiJxranBnbkDH6zi1zGYlKu4GQ39qSeMshWHqF5VHf1hKtFhhnhHvyl3JVZ5ySK0puDF84Vdn9pRK9i3RB1wUsB0VtDoxZYuv%2BQiXWPNKx48OmbNypkbM%2FoCnkdm743NINfCjnU9FsPm0f1qiYIr7iPXmJ0829b6Sqr4%2Fp4QywO2N78XcKgR9gd8TxyOee%2BKLlz9weqjhQsQeUf2tEzSZ%2BU2fmIPQRk1FBjWAzTrGp8RagR0VPMSg9Sg7TP2aJjw2Evf35iovIYw1MK%2FwQY6pgHSoFXvuCKww5sLE6SHjG12AoHgvDQ3%2FeKRILql5KVFiqfrs4pKnkezrzqj%2FbWHoOkB94A7n0oZiEXyRgWx48S5RoFaYt9f6PMIBN%2FpVJmslA3EVOWMFrUQltcgx6r6qvrlb6RoOCPXvrg%2FbEgoNI3sH6TzR9ysOUn3DD2AM838NkO1b9YAR5H1avlvvB34b3cBRMdJwH3iYlH4cB56ui4GtmhSyQF1&X-Amz-Signature=ecdb8aca82c57d38367b6dde0bd4cccdabc6fb8bce9f60a58d3538a2ae1d9fef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
