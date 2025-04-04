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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GX6BWT6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO0I4JXEBx4dXG1BNCsU%2BxmiFT3bzygHx8Iu6qnnO4mQIgBT397PY%2BT85jn8UY5K7pl%2F88fLQ%2FDYVe56tBOGmSte8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDD17djrfx1wR%2F0nFcCrcAxZLZs7tksI%2FRVGmQkkTqpOKQXGg%2FO1XCh0rXJr7%2BRud%2FnUa33gyK6xQM8gOobrOL4%2F%2BB01Qui2AScIkTHK87KRGUIuJoWH1qoEltvLpBUOWldSxNPAsfyUjCB30Vm%2BJt7aLjnj9w30MkBD95HjxIp%2BYj0pPB1jfBDJnLyxeDwZUieeXTfwVHRRoYkbOcocUY3%2FSSxOSCMMgfcHs28u%2BOcbZ7mBw8q9OCjNdX8EJfm3mj%2FNQgcZK%2F%2FLLKSDtYMtSP%2Fb5%2BxmnvRTtgl%2BomPkjOOz6wDJRupiSJqtrRCPtWXe7QWFxBE0XmtDKu4qKUApaw%2B4aV8%2BWBn5vt4GMPvbzvcPK6pvoAbtICYvsCEEHXcDZ6MjNEiJ1KqSCtpgES3S38%2ByYoj0kR7Yz2b%2FGiO1ppSNQuL%2BvPZVNHU9RhI6z4DQGouoTU7M7wquTyQJnw%2BlpU7XCL46uxwcNM%2BpfH2Rb7O0%2FwOxNCYcWB8JgZEhI0P7Ve%2BuaVDjJpJvcl%2FVbh7FQOBhW%2F0QtVDb8%2Br8NlY485%2FTuJeK3Ir8Qjt4oUvsrYXmJ2AmT4tWMZ4KXE6zfAfDWpxjYbOC3NOvOxM2XMxQZTMgTwCyWaXVQTyb6SysdE5Ytvd8DoOWYmrX78NPQMPCSvr8GOqUBAxDrJiA%2BSaRKtQGRBYOp6QUfnrMUBriyQd4SmFU4aOYPoNGw9PyPPWbn0lR%2FFQZ9nHzi7UP%2BhpzR2QMfzqu4bK%2BneDUjexZK0Dabo0TEtnN2Tm8gF8XMgjwNK6SZh%2BE0Xq%2BC8%2FMWOpRUES7BQ2Iwp5FZlu54p76gckhBSaY9jSfjmPCB%2BUhQ8Q9y8ul1lz2%2FTC6uhd4k5XskmfSqq8h71w4qeu1d&X-Amz-Signature=ee8a2a6a886bc3420256e7ac2d2d275e6be1c68a8115b04a24bf46cbd8a0412e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GX6BWT6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO0I4JXEBx4dXG1BNCsU%2BxmiFT3bzygHx8Iu6qnnO4mQIgBT397PY%2BT85jn8UY5K7pl%2F88fLQ%2FDYVe56tBOGmSte8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDD17djrfx1wR%2F0nFcCrcAxZLZs7tksI%2FRVGmQkkTqpOKQXGg%2FO1XCh0rXJr7%2BRud%2FnUa33gyK6xQM8gOobrOL4%2F%2BB01Qui2AScIkTHK87KRGUIuJoWH1qoEltvLpBUOWldSxNPAsfyUjCB30Vm%2BJt7aLjnj9w30MkBD95HjxIp%2BYj0pPB1jfBDJnLyxeDwZUieeXTfwVHRRoYkbOcocUY3%2FSSxOSCMMgfcHs28u%2BOcbZ7mBw8q9OCjNdX8EJfm3mj%2FNQgcZK%2F%2FLLKSDtYMtSP%2Fb5%2BxmnvRTtgl%2BomPkjOOz6wDJRupiSJqtrRCPtWXe7QWFxBE0XmtDKu4qKUApaw%2B4aV8%2BWBn5vt4GMPvbzvcPK6pvoAbtICYvsCEEHXcDZ6MjNEiJ1KqSCtpgES3S38%2ByYoj0kR7Yz2b%2FGiO1ppSNQuL%2BvPZVNHU9RhI6z4DQGouoTU7M7wquTyQJnw%2BlpU7XCL46uxwcNM%2BpfH2Rb7O0%2FwOxNCYcWB8JgZEhI0P7Ve%2BuaVDjJpJvcl%2FVbh7FQOBhW%2F0QtVDb8%2Br8NlY485%2FTuJeK3Ir8Qjt4oUvsrYXmJ2AmT4tWMZ4KXE6zfAfDWpxjYbOC3NOvOxM2XMxQZTMgTwCyWaXVQTyb6SysdE5Ytvd8DoOWYmrX78NPQMPCSvr8GOqUBAxDrJiA%2BSaRKtQGRBYOp6QUfnrMUBriyQd4SmFU4aOYPoNGw9PyPPWbn0lR%2FFQZ9nHzi7UP%2BhpzR2QMfzqu4bK%2BneDUjexZK0Dabo0TEtnN2Tm8gF8XMgjwNK6SZh%2BE0Xq%2BC8%2FMWOpRUES7BQ2Iwp5FZlu54p76gckhBSaY9jSfjmPCB%2BUhQ8Q9y8ul1lz2%2FTC6uhd4k5XskmfSqq8h71w4qeu1d&X-Amz-Signature=304c8988ddfd2b9e3406ec124abc9cf84753be2129ca187080a81fa90db05c00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
