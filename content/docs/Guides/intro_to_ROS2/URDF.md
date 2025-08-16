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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5XMVEQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICCXz5g1q0HN3Czmzt9BdJj1985gZ9FXVNvsivoa2TICAiBmzw8nH5lFqDThPixS60PpIGB4sWdKaZFgDf0MJ1SnZyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMc7ir1PtEp0uxgHTtKtwD1s6Vvq106obsw5lew6W8S2C%2Fgk6ZN%2BqWJrAXE0YCAA%2B0aANmVU13xuzc4lphTkPK8sZVrWKH14xAQZJA%2F%2FZYzK5pRpnW18NmczAAlXpbCunevzWszPzTgwvn0gUT227fBEPcPtdR1r3sUFBiYiyLBXeKO01LDeitU%2BRFgaNQAl6Igb2CLEuMK3OgPbw29y5aglH9lNcwulSi3ZwvLo7x30e7l0YhL1wGVy7jAM5bqwTsaidZ%2FxmdgJ2RKSrN18eYa%2F8MzftH0g0XBADTa3NTy9FuMVntwWG9FwiWBHeajb8tmFd2k1JL%2FFX7DkdxWfHSAMd%2FCeLXm4afgAOyRHBxVO297heryOmgwkEYb1wvvXTor09QbE%2B9QF7RRiBWXfjH8aiXEYGlsJleohMnHBEuwtJKly8xAIH2o%2FWpUkRRI7rYR81tExxqsPA1sNAWXVr56whqt9V7s2ci0QKQo%2FkhFIt%2FmM7rtTq5UdEEbky04YrKhyqrfHa3cSorx%2FZorVvNuaC%2B%2FCAuGiaOCUM6JXUX2mD%2Fc9PdFMDZ1q0BYPoi%2BmJcquXQaZMunXNwxCg4TTLaGDrs9XqVVow6u5cRVOHeiHi9hbiDWwjGSfLdxN8vTu7aF0P6G8mewOQ2l8AwifiAxQY6pgEP6mVsAuc8GiWFvX3esQsLE3ZRsO2rAhkQTcNeQ%2BoaKaYhtZGzTKxOVcxWJl5sH0XAp0HoWG%2BY41k5%2BygU7NmG2IL8qP3awhuPgPjBW6%2ByOJl4Kyc5%2FoFUJ%2BvvejK7Q8XgxmibuysCEhjhMhqQByYDkYgTTiSLGQ4CDGu%2BByGbB4U9A2pkEhHprTZaoq7MDrQOWl2Rv7zC2%2BLmXT6A4zrzRHnParCe&X-Amz-Signature=05fffe56994728d5a8f7efe1d9df997f9e804090e34ebef39adb0512bc61abdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5XMVEQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICCXz5g1q0HN3Czmzt9BdJj1985gZ9FXVNvsivoa2TICAiBmzw8nH5lFqDThPixS60PpIGB4sWdKaZFgDf0MJ1SnZyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMc7ir1PtEp0uxgHTtKtwD1s6Vvq106obsw5lew6W8S2C%2Fgk6ZN%2BqWJrAXE0YCAA%2B0aANmVU13xuzc4lphTkPK8sZVrWKH14xAQZJA%2F%2FZYzK5pRpnW18NmczAAlXpbCunevzWszPzTgwvn0gUT227fBEPcPtdR1r3sUFBiYiyLBXeKO01LDeitU%2BRFgaNQAl6Igb2CLEuMK3OgPbw29y5aglH9lNcwulSi3ZwvLo7x30e7l0YhL1wGVy7jAM5bqwTsaidZ%2FxmdgJ2RKSrN18eYa%2F8MzftH0g0XBADTa3NTy9FuMVntwWG9FwiWBHeajb8tmFd2k1JL%2FFX7DkdxWfHSAMd%2FCeLXm4afgAOyRHBxVO297heryOmgwkEYb1wvvXTor09QbE%2B9QF7RRiBWXfjH8aiXEYGlsJleohMnHBEuwtJKly8xAIH2o%2FWpUkRRI7rYR81tExxqsPA1sNAWXVr56whqt9V7s2ci0QKQo%2FkhFIt%2FmM7rtTq5UdEEbky04YrKhyqrfHa3cSorx%2FZorVvNuaC%2B%2FCAuGiaOCUM6JXUX2mD%2Fc9PdFMDZ1q0BYPoi%2BmJcquXQaZMunXNwxCg4TTLaGDrs9XqVVow6u5cRVOHeiHi9hbiDWwjGSfLdxN8vTu7aF0P6G8mewOQ2l8AwifiAxQY6pgEP6mVsAuc8GiWFvX3esQsLE3ZRsO2rAhkQTcNeQ%2BoaKaYhtZGzTKxOVcxWJl5sH0XAp0HoWG%2BY41k5%2BygU7NmG2IL8qP3awhuPgPjBW6%2ByOJl4Kyc5%2FoFUJ%2BvvejK7Q8XgxmibuysCEhjhMhqQByYDkYgTTiSLGQ4CDGu%2BByGbB4U9A2pkEhHprTZaoq7MDrQOWl2Rv7zC2%2BLmXT6A4zrzRHnParCe&X-Amz-Signature=1115cfa7ec46e2a200ab8c919f145d6dc3c2d08f16582c56a4a16441d2f29043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
