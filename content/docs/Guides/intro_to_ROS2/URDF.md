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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5D7O3S%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD6j7CH0FyhrDJFmXYXeH9yAHeSjhJIqsJAWhnz6xEpXwIhAL1nCj%2FefyrmZtmD3mm9miwlHn7lBvA5GIZwots36%2BQvKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhVB9dyc%2F1pLx%2Fsogq3AO2TlYbgOXzoeHVVKP4kU5V86ip94813uR1qUh2zIl7NLPjxQvS97a2MMqZeFU%2B9VEPCVohcQFX59JG1DNCOOt%2FzzvzmGUTbfDLzMxruWHIylwbMADptM2Q%2BOnAt3ZCVRBimazXlnIx0AKGnMu%2FXMXDu2StHu7oFLl5g2TMbGOYWAQg9aPLGUH%2BRdHx6aKgr%2FcVrG%2BBzrzCBnJ0QeCitMs5ZGLKLbKsiZcDL7c7xR0Vy9ZaMvpMY0lSSzvzU%2Bc5%2FqbB4l0aOBdmCvOdQPFsZqKI%2Fvudg1sv7keohDE1N9uNw6WBuEJqLrbktl4aIv%2FiSkVTXKzHvKZ0kdWYIn7YDKuCDh8JdXC9l1i%2FwTDHL3TO6qsAgP3XKUQAf%2B7jw6DDUeDcnxylwdRtRZe4LLnrq3IcNMU9rjBUKMGsqP0x6uo5VWYR4KCNbC35NQMRPVa%2BoxUoTzuI7TLneyHphdXChjRIGRHsonyW7%2FDOOhARa1XG4zipJNZkW6Lb23EnBqHZoVY4Vsib6uBHiLkPliOB5NzRA3s7%2BllHsV8fYmpgbwgd%2FAjcFcO4PoKMddEpLKQ0yCip1%2B7IAM5VGiR11Y01cbapcmYNBqNN29s1KnXuB01N5UYKGlPdMR4ReVmtCTCMvOa%2FBjqkAdXVuFu7Ni8DneOgeg1kVv%2BBeMmjVC4YDOk0qPGepLmnUhcE1%2BJefuu74i%2B7Bfl9abcnmzVouj5OWsxCSaC1L3Z0vAt1ALLaAMLxfHcB5BTmPE2rcI0xlaLokcgU7KQDty1J7jb9FVzdOJUPQg7RW9cf9MA7i2VnEmKR%2BOsFRU00CDLWOTzS7b%2FOpfR2GmkaHW719KWhTOr5XqxTysK8F665lfmW&X-Amz-Signature=75c10cdc51c8d4130c7f4de3f2822857e9ff73a6695becc54c44b02aab509fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5D7O3S%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQD6j7CH0FyhrDJFmXYXeH9yAHeSjhJIqsJAWhnz6xEpXwIhAL1nCj%2FefyrmZtmD3mm9miwlHn7lBvA5GIZwots36%2BQvKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhVB9dyc%2F1pLx%2Fsogq3AO2TlYbgOXzoeHVVKP4kU5V86ip94813uR1qUh2zIl7NLPjxQvS97a2MMqZeFU%2B9VEPCVohcQFX59JG1DNCOOt%2FzzvzmGUTbfDLzMxruWHIylwbMADptM2Q%2BOnAt3ZCVRBimazXlnIx0AKGnMu%2FXMXDu2StHu7oFLl5g2TMbGOYWAQg9aPLGUH%2BRdHx6aKgr%2FcVrG%2BBzrzCBnJ0QeCitMs5ZGLKLbKsiZcDL7c7xR0Vy9ZaMvpMY0lSSzvzU%2Bc5%2FqbB4l0aOBdmCvOdQPFsZqKI%2Fvudg1sv7keohDE1N9uNw6WBuEJqLrbktl4aIv%2FiSkVTXKzHvKZ0kdWYIn7YDKuCDh8JdXC9l1i%2FwTDHL3TO6qsAgP3XKUQAf%2B7jw6DDUeDcnxylwdRtRZe4LLnrq3IcNMU9rjBUKMGsqP0x6uo5VWYR4KCNbC35NQMRPVa%2BoxUoTzuI7TLneyHphdXChjRIGRHsonyW7%2FDOOhARa1XG4zipJNZkW6Lb23EnBqHZoVY4Vsib6uBHiLkPliOB5NzRA3s7%2BllHsV8fYmpgbwgd%2FAjcFcO4PoKMddEpLKQ0yCip1%2B7IAM5VGiR11Y01cbapcmYNBqNN29s1KnXuB01N5UYKGlPdMR4ReVmtCTCMvOa%2FBjqkAdXVuFu7Ni8DneOgeg1kVv%2BBeMmjVC4YDOk0qPGepLmnUhcE1%2BJefuu74i%2B7Bfl9abcnmzVouj5OWsxCSaC1L3Z0vAt1ALLaAMLxfHcB5BTmPE2rcI0xlaLokcgU7KQDty1J7jb9FVzdOJUPQg7RW9cf9MA7i2VnEmKR%2BOsFRU00CDLWOTzS7b%2FOpfR2GmkaHW719KWhTOr5XqxTysK8F665lfmW&X-Amz-Signature=605b0c31689c5061c3a1ae31b04ce76042e5ea328f0587da6324ac77b38ffba6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
