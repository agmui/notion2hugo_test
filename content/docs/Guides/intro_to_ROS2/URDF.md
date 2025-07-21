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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQ5X5LZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbSFqcLg4SA1RV4FYrMNBfygZrX7FM%2B%2FpXWkCVORmTgIgRVurUYdTnJdPc6adiUK0KmZmBTwQvhHc5zrNH62SowcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ8Le8DCWdP%2FSwkUSrcA%2FjUELbJBZ5Vcy4BEAR1LBglPG8rNTRlltXrvmGz1VFKcKjA%2FNYrpO2Ne9nRx9PGTDsfgJRkULHI8tM7UhenTtaO4C2gOwhS75NGLfK6wfm%2BhF2myXr%2FPipC%2FpsFWXRtrsCH2U86OO3N5mnktqlKP03mYhRmXbMPXR%2BVnU8nyegs25XEu%2BPt8ZKiQdFzO48J4HMH0OhQCdKCka76hdqzQatpsWdGumFQsihR%2BFeztGagTDO51SIWK%2BHQO%2BY4csE00%2Bjz48X%2BJiifQP25X8ZEuKGeYlwmxl8Za%2Bxcox7hErlB7hSAvEEN%2F97aWrZA6r2Km9%2Bqr93v8zOfnWR2QNGYTP99bLt0c8nvBqZGH%2B%2FFRII9yAyhpeRGWS901phkIspafnu0ZW%2Fa3QsePsHuemtQs8JK9a2S8EofeSiO9xv%2Fux2aK5gblJzsNbJ5HZhrxNHwUgqfQcahVVGH9RX4MBG5d9Wf8hTeqiz5O5nRKHpNnmMCaTild66kDEkQhIQqk8eLDDYWgep%2BBlRe71OTS8B8jTkH0rsPqtBjZcj2UvVFNAdibnSVCELTPtsxr2Ex1KpZyGOL5SQzkw777ODZSIT1RsMCofCOSDuEhEGG7SlPfzySFf1kGxOWVItpC9%2BFMPHI9sMGOqUB6O1uXdGcnXYO%2F5ZcWAv9QZM9%2FVYh7zFWpm6HA8hU9opZTsNbjMiZTodeOicJ0WyieOoMfpBJYz%2FkpXk%2BTiYOLksjMBeT1Sf%2FQcXb2bne%2FajbXWKyBITdAJLviwlLA%2BaSlQ8in3VQxO9lg%2Fxqd3DZkaExNuYOYi3Okq47m9d76lsamtO1SxhzLuYBUwEgh2WT8rTxjoHn0eaQoYKRKSre%2FA3xEZP7&X-Amz-Signature=88085a163ed586e896cf2713b108faf8c0a0ff339440ef1be8c1c637fb8d33be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQ5X5LZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbSFqcLg4SA1RV4FYrMNBfygZrX7FM%2B%2FpXWkCVORmTgIgRVurUYdTnJdPc6adiUK0KmZmBTwQvhHc5zrNH62SowcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ8Le8DCWdP%2FSwkUSrcA%2FjUELbJBZ5Vcy4BEAR1LBglPG8rNTRlltXrvmGz1VFKcKjA%2FNYrpO2Ne9nRx9PGTDsfgJRkULHI8tM7UhenTtaO4C2gOwhS75NGLfK6wfm%2BhF2myXr%2FPipC%2FpsFWXRtrsCH2U86OO3N5mnktqlKP03mYhRmXbMPXR%2BVnU8nyegs25XEu%2BPt8ZKiQdFzO48J4HMH0OhQCdKCka76hdqzQatpsWdGumFQsihR%2BFeztGagTDO51SIWK%2BHQO%2BY4csE00%2Bjz48X%2BJiifQP25X8ZEuKGeYlwmxl8Za%2Bxcox7hErlB7hSAvEEN%2F97aWrZA6r2Km9%2Bqr93v8zOfnWR2QNGYTP99bLt0c8nvBqZGH%2B%2FFRII9yAyhpeRGWS901phkIspafnu0ZW%2Fa3QsePsHuemtQs8JK9a2S8EofeSiO9xv%2Fux2aK5gblJzsNbJ5HZhrxNHwUgqfQcahVVGH9RX4MBG5d9Wf8hTeqiz5O5nRKHpNnmMCaTild66kDEkQhIQqk8eLDDYWgep%2BBlRe71OTS8B8jTkH0rsPqtBjZcj2UvVFNAdibnSVCELTPtsxr2Ex1KpZyGOL5SQzkw777ODZSIT1RsMCofCOSDuEhEGG7SlPfzySFf1kGxOWVItpC9%2BFMPHI9sMGOqUB6O1uXdGcnXYO%2F5ZcWAv9QZM9%2FVYh7zFWpm6HA8hU9opZTsNbjMiZTodeOicJ0WyieOoMfpBJYz%2FkpXk%2BTiYOLksjMBeT1Sf%2FQcXb2bne%2FajbXWKyBITdAJLviwlLA%2BaSlQ8in3VQxO9lg%2Fxqd3DZkaExNuYOYi3Okq47m9d76lsamtO1SxhzLuYBUwEgh2WT8rTxjoHn0eaQoYKRKSre%2FA3xEZP7&X-Amz-Signature=295e20b78f1605ed3d88d3fc2ee049588a91ea2adaf69ad89832c2aae39b3400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
