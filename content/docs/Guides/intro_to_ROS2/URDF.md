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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6QEOYXT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDIOGgE2hNzRW2KFKD8CidRDhf%2BHEL3cz1TsixowrxkAIhAI274%2FsvcZwRdNdCRSfvB0TKv2Hy%2Brm46QIel5SEW6LVKv8DCFoQABoMNjM3NDIzMTgzODA1IgyU8sogTv5iY3Y1kEsq3APC%2FcvUDkHodCUKEkTt7WSZu%2BBaRs3XLJSwndWsMqYn2pNh9woWLs5Bh7YyYdMbjezwb5PwKW7UIpU2TWIAoQ9TP%2FGH%2FW9mWFaphtm%2FJrMLUzXwYvQ0Q9xDpYYoa1Yawqn4CZL5KSwUglhUi2rgGP33oMC2%2B3GV3FDX50twUWJ6%2FqlP%2F7QLAmUrgaJF6%2FuiiAG2RTHoylvppNChOft1RW3HcRPyusPPFfetY31JZw%2B2cydvYrAkLLm2tTO1o%2B%2B7zIBjlx2K08PtuRtwgbab8dpsUtZHTBq6CHTpMgp4MGgC5ZbhmicOGZrxvXZjFebtbrxv8PaT8NjEh%2F77jJ5tyotXvzE80RZ%2BGTlnGHOKYrhyxnOAcphdaey5HEryH27L0i1PeXTfTQhgcxSwgfaF%2B3xAw8dFz%2B9OLGF0tlpqcGEcsUm3KqJdGm2Vg70yg5JEkbD0VDjHE83vQVMVNIqpD%2FiJbCsWxLTLUJyOUQiVRTqPScMsT56zhZ%2BZJ32cULupWeh395VCkLdMRhjbnpKqsTh5lUZc0Sz27h90vzpkpCoWL38KlVAOK2J6hp8O7122mjH34B7lSF1NmahMb%2BIOcPV5gVpPOUec61wdGTvGt5QWwTHk34D8K0lMGXIWHTD8sezABjqkATVuDlUgHkdC3hXpZD91%2FbRjlC1hLf1V8jy41vHrG4xzyX38DTbJ4m%2BrT1pQoGzzSS52H%2FMt96tyScAMnKSwy9Ug17mOllYD%2Bt8fUwgtwX4InAgRauMQzZ0r8URIVfbW2qxICqMD5IrSPqi64SsNSdQozOTXb8eGEzm2%2FqT4CiCQLLsB9JYLZKkrqY%2BTPaeaJuXbEXCPfWak3uz%2F%2FiPaTAztN0zQ&X-Amz-Signature=20746b3675feab7571b05747f648a93a2c01987bd0a4f6d936c242c66d9d6659&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6QEOYXT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDIOGgE2hNzRW2KFKD8CidRDhf%2BHEL3cz1TsixowrxkAIhAI274%2FsvcZwRdNdCRSfvB0TKv2Hy%2Brm46QIel5SEW6LVKv8DCFoQABoMNjM3NDIzMTgzODA1IgyU8sogTv5iY3Y1kEsq3APC%2FcvUDkHodCUKEkTt7WSZu%2BBaRs3XLJSwndWsMqYn2pNh9woWLs5Bh7YyYdMbjezwb5PwKW7UIpU2TWIAoQ9TP%2FGH%2FW9mWFaphtm%2FJrMLUzXwYvQ0Q9xDpYYoa1Yawqn4CZL5KSwUglhUi2rgGP33oMC2%2B3GV3FDX50twUWJ6%2FqlP%2F7QLAmUrgaJF6%2FuiiAG2RTHoylvppNChOft1RW3HcRPyusPPFfetY31JZw%2B2cydvYrAkLLm2tTO1o%2B%2B7zIBjlx2K08PtuRtwgbab8dpsUtZHTBq6CHTpMgp4MGgC5ZbhmicOGZrxvXZjFebtbrxv8PaT8NjEh%2F77jJ5tyotXvzE80RZ%2BGTlnGHOKYrhyxnOAcphdaey5HEryH27L0i1PeXTfTQhgcxSwgfaF%2B3xAw8dFz%2B9OLGF0tlpqcGEcsUm3KqJdGm2Vg70yg5JEkbD0VDjHE83vQVMVNIqpD%2FiJbCsWxLTLUJyOUQiVRTqPScMsT56zhZ%2BZJ32cULupWeh395VCkLdMRhjbnpKqsTh5lUZc0Sz27h90vzpkpCoWL38KlVAOK2J6hp8O7122mjH34B7lSF1NmahMb%2BIOcPV5gVpPOUec61wdGTvGt5QWwTHk34D8K0lMGXIWHTD8sezABjqkATVuDlUgHkdC3hXpZD91%2FbRjlC1hLf1V8jy41vHrG4xzyX38DTbJ4m%2BrT1pQoGzzSS52H%2FMt96tyScAMnKSwy9Ug17mOllYD%2Bt8fUwgtwX4InAgRauMQzZ0r8URIVfbW2qxICqMD5IrSPqi64SsNSdQozOTXb8eGEzm2%2FqT4CiCQLLsB9JYLZKkrqY%2BTPaeaJuXbEXCPfWak3uz%2F%2FiPaTAztN0zQ&X-Amz-Signature=ad9f66d053181cef7514df39c2f77b03201983d460944d15c05e132b58b18db2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
