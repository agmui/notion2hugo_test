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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPW6ECJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzpOi4GuFNXbcPXTvdcJ1FL7jJulCAo5NEPjIHDY6MaAiAOxY8d5SOwAtG6XtNR2HSNoWAeUVZT6d6tBGW%2Fan7EFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqHnRhka42DGlE9FKtwDnUdp91ddxqidKLRF1UENlgxifdhCcNvD1jJh4w7BIrV74eappo%2BsVQgiIdgWgURjEBAruUVLO%2BZ7owSZ2vQLbbmjqQmVL1SazQim3eD69z4qSGkTQoweohqI6lTZtgbAxkxIX70%2BHbe8YKWvoJ1KQs%2FJd6HO4h2xX5rKAWSkrB2wZOKMk4O7%2BAKerRC5IZdMbkbHE9ZNObr%2B0DXOW6BnBLLrXbitBUB5lj6cAtV5XXHDK1RKzWD99D00xnDgf4jfqBPSLAFrwn6QTGszZzEQYZeEuRzU1yDN%2FUdsWJP%2B3WeDiHoHsFmsAMZrEANkHHS58RVIrKj2VtoQi2C8XJkUaeDJgxI9pBJaHvAw5V9Uro0HlmpiErDCedTl8z2Fmgf%2Fw5dSVKPilpQ9oaVxhkEze1DMuIg4uOURpBueu0woJ6ehHiZg%2FrQ75QDse%2B7d3Pe%2Byu2DVZcZMpAnLb9HrQ8WquQ87JByLHvNoIW9lIXinGzITuQAX2ArCKn63TZn%2F5EVTkEUurCM3BfgyxqKmB%2BwuAQezagsK74kc5MPQPrsbiQyiQTciorqgZATLvGOt%2BZ%2FDr5EC5eGbTEb3VBYBu2y5ha5Ar0MF8NDUGZngJ%2BWCH7jrwu8Ofb14ASaNwUwsefcxAY6pgFkk0Q34K0ZBUEgv157U0ZiHlpeLwJQTI8qvi8L9uEFaTMd9D375ZHTMtLS1e68QVCHZxtaJnEbNu1r0qGmU5iIBcKRnKthfqEzN%2FMQ0F6Hc3OkMyR7y8QwFD0akaaaV3cssTYNq4i4gRM2aFnsCuFWBBmVaiHCPPXTvsTBnZC5uWiorFCeelmn9Tyoj5lxar9N99d%2BSMm8I%2BwgJz36oN0Pnb%2BY4ACK&X-Amz-Signature=9d569ca0ce1af6b10538be753792c72ac972564f78eb036f14404f5332e59f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPW6ECJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzpOi4GuFNXbcPXTvdcJ1FL7jJulCAo5NEPjIHDY6MaAiAOxY8d5SOwAtG6XtNR2HSNoWAeUVZT6d6tBGW%2Fan7EFSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqHnRhka42DGlE9FKtwDnUdp91ddxqidKLRF1UENlgxifdhCcNvD1jJh4w7BIrV74eappo%2BsVQgiIdgWgURjEBAruUVLO%2BZ7owSZ2vQLbbmjqQmVL1SazQim3eD69z4qSGkTQoweohqI6lTZtgbAxkxIX70%2BHbe8YKWvoJ1KQs%2FJd6HO4h2xX5rKAWSkrB2wZOKMk4O7%2BAKerRC5IZdMbkbHE9ZNObr%2B0DXOW6BnBLLrXbitBUB5lj6cAtV5XXHDK1RKzWD99D00xnDgf4jfqBPSLAFrwn6QTGszZzEQYZeEuRzU1yDN%2FUdsWJP%2B3WeDiHoHsFmsAMZrEANkHHS58RVIrKj2VtoQi2C8XJkUaeDJgxI9pBJaHvAw5V9Uro0HlmpiErDCedTl8z2Fmgf%2Fw5dSVKPilpQ9oaVxhkEze1DMuIg4uOURpBueu0woJ6ehHiZg%2FrQ75QDse%2B7d3Pe%2Byu2DVZcZMpAnLb9HrQ8WquQ87JByLHvNoIW9lIXinGzITuQAX2ArCKn63TZn%2F5EVTkEUurCM3BfgyxqKmB%2BwuAQezagsK74kc5MPQPrsbiQyiQTciorqgZATLvGOt%2BZ%2FDr5EC5eGbTEb3VBYBu2y5ha5Ar0MF8NDUGZngJ%2BWCH7jrwu8Ofb14ASaNwUwsefcxAY6pgFkk0Q34K0ZBUEgv157U0ZiHlpeLwJQTI8qvi8L9uEFaTMd9D375ZHTMtLS1e68QVCHZxtaJnEbNu1r0qGmU5iIBcKRnKthfqEzN%2FMQ0F6Hc3OkMyR7y8QwFD0akaaaV3cssTYNq4i4gRM2aFnsCuFWBBmVaiHCPPXTvsTBnZC5uWiorFCeelmn9Tyoj5lxar9N99d%2BSMm8I%2BwgJz36oN0Pnb%2BY4ACK&X-Amz-Signature=3efa22a3853e9b42b1a3521eec2d6ba35a9fc8c348848a8e1ff5bc765df9e7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
