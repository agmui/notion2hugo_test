---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLY7DC5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDWp1XdELOqXH9n3HTQk4XlDGg20ExViVmAkQyJYk28RAiEAwiIrGt9gz5OWaJGFtciTZnE8nkLvoH7BwSKNrrFQZYYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBxJP1ViKx6xb%2BZi1CrcA8BV0SR8Kv7oLfyvgB4R2CWq1y5bgFwTsDloQmH%2Bxzxb78SNh61Hx153r8F64qpsc5X2fI5tK%2FR0OKCT51pAHlTuwPUsfxCqD52q8mPo9D%2BoUmqoHFEKQXg89GmJ7%2FSwnDrDhrP%2B2jzC%2BKA%2BABTKVNuJKlQMKn7DK4FsxHzSOEM%2B8kwJs71%2FPPgFetzMF%2BgM2fpsqhcXlYxJ5W5AOJ%2BJgrROmgUzZPBWMxG3VIvhOP9tBvuDIQCqSrc2WKc2DaL4%2BpHttp4MZ%2F7xnEEvFNTAr5aMt0RTBZp9zUu6xDKLDXsJnOzeVG%2FVIeGey3uOmXoGoij3NX8xMTzjd0QGqSsWIiYPBUjxJZFQtBx%2B%2FsQfcc2xJEObuMmQ5UMTqjkJ8t5azvOxkKY%2BrJdXTJfbIKkTvtOeGc6bzJE0WwLD2gB2y7ZkZKFJgZc0x2uaPfP7w%2BnBwEmNXItvKlCIx3bdOs4XhElmjsqmwLncxUIqY4EcN7ufQjA1q4goNhj2IFUs5KdCt3ITmuIT7glIkwxQhY12%2FadoZ2Gy3SmOtUE9Tagr6s9IT%2BS4fTBRKi68LAXiFCXvtwT3tieqeQkRmTz%2FKN3HPPmymrAlmjnQzySjurPiBflhC0AMEITDaTymP%2Bq9MKKj%2BsQGOqUBPfQsjUqWh51s8QyhsryRX4SK3doEi5vb2FrIaBi0dqIYt8%2FGm8hmn05sf9dqacJmmJjSW%2FMQDrEygFd2ZVVF%2BPc%2FjMGQZwdO5atS%2FOT3owd31cBcIkHWYrrHe1py9waNYLD0vtpETf4KPP90LDqutr8DX10scAMpUCo%2Fw46t13iBmMPDrZp0JKc%2FQNlyPJtygo9QVVT4k%2Bsz22%2F4E0k28txAovMh&X-Amz-Signature=ea0c24a8abb8feb9ffbad0d993709742cf511a08702e073972c2bf4e6d47e817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLY7DC5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDWp1XdELOqXH9n3HTQk4XlDGg20ExViVmAkQyJYk28RAiEAwiIrGt9gz5OWaJGFtciTZnE8nkLvoH7BwSKNrrFQZYYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBxJP1ViKx6xb%2BZi1CrcA8BV0SR8Kv7oLfyvgB4R2CWq1y5bgFwTsDloQmH%2Bxzxb78SNh61Hx153r8F64qpsc5X2fI5tK%2FR0OKCT51pAHlTuwPUsfxCqD52q8mPo9D%2BoUmqoHFEKQXg89GmJ7%2FSwnDrDhrP%2B2jzC%2BKA%2BABTKVNuJKlQMKn7DK4FsxHzSOEM%2B8kwJs71%2FPPgFetzMF%2BgM2fpsqhcXlYxJ5W5AOJ%2BJgrROmgUzZPBWMxG3VIvhOP9tBvuDIQCqSrc2WKc2DaL4%2BpHttp4MZ%2F7xnEEvFNTAr5aMt0RTBZp9zUu6xDKLDXsJnOzeVG%2FVIeGey3uOmXoGoij3NX8xMTzjd0QGqSsWIiYPBUjxJZFQtBx%2B%2FsQfcc2xJEObuMmQ5UMTqjkJ8t5azvOxkKY%2BrJdXTJfbIKkTvtOeGc6bzJE0WwLD2gB2y7ZkZKFJgZc0x2uaPfP7w%2BnBwEmNXItvKlCIx3bdOs4XhElmjsqmwLncxUIqY4EcN7ufQjA1q4goNhj2IFUs5KdCt3ITmuIT7glIkwxQhY12%2FadoZ2Gy3SmOtUE9Tagr6s9IT%2BS4fTBRKi68LAXiFCXvtwT3tieqeQkRmTz%2FKN3HPPmymrAlmjnQzySjurPiBflhC0AMEITDaTymP%2Bq9MKKj%2BsQGOqUBPfQsjUqWh51s8QyhsryRX4SK3doEi5vb2FrIaBi0dqIYt8%2FGm8hmn05sf9dqacJmmJjSW%2FMQDrEygFd2ZVVF%2BPc%2FjMGQZwdO5atS%2FOT3owd31cBcIkHWYrrHe1py9waNYLD0vtpETf4KPP90LDqutr8DX10scAMpUCo%2Fw46t13iBmMPDrZp0JKc%2FQNlyPJtygo9QVVT4k%2Bsz22%2F4E0k28txAovMh&X-Amz-Signature=d2a54a6947f5fd7fe16f0c1691298f6b78f10be31b1d398dc0ad0be3b052608e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
