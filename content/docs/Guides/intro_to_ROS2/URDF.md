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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYM34UCS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvbww5X08KoNG9PmncrKmoxywFI7i4xbrxKyNVzqOyKAIhAMWjk9f2ll5YVLersXxuigwsr9u92SfeNW06pDZQOaDLKv8DCBIQABoMNjM3NDIzMTgzODA1Igy0OkdZG503opIIpTcq3AMnJxRSmElT0MDt5MYXZ5qmClNYIoCS7wZOwy88Up0AjzyhXKbbWyrXkhV1m4eawrnP1dsVLS%2FSLn7fBf1F37UIHw0HP0cC3D8nI90q9NoGnv3wzgeSOUhMarqM3j92TmD1MKw9gWKwtqkwT5ZTWXa4SASTBQZEaUGKzKFI%2Bskot9%2BbQ%2FxJ4RE9zW7aSrNPMidW8DSo4bleMLAoNKx6vdTfL7ZGg6kUg184Baub8i8c2PI2JqjRvl7XS6xoPTsfK4AX9QA6Vveq5XdBq8WdYwtVyHfgjAUEZksirTCu8W7FaHlzwxVnehkonlEKQSQX5v%2F44YhFLCmQt%2BTMY80KqdV%2BhoVbqUhd60ohvJkDep0nMXTpPcqoDf962DodA12RiOCP7lRQB%2BHLOOUEp4Y4kwWog35IARFRVuQlvplfzxEjc7bKnOOzEdCO271jZt9gMRIGhah7B0VRo1lJMgFlMEb%2FEAptcJbGcUia9m5eG7n6vic16KYXfyWv7tU4G2kyW2knKDEFTTId7qbeSZG3y%2B1GDLTLawxSiMTg0fPO8%2Fr8%2FZJBmGUl%2FVyrTyT6BeMCTZFhwrV5Pun8VAhFDmNBmLoFrdIT6ahg5QvIa68TFx%2Foh%2FTSzDmPHhQHn6dYWjCkr6C%2BBjqkAfHC3q8JeNoQ0AH6QOA1IJLn83lnNxq7VzK6lygNuDD39kqcVqe7%2BYQdygx1PBIEKE59BVBX73PxUllP%2BBRMtnBBZSpCDWR%2BbitlDEqnonIJ1l11ROIIjN45yjKJSOYGJ4naJIaGOu6skPL7tiH7ZT%2BWYQdSGPzS5M1yb3%2FbO5Tl%2F1ZB28jsGTBoph9nS5%2BQjHGS7rDbTzDp9CvmvGFyqn0AvEKo&X-Amz-Signature=087530f4c4cfc18c041a82269afd9816b482100c2476c5b3d8a622730351bdfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYM34UCS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvbww5X08KoNG9PmncrKmoxywFI7i4xbrxKyNVzqOyKAIhAMWjk9f2ll5YVLersXxuigwsr9u92SfeNW06pDZQOaDLKv8DCBIQABoMNjM3NDIzMTgzODA1Igy0OkdZG503opIIpTcq3AMnJxRSmElT0MDt5MYXZ5qmClNYIoCS7wZOwy88Up0AjzyhXKbbWyrXkhV1m4eawrnP1dsVLS%2FSLn7fBf1F37UIHw0HP0cC3D8nI90q9NoGnv3wzgeSOUhMarqM3j92TmD1MKw9gWKwtqkwT5ZTWXa4SASTBQZEaUGKzKFI%2Bskot9%2BbQ%2FxJ4RE9zW7aSrNPMidW8DSo4bleMLAoNKx6vdTfL7ZGg6kUg184Baub8i8c2PI2JqjRvl7XS6xoPTsfK4AX9QA6Vveq5XdBq8WdYwtVyHfgjAUEZksirTCu8W7FaHlzwxVnehkonlEKQSQX5v%2F44YhFLCmQt%2BTMY80KqdV%2BhoVbqUhd60ohvJkDep0nMXTpPcqoDf962DodA12RiOCP7lRQB%2BHLOOUEp4Y4kwWog35IARFRVuQlvplfzxEjc7bKnOOzEdCO271jZt9gMRIGhah7B0VRo1lJMgFlMEb%2FEAptcJbGcUia9m5eG7n6vic16KYXfyWv7tU4G2kyW2knKDEFTTId7qbeSZG3y%2B1GDLTLawxSiMTg0fPO8%2Fr8%2FZJBmGUl%2FVyrTyT6BeMCTZFhwrV5Pun8VAhFDmNBmLoFrdIT6ahg5QvIa68TFx%2Foh%2FTSzDmPHhQHn6dYWjCkr6C%2BBjqkAfHC3q8JeNoQ0AH6QOA1IJLn83lnNxq7VzK6lygNuDD39kqcVqe7%2BYQdygx1PBIEKE59BVBX73PxUllP%2BBRMtnBBZSpCDWR%2BbitlDEqnonIJ1l11ROIIjN45yjKJSOYGJ4naJIaGOu6skPL7tiH7ZT%2BWYQdSGPzS5M1yb3%2FbO5Tl%2F1ZB28jsGTBoph9nS5%2BQjHGS7rDbTzDp9CvmvGFyqn0AvEKo&X-Amz-Signature=f56d07c44a6ffe7e937d9283f65da13e2a81d1c4912c4a34872bab85bc1c544b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
