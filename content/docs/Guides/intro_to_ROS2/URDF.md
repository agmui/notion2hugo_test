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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSIT2UP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDATmf6pfcU96nu7DuxQjoZNQ%2Bi0mBvOsYN0wLOKVr75AiBIRT3r3LZpQxfdPc3PtdA5K3s3E%2FLtZVvq6JGP0dGJyyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPLQW8NPe%2F0CwXvMKtwDDvez5H10UR%2B%2FffcDaKwIe%2BTc3haSa8wyytyKnLfDxLuNwfAG0o5AaSoYUCMouMJQ6lqNTmJMenYLcMpkAeZvp0RHx%2B8hYRTUD6N8h9IUmNRfpzk7OImX4lJevou96PiCs670Q%2Fetwu22jmhsGgaSpnyvj4ADWsXqSKMOxU%2F4yWqL4cqwTRHa7npKKWXrnG8OslWnqgmTXzn7HKMu4b7s225VHWO1qYWSR3PhTbDg4CwrsqmRTPUgj7j6WhOrSuPQ1vo7B71brdar2Fs%2FgA2VcpOYNVXsAMHTgCJfE0QUJ7P%2Fczy3SGP5D0Bhb5CEu8DKsiQoz9tLr218yC2AwCTay8Y4Bl8NEp0gF%2FbI4SD2yRiSTSV5wQfZB1YFIHClzeaA%2Bs8j5hleTyhAwMJPasAKgshxT8rOtg6NB3AZ8H0gPiW7KSLsjGfpOYzPfufFZeJfsjBHVsFh1m%2FDsTLLj1ziaDKwfphbGUERiyYlrGTZw3Pi%2B9MnCrWU8rQ5%2FuSNa%2F7y3B7S%2FNt5bN9c2IYq7OSGrJ1Sv8gf4WspoebgC2WPQ1009NIgPruV1JAqgT%2BeFVnnlnpBdlP54nVVX1qrTNwPV04J%2FUZFtv5SkOSDcKmEN0f7sdHPBaMxtY6a80Mwq6WqxAY6pgHev%2B77g3RETbGT8DJDM2EH4sn8A04KqjFWXlzkw2%2Ffh2TyKQtIgHmOhI6LJ0fokRSEcN6RM3jVfRUwlR1OmtKdVq7yDbsrjCLhVBP79OvrBzGsfpJOzXK3lHm0zW9PNvwpiEyOMPLS04SV0Ali5SLbtr5kzqiqfkWehqLGN37nRGnHu2NQ9SCzsItY4VBfn8T%2B5ZDFmLubO0C0cfMNTB86dERawbIg&X-Amz-Signature=d4f249d280723ddf26540d2c0bdb3312c15965d5dbd0b25ff5f8eeb86a57fee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSIT2UP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDATmf6pfcU96nu7DuxQjoZNQ%2Bi0mBvOsYN0wLOKVr75AiBIRT3r3LZpQxfdPc3PtdA5K3s3E%2FLtZVvq6JGP0dGJyyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBPLQW8NPe%2F0CwXvMKtwDDvez5H10UR%2B%2FffcDaKwIe%2BTc3haSa8wyytyKnLfDxLuNwfAG0o5AaSoYUCMouMJQ6lqNTmJMenYLcMpkAeZvp0RHx%2B8hYRTUD6N8h9IUmNRfpzk7OImX4lJevou96PiCs670Q%2Fetwu22jmhsGgaSpnyvj4ADWsXqSKMOxU%2F4yWqL4cqwTRHa7npKKWXrnG8OslWnqgmTXzn7HKMu4b7s225VHWO1qYWSR3PhTbDg4CwrsqmRTPUgj7j6WhOrSuPQ1vo7B71brdar2Fs%2FgA2VcpOYNVXsAMHTgCJfE0QUJ7P%2Fczy3SGP5D0Bhb5CEu8DKsiQoz9tLr218yC2AwCTay8Y4Bl8NEp0gF%2FbI4SD2yRiSTSV5wQfZB1YFIHClzeaA%2Bs8j5hleTyhAwMJPasAKgshxT8rOtg6NB3AZ8H0gPiW7KSLsjGfpOYzPfufFZeJfsjBHVsFh1m%2FDsTLLj1ziaDKwfphbGUERiyYlrGTZw3Pi%2B9MnCrWU8rQ5%2FuSNa%2F7y3B7S%2FNt5bN9c2IYq7OSGrJ1Sv8gf4WspoebgC2WPQ1009NIgPruV1JAqgT%2BeFVnnlnpBdlP54nVVX1qrTNwPV04J%2FUZFtv5SkOSDcKmEN0f7sdHPBaMxtY6a80Mwq6WqxAY6pgHev%2B77g3RETbGT8DJDM2EH4sn8A04KqjFWXlzkw2%2Ffh2TyKQtIgHmOhI6LJ0fokRSEcN6RM3jVfRUwlR1OmtKdVq7yDbsrjCLhVBP79OvrBzGsfpJOzXK3lHm0zW9PNvwpiEyOMPLS04SV0Ali5SLbtr5kzqiqfkWehqLGN37nRGnHu2NQ9SCzsItY4VBfn8T%2B5ZDFmLubO0C0cfMNTB86dERawbIg&X-Amz-Signature=c293f791dc17f5b5587d3c0a4db1cb39ac15ed87bdd24826d16d90d198e0afca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
