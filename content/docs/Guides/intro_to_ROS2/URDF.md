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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKDDU7W%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIAhXk6qqaOsr2ivMGwIggrnXACFeKR%2BX%2FxSI0vbQ9UmcAiBYSXjoc1o2ZuGyrFKG7yIkCFyJYwWs9VEoFDxGDg6ffyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3JAlPFjovfLaUX%2BKtwD22wMVvLWSj9d%2B%2FJAlngFrieMN6sC0IIa3mNb9gh7Y3lfYUEeianTRcocV1dCEoY31X%2FGQEBqsK6xoqvGcKpYoio1NAuSAZan29K5ZpjwEIE7vDDEe34wbhwr7%2FBzNewwVTw2Nqrge81wFkZJa83nwZ1rCx59ssqynbFK6x%2BB2f2dLT2EJvnF2QQL754vq5hUvQxYj%2Fq1mW59K4YYFC%2FQ5B0hfGCWwkkUgYMCoXHSt8jrEjd24gQwpSXm5JNvE6H3O9yHBEqZRmoKmoUwthD5noCZWvkxMRLI1ssAqCI%2B8oygBZpT0LKPAcr3HUMBC%2Balcz7QcQVm9sjAQjIwt5yss1JFjGMTjNiehR9ZdX%2FoLiTXB7lZ7fF%2BVoSl0hqCOb7aw33%2Fj5nbIJ2vK73QGHhdbv1DfT7lPPEW8NYjNcNZQiI2Fvkx0hbre01UBrAXTGMvx9mYEj%2BuJs676UohfgKsx89zexZ8gTiLtRACeRB3s9kxbZyW3eHHD5rysQQ560Wbbq6UY9aboaUEYfY8yZSJsnWQe4NYOMPYJXcPtOQjAMHuWkhCEVjAXkN9vFo0Qh46Fvx%2B3JRcXrWs0LUZqi%2Fz1HXghGhw7OvNfG39%2BiintRPc2x0oJbcBjbhc7VUwh4WFwQY6pgF%2FlOhnkvXGmJ2x4e70UwBtlww42lgLrBQoI8h0ZNTp3jxcF2V8xtwRiCykpjypTmizIHrCO6axocgz3em8fMMmKdXRg%2FqY6FwNogqKLpkKkn%2Fwb%2BAnLpujXknSrAYKqONDOUE0T4VeD5PY0efm4%2FnvMhyOCXqUxpWZhDI%2BK22g8bR4VChDL2%2Bdk9Fz6z0vIbvcJ%2FnKZHBYWOHBUdGdF5K1SEdd4d51&X-Amz-Signature=1784e3ce9d8da0f87b662397d0efa5bdb4b401b8032c20ec390ba5ad77bd5a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOKDDU7W%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIAhXk6qqaOsr2ivMGwIggrnXACFeKR%2BX%2FxSI0vbQ9UmcAiBYSXjoc1o2ZuGyrFKG7yIkCFyJYwWs9VEoFDxGDg6ffyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3JAlPFjovfLaUX%2BKtwD22wMVvLWSj9d%2B%2FJAlngFrieMN6sC0IIa3mNb9gh7Y3lfYUEeianTRcocV1dCEoY31X%2FGQEBqsK6xoqvGcKpYoio1NAuSAZan29K5ZpjwEIE7vDDEe34wbhwr7%2FBzNewwVTw2Nqrge81wFkZJa83nwZ1rCx59ssqynbFK6x%2BB2f2dLT2EJvnF2QQL754vq5hUvQxYj%2Fq1mW59K4YYFC%2FQ5B0hfGCWwkkUgYMCoXHSt8jrEjd24gQwpSXm5JNvE6H3O9yHBEqZRmoKmoUwthD5noCZWvkxMRLI1ssAqCI%2B8oygBZpT0LKPAcr3HUMBC%2Balcz7QcQVm9sjAQjIwt5yss1JFjGMTjNiehR9ZdX%2FoLiTXB7lZ7fF%2BVoSl0hqCOb7aw33%2Fj5nbIJ2vK73QGHhdbv1DfT7lPPEW8NYjNcNZQiI2Fvkx0hbre01UBrAXTGMvx9mYEj%2BuJs676UohfgKsx89zexZ8gTiLtRACeRB3s9kxbZyW3eHHD5rysQQ560Wbbq6UY9aboaUEYfY8yZSJsnWQe4NYOMPYJXcPtOQjAMHuWkhCEVjAXkN9vFo0Qh46Fvx%2B3JRcXrWs0LUZqi%2Fz1HXghGhw7OvNfG39%2BiintRPc2x0oJbcBjbhc7VUwh4WFwQY6pgF%2FlOhnkvXGmJ2x4e70UwBtlww42lgLrBQoI8h0ZNTp3jxcF2V8xtwRiCykpjypTmizIHrCO6axocgz3em8fMMmKdXRg%2FqY6FwNogqKLpkKkn%2Fwb%2BAnLpujXknSrAYKqONDOUE0T4VeD5PY0efm4%2FnvMhyOCXqUxpWZhDI%2BK22g8bR4VChDL2%2Bdk9Fz6z0vIbvcJ%2FnKZHBYWOHBUdGdF5K1SEdd4d51&X-Amz-Signature=3e9bf26b3ce6245e917fd845725fe1cefb33cbe7c90b2d9e39ae97b8677021b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
