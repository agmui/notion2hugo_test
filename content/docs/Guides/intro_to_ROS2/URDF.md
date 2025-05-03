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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=3ba0e9090f72b94f2bc26ed7489344e50d2fb8816262db2a450be161603f6d99&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35ZTNYP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCdmRpam4HmxU0dDM5BLRLHflflWbUTQ%2BktcgmkvKu%2BLQIhAKNfsAqll%2FAHnycisWy5ZmDehLPOhECpjpXTRgRrtjJuKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B0X4fXqY1A%2FGV6sgq3AMjrk3GAr0HIcau8%2FH9CQJjh8pvXscmWbT3Tm8K0I7fiWzzgKnCNJJgym%2FZlU%2FtU7dDQYJoCnGplILVvFDvh7murHtifduOAsK8LpTKozmNOR5yuX87EayS4jolsSO3YlL19Qr%2F9P%2FU7Ht4%2Bv6FLKiMo6cumY8grrZPjXksvDERaw85c780RhDyGeZU%2BFIrEQRnSR%2FROhben3ppCpom2nFbc6sCbI1TLORpYHZviaGsvLILrU2TTQQwEuQil03bOAOCLCoRaOUlPoGcfJZYL9LrfUAB6%2BV1UXt0SZ85GE481NfL82HRGDmoQjCw2NylZ%2BHswj0Cg7u5aYIK87bJg07Jgb0619ZictR2mkpeNHBZBO9Fw%2F%2F%2FePX4GZjX6RDEGFM9eD6f9Cw7poSYkkQ7ETEML5VHvJ6NwQRWuyr%2FVIOkLqNt63jgef4wI6ZWaJW3%2B4%2F88oyGO%2FmOL%2BuiAKTW%2B2vV0RkfTXEE005Qs15pzZqxfvoeLfXmJQ2AnrF%2FkXuZYgWx1Xsh%2FRRPiL8GswonE%2FyIFTDtPatM54r27KNtpK6Oy9vrlCbf83Ksf3RYdzmofz%2B%2B2GxwVaphEn5tnHMElKXFVhVO53NjatLdnJOSRUQsr3wnzR%2BtK8U%2FCIXokzC13tfABjqkAYHZAqVs%2FH3tEfuNBIA%2BSqXLzd1C%2BwgeSpc3Gb8bKLO5JX3t4YX6jvIQPv1AnC9eRYw%2FTvGfGW3pO4MetnnpvyIpXTVvfOCCuohXEORhiaNpp473bP8gZYpPxsjZsM%2FEPCqZ9NsFZc6eQqBI0N1cNFhkIbuceeTXeC0hc75A4CNULr9tfXl5ZjgYAtz%2B07fMCgGllPhAyaR0LOJc0WjbAvQh2hAb&X-Amz-Signature=204827e3482fd3280a599c2c37f5e13c5e881da0660e45cc77d73ed805f28fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
