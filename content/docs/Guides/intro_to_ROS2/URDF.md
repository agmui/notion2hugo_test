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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEE7TJAG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BHwsOX%2BYG%2B9KCXD6yq4UEJ111B7PVBnIkSb29qLXTDAiAkEUsPjQH5RiHPFNw2y1%2FCAoHk2amX98QCwW%2FpMNCczyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMDaWnyLHS74H5M4KtwD5lGqMVrXbRniNXvu797Kv8yRMekqUZde8a2ZNt5%2BF0k3j32G2eJQ8jWqN7QXeWm9gK7xOhs4Nm3S1uPCcSgiY5AmeexUKj3JSl%2FRobef2%2FBgh1Ay75nnBeHFti%2BEPf4WKhVNzD3syOm2%2B0QpilhGYrEmZnOaHWej6hKgjABQg7nUr9CzsNZe3%2F8pM9dfZ1gSHDbunfPjFgx9BRC8qz6NQ13%2F6zEd114Zz8T1tQDUI57jLigvQqxH0SbZg8%2BlWDiTAyRIYvZ4Ztf5xqGzFZBXw3AkHgTudkgtY9zJEWWSHLCr5XWgpQXhwtoYpm9qFcTKEbrWbmi48ExJRPMvYbc5hqrk62ScCJLW4MdnQp1qwJOoiavFdXPsJ2e9y61zKi8VIshAABH9DDAjxABTok2ZInrg2icav2eklnUy%2FTytJK1OzrykYzUCI1X4HqKxQtZyAAOlM7h3xRjrkbyd8SwJ7dFJfPCR2FneOD71HuSp5LcZkLa%2FtKYm2upJqY9ZTivE%2BHl%2BiqVEuzCeXVyCSDDu1rFFajisLY7hlZkweZ%2FW1%2BP329QkVSIB9oovRv8D0fE5lF%2FUYKnkYG%2F2s8aEHWW7aOr%2B97ovgQCPF4Rm8KIhTjsdZC55rbSz0vloqY0w7ofsvAY6pgH2z9eLFYMm2KPx2Ij%2Bbmk3CuFD0X5xzOs0Og9Jck85C7M1Oj8qUOB2uvDgwCZRka3F%2BKRAlSiVAeXUnrEV%2B5i3z3gKhyXZGSo3rMugqI0ot%2ByWkhtOdAoJZF5Ey6LKP5ihv7TC0zKIe6qbNjUdtqIHNyS0%2FTHzWy6x%2FQr5Qwuj77fmvqK0Xz4EoC3WKSBv%2BBRJAJgb3FMglt%2B9Uo%2BuC%2FrJ3B8nJgra&X-Amz-Signature=212fc528b1db7577b6308ad4266841668793277d1f7818e727447c4a127d4c32&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEE7TJAG%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BHwsOX%2BYG%2B9KCXD6yq4UEJ111B7PVBnIkSb29qLXTDAiAkEUsPjQH5RiHPFNw2y1%2FCAoHk2amX98QCwW%2FpMNCczyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMDaWnyLHS74H5M4KtwD5lGqMVrXbRniNXvu797Kv8yRMekqUZde8a2ZNt5%2BF0k3j32G2eJQ8jWqN7QXeWm9gK7xOhs4Nm3S1uPCcSgiY5AmeexUKj3JSl%2FRobef2%2FBgh1Ay75nnBeHFti%2BEPf4WKhVNzD3syOm2%2B0QpilhGYrEmZnOaHWej6hKgjABQg7nUr9CzsNZe3%2F8pM9dfZ1gSHDbunfPjFgx9BRC8qz6NQ13%2F6zEd114Zz8T1tQDUI57jLigvQqxH0SbZg8%2BlWDiTAyRIYvZ4Ztf5xqGzFZBXw3AkHgTudkgtY9zJEWWSHLCr5XWgpQXhwtoYpm9qFcTKEbrWbmi48ExJRPMvYbc5hqrk62ScCJLW4MdnQp1qwJOoiavFdXPsJ2e9y61zKi8VIshAABH9DDAjxABTok2ZInrg2icav2eklnUy%2FTytJK1OzrykYzUCI1X4HqKxQtZyAAOlM7h3xRjrkbyd8SwJ7dFJfPCR2FneOD71HuSp5LcZkLa%2FtKYm2upJqY9ZTivE%2BHl%2BiqVEuzCeXVyCSDDu1rFFajisLY7hlZkweZ%2FW1%2BP329QkVSIB9oovRv8D0fE5lF%2FUYKnkYG%2F2s8aEHWW7aOr%2B97ovgQCPF4Rm8KIhTjsdZC55rbSz0vloqY0w7ofsvAY6pgH2z9eLFYMm2KPx2Ij%2Bbmk3CuFD0X5xzOs0Og9Jck85C7M1Oj8qUOB2uvDgwCZRka3F%2BKRAlSiVAeXUnrEV%2B5i3z3gKhyXZGSo3rMugqI0ot%2ByWkhtOdAoJZF5Ey6LKP5ihv7TC0zKIe6qbNjUdtqIHNyS0%2FTHzWy6x%2FQr5Qwuj77fmvqK0Xz4EoC3WKSBv%2BBRJAJgb3FMglt%2B9Uo%2BuC%2FrJ3B8nJgra&X-Amz-Signature=525d4b46f7c02b1d20eddeab10a054a4ff9247e7c7800a8767c04fa8bb559a93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
