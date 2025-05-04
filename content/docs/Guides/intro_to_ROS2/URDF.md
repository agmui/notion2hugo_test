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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXXZV63%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDg2eEtALDfLxHjtd6HHHGNhAlJ2F%2BQ%2BuzT%2BGoa6mJP9gIgW8p7sCJZhSTqz%2BURbG%2FVq%2FfdHGY9PnNL5jcRHvXYGmkqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcjKiUnBy8l1U1LLircA%2FjCHTO888wdp1bWvNrThgdsKc3N2hDLwlgkm%2FxVkLZ5KkE%2Fogb6EmSQAsTIamjtnmI1NZS0C9HeY8%2BW8bvEuaBW6W0zd5oPYI3vUUy6NB3Rcb%2FhGhFFJoR6beWyq9sPdP%2FlbUeZSJQGnnbVjKRnxo8li58a8uSu0qLL9doB9nwhuOBmhWIqboSYXsD2nNx%2FY%2F3pluKU3wB4HiQdcYUqf%2F5Uyti0xRfqfAbejk%2B0b1Ls0L2WAEZGHbS%2FVgPlrcZ0zTJxmU%2BoGYx9Zd74u656GqpQgtmqGObM%2BrX8PttJwuDLm9HYd6XB79a%2Fr8iA88DKn16XgieV8Hx%2Fgdmdos2nb4EsFzSAY2DaRJCvSQIcskA4IZalbtMTdhcX5bIiuoqEFDpYJSfYhZSV3%2B0SY1SVK2QMLPG6szOYOEQc%2FHX6bkHatn1HfPqoVnLOfW4YF2vNaiMoqEV5IDdnHZAgUIhFCOxUkFFHFjW7aw7zo2p8i1b7NcPhLTgiepsJLaYIY6Yl%2Bej6wrz%2FGDTabL%2Bz3vU9i579sqXizIml2LCL2zPGYBSaY3%2FkIkkRsvWA8z4bueYJoVosqZbqguoKzOIjzu3F4ogryQ7JTzxihxyJb9rzux%2BEq%2FIFgKyM7QzkjViwMK7r28AGOqUBMUkR1aKHk57xfp3BOWm39b0mfiZ7uN1brONjmSx0GVn5ja3oLQXA6RJkC6YAxQmaMRno7QvWKzqoi%2FkkkO%2BXr9AgZsbmr%2BFasCK9Fns79J10NoRQ8ZDh9kNIZ0GCXerwws%2FMVUH94nfrgEhYc5PPU5eqjq%2F0vf1Q5F7CegpLQCdPIe%2B3Dd18ft74VZWIMy33iZ6FFb7PZxmjI0BJuEVqxkA5rTLL&X-Amz-Signature=51ff64e072237cc8bf9945aa052bcfe857e47dddf380fcd068803373857e30f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXXZV63%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDg2eEtALDfLxHjtd6HHHGNhAlJ2F%2BQ%2BuzT%2BGoa6mJP9gIgW8p7sCJZhSTqz%2BURbG%2FVq%2FfdHGY9PnNL5jcRHvXYGmkqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcjKiUnBy8l1U1LLircA%2FjCHTO888wdp1bWvNrThgdsKc3N2hDLwlgkm%2FxVkLZ5KkE%2Fogb6EmSQAsTIamjtnmI1NZS0C9HeY8%2BW8bvEuaBW6W0zd5oPYI3vUUy6NB3Rcb%2FhGhFFJoR6beWyq9sPdP%2FlbUeZSJQGnnbVjKRnxo8li58a8uSu0qLL9doB9nwhuOBmhWIqboSYXsD2nNx%2FY%2F3pluKU3wB4HiQdcYUqf%2F5Uyti0xRfqfAbejk%2B0b1Ls0L2WAEZGHbS%2FVgPlrcZ0zTJxmU%2BoGYx9Zd74u656GqpQgtmqGObM%2BrX8PttJwuDLm9HYd6XB79a%2Fr8iA88DKn16XgieV8Hx%2Fgdmdos2nb4EsFzSAY2DaRJCvSQIcskA4IZalbtMTdhcX5bIiuoqEFDpYJSfYhZSV3%2B0SY1SVK2QMLPG6szOYOEQc%2FHX6bkHatn1HfPqoVnLOfW4YF2vNaiMoqEV5IDdnHZAgUIhFCOxUkFFHFjW7aw7zo2p8i1b7NcPhLTgiepsJLaYIY6Yl%2Bej6wrz%2FGDTabL%2Bz3vU9i579sqXizIml2LCL2zPGYBSaY3%2FkIkkRsvWA8z4bueYJoVosqZbqguoKzOIjzu3F4ogryQ7JTzxihxyJb9rzux%2BEq%2FIFgKyM7QzkjViwMK7r28AGOqUBMUkR1aKHk57xfp3BOWm39b0mfiZ7uN1brONjmSx0GVn5ja3oLQXA6RJkC6YAxQmaMRno7QvWKzqoi%2FkkkO%2BXr9AgZsbmr%2BFasCK9Fns79J10NoRQ8ZDh9kNIZ0GCXerwws%2FMVUH94nfrgEhYc5PPU5eqjq%2F0vf1Q5F7CegpLQCdPIe%2B3Dd18ft74VZWIMy33iZ6FFb7PZxmjI0BJuEVqxkA5rTLL&X-Amz-Signature=72ad30085240e7f735d22e2f32627ee35b3d641c1d8737572b5c43add4026079&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
