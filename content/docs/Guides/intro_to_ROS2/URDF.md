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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJAWGFT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBIgByJue8dGy7gAMlf4yMP3RhDaggHoADpGK8vJ0RhAiEAuUJez9yMr9HDJ%2Bn4LTFZkPRqyfJ4rBUldMEMJeiLW38qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHcULYuJjI%2BfIePQyrcA7Ktun2LZh%2BXAyxKhIxHQNmXARdsy7R3LIsYs4aegs1VV%2FS2wQO%2FUsqaGpNnAYcwwAPM%2BVU3KC8fofJU5L%2BWHSs9HPyyCXN5SE508stGmfzfyREGc3iJPUOZpXbXTbkzSvdKQ7gguiNDETHo0zzzJLA4OlkNe%2BCyeh5Ba4VDYEzW4X4tb90oK0Iu52I7Z%2BBAt2rVkO2fAgrE4MjYOhYVkXq822%2FR88b6Tl7DJx5AwyEF1ArGsNhJB8p6fnYbxeg4toGF0F62xOTIuJe8n6N9PsC4PbwvsXsQ3Ap1IAvvyRxa3aty%2FUY0Y0dbG1AqVOBr9XTZdNiqSNU%2BZ68GeHhMYq6OP1hhCMZrH%2BPmNDfuztKJlEcabWqEil3FqNbD5zsE3pgH%2FmPlVHWaLIG3mTl96LYMe1oPRIPgSH86bcHGKyvwJbsq2y2LA6c%2BK98IcQ9vFvZMPRe8bZFl%2Fu8HOVsBA1u7XM5UdwLPL4gGVSW7IoQUVQ6a6vzaBaIqnlLjzGrnPCb4CqYfZ98ZZmH1L%2BJmTYgbvhfPBr6deVuMdNqm%2BWIicX%2F%2FLoPVOlR%2Fs4pHSqZmMPgBoqpqr9E%2FLRauATOS7YQvLRwQAU4fhNDzwQj3BAgJsiJHx3Xh0BxAOM8TMIuh6MQGOqUBPKGjEECRn3lmp7yTkFnvt1BUKT1CT%2BzekAs1ZvDFSTVVIbd5UtQLQPoUlv1D9YG5C6shNy2C64523jcHvvIb3hncYUiPZ5ZKOU2aMnI5FtPlazQgcm997Pay6cZ1iUD8h7Wcq7Za%2FrIvKA9qrJ5CT3mNXrm8OU9WTwOJQJSYp%2FZ8J2L%2FEgrP2ITcNUbQ78tuTC5WI5MJdF2cNpdGI5F5H4JhAslE&X-Amz-Signature=300758344d0ae6628897ded1302b63ac411575dbc5899cb5e52552f7574360ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJAWGFT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBIgByJue8dGy7gAMlf4yMP3RhDaggHoADpGK8vJ0RhAiEAuUJez9yMr9HDJ%2Bn4LTFZkPRqyfJ4rBUldMEMJeiLW38qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHcULYuJjI%2BfIePQyrcA7Ktun2LZh%2BXAyxKhIxHQNmXARdsy7R3LIsYs4aegs1VV%2FS2wQO%2FUsqaGpNnAYcwwAPM%2BVU3KC8fofJU5L%2BWHSs9HPyyCXN5SE508stGmfzfyREGc3iJPUOZpXbXTbkzSvdKQ7gguiNDETHo0zzzJLA4OlkNe%2BCyeh5Ba4VDYEzW4X4tb90oK0Iu52I7Z%2BBAt2rVkO2fAgrE4MjYOhYVkXq822%2FR88b6Tl7DJx5AwyEF1ArGsNhJB8p6fnYbxeg4toGF0F62xOTIuJe8n6N9PsC4PbwvsXsQ3Ap1IAvvyRxa3aty%2FUY0Y0dbG1AqVOBr9XTZdNiqSNU%2BZ68GeHhMYq6OP1hhCMZrH%2BPmNDfuztKJlEcabWqEil3FqNbD5zsE3pgH%2FmPlVHWaLIG3mTl96LYMe1oPRIPgSH86bcHGKyvwJbsq2y2LA6c%2BK98IcQ9vFvZMPRe8bZFl%2Fu8HOVsBA1u7XM5UdwLPL4gGVSW7IoQUVQ6a6vzaBaIqnlLjzGrnPCb4CqYfZ98ZZmH1L%2BJmTYgbvhfPBr6deVuMdNqm%2BWIicX%2F%2FLoPVOlR%2Fs4pHSqZmMPgBoqpqr9E%2FLRauATOS7YQvLRwQAU4fhNDzwQj3BAgJsiJHx3Xh0BxAOM8TMIuh6MQGOqUBPKGjEECRn3lmp7yTkFnvt1BUKT1CT%2BzekAs1ZvDFSTVVIbd5UtQLQPoUlv1D9YG5C6shNy2C64523jcHvvIb3hncYUiPZ5ZKOU2aMnI5FtPlazQgcm997Pay6cZ1iUD8h7Wcq7Za%2FrIvKA9qrJ5CT3mNXrm8OU9WTwOJQJSYp%2FZ8J2L%2FEgrP2ITcNUbQ78tuTC5WI5MJdF2cNpdGI5F5H4JhAslE&X-Amz-Signature=4d7e644891d156e1cd4fcebcea107d9cccc2d68fbdcdcf0cdf09dd8d1b26d493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
