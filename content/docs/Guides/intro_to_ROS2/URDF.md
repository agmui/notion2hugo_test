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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YQ4MQO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC%2F6EM5zB6QUX52P9RmF5drFKaZhuWF0KNSyCscgKZXPAIgF8RVjswofhk8S0KL6OU1fHiK57TTAcvhOK%2FbE%2FDf6WYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUr1fKosKaahYbkLyrcA7D90y85zGx24Aot33isv33f%2BMHeco5akqkI%2FJeoKzWXwp4%2FRxt5iH1lPsxXO9jotMKPq6rTkYq69jfBodNzm90hO8S1dXvqyMHT%2F5AwF63Gl%2BsfDd%2BMXM4WZeNiq6T3xI1FNFYZ25QprmplcQ%2FRlqhlEggVpNFpN7qL4WZaiTWW5uUl9fegtteSFKi2vVTDFM3d5eWaW1%2FpDkj8M5LaIbMXkFyO4OmmWzLp4tA1orPJkwf3nYfDBGdHAo2n2WxJD5xUes2WX%2BlN68rg4czRJPqfGsINgdvstvw07s%2Bi9cOKxzEhpJqr2Yo9NbebAojDgfQO4mQOV8f9BLrrmxugbt9DY5W93wyuPYskJf28lfiBiJ9i5qNK8Ot6yWR3c287FmR%2FVzWhsKltF633FObgPFSJQiC40wXu0U%2BbCH8bkfRndprymwD6yNePTdjnyqQf5zak0coYbQSYdes10SExk1OyOfnW4p9Ar%2FSGhvCW83kwX5%2FNITk0iXDEiqyJOMmkU2vPZPPqpr9QDJSjHkA4DzS3aGbE8O8U8Gr%2Bchi0wMUJrT7%2BTPf0z2k200D2NqrBTFVeYb6zvKSKicmzpigLD5b87wsfLGkcC7rd948yg85w%2FoBg08OiREu7IUprMNKUzMAGOqUBacVOw0weNxpJIXE4LLdfrxgdWCG%2F9eAp%2FEgkdcVw8f2oXCo9GdqdCxz0vkHMxRBnTpuc0iXvgVe1WZx%2FSM4xq5%2FddAut6qJrVmIQehtR2XAKZMDjglA809GDwYys3urC6PPWvW%2FIZ3MFIqIk3R%2FQhvCgeKEk7ymGnKQnz7mQvEepTJhZ773QlWyvbGjTA01rqdpK7syVhNLXyqN8P1Yir%2BLubtLO&X-Amz-Signature=b26489d7d19cd6e14fd47854540f37f1e126905303f32f02ddd8e50d92760909&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YQ4MQO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC%2F6EM5zB6QUX52P9RmF5drFKaZhuWF0KNSyCscgKZXPAIgF8RVjswofhk8S0KL6OU1fHiK57TTAcvhOK%2FbE%2FDf6WYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUr1fKosKaahYbkLyrcA7D90y85zGx24Aot33isv33f%2BMHeco5akqkI%2FJeoKzWXwp4%2FRxt5iH1lPsxXO9jotMKPq6rTkYq69jfBodNzm90hO8S1dXvqyMHT%2F5AwF63Gl%2BsfDd%2BMXM4WZeNiq6T3xI1FNFYZ25QprmplcQ%2FRlqhlEggVpNFpN7qL4WZaiTWW5uUl9fegtteSFKi2vVTDFM3d5eWaW1%2FpDkj8M5LaIbMXkFyO4OmmWzLp4tA1orPJkwf3nYfDBGdHAo2n2WxJD5xUes2WX%2BlN68rg4czRJPqfGsINgdvstvw07s%2Bi9cOKxzEhpJqr2Yo9NbebAojDgfQO4mQOV8f9BLrrmxugbt9DY5W93wyuPYskJf28lfiBiJ9i5qNK8Ot6yWR3c287FmR%2FVzWhsKltF633FObgPFSJQiC40wXu0U%2BbCH8bkfRndprymwD6yNePTdjnyqQf5zak0coYbQSYdes10SExk1OyOfnW4p9Ar%2FSGhvCW83kwX5%2FNITk0iXDEiqyJOMmkU2vPZPPqpr9QDJSjHkA4DzS3aGbE8O8U8Gr%2Bchi0wMUJrT7%2BTPf0z2k200D2NqrBTFVeYb6zvKSKicmzpigLD5b87wsfLGkcC7rd948yg85w%2FoBg08OiREu7IUprMNKUzMAGOqUBacVOw0weNxpJIXE4LLdfrxgdWCG%2F9eAp%2FEgkdcVw8f2oXCo9GdqdCxz0vkHMxRBnTpuc0iXvgVe1WZx%2FSM4xq5%2FddAut6qJrVmIQehtR2XAKZMDjglA809GDwYys3urC6PPWvW%2FIZ3MFIqIk3R%2FQhvCgeKEk7ymGnKQnz7mQvEepTJhZ773QlWyvbGjTA01rqdpK7syVhNLXyqN8P1Yir%2BLubtLO&X-Amz-Signature=cd3740ba3c19b98a0780063d1ca0769313550df6ec42fed1be608cb0c508348a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
