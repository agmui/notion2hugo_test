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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ53R4JK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC6EXVLYYly6epdrqyhG%2Fw3iJX1fxNLLfQtciGk6cGycwIhALtljRY6zldda2yb0itM5jFcPi%2B0tON0C2E9ako7VJOhKv8DCDUQABoMNjM3NDIzMTgzODA1Igz7aINJrthuKsW6tssq3APmxKdHlfI6g%2BMpg6Oc%2Fa1Nylo7u04wAP5NKA%2FSY%2BnBOHv72ZEJqcGK%2BaUhN6ZUZslvSw%2FQlNDJN71qfB5uU8f4LNsR9mPnbJ7USvGswzdTQs5imkJhHYUOPCaCY024Tdxb9siEZtkRuFJ3amzTFCpWLPLw73o6DAara5az5PzxUfD5ooj8wIyprwk1WYXDam35C8lUbpCvq6uXzkJi3y%2FlWwA9WgL9KGRcGL8poOZkNzC99YUenLySzyFWFoIJQhVJmXsbGkhM8knlR3EoUHWNQFBmxcDMOHLSD9iPjZCI36NMPdR1k8l0dcfavkcKvSGwgG%2BznwzFFOpASW8Wvg0jVXEs6xHwFcE7kptjmmcjqiEP1TkmvL6jhBKg8U10Ib7D%2Fk7zyU%2BjefD%2BHWN0mqQ2CJjbtZSeU0IQXLlUk4eGdeVf%2BKxQdGgS%2BnwQqYdUZZJ%2BsPZe7I0wpcdQ63POCpDaz6ntzrUMehbawuDkYGrcdHOkz7T%2B4nF3%2FXHPM8x2i9mVvT1oDNxDOmWuzXkKxM318K3e%2BAza70do6Exis%2BKNtkq7t5uHBpiTlsCHDAhlz8FsBOVo8DKIvCMNWKYQavpUqGN%2Fa8pmv4xWe63bkwiP9oIzR%2FqWifhpZzL0JzDk9M3BBjqkAao1vjVsbl87gTFp67swsmKgYTmq5vFvB8jjw36S2iXRhzg12GLebQ4GmxvFqq7FUL%2FwU7pNYo7i4u4DK2z6xiUjNUBDmx6oUKUiBE2mEBuJJj%2FuGx7o8gT7Xjx4VspqPiTcVvEmU77kULPV3YtyUlvVwcWGFrkFZOh%2B%2BbKj5G%2BzMLIVBuSdN5XjXnDmJCdRszrUe9FCukw%2BJR%2FNijGTyQtM%2FKIB&X-Amz-Signature=e08c5e15e94d05a055ca1387ae4a8a2528e88b739d6afd224c2e15cb9b645dde&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ53R4JK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC6EXVLYYly6epdrqyhG%2Fw3iJX1fxNLLfQtciGk6cGycwIhALtljRY6zldda2yb0itM5jFcPi%2B0tON0C2E9ako7VJOhKv8DCDUQABoMNjM3NDIzMTgzODA1Igz7aINJrthuKsW6tssq3APmxKdHlfI6g%2BMpg6Oc%2Fa1Nylo7u04wAP5NKA%2FSY%2BnBOHv72ZEJqcGK%2BaUhN6ZUZslvSw%2FQlNDJN71qfB5uU8f4LNsR9mPnbJ7USvGswzdTQs5imkJhHYUOPCaCY024Tdxb9siEZtkRuFJ3amzTFCpWLPLw73o6DAara5az5PzxUfD5ooj8wIyprwk1WYXDam35C8lUbpCvq6uXzkJi3y%2FlWwA9WgL9KGRcGL8poOZkNzC99YUenLySzyFWFoIJQhVJmXsbGkhM8knlR3EoUHWNQFBmxcDMOHLSD9iPjZCI36NMPdR1k8l0dcfavkcKvSGwgG%2BznwzFFOpASW8Wvg0jVXEs6xHwFcE7kptjmmcjqiEP1TkmvL6jhBKg8U10Ib7D%2Fk7zyU%2BjefD%2BHWN0mqQ2CJjbtZSeU0IQXLlUk4eGdeVf%2BKxQdGgS%2BnwQqYdUZZJ%2BsPZe7I0wpcdQ63POCpDaz6ntzrUMehbawuDkYGrcdHOkz7T%2B4nF3%2FXHPM8x2i9mVvT1oDNxDOmWuzXkKxM318K3e%2BAza70do6Exis%2BKNtkq7t5uHBpiTlsCHDAhlz8FsBOVo8DKIvCMNWKYQavpUqGN%2Fa8pmv4xWe63bkwiP9oIzR%2FqWifhpZzL0JzDk9M3BBjqkAao1vjVsbl87gTFp67swsmKgYTmq5vFvB8jjw36S2iXRhzg12GLebQ4GmxvFqq7FUL%2FwU7pNYo7i4u4DK2z6xiUjNUBDmx6oUKUiBE2mEBuJJj%2FuGx7o8gT7Xjx4VspqPiTcVvEmU77kULPV3YtyUlvVwcWGFrkFZOh%2B%2BbKj5G%2BzMLIVBuSdN5XjXnDmJCdRszrUe9FCukw%2BJR%2FNijGTyQtM%2FKIB&X-Amz-Signature=2e889700d817a1babc6db388b78f9088cb490ed93e1796541178d38a2c41a456&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
