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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KAXIELG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA7XP6CsoVduu4%2BswXm2E2MxyOFBOo%2Fmov35RqGdGQ0%2FAiAaHyoTj9uG45nzHQRGNrfpYcRfVwSLT05YDxxLR497mCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHwlJGf6V4DMqibM4KtwDRMSE6uhyl4XViHWyBcI1XourF0Cct82JZ1MCH%2FK61O6DCNS5maFNyZbb7S2YT49oYAwPQJQQG%2BuqSrZb0FQVaTI1pR65LSKKwVDlm6%2F64J5J4aXHXYeFA1Px71lVCI%2FbFNG6AIu4DchWnn3dXZPlqblJ%2FvyQYQ%2FW8xC1lap9xqykEEVqLGSlsQ%2FX7yeiCpPZ1wDh1sQL00hzY%2Bzn11LTl%2Fg8zQ7j2B6a1po37y5ot1SVKVNtkOuPWfDeVSB6rbDNtqhb4nR75Byl1Pe9IfdudhHXjzsm5aZyYCBSXCYOmHDcy7o%2BZYx1WKPL2xzts9uJIkO%2BvFebsIxmzDbe1ambhWmqUj3wIX5cdUpLCMqEo%2BUFc9WNw1z8K6UkTqOzFZRhzCWblocwPvNPY37lVu%2FiGsSIetEP6H%2Fr64uBNS8U%2F5d7dI%2BB2aAmvYFBw%2F36mnkeCC%2Fdsxl8aEXrbOSxWEJGhyVUbKauOW8hhxqw7%2Btqr57uk1WHjD12%2F9tWTuaELyq4hvKWDEdMHcZdaaXnMqmT%2Bnt85%2FzSLCMlh%2BCLxGgWgYooHHXiBRacXMoO1BpC9Nk4bhm9E69zv98f%2BN3oVa2OK0aeFxhtUantQmR1%2FBUetSDL6BCN0zyGRUmFvLIww7aWwQY6pgEbFkoR1koILW1kUfQroczIZ2rKTfgsHt5NxrnIKxPSKXg4x3S4gAfQuiaJgwKE351Agf986y%2BmuWIrFNV3jBbCpELkDhUDSocB7oMcQ3OjVspToOu0Ue8Zn2fCpIL0HrXIKsG5rUgejQ7EVsBv7EBcWQ4S35uGnSuxNB3yM631zeEDPTHaHAiqTt%2B9biD6aBClUPGCbEONAF3ThhMmerMr1ymDhKgv&X-Amz-Signature=ed603094d077ddb40327e92347dcd67eb18f1de71b26606bea72b227b892757f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KAXIELG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA7XP6CsoVduu4%2BswXm2E2MxyOFBOo%2Fmov35RqGdGQ0%2FAiAaHyoTj9uG45nzHQRGNrfpYcRfVwSLT05YDxxLR497mCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMHwlJGf6V4DMqibM4KtwDRMSE6uhyl4XViHWyBcI1XourF0Cct82JZ1MCH%2FK61O6DCNS5maFNyZbb7S2YT49oYAwPQJQQG%2BuqSrZb0FQVaTI1pR65LSKKwVDlm6%2F64J5J4aXHXYeFA1Px71lVCI%2FbFNG6AIu4DchWnn3dXZPlqblJ%2FvyQYQ%2FW8xC1lap9xqykEEVqLGSlsQ%2FX7yeiCpPZ1wDh1sQL00hzY%2Bzn11LTl%2Fg8zQ7j2B6a1po37y5ot1SVKVNtkOuPWfDeVSB6rbDNtqhb4nR75Byl1Pe9IfdudhHXjzsm5aZyYCBSXCYOmHDcy7o%2BZYx1WKPL2xzts9uJIkO%2BvFebsIxmzDbe1ambhWmqUj3wIX5cdUpLCMqEo%2BUFc9WNw1z8K6UkTqOzFZRhzCWblocwPvNPY37lVu%2FiGsSIetEP6H%2Fr64uBNS8U%2F5d7dI%2BB2aAmvYFBw%2F36mnkeCC%2Fdsxl8aEXrbOSxWEJGhyVUbKauOW8hhxqw7%2Btqr57uk1WHjD12%2F9tWTuaELyq4hvKWDEdMHcZdaaXnMqmT%2Bnt85%2FzSLCMlh%2BCLxGgWgYooHHXiBRacXMoO1BpC9Nk4bhm9E69zv98f%2BN3oVa2OK0aeFxhtUantQmR1%2FBUetSDL6BCN0zyGRUmFvLIww7aWwQY6pgEbFkoR1koILW1kUfQroczIZ2rKTfgsHt5NxrnIKxPSKXg4x3S4gAfQuiaJgwKE351Agf986y%2BmuWIrFNV3jBbCpELkDhUDSocB7oMcQ3OjVspToOu0Ue8Zn2fCpIL0HrXIKsG5rUgejQ7EVsBv7EBcWQ4S35uGnSuxNB3yM631zeEDPTHaHAiqTt%2B9biD6aBClUPGCbEONAF3ThhMmerMr1ymDhKgv&X-Amz-Signature=cd71439ef59bf1f160019cec1ef4aaf34a66a58926540ea9ec0b197cd0b50fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
