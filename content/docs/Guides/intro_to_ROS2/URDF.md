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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7C4PVS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH0gk2avZhX7jvIaHpvomGtkg4opk9xDQy0CS%2BD27leYCIQCrtEzmAISiEQDYbs1guqbqmRoLvqQZ72lL%2FwtrkleHniqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdezsx4IDjYqoEn3OKtwDr9H4XFGp1ubnrhtwXJMIwnqA6BKRt0DUZFPCzEkGAHWvEagpm74oYsCyYLXSz1NGqhjhKP2vecQBKIq6QwYjlFb5V3seSbnA7T91HhqdXGArykXXl%2FxB7OVZErW3ovzJx%2FA0Z4SrZkthds5Vs985ILvrGAmmXCZ6aGledDrY%2B8oTLGU4OUYFd6oCu1J1B2f5O9mfllODlBrZE1dEPZpPgyndf0xF%2B5qREIyAm4zbQ9Z%2FrZ9EBY1e6mHCUK0yVTe8IrMZH3qa%2BjL4KQX7O4AeQmydn2wtHM2p5KdZL3mmYpm416RSxGDvr6hrsP3PY31hBj6aJCgcFahBwEQpt0yqbdydGn2u%2FvqZg7MvDofW4ux37Qd5jUN2DY51EHNs0M%2FkIrX5whOkQacMCwL2EQk1iPcIK7eVm015f1Y%2FempGG3X9nfj15HGw92AXyZ1oaTmKAt4dEzGJ7RTYmq%2BD7RwiuAaYKiM9forsJHnOGEFF2dFjyC%2FdEGRWZgExTF8OIGqZS3oypKdP3eF4Ja5DBeZ5FdABq5lINysPO3yP3RhRsZvQP%2B5b5VHSg8fUD992a0xGP1VyAH55oiYvO15IY0X%2FjPc%2BQQPEnTQwBegDbigmcPgL3hZSVFljzSVwrz0wxPKJvgY6pgFZ3hMf9ynsRsWQR6EwHvBCPUCd6MAvvEcCMQfQ4VzvSSM0gqlEugo1oIq6q%2FRh62X2g4Lm6W2A7tdmWfNMvtsApchmYUX0dVbDD6jKhg%2B1LzX0UTAkuQfS%2Byc%2FM8dxr07DVD4smfkawX6efDG0nmwwYJK4080nICXgLh3qHDBPWRHfSAlZ9WW1zfL42jaPiQM0odW2xezAIoIm1aXP8ebD5CVTqPXV&X-Amz-Signature=b99063099fe0b32f4841d8693489a49d31a8bab9a96a2e021a88b5160cc631b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG7C4PVS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH0gk2avZhX7jvIaHpvomGtkg4opk9xDQy0CS%2BD27leYCIQCrtEzmAISiEQDYbs1guqbqmRoLvqQZ72lL%2FwtrkleHniqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdezsx4IDjYqoEn3OKtwDr9H4XFGp1ubnrhtwXJMIwnqA6BKRt0DUZFPCzEkGAHWvEagpm74oYsCyYLXSz1NGqhjhKP2vecQBKIq6QwYjlFb5V3seSbnA7T91HhqdXGArykXXl%2FxB7OVZErW3ovzJx%2FA0Z4SrZkthds5Vs985ILvrGAmmXCZ6aGledDrY%2B8oTLGU4OUYFd6oCu1J1B2f5O9mfllODlBrZE1dEPZpPgyndf0xF%2B5qREIyAm4zbQ9Z%2FrZ9EBY1e6mHCUK0yVTe8IrMZH3qa%2BjL4KQX7O4AeQmydn2wtHM2p5KdZL3mmYpm416RSxGDvr6hrsP3PY31hBj6aJCgcFahBwEQpt0yqbdydGn2u%2FvqZg7MvDofW4ux37Qd5jUN2DY51EHNs0M%2FkIrX5whOkQacMCwL2EQk1iPcIK7eVm015f1Y%2FempGG3X9nfj15HGw92AXyZ1oaTmKAt4dEzGJ7RTYmq%2BD7RwiuAaYKiM9forsJHnOGEFF2dFjyC%2FdEGRWZgExTF8OIGqZS3oypKdP3eF4Ja5DBeZ5FdABq5lINysPO3yP3RhRsZvQP%2B5b5VHSg8fUD992a0xGP1VyAH55oiYvO15IY0X%2FjPc%2BQQPEnTQwBegDbigmcPgL3hZSVFljzSVwrz0wxPKJvgY6pgFZ3hMf9ynsRsWQR6EwHvBCPUCd6MAvvEcCMQfQ4VzvSSM0gqlEugo1oIq6q%2FRh62X2g4Lm6W2A7tdmWfNMvtsApchmYUX0dVbDD6jKhg%2B1LzX0UTAkuQfS%2Byc%2FM8dxr07DVD4smfkawX6efDG0nmwwYJK4080nICXgLh3qHDBPWRHfSAlZ9WW1zfL42jaPiQM0odW2xezAIoIm1aXP8ebD5CVTqPXV&X-Amz-Signature=9e72b3941008bcabcb324a63758b758cbbbf6f642e8c0f6d9a03d7f5942f7e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
