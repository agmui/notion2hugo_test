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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMKTSVH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxD29yclo2bh7aDeJfBC%2BWhlT8nWeVDXjxxTer0g69eAiEA8qZwmtX1tPPR6hxTQK0tm3dM5GiDBvw%2BwMZjpHv%2FSrQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDiFhPl0fZ62mlDLSircA1ZdfQbnjdTlV2EH4BCzd0pTqBAsSywQvq2CVmZ3RsMx782Unm6Zz4PIw7eawiehg7EU64PjHBNx%2FOiJo3jY%2F0OfgWk0Ry1SWxprWRA7YXAKK8ME8crv6zIRHj6HySMODorBEBPmXsfVgGI3TUwqZQQZ4MCc8Ghn55gcp1tt5WQw80f1XBx1MIV4haDrMbdD4UdPbujtHUJsdWCye0taWMsI7Q2XXmH6zQowRQRi8b0Cc6pROCiqdKk5KoIdkNIhNPJy6G3S30FvICKYZDgMTZLPe1kynJTDX4Z5s3hIgA1CENmrFNAK5qOVbSKJKNvAMXgx9oDpkxQnGoO4bWWHLJIsjbIJYQdg%2FWQ4JII2RRkYVph9vwRe0a4Dr%2FkwWnC3nff%2FVKahAU8c%2Ftutkm2B%2Bu72026PKVHaCSC8btVf7PoqTgB1EIBvL6Wyh9AoXJ12qorg6qHzvaOoCPNcy6JJ%2BR6uxpONlZpBD%2BxXMZ4tMb%2FibPcnkhaUi%2B53IS7V%2B%2FCZCrcCM4TDlw69gKLDMQGvEK9rHLSAPuI1nH0aXMBLs05I84QdkoITMue98bnqDfaWuBiZ%2FrSm%2BGhB3iDe8Xcc8TatGJGMbfp1XuLcIIAEROJ%2FoPQB80QDR19%2BSvgUMKvlpcEGOqUBc3LmV%2FtxMOT%2F5jIibHzJfoB8uilhVd4T5C5QC%2BbinBRiqF7AABxY73E%2Bs%2BdyTDj0uQce4birdAOEx3JitpW%2B40xBOSCexZqr%2BxAggJICGFkm%2Bv6fE99u0sbXUcBbQCwP6qsY4USyRgBfwGw75IFlT0sYTmZ6JD8OKLgbYZt7z%2FZn6cMneJBTtF2k98tledByCiNwc1Um1LGRPa7a5xE7pi87CwVt&X-Amz-Signature=80c0d9976094cb734b97bb24c461786d88bc83f37933e772a4de2d9ccaff11ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMKTSVH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxD29yclo2bh7aDeJfBC%2BWhlT8nWeVDXjxxTer0g69eAiEA8qZwmtX1tPPR6hxTQK0tm3dM5GiDBvw%2BwMZjpHv%2FSrQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDiFhPl0fZ62mlDLSircA1ZdfQbnjdTlV2EH4BCzd0pTqBAsSywQvq2CVmZ3RsMx782Unm6Zz4PIw7eawiehg7EU64PjHBNx%2FOiJo3jY%2F0OfgWk0Ry1SWxprWRA7YXAKK8ME8crv6zIRHj6HySMODorBEBPmXsfVgGI3TUwqZQQZ4MCc8Ghn55gcp1tt5WQw80f1XBx1MIV4haDrMbdD4UdPbujtHUJsdWCye0taWMsI7Q2XXmH6zQowRQRi8b0Cc6pROCiqdKk5KoIdkNIhNPJy6G3S30FvICKYZDgMTZLPe1kynJTDX4Z5s3hIgA1CENmrFNAK5qOVbSKJKNvAMXgx9oDpkxQnGoO4bWWHLJIsjbIJYQdg%2FWQ4JII2RRkYVph9vwRe0a4Dr%2FkwWnC3nff%2FVKahAU8c%2Ftutkm2B%2Bu72026PKVHaCSC8btVf7PoqTgB1EIBvL6Wyh9AoXJ12qorg6qHzvaOoCPNcy6JJ%2BR6uxpONlZpBD%2BxXMZ4tMb%2FibPcnkhaUi%2B53IS7V%2B%2FCZCrcCM4TDlw69gKLDMQGvEK9rHLSAPuI1nH0aXMBLs05I84QdkoITMue98bnqDfaWuBiZ%2FrSm%2BGhB3iDe8Xcc8TatGJGMbfp1XuLcIIAEROJ%2FoPQB80QDR19%2BSvgUMKvlpcEGOqUBc3LmV%2FtxMOT%2F5jIibHzJfoB8uilhVd4T5C5QC%2BbinBRiqF7AABxY73E%2Bs%2BdyTDj0uQce4birdAOEx3JitpW%2B40xBOSCexZqr%2BxAggJICGFkm%2Bv6fE99u0sbXUcBbQCwP6qsY4USyRgBfwGw75IFlT0sYTmZ6JD8OKLgbYZt7z%2FZn6cMneJBTtF2k98tledByCiNwc1Um1LGRPa7a5xE7pi87CwVt&X-Amz-Signature=8e35310c0e2124e933f8a3a6be599d09376c79653e198218935fee24f08c3459&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
