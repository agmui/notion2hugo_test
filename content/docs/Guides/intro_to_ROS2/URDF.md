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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OFQEEW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCNYZItqH%2FlOxussopKF9tGkwwIKw%2B%2BgnEmU%2F924gFoOwIgdeZAtoeJlah%2FnW7Ex%2BOfEGVh%2Faz%2BuVe%2FGelZ0gLNMEoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMpAe8JfaE2w6HQfSrcAwPnL2lCUaFKcYJk63zVZhYTlmtEqzKRLEXSHXYlzkW9JV4d59DIBri0%2BHcUlapy%2FQjlp1VToFSHzrl79j93DWnBkRXk1%2BfXespkU3RDAV1zIzIpkGwneyKpXDEMTv%2BjX9W7bPNbJort1gBwcWF8NCsOpIKFTA0ZIFBElF7s9F715yMQ0EEW3T4pgOl5mFpk%2Fj8XqVGSs%2Fi3U4%2FOXB5M0VZ5cf5kJIMtVFrj8O6%2BLI5qjnBSPZiGka0lk7w5UM%2BZqTaJsWjTHBIkBkhOi%2Fx0GpVyAvRHMzKYwKg%2BpOjtTdYt1kYVl2t%2BLcLuKh70xEss1l5cUDkom7kMYeWCgpSduIXtlrhkBox78GlkxbKafmLNjt0FqZ%2B31WoRrMusUQCydwQrUEPlTUZ%2BAhR80FcDRLGhfxHSNHg6cITXdIoa2lJHUWITvxtfpoPsn1itY3iKo44ldkTFQn1rXOdqdEYvTH8CP4UfxBDf2H47VpqFHPFctfoRgPTOHT9Lq1MdRGEAMMCVqURcRQunx8jp%2FqwhU2%2B%2BITQe%2B%2BXDyAr1DqMaV9UMVZRK75fzqhg%2BzCgfmMAQoY7I0LZyzGC4LjKLzj36%2FBuHU5GhRJzN8T5%2B7Iz8PHi%2BDSFBM2nP7EUOYJ37MIrupb8GOqUBJxtdrO8JcxFdXnv%2Bslxh%2FE2iyXdzda2vzsxbc0aSaVbxPrPy%2Bf5W8iWWrx5q%2BPmDmwJKCwdWxFWqgJHu2vGNsOhiwoNAT04%2B251TgTansKbh4rY1FMhm3c3uLf0Fzw%2Bw9lgknia1OSnhpJNlXJ%2FO7nsmSlSQtSvUW%2BVLMqLEkmKs%2FyFV1g4AxcjYlUoIh0xoqAzb8uWw1nVyekkaDD2QJSB%2BuNQi&X-Amz-Signature=87dbb4d20e1c43fbf32497382b0cc404b3929776595e19403b833254f27e1693&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OFQEEW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCNYZItqH%2FlOxussopKF9tGkwwIKw%2B%2BgnEmU%2F924gFoOwIgdeZAtoeJlah%2FnW7Ex%2BOfEGVh%2Faz%2BuVe%2FGelZ0gLNMEoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMpAe8JfaE2w6HQfSrcAwPnL2lCUaFKcYJk63zVZhYTlmtEqzKRLEXSHXYlzkW9JV4d59DIBri0%2BHcUlapy%2FQjlp1VToFSHzrl79j93DWnBkRXk1%2BfXespkU3RDAV1zIzIpkGwneyKpXDEMTv%2BjX9W7bPNbJort1gBwcWF8NCsOpIKFTA0ZIFBElF7s9F715yMQ0EEW3T4pgOl5mFpk%2Fj8XqVGSs%2Fi3U4%2FOXB5M0VZ5cf5kJIMtVFrj8O6%2BLI5qjnBSPZiGka0lk7w5UM%2BZqTaJsWjTHBIkBkhOi%2Fx0GpVyAvRHMzKYwKg%2BpOjtTdYt1kYVl2t%2BLcLuKh70xEss1l5cUDkom7kMYeWCgpSduIXtlrhkBox78GlkxbKafmLNjt0FqZ%2B31WoRrMusUQCydwQrUEPlTUZ%2BAhR80FcDRLGhfxHSNHg6cITXdIoa2lJHUWITvxtfpoPsn1itY3iKo44ldkTFQn1rXOdqdEYvTH8CP4UfxBDf2H47VpqFHPFctfoRgPTOHT9Lq1MdRGEAMMCVqURcRQunx8jp%2FqwhU2%2B%2BITQe%2B%2BXDyAr1DqMaV9UMVZRK75fzqhg%2BzCgfmMAQoY7I0LZyzGC4LjKLzj36%2FBuHU5GhRJzN8T5%2B7Iz8PHi%2BDSFBM2nP7EUOYJ37MIrupb8GOqUBJxtdrO8JcxFdXnv%2Bslxh%2FE2iyXdzda2vzsxbc0aSaVbxPrPy%2Bf5W8iWWrx5q%2BPmDmwJKCwdWxFWqgJHu2vGNsOhiwoNAT04%2B251TgTansKbh4rY1FMhm3c3uLf0Fzw%2Bw9lgknia1OSnhpJNlXJ%2FO7nsmSlSQtSvUW%2BVLMqLEkmKs%2FyFV1g4AxcjYlUoIh0xoqAzb8uWw1nVyekkaDD2QJSB%2BuNQi&X-Amz-Signature=de34963966dbac41baf66873d0cc78da37a59a50952c2d5fea973b5aceaf6054&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
