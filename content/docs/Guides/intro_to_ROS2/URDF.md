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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637V6CZ5N%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsJO89LnLUzAkNx0GvTpy5UL1yAshZbzV4C6K2dCcLlAiEA6%2FDM%2B45Cez9MxGhVug5pdepp170H5fVEPTiHC7raWMIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuwHmYmKw0atbK85ircA1%2Fmtc5ei4081ytSDWP24OQ0YMMIskzJW7x86qmwXyRH2tWkFJzR%2BYe3x4Qi84yFpBGJICiJnVtbVrAry5TB34R08DuhWThn5i3vFAskSk%2FE%2F%2Bn9%2FpjR1gEsqetPoB0BlTJOWotWV94oKWK2rkE9vmjR4%2FD4MfcfmHIhEKVWe29TRhCBqf7BViFsUdNVzQfkZg29yQheLbkrQyNV2a7bfTMtDF9AEUOYJVL6Lviuumi4JI%2B5XWBXZCCxxl8sxWxn6yrCUbHal0%2F1HBdqs9JCuJ2xY5czVchrsRkonh2VJzK4F1tWCwL7kJNxQPAFnW3rqxoPWkNJyELUWeEF5Uqwtxj4scgXE1ehEZ4vEbX8WbkhxcWaAx7vVemTFivk3Ysg%2FYT2i1%2B2KNsmc0FBzzDS1HV1KFuZqbEww6pCVEVIZ%2FavgdnmzN6Q0sDQ3v8Gog6qOOKze5VIDNeR6T3QkPuDlYS9%2FeMmU%2Fcby6w%2B7BChoAHkxaGyoxWQMmEt18cSTbe7SaSpVVIc9A3GBrEVL8REa%2Baxt1ZP1U%2Fj8%2FIJzIyQEITWM0hUFLVwRyNg4hq4f0enOlBb%2BLR3hwX6qUlSTXX6kvSFwNBeYDy2%2F2VJ6Wvx00NG6Mn9CAAzJXDQlWuKMLSz%2BMAGOqUBlrDRxi4L%2FbBd%2FZYVk5PZP7d4%2FIXQ1%2FNCgnRXMAv0n32pLEfFTIzx2wD8DwlDrlkxx6LuzOxobpvyGbM7sMs5B1b4bEhS5xmeD34mGot3EF0Jv3dFAR7DEMPL%2BT2AcqH6s%2B5LBtWmzCNltTF9cONSsgQ9eUNEIGcPWDcJU%2FFZyAJjLrlAl431js2Yg05RLiqIGYyrZUt4dk4xrNxvoKaL4b%2FPvH8L&X-Amz-Signature=741b91c113651fb178999894c0177448428bc529b601185b91b6031f782a111e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637V6CZ5N%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsJO89LnLUzAkNx0GvTpy5UL1yAshZbzV4C6K2dCcLlAiEA6%2FDM%2B45Cez9MxGhVug5pdepp170H5fVEPTiHC7raWMIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuwHmYmKw0atbK85ircA1%2Fmtc5ei4081ytSDWP24OQ0YMMIskzJW7x86qmwXyRH2tWkFJzR%2BYe3x4Qi84yFpBGJICiJnVtbVrAry5TB34R08DuhWThn5i3vFAskSk%2FE%2F%2Bn9%2FpjR1gEsqetPoB0BlTJOWotWV94oKWK2rkE9vmjR4%2FD4MfcfmHIhEKVWe29TRhCBqf7BViFsUdNVzQfkZg29yQheLbkrQyNV2a7bfTMtDF9AEUOYJVL6Lviuumi4JI%2B5XWBXZCCxxl8sxWxn6yrCUbHal0%2F1HBdqs9JCuJ2xY5czVchrsRkonh2VJzK4F1tWCwL7kJNxQPAFnW3rqxoPWkNJyELUWeEF5Uqwtxj4scgXE1ehEZ4vEbX8WbkhxcWaAx7vVemTFivk3Ysg%2FYT2i1%2B2KNsmc0FBzzDS1HV1KFuZqbEww6pCVEVIZ%2FavgdnmzN6Q0sDQ3v8Gog6qOOKze5VIDNeR6T3QkPuDlYS9%2FeMmU%2Fcby6w%2B7BChoAHkxaGyoxWQMmEt18cSTbe7SaSpVVIc9A3GBrEVL8REa%2Baxt1ZP1U%2Fj8%2FIJzIyQEITWM0hUFLVwRyNg4hq4f0enOlBb%2BLR3hwX6qUlSTXX6kvSFwNBeYDy2%2F2VJ6Wvx00NG6Mn9CAAzJXDQlWuKMLSz%2BMAGOqUBlrDRxi4L%2FbBd%2FZYVk5PZP7d4%2FIXQ1%2FNCgnRXMAv0n32pLEfFTIzx2wD8DwlDrlkxx6LuzOxobpvyGbM7sMs5B1b4bEhS5xmeD34mGot3EF0Jv3dFAR7DEMPL%2BT2AcqH6s%2B5LBtWmzCNltTF9cONSsgQ9eUNEIGcPWDcJU%2FFZyAJjLrlAl431js2Yg05RLiqIGYyrZUt4dk4xrNxvoKaL4b%2FPvH8L&X-Amz-Signature=f9d15d3ec786d7e54b59b5e52a184a81d9c7a690e1cd3bb9ed7b9567f7068d80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
