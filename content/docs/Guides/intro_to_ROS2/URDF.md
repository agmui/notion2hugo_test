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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3IZF2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtKIxNQidzEH9excbmGbbhcvrn1zXfM1Hxol7KTwPxSQIhANnUQCl1l6cGXCJxV1gVl7EJufMg6JdhviVfx7c5hZsxKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW4tQFbCy%2BVvArDbIq3AO78%2Bxko4RFLyuJLv6uvrWsU03zO1zVGHz74Tk0dylkQxVBpQD46a4kPSdK2E2ukuCbjm%2BDjnp0EyLavcUi%2BO4ERKO9Y6Sr0gESVQGgMEJlsYywD2YbiIxGzNypx9%2Bqc1KwzOcwhoQ1z%2BZcArmBJxyCJ8koW05X2NZV6MT2oio1GdxSaH4JQapL4JQ8C8OmoX5NVb8du8JdAGqK%2BVUVyWNUi4QRXMkfO0hJGjo4aO60XMDoaPsX8sBGy2B%2FvTjTS7iPARCIm7nZ5cR4DqE7RWKxj5VJMT%2F9BZR%2BBfhnvkxlwOqMS8xzR0g9MajTJVKaMYMYfYsEuAGdxitfH0aGLllCUw4gGpxwC8CGg3LKKwC2EkXAXj9CF%2F4ECcltiGlLTBmzuJBDSE8YeHNxIWApLZkL8BSgK47fOGWin1P8mygXq3hREMISpJeP3X7VwZQLjjxVQKwtJWlLV0OanN%2FecLYW1FO%2BnLPNbznivGqNd%2Frb1XBuT2mxz03okeAd8e9WFZzZ%2FPfrdLIp7XqUOjQSkvJPqTUS%2BAN6EyH6splTNBzASGkdfLwMZKuoe7AnFN1SCy149R08EWvg8tUvBI6w5WBajCGcbRP7fmyYvo3frKq1Qf6MNEB0I2FiIptEtDCyxrDBBjqkAXIN1gFxwN7XfIPLUEWxCvEEM%2FlbkEfI2VVvAyNOT%2BLcrc0pDJvmH5FKLv0Wu3EMLur%2B82RnzzwxXULMHRY%2BqAs84LYHAnHTh6UFCUAsNzDnBLm8Qnfum3odXp2TfOOsTTkKVsc9EjKl53FQgss0DdFStl80pr0%2FTPn7IrhM19QY5iNEotWZ%2B9tg9j4xmGmLTOvlefDm5G%2B10yu%2FLUF02bDCKBIZ&X-Amz-Signature=7b96a796cdc9d95218b736556594c0a49cc9296637d6eaf0bc19cbcf860b33c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3IZF2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtKIxNQidzEH9excbmGbbhcvrn1zXfM1Hxol7KTwPxSQIhANnUQCl1l6cGXCJxV1gVl7EJufMg6JdhviVfx7c5hZsxKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW4tQFbCy%2BVvArDbIq3AO78%2Bxko4RFLyuJLv6uvrWsU03zO1zVGHz74Tk0dylkQxVBpQD46a4kPSdK2E2ukuCbjm%2BDjnp0EyLavcUi%2BO4ERKO9Y6Sr0gESVQGgMEJlsYywD2YbiIxGzNypx9%2Bqc1KwzOcwhoQ1z%2BZcArmBJxyCJ8koW05X2NZV6MT2oio1GdxSaH4JQapL4JQ8C8OmoX5NVb8du8JdAGqK%2BVUVyWNUi4QRXMkfO0hJGjo4aO60XMDoaPsX8sBGy2B%2FvTjTS7iPARCIm7nZ5cR4DqE7RWKxj5VJMT%2F9BZR%2BBfhnvkxlwOqMS8xzR0g9MajTJVKaMYMYfYsEuAGdxitfH0aGLllCUw4gGpxwC8CGg3LKKwC2EkXAXj9CF%2F4ECcltiGlLTBmzuJBDSE8YeHNxIWApLZkL8BSgK47fOGWin1P8mygXq3hREMISpJeP3X7VwZQLjjxVQKwtJWlLV0OanN%2FecLYW1FO%2BnLPNbznivGqNd%2Frb1XBuT2mxz03okeAd8e9WFZzZ%2FPfrdLIp7XqUOjQSkvJPqTUS%2BAN6EyH6splTNBzASGkdfLwMZKuoe7AnFN1SCy149R08EWvg8tUvBI6w5WBajCGcbRP7fmyYvo3frKq1Qf6MNEB0I2FiIptEtDCyxrDBBjqkAXIN1gFxwN7XfIPLUEWxCvEEM%2FlbkEfI2VVvAyNOT%2BLcrc0pDJvmH5FKLv0Wu3EMLur%2B82RnzzwxXULMHRY%2BqAs84LYHAnHTh6UFCUAsNzDnBLm8Qnfum3odXp2TfOOsTTkKVsc9EjKl53FQgss0DdFStl80pr0%2FTPn7IrhM19QY5iNEotWZ%2B9tg9j4xmGmLTOvlefDm5G%2B10yu%2FLUF02bDCKBIZ&X-Amz-Signature=4790c0bda8666a8005a285aa2b1e4f77f7b08b7596ebf743a36bb8929baa595b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
