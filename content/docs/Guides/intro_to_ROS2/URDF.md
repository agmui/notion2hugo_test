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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW5FBT4K%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1YV0TERaBuQRdTl%2Bjnj8%2BZEUmOev5r8OKEGeF8cIyMAIhAN6DnapqIzPC0%2BlsQK2jw3bikQ2CqvtdHwb3iAtCz%2BKHKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWkoXCg%2BTesWBbdQUq3APZAiChuirs9dwHMwT9Dch2KVFeY8b8ec6P1Nh5w8Z%2BU6MS368MzRXRArkfD0StGEdmkcGXw%2BliBCwmYukBhQIOf05SG4O73hW6ooXNItpcBTEhkvI%2F9kdCTQqqEhdOas9GjtghqavTYuV3uV0f4nduj7pbXjI4QpQZyvfr%2BZ1Ko42lW4rkjjPUWe9C44uIPdxxrU1WNFk%2BhGSoWct17DlBL3G15kg%2FcK%2BnRsDevYblRrV%2BlHGJdYwG7ob3Q3maOOEJGGj9N77BgnnCfUkMBIBu1RlWpJbCLCVMj89t%2BtSDxBYzxxtrh8G%2Bja5gJbS4DhRfMNC2F%2B00YjqGG2rn8XO53srdT4ojjT3q1NO4ANrCb2egVX%2BgtfYs1T8Zix8MKMFxxRAHW26Wz79EXVgwRjf6c9%2FYd9mOTqf0iwDLOsi1Be%2F3XW7tWTZUH%2Bom%2Bfaxyr0fVZ8B0Q2n%2BnsJVUVCHOK91QL3J4vx5%2Bc%2FqtVK5RtJOGeK4MKEMdU36g0aUPlglEnMWggWuVgwOqitTcIH1saZMYfRpBT1yZ1UB2dkH78kmIB1t69saFVDDc2eg%2BoJKd0waoW%2Fpo32xTSrIBF3USF5KkpsaVRYEmdaE%2BKp1%2BxvPbk7JZ%2FUNovLVsDdWDCQnpLDBjqkAdc0h4FA5khtB0842x3ClwpBWpxjNC22V%2BGQhWIyYSpN4OJL48lYWStHFvobetc96m1lnlwzlrat8Jx8DFqSdCVv%2FcG1zpClV35cGA%2FGDv8daw98LRCQ8yToeRM%2BjmyV1yBue%2F%2BZLlXta7lBtXVZh8g0lJpceC2Q2ZE6JU%2B8aizyKKFMICvNkP7g4wXm5xfRm%2FiDQ97nCHmXT7lAGNAX%2BZenddlr&X-Amz-Signature=05e9daba1ad58f58161b643f13d6a9b1c7dbff1af9a3014d77f294787670c817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW5FBT4K%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1YV0TERaBuQRdTl%2Bjnj8%2BZEUmOev5r8OKEGeF8cIyMAIhAN6DnapqIzPC0%2BlsQK2jw3bikQ2CqvtdHwb3iAtCz%2BKHKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWkoXCg%2BTesWBbdQUq3APZAiChuirs9dwHMwT9Dch2KVFeY8b8ec6P1Nh5w8Z%2BU6MS368MzRXRArkfD0StGEdmkcGXw%2BliBCwmYukBhQIOf05SG4O73hW6ooXNItpcBTEhkvI%2F9kdCTQqqEhdOas9GjtghqavTYuV3uV0f4nduj7pbXjI4QpQZyvfr%2BZ1Ko42lW4rkjjPUWe9C44uIPdxxrU1WNFk%2BhGSoWct17DlBL3G15kg%2FcK%2BnRsDevYblRrV%2BlHGJdYwG7ob3Q3maOOEJGGj9N77BgnnCfUkMBIBu1RlWpJbCLCVMj89t%2BtSDxBYzxxtrh8G%2Bja5gJbS4DhRfMNC2F%2B00YjqGG2rn8XO53srdT4ojjT3q1NO4ANrCb2egVX%2BgtfYs1T8Zix8MKMFxxRAHW26Wz79EXVgwRjf6c9%2FYd9mOTqf0iwDLOsi1Be%2F3XW7tWTZUH%2Bom%2Bfaxyr0fVZ8B0Q2n%2BnsJVUVCHOK91QL3J4vx5%2Bc%2FqtVK5RtJOGeK4MKEMdU36g0aUPlglEnMWggWuVgwOqitTcIH1saZMYfRpBT1yZ1UB2dkH78kmIB1t69saFVDDc2eg%2BoJKd0waoW%2Fpo32xTSrIBF3USF5KkpsaVRYEmdaE%2BKp1%2BxvPbk7JZ%2FUNovLVsDdWDCQnpLDBjqkAdc0h4FA5khtB0842x3ClwpBWpxjNC22V%2BGQhWIyYSpN4OJL48lYWStHFvobetc96m1lnlwzlrat8Jx8DFqSdCVv%2FcG1zpClV35cGA%2FGDv8daw98LRCQ8yToeRM%2BjmyV1yBue%2F%2BZLlXta7lBtXVZh8g0lJpceC2Q2ZE6JU%2B8aizyKKFMICvNkP7g4wXm5xfRm%2FiDQ97nCHmXT7lAGNAX%2BZenddlr&X-Amz-Signature=0177e79e64a3fb22ef18476b89aa5416fd6d46793121cd549003d98f3dd21b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
