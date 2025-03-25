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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6TXIGNO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0BFgdnfBT7kIdb560Jypu0YCBSVweQw83AQOKishmbQIgLUPTyOdMBY5q1%2BPasWzfigIXNSYpyYQNns%2BjKrv%2Bd%2FEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKJQDixyiQGYndyJWyrcA828CiIjRqt%2BbGMDpyK9XB5iEZmjN1hiU6ciGO5vMjOvC1LCT7qYFFEwx9BgMIKKKwR9kF53zZtkdU2pCrqWq07U5117HCw2RDbIJNw0Cc6%2FN4pF5GBXUXUjoKriTV4IPvETA1n0jmrBNWfWdRUpgGH6SJKA6y2wt%2FJCc1Krfbg4go5C7geZWV3jlu5%2FathEtIKdh8kHJXYskXmWSxjxqb0i%2B0Zx%2BbTWWtvbylcGoLP5mGKpu4Epw%2F40A1Bwd0ug7CsbpEkGLWqdC7RjG2L4WJB3v7xS9uDBI3nM651Zw5SjGV1q34cgS8dJxgCw3%2B8RFd5rPdMwBh3s8SZahQxjAwVZtpbB4f85VD8Lib2hvDJf%2FXZRI8lan50iKIksOohrAqxMu36UijQj1vnKaWdsrSlS0zEIz9b8qSx4ZXy8AUgFArjwHG3xPXT76%2BWeg3K2errOXe2DC%2ByubK1fu6Znjtot4W8fp9Fk1M02v%2BHmtQli9Q2%2Fh2v8ihBibfAVsTX1J949WgWx9eWP%2BC4kBq21cBnRW7R5Fj5mGdb%2Fs%2BOS5%2FFKB2soUa5W%2FUhEMmmMvwsSQUvxJPM%2Bcawoite5lm745r06y06H8feq6vg8hZGWUA%2BcJ6GrlQo7b3DsfdPDMKjFir8GOqUBF5tgzhmEQN39nnf0dk8FiOktTcnLDKyib3pezYwJ9ZtoB2ILBx2bc%2F1eY%2BfVH4%2BljPE6JR4%2Bb7XUg4i6XWueFNiU5htdPxLk45XC7Y483NQRugP0AOhwEJr4oan3NkRivRO156DaPFC5IqwDe7BtDP8OO2F%2BEFYXUyahk5%2FIMGw6FExX96qvuPFLRJPOtIyufZPm10EJ5JD%2FTStkyD24nL3sredS&X-Amz-Signature=e3605ca487aac27c6957a97d6c3cedfa8a28c2bb2db68f213bd8bff842acd59a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6TXIGNO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0BFgdnfBT7kIdb560Jypu0YCBSVweQw83AQOKishmbQIgLUPTyOdMBY5q1%2BPasWzfigIXNSYpyYQNns%2BjKrv%2Bd%2FEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKJQDixyiQGYndyJWyrcA828CiIjRqt%2BbGMDpyK9XB5iEZmjN1hiU6ciGO5vMjOvC1LCT7qYFFEwx9BgMIKKKwR9kF53zZtkdU2pCrqWq07U5117HCw2RDbIJNw0Cc6%2FN4pF5GBXUXUjoKriTV4IPvETA1n0jmrBNWfWdRUpgGH6SJKA6y2wt%2FJCc1Krfbg4go5C7geZWV3jlu5%2FathEtIKdh8kHJXYskXmWSxjxqb0i%2B0Zx%2BbTWWtvbylcGoLP5mGKpu4Epw%2F40A1Bwd0ug7CsbpEkGLWqdC7RjG2L4WJB3v7xS9uDBI3nM651Zw5SjGV1q34cgS8dJxgCw3%2B8RFd5rPdMwBh3s8SZahQxjAwVZtpbB4f85VD8Lib2hvDJf%2FXZRI8lan50iKIksOohrAqxMu36UijQj1vnKaWdsrSlS0zEIz9b8qSx4ZXy8AUgFArjwHG3xPXT76%2BWeg3K2errOXe2DC%2ByubK1fu6Znjtot4W8fp9Fk1M02v%2BHmtQli9Q2%2Fh2v8ihBibfAVsTX1J949WgWx9eWP%2BC4kBq21cBnRW7R5Fj5mGdb%2Fs%2BOS5%2FFKB2soUa5W%2FUhEMmmMvwsSQUvxJPM%2Bcawoite5lm745r06y06H8feq6vg8hZGWUA%2BcJ6GrlQo7b3DsfdPDMKjFir8GOqUBF5tgzhmEQN39nnf0dk8FiOktTcnLDKyib3pezYwJ9ZtoB2ILBx2bc%2F1eY%2BfVH4%2BljPE6JR4%2Bb7XUg4i6XWueFNiU5htdPxLk45XC7Y483NQRugP0AOhwEJr4oan3NkRivRO156DaPFC5IqwDe7BtDP8OO2F%2BEFYXUyahk5%2FIMGw6FExX96qvuPFLRJPOtIyufZPm10EJ5JD%2FTStkyD24nL3sredS&X-Amz-Signature=2d913721df1119bb879d89f425b0e0d157e1a5307c0cacad6b9ca7fbf6a3c20c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
