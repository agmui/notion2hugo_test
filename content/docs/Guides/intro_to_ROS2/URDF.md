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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGHBS3B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoHSLD9MTQnI%2B0W9s4EUq2FWs1laADCMyjPoRBZGEoyAiBZuzaRsnVG6MFrVzAtrM8qX6j0e2B57BnLx2PT9PM2nCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkZwJhN4YinFnS7nBKtwDAQNkdwm7GbNR6bumoPKR50qj8e7ruEfv6gJy%2BvVhkVS9hWjbWvR1aWSNhIBnVK6MtKLeZ28jgRX%2BrHnwnwq5vEW%2FiBjj71cWXBPs7Ep598EI9CR%2FF8PPCa%2FUUAESx0FMo%2BCp9ECGWfSV814c1DS54mUrWd1AMX5Vk1OdqSGPMpviD6mli9FgtHlHz923vGXYE5S8tBzsmf%2BiaPC6gqQ6Q9tcowBdQaFz9lgVoqGGk2mptbBgSmeinRmTFX5NlM303ZnoTrNQh7%2FTeZqAksgev1Q6jdflK6gwGoNZY%2B6FigGn%2BnkesD2T%2B%2BXoSZO5L6LQ19NHD0K2rGF1GZAy9MT%2BXfVJGjs0m%2FVcSEUtc%2FbA2nWUqyxjndhFj2rZG9HNtVclaP6E3IdQaygby1XU1bmUEZk0oMT7uxC%2FHTv8qcoSS8U7KpiMmFqbF20vAHZHElR5mRjkRt7UaZLU2AEv8DpSiEa6i2yIXYZsU4XxaOnD8p%2BbcU%2F3Z%2BRLvaycQTnVyOMWqqxlpQb02SS3D2lWK2CCOPUFZfaSD6I67%2F5ZB8zMP%2FYi%2BrFoe8K7hHweQwRBdRF61JWkzbPnsIYuFdC0SkwWnm%2BDcw3Spg1YHBxeiPa%2BhRuLiK30qaAdzUHjORgwltGFwAY6pgHbtimgmQ6YsqrFu9YwIXWfOX789%2ByHENfYpyDe4%2FJ5riQyra8TopY6MhP%2FBtvRtfpMwH3BWUAAqDpLnQ%2Fx1JdT2skRgmoT1azSBAK%2F6jG8cI%2BvNfBrBLY81ZdZ2IAfLg0NEPcsYQDdbW8rs27%2BeNsAbFrjfs7qXCxMn7y9%2BD8xZOcCFjDwqWWluf4XXkRMtV834QLU3bhGyi%2Bi8HUOW8FSUJAHf%2F9r&X-Amz-Signature=a890bd1961578f6b707b9c09c95f0dd3edbb1fde2dc701e43a54e2da78d5305b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGHBS3B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoHSLD9MTQnI%2B0W9s4EUq2FWs1laADCMyjPoRBZGEoyAiBZuzaRsnVG6MFrVzAtrM8qX6j0e2B57BnLx2PT9PM2nCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMkZwJhN4YinFnS7nBKtwDAQNkdwm7GbNR6bumoPKR50qj8e7ruEfv6gJy%2BvVhkVS9hWjbWvR1aWSNhIBnVK6MtKLeZ28jgRX%2BrHnwnwq5vEW%2FiBjj71cWXBPs7Ep598EI9CR%2FF8PPCa%2FUUAESx0FMo%2BCp9ECGWfSV814c1DS54mUrWd1AMX5Vk1OdqSGPMpviD6mli9FgtHlHz923vGXYE5S8tBzsmf%2BiaPC6gqQ6Q9tcowBdQaFz9lgVoqGGk2mptbBgSmeinRmTFX5NlM303ZnoTrNQh7%2FTeZqAksgev1Q6jdflK6gwGoNZY%2B6FigGn%2BnkesD2T%2B%2BXoSZO5L6LQ19NHD0K2rGF1GZAy9MT%2BXfVJGjs0m%2FVcSEUtc%2FbA2nWUqyxjndhFj2rZG9HNtVclaP6E3IdQaygby1XU1bmUEZk0oMT7uxC%2FHTv8qcoSS8U7KpiMmFqbF20vAHZHElR5mRjkRt7UaZLU2AEv8DpSiEa6i2yIXYZsU4XxaOnD8p%2BbcU%2F3Z%2BRLvaycQTnVyOMWqqxlpQb02SS3D2lWK2CCOPUFZfaSD6I67%2F5ZB8zMP%2FYi%2BrFoe8K7hHweQwRBdRF61JWkzbPnsIYuFdC0SkwWnm%2BDcw3Spg1YHBxeiPa%2BhRuLiK30qaAdzUHjORgwltGFwAY6pgHbtimgmQ6YsqrFu9YwIXWfOX789%2ByHENfYpyDe4%2FJ5riQyra8TopY6MhP%2FBtvRtfpMwH3BWUAAqDpLnQ%2Fx1JdT2skRgmoT1azSBAK%2F6jG8cI%2BvNfBrBLY81ZdZ2IAfLg0NEPcsYQDdbW8rs27%2BeNsAbFrjfs7qXCxMn7y9%2BD8xZOcCFjDwqWWluf4XXkRMtV834QLU3bhGyi%2Bi8HUOW8FSUJAHf%2F9r&X-Amz-Signature=157d345fb8d6cedbacfc28593e4c6535a492bcbfe1ca19115eaaa9b12e4fbf64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
