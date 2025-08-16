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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LU4QHH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDgXIn7APw1Jk5RwFr4b3Psbnl1mgkJvWUOnDaj53KqTQIhAOs%2FSZmrDESN3IourNALe1r4nGWLUG91AUH0toxmPvQJKv8DCHcQABoMNjM3NDIzMTgzODA1Igwx14hkgnB3qE157jcq3AOLCSOkwGvRfjf6pBH9m0CIE1Tz9PEn9StG0Vijjt%2BwjCg5wdw%2Br30j1TarAU3jMZnsgn23tq77Od9HPdZjX06b9NjhdxT5PlaqH4EAKrYtWJL99kQsf8iMwY6x%2FXwsnYjvkiknuEausEJZT3qUOhzSBrLTdlvofozR%2BamTgON0Ys%2FgKqn8B8FXEqBc%2BIS5uubigVf%2FTc5HvrLCLZzrgTIvKQUbAOTUPcazeWE3BkAF5FFRPXXb6OENV12PCY20gz4W%2BpyGbB1ZoZH8R662QR4dR2qww%2FVoKofZTw2BWTfPFbmzFLYX9tx0TlTdpc2FlhnoKgRqOppAwlsGgGHK8AmUCYJtxGzYFOQZ8EzZvYyuz8w88UFshzZDgfPHeQOmc2diBuLZDujHck7WJBx%2FwD0TYHTXhr2xfWXtNP9HC8IEDxQLanoAvFf%2FWwzbTeV8kruFb372q%2B3O6ldzsNdLVY1BUdtr8C8M5ui8a1cUaJFWfvNbY0AgClvcBnmpWEninCVU6x3LSS%2FEBp9Nk4g3B6s0uCkdX%2B0TvIln%2F07YVYd7H0u7hO0%2F2e2QyNZSqNgkJ6s2TrUDpEdaW3pYB3XSNXGSByBIrpTqWtBrDZ3twWANUO2wQai1jFuR3El9UTDUlILFBjqkAb1ZmWNtn%2BHG5%2B6DuPpzOnMxMzN4SnKa4cZM1YeT%2BeymnDAzeUa56oHP1RpCisgAD%2F5WBuKrGqv1gBeX7bzeVwqThS7pFfeOh2RuAoWUHAB6B3xRFakeJnNnjIN1tK1r%2BXM%2FU5JrJiYMGFJlaAVr0Rydgvmlko8uL2QW3gAVhRQQMOPD0xkud3dvRje6A8uqh9GJl2cxn%2FGkeH%2BzCEQSzA0mFwAj&X-Amz-Signature=461ccbf4112d2599d7031de1e2e5469129a46f24282e38e92a65c8398860d2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LU4QHH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDgXIn7APw1Jk5RwFr4b3Psbnl1mgkJvWUOnDaj53KqTQIhAOs%2FSZmrDESN3IourNALe1r4nGWLUG91AUH0toxmPvQJKv8DCHcQABoMNjM3NDIzMTgzODA1Igwx14hkgnB3qE157jcq3AOLCSOkwGvRfjf6pBH9m0CIE1Tz9PEn9StG0Vijjt%2BwjCg5wdw%2Br30j1TarAU3jMZnsgn23tq77Od9HPdZjX06b9NjhdxT5PlaqH4EAKrYtWJL99kQsf8iMwY6x%2FXwsnYjvkiknuEausEJZT3qUOhzSBrLTdlvofozR%2BamTgON0Ys%2FgKqn8B8FXEqBc%2BIS5uubigVf%2FTc5HvrLCLZzrgTIvKQUbAOTUPcazeWE3BkAF5FFRPXXb6OENV12PCY20gz4W%2BpyGbB1ZoZH8R662QR4dR2qww%2FVoKofZTw2BWTfPFbmzFLYX9tx0TlTdpc2FlhnoKgRqOppAwlsGgGHK8AmUCYJtxGzYFOQZ8EzZvYyuz8w88UFshzZDgfPHeQOmc2diBuLZDujHck7WJBx%2FwD0TYHTXhr2xfWXtNP9HC8IEDxQLanoAvFf%2FWwzbTeV8kruFb372q%2B3O6ldzsNdLVY1BUdtr8C8M5ui8a1cUaJFWfvNbY0AgClvcBnmpWEninCVU6x3LSS%2FEBp9Nk4g3B6s0uCkdX%2B0TvIln%2F07YVYd7H0u7hO0%2F2e2QyNZSqNgkJ6s2TrUDpEdaW3pYB3XSNXGSByBIrpTqWtBrDZ3twWANUO2wQai1jFuR3El9UTDUlILFBjqkAb1ZmWNtn%2BHG5%2B6DuPpzOnMxMzN4SnKa4cZM1YeT%2BeymnDAzeUa56oHP1RpCisgAD%2F5WBuKrGqv1gBeX7bzeVwqThS7pFfeOh2RuAoWUHAB6B3xRFakeJnNnjIN1tK1r%2BXM%2FU5JrJiYMGFJlaAVr0Rydgvmlko8uL2QW3gAVhRQQMOPD0xkud3dvRje6A8uqh9GJl2cxn%2FGkeH%2BzCEQSzA0mFwAj&X-Amz-Signature=83127dfe367b2acde87859bb48482a1f4c76f028b683d19cbcafd697ba07750c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
