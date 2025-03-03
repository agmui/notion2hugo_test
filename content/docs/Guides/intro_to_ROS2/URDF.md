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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVJH3HV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm%2FLtx8K4mAzKTgcMIIQtaVjBp4eE7HtAXVTsPztKV6QIgQ5Z14tUppLeoX5v0DJJmvOeA2%2BKchOoMTi%2B7CXy6jx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIOxgnAt4Ob9GMdsCrcA3RAlGU7pak9zxHCn5bbs%2BM2mnJEzEoU5cUm1NwSEHLsK9un8fipFWg2bFvBawjyZl8kz%2BbnaLWoJbTrV4VQ7UXdxkSctfZSqUOOuQui1%2FLjR2jLUPF4OyspNMyNimpztzsth2Qx87j2JiSzgTYBgbC1L8WZI%2BJLO7%2B0T7VawVVQ6djq7KQzQr21RpuPg91LxHJrJv0nuswQ2i6cuhIl15S91ejH0VaX%2FaHTSqshNnuh0ZnISRJxNJTMOvYJkkUT7HMnVBfVXUcz6IKe7UezxXzNYY1j24oO4rSvEgZ7lJ6Lb1x8MUoTyUEevHkP0MS%2BJHX6vx3ub8EM%2BaMtGaLTkugxZBWoZXMmG0jRkgNj%2FvqpmNLWyEb6UaBXza4GMfQOe6NuF2%2F1suh0sXW979wL1%2F9TB9JWNYxrlfp%2FgC%2FhHW09rHfYCsxk9PnMZy9B8dWk5IUAwadxyqLwPgXk4eAxWwThnjWGgW05rVfdFPZ7oa8zv9iuT%2BCfuhpNBCdn%2FirpSX4QvNne5KpFbVeHlSyBVwH6Yn22r%2B3J%2B%2F%2FvFjHpdYccTVhJPsIhE1q5VBKXDjgSsm9%2FQIAq1qyqbMG2wTRGbWIfoLJiI8DrZHB7Rj0Kxn9ulvxymWPEAXmgjIgAMKD9lb4GOqUB6s94bKNkk%2FR6yribbbf4lMqpCTSDNKPA37RgtIKkFks%2BnVyWUNVy2pbIfLxB82dql6saKT6Uo3tlwjtaV%2FmXsc0SAe6OhExMVHY1X3hnwfHQSegX8A2sXOx9lVlLWgzgb2OC7HOnxo2kPFUXukmFeL37dL5Hxhv0l0DLlZ2Q9u1YSLE68bbbTgiNMN1SruZ5sh%2FES9Lbg9qG859w4foAqbqU1PZ5&X-Amz-Signature=3b27000af2b23996e9ea219df58fb8d359bbf050bb04d086ddf14d68a7a61736&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVJH3HV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm%2FLtx8K4mAzKTgcMIIQtaVjBp4eE7HtAXVTsPztKV6QIgQ5Z14tUppLeoX5v0DJJmvOeA2%2BKchOoMTi%2B7CXy6jx8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIOxgnAt4Ob9GMdsCrcA3RAlGU7pak9zxHCn5bbs%2BM2mnJEzEoU5cUm1NwSEHLsK9un8fipFWg2bFvBawjyZl8kz%2BbnaLWoJbTrV4VQ7UXdxkSctfZSqUOOuQui1%2FLjR2jLUPF4OyspNMyNimpztzsth2Qx87j2JiSzgTYBgbC1L8WZI%2BJLO7%2B0T7VawVVQ6djq7KQzQr21RpuPg91LxHJrJv0nuswQ2i6cuhIl15S91ejH0VaX%2FaHTSqshNnuh0ZnISRJxNJTMOvYJkkUT7HMnVBfVXUcz6IKe7UezxXzNYY1j24oO4rSvEgZ7lJ6Lb1x8MUoTyUEevHkP0MS%2BJHX6vx3ub8EM%2BaMtGaLTkugxZBWoZXMmG0jRkgNj%2FvqpmNLWyEb6UaBXza4GMfQOe6NuF2%2F1suh0sXW979wL1%2F9TB9JWNYxrlfp%2FgC%2FhHW09rHfYCsxk9PnMZy9B8dWk5IUAwadxyqLwPgXk4eAxWwThnjWGgW05rVfdFPZ7oa8zv9iuT%2BCfuhpNBCdn%2FirpSX4QvNne5KpFbVeHlSyBVwH6Yn22r%2B3J%2B%2F%2FvFjHpdYccTVhJPsIhE1q5VBKXDjgSsm9%2FQIAq1qyqbMG2wTRGbWIfoLJiI8DrZHB7Rj0Kxn9ulvxymWPEAXmgjIgAMKD9lb4GOqUB6s94bKNkk%2FR6yribbbf4lMqpCTSDNKPA37RgtIKkFks%2BnVyWUNVy2pbIfLxB82dql6saKT6Uo3tlwjtaV%2FmXsc0SAe6OhExMVHY1X3hnwfHQSegX8A2sXOx9lVlLWgzgb2OC7HOnxo2kPFUXukmFeL37dL5Hxhv0l0DLlZ2Q9u1YSLE68bbbTgiNMN1SruZ5sh%2FES9Lbg9qG859w4foAqbqU1PZ5&X-Amz-Signature=7287268f9df57d2fc17b5dd6453bbe66a6d8eff385ff3dce247f124701881a54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
