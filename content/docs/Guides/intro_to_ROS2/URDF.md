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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYQ2RK6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAww85ypQoBjcRNBvwJQmW1Wt35Xd9JqbfRTvrGav%2BiAiBRsqVi3aKHUHOnetzaux%2B09t90J6TxfpVqLCiV5x4Krir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMszc0K9VSjwn61%2B0AKtwD9V8wKXvOOJgowk9Aqx%2BDA%2BLHW7K%2BwXSTIFJVp7omrA05aTYv2FT5WZciv5cJEi%2FxKt8EqyQH32ZsEqUR5C2INvnM%2FcJHL%2BD2GqFXyUN5GZNoGNs9OZtgiWT2fW6K9DrgeWRfRXDloeIrNYsnU%2F3FZWGNU6%2BaxWymRMwCAVnXvQ57h6eNO0hVS%2BUAaXDcz0urwDQqL%2FbDfnQryNEpn63AVc6i4MXzKljbXP8GZTTONnzR5PD260ODjqieLA4Sj1BIPcsceiXZG1pUkB04Pkpdsi8iLMgTPqnpsG2R0FmLkMmy5loBTiC7Q79ac%2BxUIccb4OlZC6CvhRpN%2Fc4tpVcJDB8v3WfQb4ZkZ4oDHDlZhlbiSDKmeiarNtZLcdHA38RRB9ixORakKIrg2m7vI%2FbgjKUhuFpVgM8X7Ul3HeOpzEiMs5ZZxeuiq3cmN55uEfP8EeiEC6x81nNyVIQXIrANxOcYBYPpi6AiT1rY59VUZP9%2BxuLeR5TOW8bh1D7ue%2BHzjas3tsruD0bOwsEXn%2BMx%2FUprCl5Y%2BVg21EefVsb8PPlUvO9e1FFSEuREHpk0gcCAnCJM4BOE4psXUXOeVFB0YQXlZwRWag4cr5AYzXzf17oirPpvwYWOfe5pJV0w8dCavwY6pgHQTzSj7zpgInGjosHpcG5%2FtzlKN9jcc2fEjIoxhgkis7aWPHnqRzUJiWGPdgm5KAtI6g177sXWq%2BBhvmqCWpLFxc4%2FJVxIDLWpp04Os1GibflBqdTtKG8f0GHBeFO7uUU8aGs1t10sWIMgOKX3cQrw5QGvN1MDJ3BThp6gyWqoCQlBa9u7p9dX8zKR7OugOZ1Ocw2PGGT4R2AJ4TTHyxOUXZXAp2VE&X-Amz-Signature=dec5645996a9145e3c8e48d81095789c1baa48daba0c785e453905562ece4bae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYQ2RK6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAww85ypQoBjcRNBvwJQmW1Wt35Xd9JqbfRTvrGav%2BiAiBRsqVi3aKHUHOnetzaux%2B09t90J6TxfpVqLCiV5x4Krir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMszc0K9VSjwn61%2B0AKtwD9V8wKXvOOJgowk9Aqx%2BDA%2BLHW7K%2BwXSTIFJVp7omrA05aTYv2FT5WZciv5cJEi%2FxKt8EqyQH32ZsEqUR5C2INvnM%2FcJHL%2BD2GqFXyUN5GZNoGNs9OZtgiWT2fW6K9DrgeWRfRXDloeIrNYsnU%2F3FZWGNU6%2BaxWymRMwCAVnXvQ57h6eNO0hVS%2BUAaXDcz0urwDQqL%2FbDfnQryNEpn63AVc6i4MXzKljbXP8GZTTONnzR5PD260ODjqieLA4Sj1BIPcsceiXZG1pUkB04Pkpdsi8iLMgTPqnpsG2R0FmLkMmy5loBTiC7Q79ac%2BxUIccb4OlZC6CvhRpN%2Fc4tpVcJDB8v3WfQb4ZkZ4oDHDlZhlbiSDKmeiarNtZLcdHA38RRB9ixORakKIrg2m7vI%2FbgjKUhuFpVgM8X7Ul3HeOpzEiMs5ZZxeuiq3cmN55uEfP8EeiEC6x81nNyVIQXIrANxOcYBYPpi6AiT1rY59VUZP9%2BxuLeR5TOW8bh1D7ue%2BHzjas3tsruD0bOwsEXn%2BMx%2FUprCl5Y%2BVg21EefVsb8PPlUvO9e1FFSEuREHpk0gcCAnCJM4BOE4psXUXOeVFB0YQXlZwRWag4cr5AYzXzf17oirPpvwYWOfe5pJV0w8dCavwY6pgHQTzSj7zpgInGjosHpcG5%2FtzlKN9jcc2fEjIoxhgkis7aWPHnqRzUJiWGPdgm5KAtI6g177sXWq%2BBhvmqCWpLFxc4%2FJVxIDLWpp04Os1GibflBqdTtKG8f0GHBeFO7uUU8aGs1t10sWIMgOKX3cQrw5QGvN1MDJ3BThp6gyWqoCQlBa9u7p9dX8zKR7OugOZ1Ocw2PGGT4R2AJ4TTHyxOUXZXAp2VE&X-Amz-Signature=e7f04a6fd5c2b66043b19ef8701806c7ed2582115a222c8aa44611651c7c4a99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
