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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYPN2N3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU4y6FBppVkn18vCI7ta6d6z%2FQblJkpRGq5v1Hg%2BnBzAiEAm3WAv5oWRK9NcRd6N5l8EiIbbhQdHBfGILnl540PoDwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMa5UqhRZnc%2FlpTfzircAyuvIltz1ifu5z5Ph5ZeUSy1mL7duE4oXqfIA8no3zrlb6hClvDnVWGxtlPHhdzrFmi5FQQcxgBWkK8q7nf0z1cBHRnDW18QPl6ErKNMxnOuzZupFHpEtOb6hOoXitk1r%2B4LWp6Sa2WIPG39ea60%2BJjmyVYWjPzWpWuUCNXCW1wm%2BDpZw8kPDA8g0LuJM1kdlcAp5dygXYAY0%2BeNpormW%2FSVUpP%2BfxPzNv9WIGFcRzlpENpFCYnRs09LGVZYsfNV1jAwoRUjyu0DaolFWsD53C18Pw%2FOaEaCewBb4UOrSJ%2FqBdhXL%2BbMZKj5jl8QCrR1PMmrFlCJCDTy23T0kMOHITwj0Hs6httDQFvnaHbPNZDGW67jGg7LpotPV7JuTstGbEz%2FVBaQCzt5gMIoAiNweTXuWNTl5e%2BR4%2BKdtHdAkwVJjEho4vILycmgDUJl9QkR1PCm3OuGdrzcUmLuxGl1cXlwr3XVWnLVRGxvE3RdccZ36Dwxel3XVZQwIlXfxG0XmtB99S%2F4FeE%2BzIhPUz8gUuGVkQtXYEkbmr%2FWrnhfyTMhNAxW03gvXHTNP4gR28upLbdax%2B3ATycwnU9ktERWiNGQZqyCgsHhXfcd3gIXDgohP7gUVAC1JFFw4dVrMN7NicMGOqUBNP%2B8kuLYFv4Cy8kCVJzvdo6SazuRD%2Bqt%2Fr7oTPTaPbB60OMyVLzqjgE%2BMXgTHrhQ5Jb3zqrlPb%2BKhh8Yi%2BWUOgPU2fVm%2FzUzjv5%2F9Qz5vk8wmPGlWiKWuuwluF8C5H39dXHcw%2FmVU%2FKUjcii6qXChnmgP7mntq6ud2CfNqbFH5zE0TEmMY0flXLWqBQP%2BNx2LLsl%2BgEb%2BwKJy0zjYwG5nF1p39uf&X-Amz-Signature=b91270164d2e5d9157117250e79df17c366e4696845d16b5596b1b3a193fce4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYPN2N3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU4y6FBppVkn18vCI7ta6d6z%2FQblJkpRGq5v1Hg%2BnBzAiEAm3WAv5oWRK9NcRd6N5l8EiIbbhQdHBfGILnl540PoDwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMa5UqhRZnc%2FlpTfzircAyuvIltz1ifu5z5Ph5ZeUSy1mL7duE4oXqfIA8no3zrlb6hClvDnVWGxtlPHhdzrFmi5FQQcxgBWkK8q7nf0z1cBHRnDW18QPl6ErKNMxnOuzZupFHpEtOb6hOoXitk1r%2B4LWp6Sa2WIPG39ea60%2BJjmyVYWjPzWpWuUCNXCW1wm%2BDpZw8kPDA8g0LuJM1kdlcAp5dygXYAY0%2BeNpormW%2FSVUpP%2BfxPzNv9WIGFcRzlpENpFCYnRs09LGVZYsfNV1jAwoRUjyu0DaolFWsD53C18Pw%2FOaEaCewBb4UOrSJ%2FqBdhXL%2BbMZKj5jl8QCrR1PMmrFlCJCDTy23T0kMOHITwj0Hs6httDQFvnaHbPNZDGW67jGg7LpotPV7JuTstGbEz%2FVBaQCzt5gMIoAiNweTXuWNTl5e%2BR4%2BKdtHdAkwVJjEho4vILycmgDUJl9QkR1PCm3OuGdrzcUmLuxGl1cXlwr3XVWnLVRGxvE3RdccZ36Dwxel3XVZQwIlXfxG0XmtB99S%2F4FeE%2BzIhPUz8gUuGVkQtXYEkbmr%2FWrnhfyTMhNAxW03gvXHTNP4gR28upLbdax%2B3ATycwnU9ktERWiNGQZqyCgsHhXfcd3gIXDgohP7gUVAC1JFFw4dVrMN7NicMGOqUBNP%2B8kuLYFv4Cy8kCVJzvdo6SazuRD%2Bqt%2Fr7oTPTaPbB60OMyVLzqjgE%2BMXgTHrhQ5Jb3zqrlPb%2BKhh8Yi%2BWUOgPU2fVm%2FzUzjv5%2F9Qz5vk8wmPGlWiKWuuwluF8C5H39dXHcw%2FmVU%2FKUjcii6qXChnmgP7mntq6ud2CfNqbFH5zE0TEmMY0flXLWqBQP%2BNx2LLsl%2BgEb%2BwKJy0zjYwG5nF1p39uf&X-Amz-Signature=6255eb22bc7655c9c9355bc0e68a7d1d8bbbdc8a65fcd26af9bf68f88430b69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
