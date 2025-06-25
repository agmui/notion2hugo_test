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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2HRU3L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDorgfZgeG4gIM%2BeoYq7sbO257pw0%2BYcxZoAiit5KdudwIhANoHBnEbhJxRqSOnDdOKq%2F94PtLUytcF3LZ1tvTbhuHSKv8DCE4QABoMNjM3NDIzMTgzODA1IgypPzFRXVec2NJHpgEq3AMDQHOHL0tV2MQfBSpOgA2Yz4FibsS1HfXRm8BuuyjrZXeK1YA%2FRTb%2F4cBO8ILvVVyUHf%2Be6BFmyMcFgsX3RdOiyw%2FfpTi%2B3CfXy%2B9FOHc5yQ5OTC64bTaNnRFbz%2FWM4i0yaPPM51vc67Y9BwoKe%2B47OaJgY133l%2F2IRCyY3hxIlUcn2dwrs1KHbjPeHLHt%2BleEwjGOIRTbq2srFmnrbboSz%2FGrcUdW%2FdjFO%2BDWeUR2q8XpkfJ7tPVK4qjdzFI1u0csycu99X8ziT1rMcrFQUhVfUGp%2B86rd4ra%2BaSeSD8ofp38V8yIgrJwgBzQ0MfnU0SxMpKABbWfmeiyJNG8QGqs5cCYWIngVyyjwIaVD%2FT4FsOCYLJxspQdPhzkmwHKLDjPT1Alw7Si3vBAxRiPCx7D4hg3FsDtu843jd24G5gu5tu8tenYMtXcrk5ycGuDFjF64gHmKkLYwlTr0Jr1h5ZC7dQZQdDObZVqfSuHAqhgcPh1HlFlSFpaW%2FO2TvIp71kcfw%2BBbsjEpbrOd78bXS6oHFmUj%2FMpZnUYqtR1m0zHZXj65kzg8b3BXzTkyHr5mIXveekelw8tWIRID4%2BXmnRR%2BWLEKVuhje%2FMeuPoPCUkJrYcZOLVrHxJiFeWpTDfufHCBjqkAVx6qisXIBtcG0Ag2uAuFsBgL5GhjweT6M9Uo9In4Kw5jDsFUQgm3honrB1uFnV%2BoKKfr2Q9t%2F8KcOvygrypBaP07yQiSlq8W7TPZWdZgajzklHnxrsZPCQqvR0xLpz%2FSMQOLF0b0auv3rh%2FnX%2Bh8rng2yiq2KK4KZ4e%2FbuZB3yeaN4ymznXh0ttJPJJmEHTvGg1e3ONvXU3mFjLGhX7ijNiFOjS&X-Amz-Signature=ff1d1cd1aff659744952646f4ac32e33b9234a165681cb138127078fcb4750a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2HRU3L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDorgfZgeG4gIM%2BeoYq7sbO257pw0%2BYcxZoAiit5KdudwIhANoHBnEbhJxRqSOnDdOKq%2F94PtLUytcF3LZ1tvTbhuHSKv8DCE4QABoMNjM3NDIzMTgzODA1IgypPzFRXVec2NJHpgEq3AMDQHOHL0tV2MQfBSpOgA2Yz4FibsS1HfXRm8BuuyjrZXeK1YA%2FRTb%2F4cBO8ILvVVyUHf%2Be6BFmyMcFgsX3RdOiyw%2FfpTi%2B3CfXy%2B9FOHc5yQ5OTC64bTaNnRFbz%2FWM4i0yaPPM51vc67Y9BwoKe%2B47OaJgY133l%2F2IRCyY3hxIlUcn2dwrs1KHbjPeHLHt%2BleEwjGOIRTbq2srFmnrbboSz%2FGrcUdW%2FdjFO%2BDWeUR2q8XpkfJ7tPVK4qjdzFI1u0csycu99X8ziT1rMcrFQUhVfUGp%2B86rd4ra%2BaSeSD8ofp38V8yIgrJwgBzQ0MfnU0SxMpKABbWfmeiyJNG8QGqs5cCYWIngVyyjwIaVD%2FT4FsOCYLJxspQdPhzkmwHKLDjPT1Alw7Si3vBAxRiPCx7D4hg3FsDtu843jd24G5gu5tu8tenYMtXcrk5ycGuDFjF64gHmKkLYwlTr0Jr1h5ZC7dQZQdDObZVqfSuHAqhgcPh1HlFlSFpaW%2FO2TvIp71kcfw%2BBbsjEpbrOd78bXS6oHFmUj%2FMpZnUYqtR1m0zHZXj65kzg8b3BXzTkyHr5mIXveekelw8tWIRID4%2BXmnRR%2BWLEKVuhje%2FMeuPoPCUkJrYcZOLVrHxJiFeWpTDfufHCBjqkAVx6qisXIBtcG0Ag2uAuFsBgL5GhjweT6M9Uo9In4Kw5jDsFUQgm3honrB1uFnV%2BoKKfr2Q9t%2F8KcOvygrypBaP07yQiSlq8W7TPZWdZgajzklHnxrsZPCQqvR0xLpz%2FSMQOLF0b0auv3rh%2FnX%2Bh8rng2yiq2KK4KZ4e%2FbuZB3yeaN4ymznXh0ttJPJJmEHTvGg1e3ONvXU3mFjLGhX7ijNiFOjS&X-Amz-Signature=2a3994308f0ef0754122eaa9b4704fec375ecf41d8f11552675b14a0e8e15a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
