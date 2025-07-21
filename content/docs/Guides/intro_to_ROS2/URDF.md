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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4WTKYLX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4vyRIIsZT%2Bv8TfyxibhVBIxrMq3m%2BVYThNVLCImePgIhANEb6q3nVz1J%2FZxtOfmnJLiCxrsKynIWHuYMakGu550nKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMML1uZySjmf4aXX8q3AMedr%2F9ruJ8anwdkmE45kA9Yh2qCGlpI%2FZTEHy%2B6R9xdCnKPmHwCMkzqj3QwKK%2FkOtPwuRyzEiro7DiKytMME6r9r7GLjRRmoNJKALVON3w67ynkMUwS05SrkshWu1Lyy2OUSMXQYYFrSYSk1vDjMugdaCVpz5EcjKCeBE79LN9zJsSwA%2FeXyl6wCT5jkKwAfLIabmZnoeD%2FdfNlL8nYoNUDVb7YxNuKDAMufwQd5FFANDCOPyIE8ZCarBaVecjw8lgjASQpCvV73DcLl38dMf0kPcBk2EKGTKFEnPIdBPr4gW1k1cKWZBMJopUb8ZytF77ESM8CIt9Yx5zsU6Tu%2FJPHPqMDViKv%2F9vNcQgy8%2BORmJnlRPqDlZEoUAZCT0NG45NA%2BE5hD97TTMEhF1DkfZHl1MYV9SU86XrbO1Jd9SgFucD6CNI%2FAEEktSEYCRgekJbwuaVk76W%2BPZ%2BkMX6UA%2BoCRZXv5QCHcpk7sN1IAjiA5XpERLY%2FyIxD0E28GSqSiqmoTEGVae%2BYvaFTEEUnnEhwYEEE0wVZ83SDsbSYGGGrzmtKdWd69q6Lwn9CiAkjFdmiE4OTUWrJdgH24bZwydVJgPo92wNZ0cVkGRK2xxwDcvp0T%2BbgxV9TzxlEDCcsvrDBjqkAVBqL1ZHtV3JIWfP6r9f4UFQMacIVJ90Ylwo4S592I6Gb%2Fc%2B4YgwJkdImbp%2BWFJJFifXAzyBecDIzcegxVaxafbBAq6qS%2FgmQQYN29RlTEbt%2BiT54AH4N71EiWTBsRzTiyJU37GvsPV5mwyKhTGZxHdYDd%2FBgpOeAIs%2FMQ5PjpKQv%2FgUt9vpn3sPK0%2FAdt3j82FXZNWHnBJyVi8yb0CudzoMS3Ig&X-Amz-Signature=81dee82a0c79498c0e38e91da517f3eef35f5becf2cf38c5e98e91d0a58310cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4WTKYLX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4vyRIIsZT%2Bv8TfyxibhVBIxrMq3m%2BVYThNVLCImePgIhANEb6q3nVz1J%2FZxtOfmnJLiCxrsKynIWHuYMakGu550nKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMML1uZySjmf4aXX8q3AMedr%2F9ruJ8anwdkmE45kA9Yh2qCGlpI%2FZTEHy%2B6R9xdCnKPmHwCMkzqj3QwKK%2FkOtPwuRyzEiro7DiKytMME6r9r7GLjRRmoNJKALVON3w67ynkMUwS05SrkshWu1Lyy2OUSMXQYYFrSYSk1vDjMugdaCVpz5EcjKCeBE79LN9zJsSwA%2FeXyl6wCT5jkKwAfLIabmZnoeD%2FdfNlL8nYoNUDVb7YxNuKDAMufwQd5FFANDCOPyIE8ZCarBaVecjw8lgjASQpCvV73DcLl38dMf0kPcBk2EKGTKFEnPIdBPr4gW1k1cKWZBMJopUb8ZytF77ESM8CIt9Yx5zsU6Tu%2FJPHPqMDViKv%2F9vNcQgy8%2BORmJnlRPqDlZEoUAZCT0NG45NA%2BE5hD97TTMEhF1DkfZHl1MYV9SU86XrbO1Jd9SgFucD6CNI%2FAEEktSEYCRgekJbwuaVk76W%2BPZ%2BkMX6UA%2BoCRZXv5QCHcpk7sN1IAjiA5XpERLY%2FyIxD0E28GSqSiqmoTEGVae%2BYvaFTEEUnnEhwYEEE0wVZ83SDsbSYGGGrzmtKdWd69q6Lwn9CiAkjFdmiE4OTUWrJdgH24bZwydVJgPo92wNZ0cVkGRK2xxwDcvp0T%2BbgxV9TzxlEDCcsvrDBjqkAVBqL1ZHtV3JIWfP6r9f4UFQMacIVJ90Ylwo4S592I6Gb%2Fc%2B4YgwJkdImbp%2BWFJJFifXAzyBecDIzcegxVaxafbBAq6qS%2FgmQQYN29RlTEbt%2BiT54AH4N71EiWTBsRzTiyJU37GvsPV5mwyKhTGZxHdYDd%2FBgpOeAIs%2FMQ5PjpKQv%2FgUt9vpn3sPK0%2FAdt3j82FXZNWHnBJyVi8yb0CudzoMS3Ig&X-Amz-Signature=f64a746a8fb7bf6136fe71ede6bc1f22a5486816797a94b66d037804840fcf0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
