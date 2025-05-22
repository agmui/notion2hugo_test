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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAV52BJ3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGAGVGRn0CnEmGZzlwzg0VWoX2rb90xwz90N7KkAZg5tAiBr%2FeVw8QYvT2%2F3FHoxKSuhqojo4Qrx3LQU6QwLK3PJZSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkojE4E%2F77CpLDLD7KtwDgHpJs%2Fy8Cxgd9Uhp%2BOLKK%2BRCmbIhA2%2BAXuLW1I19c7XcOA0bxP6e6owwIqG1W0tjULNZJzUm2nXrsSq92%2Bf9LRxCxyhBtAFqUtVZ7begn9LSI0TaSHam0UmZOkIBdp4DSJD4PQmlb18d4zYksLXaBkxX7Kx%2BWpRt3QYRQfc%2FjtGNLWO2DjreD%2Fp6HctLVULP3nzParx3vydpmtKJrl36MCL9HGvcvP57YDmYtqzfN2i7%2FlhAbr807PdA3N2i3f%2BtAqm9jPgA52cwY6Ke8RUDljzrA4UaIsGRSAJp%2BHRAdqthfffrooxTkgnM%2B0CLisjeC%2BAoXMF3EF%2Fd5M08OYw%2BsaJuzMnQxR2v4chwtdlk6O2YKuaA22ACLTx5aSC5N3D4Bp4utOFUe6QVcIRy29J6pLiQ3Vpz8OrJ%2FerM0CF%2B6FFWVlRPmdyLk8TCSI8ytHKQYw%2BL8bSfzmKnWOCfYkaLnY%2Fihmc%2Bln%2F3%2FON82gU2iq6HHRTIZeRLCbHNXTVndK6osltuVsWYrP9%2FglXBZx3F2%2B5osTe1eBjg96gc0JkTur6uTDi7qOQT8hkhBZ%2F4ife%2BzXZu342r1xlWf4sKRHlU1WIcEJpdHt2SnL740gxS4ztrIVUGbgVC1xQ%2BaxQw1ve6wQY6pgHdIh3h4iYy8Oi%2BohT1WfTSSEjj1lQXYdtsN6ZR2BASjpLlNJlNYCC5pxnYEPfjrRADAL3qPipQ63OO62lm5edVVtxhi3DuIG62321VjR9iqxOBLq1SqEuOq%2BGk9vxsOXpZIY9Pwa1dFMHt%2Ff1b4IAhxx1t%2FOja1Hb6OLMWXmdLsF786OkUs1vdUeGpHEqAubpq204QrhBQ0FxqBU8p5dYiZS0Pt37d&X-Amz-Signature=ec4e7cd50353d71cb2f81077abdee22fd770ca832183a7871ec530849cba2162&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAV52BJ3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGAGVGRn0CnEmGZzlwzg0VWoX2rb90xwz90N7KkAZg5tAiBr%2FeVw8QYvT2%2F3FHoxKSuhqojo4Qrx3LQU6QwLK3PJZSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkojE4E%2F77CpLDLD7KtwDgHpJs%2Fy8Cxgd9Uhp%2BOLKK%2BRCmbIhA2%2BAXuLW1I19c7XcOA0bxP6e6owwIqG1W0tjULNZJzUm2nXrsSq92%2Bf9LRxCxyhBtAFqUtVZ7begn9LSI0TaSHam0UmZOkIBdp4DSJD4PQmlb18d4zYksLXaBkxX7Kx%2BWpRt3QYRQfc%2FjtGNLWO2DjreD%2Fp6HctLVULP3nzParx3vydpmtKJrl36MCL9HGvcvP57YDmYtqzfN2i7%2FlhAbr807PdA3N2i3f%2BtAqm9jPgA52cwY6Ke8RUDljzrA4UaIsGRSAJp%2BHRAdqthfffrooxTkgnM%2B0CLisjeC%2BAoXMF3EF%2Fd5M08OYw%2BsaJuzMnQxR2v4chwtdlk6O2YKuaA22ACLTx5aSC5N3D4Bp4utOFUe6QVcIRy29J6pLiQ3Vpz8OrJ%2FerM0CF%2B6FFWVlRPmdyLk8TCSI8ytHKQYw%2BL8bSfzmKnWOCfYkaLnY%2Fihmc%2Bln%2F3%2FON82gU2iq6HHRTIZeRLCbHNXTVndK6osltuVsWYrP9%2FglXBZx3F2%2B5osTe1eBjg96gc0JkTur6uTDi7qOQT8hkhBZ%2F4ife%2BzXZu342r1xlWf4sKRHlU1WIcEJpdHt2SnL740gxS4ztrIVUGbgVC1xQ%2BaxQw1ve6wQY6pgHdIh3h4iYy8Oi%2BohT1WfTSSEjj1lQXYdtsN6ZR2BASjpLlNJlNYCC5pxnYEPfjrRADAL3qPipQ63OO62lm5edVVtxhi3DuIG62321VjR9iqxOBLq1SqEuOq%2BGk9vxsOXpZIY9Pwa1dFMHt%2Ff1b4IAhxx1t%2FOja1Hb6OLMWXmdLsF786OkUs1vdUeGpHEqAubpq204QrhBQ0FxqBU8p5dYiZS0Pt37d&X-Amz-Signature=a8f916cf9e0b70806ae2239c5b83e035d390a682e382e296c88b1578e92e690e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
