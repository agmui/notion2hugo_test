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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKON6F5P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDZ0K8DJutng3tBTVHLDsUbM1dO26i0ElcMPdi4kBzmlQIgZUBTZkglmbGtRidCx%2BSD%2F2JKdvIwdUlbT2pTHF5crtkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4xOLM8nO4SFniGdSrcAzlQ6Npm0nMLXY7D8WavAAt7yCfQw3VPUKn9jO5mfUE4R6GWelRb4wZoGv461mazmu2NCpmPSsXh7tdtcJPHqOY2AMYrSZ%2Blfn7qNoObvm3CFn9gb%2FErKpMZVqOddsr9qKvwlVY7FXhFgkBtRr0RsO4SDVi6VUFxLPfVLqKBUZ6gEqqpwkLXaW3O3zJwbLj1Paz4iH%2FJFbv5KmFJutRuW65NSI6XpbHK0ppK2vyqA17ddqe%2FIprMzrKHHasdpFw6PKPUkrYF758alV6ZcbQsx%2BtqskVTKQUWh0wz1jwjs7PjhvCb00w6kCgGd%2BbsPyfs4VKfbn88j9IO6FXVe14857CcCzqFlIBiocyTGObt0Cya50rB%2FKGZl%2Fs4jPot7RIjZ05d5eEND5abF8DrmjZtRxnws2zrJyVKvCr70%2FsUpk%2F07w6%2BhTf2xsjcpYI2nGbOU2lmatAo829XxdSUJtrkGvSpL1GtuUDXpfG5nGBicVRPZD158hnvSM8f70Oahgg7n1K%2F2QX0Xf6KmaGRGcqDJu5XvQ7OxIk%2BbMgXT6ZLCpIn9uG%2Ff%2Fx%2Bx1WPl2kiUOQFhgkbGN6UO3qADpUJeAD%2Fblqmtyw1gnPjJRLNgVlRuD9UEdivro1HGkQxDND8MNCn7r4GOqUB0PypR75tbLoSFGLHziG22GbUuMvyWWBZ452axHb4FPexxpqbrtzu4OtC07ue3m4ejFlR6ikglBr%2F1oI2Uq%2F2IzE70V3IksUFbXUVB2FOG34j%2BecS%2FETwJdjkCZ8%2Bn1cYhPIp4N6poEN5dgM5mBs9xfDX12YDj25FTjX86MKTp%2Fr2bSGtOHO8k025yPIjuzqbvJHo0fUsiXP1AZnWvTVAQxz1z%2Bz%2B&X-Amz-Signature=355722ad9531dc658c3e60ff9d6235a7f424c40f22ddb6d71be12bd4e9f8ea78&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKON6F5P%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDZ0K8DJutng3tBTVHLDsUbM1dO26i0ElcMPdi4kBzmlQIgZUBTZkglmbGtRidCx%2BSD%2F2JKdvIwdUlbT2pTHF5crtkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4xOLM8nO4SFniGdSrcAzlQ6Npm0nMLXY7D8WavAAt7yCfQw3VPUKn9jO5mfUE4R6GWelRb4wZoGv461mazmu2NCpmPSsXh7tdtcJPHqOY2AMYrSZ%2Blfn7qNoObvm3CFn9gb%2FErKpMZVqOddsr9qKvwlVY7FXhFgkBtRr0RsO4SDVi6VUFxLPfVLqKBUZ6gEqqpwkLXaW3O3zJwbLj1Paz4iH%2FJFbv5KmFJutRuW65NSI6XpbHK0ppK2vyqA17ddqe%2FIprMzrKHHasdpFw6PKPUkrYF758alV6ZcbQsx%2BtqskVTKQUWh0wz1jwjs7PjhvCb00w6kCgGd%2BbsPyfs4VKfbn88j9IO6FXVe14857CcCzqFlIBiocyTGObt0Cya50rB%2FKGZl%2Fs4jPot7RIjZ05d5eEND5abF8DrmjZtRxnws2zrJyVKvCr70%2FsUpk%2F07w6%2BhTf2xsjcpYI2nGbOU2lmatAo829XxdSUJtrkGvSpL1GtuUDXpfG5nGBicVRPZD158hnvSM8f70Oahgg7n1K%2F2QX0Xf6KmaGRGcqDJu5XvQ7OxIk%2BbMgXT6ZLCpIn9uG%2Ff%2Fx%2Bx1WPl2kiUOQFhgkbGN6UO3qADpUJeAD%2Fblqmtyw1gnPjJRLNgVlRuD9UEdivro1HGkQxDND8MNCn7r4GOqUB0PypR75tbLoSFGLHziG22GbUuMvyWWBZ452axHb4FPexxpqbrtzu4OtC07ue3m4ejFlR6ikglBr%2F1oI2Uq%2F2IzE70V3IksUFbXUVB2FOG34j%2BecS%2FETwJdjkCZ8%2Bn1cYhPIp4N6poEN5dgM5mBs9xfDX12YDj25FTjX86MKTp%2Fr2bSGtOHO8k025yPIjuzqbvJHo0fUsiXP1AZnWvTVAQxz1z%2Bz%2B&X-Amz-Signature=f3325eab59b83e6cea2a4284477c8b0f28dc89688553d01cb587b4b5b81c0905&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
