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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2657H5U%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBUqvb4qkxBGiTUYtal6hwXkOSmMnlHZ1w7YLmU4GCrCAiEAvci8BcA3wigu4O0rEMqOGWv2K8indknma6NNREPg%2Be8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHFLqF6asldoVpOVCrcAwGwytZOc5wJhlG73vk%2FLFA68dOWyL26OUkEZf%2FdSeKsz5psTC2a3ndw3uNoCR7ceRg%2BSCLlnu5nIBuPLRRc0e1wpPxCgSORagydtT02kHWYzvIdBMjPwIrAtVfJIzshKuZ6%2BrWqP27I0DsIUNPt5eJ8LQzM6FzGBIxQ6sw8rOSLqFx9BM6EiXRbR7HevDzKKFtcPGnbonfj%2BGEzcFFarHVVQTPpFIEm1vPwWsCXNnIVyp8A2D3FgBtL9urhyOjg1KTjKPFWwh4I1kXukKEz1jdSs7fBGI6cVRM%2F8rFmfw6EVZMLJXpb4Mgqjgdjx%2FBKXFCsCrJb%2FsgDBHtA7RVqKWANyN4Pk24KRRzidKp7CuD4c74Au31cSYhrlgGszyd%2BcJS%2FdAN7Ze173qcv5JF2nppEgamHU1JNGk7AhoWOLPa8kW%2BrY281HO1lG8SqKccl%2Fhf03wGTtMN3fHG5dQY1ASi88tAwjm9kyPtLwnxYeP%2FLY2RScUvmz6SFMQv06cRVfP%2FyLanNl1CGjKSbpkGm%2Bcj6yHCQIGiP4ryW4PPQOvGIvO5zNfysbJ%2BxAP8R5mVLWdQjMHpamfSXS4Z40xfRXYxfzclhz3UDY%2FLmqXdCWwtaat3TXLH0fatVK%2FPxMJLUmMAGOqUBHOC5X1QeV13158p9nPbEMp7%2FDfMVnfDLNsVYs4flBBmY0ym%2Br0Dtk4hSS1J4X%2FP9RXDp0OBvgLbU%2FKSECzIknmkVE%2BQeFjzmq1dBryN4z69qEdvnE4ojGRVLs7DxeYYcfXYGBdoCDz2SkjRZGXe9u6X25xGdyC4WmeVNmA7RcI%2Foy0LOwHrqL5XH67L35IJC%2BJ%2BZQESww8rCPpk%2B3RouiG4pj1fU&X-Amz-Signature=4c40ede8d1be41b2608a9d09b8574d034de482cae14838784995730958f93772&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2657H5U%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBUqvb4qkxBGiTUYtal6hwXkOSmMnlHZ1w7YLmU4GCrCAiEAvci8BcA3wigu4O0rEMqOGWv2K8indknma6NNREPg%2Be8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHFLqF6asldoVpOVCrcAwGwytZOc5wJhlG73vk%2FLFA68dOWyL26OUkEZf%2FdSeKsz5psTC2a3ndw3uNoCR7ceRg%2BSCLlnu5nIBuPLRRc0e1wpPxCgSORagydtT02kHWYzvIdBMjPwIrAtVfJIzshKuZ6%2BrWqP27I0DsIUNPt5eJ8LQzM6FzGBIxQ6sw8rOSLqFx9BM6EiXRbR7HevDzKKFtcPGnbonfj%2BGEzcFFarHVVQTPpFIEm1vPwWsCXNnIVyp8A2D3FgBtL9urhyOjg1KTjKPFWwh4I1kXukKEz1jdSs7fBGI6cVRM%2F8rFmfw6EVZMLJXpb4Mgqjgdjx%2FBKXFCsCrJb%2FsgDBHtA7RVqKWANyN4Pk24KRRzidKp7CuD4c74Au31cSYhrlgGszyd%2BcJS%2FdAN7Ze173qcv5JF2nppEgamHU1JNGk7AhoWOLPa8kW%2BrY281HO1lG8SqKccl%2Fhf03wGTtMN3fHG5dQY1ASi88tAwjm9kyPtLwnxYeP%2FLY2RScUvmz6SFMQv06cRVfP%2FyLanNl1CGjKSbpkGm%2Bcj6yHCQIGiP4ryW4PPQOvGIvO5zNfysbJ%2BxAP8R5mVLWdQjMHpamfSXS4Z40xfRXYxfzclhz3UDY%2FLmqXdCWwtaat3TXLH0fatVK%2FPxMJLUmMAGOqUBHOC5X1QeV13158p9nPbEMp7%2FDfMVnfDLNsVYs4flBBmY0ym%2Br0Dtk4hSS1J4X%2FP9RXDp0OBvgLbU%2FKSECzIknmkVE%2BQeFjzmq1dBryN4z69qEdvnE4ojGRVLs7DxeYYcfXYGBdoCDz2SkjRZGXe9u6X25xGdyC4WmeVNmA7RcI%2Foy0LOwHrqL5XH67L35IJC%2BJ%2BZQESww8rCPpk%2B3RouiG4pj1fU&X-Amz-Signature=4f12e49ffc5f69942ccab2c9f53726531de7fab9cd57488707ae1ddd521aa2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
