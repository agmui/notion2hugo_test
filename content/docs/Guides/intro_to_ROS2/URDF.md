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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEKMNFS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBOMe5HvxLI1f1iid5Uf6KrAlDJnjPaQpRORK7Ll2iVWAiEA5WiqMwoYeCwGnjnzGVa%2FeLXiTZGKjUWY0vTdNAKulRcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEAyj8RN2AQ15MXlircA1D%2FPqRUkIYINnIHUvELLqMwQy%2Baoop3TuYe8PMwQU52FV3Q1CPJgSsR5MXr%2BiLkpPfGcacKlgh9%2BsHW%2FwIhzukYUrf%2Bqd6npp1vKSeYDjIYU2XP1SMqA1i3pN9JiGFgbAfhxModzNM88KJGBM5HhhxJEgbjfw0fo5tgM4VojRDghit1aajDGpieqdEyfXELMccbsWpLXIwGopjzmBLVcCYfONfkdJutQKFKUbdaV%2FQNZ9OoFqd7xNiZt%2Fi04C%2FPq%2BClwajBuEgs3tYPQjtD7j9AdtT0IDABUk%2BlfeihSpm6cNli12mWtb1%2F%2FaVOAU615428AABC6%2FM3%2FtCw%2FdkgeyL6vXcipB08cjthmkN3Ng%2F8ei00xhG2PWU7MToZDqlFRjkmqoO%2BsdM%2BGLAE5ToJkgWAaQKSOkr7YM9uuykPTAUqWAZ%2Bi2CZoQQfQN9y0PPeK8dq4qhdAg46Rpe8BNsHy6L8EGgZ1mVX4dWe5K%2BdtJ%2BJNs0k7rcrgFTGLNQpOEWAm6qYkA80PWThQnWl7eTWM%2BnbQ5U6KXOo1%2BLg77Uaddz2p7zmE0YKT0v3G9%2F1Lz9JG01jCZNcmVab76xZH1%2BkxBDNItoB%2FJrmfKmwp%2F5xysrhQb2J5xcDxRic%2BBtgMIKVqL8GOqUBZjVR2aAjRkTKyxpgQUcjGRFUxytyWLfVL9JtV1Xr6bGMWl9iV%2Ff5oeU7m1su6CEiNICeZgn0dTGebgWpmLiaA52GysHRuaEeIzU0yPcFOdgxHK6kmJwRPMDQadxANhGa3yDWMW%2Bu4RW5a0P4VTYVob9rVdRscpzDmWY80D3riQKvFydSZgD%2BZf%2FZXAoWEWP%2FWJ%2FZO0vTdHqNAa9JhTcurnkjY0MM&X-Amz-Signature=a2974e8e3ef2978607bda83f02a25bded6793b44631598c06e7c21fdf9ca0de1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEKMNFS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBOMe5HvxLI1f1iid5Uf6KrAlDJnjPaQpRORK7Ll2iVWAiEA5WiqMwoYeCwGnjnzGVa%2FeLXiTZGKjUWY0vTdNAKulRcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEAyj8RN2AQ15MXlircA1D%2FPqRUkIYINnIHUvELLqMwQy%2Baoop3TuYe8PMwQU52FV3Q1CPJgSsR5MXr%2BiLkpPfGcacKlgh9%2BsHW%2FwIhzukYUrf%2Bqd6npp1vKSeYDjIYU2XP1SMqA1i3pN9JiGFgbAfhxModzNM88KJGBM5HhhxJEgbjfw0fo5tgM4VojRDghit1aajDGpieqdEyfXELMccbsWpLXIwGopjzmBLVcCYfONfkdJutQKFKUbdaV%2FQNZ9OoFqd7xNiZt%2Fi04C%2FPq%2BClwajBuEgs3tYPQjtD7j9AdtT0IDABUk%2BlfeihSpm6cNli12mWtb1%2F%2FaVOAU615428AABC6%2FM3%2FtCw%2FdkgeyL6vXcipB08cjthmkN3Ng%2F8ei00xhG2PWU7MToZDqlFRjkmqoO%2BsdM%2BGLAE5ToJkgWAaQKSOkr7YM9uuykPTAUqWAZ%2Bi2CZoQQfQN9y0PPeK8dq4qhdAg46Rpe8BNsHy6L8EGgZ1mVX4dWe5K%2BdtJ%2BJNs0k7rcrgFTGLNQpOEWAm6qYkA80PWThQnWl7eTWM%2BnbQ5U6KXOo1%2BLg77Uaddz2p7zmE0YKT0v3G9%2F1Lz9JG01jCZNcmVab76xZH1%2BkxBDNItoB%2FJrmfKmwp%2F5xysrhQb2J5xcDxRic%2BBtgMIKVqL8GOqUBZjVR2aAjRkTKyxpgQUcjGRFUxytyWLfVL9JtV1Xr6bGMWl9iV%2Ff5oeU7m1su6CEiNICeZgn0dTGebgWpmLiaA52GysHRuaEeIzU0yPcFOdgxHK6kmJwRPMDQadxANhGa3yDWMW%2Bu4RW5a0P4VTYVob9rVdRscpzDmWY80D3riQKvFydSZgD%2BZf%2FZXAoWEWP%2FWJ%2FZO0vTdHqNAa9JhTcurnkjY0MM&X-Amz-Signature=c35dc78e72036274b2bf8c8340597333e37f1a7bd4d521bbc3daad6084aa5cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
