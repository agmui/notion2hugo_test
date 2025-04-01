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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTW7I6L%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDLB7yBB6ydd3fSuoTQfqhkF2K54dvZwN06aP%2F5651QigIhAMcYz5J1H1aSAR2USAuG6ZnUmHlc5v7vyc2%2FDaSS38u5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjB8P0GE0UMNAgFMYq3APdaOllTlKLzf1%2Fs3c%2Be3f%2BPx8xl6uC%2Ft7gxqyKKdmVrOD0r7yiUB0YM5BjEsIbSUVq8V8%2FuX8%2FTMMkitd23Ony4syCNqAHky1v1Gk6l90OLmAruBaRxDanT06giXOMHEdPHaVMaseMVQ%2BmGV40b%2BARMDiNvdJoEHdGgjKPETjvTGW%2F99KKBX2MPVhBmhCRe%2FTU%2FNGB93XuHbUbw4k%2BltJoxdoVctHBfbgpeC3TtnXYN33v3TW3az5K5XyuSBFcDqZDsqPCr7WCe5qA4A33j68i8urawgdGMJoy6bRwo37DI0VdaDM9dcd5jKDGfjj%2Bncz2bYSVqD1%2BObnr87mN%2F45oWKXV9KHoutIYOoYIRHkYK%2BTcnuiipGTjZo0zovk9EpP3xgDT0gqj58P5ukHwP%2FBkjFEjLNnNr1C92%2BjndrjXG8mA4dyAdCgk9GFQ1hX2eUrnLfCCHh8OBTM35fCXQGQxpnGlOFb7Cl7TZ6nEgc2MNbNDSWoGh%2B%2FK5UkgkRQ5k5q%2BjDx8kPRMK5KJxL5OXDbF%2F5aYVBjZkOkly3S%2BTLBIhdi4BfudhAS22u1VkcokmFsh2aAWnswNKbZVSPvPNCfAac3QGhv%2BsReOsGyDdEeuoZNfQn8Z2B3LLNGXuzDMg6%2B%2FBjqkAZ4d%2BSSH9GRvunMB%2BtqQEUGYSSGP%2BoUoOdNUU6x8ArPwVgFHvsJoS6mykkvXcsNiP2n0ZqRU4du69KurGj%2BOjZSyyEhnUQilDugvZPjxqb%2BO%2Fh%2B1prBAesnhqs5V2C86VrMjbgsVBr6vbBVVBCWJgJLEfhg4hpxB9bleBgcbQukxSblgX7q41Za9NkB3bMq5bQXF5NxstKOQqxINPSmZ7GzqB69a&X-Amz-Signature=0e84f0fdc226a3e4ba462eae5bf4648249038b7efb193769452b401056a7759c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTW7I6L%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDLB7yBB6ydd3fSuoTQfqhkF2K54dvZwN06aP%2F5651QigIhAMcYz5J1H1aSAR2USAuG6ZnUmHlc5v7vyc2%2FDaSS38u5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjB8P0GE0UMNAgFMYq3APdaOllTlKLzf1%2Fs3c%2Be3f%2BPx8xl6uC%2Ft7gxqyKKdmVrOD0r7yiUB0YM5BjEsIbSUVq8V8%2FuX8%2FTMMkitd23Ony4syCNqAHky1v1Gk6l90OLmAruBaRxDanT06giXOMHEdPHaVMaseMVQ%2BmGV40b%2BARMDiNvdJoEHdGgjKPETjvTGW%2F99KKBX2MPVhBmhCRe%2FTU%2FNGB93XuHbUbw4k%2BltJoxdoVctHBfbgpeC3TtnXYN33v3TW3az5K5XyuSBFcDqZDsqPCr7WCe5qA4A33j68i8urawgdGMJoy6bRwo37DI0VdaDM9dcd5jKDGfjj%2Bncz2bYSVqD1%2BObnr87mN%2F45oWKXV9KHoutIYOoYIRHkYK%2BTcnuiipGTjZo0zovk9EpP3xgDT0gqj58P5ukHwP%2FBkjFEjLNnNr1C92%2BjndrjXG8mA4dyAdCgk9GFQ1hX2eUrnLfCCHh8OBTM35fCXQGQxpnGlOFb7Cl7TZ6nEgc2MNbNDSWoGh%2B%2FK5UkgkRQ5k5q%2BjDx8kPRMK5KJxL5OXDbF%2F5aYVBjZkOkly3S%2BTLBIhdi4BfudhAS22u1VkcokmFsh2aAWnswNKbZVSPvPNCfAac3QGhv%2BsReOsGyDdEeuoZNfQn8Z2B3LLNGXuzDMg6%2B%2FBjqkAZ4d%2BSSH9GRvunMB%2BtqQEUGYSSGP%2BoUoOdNUU6x8ArPwVgFHvsJoS6mykkvXcsNiP2n0ZqRU4du69KurGj%2BOjZSyyEhnUQilDugvZPjxqb%2BO%2Fh%2B1prBAesnhqs5V2C86VrMjbgsVBr6vbBVVBCWJgJLEfhg4hpxB9bleBgcbQukxSblgX7q41Za9NkB3bMq5bQXF5NxstKOQqxINPSmZ7GzqB69a&X-Amz-Signature=f5e26cfc3d38bd92efee35ebb1264345c0989883f69b0b1381c4813a938b74f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
