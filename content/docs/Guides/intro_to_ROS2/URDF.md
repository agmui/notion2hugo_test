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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYHWVVTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVHMNhVa0mfytfLB8RYiDBVgw3ieeQfqwkEi2%2F7odNLAiB3WVLZ92KUbZtVOmDChoCJq12ffMfMvV9sFHNQimd5NSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdtYwehhUCtFHbc8fKtwDmYZrU9qDEVa1EtfIzBsI6BoJjeQ2tRSy536uTPDtizJI6Vl6Zn5oqb5Y7uM97SODjBdYGknYZQsTL5yOQ3IAdq4iLBtVSSAJgAJ9Id4ctHB7ILmAwnjNNfHAhCAH9UdmvJOA8rLwxsbElZ4BcIFaZg5PqJMg3zE%2FyYH1nOrVsf6puv%2Fz6w8b%2F4WFWrhVuL2T2v3DUwh%2FdvGU7zCy6JZOkZmYCpn7LN7esxyo7tAYJUljNCLcWkp89fIbyK918zUtI3JX63Ayyr3CLO4BYfuI5O%2BJZhN7l5rEcBPEBTrtsvyva8Go4GaFnpuE85QJplglUFhL%2FjiYvM09lN0EdHaMv2Sso8RTTrSsXTmEFqPzmVBBE%2BQKYw7RLs2%2B6KWXj2ApwSXHljBYdKmKL9NZ72zaNJGwSU0dMQcbpl30SoJldt9SH9p2rK9fK5ZzcZegAg6QY5weq87pyhGF9jxVSSjTJ4R8tt9Zv3DmtzOoC7aEEfN8RinzPB79vi2TScS22C7uymbzBj5a%2FwmGkh%2BbXeZDdYZSRrPVTEyqB96qX1AKMXdFAhhK49RY51Ytz3N%2B6er6xpxBHkOu2%2FeL4TforYb4TLVLzvTagNtiCT%2BIB%2B4%2B4bxe36iK0DLTYNVBa%2F4wjInhwQY6pgHyGWK1PnM3Rmty4rRGVcqBaV%2B8lqmdTk1dVSxP0GNroIeUFvR00dIrW0pKE3pVR%2FA4GSww0VO1guq%2B8F6HMU8pbyTf16Iy3blWWEJIj8AO83hR5h3Vj8%2F8YmsQ0Xso3lQCXs2bmcpIWFGk7%2BJYpli3r2EX8z0z%2FDFhtBaAK%2BUvuDTfnbhqktz3%2B30FPbF0iCFrL013S%2FVhDDIn6w38vDeRJC%2BI%2FaAA&X-Amz-Signature=619ccb2645bf0b46195d263262baf7e06b92f72f74146e5e192146b8e4f01c31&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYHWVVTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVHMNhVa0mfytfLB8RYiDBVgw3ieeQfqwkEi2%2F7odNLAiB3WVLZ92KUbZtVOmDChoCJq12ffMfMvV9sFHNQimd5NSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdtYwehhUCtFHbc8fKtwDmYZrU9qDEVa1EtfIzBsI6BoJjeQ2tRSy536uTPDtizJI6Vl6Zn5oqb5Y7uM97SODjBdYGknYZQsTL5yOQ3IAdq4iLBtVSSAJgAJ9Id4ctHB7ILmAwnjNNfHAhCAH9UdmvJOA8rLwxsbElZ4BcIFaZg5PqJMg3zE%2FyYH1nOrVsf6puv%2Fz6w8b%2F4WFWrhVuL2T2v3DUwh%2FdvGU7zCy6JZOkZmYCpn7LN7esxyo7tAYJUljNCLcWkp89fIbyK918zUtI3JX63Ayyr3CLO4BYfuI5O%2BJZhN7l5rEcBPEBTrtsvyva8Go4GaFnpuE85QJplglUFhL%2FjiYvM09lN0EdHaMv2Sso8RTTrSsXTmEFqPzmVBBE%2BQKYw7RLs2%2B6KWXj2ApwSXHljBYdKmKL9NZ72zaNJGwSU0dMQcbpl30SoJldt9SH9p2rK9fK5ZzcZegAg6QY5weq87pyhGF9jxVSSjTJ4R8tt9Zv3DmtzOoC7aEEfN8RinzPB79vi2TScS22C7uymbzBj5a%2FwmGkh%2BbXeZDdYZSRrPVTEyqB96qX1AKMXdFAhhK49RY51Ytz3N%2B6er6xpxBHkOu2%2FeL4TforYb4TLVLzvTagNtiCT%2BIB%2B4%2B4bxe36iK0DLTYNVBa%2F4wjInhwQY6pgHyGWK1PnM3Rmty4rRGVcqBaV%2B8lqmdTk1dVSxP0GNroIeUFvR00dIrW0pKE3pVR%2FA4GSww0VO1guq%2B8F6HMU8pbyTf16Iy3blWWEJIj8AO83hR5h3Vj8%2F8YmsQ0Xso3lQCXs2bmcpIWFGk7%2BJYpli3r2EX8z0z%2FDFhtBaAK%2BUvuDTfnbhqktz3%2B30FPbF0iCFrL013S%2FVhDDIn6w38vDeRJC%2BI%2FaAA&X-Amz-Signature=5ff2ca7b51327e355fc9e4a4342d6ee46ebad58048036591c1f9c11ad8789072&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
