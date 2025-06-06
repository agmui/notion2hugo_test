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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7FMXPS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICeAzOatiIc%2F4lbhfbHUkbmuZ8hxrybf1i74LsZ6tn9yAiA%2Fl8RLdljHZXnJI45y3Ne1ZgjR%2BzXuRTO84Q73vOILBir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMRk27BlM0hdNeQS1yKtwDni9KvqCxDHKR%2BMxlo46wCdV6JHGXulEYXzM3T6mLGLhKMUcCXzPJj873%2FKZGzxAFTcvoq8ML8ZfnwemCcZX4V6PBusI7SC%2F6XqVcX8I2EoRq2XLLSYAMqE7wH65104zalae8YY1KvTvrwM2hjxqzmG27w%2FGAoj0lQ6Ytg3VFHi66h3u2tOcUC%2FtLcM593Gc9liyT98oVgZRPxqJCwLI8fT0x64%2Fev8Wb9DarxMOE8RqpCTi8wFtK2zfXTySiSKw0A%2FOT5jtB56bfjt6mE%2F668wV8HyTZ6gblX6CESSn%2BxWV5BWY6vhQTXKKXy1GizfxpO%2FGpSK%2B3cR6iXBLv9GbrATTMINXcUdb4KBLcdax1mxCzFFceVF8HdoKHbxsui%2FvG04oNMozLPMrSY84%2Bqh%2F%2FTIj5kR9iRV6fnqelzBe%2FIxNZKIngJb5LYcuIoUHFt8RNcvBDVlHE2ZKqiNqw%2FoqwtP965cpt0Y7FxldbFLfi6iZezLhgge8wclVimnaghCq4tN4pHN7mL0iOLluujzhDFQAU5iNkA47CgTMBOgjWJT%2Fb%2B7BXA1gBdNjZ7bUm%2BX5tv%2B4EoWjNdGKJCf39N12fta0DsM72q%2BRxzFS97qSc%2B3RAWnP8zp8KXTLq4I4wl8eJwgY6pgF1mi84mx91klLugkOftvoUEsu7ymQY%2FfKKBj1kU8yZEaPyYR58grUyiIs2%2Fu0COiLzsupLJlfbZlCQdH6ZD%2F%2F37hIr61vbbkenDDfouYsT4Q9fhl8C2pAYzHVhbIpFSGvOyyI9JbEQ%2F7ZgPT%2FW3ul%2B7Myn0a%2B87W8EOCODO418Ux%2FSDMvWxB0xSyKTFnDOmm7q%2FGd%2BFky1rZQa%2BO%2Fstxt9crBmOGMA&X-Amz-Signature=5a5788eaa683355bd17d6aec149623ac1609c08c369f100dad86b7c86d43f950&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7FMXPS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICeAzOatiIc%2F4lbhfbHUkbmuZ8hxrybf1i74LsZ6tn9yAiA%2Fl8RLdljHZXnJI45y3Ne1ZgjR%2BzXuRTO84Q73vOILBir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMRk27BlM0hdNeQS1yKtwDni9KvqCxDHKR%2BMxlo46wCdV6JHGXulEYXzM3T6mLGLhKMUcCXzPJj873%2FKZGzxAFTcvoq8ML8ZfnwemCcZX4V6PBusI7SC%2F6XqVcX8I2EoRq2XLLSYAMqE7wH65104zalae8YY1KvTvrwM2hjxqzmG27w%2FGAoj0lQ6Ytg3VFHi66h3u2tOcUC%2FtLcM593Gc9liyT98oVgZRPxqJCwLI8fT0x64%2Fev8Wb9DarxMOE8RqpCTi8wFtK2zfXTySiSKw0A%2FOT5jtB56bfjt6mE%2F668wV8HyTZ6gblX6CESSn%2BxWV5BWY6vhQTXKKXy1GizfxpO%2FGpSK%2B3cR6iXBLv9GbrATTMINXcUdb4KBLcdax1mxCzFFceVF8HdoKHbxsui%2FvG04oNMozLPMrSY84%2Bqh%2F%2FTIj5kR9iRV6fnqelzBe%2FIxNZKIngJb5LYcuIoUHFt8RNcvBDVlHE2ZKqiNqw%2FoqwtP965cpt0Y7FxldbFLfi6iZezLhgge8wclVimnaghCq4tN4pHN7mL0iOLluujzhDFQAU5iNkA47CgTMBOgjWJT%2Fb%2B7BXA1gBdNjZ7bUm%2BX5tv%2B4EoWjNdGKJCf39N12fta0DsM72q%2BRxzFS97qSc%2B3RAWnP8zp8KXTLq4I4wl8eJwgY6pgF1mi84mx91klLugkOftvoUEsu7ymQY%2FfKKBj1kU8yZEaPyYR58grUyiIs2%2Fu0COiLzsupLJlfbZlCQdH6ZD%2F%2F37hIr61vbbkenDDfouYsT4Q9fhl8C2pAYzHVhbIpFSGvOyyI9JbEQ%2F7ZgPT%2FW3ul%2B7Myn0a%2B87W8EOCODO418Ux%2FSDMvWxB0xSyKTFnDOmm7q%2FGd%2BFky1rZQa%2BO%2Fstxt9crBmOGMA&X-Amz-Signature=7586b9058da34cb3bb69e8e7dc5ae7b3c155e073ee91ea2ca13033264b2de56f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
