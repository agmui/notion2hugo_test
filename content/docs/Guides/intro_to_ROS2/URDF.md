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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCSY4KR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBQPPXW13u%2FyqCIITmrSWK8NyUBNEk3or8f1x9aIueoJAiBYmIjcWN2R6mVBXFpGdBcGO9kWuhiVAfa6idg6ixqfMCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVYhYNLlH7LrEPUHjKtwDHdUzkp0n%2BAJxO2E4LTpo1s9w%2B0WreK66MWcYaCGlchwBl5V3J%2BqHScjaChCSeSAH9jRpJMh4ANxY%2B2XUNOQV%2Fhezmk1Qn7%2B2j7OHnhJJgCKDFxMyOu7X6mo8E0ZlIecPuXEjNwClU2gtXWMEBk0H2FqfKGYOZ%2FQ0S9WXv4Ucj1qCYIvwFFySSphvPEV73ovMCyEiZ10lYgb9na%2B1XpiMtTn9ZyR%2Bx%2BuPMlORygrzE3nykpdIRxC%2BsWyhxcQY%2BLOOA9LPHCbbMxJcubrb75Rtz8P%2FjHJ%2F1%2Fus%2F1QkMAiGXK228dNAatLR0tbqV5WCPKwONQ%2B2D2z9Qfdw9GSsjfoGOglVZML9yTqAwQJKvpiVqwCnA06NWeJ5As802KE8N1SPfSz9spbWaHumgeI88%2BWFb1WGzMM%2BUMyLoLDuyXGblQXv36FDkBuYsJvx09icc5z8i3tXFf%2FmdYcbANsUHbdYAnkP3Znq%2BlVbkipKsMXKPNkS6tD2SzPVIm2lrKHqxpaFmBjopS23Yt7jUtUNE6XemgOyrrzKZEd47bWAGv9m1MzVuMvnvyihrq24BxZu2J5%2FkhwglyghCwoCn0JqH0xgH8w%2Fn0zIta8br2E3OC4LuRZlsLM%2FwgnD3qrRUvww3YzQvQY6pgFnIg0uL6k3LSSdVHZCZbdwf7VcppbM%2FSkJvozcfmmSTnCoEYGlX4hUThx4X7t5wai4JzguPp087wjIqBp8FsPPnZXe1oduAVHuSSqByhaaqSHahaVb6XzP9H2AI6K2D5bjl3KCcTB%2F9xOcQl4eH9QXBxAQnbNoF9Ac4UJI1yLVEc89PQyM7MucM5HumoQ88dOPFhXswL21nOHZjEX2vNyt5e2HoLpl&X-Amz-Signature=e47a1cd928e17195b59166803f4199a388b5cdf9086db5b88aa47032c9f56a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUCSY4KR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBQPPXW13u%2FyqCIITmrSWK8NyUBNEk3or8f1x9aIueoJAiBYmIjcWN2R6mVBXFpGdBcGO9kWuhiVAfa6idg6ixqfMCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVYhYNLlH7LrEPUHjKtwDHdUzkp0n%2BAJxO2E4LTpo1s9w%2B0WreK66MWcYaCGlchwBl5V3J%2BqHScjaChCSeSAH9jRpJMh4ANxY%2B2XUNOQV%2Fhezmk1Qn7%2B2j7OHnhJJgCKDFxMyOu7X6mo8E0ZlIecPuXEjNwClU2gtXWMEBk0H2FqfKGYOZ%2FQ0S9WXv4Ucj1qCYIvwFFySSphvPEV73ovMCyEiZ10lYgb9na%2B1XpiMtTn9ZyR%2Bx%2BuPMlORygrzE3nykpdIRxC%2BsWyhxcQY%2BLOOA9LPHCbbMxJcubrb75Rtz8P%2FjHJ%2F1%2Fus%2F1QkMAiGXK228dNAatLR0tbqV5WCPKwONQ%2B2D2z9Qfdw9GSsjfoGOglVZML9yTqAwQJKvpiVqwCnA06NWeJ5As802KE8N1SPfSz9spbWaHumgeI88%2BWFb1WGzMM%2BUMyLoLDuyXGblQXv36FDkBuYsJvx09icc5z8i3tXFf%2FmdYcbANsUHbdYAnkP3Znq%2BlVbkipKsMXKPNkS6tD2SzPVIm2lrKHqxpaFmBjopS23Yt7jUtUNE6XemgOyrrzKZEd47bWAGv9m1MzVuMvnvyihrq24BxZu2J5%2FkhwglyghCwoCn0JqH0xgH8w%2Fn0zIta8br2E3OC4LuRZlsLM%2FwgnD3qrRUvww3YzQvQY6pgFnIg0uL6k3LSSdVHZCZbdwf7VcppbM%2FSkJvozcfmmSTnCoEYGlX4hUThx4X7t5wai4JzguPp087wjIqBp8FsPPnZXe1oduAVHuSSqByhaaqSHahaVb6XzP9H2AI6K2D5bjl3KCcTB%2F9xOcQl4eH9QXBxAQnbNoF9Ac4UJI1yLVEc89PQyM7MucM5HumoQ88dOPFhXswL21nOHZjEX2vNyt5e2HoLpl&X-Amz-Signature=819bd7abd28d61e990ef2f490132fb9ded4978f90e302e1afb16bf28977a7b76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
