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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M42J4K5%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAmYdka%2BvG71B0AVZ0dT7xZgcAE3NXtzGeowPK2Ahs%2BgAiA1g1Puxaci2ApoJzJgbDs8oCLWWW%2B8T%2FAqMwUPZw8ZEyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVu2HLIau8vZyjGN8KtwDteDCpkTdofB0O4ZAiDRw6sd19BL9QEQRwAvTrnxXiqAWpoBp40aEVEPeSt7QGWjengytOLVsVZVfHJWr%2FFb6Bv4%2BaHxIvu3AOppNaoqPg8rR%2BruopxqmIpy3Rg3lRMq5i7o%2FcLgiN6i9%2Fr7Qz1zaWVOApqrp0neUnVY5kPsDx6KS0hQBHq3AqHZWPNvnZx7tdq7GbcWi%2Fqs70o2NeucGZ5GV9Y6n3bW3%2F7tGLvLWhqjrjdkk6R3MSX1LQFJ46gtzUleuO2S2d0QYznjGoSVVlGvD87wGTA25B2rFXM6A3qFIsAmBOb1jNSHAyFiFbqHF12gx4kZ2zBXfyAeWrMoBf1rOvFmIXu4g3l9ZIDTH3wm1MztbgT2Ub89DutDr7MLaQFZ0N88dpNbR3LXdJRVBHeanAu%2BT71DkunLjUKDujV8Da5KhR4SWDIpxFZIKe4ssCXLq7LM249SvqTm3nKG%2FkHXrNDBR71CDd4pMS%2F5JdJZsBr%2F0BSQo6yXZfHyZOj1FMlSIXQapiy6oiRXyRTbJU9pGvfCzTWL36cVGtmFjUffwclG5zSor6%2FyLRKovfPapUO9wjKoBpAkjFX4tjfCFKvTgHhr1zpL%2FGzt5a%2F4FpBKX19xCbbLu3Rt6O78w5%2FznwwY6pgE9TYy%2F6I4PcOft8bhqBpvOFs8VJPhx7rCxXJ5UH42xzUn0hlDyF6qfJV1MrmbhAcIcTiuwaazy4t1pCBiEV62nfREviGdIQQvwTA1YIKo0th84ojMu6N2ucfSHYoFxkquX6bQHWbo1MfD%2F17PXEmK0GIL0PBeGrLT%2BhK7wbPy7R23deLHnMa%2FSn%2FiyKGYwu%2BFmY%2BjL4JRW%2BnRvXz%2FRHYEssFL1W0T7&X-Amz-Signature=8be8b4c206b171ea0a72a33a683027cd94b29bb04296f36f2f5a0bce82365bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M42J4K5%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAmYdka%2BvG71B0AVZ0dT7xZgcAE3NXtzGeowPK2Ahs%2BgAiA1g1Puxaci2ApoJzJgbDs8oCLWWW%2B8T%2FAqMwUPZw8ZEyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVu2HLIau8vZyjGN8KtwDteDCpkTdofB0O4ZAiDRw6sd19BL9QEQRwAvTrnxXiqAWpoBp40aEVEPeSt7QGWjengytOLVsVZVfHJWr%2FFb6Bv4%2BaHxIvu3AOppNaoqPg8rR%2BruopxqmIpy3Rg3lRMq5i7o%2FcLgiN6i9%2Fr7Qz1zaWVOApqrp0neUnVY5kPsDx6KS0hQBHq3AqHZWPNvnZx7tdq7GbcWi%2Fqs70o2NeucGZ5GV9Y6n3bW3%2F7tGLvLWhqjrjdkk6R3MSX1LQFJ46gtzUleuO2S2d0QYznjGoSVVlGvD87wGTA25B2rFXM6A3qFIsAmBOb1jNSHAyFiFbqHF12gx4kZ2zBXfyAeWrMoBf1rOvFmIXu4g3l9ZIDTH3wm1MztbgT2Ub89DutDr7MLaQFZ0N88dpNbR3LXdJRVBHeanAu%2BT71DkunLjUKDujV8Da5KhR4SWDIpxFZIKe4ssCXLq7LM249SvqTm3nKG%2FkHXrNDBR71CDd4pMS%2F5JdJZsBr%2F0BSQo6yXZfHyZOj1FMlSIXQapiy6oiRXyRTbJU9pGvfCzTWL36cVGtmFjUffwclG5zSor6%2FyLRKovfPapUO9wjKoBpAkjFX4tjfCFKvTgHhr1zpL%2FGzt5a%2F4FpBKX19xCbbLu3Rt6O78w5%2FznwwY6pgE9TYy%2F6I4PcOft8bhqBpvOFs8VJPhx7rCxXJ5UH42xzUn0hlDyF6qfJV1MrmbhAcIcTiuwaazy4t1pCBiEV62nfREviGdIQQvwTA1YIKo0th84ojMu6N2ucfSHYoFxkquX6bQHWbo1MfD%2F17PXEmK0GIL0PBeGrLT%2BhK7wbPy7R23deLHnMa%2FSn%2FiyKGYwu%2BFmY%2BjL4JRW%2BnRvXz%2FRHYEssFL1W0T7&X-Amz-Signature=3f7008f1602a284eff132f79767b247f678bfbe01d983dce1409ab185a257043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
