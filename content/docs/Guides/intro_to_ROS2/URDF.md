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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TEOSIKU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBJ8NsnuxCNcP5XNv1g0ls1PXrEjNxIqmsHlmwM08%2BNFAiEAtbvC%2BHh8JpMQOsQmrzaVi1VzJFQap6zdaCqGztaAArYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQFZ%2B7SoH2XH%2B%2FL6ircA1y7I0IS79l%2FCKCvEye2UEP4HpiE7i1hh%2BK4pm%2BqGYT3grPj0LbMIWFIxGoXApxcR%2FCChwj5fAmTLGLdhna8uzdGV%2Fzt2r8ALwyPb3Q27dbR2jWvz91lVLKKY6azMa6MB4aISQp%2Bihx58DuOOEerRQZyK07DaxRxTYV%2FA1pCCbTulvyxZ6%2BULS4G0VIm%2BBQnZ5VhJRR650ty7c4BnZs6QyCBxSXPbyDAn5P%2FnUpcHzzRyl1CcM8Z4d2O61tUEEXhxhGhE5wPyrblORJrya6aRcDZObqe9Akcge88aOEb2oihxCiWt7sGKEToaUrlDgIS58tgPHQVigDg4s4CHFOzqYSy2UpVgg2QCUZkkonQOg3UcQawf74jFwlN9tyUtXRk3Me1XmntTDvtkn7fMJA%2FlTOzfyFlwR5iN7HaMt1hY1%2F2vhBPqaWRPqxUxQD2du%2F6r0zQXv7TZ4cLPqT99qqj0x7axFuL1c%2B9LB5sxhscZP3XY84rim1aV5mvTptHLq0j16wFKyA%2BjavShJz2QiCgE2bH0A9ztse666c99vf%2FOZyI%2Fe99Lk%2FAUpX2oWqbmqaMUYAVb0ZrSJeKy0qbTt1k9imYVy83Xy48EAE6Upxm8JlLustsJo4UFK%2BUmG1%2FMIjrwL4GOqUBQp4yJVEDJu8tcHPUnPf4iN2EQrWSpVGLmKQKrZ%2FW%2BrYfcgAVPJEjqgyxWtHif%2F0wGiY%2F63TC9dW%2BBKUuyn14t9U8J1vWZjHItqA%2BM99Zr%2FFnGxNxQeeT874L6%2F6QZRzJqtwwfFfYgcPqTp5TNNTB5hh2DD0TXDdzyQBldwTTKjdSfTTYi4q2fJrKfCHCqhHgG43vzcx6iseqG1Ng6xfWaYJi5Fmt&X-Amz-Signature=88c34789799b2f1ffe3940dd2463bcaedb62b935ac5424bd72e4a5771b3dfc65&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TEOSIKU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBJ8NsnuxCNcP5XNv1g0ls1PXrEjNxIqmsHlmwM08%2BNFAiEAtbvC%2BHh8JpMQOsQmrzaVi1VzJFQap6zdaCqGztaAArYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQFZ%2B7SoH2XH%2B%2FL6ircA1y7I0IS79l%2FCKCvEye2UEP4HpiE7i1hh%2BK4pm%2BqGYT3grPj0LbMIWFIxGoXApxcR%2FCChwj5fAmTLGLdhna8uzdGV%2Fzt2r8ALwyPb3Q27dbR2jWvz91lVLKKY6azMa6MB4aISQp%2Bihx58DuOOEerRQZyK07DaxRxTYV%2FA1pCCbTulvyxZ6%2BULS4G0VIm%2BBQnZ5VhJRR650ty7c4BnZs6QyCBxSXPbyDAn5P%2FnUpcHzzRyl1CcM8Z4d2O61tUEEXhxhGhE5wPyrblORJrya6aRcDZObqe9Akcge88aOEb2oihxCiWt7sGKEToaUrlDgIS58tgPHQVigDg4s4CHFOzqYSy2UpVgg2QCUZkkonQOg3UcQawf74jFwlN9tyUtXRk3Me1XmntTDvtkn7fMJA%2FlTOzfyFlwR5iN7HaMt1hY1%2F2vhBPqaWRPqxUxQD2du%2F6r0zQXv7TZ4cLPqT99qqj0x7axFuL1c%2B9LB5sxhscZP3XY84rim1aV5mvTptHLq0j16wFKyA%2BjavShJz2QiCgE2bH0A9ztse666c99vf%2FOZyI%2Fe99Lk%2FAUpX2oWqbmqaMUYAVb0ZrSJeKy0qbTt1k9imYVy83Xy48EAE6Upxm8JlLustsJo4UFK%2BUmG1%2FMIjrwL4GOqUBQp4yJVEDJu8tcHPUnPf4iN2EQrWSpVGLmKQKrZ%2FW%2BrYfcgAVPJEjqgyxWtHif%2F0wGiY%2F63TC9dW%2BBKUuyn14t9U8J1vWZjHItqA%2BM99Zr%2FFnGxNxQeeT874L6%2F6QZRzJqtwwfFfYgcPqTp5TNNTB5hh2DD0TXDdzyQBldwTTKjdSfTTYi4q2fJrKfCHCqhHgG43vzcx6iseqG1Ng6xfWaYJi5Fmt&X-Amz-Signature=f109d7283707be2f4d5a145811643be5c247f82ffa9eaec48e074a297fa4a9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
