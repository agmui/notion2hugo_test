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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ57CF2U%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNNr4CxMFlR9mkrqrn2TjBSsegaKrykoReqOTqNwSP2gIhAPee5OisgGnrArcFqTlNn0HhOME2mwK3wo2ZV3dCsJ9sKv8DCCcQABoMNjM3NDIzMTgzODA1IgwqG2K0SdjROBLZY0gq3AMYJ3tqhPyTdF48IWPvXP2Xdi73jdHhYGtir%2BHGZwmyEUAQ%2BWb243PbbJkkEs4SN%2FyHSWGMitxgvkRYsBrmz7z58CXeUjqPGHgEdAVeKiMyK%2BkVmqvUaEwxSv5PVpQvYGcTvuAZK44kv6LCNnpba0OlKRbUkzDyykLP66oHNk93b7cM7Cet%2FlOevsrPv4L1CrLcyeubR%2FiN3hfw5XJ7u9Owqd%2BNlUUSh%2Fpj3zUzAKSTGe4GQnpZdydvqR%2BHKpuq2KSnswDPKWR4Bmgb%2Fm2L6wX8BeljVsVTrixWjyrtFaWkn5JtmwMzhpDzX1P1l2KcOjLCEghUGlzqA3mx%2F%2B4tAbpnt6G9JGRCS%2B5e0Vokxb5Eeh7q4u4%2BFeQ5mFINBvAmEbl15PV2WmKYdXRRl8JmkOlVzNsrR%2F%2FoUnACcX1P7bjhuIvPFSQ0rDuqDYuJF5muyKkRdj7%2BpOM1PMrJbu2FnHTl8m0Wts94JZYZc9FstrretA1xEhIoJbQ1HCPFGIf21OOSEc8UHoMoFdk7mltI%2Bl0OaTFos7NYlQy8UOqKZXfMo2Bu5Zx%2FWfUrV8eWwIrbtO8Fc4qwtC62P60%2B5RB2YH72S77ukQdgnXGpYATXQG2JcCFsgR%2FHg5U9SzILDDC096S%2BBjqkActKCGXsO8jnjrKkryCzeF6fwjdr3o5D9dkEpjgKdT955rN5OSwAarOU%2BgouJTaEf%2BMhv2Z3D1siXZHfdURB87n8w8fnm499jhJTPoVS4gYGXdZFK7or5fkoI9OH0Yzb5eBBiSZCvUm0juBgYgCriSr8eUqzt02PTP2ouOIWeLtC3wMEaFwlg%2Fm5FADLm5G9wUOBPF%2FH72XC1PnPpZ4jeHS5NC7w&X-Amz-Signature=c85f59c968068e4488380f2f03eb7635b9ff024e008d5355bdfb582d81e433e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ57CF2U%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNNr4CxMFlR9mkrqrn2TjBSsegaKrykoReqOTqNwSP2gIhAPee5OisgGnrArcFqTlNn0HhOME2mwK3wo2ZV3dCsJ9sKv8DCCcQABoMNjM3NDIzMTgzODA1IgwqG2K0SdjROBLZY0gq3AMYJ3tqhPyTdF48IWPvXP2Xdi73jdHhYGtir%2BHGZwmyEUAQ%2BWb243PbbJkkEs4SN%2FyHSWGMitxgvkRYsBrmz7z58CXeUjqPGHgEdAVeKiMyK%2BkVmqvUaEwxSv5PVpQvYGcTvuAZK44kv6LCNnpba0OlKRbUkzDyykLP66oHNk93b7cM7Cet%2FlOevsrPv4L1CrLcyeubR%2FiN3hfw5XJ7u9Owqd%2BNlUUSh%2Fpj3zUzAKSTGe4GQnpZdydvqR%2BHKpuq2KSnswDPKWR4Bmgb%2Fm2L6wX8BeljVsVTrixWjyrtFaWkn5JtmwMzhpDzX1P1l2KcOjLCEghUGlzqA3mx%2F%2B4tAbpnt6G9JGRCS%2B5e0Vokxb5Eeh7q4u4%2BFeQ5mFINBvAmEbl15PV2WmKYdXRRl8JmkOlVzNsrR%2F%2FoUnACcX1P7bjhuIvPFSQ0rDuqDYuJF5muyKkRdj7%2BpOM1PMrJbu2FnHTl8m0Wts94JZYZc9FstrretA1xEhIoJbQ1HCPFGIf21OOSEc8UHoMoFdk7mltI%2Bl0OaTFos7NYlQy8UOqKZXfMo2Bu5Zx%2FWfUrV8eWwIrbtO8Fc4qwtC62P60%2B5RB2YH72S77ukQdgnXGpYATXQG2JcCFsgR%2FHg5U9SzILDDC096S%2BBjqkActKCGXsO8jnjrKkryCzeF6fwjdr3o5D9dkEpjgKdT955rN5OSwAarOU%2BgouJTaEf%2BMhv2Z3D1siXZHfdURB87n8w8fnm499jhJTPoVS4gYGXdZFK7or5fkoI9OH0Yzb5eBBiSZCvUm0juBgYgCriSr8eUqzt02PTP2ouOIWeLtC3wMEaFwlg%2Fm5FADLm5G9wUOBPF%2FH72XC1PnPpZ4jeHS5NC7w&X-Amz-Signature=130d8f6b459d3c4565a394bf29960c0772a9691dbb63e58787741a897b04db17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
