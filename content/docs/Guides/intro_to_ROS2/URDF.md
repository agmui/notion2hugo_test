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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2K64UGT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCl1QAhks%2BgWSoMCEcck89S5K4P0ciPSeb2PWKRCmJIigIhAN0styk2xKQy1urjwOcwcW5BvYvwLEoQRC%2BTwIP79ITJKv8DCDAQABoMNjM3NDIzMTgzODA1IgzIA8V56Z%2Ba0e4QyPoq3AOXkHtlpnVqSs7bCg2wwz9f51HoRD2%2BN%2B6cHa9l5ZmRfvB1vXvmOvIAVs7pQfQA8oz%2B6ma0D%2BgyRh6cFjB3cg2iDPmJ3rTDqQDVPlJUsBTmo%2FK5NEFbPoMKOnGukW%2FIQuHNJk6ATyZohxYMs2pA1h65Jo6ZMpFU7g9MlQ9OCYkVk6HS1YugQ1hxTo2DcxAiUMzLKviFd6GozBc1XIacIzkgNVXF%2BihHpbAIY4lj8P02Cxtl6Vm5UWx07MKYjm4kpwe%2FI%2Bu747YbqxwqxQ3oXgIQav1uumHeDpLml%2BT5hQOR8hEpAoLi01kHKqckI04fmaKPAmg7R2caDsi%2FWdFNbG9X3w8agJ1njWnhBH%2FUpjE7PoO%2FwNdfEu04UkOXEKracLPh%2BihV9gaZEzmt%2BowSO1g08S6fBKj9bC02R9GdSkBodhiRgBkqCfNDAesVRz1IUWeoy8vLEu00nhFG3ilOf4XGY6POfthqqW%2BuM%2B%2BpXKT%2FBIMH24l4DjoT5qRKBuBUPScVWxcl0Ck2Wvr7L1B7G4Z0EnhvcIM208dM7qL7Dk4PFSm6%2Bw5xXt5gGqBavY6lrI8Cip3ZQfiw2%2BkVGrNhWDpbbHFgDptolXrb7Ea2eaW9oEra0hgcOVHsSV2qTzDp38zBBjqkAbvq9z8mnVoYeo8IecPk1URWB8hi51ty5pkrFJVkV1tGPXHlUY7izdVyd5haVAcWExNqCGy4ZXRFFvDjQNywdDJNN7FxjxWC3vKP45smBQWpJJ3nUlSWnm6O0lZOmhtpi0ZhRGhtM369RwLgNtguJratfFx35TV2mw%2FP8hP5vlrWGkojVe6K0bhBS78EljR1b9z2rY3vQ4OvHGBYWMEi5zdzEbrG&X-Amz-Signature=c41dc737dc1a0777cc20e6d4043c99c0e065404d560e628b397d9483bbd43a71&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2K64UGT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCl1QAhks%2BgWSoMCEcck89S5K4P0ciPSeb2PWKRCmJIigIhAN0styk2xKQy1urjwOcwcW5BvYvwLEoQRC%2BTwIP79ITJKv8DCDAQABoMNjM3NDIzMTgzODA1IgzIA8V56Z%2Ba0e4QyPoq3AOXkHtlpnVqSs7bCg2wwz9f51HoRD2%2BN%2B6cHa9l5ZmRfvB1vXvmOvIAVs7pQfQA8oz%2B6ma0D%2BgyRh6cFjB3cg2iDPmJ3rTDqQDVPlJUsBTmo%2FK5NEFbPoMKOnGukW%2FIQuHNJk6ATyZohxYMs2pA1h65Jo6ZMpFU7g9MlQ9OCYkVk6HS1YugQ1hxTo2DcxAiUMzLKviFd6GozBc1XIacIzkgNVXF%2BihHpbAIY4lj8P02Cxtl6Vm5UWx07MKYjm4kpwe%2FI%2Bu747YbqxwqxQ3oXgIQav1uumHeDpLml%2BT5hQOR8hEpAoLi01kHKqckI04fmaKPAmg7R2caDsi%2FWdFNbG9X3w8agJ1njWnhBH%2FUpjE7PoO%2FwNdfEu04UkOXEKracLPh%2BihV9gaZEzmt%2BowSO1g08S6fBKj9bC02R9GdSkBodhiRgBkqCfNDAesVRz1IUWeoy8vLEu00nhFG3ilOf4XGY6POfthqqW%2BuM%2B%2BpXKT%2FBIMH24l4DjoT5qRKBuBUPScVWxcl0Ck2Wvr7L1B7G4Z0EnhvcIM208dM7qL7Dk4PFSm6%2Bw5xXt5gGqBavY6lrI8Cip3ZQfiw2%2BkVGrNhWDpbbHFgDptolXrb7Ea2eaW9oEra0hgcOVHsSV2qTzDp38zBBjqkAbvq9z8mnVoYeo8IecPk1URWB8hi51ty5pkrFJVkV1tGPXHlUY7izdVyd5haVAcWExNqCGy4ZXRFFvDjQNywdDJNN7FxjxWC3vKP45smBQWpJJ3nUlSWnm6O0lZOmhtpi0ZhRGhtM369RwLgNtguJratfFx35TV2mw%2FP8hP5vlrWGkojVe6K0bhBS78EljR1b9z2rY3vQ4OvHGBYWMEi5zdzEbrG&X-Amz-Signature=089f25c8fa227bfd57fc24139fb366ae8525571c54a79bc86f409c9f8754bc13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
