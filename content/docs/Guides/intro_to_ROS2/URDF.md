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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMZXKPU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCrQ2if0m%2FbTln3PK5nZZdsfHjmbI7wQfXTye3M%2F1oElwIgKk8rt3yHdOlSbbWDwnSPutUoIVstVc%2BSbtfhU29bnAIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJe%2B0lcMIDiDb5Ld8ircAxc2JVtwyn%2FMIjRoCTC0pUqsP0C6Ybx48tajrXVbARZdi2Se5IlulEX04p0xHMJMyisGYGqdBNTbhmGQCMrkb3ULCdYTLor6nOIrm9qY%2BxXfdtG3AdDlfszB2rMIHPg2btLI7LuUX3iVtdo2DjP3Cxi7KH3jseNzFAkgV5KeRTX7nB2yv4KMvcC3J9%2F%2Barb8fiJafi0sf0lPgP0LJlO1WCbVTKbKbw5s%2BXjR4V0iqsjSWWFNVCgbWOH2vPtMnraZbXcbNUPot%2B%2BlT4%2FW8HyzyJ70q263Wev1X4yqKeE0qRE5NzL6f%2FQc3bZtfwDmgKYQKce5WR42RbjpW%2BxNNCp%2BUXbxnRYdwhbqXxmliH4csGAm8vEeyzP8K%2Bmap5zlrmhfXoJIS1UGw%2F3VENXQluP1aDIJLvkfX39ePcXCVBYMEp8rMJPkoJ9%2BCQfzV6qBguJETKPkX%2Fmy8RbyqVhgb6276kcZ12MXzrIdnIiVJiCnBIp34A3Q%2FzuhjqZMFWz0Q6VmBD17L1xyKqJj2E0Tc6yNkT8KB%2BnYO%2B9bmEeWKK0vyuu4K8KCQowMN8X2vQEJlY6%2BpkrnvMhW4oNzJYTBYlP%2BZTC2cWV22kvAj%2F7qVSVk2HiS6VNJ5uUonP%2FHyB%2BxMJztj70GOqUBA6mxoQ8SfhLCCMEpd7OHsFo6Hr08OssTicqBPN7myyWWshnFOecKtJ1DGd1FhDa9FaRMp2y67Twv5hZ4ZEgcF2%2FrdKSscua9c6MT4v6lJLhLEK3%2FUk%2FxUrgkP1TSZ2lIZ6c8BH5hFQMP9sguoMkSfgdx3udMXAiAvHNtG5igL%2FnacYY6cg8MpEai2S%2BX7hmcEWOvg%2BjZD%2BKTk5etri6gM9w6HSP4&X-Amz-Signature=cb7009af7cb3659faa65a12ebae69a12764692126ba13a3dc8b18637eabc0a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMZXKPU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCrQ2if0m%2FbTln3PK5nZZdsfHjmbI7wQfXTye3M%2F1oElwIgKk8rt3yHdOlSbbWDwnSPutUoIVstVc%2BSbtfhU29bnAIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJe%2B0lcMIDiDb5Ld8ircAxc2JVtwyn%2FMIjRoCTC0pUqsP0C6Ybx48tajrXVbARZdi2Se5IlulEX04p0xHMJMyisGYGqdBNTbhmGQCMrkb3ULCdYTLor6nOIrm9qY%2BxXfdtG3AdDlfszB2rMIHPg2btLI7LuUX3iVtdo2DjP3Cxi7KH3jseNzFAkgV5KeRTX7nB2yv4KMvcC3J9%2F%2Barb8fiJafi0sf0lPgP0LJlO1WCbVTKbKbw5s%2BXjR4V0iqsjSWWFNVCgbWOH2vPtMnraZbXcbNUPot%2B%2BlT4%2FW8HyzyJ70q263Wev1X4yqKeE0qRE5NzL6f%2FQc3bZtfwDmgKYQKce5WR42RbjpW%2BxNNCp%2BUXbxnRYdwhbqXxmliH4csGAm8vEeyzP8K%2Bmap5zlrmhfXoJIS1UGw%2F3VENXQluP1aDIJLvkfX39ePcXCVBYMEp8rMJPkoJ9%2BCQfzV6qBguJETKPkX%2Fmy8RbyqVhgb6276kcZ12MXzrIdnIiVJiCnBIp34A3Q%2FzuhjqZMFWz0Q6VmBD17L1xyKqJj2E0Tc6yNkT8KB%2BnYO%2B9bmEeWKK0vyuu4K8KCQowMN8X2vQEJlY6%2BpkrnvMhW4oNzJYTBYlP%2BZTC2cWV22kvAj%2F7qVSVk2HiS6VNJ5uUonP%2FHyB%2BxMJztj70GOqUBA6mxoQ8SfhLCCMEpd7OHsFo6Hr08OssTicqBPN7myyWWshnFOecKtJ1DGd1FhDa9FaRMp2y67Twv5hZ4ZEgcF2%2FrdKSscua9c6MT4v6lJLhLEK3%2FUk%2FxUrgkP1TSZ2lIZ6c8BH5hFQMP9sguoMkSfgdx3udMXAiAvHNtG5igL%2FnacYY6cg8MpEai2S%2BX7hmcEWOvg%2BjZD%2BKTk5etri6gM9w6HSP4&X-Amz-Signature=e9e252e5171b5f0ba75ea1d80576273a2be8e215d5028879f2273183ff3d8d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
