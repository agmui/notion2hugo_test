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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB26ZPY4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCS8VhPfiH0ogArwM4cbcHAFWL5BnsqWxZSVtMlXCmXogIgUT9OkkTMhvgiDiqi%2FdseeOJr3SEeriY7lzd%2F1PGF%2F0Qq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGvaOSAxo9XNt28vpyrcA9bVxC2c0iPKRQ2W1mxmfXImtQiD1i%2FX27ISyL9jmlKt4b%2BupCXGLcSR%2B%2BkMwfhzJt38iSxZMeq8YoI5sFRB%2BtgLccDBg8lIYgR8UWr%2B5O2VOwZ0PeYquBUDX3a%2F%2BEeBfNEw5KphokYgizWko1HHy6tfj1DWs%2BR8Ge%2FLgulZtwtNEPVxwnfZXrS1J3u8zPn4M9Eea8ZXNpZlO2cy5yYjals8Cp8bWiL8fCjENOz4EhR%2FCJGqOoKTOYDpZurJWtqc6AX96shO2wwYiHILC%2F9HnX0ODGa2dGZ9AZIUe2EwH2qVBeuYJ4xkc8YGcdv6kbYaUgi02FTbN4YQ2n2fCD%2FtCGGwTH0npsImfHjOiMv9VU0eQSW%2Fo2XiUp1Qz0fWXD1X%2BbFkr3fsSeua1F8M0BoR1Zd1%2BS%2BjFv27XQ2WgUZAaidsPu%2B5DyFdMDeIhFcD1r%2FvH059ygJBK0hO4dem6OFeBdzThT154hEUs0YT5E0yDkZjxb3JU4H2REVuH5a3PZe4LZwSQBIGvgkD9ndWy3lol0dCk6%2F5GI1U2FZpS%2BYP%2BCUBIYbOFvCU04AhQ8KfHbmHp7QrILXJzVkQQu%2BKCUBrhn%2FCiMSVvhS0iVIJg%2FCeFoGu7pePMYKwT8QMe0ivMLvZ2MMGOqUBuU2aOjKrt4PD11U8d7iqyY3WS954tUP%2FRcYNL6%2Fm3yHqT07UvbdhwaoM%2FSov22C4LMADm75ZgZONlTgCYleTeAdZhEvKZptgBVEcCaoZ8llMjY8cnZ45pCs5tkDQ%2Ftd5nBmwBCz5J%2Foiu2PWvYqvEGjpYLQKagj8MitPoQhi1z8R2kbRu0%2FuM7DMWeNir%2FVlJwwwD2vVI5ziXMez8skD%2BjryF9Ur&X-Amz-Signature=b7e920677e5d4e8685cddc0ab5ee86354399fdfbd520a7beeacbb8b8cc86db7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB26ZPY4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCS8VhPfiH0ogArwM4cbcHAFWL5BnsqWxZSVtMlXCmXogIgUT9OkkTMhvgiDiqi%2FdseeOJr3SEeriY7lzd%2F1PGF%2F0Qq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGvaOSAxo9XNt28vpyrcA9bVxC2c0iPKRQ2W1mxmfXImtQiD1i%2FX27ISyL9jmlKt4b%2BupCXGLcSR%2B%2BkMwfhzJt38iSxZMeq8YoI5sFRB%2BtgLccDBg8lIYgR8UWr%2B5O2VOwZ0PeYquBUDX3a%2F%2BEeBfNEw5KphokYgizWko1HHy6tfj1DWs%2BR8Ge%2FLgulZtwtNEPVxwnfZXrS1J3u8zPn4M9Eea8ZXNpZlO2cy5yYjals8Cp8bWiL8fCjENOz4EhR%2FCJGqOoKTOYDpZurJWtqc6AX96shO2wwYiHILC%2F9HnX0ODGa2dGZ9AZIUe2EwH2qVBeuYJ4xkc8YGcdv6kbYaUgi02FTbN4YQ2n2fCD%2FtCGGwTH0npsImfHjOiMv9VU0eQSW%2Fo2XiUp1Qz0fWXD1X%2BbFkr3fsSeua1F8M0BoR1Zd1%2BS%2BjFv27XQ2WgUZAaidsPu%2B5DyFdMDeIhFcD1r%2FvH059ygJBK0hO4dem6OFeBdzThT154hEUs0YT5E0yDkZjxb3JU4H2REVuH5a3PZe4LZwSQBIGvgkD9ndWy3lol0dCk6%2F5GI1U2FZpS%2BYP%2BCUBIYbOFvCU04AhQ8KfHbmHp7QrILXJzVkQQu%2BKCUBrhn%2FCiMSVvhS0iVIJg%2FCeFoGu7pePMYKwT8QMe0ivMLvZ2MMGOqUBuU2aOjKrt4PD11U8d7iqyY3WS954tUP%2FRcYNL6%2Fm3yHqT07UvbdhwaoM%2FSov22C4LMADm75ZgZONlTgCYleTeAdZhEvKZptgBVEcCaoZ8llMjY8cnZ45pCs5tkDQ%2Ftd5nBmwBCz5J%2Foiu2PWvYqvEGjpYLQKagj8MitPoQhi1z8R2kbRu0%2FuM7DMWeNir%2FVlJwwwD2vVI5ziXMez8skD%2BjryF9Ur&X-Amz-Signature=d3bf5c192766527f7806d715f279e780efec75c2d9d02dda1691e82715b8e7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
