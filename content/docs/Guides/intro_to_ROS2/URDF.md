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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEXUPQB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNKV5bSgWx1%2FNwS4THmCSru77smCMsl0qW9oz5gGE5XAiEAk21YLEBUtXFHTw1c9tb08XqdH86qaTd0FyNNDqNpolwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFsyXafou8sPAHcDyrcAzk6S6k2bX3Xp0BoBgW3fZdFhgHOxS5xoLEH2kSmcfPVr%2Fqer8oNL25sCb%2FMYcZMWc%2FQcS6eTvCtLVt0pLQ6ynYUU9rOSrUwK9KZTE1BLNamuLtnml%2FTd5Df8rHlcmSihdUDAbTJ0%2BsP8q%2FwEtKu5JqG3i7T4LBmkNUD%2F9fJTGPwj7dUGU5ROAuvc20WYjZgoI9Vd5Y7Rf9b3bZcK4Me4P2%2BJnkWWd%2FPrVfZbsePKVwJiBQ1HVpU6nixDvNYraouMxj24VHlwgCCE9axZpetFPjxlQHT0QTB78nduEQnG5sIg8O8RtLYUnwSQHhJXW%2BVWfVm1vpv1mc1MMTV8DgedIGW8wgxR2uUesw77lp1WE3fu%2FUaRd3azeLQh6VlcLqukstLepFl2%2BC2TezLE8tQyEtTN35tuH%2FQrOjjTRWCwDmLCBY8juAgwR4fbmMA9tcAo8t84lu0Busae7MJAXW5L7ZL2Qn9BHCZqb9ecK03R8spD%2Bgf%2BF%2BnqjbVS0ks67t2EdVt1MxkC3ZWbBUcBGpmnemj5wErraw%2BUjJPlN3WPEsNfZgSzoTTaJF2YM8%2FWZEMwKQQU0gMn2Mbqe7kfxgNN%2FkbHVmsMQBRVfD4ZGAgoIcsh4U078b%2FRIIiftpqMMa9qL0GOqUBIcU1lS2wuKv%2BycynpfsQVDUimokrTo3Ifg7VxcJ9%2BZMJmcCGIWqjdDkhgJqesfoBbY9a3OecsHmZvchdy7L2uU7IexRkMdUnyl%2BD3%2F066SoTNf6DPRIbTT4f34a7LA0leXLBRoMMoUzSo8%2FGW0KfgYCnRNRZwX9kqF3jN9rdwXO2FHTa17G5CdHKo6MDhZm50X6UzURssQUC7f%2FR6u3yCFGjqBbK&X-Amz-Signature=b65863cd5ff9e1831fb5080e25e2168bf493361393ab825b6dc639931993f8ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEXUPQB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNKV5bSgWx1%2FNwS4THmCSru77smCMsl0qW9oz5gGE5XAiEAk21YLEBUtXFHTw1c9tb08XqdH86qaTd0FyNNDqNpolwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFsyXafou8sPAHcDyrcAzk6S6k2bX3Xp0BoBgW3fZdFhgHOxS5xoLEH2kSmcfPVr%2Fqer8oNL25sCb%2FMYcZMWc%2FQcS6eTvCtLVt0pLQ6ynYUU9rOSrUwK9KZTE1BLNamuLtnml%2FTd5Df8rHlcmSihdUDAbTJ0%2BsP8q%2FwEtKu5JqG3i7T4LBmkNUD%2F9fJTGPwj7dUGU5ROAuvc20WYjZgoI9Vd5Y7Rf9b3bZcK4Me4P2%2BJnkWWd%2FPrVfZbsePKVwJiBQ1HVpU6nixDvNYraouMxj24VHlwgCCE9axZpetFPjxlQHT0QTB78nduEQnG5sIg8O8RtLYUnwSQHhJXW%2BVWfVm1vpv1mc1MMTV8DgedIGW8wgxR2uUesw77lp1WE3fu%2FUaRd3azeLQh6VlcLqukstLepFl2%2BC2TezLE8tQyEtTN35tuH%2FQrOjjTRWCwDmLCBY8juAgwR4fbmMA9tcAo8t84lu0Busae7MJAXW5L7ZL2Qn9BHCZqb9ecK03R8spD%2Bgf%2BF%2BnqjbVS0ks67t2EdVt1MxkC3ZWbBUcBGpmnemj5wErraw%2BUjJPlN3WPEsNfZgSzoTTaJF2YM8%2FWZEMwKQQU0gMn2Mbqe7kfxgNN%2FkbHVmsMQBRVfD4ZGAgoIcsh4U078b%2FRIIiftpqMMa9qL0GOqUBIcU1lS2wuKv%2BycynpfsQVDUimokrTo3Ifg7VxcJ9%2BZMJmcCGIWqjdDkhgJqesfoBbY9a3OecsHmZvchdy7L2uU7IexRkMdUnyl%2BD3%2F066SoTNf6DPRIbTT4f34a7LA0leXLBRoMMoUzSo8%2FGW0KfgYCnRNRZwX9kqF3jN9rdwXO2FHTa17G5CdHKo6MDhZm50X6UzURssQUC7f%2FR6u3yCFGjqBbK&X-Amz-Signature=e5fb0c826ce974cfab286af5b5ed81f41697bcab783a8110fcd6cce9676a8dde&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
