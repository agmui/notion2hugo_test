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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463IVEEI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDbUYSYm05qHzwSo%2BuvRuTpdLr33eP8ppvD4qpyimmQIhANmyLBaUvA4ojCRH%2B42rP5W77aXIYIqhwW7fxDhXAw6yKv8DCHMQABoMNjM3NDIzMTgzODA1IgxeGbgZhL354BXlN4kq3APtZlFvXQbfGbytTho54i3xQ9srNIlZnmL4Mf6yYd8%2B8UPwuIZKHAi4jXA5aALnkKmETcAzFndGlZA2MHgjhlssYa6ojssHYyyhuJMjzXsDcaYbsSGWcssdvZ5gT1bPEWnFC2x4BdZ3ZvmwAJCBkZJ%2FRAb386OsLfd2K%2F4mRnoCw6IBrAnfSnGDjbXT8vyPhrfmIYU%2F8WQMIOUpB98RooYh57IzUMDoPUEaWFwIxlNJxcBiPxRXMejaC8huOkJHzN8Pj0zE0FyP4bRmni1RvJZgP5h%2BDZ5MYX2ePdnRMzfhmC9uORmigXIvYCGKlW2wGzuZqAvZQaMkZ00J6pmosKXEvFsWnNGByxS2mpiU2bYbPxiYC6KbHJPG2S86AuB5wOXIwwA03RB7lCPHLQwkFeW4RG0CBuy41Ao36zf2oydjo%2Fzo2CHvnC8T0bR0PasiQKSyvEUy1RZyv%2FQvZpALTByiSapNWUXvvsuiaRDEoEGEt8t6w92Uz8WT9qDcjhcWP1IlXE0977GEIR7rlpLiB4LPycaFaHxbsOz2%2FtImzVbOd7b6CJ1B%2FhWk8%2FRK10iU5pYPIlCR3GK%2BMW0%2FBWL0ljSefcSHcnDHd3TPOJB%2BMcvT33uffS5llPA86UsXQDDB7sTCBjqkATiBUPHFGwr2gPLMM7CGkEImCn9hdkSQbECu0eNpEoqpoC5WYBC08NHmM6oSUeNg97jYStKjpZMy0yJocTR7mwkym7F8iJO%2BCmR7XgimYkM3XVb9GWu5sTNROlGQhQWtpXIxKUU6aIJH49trDqrnX9e6Vnq26WwF8sUWQcRnD032vgHVZK%2F1I06A4dxaYATbdckRQPDYdjza6sdKxp7KTOrZsCS5&X-Amz-Signature=21052bc77aa353d09ff13f6c0e109003144eb991c15cfdb21f9b664b3554c9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463IVEEI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDbUYSYm05qHzwSo%2BuvRuTpdLr33eP8ppvD4qpyimmQIhANmyLBaUvA4ojCRH%2B42rP5W77aXIYIqhwW7fxDhXAw6yKv8DCHMQABoMNjM3NDIzMTgzODA1IgxeGbgZhL354BXlN4kq3APtZlFvXQbfGbytTho54i3xQ9srNIlZnmL4Mf6yYd8%2B8UPwuIZKHAi4jXA5aALnkKmETcAzFndGlZA2MHgjhlssYa6ojssHYyyhuJMjzXsDcaYbsSGWcssdvZ5gT1bPEWnFC2x4BdZ3ZvmwAJCBkZJ%2FRAb386OsLfd2K%2F4mRnoCw6IBrAnfSnGDjbXT8vyPhrfmIYU%2F8WQMIOUpB98RooYh57IzUMDoPUEaWFwIxlNJxcBiPxRXMejaC8huOkJHzN8Pj0zE0FyP4bRmni1RvJZgP5h%2BDZ5MYX2ePdnRMzfhmC9uORmigXIvYCGKlW2wGzuZqAvZQaMkZ00J6pmosKXEvFsWnNGByxS2mpiU2bYbPxiYC6KbHJPG2S86AuB5wOXIwwA03RB7lCPHLQwkFeW4RG0CBuy41Ao36zf2oydjo%2Fzo2CHvnC8T0bR0PasiQKSyvEUy1RZyv%2FQvZpALTByiSapNWUXvvsuiaRDEoEGEt8t6w92Uz8WT9qDcjhcWP1IlXE0977GEIR7rlpLiB4LPycaFaHxbsOz2%2FtImzVbOd7b6CJ1B%2FhWk8%2FRK10iU5pYPIlCR3GK%2BMW0%2FBWL0ljSefcSHcnDHd3TPOJB%2BMcvT33uffS5llPA86UsXQDDB7sTCBjqkATiBUPHFGwr2gPLMM7CGkEImCn9hdkSQbECu0eNpEoqpoC5WYBC08NHmM6oSUeNg97jYStKjpZMy0yJocTR7mwkym7F8iJO%2BCmR7XgimYkM3XVb9GWu5sTNROlGQhQWtpXIxKUU6aIJH49trDqrnX9e6Vnq26WwF8sUWQcRnD032vgHVZK%2F1I06A4dxaYATbdckRQPDYdjza6sdKxp7KTOrZsCS5&X-Amz-Signature=c14f22265b9ea6e56ea71a3e93ad26c297098bfd4ccd825f227788944f31d965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
