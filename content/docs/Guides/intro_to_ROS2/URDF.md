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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOT7H4QD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcVf70OLHalb6%2FIJwvVQmkP8jHg4m9nwrKyfEkl2SpIwIhAK4Vr4Q3QcLyJvwcpj4122tjrUVr8OTYlisMZPyt8c2sKv8DCDgQABoMNjM3NDIzMTgzODA1Igyvy6RHs5w%2B5Yb7zBEq3AN%2Bb45OZJT4b3rnQo9w4cCQgj04lcU51QX9G6xhlY40pVBekVECAPYKLGJGPw3ijeVpce8ziSG3%2Fpi0FMk%2FxgFXcMw8W5eox7Q3VgMqbfBDkJ0tXpHAw%2FLzgQWu65mLvcWUD%2F0lZpkbQ7chHgX4ukoKjIuNE1una%2BJZm%2B0%2BL0dHUSMpo%2BQA38jaoS74D2%2B%2B5UAxxreqzqT%2BJ8ReDwHWrDPDq%2B8ZOT3EWNlnJxqAe%2BtMK3g1YaYk218830u%2Be%2B%2BrrbN06KKHWotk1mfpa8nLBcwQ52Heii0Q3DiqnRZTxe6CR3jT3jI4yO8d57DGdwM4IssXdBpXi3tm%2Frat8oNDl9lNhAPvSLXcvnJkB41dqqkyDsgtQhrGIfVABohs6qiRMwuzFy7mQPab5bWZvTi4QViFxsZwBl4i8lRSX7PzQ6ALJEjk1o4P9i8ZeZrWrQ%2F%2FBX8TCKP%2BXuOWFMDfGGLR4NS%2Bb6C6JcWMCeRz%2FQbBJewMTQR839jvq0B3BLuZ%2FKYTUGJMs8HjJlB3hDxrZKt8riIPT2GZNEQAeihTbl%2BXqFlAGkOuXhaahO1nEQ2yKACV%2Bth1KaI8aVdOyklHi%2B7BTyMppnSwVtPeBcKyq8tzV%2B%2BwWF3uMGgGShQVvyF6PTCqyai%2BBjqkAWzvYnFjymJZ%2BEh35MnmFq2lUhJiG83x8r1jpSDW%2BT%2BSSI3WbRvUItYo0phT1YpNbMt3QOzAC1prOMX%2BaofTcrATSmCBB7MPiYE218UdvftHNKedpoO3OQxH%2FrBT%2B7svqK8nfc35qR4saWH09R3KY6CuHhrIMusYdI84ph8Evr1dA8TCxfT8i5SldeKluXlHwX5zM1iLXpF45TS4Blzw8SCW%2BjBf&X-Amz-Signature=be4ad6197476724b049e0c765c61b5fca8c0e77a8ef8bed147d317604c0623ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOT7H4QD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcVf70OLHalb6%2FIJwvVQmkP8jHg4m9nwrKyfEkl2SpIwIhAK4Vr4Q3QcLyJvwcpj4122tjrUVr8OTYlisMZPyt8c2sKv8DCDgQABoMNjM3NDIzMTgzODA1Igyvy6RHs5w%2B5Yb7zBEq3AN%2Bb45OZJT4b3rnQo9w4cCQgj04lcU51QX9G6xhlY40pVBekVECAPYKLGJGPw3ijeVpce8ziSG3%2Fpi0FMk%2FxgFXcMw8W5eox7Q3VgMqbfBDkJ0tXpHAw%2FLzgQWu65mLvcWUD%2F0lZpkbQ7chHgX4ukoKjIuNE1una%2BJZm%2B0%2BL0dHUSMpo%2BQA38jaoS74D2%2B%2B5UAxxreqzqT%2BJ8ReDwHWrDPDq%2B8ZOT3EWNlnJxqAe%2BtMK3g1YaYk218830u%2Be%2B%2BrrbN06KKHWotk1mfpa8nLBcwQ52Heii0Q3DiqnRZTxe6CR3jT3jI4yO8d57DGdwM4IssXdBpXi3tm%2Frat8oNDl9lNhAPvSLXcvnJkB41dqqkyDsgtQhrGIfVABohs6qiRMwuzFy7mQPab5bWZvTi4QViFxsZwBl4i8lRSX7PzQ6ALJEjk1o4P9i8ZeZrWrQ%2F%2FBX8TCKP%2BXuOWFMDfGGLR4NS%2Bb6C6JcWMCeRz%2FQbBJewMTQR839jvq0B3BLuZ%2FKYTUGJMs8HjJlB3hDxrZKt8riIPT2GZNEQAeihTbl%2BXqFlAGkOuXhaahO1nEQ2yKACV%2Bth1KaI8aVdOyklHi%2B7BTyMppnSwVtPeBcKyq8tzV%2B%2BwWF3uMGgGShQVvyF6PTCqyai%2BBjqkAWzvYnFjymJZ%2BEh35MnmFq2lUhJiG83x8r1jpSDW%2BT%2BSSI3WbRvUItYo0phT1YpNbMt3QOzAC1prOMX%2BaofTcrATSmCBB7MPiYE218UdvftHNKedpoO3OQxH%2FrBT%2B7svqK8nfc35qR4saWH09R3KY6CuHhrIMusYdI84ph8Evr1dA8TCxfT8i5SldeKluXlHwX5zM1iLXpF45TS4Blzw8SCW%2BjBf&X-Amz-Signature=66181c53e19c3621e9ed20787f0807d235df04762ec5fa504f0a8f3fe2ff9e86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
