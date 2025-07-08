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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XO3W3C7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaAN8oO75eVMRZd3N583tcIZEDhPcW5gpjrG9CPrxlSgIgGyFIdr4up30k1wXU6GsMBXCi4ay3f0%2BOfb%2BaFEpk6EoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4Ks%2BjElqiHXy6qWCrcA%2FyWEqJip8v%2Fuo%2F4M86AsPsZrY1OKNKLmxRjV9SgdVgZEwSVOoyZ9AicBJFalj8dKan4MusZAN8SJq2HtFCYA%2BoX7RZPfAzxA4r93wudk77FSMAqRDtFhFVhwLynC3qq9DnUa9n9J3hw9yl40PDEViaaZUX2xLw33PG6FbemPwqaFXq7aA7pGrYxEJS%2FDinnxYycXU8T9Boo3kHrjoShD%2BrHpiXGXtbi6%2FhPvI%2FH3DKdfVKRu%2B50dostfnaFI25ALP5%2BKZzNlyQjwgBGhVjNNncKtbfzJwyFEriCYVF2fM6iR6k%2F036yPGUH%2BUn2vSDx50NWxsgphmxMxS0ShAuSK14GT2WYe1yeW1kJ0BHA0nwW8sOZfQhd1BzdOO0YZ2zMPWvhdmseFyde2dXTaslA1u1peBHMEuCqnps5Zd75Pxs%2FC9TuMEqq2XthgW7NfTIFqWKF3EyKweQIz%2BnO9qYGpgUGG29jq5HtH9mV%2BiWb28vLL7s3x98pazvdLEKRExFB79kibvVRyc5SQM%2B%2BXQ%2FbYLidrLGexIMWjX2gFG8po3oReY3%2BRe1Z0UnIqZhv44J6HMg%2F0KKxa839bP6ScZBk4PREHPzZ0yTa5soXISd9IMX2qnjGgCIWvOjB1voHMMH9s8MGOqUBZILQFpMWIR59ghZSzNeOLhZgwRpZ2E8jRKNGaS%2BfDOpuVNbqV%2BZRI607lmQaBjsF%2FRmEMxgcTHaZiTQPwqtCKMtYg0huOWMtLjELu3w2cfAW7u%2BAQWjOYI5lrlgS94vJWnLIsiZb15kkT1V2LI%2B4kfUN0Fk63c14Rpd3zoJTbTJzyvzDsEooE1JsRpOY7JSanX1UDqHBNRku5VC%2BJ2XHT8TyHITQ&X-Amz-Signature=e27ccc0d55a013314f151179902e3854fda9df8745c180016bf8e9cbf3d8d57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XO3W3C7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaAN8oO75eVMRZd3N583tcIZEDhPcW5gpjrG9CPrxlSgIgGyFIdr4up30k1wXU6GsMBXCi4ay3f0%2BOfb%2BaFEpk6EoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4Ks%2BjElqiHXy6qWCrcA%2FyWEqJip8v%2Fuo%2F4M86AsPsZrY1OKNKLmxRjV9SgdVgZEwSVOoyZ9AicBJFalj8dKan4MusZAN8SJq2HtFCYA%2BoX7RZPfAzxA4r93wudk77FSMAqRDtFhFVhwLynC3qq9DnUa9n9J3hw9yl40PDEViaaZUX2xLw33PG6FbemPwqaFXq7aA7pGrYxEJS%2FDinnxYycXU8T9Boo3kHrjoShD%2BrHpiXGXtbi6%2FhPvI%2FH3DKdfVKRu%2B50dostfnaFI25ALP5%2BKZzNlyQjwgBGhVjNNncKtbfzJwyFEriCYVF2fM6iR6k%2F036yPGUH%2BUn2vSDx50NWxsgphmxMxS0ShAuSK14GT2WYe1yeW1kJ0BHA0nwW8sOZfQhd1BzdOO0YZ2zMPWvhdmseFyde2dXTaslA1u1peBHMEuCqnps5Zd75Pxs%2FC9TuMEqq2XthgW7NfTIFqWKF3EyKweQIz%2BnO9qYGpgUGG29jq5HtH9mV%2BiWb28vLL7s3x98pazvdLEKRExFB79kibvVRyc5SQM%2B%2BXQ%2FbYLidrLGexIMWjX2gFG8po3oReY3%2BRe1Z0UnIqZhv44J6HMg%2F0KKxa839bP6ScZBk4PREHPzZ0yTa5soXISd9IMX2qnjGgCIWvOjB1voHMMH9s8MGOqUBZILQFpMWIR59ghZSzNeOLhZgwRpZ2E8jRKNGaS%2BfDOpuVNbqV%2BZRI607lmQaBjsF%2FRmEMxgcTHaZiTQPwqtCKMtYg0huOWMtLjELu3w2cfAW7u%2BAQWjOYI5lrlgS94vJWnLIsiZb15kkT1V2LI%2B4kfUN0Fk63c14Rpd3zoJTbTJzyvzDsEooE1JsRpOY7JSanX1UDqHBNRku5VC%2BJ2XHT8TyHITQ&X-Amz-Signature=3cdbd42686aa3dbe91d7a363863c6d7669e54028b0962bcd86081983c51abe3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
