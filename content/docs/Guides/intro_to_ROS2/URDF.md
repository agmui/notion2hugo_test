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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUTMVYS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgLPmfUnVhzJDPaJeZyy%2F0y4%2BQQRlqVO79ZRnFtsKOGAiBnyr1gFKfyiU0YzdBMKfiM6wfRrs61W6U5bOEruIu43CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwh8okyIacuaE2JWsKtwDB4CQ97%2BtAgtblXvyMaSht%2F9pwL%2FkNRE4qhQRj4YNFeOGpaMOaFbCIEEU7UeMzdlWSA%2F3Jz2%2Boku3Pyx4rjkmcJttqDFptKc2I9z8tjWdPb0cO%2F26VAD1ch0AQ%2FkvST6H4qZWgbGcKnTpixPcsJWRBgLKc25fJNqV%2FqpV670yVf11nwt464hBrxAjrOzTzIcR018Qlh02NordLsXNCqN80fx7BKtOnP%2FQjLPomkW1MoINtR%2FTAbNyIKHwEmC4ourC53lFXQFK359nJohhHXral26CyewhBNaFzRvAN9DpRes7IdQNxmnmLJ30AehD9XcpHKhFzIOciJdO%2FsLOvkXPaR0iHRmc4c1kFpT%2BWGvpLbQ0hfR2rOnPbvP3ED%2F71CVsNvp0Q9OKNYumpKbzENDisa0g%2FNquFJJ7DeFE04QPWgYWDMGhhESyvamERFzqfvuqniTJSJ2sCrdjL48CA%2FohGFiSeN7phJQbc0USkzzCjYy7XEnPiwBjDzfUXq8X17vK%2B0kQ4ocBwSyR3%2F7caKJnQku4SYjQ5oRcMW408es330gtuSURcAThBdVJ0XvIYJ5yBMlpILx13mNsvNtHNZt2K2xMCmUGA0mvuwQe4Z61dOJCFzqr%2F1C8pQ9GB3ownLb6wAY6pgGXUxNH1EJ%2BpwOO9Snn8kQFkF4vShFSNzbrk6Mo3TH%2BwxP41bWq3MQWP%2FNslYmLBHQwWp7U8inYtVXjT2dUgpfvJ1CYsiojIYtkvQTd5e%2Fbvkk09KJyDUWX6gl30zriLQG%2Bfu9dPp3Q4YREHtR%2FGK%2B5%2Blljl8d%2FamYPrpXwgAv87IfndjIzqNS%2FY05EWPzVuJrNY%2BN30BGsWNrW59P%2BuwsDac0gUlT2&X-Amz-Signature=bf172b104413bec3d87ee3f9c6e73f2d8e54e5096835d043f3892380cbbc914c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUTMVYS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgLPmfUnVhzJDPaJeZyy%2F0y4%2BQQRlqVO79ZRnFtsKOGAiBnyr1gFKfyiU0YzdBMKfiM6wfRrs61W6U5bOEruIu43CqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwh8okyIacuaE2JWsKtwDB4CQ97%2BtAgtblXvyMaSht%2F9pwL%2FkNRE4qhQRj4YNFeOGpaMOaFbCIEEU7UeMzdlWSA%2F3Jz2%2Boku3Pyx4rjkmcJttqDFptKc2I9z8tjWdPb0cO%2F26VAD1ch0AQ%2FkvST6H4qZWgbGcKnTpixPcsJWRBgLKc25fJNqV%2FqpV670yVf11nwt464hBrxAjrOzTzIcR018Qlh02NordLsXNCqN80fx7BKtOnP%2FQjLPomkW1MoINtR%2FTAbNyIKHwEmC4ourC53lFXQFK359nJohhHXral26CyewhBNaFzRvAN9DpRes7IdQNxmnmLJ30AehD9XcpHKhFzIOciJdO%2FsLOvkXPaR0iHRmc4c1kFpT%2BWGvpLbQ0hfR2rOnPbvP3ED%2F71CVsNvp0Q9OKNYumpKbzENDisa0g%2FNquFJJ7DeFE04QPWgYWDMGhhESyvamERFzqfvuqniTJSJ2sCrdjL48CA%2FohGFiSeN7phJQbc0USkzzCjYy7XEnPiwBjDzfUXq8X17vK%2B0kQ4ocBwSyR3%2F7caKJnQku4SYjQ5oRcMW408es330gtuSURcAThBdVJ0XvIYJ5yBMlpILx13mNsvNtHNZt2K2xMCmUGA0mvuwQe4Z61dOJCFzqr%2F1C8pQ9GB3ownLb6wAY6pgGXUxNH1EJ%2BpwOO9Snn8kQFkF4vShFSNzbrk6Mo3TH%2BwxP41bWq3MQWP%2FNslYmLBHQwWp7U8inYtVXjT2dUgpfvJ1CYsiojIYtkvQTd5e%2Fbvkk09KJyDUWX6gl30zriLQG%2Bfu9dPp3Q4YREHtR%2FGK%2B5%2Blljl8d%2FamYPrpXwgAv87IfndjIzqNS%2FY05EWPzVuJrNY%2BN30BGsWNrW59P%2BuwsDac0gUlT2&X-Amz-Signature=ea742ed7f1d72f534402a3b59c2d89c21ef5717d3758df37397f1f42b77b5739&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
