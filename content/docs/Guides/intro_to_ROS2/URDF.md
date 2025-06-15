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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QER24O3W%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIB%2BWedlTebRtN71y6kCDt%2BgZwbeIPzK17saQTyk%2FWSq7AiEA32TozKFs2mf80SpO%2F%2B5YTFj3%2BezH3zdm8MKzoyxIJyEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHS%2B8WwutYKTO1rLMircA8z3KPL2TYI8ABQc2%2FNCGWDq05iSNV09LDEw1kizK%2FwlG1PYhlHhnkmokAYRb%2Ft%2BKvdUovyQGP4dtTP7g610pSBPEj0oAjo9WVg7%2By%2B5msdpmUe6GkC3Z57jYVNI1Rpc12wTu6zDt%2F%2B61Z9XWKGlXwLOgGM1WB%2FqlXn4fjwudBDh0AWTgvISZTYaoTLoREhH3sOwlxkNUO9XQz7tRJBury0QVxZOVZUbWFkhfY5xEFoHIY%2BZDF4t7GiJ4YSRJuzcsR6ZTWLoI%2FKcYdQCvtWlPdbm8XtdxUetP3btrqH5qTIXvUBt8QZ4iwKqMGVIb0pFiK%2FGQqNK7asd4pe4kJAl3zLIkZ4FqYRomb83s4ygIYWtvscd5BdKTsDPnggVPdEiXe4d3zOVVvoBW0NEmucYY9B3JLzPQxIDJW%2FKit3RFp%2BcztKJ8XCMaFSPFBi0JnLixvt0n2AgkMNwNVXFIkN9ojcyoSkFUS4lBuIHZ8T0VAUEkzwt%2BwG3H%2BKPbLq8CcHCOB6DgxgKnjvfWyHj2%2FQrOp01xO6PcrlUpBHQzN%2Bl%2Fab9XBo85srNsaDawrcANe7aWvMx5g5nkOKc7L14vdTrkeeC%2BWQzyckWNupZz0sgJN7W9mFN8tLSdD8paVfFMNamvMIGOqUBZ%2FOHQPGMDULMxW76BI4uZYAD1zCQVMMHHpBFq8e6Knv8TUT1w%2FGLb2L1M44U%2FFXwJjeLa5QnXf0GygJy7fxKKnHH%2Bh7QiFlVS0nh15N5uZ8Y19FO06uFD7BH54cXR04AYdXE5doUFAAcu8RBvRidgErV093wF2%2FfY2o1eK%2FitBQA0iujg%2FeiYMgcT54AKK2HoKVm%2FOUtgsoHcsPAV3lpCq2EaFNx&X-Amz-Signature=3de6a853b5488f5a92634f1dfb01b2ef22bd47b695af8f38b336d8df688bdc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QER24O3W%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIB%2BWedlTebRtN71y6kCDt%2BgZwbeIPzK17saQTyk%2FWSq7AiEA32TozKFs2mf80SpO%2F%2B5YTFj3%2BezH3zdm8MKzoyxIJyEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHS%2B8WwutYKTO1rLMircA8z3KPL2TYI8ABQc2%2FNCGWDq05iSNV09LDEw1kizK%2FwlG1PYhlHhnkmokAYRb%2Ft%2BKvdUovyQGP4dtTP7g610pSBPEj0oAjo9WVg7%2By%2B5msdpmUe6GkC3Z57jYVNI1Rpc12wTu6zDt%2F%2B61Z9XWKGlXwLOgGM1WB%2FqlXn4fjwudBDh0AWTgvISZTYaoTLoREhH3sOwlxkNUO9XQz7tRJBury0QVxZOVZUbWFkhfY5xEFoHIY%2BZDF4t7GiJ4YSRJuzcsR6ZTWLoI%2FKcYdQCvtWlPdbm8XtdxUetP3btrqH5qTIXvUBt8QZ4iwKqMGVIb0pFiK%2FGQqNK7asd4pe4kJAl3zLIkZ4FqYRomb83s4ygIYWtvscd5BdKTsDPnggVPdEiXe4d3zOVVvoBW0NEmucYY9B3JLzPQxIDJW%2FKit3RFp%2BcztKJ8XCMaFSPFBi0JnLixvt0n2AgkMNwNVXFIkN9ojcyoSkFUS4lBuIHZ8T0VAUEkzwt%2BwG3H%2BKPbLq8CcHCOB6DgxgKnjvfWyHj2%2FQrOp01xO6PcrlUpBHQzN%2Bl%2Fab9XBo85srNsaDawrcANe7aWvMx5g5nkOKc7L14vdTrkeeC%2BWQzyckWNupZz0sgJN7W9mFN8tLSdD8paVfFMNamvMIGOqUBZ%2FOHQPGMDULMxW76BI4uZYAD1zCQVMMHHpBFq8e6Knv8TUT1w%2FGLb2L1M44U%2FFXwJjeLa5QnXf0GygJy7fxKKnHH%2Bh7QiFlVS0nh15N5uZ8Y19FO06uFD7BH54cXR04AYdXE5doUFAAcu8RBvRidgErV093wF2%2FfY2o1eK%2FitBQA0iujg%2FeiYMgcT54AKK2HoKVm%2FOUtgsoHcsPAV3lpCq2EaFNx&X-Amz-Signature=de2a5d04d29d55ef00c57eb068d73871f2df114b1eec3e4a92285c4f0ad89789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
