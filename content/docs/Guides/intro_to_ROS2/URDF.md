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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSZ4RP7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3mx9IpDNXdevfvZuVwLTEF5RsxFKp8WF%2FELaQblEGFQIhAJ2rGSbURe8Y3eqOW4NJHdApWtMspTkyjM%2Bo5lqm2i3aKv8DCHUQABoMNjM3NDIzMTgzODA1IgzxAwMeaYKd6nxqEyMq3ANYQ%2BGzw28ltIvFclwgvR%2BCVmrIi5sCX%2BclBKYO70GIkcU4ILOCDjb0gulewFqonNRo5VHQUlndq4ctJ3EgzQKeMox8b%2F6eXM5IlycY18F4lixb5hybMflYxOgoReQtBhyTcuR%2FyDH5kfUlw66hPbgT36PCoblp7%2FkSCUIxyT7meHcDe3%2B9JEqi%2Bgq1Y2PhKqslbDczlPypD8azhv4yAKlO69KVGBXjJcmMleHIRVOHMZcjq8QdrHOYovbqYpsL7fzQN2sdOHDjG6f71piW8evFCTQVCDWkv37PlhNBEBH%2FnTbWFJMTOQbZcQncoq0XNJ7n1Lo1qm97LgGFwa87Na6Wo84w6moIKwcUGWTqZ9oBA1dkDQ99CFiuIX0fujnUcQ8eUNP%2Bf7HWWENiHZZrkhSvb%2BaNKTCeAoo2wmakarD%2FsA4camTSR1HOdAGsdUx1zlk7OXC9apouyp0Rdt2%2FA6rNdp1XZR0GRrAaW7bEyGGF8WsSZiSHfbVbKGaN%2BXzjifS%2Fr6n6cCmcvhoyQ5MD%2B4lqqTGIhilPN8CZcnizcK0DTU8vExvDFGQ1xYnyFuXPINtUyQXDyN8PiYn3JAXFCCzv%2BZrA8pNg6r%2B4Euxny0fToEtwf4FkSsq9yambtTC19YjABjqkAbp2%2FhimaFuNIshGcTjTch3Qe6H%2F%2BsNgn6koBPhjT%2Fy6uEmIn8Z8woXlnkGU%2FusKZwglUtjjLO9eoVqHoy%2F2H3IcO%2F6sW5nY9gogIa5mmJLya3q7sUaAIGKGyJXGxXjDCcDjAWvht2WykG3DYyqIJdCsscghubNSXu%2BxSgTIUhciiU4b%2BBTbtzdPuF%2FrDnp8ElaynMLHUiHdWnZQiNSmgqGMgwTf&X-Amz-Signature=69327cd213dc633a6ffe6f8c87959a6b12f2ed70f28a44d373814a89efbf58e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSZ4RP7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3mx9IpDNXdevfvZuVwLTEF5RsxFKp8WF%2FELaQblEGFQIhAJ2rGSbURe8Y3eqOW4NJHdApWtMspTkyjM%2Bo5lqm2i3aKv8DCHUQABoMNjM3NDIzMTgzODA1IgzxAwMeaYKd6nxqEyMq3ANYQ%2BGzw28ltIvFclwgvR%2BCVmrIi5sCX%2BclBKYO70GIkcU4ILOCDjb0gulewFqonNRo5VHQUlndq4ctJ3EgzQKeMox8b%2F6eXM5IlycY18F4lixb5hybMflYxOgoReQtBhyTcuR%2FyDH5kfUlw66hPbgT36PCoblp7%2FkSCUIxyT7meHcDe3%2B9JEqi%2Bgq1Y2PhKqslbDczlPypD8azhv4yAKlO69KVGBXjJcmMleHIRVOHMZcjq8QdrHOYovbqYpsL7fzQN2sdOHDjG6f71piW8evFCTQVCDWkv37PlhNBEBH%2FnTbWFJMTOQbZcQncoq0XNJ7n1Lo1qm97LgGFwa87Na6Wo84w6moIKwcUGWTqZ9oBA1dkDQ99CFiuIX0fujnUcQ8eUNP%2Bf7HWWENiHZZrkhSvb%2BaNKTCeAoo2wmakarD%2FsA4camTSR1HOdAGsdUx1zlk7OXC9apouyp0Rdt2%2FA6rNdp1XZR0GRrAaW7bEyGGF8WsSZiSHfbVbKGaN%2BXzjifS%2Fr6n6cCmcvhoyQ5MD%2B4lqqTGIhilPN8CZcnizcK0DTU8vExvDFGQ1xYnyFuXPINtUyQXDyN8PiYn3JAXFCCzv%2BZrA8pNg6r%2B4Euxny0fToEtwf4FkSsq9yambtTC19YjABjqkAbp2%2FhimaFuNIshGcTjTch3Qe6H%2F%2BsNgn6koBPhjT%2Fy6uEmIn8Z8woXlnkGU%2FusKZwglUtjjLO9eoVqHoy%2F2H3IcO%2F6sW5nY9gogIa5mmJLya3q7sUaAIGKGyJXGxXjDCcDjAWvht2WykG3DYyqIJdCsscghubNSXu%2BxSgTIUhciiU4b%2BBTbtzdPuF%2FrDnp8ElaynMLHUiHdWnZQiNSmgqGMgwTf&X-Amz-Signature=b81a4fcb03adb9b5e1bee6ed4e2ae5d98e2758cd5f3e5a96104fd8c6284076d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
