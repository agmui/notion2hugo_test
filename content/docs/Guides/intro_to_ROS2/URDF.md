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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEOGUWYQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoUNXMbNCkIKwqyOVLvx1nF4NvPkxHAhHREO0GvAoZWAiBjIDfCT4Lgta2Q0MJPkNcYFIHVIQeXfhBn%2Fwf0vMlWySqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxI84kPHILI1kkEPAKtwDHWW3k0N68xpY4taAdEzIpf2N7ItpPxPaWId7LH95lSDhLMSozn%2Fl07FBfv%2FujwNYBs1jqQxtdNRPA54QoJbPVJ6eSb0ghPnzz07Ptaqwreys%2ByCgDFXMRBdlTOu0qh9nY6%2FAoIz9j39sqY%2BcvJ1EpLctisy53%2F6G1TmhKbYjaOlwiv1YJWh5BEQHmtkxFWh5PiHYAr4E%2BqZnofAL0RglOcyM8bJ8vvehU8Z%2B9LGlZ3xBmGeBYtOQhM49lkyMm2PemIlwzhQu6Oo5h%2BIxDPwtW967JP1iJBujfhdWG2r1ugL7oV9U9gPvsFBibZn3tNSsraFJ%2FDMiKq3NKdfb6Eh9%2BNhSBzO6jRWnZ0Kp%2BBpbUrlLbHItZB0ZgYX6PiOTwyfrW2QHm7OJfSVdJPeea%2FFI0QHC8pi5mABsl2oCFGg%2FSKPY0UBRcVmcHaxcrSfRxPct4MdUPvrEOyRZfRiJrGgF7a8mqARnCID%2FZgLmyZmQLpFB1X7mMI0MpFZ8zYfhkgImvvEB8xfol5WXExIHHiWMvw8FT3uygY05M06QKBB0jd9cy7TjRLjuOkQ02hqI9YBmayylGZ2SBp3q3YRdtkeuFiFMYQneElyHiL8%2F8BJnCCVxxqKpQ%2BKfvuTgzoww66KJwwY6pgHMxTeIjY4%2FWDR4P%2F1LdOKUQygATxWjt3%2FkG%2F2QM%2FO%2BScY0rFmZ5cBV2plG9fiJbhCfKwq1ETsxF1g4CNqHAVtxVmZz6IOn%2FOL9aEOQyfxLqi6UTdnXuYcNLPuUb9dnwiTIClJiTRBYd5xE5sf1spsEeY%2BC7hB9X00IkmeaqRZIHChgEPVrC%2Brn3cdpeKIT3hX%2FjfALkO4IHjxK89CVT3KyOFxuNUr3&X-Amz-Signature=37eecc7125ee7d54f0d26914702802ec85e3ad9594ec8eb0a4de03623e893730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEOGUWYQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoUNXMbNCkIKwqyOVLvx1nF4NvPkxHAhHREO0GvAoZWAiBjIDfCT4Lgta2Q0MJPkNcYFIHVIQeXfhBn%2Fwf0vMlWySqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxI84kPHILI1kkEPAKtwDHWW3k0N68xpY4taAdEzIpf2N7ItpPxPaWId7LH95lSDhLMSozn%2Fl07FBfv%2FujwNYBs1jqQxtdNRPA54QoJbPVJ6eSb0ghPnzz07Ptaqwreys%2ByCgDFXMRBdlTOu0qh9nY6%2FAoIz9j39sqY%2BcvJ1EpLctisy53%2F6G1TmhKbYjaOlwiv1YJWh5BEQHmtkxFWh5PiHYAr4E%2BqZnofAL0RglOcyM8bJ8vvehU8Z%2B9LGlZ3xBmGeBYtOQhM49lkyMm2PemIlwzhQu6Oo5h%2BIxDPwtW967JP1iJBujfhdWG2r1ugL7oV9U9gPvsFBibZn3tNSsraFJ%2FDMiKq3NKdfb6Eh9%2BNhSBzO6jRWnZ0Kp%2BBpbUrlLbHItZB0ZgYX6PiOTwyfrW2QHm7OJfSVdJPeea%2FFI0QHC8pi5mABsl2oCFGg%2FSKPY0UBRcVmcHaxcrSfRxPct4MdUPvrEOyRZfRiJrGgF7a8mqARnCID%2FZgLmyZmQLpFB1X7mMI0MpFZ8zYfhkgImvvEB8xfol5WXExIHHiWMvw8FT3uygY05M06QKBB0jd9cy7TjRLjuOkQ02hqI9YBmayylGZ2SBp3q3YRdtkeuFiFMYQneElyHiL8%2F8BJnCCVxxqKpQ%2BKfvuTgzoww66KJwwY6pgHMxTeIjY4%2FWDR4P%2F1LdOKUQygATxWjt3%2FkG%2F2QM%2FO%2BScY0rFmZ5cBV2plG9fiJbhCfKwq1ETsxF1g4CNqHAVtxVmZz6IOn%2FOL9aEOQyfxLqi6UTdnXuYcNLPuUb9dnwiTIClJiTRBYd5xE5sf1spsEeY%2BC7hB9X00IkmeaqRZIHChgEPVrC%2Brn3cdpeKIT3hX%2FjfALkO4IHjxK89CVT3KyOFxuNUr3&X-Amz-Signature=b052f9c26bd71adecf2f5433aa70372675dadba1e75848134a4cd7fa924605d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
