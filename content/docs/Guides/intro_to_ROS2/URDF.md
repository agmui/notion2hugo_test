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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJQZTQBE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBo3dbZ878ibyu%2FKpnJiDhpZvoGJtFjEIi4D90ARNILcAiEAxZwS%2Fup1aag26u4L%2FGLuZD089%2Fdi3IvPNlZPCzoIOHoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBOOuASjcdZxjf4HrCrcA62e039lch6IdZ3lCPaplU83nWqNCE5g6EsgMx6Ex1fFotvLJLO98Y3i65%2BWJprCk%2FWJ1wUKV9wWgiQOSjk%2FyBeDyRGl%2FLMHgpC%2BUrWBrNlKNml5cwFxCFTlpbNMhdaSJqk02mKdCSTNf3%2BrODK3lLQKWS3xj2Z9S5HC0oNGOVuiGFNxsX33zh5RSF%2FZtiW4wk3jwNvvdf6uSikgONpamxygMHzXkmBdY94vOKlmmxYQ4SyOLLHH%2BArm6mdYmK%2BuChKpEwUU4pu04qXU4JsFrkOlxh2Wzma7muxIg3TMHjsitEy2zWsS4MaTpWeJnenLf1zwKHvBYBHJw3F%2B%2BVTezfwi0NLJegU8OVVU%2FLwCNs0qgS%2FKTPM9V4gWNbgzBajz3uePwxknJzC7lV%2F8pdC1YwN%2F8cb6zWV9aNPfBmYxYfj5sLcx87R73VUK9qO%2Bf%2B3l2iI%2ButaHEMzWd%2FnhsfGYkAxDTxd1RISr7PCBLFzJFXhs6GLxSh9dD%2FKRa6GPT3OITGFHsMCXeAiHImijMCbwYuiZpK1NZwfpBjoUdUq4okFoLosTMZvlUi9B%2Fzdbmj2yf3G2KK9nlhWS11bV2sn2mLHXwvf3%2BAyCzhcMCHgE%2FMhIFPQ2FRu1q%2Bh8%2FPYcMNXEhsIGOqUBeBGw1X4OnflHHltiQk%2BXuswOPQWq%2FaAz129i%2FONsKoWrRbalRAFSp2zi%2FfxSH0%2Fua%2B7yg%2FKHL7ENDcz5Dij4riIwR0QHbhlISHcGCQ3gDXvDNjW1OixIpyzvG3B77mFRLHDPSM9hHmkJpZ3uTBhCnsGomW2fvJijz7UTFbSmdhCWN4UC52HvLaPt6Xj5FsuyY09OJWMzNk492gHBMiNvAP0FRuj8&X-Amz-Signature=3f6de7cb93033a940bd3feaeb35406fa5d831e012bd03f395d2d6046601ded6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJQZTQBE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBo3dbZ878ibyu%2FKpnJiDhpZvoGJtFjEIi4D90ARNILcAiEAxZwS%2Fup1aag26u4L%2FGLuZD089%2Fdi3IvPNlZPCzoIOHoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBOOuASjcdZxjf4HrCrcA62e039lch6IdZ3lCPaplU83nWqNCE5g6EsgMx6Ex1fFotvLJLO98Y3i65%2BWJprCk%2FWJ1wUKV9wWgiQOSjk%2FyBeDyRGl%2FLMHgpC%2BUrWBrNlKNml5cwFxCFTlpbNMhdaSJqk02mKdCSTNf3%2BrODK3lLQKWS3xj2Z9S5HC0oNGOVuiGFNxsX33zh5RSF%2FZtiW4wk3jwNvvdf6uSikgONpamxygMHzXkmBdY94vOKlmmxYQ4SyOLLHH%2BArm6mdYmK%2BuChKpEwUU4pu04qXU4JsFrkOlxh2Wzma7muxIg3TMHjsitEy2zWsS4MaTpWeJnenLf1zwKHvBYBHJw3F%2B%2BVTezfwi0NLJegU8OVVU%2FLwCNs0qgS%2FKTPM9V4gWNbgzBajz3uePwxknJzC7lV%2F8pdC1YwN%2F8cb6zWV9aNPfBmYxYfj5sLcx87R73VUK9qO%2Bf%2B3l2iI%2ButaHEMzWd%2FnhsfGYkAxDTxd1RISr7PCBLFzJFXhs6GLxSh9dD%2FKRa6GPT3OITGFHsMCXeAiHImijMCbwYuiZpK1NZwfpBjoUdUq4okFoLosTMZvlUi9B%2Fzdbmj2yf3G2KK9nlhWS11bV2sn2mLHXwvf3%2BAyCzhcMCHgE%2FMhIFPQ2FRu1q%2Bh8%2FPYcMNXEhsIGOqUBeBGw1X4OnflHHltiQk%2BXuswOPQWq%2FaAz129i%2FONsKoWrRbalRAFSp2zi%2FfxSH0%2Fua%2B7yg%2FKHL7ENDcz5Dij4riIwR0QHbhlISHcGCQ3gDXvDNjW1OixIpyzvG3B77mFRLHDPSM9hHmkJpZ3uTBhCnsGomW2fvJijz7UTFbSmdhCWN4UC52HvLaPt6Xj5FsuyY09OJWMzNk492gHBMiNvAP0FRuj8&X-Amz-Signature=a5e81365f673da65f5a7d552927c173667003db8c9e0dae2f1e4c4e803de6670&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
