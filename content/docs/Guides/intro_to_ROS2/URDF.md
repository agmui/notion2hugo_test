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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJKMJYW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIA%2BMVqkS0LuzMjk6jj8KMGkG5DlM1%2FZa2MZXkh7dlum9AiEAunJLSClK%2Biq7h850otzs7ZsBvdeaiMgQjidPtcIk04EqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F9B8q1NBEiPc1n1yrcA46mUGZoqY4yjjZuN13WMnmfmCI4KK%2BWLMy5qKM5OavI91ZKLLozg8oe3tVLQoGsv%2FghIim%2BLMoPAHKfCkwscg5xegnAwE47AB7uWUMci4BksK2jM6svZ0DYQJQlZbibr3jtGu2A86cqDtydTw4f1eHlQBEy8hY0tm44sCzCfFJOC8s4WbPTvyMyvTFaG4VX67MxSv10FZWL%2ByzUMH8dQytOufMKczNQRPzK3hom2W3Tt1nU5Nhi3FUo7HOq85c6l6pA9%2Bf3t2KKrKJfEaCXz2b2LhAi7KkurGmoaADF4xQONO9evEpdRSvPHuAmmOEc5DRBK5b0L8ohoralm13%2B5kqIFiASDzNnElt8KFi%2FZ%2F4jhWB5hyb0qAW8twoEi0dE3uWRn1MfrS2GQc%2FF8vfcEmMg31zelYZJVB2W04uvXpojqqPCCC6rF95p0AMrkC5UJANz6eadY1Md6rNNHCJQEuStd5JfEa3rDQ0CSTi1w9e6t7Yzzw0s%2BKV0Vc9AuX3khmmTKCHA6Fs3THdAh3oLdCBIJ4sTrl8zOmCC5uyxdTIQh52UYLoKcQQPE6eD4OwrlbKP4Eax8%2BB%2FBs8O4qYp%2FoeyJuxa9Z%2BL%2FYfWlD5GXS8xrMOIZQ3hhxtR%2FlY%2FMNq1lMAGOqUBQYOqmSoqdCUxoqUjeT5G7hyh1wkoBizcKy8BlasAbR1v97CSZ7kH8CHsNUG7odm7FZpRe0NL2sC%2FXuWxa2njZUipXgQDSx7iqp4L10%2F8h%2FWabDYpVt0OzSQVKDR31Ae1q1QLrbeyPegZwdT37w%2BUsm8To4dPSstQ7%2Bmt2Mo%2FRXuFsajQN0UpLbyWyhRB9iOuHiXP%2FWbLtJBwcabPPIOkPg92mMuQ&X-Amz-Signature=2a9580cc6e4d7f35427f7fcdb7d3da5088cb8dee40dfa836f80304396e22c2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJKMJYW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIA%2BMVqkS0LuzMjk6jj8KMGkG5DlM1%2FZa2MZXkh7dlum9AiEAunJLSClK%2Biq7h850otzs7ZsBvdeaiMgQjidPtcIk04EqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F9B8q1NBEiPc1n1yrcA46mUGZoqY4yjjZuN13WMnmfmCI4KK%2BWLMy5qKM5OavI91ZKLLozg8oe3tVLQoGsv%2FghIim%2BLMoPAHKfCkwscg5xegnAwE47AB7uWUMci4BksK2jM6svZ0DYQJQlZbibr3jtGu2A86cqDtydTw4f1eHlQBEy8hY0tm44sCzCfFJOC8s4WbPTvyMyvTFaG4VX67MxSv10FZWL%2ByzUMH8dQytOufMKczNQRPzK3hom2W3Tt1nU5Nhi3FUo7HOq85c6l6pA9%2Bf3t2KKrKJfEaCXz2b2LhAi7KkurGmoaADF4xQONO9evEpdRSvPHuAmmOEc5DRBK5b0L8ohoralm13%2B5kqIFiASDzNnElt8KFi%2FZ%2F4jhWB5hyb0qAW8twoEi0dE3uWRn1MfrS2GQc%2FF8vfcEmMg31zelYZJVB2W04uvXpojqqPCCC6rF95p0AMrkC5UJANz6eadY1Md6rNNHCJQEuStd5JfEa3rDQ0CSTi1w9e6t7Yzzw0s%2BKV0Vc9AuX3khmmTKCHA6Fs3THdAh3oLdCBIJ4sTrl8zOmCC5uyxdTIQh52UYLoKcQQPE6eD4OwrlbKP4Eax8%2BB%2FBs8O4qYp%2FoeyJuxa9Z%2BL%2FYfWlD5GXS8xrMOIZQ3hhxtR%2FlY%2FMNq1lMAGOqUBQYOqmSoqdCUxoqUjeT5G7hyh1wkoBizcKy8BlasAbR1v97CSZ7kH8CHsNUG7odm7FZpRe0NL2sC%2FXuWxa2njZUipXgQDSx7iqp4L10%2F8h%2FWabDYpVt0OzSQVKDR31Ae1q1QLrbeyPegZwdT37w%2BUsm8To4dPSstQ7%2Bmt2Mo%2FRXuFsajQN0UpLbyWyhRB9iOuHiXP%2FWbLtJBwcabPPIOkPg92mMuQ&X-Amz-Signature=9edb535eb8410965a8cf458a49a7e97cbbaa3a824f3aeae98a5bbe43102d66db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
