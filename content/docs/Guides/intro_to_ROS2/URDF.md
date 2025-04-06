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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFNPXD2%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7o0hqioIrnQ6rxg3IkNzF5pGNL5L9hf%2B1FRMR2UGJ5AiBc9ctb%2FOfdxSfOMPbCOKGe7A%2FmCLYgCU5LzH6q6dpH1Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZqLyLvkGa5uuQ6%2BxKtwDwFpiVbsbZ5v8cTUgfQlzv6Twqlzm47Ddd3AKWxz1U5fJXUlIEgMY798hKMFFgS1Ls4GN0MBlBiE0IFFEa72Q9j5C9M%2BGbAH2ryvu9czLmgfEQFFLVABgrx8zouctGpWlTzvUYJpFM2QFHuTRbuXo2R0hQsi7VZYmTmRua0QtGOZ16jrOnN1j0ewQf0pa6COKffGpQ0q6Uk3qwTipnjDIxhOnKz9H7F7rmXPQBKqvlRZWNQNZEpm2%2BUhkQEdAAETIZOcyB4DFp93RtcfhrK%2F7h6BmqOODDoYLhy6sCy9K0eiUU5cfhOPIsb7HkKEwgX67wnQ5U37y3JkvDBskK2mElMmrqDaWBXjlJNr2vf%2FEVmU9UZUUpgIDii8nGHd%2BcYQ2KhiBBoFcDxYzN8QfV8rtrWrjhbgNJBDqekEu6qHPdvaAFZbgC4Z2Cq9tscEXswZCFodBr%2B0jyy4y8%2B5I%2Fc8Cfio6teQKyhtLjqIzRmYsnz2LD3%2FimF4v6w7mXMEcrDCtemvW6bAVItKzzuAO5QvGYzBVDkVm0gNtkxrbwIS0KbrZwy7vYnepmdwy7eAzq3zh9z9rhuVKWnKMC6Q7dKE7DCwYvKejZ27zZCS8CQg%2B7FU%2FpKE6fu39z9cmQuQwvpvKvwY6pgEeFCEHaQ1%2BdbeGfqvlXL7zTe9hEGsi3W2JT%2FEsKMjk%2B%2FNCYufJxB%2Fl2cLs2yFZZLFPm76ILlsq91lcfWQALTKJkeyN95h14GlNLro4anJSdZlvV7c5XeK2b%2BWk76I%2Flw7b7XzKnVbEeDnC7XQyQyEhyeit1oMxpkyU%2BOREWPrd9NjFXHx51WNXIYKGZG%2Fk87%2FDUgODrBvfm%2B%2BxD7T9L6p%2BCYU1lC2Q&X-Amz-Signature=1c6cda87de35bd07a9783f19b4740902b90e5299ad9ac4c748c7118c6ea4dc6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFNPXD2%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7o0hqioIrnQ6rxg3IkNzF5pGNL5L9hf%2B1FRMR2UGJ5AiBc9ctb%2FOfdxSfOMPbCOKGe7A%2FmCLYgCU5LzH6q6dpH1Sr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMZqLyLvkGa5uuQ6%2BxKtwDwFpiVbsbZ5v8cTUgfQlzv6Twqlzm47Ddd3AKWxz1U5fJXUlIEgMY798hKMFFgS1Ls4GN0MBlBiE0IFFEa72Q9j5C9M%2BGbAH2ryvu9czLmgfEQFFLVABgrx8zouctGpWlTzvUYJpFM2QFHuTRbuXo2R0hQsi7VZYmTmRua0QtGOZ16jrOnN1j0ewQf0pa6COKffGpQ0q6Uk3qwTipnjDIxhOnKz9H7F7rmXPQBKqvlRZWNQNZEpm2%2BUhkQEdAAETIZOcyB4DFp93RtcfhrK%2F7h6BmqOODDoYLhy6sCy9K0eiUU5cfhOPIsb7HkKEwgX67wnQ5U37y3JkvDBskK2mElMmrqDaWBXjlJNr2vf%2FEVmU9UZUUpgIDii8nGHd%2BcYQ2KhiBBoFcDxYzN8QfV8rtrWrjhbgNJBDqekEu6qHPdvaAFZbgC4Z2Cq9tscEXswZCFodBr%2B0jyy4y8%2B5I%2Fc8Cfio6teQKyhtLjqIzRmYsnz2LD3%2FimF4v6w7mXMEcrDCtemvW6bAVItKzzuAO5QvGYzBVDkVm0gNtkxrbwIS0KbrZwy7vYnepmdwy7eAzq3zh9z9rhuVKWnKMC6Q7dKE7DCwYvKejZ27zZCS8CQg%2B7FU%2FpKE6fu39z9cmQuQwvpvKvwY6pgEeFCEHaQ1%2BdbeGfqvlXL7zTe9hEGsi3W2JT%2FEsKMjk%2B%2FNCYufJxB%2Fl2cLs2yFZZLFPm76ILlsq91lcfWQALTKJkeyN95h14GlNLro4anJSdZlvV7c5XeK2b%2BWk76I%2Flw7b7XzKnVbEeDnC7XQyQyEhyeit1oMxpkyU%2BOREWPrd9NjFXHx51WNXIYKGZG%2Fk87%2FDUgODrBvfm%2B%2BxD7T9L6p%2BCYU1lC2Q&X-Amz-Signature=9d0fc95b7457814a24ed774dff5c145e1b6b6731a59f9a79bb0aeeeeba9f1974&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
