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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKTIF5Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAofCCOIxJnjpC7h1a0ZaNxXcMhLVz7nM0iC1jbdeL0iAiEA8MFqu%2B8CSjEJw%2FTYMjpnEvpoCDexECo6PPf5t%2BA60Ykq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDASgnDN%2FAHId8veqASrcA9H4qhc4WnAPSPByIwbG69XIrYkApjsFYBp1Vs3nvC7JdVh0dcfbBZDgC3gS%2FCZroGvmSSSnQIMHf%2F8Iaca9kLN2avHZ%2B3c89fp1Oabbm3yS2R%2BX9BvTaiDmT%2FfOv1jSbe%2BPeFOY%2Bs2gimB4LNpKcKZ4zVETWgfe3Z89eCrPvCXTv897MSGFp%2F9LR6lfvdQvs%2F8SO8f0tZNQg7ajZakjtpc1I5Fi7e9nATblVq44YFkUOPL%2BwF9pviv9yQX3pEYU5Vs38G8npT%2FBlv6xLjGMa6mg6KhVr0Bcy9S%2BfDNSJo4DOW55ADPEe934YxPNivDsi3d%2BUT%2Fa%2FYYxwmmPflv42ibRWORz%2BqKXcBqOcCzOLpONh33IYIR59y1L%2B49bA8k2EU%2Fe6FKHh1wWxorSd63bIQuRvj87kgAit3HVAtUg0qKGwgXa9Lf%2FUFK4mNYt1ZHCCotFTdMKwvqdFKPwYfWuzqtOU%2BhGwLNHw%2F2oLf9lAYLY%2Fp%2FWVndEMNIkRT7%2Fsl4EJWK%2BKAPSd9%2BITEQjQvger8IFIcrVfjOiOX8GBDiWsBmn8lj%2BfTS%2B1Vy7jG2t0W7yPMMzXbLPiQ3yT6spEGfccV5VB18MqZ0FaEFZbqld6CFdUGPU9%2Bg1by8KTE7jMIyl2cEGOqUByP1GW3bySKHsbZgPgPZxIXhCVNywQXBSzzRSQyAWnTpWAwTSzM4yPrpFkAshaUUEYRFGeIyRfi4w7w3Z8mdVggIGkDLqJFYVHa7LeJvfxl42kLMEn1mfNYTQvrk%2Fj9mUJ%2B%2Fkelkwo30DfQQ8dXR%2F5jdtGESvFVBm%2FOLag8KfLtAWlQ7%2BxXo%2BudjEnR7ihb5AycICiAohQqaRpLLnB1jRhoj1aVQH&X-Amz-Signature=b4ceadb4d7c046a78409ef9b3be34ca47ea083d224dec17a125a961a638e1c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKTIF5Y%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAofCCOIxJnjpC7h1a0ZaNxXcMhLVz7nM0iC1jbdeL0iAiEA8MFqu%2B8CSjEJw%2FTYMjpnEvpoCDexECo6PPf5t%2BA60Ykq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDASgnDN%2FAHId8veqASrcA9H4qhc4WnAPSPByIwbG69XIrYkApjsFYBp1Vs3nvC7JdVh0dcfbBZDgC3gS%2FCZroGvmSSSnQIMHf%2F8Iaca9kLN2avHZ%2B3c89fp1Oabbm3yS2R%2BX9BvTaiDmT%2FfOv1jSbe%2BPeFOY%2Bs2gimB4LNpKcKZ4zVETWgfe3Z89eCrPvCXTv897MSGFp%2F9LR6lfvdQvs%2F8SO8f0tZNQg7ajZakjtpc1I5Fi7e9nATblVq44YFkUOPL%2BwF9pviv9yQX3pEYU5Vs38G8npT%2FBlv6xLjGMa6mg6KhVr0Bcy9S%2BfDNSJo4DOW55ADPEe934YxPNivDsi3d%2BUT%2Fa%2FYYxwmmPflv42ibRWORz%2BqKXcBqOcCzOLpONh33IYIR59y1L%2B49bA8k2EU%2Fe6FKHh1wWxorSd63bIQuRvj87kgAit3HVAtUg0qKGwgXa9Lf%2FUFK4mNYt1ZHCCotFTdMKwvqdFKPwYfWuzqtOU%2BhGwLNHw%2F2oLf9lAYLY%2Fp%2FWVndEMNIkRT7%2Fsl4EJWK%2BKAPSd9%2BITEQjQvger8IFIcrVfjOiOX8GBDiWsBmn8lj%2BfTS%2B1Vy7jG2t0W7yPMMzXbLPiQ3yT6spEGfccV5VB18MqZ0FaEFZbqld6CFdUGPU9%2Bg1by8KTE7jMIyl2cEGOqUByP1GW3bySKHsbZgPgPZxIXhCVNywQXBSzzRSQyAWnTpWAwTSzM4yPrpFkAshaUUEYRFGeIyRfi4w7w3Z8mdVggIGkDLqJFYVHa7LeJvfxl42kLMEn1mfNYTQvrk%2Fj9mUJ%2B%2Fkelkwo30DfQQ8dXR%2F5jdtGESvFVBm%2FOLag8KfLtAWlQ7%2BxXo%2BudjEnR7ihb5AycICiAohQqaRpLLnB1jRhoj1aVQH&X-Amz-Signature=fbe8fff93153832df1e9d2afc2a827edfb71e285500c7f4302f9f81064582543&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
