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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64HFZP5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBSnmxGtbddTqFbAsEKDHSXoEKB1PvZny8WEgSPd4p2qAiEAn%2FLioELLf4VHLbTw7MDaT%2BRWxjTLBCTq%2FfrzaDb%2FnM4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCFnvxPhLEEkbeEinyrcA80eYO7C6dZlkybWRAkO40X%2BMxjgxjv1npSVqXcWiR4s9E8fZVm1IVVAFfOTRUUwX5G2QhBEy8ItS5PLcg%2Fwu7vrFue0A%2FPbnhFh%2FvnxW4ZwCjcHAERwwaFPYqR27sfG6JhbNwk%2BjjPaWlwV6L9OFgsmJXpqlx3TNI5hj7dQFGIOlmLU56DGRhjh%2B%2FTpSqXqtn2J7XmfYfU6leeFvqDml6mmGTR2L7ClzcoVAA6aoncbQd%2FxFHSoPEsMD4yYACOseXfWTHE6VJc1Z3lTx1AfPsidmUF78Gb5sfzVNebfLOHfnDrn2bWnyhEamG2ePpU5NjMl3fhcj8nwFcmrgDdiCwJEFlm%2F9l5OGxmb0xEHcf8kRli0614omrV5gFKmulYRWO5ErLPwa6%2FIHYQdW51cIMv1%2Bk39vE5z3WpKRooczN%2F0uphbLClHK7uFzp9%2B%2BuXlmAXwyIU5ZUS2m8OsTbs2hW8jZY4LCpet9Oi2PXDrnxS6vgf4Kx2Kmr2JU%2Bh1D9vc7rm3%2B0BtbWUQIzWR1xI5VAtff7PdHRXLQJ1tWdnkigUpkSsqJ15VgYATMqhRzoPClMqdd%2BNSVwSfpct3EHtTUa7tRlkHym0gEmZuABa0lTnQQe83d8JtTGj%2BBtWiMNz5zL0GOqUB0zibdIz21G%2BkaFEe9%2Fa7pnVfAZJZZ2jUb2BjG4PI3VmLOTR9b%2FTTvs%2B5hBkumvYx%2Bkqhac%2FBGinsr%2BRA%2FUisHiKABh0FYdHBxAcn69p2nmciuB%2BI%2BYQNU82AsoOioUrSPQX5kmu%2Frnx6caESAk4p4hX4wk6fj7JTYdXWHLthsDk4LkMOMF4dCsyJsWFMvLuJerqrlGjGJX1XTePcM4rjFOPMMYOI&X-Amz-Signature=8e9fac334bdc470e114e462bd0c6d2d819c17d6f7ed7c17eabcb3fd4582f9779&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64HFZP5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBSnmxGtbddTqFbAsEKDHSXoEKB1PvZny8WEgSPd4p2qAiEAn%2FLioELLf4VHLbTw7MDaT%2BRWxjTLBCTq%2FfrzaDb%2FnM4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCFnvxPhLEEkbeEinyrcA80eYO7C6dZlkybWRAkO40X%2BMxjgxjv1npSVqXcWiR4s9E8fZVm1IVVAFfOTRUUwX5G2QhBEy8ItS5PLcg%2Fwu7vrFue0A%2FPbnhFh%2FvnxW4ZwCjcHAERwwaFPYqR27sfG6JhbNwk%2BjjPaWlwV6L9OFgsmJXpqlx3TNI5hj7dQFGIOlmLU56DGRhjh%2B%2FTpSqXqtn2J7XmfYfU6leeFvqDml6mmGTR2L7ClzcoVAA6aoncbQd%2FxFHSoPEsMD4yYACOseXfWTHE6VJc1Z3lTx1AfPsidmUF78Gb5sfzVNebfLOHfnDrn2bWnyhEamG2ePpU5NjMl3fhcj8nwFcmrgDdiCwJEFlm%2F9l5OGxmb0xEHcf8kRli0614omrV5gFKmulYRWO5ErLPwa6%2FIHYQdW51cIMv1%2Bk39vE5z3WpKRooczN%2F0uphbLClHK7uFzp9%2B%2BuXlmAXwyIU5ZUS2m8OsTbs2hW8jZY4LCpet9Oi2PXDrnxS6vgf4Kx2Kmr2JU%2Bh1D9vc7rm3%2B0BtbWUQIzWR1xI5VAtff7PdHRXLQJ1tWdnkigUpkSsqJ15VgYATMqhRzoPClMqdd%2BNSVwSfpct3EHtTUa7tRlkHym0gEmZuABa0lTnQQe83d8JtTGj%2BBtWiMNz5zL0GOqUB0zibdIz21G%2BkaFEe9%2Fa7pnVfAZJZZ2jUb2BjG4PI3VmLOTR9b%2FTTvs%2B5hBkumvYx%2Bkqhac%2FBGinsr%2BRA%2FUisHiKABh0FYdHBxAcn69p2nmciuB%2BI%2BYQNU82AsoOioUrSPQX5kmu%2Frnx6caESAk4p4hX4wk6fj7JTYdXWHLthsDk4LkMOMF4dCsyJsWFMvLuJerqrlGjGJX1XTePcM4rjFOPMMYOI&X-Amz-Signature=e6b25ec2ed1bc593c44f8aaec7a8dbcf79e555aade06793b97d7ec84397dbc0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
