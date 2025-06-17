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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAHYMOPY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC91c%2FLiP9JtYD568KZpPJN0EfrDd%2FhF42V22XtfzytFAiEAy9fkbIQlCyqfQlYAhw%2F%2BGbbf%2B6e%2BrDIV%2BOjbEXIWXFwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBJE4nY0e5IRQieq7yrcA0us53pTIN4ft2WYDK5C3HVFIbzrZCr5XoB7NXZgs7BeFkZvh5KlfdLraZre1RnwMUeILzObTRwpojIHg971gmmLWntROxUs38sXP5YFxZODXdLyQfTRAi%2Fm8hjxLwNPq4GnBlAljjYYiHly6PDANlfy5YDgR7tsqQp6iDh53iCOxVI4Vn9qOdTkAI5cWE0Ng3OghJLCpmyLHxyxPtYSx8urvZPiuMykkT7IZ024YMHr1FF9%2F%2FlC4gY4O5XJ7WsMalTkhiI5bntl7xi72mg6CMQpgYmhlt8tZFlrsL19hNPIFoziAfvO7vI1GNo%2BHSy4ofyYskfF7C6WbQutOQDromnWZe9M%2B0kQRInl2M%2B6s4aYCooBt8w8ymxS9kah73nY8FdQJwAxEADZxv07od9UxbyolMXGviYK2sWIvKGKy21QtxhTSZa%2Bu6VyqIKyN1O5LojHjEmPXdg5%2FHotXXGT6m51vyeeiFkMkRu90Oh%2BXHUlT09czhp%2FjcO5A3wMhDcCkX3GsoFDotjbIhaAcj1ZkCTXq7O1T7gv9v7%2F1FSgEKgI%2BlPM8CW8Gm%2BYOS%2F%2BYlMfbDytArZZjpGtUOMMPS%2FFEdAMZjznYl%2FBlDfqMGKGVx0G7BwucHHkpFNZm30yMIaJx8IGOqUBe8xcSeIxW98Kc%2F23jwgbW8Po5MI2HRRpWHEHTxA%2BUuMvWukT9oNJmo5lT7OZENQpQZGwPdhvCFT3SRht%2B5W4bmnJ7jGzCoEgrIDNoWz0rt23SvjT3sSVGKWW6U5xO9N30k%2BdVIZKYnCz0vq%2BU%2Fd8br68z3gILu1R6c%2Bk8WOG3g847EZp3%2F7KrDqCme%2Fu2%2B6Khf4Lf99ezL%2B%2BPhyHaSjhEY6kGc87&X-Amz-Signature=5c216d53a8b3e3b42d24c9a52ced64b409e69bcd2efc676c49222088b7cc3faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAHYMOPY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC91c%2FLiP9JtYD568KZpPJN0EfrDd%2FhF42V22XtfzytFAiEAy9fkbIQlCyqfQlYAhw%2F%2BGbbf%2B6e%2BrDIV%2BOjbEXIWXFwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBJE4nY0e5IRQieq7yrcA0us53pTIN4ft2WYDK5C3HVFIbzrZCr5XoB7NXZgs7BeFkZvh5KlfdLraZre1RnwMUeILzObTRwpojIHg971gmmLWntROxUs38sXP5YFxZODXdLyQfTRAi%2Fm8hjxLwNPq4GnBlAljjYYiHly6PDANlfy5YDgR7tsqQp6iDh53iCOxVI4Vn9qOdTkAI5cWE0Ng3OghJLCpmyLHxyxPtYSx8urvZPiuMykkT7IZ024YMHr1FF9%2F%2FlC4gY4O5XJ7WsMalTkhiI5bntl7xi72mg6CMQpgYmhlt8tZFlrsL19hNPIFoziAfvO7vI1GNo%2BHSy4ofyYskfF7C6WbQutOQDromnWZe9M%2B0kQRInl2M%2B6s4aYCooBt8w8ymxS9kah73nY8FdQJwAxEADZxv07od9UxbyolMXGviYK2sWIvKGKy21QtxhTSZa%2Bu6VyqIKyN1O5LojHjEmPXdg5%2FHotXXGT6m51vyeeiFkMkRu90Oh%2BXHUlT09czhp%2FjcO5A3wMhDcCkX3GsoFDotjbIhaAcj1ZkCTXq7O1T7gv9v7%2F1FSgEKgI%2BlPM8CW8Gm%2BYOS%2F%2BYlMfbDytArZZjpGtUOMMPS%2FFEdAMZjznYl%2FBlDfqMGKGVx0G7BwucHHkpFNZm30yMIaJx8IGOqUBe8xcSeIxW98Kc%2F23jwgbW8Po5MI2HRRpWHEHTxA%2BUuMvWukT9oNJmo5lT7OZENQpQZGwPdhvCFT3SRht%2B5W4bmnJ7jGzCoEgrIDNoWz0rt23SvjT3sSVGKWW6U5xO9N30k%2BdVIZKYnCz0vq%2BU%2Fd8br68z3gILu1R6c%2Bk8WOG3g847EZp3%2F7KrDqCme%2Fu2%2B6Khf4Lf99ezL%2B%2BPhyHaSjhEY6kGc87&X-Amz-Signature=cd063257769f10451f6d5d3ec3cff7f3bf9ebcf5f5542b4512ab43ce052fabc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
