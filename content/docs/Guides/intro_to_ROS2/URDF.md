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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLFNA7B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH4PeUz%2F9DPQeDvzowcV3dUPB19ptB8Fl5gmw5bXDapFAiAkXEaI84Wf8xh5i6Pw%2BTh3mSjcOCL0XovqfLIKfsNoLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM8M3hzkAVVf%2BzYsepKtwD3TDcrsLY8i%2BlS5042AxgnZzwnUMXAfI6w5RAr2sK%2F3g6wQvB6uBJsddRNgiPyI45uGbWPiwzpgsZtzKlKGC7XI7%2FwdmiyyRLOnVjezAe1zP74G0HQ%2FXMeX9IQ6eU%2BgzypqADJZw%2BadmaMXayAEi%2Fej3UFzsU7pHbacyYGmpeSOcnyPzM6IsssNA16e0PAqQiRaxisY05UuWWwo0e57k%2F%2Brd0bVXEJn0s39ppGmKCJ%2BzzNlYwEdzO4SQM7MRgY1T4I19z11YL6yVI3t51nOuRzJ477Ue%2Bif4htc6aYrenFvsOhISjnGxUHSu9To7Z9ff4J25Q2UIq9x0zNT%2FvICRAlOQ%2FtnTstBa6kLmchPOSjELpTooPRXdvDNIiVH8eFLSY56WEOe4AXSRur3W8Ir23rIKrZ5d5Nh2MM%2FF7WFuxKTivb6bCfhAkQD%2Bk5QCs7g%2FvTpTwzNmtntHXr0HlNfJzsKjeypJ00iVmvqGu687hbAgYp9GYSfG7MQNKGUVuzAbMvS8wJ0aj%2Fx5RGzoxyMCAyM8NqdQTiMAEEoA1bX4AnHZv%2BhU%2FXXlqMjwPXG5hO%2FwJApJCNL3lm%2FmzmozAIUjaY%2B9ic9%2BK5apsKBLb3UQ686okxVflgkFR%2FSayx%2BUwn%2FTExAY6pgFS7HxIow1on1AYVeos1hK4boMhxjz8jYJ8j%2FJQc%2BzoN5%2BGtB%2Bru%2BEZ4TZpomlFV8r9lxqN3NbGgebSe4R2cts2ROh9mvqSDB9uYQlS7Y12RgeDusjVbduxOKLKRVRxfRyCMEhXEgnfccMtBcioSKX%2F4p0K%2F%2FIEGBZPVzctFcT20VUMqpVhida2H8EenG1hqWIhEhU8W2IC7MWrtWgcvYREUy3TJf5S&X-Amz-Signature=c3db8a1622381291789fc7f82c1983b54b250e4720b6622bf0ac7b1a2aa57ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLFNA7B%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH4PeUz%2F9DPQeDvzowcV3dUPB19ptB8Fl5gmw5bXDapFAiAkXEaI84Wf8xh5i6Pw%2BTh3mSjcOCL0XovqfLIKfsNoLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM8M3hzkAVVf%2BzYsepKtwD3TDcrsLY8i%2BlS5042AxgnZzwnUMXAfI6w5RAr2sK%2F3g6wQvB6uBJsddRNgiPyI45uGbWPiwzpgsZtzKlKGC7XI7%2FwdmiyyRLOnVjezAe1zP74G0HQ%2FXMeX9IQ6eU%2BgzypqADJZw%2BadmaMXayAEi%2Fej3UFzsU7pHbacyYGmpeSOcnyPzM6IsssNA16e0PAqQiRaxisY05UuWWwo0e57k%2F%2Brd0bVXEJn0s39ppGmKCJ%2BzzNlYwEdzO4SQM7MRgY1T4I19z11YL6yVI3t51nOuRzJ477Ue%2Bif4htc6aYrenFvsOhISjnGxUHSu9To7Z9ff4J25Q2UIq9x0zNT%2FvICRAlOQ%2FtnTstBa6kLmchPOSjELpTooPRXdvDNIiVH8eFLSY56WEOe4AXSRur3W8Ir23rIKrZ5d5Nh2MM%2FF7WFuxKTivb6bCfhAkQD%2Bk5QCs7g%2FvTpTwzNmtntHXr0HlNfJzsKjeypJ00iVmvqGu687hbAgYp9GYSfG7MQNKGUVuzAbMvS8wJ0aj%2Fx5RGzoxyMCAyM8NqdQTiMAEEoA1bX4AnHZv%2BhU%2FXXlqMjwPXG5hO%2FwJApJCNL3lm%2FmzmozAIUjaY%2B9ic9%2BK5apsKBLb3UQ686okxVflgkFR%2FSayx%2BUwn%2FTExAY6pgFS7HxIow1on1AYVeos1hK4boMhxjz8jYJ8j%2FJQc%2BzoN5%2BGtB%2Bru%2BEZ4TZpomlFV8r9lxqN3NbGgebSe4R2cts2ROh9mvqSDB9uYQlS7Y12RgeDusjVbduxOKLKRVRxfRyCMEhXEgnfccMtBcioSKX%2F4p0K%2F%2FIEGBZPVzctFcT20VUMqpVhida2H8EenG1hqWIhEhU8W2IC7MWrtWgcvYREUy3TJf5S&X-Amz-Signature=9838486ee66a41c1161c592ee928743e06882134a7cd508c35a1d97b8307e268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
