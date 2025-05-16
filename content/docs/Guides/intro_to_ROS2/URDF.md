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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUU4YGU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUtmvRuMK4saUdPnaw3Y9%2BooIPIUaY%2BXM4clUw%2FyPWTAIgCgn9UIx8wCeoVwFnUJ7N6LpgvJDxx%2FRK%2Fu3ZrUq9qCIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHTLZwoo1BqEdmSepircA%2BQvte4ReSAb6kw6DRjeNqjMnvYAdh8QNlocrpAbT%2FXWkncuwNVbMTa1BBELhMncOvKt2lrWZ1cVVR%2BrrlmnHG07eW0wEgWQCWI0xdr3MSlPstDrmqr9NMDYusM8RLizVGI7OjCEZkzxlOxNu5YS9fIiNRSck0O8eQ%2FdUGwJ3aBduePdCzmH1CL62uuf1qgboy49JpEYOZGgRsl%2Bjos6k8BQiTtT%2FhVhM1F9XMddEr5tzMWfMRIwQ%2FXjp609Ok%2FX%2B0HYU8VU0tCdDtjYBMcmarq4nIv8TFucx8JeaVQCf1yxotJsiyOJ%2FKEF6xPy3n%2BsEe%2FsRzypii8qDBDhyUdWfFK0aQE3kGKQeBGjlvXIXkwZvirB4G%2BxZFrMTViXQIugcab2ALbsSboMbNknTnFI1xi4l8UtFgkVSeNMjNumVs3qBDQs9IZuARNl7yMNnMlHJRggbP3%2FUI%2FrD54R%2B9gidZsfZolNmRdGatijlKexVz1GuB8rdG%2FBoDVvgtUfq0yiZqi3%2F48wQ6%2BxejOSgVU%2FzUGDN11a6MnIykUHIVHBvBCE1OFEMjpKSM8cigoxXlg%2FbgU%2F%2BXOm0KxU7Xc1JhZ46ZE%2BH3kcTRcRLD4PonrTfyvWunc1RA5TrUoq0nYkMPGAncEGOqUB1xrKOONfB5c0qldQ%2Flu%2FdkLC3N%2BvOUNWeLuiSPupwWCQxRlDgpSz%2BXY2EdcSuJio6SCFvU5Nz40KP0rcDxl24hGCOpPMdEHDFYtDpw%2F2BW9y3xasQetgBNX2rEN3RQNUNZJkbLGR3Ib3PDb2%2FjSc1rI3R4MJA%2B6kHzOCMy4A6tBwVZaSCSVAn5J6XFIPSmShK1wH8F%2F0tCVIQeE2iupwaD39SGLP&X-Amz-Signature=86fcfd36459e9a6a10f1e8a00d2a3da119fa2600fcc693f901ec75fb3c5978cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUU4YGU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUtmvRuMK4saUdPnaw3Y9%2BooIPIUaY%2BXM4clUw%2FyPWTAIgCgn9UIx8wCeoVwFnUJ7N6LpgvJDxx%2FRK%2Fu3ZrUq9qCIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHTLZwoo1BqEdmSepircA%2BQvte4ReSAb6kw6DRjeNqjMnvYAdh8QNlocrpAbT%2FXWkncuwNVbMTa1BBELhMncOvKt2lrWZ1cVVR%2BrrlmnHG07eW0wEgWQCWI0xdr3MSlPstDrmqr9NMDYusM8RLizVGI7OjCEZkzxlOxNu5YS9fIiNRSck0O8eQ%2FdUGwJ3aBduePdCzmH1CL62uuf1qgboy49JpEYOZGgRsl%2Bjos6k8BQiTtT%2FhVhM1F9XMddEr5tzMWfMRIwQ%2FXjp609Ok%2FX%2B0HYU8VU0tCdDtjYBMcmarq4nIv8TFucx8JeaVQCf1yxotJsiyOJ%2FKEF6xPy3n%2BsEe%2FsRzypii8qDBDhyUdWfFK0aQE3kGKQeBGjlvXIXkwZvirB4G%2BxZFrMTViXQIugcab2ALbsSboMbNknTnFI1xi4l8UtFgkVSeNMjNumVs3qBDQs9IZuARNl7yMNnMlHJRggbP3%2FUI%2FrD54R%2B9gidZsfZolNmRdGatijlKexVz1GuB8rdG%2FBoDVvgtUfq0yiZqi3%2F48wQ6%2BxejOSgVU%2FzUGDN11a6MnIykUHIVHBvBCE1OFEMjpKSM8cigoxXlg%2FbgU%2F%2BXOm0KxU7Xc1JhZ46ZE%2BH3kcTRcRLD4PonrTfyvWunc1RA5TrUoq0nYkMPGAncEGOqUB1xrKOONfB5c0qldQ%2Flu%2FdkLC3N%2BvOUNWeLuiSPupwWCQxRlDgpSz%2BXY2EdcSuJio6SCFvU5Nz40KP0rcDxl24hGCOpPMdEHDFYtDpw%2F2BW9y3xasQetgBNX2rEN3RQNUNZJkbLGR3Ib3PDb2%2FjSc1rI3R4MJA%2B6kHzOCMy4A6tBwVZaSCSVAn5J6XFIPSmShK1wH8F%2F0tCVIQeE2iupwaD39SGLP&X-Amz-Signature=5ec6c9e6a43ff501b52c734ae512ca95de94001cc395c2b18a24a271ee21b7da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
