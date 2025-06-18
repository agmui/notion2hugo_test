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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMO7PWO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNBo2lo%2B3gmm%2F5aen8jfY58f9cR9UGokyFLYbrc87AuAiAxiv8%2FvA738k3kdHOp8mA151NOSa%2Bgn354EW1QKrV%2FICqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bk6XAAbVOg7F1DGbKtwDZY%2BXHvseTu3e0RhZgxs51Sr5NKHH59JrByElN6FLp4zyvHep3LsLK46YKUyweosNK0ESjHiLvefIGJnKjDb83HEMWHAuiIoIac2HPZawKreW7aUQ1mHUOqOxItKjACfOU5OMhGAeKSDhvRutqTmdRytTT4JYCDS8QhoIuVsLpc3EOs0eNi0%2BAGDsF9cv2mGZ3v5kQ4l6sWq2m1ONVYSAQYpoxe0LPaUHOuOrzwX6eGi01mmo%2BtGqx3lqNq7bVo1wyYXkvAQAuJjVMMZt5hyKf%2Bbc9mV%2FEeUq3cNdfg9aFZhJmqjG5Aqe0fyMXaP4MdznV2TIUBGtHXpcg%2BNV7KgqCDf%2FEbUwNss7pvmIgcDtc4lhIjdab%2FCGai5ep3Qv2AB3bqbYwbqRxylUBYnlq8Xh7ngInKNu9me7Bn7%2BkAb%2F6fXMxyZLaDOGHjyPhjnKTCoexOFSSaTkEFm3euit3rDfFikgo%2BjM95Owo9ijTv23hVhp69YxoWS23RnBJcmPN3Cfk%2BI6ZuoSRZuITUuCcujvMndkXmmP8CPYif%2FllYv2CFSizGG1%2FM1K%2BKY8GQ5yjBoVjdoTRqoaTXvaYImKiFEdxMt2SxoDYrbB3mKHq8Iitxuvr9JNN5dLkQL6ZuEwmOzHwgY6pgGH%2Bjqr0GYqkIUL1Pn2ub7zVCgtkjia7wxErD9zjadYGTnsv%2BU30Ee16WfzvmTR0gv5NEkdzq1ACvAApPv1Ctd3BUQQsRcnpRkwftJS5vmjAVTmDaKKQQDNNgNluX4WgrwPz0Fe8a55egK7VV5xoy481d9M9bPRbIkaK6AogqoiEMMBckHTQg%2FfXzis%2FAaytlusHDaHgbJ9OwiZJHFwUgXPF19Jriv%2F&X-Amz-Signature=61120fa8520896785f514e2911d77bf1ffe61f2d57535aba7a736cdcc771e8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMO7PWO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNBo2lo%2B3gmm%2F5aen8jfY58f9cR9UGokyFLYbrc87AuAiAxiv8%2FvA738k3kdHOp8mA151NOSa%2Bgn354EW1QKrV%2FICqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bk6XAAbVOg7F1DGbKtwDZY%2BXHvseTu3e0RhZgxs51Sr5NKHH59JrByElN6FLp4zyvHep3LsLK46YKUyweosNK0ESjHiLvefIGJnKjDb83HEMWHAuiIoIac2HPZawKreW7aUQ1mHUOqOxItKjACfOU5OMhGAeKSDhvRutqTmdRytTT4JYCDS8QhoIuVsLpc3EOs0eNi0%2BAGDsF9cv2mGZ3v5kQ4l6sWq2m1ONVYSAQYpoxe0LPaUHOuOrzwX6eGi01mmo%2BtGqx3lqNq7bVo1wyYXkvAQAuJjVMMZt5hyKf%2Bbc9mV%2FEeUq3cNdfg9aFZhJmqjG5Aqe0fyMXaP4MdznV2TIUBGtHXpcg%2BNV7KgqCDf%2FEbUwNss7pvmIgcDtc4lhIjdab%2FCGai5ep3Qv2AB3bqbYwbqRxylUBYnlq8Xh7ngInKNu9me7Bn7%2BkAb%2F6fXMxyZLaDOGHjyPhjnKTCoexOFSSaTkEFm3euit3rDfFikgo%2BjM95Owo9ijTv23hVhp69YxoWS23RnBJcmPN3Cfk%2BI6ZuoSRZuITUuCcujvMndkXmmP8CPYif%2FllYv2CFSizGG1%2FM1K%2BKY8GQ5yjBoVjdoTRqoaTXvaYImKiFEdxMt2SxoDYrbB3mKHq8Iitxuvr9JNN5dLkQL6ZuEwmOzHwgY6pgGH%2Bjqr0GYqkIUL1Pn2ub7zVCgtkjia7wxErD9zjadYGTnsv%2BU30Ee16WfzvmTR0gv5NEkdzq1ACvAApPv1Ctd3BUQQsRcnpRkwftJS5vmjAVTmDaKKQQDNNgNluX4WgrwPz0Fe8a55egK7VV5xoy481d9M9bPRbIkaK6AogqoiEMMBckHTQg%2FfXzis%2FAaytlusHDaHgbJ9OwiZJHFwUgXPF19Jriv%2F&X-Amz-Signature=a62e88fb270ad4cf33505df62bd04962c9b4a539ecd2fe9fce87cb0dd29af43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
