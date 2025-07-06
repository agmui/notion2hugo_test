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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7S234R%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDOWI3Hlq0CB%2FpJjtDv2iBUcfjFOwpp4jGUxUsSPnp2tAiBaN7ihEgwkQolkcaFODR3cSzEK6mmgbVQco8ZYydHDVCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM4yS6VwF72FdsklXhKtwDI36rk2YYjKpZrBfuOoAFsZh7ndwCL1gvSOGyot8XIZLFq0CjbieRwnhvY8nVENQaa16mKNAXybH2eQ%2F4hVQ17GCUf9F4BhtIxs0CkEYxIhYYFWqvXp27h8Mw5Rj0%2FnDO7wGKW1FASkvdSbsXd6lpNviymizrqgD7LQDwqEnV3teVm31nra4r0TS%2Bg1QPbdoOzb%2FTYmebxMaLfYQwP7Il9SQjQabyAVzXjXxytNR4YgayksQ8GDGRA9KS%2FTS1NGm95O0STZ%2BQ%2FGqo46%2BtvmHYilJcS%2BstgEPOFlcjEQ4hZ5s4pEQU%2Fg4HuiVkr0V7acN0cn9nd66Y%2BUsht255q6BjsjpORd%2BReXiAzCGpSnmwqIggmBEW3YW7yklHoIvN4ry5tqdmLYYqy%2FUOXbCkTbAohjtYP%2BGNkry83jqewhQhfaAr6UDwm2ekqECMFrCCwLDX1TbZBfslVlmIbX4Xjkws15QH9g%2B4Gc0zgYipYgybW5cN2wwiG8GydIbnynqk3JfMXEQxTL4qkZi4d3aUcXfmT42cUQSsInGxowWOxchIwJ0myOH3R9ZSbU%2FJZz4XVSZ0xpDq86M6%2FP2QE1JHu3Zr8PFMUEjr4MZy%2FqKfCMbO2YPMGAaCZ9czKqbkzHAwutOpwwY6pgFkAWqGmiellqoj5Jo5F3DyYs%2FwHQ06GL3XrQcxLhf%2FVCIqhsn%2Fu0%2BuGX7odl1sybjj9TgrgxfocC7OekVElx4TN%2F5FvwCCWegEBLEdoNQTSm800hHeWW2D0L1n6DsDpfOgxkOOh9oZOpIPBVdbrQG%2Fg2KkveGtW%2Bnlv3LBy868n13VAmJGjTDPcCctZKjjTpvmhUMPOodwmYhBtvOPwD4hq5H4P3bD&X-Amz-Signature=4290df3280d0b4da35fe0c900a31b8a2efbedad7fee8a994c57ccdbf63bc3d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7S234R%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDOWI3Hlq0CB%2FpJjtDv2iBUcfjFOwpp4jGUxUsSPnp2tAiBaN7ihEgwkQolkcaFODR3cSzEK6mmgbVQco8ZYydHDVCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM4yS6VwF72FdsklXhKtwDI36rk2YYjKpZrBfuOoAFsZh7ndwCL1gvSOGyot8XIZLFq0CjbieRwnhvY8nVENQaa16mKNAXybH2eQ%2F4hVQ17GCUf9F4BhtIxs0CkEYxIhYYFWqvXp27h8Mw5Rj0%2FnDO7wGKW1FASkvdSbsXd6lpNviymizrqgD7LQDwqEnV3teVm31nra4r0TS%2Bg1QPbdoOzb%2FTYmebxMaLfYQwP7Il9SQjQabyAVzXjXxytNR4YgayksQ8GDGRA9KS%2FTS1NGm95O0STZ%2BQ%2FGqo46%2BtvmHYilJcS%2BstgEPOFlcjEQ4hZ5s4pEQU%2Fg4HuiVkr0V7acN0cn9nd66Y%2BUsht255q6BjsjpORd%2BReXiAzCGpSnmwqIggmBEW3YW7yklHoIvN4ry5tqdmLYYqy%2FUOXbCkTbAohjtYP%2BGNkry83jqewhQhfaAr6UDwm2ekqECMFrCCwLDX1TbZBfslVlmIbX4Xjkws15QH9g%2B4Gc0zgYipYgybW5cN2wwiG8GydIbnynqk3JfMXEQxTL4qkZi4d3aUcXfmT42cUQSsInGxowWOxchIwJ0myOH3R9ZSbU%2FJZz4XVSZ0xpDq86M6%2FP2QE1JHu3Zr8PFMUEjr4MZy%2FqKfCMbO2YPMGAaCZ9czKqbkzHAwutOpwwY6pgFkAWqGmiellqoj5Jo5F3DyYs%2FwHQ06GL3XrQcxLhf%2FVCIqhsn%2Fu0%2BuGX7odl1sybjj9TgrgxfocC7OekVElx4TN%2F5FvwCCWegEBLEdoNQTSm800hHeWW2D0L1n6DsDpfOgxkOOh9oZOpIPBVdbrQG%2Fg2KkveGtW%2Bnlv3LBy868n13VAmJGjTDPcCctZKjjTpvmhUMPOodwmYhBtvOPwD4hq5H4P3bD&X-Amz-Signature=15afdbd878c54b46a9c3989f25544a6736d78538bd2f2fa8b3785a330b44e024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
