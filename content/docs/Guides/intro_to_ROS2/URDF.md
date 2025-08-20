---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4NJTUJA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaIWp9O0bKrH1MGxhnHi1g%2BPyyBC8wSHSUzGP58j0LCwIhAP2naP4ohurOIKUqUHPswskZi%2BG74O3FayNbw68vjBRNKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FngT0iH8aZn7SS4q3ANxXIgcFe58zgRuFLp9ObYZUumwVMTaOQ7u4%2FG9pu7q4ZyvRwR87ltFj9ai4rK0j3hgALS2DupzQpScQqMC3RZFDkpJ9khR3tBTeswBjyV74OzR%2BnqgbYlppFcy4xF0N2oAc74AFinq6d55dUI9QZKh8eowrCeYwTwmDHIIPy4YpA3odPEKleS8EZVvlxVxTj6UmziGJE1AJptQVoBLCLi1lLVoldFIw%2BfkF48xC5Pig0hpLkaBH7YwrHKflnAfhGBbFta%2B8onWHwj7a9sznOvZja6km6j6pbvPnZDJIwwkDMrEmhhhWugHuX%2BwqBZ%2Bz5WuKvN0kUK8YcDJAYQgtW9lxSegl7SkmHxHxGX2KLnTBeHd8oIBMHAsBP47tXkKnSeK%2BtAeXcMCjJR2Igns7H6FAc1orp3DahoHKXQZufKqmjhXEFDICCTXE272K9qWYtooQDxFN%2FsEjzaR14jdZMMRYVxAoqnHiH2mz%2BDVrG9KbcyO9Ajic%2FpFQck04Qhsl0XvWZCplgXBEsEeCGRCI25Dxs6gdT4oMMBA%2B2rW21X19vo0%2BU%2BRiV3R4gx%2Bb36gwOQCuyra9dYo4nFYhFmwOYXwpSq9Sjp%2FjM4AZ3OZlKXCONz1OwE20zWA2it4tTDRppbFBjqkAXvb4norPvbcIw%2BAA62a710tvTzvV8uCplDn4iPmopwyeXchJ8yp03BRPuoeeOmCHrKlr6gptbIifUAEZUTR2wjrjPFdjE1RmbQFtF9wPt3FKPTL2iGlciMj6yl%2BgzX32BTqB4ia8IMSMyhMg14V5MV58zZgShu7QXEMKUMk4SaJZKlryGxhPFMEof%2Ba8qPih9gKLQZ%2Flhlas7qqa8OpR18%2Fc0w3&X-Amz-Signature=b585440342f5e8dfe9d9e321a17ab71287490f7a5cbf85edf62655808d3b112a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4NJTUJA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaIWp9O0bKrH1MGxhnHi1g%2BPyyBC8wSHSUzGP58j0LCwIhAP2naP4ohurOIKUqUHPswskZi%2BG74O3FayNbw68vjBRNKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FngT0iH8aZn7SS4q3ANxXIgcFe58zgRuFLp9ObYZUumwVMTaOQ7u4%2FG9pu7q4ZyvRwR87ltFj9ai4rK0j3hgALS2DupzQpScQqMC3RZFDkpJ9khR3tBTeswBjyV74OzR%2BnqgbYlppFcy4xF0N2oAc74AFinq6d55dUI9QZKh8eowrCeYwTwmDHIIPy4YpA3odPEKleS8EZVvlxVxTj6UmziGJE1AJptQVoBLCLi1lLVoldFIw%2BfkF48xC5Pig0hpLkaBH7YwrHKflnAfhGBbFta%2B8onWHwj7a9sznOvZja6km6j6pbvPnZDJIwwkDMrEmhhhWugHuX%2BwqBZ%2Bz5WuKvN0kUK8YcDJAYQgtW9lxSegl7SkmHxHxGX2KLnTBeHd8oIBMHAsBP47tXkKnSeK%2BtAeXcMCjJR2Igns7H6FAc1orp3DahoHKXQZufKqmjhXEFDICCTXE272K9qWYtooQDxFN%2FsEjzaR14jdZMMRYVxAoqnHiH2mz%2BDVrG9KbcyO9Ajic%2FpFQck04Qhsl0XvWZCplgXBEsEeCGRCI25Dxs6gdT4oMMBA%2B2rW21X19vo0%2BU%2BRiV3R4gx%2Bb36gwOQCuyra9dYo4nFYhFmwOYXwpSq9Sjp%2FjM4AZ3OZlKXCONz1OwE20zWA2it4tTDRppbFBjqkAXvb4norPvbcIw%2BAA62a710tvTzvV8uCplDn4iPmopwyeXchJ8yp03BRPuoeeOmCHrKlr6gptbIifUAEZUTR2wjrjPFdjE1RmbQFtF9wPt3FKPTL2iGlciMj6yl%2BgzX32BTqB4ia8IMSMyhMg14V5MV58zZgShu7QXEMKUMk4SaJZKlryGxhPFMEof%2Ba8qPih9gKLQZ%2Flhlas7qqa8OpR18%2Fc0w3&X-Amz-Signature=cd6e127967a37d2db5f0e7a2e662bc26de778f0eba1d4a106377fa53efec625b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
