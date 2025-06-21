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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOZDEK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN26WALei0FfYeKDNGg4PhPF3BL9R60FR4%2FG1481LZfAiB2FrKQoBRQd0r1xgTjOECcOGeWPr89yxunDiwQDF7LBiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrB2wgbj8IE%2Bwtu78KtwDcsJpMYsZX9JnF4fktZJRxlimSRjgiFF%2B7oOevUh7wNzQatEsgL7BseO7Ek9PL6O4hoSWbl4nhdyfvUPg6DLxjQ7UZHOavSDinoqsz7CxUeiB8enDA0cpRUJaBvPreg6p4WJBjXs6sGYjBPZjKIi%2FV%2Fo6yMC61pfK%2FUWwvSLt5Rvmwf9JpqiRgUB3e58ATerW3fRTy9y%2FG4DR1DJ4o%2FDNN4OQa7o%2FT%2FILamDtU95CvSiMqQWNB90tgO0CkQ7u9CJZgF%2BpeSBnLHSdRnswrCYejTritt1Xh73vGXNPcRVZRPTSp8kBwjTsUR9rmC237YHYDTSrVXf0DVGtsn%2F5dC0T1d78Ooxs8arAcowit6wnpGdY1KN%2BUwBAyrOnEx1GJhCaTVJU%2FfiIBmtGXUHBWs43Z1BIVeOFeouJqCTclq1YcvuXuZihnHsDCY1NwZiE71eCBtJ6dmE3NhFagzeIxbDpTyNuo8o6545%2FbHT5SAlJlvMrNngkUGsVsJUbtWm7iVMxEc%2Fm%2FyCV50jjNAQmhNl5%2Bm%2FFo1nTrellw4Mz3KPGrNFzz2%2Bdc5IVz2m24a0%2BDSZamX%2BPAIDXN5aR3l7LX7Tfqo8ZKYhPWc0%2F2clc%2FeOf1lJZT6%2BG4b1XJyWJrMUwkqnbwgY6pgFvbP9vMRgMl34dcx6Ux1bvo0Kt6ii9eyzwnTUADUdWwPDgkE2J9Rs7Wg9tQ7SpHkd3dqCbmtaNLLZviHyHMTNjIVplaBjPvO5wOlqhEeyqDiHEi%2FeQ4Jm9vgkO65MzxwZQRLXQNeudZQ6tksfsHx9kDki%2BcNx%2BLzR7e5aolszOCSa6bxJD1ZF0t2NajHMEodplfSCgnwatmO9aD8zqNkfvnGIYbPAx&X-Amz-Signature=dd67ae0282d4ea0474b1678c4ce4ccfaacff74054a66437d50fc2b4e75a268af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOOZDEK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN26WALei0FfYeKDNGg4PhPF3BL9R60FR4%2FG1481LZfAiB2FrKQoBRQd0r1xgTjOECcOGeWPr89yxunDiwQDF7LBiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrB2wgbj8IE%2Bwtu78KtwDcsJpMYsZX9JnF4fktZJRxlimSRjgiFF%2B7oOevUh7wNzQatEsgL7BseO7Ek9PL6O4hoSWbl4nhdyfvUPg6DLxjQ7UZHOavSDinoqsz7CxUeiB8enDA0cpRUJaBvPreg6p4WJBjXs6sGYjBPZjKIi%2FV%2Fo6yMC61pfK%2FUWwvSLt5Rvmwf9JpqiRgUB3e58ATerW3fRTy9y%2FG4DR1DJ4o%2FDNN4OQa7o%2FT%2FILamDtU95CvSiMqQWNB90tgO0CkQ7u9CJZgF%2BpeSBnLHSdRnswrCYejTritt1Xh73vGXNPcRVZRPTSp8kBwjTsUR9rmC237YHYDTSrVXf0DVGtsn%2F5dC0T1d78Ooxs8arAcowit6wnpGdY1KN%2BUwBAyrOnEx1GJhCaTVJU%2FfiIBmtGXUHBWs43Z1BIVeOFeouJqCTclq1YcvuXuZihnHsDCY1NwZiE71eCBtJ6dmE3NhFagzeIxbDpTyNuo8o6545%2FbHT5SAlJlvMrNngkUGsVsJUbtWm7iVMxEc%2Fm%2FyCV50jjNAQmhNl5%2Bm%2FFo1nTrellw4Mz3KPGrNFzz2%2Bdc5IVz2m24a0%2BDSZamX%2BPAIDXN5aR3l7LX7Tfqo8ZKYhPWc0%2F2clc%2FeOf1lJZT6%2BG4b1XJyWJrMUwkqnbwgY6pgFvbP9vMRgMl34dcx6Ux1bvo0Kt6ii9eyzwnTUADUdWwPDgkE2J9Rs7Wg9tQ7SpHkd3dqCbmtaNLLZviHyHMTNjIVplaBjPvO5wOlqhEeyqDiHEi%2FeQ4Jm9vgkO65MzxwZQRLXQNeudZQ6tksfsHx9kDki%2BcNx%2BLzR7e5aolszOCSa6bxJD1ZF0t2NajHMEodplfSCgnwatmO9aD8zqNkfvnGIYbPAx&X-Amz-Signature=9bb2ceda99d46549e2f54c1f950ebb57cbd64e839984b91a9337498d0da35f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
