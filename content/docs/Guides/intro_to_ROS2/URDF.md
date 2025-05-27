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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE67M6LS%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDqWZOPaJp0fRrwHwgwrAZl%2F49wrKzDKCj2majxTl3LAiA8AkIoQ8dD2S6AdBy2YXejG94iLZpZC0I3hBNFyxy9ZSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM14Tnul3UsoZOn1fmKtwDKHvHR2WLAV8KgWsuYY6OYIdlxacoAuS25oQ4%2FyZncVbIFf0AtsQWEoShuX9hrbcv5X3qOOy6p61V9G36nmpVoqyYF%2FBSlGO2CZkWYr0RhNOh%2BqnwI00LjUtpARfYmtDFDl1D3m4HsI089djMgUVf8tJiapXcKbR7WMK%2BOPpuflSXQuWlPT6KxiMjF3v5U%2F8SQpHkK76DXTJehxJFLzkKzCopCFo8eHD3ghDLmrHB%2BM%2Fvf0%2BOHj5Uitf9NByygwH8RovI676W5aZAMpgv5Kzxl6VYKmg%2B%2F7WuzzlcpQd2jWF7P5MZb8ZC8hCGcSjsLfTY2wbcjPtyvf1SmdenCVURpNfT0VJtC%2BECootk2r4D%2B3K1x1E6Q%2FeHGhRbKKOgGdfU4f%2Fg6ChftTo1%2FjKYoMrxOTigiwg9Xs2i%2Bx1vjCO0QN3W3ZG3jVZFn5TLdvYzyV%2FxDvZa8MkZj2I1QlTtyAE0lRmgt%2FzcnrAkjxZ7mnbsHDY%2FaRwRHJzO9Cr9Z7X5yg0mswoQcKktLeSnAFSjm%2FjReoRIERUtQUqUwbuB8KCOroZGvxbgPe8%2BnxfUTzXptcoXcHfVuU9fwvby32mlcKA%2BVpqWnEj5hTM5liOLjj5RDT9Xe7%2F0HWb%2FzTv2VFgwndTWwQY6pgGFtqKQMU4Uw3ZOs12PONYgPJvl79xyf7BhbCqRzNqVRjNywWu%2FjbMoa0pShku%2FRcMSmpJa4ouZFaU3tArEwNf%2BWWihCsNzdEv5HlEdEVZmSVfz%2BCLghGDOvol%2BR0OQrohSQpU8kgp22BhHi5Z%2Bwz93VblugutQxu2fyc9MITD6Eg3CBzG8GGT0B8KbspTsTW68yFFiov2UulgAmu2IIlekYciPM5Bv&X-Amz-Signature=eac254d6a205f76501901bf928d50bdb8263c0a05be975798d524df5de05f00e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE67M6LS%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDqWZOPaJp0fRrwHwgwrAZl%2F49wrKzDKCj2majxTl3LAiA8AkIoQ8dD2S6AdBy2YXejG94iLZpZC0I3hBNFyxy9ZSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM14Tnul3UsoZOn1fmKtwDKHvHR2WLAV8KgWsuYY6OYIdlxacoAuS25oQ4%2FyZncVbIFf0AtsQWEoShuX9hrbcv5X3qOOy6p61V9G36nmpVoqyYF%2FBSlGO2CZkWYr0RhNOh%2BqnwI00LjUtpARfYmtDFDl1D3m4HsI089djMgUVf8tJiapXcKbR7WMK%2BOPpuflSXQuWlPT6KxiMjF3v5U%2F8SQpHkK76DXTJehxJFLzkKzCopCFo8eHD3ghDLmrHB%2BM%2Fvf0%2BOHj5Uitf9NByygwH8RovI676W5aZAMpgv5Kzxl6VYKmg%2B%2F7WuzzlcpQd2jWF7P5MZb8ZC8hCGcSjsLfTY2wbcjPtyvf1SmdenCVURpNfT0VJtC%2BECootk2r4D%2B3K1x1E6Q%2FeHGhRbKKOgGdfU4f%2Fg6ChftTo1%2FjKYoMrxOTigiwg9Xs2i%2Bx1vjCO0QN3W3ZG3jVZFn5TLdvYzyV%2FxDvZa8MkZj2I1QlTtyAE0lRmgt%2FzcnrAkjxZ7mnbsHDY%2FaRwRHJzO9Cr9Z7X5yg0mswoQcKktLeSnAFSjm%2FjReoRIERUtQUqUwbuB8KCOroZGvxbgPe8%2BnxfUTzXptcoXcHfVuU9fwvby32mlcKA%2BVpqWnEj5hTM5liOLjj5RDT9Xe7%2F0HWb%2FzTv2VFgwndTWwQY6pgGFtqKQMU4Uw3ZOs12PONYgPJvl79xyf7BhbCqRzNqVRjNywWu%2FjbMoa0pShku%2FRcMSmpJa4ouZFaU3tArEwNf%2BWWihCsNzdEv5HlEdEVZmSVfz%2BCLghGDOvol%2BR0OQrohSQpU8kgp22BhHi5Z%2Bwz93VblugutQxu2fyc9MITD6Eg3CBzG8GGT0B8KbspTsTW68yFFiov2UulgAmu2IIlekYciPM5Bv&X-Amz-Signature=3a8ebd5b57fb7e5c263103750f24a2080f489c8ef471e769537ea838a570d964&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
