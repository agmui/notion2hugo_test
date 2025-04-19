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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCR3HV5G%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlVzoO1x5JGL25JfpmmOLkOXA3nEljLH6APYfAC%2B6iAiAsbzt7Rys%2B7lbmbLovKp%2FT997K4nvrWxQFyT4KZvjQ%2FiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ynryi225hnfwpmFKtwD%2BkSCzkGWGxsO3i7OSUyfB%2FBdLEakVHP8BrGiAVontdFHC8QvM0fZVOLEXN5oWSkHoOqnrb3EeOK3ilF9igUKFVAHRdMMapF89RmeuADPONzqyOHj8Ch%2FqQP93FwcnNVq%2BWpB3aDoY1%2BFudh%2BmbWLO91Q%2FuuRJyTQpRAKFxem36WoweStIdTRdfPXGzulE%2F7dWeeb%2FSw%2B0P4vlfhEnfQBbWAlDVltAtuXApquaN6y%2FCqg0H%2FYSAfmlt8ZfWiSDHTIA5xBRiCgQkMRrca4hhKITxopf9lBJiSots6VXUICiMA9chyWztkGeU7vt9q93Rdd%2Fh0zepxIwImopOoTyKhnklUOsdYHZvea5O6uUg%2FX34tqD30O3cKMn2WlQ5D9qkDgfqIPvExkzk4tmh6nW%2Bn3VQKVoSvigFpZ7oy%2Fl6XyQ3wneYm2LyZE99g73MNgJXYkGF4z6HvGHi9SU6JeDKXK4fzRN4zmvHSYmmwJQuS8iqMQ8Xqz2A923JJ6hXv%2BK2%2FNoKK%2BPn53hby3D1Axi6Rkn%2BVFsWZOCs3yulWqdtbjPJR9fuPsUj5MFL6RLPnpsIdrDfTRRUOe0s1Z6aizd2%2FAhBb%2FXcg6SaVKPMBB1n2DtdvFGw9wRiSiZPOqf6AwhfyMwAY6pgHASCLvcLAEu84QhXX0bAFY1ujKw7g6RbKN5s3JOUywqGnlQkNlOp85ZXph3GcugsaZ2%2FxCan1EcseZHq9%2FtwXhhM0KJWBpHkaGA8yEx8jhIXLldEiJtsCiEUN7PxwrPagiPkEWCnCMBhNrAasc2dq7wqoda%2Folyjmx22sbw4yhsf91N12Gk4XgHVXyz4dhTXiDYibasTBIxielkqJepbj5HbGFYEcT&X-Amz-Signature=4a56e5393e3c38ae3ff50ac04b5f4cd15ce777a138788811e5aa8f9171c8e364&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCR3HV5G%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGlVzoO1x5JGL25JfpmmOLkOXA3nEljLH6APYfAC%2B6iAiAsbzt7Rys%2B7lbmbLovKp%2FT997K4nvrWxQFyT4KZvjQ%2FiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ynryi225hnfwpmFKtwD%2BkSCzkGWGxsO3i7OSUyfB%2FBdLEakVHP8BrGiAVontdFHC8QvM0fZVOLEXN5oWSkHoOqnrb3EeOK3ilF9igUKFVAHRdMMapF89RmeuADPONzqyOHj8Ch%2FqQP93FwcnNVq%2BWpB3aDoY1%2BFudh%2BmbWLO91Q%2FuuRJyTQpRAKFxem36WoweStIdTRdfPXGzulE%2F7dWeeb%2FSw%2B0P4vlfhEnfQBbWAlDVltAtuXApquaN6y%2FCqg0H%2FYSAfmlt8ZfWiSDHTIA5xBRiCgQkMRrca4hhKITxopf9lBJiSots6VXUICiMA9chyWztkGeU7vt9q93Rdd%2Fh0zepxIwImopOoTyKhnklUOsdYHZvea5O6uUg%2FX34tqD30O3cKMn2WlQ5D9qkDgfqIPvExkzk4tmh6nW%2Bn3VQKVoSvigFpZ7oy%2Fl6XyQ3wneYm2LyZE99g73MNgJXYkGF4z6HvGHi9SU6JeDKXK4fzRN4zmvHSYmmwJQuS8iqMQ8Xqz2A923JJ6hXv%2BK2%2FNoKK%2BPn53hby3D1Axi6Rkn%2BVFsWZOCs3yulWqdtbjPJR9fuPsUj5MFL6RLPnpsIdrDfTRRUOe0s1Z6aizd2%2FAhBb%2FXcg6SaVKPMBB1n2DtdvFGw9wRiSiZPOqf6AwhfyMwAY6pgHASCLvcLAEu84QhXX0bAFY1ujKw7g6RbKN5s3JOUywqGnlQkNlOp85ZXph3GcugsaZ2%2FxCan1EcseZHq9%2FtwXhhM0KJWBpHkaGA8yEx8jhIXLldEiJtsCiEUN7PxwrPagiPkEWCnCMBhNrAasc2dq7wqoda%2Folyjmx22sbw4yhsf91N12Gk4XgHVXyz4dhTXiDYibasTBIxielkqJepbj5HbGFYEcT&X-Amz-Signature=ba83ee17204dc6e6573a005f0d15b07a16d659a3802cc97f0f4a00bea275af45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
