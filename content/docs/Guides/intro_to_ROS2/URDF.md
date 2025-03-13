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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVR6YV4V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsARJJIQ4H04o%2BFEFOXQQEVUA94%2F2k6oDpRJDT0ct1qAiEAioHR2zM%2FaOky6uyAU46EkIp94JgRCm%2FPb10UnwzzSRMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMG3bG7r6aMoa0Hj5CrcA%2B1ea4GCSU5uS%2FH4Xi6iZY%2BeieH1SXEYN3LhBi2npfGIx8jSPZepNyt%2BvOsXc03HwNvzAmMq%2FXGVXP5YDcTZJeEDZoW8hD6bcHmgOYADxuU%2BvIOu%2FLbP6%2BQxSQI7lAlgtkFjlE5bt2HsaOk0PsEEmFjowqr0wUUIoiwVBoTYdVUIcHSjeK2m7ANfwr%2F0BgWwDb67DVXdRxarkyYf4k%2BKuXvx5pX1fT5Y7CnPaa3FhKWBzuA%2B4ZSXK8vyaQPKemrDsWhgWUJ%2Bnprgnky7DhxSnP7ryMjE%2Bt74WnvRIga5T%2BR59lXJALEt7id43TEBvopzW0IH6%2FnAHUomdqNDQuIIbOXR8oAdM0KvYX0iLQTHVn%2F4D4PLxy6%2FHUcFoRAP7VNEqGiM4ZbaoKszBWVY0GcsWQBeJ6R7fpZhV%2F0pmdRHCMV7TNutLEzTZM4xqXZKA3DKHzJqhD6Z%2B13TlDCaASzTcbDqI1Uags%2F8YPvYnhYEOjnsjKtLj2h5aMHK%2FV8rnjNSMSscdhG0hJZJU0lyBc5XWltKaynFuAzNWzTHfrfevXASkP3tM%2FINpXLMpNK8DuLU6YVvozv92kOll7vBvgr%2FryQHjCvmsrkB%2B4oQlGxS4Qz8fdCKQiLMJx%2BUB6wFMMmOzb4GOqUBR5KKTJAQrOYbDV7ehqfDQN%2FkRI3%2Bq64w7YJLR%2BA4B7Pa66p%2BT4l8rztHUKov5LRGXXr6LvTZD1rKa268aH0%2BSoC1Hrj4ZlcYJ2PBtlWcklT8lmpEVOVDE9nRtkWldZqsH4zMs2TFR74bGAMM6q9fCunEljCFg46zzynhCT%2BEIGWuMi9xkhjii2NUSz5Cg80H0LmaGIpG4%2FXaALU1Vg7YCKLkuuX1&X-Amz-Signature=45149337531e0e20e7fa20bc2f9a77ef036b8aa1474d2b47430ad622ce17e694&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVR6YV4V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsARJJIQ4H04o%2BFEFOXQQEVUA94%2F2k6oDpRJDT0ct1qAiEAioHR2zM%2FaOky6uyAU46EkIp94JgRCm%2FPb10UnwzzSRMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMG3bG7r6aMoa0Hj5CrcA%2B1ea4GCSU5uS%2FH4Xi6iZY%2BeieH1SXEYN3LhBi2npfGIx8jSPZepNyt%2BvOsXc03HwNvzAmMq%2FXGVXP5YDcTZJeEDZoW8hD6bcHmgOYADxuU%2BvIOu%2FLbP6%2BQxSQI7lAlgtkFjlE5bt2HsaOk0PsEEmFjowqr0wUUIoiwVBoTYdVUIcHSjeK2m7ANfwr%2F0BgWwDb67DVXdRxarkyYf4k%2BKuXvx5pX1fT5Y7CnPaa3FhKWBzuA%2B4ZSXK8vyaQPKemrDsWhgWUJ%2Bnprgnky7DhxSnP7ryMjE%2Bt74WnvRIga5T%2BR59lXJALEt7id43TEBvopzW0IH6%2FnAHUomdqNDQuIIbOXR8oAdM0KvYX0iLQTHVn%2F4D4PLxy6%2FHUcFoRAP7VNEqGiM4ZbaoKszBWVY0GcsWQBeJ6R7fpZhV%2F0pmdRHCMV7TNutLEzTZM4xqXZKA3DKHzJqhD6Z%2B13TlDCaASzTcbDqI1Uags%2F8YPvYnhYEOjnsjKtLj2h5aMHK%2FV8rnjNSMSscdhG0hJZJU0lyBc5XWltKaynFuAzNWzTHfrfevXASkP3tM%2FINpXLMpNK8DuLU6YVvozv92kOll7vBvgr%2FryQHjCvmsrkB%2B4oQlGxS4Qz8fdCKQiLMJx%2BUB6wFMMmOzb4GOqUBR5KKTJAQrOYbDV7ehqfDQN%2FkRI3%2Bq64w7YJLR%2BA4B7Pa66p%2BT4l8rztHUKov5LRGXXr6LvTZD1rKa268aH0%2BSoC1Hrj4ZlcYJ2PBtlWcklT8lmpEVOVDE9nRtkWldZqsH4zMs2TFR74bGAMM6q9fCunEljCFg46zzynhCT%2BEIGWuMi9xkhjii2NUSz5Cg80H0LmaGIpG4%2FXaALU1Vg7YCKLkuuX1&X-Amz-Signature=ff6d1a9669ba8fa046ac5fca555f27f697a514fa62ead5fdd952a64d3d95b01e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
