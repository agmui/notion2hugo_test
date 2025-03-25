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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCGPERE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2FxQLypxS%2FwVeC4WAfYOwFFu6Kb4iC4iYC5%2F3ZzbrywIgPeKjfqeQ2N84fkyaFEMqHSRQCLTmRAsc9Yrv%2BaLpeyIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOUln4S%2BYltxUHl7SyrcAywCOL3n55g3fsfiPMH7GqB7TDdK51ni0Ttm2CQqQeNkh2tAvuzV6IGHUvxlwSLaGQCj1b8O8ymcDzZ4deXKVMWcLcPPN4JTljEWZwGf44SLrdTnDNKPwSxwMHZtr70iWqmtojy6grbzUy38ff3iq506aQQTrfmfvcf%2FZfEkgP8mSRXXMjFejzSkR4mEmdAeKv0%2FD%2BG12ByPxkMswsSOvtJYVV8Wa4lPhpiM%2B2L06wbFlPzX82NOLPWYDkxdjqjrRpGp8FsiFYnDMzecopDXQvlsdRPBF7H3rI%2BV1t8qjKVSP9E4s3jAwKjSn64Rr48u1lwYqkR4Quv3E1SqFF49AFzoUOcyuyrvltnToTE7uLSXkaovoTjDl11tqb4%2FDQWFlPkt9cK%2FRpFYUCHOrZk%2FmMMndRzN0%2FzvBSdKFjRfhsQZpO9qwntQ5THJdVMzEp7z2KbEVTHynZvWspzEqzMTq655tNUMp8w6SD9IArnYxnD0%2BqoP6vhCz4F%2FJmuXP12u7fndwmwHXLa1khMbWLOLspBkYX34O4hxlD7hGM6%2F6XK4gw7Gh7GttDVmywy9P%2BQAOw7wuikmRd0QU2U7E1AzmzTBV1Nym8gr0rGGX%2F%2BxeGalE8du9THkAGSxLCrGMOGXjL8GOqUB6peVY3lQbwodB%2BV%2FcVC8C2uEh%2Bippm%2FLi8S0SnLYq%2FM%2BVrQ5j7xAABCILcJLxvUz6RC7jFQHqRmKFuWZiGFDUk5pgs0ceU%2FCBP4UFHmCkurtnEKcsa2JEpta%2B9BcT%2FYKYiiMNXMd3oe%2FBghXl4oKkhvBRx4vltMYisO0PD3he4JoJinIb%2BSHQ3P4oLTMePTHTEiSsZdWHfqV6WS9GBRPYscyKbYf&X-Amz-Signature=040ccdad18d76cb78497407cb3dd3454fb36c7b016e0fabf762e1969847db4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCGPERE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2FxQLypxS%2FwVeC4WAfYOwFFu6Kb4iC4iYC5%2F3ZzbrywIgPeKjfqeQ2N84fkyaFEMqHSRQCLTmRAsc9Yrv%2BaLpeyIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOUln4S%2BYltxUHl7SyrcAywCOL3n55g3fsfiPMH7GqB7TDdK51ni0Ttm2CQqQeNkh2tAvuzV6IGHUvxlwSLaGQCj1b8O8ymcDzZ4deXKVMWcLcPPN4JTljEWZwGf44SLrdTnDNKPwSxwMHZtr70iWqmtojy6grbzUy38ff3iq506aQQTrfmfvcf%2FZfEkgP8mSRXXMjFejzSkR4mEmdAeKv0%2FD%2BG12ByPxkMswsSOvtJYVV8Wa4lPhpiM%2B2L06wbFlPzX82NOLPWYDkxdjqjrRpGp8FsiFYnDMzecopDXQvlsdRPBF7H3rI%2BV1t8qjKVSP9E4s3jAwKjSn64Rr48u1lwYqkR4Quv3E1SqFF49AFzoUOcyuyrvltnToTE7uLSXkaovoTjDl11tqb4%2FDQWFlPkt9cK%2FRpFYUCHOrZk%2FmMMndRzN0%2FzvBSdKFjRfhsQZpO9qwntQ5THJdVMzEp7z2KbEVTHynZvWspzEqzMTq655tNUMp8w6SD9IArnYxnD0%2BqoP6vhCz4F%2FJmuXP12u7fndwmwHXLa1khMbWLOLspBkYX34O4hxlD7hGM6%2F6XK4gw7Gh7GttDVmywy9P%2BQAOw7wuikmRd0QU2U7E1AzmzTBV1Nym8gr0rGGX%2F%2BxeGalE8du9THkAGSxLCrGMOGXjL8GOqUB6peVY3lQbwodB%2BV%2FcVC8C2uEh%2Bippm%2FLi8S0SnLYq%2FM%2BVrQ5j7xAABCILcJLxvUz6RC7jFQHqRmKFuWZiGFDUk5pgs0ceU%2FCBP4UFHmCkurtnEKcsa2JEpta%2B9BcT%2FYKYiiMNXMd3oe%2FBghXl4oKkhvBRx4vltMYisO0PD3he4JoJinIb%2BSHQ3P4oLTMePTHTEiSsZdWHfqV6WS9GBRPYscyKbYf&X-Amz-Signature=e6f4cc1e06fe9694bb938df365825473497fe7beff180b1e3aae0a50af3a35a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
