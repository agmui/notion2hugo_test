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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROA5JNY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFViaXdj%2BJRlCo%2BGCIKvOKmgV%2FwFZGDThA0O9ZgLRJ%2BNAiAgzfqDIn8Amw%2FzOEzR2MuzXwTta8tU9ureIprqIoUzVyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1nGS2JhkbOFHhNjKtwDSyIljAZvjYY1WaEUe3n8oqZ8ag%2BxdMWHAJc67Vi5DUwDPzPTbuIPW2qs%2BkS5zUso0dlBaNY9dxPEsn7bNeAaDx0%2FqTezUTEI4aLmbqb4NivSQqoeNkowL%2F571P1GjSJMbPd0MgYOFEIi9CoamuzA%2Bx4RzSpTsErKWQOo9VQmB2duwf7q%2F2rJ5rqaz6zi6XJ0bmOFTna5Dxo5v1dbCesC4IUkhxyXiRGR%2Bf5lrQ6CxNHP%2BF138szLUlnjpli0Ows2uLqUNTkQLXJU11VhUv6wlVJHEwbaBorzJ3Hdt7Cn%2BgwEvnCFPwuu5uD3XOq9dT4NPbX6ydc4wg2G%2F%2FVXV8tMKZkn%2B7JcQvoJax%2Ffa0GjGEUAB6%2F1GCiOOggaaukCkAwhc3%2F34UTbwz6p0E4KwbTHLcunC%2FgbwkyyWe8CKB73hXaxNPjPZG7es5SWnLsRm57BEEV0xxjewMaNg8lPltmcZT%2FjVz1aaB%2B1VXypyxbuUCCcjnNsUG1XC0PUywdNVUVuUMIHp%2FG803bmzJFoQ6bduZsIwvdrXDlV8fuk6f9g12HqMH%2B0Njq3sO%2B4r0VU0xKyeDYvGjjUGXCCzYliR%2Fld8OYPoBbMMg0%2FgT4J6qFXVsIZo3RvblrB5RPwUdcwnJHnvAY6pgFqDaz39HR6KYtdTikNfIU%2FAfh4hc8UH%2Bq53%2FnyFWYF7kzFiIjs8mnL9%2FaGgpfoY33s876rxD%2B8BKqs3kZjwimwOqVPok97%2FBzGWQK%2FZ0n98I5nKrov21imIW1IT3nrkcpsZl8ARBpLykuCnFZk3h0Cpy5JUT593Jz1kOuBDL%2FVwzI%2FAboFNkK%2F8BIuVjhkHQrPkDyuGMhQIpl3aIyhOeql9fhvjl8k&X-Amz-Signature=3c326526a12cbba2e4b20d9391eddec2f99cd53ce3cf58037906300b55116924&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROA5JNY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFViaXdj%2BJRlCo%2BGCIKvOKmgV%2FwFZGDThA0O9ZgLRJ%2BNAiAgzfqDIn8Amw%2FzOEzR2MuzXwTta8tU9ureIprqIoUzVyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1nGS2JhkbOFHhNjKtwDSyIljAZvjYY1WaEUe3n8oqZ8ag%2BxdMWHAJc67Vi5DUwDPzPTbuIPW2qs%2BkS5zUso0dlBaNY9dxPEsn7bNeAaDx0%2FqTezUTEI4aLmbqb4NivSQqoeNkowL%2F571P1GjSJMbPd0MgYOFEIi9CoamuzA%2Bx4RzSpTsErKWQOo9VQmB2duwf7q%2F2rJ5rqaz6zi6XJ0bmOFTna5Dxo5v1dbCesC4IUkhxyXiRGR%2Bf5lrQ6CxNHP%2BF138szLUlnjpli0Ows2uLqUNTkQLXJU11VhUv6wlVJHEwbaBorzJ3Hdt7Cn%2BgwEvnCFPwuu5uD3XOq9dT4NPbX6ydc4wg2G%2F%2FVXV8tMKZkn%2B7JcQvoJax%2Ffa0GjGEUAB6%2F1GCiOOggaaukCkAwhc3%2F34UTbwz6p0E4KwbTHLcunC%2FgbwkyyWe8CKB73hXaxNPjPZG7es5SWnLsRm57BEEV0xxjewMaNg8lPltmcZT%2FjVz1aaB%2B1VXypyxbuUCCcjnNsUG1XC0PUywdNVUVuUMIHp%2FG803bmzJFoQ6bduZsIwvdrXDlV8fuk6f9g12HqMH%2B0Njq3sO%2B4r0VU0xKyeDYvGjjUGXCCzYliR%2Fld8OYPoBbMMg0%2FgT4J6qFXVsIZo3RvblrB5RPwUdcwnJHnvAY6pgFqDaz39HR6KYtdTikNfIU%2FAfh4hc8UH%2Bq53%2FnyFWYF7kzFiIjs8mnL9%2FaGgpfoY33s876rxD%2B8BKqs3kZjwimwOqVPok97%2FBzGWQK%2FZ0n98I5nKrov21imIW1IT3nrkcpsZl8ARBpLykuCnFZk3h0Cpy5JUT593Jz1kOuBDL%2FVwzI%2FAboFNkK%2F8BIuVjhkHQrPkDyuGMhQIpl3aIyhOeql9fhvjl8k&X-Amz-Signature=362b6a17c73fea4f7aadc6fb53aa5557c80e746544f5f11fd47bc938c1c887f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
