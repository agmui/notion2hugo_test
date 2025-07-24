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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S655JDD6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDME19YZosYAhp91WUT5YJUiKEmoZmQgVxCA0eVKznfDAiAFPC24sZQOFRZKTbA27kann67Km0ZjOnAYhhiphmrbeSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMrvC%2F1P%2BcEdz%2B5JEVKtwDoxLEN9C1CJFZiCZzo6AgRD9qDfG29fGcVQZM7g2m0kERuKsBBNhQgsRRqhLlgbwg4TXe5MXkZyEjrtWc%2FQZ1wI%2BvNKyN%2FuO4d749DOFZYIXEttc3V2zwn5DTVEETdPBcKlU0lFO%2FdTT4yvIfpHOjmfLETdKYMkhFID8OqEYOQiMzjuf4yFgbo%2Bt00LC%2FfIbPZbZypKVomnfwUNWT5gpHtT84pSqmcBNkoUaDHQ9OhWCd7yg9NNUXYMdFPKVAvmlyNwKr2sXDqDjAf83RxD7cvuGFGgRBlBJ95dM77opaxCLwGFgeynupPyILUak16EXVxCiQmm%2BzLccJs%2FqO3l5vD7LBJZ%2F3ejnmdiU83Aenk9zN%2BO9VIwHL82KQqa8zMUOUinkX2BS6TJB%2BT1KL2yqX64lfHrXBsqo12BhYaZA%2BN6ZyUHsWYljNMo7rS2xoUHQhf7vSTbNPhLPKq2tukxHbdbQxDNFIFbrOjNTVMNTRXdM%2FGEplqvqXJ90kmxbx3B%2BOkLaz4s7BF4UeMMg11vQSyUYQmD5pxPZQ2TReoyRQ3lgodIsY34eFVrkcs4nxJFIVuufrWDTuvYG8Zm1GYqc58X%2BIjQq6ceyLA2kYF69IKIDlT6a8dvt4flq1HdEwntmIxAY6pgHkZmTHIB4Mudwj%2BboSoRB%2B5A4lbhfxOAOF1cXF9sDZB5YMeTnXcRsVkwXUxtAyS0IVaHw1vjTFx61urWCV3NGE7k3ANN6XDakaGsJH%2B%2BU8eZ2mbgoLiJ7%2FD54Z665VuDL%2BPqEuqFUxk51bobCb8UMvTFD7RiW0nynMpQtbXEUrcQAh9Exe832NLB%2BDvLbmEGFeHosrfh4ZNxw2HvNaqkVxNDxP6PBb&X-Amz-Signature=e174dfb7cad087dbd3bb761a3fcbb127607016549ea3497d77e5ed1dbaaa2a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S655JDD6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDME19YZosYAhp91WUT5YJUiKEmoZmQgVxCA0eVKznfDAiAFPC24sZQOFRZKTbA27kann67Km0ZjOnAYhhiphmrbeSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMrvC%2F1P%2BcEdz%2B5JEVKtwDoxLEN9C1CJFZiCZzo6AgRD9qDfG29fGcVQZM7g2m0kERuKsBBNhQgsRRqhLlgbwg4TXe5MXkZyEjrtWc%2FQZ1wI%2BvNKyN%2FuO4d749DOFZYIXEttc3V2zwn5DTVEETdPBcKlU0lFO%2FdTT4yvIfpHOjmfLETdKYMkhFID8OqEYOQiMzjuf4yFgbo%2Bt00LC%2FfIbPZbZypKVomnfwUNWT5gpHtT84pSqmcBNkoUaDHQ9OhWCd7yg9NNUXYMdFPKVAvmlyNwKr2sXDqDjAf83RxD7cvuGFGgRBlBJ95dM77opaxCLwGFgeynupPyILUak16EXVxCiQmm%2BzLccJs%2FqO3l5vD7LBJZ%2F3ejnmdiU83Aenk9zN%2BO9VIwHL82KQqa8zMUOUinkX2BS6TJB%2BT1KL2yqX64lfHrXBsqo12BhYaZA%2BN6ZyUHsWYljNMo7rS2xoUHQhf7vSTbNPhLPKq2tukxHbdbQxDNFIFbrOjNTVMNTRXdM%2FGEplqvqXJ90kmxbx3B%2BOkLaz4s7BF4UeMMg11vQSyUYQmD5pxPZQ2TReoyRQ3lgodIsY34eFVrkcs4nxJFIVuufrWDTuvYG8Zm1GYqc58X%2BIjQq6ceyLA2kYF69IKIDlT6a8dvt4flq1HdEwntmIxAY6pgHkZmTHIB4Mudwj%2BboSoRB%2B5A4lbhfxOAOF1cXF9sDZB5YMeTnXcRsVkwXUxtAyS0IVaHw1vjTFx61urWCV3NGE7k3ANN6XDakaGsJH%2B%2BU8eZ2mbgoLiJ7%2FD54Z665VuDL%2BPqEuqFUxk51bobCb8UMvTFD7RiW0nynMpQtbXEUrcQAh9Exe832NLB%2BDvLbmEGFeHosrfh4ZNxw2HvNaqkVxNDxP6PBb&X-Amz-Signature=154bf8bca270e82bf3e9b80a776973cb56bd0466bb71018f43fb1612f1d2689a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
