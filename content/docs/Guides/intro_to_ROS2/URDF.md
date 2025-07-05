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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDLTCQY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEDXjsCek5DNQfvfMm9bDg6Gbtm74QcwD%2FrU6Xm2GoyRAiEA8USIwqpJy8%2FFY69RbKiyzyPmEaxB5BHo1IdFF%2B5Jo1Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGZbs6LieHCblbMq6yrcA791VXcQW23X3BnnjxjtlfYcZmYU7bFZ1IEOyAHLSRruFf09iUPFOWm9efafCV%2FY9Z%2BOGn4LBTRntYwrrTuZNJYorhLghf9u9j%2BEJ79PTY%2Fj1oLD5AnnhqsRHD1cKFWdLFk%2BsUCoTda8%2FVU77iOVRnP8ubxR7MfrCb%2Bt3Zws9jBMqnoUQvvuUxzv075eY1IWI0f%2BxXbwmESdPmNLbfA%2F62u3Z%2F04Xn9JQNSzaDtucljbF8LZodxEo9R92SFenfmHmw%2BfURQjP3Bo7tl9CHWy7NnFlCmHpoggDrrNVB%2F%2Fq82j1%2BCGDSAKW7fN20O0Hrh9MGCEN%2BIUuB1naGWTCXtWI%2Fo6wD3rmpJGL1rmoNsqkWk%2FpVP%2BqOH76Dd86UuakaNhIn8M2yDiNJJ%2BbFz4gebHRjIeb4mflcFbcYaieiq92DHU6L8M6X0IhYzbyFJVgV7bDuzhbic11XFYkBNphZW%2B4yraCuDwt7kmLHFAqaTxNit3S7TKKl4RxHkkiQEuquDwjDs5lIlOfIIXLAXKiH1pBYpjw4IkDA5EOjV38aPbPWWAE9xvqeIs7RY2m%2BzTl1Szbe39%2B%2FENok6cNBng2ouQ8nw41j9HEJqY6QJNOy%2F7oEGGocb4cBqo1ol0BbtRMKC0o8MGOqUBfPDNoz2M3tRyJs7fZ1tDtWAtjy8G2fbV0ZERtajdzPqHE9%2BZtBD0iwnmo226iGXNH9mOTYKCIQtrgVT7B3%2FdVwmB8sD4fkO7hXmZLsV8RAb12ABKd8ih2FyikH%2FSNBcwzkBIWmqqLHO8JU1GW3RtLrkhnLUleAEXIeIWG4cSnrVJbN0dkqsHZ6siSLLxhk8X2EuSVeOdID53KmRKGurW%2FzUySiui&X-Amz-Signature=b3f75c1f5e636ea8cf60f0c56f0d4a1a9509d9c2eaf1ae3cb968304d690bba2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDLTCQY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEDXjsCek5DNQfvfMm9bDg6Gbtm74QcwD%2FrU6Xm2GoyRAiEA8USIwqpJy8%2FFY69RbKiyzyPmEaxB5BHo1IdFF%2B5Jo1Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGZbs6LieHCblbMq6yrcA791VXcQW23X3BnnjxjtlfYcZmYU7bFZ1IEOyAHLSRruFf09iUPFOWm9efafCV%2FY9Z%2BOGn4LBTRntYwrrTuZNJYorhLghf9u9j%2BEJ79PTY%2Fj1oLD5AnnhqsRHD1cKFWdLFk%2BsUCoTda8%2FVU77iOVRnP8ubxR7MfrCb%2Bt3Zws9jBMqnoUQvvuUxzv075eY1IWI0f%2BxXbwmESdPmNLbfA%2F62u3Z%2F04Xn9JQNSzaDtucljbF8LZodxEo9R92SFenfmHmw%2BfURQjP3Bo7tl9CHWy7NnFlCmHpoggDrrNVB%2F%2Fq82j1%2BCGDSAKW7fN20O0Hrh9MGCEN%2BIUuB1naGWTCXtWI%2Fo6wD3rmpJGL1rmoNsqkWk%2FpVP%2BqOH76Dd86UuakaNhIn8M2yDiNJJ%2BbFz4gebHRjIeb4mflcFbcYaieiq92DHU6L8M6X0IhYzbyFJVgV7bDuzhbic11XFYkBNphZW%2B4yraCuDwt7kmLHFAqaTxNit3S7TKKl4RxHkkiQEuquDwjDs5lIlOfIIXLAXKiH1pBYpjw4IkDA5EOjV38aPbPWWAE9xvqeIs7RY2m%2BzTl1Szbe39%2B%2FENok6cNBng2ouQ8nw41j9HEJqY6QJNOy%2F7oEGGocb4cBqo1ol0BbtRMKC0o8MGOqUBfPDNoz2M3tRyJs7fZ1tDtWAtjy8G2fbV0ZERtajdzPqHE9%2BZtBD0iwnmo226iGXNH9mOTYKCIQtrgVT7B3%2FdVwmB8sD4fkO7hXmZLsV8RAb12ABKd8ih2FyikH%2FSNBcwzkBIWmqqLHO8JU1GW3RtLrkhnLUleAEXIeIWG4cSnrVJbN0dkqsHZ6siSLLxhk8X2EuSVeOdID53KmRKGurW%2FzUySiui&X-Amz-Signature=c56ddb3a51302e197c372500cd8816325af3955c0ac1047e998c4d8c0c8fb51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
