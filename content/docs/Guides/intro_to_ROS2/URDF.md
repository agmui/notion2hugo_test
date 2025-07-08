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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCTETGBZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkpofIKafbR5p8mj1EyJk54240vSc6tbHYRfFjxyhFXAiEA7s5Ul7mfBa%2BK6elM0iEqtJ7VCe48UnmIGJ%2FLSgd9unEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSLC328vkZwkKX%2F1ircAy8xPqzyVh7YJCYSAaT7WPd5OU2jRHdjAodF9poVPOx3hARK5P9JsP4kp52%2BPT%2F0aZMM7lc8gKZjg36DX%2FijhZH%2FSjceN2XoEjAOXnDf5Gg3o%2FHI8QgMplgzcF79OdNrEp1o3%2FwAwGyvypWky30RaE0UsJTtetuj13IdHpYjc5%2FkwLQvgxoBUUY240csKm9te82dtBb6GW0rND0NOTKft8Tyq0qo6%2B%2BqJRWYf5lF6ckvBdcA1GQa4T4tkgCtOHR0l81hSMPYu8908uYhCGMo0iF3zTgIlTEl78m%2BNAGQ3F5PVLnN5%2FAJCNSBwPuhQ6TNrFgLCAzDY%2FjZUkAzwB8AXXnd8qOINxva6sei8o4oG1O%2FicF3gp4Xgh9Qmppi%2BmvfqB1%2FJlMGiZJvwlcK%2BB35hFNPgzpYlLw78m4Z4TssPGTwsoJOp%2BkoRw09bZ9%2FIpAtrOtrPa0NFUGJ%2F4oHNoz%2FFJUkRvDebOMGII1MoMdayn0JhzOh64V4jQyHMJgHVBCUWtk1zocYetAL50T7wJfSa5FRC5c0gnovp0Wo%2BWY7dcCtVR55evw%2BWRWR%2Bmxsl8J7JK64ifBWzCVle0iyvdtgHXGWM6tuEGCHyvsiYtvdM1AT9XkvH3rxLl5dxbXcMOjTtMMGOqUB0mPwofr4hW1eDXU2GnNzK5fDI6zmaOfQb1NNoeNf2l9QTDm47wfz3D3H1yNurKOW%2BF7PuctOmYHOtzihNR0lXtIOOJj4C30sEabR%2Bn3FkogJXKdiAzZ7yEfVQnuPCB0uXT8YxtVA0RtVK3KEn6%2BOorwIfT%2BbHztp2rtl%2FuDQgqsbWDNji%2BCS5Ahg2v3NuIhdKJMWWkpSLUwjIcVrQ1LD8TOTFsL%2B&X-Amz-Signature=2247569d03e005c79b56f7f664524b5ee219938b841356a6c831a685ab994203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCTETGBZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkpofIKafbR5p8mj1EyJk54240vSc6tbHYRfFjxyhFXAiEA7s5Ul7mfBa%2BK6elM0iEqtJ7VCe48UnmIGJ%2FLSgd9unEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSLC328vkZwkKX%2F1ircAy8xPqzyVh7YJCYSAaT7WPd5OU2jRHdjAodF9poVPOx3hARK5P9JsP4kp52%2BPT%2F0aZMM7lc8gKZjg36DX%2FijhZH%2FSjceN2XoEjAOXnDf5Gg3o%2FHI8QgMplgzcF79OdNrEp1o3%2FwAwGyvypWky30RaE0UsJTtetuj13IdHpYjc5%2FkwLQvgxoBUUY240csKm9te82dtBb6GW0rND0NOTKft8Tyq0qo6%2B%2BqJRWYf5lF6ckvBdcA1GQa4T4tkgCtOHR0l81hSMPYu8908uYhCGMo0iF3zTgIlTEl78m%2BNAGQ3F5PVLnN5%2FAJCNSBwPuhQ6TNrFgLCAzDY%2FjZUkAzwB8AXXnd8qOINxva6sei8o4oG1O%2FicF3gp4Xgh9Qmppi%2BmvfqB1%2FJlMGiZJvwlcK%2BB35hFNPgzpYlLw78m4Z4TssPGTwsoJOp%2BkoRw09bZ9%2FIpAtrOtrPa0NFUGJ%2F4oHNoz%2FFJUkRvDebOMGII1MoMdayn0JhzOh64V4jQyHMJgHVBCUWtk1zocYetAL50T7wJfSa5FRC5c0gnovp0Wo%2BWY7dcCtVR55evw%2BWRWR%2Bmxsl8J7JK64ifBWzCVle0iyvdtgHXGWM6tuEGCHyvsiYtvdM1AT9XkvH3rxLl5dxbXcMOjTtMMGOqUB0mPwofr4hW1eDXU2GnNzK5fDI6zmaOfQb1NNoeNf2l9QTDm47wfz3D3H1yNurKOW%2BF7PuctOmYHOtzihNR0lXtIOOJj4C30sEabR%2Bn3FkogJXKdiAzZ7yEfVQnuPCB0uXT8YxtVA0RtVK3KEn6%2BOorwIfT%2BbHztp2rtl%2FuDQgqsbWDNji%2BCS5Ahg2v3NuIhdKJMWWkpSLUwjIcVrQ1LD8TOTFsL%2B&X-Amz-Signature=b038afcdef7486e837f04d7f185b1afbc921676c541036e18b1d9b7e4f0a5a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
