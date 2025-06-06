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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJXMVWA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9lQ8A%2FtC6mopweEo9qYGEbYpYvAhSW8GuWQYFKxYhAIgNnY9ShMQgBrYCaNNwlX6b7rJ1YITYtilXK7QvLycwDMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOS%2B7qnU2KEYqL7HKCrcA%2BXDmWknOCwm%2F%2Bdqz892zFV4x3R9p3pqPWQSLvKC05eGLN%2F94dAKWjKGb1WBLlo7kbjj1trUHBCrbInXgPqMNSIevty5xIvXUXDlbq8B4Of%2BeahwBk%2BPpQoEBUksd62wgLCeW5ukEDk%2BIO1HWdZ8tcSxQqRA3rG1xlwf1R68qiciSHaRcmKGo5uUd62uzJXU1AZf4ifMp187iv14%2BBpuMzI2CYyGvZpVKY6gR%2BEkCNOyYKXDTIMNIRRVHfJVMu%2FCaPIp4hr87ZXFmN8Ssro0w1ujA42%2FLo9PQgFkYMJuPtSYkxxc6SznYS8XTpjB6cFUjN6yq9%2FAxY48RSG4qfTQWxnTtakTSzI1uNGxcsPwkTXr3xm0JP0CBjcQ1dI9K4HtuDiqLyDHy2O3MAaDFYTOr1Wjua7ED33FxnOLoV1S2O7L6Dd%2Bb1rnNt42MeYmMQdqzEd4yQfQQTq%2FNoQ7pufo79PN752rwGUcmmuRKqkd86B8Dc7U1BoFhxxPSSR2rKPaXLItqybcEnSaSJYqWL47bJcd3grlrI6kwI4LhcbqY6P7dqQ%2BcQmxOVRzn%2FGvqkOTOMj7mHR4aBtLVLoQ3luPUwl0rlNF4QGMvnoe%2B9%2BauL1tYI%2BPLitGWuhGEmfpMLm9i8IGOqUBMzcjZc7x7Sfhcz4yCtBFmW0lfXjJmLIyq67lCk4%2B%2B8pDQKfv1sdREnSgAB8P1Ig0o%2Bx1%2BRh52fYoe%2BB3%2Bc%2BCQBGEly9djl9o9p1sr3lz79CI8HwOJBgCX6EVJCOkrLyZAySF150xR0Y%2BEaIHu0NkLT9ubAhTRQQRibEyJHKMbWKXyzNR2Gd4sE%2BcE46rbhXIn3VlpEHcOiGs%2FFFKF7vIsrwmonrk&X-Amz-Signature=4a1b464badaf71770f667ac8990ccc9a04b7fb52a435e998aa5526636d9c66c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJXMVWA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH9lQ8A%2FtC6mopweEo9qYGEbYpYvAhSW8GuWQYFKxYhAIgNnY9ShMQgBrYCaNNwlX6b7rJ1YITYtilXK7QvLycwDMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOS%2B7qnU2KEYqL7HKCrcA%2BXDmWknOCwm%2F%2Bdqz892zFV4x3R9p3pqPWQSLvKC05eGLN%2F94dAKWjKGb1WBLlo7kbjj1trUHBCrbInXgPqMNSIevty5xIvXUXDlbq8B4Of%2BeahwBk%2BPpQoEBUksd62wgLCeW5ukEDk%2BIO1HWdZ8tcSxQqRA3rG1xlwf1R68qiciSHaRcmKGo5uUd62uzJXU1AZf4ifMp187iv14%2BBpuMzI2CYyGvZpVKY6gR%2BEkCNOyYKXDTIMNIRRVHfJVMu%2FCaPIp4hr87ZXFmN8Ssro0w1ujA42%2FLo9PQgFkYMJuPtSYkxxc6SznYS8XTpjB6cFUjN6yq9%2FAxY48RSG4qfTQWxnTtakTSzI1uNGxcsPwkTXr3xm0JP0CBjcQ1dI9K4HtuDiqLyDHy2O3MAaDFYTOr1Wjua7ED33FxnOLoV1S2O7L6Dd%2Bb1rnNt42MeYmMQdqzEd4yQfQQTq%2FNoQ7pufo79PN752rwGUcmmuRKqkd86B8Dc7U1BoFhxxPSSR2rKPaXLItqybcEnSaSJYqWL47bJcd3grlrI6kwI4LhcbqY6P7dqQ%2BcQmxOVRzn%2FGvqkOTOMj7mHR4aBtLVLoQ3luPUwl0rlNF4QGMvnoe%2B9%2BauL1tYI%2BPLitGWuhGEmfpMLm9i8IGOqUBMzcjZc7x7Sfhcz4yCtBFmW0lfXjJmLIyq67lCk4%2B%2B8pDQKfv1sdREnSgAB8P1Ig0o%2Bx1%2BRh52fYoe%2BB3%2Bc%2BCQBGEly9djl9o9p1sr3lz79CI8HwOJBgCX6EVJCOkrLyZAySF150xR0Y%2BEaIHu0NkLT9ubAhTRQQRibEyJHKMbWKXyzNR2Gd4sE%2BcE46rbhXIn3VlpEHcOiGs%2FFFKF7vIsrwmonrk&X-Amz-Signature=ec564b1774ddbe0577dbad8e5cc2b7119c25933bbb7b4f7ca4988c0c5176e499&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
