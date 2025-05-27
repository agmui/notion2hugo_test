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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUC6OA2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmaBm23gSOG7B%2FOd85FQ4qcMAfuHR8U6PHHxowkmmqEAiBxCzyNntm58WKaMvGuSO08Ed8bX%2BhbdfQP3fXov24IBCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM41mrK%2BOk9iAm67TxKtwDmjt5MKC9J2qdKttK98Qomx6D0oTDDQlWYSx0sUlJoiMI61wBHcNxC%2FbZaTgS3F3%2BGzcphSxJsk8XAvPU9B32QNHQuPJgthaTgDMBE6hnjtsm1QCg4h0ZU71ZHiyWoVjv0N5FV3mOGhqTWM%2BRlPSamrCVZJ7LApu7x4lUG4g9RzkvSIvUPBxEqBQDb%2F0243ZQdnL8aEZjrfoMoj%2FKlQgWulKt8onp4vKue93NrTel%2ByEL7IYRSAIbQtT6JJDIs%2Frh0pRLBe%2BoXnZ4RiL8AeXtsWpEy6xMlxEiaENmBzlnwPCEXg02JjaK8z9iX28FThiUYLfRcLIpoX7wf9xxwwBPp%2BuGeHvntzDDebqb83CE%2BVwSEbxEhCM7J9urUSdLi0Q%2B3Uzlr0HoifEIkt8os5UMZkkj2DsvO3cex6M6vz4ZZ519X3w1jhPcU5ZvOeburaVw4UGZPp3cTsbZAB9xw4G46bxCTAosNfVoZcTff4l8UbUq7U5dx3Md9zf%2FtiNaomwbHBCpWxew5IhAsYOMFxguqtZxhoziKBWuqq2Rw9KTbNldesP0YYEUZ8OC4GE8xcepo8cXWFIHo52d5JEFEQ8SA%2F58hcBko1VPzOja28p4skv8zRMr4CrYcsPhcDYwtP3WwQY6pgHtHuX6JhPS11DwuSscCqTqIJPi1%2BbStyDOr63y54VOXT%2FRoXeg%2BdIzcDPh7Lx0k3x4FFzcdGbkDGvuc4I7rvzHZT3aKpffqAKu7y21FyDKioRjgMH6YKOpbAacex0aagiBmohuhuZwF3vwXg%2BK7HwhW%2Ba80UuSSwf03iMiBgdo9sRU0R68sIaNVXZA10L9NYKWRxDoFbjCMg9zZWhx2SydwVizAaa6&X-Amz-Signature=46f7931b7a0f1e10a764a5eb584d06ed4700f29d0f6c90ad4651dbc8c878d38d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUC6OA2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmaBm23gSOG7B%2FOd85FQ4qcMAfuHR8U6PHHxowkmmqEAiBxCzyNntm58WKaMvGuSO08Ed8bX%2BhbdfQP3fXov24IBCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM41mrK%2BOk9iAm67TxKtwDmjt5MKC9J2qdKttK98Qomx6D0oTDDQlWYSx0sUlJoiMI61wBHcNxC%2FbZaTgS3F3%2BGzcphSxJsk8XAvPU9B32QNHQuPJgthaTgDMBE6hnjtsm1QCg4h0ZU71ZHiyWoVjv0N5FV3mOGhqTWM%2BRlPSamrCVZJ7LApu7x4lUG4g9RzkvSIvUPBxEqBQDb%2F0243ZQdnL8aEZjrfoMoj%2FKlQgWulKt8onp4vKue93NrTel%2ByEL7IYRSAIbQtT6JJDIs%2Frh0pRLBe%2BoXnZ4RiL8AeXtsWpEy6xMlxEiaENmBzlnwPCEXg02JjaK8z9iX28FThiUYLfRcLIpoX7wf9xxwwBPp%2BuGeHvntzDDebqb83CE%2BVwSEbxEhCM7J9urUSdLi0Q%2B3Uzlr0HoifEIkt8os5UMZkkj2DsvO3cex6M6vz4ZZ519X3w1jhPcU5ZvOeburaVw4UGZPp3cTsbZAB9xw4G46bxCTAosNfVoZcTff4l8UbUq7U5dx3Md9zf%2FtiNaomwbHBCpWxew5IhAsYOMFxguqtZxhoziKBWuqq2Rw9KTbNldesP0YYEUZ8OC4GE8xcepo8cXWFIHo52d5JEFEQ8SA%2F58hcBko1VPzOja28p4skv8zRMr4CrYcsPhcDYwtP3WwQY6pgHtHuX6JhPS11DwuSscCqTqIJPi1%2BbStyDOr63y54VOXT%2FRoXeg%2BdIzcDPh7Lx0k3x4FFzcdGbkDGvuc4I7rvzHZT3aKpffqAKu7y21FyDKioRjgMH6YKOpbAacex0aagiBmohuhuZwF3vwXg%2BK7HwhW%2Ba80UuSSwf03iMiBgdo9sRU0R68sIaNVXZA10L9NYKWRxDoFbjCMg9zZWhx2SydwVizAaa6&X-Amz-Signature=b5fab2cddc5b447729214ba2e417b14e663b202059eff89f4a259f15ab1d4f97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
