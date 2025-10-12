---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AX7MN7Y%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDgOELvmupbZJ1GCPN9JKeg2T8blVqyg3SGyzLCQ7PP6AiAvP2smC7KljPeIy2TrUfldZTTnMr1t0XR7XAJNVTJxiSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMN0B%2FL%2BV4U9VdHTMvKtwD0NX8c7QY64h17AVSO9TFn4xjye9yXMxuGT6JV4VHyfJQ0Z4MePFDTfvq2RVrM8N1rXhF6KUeTF7Iaq2l07Ud4dyFuX9XxsfixWYds8NiP2l0WoVM8Ep1orfjShyy4us%2FzNwCRqNA8jxAuFWaph%2Flf%2B3XYMpA6orBSqj6omSmuOBFGLgZl482b9rOHsST0xrq%2BFpsvvnoBni%2FhiyV4eyFb2FWfm7sg4WH51%2F7NXeB53QCODit9H%2B%2FNll%2FB4Qqn1nA%2BX5eOO2uxbysv4qPL4ro%2F%2B1nh26hFKIH1LvWi9jWYIjB9Zuqd49ibmDzRKTRrTosH134MVJqjCS7Uj5RCbUHPC6Qa%2BXMMEFAniDuGIF22H4Q0O4vPDJkNmgQwfsU7uREq73Yx8kYjvuoaYxohLm8ZjAj%2FHVpDKKhFQW%2By1OE9O3ohJE%2B65VIe1%2Bnk%2FE0k03Gg2cbrLJBtYD0c3iKAQUeZneR0hN6lhAaksoGXRp%2B7eACcqN%2FzJKGFRnjuOqpATL1YOmdYRYLPPIbL5yU3TjptHQa6qMEAV1KQUF9QSRqsjjRlGTUEByTLpsRP1RoYZ132SwH2aVYGJSZL%2BtkzBXvJXR9tagiy0ibaJTMRKEbmxX%2Bk419Z6elrw22vbQwzbirxwY6pgF9iY2bDoMuaGPLNBOQW4BOoVGoPQBDU3a6CluuyOsYc6t1vs%2BLHORup02%2B53JApRoB4SEyfloBNu5B8mjBflSbpoQXwt3ZsDZoV3dERxH7LMa87Dd6mj4GUo8so35jSnE%2BVZ6YE4QrxoA56nrBq77ea7FYaNhwBJ6FMnkW9pNyUe3kMqdfuoKK0arL1MH15fYRgMtssbS1PkfARJxDTF74zbtqY4gw&X-Amz-Signature=40a0799726cb65a2995bc56417c7ac89073c77d57f32d2ef8032a9befd74d7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AX7MN7Y%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDgOELvmupbZJ1GCPN9JKeg2T8blVqyg3SGyzLCQ7PP6AiAvP2smC7KljPeIy2TrUfldZTTnMr1t0XR7XAJNVTJxiSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMN0B%2FL%2BV4U9VdHTMvKtwD0NX8c7QY64h17AVSO9TFn4xjye9yXMxuGT6JV4VHyfJQ0Z4MePFDTfvq2RVrM8N1rXhF6KUeTF7Iaq2l07Ud4dyFuX9XxsfixWYds8NiP2l0WoVM8Ep1orfjShyy4us%2FzNwCRqNA8jxAuFWaph%2Flf%2B3XYMpA6orBSqj6omSmuOBFGLgZl482b9rOHsST0xrq%2BFpsvvnoBni%2FhiyV4eyFb2FWfm7sg4WH51%2F7NXeB53QCODit9H%2B%2FNll%2FB4Qqn1nA%2BX5eOO2uxbysv4qPL4ro%2F%2B1nh26hFKIH1LvWi9jWYIjB9Zuqd49ibmDzRKTRrTosH134MVJqjCS7Uj5RCbUHPC6Qa%2BXMMEFAniDuGIF22H4Q0O4vPDJkNmgQwfsU7uREq73Yx8kYjvuoaYxohLm8ZjAj%2FHVpDKKhFQW%2By1OE9O3ohJE%2B65VIe1%2Bnk%2FE0k03Gg2cbrLJBtYD0c3iKAQUeZneR0hN6lhAaksoGXRp%2B7eACcqN%2FzJKGFRnjuOqpATL1YOmdYRYLPPIbL5yU3TjptHQa6qMEAV1KQUF9QSRqsjjRlGTUEByTLpsRP1RoYZ132SwH2aVYGJSZL%2BtkzBXvJXR9tagiy0ibaJTMRKEbmxX%2Bk419Z6elrw22vbQwzbirxwY6pgF9iY2bDoMuaGPLNBOQW4BOoVGoPQBDU3a6CluuyOsYc6t1vs%2BLHORup02%2B53JApRoB4SEyfloBNu5B8mjBflSbpoQXwt3ZsDZoV3dERxH7LMa87Dd6mj4GUo8so35jSnE%2BVZ6YE4QrxoA56nrBq77ea7FYaNhwBJ6FMnkW9pNyUe3kMqdfuoKK0arL1MH15fYRgMtssbS1PkfARJxDTF74zbtqY4gw&X-Amz-Signature=6e3c8e16f676f44df06c9ee6809b8b14dcbb2ce4ce09c3846a2767f90628b163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
