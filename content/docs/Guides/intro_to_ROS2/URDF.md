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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NQKCRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC619%2Frc2xT4npqb%2Fuwn%2B3Fy04FRMDgb4dZPSxQQBzV1QIgTHCYHbpym%2BPbUSFo%2FgICR0nO8o35%2BCj2ypjYwr576Wwq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHn4wOQ6KYaunxwSPyrcA4huOkBdm5K0TL40T6ClC1PB07%2FYHnEAOI3nrhEQhzEx5%2BVBwt8DlErangYYRRnpjkk0XMpVSoOoQmQ7g1WUt8ZU0d3cok0sQfbmkyht1I4gmslXf9SJu90qeNdc0QX7Mp9qYyshqe62wM1ibL6tRdUCfzmDluTzxRun%2FZoHyL5qWx49YR0gCH8V5zrfVquBMsS1jFus1BxRxUkWCLO1meoapx%2BO7BurwRxsYskAvaZ0t%2BX%2B9vupBgxVhwx3dekHLjJYo9Uh5mBuh4Hw2ExN0KbKO%2Bi0NMc4reZFTtY6T6SWOjywlagr3pcZ4VY2gu5BIG%2BLxIQ7J9th1ML0uk7ablquIlMUBNNmSfxD%2FsZfrWJ0%2BrHmYjfhs1NpIZ3OUPdsIy3LQrVaZhnZaYtXxp0ZzZxQuInH0E7dDCXVv20sSihNAl%2FsQcbpPbGlQqG97FscsGLA8bhVC52mTLqFmHZkJzmziol8IRo1QhW9F4U8jtCxv4X2lrwvXUL0bVDZDYWRZ%2BNRMd6e6LkmwJnRBtvsWAe5WSI%2FrwFujxAXOywf7jvhFA49rLRCG2b47iDxcp%2FdpDfHAoPSaekS3aEcStzIpASy8z%2BMglwdKebbR1uUHGPV5yRJG1c5SPk9VExXMKWF%2FcEGOqUBQ8GyuqBpyDLZzz7ei7fdvQoPAgkZCIL1H2ny8VcFtNLbaUIbo40Ks3cF1dhndn3%2BG7uK7FhQ17lR7gnX1ZECK7zkplDkrpq2dUrAbgCnghDsQSKwnyrEjqbd0FtqCrTskc0x%2FyBzTOGxaSblK7upmEzRQnWfZfMiBGkRLx55jU3NkHiRO1plAcNyF%2FKp02%2FkkDWJqn2UNkLS5XElAwWDZSmy4Bty&X-Amz-Signature=a2760a28e3520f17f75f8ef779767cacaedba4dc7cf7d5117d84094f51691b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NQKCRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC619%2Frc2xT4npqb%2Fuwn%2B3Fy04FRMDgb4dZPSxQQBzV1QIgTHCYHbpym%2BPbUSFo%2FgICR0nO8o35%2BCj2ypjYwr576Wwq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHn4wOQ6KYaunxwSPyrcA4huOkBdm5K0TL40T6ClC1PB07%2FYHnEAOI3nrhEQhzEx5%2BVBwt8DlErangYYRRnpjkk0XMpVSoOoQmQ7g1WUt8ZU0d3cok0sQfbmkyht1I4gmslXf9SJu90qeNdc0QX7Mp9qYyshqe62wM1ibL6tRdUCfzmDluTzxRun%2FZoHyL5qWx49YR0gCH8V5zrfVquBMsS1jFus1BxRxUkWCLO1meoapx%2BO7BurwRxsYskAvaZ0t%2BX%2B9vupBgxVhwx3dekHLjJYo9Uh5mBuh4Hw2ExN0KbKO%2Bi0NMc4reZFTtY6T6SWOjywlagr3pcZ4VY2gu5BIG%2BLxIQ7J9th1ML0uk7ablquIlMUBNNmSfxD%2FsZfrWJ0%2BrHmYjfhs1NpIZ3OUPdsIy3LQrVaZhnZaYtXxp0ZzZxQuInH0E7dDCXVv20sSihNAl%2FsQcbpPbGlQqG97FscsGLA8bhVC52mTLqFmHZkJzmziol8IRo1QhW9F4U8jtCxv4X2lrwvXUL0bVDZDYWRZ%2BNRMd6e6LkmwJnRBtvsWAe5WSI%2FrwFujxAXOywf7jvhFA49rLRCG2b47iDxcp%2FdpDfHAoPSaekS3aEcStzIpASy8z%2BMglwdKebbR1uUHGPV5yRJG1c5SPk9VExXMKWF%2FcEGOqUBQ8GyuqBpyDLZzz7ei7fdvQoPAgkZCIL1H2ny8VcFtNLbaUIbo40Ks3cF1dhndn3%2BG7uK7FhQ17lR7gnX1ZECK7zkplDkrpq2dUrAbgCnghDsQSKwnyrEjqbd0FtqCrTskc0x%2FyBzTOGxaSblK7upmEzRQnWfZfMiBGkRLx55jU3NkHiRO1plAcNyF%2FKp02%2FkkDWJqn2UNkLS5XElAwWDZSmy4Bty&X-Amz-Signature=2957d32c08e2fac9e3730cf37ba737d04bd337e276206925137d5a24c70a7cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
