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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=61000ef478a3a8596a163e49864cbd85664df74cb56276b6f4811df1776ccae3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=9b6dc04915983b707274b2dff644dbf0c4bcf053104974705db0afaf0d83ec0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
