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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYI7R4E%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFsAtzRUWHpFDrQ%2FHl18ZX%2BgyncXhV25e4XkiWUflSH4AiAMDMRqPXk%2Bsoi9hpEsaBXFIoM%2B74ZTjEj120zBdRAyGCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMboScC1yBpC3mrWD6KtwD%2FyLNnAwk2gVvfWfDpH2Q0BjsmzIpQZjHmUsreJFBcbm%2FakfO6ZQbRhKEutTTce8Jdyxu2h8Ez1ilvBicFQJxO2zpTYEOYiQ%2Fsy1i%2FWYZkjIbCiKdodjDtWbxsjTejSKi9wMF2xC%2BJOwPw89co%2F%2F3G41kALcX667Ebc6VXODk%2BaB9J%2Fb2D6CwedO1Ta4QVhwYyEWkJr4rj3yvFFoGCamlMbXmLDdb8WXAfdDi1L%2FyCra5RAToY2hiGKvsWdY0mIEM42um3c%2BzdYhkbXdTcJSCNbhtSfB1EuXIYDj4q5R7MHmzgM2DDL2viWYaVpM%2FGPTEydgLEt4P1314uYEFDrvsOkBUig5CXm8bl%2B%2Bs3%2F2r7ngFxF%2F6ir8eqWcct3jhK6mwOHFZj5rh5WuPRoNcEiFz5lETQQzXZUz8E%2FATl6YTMr28oinK4TXUjzHs15xVOY1TCQRuSMW0J4dcX%2BXTh3eEIyh8dHLgdfViqpcLm9b9a2f4WOVpT1cNliv5YoZXNISnf2c9BZNOAQ6pG%2FxX6BioTXtbyhij5kiia4cD6pgJZz4BYWcnlp%2BfU9QWYmm59nKkX89zz6ie6aRM27keyysJDJHmHd7hd7i2r%2BfSP9GthG%2F3rhLiH%2FN2w8AGvfwwqsaTwAY6pgGjVBybEBN2IvuHXKEfRs9ExyDWHBvkFUhql0q%2FrYKdsj48MEYP4%2Bs1adShsqCax1df%2Fi94cgcvgQJJaw3VVwfRP1cIoFnDRigbDQvfwjIlOvtYPBWtUWkRCPu5HCxcJvybshwzNAVuoFzlXw1arKIh31Wbj5K%2F1W%2F5zmKNSCBC1A775pdF2XwIhcutPuj%2FouEsDoih3GCFqVm0Ev%2FDsEib3UuKi2dp&X-Amz-Signature=f1833316eba2ee8e5fdbf3ee9915eb1b941177f9ec2681dd505cd90166b2e7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YYI7R4E%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFsAtzRUWHpFDrQ%2FHl18ZX%2BgyncXhV25e4XkiWUflSH4AiAMDMRqPXk%2Bsoi9hpEsaBXFIoM%2B74ZTjEj120zBdRAyGCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMboScC1yBpC3mrWD6KtwD%2FyLNnAwk2gVvfWfDpH2Q0BjsmzIpQZjHmUsreJFBcbm%2FakfO6ZQbRhKEutTTce8Jdyxu2h8Ez1ilvBicFQJxO2zpTYEOYiQ%2Fsy1i%2FWYZkjIbCiKdodjDtWbxsjTejSKi9wMF2xC%2BJOwPw89co%2F%2F3G41kALcX667Ebc6VXODk%2BaB9J%2Fb2D6CwedO1Ta4QVhwYyEWkJr4rj3yvFFoGCamlMbXmLDdb8WXAfdDi1L%2FyCra5RAToY2hiGKvsWdY0mIEM42um3c%2BzdYhkbXdTcJSCNbhtSfB1EuXIYDj4q5R7MHmzgM2DDL2viWYaVpM%2FGPTEydgLEt4P1314uYEFDrvsOkBUig5CXm8bl%2B%2Bs3%2F2r7ngFxF%2F6ir8eqWcct3jhK6mwOHFZj5rh5WuPRoNcEiFz5lETQQzXZUz8E%2FATl6YTMr28oinK4TXUjzHs15xVOY1TCQRuSMW0J4dcX%2BXTh3eEIyh8dHLgdfViqpcLm9b9a2f4WOVpT1cNliv5YoZXNISnf2c9BZNOAQ6pG%2FxX6BioTXtbyhij5kiia4cD6pgJZz4BYWcnlp%2BfU9QWYmm59nKkX89zz6ie6aRM27keyysJDJHmHd7hd7i2r%2BfSP9GthG%2F3rhLiH%2FN2w8AGvfwwqsaTwAY6pgGjVBybEBN2IvuHXKEfRs9ExyDWHBvkFUhql0q%2FrYKdsj48MEYP4%2Bs1adShsqCax1df%2Fi94cgcvgQJJaw3VVwfRP1cIoFnDRigbDQvfwjIlOvtYPBWtUWkRCPu5HCxcJvybshwzNAVuoFzlXw1arKIh31Wbj5K%2F1W%2F5zmKNSCBC1A775pdF2XwIhcutPuj%2FouEsDoih3GCFqVm0Ev%2FDsEib3UuKi2dp&X-Amz-Signature=08818cea9348b19357944b65f15fa558cd8688440eedd9220ffe1114c24141e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
