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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ACAYIC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDPOw0hyJcQU0R%2FUfNvVqTgQGLbz9TSRBi8TDlKCFV7fgIgFF9s%2F19C9TAHjuoCFNaCStl%2FXbZl0jI5YQ2nHYkYhc0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2wsJLCW9FDksst4CrcAze2VCfiPVd0RfexBBAHwOdrrzqwCdErDTen426UQ8lyEp09tXsSC4a6UekH0XTG278D2hoiJzPl8TuauYhXXUpkGn9FV29GurjJAlCqKnKXjXjmhyf%2Fnc0Kq0xceTUysmYV2QpnI66ia3cUzSTOh8nY1Ts2LcvcjwfhSC0UX2Dv3bHaXwiFGE6%2Bt6bpWpivW6M8jTMp01OcxPtnQfv4XCM9FBe2fWESirUCqzCFt6h8bqTK7E5PHoACMhUoO3hSrtaBgAmV9kN7Is%2FpgQTYKOI5eMxyDS8ZOzHdRtJ1XQpnprY6x0dThjIDdrdK78xc3D1Yz%2Fhzpn%2FzizeJp29PpEmHnvUvd5H4AWBfAzxqyV4%2BI4UnV8cBAAbL9KC3TPyCgV2jAiGBLvGEyIKBk79N3uu6xhMMkjrm8VWC6voScbzSjogtnoN2ulrnuxt848DZ1ds00UnO3yX5ECN47b2062X2PBLfbyfFTQMNDKA1VmkM3O5Qeku4P45XEtBmUvS%2Fj%2BI01Y6YXGc0mldKVLDNd7sfcn2ZR9qjphnddZ3q9uztcVXzQRjHFBYxu%2FloDSzDLtA34QN1g%2BWxoZlBCEzACzw7725WfsFc8GP4ZRf7D9EGkgw88HO0wXQvmzf5MO7rh8EGOqUByOYFBUEZLEzgyqV5IN4ggWm9LzUkqVxEV2Ukn00WAdjaYcen75nlGgU3PHd%2Bslmk0zChJPiW%2B%2FYwj4l6VBui4GqYZvBenf9ZG8EGT3h4gM2fsuffBKrTtKLiV97ht8GQqiz%2B0MmT0Stco7JONHYOqdx9lK9XhAwuYTkcX6hvld6SvIG10eBuRXT4Smt7InvbSs%2FlG96i7bF7zfiSBvFOpFtJ5Nkw&X-Amz-Signature=84658ad7f145eae0e2d43393557dac75322a90a233c6bb022f447b4946530347&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ACAYIC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDPOw0hyJcQU0R%2FUfNvVqTgQGLbz9TSRBi8TDlKCFV7fgIgFF9s%2F19C9TAHjuoCFNaCStl%2FXbZl0jI5YQ2nHYkYhc0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2wsJLCW9FDksst4CrcAze2VCfiPVd0RfexBBAHwOdrrzqwCdErDTen426UQ8lyEp09tXsSC4a6UekH0XTG278D2hoiJzPl8TuauYhXXUpkGn9FV29GurjJAlCqKnKXjXjmhyf%2Fnc0Kq0xceTUysmYV2QpnI66ia3cUzSTOh8nY1Ts2LcvcjwfhSC0UX2Dv3bHaXwiFGE6%2Bt6bpWpivW6M8jTMp01OcxPtnQfv4XCM9FBe2fWESirUCqzCFt6h8bqTK7E5PHoACMhUoO3hSrtaBgAmV9kN7Is%2FpgQTYKOI5eMxyDS8ZOzHdRtJ1XQpnprY6x0dThjIDdrdK78xc3D1Yz%2Fhzpn%2FzizeJp29PpEmHnvUvd5H4AWBfAzxqyV4%2BI4UnV8cBAAbL9KC3TPyCgV2jAiGBLvGEyIKBk79N3uu6xhMMkjrm8VWC6voScbzSjogtnoN2ulrnuxt848DZ1ds00UnO3yX5ECN47b2062X2PBLfbyfFTQMNDKA1VmkM3O5Qeku4P45XEtBmUvS%2Fj%2BI01Y6YXGc0mldKVLDNd7sfcn2ZR9qjphnddZ3q9uztcVXzQRjHFBYxu%2FloDSzDLtA34QN1g%2BWxoZlBCEzACzw7725WfsFc8GP4ZRf7D9EGkgw88HO0wXQvmzf5MO7rh8EGOqUByOYFBUEZLEzgyqV5IN4ggWm9LzUkqVxEV2Ukn00WAdjaYcen75nlGgU3PHd%2Bslmk0zChJPiW%2B%2FYwj4l6VBui4GqYZvBenf9ZG8EGT3h4gM2fsuffBKrTtKLiV97ht8GQqiz%2B0MmT0Stco7JONHYOqdx9lK9XhAwuYTkcX6hvld6SvIG10eBuRXT4Smt7InvbSs%2FlG96i7bF7zfiSBvFOpFtJ5Nkw&X-Amz-Signature=12a6e858f64f6a74764a2cf60e045bc0b2fc4e0ca2cec27fc1cdd02a812184a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
