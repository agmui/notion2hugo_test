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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKVSHQC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpl30QlURuBKv1r6u1mPT8oCQj0CiuDAaOQDEUMSZ2pQIhAKqMbgEz25lkO8ra7ezDSNCFUv0PR5stZ5YO%2FTZgFmmsKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysvlm%2F%2F8y807OlYVMq3AOo%2B5vDW6JiN7Uf%2BO0%2BAOpMqzsrMh0I4K7FTHX29uod2fLkICQ%2FrJFy4FdbnidA64Tx5eDbIn53XPfGGh7NwvHc5Vfz6Utlcvof9JN8Y%2FgeO%2F6f2kkhbDQLx4O5HKlLSEcSLIpawAyE0MtZVhZEsEgu3NklgoLvlmLj6XSi11FKiXW7juP3RUWZX1r9KC9V62pezNP%2BsANJMSjqeFjO%2FHowopiGS0CC%2BC7z3PmiF7INwwJWuogUu7ByvMSHjAnMMoBk6BpzWQemVPpMN5Y%2FzFj8F9ZQfCVUPZHXLQlmwWZqQpSMUbDKrZP%2Fcg7AfPoAWh8h%2BYinG%2Fm%2F%2F%2BNJeOz0Bl7CkvzwopTpm2e%2FJMPZPwoJoWttbIUID7fHIUO3VEfeOfvoHX%2F%2FnNpHUQre8M7OgOsrtXUkrrvZgMqsA5%2Bvjhf4GMy3dczGNVlfubd%2BCMpJrtKB8oZc8KSyMEg%2BCuHRCcanunIRBOb0CnsfB1dU9JqVBIIslmjt0fwWLJxWMVHI298zYnMM68RzE8IlO5zA9cpeWoaAR0LvIVd7KOguHthqNoGLP79s2zPh922jTCmN9qv0jsBtkeNKdaJyJ2u9U2TrNACyK7JYzHz%2FAiFOPvcbA0XYr6Pv9szSeygD6TDKiqXEBjqkAeL8mkRs6h1M6itMR7Hk4WLffFMX9ogaxDwZ3Bb1YXQMxBcpYYqC1IIbPtvNesQY7HRPNEIr%2F14xaJ3BXmJSchQnHvM8CfygylSk0t5HNABsqzp15tjhQ5wXLh5rlHFb4Ud0igY16lD2%2BAYWWajXCxblABzLfy3tzZJwO8Xz2fSM41gKqzXNQGZ8CyioPZ94G1OyPj1ZwtNTQDXkPn%2BjYdRV4ths&X-Amz-Signature=adba42d89204b83435f21c1babb098f2777b73a44ff66edf39ed472e1c4bd1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKVSHQC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpl30QlURuBKv1r6u1mPT8oCQj0CiuDAaOQDEUMSZ2pQIhAKqMbgEz25lkO8ra7ezDSNCFUv0PR5stZ5YO%2FTZgFmmsKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igysvlm%2F%2F8y807OlYVMq3AOo%2B5vDW6JiN7Uf%2BO0%2BAOpMqzsrMh0I4K7FTHX29uod2fLkICQ%2FrJFy4FdbnidA64Tx5eDbIn53XPfGGh7NwvHc5Vfz6Utlcvof9JN8Y%2FgeO%2F6f2kkhbDQLx4O5HKlLSEcSLIpawAyE0MtZVhZEsEgu3NklgoLvlmLj6XSi11FKiXW7juP3RUWZX1r9KC9V62pezNP%2BsANJMSjqeFjO%2FHowopiGS0CC%2BC7z3PmiF7INwwJWuogUu7ByvMSHjAnMMoBk6BpzWQemVPpMN5Y%2FzFj8F9ZQfCVUPZHXLQlmwWZqQpSMUbDKrZP%2Fcg7AfPoAWh8h%2BYinG%2Fm%2F%2F%2BNJeOz0Bl7CkvzwopTpm2e%2FJMPZPwoJoWttbIUID7fHIUO3VEfeOfvoHX%2F%2FnNpHUQre8M7OgOsrtXUkrrvZgMqsA5%2Bvjhf4GMy3dczGNVlfubd%2BCMpJrtKB8oZc8KSyMEg%2BCuHRCcanunIRBOb0CnsfB1dU9JqVBIIslmjt0fwWLJxWMVHI298zYnMM68RzE8IlO5zA9cpeWoaAR0LvIVd7KOguHthqNoGLP79s2zPh922jTCmN9qv0jsBtkeNKdaJyJ2u9U2TrNACyK7JYzHz%2FAiFOPvcbA0XYr6Pv9szSeygD6TDKiqXEBjqkAeL8mkRs6h1M6itMR7Hk4WLffFMX9ogaxDwZ3Bb1YXQMxBcpYYqC1IIbPtvNesQY7HRPNEIr%2F14xaJ3BXmJSchQnHvM8CfygylSk0t5HNABsqzp15tjhQ5wXLh5rlHFb4Ud0igY16lD2%2BAYWWajXCxblABzLfy3tzZJwO8Xz2fSM41gKqzXNQGZ8CyioPZ94G1OyPj1ZwtNTQDXkPn%2BjYdRV4ths&X-Amz-Signature=a2877c1ed4e59cd80c157735f3f5c1629b69d241d3ce451d9eb22fc98ff80e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
