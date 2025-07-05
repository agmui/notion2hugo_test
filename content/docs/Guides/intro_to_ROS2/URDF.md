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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK2KGWD3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIClRjGZde1LocyAD8n1baJENjdyIUPh1lOPAxes2dX1eAiAp03d8yn7eu1e9nla5Y7zJtuaYBM1Irw17kHsfHTZJYSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsiVflGIV6UUGhmXBKtwDNA%2B3cwcmJfEXnnbnCuBqsZ0nigtsqjDgotl%2FjNmmphE0zufzyVHqYf1z2NX1MFd20ST5dTQU%2BN1e1PwfZmUCrAEr6o6GAjYUdaCP3UhtVmnbogTPwyR8w4JuK4zgRLjjedKUgSRtgwhnst4afCh9qgsAsiaMKhGSbKOABfi4Y94myQdjG7U%2FwnYVv2ck6gWiRqDvUi9vZygSLz8%2Fckf%2FhFca9RmT7zF5yWO7jQ%2FnSTbGdE4yTjRylonJsF55Rg14nCd8pTdGpNr4ztonYqF7KJFRBflF%2BXPGzcQ1ghZUEBzCOccMU6Yz3723p0ht7SR19Rx87H%2FLlMExMX%2FU3RED6oYOMtm99efzo%2BsS33j2nxZk%2F99UqAz28nU%2FDjFvRPzpvSQ7XmBv5gCZGl%2FiBfUtelaHO1DY2FOhvOjAFNqAVhuPjvtGN8wPLfX9%2Fhif67YuIZ5MgzS0MOqWIbQao00uriBNErTtJyttVOzDhq9yWBH4GTCNVqjR4Q0alg5CEzWcHCJi2FgqwdxQa0QCpBOQSvt%2BmfgnQPyKOSHSLWe5EE0AfuTpXQkGl9xDImhId9blfQghZh4bdBd3i78Twe7wSoSUkCaTQraOtr8BwaLb9Q5jz2L6datbz68biK4w4YeiwwY6pgH%2BVkVFPmsArWVviB4kIjZmCPcjPCTukZs04KJG5RGdmigWA7z5je1PjkNIHNrT9dPKidQ996AvV9jv80cNwaflty8HlXlVh6eQYwDa37h7e6Kke7ypxZ4cecNOiqBO9YTJOkBB7A7ldLBIPviQE82d8z1sn251n8Ax27HmyA346XiyuKCcsmqHjEEZwCLyIF6TphKZhi9iXVAwdwpg99X4an33%2BIAC&X-Amz-Signature=6ec5684e698ce49b05467bac82fc141558fc2bee53104a2b78a5993e95cc8693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK2KGWD3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIClRjGZde1LocyAD8n1baJENjdyIUPh1lOPAxes2dX1eAiAp03d8yn7eu1e9nla5Y7zJtuaYBM1Irw17kHsfHTZJYSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsiVflGIV6UUGhmXBKtwDNA%2B3cwcmJfEXnnbnCuBqsZ0nigtsqjDgotl%2FjNmmphE0zufzyVHqYf1z2NX1MFd20ST5dTQU%2BN1e1PwfZmUCrAEr6o6GAjYUdaCP3UhtVmnbogTPwyR8w4JuK4zgRLjjedKUgSRtgwhnst4afCh9qgsAsiaMKhGSbKOABfi4Y94myQdjG7U%2FwnYVv2ck6gWiRqDvUi9vZygSLz8%2Fckf%2FhFca9RmT7zF5yWO7jQ%2FnSTbGdE4yTjRylonJsF55Rg14nCd8pTdGpNr4ztonYqF7KJFRBflF%2BXPGzcQ1ghZUEBzCOccMU6Yz3723p0ht7SR19Rx87H%2FLlMExMX%2FU3RED6oYOMtm99efzo%2BsS33j2nxZk%2F99UqAz28nU%2FDjFvRPzpvSQ7XmBv5gCZGl%2FiBfUtelaHO1DY2FOhvOjAFNqAVhuPjvtGN8wPLfX9%2Fhif67YuIZ5MgzS0MOqWIbQao00uriBNErTtJyttVOzDhq9yWBH4GTCNVqjR4Q0alg5CEzWcHCJi2FgqwdxQa0QCpBOQSvt%2BmfgnQPyKOSHSLWe5EE0AfuTpXQkGl9xDImhId9blfQghZh4bdBd3i78Twe7wSoSUkCaTQraOtr8BwaLb9Q5jz2L6datbz68biK4w4YeiwwY6pgH%2BVkVFPmsArWVviB4kIjZmCPcjPCTukZs04KJG5RGdmigWA7z5je1PjkNIHNrT9dPKidQ996AvV9jv80cNwaflty8HlXlVh6eQYwDa37h7e6Kke7ypxZ4cecNOiqBO9YTJOkBB7A7ldLBIPviQE82d8z1sn251n8Ax27HmyA346XiyuKCcsmqHjEEZwCLyIF6TphKZhi9iXVAwdwpg99X4an33%2BIAC&X-Amz-Signature=9eb4f1e6aaa2b3200870c54664cede0f65c2dfc9560b6744fdfc2e759c7761b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
