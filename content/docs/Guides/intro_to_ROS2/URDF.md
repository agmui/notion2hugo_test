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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AXXCVM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWxEMKemOSoRvuv0qEzlhWi33fyhYW3z%2FcG9sK40MuIgIgSjZ9DkiPsuMA2%2BB1Q86LpFcEb6tRkNnbl5gtGpO3cmQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5NcuBGpZh2LB0hjyrcA2fHiwcD0SoX31C0DQYapvL7OEa1b1vwMSCbVSlBv6JKtpRUPzGhSrqRyJuLy2bt%2BMHzMXVOL64PNNXvryMyGFveoZiR2MG37y20iL1mORfE%2FljN60u33Gs%2BFuoYe5HC3NeGvPhEtYMW9XxVO6UB9fBq4OVqHlEahBmMMM%2FSKcQjG%2FIxXekig%2BA2CdEXEcD1yQtq9JEUullV3ohQk%2F9VJchWXBE3jCNEGtrkg%2BfnbxUHPchDKOrWvzG0oeSuEAG62ELN6UTsxJT6lnF8nvXylDzsVD1FNVApTzDiN%2FP8x4lYGwhgt4FBNNyr1whMU2CpG1udugXvvqhiUP3qyUiLB9kFjD3wksE%2FZDe8vxfAUEtiCqv1cxl0mBoERamrGbbQdiYsiNpCtGpdrvRblMm5XPJD5WrpHXqNgBNUmhl8yDU5tWLEqG%2B3Ivp%2FZCUIyHb7tUDppds93PHSezgf1VajUdNgoYGz99uEw6wuJ7iPpjkcLRmuv4rZdA5OdI2hyi2pkc0Y2h6jYGY%2FiC36ULy71glKWeAyPM%2BtBVJglFjrACc6xQtR3vZHrBVWW5XfLBkE2JdRfcoJ0cBLiK8jqZSIdZ7Wt9TYALify6pz0Y8I2Z9f1erW%2BGIw%2Bdvj1YYrMIrdqsEGOqUBfDGCOycqYydZF%2BwVwsAKhn3yC%2FyVd7fXoESwgjmmKvMsBOntXbixQJQukiBy2ShHJ9hpymKUCTjzBLCOKdg%2BNTI15RTNijeGX9XX9H4Oimseb%2BAIXfhiHj45xCOblDUSpxsO8wdSdaurAeUym4606IeWKbhvDRoWmMO90Trvu9TF1KBBfEN153MAtfIlLjTDCgR4gzbrmNxcrz%2FXeK%2BrzUHwjTCx&X-Amz-Signature=d5a71aa2c50741e0b305a36c8b58000d3cdcc46898ad9853f7fa7d09e4765346&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AXXCVM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWxEMKemOSoRvuv0qEzlhWi33fyhYW3z%2FcG9sK40MuIgIgSjZ9DkiPsuMA2%2BB1Q86LpFcEb6tRkNnbl5gtGpO3cmQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5NcuBGpZh2LB0hjyrcA2fHiwcD0SoX31C0DQYapvL7OEa1b1vwMSCbVSlBv6JKtpRUPzGhSrqRyJuLy2bt%2BMHzMXVOL64PNNXvryMyGFveoZiR2MG37y20iL1mORfE%2FljN60u33Gs%2BFuoYe5HC3NeGvPhEtYMW9XxVO6UB9fBq4OVqHlEahBmMMM%2FSKcQjG%2FIxXekig%2BA2CdEXEcD1yQtq9JEUullV3ohQk%2F9VJchWXBE3jCNEGtrkg%2BfnbxUHPchDKOrWvzG0oeSuEAG62ELN6UTsxJT6lnF8nvXylDzsVD1FNVApTzDiN%2FP8x4lYGwhgt4FBNNyr1whMU2CpG1udugXvvqhiUP3qyUiLB9kFjD3wksE%2FZDe8vxfAUEtiCqv1cxl0mBoERamrGbbQdiYsiNpCtGpdrvRblMm5XPJD5WrpHXqNgBNUmhl8yDU5tWLEqG%2B3Ivp%2FZCUIyHb7tUDppds93PHSezgf1VajUdNgoYGz99uEw6wuJ7iPpjkcLRmuv4rZdA5OdI2hyi2pkc0Y2h6jYGY%2FiC36ULy71glKWeAyPM%2BtBVJglFjrACc6xQtR3vZHrBVWW5XfLBkE2JdRfcoJ0cBLiK8jqZSIdZ7Wt9TYALify6pz0Y8I2Z9f1erW%2BGIw%2Bdvj1YYrMIrdqsEGOqUBfDGCOycqYydZF%2BwVwsAKhn3yC%2FyVd7fXoESwgjmmKvMsBOntXbixQJQukiBy2ShHJ9hpymKUCTjzBLCOKdg%2BNTI15RTNijeGX9XX9H4Oimseb%2BAIXfhiHj45xCOblDUSpxsO8wdSdaurAeUym4606IeWKbhvDRoWmMO90Trvu9TF1KBBfEN153MAtfIlLjTDCgR4gzbrmNxcrz%2FXeK%2BrzUHwjTCx&X-Amz-Signature=5815c7df697aaed29d4762a1b6b7cabafa25e331cfdb9ee06edda39becbb2318&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
