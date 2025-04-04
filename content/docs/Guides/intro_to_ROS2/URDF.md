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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXGSEW5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUMvtz9uH8%2BOZVhnkhAucdQzV4sB0fiKLNpEYKDri1cAiEAkLmaC6W1IaMM4x39us9lgaBA4lJcKoypijVRwkCUAwEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDASzFOw91OMBI3itUCrcA40IG64pVrxkNG3%2BRIbUyEc1zzWrgXWFYwHZB4XR3c3bkqOFupWG9HYIkPiGzxY3NlSz4rGpnIvsma1wLMSrhJrzKWcMKA23vnlWEj9CwPyJCL4uGzfNp7GmeBfLeJc8vSqKxHCDCWY8mL%2BUtoA3R4pKGoZRIX%2BdJ5VbBqTXQIXcwxihL1ytTQ8zDMdPX%2FrT2fp9WcwGZusdOyLd%2FzMBb%2BCzD9bf2ek2OMh6fohdKzY4Cn5wV%2F4JY9yoxnoxN4cyM9uMUmdoNRFzCDPj1wZrZm6JEIYTanLD0%2FK%2Fiygmzj17IRha9kPn8RPY0gxog%2FdjmN5CLNlBr9%2BS5acJ7TWtK8UQsR2RhomathmGYGd%2FtGvHYK8BZMafkg3Gq92CTFA187nSMaqVUD8s%2FK9d4zvKcPEoDe2LOPsFwRbeyvRC2u0YoceWlAtNrLu9Dk3fRFQ6T6AYREQXC5no9PAUqT1sIbFuFcfxOR5nbQ8ueVqX4dgKRWP3xw%2ByBQby%2FxA6a7piqlm57tBl2%2Fvk6gKN0g58R6lhs%2Fg4n%2Fh7z%2B%2BTaVSBoGiXjCPvc6FWJLaFoy7RczS24bTBaPhfFTDUoEEBz0hjyoLpgV%2BzUXeSfMKIFgztZGRs%2BiL4wl1Qv%2B90OuyzMNKhwb8GOqUBEUrhPGplE5JYn%2Bc8THbnZNp73httgPFuuGk6p%2BclQGEeLaFNaO9vIfdvmkhNHyOSbQCCfTcWJfxG088%2BLdpMxR0Y1HNKP7IIwo2gRqQp0ju4ZXaZa%2BlASG9NdVhbucuZqZFpEfaUM%2FiYxsAewm4YI2Gq203yxkeTM6yH2FbC5tUBrAkghC7rNg5I54ItdCJNuHKKk%2F%2Fm83FCM2IEZIsM10ZJsyg7&X-Amz-Signature=7b2c06d7a70ebfc9330f75875d7534c1325e43fc46d83ed65e606bb82522847b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXGSEW5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUMvtz9uH8%2BOZVhnkhAucdQzV4sB0fiKLNpEYKDri1cAiEAkLmaC6W1IaMM4x39us9lgaBA4lJcKoypijVRwkCUAwEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDASzFOw91OMBI3itUCrcA40IG64pVrxkNG3%2BRIbUyEc1zzWrgXWFYwHZB4XR3c3bkqOFupWG9HYIkPiGzxY3NlSz4rGpnIvsma1wLMSrhJrzKWcMKA23vnlWEj9CwPyJCL4uGzfNp7GmeBfLeJc8vSqKxHCDCWY8mL%2BUtoA3R4pKGoZRIX%2BdJ5VbBqTXQIXcwxihL1ytTQ8zDMdPX%2FrT2fp9WcwGZusdOyLd%2FzMBb%2BCzD9bf2ek2OMh6fohdKzY4Cn5wV%2F4JY9yoxnoxN4cyM9uMUmdoNRFzCDPj1wZrZm6JEIYTanLD0%2FK%2Fiygmzj17IRha9kPn8RPY0gxog%2FdjmN5CLNlBr9%2BS5acJ7TWtK8UQsR2RhomathmGYGd%2FtGvHYK8BZMafkg3Gq92CTFA187nSMaqVUD8s%2FK9d4zvKcPEoDe2LOPsFwRbeyvRC2u0YoceWlAtNrLu9Dk3fRFQ6T6AYREQXC5no9PAUqT1sIbFuFcfxOR5nbQ8ueVqX4dgKRWP3xw%2ByBQby%2FxA6a7piqlm57tBl2%2Fvk6gKN0g58R6lhs%2Fg4n%2Fh7z%2B%2BTaVSBoGiXjCPvc6FWJLaFoy7RczS24bTBaPhfFTDUoEEBz0hjyoLpgV%2BzUXeSfMKIFgztZGRs%2BiL4wl1Qv%2B90OuyzMNKhwb8GOqUBEUrhPGplE5JYn%2Bc8THbnZNp73httgPFuuGk6p%2BclQGEeLaFNaO9vIfdvmkhNHyOSbQCCfTcWJfxG088%2BLdpMxR0Y1HNKP7IIwo2gRqQp0ju4ZXaZa%2BlASG9NdVhbucuZqZFpEfaUM%2FiYxsAewm4YI2Gq203yxkeTM6yH2FbC5tUBrAkghC7rNg5I54ItdCJNuHKKk%2F%2Fm83FCM2IEZIsM10ZJsyg7&X-Amz-Signature=6c4ae7f79b5be1bc7cdabd05c8ae3df8be1389e326a8b18f244409a25937415e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
