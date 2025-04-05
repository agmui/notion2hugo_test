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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEBT3XEB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXOiOwnCxfu8EhSL6oi3JQ8lcWcWTTiKxNI28cGSnHlAiEAyvp%2B3aS6%2FotCKCRQgP7iPfE0oxJDDWSO%2B4iOXpQRT6cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGRglNsK8EQRpOVsWircA4tIe7Bf%2Fyl1DK5fHInBi10vDg4SwyxE7JWjcINUZkhH2yz4P5EB%2Bf2RLCGYPBYViVHbncmHDY1JUMP3gvXBHLe5YhmPDxhxZ2vZ5UJzSFZjZSt8fgikDAgPIQBxo6eqC0rrMHp9A%2BhnDF5fUF9AJh%2FK4cctfEmLSzsVsfX50VvijKEEIORwXRXXXjwXXwa5vXPE3a6oSYdBtKmreQTkDYK8eTBYk78k3M820U4nLADcb5XUcvpl9oS%2BgdIEW9KIoNP2Pjqpn7mbD1yd7mOZyFEfmLSW%2FP%2BfGWZG5vd2sKT7YHfg4lMguyo2LZgiGjvafMI3tZUzbpUS65Ex0PozY8cr19R5wFx6rMRPbQMS6F9ZkEGXh7ZS0%2FjgOO0199MSUNrkKsUPHc1e5fS6ulJiZTdno8%2FFh3hsnKm2DFBm90L6C70YL%2Bmahmx32C34kSLJZQU9MayysMCOG7FUaU3D%2FEdPDw2kTQkvX%2B%2Ff68Yt%2FVLMrIdbKEMQmTi4vY1R3hr0xvUPAa4%2FgDAFkBf8BD8rXsExc94g6W2G6ZalA%2FXCalTlvDHuhyaFk%2FOnlZbS0Ky4LIOQ%2F39cPYylwIr2sjSUKucU1M94ORgbpeY3Y14UkrQ2Uvy9JAAbPgfYCNfeMMfkw78GOqUBHswTX8oHB5FAmH%2BIKwBUlXryCO4ocSgPI5s3Xkc62ceELi62QFD2SuZx5b%2Fk1CiiLqbWGdrer5E9bP9fmLnR2SfnAJP8KjKUq66z0ATzquAbZpBACzmHcI1QFE3mFxemERrOYtJ7Kci%2F8lXPoq0TS0%2BfC%2FGFGtnmnCW3XVSIwVp2KzE2Gp9Xi%2Fgm2u5nHZ%2FmqwJt3VzeTZqbdPtHuWX2KzViH8rR&X-Amz-Signature=efa151e9c3a75bbf896bbb1340063db5c2631e69d62a8b0985134914c01ab4be&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEBT3XEB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXOiOwnCxfu8EhSL6oi3JQ8lcWcWTTiKxNI28cGSnHlAiEAyvp%2B3aS6%2FotCKCRQgP7iPfE0oxJDDWSO%2B4iOXpQRT6cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGRglNsK8EQRpOVsWircA4tIe7Bf%2Fyl1DK5fHInBi10vDg4SwyxE7JWjcINUZkhH2yz4P5EB%2Bf2RLCGYPBYViVHbncmHDY1JUMP3gvXBHLe5YhmPDxhxZ2vZ5UJzSFZjZSt8fgikDAgPIQBxo6eqC0rrMHp9A%2BhnDF5fUF9AJh%2FK4cctfEmLSzsVsfX50VvijKEEIORwXRXXXjwXXwa5vXPE3a6oSYdBtKmreQTkDYK8eTBYk78k3M820U4nLADcb5XUcvpl9oS%2BgdIEW9KIoNP2Pjqpn7mbD1yd7mOZyFEfmLSW%2FP%2BfGWZG5vd2sKT7YHfg4lMguyo2LZgiGjvafMI3tZUzbpUS65Ex0PozY8cr19R5wFx6rMRPbQMS6F9ZkEGXh7ZS0%2FjgOO0199MSUNrkKsUPHc1e5fS6ulJiZTdno8%2FFh3hsnKm2DFBm90L6C70YL%2Bmahmx32C34kSLJZQU9MayysMCOG7FUaU3D%2FEdPDw2kTQkvX%2B%2Ff68Yt%2FVLMrIdbKEMQmTi4vY1R3hr0xvUPAa4%2FgDAFkBf8BD8rXsExc94g6W2G6ZalA%2FXCalTlvDHuhyaFk%2FOnlZbS0Ky4LIOQ%2F39cPYylwIr2sjSUKucU1M94ORgbpeY3Y14UkrQ2Uvy9JAAbPgfYCNfeMMfkw78GOqUBHswTX8oHB5FAmH%2BIKwBUlXryCO4ocSgPI5s3Xkc62ceELi62QFD2SuZx5b%2Fk1CiiLqbWGdrer5E9bP9fmLnR2SfnAJP8KjKUq66z0ATzquAbZpBACzmHcI1QFE3mFxemERrOYtJ7Kci%2F8lXPoq0TS0%2BfC%2FGFGtnmnCW3XVSIwVp2KzE2Gp9Xi%2Fgm2u5nHZ%2FmqwJt3VzeTZqbdPtHuWX2KzViH8rR&X-Amz-Signature=fcc5079a2aa783618f4efed5437945b3598d8a9e8997c6321a642047b2d4f1e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
