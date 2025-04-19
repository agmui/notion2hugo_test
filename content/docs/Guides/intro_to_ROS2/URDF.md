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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGBZZMK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRDCRC7LN8A2IRZTkH%2FrhL2TXZeDTOsCgyRrS5WN%2Fi7QIhANzgHK9XPqjaPITabHxAcVdzVMYNSs2rrlrRTUzhLXrsKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgSudkYeIk7bKRt74q3APe9Pb2mXMX%2Bw8tSqmIMfkMx44EMriZpNPblDj7hYmBVY6YQVH91z9L1YpPz%2FxHVTLub57BIKi9lhzDIXP1SCbpRHyiYk5Nr5qPlLHQmUQ8z0693JnEIssLRA55l%2BnPzV7cu4qMMePXkVbbX8PQqQrFkgaPYYU1LjrNwfcHo%2BuydBwSiYnET6KFLfLcyHNkVurGLyohHr7kAz3h38F7YQT3nUuwStEK9AIM8%2BiVhvP1155sBc7z7BMZ1zORlvL%2BlvCUErN2ZJKFlT1Xo27xd8%2FL0c2Jg7c7IAjE3nrqSI2ryODXf6MsRyPeP%2F%2BN44qiZAQUMvZVlTtE3idseo2AnrhEqGuAzjvIBPFnPil6%2BlzJ1W0D%2BLqSBp2%2F5eKcgY90p%2Ftjrf1%2BwXKF6nkKeRhZYMiMbYvRhOigSyLjAZadkoIR8DY6GSLGIGvaJx0GzP5yRU7n4pjNPaAoQIfnYjkbCYKG2ybkvYvD%2FYWDusC2%2BIDgq1shzbOPcizbgtpoWDoRVZk4O%2Fan6Cvnw4vCw8I%2FTvk%2FK4jWUpIGlK3%2FwHR8symprlBHVXCkUFON9EkQlJWoecYmBitSkQpalrRuzgIG8K8rEiPRFaaD7LpXySI07yn6Ho98IdUIDxk2pQPNvDDR%2FIzABjqkAaSYakxI%2FXTW%2BIaktg1TkXa1K0nnYo1SQ0fmqoInreqMCJJNK6kPf%2FgeR1lUT%2BuTk0HIHkDflTlbFgZFJGfrB0u7nhMkXSIoHY8Zug5T0WuPRLQzXdC9O%2BzXjEpPM4gAJkPXnrsnf9gxIDjyoe0yiGyoJCwNjHUy1uwyBvth5PrcxN0fJ7eBS2irlZUh%2FuHMYMHP1ag0WohiP4Pb9cbL8UhWef7f&X-Amz-Signature=4999d54fbc1e250347bb9bb445cf1748801fe0154ed9d7613c7e28faf050a139&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGBZZMK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRDCRC7LN8A2IRZTkH%2FrhL2TXZeDTOsCgyRrS5WN%2Fi7QIhANzgHK9XPqjaPITabHxAcVdzVMYNSs2rrlrRTUzhLXrsKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgSudkYeIk7bKRt74q3APe9Pb2mXMX%2Bw8tSqmIMfkMx44EMriZpNPblDj7hYmBVY6YQVH91z9L1YpPz%2FxHVTLub57BIKi9lhzDIXP1SCbpRHyiYk5Nr5qPlLHQmUQ8z0693JnEIssLRA55l%2BnPzV7cu4qMMePXkVbbX8PQqQrFkgaPYYU1LjrNwfcHo%2BuydBwSiYnET6KFLfLcyHNkVurGLyohHr7kAz3h38F7YQT3nUuwStEK9AIM8%2BiVhvP1155sBc7z7BMZ1zORlvL%2BlvCUErN2ZJKFlT1Xo27xd8%2FL0c2Jg7c7IAjE3nrqSI2ryODXf6MsRyPeP%2F%2BN44qiZAQUMvZVlTtE3idseo2AnrhEqGuAzjvIBPFnPil6%2BlzJ1W0D%2BLqSBp2%2F5eKcgY90p%2Ftjrf1%2BwXKF6nkKeRhZYMiMbYvRhOigSyLjAZadkoIR8DY6GSLGIGvaJx0GzP5yRU7n4pjNPaAoQIfnYjkbCYKG2ybkvYvD%2FYWDusC2%2BIDgq1shzbOPcizbgtpoWDoRVZk4O%2Fan6Cvnw4vCw8I%2FTvk%2FK4jWUpIGlK3%2FwHR8symprlBHVXCkUFON9EkQlJWoecYmBitSkQpalrRuzgIG8K8rEiPRFaaD7LpXySI07yn6Ho98IdUIDxk2pQPNvDDR%2FIzABjqkAaSYakxI%2FXTW%2BIaktg1TkXa1K0nnYo1SQ0fmqoInreqMCJJNK6kPf%2FgeR1lUT%2BuTk0HIHkDflTlbFgZFJGfrB0u7nhMkXSIoHY8Zug5T0WuPRLQzXdC9O%2BzXjEpPM4gAJkPXnrsnf9gxIDjyoe0yiGyoJCwNjHUy1uwyBvth5PrcxN0fJ7eBS2irlZUh%2FuHMYMHP1ag0WohiP4Pb9cbL8UhWef7f&X-Amz-Signature=5a5f2e04d2f1162ff727e342cd6fa3035a06891b53453994b3979e27d24da67e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
