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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664VVD3ZI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCijnCnAVXo%2BOh5xMCuPp7o1QViV7V1uDE025jo3kxImAIhAPSUnG0nilcpoce9MrfPimOEBGe7ejpWFdiJY%2Ftw4rmYKv8DCFEQABoMNjM3NDIzMTgzODA1Igz2mdGWZWHCiuteIhMq3AMu2Jh7NfVhy%2F6hgb9gT9cXGtiET2vQoc7Vd8nqdnjnR1G65StMoGMtBVwhyBz2s7KoTgLSHJQDlGNOg6mnF6Nhr9MpfQ3AfhaC%2Frt3DpKkqePxfI17gtmHsIa37KQmD5VQ5X0odybziwkspYD1SfMy7fvxQVqG3S0d48Qm1B4DnPEMwXbFNdP%2FucWFDctnbdI%2BOmPH5iuiYlYLpRuMLzLvFKZQZiu2EGt63J%2BbH0BxlLwHKzUolLbK%2FALHjeNF%2FCKkhydVZ1zZmlEcxQjZlHRBvH%2FqbqlFqYh1Az7VjwgmxIcRvL8ESp8nlJYMljeklgA2zRP1cN2c3lHktTnw5TlDhGRNXYPhzDWHI5J6krrMRf2lLLveh6TRLr9X%2B%2Bzy%2Bf3oNaT3%2BPAjMxWx0ve66dcEOLAfu1CqrLrC2dyDzXrV74%2BTC5gW8QuMPav6l6LlAT1rTHZgwqalRjVFDPtu5HE0gxmp%2FV65kubqbJ8PAmp2%2BCaIOtESnukFUPEJu5AiLbHIDYMjdLpIcCUDxQzWrkU9yuraTDodQzxcG7F%2BQQ37U985YrQqrYwvRX%2F089MniF3JxQLQb2H0vcmO4gi0hUoSBbg61TDSv8wCOBBPedKHugAQB3g3JkfzAiVPgzC51IjCBjqkAfi8%2F%2BJS3BdEdNHAFPvyhWlIZMl61zVW5tInPEc%2FJctBUr1%2FAjPDLzN73qdnRrPPF2%2BznzmV5qKVy%2FUS5NOqFpiUF%2BLBFDkTiLtUHGi8Jpzs6UKjGtf4Wp4wuj4nnc%2FsQcBjVYH%2BwPy2cy7DqkXSfJyWmBywmccfqqpX2NlB4qf72r0w7Wppg260uU2HrHZmYSzBgAtI1RLnsCtmVjtNeRVp9HUd&X-Amz-Signature=0ccef9fed32d52abbfa4e9751c8a75869c7774ce7f1a5a2c5713b0181de66f54&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664VVD3ZI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCijnCnAVXo%2BOh5xMCuPp7o1QViV7V1uDE025jo3kxImAIhAPSUnG0nilcpoce9MrfPimOEBGe7ejpWFdiJY%2Ftw4rmYKv8DCFEQABoMNjM3NDIzMTgzODA1Igz2mdGWZWHCiuteIhMq3AMu2Jh7NfVhy%2F6hgb9gT9cXGtiET2vQoc7Vd8nqdnjnR1G65StMoGMtBVwhyBz2s7KoTgLSHJQDlGNOg6mnF6Nhr9MpfQ3AfhaC%2Frt3DpKkqePxfI17gtmHsIa37KQmD5VQ5X0odybziwkspYD1SfMy7fvxQVqG3S0d48Qm1B4DnPEMwXbFNdP%2FucWFDctnbdI%2BOmPH5iuiYlYLpRuMLzLvFKZQZiu2EGt63J%2BbH0BxlLwHKzUolLbK%2FALHjeNF%2FCKkhydVZ1zZmlEcxQjZlHRBvH%2FqbqlFqYh1Az7VjwgmxIcRvL8ESp8nlJYMljeklgA2zRP1cN2c3lHktTnw5TlDhGRNXYPhzDWHI5J6krrMRf2lLLveh6TRLr9X%2B%2Bzy%2Bf3oNaT3%2BPAjMxWx0ve66dcEOLAfu1CqrLrC2dyDzXrV74%2BTC5gW8QuMPav6l6LlAT1rTHZgwqalRjVFDPtu5HE0gxmp%2FV65kubqbJ8PAmp2%2BCaIOtESnukFUPEJu5AiLbHIDYMjdLpIcCUDxQzWrkU9yuraTDodQzxcG7F%2BQQ37U985YrQqrYwvRX%2F089MniF3JxQLQb2H0vcmO4gi0hUoSBbg61TDSv8wCOBBPedKHugAQB3g3JkfzAiVPgzC51IjCBjqkAfi8%2F%2BJS3BdEdNHAFPvyhWlIZMl61zVW5tInPEc%2FJctBUr1%2FAjPDLzN73qdnRrPPF2%2BznzmV5qKVy%2FUS5NOqFpiUF%2BLBFDkTiLtUHGi8Jpzs6UKjGtf4Wp4wuj4nnc%2FsQcBjVYH%2BwPy2cy7DqkXSfJyWmBywmccfqqpX2NlB4qf72r0w7Wppg260uU2HrHZmYSzBgAtI1RLnsCtmVjtNeRVp9HUd&X-Amz-Signature=9e710112f5154430dc1593cde0c23fb229671da7525169bab98bb0592645ca47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
