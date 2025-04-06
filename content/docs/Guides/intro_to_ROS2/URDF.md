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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLULR4TA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbd16zMK2PemQWO03Nm0DXUPOHZpnDocxEYTT8IxmMvAIgIEBKVL7rzrhfz%2BrIfx7b%2FUTjZWCNkAXPTybxrJQSlwAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAtf3iwAsqWAFd6S%2BSrcA242oFOfdhfsDxeViTm%2FH%2BPPWhbZDsoG0sWF30%2FvwOxCjPD1CAbLdwulyF110QPTZFWTK4hV0mHcUwJZJefvd7ZYhqDtRzkkcMt0vcGPU8OqyZvwG0AJgErTUKMHPjogG8denHXoDO7jKhXv5h4aTaMxvNnMypNEegtzUASM40UYECrz2Z08zrl1u4bhaYMfT2mnYl0gV6mLhaz1wafMwnJwcWVMDYbOSrarNoqnkaQhzMmxJyxEuBj1IvH4%2BnbfAnGZT%2Bl9DLez3GxS8eUnbdS23qtSY3FCP7to5gPiYwCSG8Kv8kmK%2Br%2Fqw7X8bEtOhCuVx472dov3fZ2tHj%2BhdaqTH5y%2BN1%2BVneNj2kJ2DJs5nn7e%2FwFG1SeF8VpTuFfwJCriyaF2aSgH9Vlm63LxX0uy1ky6AgkMrGJsjLgB3XzUQtlf%2B%2FPsC32H0vrIyOdyNftP%2FII2hTbowCxLgU1aNqa1SC8jE1tin8bYHYvU0qbr0%2Fx7yoW9ASMwTp6ir5lILch6q9xbz1b5Uw%2F0NTjcGByfuhKwtb560c2RnjrSADdSHZFc977d07pQPHMdEApy5NjCBbW1XwCyl6mNU80i3vWqABqhyZorXnGG5gq1%2FwM95r9zqBlEKgcHJ6cuMO6byr8GOqUB5b3mNrnv%2Bj%2FGG8sRvY61ZHBpc6NM9%2FK8CtDpAjOycbtx8LU8fAXsmXl%2FfsHqpyHfNKrOexV7AFDwvYtmsKYpjYcu0tS8EZzEQQeHqIdty3EX871KZAR4fm4USgiOS5IHTNRxBu%2F1uP5M6INQttiyR2l%2FquydThMSNUurmYxorgIaromniiBDnl2yQoXvKpIxk%2FT%2BM46APVysH8C%2BuVduP70dGNzR&X-Amz-Signature=a994b873326dc624992768941ebfbc42d10dc4059f2cf8e18d9772aad703e472&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLULR4TA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbd16zMK2PemQWO03Nm0DXUPOHZpnDocxEYTT8IxmMvAIgIEBKVL7rzrhfz%2BrIfx7b%2FUTjZWCNkAXPTybxrJQSlwAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAtf3iwAsqWAFd6S%2BSrcA242oFOfdhfsDxeViTm%2FH%2BPPWhbZDsoG0sWF30%2FvwOxCjPD1CAbLdwulyF110QPTZFWTK4hV0mHcUwJZJefvd7ZYhqDtRzkkcMt0vcGPU8OqyZvwG0AJgErTUKMHPjogG8denHXoDO7jKhXv5h4aTaMxvNnMypNEegtzUASM40UYECrz2Z08zrl1u4bhaYMfT2mnYl0gV6mLhaz1wafMwnJwcWVMDYbOSrarNoqnkaQhzMmxJyxEuBj1IvH4%2BnbfAnGZT%2Bl9DLez3GxS8eUnbdS23qtSY3FCP7to5gPiYwCSG8Kv8kmK%2Br%2Fqw7X8bEtOhCuVx472dov3fZ2tHj%2BhdaqTH5y%2BN1%2BVneNj2kJ2DJs5nn7e%2FwFG1SeF8VpTuFfwJCriyaF2aSgH9Vlm63LxX0uy1ky6AgkMrGJsjLgB3XzUQtlf%2B%2FPsC32H0vrIyOdyNftP%2FII2hTbowCxLgU1aNqa1SC8jE1tin8bYHYvU0qbr0%2Fx7yoW9ASMwTp6ir5lILch6q9xbz1b5Uw%2F0NTjcGByfuhKwtb560c2RnjrSADdSHZFc977d07pQPHMdEApy5NjCBbW1XwCyl6mNU80i3vWqABqhyZorXnGG5gq1%2FwM95r9zqBlEKgcHJ6cuMO6byr8GOqUB5b3mNrnv%2Bj%2FGG8sRvY61ZHBpc6NM9%2FK8CtDpAjOycbtx8LU8fAXsmXl%2FfsHqpyHfNKrOexV7AFDwvYtmsKYpjYcu0tS8EZzEQQeHqIdty3EX871KZAR4fm4USgiOS5IHTNRxBu%2F1uP5M6INQttiyR2l%2FquydThMSNUurmYxorgIaromniiBDnl2yQoXvKpIxk%2FT%2BM46APVysH8C%2BuVduP70dGNzR&X-Amz-Signature=99a93969359823d3ad55964fd9499ad25357461dbf959122ce53cacbb4e52528&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
