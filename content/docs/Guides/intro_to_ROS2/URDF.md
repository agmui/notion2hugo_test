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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634AHAYOX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFk%2F%2Fohfv9zGkPNwz0rI4715o2Ex4m5Nm7DOOF1osKVxAiEA8y89Hdb%2B8Gb2M3GO462yLqvN4C0%2BED2HvaZuYwPlei0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBrYMq3vcYKHzG5agircA6Jko%2Fwy6nCnXKge1eOAdpBxenMJRmUCt3k%2B5b5ubYgbo%2FjRBWPyoLAnjQOJaohJj674XYYCzqPv3pqGJRp12QPJtlwuBu73r%2FU1I7b7SIhlEWRiYEl9wWDEiTJ1tSioqgEgKYT2VydGz8UBNDAjaagPGIBwy55VvOApx55gXn0Y1aqSyh0znNYPEKvZph%2FwaVommTOLtrBeOELMlQ38YGKKowejlm33kWWEVG9dXoFRSz39IVOIXelzf4lsFtk5QHQIkRxZI0W4urB%2FETLcXDTmk0RZi7hO55ya4Hkm8%2BYfKOrfxZwoMvgPYM5VbUtETagSzNg9cvpbt71DzqTvDDTIFx0VC7Idinrg2UOC%2FWze6S7KXo6kgLfVL9QeCr9GcJ5S3IwOWmDxuiBOxBsqnh0kc6ae2s5BYPGWJ2TahfJvFXNwgw0tvcPMe6I2RjlZ7j06l42o%2FXxQAyc07IbAqLMg4rq5%2FTFc3Nix5BxUuDP%2BqNi5jM4Dw8Map3dlA0W5rz41tvf6EqS7QcWlidDlEbLRs662We9sBclYFJ%2FFJqzytMFHeDyvRAig%2FeWLYYX1Knm4ct57gu7JeHr9YahDSJXlHI6FZzZ51%2Fofiyc8PANgvMZBv6lNJh%2BShXWoMPzm6MAGOqUB%2FQ0DyxxTYnk%2F63yjvz%2BtHmFsACAKSyOrVTVr9JS91YFeZtUrMX3cnq04tXrBO4G3zvZp5OXEgk%2Bg9AF6CGrEvMA%2FCEPWMMJqrZI%2FT0upFnI9%2B1PxRgbisgBEtRH3kU60XOZMqdnXAd5FBoH8b1enrgmyn8X%2BzXPEPspe5c%2FUsHVBAKH0Wt4t7qqRLZFmJbiRFhKKKTwqNeeP72Rk%2BcjwVCatX5HS&X-Amz-Signature=30f4b572d03f0480597eccdd1b781b38345ce746e7afdfdbcb2192c32b22cd92&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634AHAYOX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFk%2F%2Fohfv9zGkPNwz0rI4715o2Ex4m5Nm7DOOF1osKVxAiEA8y89Hdb%2B8Gb2M3GO462yLqvN4C0%2BED2HvaZuYwPlei0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBrYMq3vcYKHzG5agircA6Jko%2Fwy6nCnXKge1eOAdpBxenMJRmUCt3k%2B5b5ubYgbo%2FjRBWPyoLAnjQOJaohJj674XYYCzqPv3pqGJRp12QPJtlwuBu73r%2FU1I7b7SIhlEWRiYEl9wWDEiTJ1tSioqgEgKYT2VydGz8UBNDAjaagPGIBwy55VvOApx55gXn0Y1aqSyh0znNYPEKvZph%2FwaVommTOLtrBeOELMlQ38YGKKowejlm33kWWEVG9dXoFRSz39IVOIXelzf4lsFtk5QHQIkRxZI0W4urB%2FETLcXDTmk0RZi7hO55ya4Hkm8%2BYfKOrfxZwoMvgPYM5VbUtETagSzNg9cvpbt71DzqTvDDTIFx0VC7Idinrg2UOC%2FWze6S7KXo6kgLfVL9QeCr9GcJ5S3IwOWmDxuiBOxBsqnh0kc6ae2s5BYPGWJ2TahfJvFXNwgw0tvcPMe6I2RjlZ7j06l42o%2FXxQAyc07IbAqLMg4rq5%2FTFc3Nix5BxUuDP%2BqNi5jM4Dw8Map3dlA0W5rz41tvf6EqS7QcWlidDlEbLRs662We9sBclYFJ%2FFJqzytMFHeDyvRAig%2FeWLYYX1Knm4ct57gu7JeHr9YahDSJXlHI6FZzZ51%2Fofiyc8PANgvMZBv6lNJh%2BShXWoMPzm6MAGOqUB%2FQ0DyxxTYnk%2F63yjvz%2BtHmFsACAKSyOrVTVr9JS91YFeZtUrMX3cnq04tXrBO4G3zvZp5OXEgk%2Bg9AF6CGrEvMA%2FCEPWMMJqrZI%2FT0upFnI9%2B1PxRgbisgBEtRH3kU60XOZMqdnXAd5FBoH8b1enrgmyn8X%2BzXPEPspe5c%2FUsHVBAKH0Wt4t7qqRLZFmJbiRFhKKKTwqNeeP72Rk%2BcjwVCatX5HS&X-Amz-Signature=ed178250cef156030651fcc64b47c0c6163220ca62e73ae3be7448a44d613909&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
