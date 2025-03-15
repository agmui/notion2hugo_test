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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LVES46%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXtuOB0U%2BLjaus%2BhQ0iJv53NsCRf4yM%2BoXHnar2o3HVAIhAL6a59ThfBayD6PIs5Jke6OAhZMXZIVpjOTZfDBski%2F9KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi6HOdYWvwYrU1bHEq3AMBZvHGy8du1JejEaa1yA07YSbVoF%2BUkvUQVEZnvpgCZzdu6iV9p5Y08IfMUaJ7OdZlY%2BgzcrlZZc6xX0WqGPY6RLJISugoat99CAEug4S%2Bpf09t4VON7D458KUlSee0sPG5r8ORCruzIHp1EYWguZv30g0YQRSpmW5gkB%2FhbXBSwYetNKgMgnyEeCQqPlpwaDG5cF5bTtzlVopgh9iRiiQHcDiJUbG4w9dfwfBrlCgBxb2TQEVrzz4sI5GCjPeu9QIbFDxkp6oA0IEWlldIYqunDfFVWgurHvULbBafLM4H8Ilcde28hBd5oGDHtlP4eLh7M2WaXq34EMPep%2Fdd2oJWjZek3nAFF%2Ftmh5hXzhKhZ8hTMHXK08pOIk1MzEcvrxFf8JQASFBfn6HXBk%2FCI8Phjj6ZTrxIOobezlUOZFOw8bMxhdwJ7f7t3RG3Ur3%2BQFKDazwA8BMEBscw6y3l5QKnbhzu66OrD%2FVT6QvH0NqKLlfP3ByBuq82wXRWFLM6csF5KEeoDoIenAqCaOk4g3nwOjkhV4p0jNM52ltRbhseqSOkjwuK031KZUkFxrJ0X75WtihWTDz9WtXv2gml8I11v9X8V6NjlR3vdUdo0YwB%2B6T5y2X0Tf5X%2BxiWDD96NO%2BBjqkAW0J%2B4cPrMxPQ2yK1OZJG955AFrJyc8OwnnL1JQ1s4n8GEr8OKpkjkNnn%2BcFTxmvcoW2zmjHEMRxshioK10Hq%2BftcO9jSrfPP%2FOKmPvoI1JulllTS3SD9Ut47991NOwui9V3zf%2F7nyo9lKCodi9B8AF3CHI10PZMSde69Wbcni63hPMR6LFXk9GK2c92SpxErcMA3BwcXqLezL0VGG50Z3VFB7ct&X-Amz-Signature=e2ba5894b6161283a7fce7a4521d4e9c29e755d7e8bea088d7a7026ce8447144&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LVES46%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXtuOB0U%2BLjaus%2BhQ0iJv53NsCRf4yM%2BoXHnar2o3HVAIhAL6a59ThfBayD6PIs5Jke6OAhZMXZIVpjOTZfDBski%2F9KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi6HOdYWvwYrU1bHEq3AMBZvHGy8du1JejEaa1yA07YSbVoF%2BUkvUQVEZnvpgCZzdu6iV9p5Y08IfMUaJ7OdZlY%2BgzcrlZZc6xX0WqGPY6RLJISugoat99CAEug4S%2Bpf09t4VON7D458KUlSee0sPG5r8ORCruzIHp1EYWguZv30g0YQRSpmW5gkB%2FhbXBSwYetNKgMgnyEeCQqPlpwaDG5cF5bTtzlVopgh9iRiiQHcDiJUbG4w9dfwfBrlCgBxb2TQEVrzz4sI5GCjPeu9QIbFDxkp6oA0IEWlldIYqunDfFVWgurHvULbBafLM4H8Ilcde28hBd5oGDHtlP4eLh7M2WaXq34EMPep%2Fdd2oJWjZek3nAFF%2Ftmh5hXzhKhZ8hTMHXK08pOIk1MzEcvrxFf8JQASFBfn6HXBk%2FCI8Phjj6ZTrxIOobezlUOZFOw8bMxhdwJ7f7t3RG3Ur3%2BQFKDazwA8BMEBscw6y3l5QKnbhzu66OrD%2FVT6QvH0NqKLlfP3ByBuq82wXRWFLM6csF5KEeoDoIenAqCaOk4g3nwOjkhV4p0jNM52ltRbhseqSOkjwuK031KZUkFxrJ0X75WtihWTDz9WtXv2gml8I11v9X8V6NjlR3vdUdo0YwB%2B6T5y2X0Tf5X%2BxiWDD96NO%2BBjqkAW0J%2B4cPrMxPQ2yK1OZJG955AFrJyc8OwnnL1JQ1s4n8GEr8OKpkjkNnn%2BcFTxmvcoW2zmjHEMRxshioK10Hq%2BftcO9jSrfPP%2FOKmPvoI1JulllTS3SD9Ut47991NOwui9V3zf%2F7nyo9lKCodi9B8AF3CHI10PZMSde69Wbcni63hPMR6LFXk9GK2c92SpxErcMA3BwcXqLezL0VGG50Z3VFB7ct&X-Amz-Signature=f0bd6d148e21e789bd4a9c023241e57544abc475032158259c427e844acb6368&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
