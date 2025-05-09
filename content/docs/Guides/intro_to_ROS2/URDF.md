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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKVHLKK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3pfjB1elEluQxjzeHVHmyXRgM31LyTbrqoHJvPYnz6wIhALbYDEQqDpdAmf%2FP9dNJOh%2FLVbxkncV0gVSbHcYqWDdJKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCFsQLZoR02uE4ZtAq3AMxR%2BztR9vXCYypK7Xzt2jgCMtYAMWKzP1NP2EIZD5UeUKKfauRocaZxveEc1u5xuLyM8VdMtbuw3RabP1SAggUXZvUsrbFPap%2F9W5KikAtzayAWmAV%2BUYWKDoI0adrsAzX2Vp0IrSUX%2FHFnJjyPgW4md5xGij7m8Z%2By9AP3qTq0MGr7fxYBaW2VsJQ62FIR8A4oaEAxFD2E0%2BEMlP6GK79ZAxItRMxWbjDI0WYLlskKbRnbkipoiZySyfhILn%2BBS7RoPvceqyHU1DqRnlZoHyC5uDp2V4IGDwd3PtgvPHhH%2BBX4F30V9tYBRmYfnoZddXLoPOheoFIiP0nAoU5DxsBEbjSJbqenp7Xl6%2F9WamaViBdBpI7yxkf1J0ByTpCnY%2FvgchaEDNa%2Bka1kzCoTSHv41l1RDAwX1%2FQiFHSa29NNS4Awc3sIWC1aQ0M8BbSOge32ckPGkK6786JlJffqbM5NgGF2%2FWMVVNu8bmqpIeJtZTxVjBuvS0adqLIvmR2adOxEDSp%2FvmezzFW1T%2BpPjP130KryoVDFV3bIUhyX84rHAnZwYWJXEzfXtmCvvtVRfn6Czw%2B6xdzKwSorpsA10VDHu9vjeDp1ZIzbtGitvGSgiyRYzIIDmLq1PTIqDCTlvbABjqkAYet%2BTbbHIsDSiQaavwKoagCFb35yps3NSCPrhzsxQRLLwYo5MIr19nygnyf9YEpn2Nk0PvIwiLcFa%2BaykfCKhw1LznoyNzgWN5yDQ5Mj3WwdwIJF8Z7cr7m1oTFMfgInzADYHvosR3FgbDQT6j7xPw%2BnfcZvJeacGVyG7uXOYwxGJOrVZN5fNkFgxKDedJGU620hGgFm5v9u6CjLAbVv7TaVlGl&X-Amz-Signature=d364893bc2894b516b9a901b0ae4ec91d7a323b3c7438ad3330ed0d37a107cca&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKVHLKK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3pfjB1elEluQxjzeHVHmyXRgM31LyTbrqoHJvPYnz6wIhALbYDEQqDpdAmf%2FP9dNJOh%2FLVbxkncV0gVSbHcYqWDdJKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCFsQLZoR02uE4ZtAq3AMxR%2BztR9vXCYypK7Xzt2jgCMtYAMWKzP1NP2EIZD5UeUKKfauRocaZxveEc1u5xuLyM8VdMtbuw3RabP1SAggUXZvUsrbFPap%2F9W5KikAtzayAWmAV%2BUYWKDoI0adrsAzX2Vp0IrSUX%2FHFnJjyPgW4md5xGij7m8Z%2By9AP3qTq0MGr7fxYBaW2VsJQ62FIR8A4oaEAxFD2E0%2BEMlP6GK79ZAxItRMxWbjDI0WYLlskKbRnbkipoiZySyfhILn%2BBS7RoPvceqyHU1DqRnlZoHyC5uDp2V4IGDwd3PtgvPHhH%2BBX4F30V9tYBRmYfnoZddXLoPOheoFIiP0nAoU5DxsBEbjSJbqenp7Xl6%2F9WamaViBdBpI7yxkf1J0ByTpCnY%2FvgchaEDNa%2Bka1kzCoTSHv41l1RDAwX1%2FQiFHSa29NNS4Awc3sIWC1aQ0M8BbSOge32ckPGkK6786JlJffqbM5NgGF2%2FWMVVNu8bmqpIeJtZTxVjBuvS0adqLIvmR2adOxEDSp%2FvmezzFW1T%2BpPjP130KryoVDFV3bIUhyX84rHAnZwYWJXEzfXtmCvvtVRfn6Czw%2B6xdzKwSorpsA10VDHu9vjeDp1ZIzbtGitvGSgiyRYzIIDmLq1PTIqDCTlvbABjqkAYet%2BTbbHIsDSiQaavwKoagCFb35yps3NSCPrhzsxQRLLwYo5MIr19nygnyf9YEpn2Nk0PvIwiLcFa%2BaykfCKhw1LznoyNzgWN5yDQ5Mj3WwdwIJF8Z7cr7m1oTFMfgInzADYHvosR3FgbDQT6j7xPw%2BnfcZvJeacGVyG7uXOYwxGJOrVZN5fNkFgxKDedJGU620hGgFm5v9u6CjLAbVv7TaVlGl&X-Amz-Signature=6b72ca27e7795b304499b3c63cac03724f58fa85c707b050c254ffd8637bdfb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
