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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPEV4P3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPycn5hj6GSr%2BEM3p5R%2BY3LN488sQt31G8ey9yxbIDTAIgPNbpPiso9Y7fmrpLtKk4gVRABWNVXGagCW4UzcRKIjIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDFjmv0jSfataszybCrcAwq005jz5rKB68Yk3XgsP2tfLnuPMzDGnPMI5JrXTJqz1cHdrAtePSfaycarR9omoaVbxW2qmtF2G%2B9q6I8Z57YxEZyD4GsctXnyBZ6oF5EsxoArl2PQNP3dVbLqjvx8XvzYEuT3IN1K40j1%2FPjacYOFkzfk0NbXl7CLpNDb4xA0na%2Bz7fJ%2BKfb5xP0KFYq5S2RFDyjZJCXy4GNHYb3juXZFtiWRPh7w9Ig3qt753Ip3we3byyznd9XIXbIgZ%2B%2BDookfMyIxvg3l62pGy5%2FSpNw3L9klK%2BQ%2FyrqbEtIKxhw4yBlzGF%2BJ4uufYB5q5HhjJTd1heJ3PA%2FOTfBY0zv5gCgsROr8VsIjzt3AbBM1vKP4JMly8l4sV334SRtkTmyAQbdeyCi60hbxBap6iP6Sav6cMk6ikCBr7Sz4i8cv7K3ozDRBjqTY7RcPt1TrA3g%2BolTFAk3I9nTqrMcRu5os2KlKEXY77UYZctP6C55H8QueQsJO5dgWWKcwHHlCKVvZrXB7q7ufLhM7o7qRA7O7rXquCyPCW9R%2F9o8XpqVGuQYqdx2lzDohPrVA7VzSnqp9hmmVfuG2qmb0CTPQkKCBifEtkfFrCMoOyKQ7EKb3p8ZlW6uvftmCGDuKqzaLMJ3etMAGOqUB6iDAUiJ5uWbh64IE1j9wWl3eV239mYNUh%2BngYl2IvSGOQHyfFsIj%2BE6K%2BfE90wgmbNbAexIY3GkSCeTLrLl896bfUt01Akd%2FAp0MAOk%2F0tskY2uVFiLou1WyzlgqBOfjfA%2BGVRz12hr2rSF9SmRrUQLmTW2FDHPmjeCYwNbPFKgzAECwVZ7%2FqiN%2Bg3acaVOOxUODdM802HFVEcQw3P7LJ6pYmZl%2B&X-Amz-Signature=a888b5bc9b80c26e40bfaead08c46c8b2efd07f88c3d930263a1bc432e451720&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCPEV4P3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPycn5hj6GSr%2BEM3p5R%2BY3LN488sQt31G8ey9yxbIDTAIgPNbpPiso9Y7fmrpLtKk4gVRABWNVXGagCW4UzcRKIjIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDFjmv0jSfataszybCrcAwq005jz5rKB68Yk3XgsP2tfLnuPMzDGnPMI5JrXTJqz1cHdrAtePSfaycarR9omoaVbxW2qmtF2G%2B9q6I8Z57YxEZyD4GsctXnyBZ6oF5EsxoArl2PQNP3dVbLqjvx8XvzYEuT3IN1K40j1%2FPjacYOFkzfk0NbXl7CLpNDb4xA0na%2Bz7fJ%2BKfb5xP0KFYq5S2RFDyjZJCXy4GNHYb3juXZFtiWRPh7w9Ig3qt753Ip3we3byyznd9XIXbIgZ%2B%2BDookfMyIxvg3l62pGy5%2FSpNw3L9klK%2BQ%2FyrqbEtIKxhw4yBlzGF%2BJ4uufYB5q5HhjJTd1heJ3PA%2FOTfBY0zv5gCgsROr8VsIjzt3AbBM1vKP4JMly8l4sV334SRtkTmyAQbdeyCi60hbxBap6iP6Sav6cMk6ikCBr7Sz4i8cv7K3ozDRBjqTY7RcPt1TrA3g%2BolTFAk3I9nTqrMcRu5os2KlKEXY77UYZctP6C55H8QueQsJO5dgWWKcwHHlCKVvZrXB7q7ufLhM7o7qRA7O7rXquCyPCW9R%2F9o8XpqVGuQYqdx2lzDohPrVA7VzSnqp9hmmVfuG2qmb0CTPQkKCBifEtkfFrCMoOyKQ7EKb3p8ZlW6uvftmCGDuKqzaLMJ3etMAGOqUB6iDAUiJ5uWbh64IE1j9wWl3eV239mYNUh%2BngYl2IvSGOQHyfFsIj%2BE6K%2BfE90wgmbNbAexIY3GkSCeTLrLl896bfUt01Akd%2FAp0MAOk%2F0tskY2uVFiLou1WyzlgqBOfjfA%2BGVRz12hr2rSF9SmRrUQLmTW2FDHPmjeCYwNbPFKgzAECwVZ7%2FqiN%2Bg3acaVOOxUODdM802HFVEcQw3P7LJ6pYmZl%2B&X-Amz-Signature=a3efe62c2ec751472e44b4f160eb690d852dcf12cd072dc6d11b0a4aa0567aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
