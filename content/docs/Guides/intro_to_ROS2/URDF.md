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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7IKQKWC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY6kCZ%2BoMd7BM0hvyKy0Z4sv%2FGvQF6%2BssmTJsYrRT8VAIhAPJzd1uECWkr6qGM0lCwVzidPTD%2BOaKydaH5oGv0jVG%2FKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzLXdi5QrPaExw2zwq3APQYnLwRC%2BQWtjaFec6jFzPLtxEfLRmm4NSiIVjHPWdSSmZ%2BT%2By%2F%2FhhdSMNPFiOk8cho2T8F3zjppSK8uFzthSKNvjLyEoVcudUaD2UIPPamlgkIvjdsrokL77KtvP9QA1bjHs%2B8r3hHtKp0hZ4hBeBkcq83IWzuLm2lcMqYkqa9RRi40eBZGmENkAQEihFhUH8FQ2sFNJfjKC4oTIT1iLMm%2B%2B2ASBDCyJNsaW6UreJ%2Fv%2BngKyXrYPVctRdWhdvIEJ%2F1GBMtTPJoFQz5%2BZb3rF3x0F9V6Bauk8AywYFCQGsvaFhKpJnSXwETXYx24Fbf5xxylO0sS6da6heKkvEsVOKN6mxzs4rczivQkbmZY9GzkLoodXHkXIGZx6m2UEB%2FaeiGw%2FZtnkpsiZA2RAd823daVVFcxEhRryS%2FDUEjJTRYkBS3ChmOCS6UimaUPiH%2Bi6%2BoorzdZPMcqyLrZqK7RPqeiIixuTBUAdzFX%2FyZsOQJgkYUryG%2BlEwmwFyKBo1gnSzuS79c65W%2BpBTXQMM%2BONo9vXuRYa%2FkDhcxO2tfUHdn8tvA9NliiIq0NWTjqSblmceHb8Bq3EiW3x6cKXwOTpcFeCVAXHSs4AEybdf26ugZ2iLZg%2FiWYCwJcunxDDnncm%2BBjqkAa3%2BdZMt%2FKgcXBrfwd3uzwh%2BBIb6HtfZToU9ncAZ96jmCjmcAt2Uaims5XWBTlhTcRNysU%2Fd%2F3ndCTjYLiu9g76uilUZffiSWd%2BICpxHes3SPXHYSW561vKwhs9hgLpudboCuVmXIOBOB%2FvwlRHNkNzIUMDuDAcXPGvKilSUMdsILUMTsEDuaBnmKlNjz0Y1wF6K3yA2BV1K5ubpGqV70Tkx6vhd&X-Amz-Signature=149cc939dfa3b1e9e988ab039d20d2ff3a90daf432cee493c71df2ceceb202ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7IKQKWC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY6kCZ%2BoMd7BM0hvyKy0Z4sv%2FGvQF6%2BssmTJsYrRT8VAIhAPJzd1uECWkr6qGM0lCwVzidPTD%2BOaKydaH5oGv0jVG%2FKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzLXdi5QrPaExw2zwq3APQYnLwRC%2BQWtjaFec6jFzPLtxEfLRmm4NSiIVjHPWdSSmZ%2BT%2By%2F%2FhhdSMNPFiOk8cho2T8F3zjppSK8uFzthSKNvjLyEoVcudUaD2UIPPamlgkIvjdsrokL77KtvP9QA1bjHs%2B8r3hHtKp0hZ4hBeBkcq83IWzuLm2lcMqYkqa9RRi40eBZGmENkAQEihFhUH8FQ2sFNJfjKC4oTIT1iLMm%2B%2B2ASBDCyJNsaW6UreJ%2Fv%2BngKyXrYPVctRdWhdvIEJ%2F1GBMtTPJoFQz5%2BZb3rF3x0F9V6Bauk8AywYFCQGsvaFhKpJnSXwETXYx24Fbf5xxylO0sS6da6heKkvEsVOKN6mxzs4rczivQkbmZY9GzkLoodXHkXIGZx6m2UEB%2FaeiGw%2FZtnkpsiZA2RAd823daVVFcxEhRryS%2FDUEjJTRYkBS3ChmOCS6UimaUPiH%2Bi6%2BoorzdZPMcqyLrZqK7RPqeiIixuTBUAdzFX%2FyZsOQJgkYUryG%2BlEwmwFyKBo1gnSzuS79c65W%2BpBTXQMM%2BONo9vXuRYa%2FkDhcxO2tfUHdn8tvA9NliiIq0NWTjqSblmceHb8Bq3EiW3x6cKXwOTpcFeCVAXHSs4AEybdf26ugZ2iLZg%2FiWYCwJcunxDDnncm%2BBjqkAa3%2BdZMt%2FKgcXBrfwd3uzwh%2BBIb6HtfZToU9ncAZ96jmCjmcAt2Uaims5XWBTlhTcRNysU%2Fd%2F3ndCTjYLiu9g76uilUZffiSWd%2BICpxHes3SPXHYSW561vKwhs9hgLpudboCuVmXIOBOB%2FvwlRHNkNzIUMDuDAcXPGvKilSUMdsILUMTsEDuaBnmKlNjz0Y1wF6K3yA2BV1K5ubpGqV70Tkx6vhd&X-Amz-Signature=e37ad8cc489235986d15213e5e3fb1f399a3673d012b38f49b2accd3090c2702&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
