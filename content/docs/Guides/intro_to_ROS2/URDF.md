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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHEYZAZR%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAm%2FYbaVQwoDOLLQogCOqFLpz0BbzDUmuszB4CvswOzoAiAG1WMoCXen49uPCUdjgc3kbZAfN3lpo9wFLVaALMWtjiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLwARpKsC9Fl%2F4KUKtwDi6MFQK2gc6imIGNTFXlRZmhNgKd9hZ8eE%2FMkQFjgJvyGDVbNQ02RSXhn9rAL2p07I%2FrqYt4%2F%2BTDbysW%2F6bMAAPSFa9sTOzzLUB7aG3wxTgTSBC7uG%2BD9UhOdqoT7KDahARJ%2BXH%2B0ecxU9Zt%2FIHWKs%2BCKZIJvBVSHj0WJNwjcoRTFV2FsOvlf4MJ791WdgjJJguvPrIoRQ1Ic7GfpkZ%2BOn%2FcHNQ5r0NnUtFu%2Bttampg48hmaoBf25jBVSYRcqLpTTymSbMUDD9yzcbzmifAhsOExCMF%2FJmU65nrugwJ3qGRt47BMzrzust8%2BdelVuMcRcRJo%2FH0rDEAeYxTleH33qea4xUono4ABFO15S5FVxCYs99YwOtSLLy3oek3BqBo3cYdzOWIk1y2rZYJrzfqMfdFiV3pTtzrt9okplmwfU%2Bqwq%2BPNdCMFKud9cd56grzxlIm0851QGnmOw9FFzfYyisxsBYDVHnI31ZfLrsi4jbp0iLHdRzK0Qyuu79aiW2I49VuT88%2FDyoHjSyIzS2C8zfyBeyMNxPjXhTVtKBNt%2BO0w4m6N7LHkP0rQNy1Es8XTJ948tUbpFf64mf4SG%2BR2vyyMtxb9AteUyKrFEKvcJi1k%2Fib2G0ZxT%2FsbqJJYwkNfFywY6pgF%2F4IMOY%2ByZgcoAi%2Bju1q5QoOC5Xwk6RYS0XXiKClJeMN5zBKyvoSSupno52yi%2BAHvyS24Mg2GdvyCGxVFXtdtnYSWcAcoSrJuLHl8JmY6pT4RvZfKgr610jNf1G2rjn1RoPvoxrMwnxssoNnJyeAR7VW8%2F8dUgLux4HE2qV0RVTqfMemMsGHRth7WNgdgeTLX5VsgsN4FukNAbw54k4deftnj3i6k5&X-Amz-Signature=cd230ebc78d0eb4c7a6b8fe6ff9efbe17a70a5848ad5e8862b457fd47ed88070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHEYZAZR%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAm%2FYbaVQwoDOLLQogCOqFLpz0BbzDUmuszB4CvswOzoAiAG1WMoCXen49uPCUdjgc3kbZAfN3lpo9wFLVaALMWtjiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvLwARpKsC9Fl%2F4KUKtwDi6MFQK2gc6imIGNTFXlRZmhNgKd9hZ8eE%2FMkQFjgJvyGDVbNQ02RSXhn9rAL2p07I%2FrqYt4%2F%2BTDbysW%2F6bMAAPSFa9sTOzzLUB7aG3wxTgTSBC7uG%2BD9UhOdqoT7KDahARJ%2BXH%2B0ecxU9Zt%2FIHWKs%2BCKZIJvBVSHj0WJNwjcoRTFV2FsOvlf4MJ791WdgjJJguvPrIoRQ1Ic7GfpkZ%2BOn%2FcHNQ5r0NnUtFu%2Bttampg48hmaoBf25jBVSYRcqLpTTymSbMUDD9yzcbzmifAhsOExCMF%2FJmU65nrugwJ3qGRt47BMzrzust8%2BdelVuMcRcRJo%2FH0rDEAeYxTleH33qea4xUono4ABFO15S5FVxCYs99YwOtSLLy3oek3BqBo3cYdzOWIk1y2rZYJrzfqMfdFiV3pTtzrt9okplmwfU%2Bqwq%2BPNdCMFKud9cd56grzxlIm0851QGnmOw9FFzfYyisxsBYDVHnI31ZfLrsi4jbp0iLHdRzK0Qyuu79aiW2I49VuT88%2FDyoHjSyIzS2C8zfyBeyMNxPjXhTVtKBNt%2BO0w4m6N7LHkP0rQNy1Es8XTJ948tUbpFf64mf4SG%2BR2vyyMtxb9AteUyKrFEKvcJi1k%2Fib2G0ZxT%2FsbqJJYwkNfFywY6pgF%2F4IMOY%2ByZgcoAi%2Bju1q5QoOC5Xwk6RYS0XXiKClJeMN5zBKyvoSSupno52yi%2BAHvyS24Mg2GdvyCGxVFXtdtnYSWcAcoSrJuLHl8JmY6pT4RvZfKgr610jNf1G2rjn1RoPvoxrMwnxssoNnJyeAR7VW8%2F8dUgLux4HE2qV0RVTqfMemMsGHRth7WNgdgeTLX5VsgsN4FukNAbw54k4deftnj3i6k5&X-Amz-Signature=d3459df4575d21945995e4d755681df32250145227f1ea11f04fdc6979341637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
