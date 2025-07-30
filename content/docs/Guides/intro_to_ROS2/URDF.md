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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7VK2PF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2FooObDelasrTU8UrxPii4Vh68euckzHnpp%2BnSMWPhQIgdA0r6U%2BbylUCJPaCR2KP5rtfETFrr83vyAbWBZ%2Bul%2FMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPE4sGbEUlb2i60iyrcA%2F%2FIcDkKyK7xfVbl%2BW4d8gTgstUa1%2BGuXqomFKlJ2AbThWvs3lAGwPUC8lKStSSi2scsbli6PiCybuO2z7VSoZrkwwSszLuTLj50uXGLv3ZDuoUuZi1eSw4VqHzY%2Bd%2BGArfV%2BCWcMas9hbBUOxP%2FhHBQ6RWrV946SZMyvnk3p5BwoKk5M0Z7SuXiYf7mkbVZ5EZWlMZtcALOVDwN6xAO4SOBvfg4GnISeL3d9IZmAJacvpHudVwSjDaruHOxTxpH8mEg5%2Fx%2FenJLYr%2BqrqE8J1Ld6Nw9WNgp9ftZ%2Bb3WNx559p5%2B4k4uBChgIEu9wtxEa1afxLRVw3Bf9I3zrz1WMr8axHD%2F6LasiyFu2SXATTwIYpxb%2BDel2nOavZ%2FpGDv8v%2Fm5F2quumBpBk09bnRBqM0b4ikudNx5m%2FiMumnsCA65rmQ6mVOQ81ycuOwNiFB%2Ba8NjfDtk%2FQS5kfNbNTTsgaGHwESZQGyEwIFnV%2FNbsqNA0yO8Bs9%2BNbaTJXf8brBkjqYFyaGb65PgTrab23AEjKRv8D3Pebx%2FpzAabV6x2MDT6tz4QGaWF2bPtdb%2BCfiEagvahqv%2Bf446SkYCJB4nbDbJPffwN49hdOhY5ENgArIXTKpbH64shf8LJD5NMMPypcQGOqUBjkTywgd%2FsRYGE%2FAcw4s%2FsvGG8iFs1kQ1E1ORwR3tdWXVZ%2BDNuK3%2FJyk1vqU7x3aSrNhw6KGJHYhLtnC4q2ZTKFpTpWPJbACPsjFUqM7vqlX4t833u9ukZavyJ6z%2FNi7rPT%2FCfevOzEwMxxZESSe%2F8wQpAQd6fXkKjeXeY8JNNGaEHebpDpIZAt2SMIGV6wgM6OzevattP2v8YXiG7LapyRCtQXMB&X-Amz-Signature=74e91707b6ad43e18f97952e7cb70b00c951834b8a265ee8d418a5df549d7be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7VK2PF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2FooObDelasrTU8UrxPii4Vh68euckzHnpp%2BnSMWPhQIgdA0r6U%2BbylUCJPaCR2KP5rtfETFrr83vyAbWBZ%2Bul%2FMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPE4sGbEUlb2i60iyrcA%2F%2FIcDkKyK7xfVbl%2BW4d8gTgstUa1%2BGuXqomFKlJ2AbThWvs3lAGwPUC8lKStSSi2scsbli6PiCybuO2z7VSoZrkwwSszLuTLj50uXGLv3ZDuoUuZi1eSw4VqHzY%2Bd%2BGArfV%2BCWcMas9hbBUOxP%2FhHBQ6RWrV946SZMyvnk3p5BwoKk5M0Z7SuXiYf7mkbVZ5EZWlMZtcALOVDwN6xAO4SOBvfg4GnISeL3d9IZmAJacvpHudVwSjDaruHOxTxpH8mEg5%2Fx%2FenJLYr%2BqrqE8J1Ld6Nw9WNgp9ftZ%2Bb3WNx559p5%2B4k4uBChgIEu9wtxEa1afxLRVw3Bf9I3zrz1WMr8axHD%2F6LasiyFu2SXATTwIYpxb%2BDel2nOavZ%2FpGDv8v%2Fm5F2quumBpBk09bnRBqM0b4ikudNx5m%2FiMumnsCA65rmQ6mVOQ81ycuOwNiFB%2Ba8NjfDtk%2FQS5kfNbNTTsgaGHwESZQGyEwIFnV%2FNbsqNA0yO8Bs9%2BNbaTJXf8brBkjqYFyaGb65PgTrab23AEjKRv8D3Pebx%2FpzAabV6x2MDT6tz4QGaWF2bPtdb%2BCfiEagvahqv%2Bf446SkYCJB4nbDbJPffwN49hdOhY5ENgArIXTKpbH64shf8LJD5NMMPypcQGOqUBjkTywgd%2FsRYGE%2FAcw4s%2FsvGG8iFs1kQ1E1ORwR3tdWXVZ%2BDNuK3%2FJyk1vqU7x3aSrNhw6KGJHYhLtnC4q2ZTKFpTpWPJbACPsjFUqM7vqlX4t833u9ukZavyJ6z%2FNi7rPT%2FCfevOzEwMxxZESSe%2F8wQpAQd6fXkKjeXeY8JNNGaEHebpDpIZAt2SMIGV6wgM6OzevattP2v8YXiG7LapyRCtQXMB&X-Amz-Signature=c7994a2d0eef495e0528245840373424ccca3670a2ee2f1d5f43707062c11cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
