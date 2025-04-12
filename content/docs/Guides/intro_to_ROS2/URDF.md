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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFTHJ7N%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCyiMzAn%2F6R8BZ5oLzPqkB7WHnPziVr7%2BDbVCTJTHOESgIhAKZnRK3DZZwTtc38IdbvoXEktKyPKYJSUJjM%2BhqQAabPKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1gFZGiLqwS6JkW0Uq3AMGryhUdtp2Kl9GYiOQqWZMOlFb4o1c%2BGP8bNNp1HquNvwcE2bjxIl7YWajfn0Cic4V%2B3H%2B1RIUtnsG50wWxo0ydr7tzGsI7ilzbdYL%2BLNu5xwDDaMhziVQydxCnprDT2dv5oV7lvb7OxTVoHq6Bsb2RvAXrTcWOHaqe%2BZfZehJwGvaxZg5fMWlas8vMAqecsZzVMbjlwWR6NOTO8Vi3rcUb14g6q4Et5KB5goMJ%2B85XbWaBL6XtT17kAV2h0U%2BIri3%2B%2FY38%2Bpsx3xwYySkKYJ77ga%2BgfwbKMXYaxh5MmeXufHfF6LjBDiWrY4p%2FD4Hh9FYAoER8mxHS%2FrTnEy9uKi0gPFMBslVjZHPKv8GJkvk0%2BtR5GCYctXEQHjdDUFkvEeIIAjliqml6g6%2Be78S2XjSyuzr2oWJKr%2FmvTfbAND1QwmLPGAFmhCVT06W9gvglR2hIg4hiBL9M3k5UYegk2xYO75qrcJD4xc3W2h8LOrxhXVR0mcYERP472mCN6Bbwn7HOSKbGhyElRXtyCJcJ5jJqaUcH2ydWbZCbZx%2BokQp7jty%2FVFu1Xa1ASBAJn0mGK9rMcD9EQgFH1sPXqYLQQocq%2F4T2O%2FQppCw9zJoVP3%2BEZTkIJE2G8rFrKsZ8DC9w%2Bm%2FBjqkAXibXGV2kBb7Hw50kHzsorzvIhyLMkTSMYp7bK%2B94lAsohcjGU49fm4CYNvH5mqKiq00SxLN18Uep7PqILxevwddONLADo5%2BSZbc3FCok4MTxj4kkQcE2PtjewLd5n%2FR72AfXSgN0fR8COuHbMnUrCKaJE4b%2BFIG8oDRUnyeOwY43In4FtzQsBqCKgmGBetWrNLyeh51GWVo%2BAZ9uqs5aD5sJdB%2B&X-Amz-Signature=9dc08b076ea1572f647b97aa954f58ebb4b657c4616f07076926c60d5868c378&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFTHJ7N%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCyiMzAn%2F6R8BZ5oLzPqkB7WHnPziVr7%2BDbVCTJTHOESgIhAKZnRK3DZZwTtc38IdbvoXEktKyPKYJSUJjM%2BhqQAabPKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1gFZGiLqwS6JkW0Uq3AMGryhUdtp2Kl9GYiOQqWZMOlFb4o1c%2BGP8bNNp1HquNvwcE2bjxIl7YWajfn0Cic4V%2B3H%2B1RIUtnsG50wWxo0ydr7tzGsI7ilzbdYL%2BLNu5xwDDaMhziVQydxCnprDT2dv5oV7lvb7OxTVoHq6Bsb2RvAXrTcWOHaqe%2BZfZehJwGvaxZg5fMWlas8vMAqecsZzVMbjlwWR6NOTO8Vi3rcUb14g6q4Et5KB5goMJ%2B85XbWaBL6XtT17kAV2h0U%2BIri3%2B%2FY38%2Bpsx3xwYySkKYJ77ga%2BgfwbKMXYaxh5MmeXufHfF6LjBDiWrY4p%2FD4Hh9FYAoER8mxHS%2FrTnEy9uKi0gPFMBslVjZHPKv8GJkvk0%2BtR5GCYctXEQHjdDUFkvEeIIAjliqml6g6%2Be78S2XjSyuzr2oWJKr%2FmvTfbAND1QwmLPGAFmhCVT06W9gvglR2hIg4hiBL9M3k5UYegk2xYO75qrcJD4xc3W2h8LOrxhXVR0mcYERP472mCN6Bbwn7HOSKbGhyElRXtyCJcJ5jJqaUcH2ydWbZCbZx%2BokQp7jty%2FVFu1Xa1ASBAJn0mGK9rMcD9EQgFH1sPXqYLQQocq%2F4T2O%2FQppCw9zJoVP3%2BEZTkIJE2G8rFrKsZ8DC9w%2Bm%2FBjqkAXibXGV2kBb7Hw50kHzsorzvIhyLMkTSMYp7bK%2B94lAsohcjGU49fm4CYNvH5mqKiq00SxLN18Uep7PqILxevwddONLADo5%2BSZbc3FCok4MTxj4kkQcE2PtjewLd5n%2FR72AfXSgN0fR8COuHbMnUrCKaJE4b%2BFIG8oDRUnyeOwY43In4FtzQsBqCKgmGBetWrNLyeh51GWVo%2BAZ9uqs5aD5sJdB%2B&X-Amz-Signature=abc562515118684b9da65f7f1ff99215e0cc0ef9eb2e9a39b80c0824ce445682&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
