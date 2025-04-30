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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2KZF3P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICRVaelND3y7Yygii4h6xv%2FQEPx1VewKMDvKvDX7HF19AiEAwyPvZxPHA1lmVY%2FLmv%2Bqqy0mRmuDjHVkGWeCqmTOUGIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEW8I4%2B2y2TCdE3gyircA9y5pjh816C6s%2ByY2GrUAO1N92c9m0dpj87XI4o0xtPPDDhwokfAD4iu5C3hGtFCTqL9K0jqB5G7Uoh6nCGfe%2BajoXtXVM0dWQuV6QwsMKEla8RtaaI27kBPjOdE1493qeF2fbSXL%2FZnC5cXcLjvitYNhN0KbwGpLaPQbqteSXt2x2M7nNknH8YTddq4BflYtKVnxjNiVL1Q%2FuQIzJeqW7NWhaEd%2FB1kf3lS9Wh6ZxipTMZtKMo%2FeLkGfRCnJyjDIkAS7rLjjOFQSlzqIPFHrRI83TV%2BjRPnPGWEJvI7zwUlIDJxM0VpaKho4Gi7YjGNiDla18Zhk8W8ZA8tAk0f8Y635PV4ETIJUuQcc1JIDyY4PKZpukR%2BBjF0c3GkDb44XAKVz5s9L8aNSJBRmpNijUqR1KieEXi9nF3Z84c2rxk6V%2FvRv4bkD4qtonqbuQzTfD4iDVLk9sM7PiDb3fsdlRXGFBULaQxiNvvbZs6Vk8jAOr7uppju0cKv6K58QVXG4rO4oLvW%2FH8Mqx63yw193dN%2F0r0ozyFfs7EhVGdCZlunBfQKUdAZ77SPvsbQF3%2B%2FrHeUhD66p2jfg0OjCUoi074ZgC%2BY4ZbR7UJscplu6VH4L4Gd63m6qpdTgEBQMMThyMAGOqUBWtuKgOThwykuJnkMFd%2FIqvhFduH4C0C21VUe6P1ZuxOictYIyBUjV%2FUN5u%2F%2FxsSvimqHuXTvEE2i9fR4kjn7H0LDvcq%2Br3uFLu2q%2F6CgItJjpoQl4fpDEOHiPChI04QjpROhlAGR4ggKJOPOWa3xnIEVs1aNHv7P1tERMSDwtUUI80dGX0XjO4y7GYY0Sym%2Bn%2B9ajJgq3MFn%2BVHITaiE2bG6q8z6&X-Amz-Signature=763e4c2c002506d098288f9c0b2897c4b1484e3c442c18f71de1d93f30d9125d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T2KZF3P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICRVaelND3y7Yygii4h6xv%2FQEPx1VewKMDvKvDX7HF19AiEAwyPvZxPHA1lmVY%2FLmv%2Bqqy0mRmuDjHVkGWeCqmTOUGIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEW8I4%2B2y2TCdE3gyircA9y5pjh816C6s%2ByY2GrUAO1N92c9m0dpj87XI4o0xtPPDDhwokfAD4iu5C3hGtFCTqL9K0jqB5G7Uoh6nCGfe%2BajoXtXVM0dWQuV6QwsMKEla8RtaaI27kBPjOdE1493qeF2fbSXL%2FZnC5cXcLjvitYNhN0KbwGpLaPQbqteSXt2x2M7nNknH8YTddq4BflYtKVnxjNiVL1Q%2FuQIzJeqW7NWhaEd%2FB1kf3lS9Wh6ZxipTMZtKMo%2FeLkGfRCnJyjDIkAS7rLjjOFQSlzqIPFHrRI83TV%2BjRPnPGWEJvI7zwUlIDJxM0VpaKho4Gi7YjGNiDla18Zhk8W8ZA8tAk0f8Y635PV4ETIJUuQcc1JIDyY4PKZpukR%2BBjF0c3GkDb44XAKVz5s9L8aNSJBRmpNijUqR1KieEXi9nF3Z84c2rxk6V%2FvRv4bkD4qtonqbuQzTfD4iDVLk9sM7PiDb3fsdlRXGFBULaQxiNvvbZs6Vk8jAOr7uppju0cKv6K58QVXG4rO4oLvW%2FH8Mqx63yw193dN%2F0r0ozyFfs7EhVGdCZlunBfQKUdAZ77SPvsbQF3%2B%2FrHeUhD66p2jfg0OjCUoi074ZgC%2BY4ZbR7UJscplu6VH4L4Gd63m6qpdTgEBQMMThyMAGOqUBWtuKgOThwykuJnkMFd%2FIqvhFduH4C0C21VUe6P1ZuxOictYIyBUjV%2FUN5u%2F%2FxsSvimqHuXTvEE2i9fR4kjn7H0LDvcq%2Br3uFLu2q%2F6CgItJjpoQl4fpDEOHiPChI04QjpROhlAGR4ggKJOPOWa3xnIEVs1aNHv7P1tERMSDwtUUI80dGX0XjO4y7GYY0Sym%2Bn%2B9ajJgq3MFn%2BVHITaiE2bG6q8z6&X-Amz-Signature=9c5895517cb43af6768177da5b4eb2dc5acb3da1269f4c401343731f9dbbfae8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
