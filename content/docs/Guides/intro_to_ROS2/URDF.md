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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STIRP2E%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVIb8iVOXxfnq2MZiwfobiPuRyxNYPILvaDjolvH2ffAiAZCaOOE2sO8PNdaz4pRejCQF2GK%2FkLsMNoIpXQMZn6Wir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeoI54ZO7gg3qnxGwKtwDbm5p43kgoyfE6r8RwYDC4MCYTjIyionRKSgTqf3TxIdZkxgWnyLkam6P2UlQGIJHDfjPqL8P9W4wLMgQsnKbuCwmoOigmHCrCRvznVPCADwJRwDFpgBJHTYSVg9PJ%2BldMLujC%2BdFLet%2Bp6VqlZjc89w1Z35kBcaMm9A8%2FNIoJ4hl2iyray5xqMp%2FLSvulwe%2FtU%2FgjcbbhOzIomvGlP5W2ivxzHq%2FE7eih2AOa56Q7AYdY13T29oGtjtZGuFkp6vf7lHOUcyKTIgB6kMrKxn62BSG%2FIXGv9i61SVEDuWrkVF3a%2F4vFYc6vQMFTlilnbi4kSwMS6VzjxPdVRJgU5lPRRkWTP4ZTRS9XTIcVLN66srMG%2BFnxP6PZfpXtm28WvPyMY2%2Ftffrkk92c0bIOrPhu4wsZdSnKPv6lsqGNdROAlsx4f00816uo2M%2F1mHmmIZT4C%2FaeKsomDNt%2BZUCa0ukVMfOW%2BcnPsUxVECal0X1Mr0KO8D7NgFZIJ6U6hMHvdVP%2Fvxz2PBt6AZVPQYBvjIt7HL0Q%2F6nxkeiI5OBqtuDDR4TuFjfj01ddn2tUqGMgxFhHMR3iwpD7SJrGeZ1VxTpczvleEZIVEyWurfnNm6kQ%2FXYYBmmfz0i%2Ba%2FrnJwwoqqcvwY6pgFl%2FPK2uvFJOffWy1mhY8b%2B878%2BYbyaAk98Ja6k3JvCY03pOZDKTIsAF7iLta%2Fqg1teGq0SMnugY9VYmBNv%2FuKop3jI0J339KSxX1Oc22Y9XKkqMZPVY7ZZaTesL8QEeCG1aFG0kOMkGz%2F7C3EtgzlX8k2oSkqELpz89uphOv7MJOFhmODi50ki1MpjZBvr3z5tHb8Gb3AgXXNGKuH3NnVdoPtLrSGr&X-Amz-Signature=71f6676b3ecbde449e509d437ed1426e7a1153ba79dd708c14357e7f41df73ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STIRP2E%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVIb8iVOXxfnq2MZiwfobiPuRyxNYPILvaDjolvH2ffAiAZCaOOE2sO8PNdaz4pRejCQF2GK%2FkLsMNoIpXQMZn6Wir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMeoI54ZO7gg3qnxGwKtwDbm5p43kgoyfE6r8RwYDC4MCYTjIyionRKSgTqf3TxIdZkxgWnyLkam6P2UlQGIJHDfjPqL8P9W4wLMgQsnKbuCwmoOigmHCrCRvznVPCADwJRwDFpgBJHTYSVg9PJ%2BldMLujC%2BdFLet%2Bp6VqlZjc89w1Z35kBcaMm9A8%2FNIoJ4hl2iyray5xqMp%2FLSvulwe%2FtU%2FgjcbbhOzIomvGlP5W2ivxzHq%2FE7eih2AOa56Q7AYdY13T29oGtjtZGuFkp6vf7lHOUcyKTIgB6kMrKxn62BSG%2FIXGv9i61SVEDuWrkVF3a%2F4vFYc6vQMFTlilnbi4kSwMS6VzjxPdVRJgU5lPRRkWTP4ZTRS9XTIcVLN66srMG%2BFnxP6PZfpXtm28WvPyMY2%2Ftffrkk92c0bIOrPhu4wsZdSnKPv6lsqGNdROAlsx4f00816uo2M%2F1mHmmIZT4C%2FaeKsomDNt%2BZUCa0ukVMfOW%2BcnPsUxVECal0X1Mr0KO8D7NgFZIJ6U6hMHvdVP%2Fvxz2PBt6AZVPQYBvjIt7HL0Q%2F6nxkeiI5OBqtuDDR4TuFjfj01ddn2tUqGMgxFhHMR3iwpD7SJrGeZ1VxTpczvleEZIVEyWurfnNm6kQ%2FXYYBmmfz0i%2Ba%2FrnJwwoqqcvwY6pgFl%2FPK2uvFJOffWy1mhY8b%2B878%2BYbyaAk98Ja6k3JvCY03pOZDKTIsAF7iLta%2Fqg1teGq0SMnugY9VYmBNv%2FuKop3jI0J339KSxX1Oc22Y9XKkqMZPVY7ZZaTesL8QEeCG1aFG0kOMkGz%2F7C3EtgzlX8k2oSkqELpz89uphOv7MJOFhmODi50ki1MpjZBvr3z5tHb8Gb3AgXXNGKuH3NnVdoPtLrSGr&X-Amz-Signature=1039246a4e1682e81a0f42618afff57de18191e25f30c536ccc11e35d89e61ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
