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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZETD3O4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCplhfoL2hptgwf40Uis0QtJugkoWRjUwai9FpA0Uho2gIgeXYnGXMyiPcCcev8cCNc%2Bz5blsQVouDYGeshrfWsl6sq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGetOB3tgQk0una%2F%2FSrcA%2FjqZiXNvwNgq3dFxQBBym%2Bs1UNv1wcBOJTdPJxOmcYFkMTBS1yQnFcXR%2BU9Fj69W45SEWoFv2O5nY%2BahjbdIJ8yVHehpyaPuMePcLY2kgQZfDBPsvI1sBZm6QXH35vvKuk091hk%2FwA%2B2qv6U0QlhZ5KwQHivYX1%2B7tjsCg8jeUWVMmtsUxY9rv18jSmsJEsFapYl3JH3xJDAsCxyYKIbasvJ4CNebEZjmEwm9csHtL%2BNb5TEFf2dNJ2S45x0sfiSTdbz5xb3BtDepL0EtD1J22LQGhYI4hLUoPKALf89BaWGWaR%2BwaGUr%2BVffaqToZQzHrp6zp6F51LelH5CJg7sprchz%2BtbgL1n%2BzYuel6iauXCk%2BoY%2FAiNuo4eaEjprF9dW%2BB5gWQnple0NgJPqSG5ePHyKST%2FD%2BQipSYXChElxqreIktjVGfbUD%2FSR6KJ7I16Qc%2FYVSZYldhzYOKAKyckbJlM8QFwxMdvXI%2Bh9qmKl4KdKpJf%2FMOwO5%2BGDZb8gtiL8%2FGoya6Q812uqu34LTQpK7avno%2BEmIUbwEJFuFEb42ZZ%2BhbNrqBGIieQauYex6%2Fc3jP2cSd81g2smwVmr%2BSWtqH7SZ84TwIto9BzQ%2FIexHd9gmTM4wysr%2FjUGZAMKKf9cIGOqUBPVCbIGcuvOm1ZJ6aHAAfoGlRZ7K8uagxjdwzyvqKvKDhBrOvVUKIHUpF7sNfZRkJ2esgKKmGGcoG%2BCbdyaXrW6O2Vhi%2BmJzikl1Zm%2B2qCQv2ShJXiKAApbk%2BKAtGmAUlqqm0SkHCh3P9Onp7NaVxBaq8b1s6cOYWAs4xcLvl6U0pz0KmS1PQEgTcgyimWSpOW%2FkLNR%2FvtylQM8%2FZHn63YBvpLvuS&X-Amz-Signature=a5188fa5ad268d4059165df807fc9706f05a306ce43ccf223bf3ccda6051a955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZETD3O4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCplhfoL2hptgwf40Uis0QtJugkoWRjUwai9FpA0Uho2gIgeXYnGXMyiPcCcev8cCNc%2Bz5blsQVouDYGeshrfWsl6sq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGetOB3tgQk0una%2F%2FSrcA%2FjqZiXNvwNgq3dFxQBBym%2Bs1UNv1wcBOJTdPJxOmcYFkMTBS1yQnFcXR%2BU9Fj69W45SEWoFv2O5nY%2BahjbdIJ8yVHehpyaPuMePcLY2kgQZfDBPsvI1sBZm6QXH35vvKuk091hk%2FwA%2B2qv6U0QlhZ5KwQHivYX1%2B7tjsCg8jeUWVMmtsUxY9rv18jSmsJEsFapYl3JH3xJDAsCxyYKIbasvJ4CNebEZjmEwm9csHtL%2BNb5TEFf2dNJ2S45x0sfiSTdbz5xb3BtDepL0EtD1J22LQGhYI4hLUoPKALf89BaWGWaR%2BwaGUr%2BVffaqToZQzHrp6zp6F51LelH5CJg7sprchz%2BtbgL1n%2BzYuel6iauXCk%2BoY%2FAiNuo4eaEjprF9dW%2BB5gWQnple0NgJPqSG5ePHyKST%2FD%2BQipSYXChElxqreIktjVGfbUD%2FSR6KJ7I16Qc%2FYVSZYldhzYOKAKyckbJlM8QFwxMdvXI%2Bh9qmKl4KdKpJf%2FMOwO5%2BGDZb8gtiL8%2FGoya6Q812uqu34LTQpK7avno%2BEmIUbwEJFuFEb42ZZ%2BhbNrqBGIieQauYex6%2Fc3jP2cSd81g2smwVmr%2BSWtqH7SZ84TwIto9BzQ%2FIexHd9gmTM4wysr%2FjUGZAMKKf9cIGOqUBPVCbIGcuvOm1ZJ6aHAAfoGlRZ7K8uagxjdwzyvqKvKDhBrOvVUKIHUpF7sNfZRkJ2esgKKmGGcoG%2BCbdyaXrW6O2Vhi%2BmJzikl1Zm%2B2qCQv2ShJXiKAApbk%2BKAtGmAUlqqm0SkHCh3P9Onp7NaVxBaq8b1s6cOYWAs4xcLvl6U0pz0KmS1PQEgTcgyimWSpOW%2FkLNR%2FvtylQM8%2FZHn63YBvpLvuS&X-Amz-Signature=0459541055a0562a16fa6cd2751ad1611ff36f69fafe909cca2d1b252c799993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
