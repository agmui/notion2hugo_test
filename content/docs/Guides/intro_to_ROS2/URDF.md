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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XI4D5ON%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPx93qYRGwDshSctbcYmatS9UDJ0SiUNWJQ7xrbdLXhAiADhjJePzC0ioJLE%2FekTygYhCox%2BMGucEDG9TseoyqDryqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZ4iiLWJNZw8UBSkKtwD1rTtfzfBF%2BpuS8Zz9QktlhnnfGydydGuB20w4%2BM8xNSKNbS4InqCveYpzrUP5%2FMetPlg5nPQTKaSZXix%2FEWwLH6M25uPtzkQxdwfzH0FZp4rsK%2BPw2j%2FctqiOwrMdBXQ%2F2PmJ4jFlhW%2BwXqrnlcdFj2%2BMZ845AeogA8zGCdmhnb042GF2reaiXB5flwwjL0cCCzQcYHrHoAfS5746tu3VkHiS6H0kqWy3aN6EngroTTdyGPYP%2FC30Igrj3sqZ%2FttFXgIKIsSbF2sGrsU6pI3317Yqjm2Te1QipJGt9fIDVHLYQY%2FSagw%2BWk0KlJ%2F9i8dVlR6J2FOdVhWwl%2FVfZQjlXWZcBgF7hjfU6ICCmBKVQaA1bBr3krN01zM%2B0FJfGgptSmlEwR%2BcSbI9TEnNWdstVsbcD5eRGhvaGBxVBKjVqzTRjtu2eQkUkkyob94glkIQOHdsTVXkd%2B%2F4NV0UngsCxMQp%2Bda18x0FMU6tBEPFzKtbG1cfP9nhvy5R95DsUDNiKLHFlI9EUmEuu2ZVsg5IZVw68vxRNvkPbJDtp%2FnKPRO%2B7cfqQCZ0y7OBYUKlo5RgjBFDyWxkVy%2B7OZ1ZI4vRj4ktam3IjBE%2F%2FOuHipo3Yid3WMc%2BtdwdkuDUTcwncX4vAY6pgFAFxmoSPzJ%2FPGlAq0vr%2FtA9nD%2BwWqEVQ%2Fv3inh3oOWJH26OJM%2FgEIfMt%2Bt52WJkaPV2XY6RodbwWKmQnKenKp2fFCkwSkxsKjX5UGa7EpEumZd3nKgrmqUvAxy9gqhxOXI2p9R1CeUprJv9uONTIXRYb7z%2BZye9fpQZGUxJGe%2FSSHoLcm7fAVp4aw%2FNoF7lJ8XwNtHJfuRMzZqxClzzcyV0LwJd7cA&X-Amz-Signature=ccf3e2a84d32a63c3f1dee18066972fb60b3c1dff55d1a7cd86ffe026c9133ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XI4D5ON%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPx93qYRGwDshSctbcYmatS9UDJ0SiUNWJQ7xrbdLXhAiADhjJePzC0ioJLE%2FekTygYhCox%2BMGucEDG9TseoyqDryqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZ4iiLWJNZw8UBSkKtwD1rTtfzfBF%2BpuS8Zz9QktlhnnfGydydGuB20w4%2BM8xNSKNbS4InqCveYpzrUP5%2FMetPlg5nPQTKaSZXix%2FEWwLH6M25uPtzkQxdwfzH0FZp4rsK%2BPw2j%2FctqiOwrMdBXQ%2F2PmJ4jFlhW%2BwXqrnlcdFj2%2BMZ845AeogA8zGCdmhnb042GF2reaiXB5flwwjL0cCCzQcYHrHoAfS5746tu3VkHiS6H0kqWy3aN6EngroTTdyGPYP%2FC30Igrj3sqZ%2FttFXgIKIsSbF2sGrsU6pI3317Yqjm2Te1QipJGt9fIDVHLYQY%2FSagw%2BWk0KlJ%2F9i8dVlR6J2FOdVhWwl%2FVfZQjlXWZcBgF7hjfU6ICCmBKVQaA1bBr3krN01zM%2B0FJfGgptSmlEwR%2BcSbI9TEnNWdstVsbcD5eRGhvaGBxVBKjVqzTRjtu2eQkUkkyob94glkIQOHdsTVXkd%2B%2F4NV0UngsCxMQp%2Bda18x0FMU6tBEPFzKtbG1cfP9nhvy5R95DsUDNiKLHFlI9EUmEuu2ZVsg5IZVw68vxRNvkPbJDtp%2FnKPRO%2B7cfqQCZ0y7OBYUKlo5RgjBFDyWxkVy%2B7OZ1ZI4vRj4ktam3IjBE%2F%2FOuHipo3Yid3WMc%2BtdwdkuDUTcwncX4vAY6pgFAFxmoSPzJ%2FPGlAq0vr%2FtA9nD%2BwWqEVQ%2Fv3inh3oOWJH26OJM%2FgEIfMt%2Bt52WJkaPV2XY6RodbwWKmQnKenKp2fFCkwSkxsKjX5UGa7EpEumZd3nKgrmqUvAxy9gqhxOXI2p9R1CeUprJv9uONTIXRYb7z%2BZye9fpQZGUxJGe%2FSSHoLcm7fAVp4aw%2FNoF7lJ8XwNtHJfuRMzZqxClzzcyV0LwJd7cA&X-Amz-Signature=c87a86f5369e453b11cc1bbaf23b607f4be40f235c63729157dd2ff7c3df3002&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
