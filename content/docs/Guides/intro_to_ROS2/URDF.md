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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFNYAZ4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMfwLliFqUmIjfUIch%2BOW1l7fj3T4bsXmXif21bBjN9AiAfxIQpYLWB0RqhvLOVejOEQgC1YeiY0UiM2eT4yCsa0CqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxv00%2BDH9SOnpL7PLKtwDYankJA0d6LvBlglPudU1sNnpF5l5X6ugoZcXEafFr1tPjRSHqw8tAv5JOu9%2BkOl5wG0aSsi5QhZYq4iZcR9FLs5go9b4BifYkDZV2ZxbZkvgXsjLqoZRBu%2BNbqHU8maG7Dti0NSF3iKt%2Btapgtd3CzZpTrU76V1wtnR5J0Kwf217b1Mnlho7%2B635P1lWNHI%2FyFbR2X1MU1FqGx5WrhqSu29RZM3Go87GnlwSDO63Gp87Aaar3ajVBsuKYMp27gfV496%2BJhDoWYVMUKiwyYQxMc8npYl6omZAbIzu5Vet43gaa2QR1tklTNKHPzETtB5jJqHN%2FGqbLHWipHFF%2FdFbobYbEPRq%2B3RK%2FJT0SS5O6X0DAGCPAY%2FMzUQg1GeSYJcPjz0mtdQbjKkoQDo6OnGd4Ph8WqHGUDxbjYFc6RcF4CpsYOgWS0EKkxraBG0sMkfu%2Bmm%2F37XHqTBqH7QMFfjz3E2W5RUlvzZO%2FV3AMrjeoqGWD1953PIZk%2Felf4C9zOWE9SaQVpizGvBr%2F6f26NjuvPhA0IFSHEsIPQFt%2FdGvSI%2B9B1JP%2BeDisinOOBdlCz%2BAnd3oW4WyHyB3zvjaQuuoMQ1nVZ%2FAsrAitwjTBXFRxlWEmmxIJ735eG%2BjeEow2bLhwQY6pgGDO4Yfa%2BsTfkx53JJ6UualtsYDBXKTotGyd%2BvVsh%2FNCJB2rT8vj6gjrX2VCF3XE4G7gDL9upAwDnKcLS8uUUAB3cPypmVNDIIMlgfPD8XQ8D4qE%2FX0NAnkZj28TnGFwATyENk9hKFB%2B4%2FrfIYJUBfAleOo%2BQjjfYn2oH977iGH3KjvTlBSdc9eEbMYxpMCOzOdUxuB0xotv32xL8QORsgIqZhiVJV5&X-Amz-Signature=6cefb074ec6f3b937cbeb9c3ef4dd18317afc58239908b6fd181c66808414e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFNYAZ4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMfwLliFqUmIjfUIch%2BOW1l7fj3T4bsXmXif21bBjN9AiAfxIQpYLWB0RqhvLOVejOEQgC1YeiY0UiM2eT4yCsa0CqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxv00%2BDH9SOnpL7PLKtwDYankJA0d6LvBlglPudU1sNnpF5l5X6ugoZcXEafFr1tPjRSHqw8tAv5JOu9%2BkOl5wG0aSsi5QhZYq4iZcR9FLs5go9b4BifYkDZV2ZxbZkvgXsjLqoZRBu%2BNbqHU8maG7Dti0NSF3iKt%2Btapgtd3CzZpTrU76V1wtnR5J0Kwf217b1Mnlho7%2B635P1lWNHI%2FyFbR2X1MU1FqGx5WrhqSu29RZM3Go87GnlwSDO63Gp87Aaar3ajVBsuKYMp27gfV496%2BJhDoWYVMUKiwyYQxMc8npYl6omZAbIzu5Vet43gaa2QR1tklTNKHPzETtB5jJqHN%2FGqbLHWipHFF%2FdFbobYbEPRq%2B3RK%2FJT0SS5O6X0DAGCPAY%2FMzUQg1GeSYJcPjz0mtdQbjKkoQDo6OnGd4Ph8WqHGUDxbjYFc6RcF4CpsYOgWS0EKkxraBG0sMkfu%2Bmm%2F37XHqTBqH7QMFfjz3E2W5RUlvzZO%2FV3AMrjeoqGWD1953PIZk%2Felf4C9zOWE9SaQVpizGvBr%2F6f26NjuvPhA0IFSHEsIPQFt%2FdGvSI%2B9B1JP%2BeDisinOOBdlCz%2BAnd3oW4WyHyB3zvjaQuuoMQ1nVZ%2FAsrAitwjTBXFRxlWEmmxIJ735eG%2BjeEow2bLhwQY6pgGDO4Yfa%2BsTfkx53JJ6UualtsYDBXKTotGyd%2BvVsh%2FNCJB2rT8vj6gjrX2VCF3XE4G7gDL9upAwDnKcLS8uUUAB3cPypmVNDIIMlgfPD8XQ8D4qE%2FX0NAnkZj28TnGFwATyENk9hKFB%2B4%2FrfIYJUBfAleOo%2BQjjfYn2oH977iGH3KjvTlBSdc9eEbMYxpMCOzOdUxuB0xotv32xL8QORsgIqZhiVJV5&X-Amz-Signature=2feba75b8308d8459eb85b50dde7dc9921f61720670155ffd6a986b0202101ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
