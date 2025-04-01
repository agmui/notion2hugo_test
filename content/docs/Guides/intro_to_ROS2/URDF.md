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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKKV42I%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEAs7%2BoqycPWgNjgcihNjWrZW4EQ%2Fk4dVxrLBsUq6qXaAiBb4eUaZ8VGZfzQVEVo8i%2FjTsgB%2B5MMUx80%2Feli%2B%2BIIliqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLjxdgehYljyzjfkOKtwDAitN%2BMZ1iPpJrQX0Mg41icmno4Xh%2BFm6N%2Fky%2BpryD6brqJ5JL51Q03NGqF2vUJtnrr60h4ABoCNLFT9c9jsGA0%2FaxiiS5aP1wW3LhKF%2BCQ5AiyQiIxBj%2BeWvv0DXQZK2IjESLK3USVsxk%2B8IUwtiZc4WjPNW2%2B9nWc9iMz3CgkUq%2B3Tg39%2FmPb%2FVY7lCO8BTfaSLzVnY5%2FmWQ1ZJPyMEtXWrbbVw6xPmVC1k%2FAVxCNwDXg50oygmI%2F9Fjo3nHtTGm6vU6Rci8pKVAWm71y5RCzdnPIdXtm%2FQ6bcvawkYDgzT3wbjL1xoIMygkcfS9FO7bI%2FLDWWewsYnFi%2BjYZRcOQXf9SYPVN2NOhqY%2FduMOTUwfyVpRRK2LjVacWJpUGHY6sSRj8Cc8gBshT%2BZeqMfQ2Pune1mYECKEUe9FlOO2R3dKb%2BajPiNewGlrvm0qcb2qVW%2BYY2HaSV0ElyxwJYW%2BSaIjuZrGAhryTHO%2BBMpfOp6X5uTwfURrOZSWlliCM2gpzZzZnO8meswFWoBHqH39U%2BhHrf4QGhQ1knrzdU8GF01zcorLEchdDgj02gjbkqchT86ymyYq5NTxjSFKOCZrYHwD5Pem0aSa9g7aCahcrV3UTsuQM%2FI6Iq5I1EwrKGwvwY6pgFHhUXbxgTUB8bqjt3kK6lqLmG%2BRZbwWUsou29bX6iGGeclcbPUEEUN4uK536oUMkwYB4z0u4EB4XRx6gJGgUxiFJT1ywnOBE%2BNLe2g3g09ZDGczpx13SJe7jDzUbPcB1X0ucL%2F%2F%2BXc5OfMz%2BK0efAdzhIO8I4%2FVqcn5%2FqvrYsouPfRSe2SXhQ8Qsu66s19RiiCM0h2ZdYL5AXuLpJ4WUQfX3mh3JvZ&X-Amz-Signature=980ee3b9c13cd6d414b1e26b2e792b4ef5b8693baefe043273e4a872ce9cbbda&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKKV42I%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEAs7%2BoqycPWgNjgcihNjWrZW4EQ%2Fk4dVxrLBsUq6qXaAiBb4eUaZ8VGZfzQVEVo8i%2FjTsgB%2B5MMUx80%2Feli%2B%2BIIliqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLjxdgehYljyzjfkOKtwDAitN%2BMZ1iPpJrQX0Mg41icmno4Xh%2BFm6N%2Fky%2BpryD6brqJ5JL51Q03NGqF2vUJtnrr60h4ABoCNLFT9c9jsGA0%2FaxiiS5aP1wW3LhKF%2BCQ5AiyQiIxBj%2BeWvv0DXQZK2IjESLK3USVsxk%2B8IUwtiZc4WjPNW2%2B9nWc9iMz3CgkUq%2B3Tg39%2FmPb%2FVY7lCO8BTfaSLzVnY5%2FmWQ1ZJPyMEtXWrbbVw6xPmVC1k%2FAVxCNwDXg50oygmI%2F9Fjo3nHtTGm6vU6Rci8pKVAWm71y5RCzdnPIdXtm%2FQ6bcvawkYDgzT3wbjL1xoIMygkcfS9FO7bI%2FLDWWewsYnFi%2BjYZRcOQXf9SYPVN2NOhqY%2FduMOTUwfyVpRRK2LjVacWJpUGHY6sSRj8Cc8gBshT%2BZeqMfQ2Pune1mYECKEUe9FlOO2R3dKb%2BajPiNewGlrvm0qcb2qVW%2BYY2HaSV0ElyxwJYW%2BSaIjuZrGAhryTHO%2BBMpfOp6X5uTwfURrOZSWlliCM2gpzZzZnO8meswFWoBHqH39U%2BhHrf4QGhQ1knrzdU8GF01zcorLEchdDgj02gjbkqchT86ymyYq5NTxjSFKOCZrYHwD5Pem0aSa9g7aCahcrV3UTsuQM%2FI6Iq5I1EwrKGwvwY6pgFHhUXbxgTUB8bqjt3kK6lqLmG%2BRZbwWUsou29bX6iGGeclcbPUEEUN4uK536oUMkwYB4z0u4EB4XRx6gJGgUxiFJT1ywnOBE%2BNLe2g3g09ZDGczpx13SJe7jDzUbPcB1X0ucL%2F%2F%2BXc5OfMz%2BK0efAdzhIO8I4%2FVqcn5%2FqvrYsouPfRSe2SXhQ8Qsu66s19RiiCM0h2ZdYL5AXuLpJ4WUQfX3mh3JvZ&X-Amz-Signature=32952d19013ebd39d894f98820f79427f5338d0a7db2f40d28a3217559e437f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
