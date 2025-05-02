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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27AUKJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCu9GHADhdASsJwitrGxe177VQB3gaZBKkG2ed%2BClzxigIhALK%2BTPrdbhh3376raWICrWumY52fc%2Bm12b6BOXNozekKKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy8rGfsV3H1Nuu%2B%2Bcq3AMMDrFAgnRHnY3IH0FFHuy4VXfJ10n68V9yx4uR8PPjsbUwBSf8N5T1cP9dqe6niyNeuz0FXpiH3FK5%2BnOgmYHpwNoYE8TplyoCpI64pYF8nYIMap87fwVpseQv7b%2BqKRkwZPi3dM1PiO5evIk33rt97yRsDo5KyMuqF5PZHB69HMglxWZz%2BKUVTn2QOYtlWjeYSNXrgxdLlOYdB%2FSdFP14XQ%2FLmDCZQQUZkgC3X%2FYRgZL3Yr5TSUBEfQw4n320hyyuQMdfXYGKRo%2FkN3HqYO%2Foa5c%2BZ9Mxg19VmMEjO2wgfuROQCEsYZNX5vCjcp6s3o2JskaqwnGQRD4ZDvFdlmlBP6HlWMCwzRuZ%2FcqdiiY%2F1SPLSF%2FYgnaaUNGA5vRk4KGRIVDgHvC9TuM4ZhKP%2Ft4kR4IkSqFFS9VAuvVMJzSeNWX381sTlW5LjUuPSJXhmvCsqtBMBd9c89wqZXKy4vt6YLIURLkOdajam%2FSgxYRunPYa%2BoyUiXii3TEiBgA1DlBqm5xhBNWMvXvWJ3WERjQGXJbBz5Yg8MQjK%2FNJk%2FmVhbbsA7O2H8rSKjuPdrs4kw0aBDhPz28P7zC9m51gmWoOVzL%2BS2KwoZvFdc9%2BUgiAQibYUEjqc9jg8T1pYzDz7NDABjqkAeAI8OMe53gnGF4iN3fO7qdYXbPMXpO6y%2FB%2FPgA3vHouBZ7FcXYoraZvSvLQ0g%2BZOAfZddFd%2FBKO9t9YslJ0SfxQy2W3D1JpeD9JtyVVhLeL8drL%2FOCydvPybvoKl8LyFFOSbhpA4NamJAdLKmsmv2UhsBMTtkXBYEBLFSVu5nm9eAKSiTLFjhCcWuNPTjn5OMlHX1rR4%2FlkDQz5vuyLkhEvHjFM&X-Amz-Signature=f6f3adaf6f719f39c097f3b7a57244fc3c4a662ec3a1f8498329f8f26e100fde&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27AUKJ5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCu9GHADhdASsJwitrGxe177VQB3gaZBKkG2ed%2BClzxigIhALK%2BTPrdbhh3376raWICrWumY52fc%2Bm12b6BOXNozekKKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy8rGfsV3H1Nuu%2B%2Bcq3AMMDrFAgnRHnY3IH0FFHuy4VXfJ10n68V9yx4uR8PPjsbUwBSf8N5T1cP9dqe6niyNeuz0FXpiH3FK5%2BnOgmYHpwNoYE8TplyoCpI64pYF8nYIMap87fwVpseQv7b%2BqKRkwZPi3dM1PiO5evIk33rt97yRsDo5KyMuqF5PZHB69HMglxWZz%2BKUVTn2QOYtlWjeYSNXrgxdLlOYdB%2FSdFP14XQ%2FLmDCZQQUZkgC3X%2FYRgZL3Yr5TSUBEfQw4n320hyyuQMdfXYGKRo%2FkN3HqYO%2Foa5c%2BZ9Mxg19VmMEjO2wgfuROQCEsYZNX5vCjcp6s3o2JskaqwnGQRD4ZDvFdlmlBP6HlWMCwzRuZ%2FcqdiiY%2F1SPLSF%2FYgnaaUNGA5vRk4KGRIVDgHvC9TuM4ZhKP%2Ft4kR4IkSqFFS9VAuvVMJzSeNWX381sTlW5LjUuPSJXhmvCsqtBMBd9c89wqZXKy4vt6YLIURLkOdajam%2FSgxYRunPYa%2BoyUiXii3TEiBgA1DlBqm5xhBNWMvXvWJ3WERjQGXJbBz5Yg8MQjK%2FNJk%2FmVhbbsA7O2H8rSKjuPdrs4kw0aBDhPz28P7zC9m51gmWoOVzL%2BS2KwoZvFdc9%2BUgiAQibYUEjqc9jg8T1pYzDz7NDABjqkAeAI8OMe53gnGF4iN3fO7qdYXbPMXpO6y%2FB%2FPgA3vHouBZ7FcXYoraZvSvLQ0g%2BZOAfZddFd%2FBKO9t9YslJ0SfxQy2W3D1JpeD9JtyVVhLeL8drL%2FOCydvPybvoKl8LyFFOSbhpA4NamJAdLKmsmv2UhsBMTtkXBYEBLFSVu5nm9eAKSiTLFjhCcWuNPTjn5OMlHX1rR4%2FlkDQz5vuyLkhEvHjFM&X-Amz-Signature=e528155acb2b1e305a7e6418d7241687e7a2b044305c5ca355cb26bce62328d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
