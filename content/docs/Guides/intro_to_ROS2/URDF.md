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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBZLKCGB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsYBafR70MBNg5RTImDI70USF4pfim3B8alHb4xJ4pMgIhAKNDGZs%2Bx7g%2B6BMB8oLBeQOwnabWgJ92gjCv68h8jhfUKv8DCBcQABoMNjM3NDIzMTgzODA1Igxi8GgYqyV9jOz6L18q3ANA%2F76WoWdCN%2BRWPZ5LEizEEMXTRWKR1iX0%2FPlniDXzmyxep%2FNOOC2GApj1ffzHAehQI%2F4DJOAg84wSyl%2FmspIlab8FeQznzdVyCAogaJ2bcjILmQWxk%2BXvKLs4kmIoCm1gxIX2TwDvoD8icmYTgKFon1%2Fkj0oePkjTSfzogQifdRRZWOzuw70K8femgqGa2CqK8RTZTQ37c1NuNygKY3cMlqtOmav2oRy5Jrqgw5DegDAVC5UFPRjmQYwpBuUuGOfBqEqx%2BRzqEk0JYMBIwNsJhGp48urHBBbBtdh8Jd8WSGK8zM1JqdzsFX8utK%2FGVZwfM%2FJ1b1GRVhf7q%2BTFMqX03HbO3ldPiDMWXD6jO7kRHv%2Fa4HwfPsknFzo82wJ6UWOfrux9wd418tERDNP%2Fq5t8Vg5LENlV5mcy5exAgO2KzR49mxGM63CQPfwBs%2Bz6Gc1w55qCuNamPKw0PbT0egOho8i6Gyx3UWnR8WldZAP%2BpklV1k5fp7V2PxHCnMw5xvLWQ8kpY7VBnmqArjh8Uf2xOlf81SDqnikx7NEukGNF7Sg7gtYEMGmEqy5uaIwH6wzZyboK7qdVznp3BwVwnwUHNd0I2TJrstT34oFz07tQzWvJj3Yb32l6j9PN7jCOj4O9BjqkAfwH7dkYCV5fczoV7LIyfXyhBktfXinY5vw4qIaLF%2FhQnCAx1TS4K9oWdyBomGOGOuB2TsRWZaTbW4fgErNqlsJ74Qx1SaAvZytUw5iEodbuLeykzVCpO1uQqtBTlUHpMKBahVfUDNwB%2BNJEhUMvFcW9p3dj2DpSfil6l8CriVIhiv9O3C5wRh%2Bfx905Of49o0j7bJ64OnIyfAMms3Wb%2B5uw80eQ&X-Amz-Signature=0c45c603ed1bf4204e65e76cc88ca1f5be3c087ee1c950b541d84274c8846a69&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBZLKCGB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsYBafR70MBNg5RTImDI70USF4pfim3B8alHb4xJ4pMgIhAKNDGZs%2Bx7g%2B6BMB8oLBeQOwnabWgJ92gjCv68h8jhfUKv8DCBcQABoMNjM3NDIzMTgzODA1Igxi8GgYqyV9jOz6L18q3ANA%2F76WoWdCN%2BRWPZ5LEizEEMXTRWKR1iX0%2FPlniDXzmyxep%2FNOOC2GApj1ffzHAehQI%2F4DJOAg84wSyl%2FmspIlab8FeQznzdVyCAogaJ2bcjILmQWxk%2BXvKLs4kmIoCm1gxIX2TwDvoD8icmYTgKFon1%2Fkj0oePkjTSfzogQifdRRZWOzuw70K8femgqGa2CqK8RTZTQ37c1NuNygKY3cMlqtOmav2oRy5Jrqgw5DegDAVC5UFPRjmQYwpBuUuGOfBqEqx%2BRzqEk0JYMBIwNsJhGp48urHBBbBtdh8Jd8WSGK8zM1JqdzsFX8utK%2FGVZwfM%2FJ1b1GRVhf7q%2BTFMqX03HbO3ldPiDMWXD6jO7kRHv%2Fa4HwfPsknFzo82wJ6UWOfrux9wd418tERDNP%2Fq5t8Vg5LENlV5mcy5exAgO2KzR49mxGM63CQPfwBs%2Bz6Gc1w55qCuNamPKw0PbT0egOho8i6Gyx3UWnR8WldZAP%2BpklV1k5fp7V2PxHCnMw5xvLWQ8kpY7VBnmqArjh8Uf2xOlf81SDqnikx7NEukGNF7Sg7gtYEMGmEqy5uaIwH6wzZyboK7qdVznp3BwVwnwUHNd0I2TJrstT34oFz07tQzWvJj3Yb32l6j9PN7jCOj4O9BjqkAfwH7dkYCV5fczoV7LIyfXyhBktfXinY5vw4qIaLF%2FhQnCAx1TS4K9oWdyBomGOGOuB2TsRWZaTbW4fgErNqlsJ74Qx1SaAvZytUw5iEodbuLeykzVCpO1uQqtBTlUHpMKBahVfUDNwB%2BNJEhUMvFcW9p3dj2DpSfil6l8CriVIhiv9O3C5wRh%2Bfx905Of49o0j7bJ64OnIyfAMms3Wb%2B5uw80eQ&X-Amz-Signature=542556aaf06219895c88fb1ba8888c3009f7a73bbfe881e546fb1c7a736bf5f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
