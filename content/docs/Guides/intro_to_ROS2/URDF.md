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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662275IGXZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7o86XF47EUQW%2FoIDdWcP2dUZdvJVWv1MwFRj3M4zH9QIgP79mKUpHAM%2BBiCEP7xlbLej7kxrKoJCZ7EGIrdrfh%2FQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXXdiUKxUy4xdf2PCrcAwoicrjxfS4FBiGCfoIkNR2eeBdYNr22beyBoDJSfrrXv8ryRJSUaIxMSnx%2B3NeCGrs2WSi%2FFdNKVTGafT13YLIGZ6zjxSvwxqNGhYsLPFZh9wiZOGdzPwYD%2BuwwfxHOeE9HomZYzZ56PlV0aT0wSCXGepiAunvhE9k2D2s3kj2vK%2BAp2pQPhWONbF%2FIdDg6qEeg9EYEO%2B0QGJHuTsB3%2Fpl27nWSCkyYKmZXE0862ujOSDZs3V2xpN0YoUwWFHOJD4FaoMwsWogfglpYybj4lJDzejZoiVQhesEdbpuSm%2FNtO1koNlg6PA9ZuSziUNcOPLoNQOK6uHmRc2v6%2FKFOykmZzkmXNgbRGhEUUWxd%2BUn9ikkGrUo30hEc9bVWk5hasLvMv9usqw9uPH3T1DpCrhrNFerZDc0amfs%2FpnD%2B0GcdfW8tfqvchDQaGFBI7sFFLQPYmpXdchhyUB971WEe3fiu56gvQWCbtgETFEWyNaQN8nIN7cqfUjn67t1y9p6ibys1rFOUZLh0sAegn7RWshoXeExI1zIllTgyyZZSXolz7SiZceJUfNgCY7YrIhxOYZuEQ0WjQdAaWqjbhP6Jzf8wzPpyn3qtMl728t3RcBNMjE012aHdTd7XcGFNMN%2FQ0r4GOqUBLF1rTcP8zN3IcxoiDfnOon3UoU8wk95b8ESepHMojs51UqtvmVbczL%2BBFzWoH7%2B3KGRBw2O7A6dYNDNpLwK7c37am5isdmGuS5lUsVM8ypRM9Al5TmixqCTCPJEkDqXGNmXScBA%2FpgyFXffjEAIXwAbWL%2BEbKaTQv9rWyIMVz5c7%2BYqpSHAFePOKUNRVjuvGAaw4PhW4husDMJVWcPEHGf2oFPvo&X-Amz-Signature=e42fbcd1c673ce7586e0221d3fb6ecc886723529b011b8dc945fdcee975f5e22&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662275IGXZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7o86XF47EUQW%2FoIDdWcP2dUZdvJVWv1MwFRj3M4zH9QIgP79mKUpHAM%2BBiCEP7xlbLej7kxrKoJCZ7EGIrdrfh%2FQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXXdiUKxUy4xdf2PCrcAwoicrjxfS4FBiGCfoIkNR2eeBdYNr22beyBoDJSfrrXv8ryRJSUaIxMSnx%2B3NeCGrs2WSi%2FFdNKVTGafT13YLIGZ6zjxSvwxqNGhYsLPFZh9wiZOGdzPwYD%2BuwwfxHOeE9HomZYzZ56PlV0aT0wSCXGepiAunvhE9k2D2s3kj2vK%2BAp2pQPhWONbF%2FIdDg6qEeg9EYEO%2B0QGJHuTsB3%2Fpl27nWSCkyYKmZXE0862ujOSDZs3V2xpN0YoUwWFHOJD4FaoMwsWogfglpYybj4lJDzejZoiVQhesEdbpuSm%2FNtO1koNlg6PA9ZuSziUNcOPLoNQOK6uHmRc2v6%2FKFOykmZzkmXNgbRGhEUUWxd%2BUn9ikkGrUo30hEc9bVWk5hasLvMv9usqw9uPH3T1DpCrhrNFerZDc0amfs%2FpnD%2B0GcdfW8tfqvchDQaGFBI7sFFLQPYmpXdchhyUB971WEe3fiu56gvQWCbtgETFEWyNaQN8nIN7cqfUjn67t1y9p6ibys1rFOUZLh0sAegn7RWshoXeExI1zIllTgyyZZSXolz7SiZceJUfNgCY7YrIhxOYZuEQ0WjQdAaWqjbhP6Jzf8wzPpyn3qtMl728t3RcBNMjE012aHdTd7XcGFNMN%2FQ0r4GOqUBLF1rTcP8zN3IcxoiDfnOon3UoU8wk95b8ESepHMojs51UqtvmVbczL%2BBFzWoH7%2B3KGRBw2O7A6dYNDNpLwK7c37am5isdmGuS5lUsVM8ypRM9Al5TmixqCTCPJEkDqXGNmXScBA%2FpgyFXffjEAIXwAbWL%2BEbKaTQv9rWyIMVz5c7%2BYqpSHAFePOKUNRVjuvGAaw4PhW4husDMJVWcPEHGf2oFPvo&X-Amz-Signature=83be5f5f8b7101d464434f9aa6154184b7e1a3e606b0346c27c8ef190eb2d0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
