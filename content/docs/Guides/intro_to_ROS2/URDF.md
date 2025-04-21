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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EQYN7A%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDDwtt21VHaTolz4DIwSxPp8O5szvYWLsiMiPnlKWGKdgIhAIrtJnSbGfCnSJTfyPgDI70M1u6xPFswEX5txSWukLqsKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtxhHo0AmqWinnQ3kq3AOiEVqF7WhLaeDVE7G%2FNb9z9jpub2QaVd8SDXzLbAPWUuatcPM3H2BhVF3QRpHWto8NUOTB30XWOaTTa%2FyljtBIFM6ZvNyBrL0jighVymAAA%2B9Z4IVOGUZnJQfCa1Vs6EVDazZXNr5%2Bt8GhpIjrGkhEWqmBse%2FE7rhiQxJkVI5F1AQ1LjHoNQUaH71Nt6MgncyAjUSrOS8lac8fXKm36EDVGLzAHLzXA6vOn6RX7ISwWbUS42hqewSXzh%2Fbeoj%2Bh9u8DohnTR8Qjd9SiEB%2B8lqJIc9Px2K2ZuuoLjoRa54oCk9MFK9qTfAhIcrE0HOSWzyUFXzILqzn8a07k9MsGVmVjcuExDTb724zN1TOpc3OdW1n2VLGSnv3hXSggryiF16ib9tZe4TFNa%2FUAq4s2QlHbh7isEqx%2F15KjPFhPFXrdEZ9tjxSk0kImr%2FTJr1PhTsN7tdf6P%2F%2FhL%2FnZbQqlF%2FuFSeC7c8J1hM2%2FX51MaAtklsWqw8bZ6knpERoAoKG28zIhRldhBYMdA9JySRdRrkdzYyIeT%2F6VYHgHoJMs7hBtwZxMcwShPbUlafpo1y7dscIFd9fRnipWg33Z5SrJqNhGtMk4ecGZtUYHKqhIV7OFHH7SnY7NtMbqY7oejDEoZnABjqkAZ848DqhQdCVESkp%2BwA%2FvYsg3jCkY5LmDw%2FUj716kbVg%2Bpg4wM7JTi%2F0ZhJ82e%2ByhCZLlAQYcAPZ5P1EaF%2FrTyo6qATmIgEhR9oo66%2FXKW18sLd8q2NW95bOFhE3MPKiBksdwO9nK%2FI5r1HTGDCG4q2r73my2u0uEqwIo2RFk4v25UoBGO%2F9WzYQ4Vvb1CQ7LMxILNlRqxogytwDErgithaunNsx&X-Amz-Signature=227debf5398831566177aed7cf5e33e75c2148e27eb1dae884f723f239f9224e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6EQYN7A%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDDwtt21VHaTolz4DIwSxPp8O5szvYWLsiMiPnlKWGKdgIhAIrtJnSbGfCnSJTfyPgDI70M1u6xPFswEX5txSWukLqsKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtxhHo0AmqWinnQ3kq3AOiEVqF7WhLaeDVE7G%2FNb9z9jpub2QaVd8SDXzLbAPWUuatcPM3H2BhVF3QRpHWto8NUOTB30XWOaTTa%2FyljtBIFM6ZvNyBrL0jighVymAAA%2B9Z4IVOGUZnJQfCa1Vs6EVDazZXNr5%2Bt8GhpIjrGkhEWqmBse%2FE7rhiQxJkVI5F1AQ1LjHoNQUaH71Nt6MgncyAjUSrOS8lac8fXKm36EDVGLzAHLzXA6vOn6RX7ISwWbUS42hqewSXzh%2Fbeoj%2Bh9u8DohnTR8Qjd9SiEB%2B8lqJIc9Px2K2ZuuoLjoRa54oCk9MFK9qTfAhIcrE0HOSWzyUFXzILqzn8a07k9MsGVmVjcuExDTb724zN1TOpc3OdW1n2VLGSnv3hXSggryiF16ib9tZe4TFNa%2FUAq4s2QlHbh7isEqx%2F15KjPFhPFXrdEZ9tjxSk0kImr%2FTJr1PhTsN7tdf6P%2F%2FhL%2FnZbQqlF%2FuFSeC7c8J1hM2%2FX51MaAtklsWqw8bZ6knpERoAoKG28zIhRldhBYMdA9JySRdRrkdzYyIeT%2F6VYHgHoJMs7hBtwZxMcwShPbUlafpo1y7dscIFd9fRnipWg33Z5SrJqNhGtMk4ecGZtUYHKqhIV7OFHH7SnY7NtMbqY7oejDEoZnABjqkAZ848DqhQdCVESkp%2BwA%2FvYsg3jCkY5LmDw%2FUj716kbVg%2Bpg4wM7JTi%2F0ZhJ82e%2ByhCZLlAQYcAPZ5P1EaF%2FrTyo6qATmIgEhR9oo66%2FXKW18sLd8q2NW95bOFhE3MPKiBksdwO9nK%2FI5r1HTGDCG4q2r73my2u0uEqwIo2RFk4v25UoBGO%2F9WzYQ4Vvb1CQ7LMxILNlRqxogytwDErgithaunNsx&X-Amz-Signature=968fd5ed4d9833a6eee52cecda0ae9a2e1841d855aba0f278099f81378552808&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
