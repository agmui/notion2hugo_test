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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4HD5T4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDUBaZUAO7VJFrwxWDXSd2%2FuwLQKaP6Cf5ZUolWt3gsEAIgfu27ckkvl0Lmr3MNiq%2FoSIVchmGl8Jrykn3eiRY%2B5scq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDfZ9DXHXSD7KQE2NCrcA5iQXMLJf%2FdRR3q81XYWlzPUFMKhEAP0%2Ffp6p4V2SdRMRPy65%2FyuQpqMZbCg1jAXD6yVWlyjgb0GFqfX0jLyGJn6cGzZbluMSp9%2F%2BIbGxUBpEpmSyQhvGF0EHMEQ%2BPR7rKiRsnKdn%2BnYIs8pjZ62WQs2u5792LYz%2Fc2jNg7k7mVYn1vnCP5fIxKy6wGqJX0LsG3zBd2mrLofDymdiyicghxIWFFmNUZ6it17G2MrUEiFEAWa8f0IZyQv4OReDby1Z1xNH1gamSHCkEPXrhfQJfspafwxWAKqVQoghUe9OOrPcgIt%2B8odpykbhg6%2Bf71198zpHBy5SyeuBtKQCwlw5g%2FypnWRzvMZZtLdneyGENkGWu8Y91m9CSBgBs5Lw7AepmxGuFdyVOjeNvlyRxenwUZvHTsftoP1qjEOareDppalbsebVJ6y5x100zTTjUxXWO3A9Bt3tzCor%2FW9WRg5ysu7PbwrKStFvqhJ9GJDolmjxQ9FVksCJiuTFh3HsopWzddUKQSAkeqOUHffWwEnDNTxb3xEmwkuymh484%2FosD4dZ%2B6APMuY3AhsZwNgWuKInS3uB%2BMefgQE8DnSIUpRsuueqysLGEemBo8LIHuZjHB67AF5SINHI9UgeOOmMOKd674GOqUBh9kLENNK8vJWARK6myMsBmloF6JXirXcCUOG0bjd5xs451Subcit7APkEq6jm%2BVeu672jlP5xHwRVnHGnRIEFN76JOqr9BWw1J54yyM8jTZHhVXhr4ctUXcymMnfHDtf0WJPvF%2BWT6B93OnUdZyNa1CDM47%2BxLRxY4jwvJY36frvzE%2BfxnHovBZVOtpZcHcK1ByZ2l0ZZEmfA0sN75KxzkYBJGcS&X-Amz-Signature=2cd28579b4e8920cb479f81ae42dcef039b48d6d0c55ab25954499852b6426a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4HD5T4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDUBaZUAO7VJFrwxWDXSd2%2FuwLQKaP6Cf5ZUolWt3gsEAIgfu27ckkvl0Lmr3MNiq%2FoSIVchmGl8Jrykn3eiRY%2B5scq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDfZ9DXHXSD7KQE2NCrcA5iQXMLJf%2FdRR3q81XYWlzPUFMKhEAP0%2Ffp6p4V2SdRMRPy65%2FyuQpqMZbCg1jAXD6yVWlyjgb0GFqfX0jLyGJn6cGzZbluMSp9%2F%2BIbGxUBpEpmSyQhvGF0EHMEQ%2BPR7rKiRsnKdn%2BnYIs8pjZ62WQs2u5792LYz%2Fc2jNg7k7mVYn1vnCP5fIxKy6wGqJX0LsG3zBd2mrLofDymdiyicghxIWFFmNUZ6it17G2MrUEiFEAWa8f0IZyQv4OReDby1Z1xNH1gamSHCkEPXrhfQJfspafwxWAKqVQoghUe9OOrPcgIt%2B8odpykbhg6%2Bf71198zpHBy5SyeuBtKQCwlw5g%2FypnWRzvMZZtLdneyGENkGWu8Y91m9CSBgBs5Lw7AepmxGuFdyVOjeNvlyRxenwUZvHTsftoP1qjEOareDppalbsebVJ6y5x100zTTjUxXWO3A9Bt3tzCor%2FW9WRg5ysu7PbwrKStFvqhJ9GJDolmjxQ9FVksCJiuTFh3HsopWzddUKQSAkeqOUHffWwEnDNTxb3xEmwkuymh484%2FosD4dZ%2B6APMuY3AhsZwNgWuKInS3uB%2BMefgQE8DnSIUpRsuueqysLGEemBo8LIHuZjHB67AF5SINHI9UgeOOmMOKd674GOqUBh9kLENNK8vJWARK6myMsBmloF6JXirXcCUOG0bjd5xs451Subcit7APkEq6jm%2BVeu672jlP5xHwRVnHGnRIEFN76JOqr9BWw1J54yyM8jTZHhVXhr4ctUXcymMnfHDtf0WJPvF%2BWT6B93OnUdZyNa1CDM47%2BxLRxY4jwvJY36frvzE%2BfxnHovBZVOtpZcHcK1ByZ2l0ZZEmfA0sN75KxzkYBJGcS&X-Amz-Signature=d9b828784c8b2dae61c8aefe5cd0eaa1dcc52ecb7e71f1f99fb8f897deb69bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
