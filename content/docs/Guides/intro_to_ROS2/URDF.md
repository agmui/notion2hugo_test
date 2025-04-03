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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4W323O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDGuEHmvw5Qx4YoMDTrNcAFO2cNPIM%2B3%2B29Q6rOOdRbFQIhAJRCoh8i80SM4AGWkK7ffwDHUHrWuU3KXO3FkWlZJHhUKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb6sv%2BrQDe8VZe9VYq3AO1CwUoX5gA7v%2F6HLcK2qCZX2eDSyd4P1f4xm79OvAHT6cc8TZ0Ne0df2h1hceWXQKvRhxVAXbQn%2B8j72FLgO%2FQeuZcV5c02ritL8oeflkxgNXnaKSluK0lStIutjBujSk7hdXDAiSpqAzOr3gizcbE4lhAtOF0L%2F2wpgYfvIkN%2Bf5Sp7D%2Fa14mHYYcd2IDRsflG0NYA3g5wai4nRNkhg2gU%2B7x2zVg5K4CIygWhp%2FWPoucnii%2FAxKeEAS78rQ6y1q7bW4Tavo4Chc6hU93xWRmzp6stxcE7nGpgj870xw9SYbu3FlrNNVcyTGWCuJtvILXs6MBckRnrJzce%2Fq8eL4v83rbujnKsPCuUNeTDZQLKrDY3vxzMJPhQHvzl5TLcXEX5H8gDReiZzuXseEcRvFPWsmaFdCdQryYHYkudaVij44j1B4iXPFCCPXxEivZ0UKNMQXuM9cEjYWiheWdyzojhvaIAhdIW0mdQRsuLM0D3rvyh21Cejk1Pw7Kul9kjo78nF2y8ZIh%2BPu%2F%2F5f5IrHWzPYkVnk8few3EMP%2BoibLqyfRW1%2FMs2BGp2Z2Pgk7svf4NcGuBHJE0gLP8CLz7dCK4M8rzXC0WBPDF5ibYQw3QdGO%2FsaCOoXcnRBpiDCnyLe%2FBjqkAdFOZpVEmNg%2BHOjjkHtwbmEw%2B7owX4%2ByEE7sIhWeP%2B8lzeI0D9BN%2F9Q98wCXfqBkyIYzdm5XHbtknMFyAG2hLVyz4%2BXzEtNkqFPK2jWrQ5YnTUIZIdYwDRKFrCFiVGdt4pJLPgaVG6MqVo1XENM%2FRKgI4tqTb%2BRWlUrnkkwC1Ut%2BgG1RU1cCI6Tuzj5XMbDOQtMvJiVMOb6mTFQe7uCRp4OFF9cM&X-Amz-Signature=9552e491bf98f4e4cac8bb4ec12619228fa0f5e336f05b523cf6d2e965f0c689&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4W323O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDGuEHmvw5Qx4YoMDTrNcAFO2cNPIM%2B3%2B29Q6rOOdRbFQIhAJRCoh8i80SM4AGWkK7ffwDHUHrWuU3KXO3FkWlZJHhUKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb6sv%2BrQDe8VZe9VYq3AO1CwUoX5gA7v%2F6HLcK2qCZX2eDSyd4P1f4xm79OvAHT6cc8TZ0Ne0df2h1hceWXQKvRhxVAXbQn%2B8j72FLgO%2FQeuZcV5c02ritL8oeflkxgNXnaKSluK0lStIutjBujSk7hdXDAiSpqAzOr3gizcbE4lhAtOF0L%2F2wpgYfvIkN%2Bf5Sp7D%2Fa14mHYYcd2IDRsflG0NYA3g5wai4nRNkhg2gU%2B7x2zVg5K4CIygWhp%2FWPoucnii%2FAxKeEAS78rQ6y1q7bW4Tavo4Chc6hU93xWRmzp6stxcE7nGpgj870xw9SYbu3FlrNNVcyTGWCuJtvILXs6MBckRnrJzce%2Fq8eL4v83rbujnKsPCuUNeTDZQLKrDY3vxzMJPhQHvzl5TLcXEX5H8gDReiZzuXseEcRvFPWsmaFdCdQryYHYkudaVij44j1B4iXPFCCPXxEivZ0UKNMQXuM9cEjYWiheWdyzojhvaIAhdIW0mdQRsuLM0D3rvyh21Cejk1Pw7Kul9kjo78nF2y8ZIh%2BPu%2F%2F5f5IrHWzPYkVnk8few3EMP%2BoibLqyfRW1%2FMs2BGp2Z2Pgk7svf4NcGuBHJE0gLP8CLz7dCK4M8rzXC0WBPDF5ibYQw3QdGO%2FsaCOoXcnRBpiDCnyLe%2FBjqkAdFOZpVEmNg%2BHOjjkHtwbmEw%2B7owX4%2ByEE7sIhWeP%2B8lzeI0D9BN%2F9Q98wCXfqBkyIYzdm5XHbtknMFyAG2hLVyz4%2BXzEtNkqFPK2jWrQ5YnTUIZIdYwDRKFrCFiVGdt4pJLPgaVG6MqVo1XENM%2FRKgI4tqTb%2BRWlUrnkkwC1Ut%2BgG1RU1cCI6Tuzj5XMbDOQtMvJiVMOb6mTFQe7uCRp4OFF9cM&X-Amz-Signature=485bc7bb3b6c65a862c49907d5ce9e005e60d50058ef587441d9f854c3dc77c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
