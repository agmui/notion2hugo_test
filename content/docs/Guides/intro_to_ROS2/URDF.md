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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVHBL4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCm0ILrAsJqLFXcODuIk5vHpwd37vWTWZFMKGBUNMNELwIgD1aHWSWf%2FPS%2F6Dw4rcmYNiGiWlMg3joljrAUbYKwio4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMYe%2B3Hhha9kbfiVCSrcA407F1T7txwIDUYBwkNAxiNf%2BLYOXM00TCisL7DMO7t2OANoBqoH2dW%2BkEnr5C4Ud55JrnUrvaLrWfbAriFXI9ZLPSwPJptf9%2Fh4cSmUAxZrHlBRw4cUIGFuwbdZRv%2BJjXCEGOb%2B0fndCefdbeHjxL5HtTU2mS%2Brs04gCQCIgnpJAQpg8B7i0gwce4BcXfE7vODhZcl01NbHeikOlbxZPfwquNT7a5Mu%2FWQZk9qioIrHDxEqXzdJkHLzcW2mjUeMPmoQJS4tYE3PsyGLV0pvVIJZl7w70ruRU%2Botrlke5ecE2sVfvBpQ9%2FJCyBtwa1wCbhcAy83lBLJJQnTYKWHPajo7Tmn11IILxKSr2iyKglV10lareU4B1xKi8WDGo1dPYP3YZZo8AU0es%2Bl8dYUZpy8ry4Wt4ZDOWIapLLb4tn6ez3uBoYThZnCrKCmWa6jjHyTYtJV5f8AOMEofOW67gdFhZ6zjEVOMAE2x4%2FWmbqL7NZ8ZLhvAYdppPWGzRvcy9iZNqJWh8UBf9Yxt7pUqMuqWGUnJf4aFFZuJiiFQhB3mEJqbF1o%2FKoCVMZ7QddJP4t2XIGQGWnb4GUsc5Szt9yct9EYnNBbtHGEr2kkfssiQnoMAK55W%2FUFON0PhMJSvhcIGOqUB3G1GTeDpZvEClsdhIJAlu4eTTrhAXB%2FM7dsC%2BFy8ZX7GIfpJgIrAi4k2kVpIwScuWs6oXvidXpbSfcaMRxomC%2BXJfGm6FW5mgCOMFeFozmK2IVOI%2FO9mFm65tOyYYW05s7lK97zIgv1fL3G68HgpO3VR9cvgfPZkefFqs8C784%2FpCvpWY5A2QODAe%2BnQU%2FAftjs0%2FrPEjqTQ00eoajwdnxhaGzpg&X-Amz-Signature=fe20a24ba12a365f07df07ffc6a0dd8670134883b541b30bd8b850d97b38c048&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVHBL4E%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCm0ILrAsJqLFXcODuIk5vHpwd37vWTWZFMKGBUNMNELwIgD1aHWSWf%2FPS%2F6Dw4rcmYNiGiWlMg3joljrAUbYKwio4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMYe%2B3Hhha9kbfiVCSrcA407F1T7txwIDUYBwkNAxiNf%2BLYOXM00TCisL7DMO7t2OANoBqoH2dW%2BkEnr5C4Ud55JrnUrvaLrWfbAriFXI9ZLPSwPJptf9%2Fh4cSmUAxZrHlBRw4cUIGFuwbdZRv%2BJjXCEGOb%2B0fndCefdbeHjxL5HtTU2mS%2Brs04gCQCIgnpJAQpg8B7i0gwce4BcXfE7vODhZcl01NbHeikOlbxZPfwquNT7a5Mu%2FWQZk9qioIrHDxEqXzdJkHLzcW2mjUeMPmoQJS4tYE3PsyGLV0pvVIJZl7w70ruRU%2Botrlke5ecE2sVfvBpQ9%2FJCyBtwa1wCbhcAy83lBLJJQnTYKWHPajo7Tmn11IILxKSr2iyKglV10lareU4B1xKi8WDGo1dPYP3YZZo8AU0es%2Bl8dYUZpy8ry4Wt4ZDOWIapLLb4tn6ez3uBoYThZnCrKCmWa6jjHyTYtJV5f8AOMEofOW67gdFhZ6zjEVOMAE2x4%2FWmbqL7NZ8ZLhvAYdppPWGzRvcy9iZNqJWh8UBf9Yxt7pUqMuqWGUnJf4aFFZuJiiFQhB3mEJqbF1o%2FKoCVMZ7QddJP4t2XIGQGWnb4GUsc5Szt9yct9EYnNBbtHGEr2kkfssiQnoMAK55W%2FUFON0PhMJSvhcIGOqUB3G1GTeDpZvEClsdhIJAlu4eTTrhAXB%2FM7dsC%2BFy8ZX7GIfpJgIrAi4k2kVpIwScuWs6oXvidXpbSfcaMRxomC%2BXJfGm6FW5mgCOMFeFozmK2IVOI%2FO9mFm65tOyYYW05s7lK97zIgv1fL3G68HgpO3VR9cvgfPZkefFqs8C784%2FpCvpWY5A2QODAe%2BnQU%2FAftjs0%2FrPEjqTQ00eoajwdnxhaGzpg&X-Amz-Signature=feaef3e91efcfd568138403e71c1948914b75e43eff4a1c2450a1a86d801b8da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
