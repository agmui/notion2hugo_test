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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYWAMXGA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA81fnDyAGBhZbAAjbFoXJvIPobF2L2BsV2PIdTTRN7IAiA3%2BRo8jSPAfcFUIJDBPIHfurWjFUA8C35d0Ztg7RAROSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDyCC%2BgDrKGGtYZe5KtwDrKk5ocAUgawu8%2FQOiQrP0%2FJjRLZQwV7ronkZyabgBvecLORpF%2BRgxaxGWDASodEhZYzBQB46o%2BX7DFDEAlTbPW2h2Sr40evRuzUDi2%2FRVwbUGLXpX3a%2Fw9chqOXKKqohXwkgx1rzZ6208T8ATB%2BXDCbFmCte9R8VRmNkuFNt8D%2Frjw1hrhSY3F0O7Z8h6%2F7XDdKjn%2F5Ly%2F2V5FK%2B4OUQc%2FvKZTv%2FEk%2BVDgbnWXPhMK6Y4Q0bK%2Fl%2Beq8OQHLdiCDspQM5%2Fl1WdsFxr%2F2kPQWkzT8qVbMfdzL%2FvqseK2TJsijvCZGyBkly3PHKdE4fMAGHAEoOt9kHo1fWb7pWY29D26asArMU73hQ77Zkx7RNQb%2Fwbq%2FsVJkYXDGTyH%2BK%2F8jtjMXvJPGg50YrS%2FR5iMcpYUqP0aYP83dpnPUOI6my6c4shBeuZ%2FjxdF9FP4EMoQMG29FX6cWEiNVPy2UJqTrkQrmAaBd4SDzkGczROI92gi6S8LJtd2iXN%2BWMWN8v1qW%2F3a0MP31szCAYLW0G%2F59jTEVDepSdBs1L%2FgDQH2xXcrkUxMsLp6%2BjjLaTPna2KR6AZeEGggvmr1ZMkP%2BFG2qB4CKqdPilLzdNFiynvxy7E2uhz89TgFBjeMA6Fb8w46v5wAY6pgGNL%2F0vgBJcAK9ggLFXTzF4X0gwH8wPvyTOZJPWEVnQI3P8SYTc40fgyA0go7wR7z93MGm1PqHuy86voLwIB4jRxpOHqYoAoWfdkVVXYVqTRuBOUi10ZG8MPi9UzEVlFNumGLQcm5Xt5Hrm9PxhR4OZkyIEnBsGlpHFUy%2F96sZ6xBWFpjILkZnu%2Bg5h28YhfRFdeokhLC1FMcDoTYe4h5RBeE%2BRPpPQ&X-Amz-Signature=95723a55248eacf33e8c14039ccc3bcaedcb9783044016f7ad42645a6ac006c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYWAMXGA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA81fnDyAGBhZbAAjbFoXJvIPobF2L2BsV2PIdTTRN7IAiA3%2BRo8jSPAfcFUIJDBPIHfurWjFUA8C35d0Ztg7RAROSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDyCC%2BgDrKGGtYZe5KtwDrKk5ocAUgawu8%2FQOiQrP0%2FJjRLZQwV7ronkZyabgBvecLORpF%2BRgxaxGWDASodEhZYzBQB46o%2BX7DFDEAlTbPW2h2Sr40evRuzUDi2%2FRVwbUGLXpX3a%2Fw9chqOXKKqohXwkgx1rzZ6208T8ATB%2BXDCbFmCte9R8VRmNkuFNt8D%2Frjw1hrhSY3F0O7Z8h6%2F7XDdKjn%2F5Ly%2F2V5FK%2B4OUQc%2FvKZTv%2FEk%2BVDgbnWXPhMK6Y4Q0bK%2Fl%2Beq8OQHLdiCDspQM5%2Fl1WdsFxr%2F2kPQWkzT8qVbMfdzL%2FvqseK2TJsijvCZGyBkly3PHKdE4fMAGHAEoOt9kHo1fWb7pWY29D26asArMU73hQ77Zkx7RNQb%2Fwbq%2FsVJkYXDGTyH%2BK%2F8jtjMXvJPGg50YrS%2FR5iMcpYUqP0aYP83dpnPUOI6my6c4shBeuZ%2FjxdF9FP4EMoQMG29FX6cWEiNVPy2UJqTrkQrmAaBd4SDzkGczROI92gi6S8LJtd2iXN%2BWMWN8v1qW%2F3a0MP31szCAYLW0G%2F59jTEVDepSdBs1L%2FgDQH2xXcrkUxMsLp6%2BjjLaTPna2KR6AZeEGggvmr1ZMkP%2BFG2qB4CKqdPilLzdNFiynvxy7E2uhz89TgFBjeMA6Fb8w46v5wAY6pgGNL%2F0vgBJcAK9ggLFXTzF4X0gwH8wPvyTOZJPWEVnQI3P8SYTc40fgyA0go7wR7z93MGm1PqHuy86voLwIB4jRxpOHqYoAoWfdkVVXYVqTRuBOUi10ZG8MPi9UzEVlFNumGLQcm5Xt5Hrm9PxhR4OZkyIEnBsGlpHFUy%2F96sZ6xBWFpjILkZnu%2Bg5h28YhfRFdeokhLC1FMcDoTYe4h5RBeE%2BRPpPQ&X-Amz-Signature=71875b6c7a7917da790e2b58c25d9af3223010b6f663eecefe1e1fbd9ac3d9df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
