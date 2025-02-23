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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UONB4AGA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxXHMpoGODmhQfe7gFqGt8iw2Ku%2F%2BH4lvm3Px1LaeLmAIgJj%2BZ09bMdejtT%2BMSATlFaoQc1L%2FJnHlpaz2C%2BEmeuw0qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV06GRFYbapcuHaRCrcA7rPcOUTEbPx67%2FckhotZFOP8sFcH%2Byaaz7TEEOWOt%2BeKU8wwkiqd9FlOrOBQrex%2FxTnY2uCTQh1iNMRQrNQmNJaHHWg8W1DY2zJaj0KqBY8PVXfGDC%2FuOhnFx7SFkPyd5ntc0D8WXK%2Fa11W%2FDVxlaHojhHyKxs%2Flz9KnCl1AorNOGPbHSesmlvz4DbO99Nc5zDclj2q21qGXdTZEsBsHEKLO668mFon%2BF75FV9aE0DVnRX%2Bmt0QHFeJB2%2BbUJV1FhN0ihjE03orOXrhz1PKJglEB5khJT8NLVTP5bdA5vWyxAxX3%2BchC7K9%2BNCeZiobGh8Z3XP6qVQxOO9h2HuF3DmQQWvaWZXCJia%2F%2Bjg5LHyDEr75OWisLQPiuN5wW05Uv7XChr7R5YeOQAu0yIYljubOSfnBNC6om8UuSc6vTmnVkuk8AAvgvaCXFxg8ZeklOMtEbx%2BzlsRzSkwBsr6gUdq2oXGkFd6Bt10iHvng3loIr%2FGENF8ho3mvnZBPUpbBNRnA1rS5WNyEqfy4Kgc4jnQfaJDHkrIkqo7LEwDVR8Jw%2FixLhCSM26%2BHbs4JFuaKiY2ZVHkPrqlDkHpQR25%2FLtiUxLG2juGKHs7DWF7W4BLbZdltQwwBEdIFreJmMO636L0GOqUBSNpyIMHiSXQqaBxBdvMRJNc6hjw4xtK0Qt3q82CWqO8E%2BWNf0kVUhP78tvAT7wqHwQAaBEi7ll58aXNG%2B3dFjMrIQ2E%2BUaK9YXpefODJsNKH1bU7NBLxFKm31dQJISmZvqJE3%2Fa0OMEfx3HJ4XktFhABx9AkGSzin7%2BEAe0rU9c%2B0%2FbrVRR30YTzn69mPAj%2F7vmZ1jq9WThHjXEO9sbO8rnHVJ9V&X-Amz-Signature=56e39c930c8fa78e5550bc7c5b640c225f9ff51ee5ab351ffa6712e3ae536329&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UONB4AGA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxXHMpoGODmhQfe7gFqGt8iw2Ku%2F%2BH4lvm3Px1LaeLmAIgJj%2BZ09bMdejtT%2BMSATlFaoQc1L%2FJnHlpaz2C%2BEmeuw0qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV06GRFYbapcuHaRCrcA7rPcOUTEbPx67%2FckhotZFOP8sFcH%2Byaaz7TEEOWOt%2BeKU8wwkiqd9FlOrOBQrex%2FxTnY2uCTQh1iNMRQrNQmNJaHHWg8W1DY2zJaj0KqBY8PVXfGDC%2FuOhnFx7SFkPyd5ntc0D8WXK%2Fa11W%2FDVxlaHojhHyKxs%2Flz9KnCl1AorNOGPbHSesmlvz4DbO99Nc5zDclj2q21qGXdTZEsBsHEKLO668mFon%2BF75FV9aE0DVnRX%2Bmt0QHFeJB2%2BbUJV1FhN0ihjE03orOXrhz1PKJglEB5khJT8NLVTP5bdA5vWyxAxX3%2BchC7K9%2BNCeZiobGh8Z3XP6qVQxOO9h2HuF3DmQQWvaWZXCJia%2F%2Bjg5LHyDEr75OWisLQPiuN5wW05Uv7XChr7R5YeOQAu0yIYljubOSfnBNC6om8UuSc6vTmnVkuk8AAvgvaCXFxg8ZeklOMtEbx%2BzlsRzSkwBsr6gUdq2oXGkFd6Bt10iHvng3loIr%2FGENF8ho3mvnZBPUpbBNRnA1rS5WNyEqfy4Kgc4jnQfaJDHkrIkqo7LEwDVR8Jw%2FixLhCSM26%2BHbs4JFuaKiY2ZVHkPrqlDkHpQR25%2FLtiUxLG2juGKHs7DWF7W4BLbZdltQwwBEdIFreJmMO636L0GOqUBSNpyIMHiSXQqaBxBdvMRJNc6hjw4xtK0Qt3q82CWqO8E%2BWNf0kVUhP78tvAT7wqHwQAaBEi7ll58aXNG%2B3dFjMrIQ2E%2BUaK9YXpefODJsNKH1bU7NBLxFKm31dQJISmZvqJE3%2Fa0OMEfx3HJ4XktFhABx9AkGSzin7%2BEAe0rU9c%2B0%2FbrVRR30YTzn69mPAj%2F7vmZ1jq9WThHjXEO9sbO8rnHVJ9V&X-Amz-Signature=fa71d4fc69a90bddec48fba827f548e768a881ec7baba14c13808c95f7cce227&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
