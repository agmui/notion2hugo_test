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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGC6PEKK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCfD8ZP5M7%2BsG%2F2CNx1a9v3gLUXv%2BtlCRR7%2B592QkTw5QIgJUidlNVCqe5DvOE%2BfqhuI8P0CAYalb3%2FqGfiB4CUM5Iq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDM4i91g3uljG0Se3hSrcA%2BGE0KiOvD7vzvACxTdo3fEE0UkRMafHCcb1UVQPdPbdtOjF5SVu8OHuWyzjgTQYNIujrllmaoQXmaSpdFv1unOX%2FXSOJl9WZDfT5BUrWj0T3TUmabtOsdhGQ82ueulV7VuiEZ3e4Ksn2toUkfUmzWM8V9jZGegluPx1r3aQSL7M2jRQwuZoQOpeYYpJXkgjjv8WJAfe7UgwDkAHn2GXsfyX0se00hblvFyPJHooEM%2BFk68I3NOkPv9l8QaftWW%2F29oj2GlvU%2FATs8X3n7NuBaVOgyJURZvIwLX1ok0PJBVlxHBMndhHEE0DPi7wrTsFgF7RUCBVT7TPRs5Q%2Fl8TUdVXBFNlFa%2FrR%2Fjdro1JKRmZSAjOipJ0GGZzO5%2BzsdcSE9YssqWVhwCw2ttEqVXaoeATkwdckMo2QF6ca4MMifP6Myil0XtCpsqU2eTwX3xRJAC7UdTV%2B5R%2FSuSgV9nEstWduZpECuOtQrO%2Fr5%2BVrJ2dw2g5Znjq%2BjJZtdDZes%2FmiZp5AG5KUjxOopTmPtZT695ntm3NxbUGmt2shDZfcr6EF3MtOgwjmBMnteqR0jDpvcplqS%2BdEpfYbCcqyL0ucWYkznoad1k8M6jL1YM2oPbemRusu7D2JAAbsZJsMKP5gMUGOqUBRjc%2F%2B4fu4waTRGgukDAe3q3%2FI1NTlznXOEiD9%2B%2FyDXvvvr5kNiFTcL1Jkct6p8LWKjptjDzHUnKC9xAgJU5c0ja79fqW7Q%2BXC%2BHVW5azeAfToWMh9rOKCPpRw2hsvMMViOJI1iyHBfj8wE8lA7bibyuqwd9okp3QAmjG5Br%2FUfcaJu0Z1sW8zFBLnZoqiEJPxDsqQ%2FkwbY19OfBpkud8%2BwmXVFu0&X-Amz-Signature=ca47a65c8e0df6bcb2e07660043b2164f71990abe2b92c37ab9601dfbbc0212c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGC6PEKK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCfD8ZP5M7%2BsG%2F2CNx1a9v3gLUXv%2BtlCRR7%2B592QkTw5QIgJUidlNVCqe5DvOE%2BfqhuI8P0CAYalb3%2FqGfiB4CUM5Iq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDM4i91g3uljG0Se3hSrcA%2BGE0KiOvD7vzvACxTdo3fEE0UkRMafHCcb1UVQPdPbdtOjF5SVu8OHuWyzjgTQYNIujrllmaoQXmaSpdFv1unOX%2FXSOJl9WZDfT5BUrWj0T3TUmabtOsdhGQ82ueulV7VuiEZ3e4Ksn2toUkfUmzWM8V9jZGegluPx1r3aQSL7M2jRQwuZoQOpeYYpJXkgjjv8WJAfe7UgwDkAHn2GXsfyX0se00hblvFyPJHooEM%2BFk68I3NOkPv9l8QaftWW%2F29oj2GlvU%2FATs8X3n7NuBaVOgyJURZvIwLX1ok0PJBVlxHBMndhHEE0DPi7wrTsFgF7RUCBVT7TPRs5Q%2Fl8TUdVXBFNlFa%2FrR%2Fjdro1JKRmZSAjOipJ0GGZzO5%2BzsdcSE9YssqWVhwCw2ttEqVXaoeATkwdckMo2QF6ca4MMifP6Myil0XtCpsqU2eTwX3xRJAC7UdTV%2B5R%2FSuSgV9nEstWduZpECuOtQrO%2Fr5%2BVrJ2dw2g5Znjq%2BjJZtdDZes%2FmiZp5AG5KUjxOopTmPtZT695ntm3NxbUGmt2shDZfcr6EF3MtOgwjmBMnteqR0jDpvcplqS%2BdEpfYbCcqyL0ucWYkznoad1k8M6jL1YM2oPbemRusu7D2JAAbsZJsMKP5gMUGOqUBRjc%2F%2B4fu4waTRGgukDAe3q3%2FI1NTlznXOEiD9%2B%2FyDXvvvr5kNiFTcL1Jkct6p8LWKjptjDzHUnKC9xAgJU5c0ja79fqW7Q%2BXC%2BHVW5azeAfToWMh9rOKCPpRw2hsvMMViOJI1iyHBfj8wE8lA7bibyuqwd9okp3QAmjG5Br%2FUfcaJu0Z1sW8zFBLnZoqiEJPxDsqQ%2FkwbY19OfBpkud8%2BwmXVFu0&X-Amz-Signature=7e5dcf8245329cc52c914b48345e8c9ba60b596c19d7734ce84c7aa131722a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
