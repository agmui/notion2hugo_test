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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5IJ77HK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIB0OjKqvBjn52lBN15zPDBe3zqkhgy9YOK2EGIAJ2LfdAiBaxoCMYL8d6zb8%2BKg9LEeOz5QOo1k89zRTTmSJAvsI8iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKFSMC4E3OWG6wm1rKtwDvjkjMnsDgrfnoJ73t70mAQ4SODVvcY5W1frU6womciVXVybg20RMKp%2F40LQjHyPIw6PPgrJZ1zCKbOzsU70qslWM2pUQFof%2BaZ5TIfLwgRW1NeREAEmK9H%2BrbO5XoHqoVO3zXGz01PmfsV0OhOrVyO%2BsZi8amCzo%2F9GMjheNskhf7YJG3uOboZ4mCMraygusxSaGDWproPILAn%2BWGZtWUU%2F1TPQc9B%2BPEwE6nsHxjWJhMxs5FhbHSvaCJb7d%2BvtnBcmUA1rOAVl0oyUXnvtRFrXubhE0ycO0ZUg1ODtngtqZZk4afqNEA%2FmcPtct6BBG7UJ4e5MRFulurUankYnoHlScaM7T2QllaK0lV0hAfEbLBRuclPhiY6s%2B0podfzYI9eJUR4BtY9YXANLkrUrYE0T4dUOD%2FtYLHeKqYLd4oK3oRHikChYmqEpxMk347k7po5hO9X%2FLJ%2FJX9aYH5xaidekR0IXKIrXJ3UVK%2BhinU6pquvMUOyY8ppeEbgoqNT5hgsA1PmG6aOBU%2FOARr1TqeARiHLl%2Fl7%2FiaoBHwoCdSKA0ULgYZOoehDcL8WSYekJ4bsq5SvHDRUaOr%2Fzp%2FfUweg00J3cpN9DPiBFiQ0gsH6AXQ4XYjNyAg8pQ3P8w0ZCKvgY6pgFu5kLBpCW3IrHPEXdt3fG4JDJcjByT3XeFUnbMHquUSCbwtXwE%2B4mKqFf%2Bi9O%2FqsYLygZGtbEVnAeAreKSQKZsVmZIA6xyWbArndlA7bCSmqWF%2FgS7c1Fi1PGu0HvjKJop97gIkTO%2BbPW5S%2B4dDIiBD%2F6Zkk2pjYvNbomvTFnmZGu0Qhd01NYc609srGI%2BeAHZTNJidI2hoKtzKMMcZWmgGsXfeVyQ&X-Amz-Signature=9f9e034321be3c2e28ca3245958f47e832d773f857f76479ad097d73cea7884b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5IJ77HK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIB0OjKqvBjn52lBN15zPDBe3zqkhgy9YOK2EGIAJ2LfdAiBaxoCMYL8d6zb8%2BKg9LEeOz5QOo1k89zRTTmSJAvsI8iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKFSMC4E3OWG6wm1rKtwDvjkjMnsDgrfnoJ73t70mAQ4SODVvcY5W1frU6womciVXVybg20RMKp%2F40LQjHyPIw6PPgrJZ1zCKbOzsU70qslWM2pUQFof%2BaZ5TIfLwgRW1NeREAEmK9H%2BrbO5XoHqoVO3zXGz01PmfsV0OhOrVyO%2BsZi8amCzo%2F9GMjheNskhf7YJG3uOboZ4mCMraygusxSaGDWproPILAn%2BWGZtWUU%2F1TPQc9B%2BPEwE6nsHxjWJhMxs5FhbHSvaCJb7d%2BvtnBcmUA1rOAVl0oyUXnvtRFrXubhE0ycO0ZUg1ODtngtqZZk4afqNEA%2FmcPtct6BBG7UJ4e5MRFulurUankYnoHlScaM7T2QllaK0lV0hAfEbLBRuclPhiY6s%2B0podfzYI9eJUR4BtY9YXANLkrUrYE0T4dUOD%2FtYLHeKqYLd4oK3oRHikChYmqEpxMk347k7po5hO9X%2FLJ%2FJX9aYH5xaidekR0IXKIrXJ3UVK%2BhinU6pquvMUOyY8ppeEbgoqNT5hgsA1PmG6aOBU%2FOARr1TqeARiHLl%2Fl7%2FiaoBHwoCdSKA0ULgYZOoehDcL8WSYekJ4bsq5SvHDRUaOr%2Fzp%2FfUweg00J3cpN9DPiBFiQ0gsH6AXQ4XYjNyAg8pQ3P8w0ZCKvgY6pgFu5kLBpCW3IrHPEXdt3fG4JDJcjByT3XeFUnbMHquUSCbwtXwE%2B4mKqFf%2Bi9O%2FqsYLygZGtbEVnAeAreKSQKZsVmZIA6xyWbArndlA7bCSmqWF%2FgS7c1Fi1PGu0HvjKJop97gIkTO%2BbPW5S%2B4dDIiBD%2F6Zkk2pjYvNbomvTFnmZGu0Qhd01NYc609srGI%2BeAHZTNJidI2hoKtzKMMcZWmgGsXfeVyQ&X-Amz-Signature=a4681ef85b630ddf4227d4bcfa01612f759ebd1eab52513752ff1b463db716f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
