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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4MEQK7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAvjyYFoQhb4Ly4I1fZ8P82rIb1MkPjp%2BJ2ntpf5OLsPAiBueYGiTcsNpNvRm%2B3QVltBMpQD9HzqDoL1jU8muiGMwSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQk1C0ly39TpK0DiVKtwD9QGHCy5mNYMQ1WfgzeGkRs%2Fmxntq1UHz9ix71hEeArv8yjh8bXrZrli1WXqAw5sA8Z1X%2FkZV7z7OSZngfQPxjEDM3bzjvE2%2BTss3vVbuIsTknul0GdVgjZOzYyIb9Xfwz2wUKcH%2BaQbsCesy98Oor7fLeybHrSCEM14dPOIThHfq73hqOreSY04IIBE5AtnpqvHfNBOTpsickKPMTPElGbv4VlNtAYwum0IbPNu%2BUFyR%2F3%2BA9aLtz3TqbvJMM48yaJUqbMF5hasIKDysi3jgv8bfJVz0u1QOre6CqnKq2FvphJc3HGQH91kKe9GR3a%2BCJlIPOP%2F3JAB4cEAHx0tnWzlH8a99xDCOJt5kc5AowUmlVy%2BL0wMTcTuH5wi5GF8YU9GvPFnPxPDKSwTJzetbLAUpY3oVtN8I1RsuOCgQkxcvm50cskV0woAPoqrayn8hWTF68YFHwU97RQPwe37AqN7zkxK9E8sz0Fv%2FEFFMaHenlH2cCCq3LMqxDykIGHAgediey0cqY80e%2FBxnPrK8fhLv79EIrGk2%2F49%2BChIPcnBpH5XKFAg6uvJwjzktdOYDisxmsszX0d3Y0SQIHvCnL7R7blTWWt58Ug2uHLeGLCEidZJOzxSwNXOz8QQw3v%2B3xgY6pgE2EjW8jUIahERY1AMdg0V0fuJVi8aiMhwzXAui29G8rPRS1usYsmNnaITR%2FSLykBNubNlDMOxtUfhpRWvrKxuPjmhznscZEZkenCrqEiEW3OEPKzOptiwmPHZ9CQ9CzIc5aCOZ%2B%2FpTWaglj02eKX8ZcpLPTkUzMevVnG%2FQ3TYCMmeazom3LYDRm1zHFtixh9tmcEJ9B9o3GTV0jN8Kz6jzk%2BwZSPFD&X-Amz-Signature=d1ad6a10d128509e6fb7f4b49aaa42d7c5bcf08d615dafe242f4d59e58291be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4MEQK7%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAvjyYFoQhb4Ly4I1fZ8P82rIb1MkPjp%2BJ2ntpf5OLsPAiBueYGiTcsNpNvRm%2B3QVltBMpQD9HzqDoL1jU8muiGMwSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQk1C0ly39TpK0DiVKtwD9QGHCy5mNYMQ1WfgzeGkRs%2Fmxntq1UHz9ix71hEeArv8yjh8bXrZrli1WXqAw5sA8Z1X%2FkZV7z7OSZngfQPxjEDM3bzjvE2%2BTss3vVbuIsTknul0GdVgjZOzYyIb9Xfwz2wUKcH%2BaQbsCesy98Oor7fLeybHrSCEM14dPOIThHfq73hqOreSY04IIBE5AtnpqvHfNBOTpsickKPMTPElGbv4VlNtAYwum0IbPNu%2BUFyR%2F3%2BA9aLtz3TqbvJMM48yaJUqbMF5hasIKDysi3jgv8bfJVz0u1QOre6CqnKq2FvphJc3HGQH91kKe9GR3a%2BCJlIPOP%2F3JAB4cEAHx0tnWzlH8a99xDCOJt5kc5AowUmlVy%2BL0wMTcTuH5wi5GF8YU9GvPFnPxPDKSwTJzetbLAUpY3oVtN8I1RsuOCgQkxcvm50cskV0woAPoqrayn8hWTF68YFHwU97RQPwe37AqN7zkxK9E8sz0Fv%2FEFFMaHenlH2cCCq3LMqxDykIGHAgediey0cqY80e%2FBxnPrK8fhLv79EIrGk2%2F49%2BChIPcnBpH5XKFAg6uvJwjzktdOYDisxmsszX0d3Y0SQIHvCnL7R7blTWWt58Ug2uHLeGLCEidZJOzxSwNXOz8QQw3v%2B3xgY6pgE2EjW8jUIahERY1AMdg0V0fuJVi8aiMhwzXAui29G8rPRS1usYsmNnaITR%2FSLykBNubNlDMOxtUfhpRWvrKxuPjmhznscZEZkenCrqEiEW3OEPKzOptiwmPHZ9CQ9CzIc5aCOZ%2B%2FpTWaglj02eKX8ZcpLPTkUzMevVnG%2FQ3TYCMmeazom3LYDRm1zHFtixh9tmcEJ9B9o3GTV0jN8Kz6jzk%2BwZSPFD&X-Amz-Signature=e695e8a01c8fc9f94f080a5f642ce694bc3f76b618bca226c425f8e56c1f7955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
