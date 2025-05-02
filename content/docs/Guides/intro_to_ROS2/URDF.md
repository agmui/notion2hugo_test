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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDSPACK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIBhCfs8GEu47IXY4lnnF3YAFwVyVPEfS3hdf7bcKcnu%2BAiEAwhbChsNje0D44%2FLt6dUcRlMOsvGoMQ3QedgPJ7xWDf0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxFs0gzEF2QOg3MDSrcA4TSWjceqfdx%2BiZwNaznoYEmKy27gIVWilBZvSAFD14qq%2B0sX8XWTmxXXnmFKkhpuAXoJYx19zNGov1%2Fg2VJrHmczhv99RP0aX0a09M1elYCrTYarCZoJ9xapq777VUm1LE%2BGi4DTk1Tp%2F690HiQYH7PAEKf27F0LMYeUGQl2qcP%2FWUwo%2F7o2PMKFOBHcRL2bQD6HEpSGNyTkEZ0jWPpKK9YrmAzBxQfvMC%2B1c8Vpt1I%2FC8dsG0ZWkz50vaCjNCZQeJVZVDUH9GzykHJ04EzT5FBHmBeGK72k6ZEaDZPdHK9dfrOPbIQzLqlrlCCeEE8YNbnj9eMuhE8yyXgkYmIwFQ81MVppSJ7AdWKSdUhKTXuRnadOuebPWeogUEGIP%2FT8RyDvPjl4W7jyRLCc7e26ek9XOX5p%2FpEdwVCC7KKKyM4xTlk32B3KgSthCi2hEGMymIfgwH6H40mNhVoKEU9btMihH47S4UT5%2FNyAVxwlv2noTOqAjxdZEQbeQb9eusVBqaEY2Gk%2FLrxQPgjaejtDcZv7cOijRJWD6BaO7NNMnclGhgbs73W77QUHiisV6j%2BMAQtFxQn%2BmsC7m15hud4BNszVI6ihYm7tEyFqhjsbiLMjih211qlrK0QkSn2MNTk08AGOqUB1Bj%2BGB5%2FxWuMkaOmEgb7eN0mElAiW5joY3Q7BWL4wUng5%2BFqgUjIaNaHNiT5m5fa7%2BfGLIU8NaQCFn8sy9e%2B%2FrsoIP4j%2FVcWozjr7vmCR%2BT5%2BvHiEZ2QIlTWAXK4daVivSYdOV68ul2tJOCcZij0K9ummL1BCLRLZjk0n8NVmZlwPSi8dz6I4ZqZCF9FaYVfwBhHMF4TVPd79JBTPPiksMOpXo9V&X-Amz-Signature=369592e323b06e6cf6614f986f85d471757d6e6c9585097895a04fa287814ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDSPACK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIBhCfs8GEu47IXY4lnnF3YAFwVyVPEfS3hdf7bcKcnu%2BAiEAwhbChsNje0D44%2FLt6dUcRlMOsvGoMQ3QedgPJ7xWDf0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxFs0gzEF2QOg3MDSrcA4TSWjceqfdx%2BiZwNaznoYEmKy27gIVWilBZvSAFD14qq%2B0sX8XWTmxXXnmFKkhpuAXoJYx19zNGov1%2Fg2VJrHmczhv99RP0aX0a09M1elYCrTYarCZoJ9xapq777VUm1LE%2BGi4DTk1Tp%2F690HiQYH7PAEKf27F0LMYeUGQl2qcP%2FWUwo%2F7o2PMKFOBHcRL2bQD6HEpSGNyTkEZ0jWPpKK9YrmAzBxQfvMC%2B1c8Vpt1I%2FC8dsG0ZWkz50vaCjNCZQeJVZVDUH9GzykHJ04EzT5FBHmBeGK72k6ZEaDZPdHK9dfrOPbIQzLqlrlCCeEE8YNbnj9eMuhE8yyXgkYmIwFQ81MVppSJ7AdWKSdUhKTXuRnadOuebPWeogUEGIP%2FT8RyDvPjl4W7jyRLCc7e26ek9XOX5p%2FpEdwVCC7KKKyM4xTlk32B3KgSthCi2hEGMymIfgwH6H40mNhVoKEU9btMihH47S4UT5%2FNyAVxwlv2noTOqAjxdZEQbeQb9eusVBqaEY2Gk%2FLrxQPgjaejtDcZv7cOijRJWD6BaO7NNMnclGhgbs73W77QUHiisV6j%2BMAQtFxQn%2BmsC7m15hud4BNszVI6ihYm7tEyFqhjsbiLMjih211qlrK0QkSn2MNTk08AGOqUB1Bj%2BGB5%2FxWuMkaOmEgb7eN0mElAiW5joY3Q7BWL4wUng5%2BFqgUjIaNaHNiT5m5fa7%2BfGLIU8NaQCFn8sy9e%2B%2FrsoIP4j%2FVcWozjr7vmCR%2BT5%2BvHiEZ2QIlTWAXK4daVivSYdOV68ul2tJOCcZij0K9ummL1BCLRLZjk0n8NVmZlwPSi8dz6I4ZqZCF9FaYVfwBhHMF4TVPd79JBTPPiksMOpXo9V&X-Amz-Signature=76655eada5cf6a50073dfb425cd368eaafcfec3fa00f1e7c9bddb29c650bea0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
