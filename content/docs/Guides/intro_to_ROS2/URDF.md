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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXCRXZ63%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwg33e3jM1bWLnwcvFC6GnT1GLC6mxVqd2a5KSx48UsgIgPsusYvI9CoqYX3h0WSTcMjtpyMwVqR57wzXtp6qozNQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDe3pegmeEk7Ry6QCCrcA%2FqQI7DW2FQb3dvfFR%2B1zKpJsRLd3MSp9zWDZKWoHLhFK8B0bi7fnjpm%2FodSEo29IX00HBQgHN8pTx8mpTb2G72%2BVUpbqm%2B3JBLf1fTpwXa7iculyAInltgZo9aQVfIKekctjwnNsSAT3oH3J%2Fp3tDe7kkmVZGupu7EGAlEHHKEduptKAUw3i%2B3SOaZr4LAJOlIx%2BPl02QQMaF7QFKt8HKmXTIFe3Z15zJI%2BMzq1Vfz799%2Bv97hfm3%2FC7qAJwW3q71%2B3jpRd1AYWyl%2FQsN1QKb3zPrQQgpJt7F0kzQ6onubYyat0vAW%2FUvYLqYeA%2FJE%2FEFfjcA3dv4k19R9J1hkPvuKgbQibxuP3kXoaSMCJ6uZnWVjVGv7cTM3pgNSm3ifd7gvx2NZ4eE9NNrodnp1Ud%2BpjBOMnvbxXXAi9nrwGrdPXB79PDJr97bpbncQ%2FmDCnVGCs54eOzX8UUb0CbyOqRxducsifLI65qEBaLXr%2FjI1DBqCSeNg7em47y27H4pbFxj4cvPXsezRDy%2F4ARIr2SPPmwvYINr%2F4cVfmKPYWWCeip80qJglVxjAObgtKnpdmU7v0sIPulOtuaxlGdVlAtSuZ%2FGJQ0%2B3W033LvevJLvxP0vlTWylFRPnmjFq5MM%2FJ2MEGOqUB8cSr%2B0%2FN%2BxGgtPQaiHRDkfPmFWSZsH5DAX1EiSOafMJwgak7TVymwDjKYFXYvFDapaYJnkQayE35rosqraEHviQQc6IDQ9Lj7rMn%2F5WJTbknqDBVhpnFox83uqzCiqibNKfo1zNxpHNQtPm1S2rBdE2BQn%2BsSLwi%2F342Tr83CpSkXkXJq0RkIWMugYmBw69HBwEMgNhdyjaaR6o1pFvcpzzp7fFw&X-Amz-Signature=780d61ca06afb359a4bdd2b41fb3c4e28b532ab4092f4d945be399bf15474834&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXCRXZ63%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwg33e3jM1bWLnwcvFC6GnT1GLC6mxVqd2a5KSx48UsgIgPsusYvI9CoqYX3h0WSTcMjtpyMwVqR57wzXtp6qozNQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDe3pegmeEk7Ry6QCCrcA%2FqQI7DW2FQb3dvfFR%2B1zKpJsRLd3MSp9zWDZKWoHLhFK8B0bi7fnjpm%2FodSEo29IX00HBQgHN8pTx8mpTb2G72%2BVUpbqm%2B3JBLf1fTpwXa7iculyAInltgZo9aQVfIKekctjwnNsSAT3oH3J%2Fp3tDe7kkmVZGupu7EGAlEHHKEduptKAUw3i%2B3SOaZr4LAJOlIx%2BPl02QQMaF7QFKt8HKmXTIFe3Z15zJI%2BMzq1Vfz799%2Bv97hfm3%2FC7qAJwW3q71%2B3jpRd1AYWyl%2FQsN1QKb3zPrQQgpJt7F0kzQ6onubYyat0vAW%2FUvYLqYeA%2FJE%2FEFfjcA3dv4k19R9J1hkPvuKgbQibxuP3kXoaSMCJ6uZnWVjVGv7cTM3pgNSm3ifd7gvx2NZ4eE9NNrodnp1Ud%2BpjBOMnvbxXXAi9nrwGrdPXB79PDJr97bpbncQ%2FmDCnVGCs54eOzX8UUb0CbyOqRxducsifLI65qEBaLXr%2FjI1DBqCSeNg7em47y27H4pbFxj4cvPXsezRDy%2F4ARIr2SPPmwvYINr%2F4cVfmKPYWWCeip80qJglVxjAObgtKnpdmU7v0sIPulOtuaxlGdVlAtSuZ%2FGJQ0%2B3W033LvevJLvxP0vlTWylFRPnmjFq5MM%2FJ2MEGOqUB8cSr%2B0%2FN%2BxGgtPQaiHRDkfPmFWSZsH5DAX1EiSOafMJwgak7TVymwDjKYFXYvFDapaYJnkQayE35rosqraEHviQQc6IDQ9Lj7rMn%2F5WJTbknqDBVhpnFox83uqzCiqibNKfo1zNxpHNQtPm1S2rBdE2BQn%2BsSLwi%2F342Tr83CpSkXkXJq0RkIWMugYmBw69HBwEMgNhdyjaaR6o1pFvcpzzp7fFw&X-Amz-Signature=7e690c9527b8ec3243c95f502479f4498ebfe1280224a3ea6e7a33d250af2bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
