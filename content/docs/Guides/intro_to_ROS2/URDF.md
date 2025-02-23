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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MPBZJI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4W4ZJJQDFXQ%2FPtO48CEi39azbBe9TW54nxaqnoGKS0AiAgVTGuJ4WjMgTg9FI29gVtaul8EVc%2FAL51VzZokav0QSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMclTNWQPtfLSOkjvgKtwDAaHwf2FvQMO6orPcZAZEjjA0b0PDvfW0fWtUqQfgHAlIz0%2F3BKWu%2BKdudPKZBlL3A%2BMj1gR%2B%2Bct5613%2FjPly3gdTq7QxRewBTsBBYG0rrU3UtrCHlQFSZMj3tRF%2FPKDd3Ji48O%2FJpER50n%2B383608VFst5vIwL5zdxmqXp4D2BMgPSLMSubZnVlY2qIwViN1J7Nz4%2B3%2Fj0YK7aGUqf0d4jYuBtR1uNHZC3HW1JQRljUW8%2BxIszq59nQlXBdFP7QKv1UaNme6H%2BdYQ1i1sqMCEwPLKOnAYJ1nGcODKJEPD6F6sIzPZCnPRtRulA5XekraJlRsMDh%2FAawkRMdUIROC1wG86p32tEyLOONPcr2Nx1s8DOb7NeOmWv7RUBH0CSV%2F5JED9LVZJCOLhnybEJ2EL675ULbMb1fDA5UL77W3dHm7lDEAr3zJgEj%2FB11d4zkY76IFQePfV21Ig9D7tJmxipQyQOkB3ghkE%2FxO6Y2Jh7g5taLpFW0KqtGyeUbnfZoP8pivtzfFwr2fEk4qyI%2BqkILWWRLs2CTiOJbsd07A6A8BXOH1I0BBQJOHTcdEESKQBmrA78RlABQ5usFYw2sGiCfPXBW%2BXejE5Z63PYqb91zFXqS5MogVXwe6eMcw9a7tvQY6pgGkOnLieg9Xh4hibHKFz97E0S%2F%2B%2F0M%2BWVWChZOwYYYxxlqK2ih87CnjYNbHJR7seN%2B6ccYW3qjlVQZ%2BUr6th3%2BmAB1z%2FyHBzzszRnVgklLQeAa5vMKRABHsyeXpeHjUmDVnhLvkTYjLo70C6v4xBh0BYFCl9PDattgSfap33Ppwy73NkQwzxeT%2B81lTIGRMWl0yStagfiGvns3E0Nnz4OolLQZEqYu9&X-Amz-Signature=e5ec2a6fd3b7964f91da0df7b355d00f792e59ded60403dde97e24c30b19eb67&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MPBZJI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4W4ZJJQDFXQ%2FPtO48CEi39azbBe9TW54nxaqnoGKS0AiAgVTGuJ4WjMgTg9FI29gVtaul8EVc%2FAL51VzZokav0QSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMclTNWQPtfLSOkjvgKtwDAaHwf2FvQMO6orPcZAZEjjA0b0PDvfW0fWtUqQfgHAlIz0%2F3BKWu%2BKdudPKZBlL3A%2BMj1gR%2B%2Bct5613%2FjPly3gdTq7QxRewBTsBBYG0rrU3UtrCHlQFSZMj3tRF%2FPKDd3Ji48O%2FJpER50n%2B383608VFst5vIwL5zdxmqXp4D2BMgPSLMSubZnVlY2qIwViN1J7Nz4%2B3%2Fj0YK7aGUqf0d4jYuBtR1uNHZC3HW1JQRljUW8%2BxIszq59nQlXBdFP7QKv1UaNme6H%2BdYQ1i1sqMCEwPLKOnAYJ1nGcODKJEPD6F6sIzPZCnPRtRulA5XekraJlRsMDh%2FAawkRMdUIROC1wG86p32tEyLOONPcr2Nx1s8DOb7NeOmWv7RUBH0CSV%2F5JED9LVZJCOLhnybEJ2EL675ULbMb1fDA5UL77W3dHm7lDEAr3zJgEj%2FB11d4zkY76IFQePfV21Ig9D7tJmxipQyQOkB3ghkE%2FxO6Y2Jh7g5taLpFW0KqtGyeUbnfZoP8pivtzfFwr2fEk4qyI%2BqkILWWRLs2CTiOJbsd07A6A8BXOH1I0BBQJOHTcdEESKQBmrA78RlABQ5usFYw2sGiCfPXBW%2BXejE5Z63PYqb91zFXqS5MogVXwe6eMcw9a7tvQY6pgGkOnLieg9Xh4hibHKFz97E0S%2F%2B%2F0M%2BWVWChZOwYYYxxlqK2ih87CnjYNbHJR7seN%2B6ccYW3qjlVQZ%2BUr6th3%2BmAB1z%2FyHBzzszRnVgklLQeAa5vMKRABHsyeXpeHjUmDVnhLvkTYjLo70C6v4xBh0BYFCl9PDattgSfap33Ppwy73NkQwzxeT%2B81lTIGRMWl0yStagfiGvns3E0Nnz4OolLQZEqYu9&X-Amz-Signature=f9cf04158f2b60817dcdf69ee27489e0fce68a16c222a4022e01c413cd9ab7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
