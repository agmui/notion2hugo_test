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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNC6AVI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzlf3pNHzo9kcYTtbk5XF95qIlsedz5%2FS7e5OK31C2nwIhAM9qtSFWAlOS43GesqTaeV5aeBbqiQMhj%2F1M7%2FHr9FYnKv8DCCcQABoMNjM3NDIzMTgzODA1Igw6Jty2z4wIH2einJUq3APUl3EqeowxYBZS1vBwb0kVha%2Fv%2FbqCjuT5eG5b1%2BmXbdioFmuS7X81Ic%2FlucEvpP0D2XMSZ1y%2BO1LrAOOYTTQSvpA5OOA%2B%2Bd90xCfkCm3Pkz3l%2FZtT2v2DcYS5aPbaYAB6KnVmIlfYiAjKVID28%2Fzc2AWS83HILOYjwhA1YqBz%2BpIUxH92JQwNVnulbyahD0h18gkxacVeLhCsaNGlCN%2FMmImkDXGh4ETlX6PIKN%2BNpy8Z49wDuXvCfXMr3C%2F3EMScJxMV4hhJusj4jwF4ZKJrOuOLlZ8udV3gfHMxtJfoHLuNXZ%2FAPOFJhTglTxYcGPRkYgSEMhWEsbt6ZKZZFiSPKFpeBJXfRRdeijjOUmcz9bbY69blx%2FOHbwYkkJx9aVDyRvOQwuf3irugjJlD3QBAX6ArqBnxhllacyV8uInqZCZMgVIgLsVbkIVYWxwI1oQj9rWdDqGAMjxuIvltdd7HaEDrthug0sFc9kK%2FZA%2BueIIbhRUZnOzrBrV2jpH9HKVk2aPsEKb%2BSapkny9wAtNeJN5spTTc0SfzWv5nN9hXSZhs%2FMZXdNr4JUtiPExH3JURNO4cDsOpaolXosJNZtlq1Lz%2Bjjli1aP0raSabR9ys1jHlc%2F%2BH0sLrue96zDCwbu9BjqkAaidtQQxDcYGC4hwqHHZYuX7HK3ED1CMgMRJcH%2FLnhGQuVjCnFSBFumjWATp2DTsxYOqluTSlNA%2Bx5rN%2BUn8nIZtwQBqhmntWaNyZUeCAjGOj5Y7UYpvmLJedhASmbk3kO8v3%2F03abe4KEaKgJ%2BPifsl2tUB4sI7S6GOAVZbjMF0kxrLlnHbyu%2FQr2nAL9Tu98%2FLqbWjVyh3%2Bhtm2a0P2bAvd6px&X-Amz-Signature=434e7773b2861a254516ce6f0b8364e364e44d01be1c35678ee5616d8772e2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNC6AVI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzlf3pNHzo9kcYTtbk5XF95qIlsedz5%2FS7e5OK31C2nwIhAM9qtSFWAlOS43GesqTaeV5aeBbqiQMhj%2F1M7%2FHr9FYnKv8DCCcQABoMNjM3NDIzMTgzODA1Igw6Jty2z4wIH2einJUq3APUl3EqeowxYBZS1vBwb0kVha%2Fv%2FbqCjuT5eG5b1%2BmXbdioFmuS7X81Ic%2FlucEvpP0D2XMSZ1y%2BO1LrAOOYTTQSvpA5OOA%2B%2Bd90xCfkCm3Pkz3l%2FZtT2v2DcYS5aPbaYAB6KnVmIlfYiAjKVID28%2Fzc2AWS83HILOYjwhA1YqBz%2BpIUxH92JQwNVnulbyahD0h18gkxacVeLhCsaNGlCN%2FMmImkDXGh4ETlX6PIKN%2BNpy8Z49wDuXvCfXMr3C%2F3EMScJxMV4hhJusj4jwF4ZKJrOuOLlZ8udV3gfHMxtJfoHLuNXZ%2FAPOFJhTglTxYcGPRkYgSEMhWEsbt6ZKZZFiSPKFpeBJXfRRdeijjOUmcz9bbY69blx%2FOHbwYkkJx9aVDyRvOQwuf3irugjJlD3QBAX6ArqBnxhllacyV8uInqZCZMgVIgLsVbkIVYWxwI1oQj9rWdDqGAMjxuIvltdd7HaEDrthug0sFc9kK%2FZA%2BueIIbhRUZnOzrBrV2jpH9HKVk2aPsEKb%2BSapkny9wAtNeJN5spTTc0SfzWv5nN9hXSZhs%2FMZXdNr4JUtiPExH3JURNO4cDsOpaolXosJNZtlq1Lz%2Bjjli1aP0raSabR9ys1jHlc%2F%2BH0sLrue96zDCwbu9BjqkAaidtQQxDcYGC4hwqHHZYuX7HK3ED1CMgMRJcH%2FLnhGQuVjCnFSBFumjWATp2DTsxYOqluTSlNA%2Bx5rN%2BUn8nIZtwQBqhmntWaNyZUeCAjGOj5Y7UYpvmLJedhASmbk3kO8v3%2F03abe4KEaKgJ%2BPifsl2tUB4sI7S6GOAVZbjMF0kxrLlnHbyu%2FQr2nAL9Tu98%2FLqbWjVyh3%2Bhtm2a0P2bAvd6px&X-Amz-Signature=f495b42f8e54e49b15bcc42e72e5066ed2b1ab7d9fa4addcff845986237dddb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
