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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT57OQW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCIE8bU4PClh%2Fx9zw%2Ft9uINAV4A%2BaAUex%2FPIrFTlvWszwIhANZbO0%2BCESVO9hvruLDvHKJFaiEF14XUxngjSZCG67WhKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwltzApL14Y41YvkNEq3AO7yLbyPSWpAk%2FX1U%2BRemrN%2FxDQfTmEMATOp2vZdS8l%2F8nin6HxTfyM5WSoJgenAxMJHFQR4XO6zf0n%2FgC2mt97AZwFDTbb1tsA7ko7FVrqJVKg5S9zwwxSHV6lvFvmEZ8buLbL6QPdH20cxoWxhVOpIY1joH%2F9BuUqllfYL3Un6RZrp7BE9Rsufq2ja52Hil%2ByjzO2LiWmly6NV8CkuC1cIA%2FhL51tHuyZJK1mp3W%2B7sA323hfm8Cpzp2I39ge1zPHNC83ydN80dOFVXqVbe9%2BUM8Nd00Ql5Gf2rJqpXwUdvIYwPMSr2QZo3wK1szzCqXPuIYoOc7xMrdJYhde8CW4uJzNXdruZtzzY4izhRUG6sS8kRmQQsoffsW8IMsH7YvyXOl1YpXtyzFL8bT5dYkHOUwCtybKl3xRW8FTtFvwiikoBWwG%2Bdq9lXM7U1dePt1rlBY5dRw4jymumwQwwpYS62MZIxJEg8zpUl9lBH2qv%2BNeZ4c2sJvI9FoPMv7FMQjUj0P4TuLKiuvotZAg0V4iS58FV661Z9KxU30nl8RGsF4EN90ysYl70uoHixAZTJd1TMzUDL2ooF4r%2FtIMofajA0Z6mI5VGludSAX5swQrupGF70jIEJykPMSWaDCNqo7BBjqkAfBk3tuSiIDEyGVyWjXA1eQDa%2F1ecmEbEHFRpuo%2B3kRsqwaB8DtQFZY6prz%2F%2F2I2KmxI%2FdcMBYjYgSRHslPFtH8IwebZKleaUEYKsDMtFo6C%2FNRBQiE7rGSQW6WHEM1fMVtzZEXM0VVNAmP25AKDSehRoqqIr0ak2ocM0qN6hLZwZ%2FfgYb2edPQhDJ8M8aN4BN7wRCvxq0LwVe3XEX34L%2BMJyA8d&X-Amz-Signature=96b2d0e3c4d7a581af87ddd4ac963cd7c028f3cceef6335d5de51c5231a62dea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT57OQW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCIE8bU4PClh%2Fx9zw%2Ft9uINAV4A%2BaAUex%2FPIrFTlvWszwIhANZbO0%2BCESVO9hvruLDvHKJFaiEF14XUxngjSZCG67WhKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwltzApL14Y41YvkNEq3AO7yLbyPSWpAk%2FX1U%2BRemrN%2FxDQfTmEMATOp2vZdS8l%2F8nin6HxTfyM5WSoJgenAxMJHFQR4XO6zf0n%2FgC2mt97AZwFDTbb1tsA7ko7FVrqJVKg5S9zwwxSHV6lvFvmEZ8buLbL6QPdH20cxoWxhVOpIY1joH%2F9BuUqllfYL3Un6RZrp7BE9Rsufq2ja52Hil%2ByjzO2LiWmly6NV8CkuC1cIA%2FhL51tHuyZJK1mp3W%2B7sA323hfm8Cpzp2I39ge1zPHNC83ydN80dOFVXqVbe9%2BUM8Nd00Ql5Gf2rJqpXwUdvIYwPMSr2QZo3wK1szzCqXPuIYoOc7xMrdJYhde8CW4uJzNXdruZtzzY4izhRUG6sS8kRmQQsoffsW8IMsH7YvyXOl1YpXtyzFL8bT5dYkHOUwCtybKl3xRW8FTtFvwiikoBWwG%2Bdq9lXM7U1dePt1rlBY5dRw4jymumwQwwpYS62MZIxJEg8zpUl9lBH2qv%2BNeZ4c2sJvI9FoPMv7FMQjUj0P4TuLKiuvotZAg0V4iS58FV661Z9KxU30nl8RGsF4EN90ysYl70uoHixAZTJd1TMzUDL2ooF4r%2FtIMofajA0Z6mI5VGludSAX5swQrupGF70jIEJykPMSWaDCNqo7BBjqkAfBk3tuSiIDEyGVyWjXA1eQDa%2F1ecmEbEHFRpuo%2B3kRsqwaB8DtQFZY6prz%2F%2F2I2KmxI%2FdcMBYjYgSRHslPFtH8IwebZKleaUEYKsDMtFo6C%2FNRBQiE7rGSQW6WHEM1fMVtzZEXM0VVNAmP25AKDSehRoqqIr0ak2ocM0qN6hLZwZ%2FfgYb2edPQhDJ8M8aN4BN7wRCvxq0LwVe3XEX34L%2BMJyA8d&X-Amz-Signature=187afe92f7f96843fa5a8d116456255dc05c6fd0883b932fb79041703b7aee1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
