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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56OW5I4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIA2qDBQRRnmNYl1Hzw3%2FeQQ4oqPM6axlCoiryez67SICAiEA8FBNUXeGMhll3i8aGC46RuIlLXj3rWBot%2BMK1yWPgUkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEzQLeUWPP7MvcbauSrcAzKvvh%2FpV9ObOJSnlGJbDdaqit8fMGN64LNEtvIhor4r2LZmDO5%2BYcjHHCy9crIlFQybXDyRQQdDhJOunpQSo8pv7uRrFG%2BOSLKbqGIflrm5eF2tiojdKRaYOxrytExwslZS2z2yrTLLJik0hWzfpkADwW3jKSsHNjiSvL1smi1mRmJh931iWdVkhZHj%2BTt4M6EB5vPTmSmwVFQCWXpAKB00qKzc7paYfeO7k9b24WYXEaYKNzLGeSwo4mnllDMka5pFDDCKc0ytR1pELYfiOZqOHLZvCVHW%2F9A6BNhb02uhhy0zldVYsVmo9mIa4LgKg5DKc8Rq9FFQcXrrG6%2FmGJMe5t4Um5dOovjM6JGQH05FduuM30igbnoUYL0ku9YaDjsrd7Xnwh1sVh2A29XitWAO15js1lwth4z6NAd41R3OiO6uSKX5bTxM26rlPD2SYhZ7iP3ofNVlkQId985mmA4Do5qqxVUWe8WewL7oo7zlcIwogqva1PGQOqxPXi2D8r1tybp2Ye0vGAEd4USln4BxBhgW0fsI3b8akuqYERv8D8uFSI55Io9AE0yXGlCyJNNybeKxbvelU90BVQYegWeSiZujICMX%2BMbSohCZ5L4nZfPx2%2FYzhA0vb3CGMNmFl8EGOqUBu0zMrCbPhr9r8a%2BjSyr%2BaShjuJtsj6nZtusGz93MEAI9Pz8MB3999O2uT0rk%2FgmHkvpsoCXFOAm0Vr6pG%2BD%2BgekmtFTJAP73tDqCKDK0Iz1p%2FB%2F6XHMrShSmfxfSdiz2L2QFMkebJcOowJIj%2FC3EtziV9YLO0zNLbJblkiLAYfX0tFtoQPD4hdaoSLRv542awWw243JWX8RNbrI6cDst3ivfbaqU&X-Amz-Signature=18ec0738a42bb6b4185dd79ca15ff84cd0501815f0cd8dea1cbc6631145868c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56OW5I4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIA2qDBQRRnmNYl1Hzw3%2FeQQ4oqPM6axlCoiryez67SICAiEA8FBNUXeGMhll3i8aGC46RuIlLXj3rWBot%2BMK1yWPgUkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEzQLeUWPP7MvcbauSrcAzKvvh%2FpV9ObOJSnlGJbDdaqit8fMGN64LNEtvIhor4r2LZmDO5%2BYcjHHCy9crIlFQybXDyRQQdDhJOunpQSo8pv7uRrFG%2BOSLKbqGIflrm5eF2tiojdKRaYOxrytExwslZS2z2yrTLLJik0hWzfpkADwW3jKSsHNjiSvL1smi1mRmJh931iWdVkhZHj%2BTt4M6EB5vPTmSmwVFQCWXpAKB00qKzc7paYfeO7k9b24WYXEaYKNzLGeSwo4mnllDMka5pFDDCKc0ytR1pELYfiOZqOHLZvCVHW%2F9A6BNhb02uhhy0zldVYsVmo9mIa4LgKg5DKc8Rq9FFQcXrrG6%2FmGJMe5t4Um5dOovjM6JGQH05FduuM30igbnoUYL0ku9YaDjsrd7Xnwh1sVh2A29XitWAO15js1lwth4z6NAd41R3OiO6uSKX5bTxM26rlPD2SYhZ7iP3ofNVlkQId985mmA4Do5qqxVUWe8WewL7oo7zlcIwogqva1PGQOqxPXi2D8r1tybp2Ye0vGAEd4USln4BxBhgW0fsI3b8akuqYERv8D8uFSI55Io9AE0yXGlCyJNNybeKxbvelU90BVQYegWeSiZujICMX%2BMbSohCZ5L4nZfPx2%2FYzhA0vb3CGMNmFl8EGOqUBu0zMrCbPhr9r8a%2BjSyr%2BaShjuJtsj6nZtusGz93MEAI9Pz8MB3999O2uT0rk%2FgmHkvpsoCXFOAm0Vr6pG%2BD%2BgekmtFTJAP73tDqCKDK0Iz1p%2FB%2F6XHMrShSmfxfSdiz2L2QFMkebJcOowJIj%2FC3EtziV9YLO0zNLbJblkiLAYfX0tFtoQPD4hdaoSLRv542awWw243JWX8RNbrI6cDst3ivfbaqU&X-Amz-Signature=fbb55a6b1e9b9f9de1472c54bc3b184218f4dfb21f122bd679370e71e68acc59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
